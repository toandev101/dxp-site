import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { ORDERING_CALL_CENTER_SPEC } from "../_data/platform-pages-core";

export const metadata: Metadata = buildPageMetadata({
  title: ORDERING_CALL_CENTER_SPEC.metaTitle,
  description: ORDERING_CALL_CENTER_SPEC.metaDescription,
  path: "/platform/ordering-call-center",
});

export default function OrderingCallCenterPage() {
  return <PlatformPageRenderer spec={ORDERING_CALL_CENTER_SPEC} />;
}
