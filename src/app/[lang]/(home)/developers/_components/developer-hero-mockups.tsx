"use client";

import { ArrowRight, Cloud } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export type DeveloperHeroSlug =
  | "developers"
  | "build-vs-buy"
  | "white-label"
  | "source-code-license"
  | "bring-your-own-cloud";

function OrderingRingSmall() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" fill="none" aria-hidden="true">
      <path d="M 7.5 9.2 A 11 11 0 0 1 17.5 5.1" stroke="#10B981" strokeWidth="3.1" strokeLinecap="round" />
      <path d="M 20.5 6 A 11 11 0 0 1 26.8 14.5" stroke="#266DF0" strokeWidth="3.1" strokeLinecap="round" />
      <path d="M 26.4 18.8 A 11 11 0 0 1 18.8 26.6" stroke="#DB2777" strokeWidth="3.1" strokeLinecap="round" />
      <path d="M 14.6 26.9 A 11 11 0 0 1 6.2 20.8" stroke="#F59E0B" strokeWidth="3.1" strokeLinecap="round" />
      <path d="M 5.2 16.8 A 11 11 0 0 1 5.9 12.2" stroke="#22C55E" strokeWidth="3.1" strokeLinecap="round" />
    </svg>
  );
}

/** 1. /developers hero right-side visual: Public reference checklist JSON card */
export function DevelopersHeroMockup() {
  return (
    <div
      role="img"
      aria-label="A reference checklist for an Ordering.co integration: operations, authentication, parameters, schemas, and responses. The public reference is read-only and has no approved remote sandbox for interactive testing."
      className="rounded-[12px] border border-[#2a2c30] bg-[#141517] p-6 sm:p-7 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.65)]"
    >
      <p className="font-mono text-[12px] text-[#989aa0]">Public reference checklist</p>

      <div className="mt-4 rounded-[8px] border border-[#26282c] bg-[#0b0c0d] p-5 font-mono text-[13.5px] sm:text-[14.5px] leading-[1.85] text-[#d6d8dc]">
        <div className="mb-3 flex flex-wrap items-center gap-2 border-b border-[#1f2125] pb-3">
          <span className="font-semibold text-[#639bff]">READ</span>
          <span className="text-white">/api-reference</span>
          <span className="ml-auto rounded bg-[#10b981]/15 px-2 py-0.5 text-[11.5px] font-semibold tracking-[0.04em] text-[#34d399]">
            PUBLIC
          </span>
        </div>

        <div>{"{"}</div>
        <div className="pl-5">
          &quot;operations&quot;: <span className="text-[#92b5ff]">&quot;review&quot;</span>,
        </div>
        <div className="pl-5">
          &quot;schemas&quot;: <span className="text-[#92b5ff]">&quot;inspect&quot;</span>,
        </div>
        <div className="pl-5">
          &quot;testing&quot;: <span className="text-[#92b5ff]">&quot;read-only&quot;</span>
        </div>
        <div>{"}"}</div>
      </div>
    </div>
  );
}

/** 2. /developers/build-vs-buy hero right-side visual: 3 horizontal path tracks */
export function BuildVsBuyHeroMockup() {
  return (
    <div
      role="img"
      aria-label="Where each path starts, and where it stops: Build from scratch, Buy a closed SaaS, and Build on Ordering.co"
      className="rounded-[12px] border border-[#2a2c30] bg-[#141517] p-6 sm:p-7 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.65)]"
    >
      <p className="font-mono text-[12px] text-[#989aa0]">Where each path starts, and where it stops</p>

      <div className="mt-6 space-y-7">
        {/* Track 1: Build from scratch */}
        <div>
          <p className="text-[14px] font-semibold text-white">Build from scratch</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-[#989aa0]" />
            <div className="h-px flex-1 border-t border-dashed border-[#5b5e64]" />
          </div>
          <div className="mt-2.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-[11.5px] text-[#989aa0]">
            <span>Starts from an empty repository</span>
            <span className="sm:text-right">Every feature, fix, and update is yours to build</span>
          </div>
        </div>

        {/* Track 2: Buy a closed SaaS */}
        <div className="border-t border-[#222428] pt-6">
          <p className="text-[14px] font-semibold text-white">Buy a closed SaaS</p>
          <div className="mt-3 flex items-center">
            <div className="h-1.5 w-[42%] rounded-l-full bg-[#989aa0]" />
            <div className="h-px w-[24%] bg-[#5b5e64]" />
            <span className="h-4 w-[2px] shrink-0 bg-white" />
            <div className="flex-1" />
          </div>
          <div className="mt-2.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-[11.5px] text-[#989aa0]">
            <span>Starts with a working product</span>
            <span className="sm:text-right">Stops at the vendor&apos;s settings and roadmap</span>
          </div>
        </div>

        {/* Track 3: Build on Ordering.co */}
        <div className="border-t border-[#222428] pt-6">
          <p className="text-[14px] font-semibold text-[#639bff]">Build on {siteConfig.name}</p>
          <div className="mt-3 flex items-center gap-1.5">
            <div className="h-2 w-[82%] rounded-full bg-[#266df0] shadow-[0_0_18px_rgba(38,109,240,0.45)]" />
            <div className="h-px flex-1 border-t-2 border-dotted border-[#266df0]" />
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#639bff]" />
          </div>
          <div className="mt-2.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-[11.5px]">
            <span className="text-[#c4c6ca]">Starts with 20+ products and 1,500+ features</span>
            <span className="text-[#92b5ff] sm:text-right">Keeps going with your API work, MCP, and frontend code</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 3. /developers/white-label hero right-side visual: Two illustrative brand header treatments */
export function WhiteLabelHeroMockup() {
  const brands = [
    {
      name: "Verde Cocina",
      domain: "verdecocina.example",
      accent: true,
    },
    {
      name: "Luna Pizza",
      domain: "lunapizza.example",
      accent: false,
    },
  ];

  return (
    <div
      role="img"
      aria-label="Two illustrative storefront brand treatments with different names, colors, and sample domains."
      className="space-y-3.5"
    >
      {brands.map((brand) => (
        <div
          key={brand.name}
          className={cn(
            "rounded-[12px] border p-5 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.65)]",
            brand.accent ? "border-[#2e3239] bg-[#15171b]" : "border-[#232529] bg-[#111215]"
          )}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "h-5 w-5 rounded-[5px] shrink-0",
                  brand.accent ? "bg-[#266df0]" : "bg-[#5b5e64]"
                )}
              />
              <span className="text-[14px] font-bold text-white">{brand.name}</span>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-[12px] text-[#989aa0]">
              <span>Menu</span>
              <span>Locations</span>
              <span>Account</span>
            </div>

            <span
              className={cn(
                "rounded-full px-3 py-1 text-[11.5px] font-semibold",
                brand.accent
                  ? "bg-[#266df0] text-white"
                  : "border border-[#383b42] bg-[#1c1e22] text-[#c4c6ca]"
              )}
            >
              Cart
            </span>
          </div>

          <div className="mt-4 border-t border-[#222429] pt-3">
            <p className="font-mono text-[12px] text-[#7c7f86]">{brand.domain}</p>
          </div>
        </div>
      ))}

      <p className="pt-1 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-[#7c7f86]">
        Illustrative brand treatments
      </p>
    </div>
  );
}

/** 4. /developers/source-code-license hero right-side visual: Repository tree card */
export function SourceCodeHeroMockup() {
  const rows = [
    { path: "web/", note: "Ordering Web storefront", managed: false },
    { path: "apps/", note: "Customer apps, iOS and Android", managed: false },
    { path: "merchant/", note: "Merchant App", managed: false },
    { path: "driver/", note: "Driver App", managed: false },
    { path: "api/", note: `${siteConfig.name} API and backend`, managed: true },
  ];

  return (
    <div
      role="img"
      aria-label="Repository tree: the web, customer app, merchant and driver frontends are open source; the api directory is managed by Ordering.co; its source code is licensed only to approved enterprise organizations."
      className="rounded-[12px] border border-[#2a2c30] bg-[#141517] p-6 sm:p-7 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.65)]"
    >
      <p className="font-mono text-[13px] font-semibold text-[#92b5ff]">ordering/</p>

      <ul className="mt-3.5 overflow-hidden rounded-[8px] border border-[#26282c] bg-[#0b0c0d] divide-y divide-[#1e2024]">
        {rows.map((row) => (
          <li
            key={row.path}
            className={cn(
              "flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-[13.5px]",
              row.managed ? "bg-[#121316]/80" : "bg-transparent"
            )}
          >
            <span className="flex items-center gap-2.5 font-mono font-semibold">
              <span
                className={cn(
                  "h-2 w-2 rounded-full shrink-0",
                  row.managed ? "bg-[#5b5e64]" : "bg-[#266df0]"
                )}
              />
              <span className={row.managed ? "text-[#7c7f86]" : "text-white"}>{row.path}</span>
            </span>
            <span className={cn("text-[12.5px]", row.managed ? "text-[#7c7f86]" : "text-[#c4c6ca]")}>
              {row.note}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] text-[#989aa0]">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#266df0]" />
          <span>Open source (frontend)</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#5b5e64]" />
          <span>Managed by {siteConfig.name} · enterprise license only</span>
        </span>
      </div>
    </div>
  );
}

/** 5. /developers/bring-your-own-cloud hero right-side visual: Cloud providers -> Ordering.co core map */
export function ByocHeroMockup() {
  const providers = ["AWS", "Google Cloud", "Microsoft Azure", "Railway"];

  return (
    <figure
      aria-label="Where Ordering.co can be installed: AWS, Google Cloud, Microsoft Azure, and Railway"
      className="rounded-[12px] border border-[#2a2c30] bg-[#141517] p-6 sm:p-7 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.65)]"
    >
      <figcaption className="font-mono text-[12px] text-[#989aa0]">
        Where {siteConfig.name} can be installed
      </figcaption>

      <ul className="mt-4 grid grid-cols-2 gap-3">
        {providers.map((provider) => (
          <li
            key={provider}
            className="flex items-center gap-2.5 rounded-[8px] border border-[#2b2e33] bg-[#0b0c0d] px-4 py-3.5 text-[14px] font-semibold text-white"
          >
            <Cloud className="h-[18px] w-[18px] shrink-0 text-[#639bff]" strokeWidth={1.75} />
            <span>{provider}</span>
          </li>
        ))}
      </ul>

      <div className="mx-auto h-7 w-[1.5px] bg-[#266df0]" aria-hidden="true" />

      <div className="flex flex-col items-center rounded-[10px] border border-[#266df0] bg-[#0e1526] px-6 py-5 text-center shadow-[0_0_32px_rgba(38,109,240,0.2)]">
        <div className="inline-flex items-center gap-2.5">
          <OrderingRingSmall />
          <span className="text-[20px] font-semibold tracking-[-0.025em] text-white">{siteConfig.name}</span>
        </div>
        <span className="mt-1.5 font-mono text-[12px] text-[#92b5ff]">Installed in your cloud account</span>
      </div>
    </figure>
  );
}

export function DeveloperHeroMockup({ slug }: { slug: DeveloperHeroSlug }) {
  switch (slug) {
    case "developers":
      return <DevelopersHeroMockup />;
    case "build-vs-buy":
      return <BuildVsBuyHeroMockup />;
    case "white-label":
      return <WhiteLabelHeroMockup />;
    case "source-code-license":
      return <SourceCodeHeroMockup />;
    case "bring-your-own-cloud":
      return <ByocHeroMockup />;
  }
}
