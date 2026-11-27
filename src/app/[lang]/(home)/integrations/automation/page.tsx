import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { AutomationPageView } from "./_components/automation-page-view";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === "vi";
  return buildPageMetadata({
    title: isVi ? "Tích hợp tự động hóa & khác" : "Automation and more integrations",
    description: isVi
      ? "Tự động hóa vận hành đặt hàng với Webhooks, Plugins, OPERO API & MCP, Zapier, Twilio, WhatsApp Business và Google Maps."
      : "Automate your ordering business with Webhooks, Plugins, the OPERO API and MCP, Zapier, Twilio, WhatsApp Business, and Google Maps.",
    path: "/integrations/automation",
  });
}

export default function AutomationIntegrationsPage() {
  return <AutomationPageView />;
}
