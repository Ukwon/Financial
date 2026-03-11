function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
}

function addUnit(date, unit, value) {
  const d = new Date(date);
  if (unit === "DAILY") d.setDate(d.getDate() + value);
  else if (unit === "WEEKLY") d.setDate(d.getDate() + value * 7);
  else if (unit === "MONTHLY") d.setMonth(d.getMonth() + value);
  else if (unit === "YEARLY") d.setFullYear(d.getFullYear() + value);
  return d;
}

function addMonthsAligned(baseDate, monthsToAdd, preferredDay) {
  const d = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth() + monthsToAdd,
    1,
    baseDate.getHours(),
    baseDate.getMinutes(),
    baseDate.getSeconds(),
    baseDate.getMilliseconds()
  );
  const maxDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(preferredDay, maxDay));
  return d;
}

async function ensureWallet(prisma) {
  const count = await prisma.wallet.count();
  if (count > 0) {
    return prisma.wallet.findFirst({ orderBy: { createdAt: "asc" } });
  }
  return prisma.wallet.create({ data: { name: "Pessoal" } });
}

async function seedCategories(prisma) {
  const existing = await prisma.category.count();
  if (existing > 0) return;
  await prisma.category.createMany({
    data: [
      { name: "Salario", kind: "INCOME" },
      { name: "Freelance", kind: "INCOME" },
      { name: "Moradia", kind: "EXPENSE" },
      { name: "Mercado", kind: "EXPENSE" },
      { name: "Transporte", kind: "EXPENSE" }
    ]
  });
}

async function generatePlanOccurrences(prisma, monthsAhead = 12, monthsBack = 24) {
  const plans = await prisma.plan.findMany({ where: { isActive: true } });
  const now = new Date();
  const fromDate = startOfMonth(new Date(now.getFullYear(), now.getMonth() - Math.max(0, Number(monthsBack || 0)), 1));
  const toDate = endOfMonth(new Date(now.getFullYear(), now.getMonth() + monthsAhead, 1));

  for (const plan of plans) {
    if (plan.type === "INSTALLMENT") {
      const total = plan.installments || 1;
      const preferredDay = new Date(plan.startDate).getDate();
      for (let i = 0; i < total; i += 1) {
        const due = addMonthsAligned(new Date(plan.startDate), i, preferredDay);
        if (due > toDate) break;
        if (due < fromDate) continue;
        if (plan.endDate && due > plan.endDate) break;
        await prisma.planOccurrence.upsert({
          where: { planId_dueDate: { planId: plan.id, dueDate: due } },
          update: { amountCents: plan.amountCents },
          create: {
            planId: plan.id,
            dueDate: due,
            amountCents: plan.amountCents
          }
        });
      }
      continue;
    }

    const recurrenceUnit = plan.recurrenceUnit || "MONTHLY";
    const intervalValue = plan.intervalValue || 1;
    if (recurrenceUnit === "MONTHLY" || recurrenceUnit === "YEARLY") {
      const preferredDay = new Date(plan.startDate).getDate();
      const stepMonths = recurrenceUnit === "YEARLY" ? intervalValue * 12 : intervalValue;
      let step = 0;
      while (true) {
        const cursor = addMonthsAligned(new Date(plan.startDate), step * stepMonths, preferredDay);
        if (cursor > toDate) break;
        if (cursor >= fromDate && (!plan.endDate || cursor <= plan.endDate)) {
          await prisma.planOccurrence.upsert({
            where: { planId_dueDate: { planId: plan.id, dueDate: new Date(cursor) } },
            update: { amountCents: plan.amountCents },
            create: {
              planId: plan.id,
              dueDate: new Date(cursor),
              amountCents: plan.amountCents
            }
          });
        }
        step += 1;
      }
      continue;
    }

    let cursor = new Date(plan.startDate);
    while (cursor <= toDate) {
      if (cursor >= fromDate && (!plan.endDate || cursor <= plan.endDate)) {
        await prisma.planOccurrence.upsert({
          where: { planId_dueDate: { planId: plan.id, dueDate: new Date(cursor) } },
          update: { amountCents: plan.amountCents },
          create: {
            planId: plan.id,
            dueDate: new Date(cursor),
            amountCents: plan.amountCents
          }
        });
      }
      cursor = addUnit(cursor, plan.recurrenceUnit || "MONTHLY", plan.intervalValue || 1);
    }
  }
}

function monthKey(date) {
  return `${date.getFullYear()}-${`${date.getMonth() + 1}`.padStart(2, "0")}`;
}

function centsToNumber(cents) {
  return Number((cents / 100).toFixed(2));
}

async function buildDashboard(prisma, monthsAhead = 12, walletId = null, tagId = null, startMonthKey = null, monthsBack = 0) {
  const now = new Date();
  const parsedStart = String(startMonthKey || "").match(/^(\d{4})-(\d{2})$/);
  const anchor = parsedStart
    ? startOfMonth(new Date(Number(parsedStart[1]), Number(parsedStart[2]) - 1, 1))
    : startOfMonth(now);
  const safeMonthsAhead = Math.max(1, Number(monthsAhead || 12));
  const safeMonthsBack = Math.max(0, Number(monthsBack || 0));
  const from = startOfMonth(new Date(anchor.getFullYear(), anchor.getMonth() - safeMonthsBack, 1));
  const to = endOfMonth(new Date(anchor.getFullYear(), anchor.getMonth() + safeMonthsAhead - 1, 1));

  const [transactions, occurrences, goals, goalAllocations, previousTransactions, previousOccurrences, previousGoalAllocations] = await Promise.all([
    prisma.transaction.findMany({
      where: {
        walletId: walletId || undefined,
        tags: tagId ? { some: { tagId } } : undefined,
        dueDate: { gte: from, lte: to }
      },
      select: { type: true, amountCents: true, dueDate: true }
    }),
    tagId
      ? Promise.resolve([])
      : prisma.planOccurrence.findMany({
          where: {
            dueDate: { gte: from, lte: to },
            plan: walletId ? { walletId } : undefined
          },
          include: { plan: { select: { transactionType: true } } }
        }),
    tagId
      ? Promise.resolve([])
      : prisma.goal.findMany({
          where: { walletId: walletId || undefined },
          include: { allocations: true }
        }),
    tagId
      ? Promise.resolve([])
      : prisma.goalAllocation.findMany({
          where: {
            allocatedAt: { gte: from, lte: to },
            goal: walletId ? { walletId } : undefined
          },
          select: {
            transactionId: true,
            amountCents: true,
            allocatedAt: true,
            goal: { select: { participantCount: true } }
          }
        }),
    prisma.transaction.findMany({
      where: {
        walletId: walletId || undefined,
        tags: tagId ? { some: { tagId } } : undefined,
        dueDate: { lt: from }
      },
      select: { type: true, amountCents: true }
    }),
    tagId
      ? Promise.resolve([])
      : prisma.planOccurrence.findMany({
          where: {
            dueDate: { lt: from },
            plan: walletId ? { walletId } : undefined
          },
          include: { plan: { select: { transactionType: true } } }
        }),
    tagId
      ? Promise.resolve([])
      : prisma.goalAllocation.findMany({
          where: {
            allocatedAt: { lt: from },
            goal: walletId ? { walletId } : undefined
          },
          select: {
            transactionId: true,
            amountCents: true,
            goal: { select: { participantCount: true } }
          }
        })
  ]);

  const totals = { incomeCents: 0, expenseCents: 0, goalsPlannedCents: 0 };
  const monthly = {};

  for (const t of transactions) {
    const key = monthKey(t.dueDate);
    if (!monthly[key]) monthly[key] = { incomeCents: 0, expenseCents: 0, goalsPlannedCents: 0 };
    if (t.type === "INCOME") {
      totals.incomeCents += t.amountCents;
      monthly[key].incomeCents += t.amountCents;
    } else if (t.type === "EXPENSE") {
      totals.expenseCents += t.amountCents;
      monthly[key].expenseCents += t.amountCents;
    }
  }

  for (const o of occurrences) {
    const key = monthKey(o.dueDate);
    if (!monthly[key]) monthly[key] = { incomeCents: 0, expenseCents: 0, goalsPlannedCents: 0 };
    if (o.plan.transactionType === "INCOME") {
      totals.incomeCents += o.amountCents;
      monthly[key].incomeCents += o.amountCents;
    } else if (o.plan.transactionType === "EXPENSE") {
      totals.expenseCents += o.amountCents;
      monthly[key].expenseCents += o.amountCents;
    }
  }

  // Option 2: goal contributions are treated as investment expenses,
  // reducing available balance in the month they were allocated.
  for (const a of goalAllocations) {
    if (a.transactionId) continue;
    const key = monthKey(a.allocatedAt);
    if (!monthly[key]) monthly[key] = { incomeCents: 0, expenseCents: 0, goalsPlannedCents: 0 };
    totals.expenseCents += a.amountCents;
    monthly[key].expenseCents += a.amountCents;
  }

  // Planned monthly goal contribution (personal share) is also treated as expense
  // so the available amount to spend is realistic in dashboard calculations.
  for (const goal of goals) {
    if (!goal.targetDate) continue;
    const participants = Math.max(1, Number(goal.participantCount || 1));
    const allocatedCents = Number(goal.initialAmountCents || 0) + (goal.allocations || []).reduce((sum, item) => sum + (item.amountCents || 0), 0);
    const remainingCents = Math.max((goal.targetCents || 0) - allocatedCents, 0);
    const personalRemainingCents = Math.round(remainingCents / participants);
    if (!personalRemainingCents) continue;
    const actualPersonalByMonth = new Map();
    for (const item of goal.allocations || []) {
      const personal = Math.round(item.amountCents || 0);
      if (personal <= 0) continue;
      const key = monthKey(new Date(item.allocatedAt));
      actualPersonalByMonth.set(key, (actualPersonalByMonth.get(key) || 0) + personal);
    }

    const planningStart = startOfMonth(new Date(Math.max(startOfMonth(now).getTime(), startOfMonth(new Date(goal.createdAt)).getTime())));
    const rangeStart = startOfMonth(new Date(Math.max(from.getTime(), planningStart.getTime())));
    const goalEnd = startOfMonth(new Date(goal.targetDate));
    const rangeEnd = startOfMonth(new Date(Math.min(to.getTime(), goalEnd.getTime())));
    if (rangeEnd < rangeStart) continue;

    const monthKeys = [];
    const cursor = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), 1);
    while (cursor <= rangeEnd) {
      monthKeys.push(monthKey(cursor));
      cursor.setMonth(cursor.getMonth() + 1);
    }
    if (!monthKeys.length) continue;

    let remaining = personalRemainingCents;
    for (let i = 0; i < monthKeys.length; i += 1) {
      const monthsLeft = monthKeys.length - i;
      const installment = Math.ceil(remaining / monthsLeft);
      remaining -= installment;
      const key = monthKeys[i];
      const actualThisMonth = actualPersonalByMonth.get(key) || 0;
      const plannedNet = Math.max(0, installment - actualThisMonth);
      if (!plannedNet) continue;
      if (!monthly[key]) monthly[key] = { incomeCents: 0, expenseCents: 0, goalsPlannedCents: 0 };
      totals.expenseCents += plannedNet;
      monthly[key].expenseCents += plannedNet;
      totals.goalsPlannedCents += plannedNet;
      monthly[key].goalsPlannedCents += plannedNet;
    }
  }

  let openingBalanceCents = 0;
  for (const t of previousTransactions) {
    if (t.type === "INCOME") openingBalanceCents += t.amountCents;
    else if (t.type === "EXPENSE") openingBalanceCents -= t.amountCents;
  }
  for (const o of previousOccurrences) {
    if (o.plan.transactionType === "INCOME") openingBalanceCents += o.amountCents;
    else if (o.plan.transactionType === "EXPENSE") openingBalanceCents -= o.amountCents;
  }
  for (const a of previousGoalAllocations) {
    if (a.transactionId) continue;
    openingBalanceCents -= a.amountCents;
  }

  const byMonth = [];
  let runningBalanceCents = openingBalanceCents;
  let cursor = new Date(from.getFullYear(), from.getMonth(), 1);
  while (cursor <= to) {
    const key = monthKey(cursor);
    const values = monthly[key] || { incomeCents: 0, expenseCents: 0, goalsPlannedCents: 0 };
    const monthBalanceCents = values.incomeCents - values.expenseCents;
    runningBalanceCents += monthBalanceCents;
    byMonth.push({
      month: key,
      income: centsToNumber(values.incomeCents),
      expense: centsToNumber(values.expenseCents),
      balance: centsToNumber(monthBalanceCents),
      accumulated: centsToNumber(runningBalanceCents),
      goalsPlanned: centsToNumber(values.goalsPlannedCents)
    });
    cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
  }

  const goalsProgress = goals.map((goal) => {
    const allocated = Number(goal.initialAmountCents || 0) + goal.allocations.reduce((sum, item) => sum + item.amountCents, 0);
    return {
      id: goal.id,
      name: goal.name,
      target: centsToNumber(goal.targetCents),
      allocated: centsToNumber(allocated),
      progressPercent: goal.targetCents > 0 ? Number(((allocated / goal.targetCents) * 100).toFixed(1)) : 0,
      targetDate: goal.targetDate
    };
  });

  return {
    totals: {
      income: centsToNumber(totals.incomeCents),
      expense: centsToNumber(totals.expenseCents),
      balance: centsToNumber(totals.incomeCents - totals.expenseCents),
      goalsPlanned: centsToNumber(totals.goalsPlannedCents)
    },
    monthly: byMonth,
    goals: goalsProgress
  };
}

function parseMonthKey(monthKey) {
  const match = String(monthKey || "").match(/^(\d{4})-(\d{2})$/);
  if (!match) return null;
  const y = Number(match[1]);
  const m = Number(match[2]);
  if (!y || m < 1 || m > 12) return null;
  return { year: y, month: m };
}

function monthDateRange(monthKey) {
  const p = parseMonthKey(monthKey);
  if (!p) return null;
  const from = new Date(p.year, p.month - 1, 1, 0, 0, 0, 0);
  const to = new Date(p.year, p.month, 0, 23, 59, 59, 999);
  return { from, to };
}

async function buildTagDashboard(prisma, walletId, monthKey) {
  if (!walletId) return { topTags: [], insight: "", budgets: [] };
  const currentRange = monthDateRange(monthKey);
  if (!currentRange) return { topTags: [], insight: "", budgets: [] };
  const prevMonthDate = new Date(currentRange.from.getFullYear(), currentRange.from.getMonth() - 1, 1);
  const prevKey = `${prevMonthDate.getFullYear()}-${String(prevMonthDate.getMonth() + 1).padStart(2, "0")}`;
  const prevRange = monthDateRange(prevKey);

  const [currentTx, prevTx, currentOccurrences, prevOccurrences, allBudgets] = await Promise.all([
    prisma.transaction.findMany({
      where: {
        walletId,
        type: "EXPENSE",
        dueDate: { gte: currentRange.from, lte: currentRange.to }
      },
      include: { tags: { include: { tag: true } } }
    }),
    prisma.transaction.findMany({
      where: {
        walletId,
        type: "EXPENSE",
        dueDate: { gte: prevRange.from, lte: prevRange.to }
      },
      include: { tags: { include: { tag: true } } }
    }),
    prisma.planOccurrence.findMany({
      where: {
        dueDate: { gte: currentRange.from, lte: currentRange.to },
        plan: { walletId, transactionType: "EXPENSE", isActive: true }
      },
      include: { plan: { include: { tags: { include: { tag: true } } } } }
    }),
    prisma.planOccurrence.findMany({
      where: {
        dueDate: { gte: prevRange.from, lte: prevRange.to },
        plan: { walletId, transactionType: "EXPENSE", isActive: true }
      },
      include: { plan: { include: { tags: { include: { tag: true } } } } }
    }),
    prisma.monthlyTagBudget.findMany({
      where: { walletId },
      include: { tag: true },
      orderBy: { updatedAt: "desc" }
    })
  ]);

  const budgetPriority = (key, selectedKey) => {
    if (key === "GLOBAL") return 3;
    if (key === selectedKey) return 2;
    return 1;
  };
  const budgetMap = new Map();
  for (const row of allBudgets) {
    const current = budgetMap.get(row.tagId);
    if (!current) {
      budgetMap.set(row.tagId, row);
      continue;
    }
    const nextScore = budgetPriority(row.monthKey, monthKey);
    const currentScore = budgetPriority(current.monthKey, monthKey);
    if (nextScore > currentScore) budgetMap.set(row.tagId, row);
  }
  const budgets = [...budgetMap.values()];

  const aggregateTx = (rows) => {
    const map = new Map();
    for (const tx of rows) {
      const links = tx.tags || [];
      if (!links.length) continue;
      const share = Math.round((tx.amountCents || 0) / links.length);
      for (const link of links) {
        const key = link.tagId;
        const prev = map.get(key) || {
          tagId: key,
          name: link.tag?.name || "Tag",
          color: link.tag?.color || "#38bdf8",
          amountCents: 0
        };
        prev.amountCents += share;
        map.set(key, prev);
      }
    }
    return map;
  };

  const aggregateOccurrences = (rows) => {
    const map = new Map();
    for (const occurrence of rows) {
      const links = occurrence.plan?.tags || [];
      if (!links.length) continue;
      const share = Math.round((occurrence.amountCents || 0) / links.length);
      for (const link of links) {
        const key = link.tagId;
        const prev = map.get(key) || {
          tagId: key,
          name: link.tag?.name || "Tag",
          color: link.tag?.color || "#38bdf8",
          amountCents: 0
        };
        prev.amountCents += share;
        map.set(key, prev);
      }
    }
    return map;
  };

  const mergeMaps = (...maps) => {
    const out = new Map();
    for (const map of maps) {
      for (const item of map.values()) {
        const prev = out.get(item.tagId) || { ...item, amountCents: 0 };
        prev.amountCents += item.amountCents || 0;
        out.set(item.tagId, prev);
      }
    }
    return out;
  };

  const currentMap = mergeMaps(aggregateTx(currentTx), aggregateOccurrences(currentOccurrences));
  const prevMap = mergeMaps(aggregateTx(prevTx), aggregateOccurrences(prevOccurrences));
  const currentTotal = [...currentMap.values()].reduce((sum, item) => sum + item.amountCents, 0);

  const topTags = [...currentMap.values()]
    .sort((a, b) => b.amountCents - a.amountCents)
    .slice(0, 10)
    .map((item) => {
      const prev = prevMap.get(item.tagId)?.amountCents || 0;
      const changePercent = prev > 0 ? Number((((item.amountCents - prev) / prev) * 100).toFixed(1)) : null;
      return {
        ...item,
        amount: Number((item.amountCents / 100).toFixed(2)),
        percent: currentTotal > 0 ? Number(((item.amountCents / currentTotal) * 100).toFixed(1)) : 0,
        changePercent
      };
    });

  const top = topTags[0];
  const insight = top
    ? `Maior gasto no mês: ${top.name} (${Number((top.amountCents / 100).toFixed(2)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}, ${top.percent}%).`
    : "Sem gastos com tags no mês selecionado.";

  const budgetRows = budgets.map((row) => {
    const spentCents = currentMap.get(row.tagId)?.amountCents || 0;
    const percentUsed = row.limitCents > 0 ? Number(((spentCents / row.limitCents) * 100).toFixed(1)) : 0;
    return {
      id: row.id,
      tagId: row.tagId,
      tagName: row.tag?.name || "Tag",
      tagColor: row.tag?.color || "#38bdf8",
      monthKey: row.monthKey,
      limit: Number((row.limitCents / 100).toFixed(2)),
      spent: Number((spentCents / 100).toFixed(2)),
      percentUsed,
      status: percentUsed >= 100 ? "OVER" : percentUsed >= 80 ? "WARN" : "OK"
    };
  });

  return {
    topTags,
    insight,
    budgets: budgetRows
  };
}

module.exports = {
  ensureWallet,
  seedCategories,
  generatePlanOccurrences,
  buildDashboard,
  addMonthsAligned,
  buildTagDashboard
};
