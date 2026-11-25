"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { LOYALTY_INTEGRATIONS } from "../../_data/integrations-catalog";
import {
  IntegrationClosingCta,
  IntegrationHero,
  IntegrationProviderCard,
} from "../../_components/integrations-shared";
import { LoyaltyHeroAside } from "../../_components/integration-hero-asides";

const BRAND = siteConfig.name;

export function LoyaltyPageView() {
  const { openDemoModal } = useUiStore();

  const howItWorks = [
    {
      num: "01",
      title: "Set your loyalty rules",
      body: `Configure points, cash wallet, and loyalty levels in the ${BRAND} Dashboard for the businesses that take part.`,
    },
    {
      num: "02",
      title: "Customers earn and redeem",
      body: "Customers see their points and level in the Website wallet and use their balance at checkout in the Customer App.",
    },
    {
      num: "03",
      title: "Connect your marketing stack",
      body: "Send customers to HubSpot or Mailchimp, or run your loyalty program in Spoonity.",
    },
  ];

  const checklist = [
    {
      num: "01",
      title: "Customer accounts",
      body: "Customers sign in on your website and apps so their points and orders follow them.",
      tag: "Identity · Every channel",
    },
    {
      num: "02",
      title: "Marketing consent",
      body: "Decide how customers opt in to marketing before you send them to a CRM.",
      tag: "Customer choice · Your policy",
    },
    {
      num: "03",
      title: "Rewards",
      body: "Set how customers earn points, what they can redeem, and which businesses take part.",
      tag: "Program rules · Per business",
    },
    {
      num: "04",
      title: "CRM connection",
      body: `Choose the tool that receives your customers and keep it in step with ${BRAND}.`,
      tag: "Marketing stack · HubSpot, Mailchimp",
    },
  ];

  const capabilities = [
    {
      num: "01",
      title: "Points on every order",
      body: "Customers earn points on the orders they place with the businesses in your program.",
    },
    {
      num: "02",
      title: "Cash wallet",
      body: "Customers keep a balance they can use at checkout.",
    },
    {
      num: "03",
      title: "Loyalty levels",
      body: "Reward your best customers with levels you define.",
    },
    {
      num: "04",
      title: "Connected CRM",
      body: "Grow your audience in HubSpot or Mailchimp from the customers who order with you.",
    },
  ];

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: "Platform", href: "/products" },
          { label: "Connect", href: "/products#connect" },
          { label: "Loyalty and CRM" },
        ]}
        title="Turn every order into a returning customer."
        lede="Run points, cash wallet, and loyalty levels with Ordering Loyalty, and connect the CRM and loyalty tools your marketing team already uses."
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "Loyalty & CRM integrations" }}
        secondaryCta={{ label: "See all integrations", href: "/integrations" }}
        meta={["Points and levels", "Cash wallet", "CRM connections"]}
        aside={<LoyaltyHeroAside />}
      />

      {/* 2. HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 py-16">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            How it works
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            Reward, remember, and bring customers back.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.num} className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">{step.num}</span>
                <h3 className="mt-2 text-[18px] font-bold text-[var(--od-text)]">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CATALOG (5 PROVIDERS) */}
      <section id="catalog" className="scroll-mt-24 py-12">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Loyalty &amp; CRM
              </p>
              <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Choose your loyalty and CRM tools.
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
            {LOYALTY_INTEGRATIONS.map((item) => (
              <IntegrationProviderCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. BEFORE YOU LAUNCH CHECKLIST */}
      <section id="loyalty-checklist" className="scroll-mt-24 border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-16 my-8">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Before you launch
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            What to set up for your program.
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

      {/* 5. WHAT YOU GET */}
      <section id="capabilities" className="scroll-mt-24 py-12">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            What you get
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            Loyalty that works on every channel.
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

      {/* 6. BUILT IN VS CONNECTED */}
      <section id="built-in-vs-connected" className="scroll-mt-24 py-12">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Built in or connected
          </p>
          <h2 className="mt-2 max-w-3xl text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            Use Ordering Loyalty, connect your own tools, or both.
          </h2>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
            Ordering Loyalty is built into {BRAND}. HubSpot, Mailchimp, and Spoonity connect your customers to the tools
            your team already uses.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <span className="inline-block rounded-full bg-[var(--od-action-soft)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--od-action-content)]">
                Built in
              </span>
              <h3 className="mt-3 text-[19px] font-bold text-[var(--od-text)]">Ordering Loyalty</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Points, cash wallet, and levels managed in the {BRAND} Dashboard and shown on your website and apps.
              </p>
            </div>
            <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <span className="inline-block rounded-full border border-[var(--od-border)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--od-text-muted)]">
                Connected
              </span>
              <h3 className="mt-3 text-[19px] font-bold text-[var(--od-text)]">HubSpot, Mailchimp, and Spoonity</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Send your customers to your CRM and email tools, or run your loyalty program in Spoonity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. DEVELOPERS */}
      <section id="developers" className="scroll-mt-24 py-12">
        <Container>
          <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Build your own
              </p>
              <h2 className="mt-2 text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
                Connect any CRM with the API and webhooks.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products#extend"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2 text-[14px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)]"
              >
                Read the developer documentation
              </Link>
              <button
                type="button"
                onClick={() => openDemoModal("Custom CRM integration")}
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
            Explore the connected operating model.
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                label: "Connect",
                title: "Analytics and marketing",
                body: "Measure the orders and customers your loyalty program brings back.",
                href: "/integrations/analytics",
              },
              {
                label: "Connect",
                title: "POS integrations",
                body: "Send orders to your POS while customers earn rewards online.",
                href: "/integrations/pos",
              },
              {
                label: "Operate",
                title: "Ordering Merchant",
                body: "Explore the operational surface for stores and orders.",
                href: "/platform/ordering-merchant",
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
        title="Launch a loyalty program your customers use."
        body="Tell us how you want to reward customers and which CRM your team uses, and we will help you set it up."
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "Loyalty & CRM setup" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />
    </div>
  );
}
