"use client";

import { ArrowRight, Clock } from "lucide-react";

import { Container } from "@/components/ui/container";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";

const MEETINGS = [
  {
    id: "guided",
    titleEn: "Guided demo",
    titleVi: "Demo có hướng dẫn",
    duration: "30 min",
    descEn: "A walkthrough of the products relevant to your project, and a look at your current setup.",
    descVi: "Trình bày chi tiết các sản phẩm phù hợp với dự án của bạn và rà soát hệ thống hiện tại.",
  },
  {
    id: "pricing",
    titleEn: "Pricing",
    titleVi: "Tư vấn bảng giá",
    duration: "30 min",
    descEn: "Which pricing path fits your operation, the products and integrations you need, and your questions.",
    descVi: "Lựa chọn gói chi phí phù hợp quy mô vận hành, sản phẩm & tích hợp cần thiết và giải đáp thắc mắc.",
  },
  {
    id: "enterprise",
    titleEn: "Enterprise",
    titleVi: "Doanh nghiệp (Enterprise)",
    duration: "45 min",
    descEn: "Your scale, requirements, products and integrations, for an enterprise operation.",
    descVi: "Đánh giá quy mô, yêu cầu kỹ thuật, tích hợp ERP/POS và hạ tầng cho vận hành cấp tập đoàn.",
  },
  {
    id: "migration",
    titleEn: "Migration planning",
    titleVi: "Lập kế hoạch chuyển đổi",
    duration: "45 min",
    descEn: "Your current platform, what needs to move, and the systems that must stay connected.",
    descVi: "Phân tích nền tảng hiện tại, dữ liệu cần chuyển đổi và các hệ thống cần giữ kết nối liên tục.",
  },
  {
    id: "custom",
    titleEn: "Custom project scoping",
    titleVi: "Tư vấn dự án tùy chỉnh",
    duration: "45 min",
    descEn: "What you need built or changed, and the workflows and systems involved.",
    descVi: "Xác định hạng mục cần phát triển thêm hoặc tùy biến cùng các quy trình và hệ thống liên quan.",
  },
];

export function DemoWalkthroughAndCta() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const { openDemoModal, setChatOpen } = useUiStore();

  return (
    <>
      {/* SECTION 3: Walkthrough Meetings Picker */}
      <section className="bg-[var(--od-bg)] pt-14 sm:pt-20">
        <Container>
          <div className="max-w-[46rem]">
            <p className="text-[11px] font-medium text-[var(--od-action-content)]">
              {isVi ? "Muốn có người hướng dẫn trực tiếp?" : "Prefer a walkthrough?"}
            </p>
            <h2 className="mt-3 text-[34px] sm:text-[46px] lg:text-[52px] font-bold tracking-[-0.025em] leading-[1.04] text-[var(--od-text)]">
              {isVi ? "Chọn chủ đề trao đổi, sau đó chọn giờ." : "Pick the conversation, then the time."}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
              {isVi
                ? "Mọi cuộc hẹn được đặt nhanh chóng qua biểu mẫu lịch họp. Chọn một chủ đề và cửa sổ đặt lịch sẽ mở sẵn với lựa chọn đó."
                : "Every meeting is booked on the Contact page. Choose one, and the calendar opens with that meeting selected."}
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MEETINGS.map((meeting) => {
              const title = isVi ? meeting.titleVi : meeting.titleEn;
              return (
                <li
                  key={meeting.id}
                  className="flex flex-col rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[18px] font-bold tracking-[-0.025em] leading-[1.15] text-[var(--od-text)]">
                      {title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[13px] text-[var(--od-text-muted)] shrink-0">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{meeting.duration}</span>
                    </span>
                  </div>

                  <p className="mt-3 text-[15px] leading-[1.6] text-[var(--od-text-muted)] flex-1">
                    {isVi ? meeting.descVi : meeting.descEn}
                  </p>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => openDemoModal(`${title} · ${meeting.duration}`)}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline cursor-pointer"
                    >
                      <span>{isVi ? "Chọn khung giờ" : "Choose a time"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* SECTION 4: Closing Dark CTA Band */}
      <section className="bg-[var(--od-bg)] py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-[10px] bg-[#111013] px-7 py-14 sm:px-14 sm:py-[72px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Right-side subtle blue radial glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[634px] w-[696px] -translate-y-1/2"
              style={{
                background: "none",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.035em] leading-[1.05] text-white">
                {isVi ? "Sẵn sàng trải nghiệm nền tảng của riêng bạn?" : "Ready to try your own platform?"}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#A9A8AF]">
                {isVi
                  ? "Đặt lịch demo có hướng dẫn để rà soát sản phẩm và mô hình triển khai phù hợp cho doanh nghiệp bạn."
                  : "Book a guided demo to review the products and setup your operation needs."}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openDemoModal("Guided demo · 30 min")}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A] cursor-pointer"
              >
                {isVi ? "Đặt lịch demo" : "Book a demo"}
              </button>

              <button
                type="button"
                onClick={() => setChatOpen(true)}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F] cursor-pointer"
              >
                {isVi ? `Trao đổi với ${siteConfig.name}` : `Talk to ${siteConfig.name}`}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
