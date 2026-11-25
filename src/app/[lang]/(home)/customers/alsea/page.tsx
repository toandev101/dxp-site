import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { AlseaStoryView } from "./_components/alsea-story-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Alsea: 10 restaurant brands, one ordering operation",
  description:
    "How Alsea runs the WOW+ app, ten brand storefronts, call centers, and delivery in Mexico and Colombia on Ordering.co.",
  path: "/customers/alsea",
});

export default function AlseaCustomerStoryPage() {
  return <AlseaStoryView />;
}
