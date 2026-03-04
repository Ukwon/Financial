const path = require("path");
const fs = require("fs");
const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const { getPrisma, runMigrations, dbFilePath } = require("./db");
const { parseAppDate } = require("./dateUtils");
const {
  ensureWallet,
  seedCategories,
  generatePlanOccurrences,
  buildDashboard,
  buildTagDashboard
} = require("./financialService");
const { getMarketSnapshot, simulateInvestment } = require("./investmentsService");

const isDev = !app.isPackaged;
app.setAppUserModelId("com.financial.desktop");

function startupLog(message) {
  try {
    const base = app.getPath("userData");
    const logPath = path.join(base, "startup.log");
    fs.appendFileSync(logPath, `[${new Date().toISOString()}] ${message}\n`);
  } catch (_) {
    // no-op
  }
}

function createWindow() {
  const iconIcoPath = path.join(__dirname, "..", "assets", "app-icon.ico");
  const iconPngPath = path.join(__dirname, "..", "assets", "app-icon.png");
  const iconPath = fs.existsSync(iconIcoPath) ? iconIcoPath : iconPngPath;
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 1024,
    minHeight: 720,
    icon: fs.existsSync(iconPath) ? iconPath : undefined,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js")
    }
  });

  if (isDev) {
    win.loadURL("http://localhost:5173").catch((error) => {
      startupLog(`loadURL error: ${error?.stack || error}`);
    });
  } else {
    const indexPath = path.join(__dirname, "..", "renderer", "dist", "index.html");
    startupLog(`loading file: ${indexPath}`);
    win.loadFile(indexPath).catch((error) => {
      startupLog(`loadFile error: ${error?.stack || error}`);
    });
  }

  win.webContents.on("did-fail-load", (_, code, desc, url) => {
    startupLog(`did-fail-load code=${code} desc=${desc} url=${url}`);
  });
  win.webContents.on("render-process-gone", (_, details) => {
    startupLog(`render-process-gone reason=${details?.reason || "unknown"} code=${details?.exitCode ?? ""}`);
  });
  win.on("closed", () => startupLog("window closed"));
}

function toDate(value) {
  return parseAppDate(value);
}

function backupFileName() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `financial-backup-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}.json`;
}

async function collectBackupData(prisma) {
  const [
    wallets,
    categories,
    tags,
    tagBudgets,
    plans,
    planOccurrences,
    planTags,
    transactions,
    transactionTags,
    goals,
    goalAllocations
  ] = await Promise.all([
    prisma.wallet.findMany(),
    prisma.category.findMany(),
    prisma.tag.findMany(),
    prisma.monthlyTagBudget.findMany(),
    prisma.plan.findMany(),
    prisma.planOccurrence.findMany(),
    prisma.planTag ? prisma.planTag.findMany() : Promise.resolve([]),
    prisma.transaction.findMany(),
    prisma.transactionTag.findMany(),
    prisma.goal.findMany(),
    prisma.goalAllocation.findMany()
  ]);

  return {
    app: "financial",
    version: 1,
    exportedAt: new Date().toISOString(),
    data: {
      wallets,
      categories,
      tags,
      tagBudgets,
      plans,
      planOccurrences,
      planTags,
      transactions,
      transactionTags,
      goals,
      goalAllocations
    }
  };
}

async function restoreBackupData(prisma, payload) {
  const data = payload?.data || {};
  const wallets = Array.isArray(data.wallets) ? data.wallets : [];
  const categories = Array.isArray(data.categories) ? data.categories : [];
  const tags = Array.isArray(data.tags) ? data.tags : [];
  const tagBudgets = Array.isArray(data.tagBudgets) ? data.tagBudgets : [];
  const plans = Array.isArray(data.plans) ? data.plans : [];
  const planOccurrences = Array.isArray(data.planOccurrences) ? data.planOccurrences : [];
  const planTags = Array.isArray(data.planTags) ? data.planTags : [];
  const transactions = Array.isArray(data.transactions) ? data.transactions : [];
  const transactionTags = Array.isArray(data.transactionTags) ? data.transactionTags : [];
  const goals = Array.isArray(data.goals) ? data.goals : [];
  const goalAllocations = Array.isArray(data.goalAllocations) ? data.goalAllocations : [];

  await prisma.$transaction(async (tx) => {
    await tx.goalAllocation.deleteMany({});
    await tx.transactionTag.deleteMany({});
    if (tx.planTag) await tx.planTag.deleteMany({});
    await tx.planOccurrence.deleteMany({});
    await tx.transaction.deleteMany({});
    await tx.plan.deleteMany({});
    await tx.goal.deleteMany({});
    await tx.monthlyTagBudget.deleteMany({});
    await tx.tag.deleteMany({});
    await tx.category.deleteMany({});
    await tx.wallet.deleteMany({});

    if (wallets.length) {
      await tx.wallet.createMany({
        data: wallets.map((w) => ({ id: w.id, name: w.name, description: w.description || null }))
      });
    }
    if (categories.length) {
      await tx.category.createMany({
        data: categories.map((c) => ({ id: c.id, name: c.name, kind: c.kind }))
      });
    }
    if (tags.length) {
      await tx.tag.createMany({
        data: tags.map((t) => ({
          id: t.id,
          walletId: t.walletId,
          name: t.name,
          color: t.color || "#38bdf8",
          isArchived: !!t.isArchived
        }))
      });
    }
    if (plans.length) {
      await tx.plan.createMany({
        data: plans.map((p) => ({
          id: p.id,
          walletId: p.walletId,
          categoryId: p.categoryId || null,
          type: p.type,
          transactionType: p.transactionType,
          description: p.description || null,
          amountCents: Number(p.amountCents || 0),
          startDate: toDate(p.startDate) || new Date(),
          endDate: toDate(p.endDate),
          intervalValue: Number(p.intervalValue || 1),
          recurrenceUnit: p.recurrenceUnit || null,
          installments: p.installments || null,
          isActive: p.isActive !== false
        }))
      });
    }
    if (planOccurrences.length) {
      await tx.planOccurrence.createMany({
        data: planOccurrences.map((o) => ({
          id: o.id,
          planId: o.planId,
          dueDate: toDate(o.dueDate) || new Date(),
          amountCents: Number(o.amountCents || 0),
          isGenerated: !!o.isGenerated
        }))
      });
    }
    if (planTags.length && tx.planTag) {
      await tx.planTag.createMany({
        data: planTags.map((pt) => ({ planId: pt.planId, tagId: pt.tagId }))
      });
    }
    if (transactions.length) {
      await tx.transaction.createMany({
        data: transactions.map((t) => ({
          id: t.id,
          walletId: t.walletId,
          categoryId: t.categoryId || null,
          type: t.type,
          description: t.description || null,
          amountCents: Number(t.amountCents || 0),
          dueDate: toDate(t.dueDate) || new Date(),
          paidAt: toDate(t.paidAt),
          sourcePlanId: t.sourcePlanId || null,
          installmentIndex: t.installmentIndex || null,
          installmentTotal: t.installmentTotal || null
        }))
      });
    }
    if (transactionTags.length) {
      await tx.transactionTag.createMany({
        data: transactionTags.map((tt) => ({ transactionId: tt.transactionId, tagId: tt.tagId }))
      });
    }
    if (goals.length) {
      await tx.goal.createMany({
        data: goals.map((g) => ({
          id: g.id,
          walletId: g.walletId,
          name: g.name,
          targetCents: Number(g.targetCents || 0),
          participantCount: Math.max(1, Number(g.participantCount || 1)),
          targetDate: toDate(g.targetDate)
        }))
      });
    }
    if (goalAllocations.length) {
      await tx.goalAllocation.createMany({
        data: goalAllocations.map((ga) => ({
          id: ga.id,
          goalId: ga.goalId,
          transactionId: ga.transactionId || null,
          amountCents: Number(ga.amountCents || 0),
          allocatedAt: toDate(ga.allocatedAt) || new Date(),
          note: ga.note || null
        }))
      });
    }
    if (tagBudgets.length) {
      await tx.monthlyTagBudget.createMany({
        data: tagBudgets.map((tb) => ({
          id: tb.id,
          walletId: tb.walletId,
          tagId: tb.tagId,
          monthKey: tb.monthKey || "GLOBAL",
          limitCents: Number(tb.limitCents || 0)
        }))
      });
    }
  });

  await ensureWallet(prisma);
  await seedCategories(prisma);
  await generatePlanOccurrences(prisma, 24, 24);
}

function validateBackupPayload(payload) {
  if (!payload || typeof payload !== "object") {
    throw new Error("Arquivo de backup inválido.");
  }
  if (payload.app !== "financial") {
    throw new Error("Este backup não pertence ao aplicativo Financial.");
  }
  if (payload.version !== 1) {
    throw new Error("Versão de backup não suportada.");
  }
  if (!payload.data || typeof payload.data !== "object") {
    throw new Error("Estrutura de backup inválida.");
  }
  const requiredArrays = [
    "wallets",
    "categories",
    "tags",
    "tagBudgets",
    "plans",
    "planOccurrences",
    "transactions",
    "transactionTags",
    "goals",
    "goalAllocations"
  ];
  for (const key of requiredArrays) {
    if (!Array.isArray(payload.data[key])) {
      throw new Error(`Backup inválido: campo '${key}' ausente ou mal formatado.`);
    }
  }
}

async function registerIpc() {
  const prisma = await getPrisma();

  ipcMain.handle("app:health", async () => ({
    ok: true,
    dbFile: dbFilePath()
  }));

  ipcMain.handle("backup:export", async () => {
    const backup = await collectBackupData(prisma);
    const saveResult = await dialog.showSaveDialog({
      title: "Salvar backup",
      defaultPath: path.join(app.getPath("documents"), backupFileName()),
      filters: [{ name: "Arquivo JSON", extensions: ["json"] }]
    });
    if (saveResult.canceled || !saveResult.filePath) return { canceled: true };
    await fs.promises.writeFile(saveResult.filePath, JSON.stringify(backup, null, 2), "utf8");
    return { canceled: false, filePath: saveResult.filePath };
  });

  ipcMain.handle("backup:restore", async () => {
    const openResult = await dialog.showOpenDialog({
      title: "Selecionar backup",
      properties: ["openFile"],
      filters: [{ name: "Arquivo JSON", extensions: ["json"] }]
    });
    if (openResult.canceled || !openResult.filePaths?.[0]) return { canceled: true };
    const filePath = openResult.filePaths[0];
    const raw = await fs.promises.readFile(filePath, "utf8");
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (_error) {
      throw new Error("Arquivo inválido: JSON mal formatado.");
    }
    validateBackupPayload(parsed);
    await restoreBackupData(prisma, parsed);
    return { canceled: false, filePath };
  });

  ipcMain.handle("wallet:list", async () =>
    prisma.wallet.findMany({ orderBy: { createdAt: "asc" } })
  );

  ipcMain.handle("wallet:create", async (_, payload) => {
    const name = String(payload?.name || "").trim();
    if (!name) throw new Error("Nome da carteira é obrigatório.");

    const existing = await prisma.wallet.findMany({ select: { name: true } });
    const normalized = name.toLocaleLowerCase("pt-BR");
    const duplicated = existing.some((item) => String(item.name || "").trim().toLocaleLowerCase("pt-BR") === normalized);
    if (duplicated) throw new Error("Já existe uma carteira com esse nome.");

    return prisma.wallet.create({
      data: {
        name,
        description: payload.description || null
      }
    });
  });

  ipcMain.handle("wallet:delete", async (_, payload) => {
    const id = String(payload?.id || "").trim();
    if (!id) throw new Error("Carteira inválida.");

    const count = await prisma.wallet.count();
    if (count <= 1) {
      throw new Error("Não é possível excluir a última carteira.");
    }

    return prisma.wallet.delete({ where: { id } });
  });

  ipcMain.handle("category:list", async () =>
    prisma.category.findMany({ orderBy: [{ kind: "asc" }, { name: "asc" }] })
  );

  ipcMain.handle("tag:list", async (_, payload = {}) =>
    prisma.tag.findMany({
      where: {
        walletId: payload.walletId || undefined,
        isArchived: payload.includeArchived ? undefined : false
      },
      orderBy: [{ isArchived: "asc" }, { name: "asc" }]
    })
  );

  ipcMain.handle("tag:create", async (_, payload) => {
    const walletId = String(payload?.walletId || "").trim();
    const name = String(payload?.name || "").trim();
    const color = String(payload?.color || "#38bdf8").trim() || "#38bdf8";
    if (!walletId) throw new Error("Carteira inválida.");
    if (!name) throw new Error("Nome da tag é obrigatório.");
    const existing = await prisma.tag.findMany({ where: { walletId }, select: { name: true } });
    const normalized = name.toLocaleLowerCase("pt-BR");
    const duplicated = existing.some((item) => String(item.name || "").trim().toLocaleLowerCase("pt-BR") === normalized);
    if (duplicated) throw new Error("Já existe uma tag com esse nome.");
    return prisma.tag.create({
      data: { walletId, name, color }
    });
  });

  ipcMain.handle("tag:update", async (_, payload) => {
    const id = String(payload?.id || "").trim();
    if (!id) throw new Error("Tag inválida.");
    if (payload.name !== undefined) {
      const current = await prisma.tag.findUnique({ where: { id }, select: { walletId: true } });
      if (!current) throw new Error("Tag não encontrada.");
      const name = String(payload.name || "").trim();
      if (!name) throw new Error("Nome da tag é obrigatório.");
      const existing = await prisma.tag.findMany({
        where: { walletId: current.walletId, id: { not: id } },
        select: { name: true }
      });
      const normalized = name.toLocaleLowerCase("pt-BR");
      const duplicated = existing.some((item) => String(item.name || "").trim().toLocaleLowerCase("pt-BR") === normalized);
      if (duplicated) throw new Error("Já existe uma tag com esse nome.");
    }
    return prisma.tag.update({
      where: { id },
      data: {
        name: payload.name !== undefined ? String(payload.name).trim() : undefined,
        color: payload.color !== undefined ? String(payload.color).trim() : undefined,
        isArchived: payload.isArchived !== undefined ? !!payload.isArchived : undefined
      }
    });
  });

  ipcMain.handle("tag:delete", async (_, payload) => {
    const id = String(payload?.id || "").trim();
    if (!id) throw new Error("Tag inválida.");
    return prisma.tag.delete({ where: { id } });
  });

  ipcMain.handle("tag:budget:list", async (_, payload = {}) =>
    prisma.monthlyTagBudget.findMany({
      where: {
        walletId: payload.walletId || undefined,
        monthKey: payload.monthKey || "GLOBAL"
      },
      include: { tag: true },
      orderBy: { createdAt: "desc" }
    })
  );

  ipcMain.handle("tag:budget:upsert", async (_, payload) => {
    const walletId = String(payload?.walletId || "").trim();
    const tagId = String(payload?.tagId || "").trim();
    const monthKey = "GLOBAL";
    const limit = Number(payload?.limit || 0);
    if (!walletId || !tagId) throw new Error("Dados de orçamento inválidos.");
    return prisma.monthlyTagBudget.upsert({
      where: { walletId_tagId_monthKey: { walletId, tagId, monthKey } },
      update: { limitCents: Math.round(limit * 100) },
      create: { walletId, tagId, monthKey, limitCents: Math.round(limit * 100) }
    });
  });

  ipcMain.handle("tag:dashboard", async (_, payload = {}) =>
    buildTagDashboard(prisma, payload.walletId || null, payload.monthKey || null)
  );

  ipcMain.handle("transaction:list", async (_, payload = {}) => {
    const and = [];
    if (payload.type) and.push({ type: payload.type });
    if (payload.categoryId) and.push({ categoryId: payload.categoryId });
    if (payload.search) and.push({ description: { contains: payload.search } });
    if (payload.tagId) and.push({ tags: { some: { tagId: payload.tagId } } });
    if (payload.fromDate || payload.toDate) {
      and.push({
        dueDate: {
          gte: payload.fromDate ? toDate(payload.fromDate) : undefined,
          lte: payload.toDate ? toDate(payload.toDate) : undefined
        }
      });
    }
    if (payload.paidStatus === "PAID") and.push({ paidAt: { not: null } });
    if (payload.paidStatus === "PENDING") and.push({ paidAt: null });

    return prisma.transaction.findMany({
      where: {
        walletId: payload.walletId || undefined,
        AND: and
      },
      include: { category: true, wallet: true, tags: { include: { tag: true } } },
      orderBy: [{ dueDate: "desc" }, { createdAt: "desc" }],
      take: payload.limit || 300
    });
  });

  ipcMain.handle("transaction:create", async (_, payload) => {
    const created = await prisma.$transaction(async (tx) => {
      const txCreated = await tx.transaction.create({
        data: {
          walletId: payload.walletId,
          categoryId: payload.categoryId || null,
          type: payload.type,
          description: payload.description || null,
          amountCents: Math.round(Number(payload.amount) * 100),
          dueDate: toDate(payload.dueDate) || new Date(),
          paidAt: toDate(payload.paidAt),
          sourcePlanId: payload.sourcePlanId || null,
          installmentIndex: payload.installmentIndex || null,
          installmentTotal: payload.installmentTotal || null
        }
      });
      const tagIds = Array.isArray(payload.tagIds) ? [...new Set(payload.tagIds.map(String))].filter(Boolean) : [];
      if (tagIds.length) {
        await tx.transactionTag.createMany({
          data: tagIds.map((tagId) => ({ transactionId: txCreated.id, tagId }))
        });
      }
      return txCreated;
    });
    return prisma.transaction.findUnique({
      where: { id: created.id },
      include: { category: true, wallet: true, tags: { include: { tag: true } } }
    });
  });

  ipcMain.handle("transaction:update", async (_, payload) => {
    const updated = await prisma.$transaction(async (tx) => {
      const txUpdated = await tx.transaction.update({
        where: { id: payload.id },
        data: {
          categoryId: payload.categoryId || null,
          type: payload.type,
          description: payload.description || null,
          amountCents: Math.round(Number(payload.amount) * 100),
          dueDate: toDate(payload.dueDate) || new Date(),
          paidAt: toDate(payload.paidAt)
        }
      });
      if (Array.isArray(payload.tagIds)) {
        await tx.transactionTag.deleteMany({ where: { transactionId: payload.id } });
        const tagIds = [...new Set(payload.tagIds.map(String))].filter(Boolean);
        if (tagIds.length) {
          await tx.transactionTag.createMany({
            data: tagIds.map((tagId) => ({ transactionId: payload.id, tagId }))
          });
        }
      }
      return txUpdated;
    });
    return prisma.transaction.findUnique({
      where: { id: updated.id },
      include: { category: true, wallet: true, tags: { include: { tag: true } } }
    });
  });

  ipcMain.handle("transaction:delete", async (_, payload) =>
    prisma.transaction.delete({
      where: { id: payload.id }
    })
  );

  ipcMain.handle("transaction:set-paid-status", async (_, payload) =>
    prisma.transaction.update({
      where: { id: payload.id },
      data: { paidAt: payload.paid ? new Date() : null },
      include: { category: true, wallet: true }
    })
  );

  ipcMain.handle("plan:list", async (_, payload = {}) => {
    try {
      return await prisma.plan.findMany({
        where: { walletId: payload.walletId || undefined },
        include: { occurrences: true, tags: { include: { tag: true } } },
        orderBy: { createdAt: "desc" }
      });
    } catch (_error) {
      const plans = await prisma.plan.findMany({
        where: { walletId: payload.walletId || undefined },
        include: { occurrences: true },
        orderBy: { createdAt: "desc" }
      });
      return plans.map((p) => ({ ...p, tags: [] }));
    }
  });

  ipcMain.handle("plan:create", async (_, payload) => {
    const tagIds = Array.isArray(payload.tagIds) ? [...new Set(payload.tagIds.map(String))].filter(Boolean) : [];
    const created = await prisma.$transaction(async (tx) => {
      const plan = await tx.plan.create({
        data: {
          walletId: payload.walletId,
          categoryId: payload.categoryId || null,
          type: payload.type,
          transactionType: payload.transactionType,
          description: payload.description || null,
          amountCents: Math.round(Number(payload.amount) * 100),
          startDate: toDate(payload.startDate) || new Date(),
          endDate: toDate(payload.endDate),
          intervalValue: payload.intervalValue || 1,
          recurrenceUnit: payload.recurrenceUnit || null,
          installments: payload.installments || null
        }
      });
      if (tagIds.length && tx.planTag) {
        await tx.planTag.createMany({
          data: tagIds.map((tagId) => ({ planId: plan.id, tagId }))
        });
      }
      try {
        return await tx.plan.findUnique({
          where: { id: plan.id },
          include: { occurrences: true, tags: { include: { tag: true } } }
        });
      } catch (_error) {
        const plain = await tx.plan.findUnique({
          where: { id: plan.id },
          include: { occurrences: true }
        });
        return { ...plain, tags: [] };
      }
    });
    await generatePlanOccurrences(prisma, 24);
    return created;
  });

  ipcMain.handle("plan:update", async (_, payload) => {
    const updated = await prisma.$transaction(async (tx) => {
      const tagIds = Array.isArray(payload.tagIds) ? [...new Set(payload.tagIds.map(String))].filter(Boolean) : null;
      const plan = await tx.plan.update({
        where: { id: payload.id },
        data: {
          categoryId: payload.categoryId || null,
          type: payload.type,
          transactionType: payload.transactionType,
          description: payload.description || null,
          amountCents: Math.round(Number(payload.amount) * 100),
          startDate: toDate(payload.startDate) || new Date(),
          endDate: toDate(payload.endDate),
          intervalValue: payload.intervalValue || 1,
          recurrenceUnit: payload.recurrenceUnit || null,
          installments: payload.installments || null,
          isActive: payload.isActive ?? true
        }
      });
      if (tagIds && tx.planTag) {
        await tx.planTag.deleteMany({ where: { planId: payload.id } });
        if (tagIds.length) {
          await tx.planTag.createMany({
            data: tagIds.map((tagId) => ({ planId: payload.id, tagId }))
          });
        }
      }
      await tx.planOccurrence.deleteMany({ where: { planId: payload.id } });
      try {
        return await tx.plan.findUnique({
          where: { id: plan.id },
          include: { occurrences: true, tags: { include: { tag: true } } }
        });
      } catch (_error) {
        const plain = await tx.plan.findUnique({
          where: { id: plan.id },
          include: { occurrences: true }
        });
        return { ...plain, tags: [] };
      }
    });
    await generatePlanOccurrences(prisma, 24);
    return updated;
  });

  ipcMain.handle("plan:delete", async (_, payload) => {
    const deleted = await prisma.plan.delete({
      where: { id: payload.id }
    });
    await generatePlanOccurrences(prisma, 24);
    return deleted;
  });

  ipcMain.handle("projection:generate", async (_, payload = {}) => {
    const monthsAhead = payload.monthsAhead || 12;
    await generatePlanOccurrences(prisma, monthsAhead);
    return { ok: true };
  });

  ipcMain.handle("dashboard:get", async (_, payload = {}) => {
    const monthsAhead = payload.monthsAhead || 12;
    const monthsBack = payload.monthsBack ?? 24;
    await generatePlanOccurrences(prisma, monthsAhead, monthsBack);
    return buildDashboard(
      prisma,
      monthsAhead,
      payload.walletId || null,
      payload.tagId || null,
      payload.startMonthKey || null
    );
  });

  ipcMain.handle("goal:list", async (_, payload = {}) =>
    prisma.goal.findMany({
      where: { walletId: payload.walletId || undefined },
      include: { allocations: true },
      orderBy: { createdAt: "desc" }
    })
  );

  ipcMain.handle("goal:create", async (_, payload) =>
    prisma.goal.create({
      data: {
        walletId: payload.walletId,
        name: payload.name,
        targetCents: Math.round(Number(payload.target) * 100),
        participantCount: Math.max(1, Number(payload.participantCount || 1)),
        targetDate: toDate(payload.targetDate)
      }
    })
  );

  ipcMain.handle("goal:allocate", async (_, payload) =>
    prisma.goalAllocation.create({
      data: {
        goalId: payload.goalId,
        transactionId: payload.transactionId || null,
        amountCents: Math.round(Number(payload.amount) * 100),
        note: payload.note || null
      }
    })
  );

  ipcMain.handle("goal:update", async (_, payload) =>
    prisma.goal.update({
      where: { id: payload.id },
      data: {
        name: payload.name,
        targetCents: Math.round(Number(payload.target) * 100),
        participantCount: Math.max(1, Number(payload.participantCount || 1)),
        targetDate: toDate(payload.targetDate)
      }
    })
  );

  ipcMain.handle("goal:delete", async (_, payload) =>
    prisma.goal.delete({
      where: { id: payload.id }
    })
  );

  ipcMain.handle("investments:market", async () => getMarketSnapshot());

  ipcMain.handle("investments:simulate", async (_, payload) => simulateInvestment(payload));
}

app.whenReady()
  .then(async () => {
    startupLog(`app.whenReady (packaged=${app.isPackaged})`);
    await runMigrations();
    startupLog("runMigrations ok");
    const prisma = await getPrisma();
    startupLog("getPrisma ok");
    await ensureWallet(prisma);
    await seedCategories(prisma);
    await registerIpc();
    startupLog("registerIpc ok");
    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  })
  .catch((error) => {
    startupLog(`startup fatal: ${error?.stack || error}`);
    console.error("Failed to start app:", error);
    app.quit();
  });

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
