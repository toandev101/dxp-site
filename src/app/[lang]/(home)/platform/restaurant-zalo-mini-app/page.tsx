import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PlatformPageRenderer } from "../_components/platform-page-renderer";
import { RESTAURANT_ZALO_MINI_APP_SPEC } from "../_data/platform-pages-restaurant";

export const metadata: Metadata = buildPageMetadata({
  title: RESTAURANT_ZALO_MINI_APP_SPEC.metaTitle,
  description: RESTAURANT_ZALO_MINI_APP_SPEC.metaDescription,
  path: "/platform/restaurant-zalo-mini-app",
});

export default function RestaurantZaloMiniAppPage() {
  return <PlatformPageRenderer spec={RESTAURANT_ZALO_MINI_APP_SPEC} />;
}
