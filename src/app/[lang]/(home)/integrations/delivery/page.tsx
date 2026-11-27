import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { DeliveryPageView } from "./_components/delivery-page-view";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === "vi";
  return buildPageMetadata({
    title: isVi ? "Tích hợp mạng lưới giao hàng" : "Delivery network integrations",
    description: isVi
      ? "Kết nối đối tác giao hàng và đội ngũ tài xế nội bộ với OPERO. Mỗi đơn hàng được điều phối tự động kèm cập nhật trạng thái trực tiếp cho bạn và khách hàng."
      : "Connect delivery companies and your own drivers to OPERO. Each delivery is assigned automatically, with status updates for you and your customer.",
    path: "/integrations/delivery",
  });
}

export default function DeliveryIntegrationsPage() {
  return <DeliveryPageView />;
}
