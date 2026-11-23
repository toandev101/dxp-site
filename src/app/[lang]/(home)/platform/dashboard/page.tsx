import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { DASHBOARD_SPEC } from "../_data/platform-pages-operate";

export const metadata: Metadata = buildPageMetadata({
  title: DASHBOARD_SPEC.metaTitle,
  description: DASHBOARD_SPEC.metaDescription,
  path: "/platform/dashboard",
});

export default function DashboardPage() {
  return <PlatformPageRenderer spec={DASHBOARD_SPEC} />;
}
