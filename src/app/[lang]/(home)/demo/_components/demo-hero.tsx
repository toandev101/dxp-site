"use client";

import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";

export function DemoHero() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal, setChatOpen } = useUiStore();

  const jumpItems = [
    {
      titleEn: "Marketplace: multiple businesses",
      titleVi: "Marketplace: nhiều cửa hàng",
      metaEn: "2 demos",
      metaVi: "2 bản demo",
      href: "#marketplace",
    },
    {
      titleEn: "Restaurant: one brand, one or many locations",
      titleVi: "Nhà hàng: một thương hiệu, một hoặc nhiều chi nhánh",
      metaEn: "2 demos",
      metaVi: "2 bản demo",
      href: "#restaurant",
    },
    {
      titleEn: "Operate the business and deliveries",
      titleVi: "Vận hành cửa hàng và giao hàng",
      metaEn: "2 demos",
      metaVi: "2 bản demo",
      href: "#operations",
    },
    {
      titleEn: "AI ordering agents",
      titleVi: "AI ordering agents",
      metaEn: "Guided demo",
      metaVi: "Demo có hướng dẫn",
      href: "#ai-agents",
    },
  ];

  return (
    <section className="bg-[var(--od-bg)] pt-14 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)] lg:gap-20">
          {/* Left Hero Column */}
          <div>
            <p className="text-[11px] font-medium text-[var(--od-action-content)]">
              {isVi ? "Bản demo trực tiếp" : "Live demos"}
            </p>

            <h1 className="mt-4 max-w-[14ch] text-[44px] sm:text-[64px] lg:text-[79px] font-bold tracking-[-0.045em] leading-[0.98] text-[var(--od-text)] [text-wrap:balance]">
              {isVi ? `Tự trải nghiệm ${siteConfig.name}.` : `Explore ${siteConfig.name} yourself.`}
            </h1>

            <p className="mt-6 max-w-[38rem] text-[17px] sm:text-[20px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? "Mở trực tiếp website và ứng dụng mà khách hàng, nhân viên cửa hàng và tài xế sử dụng — trải nghiệm theo nhịp độ của riêng bạn."
                : "Open the websites and apps your customers, store teams, and drivers use, and move through them at your own pace."}
            </p>

            {/* Primary & Secondary CTAs (full-width stacked on mobile <=700px, row on desktop) */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => openDemoModal("Guided demo · 30 min")}
                className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
              >
                <span>{isVi ? "Đặt lịch demo" : "Book a demo"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setChatOpen(true)}
                className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
              >
                {isVi ? `Trao đổi với ${siteConfig.name}` : `Talk to ${siteConfig.name}`}
              </button>
            </div>

            {/* Checkmark Meta Row */}
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-[var(--od-text-muted)]">
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--od-action-content)]" strokeWidth={2} />
                <span>{isVi ? "Demo có hướng dẫn" : "Guided demo"}</span>
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--od-action-content)]" strokeWidth={2} />
                <span>{isVi ? "Tư vấn theo vận hành của bạn" : "Discuss your operation"}</span>
              </li>
            </ul>
          </div>

          {/* Right Quick-Jump Index Card ("What you can open") */}
          <nav
            aria-label={isVi ? "Bạn có thể mở gì" : "What you can open"}
            className="overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)]"
          >
            <div className="border-b border-[var(--od-border)] px-6 py-4 text-[13px] font-medium text-[var(--od-text-muted)]">
              {isVi ? "Bạn có thể mở gì" : "What you can open"}
            </div>

            <ol className="divide-y divide-[var(--od-border)]">
              {jumpItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-[var(--od-surface-subtle)]"
                  >
                    <div>
                      <p className="text-[14.5px] font-semibold leading-snug text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                        {isVi ? item.titleVi : item.titleEn}
                      </p>
                      <p className="mt-1 text-[13px] text-[var(--od-text-muted)]">
                        {isVi ? item.metaVi : item.metaEn}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[var(--od-action-content)] transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
}
