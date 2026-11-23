import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { CUSTOM_PROJECTS_SPEC } from "../_data/solution-pages-builders";

export const metadata: Metadata = buildPageMetadata({
  title: CUSTOM_PROJECTS_SPEC.metaTitle,
  description: CUSTOM_PROJECTS_SPEC.metaDescription,
  path: "/solutions/custom-projects",
});

export default function CustomProjectsSolutionPage() {
  return <SolutionPageRenderer spec={CUSTOM_PROJECTS_SPEC} />;
}
