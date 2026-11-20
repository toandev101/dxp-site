import { defaultLocale } from "@/constants/locales";
import { i18n } from "../../i18n-config";

export function normalizePathname(pathname: string): string {
  for (const locale of i18n.locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return pathname.replace(`/${locale}`, "") || "/";
    }
  }
  return pathname;
}

export function addLocaleToPathname(pathname: string, locale: string): string {
  const normalized = normalizePathname(pathname);

  if (locale === defaultLocale) {
    return normalized;
  }

  const path = normalized.startsWith("/") ? normalized : `/${normalized}`;
  return `/${locale}${path}`;
}
