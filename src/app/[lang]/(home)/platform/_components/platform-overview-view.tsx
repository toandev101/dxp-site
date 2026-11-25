"use client";

import { Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { BrandLogo } from "@/components/layout/header";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const BRAND = siteConfig.name;

interface PillarCard {
  title: string;
  body: string;
  href: string;
  badge?: string;
}

interface PillarSection {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  cards: PillarCard[];
}

const PILLAR_SECTIONS: PillarSection[] = [
  {
    id: "build",
    eyebrow: "01 · Build",
    title: "Choose the customer ordering surface.",
    body: "Start with the place customers will order, then identify the menu, store and service choices that need to be configured for that experience.",
    cards: [
      {
        title: "White label food delivery app",
        body: "Launch a branded food delivery app connected to your marketplace, merchants, and delivery operation.",
        href: "/platform/ordering-apps",
      },
      {
        title: "Ordering Web",
        body: "Explore a branded website ordering journey for your project.",
        href: "/platform/ordering-web",
      },
      {
        title: "Ordering Apps",
        body: "Explore the app experience and its project requirements.",
        href: "/platform/ordering-apps",
      },
      {
        title: "Ordering Kiosk",
        body: "Explore self-ordering touchpoints for an in-store journey.",
        href: "/platform/ordering-kiosk",
      },
      {
        title: "Ordering Call Center",
        body: "Explore assisted ordering for teams that take orders by phone.",
        href: "/platform/ordering-call-center",
      },
      {
        title: "Marketplaces",
        body: "Explore marketplace workflows and the commercial model they require.",
        href: "/solutions/marketplaces",
      },
      {
        title: "Multi-store ordering",
        body: "Explore how a multi-location ordering journey can be scoped.",
        href: "/platform/multi-store-ordering",
      },
      {
        badge: "New",
        title: "AI Ordering Agents",
        body: "Explore conversational ordering surfaces and their configuration needs.",
        href: "/platform/ai-ordering-agents",
      },
    ],
  },
  {
    id: "operate",
    eyebrow: "02 · Operate",
    title: "Map the work behind an order.",
    body: "Identify the store workflow, fulfillment handoff and team visibility your operation needs before selecting the products and connections to configure.",
    cards: [
      {
        title: "Ordering Merchant",
        body: "Explore the order-handling workflow for stores and teams.",
        href: "/platform/ordering-merchant",
      },
      {
        title: "Order management",
        body: "Review the order states and operational touchpoints relevant to your stores.",
        href: "/platform/ordering-merchant#order-management",
      },
      {
        title: "Multi-location operations",
        body: "Explore the operating questions that emerge across locations.",
        href: "/platform/multi-location-operations",
      },
      {
        title: "Ordering Delivery",
        body: "Explore delivery operations, including the responsibilities your team keeps.",
        href: "/platform/ordering-delivery",
      },
      {
        title: "Driver App & dispatch",
        body: "Explore driver-facing workflow requirements before configuring delivery.",
        href: "/platform/driver-app",
      },
      {
        title: "Third-party delivery",
        body: "Explore partner delivery choices and their operational dependencies.",
        href: "/platform/third-party-delivery",
      },
    ],
  },
  {
    id: "connect",
    eyebrow: "03 · Connect",
    title: "Identify the systems that need to connect.",
    body: "Use the integration layer to identify the point of sale, payment, delivery and customer systems that require a project-specific compatibility review.",
    cards: [
      {
        title: "POS integrations",
        body: "Review the point-of-sale connection needed for your stores.",
        href: "/integrations/pos",
      },
      {
        title: "Payment gateways",
        body: "Review payment providers, settlement responsibilities and regional requirements.",
        href: "/integrations/payments",
      },
      {
        title: "Delivery networks",
        body: "Review the delivery networks and service areas relevant to the project.",
        href: "/integrations/delivery",
      },
      {
        title: "Loyalty & CRM",
        body: "Review the customer-data and communication connections your operation requires.",
        href: "/integrations/loyalty",
      },
      {
        title: "Analytics & reports",
        body: "Review the reporting questions your team needs to answer.",
        href: "/integrations/analytics",
      },
      {
        title: "All integrations",
        body: "Review the integration categories that should be evaluated for your project.",
        href: "/integrations",
      },
    ],
  },
  {
    id: "extend",
    eyebrow: "04 · Extend",
    title: "Discuss how the platform should extend.",
    body: "For technical teams, the extension conversation starts with the customer surface, data flow and responsibilities that the project needs to preserve.",
    cards: [
      {
        title: "Ordering API",
        body: "Review the API surface and implementation scope with the technical team.",
        href: "/developers#api",
      },
      {
        title: "SDKs & webhooks",
        body: "Review event and integration requirements before choosing an implementation path.",
        href: "/developers#sdks",
      },
      {
        title: "White label",
        body: "Discuss brand expression and customer-facing requirements for your white-label deployment.",
        href: "/developers/white-label",
      },
      {
        title: "Reseller platform",
        body: "Discuss operational and commercial responsibilities for a partner model.",
        href: "/solutions/agencies-resellers",
      },
      {
        title: "Source code license",
        body: "The open-source frontend code included with every product.",
        href: "/developers/source-code-license",
      },
      {
        title: "Custom solutions",
        body: "Discuss product and operational requirements beyond our standard products.",
        href: "/solutions/custom-projects",
      },
    ],
  },
];

const MATRIX_HEADERS = [
  "Web",
  "Apps",
  "Kiosk",
  "Call Center",
  "AI Agents",
  "Merchant",
  "Multi-location",
  "Delivery",
];

const MATRIX_ROWS: { question: string; checks: boolean[] }[] = [
  {
    question: "Customer ordering journey",
    checks: [true, true, true, true, true, false, false, false],
  },
  {
    question: "Store and fulfillment workflow",
    checks: [false, false, false, false, false, true, true, true],
  },
  {
    question: "Technical and commercial dependencies",
    checks: [true, true, true, true, true, true, true, true],
  },
];

const WORKFLOW_CARDS: PillarCard[] = [
  {
    title: "Food delivery app platform and development",
    body: "Build your food delivery app around customer ordering, restaurant operations, drivers, and admin. Scope configuration, frontend work, and integrations.",
    href: "/platform/ordering-apps",
  },
  {
    title: "Restaurant marketing software",
    body: "Connect restaurant promotions, loyalty, upselling, and cart recovery with the ordering journey. Plan audiences, rules, channels, and measurement.",
    href: "/integrations/loyalty",
  },
  {
    title: "Restaurant table ordering system",
    body: "Plan QR table ordering, guest self-service, and staff-assisted order taking. Connect the table context with merchant preparation and payment.",
    href: "/platform/ordering-kiosk",
  },
];

export function PlatformOverviewView() {
  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. DARK HERO (Grid + bottom-right blue glow, no right aside) */}
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
          className="pointer-events-none absolute -right-24 -bottom-36 h-[560px] w-[680px]"
          style={{
            background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.24), transparent)",
          }}
        />

        <Container className="relative z-10 py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="text-[42px] sm:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.03] text-white [text-wrap:balance]">
              Plan the parts of ordering that need to work together.
            </h1>

            <p className="mt-6 max-w-xl text-[16.5px] sm:text-[18px] leading-[1.6] text-[#c4c6ca]">
              Explore customer ordering surfaces, the work behind an order and the systems your team needs to evaluate.
              The right configuration depends on the channels, locations and partners selected for your project.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?meeting=demo#book"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
              >
                Book a demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224]"
              >
                Talk to {BRAND}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#c4c6ca]">
              <span>Customer surfaces</span>
              <span>Operational workflows</span>
              <span>Integration planning</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2-5. FOUR PLATFORM PILLAR SECTIONS (#build, #operate, #connect, #extend) */}
      {PILLAR_SECTIONS.map((pillar, idx) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={cn(
            "scroll-mt-24 py-14 sm:py-16",
            idx > 0 && "border-t border-[var(--od-border)]"
          )}
        >
          <Container>
            <div className="max-w-2xl">
              <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">{pillar.eyebrow}</p>
              <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                {pillar.title}
              </h2>
              <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">{pillar.body}</p>
            </div>

            <ul className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pillar.cards.map((card) => (
                <li key={card.title}>
                  <Link
                    href={card.href}
                    className="group flex h-full flex-col justify-start rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                  >
                    {card.badge && (
                      <span className="mb-1.5 inline-block w-fit font-mono text-[11px] font-semibold text-[var(--od-action-content)]">
                        {card.badge}
                      </span>
                    )}
                    <h3 className="text-[17px] font-bold leading-snug text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      {/* 6. #features — PLANNING GUIDE MATRIX TABLE */}
      <section id="features" className="scroll-mt-24 border-t border-[var(--od-border)] py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">Planning guide</p>
            <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              Start each product conversation with the right question.
            </h2>
            <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              The table organizes the questions a team can bring to the relevant product discussion. Confirm specific
              capabilities, availability and dependencies during solution design.
            </p>
          </div>

          <div className="mt-9 overflow-x-auto rounded-[10px] border border-[var(--od-border)]">
            <table className="w-full min-w-[780px] border-collapse text-left text-[14px]">
              <caption className="sr-only">
                Planning questions by {BRAND} product area. A check mark identifies a topic to discuss, not an included
                capability.
              </caption>
              <thead>
                <tr className="border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)] font-mono text-[11.5px] text-[var(--od-text-muted)]">
                  <th scope="col" className="px-5 py-3.5 font-medium">
                    Planning question
                  </th>
                  {MATRIX_HEADERS.map((header) => (
                    <th key={header} scope="col" className="px-3.5 py-3.5 text-center font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--od-border)] bg-[var(--od-bg)]">
                {MATRIX_ROWS.map((row) => (
                  <tr key={row.question}>
                    <th scope="row" className="px-5 py-4 font-bold text-[var(--od-text)]">
                      {row.question}
                    </th>
                    {row.checks.map((checked, idx) => (
                      <td key={MATRIX_HEADERS[idx]} className="px-3.5 py-4 text-center">
                        {checked ? (
                          <span className="inline-flex items-center justify-center text-[#266df0]" title="Discuss this topic">
                            <Check className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
                            <span className="sr-only">Discuss this topic</span>
                          </span>
                        ) : (
                          <span className="text-[var(--od-text-muted)]" title="Discuss in another product area">
                            <span aria-hidden="true">—</span>
                            <span className="sr-only">Discuss in another product area</span>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2.5 text-[12.5px] text-[var(--od-text-muted)] lg:hidden">
            Scroll sideways to compare the product discussions.
          </p>
        </Container>
      </section>

      {/* 7. #connected — ONE INFRASTRUCTURE / PROJECT PLANNING MAP */}
      <section id="connected" className="scroll-mt-24 border-t border-[var(--od-border)] py-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">One infrastructure</p>
              <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Use one planning map across the customer journey.
              </h2>
              <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                The map helps teams discuss the customer touchpoints, store workflow and connections your project needs
                to validate together.
              </p>
            </div>

            <div
              role="img"
              aria-label={`Web, App, Kiosk, Phone, AI agent connect to ${BRAND}, which connects to Merchant App, POS, Drivers, Loyalty & CRM`}
              className="lg:col-span-7 flex flex-col items-stretch"
            >
              {/* Top 5-column pill row */}
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
                {["Web", "App", "Kiosk", "Phone", "AI agent"].map((item, idx) => (
                  <li
                    key={item}
                    className={cn(
                      "rounded-[8px] border px-3 py-3 text-center text-[13px] font-semibold",
                      idx === 0
                        ? "border-[#266df0] bg-[var(--od-action-soft)] text-[var(--od-action-content)]"
                        : "border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)]"
                    )}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mx-auto h-5 w-px bg-[var(--od-border-strong)]" aria-hidden="true" />

              {/* Center core */}
              <div className="flex flex-wrap items-center gap-4 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] px-6 py-4">
                <BrandLogo />
                <span className="text-[13.5px] text-[var(--od-text-muted)]">Project planning map</span>
              </div>

              <div className="mx-auto h-5 w-px bg-[var(--od-border-strong)]" aria-hidden="true" />

              {/* Bottom 4-column pill row */}
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {["Merchant App", "POS", "Drivers", "Loyalty & CRM"].map((item) => (
                  <li
                    key={item}
                    className="rounded-[8px] border border-[var(--od-border)] bg-[var(--od-bg)] px-3 py-3 text-center text-[13px] font-semibold text-[var(--od-text)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. CLOSING DARK CTA BAND */}
      <section className="py-12 lg:py-16">
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
                Map the platform around your operation.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#c4c6ca]">
                Use a demo to identify the customer surfaces, operating workflows and connections that should be
                validated for your project.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?meeting=demo#book"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
              >
                Book a demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224]"
              >
                Talk to {BRAND}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. POST-CTA CROSS-LINK SECTION — PLAN YOUR ORDERING WORKFLOW */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--od-text)]">
              Plan your ordering workflow
            </h2>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              Choose a customer journey, connect the operating roles, and define what needs configuration or
              development.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {WORKFLOW_CARDS.map((card) => (
              <li key={card.title}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col justify-start rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                >
                  <h3 className="text-[17px] font-bold leading-snug text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
