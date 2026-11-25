"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { DELIVERY_INTEGRATIONS } from "../../_data/integrations-catalog";
import {
  DeliveryFlowDiagram,
  IntegrationClosingCta,
  IntegrationHero,
  IntegrationProviderCard,
} from "../../_components/integrations-shared";
import { DeliveryHeroAside } from "../../_components/integration-hero-asides";

const BRAND = siteConfig.name;

export function DeliveryPageView() {
  const { openDemoModal } = useUiStore();

  const models = [
    {
      num: "01",
      title: "Own fleet",
      body: "Your drivers receive, accept, and complete deliveries in the Ordering Driver App.",
      highlight: false,
    },
    {
      num: "02",
      title: "Courier network",
      body: "Send deliveries to on-demand delivery companies such as Uber Direct, DoorDash Drive, and Lalamove.",
      highlight: false,
    },
    {
      num: "03 · Most flexible",
      title: "Hybrid",
      body: "Combine your own drivers with delivery companies and choose which one serves each store.",
      highlight: true,
    },
  ];

  const checklist = [
    {
      num: "01",
      title: "Coverage",
      body: "Set the stores, delivery zones, and hours each delivery option covers.",
      tag: "Operating area · Per store",
    },
    {
      num: "02",
      title: "Assignment",
      body: "Choose the delivery company or driver group that receives each store's orders.",
      tag: "Dispatch · Automatic",
    },
    {
      num: "03",
      title: "Customer updates",
      body: "Customers follow status and courier details on their tracking page.",
      tag: "Experience · Live",
    },
    {
      num: "04",
      title: "Delivery fees",
      body: "Set the delivery fee customers pay for each zone.",
      tag: "Commercial · Per zone",
    },
  ];

  const capabilities = [
    {
      num: "01",
      title: "Automatic assignment",
      body: "Orders go to the right delivery company or driver group as soon as they are placed.",
    },
    {
      num: "02",
      title: "Mixed fleets",
      body: "Use delivery companies and in-house drivers side by side.",
    },
    {
      num: "03",
      title: "Live status",
      body: `Status and courier details flow back to ${BRAND} and to your customer.`,
    },
    {
      num: "04",
      title: "One dashboard",
      body: `Follow every delivery, from your drivers or a courier, in the ${BRAND} Dashboard.`,
    },
  ];

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: "Platform", href: "/products" },
          { label: "Connect", href: "/products#connect" },
          { label: "Delivery networks" },
        ]}
        title="Send every order to the right courier, automatically."
        lede={`Connect on-demand delivery companies, your in-house drivers, or both. ${BRAND} assigns each delivery automatically and keeps you and your customers updated until it arrives.`}
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "Delivery network integrations" }}
        secondaryCta={{ label: "See all integrations", href: "/integrations" }}
        meta={["Delivery companies", "In-house drivers", "Automatic assignment"]}
        aside={<DeliveryHeroAside />}
      />

      {/* 2. HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 py-16">
        <Container>
          <h2 className="text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            How delivery works with {BRAND}.
          </h2>
          <div className="mt-8">
            <DeliveryFlowDiagram />
          </div>
        </Container>
      </section>

      {/* 3. DELIVERY MODELS */}
      <section id="models" className="scroll-mt-24 py-12">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Delivery models
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            Choose the delivery model that fits each store.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {models.map((m) => (
              <div
                key={m.title}
                className={`rounded-[10px] border p-6 ${
                  m.highlight
                    ? "border-[#D91842] bg-[var(--od-action-soft)]/40"
                    : "border-[var(--od-border)] bg-[var(--od-bg)]"
                }`}
              >
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">{m.num}</span>
                <h3 className="mt-2 text-[19px] font-bold text-[var(--od-text)]">{m.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. DELIVERY CATALOG (13 PROVIDERS) */}
      <section id="catalog" className="scroll-mt-24 py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Delivery integrations
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Choose your delivery companies.
              </h2>
              <p className="mt-2.5 max-w-2xl text-[15px] text-[var(--od-text-muted)]">
                Every delivery company listed here is an {BRAND} integration. Ordering Driver App runs deliveries with
                your own drivers.
              </p>
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
            {DELIVERY_INTEGRATIONS.map((item) => (
              <IntegrationProviderCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. BEFORE YOU LAUNCH CHECKLIST */}
      <section id="delivery-checklist" className="scroll-mt-24 border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-16 my-8">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Before you launch
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            What to set for each store.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {checklist.map((item) => (
              <div
                key={item.num}
                className="flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
              >
                <div>
                  <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                    {item.num}
                  </span>
                  <h3 className="mt-2 text-[17.5px] font-bold text-[var(--od-text)]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{item.body}</p>
                </div>
                <p className="mt-5 border-t border-[var(--od-border)] pt-3 font-mono text-[11px] text-[var(--od-text-muted)]">
                  {item.tag}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. OPERATING CONTROL */}
      <section id="capabilities" className="scroll-mt-24 py-12">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Operating control
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            Run delivery as one operation.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.num} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">{c.num}</span>
                <h3 className="mt-2 text-[17.5px] font-bold text-[var(--od-text)]">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. OWN FLEET + TECHNICAL HANDOFF */}
      <section className="py-12">
        <Container className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div id="driver-app" className="scroll-mt-24 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                For an own fleet
              </p>
              <h2 className="mt-2 text-[24px] font-bold text-[var(--od-text)]">
                Run your own fleet with the Ordering Driver App.
              </h2>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Your drivers receive, accept, and complete deliveries in the app, with the same order flow and customer
                updates as a delivery company.
              </p>
            </div>
            <Link
              href="/platform/ordering-delivery"
              className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline w-fit"
            >
              <span>Explore Ordering Delivery</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div id="developers" className="scroll-mt-24 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Technical handoff
              </p>
              <h2 className="mt-2 text-[24px] font-bold text-[var(--od-text)]">Connect any delivery provider.</h2>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Use webhooks, Plugins, and the API to connect regional couriers or custom dispatch software alongside
                your existing delivery setup.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-5">
              <Link
                href="/products#extend"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>Read the API docs</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => openDemoModal("Discuss delivery setup")}
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline cursor-pointer"
              >
                <span>Discuss delivery setup</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. RELATED */}
      <section id="related" className="scroll-mt-24 py-12">
        <Container>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
            Explore the connected operating model.
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                label: "Connect",
                title: "POS integrations",
                body: "Send orders to your POS while couriers deliver them.",
                href: "/integrations/pos",
              },
              {
                label: "Connect",
                title: "Payment gateway setup",
                body: "Take online payments alongside every delivery.",
                href: "/integrations/payments",
              },
              {
                label: "Operate",
                title: "Ordering Delivery",
                body: "Explore the delivery product surface for your operating model.",
                href: "/platform/ordering-delivery",
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

      {/* 9. CLOSING CTA */}
      <IntegrationClosingCta
        title="Start delivering from your own channels."
        body="Tell us your cities, stores, and delivery model, and we will help you connect the right delivery companies and drivers."
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "Delivery integrations consultation" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />
    </div>
  );
}
