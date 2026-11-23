"use client";

import { useState } from "react";
import { ArrowRight, Check, ListChecks, Minus, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";

const FEATURE_CARDS = [
  {
    titleEn: "Ordering experience",
    titleVi: "Trải nghiệm đặt hàng",
    items: ["Branded ordering website", "Branded customer apps", "Self-ordering kiosk"],
  },
  {
    titleEn: "Menus and catalog",
    titleVi: "Thực đơn & danh mục",
    items: ["Unlimited products and categories", "Product options and conditions", "Scheduled menus"],
  },
  {
    titleEn: "Cart, checkout, and payments",
    titleVi: "Giỏ hàng & thanh toán",
    items: ["Guest checkout", "Automatic taxes", "Online card payments"],
  },
  {
    titleEn: "Order management",
    titleVi: "Quản lý đơn hàng",
    items: ["Real-time order management", "Merchant app on tablet and phone", "Order printing"],
  },
  {
    titleEn: "Stores and locations",
    titleVi: "Cửa hàng & chi nhánh",
    items: ["Multi-store management", "Brand management", "Delivery zones"],
  },
  {
    titleEn: "Delivery and drivers",
    titleVi: "Giao vận & tài xế",
    items: ["Driver app for deliveries", "Delivery dashboard", "Automatic assignment"],
  },
  {
    titleEn: "Marketing and loyalty",
    titleVi: "Marketing & thành viên",
    items: ["Coupons and discounts", "Advanced offers", "Cart recovery"],
  },
  {
    titleEn: "Reports and reviews",
    titleVi: "Báo cáo & đánh giá",
    items: ["Business reports", "Data exports", "Reviews and ratings"],
  },
  {
    titleEn: "Administration and security",
    titleVi: "Quản trị & bảo mật",
    items: ["Admin dashboard", "User roles", "Custom domain and SSL"],
  },
  {
    titleEn: "Integrations and developer tools",
    titleVi: "Tích hợp & công cụ lập trình",
    items: ["Integrations", "API access", "Analytics and tracking"],
  },
];

const HIGHLIGHT_GROUPS = [
  {
    title: "AI ordering",
    items: [
      { text: "Web AI Ordering to accept qualifying orders through supported online conversations", linked: true },
      { text: "WhatsApp AI Ordering to accept qualifying orders within confirmed availability", linked: true },
      {
        text: "AI Ordering Suite access is included and optional to use; usage fees apply to eligible AI orders. Discuss the rates for your operation.",
        linked: false,
      },
    ],
  },
  {
    title: "Your brand and channels",
    items: [
      { text: "White-Label Platform with your brand, domains, customer experiences, and supported native applications", linked: true },
      { text: "Branded Customer Ordering across website, mobile web, native apps, and supported AI ordering channels", linked: true },
      { text: "Customer App for iOS and Android", linked: true },
      { text: "Business App for iOS and Android", linked: true },
      { text: "Driver App for iOS and Android", linked: true },
      { text: "Operations Dashboard", linked: true },
      { text: "Omnichannel Ordering across web, native apps, WhatsApp, AI ordering, kiosks, call center, and supported custom frontend experiences", linked: true },
      { text: "Store Websites with custom domains", linked: true },
      { text: "Custom Domains for supported marketplace and store experiences", linked: true },
      { text: `Custom Frontend Experiences using ${siteConfig.name} APIs and MCP, plus open-source frontend code`, linked: true },
    ],
  },
  {
    title: "Ordering and menus",
    items: [
      { text: "Pickup, Delivery, and Dine-In Ordering across supported web, mobile, and app experiences", linked: true },
      { text: "Real-Time Order Management to receive, confirm, prepare, cancel, or reject orders", linked: true },
      { text: "Scheduled Orders for customers to place orders ahead of time", linked: true },
      { text: "Table Reservations and Order Ahead", linked: true },
      { text: "QR Dine-In Ordering for supported table and on-premise ordering experiences", linked: true },
      { text: "Menu Management for categories, products, modifiers, add-ons, images, pricing, and availability", linked: true },
      { text: "1-Click Menu Importers for supported menu sources", linked: true },
      { text: "Service Availability Controls including Out of Stock, Vacation Mode, and Pause Services", linked: true },
      { text: "Shared Menus across supported ordering channels and restaurant experiences", linked: true },
      { text: "Catering for large and scheduled order workflows", linked: true },
    ],
  },
  {
    title: "Multi-store and multi-business operations",
    items: [
      { text: "Multi-Business Management to configure and manage multiple businesses from one centralized platform", linked: true },
      { text: "Multi-Location Operations to manage and coordinate supported businesses and locations from one connected platform", linked: true },
      { text: "Multi-Business Checkout", linked: false },
      { text: "Centralized Operations to manage businesses, orders, settings, and customer data in one place", linked: true },
    ],
  },
  {
    title: "Payments, marketing, and loyalty",
    items: [
      { text: "Online Payments across 50+ global and local gateways", linked: true },
      { text: "Stripe Connect for multi-vendor split payouts", linked: true },
      { text: "Promotions and Coupons", linked: true },
      { text: "Advanced Promotion Tools for bundles, BOGO, and targeted rules", linked: true },
      { text: "Customer Growth Tools (mass email, WhatsApp, SMS, push notifications, and referrals)", linked: true },
      { text: "Loyalty Points Wallet and Levels", linked: true },
      { text: "Cash Wallet and Wallet Refunds", linked: true },
      { text: "Gift Cards", linked: true },
      { text: "Advanced Reporting and exports", linked: true },
    ],
  },
  {
    title: "Delivery",
    items: [
      { text: "Delivery Automation", linked: true },
      { text: "Delivery Areas and Schedules with configurable zones, delivery fees, minimums, and service hours", linked: true },
      { text: "Self-Delivery with supported driver management, assignment, tracking, and Driver App workflows", linked: true },
      { text: "Delivery Companies", linked: true },
      { text: "Delivery Integrations with supported providers including Uber Direct, DoorDash Drive, and Lalamove", linked: true },
    ],
  },
  {
    title: "Integrations and developers",
    items: [
      { text: "POS Integrations with supported point-of-sale platforms including Oracle Simphony, Clover, Square, LimeTray, Wansoft, Deliverect, ItsaCheckmate, and Stream", linked: true },
      { text: "Marketplace Integrations with supported third-party marketplaces including DoorDash, Just Eat, Uber Eats, and Rappi", linked: true },
      { text: "Ordering Connect, the Dashboard hub for your integrations", linked: true },
      { text: "API & MCP Access", linked: true },
      { text: `Developer Platform with API, MCP, integrations, and frontend code access to build on top of ${siteConfig.name}`, linked: true },
      { text: "Connect with Claude Code, ChatGPT, Codex, and more", linked: true },
      { text: "Self-Ordering Kiosk", linked: true },
      { text: "Call Center Software", linked: true },
    ],
  },
  {
    title: "Infrastructure and support",
    items: [
      { text: "Managed Global AWS Infrastructure", linked: false },
      { text: "Global CDN and Media Delivery", linked: false },
      { text: "Enterprise Security and SSL", linked: false },
      { text: "Standard Platform Updates", linked: false },
      { text: "Standard Support", linked: false },
    ],
  },
];

export function PricingFeaturesAndMidCta() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal } = useUiStore();
  const [showHighlights, setShowHighlights] = useState(false);

  return (
    <>
      {/* SECTION 6: Features 10-Card Grid + Expandable Masonry Highlights (#pricing-features) */}
      <section id="pricing-features" className="scroll-mt-24 bg-[var(--od-bg)] pt-20 lg:pt-28">
        <Container>
          {/* Split Section Header */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                <ListChecks className="h-3.5 w-3.5" strokeWidth={1.8} />
                <span>FEATURES</span>
              </p>
              <h2 className="mt-3 text-[34px] sm:text-[46px] lg:text-[56px] font-bold tracking-[-0.025em] leading-[1.04] text-[var(--od-text)]">
                {isVi ? "Mọi gói đều gồm tất cả tính năng." : "Every plan includes every feature."}
              </h2>
            </div>
            <p className="lg:col-span-5 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? `Gói Restaurant, Marketplace và Enterprise đều bao gồm mọi tính năng trên hệ sinh thái ${siteConfig.name}. Các gói chỉ khác nhau ở cách tính phí, hạn mức sử dụng và phạm vi hợp đồng.`
                : `Restaurant, Marketplace, and Enterprise include every feature across ${siteConfig.name} products. The plans differ in pricing basis, usage, and contracted scope.`}
            </p>
          </div>

          {/* 5x2 Grid of 10 Feature Category Cards */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {FEATURE_CARDS.map((card) => (
              <div
                key={card.titleEn}
                className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)]"
              >
                <h3 className="border-b border-[var(--od-border)] pb-3.5 text-[16px] font-bold leading-[1.3] text-[var(--od-text)]">
                  <Link href="/products" className="hover:text-[var(--od-action-content)] transition-colors">
                    {isVi ? card.titleVi : card.titleEn}
                  </Link>
                </h3>
                <ul className="mt-4 space-y-2.5 text-[13px] leading-[1.45] text-[var(--od-text-muted)]">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--od-action-content)]" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Centered Action Row: Expand more highlights + / See all features -> */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setShowHighlights(!showHighlights)}
              aria-expanded={showHighlights}
              className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
            >
              <span>
                {showHighlights
                  ? isVi
                    ? "Ẩn chi tiết nổi bật"
                    : "Hide highlights"
                  : isVi
                    ? "Mở rộng thêm tính năng nổi bật"
                    : "Expand more highlights"}
              </span>
              {showHighlights ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </button>

            {!showHighlights && (
              <Link
                href="/products"
                className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
              >
                <span>{isVi ? "Xem tất cả tính năng" : "See all features"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          {/* Expanded 3-Column Masonry Highlights Panel */}
          {showHighlights && (
            <div className="mt-6 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 sm:p-9">
              <h3 className="text-[20px] font-bold text-[var(--od-text)]">
                {isVi ? "Thêm các điểm nổi bật có trên mọi gói" : "More highlights on every plan"}
              </h3>

              <div className="mt-6 columns-1 gap-8 md:columns-2 lg:columns-3 space-y-7">
                {HIGHLIGHT_GROUPS.map((group) => (
                  <div key={group.title} className="break-inside-avoid">
                    <h4 className="text-[14.5px] font-bold text-[var(--od-text)]">{group.title}</h4>
                    <ul className="mt-3 space-y-2.5 text-[13.5px] leading-[1.5] text-[var(--od-text-muted)]">
                      {group.items.map((item) => (
                        <li key={item.text} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--od-action-content)]" strokeWidth={2} />
                          {item.linked ? (
                            <Link
                              href="/products"
                              className="underline underline-offset-2 text-[var(--od-text)] hover:text-[var(--od-action-content)]"
                            >
                              {item.text}
                            </Link>
                          ) : (
                            <span>{item.text}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* SECTION 7: Mid-Page Light Review CTA Band */}
      <section className="bg-[var(--od-bg)] py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] px-7 py-12 sm:px-14 sm:py-16 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Subtle Right-Side Soft Blue Radial Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[540px] w-[620px] -translate-y-1/2"
              style={{
                background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.16), transparent)",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.08] text-[var(--od-text)]">
                {isVi
                  ? "Cùng rà soát gói phù hợp cho vận hành của bạn."
                  : "Let’s review the plan for your operation."}
              </h2>
              <p className="mt-3.5 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? "Chia sẻ các kênh bán, số chi nhánh, tích hợp và sản lượng đơn hàng. Chúng tôi sẽ cùng bạn xác định phạm vi và báo giá chi tiết."
                  : "Bring your channels, locations, integrations, and order volume. We’ll review the scope and pricing with you."}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openDemoModal("Pricing Review · Request pricing")}
                className="inline-flex min-h-[44px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
              >
                {isVi ? "Yêu cầu báo giá" : "Request pricing"}
              </button>
              <button
                type="button"
                onClick={() => openDemoModal("Pricing · 30 min")}
                className="inline-flex min-h-[44px] items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
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
