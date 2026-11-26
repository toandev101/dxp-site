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

export type MegaKey = "platform" | "solutions" | "resources";

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

export type MegaMenuConfig = {
  variant?: "mega" | "dropdown";
  columns: {
    eyebrow: string;
    summary: string;
    links: { label: string; href: string; badge?: string }[];
  }[];
  promo?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    cta?: string;
    href?: string;
    code?: string;
    chat?: { q: string; a: string };
  } | null;
  bottomStrip?: { title: string; desc: string; href: string }[] | null;
};

export function getMegaMenus(isVi: boolean): Record<MegaKey, MegaMenuConfig> {
  return {
    platform: {
      columns: [
        {
          eyebrow: isVi ? "01 · Xây dựng" : "01 · Build",
          summary: isVi ? "Tạo trải nghiệm đặt hàng cho khách." : "Create the customer experience.",
          links: [
            // { label: "Marketplace website", href: "/platform/ordering-web" },
            // { label: "Marketplace app", href: "/platform/ordering-apps" },
            { label: isVi ? "Website đặt hàng nhà hàng" : "Restaurant website", href: "/platform/restaurant-website" },
            {
              label: isVi ? "Zalo Mini App nhà hàng" : "Restaurant zalo mini app",
              href: "/platform/restaurant-zalo-mini-app",
            },
            { label: isVi ? "App di động nhà hàng" : "Restaurant mobile app", href: "/platform/restaurant-app" },
            // { label: "Ordering Kiosk", href: "/platform/ordering-kiosk" },
            {
              label: isVi ? "Tổng đài đặt hàng (Call Center)" : "Ordering Call Center",
              href: "/platform/ordering-call-center",
            },
            // { label: "Marketplaces", href: "/solutions/marketplaces" },
            { label: isVi ? "Đặt hàng đa chi nhánh" : "Multi-store ordering", href: "/platform/multi-store-ordering" },
            {
              label: "AI Ordering Agents",
              href: "/platform/ai-ordering-agents",
              badge: isVi ? "Mới" : "New",
            },
          ],
        },
        {
          eyebrow: isVi ? "02 · Vận hành" : "02 · Operate",
          summary: isVi ? "Mọi quy trình phía sau từng đơn hàng." : "Everything behind every order.",
          links: [
            { label: isVi ? "Ứng dụng nhận đơn cửa hàng" : "Ordering Merchant", href: "/platform/ordering-merchant" },
            { label: isVi ? "Bảng điều khiển (Dashboard)" : "Dashboard", href: "/platform/dashboard" },
            {
              label: isVi ? "Quản lý đơn hàng" : "Order management",
              href: "/platform/ordering-merchant#order-management",
            },
            {
              label: isVi ? "Vận hành đa chi nhánh" : "Multi-location ops",
              href: "/platform/multi-location-operations",
            },
            { label: isVi ? "Quản lý giao hàng" : "Ordering Delivery", href: "/platform/ordering-delivery" },
            { label: isVi ? "App tài xế & điều phối" : "Driver App & dispatch", href: "/platform/driver-app" },
            {
              label: isVi ? "Giao hàng bên thứ ba (3PL)" : "Third-party delivery",
              href: "/platform/third-party-delivery",
            },
          ],
        },
        {
          eyebrow: isVi ? "03 · Kết nối" : "03 · Connect",
          summary: isVi ? "Tích hợp liền mạch hệ thống sẵn có." : "Fit into your stack.",
          links: [
            { label: isVi ? "Cổng thanh toán" : "Payment gateways", href: "/integrations/payments" },
            { label: isVi ? "Tích hợp POS" : "POS integrations", href: "/integrations/pos" },
            { label: isVi ? "Mạng lưới giao hàng" : "Delivery networks", href: "/integrations/delivery" },
            { label: "Loyalty & CRM", href: "/integrations/loyalty" },
            { label: isVi ? "Phân tích & báo cáo" : "Analytics & reports", href: "/integrations/analytics" },
            { label: isVi ? "Tự động hóa & mở rộng" : "Automation & more", href: "/integrations/automation" },
            { label: isVi ? "Đăng nhập & bảo mật" : "Login & security", href: "/integrations/login-security" },
            { label: isVi ? "Tất cả tích hợp" : "All integrations", href: "/integrations" },
          ],
        },
        {
          eyebrow: isVi ? "04 · Mở rộng" : "04 · Extend",
          summary: isVi ? "Phát triển mở rộng trên nền tảng." : "Build on top of the platform.",
          links: [
            { label: "OPERO API", href: "/developers#api" },
            { label: "API & MCP", href: "/developers" },
            { label: "SDKs & webhooks", href: "/developers#sdks" },
            // { label: "White label", href: "/developers/white-label" },
            // { label: "Reseller platform", href: "/solutions/agencies-resellers" },
            // { label: "Source code license", href: "/developers/source-code-license" },
            // { label: "Bring your own cloud", href: "/developers/bring-your-own-cloud" },
          ],
        },
      ],
      promo: {
        eyebrow: isVi ? "Mới trên nền tảng" : "New in platform",
        title: "AI Ordering Agents",
        description: isVi
          ? "Cho phép khách đặt món qua hội thoại trực tiếp trên hạ tầng của bạn."
          : "Let customers order through conversation, on your infrastructure.",
        cta: isVi ? "Khám phá AI đặt món" : "Explore AI ordering",
        href: "/platform/ai-ordering-agents",
        chat: isVi
          ? {
              q: "Cho mình 2 pizza pepperoni giao tới 14 Nguyễn Huệ lúc 19h",
              a: "Đã nhận đơn. 420.000đ, giao lúc 19:00. Thanh toán qua thẻ đuôi 4412 nhé?",
            }
          : {
              q: "Two pepperoni pizzas to 14 Elm St at 7",
              a: "Done. $36.90, delivery 7:00 pm. Pay with card ending 4412?",
            },
      },
      bottomStrip: [
        {
          title: isVi ? "Tổng quan nền tảng" : "Platform overview",
          desc: isVi ? "Một nền tảng cho toàn bộ quy trình đặt hàng." : "One platform. Every part of ordering.",
          href: "/platform",
        },
        {
          title: isVi ? "Trải nghiệm demo" : "Live demos",
          desc: isVi ? "Dùng thử trực tiếp Web, App, Merchant và Driver." : "Web, apps, merchant, and driver, live.",
          href: "/demo",
        },
        {
          title: isVi ? "Tất cả tính năng" : "All features",
          desc: isVi ? "Danh sách đầy đủ theo từng sản phẩm." : "The complete list, by product.",
          href: "/products",
        },
        {
          title: isVi ? "Có gì mới" : "What's new",
          desc: isVi ? "Cập nhật tính năng mới mỗi 2 tuần." : "Releases every two weeks.",
          href: "/changelog",
        },
      ],
    },
    solutions: {
      variant: "dropdown",
      columns: [
        {
          eyebrow: isVi ? "Cho doanh nghiệp" : "For businesses",
          summary: isVi ? "Vận hành toàn diện hệ thống đặt hàng." : "Run your ordering operations.",
          links: [
            { label: isVi ? "Tất cả giải pháp" : "All solutions", href: "/solutions" },
            { label: isVi ? "Cho Nhà hàng" : "For Restaurants", href: "/solutions/restaurants" },
            { label: isVi ? "Cho Chuỗi nhượng quyền" : "For Franchises", href: "/solutions/franchises" },
            { label: isVi ? "Cho Doanh nghiệp lớn" : "For Enterprise", href: "/solutions/enterprise" },
          ],
        },
      ],
    },
    resources: {
      variant: "dropdown",
      columns: [
        {
          eyebrow: isVi ? "Tìm hiểu" : "Learn",
          summary: isVi ? "Hướng dẫn và câu chuyện thực tế." : "Guides and stories.",
          links: [
            { label: "Blog", href: "/blog" },
            { label: isVi ? "Câu chuyện khách hàng" : "Success stories", href: "/customers" },
            { label: isVi ? "Trải nghiệm demo" : "Live demos", href: "/demo" },
            { label: isVi ? "Công cụ tính lợi nhuận" : "Profit calculator", href: "/resources/profit-calculator" },
            { label: isVi ? "Câu hỏi thường gặp (FAQ)" : "FAQ", href: "/#faq" },
          ],
        },
      ],
    },
    // company: {
    //   variant: "dropdown",
    //   columns: [
    //     {
    //       eyebrow: "Company",
    //       summary: "About & contact.",
    //       links: [
    //         { label: `About ${siteConfig.name}`, href: "/company/about" },
    //         { label: "Contact", href: "/contact" },
    //       ],
    //     },
    //   ],
    // },
  };
}

export const MEGA_MENUS: Record<MegaKey, MegaMenuConfig> = getMegaMenus(false);

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
    { key: "resources", labelEn: "Resources", labelVi: "Tài nguyên" },
  ];

  const megaMenus = getMegaMenus(isVi);
  const activeMega = openMega ? megaMenus[openMega] : null;

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
              const menuConfig = megaMenus[item.key];
              const isSingleDropdown = menuConfig.variant === "dropdown";
              const dropdownLinks = isSingleDropdown
                ? menuConfig.columns.flatMap((col) => col.links)
                : [];

              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseLeave={() => {
                    if (isSingleDropdown && isOpen) setOpenMega(null);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
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

                  {isSingleDropdown && isOpen && dropdownLinks.length > 0 && (
                    <div className="absolute left-0 top-full z-40 pt-2">
                      <ul className="min-w-[220px] rounded-[16px] border border-[var(--line)] bg-[var(--canvas)] p-1.5 shadow-[var(--shadow)]">
                        {dropdownLinks.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              onClick={() => setOpenMega(null)}
                              className="flex items-center justify-between gap-2 rounded-[10px] px-3 py-2 text-[13.5px] font-medium text-[var(--od-text)] transition-colors duration-150 hover:bg-[var(--od-surface-subtle)] hover:text-[var(--od-action-content)] whitespace-nowrap"
                            >
                              <span>{link.label}</span>
                              {link.badge && (
                                <span className="rounded-full bg-[var(--brand-red-50)] px-2 py-0.5 text-[10px] font-semibold text-[var(--od-action-content)]">
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/company/about"
              onMouseEnter={() => setOpenMega(null)}
              className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[13.5px] font-medium text-[var(--od-text-secondary)] transition-colors duration-150 hover:text-[var(--od-text)] hover:bg-[var(--od-surface-subtle)]"
            >
              {isVi ? "Về OPERO" : "About OPERO"}
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

          {/* <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            aria-label="Search"
            className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[var(--od-surface-subtle)] text-[var(--od-text)] transition-colors duration-150 hover:bg-[var(--od-border-soft)] cursor-pointer"
          >
            <Search className="h-[16px] w-[16px]" />
          </button> */}

          {/* <Link
            href="/contact"
            className="inline-flex h-[38px] shrink-0 items-center justify-center rounded-full bg-[var(--od-surface-subtle)] px-3.5 text-[13.5px] font-semibold text-[var(--od-text)] transition-colors duration-150 hover:bg-[var(--od-border-soft)] whitespace-nowrap"
          >
            {isVi ? `Liên hệ ${siteConfig.name}` : `Talk to ${siteConfig.name}`}
          </Link> */}

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
      {openMega && activeMega && activeMega.variant !== "dropdown" && (() => {
        const promo = activeMega.promo;
        const hasPromo = Boolean(
          promo && (promo.title || promo.description || promo.cta || promo.chat || promo.code)
        );
        const bottomStrip = activeMega.bottomStrip?.filter((item) => item.title || item.desc) ?? [];
        const hasBottomStrip = bottomStrip.length > 0;

        return (
          <div className="hidden xl:block absolute inset-x-0 top-[68px] z-40 border-b border-[var(--line)] bg-[var(--canvas)] shadow-[var(--shadow)]">
            <Container className="py-7">
              <div className="grid grid-cols-12 gap-7">
                {/* Link Columns */}
                <div
                  className={cn(
                    "grid gap-6",
                    hasPromo ? "col-span-9" : "col-span-12",
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
                                <span className="rounded-full bg-[var(--brand-red-50)] px-2 py-0.5 text-[10px] font-semibold text-[var(--od-action-content)]">
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
                {hasPromo && promo && (
                  <div className="col-span-3 rounded-[20px] bg-[var(--od-surface-subtle)] p-5 flex flex-col justify-between">
                    <div>
                      <p className="text-[12px] font-semibold text-[var(--od-text-muted)]">
                        {promo.eyebrow}
                      </p>
                      <p className="mt-1.5 text-base font-bold text-[var(--od-text)]">{promo.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--od-text-muted)]">
                        {promo.description}
                      </p>

                      {promo.chat && (
                        <div className="mt-3 space-y-2 text-[11px]">
                          <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-[#D91842] px-3 py-1.5 text-white">
                            {promo.chat.q}
                          </div>
                          <div className="max-w-[94%] rounded-2xl rounded-tl-sm border border-[var(--od-border-soft)] bg-[var(--od-bg)] px-3 py-1.5 text-[var(--od-text)]">
                            {promo.chat.a}
                          </div>
                        </div>
                      )}

                      {promo.code && (
                        <pre className="mt-3 overflow-x-auto rounded-[12px] bg-[#111013] p-3 text-[10.5px] leading-relaxed font-mono text-[#F9D0D8]">
                          <code>{promo.code}</code>
                        </pre>
                      )}
                    </div>

                    {promo.href && promo.cta && (
                      <Link
                        href={promo.href}
                        onClick={() => setOpenMega(null)}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--od-action-content)] hover:underline"
                      >
                        <span>{promo.cta}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Strip */}
              {hasBottomStrip && (
                <div
                  className={cn(
                    "mt-6 grid gap-4 border-t border-[var(--od-border-soft)] pt-5",
                    bottomStrip.length === 4 ? "grid-cols-4" : "grid-cols-3"
                  )}
                >
                  {bottomStrip.map((item) => (
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
              )}
            </Container>
          </div>
        );
      })()}
    </header>
  );
}
