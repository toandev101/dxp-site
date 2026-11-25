import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { AutomationPageView } from "./_components/automation-page-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Automation and more integrations",
  description:
    "Automate your ordering business with Webhooks, Plugins, the OPERO API and MCP, Zapier, Twilio, WhatsApp Business, and Google Maps.",
  path: "/integrations/automation",
});

export default function AutomationIntegrationsPage() {
  return <AutomationPageView />;
}
