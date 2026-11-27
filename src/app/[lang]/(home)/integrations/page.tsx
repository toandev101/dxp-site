import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { IntegrationsDirectory } from "./_components/integrations-directory";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === "vi";
  return buildPageMetadata({
    title: isVi ? "Tất cả tích hợp" : "All integrations",
    description: isVi
      ? "Kết nối OPERO với cổng thanh toán, hệ thống POS, middleware, đối tác giao hàng, sàn giao đồ ăn, loyalty, phân tích và công cụ tự động hóa."
      : "Connect OPERO to your payment gateways, POS, middleware, delivery companies, marketplaces, loyalty, analytics, and automation tools.",
    path: "/integrations",
  });
}

export default function IntegrationsPage() {
  return <IntegrationsDirectory />;
}
