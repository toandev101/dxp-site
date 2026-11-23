"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import {
  AiWhatsappPreview,
  BusinessAppPreview,
  DriverAppPreview,
  MarketplaceAppPreview,
  MarketplaceWebPreview,
  RestaurantAppPreview,
  RestaurantWebPreview,
} from "./demo-previews";

export function DemoCatalog() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal } = useUiStore();

  return (
    <section className="bg-[var(--od-bg)] py-14 sm:py-20">
      <Container className="space-y-16">
        {/* Top Section Head */}
        <div className="max-w-[46rem]">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-0.025em] leading-[1.04] text-[var(--od-text)]">
            {isVi ? "Chọn trải nghiệm khách hàng để khám phá." : "Choose a customer experience to explore."}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
            {isVi
              ? "Trải nghiệm cảm giác đặt hàng khi khách chọn giữa nhiều cửa hàng hoặc đặt trực tiếp từ một thương hiệu nhà hàng."
              : "See how ordering feels when customers choose between several businesses or order from one restaurant brand."}
          </p>
        </div>

        {/* GROUP 1: Marketplace (#marketplace) */}
        <section id="marketplace" className="scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--od-border)] pb-4">
            <div>
              <h3 className="text-[20px] sm:text-[24px] font-bold tracking-[-0.025em] leading-[1.15] text-[var(--od-text)]">
                {isVi ? "Marketplace: nhiều cửa hàng" : "Marketplace: multiple businesses"}
              </h3>
              <p className="mt-1.5 text-[15px] text-[var(--od-text-muted)]">
                {isVi
                  ? "Khách hàng duyệt qua nhiều thương hiệu, sau đó chọn cửa hàng và sản phẩm."
                  : "Customers browse businesses, then choose stores and products."}
              </p>
            </div>
            <Link
              href="/solutions#marketplaces"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Khám phá giải pháp Marketplace" : "Explore marketplace solutions"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Card 1: Marketplace website */}
            <article className="flex flex-col overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)]">
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)]">
                <MarketplaceWebPreview />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="w-fit rounded-full border border-[var(--od-border)] px-2.5 py-1 text-[12px] font-medium text-[var(--od-text-muted)]">
                  Web
                </span>
                <h4 className="mt-3 text-[20px] font-bold leading-[1.5] text-[var(--od-text)]">
                  {isVi ? "Website Marketplace" : "Marketplace website"}
                </h4>
                <p className="mt-1 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Duyệt nhiều doanh nghiệp, sau đó chọn cửa hàng và sản phẩm."
                    : "Browse multiple businesses, then choose stores and products."}
                </p>

                <div className="mt-auto pt-6 space-y-3">
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://v26-orderingv1.orderingplus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                    >
                      <span>{isVi ? "Mở demo web" : "Open web demo"}</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--od-text-muted)]" />
                    </a>
                  </div>
                  <Link
                    href="/platform/ordering-web"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
                  >
                    <span>{isVi ? "Khám phá Ordering Web" : "Explore Ordering Web"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 2: Marketplace app */}
            <article className="flex flex-col overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)]">
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)]">
                <MarketplaceAppPreview />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="w-fit rounded-full border border-[var(--od-border)] px-2.5 py-1 text-[12px] font-medium text-[var(--od-text-muted)]">
                  iOS and Android
                </span>
                <h4 className="mt-3 text-[20px] font-bold leading-[1.5] text-[var(--od-text)]">
                  {isVi ? "Ứng dụng Marketplace" : "Marketplace app"}
                </h4>
                <p className="mt-1 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Trải nghiệm ứng dụng sàn đa gian hàng ngay trên điện thoại."
                    : "Explore the marketplace customer experience on a phone."}
                </p>

                <div className="mt-auto pt-6 space-y-3">
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://apps.apple.com/us/app/marketplace-app-v26/id6752963060"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                    >
                      <span>App Store</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--od-text-muted)]" />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.ordering.customertwo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                    >
                      <span>Google Play</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--od-text-muted)]" />
                    </a>
                  </div>
                  <Link
                    href="/platform/ordering-apps"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
                  >
                    <span>{isVi ? "Khám phá Ordering Apps" : "Explore Ordering Apps"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* GROUP 2: Restaurant (#restaurant) */}
        <section id="restaurant" className="scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--od-border)] pb-4">
            <div>
              <h3 className="text-[20px] sm:text-[24px] font-bold tracking-[-0.025em] leading-[1.15] text-[var(--od-text)]">
                {isVi
                  ? "Nhà hàng: một thương hiệu, một hoặc nhiều chi nhánh"
                  : "Restaurant: one brand, one or many locations"}
              </h3>
              <p className="mt-1.5 text-[15px] text-[var(--od-text-muted)]">
                {isVi
                  ? "Trải nghiệm đặt hàng cho nhà hàng đơn lẻ, chuỗi đa chi nhánh hoặc hệ thống nhượng quyền."
                  : "Explore ordering for a single restaurant, a multi-location brand, or a franchise network."}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <Link
                href="/solutions#restaurants"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{isVi ? "Khám phá nhà hàng" : "Explore restaurants"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/solutions#franchises"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{isVi ? "Khám phá nhượng quyền" : "Explore franchises"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Card 3: Restaurant website */}
            <article className="flex flex-col overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)]">
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)]">
                <RestaurantWebPreview />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="w-fit rounded-full border border-[var(--od-border)] px-2.5 py-1 text-[12px] font-medium text-[var(--od-text-muted)]">
                  Web
                </span>
                <h4 className="mt-3 text-[20px] font-bold leading-[1.5] text-[var(--od-text)]">
                  {isVi ? "Website Nhà hàng" : "Restaurant website"}
                </h4>
                <p className="mt-1 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Xem thực đơn nhà hàng, tùy chọn topping và đặt đơn trực tiếp."
                    : "Browse a restaurant menu, customize items, and place an order."}
                </p>

                <div className="mt-auto pt-6 space-y-3">
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://pizzahutdemo.franchises.orderingplus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                    >
                      <span>{isVi ? "Mở demo web" : "Open web demo"}</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--od-text-muted)]" />
                    </a>
                  </div>
                  <Link
                    href="/platform/ordering-web"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
                  >
                    <span>{isVi ? "Khám phá Ordering Web" : "Explore Ordering Web"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 4: Restaurant app */}
            <article className="flex flex-col overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)]">
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)]">
                <RestaurantAppPreview />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="w-fit rounded-full border border-[var(--od-border)] px-2.5 py-1 text-[12px] font-medium text-[var(--od-text-muted)]">
                  iOS and Android
                </span>
                <h4 className="mt-3 text-[20px] font-bold leading-[1.5] text-[var(--od-text)]">
                  {isVi ? "Ứng dụng Nhà hàng" : "Restaurant app"}
                </h4>
                <p className="mt-1 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Khám phá ứng dụng khách hàng cho một hoặc nhiều chi nhánh nhà hàng."
                    : "Explore the restaurant customer app for one or many locations."}
                </p>

                <div className="mt-auto pt-6 space-y-3">
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://apps.apple.com/mx/app/franchise-pizzapp/id6753997032"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                    >
                      <span>App Store</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--od-text-muted)]" />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.franchisepizzapp.franchiseapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                    >
                      <span>Google Play</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--od-text-muted)]" />
                    </a>
                  </div>
                  <Link
                    href="/platform/ordering-apps"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
                  >
                    <span>{isVi ? "Khám phá Ordering Apps" : "Explore Ordering Apps"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* GROUP 3: Operate the business and deliveries (#operations) */}
        <section id="operations" className="scroll-mt-24">
          <div className="border-b border-[var(--od-border)] pb-4">
            <h3 className="text-[20px] sm:text-[24px] font-bold tracking-[-0.025em] leading-[1.15] text-[var(--od-text)]">
              {isVi ? "Vận hành cửa hàng và giao hàng" : "Operate the business and deliveries"}
            </h3>
            <p className="mt-1.5 text-[15px] text-[var(--od-text-muted)]">
              {isVi
                ? "Khám phá các ứng dụng dành cho đội ngũ cửa hàng và tài xế giao hàng."
                : "Explore the apps used by the business and driver sides."}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Card 5: Business app */}
            <article className="flex flex-col overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)]">
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)]">
                <BusinessAppPreview />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="w-fit rounded-full border border-[var(--od-border)] px-2.5 py-1 text-[12px] font-medium text-[var(--od-text-muted)]">
                  iOS and Android
                </span>
                <h4 className="mt-3 text-[20px] font-bold leading-[1.5] text-[var(--od-text)]">
                  {isVi ? "Ứng dụng Cửa hàng (Business app)" : "Business app"}
                </h4>
                <p className="mt-1 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Khám phá luồng nhận đơn mới và vận hành cửa hàng hằng ngày."
                    : "Explore incoming orders and day-to-day business operations."}
                </p>

                <div className="mt-auto pt-6 space-y-3">
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://apps.apple.com/mx/app/business-app-v26/id6526502488"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                    >
                      <span>App Store</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--od-text-muted)]" />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.orderingplus.storeapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                    >
                      <span>Google Play</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--od-text-muted)]" />
                    </a>
                  </div>

                  {/* Exact Access Login Note */}
                  <p className="text-[13px] text-[var(--od-text-muted)] pt-1">
                    {isVi ? "Cần tài khoản đăng nhập demo. " : "A demo login is required. "}
                    <button
                      type="button"
                      onClick={() => openDemoModal("Business app access")}
                      className="font-semibold text-[var(--od-action-content)] underline underline-offset-2 cursor-pointer"
                    >
                      {isVi ? "Đặt lịch demo" : "Book a demo"}
                    </button>
                    {isVi ? " để nhận quyền truy cập." : " to get access."}
                  </p>

                  <Link
                    href="/platform/ordering-merchant"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
                  >
                    <span>{isVi ? "Khám phá Ordering Merchant" : "Explore Ordering Merchant"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 6: Driver app */}
            <article className="flex flex-col overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)]">
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)]">
                <DriverAppPreview />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="w-fit rounded-full border border-[var(--od-border)] px-2.5 py-1 text-[12px] font-medium text-[var(--od-text-muted)]">
                  iOS and Android
                </span>
                <h4 className="mt-3 text-[20px] font-bold leading-[1.5] text-[var(--od-text)]">
                  {isVi ? "Ứng dụng Tài xế (Driver app)" : "Driver app"}
                </h4>
                <p className="mt-1 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Khám phá quy trình nhận chuyến và cập nhật trạng thái giao hàng."
                    : "Explore assigned deliveries and order-status updates."}
                </p>

                <div className="mt-auto pt-6 space-y-3">
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://apps.apple.com/mx/app/driver-app-v26/id6526462318"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                    >
                      <span>App Store</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--od-text-muted)]" />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.orderingplus.driverapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                    >
                      <span>Google Play</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--od-text-muted)]" />
                    </a>
                  </div>

                  {/* Exact Access Login Note */}
                  <p className="text-[13px] text-[var(--od-text-muted)] pt-1">
                    {isVi ? "Cần tài khoản đăng nhập demo. " : "A demo login is required. "}
                    <button
                      type="button"
                      onClick={() => openDemoModal("Driver app access")}
                      className="font-semibold text-[var(--od-action-content)] underline underline-offset-2 cursor-pointer"
                    >
                      {isVi ? "Đặt lịch demo" : "Book a demo"}
                    </button>
                    {isVi ? " để nhận quyền truy cập." : " to get access."}
                  </p>

                  <Link
                    href="/platform/driver-app"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
                  >
                    <span>{isVi ? "Khám phá Driver App" : "Explore Driver App"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* GROUP 4: AI ordering agents — Wide Horizontal Split Card (#ai-agents) */}
        <section id="ai-agents" className="scroll-mt-24">
          <div className="border-b border-[var(--od-border)] pb-4">
            <h3 className="text-[20px] sm:text-[24px] font-bold tracking-[-0.025em] leading-[1.15] text-[var(--od-text)]">
              {isVi ? "AI ordering agents" : "AI ordering agents"}
            </h3>
            <p className="mt-1.5 text-[15px] text-[var(--od-text-muted)]">
              {isVi
                ? "Cho phép khách đặt món qua hội thoại. Không có bản demo mở công khai, đội ngũ của chúng tôi sẽ trình bày trực tiếp cho bạn."
                : "Let customers order through conversation. There is no public demo to open, so the team walks you through it."}
            </p>
          </div>

          <article className="mt-6 flex flex-col md:flex-row-reverse overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)]">
            {/* Right Media (42% width on desktop, top on mobile) */}
            <div className="w-full md:w-[42%] shrink-0 aspect-[4/3] md:aspect-auto md:min-h-[380px] border-b md:border-b-0 md:border-l border-[var(--od-border)] bg-[var(--od-surface-subtle)]">
              <AiWhatsappPreview />
            </div>

            {/* Left Body */}
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-9">
              <div>
                <span className="inline-block rounded-full border border-[var(--od-border)] px-3 py-1 text-[12px] font-medium text-[var(--od-text-muted)]">
                  {isVi ? "Giọng nói, tin nhắn, chat và web" : "Voice, messaging, chat, and web"}
                </span>
                <h4 className="mt-4 text-[20px] sm:text-[22px] font-bold text-[var(--od-text)]">
                  AI Ordering Agents
                </h4>
                <p className="mt-2 max-w-xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Hướng dẫn khách hàng qua cuộc hội thoại thoại, nhắn tin, chat và web bằng chính thực đơn, chi nhánh và điều kiện giao vận bạn cấu hình."
                    : "Guide customers through voice, messaging, chat, and web conversations using the catalog, store, and fulfillment context you configure."}
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <div>
                  <button
                    type="button"
                    onClick={() => openDemoModal("AI Ordering Agents · Guided demo")}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
                  >
                    {isVi ? "Đặt lịch demo" : "Book a demo"}
                  </button>
                </div>

                <Link
                  href="/platform/ai-ordering-agents"
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
                >
                  <span>{isVi ? "Khám phá AI Ordering Agents" : "Explore AI Ordering Agents"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </section>
      </Container>
    </section>
  );
}
