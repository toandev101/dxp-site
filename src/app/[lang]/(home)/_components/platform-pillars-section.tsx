"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Box,
  ClipboardList,
  Cloud,
  Code2,
  Cpu,
  CreditCard,
  FileCode2,
  GitFork,
  Globe,
  Headphones,
  Heart,
  Layers,
  LayoutGrid,
  Link2,
  MapPin,
  MessageCircle,
  Minus,
  Monitor,
  Plus,
  Puzzle,
  Route,
  Smartphone,
  Store,
  Tag,
  Truck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";

export function PlatformPillarsSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const [expanded, setExpanded] = useState(false);

  const pillars = [
    {
      title: "Build",
      subtitleEn: "Create the customer experience.",
      subtitleVi: "Tạo trải nghiệm đặt hàng cho khách.",
      items: [
        { icon: Globe, label: "Ordering websites", href: "/platform/ordering-web" },
        { icon: Smartphone, label: "Native apps", href: "/platform/ordering-apps" },
        { icon: Layers, label: "Multi-store ordering", href: "/platform/multi-store-ordering" },
        { icon: Store, label: "Marketplaces", href: "/solutions#marketplaces" },
        { icon: MessageCircle, label: "AI ordering agents", href: "/platform/ai-ordering-agents" },
        { icon: Monitor, label: "Self-ordering kiosks", href: "/platform/ordering-kiosk" },
        { icon: Headphones, label: "Call center ordering", href: "/platform/ordering-call-center" },
      ],
    },
    {
      title: "Operate",
      subtitleEn: "Everything behind every order.",
      subtitleVi: "Mọi quy trình phía sau từng đơn hàng.",
      items: [
        { icon: Monitor, label: "Merchant apps", href: "/platform/ordering-merchant" },
        { icon: LayoutGrid, label: `${siteConfig.name} Dashboard`, href: "/platform/dashboard" },
        { icon: ClipboardList, label: "Order management", href: "/platform/ordering-merchant#order-management" },
        { icon: MapPin, label: "Multi-location operations", href: "/platform/multi-location-operations" },
        { icon: Truck, label: "Driver apps", href: "/platform/driver-app" },
        { icon: Route, label: "Auto dispatch", href: "/platform/ordering-delivery" },
        { icon: GitFork, label: "In-house and third-party delivery", href: "/platform/third-party-delivery" },
      ],
    },
    {
      title: "Connect",
      subtitleEn: "Fit into your existing technology.",
      subtitleVi: "Kết nối vào hệ thống sẵn có của bạn.",
      items: [
        { icon: Wallet, label: "POS integrations", href: "/integrations/pos" },
        { icon: CreditCard, label: "Payments", href: "/integrations/payments" },
        { icon: Route, label: "Delivery networks", href: "/integrations/delivery" },
        { icon: Heart, label: "Loyalty & CRM", href: "/integrations/loyalty" },
        { icon: BarChart3, label: "Analytics and reports", href: "/integrations/analytics" },
        { icon: Puzzle, label: "Automation and more", href: "/integrations/automation" },
        { icon: Link2, label: "All integrations", href: "/integrations" },
      ],
    },
    {
      title: "Extend",
      subtitleEn: `Build on ${siteConfig.name}.`,
      subtitleVi: `Mở rộng trên ${siteConfig.name}.`,
      items: [
        { icon: Code2, label: "API reference", href: "/products#extend" },
        { icon: Cpu, label: "API and MCP", href: "/products#extend" },
        { icon: Box, label: "SDKs", href: "/products#extend" },
        { icon: Tag, label: "White label", href: "/#control" },
        { icon: Users, label: "Reseller infrastructure", href: "/solutions#marketplaces" },
        { icon: Wrench, label: "Custom solutions", href: "/demo" },
        { icon: FileCode2, label: "Frontend source code", href: "/#control" },
        { icon: Cloud, label: "Bring your own cloud", href: "/#control" },
      ],
    },
  ];

  const capabilityGroups = [
    {
      title: "Customer channels",
      entries: [
        {
          name: "Web",
          desc: "Customers order from a branded website with your menu, stores, and checkout.",
          cta: "Explore Ordering Web",
          href: "/platform/ordering-web",
        },
        {
          name: "App",
          desc: "Customers browse the menu, order again, and follow each order in your own iOS and Android app.",
          cta: "Explore Ordering Apps",
          href: "/platform/ordering-apps",
        },
        {
          name: "Marketplace",
          desc: "Customers browse many stores under your brand, then order and follow delivery in one place.",
          cta: "Explore marketplaces",
          href: "/solutions#marketplaces",
        },
        {
          name: "AI agent",
          desc: "Customers order by voice, WhatsApp, chat, or on your website, from the same catalog and locations.",
          cta: "Explore AI ordering agents",
          href: "/platform/ai-ordering-agents",
        },
      ],
    },
    {
      title: "Commerce infrastructure",
      entries: [
        {
          name: "Stores",
          desc: "Keep stores, menus, and availability current from the Dashboard. Enable or pause stores as availability changes.",
          cta: "Explore the Dashboard",
          href: "/platform/dashboard",
        },
        {
          name: "Orders",
          desc: "Each order reaches the right location, and your team takes it from acceptance to ready.",
          cta: "Explore order management",
          href: "/platform/ordering-merchant#order-management",
        },
        {
          name: "Payments",
          desc: "Connect checkout to more than 50 payment gateways and the payment methods your customers use.",
          cta: "Explore payment integrations",
          href: "/integrations/payments",
        },
        {
          name: "Delivery",
          desc: "Deliver with your own drivers, connected delivery companies, or both, with status updates until the order arrives.",
          cta: "Explore Ordering Delivery",
          href: "/platform/ordering-delivery",
        },
      ],
    },
    {
      title: "Merchant operations",
      entries: [
        {
          name: "Merchant app",
          desc: "Store teams accept, prepare, and hand off every order in one workspace on web, iOS, and Android.",
          cta: "Explore Ordering Merchant",
          href: "/platform/ordering-merchant",
        },
        {
          name: "Driver app",
          desc: "Drivers pick up, follow the route, talk to the store or customer, and confirm each delivery.",
          cta: "Explore the Driver App",
          href: "/platform/driver-app",
        },
        {
          name: "Dispatch",
          desc: "Each delivery is assigned automatically to your drivers or a connected delivery company.",
          cta: "Explore auto dispatch",
          href: "/platform/ordering-delivery",
        },
      ],
    },
    {
      title: "Your stack",
      entries: [
        {
          name: "POS",
          desc: "Menus and prices sync from your POS, and online orders go straight into it.",
          cta: "Explore POS integrations",
          href: "/integrations/pos",
        },
        {
          name: "CRM",
          desc: "Connect HubSpot and Mailchimp to your customer and marketing stack.",
          cta: "Explore CRM integrations",
          href: "/integrations/loyalty",
        },
        {
          name: "Loyalty",
          desc: "Reward customers with points, cash wallet, and loyalty levels, or connect Spoonity.",
          cta: "Explore loyalty integrations",
          href: "/integrations/loyalty",
        },
        {
          name: "Analytics",
          desc: `Use ${siteConfig.name} reports, connect Google Analytics 4, Meta Pixel, and Google Tag Manager, and export to Excel.`,
          cta: "Explore analytics integrations",
          href: "/integrations/analytics",
        },
      ],
    },
  ];

  return (
    <section id="platform" className="bg-[var(--od-bg)] pt-20 pb-16 lg:pt-24">
      <Container>
        <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.045em] leading-[1.12] text-[var(--od-text)]">
          {isVi ? "Nền tảng phía sau mọi trải nghiệm." : "The platform behind the experience."}
        </h2>
        <p className="mt-3 max-w-2xl text-[16px] sm:text-[17.6px] leading-[1.6] text-[var(--od-text-muted)]">
          {isVi
            ? "Hơn 20 sản phẩm và 1.500 tính năng với hơn 25 ngôn ngữ, tổ chức xoay quanh vòng đời vận hành đơn hàng."
            : "More than 20 products and 1,500 features in more than 25 languages, organized around how an order runs."}
        </p>

        {/* 4-Column Product Pillar Directory (Exact vertical dividers & blue H3) */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={
                idx > 0
                  ? "lg:border-l lg:border-[var(--od-border)] lg:pl-8 lg:pr-6"
                  : "lg:pr-6"
              }
            >
              <h3 className="text-[28px] font-bold tracking-[-0.03em] text-[var(--od-action-content)]">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] text-[var(--od-text-muted)]">
                {isVi ? pillar.subtitleVi : pillar.subtitleEn}
              </p>

              <ul className="mt-7 space-y-4">
                {pillar.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group inline-flex items-start gap-3 text-[14.5px] font-medium text-[var(--od-text)] transition-colors hover:text-[var(--od-action-content)]"
                      >
                        <Icon
                          className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#266df0]"
                          strokeWidth={1.75}
                        />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Expandable Accordion Bar: "Explore how the platform works" */}
        <div className="mt-14 border-y border-[var(--od-border)]">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="flex min-h-[64px] w-full items-center justify-between py-4 text-left cursor-pointer"
          >
            <span className="text-[16px] font-semibold text-[var(--od-text)]">
              {isVi ? "Khám phá cách nền tảng vận hành" : "Explore how the platform works"}
            </span>
            <span className="text-[var(--od-text-muted)]">
              {expanded ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
            </span>
          </button>

          {expanded && (
            <div className="grid grid-cols-1 gap-8 pb-10 pt-2 sm:grid-cols-2 lg:grid-cols-4">
              {capabilityGroups.map((group) => (
                <div key={group.title} className="space-y-5">
                  <h4 className="text-[15px] font-bold text-[var(--od-action-content)]">{group.title}</h4>
                  <div className="space-y-5">
                    {group.entries.map((entry) => (
                      <div key={entry.name}>
                        <p className="text-[14px] font-bold text-[var(--od-text)]">{entry.name}</p>
                        <p className="mt-1 text-[13.5px] leading-[1.55] text-[var(--od-text-muted)]">
                          {entry.desc}
                        </p>
                        <Link
                          href={entry.href}
                          className="mt-1.5 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--od-action-content)] hover:underline"
                        >
                          {entry.cta}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-7">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
          >
            <span>{isVi ? "Khám phá tất cả sản phẩm và tính năng" : "Explore all products and features"}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
