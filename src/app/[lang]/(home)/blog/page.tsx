import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { BlogHubView } from "./_components/blog-hub-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Your guide to success. Explore AI search reports, local SEO guides, and multi-location ordering playbooks.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogHubView />;
}
