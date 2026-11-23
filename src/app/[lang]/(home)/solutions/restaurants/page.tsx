import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { RESTAURANTS_SPEC } from "../_data/solution-pages-businesses";

export const metadata: Metadata = buildPageMetadata({
  title: RESTAURANTS_SPEC.metaTitle,
  description: RESTAURANTS_SPEC.metaDescription,
  path: "/solutions/restaurants",
});

export default function RestaurantsSolutionPage() {
  return <SolutionPageRenderer spec={RESTAURANTS_SPEC} />;
}
