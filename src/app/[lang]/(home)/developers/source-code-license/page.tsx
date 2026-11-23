import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { DeveloperPageRenderer } from "../_components/developer-page-renderer";
import { SOURCE_CODE_LICENSE_SPEC } from "../_data/developer-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Source code license",
  description: SOURCE_CODE_LICENSE_SPEC.metaDescription,
  path: "/developers/source-code-license",
});

export default function SourceCodeLicensePage() {
  return <DeveloperPageRenderer spec={SOURCE_CODE_LICENSE_SPEC} />;
}
