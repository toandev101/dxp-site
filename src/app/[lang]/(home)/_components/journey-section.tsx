"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";

export function JourneySection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  return (
    <section id="how-it-works" className="bg-[var(--od-bg)] py-20 lg:py-24">
      <Container>
        <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.045em] leading-[1.12] text-[var(--od-text)]">
          {isVi ? "Một đơn hàng. Một quy trình kết nối." : "One order. A connected operation."}
        </h2>
        <p className="mt-3 text-[16px] sm:text-[17.6px] text-[var(--od-text-muted)]">
          {isVi
            ? "Mọi kênh bán, mọi chi nhánh và mọi chuyến giao đều vận hành đồng bộ."
            : "Every channel, every location, and every delivery, working together."}
        </p>

        {/* 4 Square Visual Stage Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stage 1: Make it easy to order */}
          <div className="flex flex-col">
            <div className="aspect-square w-full overflow-hidden rounded-[8px] border border-[var(--od-border)] bg-[#f4f5f6] p-4 flex items-center justify-center">
              <div className="w-full rounded-xl bg-white border border-slate-200 p-3 shadow-sm text-[#0b0c0d]">
                <div className="flex items-center justify-between text-[10px] font-bold pb-2 border-b border-slate-100">
                  <span>Your Brand</span>
                  <span className="text-[#266df0]">Web · App</span>
                </div>
                <div className="relative mt-2.5 aspect-[16/10] w-full overflow-hidden rounded-lg">
                  <Image src="/images/hero-bowl-main.jpg" alt="Customer ordering" fill sizes="260px" className="object-cover" />
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold">Grilled chicken bowl</p>
                    <p className="text-[9.5px] text-slate-500">Custom modifiers</p>
                  </div>
                  <span className="rounded bg-[#266df0] px-2 py-1 text-[9.5px] font-semibold text-white">
                    $14.50
                  </span>
                </div>
              </div>
            </div>

            <h3 className="mt-5 text-[20.8px] font-bold tracking-[-0.025em] leading-[1.2] text-[var(--od-text)]">
              {isVi ? "Đặt hàng dễ dàng." : "Make it easy to order."}
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)] flex-1">
              {isVi
                ? "Khách hàng đặt món qua website, app di động, sàn thương mại hoặc trợ lý AI."
                : "Customers order through your website, app, marketplace, or AI agent."}
            </p>
            <Link
              href="/products#build"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Khám phá kênh đặt hàng" : "Explore customer ordering"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Stage 2: Get your team moving */}
          <div className="flex flex-col">
            <div className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-[var(--od-surface-subtle)]">
              <Image
                src="/images/journey-merchant.jpg"
                alt="A team member prepares an order beside the Merchant App on a tablet."
                fill
                sizes="(max-width: 768px) 100vw, 302px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-5 text-[20.8px] font-bold tracking-[-0.025em] leading-[1.2] text-[var(--od-text)]">
              {isVi ? "Đội ngũ tiếp nhận tức thì." : "Get your team moving."}
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)] flex-1">
              {isVi
                ? "Đơn hàng về đúng chi nhánh. Nhân viên xác nhận và chuẩn bị ngay trên Merchant App."
                : "Orders reach the right location. Your team accepts and prepares them in the Merchant App."}
            </p>
            <Link
              href="/products#operate"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Khám phá Merchant" : "Explore Merchant"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Stage 3: Keep delivery connected */}
          <div className="flex flex-col">
            <div className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-[var(--od-surface-subtle)]">
              <Image
                src="/images/journey-delivery.jpg"
                alt="A courier hands a takeaway order to a customer at the door."
                fill
                sizes="(max-width: 768px) 100vw, 302px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-5 text-[20.8px] font-bold tracking-[-0.025em] leading-[1.2] text-[var(--od-text)]">
              {isVi ? "Giao hàng luôn kết nối." : "Keep delivery connected."}
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)] flex-1">
              {isVi
                ? "Giao bằng đội tài xế riêng hoặc tự động kết nối các hãng giao vận 3PL."
                : "Fulfill with your own drivers or connected third-party delivery providers."}
            </p>
            <Link
              href="/products#operate"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Khám phá giao vận" : "Explore delivery"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Stage 4: Run every location */}
          <div className="flex flex-col">
            <div className="aspect-square w-full overflow-hidden rounded-[8px] border border-[var(--od-border)] bg-[#f4f5f6] p-4 flex items-center justify-center">
              <div className="w-full rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm text-[#0b0c0d] space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[10.5px] font-bold">Dashboard · Stores</span>
                  <span className="rounded-full bg-[#e7f8f0] px-2 py-0.5 text-[9px] font-bold text-[#059669]">
                    12 Open
                  </span>
                </div>
                {[
                  { name: "Downtown Flagship", status: "Active", count: "48 orders" },
                  { name: "Airport Terminal", status: "Active", count: "31 orders" },
                  { name: "Westside Kitchen", status: "Busy", count: "22 orders" },
                ].map((st) => (
                  <div
                    key={st.name}
                    className="flex items-center justify-between rounded-md bg-[#f6f7f7] px-2.5 py-2 text-[9.5px]"
                  >
                    <div>
                      <p className="font-semibold text-[#0b0c0d]">{st.name}</p>
                      <p className="text-[8.5px] text-slate-500">{st.count}</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-[#00d17e]" />
                  </div>
                ))}
              </div>
            </div>

            <h3 className="mt-5 text-[20.8px] font-bold tracking-[-0.025em] leading-[1.2] text-[var(--od-text)]">
              {isVi ? "Quản trị mọi chi nhánh." : "Run every location."}
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)] flex-1">
              {isVi
                ? "Quản lý cửa hàng, thực đơn, tồn kho, vùng giao và phí ship trên Dashboard. Giữ mọi hệ thống đồng bộ."
                : "Manage stores, menus, catalogs, availability, service zones, and fee rules from the Dashboard. Keep your systems connected."}
            </p>
            <Link
              href="/products#operate"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Khám phá Dashboard" : "Explore the Dashboard"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Footer Foundation Strip */}
        <div className="mt-14 border-t border-[var(--od-border)] pt-6 text-center text-[15px] text-[var(--od-text-muted)]">
          {isVi
            ? "Kết nối đồng bộ với POS, thanh toán, CRM, loyalty và báo cáo phân tích của bạn."
            : "Connected to your POS, payments, CRM, loyalty, and analytics."}
        </div>
      </Container>
    </section>
  );
}
