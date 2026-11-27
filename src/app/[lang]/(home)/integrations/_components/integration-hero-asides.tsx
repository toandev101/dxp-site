"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

export function HubHeroAside() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const cells = isVi
    ? [
        { title: "Thanh toán", desc: "Cổng thanh toán toàn cầu" },
        { title: "POS", desc: "Đồng bộ thực đơn & đơn hàng" },
        { title: "Giao hàng", desc: "Đối tác & tài xế nội bộ" },
        { title: "Dữ liệu", desc: "Báo cáo & tự động hóa" },
      ]
    : [
        { title: "Payments", desc: "Gateways worldwide" },
        { title: "POS", desc: "Menus and orders in sync" },
        { title: "Delivery", desc: "Couriers and your drivers" },
        { title: "Data", desc: "Reports and automation" },
      ];

  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-[10px] border border-[#2A2A2E] bg-[#1B1A1F]">
      {cells.map((cell, idx) => (
        <div
          key={cell.title}
          className={`p-6 sm:p-7 ${idx % 2 === 1 ? "border-l border-[#2A2A2E]" : ""} ${
            idx >= 2 ? "border-t border-[#2A2A2E]" : ""
          }`}
        >
          <p className="text-[20px] sm:text-[22px] font-bold tracking-[-0.02em] text-white">{cell.title}</p>
          <p className="mt-1.5 font-mono text-[12px] leading-[1.45] text-[#9A99A1]">{cell.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function PaymentsHeroAside() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const methods = isVi
    ? [
        { key: "card", label: "Thẻ" },
        { key: "wallet", label: "Ví điện tử" },
        { key: "local", label: "Nội địa" },
        { key: "cod", label: "Thu hộ (COD)" },
      ]
    : [
        { key: "card", label: "Card" },
        { key: "wallet", label: "Wallet" },
        { key: "local", label: "Local method" },
        { key: "cod", label: "Pay on delivery" },
      ];
  const [selected, setSelected] = useState<string>("card");

  return (
    <div className="space-y-4">
      <div className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[14px] font-bold text-white">
            {isVi ? "Cấu hình thanh toán" : "Checkout configuration"}
          </span>
          <span className="font-mono text-[11px] text-[#9A99A1]">
            {isVi ? "Đơn hàng minh họa" : "Illustrative order"}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {methods.map((m) => {
            const active = selected === m.key;
            return (
              <button
                key={m.key}
                type="button"
                onClick={() => setSelected(m.key)}
                className={`rounded-[7px] border px-3.5 py-3 text-left text-[12.5px] font-semibold transition-colors cursor-pointer ${
                  active
                    ? "border-[#D91842] bg-[#142547] text-[#F9D0D8]"
                    : "border-[#2A2A2E] bg-[#1B1A1F] text-white hover:border-[#6E6D75]"
                }`}
              >
                {m.label}
              </button>
            );
          })}
        </div>

        <dl className="mt-5 space-y-2.5 border-t border-[#1B1A1F] pt-4 font-mono text-[11.5px]">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#9A99A1]">{isVi ? "Cổng thanh toán" : "Gateway"}</dt>
            <dd className="font-semibold text-white">
              {isVi ? "Chọn theo dự án" : "Selected for this project"}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#9A99A1]">{isVi ? "Tài khoản merchant" : "Merchant account"}</dt>
            <dd className="font-semibold text-white">
              {isVi ? "Cần có trước khi vận hành" : "Required before launch"}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#9A99A1]">{isVi ? "Kênh thanh toán" : "Checkout channel"}</dt>
            <dd className="font-semibold text-white">
              {isVi ? "Xác nhận theo từng kênh" : "Confirm per surface"}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#9A99A1]">{isVi ? "Kiểm tra vận hành" : "Launch review"}</dt>
            <dd className="inline-flex items-center gap-1.5 font-semibold text-[#3F7A1C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5E9B2E]" />
              {isVi ? "Cấu hình minh họa" : "Configuration example"}
            </dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-2 font-mono text-[11.5px] text-[#9A99A1]">
        <span>{isVi ? "Thẻ" : "Cards"}</span>
        <span>{isVi ? "Ví điện tử" : "Wallets"}</span>
        <span>{isVi ? "Chuyển khoản" : "Bank transfer"}</span>
        <span>{isVi ? "Tiền mặt" : "Cash"}</span>
        <span>{isVi ? "Nội địa" : "Local methods"}</span>
      </div>
    </div>
  );
}

export function PosHeroAside() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-[10px] border border-[#2A2A2E] bg-[#1B1A1F] p-6">
        <p className="text-[15px] font-bold text-white">
          {isVi ? "Kết nối trực tiếp" : "Direct connections"}
        </p>
        <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#A9A8AF]">
          {isVi
            ? `Square, Clover, Oracle Simphony, LimeTray, Wansoft, Shopify và PulsePOS kết nối thẳng vào ${BRAND}.`
            : `Square, Clover, Oracle Simphony, LimeTray, Wansoft, Shopify, and PulsePOS connect straight to ${BRAND}.`}
        </p>
      </div>
      <div className="rounded-[10px] border border-[#2A2A2E] bg-[#1B1A1F] p-6">
        <p className="text-[15px] font-bold text-white">
          {isVi ? "Qua lớp trung gian (Middleware)" : "Through middleware"}
        </p>
        <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#A9A8AF]">
          {isVi
            ? "ItsaCheckmate, Stream, Deliverect và Mokka mở rộng kết nối tới hàng trăm hệ thống POS khác."
            : "ItsaCheckmate, Stream, Deliverect, and Mokka connect many more POS systems."}
        </p>
      </div>
    </div>
  );
}

export function DeliveryHeroAside() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const options = isVi
    ? [
        { name: "Đội xe riêng", sub: "Tài xế nội bộ", note: "Gán đơn tự động", active: false },
        { name: "Đối tác giao hàng", sub: "Hãng vận chuyển", note: "Tài xế theo yêu cầu", active: false },
        { name: "Kết hợp", sub: "Cả hai mô hình", note: "Quy tắc theo cửa hàng", active: true },
      ]
    : [
        { name: "Own fleet", sub: "In-house drivers", note: "Assigned automatically", active: false },
        { name: "Courier network", sub: "Delivery companies", note: "On-demand couriers", active: false },
        { name: "Hybrid", sub: "Both", note: "Rules per store", active: true },
      ];

  return (
    <div className="space-y-3">
      <div className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-bold text-white">
            {isVi ? "Tùy chọn giao hàng" : "Delivery options"}
          </span>
          <span className="font-mono text-[11px] text-[#9A99A1]">
            {isVi ? "Khu vực giao hàng của bạn" : "Your delivery area"}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {options.map((opt) => (
            <div
              key={opt.name}
              className={`rounded-[8px] border p-3 ${
                opt.active
                  ? "border-[#D91842] bg-[#142547]"
                  : "border-[#2A2A2E] bg-[#17191d]"
              }`}
            >
              <p className={`text-[12px] font-bold ${opt.active ? "text-[#F9D0D8]" : "text-white"}`}>{opt.name}</p>
              <p className="mt-0.5 text-[10.5px] text-[#A9A8AF]">{opt.sub}</p>
              <p className="mt-2 font-mono text-[9.5px] text-[#9A99A1]">{opt.note}</p>
            </div>
          ))}
        </div>

        <dl className="mt-4 space-y-2 border-t border-[#1B1A1F] pt-4 font-mono text-[11.5px]">
          <div className="flex justify-between gap-3">
            <dt className="text-[#9A99A1]">{isVi ? "Mô hình" : "Model"}</dt>
            <dd className="font-semibold text-white text-right">
              {isVi ? "Đội xe riêng, đối tác hoặc kết hợp" : "Own fleet, couriers, or both"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-[#9A99A1]">{isVi ? "Phạm vi" : "Coverage"}</dt>
            <dd className="font-semibold text-white text-right">
              {isVi ? "Thiết lập theo cửa hàng và vùng giao" : "Set by store and zone"}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-[#9A99A1]">{isVi ? "Cập nhật cho khách" : "Customer updates"}</dt>
            <dd className="font-semibold text-[#3F7A1C] text-right">
              {isVi ? "Trạng thái trực tiếp & thông tin tài xế" : "Live status and courier details"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export function LoyaltyHeroAside() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const rows = isVi
    ? [
        { k: "Điểm thưởng", v: "Tích lũy trên mỗi đơn" },
        { k: "Ví tiền mặt", v: "Dùng ngay khi thanh toán" },
        { k: "Đơn gần nhất", v: "Đã cộng điểm" },
        { k: "Kết nối tới", v: "HubSpot · Mailchimp" },
      ]
    : [
        { k: "Loyalty points", v: "Earned on every order" },
        { k: "Cash wallet", v: "Available at checkout" },
        { k: "Last order", v: "Points added" },
        { k: "Connected to", v: "HubSpot · Mailchimp" },
      ];

  return (
    <div className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-[#1B1A1F] pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#142547] font-mono text-[13px] font-bold text-[#F9D0D8]">
            {isVi ? "KH" : "Ec"}
          </span>
          <div>
            <p className="text-[14px] font-bold text-white">
              {isVi ? "Khách hàng mẫu" : "Example customer"}
            </p>
            <p className="font-mono text-[11px] text-[#9A99A1]">
              {isVi ? "Website · Ứng dụng" : "Website · App"}
            </p>
          </div>
        </div>
        <span className="rounded-full border border-[#2A2A2E] bg-[#17191d] px-2.5 py-1 font-mono text-[10.5px] text-[#A9A8AF]">
          {isVi ? "Hồ sơ khách hàng" : "Customer record"}
        </span>
      </div>

      <dl className="mt-4 divide-y divide-[#1B1A1F] text-[13px]">
        {rows.map((row) => (
          <div key={row.k} className="flex items-center justify-between gap-3 py-3">
            <dt className="text-[#9A99A1]">{row.k}</dt>
            <dd className="font-semibold text-white text-right">{row.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function AnalyticsHeroAside() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const metrics = isVi
    ? [
        { label: "Đơn hàng", bars: [45, 65, 58, 82, 95] },
        { label: "Lưu lượng", bars: [50, 72, 68, 78, 88] },
        { label: "Chuyển đổi", bars: [40, 52, 66, 74, 84] },
      ]
    : [
        { label: "Orders", bars: [45, 65, 58, 82, 95] },
        { label: "Traffic", bars: [50, 72, 68, 78, 88] },
        { label: "Conversion", bars: [40, 52, 66, 74, 84] },
      ];

  return (
    <div className="overflow-hidden rounded-[20px] border border-[#2A2A2E] bg-[#1B1A1F] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-3 bg-[#1B1A1F] px-4 pt-3 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#6E6D75]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#6E6D75]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#6E6D75]" />
        </div>
        <span className="rounded-t-md bg-[#2a2c31] px-3 py-1 text-[11px] font-medium text-[#d4d6da]">
          {isVi ? "Phân tích" : "Analytics"}
        </span>
      </div>
      <div className="bg-[#1B1A1F] px-4 pb-2.5">
        <div className="flex items-center gap-2 rounded-md bg-[#27292e] px-3 py-1.5 text-[11px] text-[#A9A8AF]">
          <span className="text-[#6E6D75]">‹ ›</span>
          <Lock className="h-3 w-3 text-[#9A99A1]" />
          <span>dashboard.opero.vn/reports</span>
        </div>
      </div>

      <div className="bg-white p-5 text-[#151417]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[14px] font-bold">{isVi ? "Tổng quan doanh thu" : "Sales overview"}</p>
            <p className="text-[10.5px] text-[#6E6D75]">{isVi ? "Minh họa" : "Illustrative"}</p>
          </div>
          <span className="rounded-[5px] border border-[#D9D9DD] px-2.5 py-1 text-[10.5px] font-semibold text-[#3A393F]">
            {isVi ? "Xuất CSV" : "Export CSV"}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5 text-[10.5px]">
          <span className="rounded-full bg-[#111013] px-2.5 py-1 font-semibold text-white">
            {isVi ? "Cửa hàng" : "Stores"}
          </span>
          <span className="rounded-full border border-[#D9D9DD] px-2.5 py-1 text-[#3A393F]">
            {isVi ? "Kênh bán" : "Channels"}
          </span>
          <span className="rounded-full border border-[#D9D9DD] px-2.5 py-1 text-[#3A393F]">
            {isVi ? "Chiến dịch" : "Campaigns"}
          </span>
        </div>

        {/* Mini Bar Chart */}
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[8px] border border-[#D9D9DD] p-2.5">
              <p className="text-[10px] font-semibold text-[#3A393F]">{metric.label}</p>
              <div className="mt-2.5 flex h-12 items-end gap-1">
                {metric.bars.map((h, i) => (
                  <span
                    key={i}
                    className={`flex-1 rounded-t-[2px] ${i === 4 ? "bg-[#D91842]" : "bg-[#dbe7fe]"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-[#D9D9DD] pt-3">
          <p className="font-mono text-[9.5px] uppercase text-[#6E6D75]">
            {isVi ? "Công cụ đã kết nối" : "Connected tools"}
          </p>
          <p className="mt-1 text-[11px] font-medium text-[#3A393F]">
            {isVi
              ? `Báo cáo ${BRAND} · Google Analytics 4 · Meta Pixel · Google Tag Manager`
              : `${BRAND} reports · Google Analytics 4 · Meta Pixel · Google Tag Manager`}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AutomationHeroAside() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const rows = isVi
    ? [
        { title: "Webhooks", body: `${BRAND} gửi sự kiện theo thời gian thực tới các hệ thống bạn chọn.` },
        { title: "Plugins", body: `Logic nghiệp vụ riêng của bạn chạy trực tiếp trong luồng đơn hàng ${BRAND}.` },
        { title: "API và MCP", body: "Đọc và ghi dữ liệu từ mã nguồn hoặc trực tiếp từ các công cụ AI." },
      ]
    : [
        { title: "Webhooks", body: `${BRAND} sends events to the systems you choose.` },
        { title: "Plugins", body: `Your own logic runs inside the ${BRAND} order flow.` },
        { title: "API and MCP", body: "Read and write your data from code or from AI tools." },
      ];

  return (
    <div className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-5 sm:p-6">
      <p className="font-mono text-[11.5px] font-medium text-[#9A99A1]">
        {isVi ? "Ba cách để tự động hóa" : "Three ways to automate"}
      </p>
      <div className="mt-4 divide-y divide-[#1B1A1F]">
        {rows.map((r) => (
          <div key={r.title} className="py-3.5 first:pt-1 last:pb-0">
            <p className="text-[15px] font-bold text-white">{r.title}</p>
            <p className="mt-1 text-[13px] leading-[1.55] text-[#A9A8AF]">{r.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LoginSecurityHeroAside() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const rows = isVi
    ? [
        { k: "Đăng nhập mạng xã hội", v: "Apple, Google và Facebook" },
        { k: "Mã xác thực một lần", v: "SMS hoặc WhatsApp qua Twilio" },
        { k: "Chống bot", v: "Google reCAPTCHA" },
        { k: "Phạm vi áp dụng", v: "Website và ứng dụng của bạn" },
      ]
    : [
        { k: "Social login", v: "Apple, Google, and Facebook" },
        { k: "One-time codes", v: "SMS or WhatsApp through Twilio" },
        { k: "Bot protection", v: "Google reCAPTCHA" },
        { k: "Where it applies", v: "Your websites and apps" },
      ];

  return (
    <div className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-5 sm:p-6">
      <p className="font-mono text-[12px] font-medium text-[#A9A8AF]">
        {isVi ? `Đăng nhập và bảo mật cùng ${BRAND}` : `Login and security with ${BRAND}`}
      </p>
      <dl className="mt-4 divide-y divide-[#1B1A1F] rounded-[8px] border border-[#1B1A1F] bg-[#1B1A1F] px-4 text-[13px]">
        {rows.map((r) => (
          <div key={r.k} className="flex flex-wrap items-center justify-between gap-2 py-3.5">
            <dt className="text-[#9A99A1]">{r.k}</dt>
            <dd className="font-semibold text-white text-right">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
