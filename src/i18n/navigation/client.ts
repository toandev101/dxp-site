"use client";

import {
  useParams,
  useRouter as useNextRouter,
  usePathname as useNextPathname,
  useSearchParams,
} from "next/navigation";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { normalizePathname, addLocaleToPathname } from "@/utils/url";
import { getLocale } from "@/utils/locale";

function processHref(href: string, lang: string): string {
  try {
    const url = new URL(href, "http://localhost");
    const localizedPath = addLocaleToPathname(url.pathname, lang);
    return localizedPath + url.search + url.hash;
  } catch {
    const [pathname, ...rest] = href.split("?");
    const queryPart = rest.length > 0 ? `?${rest.join("?")}` : "";
    const [pathWithoutHash, hash] = pathname.split("#");
    const hashPart = hash ? `#${hash}` : "";
    const localizedPath = addLocaleToPathname(pathWithoutHash, lang);
    return localizedPath + queryPart + hashPart;
  }
}

export function useRouter(): AppRouterInstance {
  const nextRouter = useNextRouter();
  const lang = getLocale();

  return {
    ...nextRouter,
    push: (href: string, options?: { scroll?: boolean }) => {
      const localizedHref = processHref(href, lang);
      return nextRouter.push(localizedHref, options);
    },
    replace: (href: string, options?: { scroll?: boolean }) => {
      const localizedHref = processHref(href, lang);
      return nextRouter.replace(localizedHref, options);
    },
    prefetch: nextRouter.prefetch,
    back: nextRouter.back,
    forward: nextRouter.forward,
    refresh: nextRouter.refresh,
  } as AppRouterInstance;
}

export function usePathname(): string {
  const nextPathname = useNextPathname();
  return normalizePathname(nextPathname);
}

export { useParams, useSearchParams };
