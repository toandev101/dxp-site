"use client";

import { useMemo, useState } from "react";
import { ArrowRight, MapPin, Search, X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import {
  ALL_CUSTOMERS,
  CUSTOMER_REGIONS,
  CUSTOMER_SEGMENTS,
  type CustomerRegion,
  type CustomerSegment,
  type CustomerStoryCard,
} from "../_data/customers-data";
import { AlseaLogoMark, CustomerBrandBadge } from "./customer-brand-marks";

const BRAND = siteConfig.name;

const HERO_LOGO_TILES = [
  { slug: "alsea", name: "Alsea" },
  { slug: "dominos-mexico-and-colombia", name: "Domino's Pizza" },
  { slug: "burger-king", name: "Burger King Mexico" },
  { slug: "chilis-mexico", name: "Chili's Mexico" },
  { slug: "p-f-changs", name: "P.F. Chang's Mexico" },
  { slug: "vips", name: "Vips Mexico" },
];

function WowHomePreviewMockup() {
  const brands = [
    { name: "Starbucks", color: "bg-[#00704a] text-white" },
    { name: "Domino's", color: "bg-[#006491] text-white" },
    { name: "Burger King", color: "bg-[#d62300] text-white" },
    { name: "Vips", color: "bg-[#e30613] text-white" },
    { name: "Chili's", color: "bg-[#b91c1c] text-white" },
    { name: "P.F. Chang's", color: "bg-[#111827] text-white" },
  ];

  return (
    <div
      role="img"
      aria-label="WOW+ home page, where guests choose how to order and pick one of Alsea's restaurant brands"
      className="overflow-hidden rounded-[12px] border border-[var(--od-border)] bg-white shadow-[0_18px_48px_-20px_rgba(11,12,13,0.18)] text-[#0b0c0d]"
    >
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between border-b border-[#e5e7eb] bg-[#f8f9fa] px-4 py-2.5 text-[11.5px]">
        <div className="flex items-center gap-2">
          <span className="font-extrabold tracking-tight text-[#005f86]">WOW+</span>
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-white border border-[#e5e7eb] px-2.5 py-0.5 text-[10.5px] text-[#5b5e64]">
            <MapPin className="h-3 w-3 text-[#266df0]" />
            Mexico City, CDMX
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10.5px] text-[#5b5e64]">
          <span className="rounded-full bg-[#edf3ff] px-2 py-0.5 font-semibold text-[#266df0]">Delivery</span>
          <span className="rounded-full px-2 py-0.5">Pickup</span>
        </div>
      </div>

      {/* Promo Row */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-3 gap-2.5">
          <div className="col-span-2 rounded-[8px] bg-gradient-to-r from-[#0c4a6e] to-[#0284c7] p-3.5 text-white">
            <span className="inline-block rounded bg-white/20 px-1.5 py-0.5 font-mono text-[9.5px] font-semibold">
              WOW+ REWARDS
            </span>
            <p className="mt-1.5 text-[14px] font-extrabold leading-tight">30% OFF across 10 brands</p>
            <p className="mt-0.5 text-[10.5px] text-white/80">Earn points &amp; cash wallet on every order</p>
          </div>
          <div className="rounded-[8px] border border-[#e5e7eb] bg-[#f9fafb] p-3 flex flex-col justify-between">
            <span className="font-mono text-[9.5px] text-[#5b5e64]">WALLET</span>
            <div>
              <p className="text-[14px] font-bold text-[#0b0c0d]">$240.00</p>
              <p className="text-[10px] text-[#16a34a] font-semibold">1,450 pts</p>
            </div>
          </div>
        </div>

        {/* Brand Selector Row */}
        <div>
          <p className="text-[11px] font-bold text-[#374151]">Elige un restaurante</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {brands.map((b) => (
              <div
                key={b.name}
                className="flex items-center gap-2 rounded-[7px] border border-[#e5e7eb] bg-white px-2.5 py-2"
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-black",
                    b.color
                  )}
                >
                  {b.name[0]}
                </span>
                <span className="truncate text-[11px] font-semibold text-[#111827]">{b.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#f0f1f3] pt-2.5 text-[10.5px] text-[#5b5e64]">
          <span className="font-semibold text-[#111827]">Cerca de ti · 4,262 locations</span>
          <span className="font-mono text-[#266df0]">10 storefronts →</span>
        </div>
      </div>
    </div>
  );
}

export function CustomersDirectoryView() {
  const [search, setSearch] = useState("");
  const [segment, setSegment] = useState<"All" | CustomerSegment>("All");
  const [region, setRegion] = useState<CustomerRegion>("");
  const [previewStory, setPreviewStory] = useState<CustomerStoryCard | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ALL_CUSTOMERS.filter((c) => {
      if (segment !== "All" && c.segment !== segment) return false;
      if (region && c.region !== region) return false;
      if (q) {
        const hay = `${c.name} ${c.segment} ${c.region} ${c.market} ${c.summary} ${c.products.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [search, segment, region]);

  const hasActiveFilters = segment !== "All" || region !== "" || search.trim() !== "";

  const resetFilters = () => {
    setSearch("");
    setSegment("All");
    setRegion("");
  };

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. DARK HERO + 3x2 WHITE LOGO TILE GRID */}
      <section
        className="relative overflow-hidden bg-[#0b0c0d] text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-32 h-[540px] w-[620px]"
          style={{
            background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.24), transparent)",
          }}
        />

        <Container className="relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[12px]">
                <Link href="/products" className="text-[#c4c6ca] underline underline-offset-4 hover:text-white">
                  Resources
                </Link>
                <span className="text-[#5b5e64]">/</span>
                <span className="text-[#92b5ff]">Customers</span>
              </nav>

              <h1 className="mt-6 text-[40px] sm:text-[52px] lg:text-[58px] font-bold tracking-[-0.04em] leading-[1.03] text-white [text-wrap:balance]">
                How restaurant brands run ordering and delivery on {BRAND}.
              </h1>

              <p className="mt-5 max-w-xl text-[16.5px] sm:text-[18px] leading-[1.6] text-[#c4c6ca]">
                Stories from restaurant groups, restaurant brands, delivery businesses, and local marketplaces in Latin
                America, North America, Europe, Africa, and Asia: what they needed, what they built, and what changed.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#directory"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
                >
                  Browse customer stories
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224]"
                >
                  Talk to {BRAND}
                </Link>
              </div>
            </div>

            {/* Right 3x2 White Logo Grid */}
            <ul aria-label="Featured customers" className="lg:col-span-6 grid grid-cols-2 gap-3.5 sm:grid-cols-3">
              {HERO_LOGO_TILES.map((tile) => {
                const story = ALL_CUSTOMERS.find((c) => c.slug === tile.slug);
                const tileCls =
                  "flex h-[126px] items-center justify-center rounded-[10px] bg-white p-4 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5 cursor-pointer";
                return (
                  <li key={tile.slug}>
                    {tile.slug === "alsea" ? (
                      <Link href="/customers/alsea" aria-label={tile.name} className={tileCls}>
                        <CustomerBrandBadge slug={tile.slug} name={tile.name} />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => story && setPreviewStory(story)}
                        aria-label={tile.name}
                        className={cn(tileCls, "w-full")}
                      >
                        <CustomerBrandBadge slug={tile.slug} name={tile.name} />
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      {/* 2. #featured — FEATURED ALSEA STORY CARD */}
      <section id="featured" className="py-12 sm:py-16">
        <Container>
          <article className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 sm:p-11 grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 items-center rounded-[8px] border border-[var(--od-border)] bg-white px-3.5">
                  <AlseaLogoMark size="sm" />
                </span>
                <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">Featured story</p>
              </div>

              <h2 className="mt-5 text-[28px] sm:text-[38px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
                Alsea runs WOW+ and ten restaurant brands on one ordering platform.
              </h2>

              <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Domino&apos;s, Starbucks, Burger King, Vips, and six more brands share one app, one website, call
                centers, and a delivery operation that assigns drivers automatically.
              </p>

              <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-[var(--od-border)] pt-5">
                <div>
                  <dt className="text-[12px] text-[var(--od-text-muted)]">Brands on WOW+</dt>
                  <dd className="mt-1 text-[22px] font-bold tracking-[-0.02em] text-[var(--od-text)]">10</dd>
                </div>
                <div>
                  <dt className="text-[12px] text-[var(--od-text-muted)]">Locations</dt>
                  <dd className="mt-1 text-[22px] font-bold tracking-[-0.02em] text-[var(--od-text)]">4,262</dd>
                </div>
                <div>
                  <dt className="text-[12px] text-[var(--od-text-muted)]">Markets</dt>
                  <dd className="mt-1 text-[16px] sm:text-[18px] font-bold tracking-[-0.02em] text-[var(--od-text)]">
                    Mexico · Colombia
                  </dd>
                </div>
              </dl>

              <div className="mt-7">
                <Link
                  href="/customers/alsea"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
                >
                  <span>Read the Alsea story</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <WowHomePreviewMockup />
            </div>
          </article>
        </Container>
      </section>

      {/* 3. #directory — SEARCHABLE & FILTERABLE 30-CUSTOMER DIRECTORY */}
      <section id="directory" className="scroll-mt-24 py-10 sm:py-14">
        <Container>
          <div className="max-w-2xl">
            <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">All customers</p>
            <h2 className="mt-2 text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              Find a story like yours.
            </h2>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              Filter by the kind of business and the region you operate in. Each story covers the channels, products,
              and delivery model involved.
            </p>
          </div>

          {/* Filter Controls Bar */}
          <div className="mt-9 flex flex-col gap-4 border-b border-[var(--od-border)] pb-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search input */}
              <div className="relative w-full sm:w-[220px]">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--od-text-muted)]" />
                <input
                  id="customers-search"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search customers"
                  aria-label="Search customers"
                  className="h-[42px] w-full rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] pl-9 pr-3 text-[14px] text-[var(--od-text)] outline-none transition-colors focus:border-[#266df0]"
                />
              </div>

              {/* Segment Filter Chips */}
              <div role="group" aria-label="Filter by segment" className="flex flex-wrap items-center gap-2">
                {CUSTOMER_SEGMENTS.map((seg) => {
                  const active = segment === seg;
                  return (
                    <button
                      key={seg}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSegment(seg)}
                      className={cn(
                        "h-[42px] rounded-[6px] border px-3.5 text-[13.5px] font-medium transition-colors cursor-pointer",
                        active
                          ? "border-[#266df0] bg-[var(--od-action-soft)] text-[var(--od-action-content)] font-semibold"
                          : "border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)] hover:border-[var(--od-border-strong)]"
                      )}
                    >
                      {seg}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Region Dropdown */}
            <div className="flex items-end gap-3">
              <div>
                <label
                  htmlFor="customers-region"
                  className="block text-[12px] font-medium text-[var(--od-text-muted)] mb-1"
                >
                  Region
                </label>
                <select
                  id="customers-region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value as CustomerRegion)}
                  className="h-[42px] min-w-[160px] rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-3 text-[13.5px] text-[var(--od-text)] outline-none focus:border-[#266df0]"
                >
                  {CUSTOMER_REGIONS.map((r) => (
                    <option key={r.label} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="h-[42px] rounded-[6px] border border-[var(--od-border)] px-3 text-[13px] font-semibold text-[var(--od-text-muted)] hover:text-[var(--od-text)] cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Count Row */}
          <p className="mt-5 font-mono text-[12.5px] text-[var(--od-text-muted)]" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "customer" : "customers"}
          </p>

          {/* 3-Column Customer Cards Grid */}
          {filtered.length > 0 ? (
            <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((customer) => {
                const metaLine = customer.market ? `${customer.segment} · ${customer.market}` : customer.segment;
                const cardInner = (
                  <>
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-mono text-[11.5px] text-[var(--od-text-muted)] pt-1">{metaLine}</p>
                        <span className="flex h-11 w-[76px] shrink-0 items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-white px-2">
                          <CustomerBrandBadge slug={customer.slug} name={customer.name} compact />
                        </span>
                      </div>

                      <h3 className="mt-4 text-[19px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                        {customer.name}
                      </h3>

                      <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{customer.summary}</p>
                    </div>

                    <div className="mt-5 border-t border-[var(--od-border)] pt-4 space-y-2.5">
                      <p className="font-mono text-[11.5px] text-[var(--od-text-muted)]">
                        Products: {customer.products.join(" · ")}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                        <span>Read story</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </>
                );

                const cardCls =
                  "group flex h-full w-full flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 text-left transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer";

                return (
                  <li key={customer.slug}>
                    {customer.hasFullPage ? (
                      <Link href={`/customers/${customer.slug}`} className={cardCls}>
                        {cardInner}
                      </Link>
                    ) : (
                      <button type="button" onClick={() => setPreviewStory(customer)} className={cardCls}>
                        {cardInner}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="mt-8 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-10 text-center">
              <p className="text-[18px] font-bold text-[var(--od-text)]">No customer stories match these filters.</p>
              <p className="mt-2 text-[14.5px] text-[var(--od-text-muted)]">
                Reset the filters, or tell us about your operation and we&apos;ll share the closest examples.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex min-h-[42px] items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 text-[14px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)] cursor-pointer"
                >
                  Reset filters
                </button>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[42px] items-center justify-center rounded-[6px] bg-[#266df0] px-4 text-[14px] font-semibold text-white hover:bg-[#1f5fd1]"
                >
                  Talk to {BRAND}
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 4. CLOSING DARK CTA BAND */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[10px] bg-[#0b0c0d] px-7 py-14 sm:px-14 sm:py-[72px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[634px] w-[696px] -translate-y-1/2"
              style={{
                background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.28), transparent)",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-white">
                Tell us how your operation runs.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#c4c6ca]">
                Share your brands, channels, and delivery model. We&apos;ll walk you through the setups closest to
                yours.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
              >
                Talk to {BRAND}
              </Link>
              <Link
                href="/demo"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224]"
              >
                See a live demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Story Quick-Preview Dialog for directory entries without a dedicated sub-route */}
      {previewStory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-preview-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
          onClick={() => setPreviewStory(null)}
        >
          <div
            className="w-full max-w-lg rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-24 items-center justify-center rounded-[8px] border border-[var(--od-border)] bg-white px-3">
                <CustomerBrandBadge slug={previewStory.slug} name={previewStory.name} compact />
              </span>
              <button
                type="button"
                onClick={() => setPreviewStory(null)}
                aria-label="Close"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--od-border)] text-[var(--od-text-muted)] hover:text-[var(--od-text)] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-[var(--od-action-content)]">
              {previewStory.market ? `${previewStory.segment} · ${previewStory.market}` : previewStory.segment}
            </p>
            <h3 id="story-preview-title" className="mt-1.5 text-[24px] font-bold text-[var(--od-text)]">
              {previewStory.name}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">{previewStory.summary}</p>

            <div className="mt-5 border-t border-[var(--od-border)] pt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--od-text-muted)]">
                Products used
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {previewStory.products.map((p) => (
                  <span
                    key={p}
                    className="rounded-md border border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-2.5 py-1 text-[12.5px] font-medium text-[var(--od-text)]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?meeting=demo#book"
                onClick={() => setPreviewStory(null)}
                className="inline-flex min-h-[42px] items-center justify-center rounded-[6px] bg-[#266df0] px-4 text-[14px] font-semibold text-white hover:bg-[#1f5fd1]"
              >
                Talk about a similar setup
              </Link>
              <Link
                href="/customers/alsea"
                onClick={() => setPreviewStory(null)}
                className="inline-flex min-h-[42px] items-center justify-center rounded-[6px] border border-[var(--od-border)] px-4 text-[14px] font-semibold text-[var(--od-text)] hover:bg-[var(--od-surface-subtle)]"
              >
                Read Alsea case study
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
