"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";

export function EnterpriseBrandMark({ brand }: { brand: string }) {
  switch (brand) {
    case "Domino's":
      return (
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex h-7 w-7 rotate-45 items-center justify-center rounded-[4px] bg-gradient-to-br from-[#e31837] via-[#e31837] to-[#006491] text-[10px] font-black text-white">
            <span className="-rotate-45">•</span>
          </span>
          <span className="text-[22px] font-extrabold tracking-tight text-[#006491]">Domino&apos;s</span>
        </div>
      );
    case "Burger King":
      return (
        <div className="inline-flex flex-col items-center leading-none">
          <span className="h-2.5 w-14 rounded-t-full bg-[#f5821f]" />
          <span className="py-0.5 text-[15px] font-black tracking-tight text-[#d62300]">BURGER</span>
          <span className="pb-0.5 text-[15px] font-black tracking-tight text-[#d62300]">KING</span>
          <span className="h-2 w-14 rounded-b-full bg-[#f5821f]" />
        </div>
      );
    case "Starbucks":
      return (
        <div className="inline-flex flex-col items-center gap-1.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00704a] text-white font-black text-lg">
            ★
          </span>
          <span className="text-[11px] font-black tracking-[0.16em] text-[#151417]">STARBUCKS</span>
        </div>
      );
    case "KFC":
      return (
        <span className="text-[30px] font-black italic tracking-[-0.04em] text-[#e4002b]">KFC</span>
      );
    case "P.F. Chang's":
      return (
        <span className="text-[19px] font-bold tracking-[0.14em] text-[#151417]">P.F. CHANG&apos;S</span>
      );
    case "Chili's":
      return (
        <div className="inline-flex items-center gap-1.5">
          <span className="h-3.5 w-3.5 rounded-full bg-[#d71920]" />
          <span className="text-[24px] font-extrabold italic tracking-tight text-[#d71920]">chili&apos;s</span>
        </div>
      );
    case "Vips":
      return (
        <span className="rounded-full bg-[#e30613] px-4 py-1 text-[20px] font-black italic text-white">
          Vips
        </span>
      );
    case "Pizza Hut":
      return (
        <div className="inline-flex flex-col items-center">
          <span className="h-2 w-10 rounded-t-full bg-[#ee3a24] mb-0.5" />
          <span className="text-[20px] font-extrabold tracking-tight text-[#151417]">Pizza Hut</span>
        </div>
      );
    default:
      return <span className="text-lg font-bold text-[#151417]">{brand}</span>;
  }
}

export function ProofSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const primaryMetrics = [
    { value: isVi ? "Hàng triệu" : "Millions", labelEn: "Orders powered every month", labelVi: "Đơn hàng xử lý mỗi tháng" },
    { value: "100+", labelEn: "Countries served", labelVi: "Quốc gia đang vận hành" },
    { value: "2012", labelEn: "Operating since", labelVi: "Vận hành từ năm" },
    { value: "99.99%", labelEn: "Platform uptime", labelVi: "Thời gian hoạt động ổn định" },
  ];

  const secondaryMetrics = [
    { value: "50+", labelEn: "Payment gateways", labelVi: "Cổng thanh toán" },
    { value: "20+", labelEn: "Delivery partners", labelVi: "Đối tác giao vận" },
    { value: "15+", labelEn: "POS integrations", labelVi: "Tích hợp POS" },
  ];

  const brands = [
    "Domino's",
    "Burger King",
    "Starbucks",
    "KFC",
    "P.F. Chang's",
    "Chili's",
    "Vips",
    "Pizza Hut",
  ];

  return (
    <section id="proof" className="bg-[var(--od-bg)] py-16 lg:py-20">
      <Container>
        {/* OPERO UI Kit Editorial 2-Column Section Header (.sec-head) */}
        <div className="opero-sec-head mb-10">
          <div>
            <p className="opero-label mb-3">{isVi ? "Quy mô vận hành" : "Proven scale"}</p>
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.02em] leading-[1.1] text-[var(--ink)]">
              {isVi ? "Xây dựng cho vận hành thực tế." : "Built for real operations."}
            </h2>
          </div>
          <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[var(--ink-mute)] max-w-[60ch]">
            {isVi
              ? "Công nghệ đồng hành cùng doanh nghiệp từ cửa hàng đầu tiên đến quy mô toàn cầu."
              : "Technology supporting businesses from their first location to global operations."}
          </p>
        </div>

        {/* Elevated Borderless White KPI Panel (OPERO UI Kit .panel + flat .kpis) */}
        <div className="rounded-[20px] bg-[var(--canvas)] p-6 sm:p-8 lg:p-10">
          {/* Row 1: Primary 4 Flat Typographic KPIs */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {primaryMetrics.map((m) => (
              <div key={m.value}>
                <p className="text-[13px] font-medium text-[var(--ink-mute)]">
                  {isVi ? m.labelVi : m.labelEn}
                </p>
                <p className="num mt-2 text-[32px] sm:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1] text-[var(--ink)]">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          <div className="my-8 border-t border-[var(--line-soft)]" />

          {/* Row 2: Secondary KPIs + Trustpilot */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 items-start">
            {secondaryMetrics.map((m) => (
              <div key={m.value}>
                <p className="text-[13px] font-medium text-[var(--ink-mute)]">
                  {isVi ? m.labelVi : m.labelEn}
                </p>
                <p className="num mt-1.5 text-[28px] font-semibold tracking-[-0.4px] leading-[1.15] text-[var(--ink)]">
                  {m.value}
                </p>
              </div>
            ))}

            <div className="lg:border-l lg:border-[var(--line-soft)] lg:pl-6">
              <p className="text-[13px] font-medium text-[var(--ink-mute)]">Trustpilot · 349 reviews</p>
              <p className="num mt-1.5 text-[28px] font-semibold tracking-[-0.4px] leading-[1.15] text-[var(--ink)]">
                4.9
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--line-soft)] pt-5 flex justify-end">
            <Link
              href="/customers"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Xem câu chuyện khách hàng" : "Read customer stories"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Enterprise Brand Logo Card (Borderless White Panel) */}
        <div className="mt-4 rounded-[20px] bg-white p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {brands.map((brand) => (
              <Link
                key={brand}
                href="/customers"
                className="flex h-[100px] items-center justify-center rounded-[12px] transition-opacity duration-150 hover:opacity-80"
              >
                <EnterpriseBrandMark brand={brand} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
