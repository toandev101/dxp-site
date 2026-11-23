import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { DRIVER_APP_SPEC } from "../_data/platform-pages-operate";

export const metadata: Metadata = buildPageMetadata({
  title: DRIVER_APP_SPEC.metaTitle,
  description: DRIVER_APP_SPEC.metaDescription,
  path: "/platform/driver-app",
});

export default function DriverAppPage() {
  return <PlatformPageRenderer spec={DRIVER_APP_SPEC} />;
}
