import type { Metadata } from "next";

import { getDictionary } from "../../dictionaries";
import { buildPageMetadata } from "@/utils/metadata";
import { PricingHeroAndPlans } from "./_components/pricing-hero-plans";
import { PricingAudiencesAndProducts } from "./_components/pricing-audiences-products";
import { PricingFeaturesAndMidCta } from "./_components/pricing-features";
import { PricingFaqAndClosing } from "./_components/pricing-faq-closing";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return buildPageMetadata({
    title: lang === "vi" ? "Bảng giá & Các gói dịch vụ" : "Pricing and Plans",
    description: t.meta_pricing_desc,
    path: "/pricing",
  });
}

export default function PricingPage() {
  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. Centered Hero, 2. 3-Plan Hairline Grid + Usage Box, 3. Customer Proof Logos */}
      <PricingHeroAndPlans />
      {/* 4. Built for businesses / Built for builders, 5. Every plan includes every product */}
      <PricingAudiencesAndProducts />
      {/* 6. 10-Card Feature Grid + Expandable 54-Item Highlights, 7. Mid-Page Review CTA Band */}
      <PricingFeaturesAndMidCta />
      {/* 8. Sticky-Left 5-Category FAQ Accordion, 9. Closing Dark CTA Band */}
      <PricingFaqAndClosing />
    </div>
  );
}
