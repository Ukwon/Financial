const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  health: () => ipcRenderer.invoke("app:health"),

  wallets: {
    list: () => ipcRenderer.invoke("wallet:list"),
    create: (payload) => ipcRenderer.invoke("wallet:create", payload),
    delete: (payload) => ipcRenderer.invoke("wallet:delete", payload)
  },

  categories: {
    list: () => ipcRenderer.invoke("category:list")
  },

  tags: {
    list: (payload) => ipcRenderer.invoke("tag:list", payload),
    create: (payload) => ipcRenderer.invoke("tag:create", payload),
    update: (payload) => ipcRenderer.invoke("tag:update", payload),
    delete: (payload) => ipcRenderer.invoke("tag:delete", payload),
    dashboard: (payload) => ipcRenderer.invoke("tag:dashboard", payload),
    budgetList: (payload) => ipcRenderer.invoke("tag:budget:list", payload),
    budgetUpsert: (payload) => ipcRenderer.invoke("tag:budget:upsert", payload)
  },

  transactions: {
    list: (payload) => ipcRenderer.invoke("transaction:list", payload),
    create: (payload) => ipcRenderer.invoke("transaction:create", payload),
    update: (payload) => ipcRenderer.invoke("transaction:update", payload),
    delete: (payload) => ipcRenderer.invoke("transaction:delete", payload),
    setPaidStatus: (payload) => ipcRenderer.invoke("transaction:set-paid-status", payload)
  },

  history: {
    list: (payload) => ipcRenderer.invoke("history:list", payload)
  },

  plans: {
    list: (payload) => ipcRenderer.invoke("plan:list", payload),
    create: (payload) => ipcRenderer.invoke("plan:create", payload),
    update: (payload) => ipcRenderer.invoke("plan:update", payload),
    delete: (payload) => ipcRenderer.invoke("plan:delete", payload)
  },

  projections: {
    generate: (payload) => ipcRenderer.invoke("projection:generate", payload)
  },

  dashboard: {
    get: (payload) => ipcRenderer.invoke("dashboard:get", payload)
  },

  goals: {
    list: (payload) => ipcRenderer.invoke("goal:list", payload),
    create: (payload) => ipcRenderer.invoke("goal:create", payload),
    allocate: (payload) => ipcRenderer.invoke("goal:allocate", payload),
    update: (payload) => ipcRenderer.invoke("goal:update", payload),
    delete: (payload) => ipcRenderer.invoke("goal:delete", payload)
  },

  investments: {
    market: () => ipcRenderer.invoke("investments:market"),
    simulate: (payload) => ipcRenderer.invoke("investments:simulate", payload)
  },

  backup: {
    export: () => ipcRenderer.invoke("backup:export"),
    restore: () => ipcRenderer.invoke("backup:restore")
  }
});
