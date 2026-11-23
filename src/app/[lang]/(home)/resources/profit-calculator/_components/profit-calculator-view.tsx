"use client";

import { useMemo, useState } from "react";
import { Download, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const BRAND = siteConfig.name;

interface CalcValues {
  ordersPerMonth: number;
  averageOrder: number;
  growthPct: number;
  commissionPct: number;
  deliveryFee: number;
  serviceFee: number;
  driverCost: number;
  paymentPct: number;
  promoPerOrder: number;
  fixedMonthly: number;
}

const DEFAULT_RAW: Record<keyof CalcValues, string> = {
  ordersPerMonth: "3000",
  averageOrder: "25",
  growthPct: "8",
  commissionPct: "20",
  deliveryFee: "3.5",
  serviceFee: "1",
  driverCost: "4.5",
  paymentPct: "3",
  promoPerOrder: "0.5",
  fixedMonthly: "6000",
};

interface FieldConfig {
  name: keyof CalcValues;
  label: string;
  hint: string;
  step: string;
}

const FIELD_GROUPS: { legend: string; fields: FieldConfig[] }[] = [
  {
    legend: "Orders",
    fields: [
      {
        name: "ordersPerMonth",
        label: "Orders per month",
        hint: "Orders you expect in your first month.",
        step: "1",
      },
      {
        name: "averageOrder",
        label: "Average order value",
        hint: "Average basket, before delivery and service fees.",
        step: "0.01",
      },
      {
        name: "growthPct",
        label: "Monthly order growth (%)",
        hint: "How much orders grow each month.",
        step: "0.1",
      },
    ],
  },
  {
    legend: "What you earn per order",
    fields: [
      {
        name: "commissionPct",
        label: "Commission to stores (%)",
        hint: "The share of each basket you charge the store.",
        step: "0.1",
      },
      {
        name: "deliveryFee",
        label: "Delivery fee per order",
        hint: "What the customer pays for delivery.",
        step: "0.01",
      },
      {
        name: "serviceFee",
        label: "Service fee per order",
        hint: "Any extra fee the customer pays you.",
        step: "0.01",
      },
    ],
  },
  {
    legend: "What each order costs you",
    fields: [
      {
        name: "driverCost",
        label: "Driver cost per delivery",
        hint: "What you pay your driver or courier partner.",
        step: "0.01",
      },
      {
        name: "paymentPct",
        label: "Payment processing (%)",
        hint: "Card fees on what the customer pays.",
        step: "0.1",
      },
      {
        name: "promoPerOrder",
        label: "Promotions per order",
        hint: "Average discount or coupon you fund.",
        step: "0.01",
      },
      {
        name: "fixedMonthly",
        label: "Fixed costs per month",
        hint: "Team, office, software and marketing.",
        step: "1",
      },
    ],
  },
];

const HOW_IT_WORKS_ITEMS = [
  {
    title: "You earn per order",
    body: "Average order value × commission %, plus the delivery fee and the service fee.",
  },
  {
    title: "It costs you per order",
    body: "Driver cost, plus payment processing on everything the customer pays, plus the promotions you fund.",
  },
  {
    title: "You keep per order",
    body: "What you earn per order minus what it costs you. If this is negative, growth makes the loss bigger.",
  },
  {
    title: "Break-even",
    body: "Fixed costs per month divided by what you keep per order.",
  },
  {
    title: "12-month projection",
    body: "Orders grow by your monthly growth rate. Profit is orders × what you keep per order, minus fixed costs.",
  },
  {
    title: "Profitable from month 1",
    body: "If month 1 does not cover fixed costs, the calculator works out the one change that closes the gap: more orders, a higher commission or delivery fee, or a lower driver cost, keeping everything else as you entered it.",
  },
];

const CALCULATOR_FAQS = [
  {
    q: "Do you see or save my numbers?",
    a: "No. Everything is calculated in your browser, and the spreadsheet is created on your device.",
  },
  {
    q: "Which currency should I use?",
    a: "Any. Enter every amount in the same currency and the results will be in that currency.",
  },
  {
    q: "Is this financial advice?",
    a: "No. It is a planning tool with simplified math. Taxes, refunds and other costs are not included, so check your plan with your own advisor.",
  },
  {
    q: "Where can I learn how to improve these numbers?",
    a: "The Growth playbooks cover delivery fees and zones, promotions without losing margin, and how to make money from a marketplace, step by step.",
  },
];

const moneyFmt = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const intFmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const pctFmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

function computeProjection(v: CalcValues) {
  const revenuePerOrder = v.averageOrder * (v.commissionPct / 100) + v.deliveryFee + v.serviceFee;
  const paymentFeePerOrder = (v.averageOrder + v.deliveryFee + v.serviceFee) * (v.paymentPct / 100);
  const costPerOrder = v.driverCost + paymentFeePerOrder + v.promoPerOrder;
  const contributionPerOrder = revenuePerOrder - costPerOrder;
  const monthlyProfit = v.ordersPerMonth * contributionPerOrder - v.fixedMonthly;
  const breakEvenOrders = contributionPerOrder > 0 ? Math.ceil(v.fixedMonthly / contributionPerOrder) : null;

  const months: {
    month: number;
    orders: number;
    revenue: number;
    costs: number;
    profit: number;
    cumulative: number;
  }[] = [];
  let cumulative = 0;
  for (let m = 1; m <= 12; m += 1) {
    const orders = Math.round(v.ordersPerMonth * Math.pow(1 + v.growthPct / 100, m - 1));
    const revenue = orders * revenuePerOrder;
    const costs = orders * costPerOrder + v.fixedMonthly;
    const profit = revenue - costs;
    cumulative += profit;
    months.push({ month: m, orders, revenue, costs, profit, cumulative });
  }

  return {
    revenuePerOrder,
    costPerOrder,
    contributionPerOrder,
    monthlyProfit,
    breakEvenOrders,
    months,
    yearProfit: cumulative,
  };
}

function computeDayOne(v: CalcValues, proj: ReturnType<typeof computeProjection>) {
  const profitable = proj.monthlyProfit >= 0 && proj.contributionPerOrder > 0;
  if (profitable) {
    const safetyMarginPct =
      proj.breakEvenOrders === null || v.ordersPerMonth <= 0
        ? null
        : ((v.ordersPerMonth - proj.breakEvenOrders) / v.ordersPerMonth) * 100;
    return {
      profitable: true as const,
      safetyMarginPct,
      levers: [] as string[],
    };
  }

  const gap = (v.ordersPerMonth > 0 ? v.fixedMonthly / v.ordersPerMonth : Infinity) - proj.contributionPerOrder;
  const finiteOrNull = (n: number) => (Number.isFinite(n) ? n : null);

  const reqCommissionRaw = v.averageOrder > 0 ? v.commissionPct + (gap / v.averageOrder) * 100 : Infinity;
  const reqCommission =
    finiteOrNull(reqCommissionRaw) !== null && reqCommissionRaw <= 100
      ? Math.ceil(reqCommissionRaw * 10) / 10
      : null;

  const payKeep = 1 - v.paymentPct / 100;
  const reqDeliveryRaw = payKeep > 0 ? v.deliveryFee + gap / payKeep : Infinity;
  const reqDelivery = finiteOrNull(reqDeliveryRaw) === null ? null : Math.ceil(reqDeliveryRaw * 100) / 100;

  const reqDriverRaw = v.driverCost - gap;
  const reqDriver = reqDriverRaw > 0 ? Math.floor(reqDriverRaw * 100) / 100 : null;

  const levers: string[] = [];
  if (proj.breakEvenOrders !== null) {
    levers.push(`Get at least ${intFmt.format(proj.breakEvenOrders)} orders in month 1`);
  }
  if (reqCommission !== null) {
    levers.push(`Charge stores at least ${pctFmt.format(reqCommission)}% commission`);
  }
  if (reqDelivery !== null) {
    levers.push(`Charge a delivery fee of at least ${moneyFmt.format(reqDelivery)}`);
  }
  if (reqDriver !== null) {
    levers.push(`Keep driver cost at or below ${moneyFmt.format(reqDriver)} per delivery`);
  }

  return {
    profitable: false as const,
    safetyMarginPct: null,
    levers,
  };
}

export function ProfitCalculatorView() {
  const [rawValues, setRawValues] = useState<Record<keyof CalcValues, string>>(DEFAULT_RAW);
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  const numericValues = useMemo<CalcValues>(() => {
    const parse = (k: keyof CalcValues) => {
      const n = Number.parseFloat(rawValues[k]);
      return Number.isFinite(n) && n >= 0 ? n : 0;
    };
    return {
      ordersPerMonth: parse("ordersPerMonth"),
      averageOrder: parse("averageOrder"),
      growthPct: parse("growthPct"),
      commissionPct: parse("commissionPct"),
      deliveryFee: parse("deliveryFee"),
      serviceFee: parse("serviceFee"),
      driverCost: parse("driverCost"),
      paymentPct: parse("paymentPct"),
      promoPerOrder: parse("promoPerOrder"),
      fixedMonthly: parse("fixedMonthly"),
    };
  }, [rawValues]);

  const projection = useMemo(() => computeProjection(numericValues), [numericValues]);
  const dayOne = useMemo(() => computeDayOne(numericValues, projection), [numericValues, projection]);

  const handleDownloadCsv = () => {
    const allFields = FIELD_GROUPS.flatMap((g) => g.fields);
    const rows: string[][] = [
      ...allFields.map((f) => [f.label, String(numericValues[f.name])]),
      [],
      ["Month", "Orders", "Revenue", "Costs", "Profit", "Cumulative profit"],
      ...projection.months.map((m) => [
        String(m.month),
        String(m.orders),
        m.revenue.toFixed(2),
        m.costs.toFixed(2),
        m.profit.toFixed(2),
        m.cumulative.toFixed(2),
      ]),
    ];

    const csv = rows
      .map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ordering-co-marketplace-profit.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. LIGHT HERO */}
      <section className="border-b border-[var(--od-border)] bg-[var(--od-bg)] py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px]">
              <Link href="/products" className="font-medium text-[var(--od-action-content)] underline underline-offset-4">
                Resources
              </Link>
              <span className="text-[var(--od-text-muted)]">/</span>
              <span className="text-[var(--od-text)]">Profit calculator</span>
            </nav>

            <h1 className="mt-6 text-[42px] sm:text-[56px] lg:text-[62px] font-bold tracking-[-0.045em] leading-[1.03] text-[var(--od-text)]">
              Make money from your first month.
            </h1>

            <p className="mt-5 text-[16.5px] sm:text-[18px] leading-[1.6] text-[var(--od-text-muted)]">
              Enter your orders, fees and costs. See what you keep on every order and whether month 1 covers your costs.
              If it does not, the calculator tells you exactly what to change: orders, commission, delivery fee or
              driver cost. Then download the numbers as a spreadsheet.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#calculator"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
              >
                Open the calculator
              </a>
              <Link
                href="/contact?meeting=demo#book"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
              >
                Book a demo
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] text-[var(--od-text-muted)]">
              {["Profit from month 1", "Free, no sign-up", "Download as a spreadsheet"].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#266df0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 2. #calculator — INTERACTIVE CALCULATOR */}
      <section id="calculator" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="font-mono text-[11.5px] font-semibold text-[var(--od-action-content)]">The calculator</p>
            <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              Your numbers, your marketplace.
            </h2>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              The fields start with example values. Replace them with your own, in your currency, and the results update
              as you type.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            {/* LEFT: 3 Fieldsets (10 inputs) */}
            <div className="lg:col-span-4 rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 space-y-7">
              {FIELD_GROUPS.map((group, gIdx) => (
                <fieldset
                  key={group.legend}
                  className={cn("space-y-4", gIdx > 0 && "border-t border-[var(--od-border)] pt-6")}
                >
                  <legend className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                    {group.legend}
                  </legend>

                  {group.fields.map((field) => (
                    <label key={field.name} className="block">
                      <span className="block text-[14px] font-bold text-[var(--od-text)]">{field.label}</span>
                      <span className="mt-0.5 block text-[12.5px] text-[var(--od-text-muted)]">{field.hint}</span>
                      <input
                        type="number"
                        name={field.name}
                        min={0}
                        step={field.step}
                        value={rawValues[field.name]}
                        onChange={(e) => setRawValues((prev) => ({ ...prev, [field.name]: e.target.value }))}
                        className="mt-2 h-[42px] w-full rounded-[6px] border border-[var(--od-border-strong)] bg-[var(--od-bg)] px-3 text-[15px] font-medium text-[var(--od-text)] outline-none transition-colors focus:border-[#266df0] focus:ring-2 focus:ring-[#266df0]/20"
                      />
                    </label>
                  ))}
                </fieldset>
              ))}

              <p className="border-t border-[var(--od-border)] pt-4 text-[12px] leading-[1.55] text-[var(--od-text-muted)]">
                Example values are for illustration only. They are not benchmarks or {BRAND} prices.
              </p>
            </div>

            {/* RIGHT: 6 KPIs + Day-One Diagnostic + 12-Month Table + CSV Download */}
            <div className="lg:col-span-8 space-y-6" aria-live="polite">
              {/* 6-Card KPI Grid */}
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5">
                  <dt className="text-[13px] text-[var(--od-text-muted)]">You earn per order</dt>
                  <dd className="mt-2 text-[28px] font-bold tracking-[-0.03em] text-[var(--od-text)] tabular-nums">
                    {moneyFmt.format(projection.revenuePerOrder)}
                  </dd>
                </div>

                <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5">
                  <dt className="text-[13px] text-[var(--od-text-muted)]">It costs you per order</dt>
                  <dd className="mt-2 text-[28px] font-bold tracking-[-0.03em] text-[var(--od-text)] tabular-nums">
                    {moneyFmt.format(projection.costPerOrder)}
                  </dd>
                </div>

                <div className="rounded-[10px] border-[1.5px] border-[#266df0] bg-[var(--od-bg)] p-5">
                  <dt className="text-[13px] text-[var(--od-text-muted)]">You keep per order</dt>
                  <dd
                    className={cn(
                      "mt-2 text-[28px] font-bold tracking-[-0.03em] tabular-nums",
                      projection.contributionPerOrder < 0 ? "text-red-600" : "text-[var(--od-text)]"
                    )}
                  >
                    {moneyFmt.format(projection.contributionPerOrder)}
                  </dd>
                </div>

                <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5">
                  <dt className="text-[13px] text-[var(--od-text-muted)]">Orders per month to break even</dt>
                  <dd className="mt-2 text-[28px] font-bold tracking-[-0.03em] text-[var(--od-text)] tabular-nums">
                    {projection.breakEvenOrders === null ? "Not reachable" : intFmt.format(projection.breakEvenOrders)}
                  </dd>
                </div>

                <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5">
                  <dt className="text-[13px] text-[var(--od-text-muted)]">Profit in month 1</dt>
                  <dd
                    className={cn(
                      "mt-2 text-[28px] font-bold tracking-[-0.03em] tabular-nums",
                      projection.monthlyProfit < 0 ? "text-red-600" : "text-[var(--od-text)]"
                    )}
                  >
                    {moneyFmt.format(projection.monthlyProfit)}
                  </dd>
                </div>

                <div className="rounded-[10px] border-[1.5px] border-[#266df0] bg-[var(--od-bg)] p-5">
                  <dt className="text-[13px] text-[var(--od-text-muted)]">Profit after 12 months</dt>
                  <dd
                    className={cn(
                      "mt-2 text-[28px] font-bold tracking-[-0.03em] tabular-nums",
                      projection.yearProfit < 0 ? "text-red-600" : "text-[var(--od-text)]"
                    )}
                  >
                    {moneyFmt.format(projection.yearProfit)}
                  </dd>
                </div>
              </dl>

              {/* Day-One Profitability Banner */}
              <div
                className={cn(
                  "rounded-[10px] border border-[var(--od-border)] border-l-4 bg-[var(--od-bg)] p-6",
                  dayOne.profitable ? "border-l-[#16a34a]" : "border-l-[#dc2626]"
                )}
              >
                <h3 className="text-[18px] font-bold text-[var(--od-text)]">
                  {dayOne.profitable
                    ? "Profitable from month 1."
                    : projection.contributionPerOrder <= 0
                      ? "Each order loses money right now. Change any one of these to be profitable from month 1:"
                      : "Not profitable in month 1 yet. Change any one of these and you will be:"}
                </h3>

                {dayOne.profitable && dayOne.safetyMarginPct !== null && (
                  <p className="mt-1.5 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                    Month 1 still covers all your costs even if you get{" "}
                    <strong className="font-semibold text-[var(--od-text)]">
                      {pctFmt.format(dayOne.safetyMarginPct)}%
                    </strong>{" "}
                    fewer orders than planned.
                  </p>
                )}

                {!dayOne.profitable && dayOne.levers.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[14.5px] text-[var(--od-text-muted)]">
                    {dayOne.levers.map((lever) => (
                      <li key={lever}>{lever}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* 12-Month Projection Table */}
              <div className="overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)]">
                <div className="border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-5 py-3.5 flex items-center justify-between gap-4">
                  <h3 className="text-[14px] font-bold text-[var(--od-text)]">12-month projection</h3>
                  <button
                    type="button"
                    onClick={handleDownloadCsv}
                    className="inline-flex items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-3.5 py-1.5 text-[13px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download as a spreadsheet</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[580px] border-collapse text-right text-[13.5px] tabular-nums">
                    <thead>
                      <tr className="border-b border-[var(--od-border)] text-[12px] font-semibold text-[var(--od-text-muted)]">
                        <th className="px-4 py-3 text-left">Month</th>
                        <th className="px-4 py-3">Orders</th>
                        <th className="px-4 py-3">Revenue</th>
                        <th className="px-4 py-3">Costs</th>
                        <th className="px-4 py-3">Profit</th>
                        <th className="px-4 py-3">Cumulative profit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--od-border)]">
                      {projection.months.map((row) => (
                        <tr key={row.month} className="hover:bg-[var(--od-surface-subtle)]/60">
                          <th scope="row" className="px-4 py-3 text-left font-bold text-[var(--od-text)]">
                            {row.month}
                          </th>
                          <td className="px-4 py-3 text-[var(--od-text)]">{intFmt.format(row.orders)}</td>
                          <td className="px-4 py-3 text-[var(--od-text)]">{moneyFmt.format(row.revenue)}</td>
                          <td className="px-4 py-3 text-[var(--od-text-muted)]">{moneyFmt.format(row.costs)}</td>
                          <td
                            className={cn(
                              "px-4 py-3 font-semibold",
                              row.profit < 0 ? "text-red-600" : "text-[var(--od-text)]"
                            )}
                          >
                            {moneyFmt.format(row.profit)}
                          </td>
                          <td
                            className={cn(
                              "px-4 py-3 font-semibold",
                              row.cumulative < 0 ? "text-red-600" : "text-[var(--od-text)]"
                            )}
                          >
                            {moneyFmt.format(row.cumulative)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. #how-it-works — SIMPLE MATH, SHOWN IN FULL */}
      <section
        id="how-it-works"
        className="scroll-mt-24 border-t border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-16 lg:py-20"
      >
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11.5px] font-semibold text-[var(--od-action-content)]">How it works</p>
              <h2 className="mt-2.5 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Simple math, shown in full.
              </h2>
              <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                No hidden assumptions. These are the formulas behind every number above.
              </p>
            </div>

            <ul className="lg:col-span-7 divide-y divide-[var(--od-border)] border-y border-[var(--od-border)]">
              {HOW_IT_WORKS_ITEMS.map((item) => (
                <li key={item.title} className="py-5">
                  <h3 className="text-[17px] font-bold text-[var(--od-text)]">{item.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 4. #faq — ABOUT THE CALCULATOR */}
      <section id="faq" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11.5px] font-semibold text-[var(--od-action-content)]">Questions</p>
              <h2 className="mt-2.5 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
                About the calculator
              </h2>
            </div>

            <div className="lg:col-span-7 border-t border-[var(--od-border)]">
              {CALCULATOR_FAQS.map((item) => {
                const open = !!openFaq[item.q];
                return (
                  <div key={item.q} className="border-b border-[var(--od-border)]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq((p) => ({ ...p, [item.q]: !p[item.q] }))}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left text-[16px] font-bold text-[var(--od-text)] cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <Plus
                        className={cn(
                          "h-4 w-4 shrink-0 text-[var(--od-text-muted)] transition-transform",
                          open && "rotate-45 text-[var(--od-action-content)]"
                        )}
                      />
                    </button>
                    {open && (
                      <p className="pb-5 text-[14.5px] leading-[1.65] text-[var(--od-text-muted)]">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. CLOSING DARK CTA BAND */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[10px] bg-[#0b0c0d] px-7 py-14 sm:px-14 sm:py-[72px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[634px] w-[696px] -translate-y-1/2"
              style={{
                background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.28), transparent)",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-white">
                Want to see your numbers on a real platform?
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#c4c6ca]">
                Bring your calculation to a demo. We will show you how {BRAND} handles commissions, delivery fees,
                drivers and payments for a marketplace like yours.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?meeting=demo#book"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
              >
                Book a demo
              </Link>
              <Link
                href="/solutions/marketplaces"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224]"
              >
                Read the Growth playbooks
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
