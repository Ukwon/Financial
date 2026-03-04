# Financial

App desktop de financas pessoais 100% local (offline-first), sem servidor.

## Visao geral

O Financial foi pensado para organizar a vida financeira mensal com foco em:

- transacoes reais (receitas e despesas)
- fixos mensais
- planos recorrentes e parcelados
- metas com aportes e participacao por pessoa
- projecao futura com limite de gasto seguro
- simulador de investimentos
- tags para classificacao de gastos
- backup e restore local

## Stack

- Electron (main + preload)
- React + Vite (renderer)
- Prisma + SQLite (arquivo `.db` local)
- TailwindCSS + Recharts

## Arquitetura

- Renderer: interface React
- Preload: API segura via `window.api`
- Main: regras, IPC e persistencia
- Fluxo: `React -> window.api -> IPC -> Main -> Prisma/SQLite`

## Requisitos

- Node.js 20+
- npm 10+
- Windows 10/11

## Desenvolvimento local

```bash
npm install
npm run prisma:generate
npm run dev
```

## Build de producao

```bash
npm run build
```

## Gerar instalador Windows

```bash
npm run dist:win
```

Arquivos gerados:

- `release/Financial Setup 0.1.0.exe`
- `release/win-unpacked/`

## Banco local

- Banco: SQLite
- Local do arquivo: `app.getPath("userData")/financial.db`
- Migrations: aplicadas na inicializacao do app

## Backup e restore

- No app, abra Configuracoes (icone de engrenagem).
- `Exportar`: gera um arquivo JSON com os dados.
- `Restaurar`: substitui os dados atuais pelos dados do backup selecionado.

## Scripts principais

- `npm run dev`: Vite + Electron em paralelo
- `npm run build:renderer`: build apenas do front
- `npm run build`: renderer + prisma generate + icone
- `npm run dist:win`: build + instalador NSIS
- `npm run pack:win`: build + versao portable
- `npm run test`: testes Node
- `npm run prisma:migrate`: migration em desenvolvimento
- `npm run prisma:deploy`: aplicar migrations existentes

## Estrutura resumida

- `main/`: processo principal, IPC, regras e servicos
- `renderer/`: interface React
- `prisma/`: schema e migrations
- `generated/prisma-client/`: client Prisma gerado
- `assets/`: icones e arquivos estaticos
- `release/`: artefatos de build/instalacao

## Modelo de dados (resumo)

- `Wallet`: carteiras
- `Tag`: tags por carteira
- `MonthlyTagBudget`: orcamento por tag
- `Transaction`: lancamentos reais
- `Plan`: regras de recorrencia/parcelamento
- `PlanOccurrence`: ocorrencias futuras
- `Goal`: metas financeiras
- `GoalAllocation`: aportes e retiradas em metas

## Publicacao no GitHub (manual)

1. Commit e push do codigo no repositorio.
2. Criar uma release (ex.: `v0.1.0`).
3. Anexar o instalador:
   - `release/Financial Setup 0.1.0.exe`
4. Opcional: anexar tambem:
   - `release/Financial Setup 0.1.0.exe.blockmap`

## Licenca

Definir.
