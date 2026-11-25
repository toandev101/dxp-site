"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

export function HubHeroAside() {
  const cells = [
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
  const methods = ["Card", "Wallet", "Local method", "Pay on delivery"] as const;
  const [selected, setSelected] = useState<(typeof methods)[number]>("Card");

  return (
    <div className="space-y-4">
      <div className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[14px] font-bold text-white">Checkout configuration</span>
          <span className="font-mono text-[11px] text-[#9A99A1]">Illustrative order</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {methods.map((m) => {
            const active = selected === m;
            return (
              <button
                key={m}
                type="button"
                onClick={() => setSelected(m)}
                className={`rounded-[7px] border px-3.5 py-3 text-left text-[12.5px] font-semibold transition-colors cursor-pointer ${
                  active
                    ? "border-[#D91842] bg-[#142547] text-[#F9D0D8]"
                    : "border-[#2A2A2E] bg-[#1B1A1F] text-white hover:border-[#6E6D75]"
                }`}
              >
                {m}
              </button>
            );
          })}
        </div>

        <dl className="mt-5 space-y-2.5 border-t border-[#1B1A1F] pt-4 font-mono text-[11.5px]">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#9A99A1]">Gateway</dt>
            <dd className="font-semibold text-white">Selected for this project</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#9A99A1]">Merchant account</dt>
            <dd className="font-semibold text-white">Required before launch</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#9A99A1]">Checkout channel</dt>
            <dd className="font-semibold text-white">Confirm per surface</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#9A99A1]">Launch review</dt>
            <dd className="inline-flex items-center gap-1.5 font-semibold text-[#3F7A1C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5E9B2E]" />
              Configuration example
            </dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-2 font-mono text-[11.5px] text-[#9A99A1]">
        <span>Cards</span>
        <span>Wallets</span>
        <span>Bank transfer</span>
        <span>Cash</span>
        <span>Local methods</span>
      </div>
    </div>
  );
}

export function PosHeroAside() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-[10px] border border-[#2A2A2E] bg-[#1B1A1F] p-6">
        <p className="text-[15px] font-bold text-white">Direct connections</p>
        <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#A9A8AF]">
          Square, Clover, Oracle Simphony, LimeTray, Wansoft, Shopify, and PulsePOS connect straight to {BRAND}.
        </p>
      </div>
      <div className="rounded-[10px] border border-[#2A2A2E] bg-[#1B1A1F] p-6">
        <p className="text-[15px] font-bold text-white">Through middleware</p>
        <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#A9A8AF]">
          ItsaCheckmate, Stream, Deliverect, and Mokka connect many more POS systems.
        </p>
      </div>
    </div>
  );
}

export function DeliveryHeroAside() {
  return (
    <div className="space-y-3">
      <div className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-bold text-white">Delivery options</span>
          <span className="font-mono text-[11px] text-[#9A99A1]">Your delivery area</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { name: "Own fleet", sub: "In-house drivers", note: "Assigned automatically", active: false },
            { name: "Courier network", sub: "Delivery companies", note: "On-demand couriers", active: false },
            { name: "Hybrid", sub: "Both", note: "Rules per store", active: true },
          ].map((opt) => (
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
            <dt className="text-[#9A99A1]">Model</dt>
            <dd className="font-semibold text-white text-right">Own fleet, couriers, or both</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-[#9A99A1]">Coverage</dt>
            <dd className="font-semibold text-white text-right">Set by store and zone</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-[#9A99A1]">Customer updates</dt>
            <dd className="font-semibold text-[#3F7A1C] text-right">Live status and courier details</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export function LoyaltyHeroAside() {
  return (
    <div className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-[#1B1A1F] pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#142547] font-mono text-[13px] font-bold text-[#F9D0D8]">
            Ec
          </span>
          <div>
            <p className="text-[14px] font-bold text-white">Example customer</p>
            <p className="font-mono text-[11px] text-[#9A99A1]">Website · App</p>
          </div>
        </div>
        <span className="rounded-full border border-[#2A2A2E] bg-[#17191d] px-2.5 py-1 font-mono text-[10.5px] text-[#A9A8AF]">
          Customer record
        </span>
      </div>

      <dl className="mt-4 divide-y divide-[#1B1A1F] text-[13px]">
        {[
          { k: "Loyalty points", v: "Earned on every order" },
          { k: "Cash wallet", v: "Available at checkout" },
          { k: "Last order", v: "Points added" },
          { k: "Connected to", v: "HubSpot · Mailchimp" },
        ].map((row) => (
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
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#2A2A2E] bg-[#1B1A1F] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-3 bg-[#1B1A1F] px-4 pt-3 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#6E6D75]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#6E6D75]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#6E6D75]" />
        </div>
        <span className="rounded-t-md bg-[#2a2c31] px-3 py-1 text-[11px] font-medium text-[#d4d6da]">
          Analytics
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
            <p className="text-[14px] font-bold">Sales overview</p>
            <p className="text-[10.5px] text-[#6E6D75]">Illustrative</p>
          </div>
          <span className="rounded-[5px] border border-[#D9D9DD] px-2.5 py-1 text-[10.5px] font-semibold text-[#3A393F]">
            Export CSV
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5 text-[10.5px]">
          <span className="rounded-full bg-[#111013] px-2.5 py-1 font-semibold text-white">Stores</span>
          <span className="rounded-full border border-[#D9D9DD] px-2.5 py-1 text-[#3A393F]">Channels</span>
          <span className="rounded-full border border-[#D9D9DD] px-2.5 py-1 text-[#3A393F]">Campaigns</span>
        </div>

        {/* Mini Bar Chart */}
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[
            { label: "Orders", bars: [45, 65, 58, 82, 95] },
            { label: "Traffic", bars: [50, 72, 68, 78, 88] },
            { label: "Conversion", bars: [40, 52, 66, 74, 84] },
          ].map((metric) => (
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
          <p className="font-mono text-[9.5px] uppercase text-[#6E6D75]">Connected tools</p>
          <p className="mt-1 text-[11px] font-medium text-[#3A393F]">
            {BRAND} reports · Google Analytics 4 · Meta Pixel · Google Tag Manager
          </p>
        </div>
      </div>
    </div>
  );
}

export function AutomationHeroAside() {
  const rows = [
    { title: "Webhooks", body: `${BRAND} sends events to the systems you choose.` },
    { title: "Plugins", body: `Your own logic runs inside the ${BRAND} order flow.` },
    { title: "API and MCP", body: "Read and write your data from code or from AI tools." },
  ];

  return (
    <div className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-5 sm:p-6">
      <p className="font-mono text-[11.5px] font-medium text-[#9A99A1]">Three ways to automate</p>
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
  const rows = [
    { k: "Social login", v: "Apple, Google, and Facebook" },
    { k: "One-time codes", v: "SMS or WhatsApp through Twilio" },
    { k: "Bot protection", v: "Google reCAPTCHA" },
    { k: "Where it applies", v: "Your websites and apps" },
  ];

  return (
    <div className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-5 sm:p-6">
      <p className="font-mono text-[12px] font-medium text-[#A9A8AF]">
        Login and security with {BRAND}
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
