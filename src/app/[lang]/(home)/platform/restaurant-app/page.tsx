import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { RESTAURANT_APP_SPEC } from "../_data/platform-pages-restaurant";

export const metadata: Metadata = buildPageMetadata({
  title: RESTAURANT_APP_SPEC.metaTitle,
  description: RESTAURANT_APP_SPEC.metaDescription,
  path: "/platform/restaurant-app",
});

export default function RestaurantAppPage() {
  return <PlatformPageRenderer spec={RESTAURANT_APP_SPEC} />;
}
