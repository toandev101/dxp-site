import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { THIRD_PARTY_DELIVERY_SPEC } from "../_data/platform-pages-operate";

export const metadata: Metadata = buildPageMetadata({
  title: THIRD_PARTY_DELIVERY_SPEC.metaTitle,
  description: THIRD_PARTY_DELIVERY_SPEC.metaDescription,
  path: "/platform/third-party-delivery",
});

export default function ThirdPartyDeliveryPage() {
  return <PlatformPageRenderer spec={THIRD_PARTY_DELIVERY_SPEC} />;
}
