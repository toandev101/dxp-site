"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { DELIVERY_INTEGRATIONS } from "../../_data/integrations-catalog";
import {
  DeliveryFlowDiagram,
  IntegrationClosingCta,
  IntegrationHero,
  IntegrationProviderCard,
} from "../../_components/integrations-shared";
import { DeliveryHeroAside } from "../../_components/integration-hero-asides";

const BRAND = siteConfig.name;

export function DeliveryPageView() {
  const { openDemoModal } = useUiStore();
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const models = isVi
    ? [
        {
          num: "01",
          title: "Đội xe riêng",
          body: "Tài xế nội bộ nhận đơn, xác nhận và hoàn tất giao hàng ngay trên Ứng dụng Tài xế OPERO.",
          highlight: false,
        },
        {
          num: "02",
          title: "Mạng lưới đối tác giao hàng",
          body: "Gửi đơn tự động tới các đơn vị giao hàng theo yêu cầu như Uber Direct, DoorDash Drive và Lalamove.",
          highlight: false,
        },
        {
          num: "03 · Linh hoạt nhất",
          title: "Kết hợp (Hybrid)",
          body: "Kết hợp tài xế nội bộ với đối tác giao hàng và thiết lập quy tắc phân bổ riêng cho từng cửa hàng.",
          highlight: true,
        },
      ]
    : [
        {
          num: "01",
          title: "Own fleet",
          body: "Your drivers receive, accept, and complete deliveries in the Ordering Driver App.",
          highlight: false,
        },
        {
          num: "02",
          title: "Courier network",
          body: "Send deliveries to on-demand delivery companies such as Uber Direct, DoorDash Drive, and Lalamove.",
          highlight: false,
        },
        {
          num: "03 · Most flexible",
          title: "Hybrid",
          body: "Combine your own drivers with delivery companies and choose which one serves each store.",
          highlight: true,
        },
      ];

  const checklist = isVi
    ? [
        {
          num: "01",
          title: "Phạm vi phục vụ",
          body: "Thiết lập cửa hàng, vùng giao hàng và khung giờ hoạt động cho từng phương án giao vận.",
          tag: "Khu vực vận hành · Theo cửa hàng",
        },
        {
          num: "02",
          title: "Điều phối đơn",
          body: "Chọn đối tác giao hàng hoặc nhóm tài xế sẽ tự động nhận đơn của từng chi nhánh.",
          tag: "Điều phối · Tự động",
        },
        {
          num: "03",
          title: "Cập nhật cho khách",
          body: "Khách hàng theo dõi trạng thái đơn và thông tin tài xế ngay trên trang theo dõi trực tiếp.",
          tag: "Trải nghiệm · Thời gian thực",
        },
        {
          num: "04",
          title: "Phí giao hàng",
          body: "Cấu hình mức phí giao hàng áp dụng cho khách theo từng khu vực.",
          tag: "Thương mại · Theo vùng giao",
        },
      ]
    : [
        {
          num: "01",
          title: "Coverage",
          body: "Set the stores, delivery zones, and hours each delivery option covers.",
          tag: "Operating area · Per store",
        },
        {
          num: "02",
          title: "Assignment",
          body: "Choose the delivery company or driver group that receives each store's orders.",
          tag: "Dispatch · Automatic",
        },
        {
          num: "03",
          title: "Customer updates",
          body: "Customers follow status and courier details on their tracking page.",
          tag: "Experience · Live",
        },
        {
          num: "04",
          title: "Delivery fees",
          body: "Set the delivery fee customers pay for each zone.",
          tag: "Commercial · Per zone",
        },
      ];

  const capabilities = isVi
    ? [
        {
          num: "01",
          title: "Điều phối tự động",
          body: "Đơn hàng được chuyển ngay đến đúng đối tác giao hàng hoặc nhóm tài xế ngay khi phát sinh.",
        },
        {
          num: "02",
          title: "Đội xe kết hợp",
          body: "Vận hành song song đối tác giao hàng bên thứ ba và tài xế nội bộ trên cùng hệ thống.",
        },
        {
          num: "03",
          title: "Trạng thái trực tiếp",
          body: `Tiến độ giao nhận và thông tin tài xế được đồng bộ liên tục về ${BRAND} và tới khách hàng.`,
        },
        {
          num: "04",
          title: "Một bảng điều khiển duy nhất",
          body: `Theo dõi toàn bộ chuyến giao của cả tài xế riêng lẫn đối tác ngay trên Bảng điều khiển ${BRAND}.`,
        },
      ]
    : [
        {
          num: "01",
          title: "Automatic assignment",
          body: "Orders go to the right delivery company or driver group as soon as they are placed.",
        },
        {
          num: "02",
          title: "Mixed fleets",
          body: "Use delivery companies and in-house drivers side by side.",
        },
        {
          num: "03",
          title: "Live status",
          body: `Status and courier details flow back to ${BRAND} and to your customer.`,
        },
        {
          num: "04",
          title: "One dashboard",
          body: `Follow every delivery, from your drivers or a courier, in the ${BRAND} Dashboard.`,
        },
      ];

  const relatedItems = isVi
    ? [
        {
          label: "Kết nối",
          title: "Tích hợp POS",
          body: "Đẩy đơn hàng vào POS đồng thời điều phối tài xế giao món.",
          href: "/integrations/pos",
        },
        {
          label: "Kết nối",
          title: "Thiết lập cổng thanh toán",
          body: "Nhận thanh toán trực tuyến liền mạch cho mọi đơn giao hàng.",
          href: "/integrations/payments",
        },
        {
          label: "Vận hành",
          title: "Ordering Delivery",
          body: "Khám phá bộ công cụ điều phối giao hàng cho mô hình vận hành của bạn.",
          href: "/platform/ordering-delivery",
        },
      ]
    : [
        {
          label: "Connect",
          title: "POS integrations",
          body: "Send orders to your POS while couriers deliver them.",
          href: "/integrations/pos",
        },
        {
          label: "Connect",
          title: "Payment gateway setup",
          body: "Take online payments alongside every delivery.",
          href: "/integrations/payments",
        },
        {
          label: "Operate",
          title: "Ordering Delivery",
          body: "Explore the delivery product surface for your operating model.",
          href: "/platform/ordering-delivery",
        },
      ];

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: isVi ? "Nền tảng" : "Platform", href: "/products" },
          { label: isVi ? "Kết nối" : "Connect", href: "/products#connect" },
          { label: isVi ? "Mạng lưới giao hàng" : "Delivery networks" },
        ]}
        title={
          isVi
            ? "Điều phối tự động mọi đơn hàng tới đúng tài xế."
            : "Send every order to the right courier, automatically."
        }
        lede={
          isVi
            ? `Kết nối các đơn vị giao hàng theo yêu cầu, đội tài xế nội bộ của bạn hoặc kết hợp cả hai. ${BRAND} tự động gán từng chuyến giao và cập nhật liên tục cho bạn cùng khách hàng cho đến khi giao xong.`
            : `Connect on-demand delivery companies, your in-house drivers, or both. ${BRAND} assigns each delivery automatically and keeps you and your customers updated until it arrives.`
        }
        primaryCta={{
          label: isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`,
          modalTopic: "Delivery network integrations",
        }}
        secondaryCta={{
          label: isVi ? "Xem tất cả tích hợp" : "See all integrations",
          href: "/integrations",
        }}
        meta={
          isVi
            ? ["Đối tác giao hàng", "Tài xế nội bộ", "Điều phối tự động"]
            : ["Delivery companies", "In-house drivers", "Automatic assignment"]
        }
        aside={<DeliveryHeroAside />}
      />

      {/* 2. HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 py-16">
        <Container>
          <h2 className="text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            {isVi ? `Cách giao hàng vận hành với ${BRAND}.` : `How delivery works with ${BRAND}.`}
          </h2>
          <div className="mt-8">
            <DeliveryFlowDiagram />
          </div>
        </Container>
      </section>

      {/* 3. DELIVERY MODELS */}
      <section id="models" className="scroll-mt-24 py-12">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? "Mô hình giao hàng" : "Delivery models"}
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            {isVi ? "Chọn mô hình giao hàng phù hợp từng cửa hàng." : "Choose the delivery model that fits each store."}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {models.map((m) => (
              <div
                key={m.title}
                className={`rounded-[10px] border p-6 ${
                  m.highlight
                    ? "border-[#D91842] bg-[var(--od-action-soft)]/40"
                    : "border-[var(--od-border)] bg-[var(--od-bg)]"
                }`}
              >
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">{m.num}</span>
                <h3 className="mt-2 text-[19px] font-bold text-[var(--od-text)]">{m.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. DELIVERY CATALOG (13 PROVIDERS) */}
      <section id="catalog" className="scroll-mt-24 py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Tích hợp giao hàng" : "Delivery integrations"}
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                {isVi ? "Chọn đối tác giao hàng của bạn." : "Choose your delivery companies."}
              </h2>
              <p className="mt-2.5 max-w-2xl text-[15px] text-[var(--od-text-muted)]">
                {isVi
                  ? `Mọi đối tác giao hàng dưới đây đều tích hợp sẵn với ${BRAND}. Ứng dụng Tài xế OPERO giúp bạn vận hành đội tài xế nội bộ.`
                  : `Every delivery company listed here is an ${BRAND} integration. Ordering Driver App runs deliveries with your own drivers.`}
              </p>
            </div>
            <Link
              href="/integrations"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>{isVi ? "Tất cả tích hợp" : "All integrations"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DELIVERY_INTEGRATIONS.map((item) => (
              <IntegrationProviderCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. BEFORE YOU LAUNCH CHECKLIST */}
      <section id="delivery-checklist" className="scroll-mt-24 border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-16 my-8">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? "Trước khi vận hành" : "Before you launch"}
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            {isVi ? "Những thiết lập cần có cho từng cửa hàng." : "What to set for each store."}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {checklist.map((item) => (
              <div
                key={item.num}
                className="flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
              >
                <div>
                  <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                    {item.num}
                  </span>
                  <h3 className="mt-2 text-[17.5px] font-bold text-[var(--od-text)]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{item.body}</p>
                </div>
                <p className="mt-5 border-t border-[var(--od-border)] pt-3 font-mono text-[11px] text-[var(--od-text-muted)]">
                  {item.tag}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. OPERATING CONTROL */}
      <section id="capabilities" className="scroll-mt-24 py-12">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? "Kiểm soát vận hành" : "Operating control"}
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            {isVi ? "Quản lý giao hàng trên một hệ thống thống nhất." : "Run delivery as one operation."}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.num} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">{c.num}</span>
                <h3 className="mt-2 text-[17.5px] font-bold text-[var(--od-text)]">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. OWN FLEET + TECHNICAL HANDOFF */}
      <section className="py-12">
        <Container className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div id="driver-app" className="scroll-mt-24 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Dành cho đội xe riêng" : "For an own fleet"}
              </p>
              <h2 className="mt-2 text-[24px] font-bold text-[var(--od-text)]">
                {isVi
                  ? "Vận hành đội tài xế riêng với Ứng dụng Tài xế OPERO."
                  : "Run your own fleet with the Ordering Driver App."}
              </h2>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? "Tài xế của bạn nhận đơn, chấp nhận và hoàn tất giao hàng ngay trên ứng dụng, với cùng luồng xử lý và trải nghiệm cập nhật cho khách như đối tác giao hàng."
                  : "Your drivers receive, accept, and complete deliveries in the app, with the same order flow and customer updates as a delivery company."}
              </p>
            </div>
            <Link
              href="/platform/ordering-delivery"
              className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline w-fit"
            >
              <span>{isVi ? "Khám phá Ordering Delivery" : "Explore Ordering Delivery"}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div id="developers" className="scroll-mt-24 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Bàn giao kỹ thuật" : "Technical handoff"}
              </p>
              <h2 className="mt-2 text-[24px] font-bold text-[var(--od-text)]">
                {isVi ? "Kết nối bất kỳ đối tác giao hàng nào." : "Connect any delivery provider."}
              </h2>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? "Sử dụng webhooks, Plugins và API để kết nối các đơn vị giao vận khu vực hoặc phần mềm điều phối riêng song song với thiết lập hiện tại."
                  : "Use webhooks, Plugins, and the API to connect regional couriers or custom dispatch software alongside your existing delivery setup."}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-5">
              <Link
                href="/products#extend"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{isVi ? "Đọc tài liệu API" : "Read the API docs"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => openDemoModal("Discuss delivery setup")}
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline cursor-pointer"
              >
                <span>{isVi ? "Tư vấn thiết lập giao hàng" : "Discuss delivery setup"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. RELATED */}
      <section id="related" className="scroll-mt-24 py-12">
        <Container>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
            {isVi ? "Khám phá mô hình vận hành kết nối." : "Explore the connected operating model."}
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            {relatedItems.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="group rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full border border-[var(--od-border)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--od-text-muted)]">
                    {r.label}
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-[var(--od-text-muted)]">{r.body}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--od-action-content)]">
                  {isVi ? "Khám phá" : "Explore"} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. CLOSING CTA */}
      <IntegrationClosingCta
        title={isVi ? "Bắt đầu giao hàng trực tiếp từ kênh riêng của bạn." : "Start delivering from your own channels."}
        body={
          isVi
            ? "Cho chúng tôi biết thành phố, số lượng cửa hàng và mô hình giao vận của bạn — chúng tôi sẽ hỗ trợ kết nối đúng đối tác và đội ngũ tài xế."
            : "Tell us your cities, stores, and delivery model, and we will help you connect the right delivery companies and drivers."
        }
        primaryCta={{
          label: isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`,
          modalTopic: "Delivery integrations consultation",
        }}
        secondaryCta={{ label: isVi ? "Xem bảng giá" : "See pricing", href: "/pricing" }}
      />
    </div>
  );
}
