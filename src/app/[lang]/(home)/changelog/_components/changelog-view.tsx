"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import {
  CHANGELOG_ENTRIES,
  CHANGELOG_PRODUCT_AREAS,
  type ChangelogEntry,
  type ChangelogProductKey,
} from "../_data/changelog-entries";

const BRAND = siteConfig.name;

type FilterKey = "all" | ChangelogProductKey;

export function ChangelogPageView() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredEntries = useMemo(() => {
    if (activeFilter === "all") return CHANGELOG_ENTRIES;
    return CHANGELOG_ENTRIES.filter((entry) => entry.product === activeFilter);
  }, [activeFilter]);

  const monthGroups = useMemo(() => {
    const map = new Map<string, ChangelogEntry[]>();
    for (const entry of filteredEntries) {
      const list = map.get(entry.month);
      if (list) list.push(entry);
      else map.set(entry.month, [entry]);
    }
    return Array.from(map.entries()).map(([month, entries]) => ({ month, entries }));
  }, [filteredEntries]);

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. LIGHT HERO + ONE CONNECTED RELEASE RAIL */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px]">
                <Link
                  href="/products"
                  className="font-medium text-[var(--od-action-content)] underline underline-offset-4"
                >
                  Resources
                </Link>
                <span className="text-[var(--od-text-muted)]">/</span>
                <span className="text-[var(--od-text)]">What&apos;s new</span>
              </nav>

              <p className="mt-7 font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                January 2, 2025–November 23, 2026
              </p>

              <h1 className="mt-3.5 text-[42px] sm:text-[58px] lg:text-[64px] font-bold tracking-[-0.045em] leading-[1.03] text-[var(--od-text)] [text-wrap:balance]">
                See what&apos;s moving across {BRAND}
              </h1>

              <p className="mt-5 max-w-xl text-[17px] sm:text-[18.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Follow product work across ordering channels, franchise experiences, business and delivery operations,
                the API, Dashboard, and Dashboard AI.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#releases"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A]"
                >
                  Explore the updates
                </a>
                <Link
                  href="/platform"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
                >
                  Platform overview
                </Link>
              </div>

              <dl aria-label="Changelog coverage" className="mt-12">
                <div className="flex flex-col-reverse">
                  <dt className="mt-1.5 text-[13.5px] text-[var(--od-text-muted)]">connected product areas</dt>
                  <dd className="text-[48px] sm:text-[56px] font-bold tracking-[-0.04em] leading-none text-[var(--od-text)]">
                    9
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right Connected Release Rail */}
            <aside
              aria-label="Product areas covered by this changelog"
              className="lg:col-span-5 rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6 sm:p-8"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--od-text-muted)]">
                One connected release rail
              </p>

              <ol className="relative mt-6 space-y-4">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[17px] top-4 bottom-4 w-px bg-[var(--od-border-strong)]"
                />
                {CHANGELOG_PRODUCT_AREAS.map((area) => (
                  <li key={area.key} className="relative flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D91842] bg-[var(--od-bg)] font-mono text-[11.5px] font-semibold text-[#D91842]"
                    >
                      {area.num}
                    </span>
                    <Link
                      href={area.href}
                      className="text-[15px] font-bold text-[var(--od-text)] transition-colors hover:text-[var(--od-action-content)]"
                    >
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </Container>
      </section>

      {/* 2. #releases — RELEASE RAIL HEADER + STICKY FILTER BAR + TIMELINE */}
      <section id="releases" className="scroll-mt-24 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <Container>
          {/* Section Header */}
          <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">Release rail</p>
          <div className="mt-2.5 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="lg:col-span-7 text-[36px] sm:text-[48px] font-bold tracking-[-0.04em] leading-[1.05] text-[var(--od-text)]">
              Latest product
              <br />
              progress
            </h2>
            <p className="lg:col-span-5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
              Browse every update in reverse chronological order or narrow the feed to one product area. Dates track
              completed implementation milestones; availability varies by project and rollout.
            </p>
          </div>
        </Container>

        {/* Sticky Filter Bar */}
        <div className="sticky top-[73px] z-20 mt-10 border-y border-[var(--od-border)] bg-[var(--od-bg)]/95 backdrop-blur-xs">
          <Container className="py-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div role="group" aria-label="Filter by product" className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                aria-pressed={activeFilter === "all"}
                onClick={() => setActiveFilter("all")}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors cursor-pointer",
                  activeFilter === "all"
                    ? "border-[#D91842] bg-[var(--od-action-soft)] text-[var(--od-action-content)] font-semibold"
                    : "border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)] hover:border-[var(--od-border-strong)]"
                )}
              >
                All updates
              </button>

              {CHANGELOG_PRODUCT_AREAS.map((area) => {
                const isActive = activeFilter === area.key;
                return (
                  <button
                    key={area.key}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(area.key)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors cursor-pointer",
                      isActive
                        ? "border-[#D91842] bg-[var(--od-action-soft)] text-[var(--od-action-content)] font-semibold"
                        : "border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)] hover:border-[var(--od-border-strong)]"
                    )}
                  >
                    {area.label}
                  </button>
                );
              })}
            </div>

            <p
              aria-live="polite"
              aria-atomic="true"
              className="shrink-0 font-mono text-[12px] text-[var(--od-text-muted)]"
            >
              Showing {filteredEntries.length} {filteredEntries.length === 1 ? "update" : "updates"}
            </p>
          </Container>
        </div>

        {/* Monthly Editorial Timeline */}
        <Container className="mt-10 divide-y divide-[var(--od-border)]">
          {monthGroups.map((group) => (
            <section key={group.month} className="py-10 first:pt-2 grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Col 1: Month Heading */}
              <div className="lg:col-span-3">
                <h3 className="lg:sticky lg:top-[168px] font-mono text-[14px] font-bold tracking-[-0.01em] text-[var(--od-text)]">
                  {group.month}
                </h3>
              </div>

              {/* Col 2 + 3: Entries */}
              <ol className="lg:col-span-9 divide-y divide-[var(--od-border)]">
                {group.entries.map((entry, idx) => (
                  <li
                    key={entry.id}
                    className={cn(
                      "grid grid-cols-[68px_22px_1fr] sm:grid-cols-[88px_28px_1fr] gap-x-3",
                      idx === 0 ? "pb-9" : "py-9"
                    )}
                  >
                    {/* Date */}
                    <time
                      dateTime={entry.datetime}
                      className="pt-1 font-mono text-[12px] text-[var(--od-text-muted)]"
                    >
                      {entry.date}
                    </time>

                    {/* Vertical Timeline Marker & Rail */}
                    <div className="relative flex flex-col items-center pt-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#D91842] bg-[var(--od-bg)]" />
                      <span className="mt-2 w-px flex-1 bg-[var(--od-border)]" />
                    </div>

                    {/* Entry Copy */}
                    <article id={entry.id} className="min-w-0">
                      <span className="inline-block rounded-[4px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-2.5 py-0.5 font-mono text-[11.5px] text-[var(--od-text-muted)]">
                        {entry.productLabel}
                      </span>

                      <h4 className="mt-3 text-[22px] sm:text-[26px] font-bold tracking-[-0.03em] leading-[1.2] text-[var(--od-text)]">
                        {entry.title}
                      </h4>

                      <p className="mt-2.5 max-w-2xl text-[15px] leading-[1.65] text-[var(--od-text-muted)]">
                        {entry.body}
                      </p>
                    </article>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </Container>
      </section>

      {/* 3. CLOSING DARK CTA BAND */}
      <section className="py-16 lg:py-20">
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
                Explore the platform behind these updates.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#A9A8AF]">
                See how {BRAND} brings customer ordering, operations, and connected services into one platform, or
                explore the technical documentation.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <Link
                href="/demo"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A]"
              >
                See a live demo
              </Link>
              <Link
                href="/developers"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F]"
              >
                Developer platform
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
