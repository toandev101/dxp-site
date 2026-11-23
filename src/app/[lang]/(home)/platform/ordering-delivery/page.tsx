import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { ORDERING_DELIVERY_SPEC } from "../_data/platform-pages-operate";

export const metadata: Metadata = buildPageMetadata({
  title: ORDERING_DELIVERY_SPEC.metaTitle,
  description: ORDERING_DELIVERY_SPEC.metaDescription,
  path: "/platform/ordering-delivery",
});

export default function OrderingDeliveryPage() {
  return <PlatformPageRenderer spec={ORDERING_DELIVERY_SPEC} />;
}
