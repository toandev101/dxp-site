import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { LoyaltyPageView } from "./_components/loyalty-page-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Loyalty & CRM integrations",
  description:
    "Reward customers with Ordering Loyalty points, cash wallet, and levels, and connect HubSpot, Mailchimp, and Spoonity to your customer and marketing stack.",
  path: "/integrations/loyalty",
});

export default function LoyaltyIntegrationsPage() {
  return <LoyaltyPageView />;
}
