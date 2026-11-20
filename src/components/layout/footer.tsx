"use client";

import { Activity, ArrowRight, ArrowUpRight, Globe, Moon, Sun } from "lucide-react";

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
      { label: "Ordering Web", href: "/products#build" },
      { label: "Ordering Apps", href: "/products#build" },
      { label: "Ordering Kiosk", href: "/products#build" },
      { label: "Ordering Call Center", href: "/products#build" },
      { label: "AI Ordering Agents", href: "/#ai", badge: "New" },
      { label: "Ordering Merchant", href: "/products#operate" },
      { label: "Ordering Delivery", href: "/products#operate" },
      { label: "Integrations", href: "/integrations" },
    ],
    solutions: [
      { label: "All solutions", href: "/solutions" },
      { label: `${siteConfig.name} for Restaurants`, href: "/solutions#restaurants" },
      { label: `${siteConfig.name} for Franchises`, href: "/solutions#franchises" },
      { label: `${siteConfig.name} for Enterprise`, href: "/solutions#franchises" },
      { label: `${siteConfig.name} for Marketplaces`, href: "/solutions#marketplaces" },
      { label: "Agencies & resellers", href: "/solutions#marketplaces" },
      { label: "Groceries & local stores", href: "/solutions#retail" },
      { label: "Delivery companies", href: "/solutions#marketplaces" },
      { label: `Migrate to ${siteConfig.name}`, href: "/#migration" },
    ],
    developers: [
      { label: "API reference", href: "/products#extend" },
      { label: "Documentation", href: "/products#extend" },
      { label: "SDKs & webhooks", href: "/products#extend" },
      { label: `Build on ${siteConfig.name}`, href: "/#control" },
      { label: "Build vs buy", href: "/#control" },
      { label: "White label", href: "/#control" },
      { label: "Source code license", href: "/#control" },
      { label: "Bring your own cloud", href: "/#control" },
      { label: "Changelog", href: "/products" },
      { label: "System status", href: "/api/health" },
    ],
    resources: [
      { label: "All resources", href: "/products" },
      { label: "Blog", href: "/solutions" },
      { label: "Success stories", href: "/#customers" },
      { label: "Knowledge base", href: "/#faq" },
      { label: "Live demos", href: "/demo" },
      { label: "Pricing", href: "/pricing" },
      { label: "Compare platforms", href: "/#migration" },
      { label: `${siteConfig.name} vs Olo`, href: "/#migration" },
      { label: `${siteConfig.name} vs GloriaFood`, href: "/#migration" },
      { label: "52 business models", href: "/solutions#marketplaces" },
    ],
    company: [
      { label: `About ${siteConfig.name}`, href: "/#proof" },
      { label: "Customers", href: "/#customers" },
      { label: "Partners", href: "/integrations" },
      { label: "Support", href: "/demo" },
      { label: "Contact", href: "/demo" },
      { label: "Book a demo", href: "/demo" },
    ],
  };

  return (
    <footer className="bg-[var(--od-bg)] text-[var(--od-text)] border-t border-[var(--od-border)]">
      {/* Band 1: 6-Column Main Directory */}
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Col 1: Brand info */}
          <div className="lg:col-span-3 space-y-4">
            <BrandLogo />
            <p className="text-[13.5px] leading-[1.6] text-[var(--od-text-muted)] max-w-[260px]">
              {isVi
                ? "Hạ tầng đặt hàng cho nhà hàng và thương mại địa phương. Build. Operate. Connect. Extend."
                : "The ordering infrastructure for restaurants and local commerce. Build. Operate. Connect. Extend."}
            </p>
            <Link
              href="/api/health"
              className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[var(--od-action-content)] hover:underline pt-1"
            >
              <Activity className="h-4 w-4" />
              <span>{isVi ? "Trạng thái hệ thống" : "System status"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Cols 2-6 */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
            {(
              [
                { title: "Platform", list: columns.platform },
                { title: "Solutions", list: columns.solutions },
                { title: "Developers", list: columns.developers },
                { title: "Resources", list: columns.resources },
                { title: "Company", list: columns.company },
              ] as const
            ).map((col) => (
              <div key={col.title}>
                <h3 className="text-[13.5px] font-semibold text-[var(--od-text)]">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.list.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-[13.5px] text-[var(--od-text-muted)] transition-colors hover:text-[var(--od-action-content)]"
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
      <div className="border-t border-[var(--od-border)]">
        <Container className="py-6 flex flex-wrap items-center gap-3">
          <span className="text-[13.5px] font-semibold text-[var(--od-text)] mr-2">Apps</span>
          {[
            { label: "Merchant App", href: "/products#operate" },
            { label: "Driver App", href: "/products#operate" },
            { label: "Kiosk", href: "/products#build" },
            { label: "Call Center", href: "/products#build" },
          ].map((app) => (
            <Link
              key={app.label}
              href={app.href}
              className="inline-flex items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-3.5 py-2 text-[13px] font-medium text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
            >
              <span>{app.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[var(--od-text-muted)]" />
            </Link>
          ))}
          <span className="text-[13px] text-[var(--od-text-muted)] ml-1">iOS · Android · Web</span>
        </Container>
      </div>

      {/* Band 3: Legal & Locale Bar */}
      <div className="border-t border-[var(--od-border)]">
        <Container className="py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[13px] text-[var(--od-text-muted)]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </span>
            <Link href="/demo" className="hover:text-[var(--od-text)] transition-colors">
              Privacy policy &amp; GDPR
            </Link>
            <Link href="/demo" className="hover:text-[var(--od-text)] transition-colors">
              Terms and conditions
            </Link>
            <Link href="/demo" className="hover:text-[var(--od-text)] transition-colors">
              Your privacy choices
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
              className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] text-[var(--od-text)] hover:border-[var(--od-border-strong)] cursor-pointer"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
