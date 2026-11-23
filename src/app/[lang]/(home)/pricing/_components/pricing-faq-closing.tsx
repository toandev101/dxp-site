"use client";

import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function getFaqGroups(brand: string) {
  return [
    {
      categoryEn: "Pricing and billing",
      categoryVi: "Bảng giá và thanh toán",
      items: [
        {
          id: "pb-1",
          q: "Do you charge a commission on my orders?",
          a: `No. ${brand} does not charge any commission on your orders. You pay your plan price: per location on Restaurant, and a monthly price on Marketplace and Enterprise. Optional AI ordering has its own AI technology fee, and Marketplace orders beyond the monthly allowance are billed per order.`,
        },
        {
          id: "pb-2",
          q: "What does the AI technology fee cover?",
          a: "The AI technology fee applies only to revenue from eligible orders processed through AI conversations. It does not apply to non-AI orders. Discuss the rates for your operation with our team.",
        },
        {
          id: "pb-3",
          q: "What other costs should I plan for?",
          a: "Payment processing, couriers, messaging, hardware, developer accounts, app-store fees, taxes, custom work, and other third-party costs remain separate unless your proposal includes them.",
        },
      ],
    },
    {
      categoryEn: "Plans and orders",
      categoryVi: "Các gói và đơn hàng",
      items: [
        {
          id: "po-1",
          q: "What is included in every plan?",
          a: `Every plan includes the same ${brand} products and features: API and MCP access, white-label branding, all native apps, and multi-business and multi-location management. Restaurant is billed per location; Marketplace includes unlimited businesses and a monthly order allowance. Usage, implementation services, and Enterprise options have separate terms.`,
        },
        {
          id: "po-2",
          q: "How many orders are included in each plan?",
          a: "Restaurant includes unlimited orders. Marketplace normally includes 2,000 orders per month. Sign up during the current limited-time offer and your plan will keep 5,000 orders per month for as long as your subscription remains active. Enterprise orders follow your agreement, and its price is set by the order volume you expect.",
        },
        {
          id: "po-3",
          q: "What happens if I go over my plan’s orders?",
          a: "Additional Marketplace orders are billed separately under the terms of your proposal. Restaurant orders are unlimited, and Enterprise capacity follows your agreement. Book a meeting to review your volume and applicable rates.",
        },
        {
          id: "po-4",
          q: "Do all plans include API and MCP access?",
          a: `Yes. Every plan includes developer access to the ${brand} API and MCP for compatible tools, so you can connect, extend, and automate on any plan.`,
        },
        {
          id: "po-5",
          q: "Do I get the source code?",
          a: `Yes. The frontend source code is open source and included with every product, including the Marketplace Website, Customer App, Business App, Driver App, and Dashboard, so your team can build on the technology that already runs the platform. The backend source code is available only to enterprise organizations, under a separate license agreement and after ${brand} approves the organization.`,
        },
        {
          id: "po-6",
          q: `Can I run ${brand} in my own cloud?`,
          a: `Yes, with an enterprise package. It installs the same ${brand} backend in your AWS, Google Cloud, Microsoft Azure, or Railway account. Bring your own cloud has its own terms: one contract for an agreed term at a fixed rate, with no charges per store or by transaction volume. Every other plan runs on infrastructure ${brand} manages.`,
        },
      ],
    },
    {
      categoryEn: "Evaluation, cancellation, and refunds",
      categoryVi: "Dùng thử, hủy gói và hoàn tiền",
      items: [
        {
          id: "ec-1",
          q: `Can I try ${brand} before I commit?`,
          a: "Book a guided demo to review the products, integrations, and setup your operation needs. Implementation and any agreed evaluation are scoped with our team.",
        },
        {
          id: "ec-2",
          q: "Can I cancel anytime?",
          a: `Yes. ${brand} offers monthly and annual plans, and Enterprise terms follow your agreement. You can cancel at any time, and your plan stays active until the end of the current billing cycle.`,
        },
        {
          id: "ec-3",
          q: "Do you offer refunds?",
          a: `Refund eligibility and any offer-specific guarantee follow the terms of your purchase. Contact ${brand} to review the terms that apply to your subscription.`,
        },
      ],
    },
    {
      categoryEn: "Getting started",
      categoryVi: "Bắt đầu triển khai",
      items: [
        {
          id: "gs-1",
          q: "Can I migrate from another provider?",
          a: "Yes. If you have your data, we can help you migrate orders, customers, businesses, and more; the price depends on your plan and agreement. You can also migrate on your own at no cost with the tools every plan includes, such as the API and MCP.",
        },
        {
          id: "gs-2",
          q: `Where can I use ${brand}?`,
          a: "Anywhere in the world. Payment, delivery, and integration providers vary by region, so confirm the ones your market needs.",
        },
        {
          id: "gs-3",
          q: "Can I accept online payments?",
          a: `Yes. ${brand} has more than 50 payment integrations, and we keep adding more. Contact us if you need a specific payment integration.`,
        },
        {
          id: "gs-4",
          q: "Will my POS, delivery, and payment providers connect?",
          a: `${brand} connects with supported POS, marketplace, delivery, and payment providers. Availability depends on region, account compatibility, implementation, and provider terms, so confirm the connections your account needs before launch.`,
        },
      ],
    },
    {
      categoryEn: "Data and support",
      categoryVi: "Dữ liệu và hỗ trợ",
      items: [
        {
          id: "ds-1",
          q: "Who owns my data?",
          a: `You do. You always own the data you put on ${brand}, and you can export it with the tools we provide. ${brand} never owns your data.`,
        },
        {
          id: "ds-2",
          q: "What support is included?",
          a: "Every plan includes support. We aim to reply to standard tickets within 24 to 48 hours.",
        },
        {
          id: "ds-3",
          q: "Does Enterprise include 24/7 support or an SLA by default?",
          a: "No. 24/7 emergency support and contractual SLAs are available only when they are explicitly included in your Enterprise agreement, which defines coverage, channels, exclusions, and service levels.",
        },
      ],
    },
  ];
}

export function PricingFaqAndClosing() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal, setChatOpen } = useUiStore();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const groups = getFaqGroups(siteConfig.name);

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* SECTION 8: Sticky-Left Categorized FAQ Accordion */}
      <section className="bg-[var(--od-bg)] pt-6 lg:pt-12">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
            {/* Left Sticky Column */}
            <div className="lg:sticky lg:top-[105px] lg:self-start">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                QUESTIONS
              </p>
              <h2 className="mt-3 text-[34px] sm:text-[44px] lg:text-[48px] font-bold tracking-[-0.025em] leading-[1.04] text-[var(--od-text)]">
                {isVi ? "Câu hỏi trước khi lựa chọn." : "Questions before you choose."}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi ? "Chưa thấy câu trả lời bạn cần? " : "Can’t find your answer? "}
                <button
                  type="button"
                  onClick={() => setChatOpen(true)}
                  className="font-semibold text-[var(--od-action-content)] underline underline-offset-2 cursor-pointer"
                >
                  {isVi ? `Trao đổi với ${siteConfig.name}` : `Talk to ${siteConfig.name}`}
                </button>
                .
              </p>
            </div>

            {/* Right Categorized FAQ Groups */}
            <div className="space-y-12">
              {groups.map((group) => (
                <div key={group.categoryEn}>
                  <h3 className="pb-3 text-[13.5px] font-semibold text-[var(--od-text-muted)]">
                    {isVi ? group.categoryVi : group.categoryEn}
                  </h3>
                  <div className="border-t border-[var(--od-border-strong)]">
                    {group.items.map((item) => {
                      const isOpen = !!openIds[item.id];
                      return (
                        <div key={item.id} className="border-b border-[var(--od-border)]">
                          <button
                            type="button"
                            onClick={() => toggle(item.id)}
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
                          >
                            <span className="text-[16px] font-semibold text-[var(--od-text)]">
                              {item.q}
                            </span>
                            <Plus
                              className={cn(
                                "h-4 w-4 shrink-0 text-[var(--od-text-muted)] transition-transform duration-200",
                                isOpen && "rotate-45 text-[var(--od-text)]"
                              )}
                            />
                          </button>
                          {isOpen && (
                            <div className="pb-5 text-[15px] leading-[1.65] text-[var(--od-text-muted)]">
                              {item.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 9: Closing Dark CTA Band ("FIND THE RIGHT PATH") */}
      <section className="bg-[var(--od-bg)] py-20 lg:py-28">
        <Container>
          <div className="rounded-[10px] bg-[#0b0c0d] px-7 py-14 sm:p-16 text-white grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,23rem)] lg:gap-20">
            <div>
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[#92b5ff]">
                FIND THE RIGHT PATH
              </p>
              <h2 className="mt-4 max-w-[20ch] text-[36px] sm:text-[48px] lg:text-[56px] font-bold tracking-[-0.025em] leading-[1.04] text-white">
                {isVi
                  ? "Trao đổi về các kênh, chi nhánh và kết nối doanh nghiệp bạn cần."
                  : "Discuss the channels, locations, and connections your operation needs."}
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-[#c4c6ca]">
                {isVi
                  ? "Chúng tôi sẽ giúp chọn lộ trình khởi điểm khớp với mô hình vận hành và xác định rõ phạm vi triển khai."
                  : "We can match the starting path to your operating model and define the scope that needs to be documented."}
              </p>
            </div>

            <div className="grid gap-3">
              <button
                type="button"
                onClick={() => openDemoModal("Pricing Closing · Request pricing")}
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
              >
                <span>{isVi ? "Yêu cầu báo giá" : "Request pricing"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => openDemoModal("Pricing · 30 min")}
                className="inline-flex min-h-[46px] w-full items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224] cursor-pointer"
              >
                {isVi ? "Đặt lịch demo" : "Book a demo"}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
