"use client";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";
import {
  AUTOMATION_INTEGRATIONS,
  BUILT_IN_AUTOMATIONS,
} from "../../_data/integrations-catalog";
import {
  IntegrationClosingCta,
  IntegrationHero,
  IntegrationProviderCard,
} from "../../_components/integrations-shared";
import { AutomationHeroAside } from "../../_components/integration-hero-asides";

const BRAND = siteConfig.name;

export function AutomationPageView() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const howItWorks = isVi
    ? [
        {
          num: "01",
          title: "Một sự kiện xảy ra",
          body: `Khách đặt đơn mới, trạng thái đơn thay đổi hoặc thực đơn được cập nhật trong ${BRAND}.`,
        },
        {
          num: "02",
          title: `${BRAND} phản hồi tức thì`,
          body: "Webhooks gửi sự kiện tới hệ thống của bạn, đồng thời Plugins thực thi logic nghiệp vụ riêng ngay tại bước đó.",
        },
        {
          num: "03",
          title: "Toàn bộ hệ thống luôn đồng bộ",
          body: "ERP, CRM, công cụ nhắn tin và AI cùng hành động trên một nguồn dữ liệu thông qua API, MCP và Zapier.",
        },
      ]
    : [
        {
          num: "01",
          title: "An event happens",
          body: `A customer places an order, a status changes, or your menu is updated in ${BRAND}.`,
        },
        {
          num: "02",
          title: `${BRAND} reacts`,
          body: "Webhooks send the event to your systems, and Plugins run your own logic at that step.",
        },
        {
          num: "03",
          title: "Your stack stays in step",
          body: "Your ERP, CRM, messaging, and AI tools act on the same data through the API, MCP, and Zapier.",
        },
      ];

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: isVi ? "Tất cả tích hợp" : "All integrations", href: "/integrations" },
          { label: isVi ? "Tự động hóa & khác" : "Automation and more" },
        ]}
        title={isVi ? "Tự động hóa mọi quy trình xung quanh đơn hàng." : "Automate everything around your orders."}
        lede={
          isVi
            ? `Gửi sự kiện đơn hàng sang hệ thống của bạn bằng Webhooks, mở rộng ${BRAND} với Plugins, xây dựng trên API và MCP, kết nối hàng nghìn ứng dụng qua Zapier và tích hợp LiveChat hỗ trợ khách hàng trên mọi kênh.`
            : `Send order events to your systems with Webhooks, extend ${BRAND} with Plugins, build on the API and MCP, connect thousands of apps through Zapier, and connect your LiveChat account for support or sales chat on your channels.`
        }
        primaryCta={{
          label: isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`,
          modalTopic: "Automation integrations",
        }}
        secondaryCta={{
          label: isVi ? "Xem tất cả tích hợp" : "Browse all integrations",
          href: "/integrations",
        }}
        meta={
          isVi
            ? ["Webhooks & Plugins", "API & MCP", "Không cần code với Zapier", "LiveChat hỗ trợ"]
            : ["Webhooks and Plugins", "API and MCP", "No-code with Zapier", "LiveChat for support"]
        }
        aside={<AutomationHeroAside />}
      />

      {/* 2. BUILT INTO OPERO (3 AUTOMATIONS) */}
      <section id="built-in" className="scroll-mt-24 py-16">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? `Tích hợp sẵn trong ${BRAND}` : `Built into ${BRAND}`}
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            {isVi ? "Các quy trình tự động vận hành độc lập." : "Automations that run on their own."}
          </h2>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
            {isVi
              ? `Các tính năng có sẵn trong ${BRAND} tự động theo dõi đơn hàng và hành động đúng thời điểm. Đội ngũ chúng tôi hỗ trợ thiết lập cho mọi kênh cần cấu hình.`
              : `Features built into ${BRAND} that follow your orders and act at the right moment. Our team helps with any setup a channel needs.`}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {BUILT_IN_AUTOMATIONS.map((item) => (
              <IntegrationProviderCard key={item.id} item={item} compact />
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CATALOG (11 INTEGRATIONS) */}
      <section id="catalog" className="scroll-mt-24 border-t border-[var(--od-border)] py-16">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? "Tự động hóa & khác" : "Automation and more"}
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            {isVi ? "Chọn cách bạn tự động hóa." : "Choose how you automate."}
          </h2>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
            {isVi
              ? "Mỗi tích hợp đều có hướng dẫn cấu hình chi tiết và ví dụ triển khai thực tế."
              : "Each integration has its own page with setup steps and examples."}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AUTOMATION_INTEGRATIONS.map((item) => (
              <IntegrationProviderCard key={item.id} item={item} compact />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-16 my-8">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? "Cách hoạt động" : "How it works"}
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            {isVi
              ? "Từ một đơn hàng tới mọi hệ thống cần dữ liệu."
              : "From an order to every system that needs it."}
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

      {/* 5. DEVELOPERS */}
      <section id="developers" className="scroll-mt-24 py-12">
        <Container>
          <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-7 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Lập trình viên" : "Developers"}
              </p>
              <h2 className="mt-2 text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
                {isVi ? "Xây dựng trên chính nền tảng chúng tôi sử dụng." : "Build on the same platform we use."}
              </h2>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? `${BRAND} API, Webhooks, Plugins và MCP cung cấp cho đội ngũ kỹ thuật của bạn đầy đủ nền móng tạo nên mọi tích hợp ${BRAND}.`
                  : `The ${BRAND} API, Webhooks, Plugins, and MCP give your team the building blocks behind every ${BRAND} integration.`}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/products#extend"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2 text-[14px] font-semibold text-white hover:bg-[#B8123A]"
              >
                {isVi ? "Mở tài liệu API" : "Open API reference"}
              </Link>
              <Link
                href="/#control"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2 text-[14px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)]"
              >
                {isVi ? "Khám phá dành cho lập trình viên" : "Explore Developers"}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CLOSING CTA */}
      <IntegrationClosingCta
        title={isVi ? "Tự động hóa vận hành đặt hàng của bạn." : "Automate your ordering operation."}
        body={
          isVi
            ? "Hãy cho chúng tôi biết các hệ thống bạn muốn kết nối — chúng tôi sẽ giúp bạn chọn giải pháp tối ưu giữa Webhooks, Plugins, API và Zapier. Lưu ý không chia sẻ thông tin mật khẩu/khóa bí mật trong yêu cầu."
            : "Tell us which systems you want connected, and we will help you choose between Webhooks, Plugins, the API, and Zapier. Never share credentials in a request."
        }
        primaryCta={{
          label: isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`,
          modalTopic: "Automation & webhooks setup",
        }}
        secondaryCta={{ label: isVi ? "Xem tất cả tích hợp" : "See all integrations", href: "/integrations" }}
      />
    </div>
  );
}
