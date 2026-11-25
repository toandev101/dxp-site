import type { Metadata } from "next";

import { getDictionary } from "../dictionaries";
import { buildPageMetadata } from "@/utils/metadata";
import { HeroSection } from "./_components/hero-section";
import { AudiencePathsSection } from "./_components/audience-paths-section";
import { OrderingPlusAside } from "./_components/orderingplus-aside";
import { ProofSection } from "./_components/proof-section";
import { JourneySection } from "./_components/journey-section";
import { AiAgentsSection } from "./_components/ai-agents-section";
import { PlatformPillarsSection } from "./_components/platform-pillars-section";
import { IntegrationsStripSection } from "./_components/integrations-strip-section";
import { CustomerStoriesSection } from "./_components/customer-stories-section";
import { ControlArchitectureSection } from "./_components/control-architecture-section";
import { MigrationSection } from "./_components/migration-section";
import { FaqSection } from "./_components/faq-section";
import { FinalCtaSection } from "./_components/final-cta-section";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return buildPageMetadata({
    title: t.meta_home_title,
    description: t.meta_home_desc,
    path: "/",
  });
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Your business. Every order. Connected. */}
      <HeroSection />
      {/* 2. Solutions / Audience Paths: Build what comes next. */}
      <AudiencePathsSection />
      {/* 3. OrderingPlus Brand Clarification Aside */}
      <OrderingPlusAside />
      {/* 4. Social Proof, Metrics & Enterprise Brand Logos */}
      <ProofSection />
      {/* 5. End-to-End Order Journey: One order. A connected operation. */}
      <JourneySection />
      {/* 6. AI Ordering Agents (Full-bleed #D91842 Blue Band) */}
      <AiAgentsSection />
      {/* 7. Platform Architecture & 4 Product Pillars + Expandable Details */}
      <PlatformPillarsSection />
      {/* 8. Integrations Directory Strip (#F5F5F6 Band) */}
      <IntegrationsStripSection />
      {/* 9. Customer Stories: Different businesses. Connected operations. */}
      <CustomerStoriesSection />
      {/* 10. Ownership & Architecture (#1B1A1F Dark Band) */}
      <ControlArchitectureSection />
      {/* 11. Migration & Evaluation Paths */}
      <MigrationSection />
      {/* 12. FAQ 2-Column Accordion */}
      <FaqSection />
      {/* 13. Final Closing CTA: Make it yours. (#FDECEF Soft Blue Band) */}
      <FinalCtaSection />
    </>
  );
}
