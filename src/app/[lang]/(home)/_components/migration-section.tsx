"use client";

import { ArrowRight, GitCompare, Route, Store } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";

export function MigrationSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const rows = [
    {
      icon: Route,
      titleEn: "Plan your migration",
      titleVi: "Lập kế hoạch chuyển đổi",
      descEn: "Map the customer journey, connected systems, responsibilities, and acceptance checks.",
      descVi: "Hoạch định hành trình khách hàng, các hệ thống cần kết nối, trách nhiệm và bước nghiệm thu.",
      href: "/demo",
    },
    {
      icon: GitCompare,
      titleEn: "Compare platforms",
      titleVi: "So sánh nền tảng",
      descEn: "Explore the differences between ordering, marketplace, and commerce platforms.",
      descVi: "Tìm hiểu điểm khác biệt giữa nền tảng đặt hàng, sàn thương mại và phần mềm bán hàng.",
      href: "/pricing",
    },
    {
      icon: Store,
      titleEn: "Build a direct channel",
      titleVi: "Xây dựng kênh bán trực tiếp",
      descEn: "Bring returning customers from marketplaces to a channel where you control the experience.",
      descVi: "Đưa khách hàng quay lại từ các sàn trung gian về kênh trực tiếp do chính bạn làm chủ.",
      href: "/pricing#calculator",
    },
  ];

  return (
    <section id="migration" className="bg-[var(--od-bg)] py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.04em] leading-[1.15] text-[var(--od-text)]">
            {isVi ? "Lộ trình rõ ràng tới nền tảng tiếp theo." : "A clear path to your next platform."}
          </h2>
          <p className="mt-3 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
            {isVi
              ? "Chuyển đổi theo nhịp độ của bạn. So sánh kỹ trước khi quyết định. Đưa khách hàng quay lại kênh trực tiếp dưới thương hiệu riêng."
              : "Move at your pace. Compare before you decide. Bring repeat customers to a direct channel under your brand."}
          </p>
        </div>

        <div className="mt-10">
          {rows.map((row) => {
            const Icon = row.icon;
            return (
              <Link
                key={row.titleEn}
                href={row.href}
                className="group grid grid-cols-[44px_1fr] items-start gap-4 border-t border-[var(--od-border)] py-7 transition-colors hover:bg-[var(--od-surface-subtle)]/60 sm:px-3 sm:-mx-3 rounded-lg"
              >
                <Icon className="h-[28px] w-[28px] text-[#266df0] mt-0.5" strokeWidth={1.6} />
                <div>
                  <h3 className="inline-flex items-center gap-2 text-[20px] sm:text-[22px] font-bold tracking-[-0.025em] text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                    <span>{isVi ? row.titleVi : row.titleEn}</span>
                    <ArrowRight className="h-4 w-4 text-[#266df0] transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                    {isVi ? row.descVi : row.descEn}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
