"use client";

import {
  ArrowRight,
  BarChart3,
  Cpu,
  CreditCard,
  GitFork,
  Globe,
  Headphones,
  Heart,
  Layers,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Monitor,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Truck,
  UtensilsCrossed,
  Wallet,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";

export function PricingAudiencesAndProducts() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const productGroups = [
    {
      title: "Build",
      descEn: "Create the customer experience.",
      descVi: "Tạo trải nghiệm đặt hàng cho khách.",
      items: [
        { icon: Globe, label: "Marketplace website", href: "/platform/ordering-web" },
        { icon: Smartphone, label: "Marketplace app", href: "/platform/ordering-apps" },
        { icon: UtensilsCrossed, label: "Restaurant website", href: "/platform/restaurant-website" },
        { icon: Smartphone, label: "Restaurant Zalo Mini App", href: "/platform/restaurant-zalo-mini-app" },
        { icon: Smartphone, label: "Restaurant app", href: "/platform/restaurant-app" },
        { icon: Monitor, label: "Ordering Kiosk", href: "/platform/ordering-kiosk" },
        { icon: Headphones, label: "Ordering Call Center", href: "/platform/ordering-call-center" },
        { icon: Layers, label: "Multi-store ordering", href: "/platform/multi-store-ordering" },
        { icon: Sparkles, label: "Web AI Ordering", href: "/platform/ai-ordering-agents" },
        { icon: MessageCircle, label: "WhatsApp AI Ordering", href: "/platform/ai-ordering-agents" },
      ],
    },
    {
      title: "Operate",
      descEn: "Everything behind every order.",
      descVi: "Mọi vận hành phía sau từng đơn hàng.",
      items: [
        { icon: Monitor, label: "Ordering Merchant", href: "/platform/ordering-merchant" },
        { icon: LayoutGrid, label: "Dashboard", href: "/platform/dashboard" },
        { icon: MapPin, label: "Multi-location ops", href: "/platform/multi-location-operations" },
        { icon: Truck, label: "Ordering Delivery", href: "/platform/ordering-delivery" },
        { icon: Route, label: "Driver App & dispatch", href: "/platform/driver-app" },
        { icon: GitFork, label: "Third-party delivery", href: "/platform/third-party-delivery" },
      ],
    },
    {
      title: "Connect & extend",
      descEn: "Integrations where your region and providers support them, and developer access on every plan.",
      descVi: "Tích hợp theo khu vực và nhà cung cấp hỗ trợ, cùng quyền truy cập developer trên mọi gói.",
      items: [
        { icon: CreditCard, label: "Payment gateways", href: "/integrations/payments" },
        { icon: Wallet, label: "POS integrations", href: "/integrations/pos" },
        { icon: Route, label: "Delivery networks", href: "/integrations/delivery" },
        { icon: Heart, label: "Loyalty & CRM", href: "/integrations/loyalty" },
        { icon: BarChart3, label: "Analytics & reports", href: "/integrations/analytics" },
        { icon: Workflow, label: "Automation & more", href: "/integrations/automation" },
        { icon: ShieldCheck, label: "Login & security", href: "/integrations/login-security" },
        { icon: Cpu, label: "API & MCP", href: "/products#extend" },
      ],
    },
  ];

  return (
    <>
      {/* SECTION 4: Audience Split ("Built for businesses. Built for builders.") */}
      <section className="bg-[var(--od-bg)] pt-20 lg:pt-28">
        <Container>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold tracking-[-0.025em] leading-[1.04] text-[var(--od-text)]">
            <span className="block">{isVi ? "Xây dựng cho doanh nghiệp." : "Built for businesses."}</span>
            <span className="block">{isVi ? "Xây dựng cho nhà kiến tạo." : "Built for builders."}</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Left White Card: FOR BUSINESSES */}
            <article className="flex flex-col rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-7 sm:p-11">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                FOR BUSINESSES
              </p>
              <h3 className="mt-3 text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--od-text)]">
                {isVi ? `Vận hành doanh nghiệp trên ${siteConfig.name}` : `Run your business on ${siteConfig.name}`}
              </h3>
              <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? "Dành cho nhà hàng, chuỗi nhượng quyền và tập đoàn cần hạ tầng đặt hàng toàn diện xuyên suốt chi nhánh, kênh bán và đội ngũ giao vận."
                  : "For restaurants, franchises, and enterprise groups that need a complete ordering infrastructure across locations, channels, and delivery operations."}
              </p>

              {/* 6 Rounded Tag Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Restaurants",
                  "Franchises",
                  "Enterprise groups",
                  "Multi-location",
                  "Groceries & local stores",
                  "Delivery companies",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-3.5 py-1.5 text-[12.5px] font-medium text-[var(--od-text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 2 Bottom Anchor Rows */}
              <div className="mt-auto pt-10 divide-y divide-[var(--od-border)] border-t border-[var(--od-border)]">
                <a
                  href="#restaurant"
                  className="group flex items-center justify-between gap-4 py-4 transition-colors hover:opacity-80"
                >
                  <div>
                    <p className="text-[15.5px] font-bold text-[var(--od-text)]">Restaurant</p>
                    <p className="text-[13.5px] text-[var(--od-text-muted)]">
                      {isVi ? "Tính phí theo từng chi nhánh" : "Pricing per location"}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--od-action-content)] transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#enterprise"
                  className="group flex items-center justify-between gap-4 pt-4 transition-colors hover:opacity-80"
                >
                  <div>
                    <p className="text-[15.5px] font-bold text-[var(--od-text)]">Enterprise</p>
                    <p className="text-[13.5px] text-[var(--od-text-muted)]">
                      {isVi ? "Khuyên dùng cho chuỗi từ 20+ chi nhánh" : "Recommended for 20+ locations"}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--od-action-content)] transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>

            {/* Right Dark Card: FOR BUILDERS */}
            <article className="flex flex-col rounded-[10px] bg-[#111013] p-7 sm:p-11 text-white">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[#F9D0D8]">
                FOR BUILDERS
              </p>
              <h3 className="mt-3 text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.1] text-white">
                {isVi ? `Xây dựng nền tảng trên ${siteConfig.name}` : `Build your business on ${siteConfig.name}`}
              </h3>
              <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[#A9A8AF]">
                {isVi
                  ? `Ra mắt sàn đa gian hàng, nền tảng đặt hàng và sản phẩm thương mại tùy chỉnh trên hạ tầng, API và công nghệ của ${siteConfig.name}.`
                  : `Launch marketplaces, ordering platforms, and custom commerce products on the ${siteConfig.name} infrastructure, APIs, and technology.`}
              </p>

              {/* 5 Dark Rounded Tag Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Entrepreneurs", "Marketplace operators", "Agencies", "Resellers", "Software companies"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-3.5 py-1.5 text-[12.5px] font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 2 Bottom Dark Anchor Rows */}
              <div className="mt-auto pt-10 divide-y divide-[#2A2A2E] border-t border-[#2A2A2E]">
                <a
                  href="#marketplace"
                  className="group flex items-center justify-between gap-4 py-4 transition-colors hover:opacity-80"
                >
                  <div>
                    <p className="text-[15.5px] font-bold text-white">Marketplace</p>
                    <p className="text-[13.5px] text-[#A9A8AF]">
                      {isVi ? "Trao đổi phạm vi sàn thương mại của bạn" : "Discuss your marketplace scope"}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#F9D0D8] transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#enterprise"
                  className="group flex items-center justify-between gap-4 pt-4 transition-colors hover:opacity-80"
                >
                  <div>
                    <p className="text-[15.5px] font-bold text-white">Enterprise</p>
                    <p className="text-[13.5px] text-[#A9A8AF]">
                      {isVi
                        ? "Dành cho doanh nghiệp lớn cần phạm vi thiết kế riêng"
                        : "For larger companies that need a tailored scope"}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#F9D0D8] transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* SECTION 5: Products Included (#pricing-products) */}
      <section id="pricing-products" className="scroll-mt-24 bg-[var(--od-bg)] pt-20 lg:pt-28">
        <Container>
          {/* Split Section Header */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                <LayoutGrid className="h-3.5 w-3.5" strokeWidth={1.8} />
                <span>PRODUCTS</span>
              </p>
              <h2 className="mt-3 text-[34px] sm:text-[46px] lg:text-[56px] font-bold tracking-[-0.025em] leading-[1.04] text-[var(--od-text)]">
                {isVi ? "Mọi gói đều gồm tất cả sản phẩm." : "Every plan includes every product."}
              </h2>
            </div>
            <p className="lg:col-span-5 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? "Kênh đặt hàng, công cụ vận hành và quyền truy cập developer đều đi kèm bất kể gói nào bạn chọn."
                : "Customer channels, operations, and developer access come with whichever plan you choose."}
            </p>
          </div>

          {/* 3-Column Unified Hairline Table */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-px overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-border)]">
            {productGroups.map((group) => (
              <div key={group.title} className="bg-[var(--od-bg)] p-6 sm:p-8">
                <h3 className="text-[20px] font-bold text-[var(--od-text)]">{group.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-[var(--od-text-muted)]">
                  {isVi ? group.descVi : group.descEn}
                </p>

                <ul className="mt-6 divide-y divide-[var(--od-border)] border-t border-[var(--od-border)]">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="group flex items-center gap-3 py-3.5 text-[14.5px] font-semibold text-[var(--od-text)] transition-colors hover:text-[var(--od-action-content)]"
                        >
                          <Icon className="h-[18px] w-[18px] shrink-0 text-[var(--od-action-content)]" strokeWidth={1.75} />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
