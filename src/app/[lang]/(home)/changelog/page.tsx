import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { ChangelogPageView } from "./_components/changelog-view";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === "vi";
  return buildPageMetadata({
    title: isVi ? "Nhật ký cập nhật sản phẩm" : "Product changelog",
    description: isVi
      ? "Khám phá các cập nhật mới nhất của OPERO cho kênh đặt hàng, chuỗi nhượng quyền, vận hành cửa hàng và giao hàng, API, Bảng điều khiển và Bảng điều khiển AI."
      : "Explore OPERO updates for ordering channels, franchise experiences, business and delivery operations, the API, Dashboard, and Dashboard AI.",
    path: "/changelog",
  });
}

export default function ChangelogPage() {
  return <ChangelogPageView />;
}
