import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { AGENCIES_RESELLERS_SPEC } from "../_data/solution-pages-builders";

export const metadata: Metadata = buildPageMetadata({
  title: AGENCIES_RESELLERS_SPEC.metaTitle,
  description: AGENCIES_RESELLERS_SPEC.metaDescription,
  path: "/solutions/agencies-resellers",
});

export default function AgenciesResellersSolutionPage() {
  return <SolutionPageRenderer spec={AGENCIES_RESELLERS_SPEC} />;
}
