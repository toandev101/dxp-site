import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { IntegrationsDirectory } from "./_components/integrations-directory";

export const metadata: Metadata = buildPageMetadata({
  title: "All integrations",
  description:
    "Connect OPERO to your payment gateways, POS, middleware, delivery companies, marketplaces, loyalty, analytics, and automation tools.",
  path: "/integrations",
});

export default function IntegrationsPage() {
  return <IntegrationsDirectory />;
}
