"use client";

import { createContext, useEffect } from "react";
import Cookies from "js-cookie";

import type { Dictionary } from "@/i18n/messages/en";
import { enMessages } from "@/i18n/messages/en";
import { getLocale } from "@/utils/locale";

export const TranslationContext = createContext<{
  lang: string;
  messages: Dictionary;
}>({ lang: "en", messages: enMessages });

export function TranslationProvider({
  lang,
  messages,
  children,
}: {
  lang: string;
  messages: Dictionary;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const cookieLang = getLocale();
    if (cookieLang !== lang) {
      Cookies.set("NEXT_LOCALE", lang);
    }
  }, [lang]);

  return <TranslationContext.Provider value={{ lang, messages }}>{children}</TranslationContext.Provider>;
}
