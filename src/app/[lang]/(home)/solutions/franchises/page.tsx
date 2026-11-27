import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { FRANCHISES_SPEC } from "../_data/solution-pages-businesses";
import { FRANCHISES_SPEC_VI } from "../_data/solution-pages-businesses-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? FRANCHISES_SPEC_VI : FRANCHISES_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/solutions/franchises",
  });
}

export default async function FranchisesSolutionPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? FRANCHISES_SPEC_VI : FRANCHISES_SPEC;
  return <SolutionPageRenderer spec={spec} />;
}
