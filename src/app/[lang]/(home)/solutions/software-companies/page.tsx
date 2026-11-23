import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { SOFTWARE_COMPANIES_SPEC } from "../_data/solution-pages-builders";

export const metadata: Metadata = buildPageMetadata({
  title: SOFTWARE_COMPANIES_SPEC.metaTitle,
  description: SOFTWARE_COMPANIES_SPEC.metaDescription,
  path: "/solutions/software-companies",
});

export default function SoftwareCompaniesSolutionPage() {
  return <SolutionPageRenderer spec={SOFTWARE_COMPANIES_SPEC} />;
}
