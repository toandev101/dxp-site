"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { OrderOrbitShowcase } from "@/components/brand/order-orbit";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { OrderStatusChip } from "@/components/ui/status-chip";
import useDictionaries from "@/hooks/useDictionaries";

export function JourneySection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  return (
    <section id="how-it-works" className="bg-[var(--od-bg)] py-20 lg:py-24">
      <Container>
        {/* OPERO UI Kit Editorial 2-Column Section Header (.sec-head) */}
        <div className="opero-sec-head mb-10">
          <div>
            <p className="opero-label mb-3">{isVi ? "Vòng đời đơn hàng" : "Order lifecycle"}</p>
            <h2 className="text-[32px] sm:text-[40px] font-bold tracking-[-0.02em] leading-[1.1] text-[var(--ink)]">
              {isVi ? "Một đơn hàng. Một quy trình kết nối." : "One order. A connected operation."}
            </h2>
          </div>
          <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[var(--ink-mute)] max-w-[60ch]">
            {isVi
              ? "Mọi kênh bán, mọi chi nhánh và mọi chuyến giao đều vận hành đồng bộ trên cùng một nhịp Order Orbit."
              : "Every channel, every location, and every delivery working together on a single live Order Orbit."}
          </p>
        </div>

        {/* Interactive OPERO Order Orbit Live Telemetry Panel */}
        <div className="mb-8">
          <OrderOrbitShowcase isVi={isVi} />
        </div>

        {/* 4 Elevated Borderless White Stage Panels (OPERO UI Kit .panel) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stage 1: Make it easy to order */}
          <div className="flex flex-col rounded-[20px] bg-[var(--canvas)] p-5">
            <div className="aspect-square w-full overflow-hidden rounded-[12px] bg-[var(--canvas-soft)] p-3.5 flex items-center justify-center">
              <div className="w-full rounded-[14px] bg-[var(--canvas)] p-3 text-[var(--ink)]">
                <div className="flex items-center justify-between text-[10px] font-bold pb-2 border-b border-[var(--line-soft)]">
                  <span>Your Brand</span>
                  <span className="text-[#D91842]">Web · App</span>
                </div>
                <div className="relative mt-2.5 aspect-[16/10] w-full overflow-hidden rounded-[8px]">
                  <Image src="/images/hero-bowl-main.jpg" alt="Customer ordering" fill sizes="260px" className="object-cover" />
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold">Grilled chicken bowl</p>
                    <p className="text-[9.5px] text-[var(--ink-mute)]">Custom modifiers</p>
                  </div>
                  <span className="num rounded-full bg-[#D91842] px-2.5 py-0.5 text-[9.5px] font-semibold text-white">
                    $14.50
                  </span>
                </div>
              </div>
            </div>

            <h3 className="mt-5 text-[20px] font-semibold leading-[1.25] text-[var(--ink)]">
              {isVi ? "Đặt hàng dễ dàng." : "Make it easy to order."}
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--ink-mute)] flex-1">
              {isVi
                ? "Khách hàng đặt món qua website, app di động, Zalo Mini App hoặc trợ lý AI."
                : "Customers order through your website, app, marketplace, or AI agent."}
            </p>
            <Link
              href="/platform/ordering-web"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Khám phá kênh đặt hàng" : "Explore customer ordering"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Stage 2: Get your team moving */}
          <div className="flex flex-col rounded-[20px] bg-[var(--canvas)] p-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-[12px] bg-[var(--canvas-soft)]">
              <Image
                src="/images/journey-merchant.jpg"
                alt="A team member prepares an order beside the Merchant App on a tablet."
                fill
                sizes="(max-width: 768px) 100vw, 302px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-5 text-[20px] font-semibold leading-[1.25] text-[var(--ink)]">
              {isVi ? "Đội ngũ tiếp nhận tức thì." : "Get your team moving."}
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--ink-mute)] flex-1">
              {isVi
                ? "Đơn hàng về đúng chi nhánh. Nhân viên xác nhận và chuẩn bị ngay trên Merchant App."
                : "Orders reach the right location. Your team accepts and prepares them in the Merchant App."}
            </p>
            <Link
              href="/platform/ordering-merchant"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Khám phá Merchant" : "Explore Merchant"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Stage 3: Keep delivery connected */}
          <div className="flex flex-col rounded-[20px] bg-[var(--canvas)] p-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-[12px] bg-[var(--canvas-soft)]">
              <Image
                src="/images/journey-delivery.jpg"
                alt="A courier hands a takeaway order to a customer at the door."
                fill
                sizes="(max-width: 768px) 100vw, 302px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-5 text-[20px] font-semibold leading-[1.25] text-[var(--ink)]">
              {isVi ? "Giao hàng luôn kết nối." : "Keep delivery connected."}
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--ink-mute)] flex-1">
              {isVi
                ? "Giao bằng đội tài xế riêng hoặc tự động kết nối các hãng giao vận 3PL."
                : "Fulfill with your own drivers or connected third-party delivery providers."}
            </p>
            <Link
              href="/platform/ordering-delivery"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Khám phá giao vận" : "Explore delivery"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Stage 4: Run every location */}
          <div className="flex flex-col rounded-[20px] bg-[var(--canvas)] p-5">
            <div className="aspect-square w-full overflow-hidden rounded-[12px] bg-[var(--canvas-soft)] p-3.5 flex items-center justify-center">
              <div className="w-full rounded-[14px] bg-[var(--canvas)] p-3.5 text-[var(--ink)] space-y-2">
                <div className="flex items-center justify-between border-b border-[var(--line-soft)] pb-2">
                  <span className="text-[10.5px] font-semibold">Console · Stores</span>
                  <OrderStatusChip status="ready" className="text-[9.5px] px-2 py-0.5">
                    12 Open
                  </OrderStatusChip>
                </div>
                {[
                  { name: "Downtown Flagship", count: "48 orders", status: "ready" as const, tag: "Sẵn sàng" },
                  { name: "Airport Terminal", count: "31 orders", status: "cooking" as const, tag: "Đang làm" },
                  { name: "Westside Kitchen", count: "22 orders", status: "new" as const, tag: "Mới" },
                ].map((st) => (
                  <div
                    key={st.name}
                    className="flex items-center justify-between rounded-[8px] bg-[var(--canvas-soft)] px-2.5 py-2 text-[9.5px]"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="truncate font-semibold text-[var(--ink)]">{st.name}</p>
                      <p className="num text-[8.5px] text-[var(--ink-mute)]">{st.count}</p>
                    </div>
                    <OrderStatusChip status={st.status} className="text-[8.5px] px-2 py-0.5 shrink-0">
                      {isVi ? st.tag : st.status === "ready" ? "Ready" : st.status === "cooking" ? "Prep" : "New"}
                    </OrderStatusChip>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="mt-5 text-[20px] font-semibold leading-[1.25] text-[var(--ink)]">
              {isVi ? "Quản trị mọi chi nhánh." : "Run every location."}
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-[var(--ink-mute)] flex-1">
              {isVi
                ? "Quản lý cửa hàng, thực đơn, tồn kho, vùng giao và phí ship trên Dashboard. Giữ mọi hệ thống đồng bộ."
                : "Manage stores, menus, catalogs, availability, service zones, and fee rules from the Dashboard. Keep your systems connected."}
            </p>
            <Link
              href="/platform/dashboard"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Khám phá Dashboard" : "Explore the Dashboard"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Footer Foundation Strip */}
        <div className="mt-10 text-center text-[14.5px] text-[var(--ink-mute)]">
          {isVi
            ? "Kết nối đồng bộ với POS, thanh toán, CRM, loyalty và báo cáo phân tích của bạn."
            : "Connected to your POS, payments, CRM, loyalty, and analytics."}
        </div>
      </Container>
    </section>
  );
}
