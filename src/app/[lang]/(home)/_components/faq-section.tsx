"use client";

import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";

const LIVE_FAQS = [
  {
    id: "q1",
    qEn: "Do I need developers to get started?",
    qVi: "Tôi có cần lập trình viên để bắt đầu không?",
    aEn: `No. You can start with ${siteConfig.name} websites and apps configured for your business. Developers become relevant when you need a custom interface, integration, or workflow using the API, webhooks, SDKs, or MCP.`,
    aVi: `Không cần. Bạn có thể khởi chạy ngay website và ứng dụng ${siteConfig.name} cấu hình sẵn cho doanh nghiệp. Đội kỹ thuật chỉ cần khi bạn muốn tùy biến giao diện riêng hoặc tích hợp sâu qua API, webhooks, SDK hay MCP.`,
  },
  {
    id: "q2",
    qEn: "Can I use my own brand and domain?",
    qVi: "Tôi có thể dùng thương hiệu và tên miền riêng không?",
    aEn: `Yes. Your customer experience runs under your brand and domain, and you control your data and customer relationships. Branding does not transfer ownership of the ${siteConfig.name} platform.`,
    aVi: `Có. Toàn bộ trải nghiệm khách hàng chạy dưới thương hiệu và tên miền riêng của bạn, đồng thời bạn toàn quyền kiểm soát dữ liệu và quan hệ khách hàng.`,
  },
  {
    id: "q3",
    qEn: "Can I publish my own apps on the App Store and Google Play?",
    qVi: "Tôi có thể xuất bản ứng dụng riêng lên App Store và Google Play không?",
    aEn: `Yes, on every plan. Publish the customer apps yourself by following the documentation, or ask ${siteConfig.name} for support. App store review can affect your launch schedule.`,
    aVi: `Có, trên mọi gói dịch vụ. Bạn có thể tự phát hành ứng dụng theo tài liệu hướng dẫn hoặc nhờ đội ngũ ${siteConfig.name} hỗ trợ trực tiếp.`,
  },
  {
    id: "q4",
    qEn: `Which systems does ${siteConfig.name} connect to?`,
    qVi: `${siteConfig.name} kết nối với những hệ thống nào?`,
    aEn: "More than 50 payment gateways, more than 20 delivery partners, and more than 15 POS integrations, plus loyalty, CRM, analytics, and automation tools. Additional systems can be connected through the API and webhooks, subject to their technical requirements.",
    aVi: "Hơn 50 cổng thanh toán, hơn 20 đối tác giao vận và hơn 15 hệ thống POS cùng công cụ loyalty, CRM và đo lường. Các hệ thống khác có thể kết nối bổ sung qua API và Webhooks.",
  },
  {
    id: "q5",
    qEn: "Is the source code available?",
    qVi: "Có được cung cấp mã nguồn không?",
    aEn: `The frontend source code for the web storefront, customer apps, Merchant App, Driver App, and Dashboard is open source and included with every product. Backend source code is licensed only to enterprise organizations, under a separate agreement, after ${siteConfig.name} approves the organization.`,
    aVi: `Mã nguồn Frontend cho website, app khách hàng, Merchant App, Driver App và Dashboard là mã nguồn mở và đi kèm mọi sản phẩm. Mã nguồn Backend được cấp phép theo thỏa thuận riêng cho doanh nghiệp Enterprise.`,
  },
  {
    id: "q6",
    qEn: `Can ${siteConfig.name} run in my own cloud?`,
    qVi: `${siteConfig.name} có chạy được trên hạ tầng Cloud riêng không?`,
    aEn: `Yes, with an enterprise package. ${siteConfig.name} installs the same backend in your AWS, Google Cloud, Microsoft Azure, or Railway account. Other plans run on managed AWS infrastructure operated by ${siteConfig.name}.`,
    aVi: `Có, với gói Enterprise. Chúng tôi cài đặt nguyên vẹn backend trên tài khoản AWS, Google Cloud, Microsoft Azure hoặc Railway của bạn. Các gói khác vận hành trên hạ tầng AWS quản lý sẵn.`,
  },
  {
    id: "q7",
    qEn: "How long does it take to launch?",
    qVi: "Mất bao lâu để triển khai ra mắt?",
    aEn: "The scope sets the schedule. Catalog preparation, integrations, custom work, and app store review can all affect timing. Define your first working flow with the team before setting a launch date.",
    aVi: "Tiến độ phụ thuộc phạm vi triển khai: chuẩn bị danh mục món, tích hợp POS, tùy biến riêng và thời gian duyệt App Store/Google Play.",
  },
  {
    id: "q8",
    qEn: "Can I try it before I commit?",
    qVi: "Tôi có thể dùng thử trước khi cam kết không?",
    aEn: "Book a guided demo with our team, or explore the live restaurant and marketplace demos first.",
    aVi: "Hãy đặt lịch demo trực tiếp cùng đội ngũ chuyên gia hoặc trải nghiệm ngay các bản demo nhà hàng và sàn thương mại.",
  },
];

export function FaqSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal } = useUiStore();

  // Exact match to live Ordering.co: Q5 ("Is the source code available?") expanded by default
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ q5: true });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const leftCol = LIVE_FAQS.slice(0, 4);
  const rightCol = LIVE_FAQS.slice(4, 8);

  const renderItem = (item: (typeof LIVE_FAQS)[number]) => {
    const isOpen = !!openIds[item.id];
    return (
      <div key={item.id} className="border-t border-[var(--od-border)]">
        <button
          type="button"
          onClick={() => toggle(item.id)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
        >
          <span className="text-[16px] font-semibold text-[var(--od-text)]">
            {isVi ? item.qVi : item.qEn}
          </span>
          <span className="shrink-0 text-[var(--od-text-muted)]">
            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </button>
        {isOpen && (
          <div className="pb-5 text-[14.5px] leading-[1.65] text-[var(--od-text-muted)]">
            {isVi ? item.aVi : item.aEn}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" className="bg-[var(--od-bg)] border-t border-[var(--od-border)] py-16 lg:py-20">
      <Container>
        <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.045em] leading-[1.12] text-[var(--od-text)]">
          {isVi ? "Giải đáp câu hỏi thường gặp." : "Questions, answered."}
        </h2>
        <p className="mt-3 text-[16px] sm:text-[17.5px] text-[var(--od-text-muted)]">
          {isVi ? "Từ thiết lập ban đầu cho đến khi mở rộng quy mô lớn." : "From your first setup to the way you scale."}
        </p>

        {/* 2-Column Accordion Grid */}
        <div className="mt-10 grid grid-cols-1 gap-x-16 lg:grid-cols-2">
          <div className="border-b border-[var(--od-border)]">{leftCol.map(renderItem)}</div>
          <div className="border-b border-[var(--od-border)]">{rightCol.map(renderItem)}</div>
        </div>

        {/* Bottom Action Links */}
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
          <button
            type="button"
            onClick={() => openDemoModal("faq_book_demo")}
            className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline cursor-pointer"
          >
            <span>{isVi ? "Đặt lịch demo" : "Book a demo"}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <Link
            href="/demo"
            className="inline-flex items-center gap-2 text-[14.4px] font-semibold text-[var(--od-action-content)] hover:underline"
          >
            <span>{isVi ? "Xem bản demo trực tiếp" : "See a live demo"}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
