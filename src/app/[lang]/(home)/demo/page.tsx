import type { Metadata } from "next";
import { getDictionary } from "../../dictionaries";
import { buildPageMetadata } from "@/utils/metadata";
import { DemoFormPageClient } from "./_components/demo-form";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return buildPageMetadata({
    title: t.meta_demo_title,
    description: t.meta_demo_desc,
    path: "/demo",
  });
}

export default function DemoPage() {
  return <DemoFormPageClient />;
}
