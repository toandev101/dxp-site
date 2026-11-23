import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { MULTI_STORE_ORDERING_SPEC } from "../_data/platform-pages-core";

export const metadata: Metadata = buildPageMetadata({
  title: MULTI_STORE_ORDERING_SPEC.metaTitle,
  description: MULTI_STORE_ORDERING_SPEC.metaDescription,
  path: "/platform/multi-store-ordering",
});

export default function MultiStoreOrderingPage() {
  return <PlatformPageRenderer spec={MULTI_STORE_ORDERING_SPEC} />;
}
