import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { AboutPageView } from "./_components/about-view";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === "vi";
  return buildPageMetadata({
    title: isVi ? "Về chúng tôi" : "About",
    description: isVi
      ? "OPERO là hạ tầng đặt hàng toàn diện cho nhà hàng và thương mại địa phương: xây dựng trải nghiệm, vận hành mọi đơn hàng và kết nối hệ thống của bạn."
      : "OPERO is the ordering infrastructure for restaurants and local commerce: build the experience, operate every order, and connect your systems.",
    path: "/company/about",
  });
}

export default function CompanyAboutPage() {
  return <AboutPageView />;
}
