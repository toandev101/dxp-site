import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { AnalyticsPageView } from "./_components/analytics-page-view";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === "vi";
  return buildPageMetadata({
    title: isVi ? "Tích hợp phân tích & báo cáo" : "Analytics integrations",
    description: isVi
      ? "Theo dõi hiệu suất kinh doanh với báo cáo OPERO, Google Analytics 4, Meta Pixel, Google Tag Manager, xuất Excel, API và MCP."
      : "See how your ordering business performs with OPERO reports, Google Analytics 4, Meta Pixel, Google Tag Manager, Excel exports, the API, and MCP.",
    path: "/integrations/analytics",
  });
}

export default function AnalyticsIntegrationsPage() {
  return <AnalyticsPageView />;
}
