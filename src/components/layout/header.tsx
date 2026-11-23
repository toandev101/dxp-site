"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Menu, Moon, Search, Sun, X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { LanguageSwitcher } from "@/components/common/language-switcher";
import { useTheme } from "@/providers/theme-provider";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type MegaKey = "platform" | "solutions" | "developers" | "resources";

/** Exact Ordering.co multi-color segmented circular ring + clean wordmark */
export function BrandLogo({ forceDark = false, size = "md" }: { forceDark?: boolean; size?: "md" | "lg" }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group shrink-0">
      <svg
        viewBox="0 0 32 32"
        className={cn(
          "transition-transform duration-300 group-hover:rotate-12",
          size === "lg" ? "h-9 w-9" : "h-7 w-7"
        )}
        fill="none"
        aria-hidden="true"
      >
        <path d="M 7.5 9.2 A 11 11 0 0 1 17.5 5.1" stroke="#10B981" strokeWidth="3.1" strokeLinecap="round" />
        <path d="M 20.5 6 A 11 11 0 0 1 26.8 14.5" stroke="#266DF0" strokeWidth="3.1" strokeLinecap="round" />
        <path d="M 26.4 18.8 A 11 11 0 0 1 18.8 26.6" stroke="#DB2777" strokeWidth="3.1" strokeLinecap="round" />
        <path d="M 14.6 26.9 A 11 11 0 0 1 6.2 20.8" stroke="#F59E0B" strokeWidth="3.1" strokeLinecap="round" />
        <path d="M 5.2 16.8 A 11 11 0 0 1 5.9 12.2" stroke="#22C55E" strokeWidth="3.1" strokeLinecap="round" />
      </svg>
      <span
        className={cn(
          "font-semibold tracking-[-0.025em]",
          size === "lg" ? "text-[26px]" : "text-[19px]",
          forceDark ? "text-white" : "text-[var(--od-text)]"
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}

const MEGA_MENUS: Record<
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
          { label: "Ordering API", href: "/developers#api" },
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
      { title: "Platform overview", desc: "One platform. Every part of ordering.", href: "/#platform" },
      { title: "Live demos", desc: "Web, apps, merchant, and driver, live.", href: "/demo" },
      { title: "All features", desc: "The complete list, by product.", href: "/products" },
      { title: "What's new", desc: "Releases every two weeks.", href: "/products" },
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
      href: "/#customers",
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
          { label: "Success stories", href: "/#customers" },
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
          { label: "Customers", href: "/#customers" },
          { label: "Integrations", href: "/integrations" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    promo: {
      eyebrow: "Guide",
      title: "52 scalable ordering business models",
      description: "What you can launch on Ordering.co, from a single kitchen to a city-wide marketplace.",
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
        "sticky top-0 z-30 w-full bg-[var(--od-bg)] border-b border-[var(--od-border)] transition-shadow duration-200",
        scrolled && "shadow-[0_2px_14px_rgba(11,12,13,0.06)]"
      )}
      onMouseLeave={() => setOpenMega(null)}
    >
      <Container className="flex h-[73px] items-center justify-between gap-4">
        <div className="flex items-center gap-7">
          <BrandLogo />

          {/* Desktop Primary Nav — exact 6 items from live Ordering.co */}
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
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-medium transition-colors cursor-pointer",
                    isOpen
                      ? "bg-[var(--od-surface-subtle)] text-[var(--od-action-content)]"
                      : "text-[var(--od-text)] hover:text-[var(--od-action-content)]"
                  )}
                >
                  <span>{isVi ? item.labelVi : item.labelEn}</span>
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 opacity-70 transition-transform duration-150", isOpen && "rotate-180")}
                  />
                </button>
              );
            })}

            <Link
              href="/#customers"
              onMouseEnter={() => setOpenMega(null)}
              className="rounded-md px-3 py-2 text-[14px] font-medium text-[var(--od-text)] transition-colors hover:text-[var(--od-action-content)]"
            >
              {isVi ? "Khách hàng" : "Customers"}
            </Link>

            <Link
              href="/pricing"
              onMouseEnter={() => setOpenMega(null)}
              className="rounded-md px-3 py-2 text-[14px] font-medium text-[var(--od-text)] transition-colors hover:text-[var(--od-action-content)]"
            >
              {isVi ? "Bảng giá" : "Pricing"}
            </Link>
          </nav>
        </div>

        {/* Desktop Right Controls — exact 5 controls from live Ordering.co */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher className="h-[44px] min-w-[44px] justify-center rounded-[6px] border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)] text-[14px] font-semibold px-3" />

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] cursor-pointer"
          >
            {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>

          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            aria-label="Search"
            className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] cursor-pointer"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <Link
            href="/contact"
            className="inline-flex h-[44px] items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] whitespace-nowrap"
          >
            {isVi ? `Liên hệ ${siteConfig.name}` : `Talk to ${siteConfig.name}`}
          </Link>

          <button
            type="button"
            onClick={() => openDemoModal("header")}
            className="inline-flex h-[44px] items-center justify-center rounded-[6px] bg-[#266df0] px-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] whitespace-nowrap cursor-pointer"
          >
            {isVi ? "Đặt lịch demo" : "Book a demo"}
          </button>
        </div>

        {/* Mobile Right Controls — exact [Search] + [≡ Menu] */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            aria-label="Search"
            className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)]"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-[44px] items-center gap-2 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-3.5 text-[14px] font-medium text-[var(--od-text)]"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span>Menu</span>
          </button>
        </div>
      </Container>

      {/* Full-Width Desktop Mega-Menu Panel */}
      {openMega && activeMega && (
        <div className="hidden xl:block absolute inset-x-0 top-[73px] z-40 border-b border-[var(--od-border)] bg-[var(--od-bg)] shadow-[0_24px_50px_-15px_rgba(11,12,13,0.16)]">
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
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                      {col.eyebrow}
                    </p>
                    <p className="mt-1 text-xs text-[var(--od-text-muted)]">{col.summary}</p>
                    <ul className="mt-3.5 space-y-2">
                      {col.links.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setOpenMega(null)}
                            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[var(--od-text)] hover:text-[var(--od-action-content)] transition-colors"
                          >
                            <span>{item.label}</span>
                            {item.badge && (
                              <span className="rounded-full bg-[#edf3ff] px-2 py-0.5 text-[10px] font-bold text-[#1f5fd1]">
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
              <div className="col-span-3 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-4 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--od-text-muted)]">
                    {activeMega.promo.eyebrow}
                  </p>
                  <p className="mt-1.5 text-base font-bold text-[var(--od-text)]">{activeMega.promo.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--od-text-muted)]">
                    {activeMega.promo.description}
                  </p>

                  {activeMega.promo.chat && (
                    <div className="mt-3 space-y-2 text-[11px]">
                      <div className="ml-auto max-w-[90%] rounded-xl rounded-tr-sm bg-[#266df0] px-2.5 py-1.5 text-white">
                        {activeMega.promo.chat.q}
                      </div>
                      <div className="max-w-[94%] rounded-xl rounded-tl-sm border border-[var(--od-border)] bg-[var(--od-bg)] px-2.5 py-1.5 text-[var(--od-text)]">
                        {activeMega.promo.chat.a}
                      </div>
                    </div>
                  )}

                  {activeMega.promo.code && (
                    <pre className="mt-3 overflow-x-auto rounded-lg bg-[#17181a] p-3 text-[10.5px] leading-relaxed font-mono text-blue-200">
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
                "mt-6 grid gap-4 border-t border-[var(--od-border)] pt-5",
                activeMega.bottomStrip.length === 4 ? "grid-cols-4" : "grid-cols-3"
              )}
            >
              {activeMega.bottomStrip.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpenMega(null)}
                  className="group rounded-lg p-2 -mx-2 hover:bg-[var(--od-surface-subtle)] transition-colors"
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
