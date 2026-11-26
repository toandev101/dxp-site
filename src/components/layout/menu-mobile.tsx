"use client";

import { useState } from "react";
import { useRouter as useNextRouter, usePathname as useNextPathname } from "next/navigation";
import Cookies from "js-cookie";
import { ChevronDown, Moon, Sun } from "lucide-react";

import { MEGA_MENUS, type MegaKey } from "./header";
import { Link } from "@/components/ui/link";
import { useTheme } from "@/providers/theme-provider";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { addLocaleToPathname } from "@/utils/url";
import { cn } from "@/lib/utils";

const ACCORDION_ITEMS: { key: MegaKey; labelEn: string; labelVi: string }[] = [
  { key: "platform", labelEn: "Platform", labelVi: "Nền tảng" },
  { key: "solutions", labelEn: "Solutions", labelVi: "Giải pháp" },
  { key: "resources", labelEn: "Resources", labelVi: "Tài nguyên" },
];

export function MenuMobile() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { theme, toggleTheme } = useTheme();
  const { isMobileMenuOpen, setMobileMenuOpen, openDemoModal } = useUiStore();
  const [expandedKey, setExpandedKey] = useState<MegaKey | null>(null);

  const router = useNextRouter();
  const pathname = useNextPathname();

  if (!isMobileMenuOpen) return null;

  const closeAll = () => {
    setMobileMenuOpen(false);
    setExpandedKey(null);
  };

  const switchLanguage = () => {
    const nextLang = isVi ? "en" : "vi";
    Cookies.set("NEXT_LOCALE", nextLang);
    closeAll();
    router.push(addLocaleToPathname(pathname, nextLang));
  };

  return (
    <>
      {/* Subtle click-outside backdrop below header */}
      <div
        aria-hidden="true"
        onClick={closeAll}
        className="fixed inset-x-0 top-[68px] bottom-0 z-40 bg-[#111013]/25 xl:hidden"
      />

      {/* Ordering.co-style Mobile Drawer Panel styled with OPERO Design System */}
      <div className="fixed inset-x-0 top-[68px] z-50 max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-[var(--line-soft)] bg-[var(--canvas)] shadow-[var(--shadow)] xl:hidden">
        <div className="mx-auto max-w-[1200px] px-5 pt-2 pb-6 sm:px-8">
          {/* 1. Four Expandable Accordion Categories */}
          <div className="divide-y divide-[var(--line-soft)] border-b border-[var(--line-soft)]">
            {ACCORDION_ITEMS.map((item) => {
              const isOpen = expandedKey === item.key;
              const menuData = MEGA_MENUS[item.key];

              return (
                <div key={item.key}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpandedKey(isOpen ? null : item.key)}
                    className="flex w-full items-center justify-between py-4 text-left text-[15.5px] font-semibold text-[var(--ink)] transition-colors duration-150 hover:text-[#D91842] cursor-pointer"
                  >
                    <span>{isVi ? item.labelVi : item.labelEn}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-[var(--ink-mute)] transition-transform duration-150",
                        isOpen && "rotate-180 text-[var(--ink)]"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-5 pt-1 space-y-5">
                      {menuData.variant === "dropdown" ? (
                        <ul className="space-y-2">
                          {menuData.columns
                            .flatMap((col) => col.links)
                            .map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  onClick={closeAll}
                                  className="inline-flex items-center gap-2 py-0.5 text-[14px] font-medium text-[var(--ink-2)] hover:text-[#D91842] transition-colors"
                                >
                                  <span>{link.label}</span>
                                  {link.badge && (
                                    <span className="rounded-full bg-[var(--brand-red-50)] px-2 py-0.5 text-[10px] font-semibold text-[var(--brand-red)]">
                                      {link.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      ) : (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          {menuData.columns.map((col) => (
                            <div key={col.eyebrow}>
                              <p className="text-[12px] font-semibold text-[#D91842]">{col.eyebrow}</p>
                              <p className="mt-0.5 text-[12px] text-[var(--ink-mute)]">{col.summary}</p>
                              <ul className="mt-2.5 space-y-2">
                                {col.links.map((link) => (
                                  <li key={link.label}>
                                    <Link
                                      href={link.href}
                                      onClick={closeAll}
                                      className="inline-flex items-center gap-2 py-0.5 text-[14px] font-medium text-[var(--ink-2)] hover:text-[#D91842] transition-colors"
                                    >
                                      <span>{link.label}</span>
                                      {link.badge && (
                                        <span className="rounded-full bg-[var(--brand-red-50)] px-2 py-0.5 text-[10px] font-semibold text-[var(--brand-red)]">
                                          {link.badge}
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Quick bottom strip links inside accordion */}
                      {menuData.bottomStrip && menuData.bottomStrip.length > 0 && (
                        <div className="grid grid-cols-2 gap-2.5 border-t border-[var(--line-soft)] pt-4">
                          {menuData.bottomStrip.map((strip) => (
                            <Link
                              key={strip.title}
                              href={strip.href}
                              onClick={closeAll}
                              className="rounded-[12px] bg-[var(--canvas-soft)] p-3 transition-colors hover:bg-[var(--line-soft)]"
                            >
                              <p className="text-[13px] font-semibold text-[var(--ink)]">{strip.title}</p>
                              <p className="mt-0.5 text-[11.5px] leading-snug text-[var(--ink-mute)]">{strip.desc}</p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 2. Plain Utility Links: Customers, Pricing, Language, Theme Switch */}
          <div className="mt-2 flex flex-col">
            <Link
              href="/customers"
              onClick={closeAll}
              className="py-3 text-[15px] font-medium text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]"
            >
              {isVi ? "Khách hàng" : "Customers"}
            </Link>

            <Link
              href="/pricing"
              onClick={closeAll}
              className="py-3 text-[15px] font-medium text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]"
            >
              {isVi ? "Bảng giá" : "Pricing"}
            </Link>

            <button
              type="button"
              onClick={switchLanguage}
              className="py-3 text-left text-[15px] font-medium text-[var(--ink-2)] transition-colors hover:text-[var(--ink)] cursor-pointer"
            >
              {isVi ? "English" : "Tiếng Việt"}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex w-fit items-center gap-2.5 py-3 text-left text-[15px] font-medium text-[var(--ink-2)] transition-colors hover:text-[var(--ink)] cursor-pointer"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-[18px] w-[18px] text-[var(--ink-mute)]" />
                  <span>{isVi ? "Chuyển sang giao diện sáng" : "Switch to light theme"}</span>
                </>
              ) : (
                <>
                  <Moon className="h-[18px] w-[18px] text-[var(--ink-mute)]" />
                  <span>{isVi ? "Chuyển sang giao diện tối" : "Switch to dark theme"}</span>
                </>
              )}
            </button>
          </div>

          {/* 3. Action Buttons: Inline Secondary + Full-Width OPERO Brand CTA */}
          <div className="mt-3 flex flex-col items-start gap-3">
            <Link
              href="/contact"
              onClick={closeAll}
              className="inline-flex h-[46px] items-center justify-center rounded-full border border-[var(--line)] bg-[var(--canvas)] px-5 text-[14.5px] font-semibold text-[var(--ink)] transition-colors duration-150 hover:bg-[var(--canvas-soft)]"
            >
              {isVi ? `Liên hệ ${siteConfig.name}` : `Talk to ${siteConfig.name}`}
            </Link>

            <button
              type="button"
              onClick={() => {
                closeAll();
                openDemoModal("mobile_menu");
              }}
              className="flex h-[48px] w-full items-center justify-center rounded-full bg-[#D91842] text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-[#B8123A] active:bg-[#94102F] active:scale-[0.98] cursor-pointer"
            >
              {isVi ? "Đặt lịch demo" : "Book a demo"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
