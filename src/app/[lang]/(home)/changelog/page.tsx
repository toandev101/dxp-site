import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { ChangelogPageView } from "./_components/changelog-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Product changelog",
  description:
    "Explore OPERO updates for ordering channels, franchise experiences, business and delivery operations, the API, Dashboard, and Dashboard AI.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return <ChangelogPageView />;
}
