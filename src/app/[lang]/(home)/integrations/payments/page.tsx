import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PaymentsPageView } from "./_components/payments-page-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Payment gateway integrations",
  description:
    "Connect checkout to the payment gateways and local methods your customers use. Explore providers by country, then plan your payment flow.",
  path: "/integrations/payments",
});

export default function PaymentsIntegrationsPage() {
  return <PaymentsPageView />;
}
