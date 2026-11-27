import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { ORDERING_DELIVERY_SPEC } from "../_data/platform-pages-operate";
import { ORDERING_DELIVERY_SPEC_VI } from "../_data/platform-pages-operate-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? ORDERING_DELIVERY_SPEC_VI : ORDERING_DELIVERY_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/platform/ordering-delivery",
  });
}

export default async function OrderingDeliveryPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? ORDERING_DELIVERY_SPEC_VI : ORDERING_DELIVERY_SPEC;
  return <PlatformPageRenderer spec={spec} />;
}
