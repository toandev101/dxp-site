import { siteConfig } from "@/lib/site-config";

export function buildPageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website" as const,
    },
    alternates: {
      canonical: path,
      languages: {
        "vi-VN": path,
        "en-US": `/en${path === "/" ? "" : path}`,
      },
    },
  };
}
