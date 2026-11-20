import cookies from "js-cookie";
import { defaultLocale } from "@/constants/locales";

export const getLocale = (): string => {
  if (typeof window === "undefined") return defaultLocale;
  return cookies.get("NEXT_LOCALE") || defaultLocale;
};

export const isVietnamese = (lang?: string): boolean => {
  return lang === "vi";
};
