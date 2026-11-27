import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { THIRD_PARTY_DELIVERY_SPEC } from "../_data/platform-pages-operate";
import { THIRD_PARTY_DELIVERY_SPEC_VI } from "../_data/platform-pages-operate-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? THIRD_PARTY_DELIVERY_SPEC_VI : THIRD_PARTY_DELIVERY_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/platform/third-party-delivery",
  });
}

export default async function ThirdPartyDeliveryPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? THIRD_PARTY_DELIVERY_SPEC_VI : THIRD_PARTY_DELIVERY_SPEC;
  return <PlatformPageRenderer spec={spec} />;
}
