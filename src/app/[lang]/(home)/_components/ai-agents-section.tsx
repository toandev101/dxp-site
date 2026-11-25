"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ClipboardList, MessageCircle, ShieldCheck } from "lucide-react";

import { Link } from "@/components/ui/link";
import useDictionaries from "@/hooks/useDictionaries";

export function AiAgentsSection() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const features = [
    {
      icon: <MessageCircle className="h-5 w-5 text-white shrink-0 mt-0.5" strokeWidth={1.75} />,
      titleEn: "Answer questions",
      titleVi: "Giải đáp thắc mắc",
      descEn: "Help customers navigate the menu.",
      descVi: "Hỗ trợ khách tìm món nhanh chóng trên thực đơn.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-white shrink-0 mt-0.5" strokeWidth={1.75} />,
      titleEn: "Guide choices",
      titleVi: "Gợi ý lựa chọn",
      descEn: "Handle product options and preferences.",
      descVi: "Xử lý tùy chọn món, topping và sở thích ăn uống.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-white shrink-0 mt-0.5" strokeWidth={1.75} />,
      titleEn: "Confirm orders",
      titleVi: "Xác nhận đơn hàng",
      descEn: "Connect the conversation to your operation.",
      descVi: "Kết nối trực tiếp cuộc hội thoại vào quy trình vận hành.",
    },
  ];

  return (
    <section id="ai" className="relative overflow-hidden bg-[#D91842] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[760px]">
        {/* Left Blue Copy Column (aligned to .od-shell left gutter) */}
        <div className="flex items-center py-16 px-4 sm:px-8 lg:py-20 lg:pl-[max(48px,calc(50vw-640px))] lg:pr-14">
          <div className="max-w-[540px]">
            <p className="font-mono text-[11.2px] font-semibold uppercase tracking-[0.12em] text-white/85">
              AI ORDERING AGENTS
            </p>

            <h2 className="mt-5 text-[38px] sm:text-[48px] lg:text-[54px] font-bold tracking-[-0.04em] leading-[1.06] text-white">
              {isVi ? "Đơn hàng tiếp theo bắt đầu từ một cuộc trò chuyện." : "The next order starts with a conversation."}
            </h2>

            <p className="mt-6 text-[17px] leading-[1.6] text-white/90">
              {isVi
                ? "Tổng đài thoại, WhatsApp, chat và web — kết nối cùng danh mục món, giá bán, chi nhánh, thanh toán và giao vận phía sau mọi kênh khác của bạn."
                : "Voice, WhatsApp, chat, and web, connected to the same catalog, prices, locations, payments, and delivery behind your other channels."}
            </p>

            {/* 3 Crisp Feature Rows */}
            <div className="mt-9 space-y-6">
              {features.map((f) => (
                <div key={f.titleEn} className="flex items-start gap-3.5">
                  {f.icon}
                  <div>
                    <h3 className="text-[16px] font-bold leading-snug text-white">
                      {isVi ? f.titleVi : f.titleEn}
                    </h3>
                    <p className="mt-0.5 text-[14.5px] text-white/85">
                      {isVi ? f.descVi : f.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* White Button */}
            <div className="mt-10">
              <Link
                href="/platform/ai-ordering-agents"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-white px-[22px] py-[13px] text-[14.4px] font-semibold text-[#B8123A] transition-colors hover:bg-[#FDECEF]"
              >
                <span>{isVi ? "Khám phá AI ordering" : "Explore AI ordering"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-5 text-[13px] text-white/80">
              {isVi
                ? "Đơn hàng đã xác nhận tự động chuyển tới Merchant App, đội giao vận và hệ thống POS khi kết nối."
                : "Confirmed orders reach the Merchant App and delivery, and your POS when connected."}
            </p>
          </div>
        </div>

        {/* Right Full-Bleed Lifestyle Photo + Crisp Overlaid AI Phone Conversation */}
        <div className="relative min-h-[520px] lg:min-h-full overflow-hidden">
          <Image
            src="/images/ai-table-backdrop.jpg"
            alt="A customer reviews a personalized bowl order with the Your Brand AI ordering assistant."
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />

          {/* Sleek iPhone Overlaid Right-Center Matching Live OPERO Screenshot */}
          <div className="relative z-10 flex h-full w-full items-center justify-center p-6 sm:p-10">
            <div className="w-[270px] sm:w-[305px] rotate-[2deg] rounded-[38px] bg-[#1B1A1F] p-[9px] shadow-[0_35px_80px_-15px_rgba(11,12,13,0.5)] ring-1 ring-white/20">
              <div className="overflow-hidden rounded-[30px] bg-white text-[#151417]">
                {/* Dynamic Island */}
                <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-[#1B1A1F]" />

                {/* App Header */}
                <div className="relative flex items-center justify-center px-4 pt-2.5 pb-2 border-b border-slate-100">
                  <ChevronLeft className="absolute left-3.5 h-4 w-4 text-[#D91842]" />
                  <div className="text-center">
                    <p className="text-[13px] font-bold text-[#151417]">Your Brand</p>
                    <p className="text-[10px] text-[#3A393F]">AI ordering assistant</p>
                  </div>
                </div>

                {/* Chat Body */}
                <div className="p-3.5 space-y-2.5">
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#D91842] px-3 py-2 text-[11px] font-medium text-white">
                    {isVi ? "Món gì có gà, không hành tây nhé." : "Something with chicken, no onion."}
                  </div>

                  <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-[#f3f4f6] px-3 py-2 text-[11px] text-[#151417]">
                    {isVi ? "Bạn thử món Grilled chicken bowl này nhé?" : "How about this grilled chicken bowl?"}
                  </div>

                  {/* Product Card */}
                  <div className="overflow-hidden rounded-2xl border border-[#D9D9DD] bg-white">
                    <div className="relative aspect-[16/11] w-full bg-[#F5F5F6]">
                      <Image
                        src="/images/hero-bowl-main.jpg"
                        alt="Grilled chicken bowl"
                        fill
                        sizes="260px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-[13px] font-bold text-[#151417]">Grilled chicken bowl</p>
                      <p className="text-[11px] text-[#3A393F]">No onion</p>
                      <div className="mt-2.5 rounded-lg bg-[#D91842] py-2 text-center text-[12px] font-semibold text-white">
                        {isVi ? "Xem đơn hàng" : "Review order"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
