import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { RESTAURANT_APP_SPEC } from "../_data/platform-pages-restaurant";
import { RESTAURANT_APP_SPEC_VI } from "../_data/platform-pages-restaurant-vi";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const spec = lang === "vi" ? RESTAURANT_APP_SPEC_VI : RESTAURANT_APP_SPEC;
  return buildPageMetadata({
    title: spec.metaTitle,
    description: spec.metaDescription,
    path: "/platform/restaurant-app",
  });
}

export default async function RestaurantAppPage({ params }: Props) {
  const { lang } = await params;
  const spec = lang === "vi" ? RESTAURANT_APP_SPEC_VI : RESTAURANT_APP_SPEC;
  return <PlatformPageRenderer spec={spec} />;
}
