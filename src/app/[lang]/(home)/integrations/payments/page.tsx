import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { PaymentsPageView } from "./_components/payments-page-view";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === "vi";
  return buildPageMetadata({
    title: isVi ? "Tích hợp cổng thanh toán" : "Payment gateway integrations",
    description: isVi
      ? "Kết nối thanh toán với các cổng thanh toán và phương thức nội địa khách hàng của bạn quen dùng. Tra cứu nhà cung cấp theo quốc gia và hoạch định luồng thanh toán."
      : "Connect checkout to the payment gateways and local methods your customers use. Explore providers by country, then plan your payment flow.",
    path: "/integrations/payments",
  });
}

export default function PaymentsIntegrationsPage() {
  return <PaymentsPageView />;
}
