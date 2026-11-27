import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { MULTI_LOCATION_OPERATIONS_SPEC } from "../_data/platform-pages-operate";
import { MULTI_LOCATION_OPERATIONS_SPEC_VI } from "../_data/platform-pages-operate-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec =
    lang === "vi" ? MULTI_LOCATION_OPERATIONS_SPEC_VI : MULTI_LOCATION_OPERATIONS_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/platform/multi-location-operations",
  });
}

export default async function MultiLocationOperationsPage({ params }: Props) {
  const { lang } = await params;
  const spec =
    lang === "vi" ? MULTI_LOCATION_OPERATIONS_SPEC_VI : MULTI_LOCATION_OPERATIONS_SPEC;
  return <PlatformPageRenderer spec={spec} />;
}
