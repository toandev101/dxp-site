import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { FRANCHISES_SPEC } from "../_data/solution-pages-businesses";

export const metadata: Metadata = buildPageMetadata({
  title: FRANCHISES_SPEC.metaTitle,
  description: FRANCHISES_SPEC.metaDescription,
  path: "/solutions/franchises",
});

export default function FranchisesSolutionPage() {
  return <SolutionPageRenderer spec={FRANCHISES_SPEC} />;
}
