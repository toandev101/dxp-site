import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { MULTI_STORE_ORDERING_SPEC } from "../_data/platform-pages-core";
import { MULTI_STORE_ORDERING_SPEC_VI } from "../_data/platform-pages-core-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? MULTI_STORE_ORDERING_SPEC_VI : MULTI_STORE_ORDERING_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/platform/multi-store-ordering",
  });
}

export default async function MultiStoreOrderingPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? MULTI_STORE_ORDERING_SPEC_VI : MULTI_STORE_ORDERING_SPEC;
  return <PlatformPageRenderer spec={spec} />;
}
