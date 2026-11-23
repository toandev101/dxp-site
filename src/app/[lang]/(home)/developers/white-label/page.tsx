import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { DeveloperPageRenderer } from "../_components/developer-page-renderer";
import { WHITE_LABEL_SPEC } from "../_data/developer-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "White Label Ordering Platform",
  description: WHITE_LABEL_SPEC.metaDescription,
  path: "/developers/white-label",
});

export default function WhiteLabelPage() {
  return <DeveloperPageRenderer spec={WHITE_LABEL_SPEC} />;
}
