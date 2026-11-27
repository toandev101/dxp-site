"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

export function AboutPageView() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const layers = isVi
    ? [
        {
          num: "01",
          title: "Xây dựng (Build)",
          body: "Website đặt hàng, app di động, Zalo Mini App, kiosk, tổng đài, đặt hàng đa chi nhánh và AI Ordering Agents: mọi điểm chạm để khách đặt món.",
          href: "/platform#build",
        },
        {
          num: "02",
          title: "Vận hành (Operate)",
          body: "Ứng dụng cửa hàng, quản lý đơn hàng, vận hành đa chi nhánh, app tài xế & điều phối, giao hàng nội bộ và 3PL. Mọi công việc diễn ra sau khi đơn được đặt.",
          href: "/platform#operate",
        },
        {
          num: "03",
          title: "Kết nối (Connect)",
          body: "POS, cổng thanh toán, mạng lưới giao hàng, loyalty, CRM và phân tích báo cáo: các hệ thống cần góc nhìn chính xác về luồng đơn hàng.",
          href: "/platform#connect",
        },
        {
          num: "04",
          title: "Mở rộng (Extend)",
          body: "API, SDKs, webhooks, giao diện nhãn trắng và giải pháp tùy biến: mở rộng linh hoạt cho đội ngũ kỹ thuật cần tùy chỉnh hoặc kết nối hệ thống riêng.",
          href: "/platform#extend",
        },
      ]
    : [
        {
          num: "01",
          title: "Build",
          body: "Ordering websites, apps, kiosks, call center, marketplaces, multi-store ordering, and AI ordering agents: the surfaces customers use to place an order.",
          href: "/platform#build",
        },
        {
          num: "02",
          title: "Operate",
          body: "Merchant apps, order management, multi-location operations, driver apps and dispatch, in-house and third-party delivery. Everything that happens after an order is placed.",
          href: "/platform#operate",
        },
        {
          num: "03",
          title: "Connect",
          body: "POS, payment gateways, delivery networks, loyalty, CRM, and analytics: the systems that need an accurate view of the ordering operation.",
          href: "/platform#connect",
        },
        {
          num: "04",
          title: "Extend",
          body: "API, SDKs, webhooks, white-label surfaces, and custom solutions: options for teams that need to adapt the experience or connect their own systems.",
          href: "/platform#extend",
        },
      ];

  const principles = isVi
    ? [
        {
          title: "Xây dựng trải nghiệm mang đậm dấu ấn thương hiệu",
          body: "Bắt đầu từ kênh đặt hàng khách trực tiếp tương tác, sau đó kết nối liền mạch với công cụ vận hành phía sau mỗi đơn.",
        },
        {
          title: "Vận hành vượt xa bước thanh toán",
          body: "Đơn hàng không kết thúc ở nút chốt đơn. Công cụ tại quán, quy trình giao vận và quản trị đa chi nhánh đều nằm chung một bức tranh vận hành.",
        },
        {
          title: "Kết nối hệ thống xung quanh đơn hàng",
          body: "Các tích hợp giữ cho luồng đặt món đồng bộ chặt chẽ với POS, thanh toán, giao hàng, loyalty, CRM và báo cáo mà doanh nghiệp đang dùng.",
        },
        {
          title: "Luôn sẵn sàng để mở rộng",
          body: "Đội ngũ kỹ thuật có thể khai thác API, SDK và các phương án tùy biến khi cần giải pháp vượt ra ngoài cấu hình tiêu chuẩn.",
        },
      ]
    : [
        {
          title: "Build an experience customers recognize",
          body: "Start with the ordering surfaces customers see, then connect them to the operational tools behind each order.",
        },
        {
          title: "Operate beyond the storefront",
          body: "An order does not stop at checkout. Merchant tools, delivery workflows, and multi-location operations are part of the same operational picture.",
        },
        {
          title: "Connect the systems around the order",
          body: "Integrations help keep the ordering operation connected to the POS, payment, delivery, loyalty, CRM, and analytics tools a business uses.",
        },
        {
          title: "Leave room to extend",
          body: "Teams can use the platform's developer-facing capabilities and solution paths when a standard surface or integration is not the right fit.",
        },
      ];

  const scaleTiles = isVi
    ? [
        {
          title: "Trải nghiệm khách hàng",
          body: "Mang đến không gian khám phá thực đơn, đặt món và theo dõi đơn hàng mượt mà trên đúng kênh khách yêu thích.",
        },
        {
          title: "Vận hành đơn hàng",
          body: "Trang bị quy trình rõ ràng cho cửa hàng, bếp và đội ngũ giao vận ngay khi đơn hàng đi vào hệ thống.",
        },
        {
          title: "Hệ thống kết nối",
          body: "Đưa POS, thanh toán, giao hàng, loyalty, CRM và phân tích vào chung một luồng vận hành đồng bộ.",
        },
        {
          title: "Nền tảng để mở rộng",
          body: "Tận dụng bộ công cụ lập trình và giải pháp chuyên sâu khi doanh nghiệp cần mở rộng trải nghiệm hoặc tích hợp đặc thù.",
        },
      ]
    : [
        {
          title: "Customer experience",
          body: "Give customers a place to discover a menu, build an order, and stay informed through the channel that fits their journey.",
        },
        {
          title: "Order operations",
          body: "Give store, merchant, and delivery teams the workflows they need after an order enters the operation.",
        },
        {
          title: "Connected systems",
          body: "Bring POS, payments, delivery, loyalty, CRM, and analytics into the ordering workflow where the relevant connection is available.",
        },
        {
          title: "A foundation to extend",
          body: "Use developer and solution paths when the experience or integration needs work beyond the standard surface.",
        },
      ];

  const relatedCards = isVi
    ? [
        {
          label: "Khách hàng",
          title: "Câu chuyện thành công",
          body: `Các thương hiệu và nhà vận hành đang phát triển trên ${BRAND}.`,
          href: "/customers",
        },
        {
          label: "Liên hệ",
          title: "Trao đổi với chúng tôi",
          body: "Tư vấn giải pháp, hỗ trợ kỹ thuật và mọi thắc mắc khác.",
          href: "/contact",
        },
        {
          label: "Đối tác",
          title: "Agency & đối tác phân phối",
          body: "Xây dựng và cung cấp sản phẩm đặt hàng trên hạ tầng của chúng tôi.",
          href: "/solutions/agencies-resellers",
        },
      ]
    : [
        {
          label: "Customers",
          title: "Success stories",
          body: `The operators and brands that run on ${BRAND}.`,
          href: "/customers",
        },
        {
          label: "Contact",
          title: "Talk to us",
          body: "Sales, support and everything else.",
          href: "/contact",
        },
        {
          label: "Partners",
          title: "Agencies and resellers",
          body: "Build and sell ordering products on our infrastructure.",
          href: "/solutions/agencies-resellers",
        },
      ];

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. DARK HERO */}
      <section
        className="relative overflow-hidden bg-[#111013] text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-36 h-[560px] w-[680px]"
          style={{
            background: "none",
          }}
        />

        <Container className="relative z-10 py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="text-[42px] sm:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.03] text-white [text-wrap:balance]">
              {isVi
                ? "Hạ tầng đặt hàng cho trải nghiệm thương hiệu bạn đang vận hành."
                : "Ordering infrastructure for the experience you run."}
            </h1>

            <p className="mt-6 max-w-xl text-[16.5px] sm:text-[18px] leading-[1.6] text-[#A9A8AF]">
              {isVi
                ? `${BRAND} kết nối trải nghiệm đặt hàng của khách với bộ công cụ vận hành đơn tại quán và nền tảng mở rộng cho đội kỹ thuật — giúp hợp nhất gian hàng, vận hành và tích hợp mà không bị phân mảnh thành các hệ thống rời rạc.`
                : `${BRAND} connects the customer-facing ordering experience with the tools used to operate orders and the interfaces used to extend the platform. Teams can bring together storefronts, operator workflows, and integrations without treating each one as a separate system.`}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/demo"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A]"
              >
                {isVi ? "Xem demo trực tiếp" : "See a live demo"}
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F]"
              >
                {isVi ? `Trao đổi với ${BRAND}` : `Talk to ${BRAND}`}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#A9A8AF]">
              <span>{isVi ? "Xây dựng" : "Build"}</span>
              <span>{isVi ? "Vận hành" : "Operate"}</span>
              <span>{isVi ? "Kết nối & mở rộng" : "Connect and extend"}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. #build — FOUR LAYERS, ONE SYSTEM */}
      <section id="build" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
              {isVi ? "Những gì chúng tôi xây dựng" : "What we build"}
            </p>
            <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              {isVi ? "Bốn lớp kiến trúc, một hệ thống duy nhất." : "Four layers, one system."}
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? `${BRAND} được tổ chức đúng theo cách một hệ thống đặt hàng thực tế vận hành: tạo trải nghiệm đặt món, điều phối trọn vẹn từng đơn hàng phía sau, kết nối hệ thống sẵn có và mở rộng linh hoạt khi doanh nghiệp phát triển.`
                : `${BRAND} is organized the way an ordering operation actually runs: create the experience, operate every order behind it, connect the systems you already use, and extend the platform when your business needs something of its own.`}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {layers.map((layer) => (
              <Link
                key={layer.num}
                href={layer.href}
                className="group flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
              >
                <div>
                  <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                    {layer.num}
                  </span>
                  <h3 className="mt-2 text-[19px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                    {layer.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{layer.body}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                  {isVi ? "Khám phá" : "Explore"} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. #principles — HOW WE WORK */}
      <section id="principles" className="scroll-mt-24 border-t border-[var(--od-border)] py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
              {isVi ? "Cách chúng tôi làm việc" : "How we work"}
            </p>
            <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              {isVi
                ? "Sự khác biệt của một nền tảng đặt hàng kết nối đồng bộ."
                : "What a connected ordering foundation changes."}
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? "Toàn bộ nền tảng xoay quanh ba trụ cột cốt lõi: mang lại trải nghiệm mượt mà, vận hành trọn vẹn đơn hàng và kết nối liền mạch các hệ thống xung quanh."
                : "The platform is organized around the work of offering an experience, operating an order, and connecting the systems around it."}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
              >
                <h3 className="text-[18px] font-bold leading-snug text-[var(--od-text)]">{item.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. #scale — DARK CONTROL BAND */}
      <section id="scale" className="scroll-mt-24 py-10">
        <Container>
          <div className="relative overflow-hidden rounded-[20px] bg-[#111013] p-7 sm:p-12 lg:p-14 text-white grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[540px] w-[540px] -translate-y-1/2"
              style={{
                background: "none",
              }}
            />

            <div className="relative z-10 lg:col-span-5">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#F9D0D8]">
                {isVi ? "Mảnh ghép ăn khớp" : "How it fits together"}
              </p>
              <h2 className="mt-3 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-white">
                {isVi
                  ? "Một guồng máy đặt hàng, bốn trụ cột gắn kết."
                  : "One ordering operation, four connected concerns."}
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.6] text-[#A9A8AF]">
                {isVi
                  ? "Trải nghiệm đặt món chỉ thực sự hiệu quả khi kết nối trực tiếp với con người, hệ thống và mọi bước xử lý phía sau sau khi khách bấm đặt."
                  : "A customer-facing experience is only useful when it connects to the people, systems, and changes needed to run the order after it is placed."}
              </p>
            </div>

            <div className="relative z-10 lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {scaleTiles.map((tile) => (
                <div
                  key={tile.title}
                  className="rounded-[10px] border border-[#2A2A2E] bg-[#1B1A1F] p-6"
                >
                  <h3 className="text-[16px] font-bold text-white">{tile.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-[#A9A8AF]">{tile.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. #related — MORE ABOUT THE COMPANY */}
      <section id="related" className="scroll-mt-24 py-14 sm:py-16">
        <Container>
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--od-text)]">
            {isVi ? "Tìm hiểu thêm về công ty." : "More about the company."}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {relatedCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
              >
                <div>
                  <span className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[var(--od-action-content)]">
                    {card.label}
                  </span>
                  <h3 className="mt-2 text-[18px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                  {isVi ? "Khám phá" : "Explore"} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CLOSING DARK CTA BAND */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[10px] bg-[#111013] px-7 py-14 sm:px-14 sm:py-[72px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[634px] w-[696px] -translate-y-1/2"
              style={{
                background: "none",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-white">
                {isVi ? "Trải nghiệm thực tế hạ tầng đang vận hành." : "See the infrastructure running."}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#A9A8AF]">
                {isVi
                  ? "Cùng xem trực tiếp gian hàng, công cụ nhận đơn cửa hàng và hệ thống API với chuyên gia am hiểu mô hình của bạn, hoặc đặt bất kỳ câu hỏi nào trước."
                  : "Walk through the storefront, the merchant tools and the API with someone who knows your operation, or ask us anything first."}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?meeting=demo#book"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A]"
              >
                {isVi ? "Đặt lịch demo" : "Book a demo"}
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F]"
              >
                {isVi ? `Trao đổi với ${BRAND}` : `Talk to ${BRAND}`}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
