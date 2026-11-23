import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { MULTI_LOCATION_OPERATIONS_SPEC } from "../_data/platform-pages-operate";

export const metadata: Metadata = buildPageMetadata({
  title: MULTI_LOCATION_OPERATIONS_SPEC.metaTitle,
  description: MULTI_LOCATION_OPERATIONS_SPEC.metaDescription,
  path: "/platform/multi-location-operations",
});

export default function MultiLocationOperationsPage() {
  return <PlatformPageRenderer spec={MULTI_LOCATION_OPERATIONS_SPEC} />;
}
