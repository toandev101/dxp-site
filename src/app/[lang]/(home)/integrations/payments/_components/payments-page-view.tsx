"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { PAYMENT_INTEGRATIONS } from "../../_data/integrations-catalog";
import {
  FilterableIntegrationsGrid,
  IntegrationClosingCta,
  IntegrationHero,
} from "../../_components/integrations-shared";
import { PaymentsHeroAside } from "../../_components/integration-hero-asides";

const BRAND = siteConfig.name;

export function PaymentsPageView() {
  const { openDemoModal } = useUiStore();
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const decisions = isVi
    ? [
        {
          title: "Kênh thanh toán",
          body: "Xác định rõ phương thức nào hiển thị trên website, ứng dụng di động, ki-ốt hay các điểm chạm khách hàng khác.",
        },
        {
          title: "Điều kiện áp dụng",
          body: "Xác nhận nhà cung cấp được chọn hỗ trợ phương thức nào theo tài khoản, quốc gia, loại tiền tệ và thiết bị của khách.",
        },
        {
          title: "Vòng đời đơn hàng",
          body: "Thống nhất cách xử lý giữ tiền (authorization), thu tiền (capture), hủy đơn, hoàn tiền, tiền boa và biên lai.",
        },
        {
          title: "Đối soát thanh toán",
          body: "Phân rõ bộ phận kiểm tra báo cáo quyết toán và cách khớp dữ liệu thanh toán với từng đơn hàng.",
        },
      ]
    : [
        {
          title: "Checkout surface",
          body: "Document whether a method appears on web, app, kiosk, or another customer surface.",
        },
        {
          title: "Method eligibility",
          body: "Confirm which methods the selected provider supports for the account, country, currency, and customer device.",
        },
        {
          title: "Order lifecycle",
          body: "Agree how authorization, capture, cancellation, refund, tip, and receipt events should be handled.",
        },
        {
          title: "Reconciliation",
          body: "Make clear who reviews settlement reports and how payment records are matched to orders.",
        },
      ];

  const related = isVi
    ? [
        {
          title: "Tích hợp POS",
          body: "Tìm hiểu cách hệ thống POS phối hợp với luồng đặt hàng và thanh toán.",
          href: "/integrations/pos",
        },
        {
          title: "Hoạch định giao hàng",
          body: "Xác định cách phân bổ trách nhiệm và chi phí giao hàng trong trải nghiệm đặt món.",
          href: "/integrations/delivery",
        },
        {
          title: "Dự án sàn giao dịch",
          body: "Thiết kế mô hình vận hành cho sàn đặt món đa cửa hàng.",
          href: "/solutions/marketplaces",
        },
        {
          title: "Thẻ quà tặng",
          body: "Bán thẻ quà tặng để khách quy đổi như một phương thức thanh toán tại checkout.",
          href: "/platform/dashboard",
        },
        {
          title: "Ví thanh toán khách hàng",
          body: "Cho phép khách lưu thẻ một lần và thanh toán chỉ với một chạm ở đơn tiếp theo.",
          href: "/platform/ordering-apps",
        },
      ]
    : [
        {
          title: "POS integrations",
          body: "Review how the point of sale fits into the order and payment workflow.",
          href: "/integrations/pos",
        },
        {
          title: "Delivery planning",
          body: "Decide how delivery responsibilities and costs fit the order experience.",
          href: "/integrations/delivery",
        },
        {
          title: "Marketplace projects",
          body: "Plan the operating model for a multi-store marketplace.",
          href: "/solutions/marketplaces",
        },
        {
          title: "Gift cards",
          body: "Sell gift cards customers redeem as a payment method at checkout.",
          href: "/platform/dashboard",
        },
        {
          title: "Customer payment wallet",
          body: "Let customers save a card once and pay in one click on their next order.",
          href: "/platform/ordering-apps",
        },
      ];

  const questions = isVi
    ? [
        {
          q: "Nên chọn thanh toán nhúng (embedded) hay trang thanh toán chuyển hướng (hosted)?",
          a: "Iframe nhúng trường nhập thẻ hoặc trang thanh toán ngay trong website của bạn; trong khi hosted checkout chuyển hướng khách sang trang nhà cung cấp rồi quay lại. Hãy kiểm tra cụ thể sản phẩm, hành vi trình duyệt/ứng dụng, xác thực, callback và xác nhận đơn hàng thay vì mặc định mọi cổng đều hỗ trợ mọi luồng.",
        },
        {
          q: "Có thể thêm trả góp hoặc thu phí định kỳ không?",
          a: `Trả góp, mua trước trả sau và thanh toán định kỳ là các luồng khác nhau. ${BRAND} hỗ trợ thanh toán định kỳ qua Stripe Connect, nhưng điều này không đồng nghĩa mọi cổng hay tài khoản đều hỗ trợ trả góp. Cần rà soát theo nhà cung cấp, quốc gia, tiền tệ, cơ chế ủy quyền, hủy, hoàn tiền và xử lý giao dịch lỗi.`,
        },
        {
          q: "Liên kết thanh toán (payment link) có giống hóa đơn không?",
          a: `Payment link mở ra một luồng thanh toán; còn hóa đơn ghi nhận số tiền phải thu. Việc nhà cung cấp có tính năng link không đồng nghĩa đã có trình kết nối hóa đơn gốc trong ${BRAND}. Cần thống nhất cách khớp số tiền đã thanh toán với mã đơn hoặc hóa đơn, cũng như thanh toán một phần, hết hạn và hoàn tiền.`,
        },
        {
          q: "Nên so sánh các cổng thanh toán doanh nghiệp như thế nào?",
          a: `Hãy so sánh quốc gia và tiền tệ hỗ trợ, giao diện API/checkout, xác thực 3DS, cơ chế hoàn tiền, quyết toán, hỗ trợ kỹ thuật và báo giá chính thức theo hành trình đặt hàng của bạn. Tài liệu API của nhà cung cấp chưa đủ để khẳng định kết nối đã sẵn sàng cho dự án ${BRAND}.`,
        },
        {
          q: "Chi phí thanh toán doanh nghiệp và bên thứ ba gồm những gì?",
          a: `Cần tách bạch gói dịch vụ ${BRAND} hoặc phạm vi triển khai enterprise với phí xử lý giao dịch của cổng thanh toán, phí chuyển đổi ngoại tệ/quyết toán, khiếu nại, bản quyền đối tác và chi phí triển khai. Yêu cầu từng bên liệt kê rõ đơn giá, thuế, thời hạn hợp đồng và trách nhiệm.`,
        },
        {
          q: "Tích hợp bên thứ ba có phải là một phương thức thanh toán không?",
          a: "Cổng thanh toán xử lý giao dịch; thẻ, ví điện tử, chuyển khoản hay tiền mặt là phương thức khách chọn; còn kết nối POS/middleware truyền dữ liệu vận hành. Đây là các tầng hoàn toàn tách biệt — cần xác minh từng luồng theo nhà cung cấp, tài khoản, quốc gia và loại tiền tệ.",
        },
      ]
    : [
        {
          q: "Embedded checkout or a hosted payment page?",
          a: "An iframe embeds provider-hosted fields or a payment page inside your site; a redirect-based hosted checkout takes the customer to the provider and returns them afterward. Confirm the selected product, browser/app behavior, authentication, callbacks, and order confirmation instead of assuming every gateway supports every route.",
        },
        {
          q: "Can I add payment plans or recurring charges?",
          a: `Installments, buy now pay later, and recurring billing are different flows. ${BRAND} supports Stripe Connect recurring payments; that does not establish installment support for every gateway or account. Review the provider, country, currency, customer authorization, schedule, cancellations, refunds, and failed-payment handling for the specific service you intend to sell.`,
        },
        {
          q: "Are payment links the same as invoices?",
          a: `A payment link opens a payment flow; an invoice records what is billed. A provider’s link feature does not establish a native ${BRAND} link or invoice connector. Agree how the paid amount and reference match an order or invoice, and how partial payments, expiry, and refunds are reconciled.`,
        },
        {
          q: "How should I compare Checkout.com with other gateways?",
          a: `Compare supported merchant countries and currencies, API and checkout interfaces, authentication, refunds, settlement, support, and a written quote against your order journey. Verify the current product and connector scope for each candidate; a provider’s API documentation alone does not prove its connection is ready for your ${BRAND} project.`,
        },
        {
          q: "What goes into enterprise and third-party payment costs?",
          a: `Separate ${BRAND} subscription or agreed enterprise scope from gateway processing, settlement/currency conversion, disputes, provider licenses, implementation, and ongoing support where applicable. Ask each party to identify its charges, billing unit, taxes, contract term, and responsibilities.`,
        },
        {
          q: "Is a third-party integration a payment method?",
          a: `A gateway processes payments; cards, wallets, transfers, or cash are customer payment methods; a POS or middleware connector moves operational data. These are distinct layers. For an online checkout, card terminal, and payment-link requirement, verify each flow with the provider, account, country, currency, and actual connector.`,
        },
      ];

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: isVi ? "Tích hợp" : "Integrations", href: "/integrations" },
          { label: isVi ? "Cổng thanh toán" : "Payment gateways" },
        ]}
        eyebrow={isVi ? "Tích hợp" : "Integrations"}
        title={isVi ? "Tích hợp cổng thanh toán" : "Payment gateway integrations"}
        lede={
          isVi
            ? "Kết nối bước thanh toán với các cổng thanh toán và phương thức nội địa mà khách hàng của bạn quen dùng. Khám phá nhà cung cấp theo quốc gia, sau đó hoạch định tài khoản, kênh bán và luồng thanh toán cho vận hành của bạn."
            : "Connect checkout to the payment gateways and local methods your customers use. Explore providers by country, then plan the account, channels, and payment flow for your operation."
        }
        primaryCta={{
          label: isVi ? "Khám phá cổng thanh toán" : "Explore payment gateways",
          href: "#payment-gateways",
        }}
        secondaryCta={{
          label: isVi ? "Tư vấn cấu hình thanh toán" : "Discuss payment setup",
          openChat: true,
        }}
        aside={<PaymentsHeroAside />}
      />

      {/* 2. FILTERABLE 32 PAYMENT GATEWAYS */}
      <section id="payment-gateways" className="scroll-mt-24 py-16">
        <Container>
          <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">
            {isVi ? "Cổng thanh toán" : "Payment gateways"}
          </p>
          <h2 className="mt-2.5 text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-[var(--od-text)]">
            {isVi ? "Khám phá các tích hợp thanh toán." : "Explore payment integrations."}
          </h2>

          <div className="mt-8">
            <FilterableIntegrationsGrid
              items={PAYMENT_INTEGRATIONS}
              searchPlaceholder={isVi ? "Tìm kiếm tích hợp thanh toán" : "Search payment integrations"}
              countNoun={isVi ? "tích hợp thanh toán" : "payment integrations"}
              defaultVisibleCount={32}
            />
          </div>
        </Container>
      </section>

      {/* 3. OPERATING CONTEXT & BEYOND THE GATEWAY */}
      <section className="border-t border-[var(--od-border)] py-14">
        <Container className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7">
            <h2 className="text-[22px] font-bold text-[var(--od-text)]">
              {isVi ? "Chọn theo bối cảnh vận hành" : "Choose based on the operating context"}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? "Chọn cổng thanh toán phù hợp với quốc gia đăng ký kinh doanh, đồng tiền quyết toán và các phương thức khách hàng kỳ vọng trên website, ứng dụng di động và ki-ốt tại cửa hàng."
                : "Pick the gateway that fits the countries where your business is registered, the currencies you settle in, and the checkout methods your customers expect across web, native apps, and in-store kiosks."}
            </p>
          </div>
          <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7">
            <h2 className="text-[22px] font-bold text-[var(--od-text)]">
              {isVi ? "Hơn cả một cổng thanh toán" : "Beyond the gateway"}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? "Bật phương thức thanh toán theo từng cửa hàng, kết hợp cổng trực tuyến với tiền mặt hoặc quẹt thẻ khi giao hàng, đồng thời giữ tổng đơn, tiền boa, hoàn tiền và quyết toán đồng bộ trên mọi kênh."
                : "Enable payment methods business by business, combine online gateways with cash or card on delivery, and keep order totals, tips, refunds, and payouts aligned across every channel."}
            </p>
          </div>
        </Container>
      </section>

      {/* 4. PAYMENT SETUP & IMPLEMENTATION GUARANTEE */}
      <section className="py-12">
        <Container className="space-y-6">
          <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-7 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Thiết lập thanh toán" : "Payment setup"}
              </p>
              <h2 className="mt-2 text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--od-text)]">
                {isVi ? "Chọn cổng thanh toán, kết nối và vận hành ngay." : "Pick a gateway, connect it, and go live."}
              </h2>
              <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? "Cho chúng tôi biết thị trường, loại tiền tệ và các kênh thanh toán của bạn — chúng tôi sẽ tư vấn và thiết lập cổng thanh toán phù hợp nhất."
                  : "Tell us your countries, currencies, and checkout channels, and we will help you choose and set up the right gateway."}
              </p>
            </div>
            <button
              type="button"
              onClick={() => openDemoModal("Payment setup consultation")}
              className="inline-flex min-h-[46px] shrink-0 items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#B8123A] cursor-pointer"
            >
              {isVi ? "Tư vấn cấu hình thanh toán" : "Discuss payment setup"}
            </button>
          </div>

          <div className="rounded-[12px] border border-[#D91842]/30 bg-[var(--od-action-soft)]/50 p-7 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Cam kết triển khai phương thức thanh toán" : "Payment method implementation guarantee"}
              </p>
              <h2 className="mt-2 text-[26px] sm:text-[34px] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--od-text)]">
                {isVi
                  ? "Thiếu phương thức thanh toán tại quốc gia của bạn? Chúng tôi sẽ tích hợp miễn phí."
                  : "Missing a payment method in your country? We’ll implement it at no cost."}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => openDemoModal("Request local payment method implementation")}
              className="inline-flex min-h-[46px] shrink-0 items-center justify-center rounded-full border border-[#D91842] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:bg-[#D91842] hover:text-white transition-colors cursor-pointer"
            >
              {isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`}
            </button>
          </div>
        </Container>
      </section>

      {/* 5. PAYMENT METHOD MAP */}
      <section className="py-12">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? "Bản đồ phương thức thanh toán" : "Payment method map"}
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            {isVi ? "So sánh các phương thức theo quyết định vận hành." : "Compare methods by the decision they change."}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <h3 className="text-[18px] font-bold text-[var(--od-text)]">
                {isVi ? "Tài khoản và nhà cung cấp" : "Account and provider"}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? "Xác nhận quốc gia đăng ký doanh nghiệp, thẩm định tài khoản merchant, đồng tiền quyết toán, biểu phí và nhu cầu chia tách thanh toán tự động (như Stripe Connect)."
                  : "Confirm business country registration, merchant underwriting, settlement currency, fee schedule, and whether split payouts (such as Stripe Connect) are required."}
              </p>
            </div>
            <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <h3 className="text-[18px] font-bold text-[var(--od-text)]">
                {isVi ? "Trải nghiệm checkout của khách" : "Customer checkout"}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? "Xác định nhập thẻ nhúng trực tiếp hay chuyển hướng sang trang thanh toán, hỗ trợ Apple Pay / Google Pay, lưu thẻ và ví nội địa hoặc thanh toán khi nhận hàng."
                  : "Confirm embedded card entry vs hosted checkout redirect, Apple Pay / Google Pay availability, saved cards, and local wallet or pay-on-delivery expectations."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. WHAT TO DECIDE (4 CARDS) */}
      <section className="py-12">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? "Cần xác định trước" : "What to decide"}
          </p>
          <h2 className="mt-2 max-w-3xl text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            {isVi
              ? "Phương thức thanh toán vừa là lựa chọn của khách hàng, vừa là trách nhiệm vận hành."
              : "A payment method is a customer choice and an operating responsibility."}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {decisions.map((d, idx) => (
              <div key={d.title} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 text-[17px] font-bold text-[var(--od-text)]">{d.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. MARKETPLACE PROJECTS & TECHNICAL HANDOFF */}
      <section className="py-12">
        <Container className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Dành cho dự án sàn giao dịch" : "For marketplace projects"}
              </p>
              <h2 className="mt-2 text-[24px] font-bold text-[var(--od-text)]">
                {isVi
                  ? "Chia tách thanh toán tự động cho cửa hàng và tài xế với Stripe Connect."
                  : "Split payouts across stores and drivers with Stripe Connect."}
              </h2>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? "Tự động phân bổ hoa hồng giữa sàn của bạn, từng cửa hàng đối tác và khoản thanh toán cho tài xế ngay khi đơn được quyết toán."
                  : "Automate commission splits between your marketplace platform, each participating business, and driver payouts on every settled order."}
              </p>
            </div>
            <button
              type="button"
              onClick={() => openDemoModal("Stripe Connect marketplace payouts")}
              className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline w-fit cursor-pointer"
            >
              <span>{isVi ? "Khám phá Stripe Connect" : "Explore Stripe Connect"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "Bàn giao kỹ thuật" : "Technical handoff"}
              </p>
              <h2 className="mt-2 text-[24px] font-bold text-[var(--od-text)]">
                {isVi
                  ? "Tài liệu cấu hình thanh toán và API hook."
                  : "Documentation for payment configuration and API hooks."}
              </h2>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi
                  ? "Xem hướng dẫn cấu hình thanh toán trực tuyến theo từng cửa hàng hoặc tra cứu sự kiện webhook và endpoint thanh toán trong tài liệu lập trình viên."
                  : "Review online payment setup steps per store or inspect webhook events and payment endpoints in the developer reference."}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-5">
              <Link
                href="/demo"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{isVi ? "Đọc hướng dẫn thiết lập thanh toán" : "Read the payment setup guides"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products#extend"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{isVi ? "Đọc tài liệu API" : "Read the API reference"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. RELATED */}
      <section className="py-12">
        <Container>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
            {isVi ? "Các khu vực liên quan" : "Related areas"}
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {related.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="group rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[15.5px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[var(--od-text-muted)]">{r.body}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--od-action-content)]">
                  {isVi ? "Khám phá" : "Explore"} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. QUESTIONS (6 CARDS) */}
      <section className="border-t border-[var(--od-border)] py-16">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            {isVi ? "Câu hỏi thường gặp" : "Questions"}
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            {isVi ? "Giải đáp khi lựa chọn luồng thanh toán" : "Answers for choosing your payment flow"}
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
            {questions.map((item) => (
              <div key={item.q} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <h3 className="text-[17px] font-bold text-[var(--od-text)]">{item.q}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-[var(--od-text-muted)]">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. CLOSING CTA */}
      <IntegrationClosingCta
        title={
          isVi
            ? "Nhận thanh toán theo đúng cách khách hàng muốn trả."
            : "Take payments the way your customers want to pay."
        }
        body={
          isVi
            ? "Cho chúng tôi biết thị trường, loại tiền tệ và kênh checkout của bạn — đội ngũ chúng tôi sẽ hỗ trợ chọn và thiết lập cổng thanh toán phù hợp."
            : "Tell us your countries, currencies, and checkout channels, and we will help you choose and set up the right gateway."
        }
        primaryCta={{
          label: isVi ? "Tư vấn cấu hình thanh toán" : "Discuss payment setup",
          modalTopic: "Payment gateway setup",
        }}
        secondaryCta={{ label: isVi ? "Xem bảng giá" : "See pricing", href: "/pricing" }}
      />
    </div>
  );
}
