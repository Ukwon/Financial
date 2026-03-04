const path = require("path");
const { app } = require("electron");
const { mkdirSync, existsSync, readdirSync, readFileSync } = require("fs");

let prismaInstance = null;

function dbFilePath() {
  const dataDir = app.getPath("userData");
  mkdirSync(dataDir, { recursive: true });
  return path.join(dataDir, "financial.db");
}

function dbUrl() {
  return `file:${dbFilePath().replace(/\\/g, "/")}`;
}

async function getPrisma() {
  if (prismaInstance) return prismaInstance;
  process.env.DATABASE_URL = dbUrl();
  const { PrismaClient } = require("../generated/prisma-client/index.js");
  prismaInstance = new PrismaClient();
  return prismaInstance;
}

async function runMigrations() {
  const prisma = await getPrisma();
  const migrationsPath = path.join(__dirname, "..", "prisma", "migrations");
  if (!existsSync(migrationsPath)) return;

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "_financial_migrations" (
      "name" TEXT NOT NULL PRIMARY KEY,
      "appliedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const appliedRows = await prisma.$queryRawUnsafe(`SELECT "name" FROM "_financial_migrations"`);
  const applied = new Set((appliedRows || []).map((row) => row.name));

  const migrationDirs = readdirSync(migrationsPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  // Baseline for users that already had a DB created before this internal migration tracker.
  // If Wallet exists and no tracked migrations are present, assume current schema already applied.
  const walletTable = await prisma.$queryRawUnsafe(
    `SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'Wallet' LIMIT 1`
  );
  if (Array.isArray(walletTable) && walletTable.length > 0 && applied.size === 0) {
    for (const migrationName of migrationDirs) {
      await prisma.$executeRawUnsafe(
        `INSERT OR IGNORE INTO "_financial_migrations" ("name", "appliedAt") VALUES (?, ?)`,
        migrationName,
        new Date().toISOString()
      );
    }
    return;
  }

  for (const migrationName of migrationDirs) {
    if (applied.has(migrationName)) continue;

    const sqlPath = path.join(migrationsPath, migrationName, "migration.sql");
    if (!existsSync(sqlPath)) continue;

    const sql = readFileSync(sqlPath, "utf8");
    const statements = splitSqlStatements(sql);

    await prisma.$transaction(async (tx) => {
      for (const statement of statements) {
        await tx.$executeRawUnsafe(statement);
      }
      await tx.$executeRawUnsafe(
        `INSERT INTO "_financial_migrations" ("name", "appliedAt") VALUES (?, ?)`,
        migrationName,
        new Date().toISOString()
      );
    });
  }
}

function splitSqlStatements(sql) {
  const statements = [];
  let current = "";
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let inLineComment = false;
  let inBlockComment = false;

  for (let i = 0; i < sql.length; i += 1) {
    const char = sql[i];
    const next = i + 1 < sql.length ? sql[i + 1] : "";

    if (inLineComment) {
      current += char;
      if (char === "\n") inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      current += char;
      if (char === "*" && next === "/") {
        current += "/";
        i += 1;
        inBlockComment = false;
      }
      continue;
    }

    if (!inSingleQuote && !inDoubleQuote && char === "-" && next === "-") {
      inLineComment = true;
      current += "--";
      i += 1;
      continue;
    }

    if (!inSingleQuote && !inDoubleQuote && char === "/" && next === "*") {
      inBlockComment = true;
      current += "/*";
      i += 1;
      continue;
    }

    if (char === "'" && !inDoubleQuote) {
      inSingleQuote = !inSingleQuote;
      current += char;
      continue;
    }

    if (char === '"' && !inSingleQuote) {
      inDoubleQuote = !inDoubleQuote;
      current += char;
      continue;
    }

    if (char === ";" && !inSingleQuote && !inDoubleQuote) {
      const trimmed = current.trim();
      if (trimmed) statements.push(trimmed);
      current = "";
      continue;
    }

    current += char;
  }

  const tail = current.trim();
  if (tail) statements.push(tail);
  return statements;
}

module.exports = {
  getPrisma,
  runMigrations,
  dbFilePath
};
