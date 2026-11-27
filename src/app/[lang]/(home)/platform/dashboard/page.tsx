import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { DASHBOARD_SPEC } from "../_data/platform-pages-operate";
import { DASHBOARD_SPEC_VI } from "../_data/platform-pages-operate-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? DASHBOARD_SPEC_VI : DASHBOARD_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/platform/dashboard",
  });
}

export default async function DashboardPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? DASHBOARD_SPEC_VI : DASHBOARD_SPEC;
  return <PlatformPageRenderer spec={spec} />;
}
