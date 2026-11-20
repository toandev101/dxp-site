import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: process.env.IMAGE_CACHE_TTL ? Number(process.env.IMAGE_CACHE_TTL) : 2678400,
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "*.dxpvietnam.com" },
      { protocol: "https", hostname: "*.dxpdemos.com" },
    ],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"],
          }
        : false,
  },

  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-slot",
      "lucide-react",
      "motion",
      "react-hook-form",
      "zod",
      "sonner",
      "zustand",
    ],
  },

  output: "standalone",
};

export default withBundleAnalyzer(nextConfig);
