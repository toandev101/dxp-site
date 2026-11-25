"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { POS_DIRECT_INTEGRATIONS } from "../../_data/integrations-catalog";
import { MIDDLEWARE_POS_LIST } from "../../_data/middleware-pos-list";
import {
  IntegrationClosingCta,
  IntegrationHero,
  IntegrationProviderCard,
  PosFlowDiagram,
} from "../../_components/integrations-shared";
import { PosHeroAside } from "../../_components/integration-hero-asides";

const BRAND = siteConfig.name;

export function PosPageView() {
  const { openDemoModal } = useUiStore();
  const [posQuery, setPosQuery] = useState("");
  const [showAllPos, setShowAllPos] = useState(false);

  const filteredMiddlewarePos = useMemo(() => {
    const q = posQuery.trim().toLowerCase();
    if (!q) return MIDDLEWARE_POS_LIST;
    return MIDDLEWARE_POS_LIST.filter(
      (p) => p.name.toLowerCase().includes(q) || p.via.toLowerCase().includes(q)
    );
  }, [posQuery]);

  const visibleMiddlewarePos = showAllPos ? filteredMiddlewarePos : filteredMiddlewarePos.slice(0, 36);

  const syncCapabilities = [
    {
      num: "01",
      title: "Menu and prices",
      body: "Imported from the POS and kept in sync, so you maintain one menu.",
    },
    {
      num: "02",
      title: "Availability",
      body: "Items switched on or off in the POS update online through webhooks or a scheduled sync.",
    },
    {
      num: "03",
      title: "Orders",
      body: "Online orders are injected into the POS and follow the workflow your staff already use.",
    },
    {
      num: "04",
      title: "Order status",
      body: `Status changes update in the POS and in ${BRAND} at the same time.`,
    },
  ];

  const evaluationCards = [
    {
      title: "Start with the connector’s actual scope",
      body: "Open the POS entry that matches your product and version, then confirm menus, modifiers, prices, taxes, availability, orders, status, refunds, and sync direction. An available API is not proof that a connector supports every field or provides real-time updates. Agree retry handling, duplicate prevention, monitoring, and who owns an incident.",
    },
    {
      title: "Toast API access and ordering",
      body: "Toast distinguishes partner, custom, standard, and analytics API access. Permissions depend on the integration type and approved scope. Start with its official API overview and confirm the endpoints and restaurant authorization needed for your order flow; a reporting credential does not establish order-write permission.",
    },
    {
      title: "Cassa in Cloud and OnlinePOS APIs",
      body: "Cassa in Cloud documents API access for Retail Enterprise or Risto Enterprise licenses, with an API key and access token. OnlinePOS links its open API from its integrations page. Confirm credentials, available operations, and the exact license with the provider before commissioning either connector.",
    },
    {
      title: "GoTab, Kounta, and CompuCash",
      body: "GoTab documents a sandbox and API credentials; Kounta publishes an API reference with authentication and resource endpoints. Review account access and object mapping before development. For CompuCash, request the provider’s current documentation for your installed version; do not substitute an unrelated POS API.",
    },
    {
      title: "TISSL, Orderwise, and Petpooja",
      body: `Use TISSL’s official integration directory to start a CRM or marketing connection review. Orderwise describes a business-specific API integration route. Petpooja describes its online-order management offering. Request technical access, supported fields, licensing, and connection ownership from each provider; these sources do not establish an ${BRAND} connector or an arbitrary connection between them.`,
    },
    {
      title: "How do Just Eat orders reach my POS?",
      body: `Review the Just Eat channel connection and the POS connector as two separate hops: marketplace to ${BRAND}, then ${BRAND} to the POS. Confirm store mapping, menu ownership, payment and tax mapping, acceptance, cancellations, and failed delivery to the POS. Receiving an order in ${BRAND} does not prove the POS accepted it.`,
    },
    {
      title: "Custom integration or an OMS?",
      body: "A custom connector suits a specific data flow when you can own its implementation, monitoring, API changes, and support. An order management system (OMS) may fit broader routing and inventory coordination across channels; compare its documented workflows with your needs. Evaluate mappings, exceptions, multi-location scope, ongoing ownership, and total cost before selecting either route.",
    },
    {
      title: "What fees should I budget for?",
      body: "Separate setup and custom development from recurring provider licenses, API access, per-location or volume charges, support, and future changes. Ask for a written scope and current quote from the relevant providers. There is no single verified fee for every POS-to-marketplace connection; an unpublished price is not zero.",
    },
    {
      title: "When does this need a separate scope review?",
      body: "For BigCommerce–Square, Toast–Olo, TouchBistro–DoorDash, or BentoBox–Clover, verify the current connection with the named providers rather than inferring it from this directory. A Lieferando review API is separate from order intake. Pharmacy workflows, enterprise AIDC, and marketplace custom objects require their own data, permissions, and operating review.",
    },
  ];

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: "Platform", href: "/products" },
          { label: "Connect", href: "/products#connect" },
          { label: "POS integrations" },
        ]}
        title={`Keep your POS. Run online ordering on ${BRAND}.`}
        lede={`Your menu and prices come from the POS, and every online order goes straight into it. ${BRAND} adds the online ordering, delivery, and customer tools a point of sale is not built for.`}
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "POS integration setup" }}
        secondaryCta={{ label: "See all integrations", href: "/integrations" }}
        aside={<PosHeroAside />}
      />

      {/* 2. HOW IT WORKS — 5-STEP BIDIRECTIONAL PosFlowDiagram */}
      <section id="how-it-works" className="scroll-mt-24 py-16">
        <Container>
          <h2 className="max-w-2xl text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-[var(--od-text)]">
            How your POS works with {BRAND}.
          </h2>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
            The menu comes from your POS. Orders go back to your POS. {BRAND} adds what online ordering needs in
            between.
          </p>
          <div className="mt-8">
            <PosFlowDiagram />
          </div>
        </Container>
      </section>

      {/* 3. DIRECT POS CATALOG (8 PROVIDERS) */}
      <section id="catalog" className="scroll-mt-24 py-12">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                POS integrations
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Choose your POS.
              </h2>
            </div>
            <Link
              href="/integrations"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>All integrations</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {POS_DIRECT_INTEGRATIONS.map((item) => (
              <IntegrationProviderCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. THROUGH MIDDLEWARE — SEARCHABLE POS NETWORK DIRECTORY */}
      <section id="pos-systems" className="scroll-mt-24 border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-16 my-8">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Through middleware
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Find your POS.
              </h2>
              <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                {BRAND} also connects to 307 POS systems through Deliverect, ItsaCheckmate, and Stream, the middleware
                between your POS and your online ordering. Open yours to see how it connects, or request a free direct
                connection.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openDemoModal("Request free direct POS connection")}
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2.5 text-[14px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)] cursor-pointer"
            >
              Request a free direct connection
            </button>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-[320px]">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--od-text-muted)]" />
              <input
                type="search"
                value={posQuery}
                onChange={(e) => {
                  setPosQuery(e.target.value);
                  setShowAllPos(false);
                }}
                placeholder="Search your POS"
                aria-label="Search your POS"
                className="h-[44px] w-full rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] pl-10 pr-3.5 text-[14px] text-[var(--od-text)] placeholder:text-[var(--od-text-muted)] focus:border-[#D91842] focus:outline-none"
              />
            </div>
            <span className="font-mono text-[12px] text-[var(--od-text-muted)]">
              {posQuery.trim() ? `${filteredMiddlewarePos.length} matching POS systems` : "307 POS systems"}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleMiddlewarePos.map((pos) => (
              <button
                key={pos.id}
                type="button"
                onClick={() => openDemoModal(`${pos.name} POS via ${pos.via}`)}
                className="group rounded-[8px] border border-[var(--od-border)] bg-[var(--od-bg)] p-4 text-left transition-colors hover:border-[#D91842] cursor-pointer"
              >
                <p className="text-[14.5px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                  {pos.name}
                </p>
                <p className="mt-1 font-mono text-[11px] text-[var(--od-text-muted)]">via {pos.via}</p>
              </button>
            ))}
          </div>

          {!showAllPos && filteredMiddlewarePos.length > 36 && (
            <div className="mt-7 text-center">
              <button
                type="button"
                onClick={() => setShowAllPos(true)}
                className="inline-flex min-h-[42px] items-center justify-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2 text-[13.5px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)] cursor-pointer"
              >
                Show all {filteredMiddlewarePos.length} listed POS systems
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* 5. WHAT SYNCS (4 NUMBERED CARDS) */}
      <section id="capabilities" className="scroll-mt-24 py-14">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            What syncs
          </p>
          <h2 className="mt-2 max-w-3xl text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            What moves between your POS and {BRAND}.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {syncCapabilities.map((c) => (
              <div key={c.num} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">{c.num}</span>
                <h3 className="mt-2 text-[18px] font-bold text-[var(--od-text)]">{c.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CONNECTION ROUTE (DIRECT VS PARTNER) */}
      <section id="direct-vs-aggregator" className="scroll-mt-24 py-12">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Connection route
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            Connect directly or through a partner.
          </h2>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
            Many POS systems connect to {BRAND} directly. Others connect through an integration partner that already
            works with your POS.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <span className="inline-block rounded-full border border-[var(--od-border)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--od-text-muted)]">
                Route
              </span>
              <h3 className="mt-3 text-[19px] font-bold text-[var(--od-text)]">Direct connection</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Square, Clover, Oracle Simphony, LimeTray, Wansoft, Shopify, and PulsePOS connect straight to {BRAND}.
              </p>
            </div>
            <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <span className="inline-block rounded-full border border-[var(--od-border)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--od-text-muted)]">
                Partner
              </span>
              <h3 className="mt-3 text-[19px] font-bold text-[var(--od-text)]">Integration partner</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                ItsaCheckmate, Deliverect, Stream, and Mokka reach many more POS systems across hospitality and retail.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. DEVELOPERS BAND */}
      <section id="developers" className="scroll-mt-24 py-12">
        <Container>
          <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Don&apos;t see your POS?
              </p>
              <h2 className="mt-2 text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
                Tell us which POS you use.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products#extend"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2 text-[14px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)]"
              >
                Explore developer docs
              </Link>
              <button
                type="button"
                onClick={() => openDemoModal("Custom POS integration inquiry")}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2 text-[14px] font-semibold text-white hover:bg-[#B8123A] cursor-pointer"
              >
                Talk to {BRAND}
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. RELATED */}
      <section id="related" className="scroll-mt-24 py-12">
        <Container>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
            Explore related platform areas.
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                label: "Connect",
                title: "Middleware",
                body: "Connect your POS through ItsaCheckmate, Deliverect, Stream, or Mokka.",
                href: "#pos-systems",
              },
              {
                label: "Connect",
                title: "Payment gateways",
                body: "Take online payments with the gateway your customers already use.",
                href: "/integrations/payments",
              },
              {
                label: "Connect",
                title: "Delivery networks",
                body: "Send orders to delivery companies or your own drivers.",
                href: "/integrations/delivery",
              },
            ].map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="group rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full border border-[var(--od-border)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--od-text-muted)]">
                    {r.label}
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-[var(--od-text-muted)]">{r.body}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--od-action-content)]">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. EVALUATION: APIs, COSTS, AND CONNECTOR BOUNDARIES (9 CARDS) */}
      <section id="evaluation" className="scroll-mt-24 border-t border-[var(--od-border)] py-16">
        <Container>
          <h2 className="text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            APIs, costs, and connector boundaries
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {evaluationCards.map((card) => (
              <div key={card.title} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <h3 className="text-[16.5px] font-bold text-[var(--od-text)]">{card.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. CLOSING CTA */}
      <IntegrationClosingCta
        title="Connect your POS to online ordering."
        body="Tell us which POS you use and how many locations you run, and we will help you plan the connection."
        docGuide={{ label: "Review POS and menu-sync configuration", href: "/demo" }}
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "POS integration consultation" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />
    </div>
  );
}
