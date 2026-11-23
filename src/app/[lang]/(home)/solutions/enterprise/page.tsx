import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { ENTERPRISE_SPEC } from "../_data/solution-pages-businesses";

export const metadata: Metadata = buildPageMetadata({
  title: ENTERPRISE_SPEC.metaTitle,
  description: ENTERPRISE_SPEC.metaDescription,
  path: "/solutions/enterprise",
});

export default function EnterpriseSolutionPage() {
  return <SolutionPageRenderer spec={ENTERPRISE_SPEC} />;
}
