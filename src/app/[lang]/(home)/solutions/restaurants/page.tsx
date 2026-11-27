import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { RESTAURANTS_SPEC } from "../_data/solution-pages-businesses";
import { RESTAURANTS_SPEC_VI } from "../_data/solution-pages-businesses-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? RESTAURANTS_SPEC_VI : RESTAURANTS_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/solutions/restaurants",
  });
}

export default async function RestaurantsSolutionPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? RESTAURANTS_SPEC_VI : RESTAURANTS_SPEC;
  return <SolutionPageRenderer spec={spec} />;
}
