"use client";

import { useState } from "react";
import { ArrowRight, Check, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { BrandLogo } from "@/components/layout/header";
import useDictionaries from "@/hooks/useDictionaries";
import { useUiStore } from "@/stores/ui-store";
import { cn } from "@/lib/utils";
import type { SolutionLink, SolutionPageSpec } from "../_data/solution-types";
import { SolutionHeroMockup } from "./solution-hero-mockups";

function ActionButton({
  cta,
  variant = "primary",
  fallbackTopic,
}: {
  cta: SolutionLink;
  variant?: "primary" | "secondary" | "lightOutline";
  fallbackTopic: string;
}) {
  const { openDemoModal, setChatOpen } = useUiStore();

  const cls =
    variant === "primary"
      ? "inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A] cursor-pointer"
      : variant === "secondary"
        ? "inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F] cursor-pointer"
        : "inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer";

  if (cta.openChat) {
    return (
      <button type="button" onClick={() => setChatOpen(true)} className={cls}>
        {cta.label}
      </button>
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

export function SolutionPageRenderer({ spec }: { spec: SolutionPageSpec }) {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. DARK HERO */}
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
          className="pointer-events-none absolute -right-24 -bottom-32 h-[540px] w-[620px]"
          style={{
            background: "none",
          }}
        />

        <Container className="relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 font-mono text-[12px]">
                <Link href="/solutions" className="text-[#F9D0D8] underline underline-offset-4 hover:text-white">
                  {isVi ? "Giải pháp" : "Solutions"}
                </Link>
                <span className="text-[#6E6D75]">/</span>
                <span className="text-[#F9D0D8]">{spec.hero.breadcrumbLabel}</span>
              </nav>

              {spec.hero.eyebrow && (
                <p className="mt-5 font-mono text-[12px] font-medium text-[#A9A8AF]">{spec.hero.eyebrow}</p>
              )}

              <h1 className="mt-5 text-[40px] sm:text-[54px] lg:text-[60px] font-bold tracking-[-0.04em] leading-[1.03] text-white [text-wrap:balance]">
                {spec.hero.title}
              </h1>

              <p className="mt-5 max-w-xl text-[16.5px] sm:text-[18px] leading-[1.6] text-[#A9A8AF]">
                {spec.hero.lede}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ActionButton cta={spec.hero.primaryCta} variant="primary" fallbackTopic={spec.metaTitle} />
                {spec.hero.secondaryCta && (
                  <ActionButton cta={spec.hero.secondaryCta} variant="secondary" fallbackTopic={spec.metaTitle} />
                )}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#A9A8AF]">
                {spec.hero.meta.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <SolutionHeroMockup slug={spec.slug} />
            </div>
          </div>
        </Container>

        {spec.hero.bottomStrip && (
          <div className="relative z-10 border-t border-white/10 bg-black/30">
            <Container className="py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-[13px] leading-[1.55] text-[#A9A8AF]">{spec.hero.bottomStrip.lead}</p>
              {spec.hero.bottomStrip.logos && spec.hero.bottomStrip.logos.length > 0 && (
                <div className="flex flex-wrap items-center gap-x-9 gap-y-2 text-[15px] font-bold tracking-[-0.02em] text-[#9A99A1]">
                  {spec.hero.bottomStrip.logos.map((logo) => (
                    <span key={logo}>{logo}</span>
                  ))}
                </div>
              )}
            </Container>
          </div>
        )}
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
                  <div className="flex flex-wrap items-end justify-between gap-4">
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
                    {section.actionLink?.href && (
                      <Link
                        href={section.actionLink.href}
                        className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[var(--od-action-content)] hover:underline"
                      >
                        <span>{section.actionLink.label}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
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
                            {card.bullets && card.bullets.length > 0 && (
                              <ul className="mt-4 space-y-2 border-t border-[var(--od-border)] pt-4 text-[13.5px] text-[var(--od-text-muted)]">
                                {card.bullets.map((b) => (
                                  <li key={b} className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D91842]" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                          {card.href && (
                            <span className="mt-4 inline-flex items-center gap-1 text-[13.5px] font-semibold text-[var(--od-action-content)]">
                              {isVi ? "Khám phá" : "Explore"} <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          )}
                        </>
                      );

                      return card.href ? (
                        <Link
                          key={card.title}
                          href={card.href}
                          className="group flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                        >
                          {inner}
                        </Link>
                      ) : (
                        <div
                          key={card.title}
                          className="flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
                        >
                          {inner}
                        </div>
                      );
                    })}
                  </div>

                  {section.extraCallout && (
                    <div className="mt-6 rounded-[10px] border border-[#D91842]/30 bg-[var(--od-action-soft)]/45 p-6 sm:p-8">
                      <h3 className="text-[20px] font-bold text-[var(--od-text)]">{section.extraCallout.title}</h3>
                      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-[14.5px] text-[var(--od-text)]">
                        {section.extraCallout.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#D91842]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.footnote && (
                    <p className="mt-5 text-[13.5px] text-[var(--od-text-muted)]">{section.footnote}</p>
                  )}
                </Container>
              </section>
            );
          }

          case "calloutBanner":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-8">
                <Container>
                  <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 sm:p-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                      {section.eyebrow && (
                        <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                          {section.eyebrow}
                        </p>
                      )}
                      <h2 className="mt-2 text-[26px] sm:text-[34px] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--od-text)]">
                        {section.title}
                      </h2>
                      <p className="mt-2.5 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">{section.body}</p>
                    </div>
                    {section.cta && (
                      <div className="shrink-0">
                        <ActionButton cta={section.cta} variant="lightOutline" fallbackTopic={section.title} />
                      </div>
                    )}
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
                      {section.eyebrow && (
                        <p className="font-mono text-[12px] font-medium text-[var(--od-text-muted)]">
                          {section.eyebrow}
                        </p>
                      )}
                      <h2 className="mt-3 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                        {section.title}
                      </h2>
                      <p className="mt-4 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">{section.lead}</p>

                      {section.sidePanel && (
                        <div className="mt-6 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5">
                          {section.sidePanel.eyebrow && (
                            <p className="font-mono text-[11px] uppercase text-[var(--od-action-content)]">
                              {section.sidePanel.eyebrow}
                            </p>
                          )}
                          <h3 className="mt-1 text-[16px] font-bold text-[var(--od-text)]">{section.sidePanel.title}</h3>
                          <ul className="mt-3 space-y-2 text-[13.5px] text-[var(--od-text-muted)]">
                            {section.sidePanel.bullets.map((b) => (
                              <li key={b} className="flex items-start gap-2">
                                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D91842]" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <ol className="lg:col-span-7 divide-y divide-[var(--od-border)] border-y border-[var(--od-border)]">
                      {section.steps.map((st) => (
                        <li key={st.num} className="grid grid-cols-[36px_1fr] gap-4 py-5">
                          <span className="font-mono text-[12px] text-[var(--od-text-muted)] pt-1">{st.num}</span>
                          <div>
                            {st.subtitle && (
                              <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--od-action-content)]">
                                {st.subtitle}
                              </p>
                            )}
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

          case "twoColumnLists":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-14 sm:py-16">
                <Container>
                  {section.eyebrow && (
                    <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                      {section.eyebrow}
                    </p>
                  )}
                  <h2 className="mt-2.5 max-w-3xl text-[30px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                    {section.title}
                  </h2>
                  {section.lead && (
                    <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                      {section.lead}
                    </p>
                  )}

                  <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
                    {section.panels.map((panel, idx) => (
                      <div
                        key={panel.title}
                        className={cn(
                          "rounded-[10px] border p-7",
                          idx === 1
                            ? "border-[#D91842]/30 bg-[var(--od-action-soft)]/35"
                            : "border-[var(--od-border)] bg-[var(--od-surface-subtle)]"
                        )}
                      >
                        {panel.eyebrow && (
                          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                            {panel.eyebrow}
                          </p>
                        )}
                        <h3 className="mt-1.5 text-[21px] font-bold text-[var(--od-text)]">{panel.title}</h3>
                        {panel.subtitle && (
                          <p className="mt-1 text-[14px] text-[var(--od-text-muted)]">{panel.subtitle}</p>
                        )}
                        <ul className="mt-4 space-y-2.5 border-t border-[var(--od-border)] pt-4 text-[14.5px] text-[var(--od-text)]">
                          {panel.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5">
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[#D91842]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {section.steps && section.steps.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                      {section.steps.map((st) => (
                        <div
                          key={st.num}
                          className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
                        >
                          <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                            {st.num}
                          </span>
                          <h3 className="mt-2 text-[17px] font-bold text-[var(--od-text)]">{st.title}</h3>
                          <p className="mt-2 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{st.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </Container>
              </section>
            );

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

                    <div className="lg:col-span-7 flex flex-col items-stretch">
                      <div
                        className={cn(
                          "grid gap-2.5 grid-cols-2",
                          section.topRow.length === 3
                            ? "sm:grid-cols-3"
                            : section.topRow.length === 4
                              ? "sm:grid-cols-4"
                              : "sm:grid-cols-5"
                        )}
                      >
                        {section.topRow.map((item, idx) => (
                          <div
                            key={item}
                            className={cn(
                              "rounded-[8px] border px-3 py-3 text-center text-[13px] font-semibold",
                              idx === 0
                                ? "border-[#D91842] bg-[var(--od-action-soft)] text-[var(--od-action-content)]"
                                : "border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)]"
                            )}
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mx-auto h-5 w-px bg-[var(--od-border-strong)]" />

                      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-4 shadow-xs">
                        <BrandLogo />
                        <span className="text-[13px] text-[var(--od-text-muted)]">{section.hubNote}</span>
                      </div>

                      <div className="mx-auto h-5 w-px bg-[var(--od-border-strong)]" />

                      <div
                        className={cn(
                          "grid gap-2.5 grid-cols-2",
                          section.bottomRow.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
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

          case "comparisonTable":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-14 sm:py-16">
                <Container>
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-3xl">
                      {section.eyebrow && (
                        <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                          {section.eyebrow}
                        </p>
                      )}
                      <h2 className="mt-2 text-[28px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--od-text)]">
                        {section.title}
                      </h2>
                      {section.lead && (
                        <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">{section.lead}</p>
                      )}
                    </div>
                    {section.actionLink?.href && (
                      <Link
                        href={section.actionLink.href}
                        className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[var(--od-action-content)] hover:underline"
                      >
                        <span>{section.actionLink.label}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>

                  <div className="mt-8 overflow-x-auto rounded-[10px] border border-[var(--od-border)]">
                    <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
                      <thead>
                        <tr className="border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)] font-mono text-[11.5px] uppercase text-[var(--od-text-muted)]">
                          {section.headers.map((h) => (
                            <th key={h} className="px-5 py-3.5 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--od-border)] bg-[var(--od-bg)]">
                        {section.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, idx) => (
                              <td
                                key={idx}
                                className={cn(
                                  "px-5 py-4 align-top leading-[1.6]",
                                  idx === 0 ? "font-bold text-[var(--od-text)] w-[22%]" : "text-[var(--od-text-muted)]"
                                )}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {section.links && section.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      {section.links.map((lk) => (
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
                </Container>
              </section>
            );

          case "controlBand":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-10">
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
                      <p className="text-[12px] font-mono uppercase tracking-[0.08em] text-[#F9D0D8]">
                        {section.eyebrow}
                      </p>
                      <h2 className="mt-3 text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.08] text-white">
                        {section.title}
                      </h2>
                      <p className="mt-4 text-[15.5px] leading-[1.6] text-[#A9A8AF]">{section.body}</p>
                    </div>

                    <div className="relative z-10 lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {section.tiles.map((t) => (
                        <div
                          key={t.title}
                          className="rounded-[10px] border border-[#2A2A2E] bg-[#1B1A1F] p-6"
                        >
                          <h3 className="text-[16px] font-bold text-white">{t.title}</h3>
                          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#A9A8AF]">{t.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Container>
              </section>
            );

          case "commercialScope":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-14">
                <Container>
                  <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-7 sm:p-11 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-6">
                      {section.eyebrow && (
                        <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                          {section.eyebrow}
                        </p>
                      )}
                      <h2 className="mt-2 text-[28px] sm:text-[38px] font-bold tracking-[-0.03em] leading-[1.1] text-[var(--od-text)]">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">{section.body}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {section.primaryCta && (
                          <ActionButton cta={section.primaryCta} variant="primary" fallbackTopic={section.title} />
                        )}
                        {section.secondaryCta && (
                          <ActionButton cta={section.secondaryCta} variant="lightOutline" fallbackTopic={section.title} />
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-6 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6">
                      {section.panelEyebrow && (
                        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                          {section.panelEyebrow}
                        </p>
                      )}
                      {section.panelTitle && (
                        <h3 className="mt-1.5 text-[18px] font-bold text-[var(--od-text)]">{section.panelTitle}</h3>
                      )}

                      {section.bullets && (
                        <ul className="mt-4 space-y-2.5 text-[14.5px] text-[var(--od-text)]">
                          {section.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5">
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[#D91842]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.kvRows && (
                        <dl className="mt-4 divide-y divide-[var(--od-border)] border-t border-[var(--od-border)] text-[14px]">
                          {section.kvRows.map((row) => (
                            <div key={row.label} className="flex items-center justify-between gap-3 py-3">
                              <dt className="font-semibold text-[var(--od-text)]">{row.label}</dt>
                              <dd className="font-mono text-[12px] text-[var(--od-text-muted)]">{row.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                    </div>
                  </div>
                </Container>
              </section>
            );

          case "scopeNotes":
            return (
              <div key={section.id} id={section.id} className="py-10">
                <Container className="space-y-10">
                  {section.notes.map((note) => (
                    <section
                      key={note.id}
                      id={note.id}
                      className="scroll-mt-24 border-t border-[var(--od-border)] pt-10 max-w-4xl"
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
            );

          case "faqAccordion":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-14 sm:py-16">
                <Container>
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      {section.eyebrow && (
                        <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                          {section.eyebrow}
                        </p>
                      )}
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

          case "relatedGrid":
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 py-14 sm:py-16">
                <Container>
                  <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-0.03em] leading-[1.12] text-[var(--od-text)]">
                    {section.title}
                  </h2>
                  <div
                    className={cn(
                      "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2",
                      section.items.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
                    )}
                  >
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href || "/solutions"}
                        className="group flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                      >
                        <div>
                          {item.label && (
                            <span className="inline-block rounded-full border border-[var(--od-border)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--od-text-muted)] mb-2.5">
                              {item.label}
                            </span>
                          )}
                          <h3 className="text-[16.5px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--od-text-muted)]">{item.body}</p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--od-action-content)]">
                          {isVi ? "Khám phá" : "Explore"} <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </Container>
              </section>
            );
        }
      })}

      {/* 3. CLOSING DARK CTA BAND */}
      <section className="py-16 lg:py-24">
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
                {spec.closingCta.title}
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#A9A8AF]">{spec.closingCta.body}</p>
              {spec.closingCta.docGuide && (
                <p className="mt-4 text-[13.5px] text-[#9A99A1]">
                  {isVi ? "Hướng dẫn sản phẩm:" : "Product guide:"}{" "}
                  <Link
                    href={spec.closingCta.docGuide.href}
                    className="font-semibold text-[#F9D0D8] underline underline-offset-4 hover:text-white"
                  >
                    {spec.closingCta.docGuide.label}
                  </Link>
                </p>
              )}
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
              <ActionButton
                cta={spec.closingCta.primaryCta}
                variant="primary"
                fallbackTopic={spec.closingCta.title}
              />
              {spec.closingCta.secondaryCta && (
                <ActionButton
                  cta={spec.closingCta.secondaryCta}
                  variant="secondary"
                  fallbackTopic={spec.closingCta.title}
                />
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
