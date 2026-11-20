"use server";

import { redirect as nextRedirect, notFound as nextNotFound, RedirectType } from "next/navigation";
import { cookies } from "next/headers";

import { defaultLocale } from "@/constants/locales";
import { addLocaleToPathname } from "@/utils/url";

async function getLocaleFromCookie(): Promise<string> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value;
  return locale || defaultLocale;
}

export async function redirect(path: string, type: Parameters<typeof nextRedirect>[1] = RedirectType.replace) {
  const lang = await getLocaleFromCookie();
  const localizedPath = addLocaleToPathname(path, lang);
  nextRedirect(localizedPath, type);
}

export async function notFound() {
  nextNotFound();
}
