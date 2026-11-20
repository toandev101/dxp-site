"use client";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";

export function OrderingPlusAside() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  return (
    <aside
      id="orderingplus-reference"
      className="bg-[var(--od-bg)] border-t border-[var(--od-border)] py-12"
    >
      <Container>
        <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-0.04em] leading-[1.12] text-[var(--od-text)]">
          {isVi ? "Bạn đang tìm OrderingPlus?" : "Looking for OrderingPlus?"}
        </h2>
        <p className="mt-3 max-w-3xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
          {isVi
            ? `OrderingPlus xuất hiện trong một số định danh kỹ thuật và liên kết cũ gắn liền với ${siteConfig.name}. Thương hiệu thương mại hiện tại là ${siteConfig.name}. Khám phá giải pháp phù hợp cho mô hình của bạn:`
            : `OrderingPlus appears in some technical identifiers and historical links associated with ${siteConfig.name}. The current commercial brand is ${siteConfig.name}. Explore the current solution for your business model:`}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14.5px] font-medium text-[var(--od-text)]">
          <Link href="/solutions#restaurants" className="hover:text-[var(--od-action-content)] transition-colors">
            {isVi ? "Nhà hàng (Restaurants)" : "Restaurants"}
          </Link>
          <Link href="/solutions#franchises" className="hover:text-[var(--od-action-content)] transition-colors">
            {isVi ? "Chuỗi nhượng quyền (Franchises)" : "Franchises"}
          </Link>
          <Link href="/solutions#marketplaces" className="hover:text-[var(--od-action-content)] transition-colors">
            {isVi ? "Sàn thương mại (Marketplaces)" : "Marketplaces"}
          </Link>
        </div>
      </Container>
    </aside>
  );
}
