import { useEffect, useMemo, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Cell } from "recharts";

const money = (v) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v || 0);
const dateInput = (v) => (v ? new Date(v).toISOString().slice(0, 10) : "");
const moneyInput = (v) => new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v || 0);
const parseMoneyInput = (text) => {
  const digits = String(text || "").replace(/\D/g, "");
  if (!digits) return 0;
  return Number(digits) / 100;
};
const parseSignedFlexibleMoney = (text) => {
  const raw = String(text || "").trim();
  if (!raw) return 0;
  const normalized = raw.replace(/\s/g, "").replace(/\./g, "").replace(",", ".");
  const value = Number(normalized);
  return Number.isFinite(value) ? value : 0;
};
const maskMoneyInput = (text) => {
  const digits = String(text || "").replace(/\D/g, "");
  if (!digits) return "";
  return moneyInput(Number(digits) / 100);
};
const monthRange = () => {
  const d = new Date();
  return {
    fromDate: dateInput(new Date(d.getFullYear(), d.getMonth(), 1)),
    toDate: dateInput(new Date(d.getFullYear(), d.getMonth() + 1, 0))
  };
};
const historyPeriodRange = (period) => {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (period === "LAST_30_DAYS") {
    const from = new Date(end);
    from.setDate(from.getDate() - 29);
    return { fromDate: dateInput(from), toDate: dateInput(end) };
  }
  if (period === "LAST_90_DAYS") {
    const from = new Date(end);
    from.setDate(from.getDate() - 89);
    return { fromDate: dateInput(from), toDate: dateInput(end) };
  }
  if (period === "YEAR_TO_DATE") {
    return { fromDate: dateInput(new Date(now.getFullYear(), 0, 1)), toDate: dateInput(end) };
  }
  if (period === "THIS_MONTH") {
    return monthRange();
  }
  return { fromDate: "", toDate: "" };
};
const currentMonthKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
};
const monthBoundsFromKey = (key) => {
  const [year, month] = key.split("-").map(Number);
  return {
    fromDate: dateInput(new Date(year, month - 1, 1)),
    toDate: dateInput(new Date(year, month, 0))
  };
};
const shiftMonthKey = (key, delta) => {
  const [year, month] = key.split("-").map(Number);
  const d = new Date(year, month - 1 + delta, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
};
const monthName = (key) => {
  const [year, month] = key.split("-").map(Number);
  return new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(new Date(year, month - 1, 1));
};
const monthDateFromKey = (key) => {
  const [year, month] = key.split("-").map(Number);
  return new Date(year, month - 1, 1);
};
const listMonthKeys = (fromKey, toKey) => {
  const start = monthDateFromKey(fromKey);
  const end = monthDateFromKey(toKey);
  const out = [];
  const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
  while (cursor <= end) {
    out.push(`${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}`);
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return out;
};
const currentMonthInput = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
};
const buildDateFromMonthAndDay = (monthInput, day) => {
  const [year, month] = monthInput.split("-").map(Number);
  const maxDay = new Date(year, month, 0).getDate();
  const safeDay = Math.max(1, Math.min(Number(day || 1), maxDay));
  return dateInput(new Date(year, month - 1, safeDay));
};
const instrumentDataTypeLabel = (type) => {
  if (type === "base_oficial_com_estimativa") return "Base oficial + estimativa";
  return "Cenário";
};
const chartSeriesLabels = {
  balance: "Saldo",
  income: "Receitas",
  expense: "Despesas",
  value: "Patrimônio",
  contribution: "Aporte",
  interest: "Juros",
  accumulated: "Acumulado",
  amount: "Valor"
};
const tagPalette = ["#38bdf8", "#34d399", "#f59e0b", "#a78bfa", "#fb7185", "#22c55e", "#f97316", "#eab308"];
const randomTagColor = () => tagPalette[Math.floor(Math.random() * tagPalette.length)];
const tooltipValueFormatter = (value, key) => {
  if (typeof value !== "number") return value;
  if (key === "months") return String(value);
  return money(value);
};
const datePartsUTC = (dateValue) => {
  const d = new Date(dateValue);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate()
  };
};
const monthInputFromDate = (dateValue) => {
  const p = datePartsUTC(dateValue);
  return `${p.year}-${String(p.month).padStart(2, "0")}`;
};

function goalMetrics(goal) {
  const target = goal.targetCents || 0;
  const participants = Math.max(1, Number(goal.participantCount || 1));
  const initialAmount = Number(goal.initialAmountCents || 0);
  const personalContributions = (goal.allocations || []).reduce((sum, item) => sum + (item.amountCents || 0), 0);
  const allocated = initialAmount + personalContributions;
  const remaining = Math.max(target - allocated, 0);
  const personalTarget = Math.round(target / participants);
  const personalAllocated = Math.round(initialAmount / participants) + personalContributions;
  const personalRemaining = Math.max(personalTarget - personalAllocated, 0);
  const progress = target > 0 ? Math.min(100, (allocated / target) * 100) : 0;
  let projectedDate = null;

  if (!projectedDate && remaining === 0 && allocated > 0) projectedDate = new Date();
  if (!projectedDate && goal.allocations?.length > 0) {
    const sorted = [...goal.allocations].sort((a, b) => new Date(a.allocatedAt) - new Date(b.allocatedAt));
    const first = new Date(sorted[0].allocatedAt);
    const months = Math.max((new Date() - first) / (1000 * 60 * 60 * 24 * 30), 1);
    const avgMonthly = allocated / months;
    if (avgMonthly > 0) {
      const eta = new Date();
      eta.setDate(eta.getDate() + Math.ceil((remaining / avgMonthly) * 30));
      projectedDate = eta;
    }
  }
  return { target, allocated, remaining, personalTarget, personalAllocated, personalRemaining, participants, progress, projectedDate };
}

function monthKey(dateValue) {
  if (typeof dateValue === "string" && /^\d{4}-\d{2}-\d{2}/.test(dateValue)) {
    return dateValue.slice(0, 7);
  }
  const d = new Date(dateValue);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function monthLabel(key) {
  const [y, m] = key.split("-");
  return `${m}/${y}`;
}

function monthsUntilDeadline(targetDate) {
  if (!targetDate) return 0;
  const now = new Date();
  const from = new Date(now.getFullYear(), now.getMonth(), 1);
  const to = new Date(new Date(targetDate).getFullYear(), new Date(targetDate).getMonth(), 1);
  if (to < from) return 0;
  return (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + 1;
}

function scoreTier(score) {
  if (score >= 90) return "Excelência";
  if (score >= 70) return "Evoluindo";
  if (score >= 40) return "Estável";
  return "Atenção";
}

function goalContributionPlan(goal) {
  const byMonth = new Map();
  for (const item of goal.allocations || []) {
    const key = monthKey(item.allocatedAt);
    byMonth.set(key, (byMonth.get(key) || 0) + (item.amountCents || 0));
  }
  const history = [...byMonth.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, cents]) => ({ key, label: monthLabel(key), cents }));

  const metrics = goalMetrics(goal);
  const monthsLeft = monthsUntilDeadline(goal.targetDate);
  const requiredMonthlyCentsTotal = monthsLeft > 0 ? Math.ceil(metrics.remaining / monthsLeft) : metrics.remaining;
  const requiredMonthlyCentsPersonal = monthsLeft > 0 ? Math.ceil(metrics.personalRemaining / monthsLeft) : metrics.personalRemaining;
  return { history, monthsLeft, requiredMonthlyCentsTotal, requiredMonthlyCentsPersonal };
}

function scheduledModeFromPlan(plan) {
  if (plan?.type === "INSTALLMENT") return "INSTALLMENT";
  if (
    plan?.type === "RECURRING" &&
    (plan?.recurrenceUnit || "MONTHLY") === "MONTHLY" &&
    Number(plan?.intervalValue || 1) === 1 &&
    !plan?.endDate
  ) {
    return "FIXED";
  }
  return "RECURRING_PERIOD";
}

function scheduledPlanLabel(plan) {
  const mode = scheduledModeFromPlan(plan);
  if (mode === "FIXED") return "Fixo mensal";
  if (mode === "INSTALLMENT") return "Parcelado";
  return "Recorrente por período";
}

const tabs = [
  { id: "dashboard", label: "Principal" },
  { id: "projection", label: "Projeção" },
  { id: "transactions", label: "Transações" },
  { id: "fixed", label: "Programado" },
  { id: "goals", label: "Metas" },
  { id: "investments", label: "Investimentos" }
];

const formHelpBySection = {
  projection: {
    title: "Aba Projeção",
    text: "Simula seu resultado futuro até a data escolhida, incluindo receitas, despesas fixas, planos e metas. Use para entender limite de gasto seguro."
  },
  transactions: {
    title: "Aba Transações",
    text: "Registra entradas e saídas reais do dia a dia. Esses lançamentos alimentam os gráficos, o saldo mensal e o histórico financeiro."
  },
  plans: {
    title: "Aba Planos",
    text: "Cadastra lançamentos recorrentes e parcelados para gerar ocorrências futuras automaticamente e melhorar a previsão dos próximos meses."
  },
  fixed: {
    title: "Aba Fixos",
    text: "Centraliza lançamentos programados: fixos mensais, parcelados e recorrentes por período. Os campos mudam conforme o tipo escolhido."
  },
  goals: {
    title: "Aba Metas",
    text: "Cria objetivos financeiros com prazo e valor-alvo. Os aportes viram lançamentos e impactam saldo disponível e projeções."
  },
  investments: {
    title: "Aba Investimentos",
    text: "Simula evolução do patrimônio investido com aporte inicial, aporte mensal e prazo, comparando cenários por tipo de investimento."
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [wallets, setWallets] = useState([]);
  const [tags, setTags] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [plans, setPlans] = useState([]);
  const [goals, setGoals] = useState([]);
  const [dashboard, setDashboard] = useState({ totals: {}, monthly: [] });
  const [projection, setProjection] = useState({
    summary: { income: 0, expense: 0, balance: 0, finalBalance: 0, goalsPlanned: 0 },
    monthly: []
  });
  const [investmentMarket, setInvestmentMarket] = useState({ rates: null, instruments: [], source: null, updatedAt: null });
  const [investmentForm, setInvestmentForm] = useState({
    instrumentId: "tesouro_selic",
    initialAmount: "",
    monthlyContribution: "",
    targetDate: (() => {
      const d = new Date();
      d.setFullYear(d.getFullYear() + 5);
      return dateInput(d);
    })()
  });
  const [investmentSim, setInvestmentSim] = useState({
    summary: { investedTotal: 0, finalValue: 0, earnings: 0, annualRate: 0, months: 0 },
    monthly: []
  });
  const [showInvestmentHelp, setShowInvestmentHelp] = useState(false);
  const [formHelpModal, setFormHelpModal] = useState(null);
  const [showAboutBadgeModal, setShowAboutBadgeModal] = useState(false);
  const [showAchievements, setShowAchievements] = useState(true);
  const [walletId, setWalletId] = useState("");
  const [newWalletName, setNewWalletName] = useState("");
  const [actionBusy, setActionBusy] = useState({});
  const [showNewWalletForm, setShowNewWalletForm] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentMonthKey());
  const [scheduledMode, setScheduledMode] = useState("FIXED");
  const [projectionDate, setProjectionDate] = useState(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + 12);
    return dateInput(d);
  });
  const [projectionWarning, setProjectionWarning] = useState("");
  const [showTransactionsHistory, setShowTransactionsHistory] = useState(false);
  const [showNewTransactionForm, setShowNewTransactionForm] = useState(true);
  const [showScheduledForm, setShowScheduledForm] = useState(true);
  const [transactionsHistory, setTransactionsHistory] = useState([]);
  const [transactionsHistoryFilters, setTransactionsHistoryFilters] = useState({
    search: "",
    type: "",
    tagId: "",
    period: "THIS_MONTH",
    ...historyPeriodRange("THIS_MONTH")
  });
  const [notice, setNotice] = useState("");
  const [noticeType, setNoticeType] = useState("success");

  const [filters, setFilters] = useState({ search: "", type: "", tagId: "", paidStatus: "", ...monthRange() });
  const [txForm, setTxForm] = useState({ type: "EXPENSE", amount: "", description: "", dueDate: dateInput(new Date()), settlementDueDate: "", tagIds: [] });
  const [tagDashboard, setTagDashboard] = useState({ topTags: [], insight: "", budgets: [] });
  const [tagBudgetForm, setTagBudgetForm] = useState({ tagId: "", limit: "" });
  const [showTagBudgetForm, setShowTagBudgetForm] = useState(false);
  const [tagCreateModal, setTagCreateModal] = useState({ open: false, target: null, name: "" });
  const [tagEditModal, setTagEditModal] = useState({ open: false, target: null, id: "", name: "" });
  const [tagDeleteModal, setTagDeleteModal] = useState({ open: false, target: null, id: "", name: "" });
  const [planForm, setPlanForm] = useState({
    type: "RECURRING",
    transactionType: "EXPENSE",
    amount: "",
    description: "",
    startDate: dateInput(new Date()),
    endDate: "",
    recurrenceUnit: "MONTHLY",
    intervalValue: 1,
    installments: 10,
    tagIds: []
  });
  const [fixedForm, setFixedForm] = useState({
    transactionType: "EXPENSE",
    amount: "",
    description: "",
    dueDay: "10",
    startMonth: currentMonthInput(),
    tagIds: []
  });
  const [goalForm, setGoalForm] = useState({ name: "", target: "", initialAmount: "", participantCount: "1", targetDate: "" });
  const [goalContribution, setGoalContribution] = useState({});
  const [editTx, setEditTx] = useState(null);
  const [editGoal, setEditGoal] = useState(null);
  const [editFixed, setEditFixed] = useState(null);
  const [confirmAction, setConfirmAction] = useState(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const activeTags = useMemo(() => tags.filter((t) => !t.isArchived), [tags]);
  const selectedTagBudget = useMemo(
    () => (tagDashboard.budgets || []).find((b) => b.tagId === tagBudgetForm.tagId) || null,
    [tagDashboard.budgets, tagBudgetForm.tagId]
  );
  const fixedPlans = useMemo(
    () => plans.filter((p) => p.type === "RECURRING" && (p.recurrenceUnit || "MONTHLY") === "MONTHLY"),
    [plans]
  );
  const scheduledPlans = useMemo(() => plans || [], [plans]);
  const selectedMonthProjection = useMemo(
    () => dashboard.monthly.find((m) => m.month === selectedMonth) || { income: 0, expense: 0, balance: 0 },
    [dashboard.monthly, selectedMonth]
  );
  const dashboardChartMonthly = useMemo(() => {
    const rows = Array.isArray(dashboard.monthly) ? dashboard.monthly : [];
    if (!rows.length) return [];
    const firstIdx = rows.findIndex((m) => Number(m.income || 0) !== 0 || Number(m.expense || 0) !== 0);
    if (firstIdx === -1) return rows.slice(-1);
    if (firstIdx === 0) return rows;
    return rows.slice(firstIdx);
  }, [dashboard.monthly]);
  const currentWallet = useMemo(
    () => wallets.find((w) => w.id === walletId) || null,
    [wallets, walletId]
  );
  const expenseStats = useMemo(() => {
    const now = new Date();
    const in7 = new Date();
    in7.setDate(now.getDate() + 7);
    let pending = 0;
    let overdue = 0;
    let dueSoon = 0;
    for (const t of transactions) {
      if (t.type !== "EXPENSE" || t.paidAt) continue;
      pending += t.amountCents;
      const dueReference = t.settlementDueDate ? new Date(t.settlementDueDate) : null;
      if (!dueReference) continue;
      const due = dueReference;
      if (due < now) overdue += t.amountCents;
      if (due >= now && due <= in7) dueSoon += t.amountCents;
    }
    return { pending: pending / 100, overdue: overdue / 100, dueSoon: dueSoon / 100 };
  }, [transactions]);
  const projectionSpendStats = useMemo(() => {
    const list = projection.monthly || [];
    if (!list.length) return { month: currentMonthKey(), monthSafeRemaining: 0, fixedMonthlySafe: 0, goalsCurrentMonth: 0 };
    const currentKey = currentMonthKey();
    const idx = list.findIndex((m) => m.month === currentKey);
    const safeIdx = idx >= 0 ? idx : 0;
    const row = list[safeIdx];
    const fromFocusedMonth = list.slice(safeIdx);
    const minAccumFromMonth = fromFocusedMonth.reduce(
      (min, m) => Math.min(min, Number(m.accumulated || 0)),
      Number.POSITIVE_INFINITY
    );
    const fixedMonthlySafe = list.reduce((min, m, i) => {
      const months = i + 1;
      const possible = Number(m.accumulated || 0) / months;
      return Math.min(min, possible);
    }, Number.POSITIVE_INFINITY);
    const goalsCurrentMonth = Number(row.goalsPlanned || 0);
    return {
      month: row.month,
      monthSafeRemaining: Math.max(0, Number(minAccumFromMonth)),
      fixedMonthlySafe: Math.max(0, Number(fixedMonthlySafe)),
      goalsCurrentMonth: Math.max(0, Number(goalsCurrentMonth.toFixed(2)))
    };
  }, [projection.monthly]);
  const achievementState = useMemo(() => {
    const selectedGoalAllocCentsPersonal = (goals || []).reduce((sum, goal) => {
      const monthCents = (goal.allocations || [])
        .filter((a) => monthKey(a.allocatedAt) === selectedMonth)
        .reduce((acc, a) => acc + (a.amountCents || 0), 0);
      return sum + monthCents;
    }, 0);

    const requiredGoalCentsPersonal = (goals || []).reduce((sum, goal) => {
      if (!goal.targetDate) return sum;
      const m = goalMetrics(goal);
      const monthsLeft = monthsUntilDeadline(goal.targetDate);
      if (!monthsLeft || m.personalRemaining <= 0) return sum;
      return sum + Math.ceil(m.personalRemaining / monthsLeft);
    }, 0);

    const safeLimit = Number(projectionSpendStats.fixedMonthlySafe || 0);
    const currentExpense = Number(selectedMonthProjection.expense || 0);
    const streak = (() => {
      const rows = (dashboard.monthly || []).filter((m) => m.month <= selectedMonth).sort((a, b) => a.month.localeCompare(b.month));
      let count = 0;
      for (let i = rows.length - 1; i >= 0; i -= 1) {
        if (Number(rows[i].balance || 0) >= 0) count += 1;
        else break;
      }
      return count;
    })();

    const badges = [
      {
        id: "on_time",
        title: "Contas em dia",
        subtitle: "Nenhuma despesa atrasada no mês",
        achieved: Number(expenseStats.overdue || 0) <= 0,
        progress: Number(expenseStats.overdue || 0) <= 0 ? 100 : 0
      },
      {
        id: "green",
        title: "No verde",
        subtitle: "Saldo mensal não negativo",
        achieved: Number(selectedMonthProjection.balance || 0) >= 0,
        progress: Number(selectedMonthProjection.balance || 0) >= 0 ? 100 : 0
      },
      {
        id: "safe_limit",
        title: "Limite seguro",
        subtitle: "Gasto abaixo do limite mensal seguro",
        achieved: safeLimit > 0 ? currentExpense <= safeLimit : false,
        progress: safeLimit > 0 ? Math.max(0, Math.min(100, currentExpense <= safeLimit ? 100 : 100 - ((currentExpense - safeLimit) / safeLimit) * 100)) : 0
      },
      {
        id: "goals_commitment",
        title: "Compromisso com metas",
        subtitle: "Aporte do mês dentro da meta planejada",
        achieved: requiredGoalCentsPersonal > 0 ? selectedGoalAllocCentsPersonal >= requiredGoalCentsPersonal : true,
        progress: requiredGoalCentsPersonal > 0 ? Math.max(0, Math.min(100, (selectedGoalAllocCentsPersonal / requiredGoalCentsPersonal) * 100)) : 100
      },
      {
        id: "consistency",
        title: "Consistência",
        subtitle: "3 meses seguidos sem saldo negativo",
        achieved: streak >= 3,
        progress: Math.max(0, Math.min(100, (streak / 3) * 100))
      }
    ];

    const score = Math.round(badges.reduce((acc, b) => acc + Number(b.progress || 0), 0) / badges.length);
    const pending = badges.find((b) => !b.achieved);
    return {
      score,
      tier: scoreTier(score),
      badges,
      hint: pending ? `Próximo selo: ${pending.title}` : "Todos os selos do mês conquistados."
    };
  }, [
    goals,
    selectedMonth,
    projectionSpendStats.fixedMonthlySafe,
    selectedMonthProjection.expense,
    selectedMonthProjection.balance,
    expenseStats.overdue,
    dashboard.monthly
  ]);
  const selectedInstrument = useMemo(
    () => (investmentMarket.instruments || []).find((i) => i.id === investmentForm.instrumentId) || null,
    [investmentMarket.instruments, investmentForm.instrumentId]
  );

  const load = async (id = walletId, f = filters) => {
    if (!id) return;
    const txTagId = f.tagId || undefined;
    const [tx, dash, pl, gl, tg, tgDash] = await Promise.all([
      window.api.transactions.list({ walletId: id, limit: 300, ...f, tagId: txTagId }),
      window.api.dashboard.get({ walletId: id, monthsAhead: 12, monthsBack: 24, startMonthKey: selectedMonth }),
      window.api.plans.list({ walletId: id }),
      window.api.goals.list({ walletId: id }),
      window.api.tags.list({ walletId: id, includeArchived: true }),
      window.api.tags.dashboard({ walletId: id, monthKey: selectedMonth })
    ]);
    setTransactions(tx);
    setDashboard(dash);
    setPlans(pl);
    setGoals(gl);
    setTags(tg || []);
    setTagDashboard(tgDash || { topTags: [], insight: "", budgets: [] });
    await loadProjection(id, projectionDate);
  };

  async function loadProjection(id = walletId, targetDate = projectionDate) {
    if (!id || !targetDate) return;
    const now = new Date();
    const target = new Date(targetDate);
    const nowMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const targetMonthStart = new Date(target.getFullYear(), target.getMonth(), 1);
    if (targetMonthStart < nowMonthStart) {
      setProjectionWarning("A data-alvo está no passado. Selecione o mês atual ou um mês futuro.");
      setProjection({
        summary: { income: 0, expense: 0, balance: 0, finalBalance: 0, goalsPlanned: 0 },
        monthly: []
      });
      return;
    }
    setProjectionWarning("");
    const monthsAhead = Math.max(0, (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth()));
    const dash = await window.api.dashboard.get({ walletId: id, monthsAhead: monthsAhead + 1 });
    const targetKey = monthKey(targetDate);
    const nowKey = currentMonthKey();
    const keys = listMonthKeys(nowKey, targetKey);
    const monthlyMap = new Map();
    for (const key of keys) {
      monthlyMap.set(key, { month: key, income: 0, expense: 0, balance: 0, goalsPlanned: 0 });
    }
    for (const item of dash.monthly || []) {
      if (item.month >= nowKey && item.month <= targetKey) {
        monthlyMap.set(item.month, { ...monthlyMap.get(item.month), ...item, goalsPlanned: Number(item.goalsPlanned || 0) });
      }
    }

    const monthly = [...monthlyMap.values()].sort((a, b) => a.month.localeCompare(b.month));

    const firstWithAccum = monthly.find((m) => Number.isFinite(m.accumulated));
    const openingBalance = firstWithAccum ? Number(firstWithAccum.accumulated || 0) - Number(firstWithAccum.balance || 0) : 0;
    let cumulative = openingBalance;
    const monthlyWithAccum = monthly.map((m) => {
      cumulative += m.balance || 0;
      return { ...m, accumulated: Number(cumulative.toFixed(2)) };
    });
    const summary = monthly.reduce(
      (acc, m) => {
        acc.income += m.income || 0;
        acc.expense += m.expense || 0;
        acc.balance += m.balance || 0;
        acc.goalsPlanned += m.goalsPlanned || 0;
        return acc;
      }, 
      { income: 0, expense: 0, balance: 0, finalBalance: 0, goalsPlanned: 0 }
    );
    summary.income = Number(summary.income.toFixed(2));
    summary.expense = Number(summary.expense.toFixed(2));
    summary.balance = Number(summary.balance.toFixed(2));
    summary.finalBalance = Number(cumulative.toFixed(2));
    summary.goalsPlanned = Number(summary.goalsPlanned.toFixed(2));

    setProjection({ summary, monthly: monthlyWithAccum });
  }

  async function loadTransactionsHistory(id = walletId, customFilters = transactionsHistoryFilters) {
    if (!id) return;
    const rows = await window.api.history.list({
      walletId: id,
      search: customFilters.search || undefined,
      type: customFilters.type || undefined,
      tagId: customFilters.tagId || undefined,
      fromDate: customFilters.fromDate || undefined,
      toDate: customFilters.toDate || undefined,
      limit: 1200
    });
    setTransactionsHistory(rows || []);
  }

  async function loadInvestmentsMarket() {
    try {
      const market = await window.api.investments.market();
      setInvestmentMarket(market || { rates: null, instruments: [], source: null, updatedAt: null });
      if (market?.instruments?.length) {
        setInvestmentForm((prev) => {
          if (market.instruments.some((item) => item.id === prev.instrumentId)) return prev;
          return { ...prev, instrumentId: market.instruments[0].id };
        });
      }
    } catch (_e) {
      setInvestmentMarket({ rates: null, instruments: [], source: null, updatedAt: null });
    }
  }

  async function simulateInvestments() {
    if (!selectedInstrument) return;
    const payload = {
      annualRate: selectedInstrument.rateAnnual,
      initialAmount: parseMoneyInput(investmentForm.initialAmount),
      monthlyContribution: parseMoneyInput(investmentForm.monthlyContribution),
      targetDate: investmentForm.targetDate
    };
    const result = await window.api.investments.simulate(payload);
    setInvestmentSim(result);
  }

  function openFormHelp(sectionKey) {
    const info = formHelpBySection[sectionKey];
    if (!info) return;
    setFormHelpModal(info);
  }

  async function runWithNoticeError(errorMessage, action) {
    try {
      await action();
      return true;
    } catch (error) {
      console.error(errorMessage, error);
      const raw = String(error?.message || "").trim();
      const cleaned = raw.replace(/^Error invoking remote method '[^']+':\s*/i, "");
      const userMessage = cleaned.replace(/^Error:\s*/i, "").trim();
      setNoticeType("error");
      setNotice(userMessage || errorMessage);
      return false;
    }
  }

  function showSuccess(message) {
    setNoticeType("success");
    setNotice(message);
  }

  async function runAction(key, errorMessage, action) {
    if (actionBusy[key]) return false;
    setActionBusy((prev) => ({ ...prev, [key]: true }));
    try {
      return await runWithNoticeError(errorMessage, action);
    } finally {
      setActionBusy((prev) => ({ ...prev, [key]: false }));
    }
  }

  useEffect(() => {
    (async () => {
      const w = await window.api.wallets.list();
      setWallets(w);
      if (w[0]) setWalletId(w[0].id);
    })();
    loadInvestmentsMarket();
  }, []);

  useEffect(() => {
    load(walletId, filters);
  }, [walletId, filters, selectedMonth]);

  useEffect(() => {
    const bounds = monthBoundsFromKey(selectedMonth);
    setFilters((p) => ({ ...p, fromDate: bounds.fromDate, toDate: bounds.toDate }));
  }, [selectedMonth]);

  useEffect(() => {
    loadProjection(walletId, projectionDate);
  }, [walletId, projectionDate]);

  useEffect(() => {
    if (transactionsHistoryFilters.period === "CUSTOM") return;
    const range = historyPeriodRange(transactionsHistoryFilters.period);
    setTransactionsHistoryFilters((prev) => ({ ...prev, ...range }));
  }, [transactionsHistoryFilters.period]);

  useEffect(() => {
    if (!showTransactionsHistory || activeTab !== "transactions" || !walletId) return;
    loadTransactionsHistory(walletId, transactionsHistoryFilters);
  }, [showTransactionsHistory, walletId, transactionsHistoryFilters, activeTab]);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 3200);
    return () => clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    if (!selectedInstrument) return;
    simulateInvestments();
  }, [selectedInstrument, investmentForm.targetDate, investmentForm.initialAmount, investmentForm.monthlyContribution]);

  useEffect(() => {
    if (!activeTags.length) {
      setTagBudgetForm({ tagId: "", limit: "" });
      return;
    }
    setTagBudgetForm((prev) => {
      if (prev.tagId && activeTags.some((t) => t.id === prev.tagId)) return prev;
      const firstId = activeTags[0]?.id || "";
      const budget = (tagDashboard.budgets || []).find((b) => b.tagId === firstId);
      return { tagId: firstId, limit: budget ? moneyInput(budget.limit) : "" };
    });
  }, [activeTags, tagDashboard.budgets]);

  async function createTx(e) {
    e.preventDefault();
    if (!walletId || !txForm.amount) return;
    const ok = await runAction("createTx", "Erro ao criar transação.", async () => {
      await window.api.transactions.create({
        ...txForm,
        walletId,
        amount: parseMoneyInput(txForm.amount),
        tagIds: txForm.tagIds || []
      });
    });
    if (!ok) return;
    setTxForm((p) => ({ ...p, amount: "", description: "", settlementDueDate: "", tagIds: [] }));
    showSuccess("Transação criada.");
    load();
  }

  function handleBudgetTagChange(tagId) {
    const budget = (tagDashboard.budgets || []).find((b) => b.tagId === tagId);
    setTagBudgetForm({ tagId, limit: budget ? moneyInput(budget.limit) : "" });
  }

  async function saveTagBudget(e) {
    e.preventDefault();
    if (!walletId || !tagBudgetForm.tagId || !tagBudgetForm.limit) return;
    const limit = parseMoneyInput(tagBudgetForm.limit);
    if (limit <= 0) {
      setNoticeType("error");
      setNotice("Informe um valor maior que zero para o orçamento.");
      return;
    }
    const ok = await runAction("saveTagBudget", "Erro ao salvar orçamento da tag.", async () => {
      await window.api.tags.budgetUpsert({
        walletId,
        tagId: tagBudgetForm.tagId,
        limit
      });
      const tgDash = await window.api.tags.dashboard({ walletId, monthKey: selectedMonth });
      setTagDashboard(tgDash || { topTags: [], insight: "", budgets: [] });
    });
    if (!ok) return;
    showSuccess("Orçamento da tag salvo.");
  }

  async function createWallet() {
    const name = (newWalletName || "").trim();
    if (!name) return;
    const ok = await runAction("createWallet", "Erro ao criar carteira.", async () => {
      const created = await window.api.wallets.create({ name });
      const list = await window.api.wallets.list();
      setWallets(list || []);
      setWalletId(created?.id || "");
      setNewWalletName("");
      setShowNewWalletForm(false);
      showSuccess("Carteira criada.");
    });
    if (!ok) return;
  }

  async function deleteWallet(id) {
    if (!id) return;
    const ok = await runAction("deleteWallet", "Erro ao excluir carteira.", async () => {
      await window.api.wallets.delete({ id });
      const list = await window.api.wallets.list();
      setWallets(list || []);
      if (list?.length) setWalletId(list[0].id);
      showSuccess("Carteira excluída.");
    });
    if (!ok) return;
  }

  async function createTagQuick(name, onCreated) {
    const trimmed = String(name || "").trim();
    if (!walletId || !trimmed) return null;
    let createdTag = null;
    const ok = await runAction("createTag", "Erro ao criar tag.", async () => {
      createdTag = await window.api.tags.create({
        walletId,
        name: trimmed,
        color: randomTagColor()
      });
      const list = await window.api.tags.list({ walletId, includeArchived: true });
      setTags(list || []);
      showSuccess("Tag criada.");
    });
    if (!ok) return null;
    if (onCreated && createdTag) onCreated(createdTag);
    return createdTag;
  }

  function addTagToTarget(target, tagId) {
    if (!tagId) return;
    if (target === "tx") setTxForm((prev) => ({ ...prev, tagIds: [...new Set([...(prev.tagIds || []), tagId])] }));
    if (target === "edit") setEditTx((prev) => (prev ? { ...prev, tagIds: [...new Set([...(prev.tagIds || []), tagId])] } : prev));
    if (target === "plan") setPlanForm((prev) => ({ ...prev, tagIds: [...new Set([...(prev.tagIds || []), tagId])] }));
    if (target === "fixed") setFixedForm((prev) => ({ ...prev, tagIds: [...new Set([...(prev.tagIds || []), tagId])] }));
    if (target === "fixedEdit") setEditFixed((prev) => (prev ? { ...prev, tagIds: [...new Set([...(prev.tagIds || []), tagId])] } : prev));
  }

  function removeTagFromTarget(target, tagId) {
    if (target === "tx") setTxForm((prev) => ({ ...prev, tagIds: (prev.tagIds || []).filter((id) => id !== tagId) }));
    if (target === "edit") setEditTx((prev) => (prev ? { ...prev, tagIds: (prev.tagIds || []).filter((id) => id !== tagId) } : prev));
    if (target === "plan") setPlanForm((prev) => ({ ...prev, tagIds: (prev.tagIds || []).filter((id) => id !== tagId) }));
    if (target === "fixed") setFixedForm((prev) => ({ ...prev, tagIds: (prev.tagIds || []).filter((id) => id !== tagId) }));
    if (target === "fixedEdit") setEditFixed((prev) => (prev ? { ...prev, tagIds: (prev.tagIds || []).filter((id) => id !== tagId) } : prev));
  }

  function selectedTagIdsForTarget(target) {
    if (target === "tx") return txForm.tagIds || [];
    if (target === "edit") return editTx?.tagIds || [];
    if (target === "plan") return planForm.tagIds || [];
    if (target === "fixed") return fixedForm.tagIds || [];
    if (target === "fixedEdit") return editFixed?.tagIds || [];
    return [];
  }

  function handleTagSelect(target, value) {
    if (!value) return;
    if (value === "__create_tag__") {
      setTagCreateModal({ open: true, target, name: "" });
      return;
    }
    addTagToTarget(target, value);
  }

  async function submitCreateTagModal(e) {
    e.preventDefault();
    if (!tagCreateModal.open) return;
    const created = await createTagQuick(tagCreateModal.name);
    if (!created?.id) return;
    addTagToTarget(tagCreateModal.target, created.id);
    setTagCreateModal({ open: false, target: null, name: "" });
  }

  function openEditTagModal(target, tag) {
    if (!tag?.id) return;
    setTagEditModal({ open: true, target, id: tag.id, name: tag.name || "" });
  }

  function openDeleteTagModal(target, tag) {
    if (!tag?.id) return;
    setTagDeleteModal({ open: true, target, id: tag.id, name: tag.name || "" });
  }

  async function submitEditTagModal(e) {
    e.preventDefault();
    if (!tagEditModal.open || !tagEditModal.id) return;
    const ok = await runAction("updateTag", "Erro ao atualizar tag.", async () => {
      await window.api.tags.update({ id: tagEditModal.id, name: String(tagEditModal.name || "").trim() });
      const list = await window.api.tags.list({ walletId, includeArchived: true });
      setTags(list || []);
      showSuccess("Tag atualizada.");
    });
    if (!ok) return;
    setTagEditModal({ open: false, target: null, id: "", name: "" });
  }

  async function confirmDeleteTagModal() {
    if (!tagDeleteModal.open || !tagDeleteModal.id) return;
    const tagId = tagDeleteModal.id;
    const ok = await runAction("deleteTag", "Erro ao excluir tag.", async () => {
      await window.api.tags.delete({ id: tagId });
      const list = await window.api.tags.list({ walletId, includeArchived: true });
      setTags(list || []);
      removeTagFromTarget("tx", tagId);
      removeTagFromTarget("edit", tagId);
      removeTagFromTarget("plan", tagId);
      removeTagFromTarget("fixed", tagId);
      removeTagFromTarget("fixedEdit", tagId);
      showSuccess("Tag excluída.");
    });
    if (!ok) return;
    setTagDeleteModal({ open: false, target: null, id: "", name: "" });
  }

  async function createPlan(e) {
    e.preventDefault();
    if (!walletId || !planForm.amount) return;
    const ok = await runAction("createPlan", "Erro ao criar plano.", async () => {
      await window.api.plans.create({
        ...planForm,
        walletId,
        amount: parseMoneyInput(planForm.amount),
        endDate: planForm.type === "RECURRING" ? (planForm.endDate || null) : null,
        intervalValue: Number(planForm.intervalValue || 1),
        installments: planForm.type === "INSTALLMENT" ? Number(planForm.installments) : null,
        recurrenceUnit: planForm.type === "RECURRING" ? planForm.recurrenceUnit : null,
        tagIds: planForm.tagIds || []
      });
    });
    if (!ok) return;
    setPlanForm((p) => ({ ...p, amount: "", description: "", endDate: "", intervalValue: 1, tagIds: [] }));
    showSuccess(planForm.type === "INSTALLMENT" ? "Parcelado criado." : "Recorrente criado.");
    load();
  }

  async function createFixed(e) {
    e.preventDefault();
    if (!walletId || !fixedForm.amount) return;
    const firstDueDate = buildDateFromMonthAndDay(fixedForm.startMonth, fixedForm.dueDay);
    const ok = await runAction("createFixed", "Erro ao criar lançamento fixo.", async () => {
      await window.api.plans.create({
        walletId,
        type: "RECURRING",
        transactionType: fixedForm.transactionType,
        amount: parseMoneyInput(fixedForm.amount),
        description: fixedForm.description,
        startDate: firstDueDate,
        intervalValue: 1,
        recurrenceUnit: "MONTHLY",
        tagIds: fixedForm.tagIds || []
      });
    });
    if (!ok) return;
    setFixedForm((p) => ({ ...p, amount: "", description: "", tagIds: [] }));
    showSuccess("Lançamento fixo criado.");
    load();
  }

  async function createScheduled(e) {
    if (scheduledMode === "FIXED") return createFixed(e);
    e.preventDefault();
    if (!walletId || !planForm.amount) return;
    const type = scheduledMode === "INSTALLMENT" ? "INSTALLMENT" : "RECURRING";
    if (type === "INSTALLMENT" && Number(planForm.installments || 0) < 1) {
      setNoticeType("error");
      setNotice("Informe uma quantidade válida de parcelas.");
      return;
    }
    if (type === "RECURRING" && !planForm.endDate) {
      setNoticeType("error");
      setNotice("Informe a data final da recorrência.");
      return;
    }
    if (type === "RECURRING" && new Date(planForm.endDate) < new Date(planForm.startDate)) {
      setNoticeType("error");
      setNotice("A data final deve ser igual ou posterior à data inicial.");
      return;
    }
    const ok = await runAction("createPlan", "Erro ao criar lançamento programado.", async () => {
      await window.api.plans.create({
        ...planForm,
        type,
        walletId,
        amount: parseMoneyInput(planForm.amount),
        endDate: type === "RECURRING" ? (planForm.endDate || null) : null,
        intervalValue: 1,
        installments: type === "INSTALLMENT" ? Number(planForm.installments) : null,
        recurrenceUnit: type === "RECURRING" ? planForm.recurrenceUnit : null,
        tagIds: planForm.tagIds || []
      });
    });
    if (!ok) return;
    setPlanForm((p) => ({ ...p, amount: "", description: "", endDate: "", intervalValue: 1, tagIds: [] }));
    showSuccess(type === "INSTALLMENT" ? "Parcelado criado." : "Recorrente criado.");
    load();
  }

  async function toggleFixedActive(plan) {
    const ok = await runAction("toggleFixed", "Erro ao atualizar lançamento fixo.", async () => {
      await window.api.plans.update({
        id: plan.id,
        type: plan.type,
        transactionType: plan.transactionType,
        amount: plan.amountCents / 100,
        description: plan.description || "",
        startDate: dateInput(plan.startDate),
        endDate: plan.endDate ? dateInput(plan.endDate) : null,
        intervalValue: plan.intervalValue || 1,
        recurrenceUnit: plan.recurrenceUnit || "MONTHLY",
        installments: plan.installments || null,
        isActive: !plan.isActive,
        tagIds: (plan.tags || []).map((link) => link.tagId)
      });
    });
    if (!ok) return;
    showSuccess(plan.isActive ? "Lançamento fixo pausado." : "Lançamento fixo reativado.");
    load();
  }

  function openEditFixed(plan) {
    const mode = scheduledModeFromPlan(plan);
    setEditFixed({
      id: plan.id,
      mode,
      type: plan.type,
      transactionType: plan.transactionType,
      amount: moneyInput(plan.amountCents / 100),
      description: plan.description || "",
      dueDay: String(datePartsUTC(plan.startDate).day),
      startMonth: monthInputFromDate(plan.startDate),
      startDate: dateInput(plan.startDate),
      endDate: plan.endDate ? dateInput(plan.endDate) : "",
      recurrenceUnit: plan.recurrenceUnit || "MONTHLY",
      intervalValue: "1",
      installments: String(plan.installments || 1),
      isActive: plan.isActive,
      tagIds: (plan.tags || []).map((link) => link.tagId)
    });
  }

  async function saveFixedEdit(e) {
    e.preventDefault();
    if (!editFixed?.id || !editFixed.amount) return;
    if (editFixed.mode === "INSTALLMENT" && Number(editFixed.installments || 0) < 1) {
      setNoticeType("error");
      setNotice("Informe uma quantidade válida de parcelas.");
      return;
    }
    if (editFixed.mode === "RECURRING_PERIOD" && !editFixed.endDate) {
      setNoticeType("error");
      setNotice("Informe a data final da recorrência.");
      return;
    }
    if (editFixed.mode === "RECURRING_PERIOD" && new Date(editFixed.endDate) < new Date(editFixed.startDate)) {
      setNoticeType("error");
      setNotice("A data final deve ser igual ou posterior à data inicial.");
      return;
    }
    const ok = await runAction("saveFixed", "Erro ao salvar lançamento fixo.", async () => {
      if (editFixed.mode === "FIXED") {
        const startDate = buildDateFromMonthAndDay(editFixed.startMonth, editFixed.dueDay);
        await window.api.plans.update({
          id: editFixed.id,
          type: "RECURRING",
          transactionType: editFixed.transactionType,
          amount: parseMoneyInput(editFixed.amount),
          description: editFixed.description,
          startDate,
          endDate: null,
          intervalValue: 1,
          recurrenceUnit: "MONTHLY",
          installments: null,
          isActive: editFixed.isActive,
          tagIds: editFixed.tagIds || []
        });
        return;
      }
      await window.api.plans.update({
        id: editFixed.id,
        type: editFixed.mode === "INSTALLMENT" ? "INSTALLMENT" : "RECURRING",
        transactionType: editFixed.transactionType,
        amount: parseMoneyInput(editFixed.amount),
        description: editFixed.description,
        startDate: editFixed.startDate,
        endDate: editFixed.mode === "RECURRING_PERIOD" ? (editFixed.endDate || null) : null,
        intervalValue: 1,
        recurrenceUnit: editFixed.mode === "RECURRING_PERIOD" ? editFixed.recurrenceUnit : null,
        installments: editFixed.mode === "INSTALLMENT" ? Number(editFixed.installments || 1) : null,
        isActive: editFixed.isActive,
        tagIds: editFixed.tagIds || []
      });
    });
    if (!ok) return;
    setEditFixed(null);
    showSuccess("Lançamento atualizado.");
    load();
  }

  async function createGoal(e) {
    e.preventDefault();
    if (!walletId || !goalForm.name || !goalForm.target) return;
    const ok = await runAction("createGoal", "Erro ao criar meta.", async () => {
      await window.api.goals.create({
        walletId,
        name: goalForm.name,
        target: parseMoneyInput(goalForm.target),
        initialAmount: parseMoneyInput(goalForm.initialAmount),
        participantCount: Math.max(1, Number(goalForm.participantCount || 1)),
        targetDate: goalForm.targetDate || null
      });
    });
    if (!ok) return;
    setGoalForm({ name: "", target: "", initialAmount: "", participantCount: "1", targetDate: "" });
    showSuccess("Meta criada.");
    load();
  }

  async function addGoalAllocation(goalId) {
    const value = parseSignedFlexibleMoney(goalContribution[goalId] || "");
    if (!value) return;
    const ok = await runAction(`allocGoal:${goalId}`, "Erro ao registrar aporte.", async () => {
      await window.api.goals.allocate({ goalId, amount: value });
    });
    if (!ok) return;
    setGoalContribution((prev) => ({ ...prev, [goalId]: "" }));
    showSuccess(value > 0 ? "Aporte registrado." : "Retirada de aporte registrada.");
    load();
  }

  async function saveGoalEdit(e) {
    e.preventDefault();
    if (!editGoal?.id) return;
    const ok = await runAction("saveGoal", "Erro ao atualizar meta.", async () => {
      await window.api.goals.update({
        id: editGoal.id,
        name: editGoal.name,
        target: parseMoneyInput(editGoal.target),
        initialAmount: parseMoneyInput(editGoal.initialAmount),
        participantCount: Math.max(1, Number(editGoal.participantCount || 1)),
        targetDate: editGoal.targetDate || null
      });
    });
    if (!ok) return;
    setEditGoal(null);
    showSuccess("Meta atualizada.");
    load();
  }

  function exportCsv() {
    const rows = [["Data ocorrência", "Data vencimento", "Tipo", "Status", "Tags", "Descrição", "Valor"], ...transactions.map((t) => [new Date(t.dueDate).toLocaleDateString("pt-BR"), t.settlementDueDate ? new Date(t.settlementDueDate).toLocaleDateString("pt-BR") : "", t.type, t.paidAt ? "PAGO" : "PENDENTE", (t.tags || []).map((link) => link.tag?.name).filter(Boolean).join(", "), t.description || "", (t.amountCents / 100).toFixed(2).replace(".", ",")])];
    const csv = rows.map((r) => r.map((x) => `"${String(x).replaceAll("\"", "\"\"")}"`).join(";")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transacoes-${dateInput(new Date())}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showSuccess("CSV exportado.");
  }

  function openConfirm(title, description, onConfirm) {
    setConfirmAction({ title, description, onConfirm });
  }

  async function exportBackup() {
    await runAction("backupExport", "Erro ao gerar backup.", async () => {
      const result = await window.api.backup.export();
      if (result?.canceled) return;
      showSuccess(`Backup salvo em: ${result.filePath}`);
    });
  }

  async function restoreBackup() {
    await runAction("backupRestore", "Erro ao restaurar backup.", async () => {
      const result = await window.api.backup.restore();
      if (result?.canceled) return;
      const list = await window.api.wallets.list();
      setWallets(list || []);
      const firstId = list?.[0]?.id || "";
      setWalletId(firstId);
      await load(firstId, filters);
      setShowSettingsModal(false);
      showSuccess("Backup restaurado com sucesso.");
    });
  }

  return (
    <div className="app-bg text-zinc-100">
      <div className="app-shell space-y-4">
        <header className="app-header">
          <div className="header-grid">
            <div className="header-block">
              <h1 className="text-2xl font-semibold tracking-tight">Financial</h1>
              <p className="header-verse">Na casa do sábio há comida e azeite armazenados, mas o tolo devora tudo o que pode. Pv 21:20</p>
            </div>
            <div className="header-block">
              <div className="mb-2 rounded-lg border border-zinc-700/60 bg-zinc-900/50 px-2 py-1 text-center text-xs text-zinc-300">
                Competência: <span className="font-medium capitalize">{monthName(selectedMonth)}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  className={`btn-segment ${selectedMonth === shiftMonthKey(currentMonthKey(), -1) ? "btn-segment-active" : ""}`}
                  type="button"
                  onClick={() => setSelectedMonth((k) => shiftMonthKey(k, -1))}
                >
                  Mês anterior
                </button>
                <button
                  className={`btn-segment ${selectedMonth === currentMonthKey() ? "btn-segment-active" : ""}`}
                  type="button"
                  onClick={() => setSelectedMonth(currentMonthKey())}
                >
                  Mês atual
                </button>
                <button
                  className={`btn-segment ${selectedMonth === shiftMonthKey(currentMonthKey(), 1) ? "btn-segment-active" : ""}`}
                  type="button"
                  onClick={() => setSelectedMonth((k) => shiftMonthKey(k, 1))}
                >
                  Mês seguinte
                </button>
              </div>
            </div>
            <div className="header-block w-full space-y-2 lg:justify-self-end">
              <div className="flex items-center gap-2">
                <select className="input" value={walletId} onChange={(e) => setWalletId(e.target.value)}>
                  {wallets.map((w) => <option key={w.id} value={w.id}>{w.name}</option>)}
                </select>
                <button
                  className="icon-btn"
                  type="button"
                  title="Configurações"
                  onClick={() => setShowSettingsModal(true)}
                >
                  ⚙
                </button>
                <button
                  className="btn-danger-soft"
                  type="button"
                  title="Remover carteira selecionada"
                  disabled={!walletId || wallets.length <= 1 || !!actionBusy.deleteWallet}
                  onClick={() =>
                    openConfirm(
                      "Excluir carteira",
                      `A carteira "${currentWallet?.name || "selecionada"}" e todos os seus dados serão excluídos.`,
                      async () => {
                        await deleteWallet(walletId);
                      }
                    )
                  }
                >
                  {actionBusy.deleteWallet ? "..." : "Remover"}
                </button>
              </div>
              <button
                className="btn-muted w-full justify-center"
                type="button"
                aria-expanded={showNewWalletForm}
                onClick={() => setShowNewWalletForm((prev) => !prev)}
              >
                {showNewWalletForm ? "Nova -" : "Nova +"}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${showNewWalletForm ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    className="input"
                    type="text"
                    placeholder="Nome da carteira"
                    value={newWalletName}
                    onChange={(e) => setNewWalletName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        createWallet();
                      }
                    }}
                  />
                  <button className="btn-muted whitespace-nowrap" type="button" onClick={createWallet} disabled={!!actionBusy.createWallet}>
                    {actionBusy.createWallet ? "Criando..." : "Criar"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-strip">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`tab-btn ${activeTab === tab.id ? "tab-btn-active" : ""}`} type="button">
                {tab.label}
              </button>
            ))}
          </div>
          <button
            className="absolute bottom-3 right-3 icon-ghost-btn"
            type="button"
            title="Sobre o projeto"
            onClick={() => setShowAboutBadgeModal(true)}
          >
            <InfoCircleIcon className="h-4 w-4" />
          </button>
        </header>

        {notice ? (
          <div
            className={`rounded-xl border px-3 py-2 text-sm ${
              noticeType === "error"
                ? "border-rose-700/40 bg-rose-950/40 text-rose-300"
                : "border-emerald-700/40 bg-emerald-950/40 text-emerald-300"
            }`}
          >
            {notice}
          </div>
        ) : null}

        {activeTab === "dashboard" ? (
          <div className="tab-panel space-y-4">
            <section className="grid gap-3 md:grid-cols-3">
              <Card title={`Receitas (${monthLabel(selectedMonth)})`} value={money(selectedMonthProjection.income)} tone="positive" />
              <Card title={`Despesas (${monthLabel(selectedMonth)}) incl. metas`} value={money(selectedMonthProjection.expense)} tone="negative" />
              <Card title={`Saldo Disponível (${monthLabel(selectedMonth)})`} value={money(selectedMonthProjection.balance)} tone={selectedMonthProjection.balance >= 0 ? "positive" : "negative"} />
            </section>
            <section className="grid gap-3 md:grid-cols-3">
              <Card title="Pendentes" value={money(expenseStats.pending)} tone={expenseStats.pending > 0 ? "warning" : "positive"} />
              <Card title="Atrasadas" value={money(expenseStats.overdue)} tone={expenseStats.overdue > 0 ? "negative" : "positive"} />
              <Card title="Vencem em 7 dias" value={money(expenseStats.dueSoon)} tone={expenseStats.dueSoon > 0 ? "warning" : "info"} />
            </section>
            <section className="panel space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="panel-title mb-0">Selos de disciplina</h3>
                  <p className="text-xs text-zinc-400">Reconhece quando suas contas estão sob controle.</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/40 px-3 py-1.5 text-right">
                    <p className="text-[11px] uppercase tracking-wide text-zinc-400">Nível do mês</p>
                    <p className="text-sm font-medium text-cyan-300">{achievementState.tier} • {achievementState.score}/100</p>
                  </div>
                  <button className="btn-muted" type="button" onClick={() => setShowAchievements((v) => !v)}>
                    {showAchievements ? "-" : "+"}
                  </button>
                </div>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${showAchievements ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pt-1 pb-1">
                  <p className="text-xs text-zinc-400">{achievementState.hint}</p>
                  <div className="mt-2 grid items-stretch gap-2 md:grid-cols-2 xl:grid-cols-5">
                    {achievementState.badges.map((badge, idx) => (
                      <div
                        key={badge.id}
                        className={`achievement-card h-full min-h-[116px] ${badge.achieved ? "achievement-card-earned" : ""}`}
                        style={{ animationDelay: `${idx * 60}ms` }}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-300">{badge.title}</p>
                          <span className={`text-[10px] font-medium ${badge.achieved ? "text-emerald-300" : "text-zinc-500"}`}>
                            {badge.achieved ? "Conquistado" : `${Math.round(badge.progress)}%`}
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-zinc-400">{badge.subtitle}</p>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${badge.achieved ? "bg-emerald-400" : "bg-cyan-500"}`}
                            style={{ width: `${Math.max(4, Math.min(100, badge.progress))}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section className="panel">
              <div className="mb-2 text-sm text-zinc-300">{tagDashboard.insight || "Sem insights de tags no momento."}</div>
              <div className="grid gap-3 lg:grid-cols-2">
                <ChartCard title="Maiores gastos por tag (mês)">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={tagDashboard.topTags || []}>
                      <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" />
                      <XAxis dataKey="name" stroke="#a1a1aa" />
                      <YAxis stroke="#a1a1aa" />
                      <Tooltip content={<FinanceTooltip />} />
                      <Bar dataKey="amount">
                        {(tagDashboard.topTags || []).map((item, index) => (
                          <Cell key={`tag-bar-${item.tagId || index}`} fill={item.color || item.tagColor || "#fb7185"} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>
                <div className="space-y-2">
                  <button className="btn-muted w-full" type="button" onClick={() => setShowTagBudgetForm((v) => !v)}>
                    {showTagBudgetForm ? "Ocultar cadastro de orçamento -" : "Cadastrar orçamento de tag +"}
                  </button>
                  {showTagBudgetForm ? (
                    <form className="rounded-lg border border-zinc-700/60 bg-zinc-900/40 p-3" onSubmit={saveTagBudget}>
                      <div className="mb-2 text-xs text-zinc-400">Definir orçamento fixo da tag</div>
                      <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                        <select className="input" value={tagBudgetForm.tagId} onChange={(e) => handleBudgetTagChange(e.target.value)}>
                          <option value="">Selecionar tag...</option>
                          {activeTags.map((tag) => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
                        </select>
                        <input
                          className="input sm:w-40"
                          type="text"
                          inputMode="numeric"
                          placeholder="Valor"
                          value={tagBudgetForm.limit}
                          onChange={(e) => setTagBudgetForm((prev) => ({ ...prev, limit: maskMoneyInput(e.target.value) }))}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-[11px] text-zinc-500">
                          {selectedTagBudget ? `Atual: ${money(selectedTagBudget.limit)}` : "Sem orçamento cadastrado para esta tag."}
                        </span>
                        <button className="btn-primary" type="submit" disabled={!tagBudgetForm.tagId || !tagBudgetForm.limit || !!actionBusy.saveTagBudget}>
                          Salvar
                        </button>
                      </div>
                    </form>
                  ) : null}
                  {(tagDashboard.budgets || []).length === 0 ? (
                    <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/40 p-3 text-sm text-zinc-400">Sem orçamento de tags cadastrado.</div>
                  ) : (
                    <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
                      {(tagDashboard.budgets || []).map((b) => (
                        <div key={b.id} className="rounded-lg border border-zinc-700/60 bg-zinc-900/40 p-3">
                          <div className="flex items-center justify-between text-sm">
                            <span>{b.tagName}</span>
                            <span className={b.status === "OVER" ? "text-rose-300" : b.status === "WARN" ? "text-amber-300" : "text-emerald-300"}>
                              {b.percentUsed.toFixed(1)}%
                            </span>
                          </div>
                          <div className="mt-1 text-xs text-zinc-400">
                            {money(b.spent)} de {money(b.limit)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
            <section className="grid gap-3 lg:grid-cols-2">
              <ChartCard title="Evolução do saldo acumulado">
                <ResponsiveContainer width="100%" height="100%"><LineChart data={dashboardChartMonthly}><CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" /><XAxis dataKey="month" stroke="#a1a1aa" /><YAxis stroke="#a1a1aa" /><Tooltip content={<FinanceTooltip />} /><Line dataKey="accumulated" stroke="#2dd4bf" strokeWidth={2} /></LineChart></ResponsiveContainer>
              </ChartCard>
              <ChartCard title="Receita x Despesa">
                <ResponsiveContainer width="100%" height="100%"><BarChart data={dashboardChartMonthly}><CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" /><XAxis dataKey="month" stroke="#a1a1aa" /><YAxis stroke="#a1a1aa" /><Tooltip content={<FinanceTooltip />} /><Bar dataKey="income" fill="#22c55e" /><Bar dataKey="expense" fill="#ef4444" /></BarChart></ResponsiveContainer>
              </ChartCard>
            </section>
          </div>
        ) : null}

        {activeTab === "investments" ? (
          <div className="tab-panel space-y-4">
            <section className="panel">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="panel-title mb-0">Simulador de investimentos</h3>
                <button
                  className="icon-ghost-btn help-icon-btn"
                  type="button"
                  onClick={() => openFormHelp("investments")}
                  title="Ajuda da aba"
                >
                  <HelpCircleIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="form-field">
                  <span className="form-label">Tipo de investimento</span>
                  <div className="flex items-center gap-2">
                    <select className="input" value={investmentForm.instrumentId} onChange={(e) => setInvestmentForm((p) => ({ ...p, instrumentId: e.target.value }))}>
                      {(investmentMarket.instruments || []).map((inst) => (
                        <option key={inst.id} value={inst.id}>
                          {inst.name} - {inst.rateAnnual.toFixed(2)}% a.a.
                        </option>
                      ))}
                    </select>
                    <button
                      className="icon-ghost-btn help-icon-btn"
                      type="button"
                      onClick={() => setShowInvestmentHelp(true)}
                      title="Ajuda"
                    >
                      <HelpCircleIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <label className="form-field">
                  <span className="form-label">Aporte inicial</span>
                  <input className="input" type="text" inputMode="numeric" placeholder="R$ 0,00" value={investmentForm.initialAmount} onChange={(e) => setInvestmentForm((p) => ({ ...p, initialAmount: maskMoneyInput(e.target.value) }))} />
                </label>
                <label className="form-field">
                  <span className="form-label">Aporte mensal</span>
                  <input className="input" type="text" inputMode="numeric" placeholder="R$ 0,00" value={investmentForm.monthlyContribution} onChange={(e) => setInvestmentForm((p) => ({ ...p, monthlyContribution: maskMoneyInput(e.target.value) }))} />
                </label>
                <label className="form-field">
                  <span className="form-label">Data final da simulação</span>
                  <input className="input" type="date" value={investmentForm.targetDate} onChange={(e) => setInvestmentForm((p) => ({ ...p, targetDate: e.target.value }))} />
                </label>
              </div>
              {selectedInstrument ? (
                <div className="mt-2 rounded-lg border border-zinc-700/60 bg-zinc-900/40 px-3 py-2 text-xs text-zinc-300">
                  Benchmark: {selectedInstrument.benchmark} | Risco: {selectedInstrument.risk} | Liquidez: {selectedInstrument.liquidity} | Tipo: {instrumentDataTypeLabel(selectedInstrument.dataType)}
                </div>
              ) : null}
              {investmentMarket.rates ? (
                <div className="mt-2 rounded-lg border border-zinc-700/60 bg-zinc-900/40 px-3 py-2 text-xs text-zinc-300">
                  Taxas base: Selic {investmentMarket.rates.selicAnnual.toFixed(2)}% | CDI {investmentMarket.rates.cdiAnnual.toFixed(2)}% | IPCA 12m {investmentMarket.rates.ipca12m.toFixed(2)}%
                </div>
              ) : null}
            </section>

            <section className="grid gap-3 md:grid-cols-4">
              <Card title="Total investido" value={money(investmentSim.summary.investedTotal)} tone="info" />
              <Card title="Valor final projetado" value={money(investmentSim.summary.finalValue)} tone="positive" />
              <Card title="Rendimento projetado" value={money(investmentSim.summary.earnings)} tone={investmentSim.summary.earnings >= 0 ? "positive" : "negative"} />
              <Card title="Prazo (meses)" value={String(investmentSim.summary.months || 0)} tone="neutral" />
            </section>

            <section className="grid gap-3 lg:grid-cols-2">
              <ChartCard title="Evolução do patrimônio investido">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={investmentSim.monthly}>
                    <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip content={<FinanceTooltip />} />
                    <Line dataKey="value" stroke="#22c55e" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
              <ChartCard title="Aportes x juros por mês">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={investmentSim.monthly}>
                    <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip content={<FinanceTooltip />} />
                    <Bar dataKey="contribution" fill="#38bdf8" />
                    <Bar dataKey="interest" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </section>
          </div>
        ) : null}

        {activeTab === "projection" ? (
          <div className="tab-panel space-y-4">
            <section className="panel">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="panel-title mb-0">Projeção</h3>
                <button
                  className="icon-ghost-btn help-icon-btn"
                  type="button"
                  onClick={() => openFormHelp("projection")}
                  title="Ajuda da aba"
                >
                  <HelpCircleIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Projetar até</div>
                <input className="input md:w-56" type="date" value={projectionDate} onChange={(e) => setProjectionDate(e.target.value)} />
              </div>
              {projectionWarning ? <p className="mt-2 text-sm text-amber-300">{projectionWarning}</p> : null}
            </section>

            <section className="grid gap-3 md:grid-cols-4">
              <Card title="Receitas Projetadas" value={money(projection.summary.income)} tone="positive" />
              <Card title="Despesas Projetadas (inclui metas)" value={money(projection.summary.expense)} tone="negative" />
              <Card title="Saldo do Periodo" value={money(projection.summary.balance)} tone={projection.summary.balance >= 0 ? "positive" : "negative"} />
              <Card title="Saldo Acumulado Projetado" value={money(projection.summary.finalBalance)} tone={projection.summary.finalBalance >= 0 ? "positive" : "negative"} />
            </section>
            <section className="grid gap-3 md:grid-cols-1">
              <Card title={`Metas no mês (${monthLabel(projectionSpendStats.month)})`} value={money(projectionSpendStats.goalsCurrentMonth)} tone="warning" />
            </section>
            <section className="grid gap-3 md:grid-cols-2">
              <Card
                title={`Limite extra no mês atual (${monthLabel(projectionSpendStats.month)})`}
                value={money(projectionSpendStats.monthSafeRemaining)}
                tone={projectionSpendStats.monthSafeRemaining > 0 ? "positive" : "negative"}
              />
              <Card
                title="Limite mensal fixo seguro"
                value={money(projectionSpendStats.fixedMonthlySafe)}
                tone={projectionSpendStats.fixedMonthlySafe > 0 ? "info" : "negative"}
              />
            </section>

            <section className="grid gap-3 lg:grid-cols-2">
              <ChartCard title="Evolução acumulada até a data-alvo">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projection.monthly}>
                    <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip content={<FinanceTooltip />} />
                    <Line dataKey="accumulated" stroke="#06b6d4" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
              <ChartCard title="Receita x despesa projetada por mês">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={projection.monthly}>
                    <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip content={<FinanceTooltip />} />
                    <Bar dataKey="income" fill="#22c55e" />
                    <Bar dataKey="expense" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </section>

          </div>
        ) : null}

        {activeTab === "transactions" ? (
          <div className="tab-panel space-y-4">
            {!showTransactionsHistory ? (
              <>
                <section className="panel">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="panel-title mb-0">Nova transação</h3>
                      <button
                        className="icon-ghost-btn help-icon-btn"
                        type="button"
                        onClick={() => openFormHelp("transactions")}
                        title="Ajuda da aba"
                      >
                        <HelpCircleIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <button className="btn-muted" type="button" onClick={() => setShowNewTransactionForm((v) => !v)}>
                      {showNewTransactionForm ? "-" : "+"}
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${showNewTransactionForm ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <form onSubmit={createTx} className="form-shell pt-1">
                      <div className="form-row form-row-4-compact">
                        <label className="form-field">
                          <span className="form-label">Tipo</span>
                          <select className="input" value={txForm.type} onChange={(e) => setTxForm((p) => ({ ...p, type: e.target.value }))}><option value="EXPENSE">Despesa</option><option value="INCOME">Receita</option></select>
                        </label>
                        <label className="form-field">
                          <span className="form-label">Valor</span>
                          <input className="input" type="text" inputMode="numeric" placeholder="R$ 0,00" value={txForm.amount} onChange={(e) => setTxForm((p) => ({ ...p, amount: maskMoneyInput(e.target.value) }))} />
                        </label>
                        <label className="form-field">
                          <span className="form-label">Data de ocorrência</span>
                          <input className="input" type="date" value={txForm.dueDate} onChange={(e) => setTxForm((p) => ({ ...p, dueDate: e.target.value }))} />
                        </label>
                        <label className="form-field">
                          <span className="form-label">Data de vencimento (opcional)</span>
                          <input className="input" type="date" value={txForm.settlementDueDate} onChange={(e) => setTxForm((p) => ({ ...p, settlementDueDate: e.target.value }))} />
                        </label>
                      </div>
                      <div className="form-row form-row-1">
                        <label className="form-field">
                          <span className="form-label">Descrição</span>
                          <input className="input" placeholder="Ex: Mercado do mês" value={txForm.description} onChange={(e) => setTxForm((p) => ({ ...p, description: e.target.value }))} />
                        </label>
                      </div>
                      <div className="form-row-tags space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="form-label">Tags (opcional)</span>
                        </div>
                        <select className="input" value="" onChange={(e) => handleTagSelect("tx", e.target.value)}>
                          <option value="">Selecionar tag...</option>
                          {activeTags
                            .filter((tag) => !(txForm.tagIds || []).includes(tag.id))
                            .map((tag) => (
                              <option key={tag.id} value={tag.id}>{tag.name}</option>
                            ))}
                          <option value="__create_tag__">+ Criar</option>
                        </select>
                        {(txForm.tagIds || []).length ? (
                          <div className="flex flex-wrap gap-1">
                            {(txForm.tagIds || []).map((tagId) => {
                              const tag = activeTags.find((t) => t.id === tagId);
                              if (!tag) return null;
                              return (
                                <div key={tag.id} className="flex items-center gap-1 rounded-full bg-zinc-900/70 pl-2 pr-1 py-0.5" style={{ border: `1px solid ${tag.color || "#334155"}99` }}>
                                  <span className="text-[11px] text-zinc-100">{tag.name}</span>
                                  <button className="tag-action-btn" type="button" title="Editar tag" onClick={() => openEditTagModal("tx", tag)}>
                                    Editar
                                  </button>
                                  <button className="tag-action-btn tag-action-btn-danger" type="button" title="Excluir tag" onClick={() => openDeleteTagModal("tx", tag)}>
                                    Excluir
                                  </button>
                                  <button className="tag-action-btn" type="button" title="Remover da transação" onClick={() => removeTagFromTarget("tx", tag.id)}>
                                    x
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-actions">
                        <button className="btn-primary" type="submit" disabled={!!actionBusy.createTx}>Salvar</button>
                      </div>
                    </form>
                  </div>
                </section>

                <section className="panel">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <input className="input md:w-72" placeholder="Buscar descrição" value={filters.search} onChange={(e) => setFilters((p) => ({ ...p, search: e.target.value }))} />
                      <select className="input md:w-40" value={filters.type} onChange={(e) => setFilters((p) => ({ ...p, type: e.target.value }))}><option value="">Tipo</option><option value="EXPENSE">Despesa</option><option value="INCOME">Receita</option></select>
                      <select className="input md:w-40" value={filters.paidStatus} onChange={(e) => setFilters((p) => ({ ...p, paidStatus: e.target.value }))}><option value="">Status</option><option value="PENDING">Pendente</option><option value="PAID">Pago</option></select>
                      <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/40 px-2 py-2 text-xs text-zinc-300 md:w-44">{filters.fromDate}</div>
                      <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/40 px-2 py-2 text-xs text-zinc-300 md:w-44">{filters.toDate}</div>
                      <select className="input md:w-52" value={filters.tagId} onChange={(e) => setFilters((p) => ({ ...p, tagId: e.target.value }))}><option value="">Tag</option>{activeTags.map((tag) => <option key={tag.id} value={tag.id}>{tag.name}</option>)}</select>
                      <button className="btn-muted" type="button" onClick={() => setFilters({ search: "", type: "", tagId: "", paidStatus: "", ...monthRange() })}>Limpar</button>
                      <button className="btn-muted" type="button" onClick={exportCsv}>Exportar</button>
                    </div>
                    <button
                      type="button"
                      className="shrink-0 text-sm text-cyan-300 underline decoration-cyan-500/60 underline-offset-2 hover:text-cyan-200"
                      onClick={() => setShowTransactionsHistory(true)}
                    >
                      Histórico
                    </button>
                  </div>
                  <div className="space-y-2">
                    {transactions.slice(0, 80).map((t) => (
                      <div key={t.id} className="tx-row">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{t.description || "Sem descrição"}</span>
                            <span className={`rounded-full px-2 py-0.5 text-[10px] ${t.paidAt ? "bg-emerald-900/40 text-emerald-300" : "bg-amber-900/40 text-amber-300"}`}>{t.paidAt ? "Pago" : "Pendente"}</span>
                          </div>
                          <p className="text-xs text-zinc-400">
                            Ocorrência: {new Date(t.dueDate).toLocaleDateString("pt-BR")}
                            {t.settlementDueDate ? ` • Vence em ${new Date(t.settlementDueDate).toLocaleDateString("pt-BR")}` : ""}
                          </p>
                          {t.tags?.length ? (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {t.tags.map((link) => (
                                <span key={`${t.id}-${link.tagId}`} className="rounded-full px-2 py-0.5 text-[10px] text-zinc-100" style={{ backgroundColor: `${link.tag?.color || "#334155"}88` }}>
                                  {link.tag?.name}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                        <div className={t.type === "INCOME" ? "text-emerald-400" : "text-rose-400"}>{t.type === "INCOME" ? "+" : "-"} {money(t.amountCents / 100)}</div>
                        <div className="flex flex-wrap gap-1">
                          <button
                            className={t.paidAt ? "btn-warning-soft" : "btn-success-soft"}
                            type="button"
                            onClick={() => window.api.transactions.setPaidStatus({ id: t.id, paid: !t.paidAt }).then(() => load())}
                          >
                            {t.paidAt ? "Pendente" : "Pago"}
                          </button>
                          <button className="btn-muted" type="button" onClick={() => setEditTx({ id: t.id, type: t.type, amount: moneyInput(t.amountCents / 100), description: t.description || "", dueDate: dateInput(t.dueDate), settlementDueDate: dateInput(t.settlementDueDate), paid: !!t.paidAt, tagIds: (t.tags || []).map((link) => link.tagId) })}>Editar</button>
                          <button className="btn-danger" type="button" onClick={() => openConfirm("Excluir transação", "Esta ação não pode ser desfeita.", async () => { await window.api.transactions.delete({ id: t.id }); load(); })}>Excluir</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            ) : null}

            {showTransactionsHistory ? (
              <section className="panel space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="panel-title mb-0">Histórico completo (real + fixos/planos)</h3>
                  <div className="flex items-center gap-2">
                    <button
                      className="text-sm text-cyan-300 underline decoration-cyan-500/60 underline-offset-2 hover:text-cyan-200"
                      type="button"
                      onClick={() => setShowTransactionsHistory(false)}
                    >
                      Ocultar
                    </button>
                    <button
                      className="btn-muted"
                      type="button"
                      onClick={() => loadTransactionsHistory(walletId, transactionsHistoryFilters)}
                    >
                      Atualizar
                    </button>
                  </div>
                </div>
                <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-6">
                  <input
                    className="input md:col-span-2"
                    placeholder="Buscar descrição"
                    value={transactionsHistoryFilters.search}
                    onChange={(e) => setTransactionsHistoryFilters((prev) => ({ ...prev, search: e.target.value }))}
                  />
                  <select
                    className="input"
                    value={transactionsHistoryFilters.period}
                    onChange={(e) => setTransactionsHistoryFilters((prev) => ({ ...prev, period: e.target.value }))}
                  >
                    <option value="THIS_MONTH">Período: mês atual</option>
                    <option value="LAST_30_DAYS">Últimos 30 dias</option>
                    <option value="LAST_90_DAYS">Últimos 90 dias</option>
                    <option value="YEAR_TO_DATE">Ano atual</option>
                    <option value="CUSTOM">Personalizado</option>
                  </select>
                  <input
                    className="input"
                    type="date"
                    value={transactionsHistoryFilters.fromDate}
                    onChange={(e) => setTransactionsHistoryFilters((prev) => ({ ...prev, fromDate: e.target.value, period: "CUSTOM" }))}
                  />
                  <input
                    className="input"
                    type="date"
                    value={transactionsHistoryFilters.toDate}
                    onChange={(e) => setTransactionsHistoryFilters((prev) => ({ ...prev, toDate: e.target.value, period: "CUSTOM" }))}
                  />
                  <select
                    className="input"
                    value={transactionsHistoryFilters.tagId}
                    onChange={(e) => setTransactionsHistoryFilters((prev) => ({ ...prev, tagId: e.target.value }))}
                  >
                    <option value="">Todas as tags</option>
                    {activeTags.map((tag) => (
                      <option key={tag.id} value={tag.id}>{tag.name}</option>
                    ))}
                  </select>
                  <select
                    className="input"
                    value={transactionsHistoryFilters.type}
                    onChange={(e) => setTransactionsHistoryFilters((prev) => ({ ...prev, type: e.target.value }))}
                  >
                    <option value="">Tipo: todos</option>
                    <option value="EXPENSE">Despesa</option>
                    <option value="INCOME">Receita</option>
                  </select>
                </div>
                <div className="space-y-2">
                  {transactionsHistory.length ? (
                    transactionsHistory.slice(0, 300).map((item) => (
                      <div key={item.id} className="tx-row">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm">{item.description || "Sem descrição"}</span>
                            <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300">{item.sourceLabel}</span>
                            <span className={`rounded-full px-2 py-0.5 text-[10px] ${item.type === "INCOME" ? "bg-emerald-900/40 text-emerald-300" : "bg-rose-900/40 text-rose-300"}`}>
                              {item.type === "INCOME" ? "Receita" : "Despesa"}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400">{new Date(item.dueDate).toLocaleDateString("pt-BR")}</p>
                          {item.tags?.length ? (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {item.tags.map((tag) => (
                                <span key={`${item.id}-${tag.id}`} className="rounded-full px-2 py-0.5 text-[10px] text-zinc-100" style={{ backgroundColor: `${tag.color || "#334155"}88` }}>
                                  {tag.name}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-medium ${item.type === "INCOME" ? "text-emerald-300" : "text-rose-300"}`}>
                            {item.type === "INCOME" ? "+" : "-"} {money(Math.abs(item.amount || 0))}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-zinc-500">Nenhum lançamento encontrado para os filtros selecionados.</p>
                  )}
                </div>
              </section>
            ) : null}
          </div>
        ) : null}

        {activeTab === "fixed" ? (
          <div className="tab-panel space-y-4">
            <section className="panel">
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="panel-title mb-0">Novo Programado</h3>
                  <button
                    className="icon-ghost-btn help-icon-btn"
                    type="button"
                    onClick={() => openFormHelp("fixed")}
                    title="Ajuda da aba"
                  >
                    <HelpCircleIcon className="h-4 w-4" />
                  </button>
                </div>
                <button className="btn-muted" type="button" onClick={() => setShowScheduledForm((v) => !v)}>
                  {showScheduledForm ? "-" : "+"}
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${showScheduledForm ? "max-h-[1600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pt-1">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <button className={`btn-segment ${scheduledMode === "FIXED" ? "btn-segment-active" : ""}`} type="button" onClick={() => setScheduledMode("FIXED")}>Fixo mensal</button>
                    <button className={`btn-segment ${scheduledMode === "INSTALLMENT" ? "btn-segment-active" : ""}`} type="button" onClick={() => setScheduledMode("INSTALLMENT")}>Parcelado</button>
                    <button className={`btn-segment ${scheduledMode === "RECURRING_PERIOD" ? "btn-segment-active" : ""}`} type="button" onClick={() => setScheduledMode("RECURRING_PERIOD")}>Recorrente por período</button>
                  </div>
                  <form onSubmit={createScheduled} className="form-shell">
                    {scheduledMode === "FIXED" ? (
                      <>
                        <div className="form-row form-row-4-compact">
                          <label className="form-field">
                            <span className="form-label">Tipo</span>
                            <select className="input" value={fixedForm.transactionType} onChange={(e) => setFixedForm((p) => ({ ...p, transactionType: e.target.value }))}>
                              <option value="EXPENSE">Despesa</option>
                              <option value="INCOME">Receita</option>
                            </select>
                          </label>
                          <label className="form-field">
                            <span className="form-label">Valor mensal</span>
                            <input className="input" type="text" inputMode="numeric" placeholder="R$ 0,00" value={fixedForm.amount} onChange={(e) => setFixedForm((p) => ({ ...p, amount: maskMoneyInput(e.target.value) }))} />
                          </label>
                          <label className="form-field">
                            <span className="form-label">Dia do vencimento</span>
                            <input className="input" type="number" min="1" max="31" value={fixedForm.dueDay} onChange={(e) => setFixedForm((p) => ({ ...p, dueDay: e.target.value }))} />
                          </label>
                          <label className="form-field">
                            <span className="form-label">Inicia em</span>
                            <input className="input" type="month" value={fixedForm.startMonth} onChange={(e) => setFixedForm((p) => ({ ...p, startMonth: e.target.value }))} />
                          </label>
                        </div>
                        <div className="form-row form-row-1">
                          <label className="form-field">
                            <span className="form-label">Descrição</span>
                            <input className="input" placeholder="Ex: Salário, Aluguel, Internet" value={fixedForm.description} onChange={(e) => setFixedForm((p) => ({ ...p, description: e.target.value }))} />
                          </label>
                        </div>
                        <div className="form-row-tags space-y-2">
                          <div className="form-label">Tags (opcional)</div>
                          <select className="input" value="" onChange={(e) => handleTagSelect("fixed", e.target.value)}>
                            <option value="">Selecionar tag...</option>
                            {activeTags.filter((tag) => !selectedTagIdsForTarget("fixed").includes(tag.id)).map((tag) => (
                              <option key={tag.id} value={tag.id}>{tag.name}</option>
                            ))}
                            <option value="__create_tag__">+ Criar</option>
                          </select>
                          {selectedTagIdsForTarget("fixed").length ? (
                            <div className="flex flex-wrap gap-1">
                              {selectedTagIdsForTarget("fixed").map((tagId) => {
                                const tag = activeTags.find((t) => t.id === tagId);
                                if (!tag) return null;
                                return (
                                  <div key={tag.id} className="flex items-center gap-1 rounded-full bg-zinc-900/70 pl-2 pr-1 py-0.5" style={{ border: `1px solid ${tag.color || "#334155"}99` }}>
                                    <span className="text-[11px] text-zinc-100">{tag.name}</span>
                                    <button className="tag-action-btn" type="button" onClick={() => openEditTagModal("fixed", tag)}>Editar</button>
                                    <button className="tag-action-btn tag-action-btn-danger" type="button" onClick={() => openDeleteTagModal("fixed", tag)}>Excluir</button>
                                    <button className="tag-action-btn" type="button" onClick={() => removeTagFromTarget("fixed", tag.id)}>x</button>
                                  </div>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      </>
                    ) : (
                      <>
                        {scheduledMode === "INSTALLMENT" ? (
                          <div className="form-row form-row-4-compact">
                            <label className="form-field">
                              <span className="form-label">Tipo</span>
                              <select className="input" value={planForm.transactionType} onChange={(e) => setPlanForm((p) => ({ ...p, transactionType: e.target.value }))}>
                                <option value="EXPENSE">Despesa</option>
                                <option value="INCOME">Receita</option>
                              </select>
                            </label>
                            <label className="form-field">
                              <span className="form-label">Valor da parcela</span>
                              <input className="input" type="text" inputMode="numeric" placeholder="R$ 0,00" value={planForm.amount} onChange={(e) => setPlanForm((p) => ({ ...p, amount: maskMoneyInput(e.target.value) }))} />
                            </label>
                            <label className="form-field">
                              <span className="form-label">Primeiro vencimento</span>
                              <input className="input" type="date" value={planForm.startDate} onChange={(e) => setPlanForm((p) => ({ ...p, startDate: e.target.value }))} />
                            </label>
                            <label className="form-field">
                              <span className="form-label">Quantidade de parcelas</span>
                              <input className="input" type="number" min="1" value={planForm.installments} onChange={(e) => setPlanForm((p) => ({ ...p, installments: e.target.value }))} />
                            </label>
                          </div>
                        ) : (
                          <>
                            <div className="form-row form-row-5-compact">
                              <label className="form-field">
                                <span className="form-label">Tipo</span>
                                <select className="input" value={planForm.transactionType} onChange={(e) => setPlanForm((p) => ({ ...p, transactionType: e.target.value }))}>
                                  <option value="EXPENSE">Despesa</option>
                                  <option value="INCOME">Receita</option>
                                </select>
                              </label>
                              <label className="form-field">
                                <span className="form-label">Valor</span>
                                <input className="input" type="text" inputMode="numeric" placeholder="R$ 0,00" value={planForm.amount} onChange={(e) => setPlanForm((p) => ({ ...p, amount: maskMoneyInput(e.target.value) }))} />
                              </label>
                              <label className="form-field">
                                <span className="form-label">Data inicial</span>
                                <input className="input" type="date" value={planForm.startDate} onChange={(e) => setPlanForm((p) => ({ ...p, startDate: e.target.value }))} />
                              </label>
                              <label className="form-field">
                                <span className="form-label">Data final</span>
                                <input className="input" type="date" value={planForm.endDate} onChange={(e) => setPlanForm((p) => ({ ...p, endDate: e.target.value }))} />
                              </label>
                              <label className="form-field">
                                <span className="form-label">Recorrência</span>
                                <select className="input" value={planForm.recurrenceUnit} onChange={(e) => setPlanForm((p) => ({ ...p, recurrenceUnit: e.target.value }))}>
                                  <option value="MONTHLY">Mensal</option>
                                  <option value="WEEKLY">Semanal</option>
                                  <option value="YEARLY">Anual</option>
                                </select>
                              </label>
                            </div>
                          </>
                        )}
                        <div className="form-row form-row-1">
                          <label className="form-field">
                            <span className="form-label">Descrição</span>
                            <input className="input" placeholder={scheduledMode === "INSTALLMENT" ? "Ex: Curso de inglês" : "Ex: Terapia por 6 meses"} value={planForm.description} onChange={(e) => setPlanForm((p) => ({ ...p, description: e.target.value }))} />
                          </label>
                        </div>
                        <div className="form-row-tags space-y-2">
                          <div className="form-label">Tags (opcional)</div>
                          <select className="input" value="" onChange={(e) => handleTagSelect("plan", e.target.value)}>
                            <option value="">Selecionar tag...</option>
                            {activeTags.filter((tag) => !selectedTagIdsForTarget("plan").includes(tag.id)).map((tag) => (
                              <option key={tag.id} value={tag.id}>{tag.name}</option>
                            ))}
                            <option value="__create_tag__">+ Criar</option>
                          </select>
                          {selectedTagIdsForTarget("plan").length ? (
                            <div className="flex flex-wrap gap-1">
                              {selectedTagIdsForTarget("plan").map((tagId) => {
                                const tag = activeTags.find((t) => t.id === tagId);
                                if (!tag) return null;
                                return (
                                  <div key={tag.id} className="flex items-center gap-1 rounded-full bg-zinc-900/70 pl-2 pr-1 py-0.5" style={{ border: `1px solid ${tag.color || "#334155"}99` }}>
                                    <span className="text-[11px] text-zinc-100">{tag.name}</span>
                                    <button className="tag-action-btn" type="button" onClick={() => openEditTagModal("plan", tag)}>Editar</button>
                                    <button className="tag-action-btn tag-action-btn-danger" type="button" onClick={() => openDeleteTagModal("plan", tag)}>Excluir</button>
                                    <button className="tag-action-btn" type="button" onClick={() => removeTagFromTarget("plan", tag.id)}>x</button>
                                  </div>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      </>
                    )}
                    <div className="form-actions">
                      <button className="btn-primary" type="submit" disabled={!!actionBusy.createFixed || !!actionBusy.createPlan}>Salvar</button>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            <section className="panel">
              <h3 className="panel-title">Lançamentos programados</h3>
              <div className="space-y-2">
                {scheduledPlans.slice(0, 80).map((p) => (
                  <div key={p.id} className="tx-row">
                    <div>
                      <p className="text-sm">{p.description || "Sem descrição"}</p>
                      <p className="text-xs text-zinc-400">
                        {scheduledPlanLabel(p)} • {p.transactionType === "INCOME" ? "Receita" : "Despesa"} • {money(p.amountCents / 100)}
                        {scheduledModeFromPlan(p) === "FIXED" ? ` • dia ${datePartsUTC(p.startDate).day}` : ""}
                        {scheduledModeFromPlan(p) === "INSTALLMENT" ? ` • ${p.installments || 0} parcelas` : ""}
                        {scheduledModeFromPlan(p) === "RECURRING_PERIOD" && p.endDate ? ` • até ${new Date(p.endDate).toLocaleDateString("pt-BR")}` : ""}
                      </p>
                      {p.tags?.length ? (
                        <div className="mt-1 flex flex-wrap gap-1">
                          {p.tags.map((link) => (
                            <span key={`${p.id}-${link.tagId}`} className="rounded-full px-2 py-0.5 text-[10px] text-zinc-100" style={{ backgroundColor: `${link.tag?.color || "#334155"}88` }}>
                              {link.tag?.name}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className={`text-xs ${p.isActive ? "text-emerald-400" : "text-amber-300"}`}>
                      {p.isActive ? "Ativo" : "Pausado"}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <button className="btn-muted" type="button" onClick={() => openEditFixed(p)}>
                        Editar
                      </button>
                      <button className={p.isActive ? "btn-warning-soft" : "btn-success-soft"} type="button" onClick={() => toggleFixedActive(p)} disabled={!!actionBusy.toggleFixed}>
                        {p.isActive ? "Pausar" : "Reativar"}
                      </button>
                      <button
                        className="btn-danger"
                        type="button"
                        onClick={() =>
                          openConfirm("Excluir lançamento fixo", "As ocorrências futuras deste fixo serão removidas.", async () => {
                            await window.api.plans.delete({ id: p.id });
                            load();
                          })
                        }
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))}
                {scheduledPlans.length === 0 ? <p className="text-sm text-zinc-500">Nenhum lançamento programado cadastrado.</p> : null}
              </div>
            </section>
          </div>
        ) : null}

        {activeTab === "goals" ? (
          <div className="tab-panel space-y-4">
            <section className="panel">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="panel-title mb-0">Nova meta</h3>
                <button
                  className="icon-ghost-btn help-icon-btn"
                  type="button"
                  onClick={() => openFormHelp("goals")}
                  title="Ajuda da aba"
                >
                  <HelpCircleIcon className="h-4 w-4" />
                </button>
              </div>
              <form onSubmit={createGoal} className="grid gap-3 md:grid-cols-5">
                <label className="form-field">
                  <span className="form-label">Nome da meta</span>
                  <input className="input" placeholder="Ex: Viagem de férias" value={goalForm.name} onChange={(e) => setGoalForm((p) => ({ ...p, name: e.target.value }))} />
                </label>
                <label className="form-field">
                  <span className="form-label">Valor alvo</span>
                  <input className="input" type="text" inputMode="numeric" placeholder="R$ 0,00" value={goalForm.target} onChange={(e) => setGoalForm((p) => ({ ...p, target: maskMoneyInput(e.target.value) }))} />
                </label>
                <label className="form-field">
                  <span className="form-label">Valor inicial</span>
                  <input className="input" type="text" inputMode="numeric" placeholder="R$ 0,00" value={goalForm.initialAmount} onChange={(e) => setGoalForm((p) => ({ ...p, initialAmount: maskMoneyInput(e.target.value) }))} />
                </label>
                <label className="form-field">
                  <span className="form-label">Participantes</span>
                  <input className="input" type="number" min="1" placeholder="1" value={goalForm.participantCount} onChange={(e) => setGoalForm((p) => ({ ...p, participantCount: e.target.value }))} />
                </label>
                <label className="form-field">
                  <span className="form-label">Prazo final</span>
                  <input className="input" type="date" value={goalForm.targetDate} onChange={(e) => setGoalForm((p) => ({ ...p, targetDate: e.target.value }))} />
                </label>
                <div className="form-actions md:col-span-5">
                  <button className="btn-primary" type="submit" disabled={!!actionBusy.createGoal}>Criar</button>
                </div>
              </form>
            </section>

            <section className="space-y-2">
              {goals.map((goal) => {
                const m = goalMetrics(goal);
                const plan = goalContributionPlan(goal);
                return (
                  <div key={goal.id} className="panel">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">{goal.name}</p>
                        <p className="text-xs text-zinc-400">{money(m.allocated / 100)} de {money(m.target / 100)} ({m.progress.toFixed(1)}%)</p>
                        {(goal.initialAmountCents || 0) > 0 ? <p className="text-xs text-zinc-500">Valor inicial: {money((goal.initialAmountCents || 0) / 100)}</p> : null}
                        <p className="text-xs text-zinc-500">Participantes: {m.participants} • Sua cota: {money(m.personalTarget / 100)}</p>
                        <p className="text-xs text-zinc-500">Previsão: {m.projectedDate ? new Date(m.projectedDate).toLocaleDateString("pt-BR") : "Sem dados suficientes"}</p>
                      </div>
                      <div className="flex gap-1">
                        <button className="btn-muted" type="button" onClick={() => setEditGoal({ id: goal.id, name: goal.name, target: moneyInput(goal.targetCents / 100), initialAmount: moneyInput((goal.initialAmountCents || 0) / 100), participantCount: String(goal.participantCount || 1), targetDate: dateInput(goal.targetDate) })}>Editar</button>
                        <button className="btn-danger" type="button" onClick={() => openConfirm("Excluir meta", "Todos os aportes vinculados também serão removidos.", async () => { await window.api.goals.delete({ id: goal.id }); load(); })}>Excluir</button>
                      </div>
                    </div>
                    <div className="h-2 overflow-hidden rounded bg-zinc-800"><div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${Math.min(100, m.progress)}%` }} /></div>
                    <div className="mt-2 grid gap-2 md:grid-cols-3">
                      <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/50 p-2">
                        <p className="text-[11px] uppercase text-zinc-400">Falta para meta (sua parte)</p>
                        <p className="text-sm">{money(m.personalRemaining / 100)}</p>
                      </div>
                      <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/50 p-2">
                        <p className="text-[11px] uppercase text-zinc-400">Meses até o prazo</p>
                        <p className="text-sm">{plan.monthsLeft || "-"}</p>
                      </div>
                      <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/50 p-2">
                        <p className="text-[11px] uppercase text-zinc-400">Aporte mensal necessário (sua parte)</p>
                        <p className="text-sm">{goal.targetDate ? money(plan.requiredMonthlyCentsPersonal / 100) : "Defina prazo"}</p>
                      </div>
                    </div>
                    <div className="mt-2 rounded-lg border border-zinc-700/60 bg-zinc-900/40 p-2">
                      <p className="mb-1 text-[11px] uppercase text-zinc-400">Aportes por mês</p>
                      {plan.history.length === 0 ? (
                        <p className="text-xs text-zinc-500">Sem aportes ainda.</p>
                      ) : (
                        <div className="grid gap-1 md:grid-cols-3">
                          {plan.history.map((row) => (
                            <div key={row.key} className="flex items-center justify-between rounded bg-zinc-950/55 px-2 py-1 text-xs">
                              <span className="text-zinc-400">{row.label}</span>
                              <span>{money(row.cents / 100)}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-2 grid gap-2 md:grid-cols-[1fr_auto]">
                      <input className="input" type="text" inputMode="decimal" placeholder="Novo aporte (use negativo para retirada, ex: -2000)" value={goalContribution[goal.id] || ""} onChange={(e) => setGoalContribution((prev) => ({ ...prev, [goal.id]: e.target.value }))} />
                      <button className="btn-muted" type="button" onClick={() => addGoalAllocation(goal.id)} disabled={!!actionBusy[`allocGoal:${goal.id}`]}>Aportar</button>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        ) : null}
      </div>

      {tagCreateModal.open ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4">
          <form className="w-full max-w-md space-y-3 rounded-xl border border-zinc-700 bg-zinc-900 p-4" onSubmit={submitCreateTagModal}>
            <h3 className="panel-title">Criar tag</h3>
            <input
              className="input"
              placeholder="Nome da tag"
              value={tagCreateModal.name}
              onChange={(e) => setTagCreateModal((prev) => ({ ...prev, name: e.target.value }))}
            />
            <div className="flex justify-end gap-2">
              <button className="btn-muted" type="button" onClick={() => setTagCreateModal({ open: false, target: null, name: "" })}>
                Cancelar
              </button>
              <button className="btn-primary" type="submit" disabled={!tagCreateModal.name.trim() || !!actionBusy.createTag}>
                Criar
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {tagEditModal.open ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4">
          <form className="w-full max-w-md space-y-3 rounded-xl border border-zinc-700 bg-zinc-900 p-4" onSubmit={submitEditTagModal}>
            <h3 className="panel-title">Editar tag</h3>
            <input
              className="input"
              placeholder="Nome da tag"
              value={tagEditModal.name}
              onChange={(e) => setTagEditModal((prev) => ({ ...prev, name: e.target.value }))}
            />
            <div className="flex justify-end gap-2">
              <button className="btn-muted" type="button" onClick={() => setTagEditModal({ open: false, target: null, id: "", name: "" })}>
                Cancelar
              </button>
              <button className="btn-primary" type="submit" disabled={!tagEditModal.name.trim() || !!actionBusy.updateTag}>
                Salvar
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {tagDeleteModal.open ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md space-y-3 rounded-xl border border-zinc-700 bg-zinc-900 p-4">
            <h3 className="panel-title">Excluir tag</h3>
            <p className="text-sm text-zinc-300">
              A tag <span className="font-medium">{tagDeleteModal.name}</span> será removida da carteira e das transações vinculadas.
            </p>
            <div className="flex justify-end gap-2">
              <button className="btn-muted" type="button" onClick={() => setTagDeleteModal({ open: false, target: null, id: "", name: "" })}>
                Cancelar
              </button>
              <button className="btn-danger" type="button" disabled={!!actionBusy.deleteTag} onClick={confirmDeleteTagModal}>
                Excluir
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showSettingsModal ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg space-y-3 rounded-xl border border-zinc-700 bg-zinc-900 p-4">
            <div className="flex items-center justify-between">
              <h3 className="panel-title mb-0">Configurações</h3>
              <button className="btn-muted" type="button" onClick={() => setShowSettingsModal(false)}>Fechar</button>
            </div>
            <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/40 p-3">
              <p className="text-sm text-zinc-200">Backup</p>
              <p className="mt-1 text-xs text-zinc-400">Gera um arquivo JSON com todos os dados do aplicativo.</p>
              <div className="mt-2 flex justify-end">
                <button className="btn-primary" type="button" disabled={!!actionBusy.backupExport} onClick={exportBackup}>
                  Exportar
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-amber-700/40 bg-amber-950/20 p-3">
              <p className="text-sm text-amber-200">Restore</p>
              <p className="mt-1 text-xs text-amber-100/80">
                Restaura um backup e substitui os dados atuais da aplicação.
              </p>
              <div className="mt-2 flex justify-end">
                <button
                  className="btn-danger"
                  type="button"
                  disabled={!!actionBusy.backupRestore}
                  onClick={() =>
                    openConfirm(
                      "Restaurar backup",
                      "Os dados atuais serão substituídos pelos dados do arquivo selecionado. Deseja continuar?",
                      restoreBackup
                    )
                  }
                >
                  Restaurar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {editTx ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <form className="w-full max-w-md space-y-2 rounded-xl border border-zinc-700 bg-zinc-900 p-4" onSubmit={async (e) => { e.preventDefault(); const ok = await runAction("saveTxEdit", "Erro ao atualizar transação.", async () => { await window.api.transactions.update({ id: editTx.id, type: editTx.type, amount: parseMoneyInput(editTx.amount), description: editTx.description, dueDate: editTx.dueDate, settlementDueDate: editTx.settlementDueDate, paidAt: editTx.paid ? new Date().toISOString() : null, tagIds: editTx.tagIds || [] }); }); if (!ok) return; setEditTx(null); load(); }}>
            <h3 className="panel-title">Editar transação</h3>
            <select className="input" value={editTx.type} onChange={(e) => setEditTx((p) => ({ ...p, type: e.target.value }))}><option value="EXPENSE">Despesa</option><option value="INCOME">Receita</option></select>
            <input className="input" type="text" inputMode="numeric" value={editTx.amount} onChange={(e) => setEditTx((p) => ({ ...p, amount: maskMoneyInput(e.target.value) }))} />
            <input className="input" value={editTx.description} onChange={(e) => setEditTx((p) => ({ ...p, description: e.target.value }))} />
            <div className="grid gap-2 sm:grid-cols-2">
              <input className="input" type="date" value={editTx.dueDate} onChange={(e) => setEditTx((p) => ({ ...p, dueDate: e.target.value }))} />
              <input className="input" type="date" value={editTx.settlementDueDate || ""} onChange={(e) => setEditTx((p) => ({ ...p, settlementDueDate: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">Tags (opcional)</span>
              </div>
              <select className="input" value="" onChange={(e) => handleTagSelect("edit", e.target.value)}>
                <option value="">Selecionar tag...</option>
                {activeTags
                  .filter((tag) => !(editTx.tagIds || []).includes(tag.id))
                  .map((tag) => (
                    <option key={tag.id} value={tag.id}>{tag.name}</option>
                  ))}
                <option value="__create_tag__">+ Criar</option>
              </select>
              {(editTx.tagIds || []).length ? (
                <div className="flex flex-wrap gap-1">
                  {(editTx.tagIds || []).map((tagId) => {
                    const tag = activeTags.find((t) => t.id === tagId);
                    if (!tag) return null;
                    return (
                      <div key={tag.id} className="flex items-center gap-1 rounded-full bg-zinc-900/70 pl-2 pr-1 py-0.5" style={{ border: `1px solid ${tag.color || "#334155"}99` }}>
                        <span className="text-[11px] text-zinc-100">{tag.name}</span>
                        <button className="tag-action-btn" type="button" title="Editar tag" onClick={() => openEditTagModal("edit", tag)}>
                          Editar
                        </button>
                        <button className="tag-action-btn tag-action-btn-danger" type="button" title="Excluir tag" onClick={() => openDeleteTagModal("edit", tag)}>
                          Excluir
                        </button>
                        <button className="tag-action-btn" type="button" title="Remover da transação" onClick={() => removeTagFromTarget("edit", tag.id)}>
                          x
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={editTx.paid} onChange={(e) => setEditTx((p) => ({ ...p, paid: e.target.checked }))} />Pago</label>
            <div className="flex justify-end gap-2"><button className="btn-muted" type="button" onClick={() => setEditTx(null)}>Cancelar</button><button className="btn-primary" type="submit" disabled={!!actionBusy.saveTxEdit}>Salvar</button></div>
          </form>
        </div>
      ) : null}

      {editGoal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <form className="w-full max-w-md space-y-2 rounded-xl border border-zinc-700 bg-zinc-900 p-4" onSubmit={saveGoalEdit}>
            <h3 className="panel-title">Editar meta</h3>
            <input className="input" value={editGoal.name} onChange={(e) => setEditGoal((p) => ({ ...p, name: e.target.value }))} />
            <input className="input" type="text" inputMode="numeric" value={editGoal.target} onChange={(e) => setEditGoal((p) => ({ ...p, target: maskMoneyInput(e.target.value) }))} />
            <input className="input" type="text" inputMode="numeric" value={editGoal.initialAmount || ""} onChange={(e) => setEditGoal((p) => ({ ...p, initialAmount: maskMoneyInput(e.target.value) }))} />
            <input className="input" type="number" min="1" value={editGoal.participantCount || "1"} onChange={(e) => setEditGoal((p) => ({ ...p, participantCount: e.target.value }))} />
            <input className="input" type="date" value={editGoal.targetDate} onChange={(e) => setEditGoal((p) => ({ ...p, targetDate: e.target.value }))} />
            <div className="flex justify-end gap-2"><button className="btn-muted" type="button" onClick={() => setEditGoal(null)}>Cancelar</button><button className="btn-primary" type="submit" disabled={!!actionBusy.saveGoal}>Salvar</button></div>
          </form>
        </div>
      ) : null}

      {editFixed ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <form className="w-full max-w-md space-y-2 rounded-xl border border-zinc-700 bg-zinc-900 p-4" onSubmit={saveFixedEdit}>
            <h3 className="panel-title">Editar {scheduledPlanLabel(editFixed).toLowerCase()}</h3>
            <select className="input" value={editFixed.transactionType} onChange={(e) => setEditFixed((p) => ({ ...p, transactionType: e.target.value }))}>
              <option value="EXPENSE">Despesa</option>
              <option value="INCOME">Receita</option>
            </select>
            <input className="input" type="text" inputMode="numeric" value={editFixed.amount} onChange={(e) => setEditFixed((p) => ({ ...p, amount: maskMoneyInput(e.target.value) }))} />
            <div className={`grid gap-2 ${editFixed.mode === "RECURRING_PERIOD" ? "sm:grid-cols-2" : "sm:grid-cols-1"}`}>
              <input className="input" value={editFixed.description} onChange={(e) => setEditFixed((p) => ({ ...p, description: e.target.value }))} />
              {editFixed.mode === "RECURRING_PERIOD" ? (
                <select className="input" value={editFixed.recurrenceUnit} onChange={(e) => setEditFixed((p) => ({ ...p, recurrenceUnit: e.target.value }))}>
                  <option value="MONTHLY">Mensal</option>
                  <option value="WEEKLY">Semanal</option>
                  <option value="YEARLY">Anual</option>
                </select>
              ) : null}
            </div>
            {editFixed.mode === "FIXED" ? (
              <div className="grid grid-cols-2 gap-2">
                <input className="input" type="number" min="1" max="31" value={editFixed.dueDay} onChange={(e) => setEditFixed((p) => ({ ...p, dueDay: e.target.value }))} />
                <input className="input" type="month" value={editFixed.startMonth} onChange={(e) => setEditFixed((p) => ({ ...p, startMonth: e.target.value }))} />
              </div>
            ) : (
              <>
                <input className="input" type="date" value={editFixed.startDate} onChange={(e) => setEditFixed((p) => ({ ...p, startDate: e.target.value }))} />
                {editFixed.mode === "INSTALLMENT" ? (
                  <input className="input" type="number" min="1" value={editFixed.installments} onChange={(e) => setEditFixed((p) => ({ ...p, installments: e.target.value }))} />
                ) : (
                  <input className="input" type="date" value={editFixed.endDate || ""} onChange={(e) => setEditFixed((p) => ({ ...p, endDate: e.target.value }))} />
                )}
              </>
            )}
            <div className="space-y-2">
              <div className="text-xs text-zinc-400">Tags (opcional)</div>
              <select className="input" value="" onChange={(e) => handleTagSelect("fixedEdit", e.target.value)}>
                <option value="">Selecionar tag...</option>
                {activeTags
                  .filter((tag) => !selectedTagIdsForTarget("fixedEdit").includes(tag.id))
                  .map((tag) => (
                    <option key={tag.id} value={tag.id}>{tag.name}</option>
                  ))}
                <option value="__create_tag__">+ Criar</option>
              </select>
              {selectedTagIdsForTarget("fixedEdit").length ? (
                <div className="flex flex-wrap gap-1">
                  {selectedTagIdsForTarget("fixedEdit").map((tagId) => {
                    const tag = activeTags.find((t) => t.id === tagId);
                    if (!tag) return null;
                    return (
                      <div key={tag.id} className="flex items-center gap-1 rounded-full bg-zinc-900/70 pl-2 pr-1 py-0.5" style={{ border: `1px solid ${tag.color || "#334155"}99` }}>
                        <span className="text-[11px] text-zinc-100">{tag.name}</span>
                        <button className="tag-action-btn" type="button" onClick={() => openEditTagModal("fixedEdit", tag)}>Editar</button>
                        <button className="tag-action-btn tag-action-btn-danger" type="button" onClick={() => openDeleteTagModal("fixedEdit", tag)}>Excluir</button>
                        <button className="tag-action-btn" type="button" onClick={() => removeTagFromTarget("fixedEdit", tag.id)}>x</button>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={editFixed.isActive} onChange={(e) => setEditFixed((p) => ({ ...p, isActive: e.target.checked }))} />
              Ativo
            </label>
            <div className="flex justify-end gap-2">
              <button className="btn-muted" type="button" onClick={() => setEditFixed(null)}>Cancelar</button>
              <button className="btn-primary" type="submit" disabled={!!actionBusy.saveFixed}>Salvar</button>
            </div>
          </form>
        </div>
      ) : null}

      {confirmAction ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md space-y-2 rounded-xl border border-zinc-700 bg-zinc-900 p-4">
            <h3 className="panel-title">{confirmAction.title}</h3>
            <p className="text-sm text-zinc-300">{confirmAction.description}</p>
            <div className="flex justify-end gap-2">
              <button className="btn-muted" type="button" onClick={() => setConfirmAction(null)}>Cancelar</button>
              <button
                className="btn-danger"
                type="button"
                disabled={!!actionBusy.confirmAction}
                onClick={async () => {
                  const action = confirmAction.onConfirm;
                  setConfirmAction(null);
                  await runAction("confirmAction", "Erro ao executar ação.", action);
                }}
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showInvestmentHelp ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-2xl rounded-xl border border-zinc-700 bg-zinc-900 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="panel-title">Tipos de investimento (resumo)</h3>
              <button className="btn-muted inline-flex items-center justify-center" type="button" onClick={() => setShowInvestmentHelp(false)}><CloseIcon /></button>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              {(investmentMarket.instruments || []).map((inst) => (
                <HelpItem
                  key={inst.id}
                  title={inst.name}
                  risk={inst.risk}
                  text={`${inst.description || ""} Benchmark: ${inst.benchmark}. Liquidez: ${inst.liquidity}. Tipo: ${instrumentDataTypeLabel(inst.dataType)}.`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {formHelpModal ? (
        <div className="fixed inset-0 z-[85] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-xl border border-zinc-700 bg-zinc-900 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="panel-title mb-0">{formHelpModal.title}</h3>
              <button className="btn-muted inline-flex items-center justify-center" type="button" onClick={() => setFormHelpModal(null)}><CloseIcon /></button>
            </div>
            <p className="text-sm text-zinc-300">{formHelpModal.text}</p>
          </div>
        </div>
      ) : null}

      {showAboutBadgeModal ? (
        <div className="fixed inset-0 z-[88] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-xl border border-zinc-700 bg-zinc-900 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="panel-title mb-0">Sobre este projeto</h3>
              <button className="btn-muted inline-flex items-center justify-center" type="button" onClick={() => setShowAboutBadgeModal(false)}><CloseIcon /></button>
            </div>
            <div className="space-y-2 text-sm text-zinc-300">
              <p><span className="text-zinc-400">Autor:</span> Eduardo Brumatti Monteiro</p>
              <p><span className="text-zinc-400">Ano:</span> {new Date().getFullYear()}</p>
              <p>
                <span className="text-zinc-400">GitHub:</span>{" "}
                <a
                  className="text-cyan-300 underline decoration-cyan-500/60 underline-offset-2 hover:text-cyan-200"
                  href="https://github.com/Ukwon/Financial"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Ukwon/Financial
                </a>
              </p>
              <p className="rounded-lg border border-zinc-700/60 bg-zinc-900/40 p-2 text-zinc-200">
                "Esta é a vida eterna: que te conheçam, o único Deus verdadeiro, e a Jesus Cristo, a quem enviaste." João 17:3 (NVI)
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Card({ title, value, tone = "neutral" }) {
  return (
    <div className={`card-stat card-stat-${tone}`}>
      <p className="card-stat-title">{title}</p>
      <p className="card-stat-value">{value}</p>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="chart-card">
      <p className="chart-card-title">{title}</p>
      <div className="chart-card-body">{children}</div>
    </div>
  );
}

function HelpItem({ title, risk, text }) {
  return (
    <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/50 p-3">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-zinc-400">Risco: {risk}</p>
      <p className="mt-1 text-xs text-zinc-300">{text}</p>
    </div>
  );
}

function FinanceTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const month = typeof label === "string" && /^\d{4}-\d{2}$/.test(label) ? monthLabel(label) : label;
  return (
    <div className="min-w-44 rounded-xl border border-zinc-600 bg-zinc-900/95 p-3 text-xs shadow-xl">
      <p className="mb-1 border-b border-zinc-700 pb-1 text-zinc-300">{month}</p>
      <div className="space-y-1">
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1 text-zinc-300">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: entry.color }} />
              {chartSeriesLabels[entry.dataKey] || entry.name || entry.dataKey}
            </span>
            <span className="font-medium text-zinc-100">{tooltipValueFormatter(entry.value, entry.dataKey)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HelpCircleIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.3 9a2.7 2.7 0 1 1 4.7 1.8c-.84.8-1.5 1.3-1.5 2.7" />
      <path d="M12 16.9h.01" />
    </svg>
  );
}

function InfoCircleIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10.5v5" />
      <path d="M12 7.6h.01" />
    </svg>
  );
}

function CloseIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}







