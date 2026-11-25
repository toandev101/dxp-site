"use client";

import { ArrowRight, Cloud } from "lucide-react";

import { OperoLockup } from "@/components/brand/opero-logo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export type DeveloperHeroSlug =
  | "developers"
  | "build-vs-buy"
  | "white-label"
  | "source-code-license"
  | "bring-your-own-cloud";

/** 1. /developers hero right-side visual: Public reference checklist JSON card */
export function DevelopersHeroMockup() {
  return (
    <div
      role="img"
      aria-label="A reference checklist for an OPERO integration: operations, authentication, parameters, schemas, and responses. The public reference is read-only and has no approved remote sandbox for interactive testing."
      className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-6 sm:p-7 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.65)]"
    >
      <p className="font-mono text-[12px] text-[#9A99A1]">Public reference checklist</p>

      <div className="mt-4 rounded-[8px] border border-[#1B1A1F] bg-[#111013] p-5 font-mono text-[13.5px] sm:text-[14.5px] leading-[1.85] text-[#d6d8dc]">
        <div className="mb-3 flex flex-wrap items-center gap-2 border-b border-[#2A2A2E] pb-3">
          <span className="font-semibold text-[#F9D0D8]">READ</span>
          <span className="text-white">/api-reference</span>
          <span className="ml-auto rounded bg-[#5E9B2E]/15 px-2 py-0.5 text-[11.5px] font-semibold tracking-[0.04em] text-[#7BC143]">
            PUBLIC
          </span>
        </div>

        <div>{"{"}</div>
        <div className="pl-5">
          &quot;operations&quot;: <span className="text-[#F9D0D8]">&quot;review&quot;</span>,
        </div>
        <div className="pl-5">
          &quot;schemas&quot;: <span className="text-[#F9D0D8]">&quot;inspect&quot;</span>,
        </div>
        <div className="pl-5">
          &quot;testing&quot;: <span className="text-[#F9D0D8]">&quot;read-only&quot;</span>
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
      aria-label="Where each path starts, and where it stops: Build from scratch, Buy a closed SaaS, and Build on OPERO"
      className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-6 sm:p-7 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.65)]"
    >
      <p className="font-mono text-[12px] text-[#9A99A1]">Where each path starts, and where it stops</p>

      <div className="mt-6 space-y-7">
        {/* Track 1: Build from scratch */}
        <div>
          <p className="text-[14px] font-semibold text-white">Build from scratch</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-[#9A99A1]" />
            <div className="h-px flex-1 border-t border-dashed border-[#6E6D75]" />
          </div>
          <div className="mt-2.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-[11.5px] text-[#9A99A1]">
            <span>Starts from an empty repository</span>
            <span className="sm:text-right">Every feature, fix, and update is yours to build</span>
          </div>
        </div>

        {/* Track 2: Buy a closed SaaS */}
        <div className="border-t border-[#222428] pt-6">
          <p className="text-[14px] font-semibold text-white">Buy a closed SaaS</p>
          <div className="mt-3 flex items-center">
            <div className="h-1.5 w-[42%] rounded-l-full bg-[#9A99A1]" />
            <div className="h-px w-[24%] bg-[#6E6D75]" />
            <span className="h-4 w-[2px] shrink-0 bg-white" />
            <div className="flex-1" />
          </div>
          <div className="mt-2.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-[11.5px] text-[#9A99A1]">
            <span>Starts with a working product</span>
            <span className="sm:text-right">Stops at the vendor&apos;s settings and roadmap</span>
          </div>
        </div>

        {/* Track 3: Build on OPERO */}
        <div className="border-t border-[#222428] pt-6">
          <p className="text-[14px] font-semibold text-[#F9D0D8]">Build on {siteConfig.name}</p>
          <div className="mt-3 flex items-center gap-1.5">
            <div className="h-2 w-[82%] rounded-full bg-[#D91842]" />
            <div className="h-px flex-1 border-t-2 border-dotted border-[#D91842]" />
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#F9D0D8]" />
          </div>
          <div className="mt-2.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-[11.5px]">
            <span className="text-[#A9A8AF]">Starts with 20+ products and 1,500+ features</span>
            <span className="text-[#F9D0D8] sm:text-right">Keeps going with your API work, MCP, and frontend code</span>
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
                  brand.accent ? "bg-[#D91842]" : "bg-[#6E6D75]"
                )}
              />
              <span className="text-[14px] font-bold text-white">{brand.name}</span>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-[12px] text-[#9A99A1]">
              <span>Menu</span>
              <span>Locations</span>
              <span>Account</span>
            </div>

            <span
              className={cn(
                "rounded-full px-3 py-1 text-[11.5px] font-semibold",
                brand.accent
                  ? "bg-[#D91842] text-white"
                  : "border border-[#383b42] bg-[#1B1A1F] text-[#A9A8AF]"
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
      aria-label="Repository tree: the web, customer app, merchant and driver frontends are open source; the api directory is managed by OPERO; its source code is licensed only to approved enterprise organizations."
      className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-6 sm:p-7 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.65)]"
    >
      <p className="font-mono text-[13px] font-semibold text-[#F9D0D8]">ordering/</p>

      <ul className="mt-3.5 overflow-hidden rounded-[8px] border border-[#1B1A1F] bg-[#111013] divide-y divide-[#1e2024]">
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
                  row.managed ? "bg-[#6E6D75]" : "bg-[#D91842]"
                )}
              />
              <span className={row.managed ? "text-[#7c7f86]" : "text-white"}>{row.path}</span>
            </span>
            <span className={cn("text-[12.5px]", row.managed ? "text-[#7c7f86]" : "text-[#A9A8AF]")}>
              {row.note}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] text-[#9A99A1]">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#D91842]" />
          <span>Open source (frontend)</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#6E6D75]" />
          <span>Managed by {siteConfig.name} · enterprise license only</span>
        </span>
      </div>
    </div>
  );
}

/** 5. /developers/bring-your-own-cloud hero right-side visual: Cloud providers -> OPERO core map */
export function ByocHeroMockup() {
  const providers = ["AWS", "Google Cloud", "Microsoft Azure", "Railway"];

  return (
    <figure
      aria-label="Where OPERO can be installed: AWS, Google Cloud, Microsoft Azure, and Railway"
      className="rounded-[12px] border border-[#2A2A2E] bg-[#1B1A1F] p-6 sm:p-7 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.65)]"
    >
      <figcaption className="font-mono text-[12px] text-[#9A99A1]">
        Where {siteConfig.name} can be installed
      </figcaption>

      <ul className="mt-4 grid grid-cols-2 gap-3">
        {providers.map((provider) => (
          <li
            key={provider}
            className="flex items-center gap-2.5 rounded-[8px] border border-[#2A2A2E] bg-[#111013] px-4 py-3.5 text-[14px] font-semibold text-white"
          >
            <Cloud className="h-[18px] w-[18px] shrink-0 text-[#F9D0D8]" strokeWidth={1.75} />
            <span>{provider}</span>
          </li>
        ))}
      </ul>

      <div className="mx-auto h-7 w-[1.5px] bg-[#D91842]" aria-hidden="true" />

      <div className="flex flex-col items-center rounded-[20px] border border-[#D91842] bg-[#1B1A1F] px-6 py-5 text-center">
        <OperoLockup variant="dark" className="h-6 w-auto" />
        <span className="mt-2 text-[12px] font-medium text-[#F9D0D8]">Installed in your cloud account</span>
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
