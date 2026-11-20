"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";

const INTEGRATION_ROWS = [
  {
    titleEn: "Payments",
    titleVi: "Thanh toán",
    href: "/integrations",
    logos: [
      { name: "stripe", style: "font-black text-[#635bff] tracking-tight text-[21px]" },
      { name: "PayPal", style: "font-extrabold italic text-[#003087] text-[19px]" },
      { name: "adyen", style: "font-black text-[#0abf53] tracking-tight text-[20px]" },
      { name: "mercado pago", style: "font-bold text-[#009ee3] text-[16px]" },
      { name: "Apple Pay", style: "font-semibold text-[#0b0c0d] text-[17px]" },
      { name: "G Pay", style: "font-semibold text-[#3f4145] text-[17px]" },
    ],
  },
  {
    titleEn: "Delivery",
    titleVi: "Giao vận",
    href: "/integrations",
    logos: [
      { name: "Uber Direct", style: "font-bold text-[#0b0c0d] tracking-tight text-[18px]" },
      { name: "DOORDASH", style: "font-extrabold text-[#ff3008] tracking-wide text-[15px]" },
      { name: "LALAMOVE", style: "font-black italic text-[#f26722] text-[16px]" },
      { name: "Stuart", style: "font-extrabold text-[#2b58de] text-[19px]" },
      { name: "shipday", style: "font-bold text-[#00a884] text-[18px]" },
      { name: "Nash", style: "font-extrabold text-[#111827] text-[19px]" },
    ],
  },
  {
    titleEn: "POS & commerce",
    titleVi: "POS & thương mại",
    href: "/integrations",
    logos: [
      { name: "toast", style: "font-extrabold text-[#ff4c00] text-[20px]" },
      { name: "Square", style: "font-bold text-[#0b0c0d] text-[18px]" },
      { name: "clover", style: "font-extrabold text-[#228800] text-[20px]" },
      { name: "shopify", style: "font-extrabold italic text-[#5e8e3e] text-[19px]" },
      { name: "ORACLE", style: "font-black text-[#c74634] tracking-wider text-[16px]" },
      { name: "LimeTray", style: "font-bold text-[#16a34a] text-[17px]" },
    ],
  },
  {
    titleEn: "Customer & data",
    titleVi: "Khách hàng & dữ liệu",
    href: "/integrations",
    logos: [
      { name: "HubSpot", style: "font-extrabold text-[#ff7a59] text-[18px]" },
      { name: "mailchimp", style: "font-bold text-[#0b0c0d] text-[17px]" },
      { name: "Spoonity", style: "font-bold text-[#2563eb] text-[17px]" },
      { name: "GA4", style: "font-extrabold text-[#e37400] text-[17px]" },
      { name: "Tag Manager", style: "font-semibold text-[#246fdb] text-[15px]" },
      { name: "Meta", style: "font-bold text-[#0866ff] text-[18px]" },
      { name: "Segment", style: "font-bold text-[#52bd94] text-[17px]" },
    ],
  },
];

export function IntegrationsStripSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  return (
    <section id="integrations" className="bg-[var(--od-surface-subtle)] py-16">
      <Container>
        {/* Header Row */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.045em] leading-[1.12] text-[var(--od-text)]">
            {isVi ? (
              <>
                Kết nối hệ thống
                <br />
                bạn đang sử dụng.
              </>
            ) : (
              <>
                Connect the stack
                <br />
                you already use.
              </>
            )}
          </h2>

          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
          >
            <span>{isVi ? "Khám phá tích hợp" : "Explore integrations"}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 4 Stacked Category Rows */}
        <div className="mt-10">
          {INTEGRATION_ROWS.map((row) => (
            <div
              key={row.titleEn}
              className="grid grid-cols-1 gap-4 border-t border-[var(--od-border)] py-7 md:grid-cols-[200px_1fr] md:items-center"
            >
              <Link
                href={row.href}
                className="text-[18px] font-bold tracking-[-0.02em] text-[var(--od-text)] hover:text-[var(--od-action-content)] transition-colors"
              >
                {isVi ? row.titleVi : row.titleEn}
              </Link>

              <div className="flex flex-wrap items-center gap-3">
                {row.logos.map((logo) => (
                  <Link
                    key={logo.name}
                    href={row.href}
                    className="inline-flex h-[48px] items-center justify-center rounded-[6px] border border-[#dee0e3]/80 bg-white px-5 transition-all hover:border-[#266df0]/40 hover:shadow-xs"
                  >
                    <span className={logo.style}>{logo.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
