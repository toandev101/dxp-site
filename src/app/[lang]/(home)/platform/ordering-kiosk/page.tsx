import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { ORDERING_KIOSK_SPEC } from "../_data/platform-pages-core";
import { ORDERING_KIOSK_SPEC_VI } from "../_data/platform-pages-core-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? ORDERING_KIOSK_SPEC_VI : ORDERING_KIOSK_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/platform/ordering-kiosk",
  });
}

export default async function OrderingKioskPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? ORDERING_KIOSK_SPEC_VI : ORDERING_KIOSK_SPEC;
  return <PlatformPageRenderer spec={spec} />;
}
