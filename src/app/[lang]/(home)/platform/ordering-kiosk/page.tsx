import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { ORDERING_KIOSK_SPEC } from "../_data/platform-pages-core";

export const metadata: Metadata = buildPageMetadata({
  title: ORDERING_KIOSK_SPEC.metaTitle,
  description: ORDERING_KIOSK_SPEC.metaDescription,
  path: "/platform/ordering-kiosk",
});

export default function OrderingKioskPage() {
  return <PlatformPageRenderer spec={ORDERING_KIOSK_SPEC} />;
}
