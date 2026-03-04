const fs = require("fs");
const path = require("path");
const pngToIco = require("png-to-ico");

async function main() {
  const pngPath = path.join(__dirname, "..", "assets", "app-icon.png");
  const icoPath = path.join(__dirname, "..", "assets", "app-icon.ico");
  const buildDir = path.join(__dirname, "..", "build");
  const buildIcoPath = path.join(buildDir, "icon.ico");
  const buildPngPath = path.join(buildDir, "icon.png");

  if (!fs.existsSync(pngPath)) {
    throw new Error(`Icone PNG nao encontrado em: ${pngPath}`);
  }

  fs.mkdirSync(buildDir, { recursive: true });
  const buffer = await pngToIco(pngPath);
  fs.writeFileSync(icoPath, buffer);
  fs.writeFileSync(buildIcoPath, buffer);
  fs.copyFileSync(pngPath, buildPngPath);
  process.stdout.write(`Icone ICO gerado em ${icoPath}\n`);
  process.stdout.write(`Icone de build gerado em ${buildIcoPath}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
