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
          <span className="inline-flex h-7 w-7 rotate-45 items-center justify-center rounded-[4px] bg-gradient-to-br from-[#e31837] via-[#e31837] to-[#006491] text-[10px] font-black text-white shadow-xs">
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
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00704a] text-white font-black text-lg ring-2 ring-[#00704a]/20">
            ★
          </span>
          <span className="text-[11px] font-black tracking-[0.16em] text-[#0b0c0d]">STARBUCKS</span>
        </div>
      );
    case "KFC":
      return (
        <span className="text-[30px] font-black italic tracking-[-0.04em] text-[#e4002b]">KFC</span>
      );
    case "P.F. Chang's":
      return (
        <span className="text-[19px] font-bold tracking-[0.14em] text-[#111827]">P.F. CHANG&apos;S</span>
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
          <span className="text-[20px] font-extrabold tracking-tight text-[#111827]">Pizza Hut</span>
        </div>
      );
    default:
      return <span className="text-lg font-bold text-[#0b0c0d]">{brand}</span>;
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
    <section id="proof" className="bg-[var(--od-surface-subtle)] py-16">
      <Container>
        <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.045em] leading-[1.12] text-[var(--od-text)]">
          {isVi ? "Xây dựng cho vận hành thực tế." : "Built for real operations."}
        </h2>
        <p className="mt-3 text-[16px] sm:text-[17.6px] text-[var(--od-text-muted)]">
          {isVi
            ? "Công nghệ đồng hành cùng doanh nghiệp từ cửa hàng đầu tiên đến quy mô toàn cầu."
            : "Technology supporting businesses from their first location to global operations."}
        </p>

        {/* Row 1: Primary 4 Metrics */}
        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {primaryMetrics.map((m) => (
            <div key={m.value}>
              <p className="text-[36px] sm:text-[46px] font-bold tracking-[-0.04em] leading-none text-[var(--od-text)]">
                {m.value}
              </p>
              <p className="mt-2.5 text-[14px] text-[var(--od-text-muted)]">
                {isVi ? m.labelVi : m.labelEn}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal Divider */}
        <div className="my-9 border-t border-[var(--od-border)]" />

        {/* Row 2: 3 Integration Metrics + Trustpilot Rating */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 items-start">
          {secondaryMetrics.map((m) => (
            <div key={m.value}>
              <p className="text-[26px] sm:text-[30px] font-bold tracking-[-0.03em] leading-none text-[var(--od-text)]">
                {m.value}
              </p>
              <p className="mt-2 text-[14px] text-[var(--od-text-muted)]">
                {isVi ? m.labelVi : m.labelEn}
              </p>
            </div>
          ))}

          <div className="lg:border-l lg:border-[var(--od-border)] lg:pl-8">
            <p className="text-[26px] sm:text-[30px] font-bold tracking-[-0.03em] leading-none text-[var(--od-text)]">
              4.9
            </p>
            <p className="mt-2 text-[14px] text-[var(--od-text-muted)]">Trustpilot · 349 reviews</p>
          </div>
        </div>

        {/* Horizontal Divider + Read customer stories link */}
        <div className="mt-9 border-t border-[var(--od-border)] pt-6 flex justify-end">
          <Link
            href="/customers"
            className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
          >
            <span>{isVi ? "Xem câu chuyện khách hàng" : "Read customer stories"}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Enterprise Brand Logo Card (4x2 White Panel) */}
        <div className="mt-5 rounded-[10px] bg-white p-6 sm:p-8 border border-[#dee0e3]/70">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {brands.map((brand) => (
              <Link
                key={brand}
                href="/customers"
                className="flex h-[108px] items-center justify-center rounded-lg transition-opacity hover:opacity-80"
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
