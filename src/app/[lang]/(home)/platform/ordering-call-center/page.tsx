import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { ORDERING_CALL_CENTER_SPEC } from "../_data/platform-pages-core";
import { ORDERING_CALL_CENTER_SPEC_VI } from "../_data/platform-pages-core-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? ORDERING_CALL_CENTER_SPEC_VI : ORDERING_CALL_CENTER_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/platform/ordering-call-center",
  });
}

export default async function OrderingCallCenterPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? ORDERING_CALL_CENTER_SPEC_VI : ORDERING_CALL_CENTER_SPEC;
  return <PlatformPageRenderer spec={spec} />;
}
