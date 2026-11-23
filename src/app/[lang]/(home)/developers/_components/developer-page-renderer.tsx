"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { BrandLogo } from "@/components/layout/header";
import { useUiStore } from "@/stores/ui-store";
import { cn } from "@/lib/utils";
import type { DevLink, DeveloperPageSpec } from "../_data/developer-pages";
import { DeveloperHeroMockup } from "./developer-hero-mockups";

function DevActionButton({
  cta,
  variant = "primary",
  fallbackTopic,
}: {
  cta: DevLink;
  variant?: "primary" | "secondary" | "lightOutline";
  fallbackTopic: string;
}) {
  const { openDemoModal } = useUiStore();

  const cls =
    variant === "primary"
      ? "inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1] cursor-pointer"
      : variant === "secondary"
        ? "inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224] cursor-pointer"
        : "inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer";

  if (cta.href && cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={cls}>
        <span>{cta.label}</span>
        <ArrowUpRight className="h-4 w-4 opacity-80" />
      </a>
    );
  }

  if (cta.href) {
    return (
      <Link href={cta.href} className={cls}>
        {cta.label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => openDemoModal(cta.modalTopic || fallbackTopic)}
      className={cls}
    >
      {cta.label}
    </button>
  );
}

function InlineLink({ link, className }: { link: DevLink; className?: string }) {
  const { openDemoModal } = useUiStore();
  const baseCls =
    className ||
    "inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline";

  if (link.href && link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={baseCls}>
        <span>{link.label}</span>
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
      </a>
    );
  }

  if (link.href) {
    return (
      <Link href={link.href} className={baseCls}>
        <span>{link.label}</span>
        <ArrowRight className="h-3.5 w-3.5 shrink-0" />
      </Link>
    );
  }

  return (
    <button type="button" onClick={() => openDemoModal(link.modalTopic || link.label)} className={cn(baseCls, "cursor-pointer")}>
      <span>{link.label}</span>
      <ArrowRight className="h-3.5 w-3.5 shrink-0" />
    </button>
  );
}

export function DeveloperPageRenderer({ spec }: { spec: DeveloperPageSpec }) {
  const { openDemoModal } = useUiStore();
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. DARK HERO */}
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
          className="pointer-events-none absolute -right-24 -bottom-32 h-[540px] w-[620px]"
          style={{
            background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.24), transparent)",
          }}
        />

        <Container className="relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              {spec.hero.breadcrumbLabel && (
                <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 font-mono text-[12px]">
                  <Link href="/developers" className="text-[#92b5ff] underline underline-offset-4 hover:text-white">
                    Developers
                  </Link>
                  <span className="text-[#5b5e64]">/</span>
                  <span className="text-[#92b5ff]">{spec.hero.breadcrumbLabel}</span>
                </nav>
              )}

              <h1 className="text-[38px] sm:text-[52px] lg:text-[58px] font-bold tracking-[-0.04em] leading-[1.04] text-white [text-wrap:balance]">
                {spec.hero.title}
              </h1>

              <p className="mt-5 max-w-xl text-[16.5px] sm:text-[18px] leading-[1.6] text-[#c4c6ca]">
                {spec.hero.lede}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <DevActionButton cta={spec.hero.primaryCta} variant="primary" fallbackTopic={spec.metaTitle} />
                {spec.hero.secondaryCta && (
                  <DevActionButton cta={spec.hero.secondaryCta} variant="secondary" fallbackTopic={spec.metaTitle} />
                )}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#c4c6ca]">
                {spec.hero.meta.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <DeveloperHeroMockup slug={spec.slug} />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. ORDERED BODY SECTIONS */}
      {spec.sections.map((section) => {
        switch (section.type) {
          case "cardsGrid": {
            const colClass =
              section.columns === 2
                ? "md:grid-cols-2"
                : section.columns === 4
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : "md:grid-cols-2 lg:grid-cols-3";

            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-14 sm:py-16">
                <Container>
                  <div className="max-w-3xl">
                    {section.eyebrow && (
                      <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                        {section.eyebrow}
                      </p>
                    )}
                    <h2 className="mt-2.5 text-[30px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                      {section.title}
                    </h2>
                    {section.lead && (
                      <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">{section.lead}</p>
                    )}
                  </div>

                  <div className={cn("mt-9 grid grid-cols-1 gap-5", colClass)}>
                    {section.items.map((card) => {
                      const inner = (
                        <>
                          <div>
                            {card.label && (
                              <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                                {card.label}
                              </span>
                            )}
                            <h3 className="mt-2 text-[18px] font-bold leading-snug text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                              {card.title}
                            </h3>
                            <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
                          </div>
                          {(card.href || card.modalTopic) && (
                            <span className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                              <span>{card.external ? "Open" : "Explore"}</span>
                              {card.external ? (
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              ) : (
                                <ArrowRight className="h-3.5 w-3.5" />
                              )}
                            </span>
                          )}
                        </>
                      );

                      const cardClass =
                        "group flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 text-left transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]";

                      if (card.href && card.external) {
                        return (
                          <a
                            key={card.title}
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cardClass}
                          >
                            {inner}
                          </a>
                        );
                      }

                      if (card.href) {
                        return (
                          <Link key={card.title} href={card.href} className={cardClass}>
                            {inner}
                          </Link>
                        );
                      }

                      if (card.modalTopic) {
                        return (
                          <button
                            key={card.title}
                            type="button"
                            onClick={() => openDemoModal(card.modalTopic!)}
                            className={cn(cardClass, "cursor-pointer")}
                          >
                            {inner}
                          </button>
                        );
                      }

                      return (
                        <div
                          key={card.title}
                          className="flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
                        >
                          {inner}
                        </div>
                      );
                    })}
                  </div>

                  {section.actionButton && (
                    <div className="mt-7">
                      <DevActionButton
                        cta={section.actionButton}
                        variant="lightOutline"
                        fallbackTopic={section.title}
                      />
                    </div>
                  )}

                  {section.callout && (
                    <div className="mt-7 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6 sm:p-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div className="max-w-3xl">
                        <h3 className="text-[20px] font-bold text-[var(--od-text)]">{section.callout.title}</h3>
                        <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                          {section.callout.body}
                        </p>
                        <p className="mt-2 font-mono text-[12.5px] text-[var(--od-action-content)]">
                          {section.callout.note}
                        </p>
                      </div>
                      <div className="shrink-0">
                        <InlineLink link={section.callout.link} />
                      </div>
                    </div>
                  )}
                </Container>
              </section>
            );
          }

          case "connectedMap":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-16">
                <Container>
                  <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                        {section.eyebrow}
                      </p>
                      <h2 className="mt-2.5 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
                        {section.title}
                      </h2>
                      <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">{section.body}</p>
                    </div>

                    <div className="lg:col-span-7 rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6 sm:p-8 flex flex-col items-stretch">
                      <p className="mb-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--od-text-muted)]">
                        {section.topLabel}
                      </p>
                      <div
                        className={cn(
                          "grid gap-2.5 grid-cols-1",
                          section.topRow.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"
                        )}
                      >
                        {section.topRow.map((item) => (
                          <div
                            key={item}
                            className="rounded-[8px] border border-[var(--od-border)] bg-[var(--od-bg)] px-3 py-3 text-center text-[13px] font-semibold text-[var(--od-text)]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mx-auto h-6 w-px bg-[var(--od-border-strong)]" />

                      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 rounded-[10px] border border-[#266df0]/40 bg-[var(--od-bg)] px-5 py-4 shadow-xs">
                        <BrandLogo />
                        <div className="text-center sm:text-right">
                          <p className="text-[14px] font-bold text-[var(--od-text)]">{section.hubTitle}</p>
                          <p className="font-mono text-[12px] text-[var(--od-text-muted)]">{section.hubSubtitle}</p>
                        </div>
                      </div>

                      <div className="mx-auto h-6 w-px bg-[var(--od-border-strong)]" />

                      <p className="mb-2.5 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--od-text-muted)]">
                        {section.bottomLabel}
                      </p>
                      <div
                        className={cn(
                          "grid gap-2.5 grid-cols-1",
                          section.bottomRow.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"
                        )}
                      >
                        {section.bottomRow.map((item) => (
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
            );

          case "ownershipSplit":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-14 sm:py-16">
                <Container>
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
                    <div className="lg:col-span-5">
                      <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                        {section.eyebrow}
                      </p>
                      <h2 className="mt-2.5 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                        {section.title}
                      </h2>
                      <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">{section.body}</p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {section.panels.map((panel, idx) => (
                        <div
                          key={panel.title}
                          className={cn(
                            "rounded-[10px] border p-6",
                            idx === 1
                              ? "border-[#266df0]/30 bg-[var(--od-action-soft)]/35"
                              : "border-[var(--od-border)] bg-[var(--od-surface-subtle)]"
                          )}
                        >
                          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                            {panel.eyebrow}
                          </p>
                          <h3 className="mt-1.5 text-[19px] font-bold text-[var(--od-text)]">{panel.title}</h3>
                          <ul className="mt-4 space-y-2.5 border-t border-[var(--od-border)] pt-4 text-[14px] text-[var(--od-text)]">
                            {panel.bullets.map((b) => (
                              <li key={b} className="flex items-start gap-2.5">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#266df0]" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>
            );

          case "controlBand":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-10">
                <Container>
                  <div className="relative overflow-hidden rounded-[12px] bg-[#0b0c0d] p-7 sm:p-12 lg:p-14 text-white">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-24 top-1/2 h-[540px] w-[540px] -translate-y-1/2"
                      style={{
                        background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.22), transparent)",
                      }}
                    />

                    <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
                      <div className="lg:col-span-5">
                        <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#92b5ff]">
                          {section.eyebrow}
                        </p>
                        <h2 className="mt-3 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-white">
                          {section.title}
                        </h2>
                        <p className="mt-4 text-[15.5px] leading-[1.6] text-[#c4c6ca]">{section.body}</p>
                        {section.footnote && (
                          <p className="mt-5 text-[12.5px] leading-[1.55] text-[#989aa0]">{section.footnote}</p>
                        )}
                      </div>

                      <div className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {section.tiles.map((t) => (
                          <div
                            key={t.title}
                            className="rounded-[10px] border border-[#34363a] bg-[#17181a] p-5"
                          >
                            <h3 className="text-[16px] font-bold text-white">{t.title}</h3>
                            <p className="mt-2 text-[13.5px] leading-[1.6] text-[#c4c6ca]">{t.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {section.byocCallout && (
                      <div className="relative z-10 mt-10 rounded-[10px] border border-[#266df0]/45 bg-[#0e1526]/90 p-6 sm:p-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                          <h3 className="text-[22px] font-bold text-white">{section.byocCallout.title}</h3>
                          <p className="mt-2 text-[15px] leading-[1.6] text-[#c4c6ca]">
                            {section.byocCallout.body}
                          </p>
                          <ul className="mt-4 space-y-2 text-[14px] text-[#e4e6ea]">
                            {section.byocCallout.points.map((pt) => (
                              <li key={pt} className="flex items-start gap-2">
                                <Check className="mt-1 h-4 w-4 shrink-0 text-[#639bff]" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="shrink-0">
                          <InlineLink
                            link={section.byocCallout.link}
                            className="inline-flex min-h-[44px] items-center gap-2 rounded-[6px] border border-[#266df0] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </Container>
              </section>
            );

          case "managedBoundarySplit":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-14 sm:py-16">
                <Container>
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
                    <div className="lg:col-span-5">
                      <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                        {section.eyebrow}
                      </p>
                      <h2 className="mt-2.5 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                        {section.title}
                      </h2>
                      <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">{section.body}</p>
                    </div>

                    <ul className="lg:col-span-7 divide-y divide-[var(--od-border)] border-y border-[var(--od-border)]">
                      {section.items.map((item) => (
                        <li key={item.title} className="py-5">
                          <h3 className="text-[17px] font-bold text-[var(--od-text)]">{item.title}</h3>
                          <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{item.body}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Container>
              </section>
            );

          case "stepsSplit":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-12 sm:py-16">
                <Container>
                  <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 sm:p-12 lg:p-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <p className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                        {section.eyebrow}
                      </p>
                      <h2 className="mt-3 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                        {section.title}
                      </h2>
                      <p className="mt-4 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">{section.body}</p>

                      {section.sideNote && (
                        <div className="mt-7 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                          <h3 className="text-[16px] font-bold text-[var(--od-text)]">{section.sideNote.title}</h3>
                          <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">
                            {section.sideNote.body}
                          </p>
                          <div className="mt-3.5">
                            <InlineLink link={section.sideNote.link} />
                          </div>
                        </div>
                      )}
                    </div>

                    <ol className="lg:col-span-7 divide-y divide-[var(--od-border)] border-y border-[var(--od-border)]">
                      {section.steps.map((st) => (
                        <li key={st.num} className="grid grid-cols-[36px_1fr] gap-4 py-5">
                          <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)] pt-1">
                            {st.num}
                          </span>
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
            );

          case "scopeNotes":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-12">
                <Container>
                  <div className="border-t border-[var(--od-border)] pt-10 max-w-4xl">
                    <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--od-text)]">
                      {section.title}
                    </h2>
                    <p className="mt-3.5 text-[16px] font-medium leading-[1.6] text-[var(--od-text)]">{section.lead}</p>
                    <div className="mt-3.5 space-y-3.5 text-[15px] leading-[1.65] text-[var(--od-text-muted)]">
                      {section.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {section.links.map((lk) => (
                        <li key={lk.label}>
                          <InlineLink
                            link={lk}
                            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </Container>
              </section>
            );

          case "faqAccordion":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-14 sm:py-16">
                <Container>
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                        {section.eyebrow}
                      </p>
                      <h2 className="mt-2.5 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
                        {section.title}
                      </h2>
                    </div>

                    <div className="lg:col-span-7 border-t border-[var(--od-border)]">
                      {section.items.map((item) => {
                        const open = !!openFaq[item.q];
                        return (
                          <div key={item.q} className="border-b border-[var(--od-border)]">
                            <button
                              type="button"
                              onClick={() => setOpenFaq((p) => ({ ...p, [item.q]: !p[item.q] }))}
                              className="flex w-full items-center justify-between gap-4 py-5 text-left text-[16px] font-bold text-[var(--od-text)] cursor-pointer"
                            >
                              <span>{item.q}</span>
                              <Plus
                                className={cn(
                                  "h-4 w-4 shrink-0 text-[var(--od-text-muted)] transition-transform",
                                  open && "rotate-45 text-[var(--od-action-content)]"
                                )}
                              />
                            </button>
                            {open && (
                              <p className="pb-5 text-[14.5px] leading-[1.65] text-[var(--od-text-muted)]">{item.a}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Container>
              </section>
            );
        }
      })}

      {/* 3. CLOSING DARK CTA BAND */}
      <section className="py-16 lg:py-20">
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
                {spec.closingCta.title}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#c4c6ca]">{spec.closingCta.body}</p>
              {spec.closingCta.docGuide && (
                <p className="mt-4 text-[13.5px] text-[#989aa0]">
                  Product guide:{" "}
                  <a
                    href={spec.closingCta.docGuide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#92b5ff] underline underline-offset-4 hover:text-white"
                  >
                    {spec.closingCta.docGuide.label}
                  </a>
                </p>
              )}
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <DevActionButton
                cta={spec.closingCta.primaryCta}
                variant="primary"
                fallbackTopic={spec.closingCta.title}
              />
              {spec.closingCta.secondaryCta && (
                <DevActionButton
                  cta={spec.closingCta.secondaryCta}
                  variant="secondary"
                  fallbackTopic={spec.closingCta.title}
                />
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. OPTIONAL BOTTOM CROSS-LINK STRIP */}
      {spec.bottomCrossLink && (
        <section className="pb-16">
          <Container>
            <div className="border-t border-[var(--od-border)] pt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-[22px] font-bold tracking-[-0.025em] text-[var(--od-text)]">
                {spec.bottomCrossLink.title}
              </h2>
              <Link
                href={spec.bottomCrossLink.href}
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>{spec.bottomCrossLink.linkLabel}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
