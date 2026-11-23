"use client";

import { ArrowRight, Check, CircleDollarSign, Percent } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";

function CustomerLogoItem({ brand }: { brand: string }) {
  switch (brand) {
    case "Domino's":
      return (
        <div className="inline-flex flex-col items-center leading-none">
          <span className="inline-flex h-6 w-6 rotate-45 items-center justify-center rounded-[3px] bg-gradient-to-br from-[#e31837] via-[#e31837] to-[#006491] text-[8px] font-black text-white">
            <span className="-rotate-45">•</span>
          </span>
          <span className="mt-1.5 text-[11px] font-extrabold tracking-tight text-[#006491]">Domino&apos;s</span>
        </div>
      );
    case "Burger King":
      return (
        <div className="inline-flex flex-col items-center leading-none">
          <span className="h-2 w-10 rounded-t-full bg-[#f5821f]" />
          <span className="py-0.5 text-[10px] font-black tracking-tight text-[#d62300]">BURGER</span>
          <span className="pb-0.5 text-[10px] font-black tracking-tight text-[#d62300]">KING</span>
          <span className="h-1.5 w-10 rounded-b-full bg-[#f5821f]" />
        </div>
      );
    case "Starbucks":
      return (
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00704a] text-white font-black text-base ring-2 ring-[#00704a]/20">
          ★
        </span>
      );
    case "KFC":
      return <span className="text-[24px] font-black italic tracking-[-0.04em] text-[#e4002b]">KFC</span>;
    case "P.F. Chang's":
      return <span className="text-[16px] font-bold tracking-[0.12em] text-[#111827]">P.F. CHANG&apos;S</span>;
    case "Chili's":
      return (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#78be20] text-[12px] font-extrabold italic text-[#d71920]">
          chili&apos;s
        </span>
      );
    case "Vips":
      return (
        <span className="rounded-full bg-[#e30613] px-3.5 py-1 text-[16px] font-black italic text-white">
          vips
        </span>
      );
    case "Pizza Hut":
      return (
        <div className="inline-flex items-center gap-1.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e31837] text-[10px] font-black text-white">
            ▲
          </span>
          <span className="text-[16px] font-extrabold italic tracking-tight text-[#111827]">Pizza Hut</span>
        </div>
      );
    default:
      return <span className="text-sm font-bold">{brand}</span>;
  }
}

export function PricingHeroAndPlans() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal } = useUiStore();

  const sharedPlanItems = [
    { labelEn: "All products", labelVi: "Tất cả sản phẩm", href: "#pricing-products", isAnchor: true },
    { labelEn: "All features", labelVi: "Tất cả tính năng", href: "#pricing-features", isAnchor: true },
    { labelEn: "All integrations", labelVi: "Tất cả tích hợp", href: "/integrations", isAnchor: false },
    { labelEn: "API & MCP access", labelVi: "Quyền truy cập API & MCP", href: "/products#extend", isAnchor: false },
    { labelEn: "White-label branding and custom domains", labelVi: "Thương hiệu white-label & tên miền riêng" },
    { labelEn: "Web, mobile web, and all native apps", labelVi: "Web, mobile web và toàn bộ ứng dụng native" },
    { labelEn: "Menus, orders, delivery, payments, and loyalty", labelVi: "Thực đơn, đơn hàng, giao vận, thanh toán & loyalty" },
    { labelEn: "Multi-business and multi-location management", labelVi: "Quản trị đa gian hàng & đa chi nhánh" },
    { labelEn: "AI Ordering and Delivery Suite access", labelVi: "Quyền truy cập bộ AI Ordering & Delivery Suite" },
    { labelEn: "Frontend source code", labelVi: "Mã nguồn Frontend mở" },
  ];

  const logos = ["Domino's", "Burger King", "Starbucks", "KFC", "P.F. Chang's", "Chili's", "Vips", "Pizza Hut"];

  return (
    <>
      {/* SECTION 1: Hero (centered desktop, left-aligned mobile <=700px) */}
      <section className="bg-[var(--od-bg)] pt-14 pb-10 sm:pt-20 sm:pb-11">
        <Container className="flex flex-col items-start text-left sm:items-center sm:text-center">
          <p className="inline-flex items-center gap-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            <CircleDollarSign className="h-3.5 w-3.5" strokeWidth={1.8} />
            <span>{isVi ? "BẢNG GIÁ" : "PRICING"}</span>
          </p>

          <h1 className="mt-4 max-w-[16ch] text-[44px] sm:text-[60px] lg:text-[75px] font-bold tracking-[-0.045em] leading-[0.96] text-[var(--od-text)] [text-wrap:balance]">
            {isVi ? "Mọi sản phẩm, mọi tính năng, trên mọi gói." : "Every product, every feature, on every plan."}
          </h1>

          <p className="mt-5 max-w-[46rem] text-[17px] sm:text-[20px] leading-[1.6] text-[var(--od-text-muted)]">
            {isVi
              ? "Đầy đủ sản phẩm, ứng dụng và quyền truy cập API như nhau. Hãy cùng rà soát vận hành của bạn để xác định phạm vi và mức giá phù hợp."
              : "The same products, apps, and API access. Let’s review your operation to define the scope and pricing."}
          </p>
        </Container>
      </section>

      {/* SECTION 2: 3-Column Unified Hairline Plans Grid + Usage Note */}
      <section className="bg-[var(--od-bg)] pt-6 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-border)]">
            {/* PLAN 1: RESTAURANT (White Card) */}
            <article id="restaurant" className="scroll-mt-24 flex flex-col bg-[var(--od-bg)] p-6 sm:p-9">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                RESTAURANT
              </p>

              <h3 className="mt-3 text-[24px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--od-text)] lg:min-h-[2.45em]">
                {isVi ? "Nền tảng Nhà hàng. Trọn gói + AI Suite" : "Restaurants Platform. All Inclusive + AI Suite"}
              </h3>

              <p className="mt-3 text-[15px] leading-[1.55] text-[var(--od-text-muted)]">
                {isVi
                  ? "Một thương hiệu hoặc chuỗi đang tăng trưởng tự vận hành đặt hàng trực tiếp."
                  : "One brand or a growing group that runs direct ordering."}
              </p>

              {/* Key Billing Bullets */}
              <ul className="mt-6 space-y-2.5 text-[14.5px] font-semibold text-[var(--od-text)]">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--od-action-content)]" strokeWidth={2.2} />
                  <span>{isVi ? "Không giới hạn số đơn hàng" : "Unlimited orders"}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--od-action-content)]" strokeWidth={2.2} />
                  <span>{isVi ? "Tính phí theo từng chi nhánh" : "Billed per location"}</span>
                </li>
              </ul>

              {/* Divider + Included in every plan */}
              <div className="mt-6 border-t border-[var(--od-border)] pt-6">
                <h4 className="text-[14px] font-bold text-[var(--od-text)]">
                  {isVi ? "Bao gồm trong mọi gói" : "Included in every plan"}
                </h4>
                <ul className="mt-4 space-y-2.5 text-[14px] text-[var(--od-text-muted)]">
                  {sharedPlanItems.map((item) => (
                    <li key={item.labelEn} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--od-action-content)]" strokeWidth={2} />
                      {item.href ? (
                        item.isAnchor ? (
                          <a
                            href={item.href}
                            className="underline underline-offset-2 text-[var(--od-text)] hover:text-[var(--od-action-content)]"
                          >
                            {isVi ? item.labelVi : item.labelEn}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="underline underline-offset-2 text-[var(--od-text)] hover:text-[var(--od-action-content)]"
                          >
                            {isVi ? item.labelVi : item.labelEn}
                          </Link>
                        )
                      ) : (
                        <span>{isVi ? item.labelVi : item.labelEn}</span>
                      )}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-[12px] leading-[1.5] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Phí sử dụng Suite áp dụng riêng. Khả năng tích hợp phụ thuộc nhà cung cấp và khu vực."
                    : "Suite usage fees apply. Integrations depend on provider and regional availability."}
                </p>

                <div className="mt-4 flex items-center gap-2.5 text-[14px] font-medium text-[var(--od-text)]">
                  <Check className="h-4 w-4 shrink-0 text-[var(--od-action-content)]" strokeWidth={2} />
                  <span>{isVi ? "Hỗ trợ tiêu chuẩn (Standard Support)" : "Standard Support"}</span>
                </div>
              </div>

              {/* Bottom Aligned CTA Stack */}
              <div className="mt-auto pt-8 grid gap-3">
                <button
                  type="button"
                  onClick={() => openDemoModal("Restaurant Plan · Request pricing")}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#266df0] px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
                >
                  <span>{isVi ? "Yêu cầu báo giá" : "Request pricing"}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openDemoModal("Restaurant Plan · Guided demo")}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
                >
                  {isVi ? "Đặt lịch demo" : "Book a demo"}
                </button>
                <p className="text-center text-[12px] text-[var(--od-text-muted)]">
                  {isVi ? "Trao đổi phạm vi và mức giá cùng đội ngũ." : "Review scope and pricing with our team."}
                </p>
              </div>
            </article>

            {/* PLAN 2: MARKETPLACE (White Card + Startup Program Box) */}
            <article id="marketplace" className="scroll-mt-24 flex flex-col bg-[var(--od-bg)] p-6 sm:p-9">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                MARKETPLACE
              </p>

              <h3 className="mt-3 text-[24px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--od-text)] lg:min-h-[2.45em]">
                {isVi ? "Nền tảng Marketplace. Trọn gói + AI Suite" : "Marketplace Platform. All Inclusive + AI Suite"}
              </h3>

              <p className="mt-3 text-[15px] leading-[1.55] text-[var(--od-text-muted)]">
                {isVi
                  ? "Nền tảng phục vụ nhiều doanh nghiệp đối tác và khách hàng của họ."
                  : "A platform serving multiple businesses and their customers."}
              </p>

              {/* Key Billing Bullets */}
              <ul className="mt-6 space-y-2.5 text-[14.5px] font-semibold text-[var(--od-text)]">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--od-action-content)]" strokeWidth={2.2} />
                  <span>{isVi ? "5.000 đơn/tháng — ưu đãi giới hạn" : "5,000 orders/month — limited-time offer"}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--od-action-content)]" strokeWidth={2.2} />
                  <span>{isVi ? "Không giới hạn số gian hàng" : "Unlimited businesses"}</span>
                </li>
              </ul>

              {/* Inline Startup Program Callout Box */}
              <button
                type="button"
                onClick={() => openDemoModal("Startup Program · Up to 50% off")}
                className="mt-5 w-full rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-3 text-left transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
              >
                <p className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                  <Percent className="h-3.5 w-3.5" />
                  <span>STARTUP PROGRAM</span>
                </p>
                <p className="mt-1 text-[14.5px] font-semibold text-[var(--od-text)]">
                  {isVi ? "Giảm tới 50% năm đầu tiên · " : "Up to 50% off your first year · "}
                  <span className="inline-flex items-center gap-1 text-[var(--od-action-content)]">
                    {isVi ? "Đăng ký" : "Apply"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </p>
                <p className="mt-0.5 text-[13px] text-[var(--od-text-muted)]">
                  {isVi ? "Áp dụng khi thanh toán theo năm." : "With annual billing."}
                </p>
              </button>

              {/* Divider + Included in every plan */}
              <div className="mt-6 border-t border-[var(--od-border)] pt-6">
                <h4 className="text-[14px] font-bold text-[var(--od-text)]">
                  {isVi ? "Bao gồm trong mọi gói" : "Included in every plan"}
                </h4>
                <ul className="mt-4 space-y-2.5 text-[14px] text-[var(--od-text-muted)]">
                  {sharedPlanItems.map((item) => (
                    <li key={item.labelEn} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--od-action-content)]" strokeWidth={2} />
                      {item.href ? (
                        item.isAnchor ? (
                          <a
                            href={item.href}
                            className="underline underline-offset-2 text-[var(--od-text)] hover:text-[var(--od-action-content)]"
                          >
                            {isVi ? item.labelVi : item.labelEn}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="underline underline-offset-2 text-[var(--od-text)] hover:text-[var(--od-action-content)]"
                          >
                            {isVi ? item.labelVi : item.labelEn}
                          </Link>
                        )
                      ) : (
                        <span>{isVi ? item.labelVi : item.labelEn}</span>
                      )}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-[12px] leading-[1.5] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Phí sử dụng Suite áp dụng riêng. Khả năng tích hợp phụ thuộc nhà cung cấp và khu vực."
                    : "Suite usage fees apply. Integrations depend on provider and regional availability."}
                </p>

                <div className="mt-4 flex items-center gap-2.5 text-[14px] font-medium text-[var(--od-text)]">
                  <Check className="h-4 w-4 shrink-0 text-[var(--od-action-content)]" strokeWidth={2} />
                  <span>{isVi ? "Hỗ trợ tiêu chuẩn (Standard Support)" : "Standard Support"}</span>
                </div>

                <p className="mt-4 text-[12px] leading-[1.55] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Tiêu chuẩn gồm 2.000 đơn/tháng. Đăng ký trong đợt ưu đãi này để giữ hạn mức 5.000 đơn/tháng trọn thời gian duy trì gói."
                    : "Normally includes 2,000 orders/month. Sign up during this limited-time offer and keep 5,000 orders/month for as long as your subscription remains active."}
                </p>
              </div>

              {/* Bottom Aligned CTA Stack */}
              <div className="mt-auto pt-8 grid gap-3">
                <button
                  type="button"
                  onClick={() => openDemoModal("Marketplace Plan · Request pricing")}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#266df0] px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
                >
                  <span>{isVi ? "Yêu cầu báo giá" : "Request pricing"}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openDemoModal("Marketplace Plan · Guided demo")}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
                >
                  {isVi ? "Đặt lịch demo" : "Book a demo"}
                </button>
                <p className="text-center text-[12px] text-[var(--od-text-muted)]">
                  {isVi ? "Trao đổi phạm vi và mức giá cùng đội ngũ." : "Review scope and pricing with our team."}
                </p>
              </div>
            </article>

            {/* PLAN 3: ENTERPRISE (Dark #0b0c0d Card) */}
            <article id="enterprise" className="scroll-mt-24 flex flex-col bg-[#0b0c0d] p-6 sm:p-9 text-white">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[#92b5ff]">
                ENTERPRISE
              </p>

              <h3 className="mt-3 text-[24px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.1] text-white lg:min-h-[2.45em]">
                Enterprise
              </h3>

              <p className="mt-3 text-[15px] leading-[1.55] text-[#c4c6ca]">
                {isVi
                  ? "Chuỗi vận hành từ 20+ chi nhánh trở lên, hoặc doanh nghiệp cần hợp đồng thương mại, triển khai hay hỗ trợ riêng."
                  : "A multi-location operation of 20+ locations, or one with a scoped commercial, deployment, or support need."}
              </p>

              {/* Key Billing Bullets */}
              <ul className="mt-6 space-y-2.5 text-[14.5px] font-semibold text-white">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#92b5ff]" strokeWidth={2.2} />
                  <span>{isVi ? "Báo giá tùy chỉnh theo lượng đơn hàng" : "Custom pricing based on your order volume"}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#92b5ff]" strokeWidth={2.2} />
                  <span>
                    {isVi ? "Công suất và lộ trình triển khai theo hợp đồng" : "Capacity and rollout defined in your agreement"}
                  </span>
                </li>
              </ul>

              <p className="mt-3 text-[12px] text-[#c4c6ca]">
                {isVi
                  ? "Triển khai, hỗ trợ và tùy chỉnh theo điều khoản hợp đồng."
                  : "Deployment, support, and custom work follow your agreement."}
              </p>

              {/* Divider + Included in every plan */}
              <div className="mt-6 border-t border-[#34363a] pt-6">
                <h4 className="text-[14px] font-bold text-white">
                  {isVi ? "Bao gồm trong mọi gói" : "Included in every plan"}
                </h4>
                <ul className="mt-4 space-y-2.5 text-[14px] text-[#c4c6ca]">
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#92b5ff]" strokeWidth={2} />
                    <a href="#pricing-products" className="underline underline-offset-2 text-white hover:text-[#92b5ff]">
                      {isVi ? "Tất cả sản phẩm" : "All products"}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#92b5ff]" strokeWidth={2} />
                    <a href="#pricing-features" className="underline underline-offset-2 text-white hover:text-[#92b5ff]">
                      {isVi ? "Tất cả tính năng" : "All features"}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#92b5ff]" strokeWidth={2} />
                    <Link href="/integrations" className="underline underline-offset-2 text-white hover:text-[#92b5ff]">
                      {isVi ? "Tất cả tích hợp" : "All integrations"}
                    </Link>
                  </li>
                </ul>

                <p className="mt-4 text-[13.5px] leading-[1.6] text-[#c4c6ca]">
                  {isVi
                    ? "Mọi thứ trong gói Restaurant và Marketplace, với đầy đủ sản phẩm, ứng dụng, tính năng và "
                    : "Everything in Restaurant and Marketplace, with the same products, apps, features, and "}
                  <Link href="/products#extend" className="underline underline-offset-2 text-white hover:text-[#92b5ff]">
                    API &amp; MCP access
                  </Link>
                  .
                </p>

                <h4 className="mt-6 text-[14px] font-bold text-white">
                  {isVi ? "Tùy chọn theo hợp đồng" : "Options under your agreement"}
                </h4>
                <ul className="mt-3.5 space-y-2.5 text-[14px] text-[#c4c6ca]">
                  {[
                    {
                      en: "Deployment in your own cloud account (BYOC)",
                      vi: "Triển khai trên tài khoản Cloud riêng (BYOC)",
                    },
                    {
                      en: "Custom integrations and scoped projects",
                      vi: "Tích hợp tùy chỉnh và dự án theo phạm vi riêng",
                    },
                    {
                      en: "Agreed SLAs and expanded support",
                      vi: "Cam kết SLA và hỗ trợ mở rộng theo thỏa thuận",
                    },
                    {
                      en: "Backend source code with a separate license and approval",
                      vi: "Cấp phép mã nguồn Backend theo thỏa thuận riêng",
                    },
                  ].map((opt) => (
                    <li key={opt.en} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#92b5ff]" strokeWidth={2} />
                      <span>{isVi ? opt.vi : opt.en}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-[12px] leading-[1.5] text-[#989aa0]">
                  {isVi
                    ? "Phí sử dụng Suite áp dụng riêng. Khả năng tích hợp phụ thuộc nhà cung cấp và khu vực."
                    : "Suite usage fees apply. Integrations depend on provider and regional availability."}
                </p>

                <div className="mt-4 flex items-center gap-2.5 text-[14px] font-medium text-white">
                  <Check className="h-4 w-4 shrink-0 text-[#92b5ff]" strokeWidth={2} />
                  <span>{isVi ? "Hỗ trợ Doanh nghiệp (Enterprise Support)" : "Enterprise Support"}</span>
                </div>
              </div>

              {/* Bottom Aligned CTA Stack */}
              <div className="mt-auto pt-8 grid gap-3">
                <button
                  type="button"
                  onClick={() => openDemoModal("Enterprise · Request pricing")}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#266df0] px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
                >
                  <span>{isVi ? "Yêu cầu báo giá" : "Request pricing"}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openDemoModal("Enterprise · 45 min")}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224] cursor-pointer"
                >
                  {isVi ? "Đặt lịch demo" : "Book a demo"}
                </button>
                <p className="text-center text-[12px] text-[#989aa0]">
                  {isVi ? "Trao đổi phạm vi và mức giá cùng đội ngũ." : "Review scope and pricing with our team."}
                </p>
              </div>
            </article>
          </div>

          {/* Sub-block 2B: Included access. Separate usage and services. */}
          <aside className="mt-8 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 sm:p-8">
            <h3 className="text-[18px] font-bold text-[var(--od-text)]">
              {isVi
                ? "Bao gồm quyền truy cập. Tách biệt phí sử dụng và dịch vụ."
                : "Included access. Separate usage and services."}
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-7 lg:grid-cols-3">
              <div>
                <h4 className="text-[14px] font-bold text-[var(--od-text)]">
                  {isVi ? "Sử dụng AI tùy chọn" : "Optional AI usage"}
                </h4>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Phí công nghệ AI chỉ áp dụng trên doanh thu từ các đơn hàng hợp lệ xử lý qua hội thoại AI, không áp dụng cho đơn đặt thường. Trao đổi biểu phí cụ thể cùng đội ngũ."
                    : "The AI technology fee applies only to revenue from eligible orders processed through AI conversations. It does not apply to non-AI orders. Discuss the rates for your operation with our team."}
                </p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[var(--od-text)]">
                  {isVi ? "Giao vận và bên thứ ba" : "Delivery and third parties"}
                </h4>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Phí Delivery Suite, cước hãng giao hàng bên thứ ba, phí cổng thanh toán, tin nhắn, phí cửa hàng ứng dụng và thuế được tính riêng trừ khi đề xuất có bao gồm."
                    : "Delivery Suite usage, fees charged by third-party delivery companies, payment processing, messaging, app-store fees, taxes, and other third-party costs are separate unless your proposal includes them."}
                </p>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-[var(--od-text)]">
                  {isVi ? "Triển khai và hỗ trợ" : "Implementation and support"}
                </h4>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Hỗ trợ tiêu chuẩn và cập nhật nền tảng đã được bao gồm. Dịch vụ triển khai, tùy biến riêng và hỗ trợ mở rộng tuân theo phạm vi đề xuất của bạn."
                    : "Standard support and platform updates are included. Implementation services, custom work, and expanded support follow the scope of your proposal."}
                </p>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* SECTION 3: Customer Logos Proof Strip */}
      <div className="border-y border-[var(--od-border)] bg-[var(--od-bg)] py-10">
        <Container className="text-center">
          <p className="text-[13.5px] text-[var(--od-text-muted)]">
            {isVi
              ? `Các nhà hàng, chuỗi nhượng quyền và sàn thương mại đã và đang vận hành đặt hàng trên ${siteConfig.name}.`
              : `Restaurants, franchises, and marketplaces already run their ordering on ${siteConfig.name}.`}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between">
            {logos.map((brand) => (
              <Link
                key={brand}
                href="/#customers"
                className="flex h-12 items-center justify-center transition-opacity hover:opacity-80"
              >
                <CustomerLogoItem brand={brand} />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
