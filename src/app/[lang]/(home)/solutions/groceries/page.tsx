import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { GROCERIES_SPEC } from "../_data/solution-pages-businesses";

export const metadata: Metadata = buildPageMetadata({
  title: GROCERIES_SPEC.metaTitle,
  description: GROCERIES_SPEC.metaDescription,
  path: "/solutions/groceries",
});

export default function GroceriesSolutionPage() {
  return <SolutionPageRenderer spec={GROCERIES_SPEC} />;
}
