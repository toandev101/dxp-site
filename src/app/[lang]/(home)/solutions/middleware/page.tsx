import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { SolutionPageRenderer } from "../_components/solution-page-renderer";
import { MIDDLEWARE_SPEC } from "../_data/solution-pages-builders";

export const metadata: Metadata = buildPageMetadata({
  title: MIDDLEWARE_SPEC.metaTitle,
  description: MIDDLEWARE_SPEC.metaDescription,
  path: "/solutions/middleware",
});

export default function MiddlewareSolutionPage() {
  return <SolutionPageRenderer spec={MIDDLEWARE_SPEC} />;
}
