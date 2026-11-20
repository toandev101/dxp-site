import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";

import { allFontVariables } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import { TranslationProvider } from "@/providers/translation-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { getDictionary } from "./dictionaries";

import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Your Business. Every Order. Connected.`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  const messages = await getDictionary(lang);

  return (
    <html lang={lang} className={`${allFontVariables} scroll-smooth`}>
      <body>
        <ThemeProvider>
          <TranslationProvider lang={lang} messages={messages}>
            <Toaster richColors position="top-right" />
            {children}
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
