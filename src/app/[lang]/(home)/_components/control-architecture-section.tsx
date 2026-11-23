"use client";

import {
  ArrowRight,
  CreditCard,
  Globe,
  MessageCircle,
  Monitor,
  Smartphone,
  Store,
  Truck,
  Users,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { BrandLogo } from "@/components/layout/header";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";

export function ControlArchitectureSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const options = [
    {
      titleEn: "Brand and customer data",
      titleVi: "Thương hiệu & dữ liệu khách hàng",
      descEn: `Your brand, domain, data, and relationships. ${siteConfig.name} operates the platform on managed plans.`,
      descVi: `Thương hiệu, tên miền, dữ liệu và tệp khách hàng thuộc toàn quyền bạn. ${siteConfig.name} vận hành hạ tầng trên các gói quản lý.`,
      ctaEn: "Explore white label",
      ctaVi: "Khám phá white label",
      href: "/developers/white-label",
    },
    {
      titleEn: "APIs, webhooks, and MCP",
      titleVi: "API, webhooks và MCP",
      descEn: "Access orders, stores, catalogs, and delivery events. Connect AI tools through MCP.",
      descVi: "Truy cập toàn bộ đơn hàng, cửa hàng, thực đơn và sự kiện giao vận. Kết nối công cụ AI qua MCP.",
      ctaEn: "Explore API and MCP",
      ctaVi: "Khám phá API và MCP",
      href: "/developers",
    },
    {
      titleEn: "Source code options",
      titleVi: "Tùy chọn mã nguồn",
      descEn:
        "Frontend source code is included with every product. Backend licensing requires enterprise eligibility, approval, and a separate agreement.",
      descVi:
        "Mã nguồn Frontend đi kèm với mọi sản phẩm. Cấp phép mã nguồn Backend áp dụng theo thỏa thuận riêng cho khách hàng Enterprise.",
      ctaEn: "Read the license",
      ctaVi: "Xem chính sách mã nguồn",
      href: "/developers/source-code-license",
    },
    {
      titleEn: "Managed or enterprise deployment",
      titleVi: "Triển khai Cloud quản lý hoặc riêng biệt",
      descEn:
        "Managed hosting is included. With an enterprise package, deploy in your AWS, Google Cloud, Microsoft Azure, or Railway account.",
      descVi:
        "Bao gồm hạ tầng cloud quản lý sẵn. Với gói Enterprise, triển khai trực tiếp trên tài khoản AWS, Google Cloud, Azure hoặc Railway của bạn.",
      ctaEn: "Bring your own cloud",
      ctaVi: "Triển khai trên Cloud riêng",
      href: "/developers/bring-your-own-cloud",
    },
  ];

  return (
    <section id="control" className="bg-[#17181a] text-white py-20 lg:py-24">
      <Container>
        {/* Header Block */}
        <div className="max-w-2xl">
          <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.045em] leading-[1.1] text-white">
            {isVi ? (
              <>
                Thương hiệu của bạn ở tuyến đầu.
                <br />
                Linh hoạt tuyệt đối ở bên dưới.
              </>
            ) : (
              <>
                Your brand up front.
                <br />
                Flexibility underneath.
              </>
            )}
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17.5px] leading-[1.6] text-[#c4c6ca]">
            {isVi
              ? "Giữ toàn quyền kiểm soát thương hiệu, dữ liệu và quan hệ khách hàng. Chọn mô hình triển khai phù hợp nhất với vận hành của bạn."
              : "Keep control of your brand, data, and customer relationships. Choose the setup that fits your operation."}
          </p>
          <div className="mt-5">
            <Link
              href="/developers"
              className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[#92b5ff] hover:underline"
            >
              <span>{isVi ? "Khám phá các tùy chọn" : "Explore your options"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Exact 3-Node Architecture Diagram */}
        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_32px_1.15fr_32px_1fr] lg:gap-4">
          {/* Left Node: Your experience */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-5 text-[#92b5ff]">
              <Globe className="h-6 w-6" strokeWidth={1.6} />
              <Smartphone className="h-6 w-6" strokeWidth={1.6} />
              <Store className="h-6 w-6" strokeWidth={1.6} />
              <MessageCircle className="h-6 w-6" strokeWidth={1.6} />
            </div>
            <h3 className="mt-4 text-[18px] font-bold text-white">
              {isVi ? "Trải nghiệm của bạn" : "Your experience"}
            </h3>
            <p className="mt-1.5 text-[13.5px] text-[#989aa0]">Website · App · Marketplace · AI</p>
          </div>

          {/* Arrow 1 */}
          <div className="flex justify-center">
            <ArrowRight className="h-5 w-5 text-[#92b5ff] rotate-90 lg:rotate-0" />
          </div>

          {/* Center Bordered Box */}
          <div className="rounded-[10px] border border-[#34363a] bg-[#1c1d20]/60 px-6 py-9 text-center flex flex-col items-center">
            <BrandLogo forceDark size="lg" />
            <p className="mt-3 text-[14px] text-[#c4c6ca]">
              {isVi ? "Nền tảng kết nối của bạn" : "Your connected foundation"}
            </p>
            <p className="mt-2 text-[13px] font-medium text-[#92b5ff]">APIs, webhooks, and MCP</p>
          </div>

          {/* Arrow 2 */}
          <div className="flex justify-center">
            <ArrowRight className="h-5 w-5 text-[#92b5ff] rotate-90 lg:rotate-0" />
          </div>

          {/* Right Node: Your connected systems */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-5 text-[#92b5ff]">
              <Monitor className="h-6 w-6" strokeWidth={1.6} />
              <CreditCard className="h-6 w-6" strokeWidth={1.6} />
              <Truck className="h-6 w-6" strokeWidth={1.6} />
              <Users className="h-6 w-6" strokeWidth={1.6} />
            </div>
            <h3 className="mt-4 text-[18px] font-bold text-white">
              {isVi ? "Hệ thống kết nối của bạn" : "Your connected systems"}
            </h3>
            <p className="mt-1.5 text-[13.5px] text-[#989aa0]">POS · Payments · Delivery · CRM</p>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="my-14 border-t border-[#34363a]" />

        {/* 2x2 Options Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {options.map((opt) => (
            <div key={opt.titleEn}>
              <h3 className="text-[22px] font-bold tracking-[-0.025em] text-white">
                {isVi ? opt.titleVi : opt.titleEn}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-[#c4c6ca]">
                {isVi ? opt.descVi : opt.descEn}
              </p>
              <Link
                href={opt.href}
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#92b5ff] hover:underline"
              >
                <span>{isVi ? opt.ctaVi : opt.ctaEn}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
