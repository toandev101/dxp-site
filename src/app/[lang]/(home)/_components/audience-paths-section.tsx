"use client";

import Image from "next/image";
import { ArrowRight, Menu, Search, ShoppingCart } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";

export function AudiencePathsSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const businessLinks = [
    { labelEn: "Restaurants", labelVi: "Nhà hàng", href: "/solutions#restaurants" },
    { labelEn: "Franchises", labelVi: "Chuỗi nhượng quyền", href: "/solutions#franchises" },
    { labelEn: "Enterprise", labelVi: "Doanh nghiệp lớn", href: "/solutions#franchises" },
    { labelEn: "Multi-location", labelVi: "Đa chi nhánh", href: "/solutions#franchises" },
    { labelEn: "Groceries & local stores", labelVi: "Siêu thị & cửa hàng", href: "/solutions#retail" },
    { labelEn: "Delivery companies", labelVi: "Đơn vị giao vận", href: "/solutions#marketplaces" },
  ];

  const builderLinks = [
    { labelEn: "Marketplaces", labelVi: "Sàn đa gian hàng", href: "/solutions#marketplaces" },
    { labelEn: "Entrepreneurs", labelVi: "Khởi nghiệp", href: "/solutions#marketplaces" },
    { labelEn: "Agencies", labelVi: "Agencies", href: "/solutions#marketplaces" },
    { labelEn: "Resellers", labelVi: "Đối tác Reseller", href: "/solutions#marketplaces" },
    { labelEn: "Software companies", labelVi: "Công ty phần mềm", href: "/products#extend" },
  ];

  return (
    <section id="solutions" className="bg-[var(--od-bg)] pt-12 pb-20 lg:pb-24">
      <Container>
        {/* Header Row */}
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-[32px] sm:text-[41.6px] font-bold tracking-[-0.04em] leading-[1.15] text-[var(--od-text)]">
            {isVi ? "Xây dựng bước tiến tiếp theo." : "Build what comes next."}
          </h2>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
          >
            <span>{isVi ? "Xem bảng giá" : "See pricing"}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 2-Column Split with Vertical Divider */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left Path: Run your business */}
          <div className="lg:pr-12">
            <div className="relative aspect-[608/290] w-full overflow-hidden rounded-[6px] bg-[var(--od-surface-subtle)]">
              <Image
                src="/images/audience-operator.jpg"
                alt="A local business operator using a tablet beside paper pickup bags."
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-7 text-[26px] sm:text-[30.4px] font-bold tracking-[-0.025em] leading-[1.15] text-[var(--od-text)]">
              {isVi ? "Vận hành doanh nghiệp của bạn" : "Run your business"}
            </h3>
            <p className="mt-2.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? "Kết nối các kênh đặt hàng, chi nhánh và đội ngũ giao vận quanh quy trình vận hành của bạn."
                : "Connect ordering channels, locations, and delivery teams around your operation."}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {businessLinks.map((item) => (
                <Link
                  key={item.labelEn}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-[14.5px] font-medium text-[var(--od-text)] hover:text-[var(--od-action-content)] transition-colors"
                >
                  <span>{isVi ? item.labelVi : item.labelEn}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#D91842] transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{isVi ? "Khám phá giải pháp doanh nghiệp" : "Explore business solutions"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Path: Build your platform */}
          <div className="lg:pl-12 lg:border-l lg:border-[var(--od-border)]">
            {/* Clean Browser + Mobile Marketplace Mockup Card (exact match to OPERO screenshot) */}
            <div className="relative aspect-[608/290] w-full overflow-hidden rounded-[6px] bg-[#f4f5f6] flex items-center justify-center p-4 sm:p-6">
              <div className="relative w-full max-w-[520px] flex items-center">
                {/* Browser window */}
                <div className="w-[82%] rounded-[10px] border border-slate-200 bg-white shadow-[0_14px_34px_-12px_rgba(11,12,13,0.18)] overflow-hidden text-[#151417]">
                  <div className="flex items-center gap-1.5 bg-[#F5F5F6] px-3 py-1.5 border-b border-slate-200/80">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-100 text-[9px]">
                    <span className="font-bold text-[11px]">Your Brand</span>
                    <div className="hidden sm:flex items-center gap-3 text-slate-500">
                      <span>Browse</span>
                      <span>Categories</span>
                      <span>Help</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Search className="h-3 w-3" />
                      <ShoppingCart className="h-3 w-3" />
                      <Menu className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-3">
                    {[
                      { title: "Restaurants", sub: "Find your next meal", img: "/images/hero-bowl-main.jpg" },
                      { title: "Groceries", sub: "Fresh groceries nearby", img: "/images/bowl-mediterranean.jpg" },
                      { title: "Local stores", sub: "Everyday essentials", img: "/images/bowl-salmon.jpg" },
                    ].map((cat) => (
                      <div key={cat.title}>
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[5px] bg-slate-100">
                          <Image src={cat.img} alt={cat.title} fill sizes="120px" className="object-cover" />
                        </div>
                        <p className="mt-1.5 text-[9.5px] font-bold text-[#151417]">{cat.title}</p>
                        <p className="truncate text-[8px] text-slate-500">{cat.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Overlapping Phone */}
                <div className="w-[26%] -ml-[8%] z-10 rounded-[18px] bg-[#1B1A1F] p-1 shadow-[0_18px_40px_-10px_rgba(11,12,13,0.35)]">
                  <div className="rounded-[14px] bg-white overflow-hidden p-2 text-[#151417]">
                    <div className="flex items-center justify-between text-[8px] font-bold mb-1.5">
                      <span>Your Brand</span>
                      <Menu className="h-2.5 w-2.5" />
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { title: "Restaurants", img: "/images/hero-bowl-main.jpg" },
                        { title: "Groceries", img: "/images/bowl-mediterranean.jpg" },
                      ].map((row) => (
                        <div key={row.title}>
                          <div className="relative aspect-[16/10] w-full overflow-hidden rounded bg-slate-100">
                            <Image src={row.img} alt={row.title} fill sizes="90px" className="object-cover" />
                          </div>
                          <p className="mt-0.5 text-[7.5px] font-bold">{row.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mt-7 text-[26px] sm:text-[30.4px] font-bold tracking-[-0.025em] leading-[1.15] text-[var(--od-text)]">
              {isVi ? "Xây dựng nền tảng của riêng bạn" : "Build your platform"}
            </h3>
            <p className="mt-2.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? `Ra mắt sàn thương mại đa gian hàng, nền tảng đặt hàng hoặc sản phẩm thương mại tùy chỉnh trên ${siteConfig.name}.`
                : `Launch a marketplace, ordering platform, or custom commerce product on ${siteConfig.name}.`}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {builderLinks.map((item) => (
                <Link
                  key={item.labelEn}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-[14.5px] font-medium text-[var(--od-text)] hover:text-[var(--od-action-content)] transition-colors"
                >
                  <span>{isVi ? item.labelVi : item.labelEn}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#D91842] transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/products#extend"
                className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{isVi ? "Khám phá giải pháp cho nhà phát triển" : "Explore builder solutions"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
