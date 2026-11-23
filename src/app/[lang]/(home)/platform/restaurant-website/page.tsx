import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { RESTAURANT_WEBSITE_SPEC } from "../_data/platform-pages-restaurant";

export const metadata: Metadata = buildPageMetadata({
  title: RESTAURANT_WEBSITE_SPEC.metaTitle,
  description: RESTAURANT_WEBSITE_SPEC.metaDescription,
  path: "/platform/restaurant-website",
});

export default function RestaurantWebsitePage() {
  return <PlatformPageRenderer spec={RESTAURANT_WEBSITE_SPEC} />;
}
