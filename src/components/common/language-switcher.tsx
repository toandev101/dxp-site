"use client";

import { useRouter as useNextRouter, usePathname as useNextPathname } from "next/navigation";
import Cookies from "js-cookie";
import { Globe } from "lucide-react";

import useDictionaries from "@/hooks/useDictionaries";
import { addLocaleToPathname } from "@/utils/url";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang } = useDictionaries();
  const router = useNextRouter();
  const pathname = useNextPathname();

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "vi" : "en";
    Cookies.set("NEXT_LOCALE", nextLang);
    const nextPath = addLocaleToPathname(pathname, nextLang);
    router.push(nextPath);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Switch language"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--od-text)] transition-colors duration-150 hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer",
        className
      )}
    >
      <Globe className="h-3.5 w-3.5 text-[#D91842]" />
      <span>{lang === "en" ? "EN" : "VI"}</span>
    </button>
  );
}
