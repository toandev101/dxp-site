import type { Metadata } from "next";

import { getDictionary } from "../../dictionaries";
import { buildPageMetadata } from "@/utils/metadata";
import { DemoHero } from "./_components/demo-hero";
import { DemoCatalog } from "./_components/demo-catalog";
import { DemoWalkthroughAndCta } from "./_components/demo-walkthrough";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return buildPageMetadata({
    title: lang === "vi" ? "Bản demo trực tiếp" : "Live demos",
    description: t.meta_demo_desc,
    path: "/demo",
  });
}

export default function DemoPage() {
  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. Hero + Right "What you can open" Quick-Jump Index */}
      <DemoHero />
      {/* 2. Live Demos Catalog (Marketplace, Restaurant, Operations, AI Ordering Agents) */}
      <DemoCatalog />
      {/* 3. Walkthrough Meetings Picker + 4. Closing Dark CTA Band */}
      <DemoWalkthroughAndCta />
    </div>
  );
}
