import type { Metadata } from "next";
import { getDictionary } from "../../dictionaries";
import { buildPageMetadata } from "@/utils/metadata";
import { IntegrationsDirectory } from "./_components/integrations-directory";
import { FinalCtaSection } from "../_components/final-cta-section";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return buildPageMetadata({
    title: t.meta_integrations_title,
    description: t.meta_integrations_desc,
    path: "/integrations",
  });
}

export default function IntegrationsPage() {
  return (
    <>
      <IntegrationsDirectory />
      <FinalCtaSection />
    </>
  );
}
