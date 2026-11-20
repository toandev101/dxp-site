"use client";

import { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";

import { useUiStore } from "@/stores/ui-store";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";

interface ChatMsg {
  role: "assistant" | "user";
  text: string;
}

export function FloatingChatWidget() {
  const { isChatOpen, setChatOpen, openDemoModal } = useUiStore();
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: "assistant",
      text: isVi
        ? `Xin chào! Tôi là trợ lý ${siteConfig.name}. Bạn muốn tìm hiểu về website đặt hàng, app di động, bảng giá hay đặt lịch demo?`
        : `Hi there! Welcome to ${siteConfig.name}. Ask about branded websites, native apps, pricing, or book a live demo.`,
    },
  ]);

  const sendQuick = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = isVi
      ? "Cảm ơn bạn đã quan tâm! Nền tảng của chúng tôi áp dụng 0% hoa hồng đơn hàng và hỗ trợ triển khai trọn gói trong vài ngày. Bạn có muốn mở lịch đặt demo trực tiếp không?"
      : "Great question! Our platform charges 0% commission on orders and launches in days under your brand. Would you like to schedule a quick live walkthrough?";
    setMessages((prev) => [...prev, { role: "user", text: trimmed }, { role: "assistant", text: reply }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {isChatOpen && (
        <div className="mb-3 w-[340px] sm:w-[370px] overflow-hidden rounded-2xl border border-c-border bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-c-primary px-4 py-3.5 text-white">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">{siteConfig.name}</p>
                <p className="text-[11px] text-blue-100">
                  {isVi ? "Trực tuyến · Phản hồi tức thì" : "Online · Instant replies"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
              className="rounded-lg p-1 text-white/80 hover:bg-white/15 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-72 overflow-y-auto p-4 space-y-3 bg-c-surface">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.role === "user"
                    ? "ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-c-primary px-3.5 py-2.5 text-xs text-white"
                    : "max-w-[86%] rounded-2xl rounded-tl-sm border border-c-border bg-white px-3.5 py-2.5 text-xs text-c-base leading-relaxed"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="border-t border-c-border bg-white p-3 space-y-2.5">
            <div className="flex flex-wrap gap-1.5">
              {[
                isVi ? "Xem bảng giá" : "Pricing & 0% commission",
                isVi ? "Đặt lịch demo" : "Book a live demo",
              ].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    if (chip.toLowerCase().includes("demo")) {
                      setChatOpen(false);
                      openDemoModal("chat_widget");
                    } else {
                      sendQuick(chip);
                    }
                  }}
                  className="rounded-full border border-c-border bg-c-surface px-2.5 py-1 text-[11px] font-medium text-c-dark hover:border-c-primary hover:text-c-primary"
                >
                  {chip}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendQuick(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isVi ? "Nhập tin nhắn..." : "Write a message..."}
                className="flex-1 rounded-lg border border-c-border bg-c-surface px-3 py-2 text-xs text-c-dark placeholder:text-c-muted focus:border-c-primary focus:bg-white focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-c-primary text-white hover:bg-c-primary-hover"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Exact Ordering.co bright blue circular floating chat button */}
      <button
        type="button"
        onClick={() => setChatOpen(!isChatOpen)}
        aria-label="Open live chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-c-primary text-white shadow-[0_8px_24px_rgba(37,99,235,0.42)] transition-transform duration-200 hover:scale-105 hover:bg-c-primary-hover"
      >
        {isChatOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6 fill-current" />}
      </button>
    </div>
  );
}
