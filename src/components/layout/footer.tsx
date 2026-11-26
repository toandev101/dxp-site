"use client";

import { ArrowRight, ArrowUpRight, Globe, Moon, Sun } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { BrandLogo } from "./header";
import { useTheme } from "@/providers/theme-provider";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";
import { useRouter as useNextRouter, usePathname as useNextPathname } from "next/navigation";
import Cookies from "js-cookie";
import { addLocaleToPathname } from "@/utils/url";

export function Footer() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { theme, toggleTheme } = useTheme();
  const router = useNextRouter();
  const pathname = useNextPathname();

  const switchTo = (target: "en" | "vi") => {
    Cookies.set("NEXT_LOCALE", target);
    router.push(addLocaleToPathname(pathname, target));
  };

  const columns = {
    platform: [
      { label: isVi ? "Website đặt hàng" : "Ordering Web", href: "/platform/ordering-web" },
      { label: isVi ? "Ứng dụng đặt hàng" : "Ordering Apps", href: "/platform/ordering-apps" },
      { label: isVi ? "Kiosk tự phục vụ" : "Ordering Kiosk", href: "/platform/ordering-kiosk" },
      { label: isVi ? "Tổng đài đặt hàng" : "Ordering Call Center", href: "/platform/ordering-call-center" },
      { label: "AI Ordering Agents", href: "/platform/ai-ordering-agents", badge: isVi ? "Mới" : "New" },
      { label: isVi ? "Ứng dụng cửa hàng" : "Ordering Merchant", href: "/platform/ordering-merchant" },
      { label: isVi ? "Quản lý giao hàng" : "Ordering Delivery", href: "/platform/ordering-delivery" },
      { label: isVi ? "Tích hợp" : "Integrations", href: "/integrations" },
    ],
    solutions: [
      { label: isVi ? "Tất cả giải pháp" : "All solutions", href: "/solutions" },
      {
        label: isVi ? `${siteConfig.name} cho Nhà hàng` : `${siteConfig.name} for Restaurants`,
        href: "/solutions/restaurants",
      },
      {
        label: isVi ? `${siteConfig.name} cho Chuỗi nhượng quyền` : `${siteConfig.name} for Franchises`,
        href: "/solutions/franchises",
      },
      {
        label: isVi ? `${siteConfig.name} cho Doanh nghiệp lớn` : `${siteConfig.name} for Enterprise`,
        href: "/solutions/enterprise",
      },
      // { label: `${siteConfig.name} for Marketplaces`, href: "/solutions/marketplaces" },
      // { label: "Agencies & resellers", href: "/solutions/agencies-resellers" },
      // { label: "Groceries & local stores", href: "/solutions/groceries" },
      // { label: "Delivery companies", href: "/solutions/delivery-companies" },
      // { label: "Startups & entrepreneurs", href: "/solutions/startups" },
      // { label: "Software companies", href: "/solutions/software-companies" },
      // { label: "As middleware", href: "/solutions/middleware" },
    ],
    developers: [
      { label: "API & MCP", href: "/developers#api" },
      // { label: "Documentation", href: "/developers#docs" },
      { label: "SDKs & webhooks", href: "/developers#sdks" },
      // { label: `Build on ${siteConfig.name}`, href: "/developers" },
      // { label: "Build vs buy", href: "/developers/build-vs-buy" },
      // { label: "White label", href: "/developers/white-label" },
      // { label: "Source code license", href: "/developers/source-code-license" },
      // { label: "Bring your own cloud", href: "/developers/bring-your-own-cloud" },
      { label: isVi ? "Nhật ký cập nhật" : "Changelog", href: "/changelog" },
      // { label: "System status", href: "/api/health" },
    ],
    resources: [
      // { label: "All resources", href: "/products" },
      { label: "Blog", href: "/blog" },
      { label: isVi ? "Câu chuyện khách hàng" : "Success stories", href: "/customers" },
      { label: isVi ? "Trung tâm kiến thức" : "Knowledge base", href: "/#faq" },
      { label: isVi ? "Trải nghiệm demo" : "Live demos", href: "/demo" },
      { label: isVi ? "Bảng giá" : "Pricing", href: "/pricing" },
      // { label: "Compare platforms", href: "/#migration" },
      // { label: `${siteConfig.name} vs Olo`, href: "/#migration" },
      // { label: `${siteConfig.name} vs GloriaFood`, href: "/#migration" },
      // { label: "52 business models", href: "/solutions#marketplaces" },
    ],
    company: [
      { label: isVi ? `Về ${siteConfig.name}` : `About ${siteConfig.name}`, href: "/company/about" },
      // { label: "Customers", href: "/customers" },
      // { label: "Partners", href: "/solutions/agencies-resellers" },
      // { label: "Support", href: "/contact#support" },
      // { label: "Contact", href: "/contact" },
      // { label: "Book a demo", href: "/contact?meeting=demo#book" },
    ],
  };

  return (
    <footer className="bg-[var(--od-bg)] text-[var(--od-text)] border-t border-[var(--od-border-soft)]">
      {/* Band 1: 6-Column Main Directory */}
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Col 1: OPERO Brand info */}
          <div className="lg:col-span-3 space-y-4">
            <BrandLogo />
            <p className="text-[13px] font-medium text-[var(--od-text)]">
              {isVi ? "Kết nối · Vận hành · Tăng trưởng" : "Connect · Operate · Grow"}
            </p>
            <p className="text-[13.5px] leading-[1.6] text-[var(--od-text-muted)] max-w-[260px]">
              {isVi
                ? "Nền tảng vận hành số toàn diện cho chuỗi và thương hiệu F&B. Website, App, Zalo Mini App, Loyalty, POS & giao vận."
                : "The digital operating platform for F&B brands and local commerce. Websites, Apps, Loyalty, POS, and delivery."}
            </p>
            <Link
              href="/api/health"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--success-bg)] px-3 py-1.5 text-[12.5px] font-semibold text-[var(--success)] transition-opacity duration-150 hover:opacity-85"
            >
              <span className="h-2 w-2 rounded-full bg-[#5E9B2E]" aria-hidden="true" />
              <span>{isVi ? "Hệ thống hoạt động ổn định" : "All systems operational"}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Cols 2-6 */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
            {(
              [
                { title: isVi ? "Nền tảng" : "Platform", list: columns.platform },
                { title: isVi ? "Giải pháp" : "Solutions", list: columns.solutions },
                { title: isVi ? "Nhà phát triển" : "Developers", list: columns.developers },
                { title: isVi ? "Tài nguyên" : "Resources", list: columns.resources },
                { title: isVi ? "Công ty" : "Company", list: columns.company },
              ] as const
            ).map((col) => (
              <div key={col.title}>
                <h3 className="text-[13.5px] font-semibold text-[var(--od-text)]">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.list.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-[13.5px] text-[var(--od-text-muted)] transition-colors duration-150 hover:text-[var(--od-action-content)]"
                      >
                        <span>{item.label}</span>
                        {"badge" in item && item.badge && (
                          <span className="rounded-full bg-[var(--od-action-soft)] px-2 py-0.5 text-[10.5px] font-semibold text-[var(--od-action-content)]">
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
        </div>
      </Container>

      {/* Band 2: Apps Strip */}
      <div className="border-t border-[var(--od-border-soft)]">
        <Container className="py-6 flex flex-wrap items-center gap-2.5">
          <span className="text-[13.5px] font-semibold text-[var(--od-text)] mr-2">
            {isVi ? "Ứng dụng" : "Apps"}
          </span>
          {[
            { label: isVi ? "App Cửa hàng" : "Merchant App", href: "/platform/ordering-merchant" },
            { label: isVi ? "App Tài xế" : "Driver App", href: "/platform/driver-app" },
            // { label: "Kiosk", href: "/platform/ordering-kiosk" },
            { label: isVi ? "Tổng đài" : "Call Center", href: "/platform/ordering-call-center" },
          ].map((app) => (
            <Link
              key={app.label}
              href={app.href}
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--od-surface-subtle)] px-4 py-2 text-[13px] font-medium text-[var(--od-text)] transition-colors duration-150 hover:bg-[var(--od-border-soft)]"
            >
              <span>{app.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[var(--od-text-muted)]" />
            </Link>
          ))}
          <span className="text-[13px] text-[var(--od-text-muted)] ml-1">Zalo Mini App · iOS · Android · Web</span>
        </Container>
      </div>

      {/* Band 3: Legal & Locale Bar */}
      <div className="border-t border-[var(--od-border-soft)]">
        <Container className="py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[13px] text-[var(--od-text-muted)]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              © {new Date().getFullYear()} {siteConfig.name} ({siteConfig.domain}).{" "}
              {isVi ? "Bảo lưu mọi quyền." : "All rights reserved."}
            </span>
            <Link href="/demo" className="hover:text-[var(--od-text)] transition-colors">
              {isVi ? "Chính sách bảo mật & GDPR" : "Privacy policy & GDPR"}
            </Link>
            <Link href="/demo" className="hover:text-[var(--od-text)] transition-colors">
              {isVi ? "Điều khoản sử dụng" : "Terms and conditions"}
            </Link>
            <Link href="/contact" className="hover:text-[var(--od-text)] transition-colors">
              {siteConfig.supportEmail}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2.5">
              <Globe className="h-4 w-4 text-[var(--od-text-muted)]" />
              <button
                type="button"
                onClick={() => switchTo("en")}
                className={
                  lang === "en"
                    ? "font-semibold text-[var(--od-text)] cursor-pointer"
                    : "hover:text-[var(--od-text)] cursor-pointer"
                }
              >
                English
              </button>
              <span className="text-[var(--od-border-strong)]">|</span>
              <button
                type="button"
                onClick={() => switchTo("vi")}
                className={
                  lang === "vi"
                    ? "font-semibold text-[var(--od-text)] cursor-pointer"
                    : "hover:text-[var(--od-text)] cursor-pointer"
                }
              >
                Tiếng Việt
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Switch theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--od-surface-subtle)] text-[var(--od-text)] hover:bg-[var(--od-border-soft)] cursor-pointer transition-colors duration-150"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
