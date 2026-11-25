"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Search,
  ShoppingCart,
  Store,
  Truck,
  Users,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const BRAND = siteConfig.name;

export function MarketplacesPageView() {
  const { openDemoModal } = useUiStore();
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  const faqItems = [
    {
      q: "What is a multi-vendor marketplace platform?",
      a: `It connects several merchants to a customer ordering experience under one marketplace brand. ${BRAND} provides the customer-facing storefront and apps, merchant tools, delivery workflows, and marketplace administration described on this page.`,
    },
    {
      q: "Can I use my own brand?",
      a: "Yes. The marketplace supports a branded web and app experience. Confirm the white-label coverage for customer apps, driver app, receipts, and notifications in your selected package.",
    },
    {
      q: "Can customers order from more than one business?",
      a: "Yes. Customers can use a multi-business cart and a single checkout on the marketplace website and app, with delivery or pickup timing per order.",
    },
    {
      q: "How do payments and payouts work?",
      a: "Define customer payment methods, merchant relationships, fees, and payout requirements with the implementation team. Multi-card payment and payout configuration need to be checked against the chosen payment setup. The example above is illustrative, not a settlement guarantee.",
    },
    {
      q: "Can I use my own drivers?",
      a: "Yes. Work with your own fleet, third-party delivery providers, or a mixed model. Match dispatch configuration, service zones, provider coverage, and account requirements to your operation.",
    },
    {
      q: "What can each merchant manage?",
      a: "Merchant tools cover catalog, menu, hours, stock, and incoming orders. Check printer, KDS, and POS compatibility and any integration work required by each store.",
    },
    {
      q: "Are merchant subscriptions and promotions included?",
      a: "They are commercial models to discuss, not a universal promise of automated subscription billing or paid placement. Confirm the native tools, integrations, and custom work needed for your model.",
    },
    {
      q: "What do I need before launch?",
      a: "Prepare your brand and territory, merchant menus and hours, commercial terms, payment and payout setup, delivery coverage, and support responsibilities. For apps, confirm project configuration, build, testing, and publication requirements.",
    },
    {
      q: "How much does it cost, and how long does launch take?",
      a: "Review current pricing and discuss your marketplace scope. No fixed price or launch timeframe is promised here; the answer depends on your package, implementation, integrations, and launch readiness.",
    },
    {
      q: "Can I customize the platform or use my own cloud?",
      a: "Discuss API and webhook integrations, open-source frontend code, custom development, and Enterprise cloud options. These are separate scope decisions; branding does not grant backend ownership.",
    },
  ];

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. FLAGSHIP LIGHT HERO (matching live /solutions/marketplaces/ redesign) */}
      <section id="hero" className="bg-[var(--od-bg)] pt-12 pb-16 sm:pt-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13.5px]">
                <Link
                  href="/solutions"
                  className="text-[var(--od-action-content)] underline underline-offset-4 hover:opacity-80"
                >
                  Solutions
                </Link>
                <span className="text-[var(--od-text-muted)]">/</span>
                <span className="text-[var(--od-text)] font-medium">Marketplaces</span>
              </nav>

              <p className="mt-5 font-mono text-[11.5px] font-bold uppercase tracking-[0.09em] text-[var(--od-action-content)]">
                Marketplace software for startups and entrepreneurs
              </p>

              <h1 className="mt-4 text-[44px] sm:text-[58px] lg:text-[66px] font-extrabold tracking-[-0.045em] leading-[1.0] text-[var(--od-text)]">
                <span className="block">Build your marketplace.</span>
                <span className="block text-[#D91842]">Run it on {BRAND}.</span>
              </h1>

              <p className="mt-6 max-w-xl text-[18px] leading-[1.55] text-[var(--od-text)]">
                Bring local stores, customer ordering, merchant tools, and delivery together under your brand.
              </p>
              <p className="mt-3 max-w-xl text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                Launch a multi-vendor marketplace with a connected storefront, merchant operations, dispatch, and
                payment configuration.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openDemoModal("Marketplace software · Guided demo")}
                  className="inline-flex min-h-[46px] items-center gap-1.5 rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A] cursor-pointer"
                >
                  <span>Book a demo</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <a
                  href="#platform"
                  className="inline-flex min-h-[46px] items-center gap-1.5 rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                >
                  <span>See how it works</span>
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-6 text-[13px] text-[var(--od-text-muted)]">
                Your market. Your brand. One operating foundation.
              </p>
            </div>

            {/* Right Composite Visual: MacBook + iPhone "Local Market" */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-[580px] pt-2 pb-4">
                {/* MacBook Screen Frame */}
                <div className="w-[88%] overflow-hidden rounded-[16px] border-[8px] border-[#111316] bg-white text-[#151417] shadow-[0_24px_65px_-20px_rgba(11,12,13,0.3)]">
                  <div className="flex items-center justify-between border-b border-[#e5e7eb] px-4 py-2.5">
                    <span className="text-[12px] font-extrabold">Local Market</span>
                    <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-[#D9D9DD] bg-[#f8fafc] px-3 py-1 text-[9.5px] text-[#6E6D75]">
                      <Search className="h-3 w-3" />
                      <span>Search for restaurants, grocery, and more...</span>
                    </div>
                    <ShoppingCart className="h-3.5 w-3.5 text-[#3A393F]" />
                  </div>

                  <div className="p-3.5 space-y-3">
                    <div className="flex gap-1.5 text-[9.5px] font-semibold">
                      <span className="rounded-full bg-[#D91842] px-2.5 py-1 text-white">Browse</span>
                      <span className="rounded-full bg-[#f3f4f6] px-2.5 py-1 text-[#3A393F]">Restaurants</span>
                      <span className="rounded-full bg-[#f3f4f6] px-2.5 py-1 text-[#3A393F]">Grocery</span>
                      <span className="rounded-full bg-[#f3f4f6] px-2.5 py-1 text-[#3A393F]">Bakery</span>
                    </div>

                    <div className="relative aspect-[16/8] w-full overflow-hidden rounded-[8px]">
                      <Image
                        src="/images/hero-bowl-main.jpg"
                        alt="Featured marketplace restaurants and meals"
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-[#151417]">Browse by category</p>
                      <div className="mt-1.5 grid grid-cols-3 gap-2">
                        {[
                          { label: "Restaurants", img: "/images/bowl-mediterranean.jpg" },
                          { label: "Grocery", img: "/images/bowl-salmon.jpg" },
                          { label: "Bakery", img: "/images/closing-packaging.jpg" },
                        ].map((c) => (
                          <div key={c.label} className="space-y-1">
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[5px]">
                              <Image src={c.img} alt={c.label} fill sizes="120px" className="object-cover" />
                            </div>
                            <p className="text-[9px] font-semibold text-[#3A393F]">{c.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop aluminum base */}
                <div className="mx-auto -mt-0.5 h-3 w-[94%] rounded-b-[12px] bg-gradient-to-b from-[#d1d5db] to-[#9ca3af]" />

                {/* Overlapping iPhone Frame on bottom-right */}
                <div className="absolute right-0 bottom-2 w-[36%] min-w-[148px] max-w-[192px] overflow-hidden rounded-[24px] border-[5px] border-[#111316] bg-white p-2.5 text-[#151417] shadow-[0_24px_60px_-12px_rgba(11,12,13,0.45)]">
                  <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-[#111316]" />
                  <p className="text-[10.5px] font-extrabold">Local Market</p>
                  <div className="mt-1.5 flex gap-1 text-[8px] font-semibold">
                    <span className="rounded-full bg-[#D91842] px-2 py-0.5 text-white">Browse</span>
                    <span className="rounded-full bg-[#f3f4f6] px-2 py-0.5 text-[#3A393F]">Grocery</span>
                  </div>
                  <div className="relative mt-2 aspect-[16/11] w-full overflow-hidden rounded-[6px]">
                    <Image src="/images/bowl-mediterranean.jpg" alt="Restaurants app" fill sizes="160px" className="object-cover" />
                  </div>
                  <p className="mt-1 text-[8.5px] font-bold">Restaurants</p>
                  <div className="relative mt-1.5 aspect-[16/10] w-full overflow-hidden rounded-[6px]">
                    <Image src="/images/bowl-salmon.jpg" alt="Grocery app" fill sizes="160px" className="object-cover" />
                  </div>
                  <p className="mt-1 text-[8.5px] font-bold">Grocery</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. ROLEBAR */}
      <div className="border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)]">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-4 text-[13px]">
          <span className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-[var(--od-text-muted)]">
            Four connected surfaces
          </span>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 font-semibold text-[var(--od-text)]">
            <a href="#platform" className="hover:text-[var(--od-action-content)]">Customers</a>
            <a href="#merchants" className="hover:text-[var(--od-action-content)]">Merchants</a>
            <a href="#delivery" className="hover:text-[var(--od-action-content)]">Drivers</a>
            <a href="#marketplace-admin" className="hover:text-[var(--od-action-content)]">Marketplace admin</a>
          </div>
        </Container>
      </div>

      {/* 3. WHITE LABEL SECTION */}
      <section id="white-label" className="scroll-mt-24 py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-[34px] sm:text-[46px] font-bold tracking-[-0.04em] leading-[1.06] text-[var(--od-text)]">
              Your brand. Their next order.
            </h2>
            <ul className="mt-8 space-y-5">
              {[
                { title: "Your logo. Your colors.", body: "Make the experience recognizable as your brand." },
                { title: "Your own domain", body: "Give your marketplace a home customers remember." },
                {
                  title: "Branded web and apps",
                  body: "Carry your identity across the website and iOS and Android customer apps.",
                },
              ].map((b) => (
                <li key={b.title} className="border-l-2 border-[#D91842] pl-4">
                  <h3 className="text-[17px] font-bold text-[var(--od-text)]">{b.title}</h3>
                  <p className="mt-1 text-[14.5px] text-[var(--od-text-muted)]">{b.body}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => openDemoModal("White-label marketplace")}
              className="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#B8123A] cursor-pointer"
            >
              Book a demo
            </button>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-[var(--od-border)]">
              <Image
                src="/images/closing-packaging.jpg"
                alt="Branded marketplace packaging and customer experience"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. WHO IT'S FOR (#who) */}
      <section id="who" className="scroll-mt-24 border-t border-[var(--od-border)] py-16 sm:py-20">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Multiple sellers. One destination.
          </p>
          <h2 className="mt-2.5 text-[34px] sm:text-[46px] font-bold tracking-[-0.04em] leading-[1.06] text-[var(--od-text)]">
            One brand. Many local businesses.
          </h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
            Launch a marketplace that brings together the best of your community — from local restaurants and grocery
            stores to specialty shops — all under your brand.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Local delivery",
                body: "Connect neighborhood restaurants, cafes, and takeaways into one regional delivery hub.",
                img: "/images/hero-prep.jpg",
              },
              {
                title: "Vertical marketplaces",
                body: "Curate groceries, pharmacies, bakeries, or specialty retail under a focused category brand.",
                img: "/images/bowl-salmon.jpg",
              },
              {
                title: "Group and venue ordering",
                body: "Unite independent kitchens in a food hall, campus, or district with one shared checkout.",
                img: "/images/audience-operator.jpg",
              },
            ].map((u) => (
              <div key={u.title} className="overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)]">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={u.img} alt={u.title} fill sizes="(max-width: 768px) 100vw, 380px" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-[19px] font-bold text-[var(--od-text)]">{u.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{u.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CONNECTED FOUNDATION */}
      <section id="connected-foundation" className="scroll-mt-24 bg-[var(--od-surface-subtle)] py-16 sm:py-20">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            One connected foundation
          </p>
          <h2 className="mt-2.5 text-[34px] sm:text-[46px] font-bold tracking-[-0.04em] leading-[1.06] text-[var(--od-text)]">
            A storefront is only the beginning.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "Customers", body: "One place to browse stores, place an order, and follow its progress." },
              { icon: Store, title: "Merchants", body: "Catalogs, hours, stock, and incoming orders for every store." },
              { icon: Truck, title: "Drivers", body: "Order assignment, delivery workflows, and customer tracking." },
              { icon: ShoppingCart, title: "Marketplace admin", body: "Stores, zones, fees, reporting, and payout configuration." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                  <Icon className="h-5 w-5 text-[#D91842]" />
                  <h3 className="mt-3 text-[18px] font-bold text-[var(--od-text)]">{item.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{item.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. PLATFORM: CUSTOMER EXPERIENCE */}
      <section id="platform" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            From discovery to delivery
          </p>
          <h2 className="mt-2.5 max-w-3xl text-[34px] sm:text-[46px] font-bold tracking-[-0.04em] leading-[1.06] text-[var(--od-text)]">
            A connected experience, from browse to delivery.
          </h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
            Give your customers a familiar way to explore local stores, place orders, and track delivery — on your
            branded website and iOS or Android apps.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "Discover the right store",
                body: "Browse stores, search categories, and explore featured merchants across your marketplace.",
              },
              {
                title: "One cart. One checkout.",
                body: "Let customers shop across businesses with a single checkout and delivery or pickup times per order. Configure multi-card payment for your payment setup.",
              },
              {
                title: "Follow every order",
                body: "Connect checkout to merchant preparation, driver workflows, and delivery tracking, with administration and payout configuration behind the experience.",
              },
            ].map((c, idx) => (
              <div key={c.title} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">0{idx + 1}</span>
                <h3 className="mt-2 text-[18.5px] font-bold text-[var(--od-text)]">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7 & 8. MERCHANTS & DELIVERY SPLITS */}
      <section id="merchants" className="scroll-mt-24 border-t border-[var(--od-border)] py-16">
        <Container className="space-y-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Merchant operations
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Give every merchant a clear way to work.
              </h2>
              <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Each store manages its catalog, menu, hours, stock, and incoming orders through the merchant tools.
              </p>
              <ul className="mt-6 space-y-3 text-[14.5px]">
                {[
                  "Catalog and menu — Prepare the products and operating information customers need to order.",
                  "Hours and stock — Keep store availability and item availability aligned with operations.",
                  "Order handling — Give each merchant a workflow for incoming orders and preparation.",
                  "Printers, KDS, and POS — Review supported connections and the setup needed for each store.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-[var(--od-text)]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#D91842]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-[var(--od-border)]">
                <Image
                  src="/images/journey-merchant.jpg"
                  alt="Merchant tablet with incoming orders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div id="delivery" className="scroll-mt-24 grid grid-cols-1 items-center gap-10 border-t border-[var(--od-border)] pt-16 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:order-2">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Delivery operations
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Connect the delivery model you run.
              </h2>
              <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Coordinate service zones, order assignment, driver workflows, and customer tracking around your
                marketplace orders.
              </p>
              <ul className="mt-6 space-y-3 text-[14.5px]">
                {[
                  "Your fleet — Plan your drivers, service zones, and dispatch workflow.",
                  "A third-party network — Review supported providers and their coverage for your market.",
                  "A mixed operation — Define which orders your team handles and where an external provider fits.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-[var(--od-text)]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#D91842]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-[var(--od-border)]">
                <Image
                  src="/images/journey-delivery.jpg"
                  alt="Delivery handoff to customer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. MARKETPLACE ADMINISTRATION */}
      <section id="marketplace-admin" className="scroll-mt-24 bg-[var(--od-surface-subtle)] py-16">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Marketplace administration
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            One view of your marketplace.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Stores and catalogs", body: "Bring store catalogs, operating hours, and availability into your marketplace setup." },
              { title: "Service zones", body: "Define the areas and delivery coverage your marketplace serves." },
              { title: "Fee rules", body: "Connect your commission, delivery, and service fee choices to the operating model." },
              { title: "Operational reporting", body: "Review marketplace activity alongside your store and delivery operations." },
            ].map((item) => (
              <div key={item.title} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <h3 className="text-[17.5px] font-bold text-[var(--od-text)]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. STOCK AUTHORITY SCOPE NOTE */}
      <section className="py-14">
        <Container className="max-w-4xl">
          <h2 className="text-[26px] sm:text-[34px] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--od-text)]">
            Choose the stock authority before automating fulfillment.
          </h2>
          <p className="mt-3 text-[16px] font-medium leading-[1.6] text-[var(--od-text)]">
            A multi-vendor order-management system needs an explicit source of truth for each merchant’s catalog and
            availability.
          </p>
          <p className="mt-3 text-[15px] leading-[1.65] text-[var(--od-text-muted)]">
            Assign stock ownership to {BRAND} or the merchant’s connected POS or inventory system. For each connector,
            agree whether updates are imported, exported, or exchanged, which products and locations they affect, and
            how a failed or delayed update is detected. Do not assume every integration has bidirectional stock sync.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/platform/dashboard" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline">
              Review product and service availability <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/platform/ordering-delivery" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline">
              Review driver dispatch boundaries <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/integrations/pos" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline">
              Review POS integrations <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 11. DARK BUSINESS MODEL BAND (#business-model) */}
      <section id="business-model" className="scroll-mt-24 bg-[#111013] py-16 sm:py-20 text-white">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-[#F9D0D8]">Marketplace control</p>
            <h2 className="mt-3 text-[34px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-white">
              You set the rules of your market.
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.6] text-[#A9A8AF]">
              Configure commission percentages, zone delivery fees, service fees, and payout splits across every
              merchant and driver in your marketplace.
            </p>
            <button
              type="button"
              onClick={() => openDemoModal("Marketplace fee & payout rules")}
              className="mt-7 inline-flex min-h-[46px] items-center gap-1.5 rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#B8123A] cursor-pointer"
            >
              <span>Book a demo</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-[10px] border border-[#2A2A2E] bg-[#1B1A1F] p-6">
              <p className="font-mono text-[11px] uppercase text-[#9A99A1]">Illustrative configuration</p>
              <h3 className="mt-1 text-[18px] font-bold text-white">Order summary</h3>
              <dl className="mt-4 divide-y divide-[#2A2A2E] text-[14px]">
                {[
                  { k: "Order subtotal", v: "$420.00" },
                  { k: "Delivery fee · zone B", v: "$35.00" },
                  { k: "Service fee", v: "$12.00" },
                  { k: "Customer pays", v: "$467.00", bold: true },
                ].map((row) => (
                  <div key={row.k} className="flex justify-between py-2.5">
                    <dt className={row.bold ? "font-bold text-white" : "text-[#A9A8AF]"}>{row.k}</dt>
                    <dd className={row.bold ? "font-bold text-[#F9D0D8]" : "font-mono text-white"}>{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-[10px] border border-[#D91842]/40 bg-[#121c33] p-6">
              <p className="font-mono text-[11px] uppercase text-[#F9D0D8]">Split rules</p>
              <h3 className="mt-1 text-[18px] font-bold text-white">Illustrative allocation</h3>
              <dl className="mt-4 divide-y divide-white/10 text-[14px]">
                {[
                  { k: "Merchant", v: "$327.60" },
                  { k: "Driver", v: "$45.00" },
                  { k: "Marketplace", v: "$94.40", accent: true },
                ].map((row) => (
                  <div key={row.k} className="flex justify-between py-3">
                    <dt className="text-[#A9A8AF]">{row.k}</dt>
                    <dd className={row.accent ? "font-mono font-bold text-[#7BC143]" : "font-mono font-semibold text-white"}>
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* 12. MERCHANT ONBOARDING */}
      <section id="merchant-onboarding" className="scroll-mt-24 py-16">
        <Container>
          <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 sm:p-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[12px] text-[var(--od-text-muted)]">Merchant onboarding</p>
              <h2 className="mt-3 text-[32px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Make the next store easier to bring onboard.
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Prepare each merchant’s menu, payout relationship, and ordering workflow before making it available to
                customers.
              </p>
            </div>
            <ol className="lg:col-span-7 divide-y divide-[var(--od-border)] border-y border-[var(--od-border)]">
              {[
                { num: "01", title: "Invite or self-signup", body: "Define merchant categories and commercial terms. Confirm the onboarding route for your configuration." },
                { num: "02", title: "Prepare the menu", body: "Import or prepare menus and store operating information for the customer experience." },
                { num: "03", title: "Set up payouts", body: "Configure the merchant payout relationship required by the payment setup you choose." },
                { num: "04", title: "Make the store available", body: "Check menu and operational readiness before customers can order." },
              ].map((st) => (
                <li key={st.num} className="grid grid-cols-[36px_1fr] gap-4 py-5">
                  <span className="font-mono text-[12px] text-[var(--od-text-muted)] pt-1">{st.num}</span>
                  <div>
                    <h3 className="text-[17px] font-bold text-[var(--od-text)]">{st.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{st.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 13 & 14. LAUNCH PATH + CONFIGURE. ONBOARD. LAUNCH. */}
      <section id="launch-path" className="scroll-mt-24 py-12">
        <Container className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-7">
            <p className="font-mono text-[11.5px] uppercase text-[var(--od-action-content)]">Getting started</p>
            <h2 className="mt-2 text-[26px] font-bold text-[var(--od-text)]">
              From your first merchant to your first order.
            </h2>
            <p className="mt-2.5 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
              Make the operating decisions before committing to a launch date. Before launch, test a complete order and
              the exception workflow with your implementation team.
            </p>
          </div>
          <div id="launch" className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7">
            <p className="font-mono text-[11.5px] uppercase text-[var(--od-action-content)]">Launch summary</p>
            <h2 className="mt-2 text-[26px] font-bold text-[var(--od-text)]">Configure. Onboard. Launch.</h2>
            <p className="mt-2.5 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
              Set brand, zones, fees, and payments. Prepare the first stores and their payout setup. Coordinate merchant
              and delivery operations as you open to customers.
            </p>
          </div>
        </Container>
      </section>

      {/* 15. DARK EXTEND BAND */}
      <section id="extend" className="scroll-mt-24 bg-[#111013] py-16 sm:py-20 text-white my-8">
        <Container>
          <p className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-[#F9D0D8]">Flexible by design</p>
          <h2 className="mt-2.5 text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-white">
            Build the experience your market needs.
          </h2>
          <p className="mt-3 max-w-2xl text-[14.5px] text-[#9A99A1]">
            Branding and customization do not imply ownership of the backend or platform source. Licensing,
            infrastructure, support, and custom work require their own scope.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "API and webhooks",
                body: "Connect orders, stores, customers, and drivers to your own tools and data stack.",
                href: "/developers",
              },
              {
                title: "Your brand across touchpoints",
                body: "Scope white-label web, customer apps, driver app, receipts, and notifications.",
                href: "/developers/white-label",
              },
              {
                title: "Frontend and custom workflows",
                body: "Review open-source frontend code, custom implementation, and dedicated development scope.",
                href: "/developers/source-code-license",
              },
              {
                title: "Bring your own cloud",
                body: "Enterprise deployment can run in your AWS, Google Cloud, Microsoft Azure, or Railway account.",
                href: "/developers/bring-your-own-cloud",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-[10px] border border-[#2A2A2E] bg-[#1B1A1F] p-6 transition-colors hover:border-[#6E6D75] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[17px] font-bold text-white group-hover:text-[#F9D0D8]">{card.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#A9A8AF]">{card.body}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#F9D0D8]">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 16. FAQ ACCORDION (10 QUESTIONS) */}
      <section id="faq" className="scroll-mt-24 py-16">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-[var(--od-action-content)]">
              Common questions
            </p>
            <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              Questions before you launch.
            </h2>
          </div>

          <div className="lg:col-span-7 border-t border-[var(--od-border)]">
            {faqItems.map((item) => {
              const open = !!openFaq[item.q];
              return (
                <div key={item.q} className="border-b border-[var(--od-border)]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq((p) => ({ ...p, [item.q]: !p[item.q] }))}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-[15.5px] font-bold text-[var(--od-text)] cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <Plus
                      className={cn(
                        "h-4 w-4 shrink-0 text-[var(--od-text-muted)] transition-transform",
                        open && "rotate-45 text-[var(--od-action-content)]"
                      )}
                    />
                  </button>
                  {open && <p className="pb-5 text-[14.5px] leading-[1.65] text-[var(--od-text-muted)]">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 17. PLAN YOUR MARKETPLACE (#pricing) */}
      <section id="pricing" className="scroll-mt-24 py-12">
        <Container>
          <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 sm:p-11 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <p className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Plan your marketplace
              </p>
              <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Start with a conversation about your operation.
              </h2>
              <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Bring your city, categories, merchant model, and delivery plan. Review the storefront, merchant tools,
                driver workflow, and payment configuration that fit your scope.
              </p>
              <button
                type="button"
                onClick={() => openDemoModal("Plan your marketplace")}
                className="mt-6 inline-flex min-h-[46px] items-center gap-1.5 rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#B8123A] cursor-pointer"
              >
                <span>Book a demo</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="lg:col-span-6 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <h3 className="text-[18px] font-bold text-[var(--od-text)]">Bring these to your demo</h3>
              <ul className="mt-4 space-y-2.5 text-[14.5px] text-[var(--od-text)]">
                {[
                  "Your target market and first merchant categories",
                  "Customer, merchant, and driver app needs",
                  "Store and driver management requirements",
                  "Payment, payout, and commercial model",
                  "Integrations and launch responsibilities",
                ].map((it) => (
                  <li key={it} className="flex items-start gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#D91842]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 18. RELATED */}
      <section id="related" className="scroll-mt-24 py-12">
        <Container>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
            Keep exploring.
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: "Agencies and resellers", body: "Offer branded ordering and marketplaces to your clients.", href: "/solutions/agencies-resellers" },
              { title: "Ordering Delivery", body: "Configure zones, auto-dispatch, drivers, and partner fallback.", href: "/platform/ordering-delivery" },
              { title: "Marketplace scope", body: "Review transparent plans and schedule a guided walkthrough.", href: "/pricing" },
            ].map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="group rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[17px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] text-[var(--od-text-muted)]">{r.body}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--od-action-content)]">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 19 & 20. CLOSING CTA BAND + WHITE-LABEL FOOTER NOTE */}
      <section className="py-16 lg:py-20">
        <Container className="space-y-10">
          <div className="relative overflow-hidden rounded-[10px] bg-[#111013] px-7 py-14 sm:px-14 sm:py-[72px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[634px] w-[696px] -translate-y-1/2"
              style={{
                background: "none",
              }}
            />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-white">
                Bring your marketplace plan. Let’s work through the operation.
              </h2>
              <p className="mt-4 text-[13.5px] text-[#9A99A1]">
                Product guide:{" "}
                <Link href="/demo#marketplace" className="font-semibold text-[#F9D0D8] underline underline-offset-4 hover:text-white">
                  Marketplace App
                </Link>
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <button
                type="button"
                onClick={() => openDemoModal("Marketplace launch walkthrough")}
                className="inline-flex min-h-[46px] items-center gap-1.5 rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#B8123A] cursor-pointer"
              >
                <span>Book a demo</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-[20px] font-bold text-[var(--od-text)]">Food delivery under your brand</h2>
              <p className="mt-1 text-[14.5px] text-[var(--od-text-muted)]">
                Planning a restaurant delivery marketplace? Explore a white label food delivery app for your brand.
              </p>
            </div>
            <Link
              href="/platform/ordering-apps"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>Explore Ordering Apps</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
