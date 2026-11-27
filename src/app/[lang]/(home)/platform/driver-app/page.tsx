import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { DRIVER_APP_SPEC } from "../_data/platform-pages-operate";
import { DRIVER_APP_SPEC_VI } from "../_data/platform-pages-operate-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? DRIVER_APP_SPEC_VI : DRIVER_APP_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/platform/driver-app",
  });
}

export default async function DriverAppPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? DRIVER_APP_SPEC_VI : DRIVER_APP_SPEC;
  return <PlatformPageRenderer spec={spec} />;
}
