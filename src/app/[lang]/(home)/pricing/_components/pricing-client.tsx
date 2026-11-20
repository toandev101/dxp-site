"use client";

import { useState } from "react";
import { Calculator, Check, Minus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/constants/site-data";
import { useUiStore } from "@/stores/ui-store";
import useDictionaries from "@/hooks/useDictionaries";
import { formatCurrencyUSD, cn } from "@/lib/utils";
import { FaqSection } from "../../_components/faq-section";

const COMPARISON_ROWS = [
  { labelEn: "Order Commission Fee", labelVi: "Phí hoa hồng đơn hàng", r: "0%", m: "0%", e: "0%" },
  { labelEn: "White-Label Ordering Website", labelVi: "Website đặt hàng thương hiệu", r: true, m: true, e: true },
  { labelEn: "Native iOS & Android Apps", labelVi: "App iOS & Android riêng", r: true, m: true, e: true },
  { labelEn: "Self-Ordering Kiosk Mode", labelVi: "Chế độ Kiosk tự phục vụ", r: true, m: true, e: true },
  { labelEn: "Merchant App & Command Dashboard", labelVi: "App cửa hàng & Dashboard", r: true, m: true, e: true },
  { labelEn: "In-House Driver App & Live GPS", labelVi: "App tài xế & GPS trực tiếp", r: true, m: true, e: true },
  { labelEn: "Multi-Vendor Split Payouts", labelVi: "Chia doanh thu đa gian hàng", r: false, m: true, e: true },
  { labelEn: "AI Ordering Agents (WhatsApp/Voice)", labelVi: "AI Agents (WhatsApp/Voice)", r: "Add-on", m: "Add-on", e: "Included" },
  { labelEn: "REST API, Webhooks & MCP Server", labelVi: "REST API, Webhooks & MCP", r: true, m: true, e: true },
  { labelEn: "Open Frontend Source Code", labelVi: "Mã nguồn Frontend mở", r: false, m: false, e: true },
  { labelEn: "Dedicated Cluster & 99.99% SLA", labelVi: "Cụm máy chủ riêng & SLA 99,99%", r: false, m: false, e: true },
];

export function PricingClient() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { billingCycle, setBillingCycle, openDemoModal } = useUiStore();

  const [monthlyOrders, setMonthlyOrders] = useState(1500);
  const [avgOrderValue, setAvgOrderValue] = useState(32);

  const monthlyGmv = monthlyOrders * avgOrderValue;
  const thirdPartyCommission = Math.round(monthlyGmv * 0.28);
  const dxpMonthlyCost = monthlyOrders <= 2500 ? 425 : 425 + Math.round((monthlyOrders - 2500) * 0.29);
  const annualSavings = Math.max(0, (thirdPartyCommission - dxpMonthlyCost) * 12);

  const renderCell = (val: boolean | string) => {
    if (val === true) return <Check className="mx-auto h-4 w-4 text-c-primary" />;
    if (val === false) return <Minus className="mx-auto h-4 w-4 text-slate-300" />;
    return <span className="text-xs font-bold text-c-dark">{val}</span>;
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 to-white py-16 lg:py-24 border-b border-c-border">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60" />
        <Container className="relative z-10 text-center max-w-3xl">
          <Badge variant="success" className="mb-4">
            {isVi ? "0% Hoa Hồng · Minh Bạch Tuyệt Đối" : "0% Commission · Transparent SaaS Pricing"}
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-c-dark sm:text-5xl">
            {isVi ? "Bảng giá tăng trưởng cùng doanh nghiệp của bạn." : "Predictable pricing that scales with your orders."}
          </h1>
          <p className="mt-4 text-base text-c-description sm:text-lg">
            {isVi
              ? "Không thu chiết khấu phần trăm trên doanh thu. Mọi gói đều bao gồm website, app di động, Kiosk, dashboard và API."
              : "Keep 100% of your sales revenue. Every tier includes branded web ordering, native apps, kiosks, merchant ops, and open APIs."}
          </p>

          <div className="mt-8 inline-flex items-center rounded-xl border border-c-border bg-white p-1 shadow-xs">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "rounded-lg px-4 py-2 text-xs font-bold transition-all",
                billingCycle === "monthly" ? "bg-c-dark text-white" : "text-c-description"
              )}
            >
              {isVi ? "Hàng tháng" : "Monthly"}
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-all",
                billingCycle === "annual" ? "bg-c-dark text-white" : "text-c-description"
              )}
            >
              <span>{isVi ? "Hàng năm" : "Annual"}</span>
              <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] text-white">-15%</span>
            </button>
          </div>
        </Container>
      </section>

      {/* Tiers */}
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const price = billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={tier.id}
                className={cn(
                  "relative rounded-2xl border p-7 flex flex-col justify-between",
                  tier.popular
                    ? "border-2 border-c-primary bg-white shadow-bx-elevated"
                    : "border-c-border bg-c-surface/40"
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-c-primary px-3.5 py-1 text-xs font-bold text-white">
                    {isVi ? "Phổ biến nhất" : "Most Popular"}
                  </span>
                )}
                <div>
                  <h2 className="text-xl font-bold text-c-dark">{isVi ? tier.nameVi : tier.nameEn}</h2>
                  <p className="mt-2 text-sm text-c-description">
                    {isVi ? tier.taglineVi : tier.taglineEn}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-c-dark">
                      {price ? formatCurrencyUSD(price) : "Custom"}
                    </span>
                    <span className="text-xs text-c-muted">{isVi ? tier.unitVi : tier.unitEn}</span>
                  </div>
                  <p className="mt-2 inline-flex rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                    {isVi ? tier.commissionVi : tier.commissionEn}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-c-border pt-6">
                    {(isVi ? tier.featuresVi : tier.featuresEn).map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-c-base">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-c-primary" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className="mt-8 w-full"
                  size="lg"
                  variant={tier.popular ? "primary" : "outline"}
                  onClick={() => openDemoModal(`pricing_page_${tier.id}`)}
                >
                  {isVi ? tier.ctaVi : tier.ctaEn}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Interactive 0% Commission Savings Calculator */}
        <div
          id="calculator"
          className="mt-20 scroll-mt-24 rounded-3xl bg-c-dark p-7 sm:p-10 text-white shadow-bx-elevated grid grid-cols-1 gap-10 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-200">
              <Calculator className="h-3.5 w-3.5" />
              <span>{isVi ? "Công cụ tính tiết kiệm hoa hồng" : "0% Commission Savings Calculator"}</span>
            </div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              {isVi
                ? "Bạn đang mất bao nhiêu tiền cho phí chiết khấu 28%?"
                : "See how much you save by moving off 28% delivery apps."}
            </h2>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>{isVi ? "Số đơn hàng mỗi tháng" : "Monthly Online Orders"}</span>
                  <span className="text-blue-300">{monthlyOrders.toLocaleString()} orders</span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={10000}
                  step={100}
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="mt-2 w-full accent-blue-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>{isVi ? "Giá trị đơn hàng trung bình (USD)" : "Average Order Value (USD)"}</span>
                  <span className="text-blue-300">{formatCurrencyUSD(avgOrderValue)}</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={120}
                  step={2}
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="mt-2 w-full accent-blue-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-white/5 p-6 space-y-4">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>{isVi ? "Doanh số online / tháng" : "Monthly Online GMV"}</span>
              <span className="font-bold text-white">{formatCurrencyUSD(monthlyGmv)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-rose-300">
              <span>{isVi ? "Phí app trung gian (~28%/tháng)" : "3rd-Party App Fees (~28%/mo)"}</span>
              <span className="font-bold">-{formatCurrencyUSD(thirdPartyCommission)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-blue-300">
              <span>{isVi ? "Chi phí DXP Ordering / tháng" : "DXP Ordering Software / mo"}</span>
              <span className="font-bold">{formatCurrencyUSD(dxpMonthlyCost)}</span>
            </div>
            <div className="border-t border-white/15 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                {isVi ? "Tiết kiệm ước tính mỗi năm" : "Estimated Annual Savings"}
              </p>
              <p className="mt-1 text-4xl font-extrabold text-emerald-400">
                {formatCurrencyUSD(annualSavings)}
              </p>
            </div>
            <Button
              variant="white"
              className="w-full"
              onClick={() => openDemoModal("savings_calculator")}
            >
              {isVi ? "Giữ trọn doanh thu ngay" : "Claim Your Direct Channel"}
            </Button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold text-c-dark sm:text-3xl">
            {isVi ? "So sánh chi tiết tính năng" : "Full Plan Comparison"}
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-c-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-c-surface border-b border-c-border">
                <tr>
                  <th className="px-6 py-4 font-bold text-c-dark">
                    {isVi ? "Tính năng" : "Capability"}
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-c-dark">Restaurant</th>
                  <th className="px-6 py-4 text-center font-bold text-c-primary">Marketplace</th>
                  <th className="px-6 py-4 text-center font-bold text-c-dark">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-c-border bg-white">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.labelEn} className="hover:bg-c-surface/50">
                    <td className="px-6 py-3.5 font-medium text-c-base">
                      {isVi ? row.labelVi : row.labelEn}
                    </td>
                    <td className="px-6 py-3.5 text-center">{renderCell(row.r)}</td>
                    <td className="px-6 py-3.5 text-center bg-c-primary-soft/20">
                      {renderCell(row.m)}
                    </td>
                    <td className="px-6 py-3.5 text-center">{renderCell(row.e)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>

      <FaqSection />
    </div>
  );
}
