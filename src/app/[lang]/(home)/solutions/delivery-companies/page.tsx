import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { DELIVERY_COMPANIES_SPEC } from "../_data/solution-pages-builders";

export const metadata: Metadata = buildPageMetadata({
  title: DELIVERY_COMPANIES_SPEC.metaTitle,
  description: DELIVERY_COMPANIES_SPEC.metaDescription,
  path: "/solutions/delivery-companies",
});

export default function DeliveryCompaniesSolutionPage() {
  return <SolutionPageRenderer spec={DELIVERY_COMPANIES_SPEC} />;
}
