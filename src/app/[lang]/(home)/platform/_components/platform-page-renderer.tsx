"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { BrandLogo } from "@/components/layout/header";
import { useUiStore } from "@/stores/ui-store";
import { cn } from "@/lib/utils";
import { PlatformHeroMockup } from "./platform-hero-mockups";
import {
  MarketplaceAppPreview,
  MarketplaceWebPreview,
  RestaurantWebPreview,
} from "../../demo/_components/demo-previews";
import type { PlatformPageSpec } from "../_data/platform-types";

export function PlatformPageRenderer({ spec }: { spec: PlatformPageSpec }) {
  const { openDemoModal, setChatOpen } = useUiStore();
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. DARK HERO (.page-hero, #0b0c0d with subtle grid lines & blue bottom-right glow) */}
      <section
        className="relative overflow-hidden bg-[#0b0c0d] text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        {/* Subtle bottom-right blue glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-32 h-[540px] w-[620px]"
          style={{
            background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.24), transparent)",
          }}
        />

        <Container className="relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Left Hero Copy */}
            <div className="lg:col-span-6">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 font-mono text-[12px]">
                {spec.hero.breadcrumbs.map((crumb, idx) => (
                  <span key={crumb.label} className="inline-flex items-center gap-1.5">
                    {idx > 0 && <span className="text-[#5b5e64]">/</span>}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="text-[#92b5ff] underline underline-offset-4 hover:text-white"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-[#92b5ff]">{crumb.label}</span>
                    )}
                  </span>
                ))}
              </nav>

              <h1 className="mt-6 text-[40px] sm:text-[54px] lg:text-[62px] font-bold tracking-[-0.04em] leading-[1.02] text-white [text-wrap:balance]">
                {spec.hero.title}
              </h1>

              <p className="mt-6 max-w-xl text-[16.5px] sm:text-[18px] leading-[1.6] text-[#c4c6ca]">
                {spec.hero.lede}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {spec.hero.primaryCta.href ? (
                  <Link
                    href={spec.hero.primaryCta.href}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
                  >
                    {spec.hero.primaryCta.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => openDemoModal(spec.hero.primaryCta.modalTopic || spec.metaTitle)}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
                  >
                    {spec.hero.primaryCta.label}
                  </button>
                )}

                {spec.hero.secondaryCta.openChat ? (
                  <button
                    type="button"
                    onClick={() => setChatOpen(true)}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224] cursor-pointer"
                  >
                    {spec.hero.secondaryCta.label}
                  </button>
                ) : (
                  <Link
                    href={spec.hero.secondaryCta.href || "/demo"}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224]"
                  >
                    {spec.hero.secondaryCta.label}
                  </Link>
                )}
              </div>

              {/* Meta Items */}
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[13px] text-[#c4c6ca]">
                {spec.hero.meta.map((m) =>
                  m.pill ? (
                    <span
                      key={m.text}
                      className="rounded-[4px] border border-[#266df0] bg-[#17284a]/60 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[#92b5ff]"
                    >
                      {m.text}
                    </span>
                  ) : (
                    <span key={m.text}>{m.text}</span>
                  )
                )}
              </div>
            </div>

            {/* Right Visual Mockup */}
            <div className="lg:col-span-6">
              <PlatformHeroMockup slug={spec.slug} caption={spec.hero.mockupCaption} />
            </div>
          </div>
        </Container>

        {/* Optional Bottom Dark Strip (ordering-web, ordering-apps) */}
        {spec.hero.bottomStrip && (
          <div className="relative z-10 border-t border-white/10 bg-black/30">
            <Container className="py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-[13px] text-[#c4c6ca] max-w-xs">{spec.hero.bottomStrip.lead}</p>
              {spec.hero.bottomStrip.items.length > 0 && (
                <div className="flex flex-wrap items-center gap-x-10 gap-y-2 text-[14px] font-semibold text-[#989aa0]">
                  {spec.hero.bottomStrip.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              )}
            </Container>
          </div>
        )}
      </section>

      {/* Optional Sticky Subnav Bar (ordering-kiosk, ordering-call-center) */}
      {spec.pageIndex && (
        <nav
          aria-label="On this page"
          className="sticky top-[73px] z-20 border-b border-[var(--od-border)] bg-[var(--od-bg)]/95 backdrop-blur-md"
        >
          <Container className="flex items-center gap-6 overflow-x-auto py-3.5 text-[13px] whitespace-nowrap">
            <span className="font-semibold text-[var(--od-text-muted)]">On this page:</span>
            {spec.pageIndex.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-[var(--od-text)] hover:text-[var(--od-action-content)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}

      {/* 2. PILLARS (4-Card Grid) */}
      <section id="pillars" className="scroll-mt-28 py-16 sm:py-20">
        <Container>
          {spec.pillars.eyebrow && (
            <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
              {spec.pillars.eyebrow}
            </p>
          )}
          <h2 className="mt-2.5 max-w-3xl text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
            {spec.pillars.title}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {spec.pillars.items.map((card) => (
              <div
                key={card.title}
                className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 flex flex-col"
              >
                {spec.pillars.numbered && card.label && (
                  <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                    {card.label}
                  </span>
                )}
                <h3 className="mt-2 text-[18px] font-bold leading-snug text-[var(--od-text)]">{card.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
              </div>
            ))}
          </div>

          {spec.pillars.footnote && (
            <p className="mt-5 text-[13.5px] text-[var(--od-text-muted)]">{spec.pillars.footnote}</p>
          )}
        </Container>
      </section>

      {/* 3A. FEATURES 6-CARD GRID (Template A) */}
      {spec.features && (
        <section id="features" className="scroll-mt-28 py-12 sm:py-16">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-3xl text-[30px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                {spec.features.title}
              </h2>
              {spec.features.actionLink && (
                <Link
                  href={spec.features.actionLink.href}
                  className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[var(--od-action-content)] hover:underline"
                >
                  <span>{spec.features.actionLink.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {spec.features.items.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
                >
                  <h3 className="text-[18px] font-bold text-[var(--od-text)]">{card.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 3B. CATEGORIZED FEATURE CATALOG (Template B: 70 / 58 features) */}
      {spec.featureCatalog && (
        <section id="features" className="scroll-mt-28 py-12 sm:py-16">
          <Container>
            <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              {spec.featureCatalog.title}
            </h2>

            <div className="mt-12 space-y-12">
              {spec.featureCatalog.categories.map((cat) => (
                <div key={cat.category}>
                  <h3 className="border-b border-[var(--od-border)] pb-3 text-[20px] font-bold text-[var(--od-text)]">
                    {cat.category}
                  </h3>
                  <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.items.map((item) => (
                      <div key={item.title} className="group">
                        <Link
                          href={item.href}
                          className="text-[15px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors"
                        >
                          {item.title}
                        </Link>
                        <p className="mt-1 text-[13.5px] leading-[1.55] text-[var(--od-text-muted)]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--od-border)] pt-7">
              <p className="text-[15px] text-[var(--od-text-muted)]">{spec.featureCatalog.footnote}</p>
              <Link
                href={spec.featureCatalog.cta.href}
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{spec.featureCatalog.cta.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* 4A. ORDERING WEB VISUAL JOURNEY (#journey on #f6f7f7) */}
      {spec.journey && (
        <section id={spec.journey.id} className="scroll-mt-24 bg-[var(--od-surface-subtle)] py-16 sm:py-24 my-8">
          <Container>
            <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-text-muted)]">
              {spec.journey.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl text-[34px] sm:text-[46px] font-bold tracking-[-0.04em] leading-[1.06] text-[var(--od-text)]">
              {spec.journey.title}
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
              {spec.journey.lead}
            </p>

            <div className="mt-12 space-y-12">
              {spec.journey.steps.map((step) => (
                <div
                  key={step.num}
                  className="grid grid-cols-1 gap-8 border-t border-[var(--od-border)] pt-10 lg:grid-cols-12 lg:items-start"
                >
                  <div className="lg:col-span-4 space-y-4">
                    <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-text-muted)]">
                      {step.eyebrow}
                    </p>
                    <h3 className="text-[26px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--od-text)]">
                      {step.title}
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-[var(--od-text-muted)]">{step.body}</p>
                    <div className="border-t border-[var(--od-border)] pt-4">
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                        YOUR SETUP
                      </p>
                      <p className="mt-1 text-[14px] leading-[1.55] text-[var(--od-text-muted)]">{step.setupText}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-white">
                      <div className="aspect-[16/10] w-full">
                        {step.previewType === "marketplace-home" && <MarketplaceWebPreview />}
                        {step.previewType === "store-menu" && <RestaurantWebPreview />}
                        {step.previewType === "checkout" && (
                          <div className="h-full w-full overflow-hidden bg-[#f6f7f7] p-3 flex items-center justify-center">
                            <PlatformHeroMockup slug="ordering-web" />
                          </div>
                        )}
                        {step.previewType === "order-details" && (
                          <div className="h-full w-full overflow-hidden bg-[#f6f7f7] p-3 flex items-center justify-center">
                            <PlatformHeroMockup slug="ordering-apps" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[13px] text-[var(--od-text-muted)]">
                      <span>
                        <strong className="font-mono text-[var(--od-action-content)] mr-2">{step.num}</strong>
                        {step.caption}
                      </span>
                    </div>
                    <details className="mt-3 rounded-[8px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-3 text-[13.5px]">
                      <summary className="cursor-pointer font-semibold text-[var(--od-action-content)] list-none flex items-center justify-between">
                        <span>See {step.extraViews.length} more web views</span>
                        <ChevronDown className="h-4 w-4" />
                      </summary>
                      <ul className="mt-3 space-y-2 border-t border-[var(--od-border)] pt-3 text-[var(--od-text-muted)]">
                        {step.extraViews.map((v) => (
                          <li key={v}>• {v}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 4B. ORDERING WIDGET SPLIT (ordering-web) */}
      {spec.widgetSection && (
        <section id={spec.widgetSection.id} className="scroll-mt-24 py-14">
          <Container>
            <div className="grid grid-cols-1 gap-8 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-7 sm:p-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                  {spec.widgetSection.eyebrow}
                </p>
                <h2 className="mt-2.5 text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--od-text)]">
                  {spec.widgetSection.title}
                </h2>
                <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                  {spec.widgetSection.body}
                </p>
              </div>
              <div className="lg:col-span-6 space-y-3">
                <div className="grid grid-cols-3 gap-2.5 text-center text-[12px] font-semibold">
                  {["Header Order CTA", "Floating Sticky Button", "Embedded Menu Section"].map((mode) => (
                    <div
                      key={mode}
                      className="rounded-[8px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-4 text-[var(--od-text)]"
                    >
                      {mode}
                    </div>
                  ))}
                </div>
                <p className="text-[12.5px] text-[var(--od-text-muted)]">{spec.widgetSection.caption}</p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 4C. MARKETPLACE APP EXAMPLE SHOWCASE (ordering-apps) */}
      {spec.appExampleShowcase && (
        <section id="marketplace-intro" className="scroll-mt-24 bg-[var(--od-surface-subtle)] py-16 sm:py-20 my-8">
          <Container className="space-y-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5">
                <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                  {spec.appExampleShowcase.eyebrow}
                </p>
                <h2 className="mt-2.5 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                  {spec.appExampleShowcase.title}
                </h2>
                <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                  {spec.appExampleShowcase.body}
                </p>
              </div>
              <div className="lg:col-span-7 overflow-hidden rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] aspect-[16/10]">
                <MarketplaceAppPreview />
              </div>
            </div>

            {/* White-label 4-point grid */}
            <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-7 sm:p-10">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                White label
              </p>
              <h3 className="mt-2 text-[26px] sm:text-[32px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
                Make the mobile experience recognizably yours.
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {spec.appExampleShowcase.whiteLabelPoints.map((pt) => (
                  <div key={pt.title}>
                    <p className="text-[15px] font-bold text-[var(--od-text)]">{pt.title}</p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[var(--od-text-muted)]">{pt.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Item FAQ */}
            <div className="max-w-3xl">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                Questions about the example
              </p>
              <h3 className="mt-2 text-[26px] sm:text-[32px] font-bold text-[var(--od-text)]">
                Plan the app around your business.
              </h3>
              <div className="mt-6 border-t border-[var(--od-border)]">
                {spec.appExampleShowcase.faq.map((f) => {
                  const isOpen = !!openFaq[f.q];
                  return (
                    <div key={f.q} className="border-b border-[var(--od-border)]">
                      <button
                        type="button"
                        onClick={() => setOpenFaq((p) => ({ ...p, [f.q]: !p[f.q] }))}
                        className="flex w-full items-center justify-between py-4 text-left font-semibold text-[15.5px] text-[var(--od-text)] cursor-pointer"
                      >
                        <span>{f.q}</span>
                        <Plus className={cn("h-4 w-4 transition-transform", isOpen && "rotate-45")} />
                      </button>
                      {isOpen && <p className="pb-4 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{f.a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 4D. LIGHT-GRAY ROUNDED SPLIT NUMBERED STEPS (#how, #kitchen, #flow, #finder) */}
      {spec.stepsSplit && (
        <section id={spec.stepsSplit.id} className="scroll-mt-28 py-12 sm:py-16">
          <Container>
            <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 sm:p-12 lg:p-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">
                  {spec.stepsSplit.eyebrow}
                </p>
                <h2 className="mt-3 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.06] text-[var(--od-text)]">
                  {spec.stepsSplit.title}
                </h2>
                <p className="mt-4 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                  {spec.stepsSplit.lead}
                </p>
              </div>

              <ol className="lg:col-span-7 divide-y divide-[var(--od-border)] border-y border-[var(--od-border)]">
                {spec.stepsSplit.steps.map((st) => (
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
      )}

      {/* 4E. SCREENS WALKTHROUGH (#screens on kiosk, #console on call center) */}
      {spec.screensWalkthrough && (
        <section id={spec.screensWalkthrough.id} className="scroll-mt-28 py-12 sm:py-16">
          <Container>
            <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
              {spec.screensWalkthrough.eyebrow}
            </p>
            <h2 className="mt-2.5 max-w-3xl text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
              {spec.screensWalkthrough.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              {spec.screensWalkthrough.lead}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {spec.screensWalkthrough.items.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
                >
                  <span className="font-mono text-[11.5px] font-semibold text-[var(--od-action-content)]">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-2 text-[18px] font-bold text-[var(--od-text)]">{item.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] text-[var(--od-text-muted)]">{spec.screensWalkthrough.caption}</p>
          </Container>
        </section>
      )}

      {/* 4F. FEATURE CAPABILITY DEEP-DIVE BANDS (.feature-capability) */}
      {spec.capabilityBands && spec.capabilityBands.length > 0 && (
        <div className="divide-y divide-[var(--od-border)] border-y border-[var(--od-border)] my-8">
          {spec.capabilityBands.map((band) => (
            <section key={band.id} id={band.id} className="scroll-mt-28 py-14">
              <Container>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    {band.eyebrow && (
                      <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                        {band.eyebrow}
                      </p>
                    )}
                    <h2 className="mt-2 text-[26px] sm:text-[34px] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--od-text)]">
                      {band.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">{band.body}</p>
                    {band.where && (
                      <p className="mt-4 text-[13px] font-medium text-[var(--od-text-muted)]">
                        <strong className="text-[var(--od-text)]">Where you use it:</strong> {band.where}
                      </p>
                    )}
                    {band.link && (
                      <Link
                        href={band.link.href}
                        className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
                      >
                        <span>{band.link.label}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {band.columns.map((col) => (
                      <div
                        key={col.title}
                        className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)]/60 p-6"
                      >
                        <h3 className="text-[15.5px] font-bold text-[var(--od-text)]">{col.title}</h3>
                        <ul className="mt-3 space-y-3 text-[14px] leading-[1.55] text-[var(--od-text-muted)]">
                          {col.items.map((it, idx) => (
                            <li key={idx}>
                              {it.title && <strong className="block text-[var(--od-text)]">{it.title}</strong>}
                              <span>{it.body}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </section>
          ))}
        </div>
      )}

      {/* 4G. CAPABILITIES LIST (#capabilities: In the dining room / Across the shift / Stay in touch) */}
      {spec.capabilitiesList && (
        <section id={spec.capabilitiesList.id} className="scroll-mt-28 py-14">
          <Container>
            <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
              {spec.capabilitiesList.eyebrow}
            </p>
            <h2 className="mt-2.5 max-w-3xl text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
              {spec.capabilitiesList.title}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {spec.capabilitiesList.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
                >
                  <h3 className="text-[16.5px] font-bold text-[var(--od-text)]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 5. CONNECTED ARCHITECTURE MAP (#connected) */}
      {spec.connected && (
        <section id="connected" className="scroll-mt-28 py-16">
          <Container>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                  {spec.connected.eyebrow}
                </p>
                <h2 className="mt-2.5 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
                  {spec.connected.title}
                </h2>
                <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                  {spec.connected.body}
                </p>
              </div>

              {/* 3-Tier Connected Architecture Diagram */}
              <div className="lg:col-span-7 flex flex-col items-stretch">
                {/* Top Channels Row */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {spec.connected.topRow.map((item, idx) => (
                    <div
                      key={item}
                      className={cn(
                        "rounded-[8px] border px-3 py-3 text-center text-[13px] font-semibold",
                        idx === 0
                          ? "border-[#266df0] bg-[var(--od-action-soft)] text-[var(--od-action-content)]"
                          : "border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)]"
                      )}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Vertical Connector Line */}
                <div className="mx-auto h-5 w-px bg-[var(--od-border-strong)]" />

                {/* Center Brand Hub Bar */}
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-4 shadow-xs">
                  <BrandLogo />
                  <span className="text-[13px] text-[var(--od-text-muted)]">{spec.connected.hubNote}</span>
                </div>

                {/* Vertical Connector Line */}
                <div className="mx-auto h-5 w-px bg-[var(--od-border-strong)]" />

                {/* Bottom Operations Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {spec.connected.bottomRow.map((item) => (
                    <div
                      key={item}
                      className="rounded-[8px] border border-[var(--od-border)] bg-[var(--od-bg)] px-3 py-3 text-center text-[13px] font-semibold text-[var(--od-text)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 6. DARK CONTROL BAND (#control) */}
      {spec.control && (
        <section id="control" className="scroll-mt-28 py-10">
          <Container>
            <div className="relative overflow-hidden rounded-[12px] bg-[#0b0c0d] p-7 sm:p-12 lg:p-14 text-white grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-1/2 h-[540px] w-[540px] -translate-y-1/2"
                style={{
                  background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.22), transparent)",
                }}
              />
              <div className="relative z-10 lg:col-span-5">
                <p className="text-[12px] font-medium text-[#c4c6ca]">{spec.control.eyebrow}</p>
                <h2 className="mt-3 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-white">
                  {spec.control.title}
                </h2>
                <p className="mt-4 text-[15.5px] leading-[1.6] text-[#c4c6ca]">{spec.control.body}</p>
              </div>

              <div className="relative z-10 lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {spec.control.cards.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-[10px] border border-[#34363a] bg-[#17181a] p-6"
                  >
                    <h3 className="text-[16px] font-bold text-white">{c.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-[1.6] text-[#c4c6ca]">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 7. OPERATIONAL SCOPE NOTES */}
      {spec.scopeNotes && spec.scopeNotes.length > 0 && (
        <div className="py-8">
          <Container className="space-y-10">
            {spec.scopeNotes.map((note) => (
              <section
                key={note.id}
                id={note.id}
                className="scroll-mt-28 border-t border-[var(--od-border)] pt-10 max-w-4xl"
              >
                <h2 className="text-[26px] sm:text-[34px] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--od-text)]">
                  {note.title}
                </h2>
                <p className="mt-3 text-[16px] font-medium leading-[1.6] text-[var(--od-text)]">{note.lead}</p>
                <div className="mt-3 space-y-3 text-[15px] leading-[1.65] text-[var(--od-text-muted)]">
                  {note.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {note.links && (
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {note.links.map((lk) => (
                      <Link
                        key={lk.label}
                        href={lk.href}
                        className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
                      >
                        <span>{lk.label}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </Container>
        </div>
      )}

      {/* 8. RELATED PRODUCTS (#related) */}
      <section id="related" className="scroll-mt-28 py-14 sm:py-16">
        <Container>
          <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--od-text)]">
            {spec.related.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {spec.related.items.map((item) => (
              <Link
                key={item.title}
                href={item.href || "/products"}
                className="group rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] flex flex-col justify-between"
              >
                <div>
                  {item.label && (
                    <span
                      className={cn(
                        "inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold mb-2.5",
                        item.label === "New"
                          ? "bg-[var(--od-action-soft)] text-[var(--od-action-content)]"
                          : "border border-[var(--od-border)] text-[var(--od-text-muted)]"
                      )}
                    >
                      {item.label}
                    </span>
                  )}
                  <h3 className="text-[16.5px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--od-text-muted)]">{item.body}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--od-action-content)]">
                  Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. CLOSING DARK CTA BAND (.cta-band) */}
      <section className="py-16 lg:py-24">
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
              <h2 className="text-[34px] sm:text-[46px] font-bold tracking-[-0.035em] leading-[1.06] text-white">
                {spec.closingCta.title}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#c4c6ca]">{spec.closingCta.body}</p>
              {spec.closingCta.docGuide && (
                <p className="mt-4 text-[13.5px] text-[#989aa0]">
                  Product guide:{" "}
                  <Link
                    href={spec.closingCta.docGuide.href}
                    className="font-semibold text-[#92b5ff] underline underline-offset-4 hover:text-white"
                  >
                    {spec.closingCta.docGuide.label}
                  </Link>
                </p>
              )}
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
              {spec.closingCta.primaryCta.href ? (
                <Link
                  href={spec.closingCta.primaryCta.href}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
                >
                  {spec.closingCta.primaryCta.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => openDemoModal(spec.closingCta.primaryCta.modalTopic || spec.metaTitle)}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
                >
                  {spec.closingCta.primaryCta.label}
                </button>
              )}

              {spec.closingCta.secondaryCta.openChat ? (
                <button
                  type="button"
                  onClick={() => setChatOpen(true)}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224] cursor-pointer"
                >
                  {spec.closingCta.secondaryCta.label}
                </button>
              ) : (
                <Link
                  href={spec.closingCta.secondaryCta.href || "/demo"}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224]"
                >
                  {spec.closingCta.secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {spec.bottomUtilityStrip && (
            <p className="mt-8 text-center text-[14px] text-[var(--od-text-muted)]">
              {spec.bottomUtilityStrip.text}{" "}
              <Link
                href={spec.bottomUtilityStrip.href}
                className="font-semibold text-[var(--od-action-content)] underline underline-offset-4"
              >
                {spec.bottomUtilityStrip.linkLabel}
              </Link>
            </p>
          )}
        </Container>
      </section>
    </div>
  );
}
