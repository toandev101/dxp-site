import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { AI_ORDERING_AGENTS_SPEC } from "../_data/platform-pages-core";

export const metadata: Metadata = buildPageMetadata({
  title: AI_ORDERING_AGENTS_SPEC.metaTitle,
  description: AI_ORDERING_AGENTS_SPEC.metaDescription,
  path: "/platform/ai-ordering-agents",
});

export default function AiOrderingAgentsPage() {
  return <PlatformPageRenderer spec={AI_ORDERING_AGENTS_SPEC} />;
}
