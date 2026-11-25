import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { StateOfAiSearchView } from "./_components/state-of-ai-search-view";

export const metadata: Metadata = buildPageMetadata({
  title: "State of AI Search 2026: The Enterprise Multi-Location Brand Report",
  description:
    "AI search in 2026 answers with citations. See how enterprise brands earn those citations with structured content, accurate data and clear trust signals.",
  path: "/blog/state-of-ai-search",
});

export default function StateOfAiSearchBlogPage() {
  return <StateOfAiSearchView />;
}
