"use client";

import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function getFaqGroups(brand: string, isVi: boolean) {
  if (isVi) {
    return [
      {
        category: "Bảng giá và thanh toán",
        items: [
          {
            id: "pb-1",
            q: "Hệ thống có thu phí hoa hồng trên mỗi đơn hàng không?",
            a: `Không. ${brand} không thu bất kỳ khoản hoa hồng nào trên đơn hàng của bạn. Bạn chỉ trả theo gói dịch vụ: tính theo chi nhánh với gói Nhà hàng, và mức phí hàng tháng với gói Sàn giao dịch và Doanh nghiệp lớn. Tính năng đặt món bằng AI (tùy chọn) có biểu phí công nghệ AI riêng, và các đơn vượt định mức tháng ở gói Sàn giao dịch được tính theo đơn phát sinh.`,
          },
          {
            id: "pb-2",
            q: "Phí công nghệ AI bao gồm những gì?",
            a: "Phí công nghệ AI chỉ áp dụng trên doanh thu từ các đơn hàng đủ điều kiện được xử lý qua hội thoại AI, không áp dụng cho các đơn đặt thông thường. Hãy trao đổi với đội ngũ của chúng tôi để nhận mức phí phù hợp với quy mô vận hành của bạn.",
          },
          {
            id: "pb-3",
            q: "Tôi cần dự trù thêm những chi phí nào khác?",
            a: "Phí xử lý thanh toán của cổng thanh toán, đối tác giao hàng, tin nhắn SMS/WhatsApp, phần cứng, tài khoản lập trình viên, phí kho ứng dụng (App Store / Google Play), thuế, tùy biến riêng và các chi phí bên thứ ba khác được tính riêng trừ khi đã ghi rõ trong đề xuất báo giá.",
          },
        ],
      },
      {
        category: "Các gói dịch vụ và đơn hàng",
        items: [
          {
            id: "po-1",
            q: "Mỗi gói dịch vụ bao gồm những gì?",
            a: `Mọi gói đều đi kèm đầy đủ sản phẩm và tính năng của ${brand}: quyền truy cập API & MCP, thương hiệu riêng (white-label), toàn bộ ứng dụng di động gốc và quản lý đa thương hiệu, đa chi nhánh. Gói Nhà hàng tính phí theo chi nhánh; gói Sàn giao dịch không giới hạn số cửa hàng kèm định mức đơn hàng mỗi tháng. Mức sử dụng vượt ngưỡng, dịch vụ triển khai và tùy chọn Enterprise có điều khoản riêng.`,
          },
          {
            id: "po-2",
            q: "Mỗi gói bao gồm bao nhiêu đơn hàng?",
            a: "Gói Nhà hàng không giới hạn số lượng đơn hàng. Gói Sàn giao dịch tiêu chuẩn bao gồm 2.000 đơn/tháng; khi đăng ký trong chương trình ưu đãi hiện tại, bạn được giữ mức 5.000 đơn/tháng trong suốt thời gian duy trì gói. Gói Enterprise áp dụng định mức và báo giá theo sản lượng đơn dự kiến trong hợp đồng.",
          },
          {
            id: "po-3",
            q: "Chuyện gì xảy ra nếu vượt quá định mức đơn hàng của gói?",
            a: "Các đơn vượt định mức ở gói Sàn giao dịch sẽ được tính riêng theo điều khoản trong báo giá. Gói Nhà hàng không giới hạn đơn hàng, còn gói Enterprise tuân theo năng lực đã thỏa thuận. Hãy đặt lịch trao đổi để rà soát sản lượng và đơn giá áp dụng.",
          },
          {
            id: "po-4",
            q: "Tất cả các gói có bao gồm quyền truy cập API và MCP không?",
            a: `Có. Mọi gói đều cấp quyền truy cập lập trình viên cho ${brand} API và MCP với các công cụ tương thích, giúp bạn dễ dàng kết nối, mở rộng và tự động hóa ở bất kỳ gói nào.`,
          },
          {
            id: "po-5",
            q: "Tôi có nhận được mã nguồn không?",
            a: `Có. Mã nguồn frontend được mở và đi kèm với mọi sản phẩm (Website đặt hàng, Ứng dụng Khách hàng, Ứng dụng Cửa hàng, Ứng dụng Tài xế và Bảng điều khiển) để đội ngũ của bạn tự do tùy biến trên chính nền tảng đang vận hành. Mã nguồn backend chỉ cung cấp cho khách hàng doanh nghiệp lớn theo hợp đồng bản quyền riêng sau khi ${brand} phê duyệt.`,
          },
          {
            id: "po-6",
            q: `Tôi có thể chạy ${brand} trên hạ tầng đám mây riêng của mình không?`,
            a: `Có, với gói Enterprise. Hệ thống cài đặt chính backend ${brand} lên tài khoản AWS, Google Cloud, Microsoft Azure hoặc Railway của bạn. Mô hình Bring Your Own Cloud có điều khoản riêng: một hợp đồng trọn gói theo kỳ hạn với mức phí cố định, không tính phí theo cửa hàng hay sản lượng giao dịch. Các gói khác vận hành trên hạ tầng do ${brand} quản lý.`,
          },
        ],
      },
      {
        category: "Dùng thử, hủy gói và hoàn tiền",
        items: [
          {
            id: "ec-1",
            q: `Tôi có thể dùng thử ${brand} trước khi cam kết không?`,
            a: "Hãy đặt lịch demo trực tiếp để xem toàn bộ sản phẩm, tích hợp và cấu hình phù hợp với mô hình vận hành của bạn. Phạm vi triển khai và giai đoạn đánh giá (nếu có) sẽ được thống nhất cùng đội ngũ tư vấn.",
          },
          {
            id: "ec-2",
            q: "Tôi có thể hủy gói bất cứ lúc nào không?",
            a: `Có. ${brand} cung cấp các gói thanh toán theo tháng và theo năm, còn gói Enterprise tuân theo hợp đồng riêng. Bạn có thể hủy bất cứ lúc nào và gói dịch vụ vẫn duy trì hoạt động đến hết chu kỳ thanh toán hiện tại.`,
          },
          {
            id: "ec-3",
            q: "Chính sách hoàn tiền như thế nào?",
            a: `Điều kiện hoàn tiền và các cam kết theo chương trình ưu đãi áp dụng theo điều khoản tại thời điểm đăng ký. Hãy liên hệ ${brand} để kiểm tra chi tiết điều khoản áp dụng cho gói của bạn.`,
          },
        ],
      },
      {
        category: "Bắt đầu triển khai",
        items: [
          {
            id: "gs-1",
            q: "Tôi có thể chuyển dữ liệu từ nhà cung cấp khác sang không?",
            a: "Có. Nếu bạn có sẵn dữ liệu, chúng tôi có thể hỗ trợ chuyển đổi đơn hàng, khách hàng, cửa hàng và danh mục món (chi phí tùy gói và phạm vi). Bạn cũng có thể tự chuyển đổi miễn phí bằng các công cụ đi kèm sẵn như API và MCP.",
          },
          {
            id: "gs-2",
            q: `Tôi có thể sử dụng ${brand} ở những quốc gia nào?`,
            a: "Tại bất kỳ đâu trên thế giới. Các đối tác thanh toán, giao hàng và tích hợp sẽ khác nhau tùy khu vực, vì vậy hãy xác nhận trước những kết nối thị trường của bạn cần.",
          },
          {
            id: "gs-3",
            q: "Tôi có thể nhận thanh toán trực tuyến không?",
            a: `Có. ${brand} hiện tích hợp sẵn hơn 50 cổng thanh toán và tiếp tục bổ sung thêm. Hãy liên hệ nếu doanh nghiệp của bạn cần tích hợp một cổng thanh toán cụ thể.`,
          },
          {
            id: "gs-4",
            q: "Hệ thống POS, đối tác giao hàng và cổng thanh toán của tôi có kết nối được không?",
            a: `${brand} kết nối với nhiều hệ thống POS, sàn giao đồ ăn, đơn vị giao hàng và cổng thanh toán được hỗ trợ. Khả năng tương thích phụ thuộc khu vực, loại tài khoản và điều khoản của nhà cung cấp, nên hãy rà soát danh sách kết nối cần thiết trước khi ra mắt.`,
          },
        ],
      },
      {
        category: "Dữ liệu và hỗ trợ",
        items: [
          {
            id: "ds-1",
            q: "Ai là người sở hữu dữ liệu của tôi?",
            a: `Chính bạn. Bạn luôn toàn quyền sở hữu mọi dữ liệu đưa lên ${brand} và có thể xuất dữ liệu bất cứ lúc nào qua các công cụ chúng tôi cung cấp. ${brand} không bao giờ sở hữu dữ liệu của bạn.`,
          },
          {
            id: "ds-2",
            q: "Gói dịch vụ bao gồm mức hỗ trợ nào?",
            a: "Mọi gói dịch vụ đều bao gồm hỗ trợ kỹ thuật. Chúng tôi đặt mục tiêu phản hồi các yêu cầu tiêu chuẩn trong vòng 24 đến 48 giờ.",
          },
          {
            id: "ds-3",
            q: "Gói Enterprise có mặc định bao gồm hỗ trợ 24/7 hoặc SLA không?",
            a: "Không. Hỗ trợ khẩn cấp 24/7 và cam kết SLA theo hợp đồng chỉ áp dụng khi được đưa rõ vào thỏa thuận Enterprise, quy định cụ thể phạm vi, kênh tiếp nhận, ngoại lệ và mức độ dịch vụ.",
          },
        ],
      },
    ];
  }

  return [
    {
      category: "Pricing and billing",
      items: [
        {
          id: "pb-1",
          q: "Do you charge a commission on my orders?",
          a: `No. ${brand} does not charge any commission on your orders. You pay your plan price: per location on Restaurant, and a monthly price on Marketplace and Enterprise. Optional AI ordering has its own AI technology fee, and Marketplace orders beyond the monthly allowance are billed per order.`,
        },
        {
          id: "pb-2",
          q: "What does the AI technology fee cover?",
          a: "The AI technology fee applies only to revenue from eligible orders processed through AI conversations. It does not apply to non-AI orders. Discuss the rates for your operation with our team.",
        },
        {
          id: "pb-3",
          q: "What other costs should I plan for?",
          a: "Payment processing, couriers, messaging, hardware, developer accounts, app-store fees, taxes, custom work, and other third-party costs remain separate unless your proposal includes them.",
        },
      ],
    },
    {
      category: "Plans and orders",
      items: [
        {
          id: "po-1",
          q: "What is included in every plan?",
          a: `Every plan includes the same ${brand} products and features: API and MCP access, white-label branding, all native apps, and multi-business and multi-location management. Restaurant is billed per location; Marketplace includes unlimited businesses and a monthly order allowance. Usage, implementation services, and Enterprise options have separate terms.`,
        },
        {
          id: "po-2",
          q: "How many orders are included in each plan?",
          a: "Restaurant includes unlimited orders. Marketplace normally includes 2,000 orders per month. Sign up during the current limited-time offer and your plan will keep 5,000 orders per month for as long as your subscription remains active. Enterprise orders follow your agreement, and its price is set by the order volume you expect.",
        },
        {
          id: "po-3",
          q: "What happens if I go over my plan’s orders?",
          a: "Additional Marketplace orders are billed separately under the terms of your proposal. Restaurant orders are unlimited, and Enterprise capacity follows your agreement. Book a meeting to review your volume and applicable rates.",
        },
        {
          id: "po-4",
          q: "Do all plans include API and MCP access?",
          a: `Yes. Every plan includes developer access to the ${brand} API and MCP for compatible tools, so you can connect, extend, and automate on any plan.`,
        },
        {
          id: "po-5",
          q: "Do I get the source code?",
          a: `Yes. The frontend source code is open source and included with every product, including the Marketplace Website, Customer App, Business App, Driver App, and Dashboard, so your team can build on the technology that already runs the platform. The backend source code is available only to enterprise organizations, under a separate license agreement and after ${brand} approves the organization.`,
        },
        {
          id: "po-6",
          q: `Can I run ${brand} in my own cloud?`,
          a: `Yes, with an enterprise package. It installs the same ${brand} backend in your AWS, Google Cloud, Microsoft Azure, or Railway account. Bring your own cloud has its own terms: one contract for an agreed term at a fixed rate, with no charges per store or by transaction volume. Every other plan runs on infrastructure ${brand} manages.`,
        },
      ],
    },
    {
      category: "Evaluation, cancellation, and refunds",
      items: [
        {
          id: "ec-1",
          q: `Can I try ${brand} before I commit?`,
          a: "Book a guided demo to review the products, integrations, and setup your operation needs. Implementation and any agreed evaluation are scoped with our team.",
        },
        {
          id: "ec-2",
          q: "Can I cancel anytime?",
          a: `Yes. ${brand} offers monthly and annual plans, and Enterprise terms follow your agreement. You can cancel at any time, and your plan stays active until the end of the current billing cycle.`,
        },
        {
          id: "ec-3",
          q: "Do you offer refunds?",
          a: `Refund eligibility and any offer-specific guarantee follow the terms of your purchase. Contact ${brand} to review the terms that apply to your subscription.`,
        },
      ],
    },
    {
      category: "Getting started",
      items: [
        {
          id: "gs-1",
          q: "Can I migrate from another provider?",
          a: "Yes. If you have your data, we can help you migrate orders, customers, businesses, and more; the price depends on your plan and agreement. You can also migrate on your own at no cost with the tools every plan includes, such as the API and MCP.",
        },
        {
          id: "gs-2",
          q: `Where can I use ${brand}?`,
          a: "Anywhere in the world. Payment, delivery, and integration providers vary by region, so confirm the ones your market needs.",
        },
        {
          id: "gs-3",
          q: "Can I accept online payments?",
          a: `Yes. ${brand} has more than 50 payment integrations, and we keep adding more. Contact us if you need a specific payment integration.`,
        },
        {
          id: "gs-4",
          q: "Will my POS, delivery, and payment providers connect?",
          a: `${brand} connects with supported POS, marketplace, delivery, and payment providers. Availability depends on region, account compatibility, implementation, and provider terms, so confirm the connections your account needs before launch.`,
        },
      ],
    },
    {
      category: "Data and support",
      items: [
        {
          id: "ds-1",
          q: "Who owns my data?",
          a: `You do. You always own the data you put on ${brand}, and you can export it with the tools we provide. ${brand} never owns your data.`,
        },
        {
          id: "ds-2",
          q: "What support is included?",
          a: "Every plan includes support. We aim to reply to standard tickets within 24 to 48 hours.",
        },
        {
          id: "ds-3",
          q: "Does Enterprise include 24/7 support or an SLA by default?",
          a: "No. 24/7 emergency support and contractual SLAs are available only when they are explicitly included in your Enterprise agreement, which defines coverage, channels, exclusions, and service levels.",
        },
      ],
    },
  ];
}

export function PricingFaqAndClosing() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal, setChatOpen } = useUiStore();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const groups = getFaqGroups(siteConfig.name, isVi);

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* SECTION 8: Sticky-Left Categorized FAQ Accordion */}
      <section className="bg-[var(--od-bg)] pt-6 lg:pt-12">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
            {/* Left Sticky Column */}
            <div className="lg:sticky lg:top-[105px] lg:self-start">
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                {isVi ? "CÂU HỎI THƯỜNG GẶP" : "QUESTIONS"}
              </p>
              <h2 className="mt-3 text-[34px] sm:text-[44px] lg:text-[48px] font-bold tracking-[-0.025em] leading-[1.04] text-[var(--od-text)]">
                {isVi ? "Câu hỏi trước khi lựa chọn." : "Questions before you choose."}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                {isVi ? "Chưa thấy câu trả lời bạn cần? " : "Can’t find your answer? "}
                <button
                  type="button"
                  onClick={() => setChatOpen(true)}
                  className="font-semibold text-[var(--od-action-content)] underline underline-offset-2 cursor-pointer"
                >
                  {isVi ? `Trao đổi với ${siteConfig.name}` : `Talk to ${siteConfig.name}`}
                </button>
                .
              </p>
            </div>

            {/* Right Categorized FAQ Groups */}
            <div className="space-y-12">
              {groups.map((group) => (
                <div key={group.category}>
                  <h3 className="pb-3 text-[13.5px] font-semibold text-[var(--od-text-muted)]">
                    {group.category}
                  </h3>
                  <div className="border-t border-[var(--od-border-strong)]">
                    {group.items.map((item) => {
                      const isOpen = !!openIds[item.id];
                      return (
                        <div key={item.id} className="border-b border-[var(--od-border)]">
                          <button
                            type="button"
                            onClick={() => toggle(item.id)}
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
                          >
                            <span className="text-[16px] font-semibold text-[var(--od-text)]">
                              {item.q}
                            </span>
                            <Plus
                              className={cn(
                                "h-4 w-4 shrink-0 text-[var(--od-text-muted)] transition-transform duration-200",
                                isOpen && "rotate-45 text-[var(--od-text)]"
                              )}
                            />
                          </button>
                          {isOpen && (
                            <div className="pb-5 text-[15px] leading-[1.65] text-[var(--od-text-muted)]">
                              {item.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 9: Closing Dark CTA Band ("FIND THE RIGHT PATH") */}
      <section className="bg-[var(--od-bg)] py-20 lg:py-28">
        <Container>
          <div className="rounded-[10px] bg-[#111013] px-7 py-14 sm:p-16 text-white grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,23rem)] lg:gap-20">
            <div>
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[#F9D0D8]">
                {isVi ? "CHỌN LỘ TRÌNH PHÙ HỢP" : "FIND THE RIGHT PATH"}
              </p>
              <h2 className="mt-4 max-w-[20ch] text-[36px] sm:text-[48px] lg:text-[56px] font-bold tracking-[-0.025em] leading-[1.04] text-white">
                {isVi
                  ? "Trao đổi về các kênh, chi nhánh và kết nối doanh nghiệp bạn cần."
                  : "Discuss the channels, locations, and connections your operation needs."}
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-[#A9A8AF]">
                {isVi
                  ? "Chúng tôi sẽ giúp chọn lộ trình khởi điểm khớp với mô hình vận hành và xác định rõ phạm vi triển khai."
                  : "We can match the starting path to your operating model and define the scope that needs to be documented."}
              </p>
            </div>

            <div className="grid gap-3">
              <button
                type="button"
                onClick={() => openDemoModal("Pricing Closing · Request pricing")}
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A] cursor-pointer"
              >
                <span>{isVi ? "Yêu cầu báo giá" : "Request pricing"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => openDemoModal("Pricing · 30 min")}
                className="inline-flex min-h-[46px] w-full items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F] cursor-pointer"
              >
                {isVi ? "Đặt lịch demo" : "Book a demo"}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
