import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { ENTERPRISE_SPEC } from "../_data/solution-pages-businesses";
import { ENTERPRISE_SPEC_VI } from "../_data/solution-pages-businesses-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? ENTERPRISE_SPEC_VI : ENTERPRISE_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/solutions/enterprise",
  });
}

export default async function EnterpriseSolutionPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? ENTERPRISE_SPEC_VI : ENTERPRISE_SPEC;
  return <SolutionPageRenderer spec={spec} />;
}
