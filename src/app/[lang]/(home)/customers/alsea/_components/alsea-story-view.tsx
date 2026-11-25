"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Check, Headphones, MapPin, Smartphone, Store, Truck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ALL_CUSTOMERS, ALSEA_BRAND_SLUGS } from "../../_data/customers-data";
import { AlseaLogoMark, CustomerBrandBadge } from "../../_components/customer-brand-marks";

const BRAND = siteConfig.name;

const HERO_FACTS = [
  { label: "Brands on WOW+", value: "10" },
  { label: "Locations", value: "4,262" },
  { label: "Markets", value: "Mexico · Colombia" },
  { label: "Channels", value: "App · Web · Call center · In-store QR" },
];

const WOW_STOREFRONTS = [
  {
    name: "WOW+ home",
    accent: "from-[#0c4a6e] to-[#0284c7]",
    tagline: "Multi-brand ordering hub",
    categories: ["Delivery", "Pickup", "Rewards", "10 Brands"],
    eta: "20–35 min",
  },
  {
    name: "Starbucks",
    accent: "from-[#005a3c] to-[#00704a]",
    tagline: "Coffee, cold brew & bakery",
    categories: ["Espresso", "Frappuccino", "Breakfast", "Bakery"],
    eta: "18–28 min",
  },
  {
    name: "Domino's Pizza",
    accent: "from-[#00527a] to-[#e31837]",
    tagline: "Hot pizza & custom combos",
    categories: ["Pizzas", "Combos", "Sides", "Drinks"],
    eta: "25–35 min",
  },
  {
    name: "Burger King",
    accent: "from-[#d62300] to-[#f5821f]",
    tagline: "Flame-grilled classics",
    categories: ["Whopper", "Chicken", "Combos", "Desserts"],
    eta: "20–30 min",
  },
  {
    name: "Vips",
    accent: "from-[#b91c1c] to-[#e30613]",
    tagline: "Family dining & all-day meals",
    categories: ["Desayunos", "Comidas", "Enchiladas", "Postres"],
    eta: "25–40 min",
  },
  {
    name: "Chili's",
    accent: "from-[#991b1b] to-[#dc2626]",
    tagline: "Ribs, burgers & fajitas",
    categories: ["Appetizers", "Burgers", "Ribs", "Fajitas"],
    eta: "30–40 min",
  },
  {
    name: "El Portón",
    accent: "from-[#7c2d12] to-[#b45309]",
    tagline: "Traditional Mexican kitchen",
    categories: ["Antojitos", "Caldos", "Especiales", "Catering"],
    eta: "25–35 min",
  },
  {
    name: "The Cheesecake Factory",
    accent: "from-[#451a03] to-[#92400e]",
    tagline: "Signature dining & cheesecakes",
    categories: ["Small Plates", "Pastas", "Entrees", "Cheesecakes"],
    eta: "35–45 min",
  },
  {
    name: "Italianni's",
    accent: "from-[#7f1d1d] to-[#15803d]",
    tagline: "Family-style Italian favorites",
    categories: ["Antipasti", "Pastas", "Wood-Fired Pizza", "Dolci"],
    eta: "30–40 min",
  },
  {
    name: "P.F. Chang's",
    accent: "from-[#111827] to-[#991b1b]",
    tagline: "Wok-fired Asian cuisine",
    categories: ["Lettuce Wraps", "Sushi", "Noodles", "Wok Classics"],
    eta: "30–45 min",
  },
  {
    name: "California Pizza Kitchen",
    accent: "from-[#b45309] to-[#eab308]",
    tagline: "Hearth-baked artisan pizzas",
    categories: ["Artisan Pizzas", "Salads", "Pastas", "Take & Bake"],
    eta: "25–35 min",
  },
];

const WHAT_ALSEA_NEEDED = [
  "A configuration for each restaurant chain on one shared platform.",
  "Menus synchronized from multiple POS systems, with bulk branch creation and hundreds of thousands of products.",
  "Orders injected directly into each store's POS, with retries.",
  "The same experience across the app, websites, and call centers.",
  "Central order management and delivery operations.",
  "Loyalty and marketing programs that bring guests back.",
  "A fast implementation.",
];

const FLOW_COLUMNS = {
  left: {
    title: "Guests order from",
    items: [
      { label: "WOW+ app for iOS and Android", href: "/platform/ordering-apps" },
      { label: "WOW+ website and brand storefronts", href: "/platform/ordering-web" },
      { label: "Call centers", href: "/platform/ordering-call-center" },
      { label: "QR codes in the restaurant" },
    ],
  },
  center: {
    title: `${BRAND} runs`,
    items: [
      { label: "Menus and catalog synced from each POS", href: "/integrations/pos" },
      { label: "One order list across brands", href: "/platform/ordering-merchant" },
      { label: "WOW+ cash, points, coupons, and promotions" },
      { label: "Automatic driver assignment and overflow rules", href: "/platform/ordering-delivery" },
      { label: "Operational and marketing reports" },
    ],
  },
  right: {
    title: "Stores and delivery",
    items: [
      { label: "Orders injected into each store's POS" },
      { label: "In-house drivers on the Driver App", href: "/platform/driver-app" },
      { label: "Overflow orders to Uber Direct and Rappi", href: "/platform/third-party-delivery" },
    ],
  },
};

const SURFACES = [
  {
    key: "app",
    title: "WOW+ app and website",
    body: "A native iOS and Android app and a responsive website where guests browse every brand, customize orders, pay, and track delivery or pickup.",
    bullets: [
      "WOW+ cash wallet and points rewards.",
      "Coupons, discounts, and advanced promotions.",
      "A relaunched loyalty program that migrated hundreds of thousands of users.",
    ],
    cta: "Explore Ordering Apps",
    href: "/platform/ordering-apps",
  },
  {
    key: "delivery",
    title: "Delivery dashboard and driver assignment",
    body: "Alsea's team sees live orders and routes on a map, assigns drivers, and lets drivers accept or reject requests, with guests notified at every step.",
    bullets: [
      "Automatic assignment of delivery drivers.",
      "Overflow orders handed to Uber Direct and Rappi.",
      "In-house and third-party drivers on the Driver App, with routes, chat, and proof of delivery.",
    ],
    cta: "Explore Ordering Delivery",
    href: "/platform/ordering-delivery",
  },
  {
    key: "callcenter",
    title: "Call center",
    body: "Agents take phone orders with the same brands, menus, and promotions guests see online, then follow each order through the operation.",
    bullets: [
      "Browse brands and stores near the caller.",
      "Access menus and place orders for the guest.",
      "Answer questions about orders already in progress.",
    ],
    cta: "Explore Ordering Call Center",
    href: "/platform/ordering-call-center",
  },
  {
    key: "merchant",
    title: "Order management and reports",
    body: "Orders from every brand and channel arrive in one list, filtered by status. Reports cover delivery distance, service times, heat maps, and top-selling products.",
    bullets: [
      "One order list across brands, stores, and channels.",
      "Offers that can be limited to a delivery zone or a channel.",
      "Reports that feed marketing campaigns and service planning.",
    ],
    cta: "Explore Ordering Merchant",
    href: "/platform/ordering-merchant",
  },
];

const RESULTS = [
  {
    title: "One experience across channels",
    body: "Guests find the same brands, promotions, and rewards in the app, on the web, and through call centers.",
  },
  {
    title: "Orders reach the store's POS",
    body: "Integration with multiple POS systems keeps menus synchronized and sends orders straight to each store.",
  },
  {
    title: "Delivery runs on rules",
    body: "Drivers are assigned automatically, and overflow orders move to external delivery partners.",
  },
  {
    title: "Continuity during the pandemic",
    body: "The platform let Alsea shift quickly to online sales and delivery and keep its restaurants selling.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Business consultation",
    body: `Alsea and ${BRAND} started with a consultation on what the project needed.`,
  },
  {
    num: "02",
    title: "Prototype",
    body: "Alsea reviewed a prototype and shared feedback before development.",
  },
  {
    num: "03",
    title: "Development",
    body: "Development started once Alsea accepted the prototype.",
  },
  {
    num: "04",
    title: "Launch",
    body: "The finished project was delivered ready to launch.",
  },
];

function SurfaceMockup({ surfaceKey }: { surfaceKey: string }) {
  switch (surfaceKey) {
    case "app":
      return (
        <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[12px] border border-[var(--od-border)] bg-white p-4 text-[#0b0c0d] shadow-xs">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#005f86]">
                <span>WOW+</span>
                <Smartphone className="h-3.5 w-3.5 text-[#266df0]" />
              </div>
              <div className="mt-3 rounded-[8px] bg-[#0c4a6e] p-3 text-white">
                <p className="font-mono text-[9.5px] opacity-80">BALANCE</p>
                <p className="text-[16px] font-bold">$185.00</p>
                <p className="text-[10px] text-[#92b5ff]">940 WOW+ pts</p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10px] font-semibold">
                <span className="rounded bg-[#f3f4f6] px-2 py-1.5 text-center">Starbucks</span>
                <span className="rounded bg-[#f3f4f6] px-2 py-1.5 text-center">Burger King</span>
                <span className="rounded bg-[#f3f4f6] px-2 py-1.5 text-center">Domino&apos;s</span>
                <span className="rounded bg-[#f3f4f6] px-2 py-1.5 text-center">Vips</span>
              </div>
            </div>
            <div className="rounded-[12px] border border-[var(--od-border)] bg-white p-4 text-[#0b0c0d] shadow-xs">
              <p className="text-[11px] font-bold text-[#d62300]">Burger King · Corregidora</p>
              <p className="text-[10px] text-[#5b5e64]">Open · 20–30 min delivery</p>
              <div className="mt-3 space-y-2 text-[11px]">
                <div className="flex items-center justify-between rounded border border-[#e5e7eb] px-2.5 py-1.5">
                  <span className="font-semibold">Whopper Combo</span>
                  <span className="font-mono text-[#266df0]">$159</span>
                </div>
                <div className="flex items-center justify-between rounded border border-[#e5e7eb] px-2.5 py-1.5">
                  <span className="font-semibold">Crispy Chicken</span>
                  <span className="font-mono text-[#266df0]">$139</span>
                </div>
                <div className="flex items-center justify-between rounded border border-[#e5e7eb] px-2.5 py-1.5">
                  <span className="font-semibold">King Nuggets x10</span>
                  <span className="font-mono text-[#266df0]">$89</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "delivery":
      return (
        <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6 space-y-4">
          <div className="rounded-[10px] border border-[var(--od-border)] bg-white p-4 text-[#0b0c0d]">
            <div className="flex items-center justify-between text-[12px] font-bold">
              <span className="inline-flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-[#266df0]" />
                Delivery dispatch · Central Mexico
              </span>
              <span className="rounded-full bg-[#edf3ff] px-2.5 py-0.5 font-mono text-[10.5px] text-[#266df0]">
                Auto-assign ON
              </span>
            </div>
            <div className="mt-3 space-y-2 text-[12px]">
              {[
                { id: "#84210", brand: "Starbucks Reforma", driver: "In-house · 1.2 km", status: "On the way" },
                { id: "#84211", brand: "Burger King Polanco", driver: "Uber Direct (overflow)", status: "Assigned" },
                { id: "#84212", brand: "Vips Lindavista", driver: "Rappi (overflow)", status: "Picked up" },
              ].map((row) => (
                <div
                  key={row.id}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-[6px] border border-[#eceef0] px-3 py-2"
                >
                  <div>
                    <span className="font-mono font-bold text-[#0b0c0d]">{row.id}</span>
                    <span className="ml-2 text-[#5b5e64]">{row.brand}</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#266df0]">{row.driver}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "callcenter":
      return (
        <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6">
          <div className="rounded-[10px] border border-[var(--od-border)] bg-white p-4 text-[#0b0c0d]">
            <div className="flex items-center justify-between border-b border-[#eceef0] pb-3 text-[12px] font-bold">
              <span className="inline-flex items-center gap-1.5">
                <Headphones className="h-4 w-4 text-[#266df0]" />
                Agent workspace · Inbound order
              </span>
              <span className="font-mono text-[11px] text-[#16a34a]">Caller matched</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2.5 text-[11.5px]">
              {["Burger King", "Starbucks", "Vips"].map((store) => (
                <div key={store} className="rounded-[8px] border border-[#e5e7eb] p-3">
                  <p className="font-bold text-[#0b0c0d]">{store}</p>
                  <p className="mt-0.5 text-[10.5px] text-[#5b5e64]">1.4 km · ★ 4.8</p>
                  <span className="mt-2 inline-block font-mono text-[10px] font-semibold text-[#266df0]">
                    Open menu →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6">
          <div className="rounded-[10px] border border-[var(--od-border)] bg-white p-4 text-[#0b0c0d]">
            <div className="flex items-center justify-between border-b border-[#eceef0] pb-3 text-[12px] font-bold">
              <span className="inline-flex items-center gap-1.5">
                <Store className="h-4 w-4 text-[#266df0]" />
                Unified order list · All brands
              </span>
              <span className="font-mono text-[11px] text-[#5b5e64]">POS synced</span>
            </div>
            <div className="mt-3 divide-y divide-[#f0f1f3] text-[12px]">
              {[
                { id: "#90418", store: "Starbucks Santa Fe", channel: "WOW+ App", status: "Preparing" },
                { id: "#90419", store: "Burger King Roma", channel: "Web", status: "Injected to POS" },
                { id: "#90420", store: "Chili's Insurgentes", channel: "Call Center", status: "Ready" },
              ].map((o) => (
                <div key={o.id} className="flex items-center justify-between gap-2 py-2.5">
                  <div>
                    <span className="font-mono font-bold">{o.id}</span>
                    <span className="ml-2 text-[#5b5e64]">{o.store}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#f3f4f6] px-2 py-0.5 font-mono text-[10.5px]">{o.channel}</span>
                    <span className="font-semibold text-[#16a34a] text-[11px]">{o.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
}

export function AlseaStoryView() {
  const galleryRef = useRef<HTMLUListElement>(null);

  const scrollGallery = (dir: -1 | 1) => {
    galleryRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  const relatedBrands = ALL_CUSTOMERS.filter((c) => ALSEA_BRAND_SLUGS.includes(c.slug));

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. DARK HERO + HERO PHOTO + 4-COL FACT STRIP */}
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

        <Container className="relative z-10 pt-12 pb-14 sm:pt-16 sm:pb-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[12px]">
                <Link href="/products" className="text-[#c4c6ca] underline underline-offset-4 hover:text-white">
                  Resources
                </Link>
                <span className="text-[#5b5e64]">/</span>
                <Link href="/customers" className="text-[#c4c6ca] underline underline-offset-4 hover:text-white">
                  Customers
                </Link>
                <span className="text-[#5b5e64]">/</span>
                <span className="text-[#92b5ff]">Alsea</span>
              </nav>

              <div className="mt-6 inline-flex h-[54px] items-center rounded-[8px] bg-white px-5 shadow-sm">
                <AlseaLogoMark size="md" />
              </div>

              <p className="mt-5 font-mono text-[12px] text-[#c4c6ca]">Customer story · Restaurant group</p>

              <h1 className="mt-3 text-[40px] sm:text-[54px] lg:text-[60px] font-bold tracking-[-0.04em] leading-[1.03] text-white [text-wrap:balance]">
                Ten restaurant brands. One ordering operation.
              </h1>

              <p className="mt-5 max-w-xl text-[16.5px] sm:text-[18px] leading-[1.6] text-[#c4c6ca]">
                Alsea operates Domino&apos;s, Starbucks, Burger King, Vips, and other restaurant chains. Its WOW+ app,
                brand storefronts, call centers, and delivery operation in Mexico and Colombia run on {BRAND}.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
                >
                  Talk to {BRAND}
                </Link>
                <Link
                  href="/customers"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224]"
                >
                  All customer stories
                </Link>
              </div>
            </div>

            {/* Right Visual Photo */}
            <figure className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-[#141517] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/case-alsea.jpg"
                  alt="A guest using the WOW+ app, with a promotion banner and Starbucks and Burger King among the restaurants"
                  className="aspect-[4/4.6] w-full object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-[10px] border border-white/15 bg-black/75 p-3.5 backdrop-blur-md">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="font-bold text-white">WOW+ Multi-Brand App</span>
                    <span className="font-mono text-[11px] text-[#92b5ff]">10 chains · Live</span>
                  </div>
                  <p className="mt-1 text-[11.5px] text-[#c4c6ca]">
                    Starbucks · Domino&apos;s · Burger King · Vips · Chili&apos;s · P.F. Chang&apos;s
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </Container>

        {/* Bottom 4-Column Stat Strip */}
        <div className="relative z-10 border-t border-white/15">
          <Container>
            <dl className="grid grid-cols-1 divide-y divide-white/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
              {HERO_FACTS.map((fact, idx) => (
                <div
                  key={fact.label}
                  className={cn("py-6", idx > 0 && "lg:pl-7", idx < HERO_FACTS.length - 1 && "lg:pr-7")}
                >
                  <dt className="text-[12px] text-[#989aa0]">{fact.label}</dt>
                  <dd className="mt-1.5 text-[22px] sm:text-[26px] font-bold tracking-[-0.025em] leading-snug text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </section>

      {/* 2. #storefronts — 11 WOW+ BRAND STOREFRONTS GALLERY */}
      <section id="storefronts" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">WOW+ storefronts</p>
              <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Every brand keeps its own storefront.
              </h2>
              <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                WOW+ is Alsea&apos;s multi-brand ordering app and website. Guests choose a restaurant, and each brand
                opens with its own menu, categories, store hours, and delivery details, all on the same platform.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollGallery(-1)}
                aria-label="Previous storefront"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)] hover:border-[var(--od-border-strong)] cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollGallery(1)}
                aria-label="Next storefront"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)] hover:border-[var(--od-border-strong)] cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <ul
            ref={galleryRef}
            className="mt-9 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          >
            {WOW_STOREFRONTS.map((sf) => (
              <li key={sf.name} className="w-[290px] sm:w-[320px] shrink-0 snap-start">
                <div className="overflow-hidden rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)]">
                  <div className={cn("bg-gradient-to-br p-5 text-white", sf.accent)}>
                    <div className="flex items-center justify-between text-[11px] font-mono opacity-85">
                      <span>WOW+</span>
                      <span>{sf.eta}</span>
                    </div>
                    <p className="mt-6 text-[20px] font-extrabold tracking-tight">{sf.name}</p>
                    <p className="mt-1 text-[12.5px] text-white/85">{sf.tagline}</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {sf.categories.map((cat) => (
                        <span
                          key={cat}
                          className="rounded-md border border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-2 py-0.5 text-[11.5px] font-medium text-[var(--od-text-muted)]"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-[var(--od-border)] pt-2.5 text-[11.5px] text-[var(--od-text-muted)]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-[#266df0]" />
                        Hours &amp; delivery zones
                      </span>
                      <span className="font-semibold text-[var(--od-action-content)]">Menu →</span>
                    </div>
                  </div>
                </div>
                <p className="mt-2.5 text-[13.5px] font-semibold text-[var(--od-text)]">{sf.name}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. #context — THE OPERATING CONTEXT */}
      <section id="context" className="scroll-mt-24 border-t border-[var(--od-border)] py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-6">
              <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">The operating context</p>
              <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                One foundation under many brands and channels.
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.65] text-[var(--od-text-muted)]">
                Alsea is a multi-brand restaurant operator based in Mexico. Each chain has its own menu, promotions,
                and store network, and guests order through apps, websites, call centers, and in the restaurant.
              </p>
              <p className="mt-4 text-[15.5px] leading-[1.65] text-[var(--od-text-muted)]">
                Alsea wanted one scalable, secure, and customizable platform as the base of its digital operation,
                without erasing the differences between its brands.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 sm:p-8">
              <h3 className="text-[19px] font-bold text-[var(--od-text)]">What Alsea needed</h3>
              <ul className="mt-5 space-y-3 text-[14.5px] leading-[1.55] text-[var(--od-text)]">
                {WHAT_ALSEA_NEEDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#266df0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. #operation — HOW IT CONNECTS (Exact 3-Column Flow Diagram: White -> Dark -> White) */}
      <section id="operation" className="scroll-mt-24 border-t border-[var(--od-border)] py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">How it connects</p>
            <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              From the guest&apos;s order to the store and the driver.
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              Every channel shares the same menus, orders, and promotions. Stores receive orders in their POS, and
              deliveries go to Alsea&apos;s drivers or to delivery partners.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_28px_1.1fr_28px_1fr]">
            {/* Left White Card */}
            <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 sm:p-7">
              <h3 className="font-mono text-[12px] text-[var(--od-text-muted)]">{FLOW_COLUMNS.left.title}</h3>
              <ul className="mt-5 divide-y divide-[var(--od-border)]">
                {FLOW_COLUMNS.left.items.map((item) => (
                  <li key={item.label} className="py-3.5 text-[14.5px] font-semibold text-[var(--od-text)]">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 hover:text-[var(--od-action-content)] transition-colors"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#266df0]" />
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow 1 */}
            <div className="flex items-center justify-center text-[#266df0]" aria-hidden="true">
              <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
            </div>

            {/* Center Dark Card with subtle bottom blue glow */}
            <div className="relative rounded-[12px] bg-[#0b0c0d] p-6 sm:p-7 text-white shadow-[0_24px_48px_-14px_rgba(38,109,240,0.28)]">
              <h3 className="font-mono text-[12px] text-[#989aa0]">{FLOW_COLUMNS.center.title}</h3>
              <ul className="mt-5 divide-y divide-white/12">
                {FLOW_COLUMNS.center.items.map((item) => (
                  <li key={item.label} className="py-3.5 text-[14.5px] font-semibold text-white">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 hover:text-[#92b5ff] transition-colors"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#639bff]" />
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow 2 */}
            <div className="flex items-center justify-center text-[#266df0]" aria-hidden="true">
              <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
            </div>

            {/* Right White Card */}
            <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 sm:p-7">
              <h3 className="font-mono text-[12px] text-[var(--od-text-muted)]">{FLOW_COLUMNS.right.title}</h3>
              <ul className="mt-5 divide-y divide-[var(--od-border)]">
                {FLOW_COLUMNS.right.items.map((item) => (
                  <li key={item.label} className="py-3.5 text-[14.5px] font-semibold text-[var(--od-text)]">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 hover:text-[var(--od-action-content)] transition-colors"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#266df0]" />
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. #surfaces — WHAT THEY BUILT */}
      <section id="surfaces" className="scroll-mt-24 border-t border-[var(--od-border)] py-16 lg:py-20">
        <Container>
          <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">What they built</p>
          <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            The surfaces behind WOW+.
          </h2>

          <div className="mt-12 space-y-12">
            {SURFACES.map((surface, idx) => (
              <div
                key={surface.key}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
              >
                <div className={cn("lg:col-span-6", idx % 2 === 1 && "lg:order-2")}>
                  <h3 className="text-[24px] sm:text-[28px] font-bold tracking-[-0.025em] text-[var(--od-text)]">
                    {surface.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">{surface.body}</p>
                  <ul className="mt-5 space-y-2.5 text-[14.5px] text-[var(--od-text)]">
                    {surface.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#266df0]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={surface.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[var(--od-action-content)] hover:underline"
                  >
                    <span>{surface.cta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className={cn("lg:col-span-6", idx % 2 === 1 && "lg:order-1")}>
                  <SurfaceMockup surfaceKey={surface.key} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. #results — WHAT CHANGED FOR ALSEA */}
      <section
        id="results"
        className="scroll-mt-24 border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-16 lg:py-20"
      >
        <Container>
          <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">Results</p>
          <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            What changed for Alsea.
          </h2>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS.map((r) => (
              <li
                key={r.title}
                className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
              >
                <h3 className="text-[18px] font-bold leading-snug text-[var(--od-text)]">{r.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{r.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 7. #process — FROM CONSULTATION TO LAUNCH */}
      <section id="process" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">How the project ran</p>
          <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            From consultation to launch.
          </h2>

          <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((st) => (
              <li
                key={st.num}
                className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
              >
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">{st.num}</span>
                <h3 className="mt-2 text-[18px] font-bold text-[var(--od-text)]">{st.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{st.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 8. #related — STORIES FROM ALSEA'S BRANDS */}
      <section id="related" className="scroll-mt-24 border-t border-[var(--od-border)] py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
              Stories from Alsea&apos;s brands
            </h2>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              Several of the restaurant chains Alsea operates have their own {BRAND} stories.
            </p>
          </div>

          <ul className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedBrands.map((brand) => (
              <li key={brand.slug}>
                <Link
                  href="/customers#directory"
                  className="group flex h-full flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-mono text-[11.5px] text-[var(--od-text-muted)] pt-1">
                        {brand.segment} · {brand.market}
                      </p>
                      <span className="flex h-11 w-[76px] shrink-0 items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-white px-2">
                        <CustomerBrandBadge slug={brand.slug} name={brand.name} compact />
                      </span>
                    </div>
                    <h3 className="mt-4 text-[18px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                      {brand.name}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{brand.summary}</p>
                  </div>
                  <div className="mt-5 border-t border-[var(--od-border)] pt-3.5">
                    <p className="font-mono text-[11.5px] text-[var(--od-text-muted)]">
                      Products: {brand.products.join(" · ")}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 9. CLOSING DARK CTA BAND */}
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
                Running several brands on one operation?
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#c4c6ca]">
                Tell us about your brands, channels, and delivery model, and we&apos;ll show you how {BRAND} fits.
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
    </div>
  );
}
