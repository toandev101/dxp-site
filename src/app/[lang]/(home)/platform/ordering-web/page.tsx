import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { ORDERING_WEB_SPEC } from "../_data/platform-pages-core";

export const metadata: Metadata = buildPageMetadata({
  title: ORDERING_WEB_SPEC.metaTitle,
  description: ORDERING_WEB_SPEC.metaDescription,
  path: "/platform/ordering-web",
});

export default function OrderingWebPage() {
  return <PlatformPageRenderer spec={ORDERING_WEB_SPEC} />;
}
