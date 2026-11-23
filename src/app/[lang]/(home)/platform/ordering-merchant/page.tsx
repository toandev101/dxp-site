import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { ORDERING_MERCHANT_SPEC } from "../_data/platform-pages-operate";

export const metadata: Metadata = buildPageMetadata({
  title: ORDERING_MERCHANT_SPEC.metaTitle,
  description: ORDERING_MERCHANT_SPEC.metaDescription,
  path: "/platform/ordering-merchant",
});

export default function OrderingMerchantPage() {
  return <PlatformPageRenderer spec={ORDERING_MERCHANT_SPEC} />;
}
