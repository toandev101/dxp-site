import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { ORDERING_APPS_SPEC } from "../_data/platform-pages-core";

export const metadata: Metadata = buildPageMetadata({
  title: ORDERING_APPS_SPEC.metaTitle,
  description: ORDERING_APPS_SPEC.metaDescription,
  path: "/platform/ordering-apps",
});

export default function OrderingAppsPage() {
  return <PlatformPageRenderer spec={ORDERING_APPS_SPEC} />;
}
