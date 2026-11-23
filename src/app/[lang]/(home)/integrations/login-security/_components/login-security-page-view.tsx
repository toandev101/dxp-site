"use client";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { LOGIN_SECURITY_INTEGRATIONS } from "../../_data/integrations-catalog";
import {
  FilterableIntegrationsGrid,
  IntegrationClosingCta,
  IntegrationHero,
} from "../../_components/integrations-shared";
import { LoginSecurityHeroAside } from "../../_components/integration-hero-asides";

const BRAND = siteConfig.name;

export function LoginSecurityPageView() {
  const { openDemoModal } = useUiStore();

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. HERO */}
      <IntegrationHero
        breadcrumbs={[
          { label: "Integrations", href: "/integrations" },
          { label: "Login and security" },
        ]}
        eyebrow="Login and security integrations"
        title="Faster sign-in for customers. Fewer bots at the door."
        lede="Let customers log in with the accounts they already use, and keep automated traffic out of sign-up, login, and checkout."
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "Login & security integrations" }}
        secondaryCta={{ label: "See all integrations", href: "/integrations" }}
        aside={<LoginSecurityHeroAside />}
      />

      {/* 2. FILTERABLE CATALOG (5 INTEGRATIONS) */}
      <section id="catalog" className="scroll-mt-24 py-16">
        <Container>
          <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">
            Login and security integrations
          </p>
          <h2 className="mt-2 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            Choose how customers sign in.
          </h2>

          <div className="mt-8">
            <FilterableIntegrationsGrid
              items={LOGIN_SECURITY_INTEGRATIONS}
              searchPlaceholder="Search login and security integrations"
              countNoun="login and security integrations"
              defaultVisibleCount={12}
            />
          </div>
        </Container>
      </section>

      {/* 3. COMPARE SIGN-IN OPTIONS */}
      <section id="compare" className="scroll-mt-24 border-t border-[var(--od-border)] py-16">
        <Container>
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
            Sign-in options
          </p>
          <h2 className="mt-2 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
            Offer the login your customers expect.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
              <h3 className="text-[19px] font-bold text-[var(--od-text)]">Social login</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Customers sign in with their Apple, Google, or Facebook account instead of creating a new password.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openDemoModal("Twilio one-time login codes")}
              className="group rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 text-left transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] flex flex-col justify-between cursor-pointer"
            >
              <div>
                <h3 className="text-[19px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)]">
                  One-time codes
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                  Customers get a login or sign-up code by SMS or WhatsApp, sent through your Twilio account.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                Explore Twilio <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>
        </Container>
      </section>

      {/* 4. CLOSING CTA */}
      <IntegrationClosingCta
        title="Make signing in the easy part of ordering."
        body="Tell us which login options your customers expect, and we will help you set them up."
        primaryCta={{ label: `Talk to ${BRAND}`, modalTopic: "Login & security setup" }}
        secondaryCta={{ label: "See all integrations", href: "/integrations" }}
      />
    </div>
  );
}
