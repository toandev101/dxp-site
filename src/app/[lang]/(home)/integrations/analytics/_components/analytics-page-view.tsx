"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { ANALYTICS_INTEGRATIONS } from "../../_data/integrations-catalog";
import {
  IntegrationClosingCta,
  IntegrationHero,
  IntegrationProviderCard,
} from "../../_components/integrations-shared";
import { AnalyticsHeroAside } from "../../_components/integration-hero-asides";

const BRAND = siteConfig.name;

export function AnalyticsPageView() {
  const { openDemoModal } = useUiStore();
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const analyticsCatalog = ANALYTICS_INTEGRATIONS.filter((i) => i.id !== "segment");

  const howItWorks = isVi
    ? [
        {
          num: "01",
          title: "Xem báo cáo tích hợp sẵn",
          body: `Báo cáo ${BRAND} hiển thị doanh số, đơn hàng và hiệu suất cửa hàng ngay trong Bảng điều khiển, đồng thời hỗ trợ xuất CSV.`,
        },
        {
          num: "02",
          title: "Kết nối công cụ marketing",
          body: `Gắn mã Google Analytics 4, Meta Pixel hoặc Google Tag Manager trực tiếp trong Bảng điều khiển ${BRAND}.`,
        },
        {
          num: "03",
          title: "Khai thác dữ liệu chuyên sâu",
          body: `Phân tích tệp xuất bằng Excel, hoặc kéo dữ liệu về hệ thống riêng của bạn thông qua ${BRAND} API và MCP.`,
        },
      ]
    : [
        {
          num: "01",
          title: "Read your built-in reports",
          body: `${BRAND} reports show sales, orders, and business performance in the Dashboard, and orders export as CSV.`,
        },
        {
          num: "02",
          title: "Connect your marketing tools",
          body: `Add your Google Analytics 4, Meta Pixel, or Google Tag Manager IDs in the ${BRAND} Dashboard.`,
        },
        {
          num: "03",
          title: "Take your data further",
          body: `Analyze exports in Excel, or pull data into your own tools with the ${BRAND} API and MCP.`,
        },
      ];

  const capabilities = isVi
    ? [
        {
          num: "01",
          title: "Báo cáo vận hành",
          body: `Theo dõi doanh số và đơn hàng trên toàn bộ chi nhánh trong Bảng điều khiển ${BRAND}.`,
        },
        {
          num: "02",
          title: "Đo lường marketing",
          body: "Kết nối các công cụ phân tích và quảng cáo mà đội ngũ marketing của bạn đang tin dùng.",
        },
        {
          num: "03",
          title: "Xuất dữ liệu linh hoạt",
          body: "Xuất đơn hàng dưới dạng CSV để xử lý nhanh trong Excel hoặc bất kỳ công cụ bảng tính nào.",
        },
        {
          num: "04",
          title: "Truy cập qua API & MCP",
          body: "Đồng bộ dữ liệu đơn hàng, khách hàng và doanh thu vào hệ thống BI riêng bằng API và MCP.",
        },
      ]
    : [
        {
          num: "01",
          title: "Operating reports",
          body: `Follow sales and orders across your stores in the ${BRAND} Dashboard.`,
        },
        {
          num: "02",
          title: "Marketing measurement",
          body: "Connect the analytics and ad tools your marketing team relies on.",
        },
        {
          num: "03",
          title: "Exports",
          body: "Export orders as CSV and work with them in Excel or any spreadsheet.",
        },
        {
          num: "04",
          title: "Programmatic access",
          body: "Pull orders, customers, and sales into your own tools with the API and MCP.",
        },
      ];

  const relatedItems = isVi
    ? [
        {
          label: "Kết nối",
          title: "Tích hợp POS",
          body: "Kết nối POS để mọi đơn hàng đều được ghi nhận chính xác.",
          href: "/integrations/pos",
        },
        {
          label: "Kết nối",
          title: "Khách hàng thân thiết & CRM",
          body: "Biến dữ liệu khách hàng thành chương trình tích điểm và chiến dịch tiếp thị.",
          href: "/integrations/loyalty",
        },
        {
          label: "Vận hành",
          title: "Vận hành đa chi nhánh",
          body: "So sánh hiệu suất bán hàng trên tất cả các điểm bán của bạn.",
          href: "/platform/multi-location-operations",
        },
      ]
    : [
        {
          label: "Connect",
          title: "POS integrations",
          body: "Connect your POS so every order is counted.",
          href: "/integrations/pos",
        },
        {
          label: "Connect",
          title: "Loyalty and CRM",
          body: "Turn customer data into loyalty and campaigns.",
          href: "/integrations/loyalty",
        },
        {
          label: "Operate",
          title: "Multi-location operations",
          body: "Compare performance across all your locations.",
          href: "/platform/multi-location-operations",
        },
      ];

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: isVi ? "Nền tảng" : "Platform", href: "/products" },
          { label: isVi ? "Kết nối" : "Connect", href: "/products#connect" },
          { label: isVi ? "Phân tích & Báo cáo" : "Analytics" },
        ]}
        title={isVi ? "Nắm rõ món nào bán chạy, ở đâu và vì sao." : "Know what sells, where, and why."}
        lede={
          isVi
            ? `Sử dụng báo cáo ${BRAND} cho vận hành, kết nối Google Analytics 4, Meta Pixel và Google Tag Manager cho marketing, đồng thời mở rộng phân tích dữ liệu với Excel, API và MCP.`
            : `Use ${BRAND} reports for your operation, connect Google Analytics 4, Meta Pixel, and Google Tag Manager for your marketing, and take your data further with Excel, the API, and MCP.`
        }
        primaryCta={{
          label: isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`,
          modalTopic: "Analytics integrations",
        }}
        secondaryCta={{
          label: isVi ? "Xem tất cả tích hợp" : "See all integrations",
          href: "/integrations",
        }}
        meta={
          isVi
            ? ["Báo cáo tích hợp sẵn", "Đo lường marketing", "Công cụ dữ liệu của riêng bạn"]
            : ["Built-in reports", "Marketing measurement", "Your own data tools"]
        }
        aside={<AnalyticsHeroAside />}
      />

      {/* 2. HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 py-16">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? "Cách hoạt động" : "How it works"}
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            {isVi
              ? "Báo cáo cho vận hành, công cụ đo lường cho marketing."
              : "Reports for your operation, tools for your marketing."}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.num} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">{step.num}</span>
                <h3 className="mt-2 text-[18px] font-bold text-[var(--od-text)]">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CATALOG (8 TOOLS) */}
      <section id="catalog" className="scroll-mt-24 py-12">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Tích hợp phân tích" : "Analytics integrations"}
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                {isVi ? "Chọn công cụ phân tích của bạn." : "Choose your analytics tools."}
              </h2>
            </div>
            <Link
              href="/integrations"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Tất cả tích hợp" : "All integrations"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {analyticsCatalog.map((item) => (
              <IntegrationProviderCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. WHAT YOU GET */}
      <section id="capabilities" className="scroll-mt-24 border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-16 my-8">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Bạn nhận được gì" : "What you get"}
              </p>
              <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
                {isVi
                  ? "Nhìn trọn vẹn toàn bộ hoạt động, từ đơn hàng tới chiến dịch."
                  : "See the whole business, from order to campaign."}
              </h2>
            </div>
            <Link
              href="/platform/dashboard"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Chi tiết báo cáo kinh doanh" : "Business intelligence details"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.num} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">{c.num}</span>
                <h3 className="mt-2 text-[17.5px] font-bold text-[var(--od-text)]">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. DEVELOPERS */}
      <section id="developers" className="scroll-mt-24 py-12">
        <Container>
          <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-7 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Tự xây dựng báo cáo" : "Build your own"}
              </p>
              <h2 className="mt-2 text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
                {isVi
                  ? `Đưa dữ liệu ${BRAND} vào hệ thống báo cáo riêng của bạn.`
                  : `Bring ${BRAND} data into your own reporting.`}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products#extend"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2 text-[14px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)]"
              >
                {isVi ? "Mở tài liệu API" : "Open API reference"}
              </Link>
              <button
                type="button"
                onClick={() => openDemoModal("Analytics & BI API access")}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2 text-[14px] font-semibold text-white hover:bg-[#B8123A] cursor-pointer"
              >
                {isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`}
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. RELATED */}
      <section id="related" className="scroll-mt-24 py-12">
        <Container>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
            {isVi
              ? "Các khu vực liên quan nên hoạch định cùng đo lường."
              : "Related areas to plan alongside measurement."}
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            {relatedItems.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="group rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full border border-[var(--od-border)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--od-text-muted)]">
                    {r.label}
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-[var(--od-text-muted)]">{r.body}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--od-action-content)]">
                  {isVi ? "Khám phá" : "Explore"} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. CLOSING CTA */}
      <IntegrationClosingCta
        title={
          isVi
            ? "Có cái nhìn rõ ràng về toàn bộ hoạt động đặt món."
            : "Get a clear view of your ordering business."
        }
        body={
          isVi
            ? "Hãy cho chúng tôi biết báo cáo và công cụ đội ngũ bạn đang sử dụng — chúng tôi sẽ hỗ trợ kết nối trọn vẹn."
            : "Tell us which reports and tools your team uses, and we will help you connect them."
        }
        primaryCta={{
          label: isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`,
          modalTopic: "Analytics & reporting consultation",
        }}
        secondaryCta={{ label: isVi ? "Xem bảng giá" : "See pricing", href: "/pricing" }}
      />
    </div>
  );
}
