import { NextRequest, NextResponse } from "next/server";
import { defaultLocale } from "@/constants/locales";
import { i18n } from "../i18n-config";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect explicit default locale prefix (/en/...) to clean URL (/...)
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    return NextResponse.redirect(
      new URL(pathname.replace(`/${defaultLocale}`, pathname === `/${defaultLocale}` ? "/" : ""), request.url)
    );
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}${request.nextUrl.search}`, request.nextUrl.href));
  }
}

export const config = {
  matcher: ["/((?!api|static|_next|.*\\..*).*)"],
};
