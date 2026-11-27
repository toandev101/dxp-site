import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PosPageView } from "./_components/pos-page-view";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === "vi";
  return buildPageMetadata({
    title: isVi ? "Tích hợp POS" : "POS integrations",
    description: isVi
      ? "Kết nối POS của bạn với OPERO: đồng bộ thực đơn và giá bán từ POS, đẩy đơn hàng trực tuyến thẳng vào POS và cập nhật trạng thái hai chiều."
      : "Connect your POS to OPERO: menus and prices sync from the POS, online orders go straight into it, and order status stays in step.",
    path: "/integrations/pos",
  });
}

export default function PosIntegrationsPage() {
  return <PosPageView />;
}
