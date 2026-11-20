import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";

import { getDictionary } from "../../dictionaries";
import { buildPageMetadata } from "@/utils/metadata";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { SOLUTIONS_DATA } from "@/constants/site-data";
import { FinalCtaSection } from "../_components/final-cta-section";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return buildPageMetadata({
    title: t.meta_solutions_title,
    description: t.meta_solutions_desc,
    path: "/solutions",
  });
}

export default async function SolutionsPage({ params }: Props) {
  const { lang } = await params;
  const isVi = lang === "vi";

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 to-white py-16 lg:py-24 border-b border-c-border">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60" />
        <Container className="relative z-10 text-center max-w-3xl">
          <Badge variant="primary" className="mb-4">
            {isVi ? "Giải pháp theo ngành hàng" : "Industry Solutions"}
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-c-dark sm:text-5xl">
            {isVi
              ? "Hạ tầng đặt hàng thích ứng với mọi mô hình kinh doanh."
              : "Ordering infrastructure tailored to your business model."}
          </h1>
          <p className="mt-4 text-base text-c-description sm:text-lg">
            {isVi
              ? "Từ một cửa hàng F&B đến tập đoàn nhượng quyền hàng nghìn điểm bán và sàn giao hàng đa nhà bán."
              : "From independent restaurants reclaiming 30% app commissions to global franchises and multi-vendor delivery marketplaces."}
          </p>
        </Container>
      </section>

      <Container className="py-16 space-y-10">
        {SOLUTIONS_DATA.map((sol) => (
          <div
            key={sol.id}
            id={sol.id}
            className="scroll-mt-24 rounded-3xl border border-c-border bg-white p-7 sm:p-10 shadow-bx-card grid grid-cols-1 gap-8 lg:grid-cols-12 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center rounded-full bg-c-primary-soft px-3 py-1 text-xs font-bold text-c-primary">
                {isVi ? sol.metricsVi : sol.metricsEn}
              </span>
              <h2 className="text-2xl font-extrabold text-c-dark sm:text-3xl">
                {isVi ? sol.titleVi : sol.titleEn}
              </h2>
              <p className="text-sm font-semibold text-c-primary">
                {isVi ? sol.subtitleVi : sol.subtitleEn}
              </p>
              <p className="text-base leading-relaxed text-c-description">
                {isVi ? sol.descriptionVi : sol.descriptionEn}
              </p>
              <div className="pt-2">
                <Button asChild>
                  <Link href="/demo">
                    {isVi ? "Nhận tư vấn giải pháp này" : "Talk to a Solutions Architect"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-c-surface border border-c-border p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-c-muted">
                {isVi ? "Tính năng nổi bật đi kèm" : "Included Capabilities"}
              </p>
              <ul className="mt-4 space-y-3">
                {(isVi ? sol.featuresVi : sol.featuresEn).map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm font-medium text-c-base">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-c-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Container>

      <FinalCtaSection />
    </>
  );
}
