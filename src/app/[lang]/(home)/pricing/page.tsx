import type { Metadata } from "next";
import { getDictionary } from "../../dictionaries";
import { buildPageMetadata } from "@/utils/metadata";
import { PricingClient } from "./_components/pricing-client";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return buildPageMetadata({
    title: t.meta_pricing_title,
    description: t.meta_pricing_desc,
    path: "/pricing",
  });
}

export default function PricingPage() {
  return <PricingClient />;
}
