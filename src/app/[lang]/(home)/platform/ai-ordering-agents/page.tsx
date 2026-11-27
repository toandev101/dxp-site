import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { AI_ORDERING_AGENTS_SPEC } from "../_data/platform-pages-core";
import { AI_ORDERING_AGENTS_SPEC_VI } from "../_data/platform-pages-core-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? AI_ORDERING_AGENTS_SPEC_VI : AI_ORDERING_AGENTS_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/platform/ai-ordering-agents",
  });
}

export default async function AiOrderingAgentsPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? AI_ORDERING_AGENTS_SPEC_VI : AI_ORDERING_AGENTS_SPEC;
  return <PlatformPageRenderer spec={spec} />;
}
