import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { DeliveryPageView } from "./_components/delivery-page-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Delivery network integrations",
  description:
    "Connect delivery companies and your own drivers to OPERO. Each delivery is assigned automatically, with status updates for you and your customer.",
  path: "/integrations/delivery",
});

export default function DeliveryIntegrationsPage() {
  return <DeliveryPageView />;
}
