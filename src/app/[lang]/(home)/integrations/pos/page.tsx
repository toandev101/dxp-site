import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PosPageView } from "./_components/pos-page-view";

export const metadata: Metadata = buildPageMetadata({
  title: "POS integrations",
  description:
    "Connect your POS to OPERO: menus and prices sync from the POS, online orders go straight into it, and order status stays in step.",
  path: "/integrations/pos",
});

export default function PosIntegrationsPage() {
  return <PosPageView />;
}
