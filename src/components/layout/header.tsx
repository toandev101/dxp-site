"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Menu, Moon, Search, Sun, X } from "lucide-react";

import { OperoLockup } from "@/components/brand/opero-logo";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { LanguageSwitcher } from "@/components/common/language-switcher";
import { useTheme } from "@/providers/theme-provider";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export type MegaKey = "platform" | "solutions" | "developers" | "resources";

/** Official OPERO D01 "Orbit" Logo Lockup (BRAND.md §2) */
export function BrandLogo({ forceDark = false, size = "md" }: { forceDark?: boolean; size?: "md" | "lg" }) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className={cn(
        "inline-flex items-center shrink-0 py-1.5 transition-opacity duration-150 hover:opacity-90",
        forceDark ? "text-white" : "text-[var(--od-text)]"
      )}
    >
      <OperoLockup
        variant={forceDark ? "dark" : "auto"}
        className={size === "lg" ? "h-8 sm:h-9 w-auto" : "h-[26px] sm:h-[28px] w-auto"}
      />
    </Link>
  );
}

export const MEGA_MENUS: Record<
  MegaKey,
  {
    columns: {
      eyebrow: string;
      summary: string;
      links: { label: string; href: string; badge?: string }[];
    }[];
    promo: {
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
      href: string;
      code?: string;
      chat?: { q: string; a: string };
    };
    bottomStrip: { title: string; desc: string; href: string }[];
  }
> = {
  platform: {
    columns: [
      {
        eyebrow: "01 · Build",
        summary: "Create the customer experience.",
        links: [
          { label: "Marketplace website", href: "/platform/ordering-web" },
          { label: "Marketplace app", href: "/platform/ordering-apps" },
          { label: "Restaurant website", href: "/platform/restaurant-website" },
          { label: "Restaurant app", href: "/platform/restaurant-app" },
          { label: "Ordering Kiosk", href: "/platform/ordering-kiosk" },
          { label: "Ordering Call Center", href: "/platform/ordering-call-center" },
          { label: "Marketplaces", href: "/solutions/marketplaces" },
          { label: "Multi-store ordering", href: "/platform/multi-store-ordering" },
          { label: "AI Ordering Agents", href: "/platform/ai-ordering-agents", badge: "New" },
        ],
      },
      {
        eyebrow: "02 · Operate",
        summary: "Everything behind every order.",
        links: [
          { label: "Ordering Merchant", href: "/platform/ordering-merchant" },
          { label: "Dashboard", href: "/platform/dashboard" },
          { label: "Order management", href: "/platform/ordering-merchant#order-management" },
          { label: "Multi-location ops", href: "/platform/multi-location-operations" },
          { label: "Ordering Delivery", href: "/platform/ordering-delivery" },
          { label: "Driver App & dispatch", href: "/platform/driver-app" },
          { label: "Third-party delivery", href: "/platform/third-party-delivery" },
        ],
      },
      {
        eyebrow: "03 · Connect",
        summary: "Fit into your stack.",
        links: [
          { label: "Payment gateways", href: "/integrations/payments" },
          { label: "POS integrations", href: "/integrations/pos" },
          { label: "Delivery networks", href: "/integrations/delivery" },
          { label: "Loyalty & CRM", href: "/integrations/loyalty" },
          { label: "Analytics & reports", href: "/integrations/analytics" },
          { label: "Automation & more", href: "/integrations/automation" },
          { label: "Login & security", href: "/integrations/login-security" },
          { label: "All integrations", href: "/integrations" },
        ],
      },
      {
        eyebrow: "04 · Extend",
        summary: "Build on top of the platform.",
        links: [
          { label: "OPERO API", href: "/developers#api" },
          { label: "API & MCP", href: "/developers" },
          { label: "SDKs & webhooks", href: "/developers#sdks" },
          { label: "White label", href: "/developers/white-label" },
          { label: "Reseller platform", href: "/solutions/agencies-resellers" },
          { label: "Source code license", href: "/developers/source-code-license" },
          { label: "Bring your own cloud", href: "/developers/bring-your-own-cloud" },
        ],
      },
    ],
    promo: {
      eyebrow: "New in platform",
      title: "AI Ordering Agents",
      description: "Let customers order through conversation, on your infrastructure.",
      cta: "Explore AI ordering",
      href: "/platform/ai-ordering-agents",
      chat: {
        q: "Two pepperoni pizzas to 14 Elm St at 7",
        a: "Done. $36.90, delivery 7:00 pm. Pay with card ending 4412?",
      },
    },
    bottomStrip: [
      { title: "Platform overview", desc: "One platform. Every part of ordering.", href: "/platform" },
      { title: "Live demos", desc: "Web, apps, merchant, and driver, live.", href: "/demo" },
      { title: "All features", desc: "The complete list, by product.", href: "/products" },
      { title: "What's new", desc: "Releases every two weeks.", href: "/changelog" },
    ],
  },
  solutions: {
    columns: [
      {
        eyebrow: "For businesses",
        summary: "Run your ordering operations.",
        links: [
          { label: "For Restaurants", href: "/solutions/restaurants" },
          { label: "For Marketplaces", href: "/solutions/marketplaces" },
          { label: "For Franchises", href: "/solutions/franchises" },
          { label: "For Enterprise", href: "/solutions/enterprise" },
          { label: "Groceries & local stores", href: "/solutions/groceries" },
        ],
      },
      {
        eyebrow: "For builders",
        summary: "Build your business on it.",
        links: [
          { label: "Agencies & resellers", href: "/solutions/agencies-resellers" },
          { label: "Startups & entrepreneurs", href: "/solutions/startups" },
          { label: "Delivery companies", href: "/solutions/delivery-companies" },
          { label: "Software companies", href: "/solutions/software-companies" },
          { label: "As middleware", href: "/solutions/middleware" },
        ],
      },
      {
        eyebrow: "By outcome",
        summary: "Start from the problem.",
        links: [
          { label: "Launch a marketplace", href: "/solutions/marketplaces" },
          { label: "Stop paying commissions", href: "/pricing#calculator" },
          { label: "Run your own delivery", href: "/platform/ordering-delivery" },
          { label: "Migrate to platform", href: "/#migration" },
          { label: "Custom projects", href: "/solutions/custom-projects" },
        ],
      },
    ],
    promo: {
      eyebrow: "Customers",
      title: "Global brands & local operators",
      description: "Domino's, Burger King, Starbucks, and KFC run on the same connected infrastructure.",
      cta: "Read success stories",
      href: "/customers",
    },
    bottomStrip: [
      { title: "For Restaurants", desc: "Ready to run your own ordering.", href: "/solutions/restaurants" },
      { title: "For Enterprise", desc: "Franchises and groups running hundreds of locations.", href: "/solutions/enterprise" },
      { title: "For Builders", desc: "Launch your own ordering product on our infrastructure.", href: "/solutions/agencies-resellers" },
    ],
  },
  developers: {
    columns: [
      {
        eyebrow: "Build on it",
        summary: "Everything behind ordering, as an API.",
        links: [
          { label: "API reference", href: "/developers#api" },
          { label: "Documentation", href: "/developers#docs" },
          { label: "SDKs", href: "/developers#sdks" },
          { label: "Webhooks", href: "/developers#webhooks" },
          { label: "Sandbox", href: "/developers#sandbox" },
        ],
      },
      {
        eyebrow: "Go deeper",
        summary: "More control than an API.",
        links: [
          { label: "Build vs buy", href: "/developers/build-vs-buy" },
          { label: "White label", href: "/developers/white-label" },
          { label: "Source code license", href: "/developers/source-code-license" },
          { label: "Bring your own cloud", href: "/developers/bring-your-own-cloud" },
          { label: "Custom infrastructure", href: "/solutions/custom-projects" },
        ],
      },
      {
        eyebrow: "Support",
        summary: "When you need a human.",
        links: [
          { label: "System status", href: "/api/health" },
          { label: "Knowledge base", href: "/developers#knowledge-base" },
          { label: "Talk to an engineer", href: "/contact" },
        ],
      },
    ],
    promo: {
      eyebrow: "Don't build ordering infrastructure",
      title: "Build on it.",
      description: "Websites, apps, marketplaces, payments, stores, and delivery, already built.",
      cta: "Explore API & MCP",
      href: "/developers",
      code: `POST /v400/orders  200 OK\n{\n  "order_id": "48291",\n  "status": "confirmed",\n  "driver_eta": "8 min",\n  "commission": 0\n}`,
    },
    bottomStrip: [
      { title: "Get API access", desc: "Included on every plan.", href: "/developers" },
      { title: "Build vs buy", desc: "What it takes to rebuild the stack.", href: "/developers/build-vs-buy" },
      { title: "Become a reseller", desc: "White-labeled, under your brand.", href: "/solutions/agencies-resellers" },
    ],
  },
  resources: {
    columns: [
      {
        eyebrow: "Learn",
        summary: "Guides and stories.",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Success stories", href: "/customers" },
          { label: "Live demos", href: "/demo" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
      {
        eyebrow: "Compare",
        summary: "Evaluate before deciding.",
        links: [
          { label: "Compare platforms", href: "/#migration" },
          { label: "Profit calculator", href: "/resources/profit-calculator" },
          { label: "Transparent pricing", href: "/pricing" },
        ],
      },
      {
        eyebrow: "Company",
        summary: "About & contact.",
        links: [
          { label: `About ${siteConfig.name}`, href: "/company/about" },
          { label: "Customers", href: "/customers" },
          { label: "Integrations", href: "/integrations" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    promo: {
      eyebrow: "Guide",
      title: "52 scalable ordering business models",
      description: `What you can launch on ${siteConfig.name}, from a single kitchen to a city-wide marketplace.`,
      cta: "Explore the guide",
      href: "/solutions/marketplaces",
    },
    bottomStrip: [
      { title: "Live demos", desc: "Try restaurant and marketplace storefronts.", href: "/demo" },
      { title: "Pricing plans", desc: "0% order commission across plans.", href: "/pricing" },
      { title: "Talk to our team", desc: "Get a tailored architecture walkthrough.", href: "/contact" },
    ],
  },
};

export function Header() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { theme, toggleTheme } = useTheme();
  const { isMobileMenuOpen, setMobileMenuOpen, openDemoModal, setSearchModalOpen } = useUiStore();
  const [openMega, setOpenMega] = useState<MegaKey | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navDropdowns: { key: MegaKey; labelEn: string; labelVi: string }[] = [
    { key: "platform", labelEn: "Platform", labelVi: "Nền tảng" },
    { key: "solutions", labelEn: "Solutions", labelVi: "Giải pháp" },
    { key: "developers", labelEn: "Developers", labelVi: "Developers" },
    { key: "resources", labelEn: "Resources", labelVi: "Tài nguyên" },
  ];

  const activeMega = openMega ? MEGA_MENUS[openMega] : null;

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full bg-[var(--canvas)] border-b transition-colors duration-150",
        scrolled ? "border-[var(--line)]" : "border-[var(--line-soft)]"
      )}
      onMouseLeave={() => setOpenMega(null)}
    >
      <Container className="flex h-[68px] items-center justify-between gap-3">
        <div className="flex items-center gap-4 2xl:gap-7 min-w-0">
          <BrandLogo />

          {/* Desktop Primary Nav */}
          <nav aria-label="Primary navigation" className="hidden xl:flex items-center gap-0.5">
            {navDropdowns.map((item) => {
              const isOpen = openMega === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onMouseEnter={() => setOpenMega(item.key)}
                  onClick={() => setOpenMega(isOpen ? null : item.key)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[13.5px] font-medium transition-colors duration-150 cursor-pointer",
                    isOpen
                      ? "bg-[var(--od-surface-subtle)] text-[var(--od-text)]"
                      : "text-[var(--od-text-secondary)] hover:text-[var(--od-text)] hover:bg-[var(--od-surface-subtle)]"
                  )}
                >
                  <span>{isVi ? item.labelVi : item.labelEn}</span>
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 shrink-0 opacity-60 transition-transform duration-150", isOpen && "rotate-180")}
                  />
                </button>
              );
            })}

            <Link
              href="/customers"
              onMouseEnter={() => setOpenMega(null)}
              className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[13.5px] font-medium text-[var(--od-text-secondary)] transition-colors duration-150 hover:text-[var(--od-text)] hover:bg-[var(--od-surface-subtle)]"
            >
              {isVi ? "Khách hàng" : "Customers"}
            </Link>

            <Link
              href="/pricing"
              onMouseEnter={() => setOpenMega(null)}
              className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[13.5px] font-medium text-[var(--od-text-secondary)] transition-colors duration-150 hover:text-[var(--od-text)] hover:bg-[var(--od-surface-subtle)]"
            >
              {isVi ? "Bảng giá" : "Pricing"}
            </Link>
          </nav>
        </div>

        {/* Desktop Right Controls (OPERO Pill System) */}
        <div className="hidden xl:flex shrink-0 items-center gap-1.5">
          <LanguageSwitcher className="h-[38px] min-w-[38px] justify-center rounded-full border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)] text-[13px] font-semibold px-2.5 shrink-0 whitespace-nowrap" />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[var(--od-surface-subtle)] text-[var(--od-text)] transition-colors duration-150 hover:bg-[var(--od-border-soft)] cursor-pointer"
          >
            {theme === "dark" ? <Sun className="h-[16px] w-[16px]" /> : <Moon className="h-[16px] w-[16px]" />}
          </button>

          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            aria-label="Search"
            className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[var(--od-surface-subtle)] text-[var(--od-text)] transition-colors duration-150 hover:bg-[var(--od-border-soft)] cursor-pointer"
          >
            <Search className="h-[16px] w-[16px]" />
          </button>

          <Link
            href="/contact"
            className="inline-flex h-[38px] shrink-0 items-center justify-center rounded-full bg-[var(--od-surface-subtle)] px-3.5 text-[13.5px] font-semibold text-[var(--od-text)] transition-colors duration-150 hover:bg-[var(--od-border-soft)] whitespace-nowrap"
          >
            {isVi ? `Liên hệ ${siteConfig.name}` : `Talk to ${siteConfig.name}`}
          </Link>

          <button
            type="button"
            onClick={() => openDemoModal("header")}
            className="inline-flex h-[38px] shrink-0 items-center justify-center rounded-full bg-[#D91842] px-4 text-[13.5px] font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-[#B8123A] active:bg-[#94102F] active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            {isVi ? "Đặt lịch demo" : "Book a demo"}
          </button>
        </div>

        {/* Mobile & Tablet Right Controls — [Search] + [≡ / ✕ Menu] */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            aria-label="Search"
            className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[var(--line)] bg-[var(--canvas)] text-[var(--ink)] transition-colors duration-150 hover:bg-[var(--canvas-soft)] cursor-pointer"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-[42px] items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--canvas)] px-4 text-[14px] font-medium text-[var(--ink)] transition-colors duration-150 hover:bg-[var(--canvas-soft)] cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span>Menu</span>
          </button>
        </div>
      </Container>

      {/* Full-Width Desktop Mega-Menu Panel (floating layer elevation per OPERO UI Kit) */}
      {openMega && activeMega && (
        <div className="hidden xl:block absolute inset-x-0 top-[68px] z-40 border-b border-[var(--line)] bg-[var(--canvas)] shadow-[var(--shadow)]">
          <Container className="py-7">
            <div className="grid grid-cols-12 gap-7">
              {/* Link Columns */}
              <div
                className={cn(
                  "col-span-9 grid gap-6",
                  activeMega.columns.length === 4 ? "grid-cols-4" : "grid-cols-3"
                )}
              >
                {activeMega.columns.map((col) => (
                  <div key={col.eyebrow}>
                    <p className="text-[12px] font-semibold text-[var(--od-action-content)]">
                      {col.eyebrow}
                    </p>
                    <p className="mt-1 text-xs text-[var(--od-text-muted)]">{col.summary}</p>
                    <ul className="mt-3.5 space-y-2">
                      {col.links.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setOpenMega(null)}
                            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[var(--od-text)] hover:text-[var(--od-action-content)] transition-colors duration-150"
                          >
                            <span>{item.label}</span>
                            {item.badge && (
                              <span className="rounded-full bg-[var(--brand-red-50)] px-2 py-0.5 text-[10px] font-semibold text-[var(--brand-red)]">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right Promo Card */}
              <div className="col-span-3 rounded-[20px] bg-[var(--od-surface-subtle)] p-5 flex flex-col justify-between">
                <div>
                  <p className="text-[12px] font-semibold text-[var(--od-text-muted)]">
                    {activeMega.promo.eyebrow}
                  </p>
                  <p className="mt-1.5 text-base font-bold text-[var(--od-text)]">{activeMega.promo.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--od-text-muted)]">
                    {activeMega.promo.description}
                  </p>

                  {activeMega.promo.chat && (
                    <div className="mt-3 space-y-2 text-[11px]">
                      <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-[#D91842] px-3 py-1.5 text-white">
                        {activeMega.promo.chat.q}
                      </div>
                      <div className="max-w-[94%] rounded-2xl rounded-tl-sm border border-[var(--od-border-soft)] bg-[var(--od-bg)] px-3 py-1.5 text-[var(--od-text)]">
                        {activeMega.promo.chat.a}
                      </div>
                    </div>
                  )}

                  {activeMega.promo.code && (
                    <pre className="mt-3 overflow-x-auto rounded-[12px] bg-[#111013] p-3 text-[10.5px] leading-relaxed font-mono text-[#F9D0D8]">
                      <code>{activeMega.promo.code}</code>
                    </pre>
                  )}
                </div>

                <Link
                  href={activeMega.promo.href}
                  onClick={() => setOpenMega(null)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--od-action-content)] hover:underline"
                >
                  <span>{activeMega.promo.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Bottom Strip */}
            <div
              className={cn(
                "mt-6 grid gap-4 border-t border-[var(--od-border-soft)] pt-5",
                activeMega.bottomStrip.length === 4 ? "grid-cols-4" : "grid-cols-3"
              )}
            >
              {activeMega.bottomStrip.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpenMega(null)}
                  className="group rounded-[12px] p-2.5 -mx-2 hover:bg-[var(--od-surface-subtle)] transition-colors duration-150"
                >
                  <p className="text-[13px] font-semibold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--od-text-muted)]">{item.desc}</p>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
