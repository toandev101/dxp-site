"use client";

import { useMemo } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/lib/site-config";
import {
  CORE_INTEGRATIONS,
  HUB_CATEGORY_CARDS,
} from "../_data/integrations-catalog";
import { MIDDLEWARE_POS_AS_ITEMS } from "../_data/middleware-pos-list";
import {
  FilterableIntegrationsGrid,
  IntegrationClosingCta,
  IntegrationHero,
} from "./integrations-shared";
import { HubHeroAside } from "./integration-hero-asides";

const BRAND = siteConfig.name;

export function IntegrationsDirectory() {
  const allDirectoryItems = useMemo(
    () => [...CORE_INTEGRATIONS, ...MIDDLEWARE_POS_AS_ITEMS],
    []
  );

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. DARK HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: "Platform", href: "/products" },
          { label: "Connect", href: "/products#connect" },
          { label: "All integrations" },
        ]}
        title="Connect the tools your business already runs on."
        lede={`Payment gateways, POS systems, delivery companies, marketplaces, loyalty, analytics, and automation, all connected to your ${BRAND} operation.`}
        aside={<HubHeroAside />}
      />

      {/* 2. SEARCH + CATEGORY CARDS + FULL DIRECTORY */}
      <section id="directory" className="scroll-mt-24 py-14 sm:py-16">
        <Container className="space-y-16">
          {/* Interactive Search, Country Filter, Category Pills, and Full Directory */}
          <div>
            <FilterableIntegrationsGrid
              items={allDirectoryItems}
              searchPlaceholder="Search integrations"
              countNoun="integrations"
              showCategoryPills
              defaultVisibleCount={30}
            />
          </div>

          {/* By category — 9 Category Cards */}
          <div className="border-t border-[var(--od-border)] pt-14">
            <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">By category</p>
            <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              Connect the stack you already run.
            </h2>

            <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {HUB_CATEGORY_CARDS.map((card) => (
                <Link
                  key={card.num}
                  href={card.href}
                  className="group flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                >
                  <div>
                    <h3 className="text-[18px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)]">
                    <span>{card.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CLOSING DARK CTA */}
      <IntegrationClosingCta
        title="Don’t see the tool you run?"
        body={`Tell us which payment gateway, POS, delivery network, or CRM your business uses, and we will help you map the connection to ${BRAND}.`}
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "Integrations · Custom connection" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />
    </div>
  );
}
