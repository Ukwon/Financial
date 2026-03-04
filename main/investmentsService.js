function parseBrlNumber(value) {
  if (typeof value === "number") return value;
  if (!value) return 0;
  const raw = String(value).trim();
  if (!raw) return 0;

  // Handles "1.234,56", "1234,56" and "1234.56" formats safely.
  if (raw.includes(",") && raw.includes(".")) {
    return Number(raw.replace(/\./g, "").replace(",", "."));
  }
  if (raw.includes(",")) {
    return Number(raw.replace(",", "."));
  }
  return Number(raw);
}

function parseBcbDate(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return null;
  const [dd, mm, yyyy] = dateStr.split("/");
  if (!dd || !mm || !yyyy) return null;
  const iso = `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
  return Number.isNaN(new Date(iso).getTime()) ? null : iso;
}

async function fetchBcbSeries(code, count = 1) {
  const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${code}/dados/ultimos/${count}?formato=json`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`BCB request failed: ${response.status}`);
  const data = await response.json();
  return (data || []).map((item) => ({
    date: item.data,
    dateIso: parseBcbDate(item.data),
    value: parseBrlNumber(item.valor)
  }));
}

function buildInstruments({ selicAnnual, cdiAnnual, ipca12m }) {
  const poupancaAnnual = selicAnnual > 8.5 ? 6.17 : selicAnnual * 0.7;
  return [
    {
      id: "tesouro_selic",
      name: "Tesouro Selic",
      rateAnnual: Number(Math.max(0, selicAnnual - 0.15).toFixed(2)),
      benchmark: "Selic",
      risk: "Baixo",
      liquidity: "D+1",
      description: "Título público pós-fixado com baixa volatilidade para reserva e curto prazo.",
      dataType: "base_oficial_com_estimativa"
    },
    {
      id: "tesouro_prefixado_2029",
      name: "Tesouro Prefixado (medio prazo)",
      rateAnnual: Number((selicAnnual - 0.7).toFixed(2)),
      benchmark: "Prefixado",
      risk: "Baixo/Medio",
      liquidity: "D+1",
      description: "Taxa definida na entrada; pode oscilar no meio do caminho.",
      dataType: "cenario"
    },
    {
      id: "tesouro_prefixado_2035",
      name: "Tesouro Prefixado (longo prazo)",
      rateAnnual: Number((selicAnnual - 0.4).toFixed(2)),
      benchmark: "Prefixado",
      risk: "Medio",
      liquidity: "D+1",
      description: "Maior sensibilidade aos juros em horizontes mais longos.",
      dataType: "cenario"
    },
    {
      id: "cdb_100_cdi",
      name: "CDB 100% CDI",
      rateAnnual: Number(cdiAnnual.toFixed(2)),
      benchmark: "CDI",
      risk: "Baixo/Medio",
      liquidity: "Depende do emissor",
      description: "Renda fixa bancária tradicional, com cobertura do FGC até limites legais.",
      dataType: "base_oficial_com_estimativa"
    },
    {
      id: "cdb_110_cdi",
      name: "CDB 110% CDI",
      rateAnnual: Number((cdiAnnual * 1.1).toFixed(2)),
      benchmark: "CDI",
      risk: "Medio",
      liquidity: "Depende do emissor",
      description: "Normalmente exige prazo maior ou menor liquidez para pagar premio.",
      dataType: "cenario"
    },
    {
      id: "cdb_120_cdi",
      name: "CDB 120% CDI",
      rateAnnual: Number((cdiAnnual * 1.2).toFixed(2)),
      benchmark: "CDI",
      risk: "Medio",
      liquidity: "Depende do emissor",
      description: "Opção agressiva em renda fixa bancária, geralmente com mais restrições.",
      dataType: "cenario"
    },
    {
      id: "lci_lca_90_cdi",
      name: "LCI/LCA 90% CDI",
      rateAnnual: Number((cdiAnnual * 0.9).toFixed(2)),
      benchmark: "CDI",
      risk: "Baixo/Medio",
      liquidity: "Com carencia",
      description: "Isenta de IR para PF; taxa menor pode compensar via isenção tributária.",
      dataType: "cenario"
    },
    {
      id: "lci_lca_95_cdi",
      name: "LCI/LCA 95% CDI",
      rateAnnual: Number((cdiAnnual * 0.95).toFixed(2)),
      benchmark: "CDI",
      risk: "Baixo/Medio",
      liquidity: "Com carencia",
      description: "Isenta de IR para PF, comum para horizonte de medio prazo.",
      dataType: "cenario"
    },
    {
      id: "tesouro_ipca_real5",
      name: "Tesouro IPCA+ (real 5%)",
      rateAnnual: Number((ipca12m + 5).toFixed(2)),
      benchmark: "IPCA + juro real",
      risk: "Baixo (soberano)",
      liquidity: "D+1",
      description: "Protege inflação com taxa real; pode oscilar antes do vencimento.",
      dataType: "cenario"
    },
    {
      id: "tesouro_ipca_real6",
      name: "Tesouro IPCA+ (real 6%)",
      rateAnnual: Number((ipca12m + 6).toFixed(2)),
      benchmark: "IPCA + juro real",
      risk: "Baixo (soberano)",
      liquidity: "D+1",
      description: "Cenário otimista para titulos atrelados ao IPCA.",
      dataType: "cenario"
    },
    {
      id: "debenture_infra_real7",
      name: "Debenture incentivada (IPCA+7)",
      rateAnnual: Number((ipca12m + 7).toFixed(2)),
      benchmark: "IPCA + juro real",
      risk: "Medio/Alto",
      liquidity: "Baixa/Media",
      description: "Crédito privado com isenção de IR (PF), maior risco de emissor.",
      dataType: "cenario"
    },
    {
      id: "fii_renda_10",
      name: "FIIs de renda (cenário 10% a.a.)",
      rateAnnual: 10,
      benchmark: "Dividendos + cota",
      risk: "Medio/Alto",
      liquidity: "Alta (bolsa)",
      description: "Cenário simplificado para FIIs; retorno real pode variar bastante.",
      dataType: "cenario"
    },
    {
      id: "etf_acoes_12",
      name: "ETF de ações (cenário 12% a.a.)",
      rateAnnual: 12,
      benchmark: "Bolsa",
      risk: "Alto",
      liquidity: "Alta (bolsa)",
      description: "Cenário de longo prazo para renda variavel; sem garantia de retorno.",
      dataType: "cenario"
    },
    {
      id: "poupanca",
      name: "Poupanca (aprox.)",
      rateAnnual: Number(poupancaAnnual.toFixed(2)),
      benchmark: "Regra da poupança",
      risk: "Baixo",
      liquidity: "Imediata",
      description: "Baixa complexidade e liquidez imediata, com rendimento historicamente menor.",
      dataType: "base_oficial_com_estimativa"
    }
  ];
}

async function getMarketSnapshot() {
  let selicAnnual = 10.5;
  let cdiAnnual = 10.4;
  let ipca12m = 4.5;
  let updatedAt = new Date().toISOString().slice(0, 10);
  let usingFallback = false;

  try {
    const [selicArr, ipcaArr] = await Promise.all([
      fetchBcbSeries(432, 1), // Selic meta anual
      fetchBcbSeries(13522, 1) // IPCA acumulado 12m
    ]);
    if (selicArr[0]) {
      selicAnnual = selicArr[0].value;
      cdiAnnual = Math.max(0, selicAnnual - 0.1);
      updatedAt = selicArr[0].dateIso || parseBcbDate(selicArr[0].date) || updatedAt;
    }
    if (ipcaArr[0]) {
      ipca12m = ipcaArr[0].value;
      if (!selicArr[0]) updatedAt = ipcaArr[0].dateIso || parseBcbDate(ipcaArr[0].date) || updatedAt;
    }
  } catch (_e) {
    usingFallback = true;
  }

  return {
    rates: {
      selicAnnual: Number(selicAnnual.toFixed(2)),
      cdiAnnual: Number(cdiAnnual.toFixed(2)),
      ipca12m: Number(ipca12m.toFixed(2))
    },
    instruments: buildInstruments({ selicAnnual, cdiAnnual, ipca12m }),
    updatedAt,
    source: {
      provider: "Banco Central do Brasil (SGS)",
      reliability: usingFallback ? "media (fallback local)" : "alta (fonte oficial)",
      usingFallback,
      fetchedAt: new Date().toISOString(),
      series: [
        {
          code: 432,
          name: "Meta Selic (% a.a.)",
          url: "https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados/ultimos/1?formato=json"
        },
        {
          code: 13522,
          name: "IPCA - Variação acumulada em 12 meses (%)",
          url: "https://api.bcb.gov.br/dados/serie/bcdata.sgs.13522/dados/ultimos/1?formato=json"
        }
      ],
      notes: usingFallback
        ? "Sem conexao com BCB no momento; exibindo taxas padrao locais."
        : "Taxas-base capturadas em fonte oficial. Alguns ativos usam cenários sobre essas taxas."
    }
  };
}

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function addMonths(date, count) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + count);
  return d;
}

function annualToMonthlyRate(rateAnnual) {
  return Math.pow(1 + rateAnnual / 100, 1 / 12) - 1;
}

function simulateInvestment(payload) {
  const initialAmount = Number(payload.initialAmount || 0);
  const monthlyContribution = Number(payload.monthlyContribution || 0);
  const annualRate = Number(payload.annualRate || 0);
  const startDate = payload.startDate ? new Date(payload.startDate) : new Date();
  const targetDate = payload.targetDate ? new Date(payload.targetDate) : addMonths(startDate, 12);

  const months = Math.max(
    1,
    (targetDate.getFullYear() - startDate.getFullYear()) * 12 +
      (targetDate.getMonth() - startDate.getMonth()) +
      1
  );

  const monthlyRate = annualToMonthlyRate(annualRate);
  const rows = [];
  let value = initialAmount;
  let investedTotal = initialAmount;

  for (let i = 0; i < months; i += 1) {
    const monthDate = addMonths(startDate, i);
    const contribution = i === 0 ? 0 : monthlyContribution;
    investedTotal += contribution;
    const grossBeforeYield = value + contribution;
    const interest = grossBeforeYield * monthlyRate;
    value = grossBeforeYield + interest;
    rows.push({
      month: monthKey(monthDate),
      contribution: Number(contribution.toFixed(2)),
      interest: Number(interest.toFixed(2)),
      value: Number(value.toFixed(2))
    });
  }

  return {
    summary: {
      investedTotal: Number(investedTotal.toFixed(2)),
      finalValue: Number(value.toFixed(2)),
      earnings: Number((value - investedTotal).toFixed(2)),
      annualRate: Number(annualRate.toFixed(2)),
      months
    },
    monthly: rows
  };
}

module.exports = {
  getMarketSnapshot,
  simulateInvestment
};
