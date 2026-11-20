"use client";

import React from "react";
import NextLink, { type LinkProps } from "next/link";
import useDictionaries from "@/hooks/useDictionaries";
import { addLocaleToPathname } from "@/utils/url";

export interface LocalizedLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">, LinkProps {
  href: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LocalizedLinkProps>(
  ({ href, children, ...props }, ref) => {
    const { lang } = useDictionaries();

    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    const isApi = href.startsWith("/api/");
    const isHashOnly = href.startsWith("#");

    const localizedHref = isExternal || isApi || isHashOnly ? href : (() => {
      const [pathPart, hashPart] = href.split("#");
      const [pathname, queryPart] = pathPart.split("?");
      const localized = addLocaleToPathname(pathname, lang);
      return `${localized}${queryPart ? `?${queryPart}` : ""}${hashPart ? `#${hashPart}` : ""}`;
    })();

    return (
      <NextLink ref={ref} href={localizedHref} {...props}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "LocalizedLink";
