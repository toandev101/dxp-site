import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { MarketplacesPageView } from "./_components/marketplaces-page-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Online Marketplace Software",
  description:
    "Build a multi-vendor marketplace on Ordering.co with a multi-store storefront, merchant tools, delivery operations, and payouts under your brand.",
  path: "/solutions/marketplaces",
});

export default function MarketplacesSolutionPage() {
  return <MarketplacesPageView />;
}
