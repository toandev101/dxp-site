import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { STARTUPS_SPEC } from "../_data/solution-pages-builders";

export const metadata: Metadata = buildPageMetadata({
  title: STARTUPS_SPEC.metaTitle,
  description: STARTUPS_SPEC.metaDescription,
  path: "/solutions/startups",
});

export default function StartupsSolutionPage() {
  return <SolutionPageRenderer spec={STARTUPS_SPEC} />;
}
