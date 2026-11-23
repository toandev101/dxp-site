import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { DeveloperPageRenderer } from "../_components/developer-page-renderer";
import { BYOC_SPEC } from "../_data/developer-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Bring your own cloud",
  description: BYOC_SPEC.metaDescription,
  path: "/developers/bring-your-own-cloud",
});

export default function BringYourOwnCloudPage() {
  return <DeveloperPageRenderer spec={BYOC_SPEC} />;
}
