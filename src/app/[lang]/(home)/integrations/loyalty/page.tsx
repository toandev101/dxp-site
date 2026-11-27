import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { LoyaltyPageView } from "./_components/loyalty-page-view";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === "vi";
  return buildPageMetadata({
    title: isVi ? "Tích hợp Khách hàng thân thiết & CRM" : "Loyalty & CRM integrations",
    description: isVi
      ? "Thưởng điểm, ví tiền mặt và hạng thành viên với Ordering Loyalty, đồng thời kết nối HubSpot, Mailchimp và Spoonity với hệ thống marketing của bạn."
      : "Reward customers with Ordering Loyalty points, cash wallet, and levels, and connect HubSpot, Mailchimp, and Spoonity to your customer and marketing stack.",
    path: "/integrations/loyalty",
  });
}

export default function LoyaltyIntegrationsPage() {
  return <LoyaltyPageView />;
}
