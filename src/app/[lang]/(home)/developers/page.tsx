import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { DeveloperPageRenderer } from "./_components/developer-page-renderer";
import { DEVELOPERS_HUB_SPEC } from "./_data/developer-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Developers",
  description: DEVELOPERS_HUB_SPEC.metaDescription,
  path: "/developers",
});

export default function DevelopersPage() {
  return <DeveloperPageRenderer spec={DEVELOPERS_HUB_SPEC} />;
}
