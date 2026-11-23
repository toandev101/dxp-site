import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { AnalyticsPageView } from "./_components/analytics-page-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Analytics integrations",
  description:
    "See how your ordering business performs with Ordering.co reports, Google Analytics 4, Meta Pixel, Google Tag Manager, Excel exports, the API, and MCP.",
  path: "/integrations/analytics",
});

export default function AnalyticsIntegrationsPage() {
  return <AnalyticsPageView />;
}
