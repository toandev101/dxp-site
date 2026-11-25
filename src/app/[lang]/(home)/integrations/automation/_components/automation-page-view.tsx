"use client";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/lib/site-config";
import {
  AUTOMATION_INTEGRATIONS,
  BUILT_IN_AUTOMATIONS,
} from "../../_data/integrations-catalog";
import {
  IntegrationClosingCta,
  IntegrationHero,
  IntegrationProviderCard,
} from "../../_components/integrations-shared";
import { AutomationHeroAside } from "../../_components/integration-hero-asides";

const BRAND = siteConfig.name;

export function AutomationPageView() {
  const howItWorks = [
    {
      num: "01",
      title: "An event happens",
      body: `A customer places an order, a status changes, or your menu is updated in ${BRAND}.`,
    },
    {
      num: "02",
      title: `${BRAND} reacts`,
      body: "Webhooks send the event to your systems, and Plugins run your own logic at that step.",
    },
    {
      num: "03",
      title: "Your stack stays in step",
      body: "Your ERP, CRM, messaging, and AI tools act on the same data through the API, MCP, and Zapier.",
    },
  ];

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: "All integrations", href: "/integrations" },
          { label: "Automation and more" },
        ]}
        title="Automate everything around your orders."
        lede={`Send order events to your systems with Webhooks, extend ${BRAND} with Plugins, build on the API and MCP, connect thousands of apps through Zapier, and connect your LiveChat account for support or sales chat on your channels.`}
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "Automation integrations" }}
        secondaryCta={{ label: "Browse all integrations", href: "/integrations" }}
        meta={["Webhooks and Plugins", "API and MCP", "No-code with Zapier", "LiveChat for support"]}
        aside={<AutomationHeroAside />}
      />

      {/* 2. BUILT INTO ORDERING.CO (3 AUTOMATIONS) */}
      <section id="built-in" className="scroll-mt-24 py-16">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Built into {BRAND}
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            Automations that run on their own.
          </h2>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
            Features built into {BRAND} that follow your orders and act at the right moment. Our team helps with any
            setup a channel needs.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {BUILT_IN_AUTOMATIONS.map((item) => (
              <IntegrationProviderCard key={item.id} item={item} compact />
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CATALOG (11 INTEGRATIONS) */}
      <section id="catalog" className="scroll-mt-24 border-t border-[var(--od-border)] py-16">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Automation and more
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            Choose how you automate.
          </h2>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
            Each integration has its own page with setup steps and examples.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AUTOMATION_INTEGRATIONS.map((item) => (
              <IntegrationProviderCard key={item.id} item={item} compact />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-16 my-8">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            How it works
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            From an order to every system that needs it.
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

      {/* 5. DEVELOPERS */}
      <section id="developers" className="scroll-mt-24 py-12">
        <Container>
          <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-7 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Developers
              </p>
              <h2 className="mt-2 text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
                Build on the same platform we use.
              </h2>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                The {BRAND} API, Webhooks, Plugins, and MCP give your team the building blocks behind every {BRAND}{" "}
                integration.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/products#extend"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2 text-[14px] font-semibold text-white hover:bg-[#B8123A]"
              >
                Open API reference
              </Link>
              <Link
                href="/#control"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-2 text-[14px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)]"
              >
                Explore Developers
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CLOSING CTA */}
      <IntegrationClosingCta
        title="Automate your ordering operation."
        body="Tell us which systems you want connected, and we will help you choose between Webhooks, Plugins, the API, and Zapier. Never share credentials in a request."
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "Automation & webhooks setup" }}
        secondaryCta={{ label: "See all integrations", href: "/integrations" }}
      />
    </div>
  );
}
