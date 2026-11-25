import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformOverviewView } from "./_components/platform-overview-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Platform overview",
  description:
    "Explore the customer ordering surfaces, operations and integration questions that can be planned together with Ordering.co.",
  path: "/platform",
});

export default function PlatformOverviewPage() {
  return <PlatformOverviewView />;
}
