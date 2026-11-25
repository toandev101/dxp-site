"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

const LAYERS = [
  {
    num: "01",
    title: "Build",
    body: "Ordering websites, apps, kiosks, call center, marketplaces, multi-store ordering, and AI ordering agents: the surfaces customers use to place an order.",
    href: "/platform#build",
  },
  {
    num: "02",
    title: "Operate",
    body: "Merchant apps, order management, multi-location operations, driver apps and dispatch, in-house and third-party delivery. Everything that happens after an order is placed.",
    href: "/platform#operate",
  },
  {
    num: "03",
    title: "Connect",
    body: "POS, payment gateways, delivery networks, loyalty, CRM, and analytics: the systems that need an accurate view of the ordering operation.",
    href: "/platform#connect",
  },
  {
    num: "04",
    title: "Extend",
    body: "API, SDKs, webhooks, white-label surfaces, and custom solutions: options for teams that need to adapt the experience or connect their own systems.",
    href: "/platform#extend",
  },
];

const PRINCIPLES = [
  {
    title: "Build an experience customers recognize",
    body: "Start with the ordering surfaces customers see, then connect them to the operational tools behind each order.",
  },
  {
    title: "Operate beyond the storefront",
    body: "An order does not stop at checkout. Merchant tools, delivery workflows, and multi-location operations are part of the same operational picture.",
  },
  {
    title: "Connect the systems around the order",
    body: "Integrations help keep the ordering operation connected to the POS, payment, delivery, loyalty, CRM, and analytics tools a business uses.",
  },
  {
    title: "Leave room to extend",
    body: "Teams can use the platform's developer-facing capabilities and solution paths when a standard surface or integration is not the right fit.",
  },
];

const SCALE_TILES = [
  {
    title: "Customer experience",
    body: "Give customers a place to discover a menu, build an order, and stay informed through the channel that fits their journey.",
  },
  {
    title: "Order operations",
    body: "Give store, merchant, and delivery teams the workflows they need after an order enters the operation.",
  },
  {
    title: "Connected systems",
    body: "Bring POS, payments, delivery, loyalty, CRM, and analytics into the ordering workflow where the relevant connection is available.",
  },
  {
    title: "A foundation to extend",
    body: "Use developer and solution paths when the experience or integration needs work beyond the standard surface.",
  },
];

const RELATED_CARDS = [
  {
    label: "Customers",
    title: "Success stories",
    body: `The operators and brands that run on ${BRAND}.`,
    href: "/customers",
  },
  {
    label: "Contact",
    title: "Talk to us",
    body: "Sales, support and everything else.",
    href: "/contact",
  },
  {
    label: "Partners",
    title: "Agencies and resellers",
    body: "Build and sell ordering products on our infrastructure.",
    href: "/solutions/agencies-resellers",
  },
];

export function AboutPageView() {
  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. DARK HERO (Full-width dark grid + bottom-right blue radial glow, no right aside) */}
      <section
        className="relative overflow-hidden bg-[#111013] text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-36 h-[560px] w-[680px]"
          style={{
            background: "none",
          }}
        />

        <Container className="relative z-10 py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="text-[42px] sm:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.03] text-white [text-wrap:balance]">
              Ordering infrastructure for the experience you run.
            </h1>

            <p className="mt-6 max-w-xl text-[16.5px] sm:text-[18px] leading-[1.6] text-[#A9A8AF]">
              {BRAND} connects the customer-facing ordering experience with the tools used to operate orders and the
              interfaces used to extend the platform. Teams can bring together storefronts, operator workflows, and
              integrations without treating each one as a separate system.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/demo"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A]"
              >
                See a live demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F]"
              >
                Talk to {BRAND}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#A9A8AF]">
              <span>Build</span>
              <span>Operate</span>
              <span>Connect and extend</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. #build — FOUR LAYERS, ONE SYSTEM */}
      <section id="build" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
              What we build
            </p>
            <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              Four layers, one system.
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              {BRAND} is organized the way an ordering operation actually runs: create the experience, operate every
              order behind it, connect the systems you already use, and extend the platform when your business needs
              something of its own.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LAYERS.map((layer) => (
              <Link
                key={layer.num}
                href={layer.href}
                className="group flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
              >
                <div>
                  <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                    {layer.num}
                  </span>
                  <h3 className="mt-2 text-[19px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                    {layer.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{layer.body}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. #principles — HOW WE WORK */}
      <section id="principles" className="scroll-mt-24 border-t border-[var(--od-border)] py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
              How we work
            </p>
            <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              What a connected ordering foundation changes.
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              The platform is organized around the work of offering an experience, operating an order, and connecting
              the systems around it.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((item) => (
              <div
                key={item.title}
                className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
              >
                <h3 className="text-[18px] font-bold leading-snug text-[var(--od-text)]">{item.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. #scale — DARK CONTROL BAND */}
      <section id="scale" className="scroll-mt-24 py-10">
        <Container>
          <div className="relative overflow-hidden rounded-[20px] bg-[#111013] p-7 sm:p-12 lg:p-14 text-white grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[540px] w-[540px] -translate-y-1/2"
              style={{
                background: "none",
              }}
            />

            <div className="relative z-10 lg:col-span-5">
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#F9D0D8]">How it fits together</p>
              <h2 className="mt-3 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-white">
                One ordering operation, four connected concerns.
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.6] text-[#A9A8AF]">
                A customer-facing experience is only useful when it connects to the people, systems, and changes needed
                to run the order after it is placed.
              </p>
            </div>

            <div className="relative z-10 lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SCALE_TILES.map((tile) => (
                <div
                  key={tile.title}
                  className="rounded-[10px] border border-[#2A2A2E] bg-[#1B1A1F] p-6"
                >
                  <h3 className="text-[16px] font-bold text-white">{tile.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-[#A9A8AF]">{tile.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. #related — MORE ABOUT THE COMPANY */}
      <section id="related" className="scroll-mt-24 py-14 sm:py-16">
        <Container>
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--od-text)]">
            More about the company.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
              >
                <div>
                  <span className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[var(--od-action-content)]">
                    {card.label}
                  </span>
                  <h3 className="mt-2 text-[18px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CLOSING DARK CTA BAND */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[10px] bg-[#111013] px-7 py-14 sm:px-14 sm:py-[72px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[634px] w-[696px] -translate-y-1/2"
              style={{
                background: "none",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-white">
                See the infrastructure running.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#A9A8AF]">
                Walk through the storefront, the merchant tools and the API with someone who knows your operation, or
                ask us anything first.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?meeting=demo#book"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A]"
              >
                Book a demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F]"
              >
                Talk to {BRAND}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
