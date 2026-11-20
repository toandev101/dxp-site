import type { Metadata } from "next";
import { getDictionary } from "../../dictionaries";
import { buildPageMetadata } from "@/utils/metadata";
import { ProductsCatalog } from "./_components/products-catalog";
import { FinalCtaSection } from "../_components/final-cta-section";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return buildPageMetadata({
    title: t.meta_products_title,
    description: t.meta_products_desc,
    path: "/products",
  });
}

export default function ProductsPage() {
  return (
    <>
      <ProductsCatalog />
      <FinalCtaSection />
    </>
  );
}
