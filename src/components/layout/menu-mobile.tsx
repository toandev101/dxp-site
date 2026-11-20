"use client";

import { ArrowRight, Moon, Sun } from "lucide-react";
import { Link } from "@/components/ui/link";
import { LanguageSwitcher } from "@/components/common/language-switcher";
import { useTheme } from "@/providers/theme-provider";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";

export function MenuMobile() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { theme, toggleTheme } = useTheme();
  const { isMobileMenuOpen, setMobileMenuOpen, openDemoModal } = useUiStore();

  if (!isMobileMenuOpen) return null;

  const links = [
    { label: isVi ? "Nền tảng (Platform)" : "Platform", href: "/#platform" },
    { label: isVi ? "Sản phẩm (Products)" : "All Products & Features", href: "/products" },
    { label: isVi ? "Giải pháp (Solutions)" : "Solutions", href: "/solutions" },
    { label: isVi ? "Tích hợp (Integrations)" : "Integrations", href: "/integrations" },
    { label: isVi ? "Khách hàng (Customers)" : "Customers", href: "/#customers" },
    { label: isVi ? "Bảng giá (Pricing)" : "Pricing", href: "/pricing" },
  ];

  return (
    <div className="fixed inset-x-0 top-[73px] bottom-0 z-50 overflow-y-auto bg-[var(--od-bg)] border-t border-[var(--od-border)] lg:hidden">
      <div className="px-5 py-6 space-y-5">
        <div className="divide-y divide-[var(--od-border)]">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 text-base font-semibold text-[var(--od-text)]"
            >
              <span>{item.label}</span>
              <ArrowRight className="h-4 w-4 text-[var(--od-text-muted)]" />
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 pt-2 border-t border-[var(--od-border)]">
          <LanguageSwitcher className="h-10 px-3" />
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 items-center gap-2 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-3.5 text-xs font-semibold text-[var(--od-text)]"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span>{theme === "dark" ? "Light theme" : "Dark theme"}</span>
          </button>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <Link
            href="/demo"
            onClick={() => setMobileMenuOpen(false)}
            className="flex h-12 w-full items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] text-sm font-semibold text-[var(--od-text)]"
          >
            {isVi ? `Liên hệ ${siteConfig.name}` : `Talk to ${siteConfig.name}`}
          </Link>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              openDemoModal("mobile_menu");
            }}
            className="flex h-12 w-full items-center justify-center rounded-[6px] bg-[#266df0] text-sm font-semibold text-white"
          >
            {isVi ? "Đặt lịch demo" : "Book a demo"}
          </button>
        </div>
      </div>
    </div>
  );
}
