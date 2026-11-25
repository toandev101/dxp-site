"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  Plus,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { RELATED_AI_ARTICLES } from "../../_data/blog-posts";
import { BlogCoverArt } from "../../_components/blog-hub-view";

const BRAND = siteConfig.name;

const TOC_ITEMS = [
  {
    id: "how-has-search-evolved",
    label: "How has search evolved from search engines to AI answers in 2026",
  },
  {
    id: "why-ai-search-increases-complexity",
    label: "Why AI search increases complexity for multi-location enterprises",
  },
  {
    id: "lack-visibility-control",
    label: "Why many brands appear in AI search but still lack visibility control",
  },
  {
    id: "how-ai-search-engines-decide",
    label: "How AI search engines decide which brands get cited",
  },
  {
    id: "citation-patterns-by-industry",
    label: "How AI citation patterns vary by industry",
  },
  {
    id: "owned-content-primary-input",
    label: "Why is owned content the primary input for AI answers?",
  },
  {
    id: "how-performance-is-measured",
    label: "How is performance measured in AI search?",
  },
  {
    id: "what-enterprise-brands-should-do",
    label: "What should enterprise brands do to win in AI search?",
  },
  {
    id: "how-search-ai-helps",
    label: `How ${BRAND} AI Search infrastructure helps enterprises win`,
  },
  {
    id: "faqs",
    label: "FAQs about AI search for multi-location enterprises",
  },
  {
    id: "future-answer-driven",
    label: "The future of search is answer-driven",
  },
];

const CITATION_RANK_BARS = [
  { label: "#1", value: 15, highlight: true },
  { label: "#2–3", value: 20, highlight: true },
  { label: "#4–5", value: 5, highlight: false },
  { label: "#6–10", value: 12.5, highlight: false },
  { label: "#11+", value: 27.5, highlight: false },
  { label: "Not cited", value: 20, muted: true },
];

const TRUST_STACK = [
  {
    step: "01",
    title: "Owned content",
    control: "Highest control",
    bullets: [
      "Location and service pages",
      "FAQs, pricing, and policy information",
      "Practitioner bios, store pages, and comparison pages",
    ],
  },
  {
    step: "02",
    title: "Profile content",
    control: "High control",
    bullets: ["Google Business Profile", "Apple Business Connect", "Key social profiles"],
  },
  {
    step: "03",
    title: "Citation networks and aggregators",
    control: "Lower control",
    bullets: [
      "Directories and third-party sources AI engines use to corroborate facts",
      "Important as validation, but not where brands should start",
    ],
  },
  {
    step: "04",
    title: "Reviews and social proof",
    control: "Corroboration layer",
    bullets: ["Customer ratings and reviews", "Social media mentions and engagement"],
  },
];

const MEASUREMENT_ROWS = [
  ["Rankings", "Answer presence"],
  ["Organic traffic", "Citation quality"],
  ["Keywords", "Coverage across relevant queries"],
  ["Backlinks", "Trust signals"],
  ["SERP position", "Accuracy and consistency in AI responses"],
  ["Search visibility", "Sentiment and brand representation"],
];

const PLAYBOOK_STEPS = [
  {
    num: "01",
    title: "Make your website the source of truth",
    bullets: [
      "Create content that directly answers real customer queries",
      "Structure pages with clear headings, direct answers, and scannable formats",
      "Define services, locations, and policies in a consistent format",
    ],
    note: "When owned content is complete and well-organized, it becomes a primary input into AI-generated answers.",
  },
  {
    num: "02",
    title: "Create machine-usable answer pages",
    bullets: [
      "Build FAQ sections using natural, query-based language",
      "Add comparison pages and decision frameworks",
      "Present pricing, coverage, eligibility, and policy details in bullets, tables, or other structured formats",
    ],
    note: "These formats make it easier for AI search engines to identify and reuse content in responses.",
  },
  {
    num: "03",
    title: "Invest in location-level depth",
    bullets: [
      "Specify services available at each location",
      "Include coverage areas and proximity details",
      "Provide practical information such as pricing ranges and availability",
    ],
    note: "Detailed location content improves relevance for local and intent-driven queries.",
  },
  {
    num: "04",
    title: "Strengthen validation layers",
    bullets: [
      "Maintain accurate business information across Google Business Profile, Apple Business Connect, and other high-impact profile surfaces",
      "Focus on high-impact directories and aggregators",
      "Ensure consistency across all external sources",
    ],
    note: "These signals validate owned content and strengthen trust across the sources AI search engines evaluate.",
  },
  {
    num: "05",
    title: "Track answer presence continuously",
    bullets: [
      "Monitor how often the brand appears in answers",
      "Review how the brand is described across ChatGPT, Gemini, Perplexity, and other AI search platforms",
      "Identify gaps in citation and visibility",
    ],
    note: "Continuous tracking helps enterprise teams understand where they are visible, where they are missing, and which signals need improvement.",
  },
];

const PLATFORM_CAPABILITIES = [
  {
    title: "Measure AI visibility across platforms",
    bullets: [
      "Track brand presence across ChatGPT, Gemini, and Perplexity",
      "Monitor visibility at the location level",
      "Benchmark performance against local competitors",
    ],
    body: "AI discovery varies by location. Search visibility tooling provides granular insights into where each location stands and where improvements are needed.",
  },
  {
    title: "Identify citation gaps and source influence",
    bullets: [
      "Analyze which directories, reviews, and sources shape AI responses",
      "Identify missing or weak citation signals",
      "Prioritize high-impact platforms",
    ],
    body: "AI search engines rely on aggregated data. Understanding which sources influence answers helps focus efforts where they matter most.",
  },
  {
    title: "Maintain accurate and consistent data",
    bullets: [
      "Ensure business information is correct across all locations",
      "Validate hours, services, and attributes across platforms",
      "Reduce inconsistencies that weaken trust signals",
    ],
    body: "Accurate data improves how AI search engines discover, interpret, and recommend your brand.",
  },
  {
    title: "Monitor sentiment and brand representation",
    bullets: [
      "Track how AI search engines describe your brand",
      "Identify strengths and weaknesses in AI-generated responses",
      "Detect inaccuracies and correct them quickly",
    ],
    body: "This ensures that AI outputs reflect the intended brand positioning.",
  },
  {
    title: "Act on insights with guided execution",
    bullets: [
      "Receive recommendations to improve visibility",
      "Optimize content, reviews, and listings based on gaps",
      "Apply updates within enterprise guardrails for compliance",
    ],
    body: "Connect insights to action through governed AI workflows that recommend and execute optimizations consistently across 100–10,000+ locations.",
  },
];

const ARTICLE_FAQS = [
  {
    q: "What is the biggest difference between SEO and AI search optimization (AEO)?",
    a: "SEO focuses on improving rankings in search results. AEO focuses on being selected and cited in AI-generated answers. This requires structured content, consistent data, and strong trust signals across key platforms.",
  },
  {
    q: "How do AI engines decide which brands to include in answers?",
    a: "AI engines evaluate multiple signals, including owned content, business profiles, third-party citations, and reviews. They prioritize sources that provide clear, consistent, and verifiable information aligned with user intent.",
  },
  {
    q: "How important is location-level content for AI search?",
    a: "Location-level content is critical. AI search platforms respond to local intent and require detailed information for each location, including services, availability, and coverage areas. Generic brand-level content is often insufficient.",
  },
  {
    q: "What types of content are most effective for AI citation?",
    a: "Content that is structured and easy to extract performs best. This includes FAQs, service pages, pricing details, comparison content, and clearly defined location pages written in query-based language.",
  },
  {
    q: "How do reviews influence AI-generated answers?",
    a: "Reviews act as trust signals. LLMs analyze ratings, sentiment, and consistency across platforms to validate recommendations. Strong review signals increase credibility and citation likelihood.",
  },
  {
    q: "What role do third-party platforms play in AI search?",
    a: "Third-party platforms validate brand information. When owned content is weak or inconsistent, AI search tools rely more heavily on directories, aggregators, and review sites to describe the brand.",
  },
  {
    q: `How does ${BRAND} help multi-location enterprises improve visibility in AI search?`,
    a: "Connected storefronts, unified location data, structured menus, and AI ordering agents keep your owned domain accurate and verifiable across every location, increasing inclusion in AI-generated answers.",
  },
  {
    q: "How can enterprises measure success in AI search?",
    a: "Success is measured through metrics such as answer presence, citation share, location-level visibility, and sentiment in AI-generated responses. These reflect how AI search platforms interpret and represent the brand.",
  },
  {
    q: "How often should enterprises update content for AI search?",
    a: "Content should be updated continuously to reflect changes in services, locations, pricing, and customer behavior. Regular updates improve accuracy and maintain trust signals across LLMs.",
  },
  {
    q: "What separates governed AI visibility execution from basic tracking?",
    a: "Combining visibility tracking with structured data synchronization and governed execution turns insights into real updates across location pages, listings, and customer touchpoints at scale.",
  },
];

export function StateOfAiSearchView() {
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  // Sticky GEO Checklist Lead Magnet state
  const [checklistEmail, setChecklistEmail] = useState("");
  const [checklistSubmitting, setChecklistSubmitting] = useState(false);
  const [checklistDone, setChecklistDone] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadChecklist = async (e: FormEvent) => {
    e.preventDefault();
    if (!checklistEmail.trim() || !checklistEmail.includes("@")) return;
    setChecklistSubmitting(true);
    try {
      await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: "GEO Checklist Download",
          email: checklistEmail.trim(),
          company: "Blog Reader",
          source: "blog-state-of-ai-search-geo-checklist",
        }),
      });
      setChecklistDone(true);
    } finally {
      setChecklistSubmitting(false);
    }
  };

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* Top Sticky Reading Progress Bar */}
      <div className="sticky top-[73px] z-20 h-[3px] w-full bg-[var(--od-border)]/60">
        <div
          className="h-full bg-[#266df0] transition-[width] duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Container className="py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* LEFT MAIN ARTICLE COLUMN (8 cols) */}
          <article className="lg:col-span-8 min-w-0">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[12px]">
              <Link href="/" className="text-[var(--od-text-muted)] hover:text-[var(--od-action-content)]">
                Home
              </Link>
              <span className="text-[var(--od-text-muted)]">/</span>
              <Link href="/blog" className="text-[var(--od-text-muted)] hover:text-[var(--od-action-content)]">
                Blog
              </Link>
              <span className="text-[var(--od-text-muted)]">/</span>
              <Link
                href="/blog#directory"
                className="font-semibold text-[var(--od-action-content)] hover:underline"
              >
                AI Search Optimization
              </Link>
            </nav>

            {/* H1 */}
            <h1 className="mt-5 text-[36px] sm:text-[46px] lg:text-[50px] font-bold tracking-[-0.04em] leading-[1.06] text-[var(--od-text)]">
              State of AI Search 2026: The Enterprise Multi-Location Brand Report
            </h1>

            {/* Author / Meta / Share Strip */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-[var(--od-border)] py-4">
              <div className="flex flex-wrap items-center gap-3 text-[13.5px]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b0c0d] font-mono text-[11.5px] font-bold text-white">
                  AM
                </span>
                <span className="font-bold text-[var(--od-text)]">Avtar Madan</span>
                <span className="text-[var(--od-border-strong)]">|</span>
                <span className="font-mono text-[12.5px] text-[var(--od-text-muted)]">17 min read</span>
                <span className="text-[var(--od-border-strong)] hidden sm:inline">|</span>
                <span className="font-mono text-[12.5px] text-[var(--od-text-muted)] hidden sm:inline">
                  Updated Aug 20, 2026
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-3 text-[12px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)] cursor-pointer"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-[#16a34a]" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Link copied" : "Share"}</span>
              </button>
            </div>

            {/* Hero Cover Graphic */}
            <div className="mt-7">
              <BlogCoverArt variant="ai" badge="State of AI Search 2026" large />
            </div>

            {/* Lead TL;DR + Summary Box */}
            <div className="mt-8 space-y-5 text-[16px] leading-[1.72] text-[var(--od-text-muted)]">
              <p className="text-[17px] text-[var(--od-text)]">
                <strong className="font-bold">AI search in 2026</strong> delivers a single, citation-backed answer
                instead of ranked links. Brands improve visibility by structuring owned content, maintaining accurate
                profiles, and strengthening trust signals. Success is now measured by answer presence, not rankings.
              </p>

              <div className="rounded-[10px] border border-[var(--od-border)] border-l-4 border-l-[#266df0] bg-[var(--od-surface-subtle)] p-6">
                <p className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                  Summary
                </p>
                <p className="mt-2.5 text-[15px] leading-[1.7] text-[var(--od-text)]">
                  Insights from the State of AI Search 2026 report show that AI search has become the primary gateway
                  for customer decisions, replacing traditional rankings with citation-backed, AI-generated answers.
                  Analysis of platforms like ChatGPT, Gemini, and Perplexity reveals a fundamental shift: brands are no
                  longer competing for rankings. They are competing to be selected as trusted sources within
                  AI-generated responses. While <strong>80%</strong> of brands are cited at least once, only{" "}
                  <strong>15%</strong> secure the top citation position with their own domain, and a meaningful share
                  of brands are not cited at all.
                </p>
              </div>

              <p>
                This report explains how AI search works in 2026, why many brands fail to appear consistently, and what
                enterprise organizations must do to improve citation visibility and control how they are represented in
                AI-generated answers.
              </p>
            </div>

            {/* Inline Table of Contents */}
            <nav
              aria-label="Table of contents"
              className="mt-8 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6"
            >
              <p className="flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                <BookOpen className="h-3.5 w-3.5" />
                Table of contents
              </p>
              <ol className="mt-4 space-y-2 text-[14.5px]">
                {TOC_ITEMS.map((item, i) => (
                  <li key={item.id} className="flex items-start gap-2.5">
                    <span className="font-mono text-[12px] text-[var(--od-text-muted)] pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="font-medium text-[var(--od-text)] hover:text-[var(--od-action-content)] hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* SECTION 1 */}
            <section id="how-has-search-evolved" className="scroll-mt-24 mt-12 space-y-4">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                How has search evolved from search engines to AI answers in 2026
              </h2>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                Large Language Models (LLMs) such as ChatGPT, Gemini, and Perplexity are changing how customers discover
                brands. Instead of returning a list of links, they generate a synthesized answer by selecting,
                validating, and combining information from a limited set of trusted sources.
              </p>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                As a result, AI search engines now sit between customer intent and brand visibility, deciding which
                sources are credible enough to appear in the answer. In practice, customers no longer browse multiple
                options. Instead, they rely on a single response.
              </p>

              <h3 className="pt-3 text-[19px] font-bold text-[var(--od-text)]">
                What changed in search behavior in the era of AI answers
              </h3>
              <ul className="space-y-2 text-[15px] text-[var(--od-text-muted)]">
                {[
                  "Search is shifting from navigation to resolution",
                  "Users receive a synthesized answer instead of evaluating multiple links",
                  "AI search engines filter and validate information before presenting a response",
                  "Only a limited set of sources shapes the final answer",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#266df0]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <h3 className="pt-3 text-[19px] font-bold text-[var(--od-text)]">
                What signals influence AI visibility?
              </h3>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                AI search engines evaluate a set of core signals to assess accuracy, relevance, and trust before
                selecting a source:
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-1">
                {[
                  "Trusted, verifiable sources",
                  "Clear, structured, and easy to extract",
                  "Consistency across platforms",
                  "Absence of conflicting or incomplete data",
                ].map((sig) => (
                  <li
                    key={sig}
                    className="rounded-[8px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-4 py-3 text-[14px] font-semibold text-[var(--od-text)]"
                  >
                    {sig}
                  </li>
                ))}
              </ul>
              <p className="rounded-[8px] border border-[#266df0]/30 bg-[var(--od-action-soft)]/35 px-4 py-3 text-[14.5px] font-medium text-[var(--od-text)]">
                Fixing visibility gaps starts with structuring your business data for AI discovery across every store
                and channel.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="why-ai-search-increases-complexity" className="scroll-mt-24 mt-14 space-y-4">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                Why AI search increases complexity for multi-location enterprises
              </h2>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                Multi-location enterprises manage large networks of locations, systems, and customer touchpoints.
                Maintaining consistent and reliable information across these surfaces is already challenging. AI search
                makes this significantly more complex.
              </p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 pt-2">
                <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5">
                  <h3 className="text-[16px] font-bold text-[var(--od-text)]">Operational realities</h3>
                  <ul className="mt-3 space-y-2 text-[14px] text-[var(--od-text-muted)]">
                    <li>• Hundreds or thousands of locations</li>
                    <li>• Multiple data sources across systems and teams</li>
                    <li>• Customer signals spread across reviews, profiles, and websites</li>
                  </ul>
                </div>
                <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-5">
                  <h3 className="text-[16px] font-bold text-[var(--od-text)]">New challenges introduced by AI search</h3>
                  <ul className="mt-3 space-y-2 text-[14px] text-[var(--od-text-muted)]">
                    <li>• AI engines select only a small set of trusted sources per answer</li>
                    <li>• Inconsistent location data reduces citation likelihood</li>
                    <li>• Gaps in owned content increase reliance on third-party platforms</li>
                    <li>• Conflicting information weakens trust signals</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 3 + OWNED DOMAIN CITATION BAR CHART */}
            <section id="lack-visibility-control" className="scroll-mt-24 mt-14 space-y-4">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                Why many brands appear in AI search but still lack visibility control
              </h2>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                AI search engines select a small set of sources to generate answers, limiting the number of brands
                included and how often they appear.
              </p>

              <h3 className="pt-2 text-[20px] font-bold text-[var(--od-text)]">The core problem</h3>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                The State of AI Search 2026 report shows that{" "}
                <strong className="text-[var(--od-text)]">80% of brands</strong> are cited at least once, but only{" "}
                <strong className="text-[var(--od-text)]">15%</strong> secure the top citation position with their own
                domain. The report also shows that <strong className="text-[var(--od-text)]">20%</strong> of brands fall
                into the &ldquo;not cited&rdquo; owned content tier, meaning their own domain does not appear as a
                citation source.
              </p>

              {/* Data Visualization: Owned Domain Ranking Among All Citation Sources */}
              <figure className="my-6 rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <figcaption className="font-mono text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--od-text)]">
                    Owned domain ranking among all citation sources
                  </figcaption>
                  <span className="font-mono text-[11px] text-[var(--od-text-muted)]">2026 Enterprise Benchmark</span>
                </div>

                <div className="mt-7 grid grid-cols-6 items-end gap-3 sm:gap-5 h-[220px] border-b border-[var(--od-border)] pb-2">
                  {CITATION_RANK_BARS.map((bar) => {
                    const heightPct = Math.round((bar.value / 35) * 100);
                    return (
                      <div key={bar.label} className="flex h-full flex-col items-center justify-end gap-2">
                        <span className="font-mono text-[12px] font-bold text-[var(--od-text)]">{bar.value}%</span>
                        <div
                          className={cn(
                            "w-full max-w-[54px] rounded-t-[6px] transition-all",
                            bar.highlight
                              ? "bg-[#266df0]"
                              : bar.muted
                                ? "bg-[var(--od-border-strong)]"
                                : "bg-[#266df0]/40"
                          )}
                          style={{ height: `${heightPct}%` }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-2.5 grid grid-cols-6 gap-3 sm:gap-5 text-center font-mono text-[11.5px] text-[var(--od-text-muted)]">
                  {CITATION_RANK_BARS.map((bar) => (
                    <span key={bar.label}>{bar.label}</span>
                  ))}
                </div>
              </figure>

              <div className="rounded-[10px] border border-[#266df0]/30 bg-[var(--od-action-soft)]/35 p-5 text-[14.5px] leading-[1.65] text-[var(--od-text)]">
                <strong>Implication for enterprises:</strong> When owned content lacks clarity or consistency, AI search
                engines rely more heavily on third-party sources to validate and describe the brand. For multi-location
                enterprises, this creates a control gap where external platforms represent locations inconsistently.
              </div>
            </section>

            {/* SECTION 4: THE AI TRUST STACK */}
            <section id="how-ai-search-engines-decide" className="scroll-mt-24 mt-14 space-y-4">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                How AI search engines decide which brands get cited
              </h2>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                AI search engines do not rely on a single signal to select sources. They build answers using a layered
                trust stack of signals across four primary layers:
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                {TRUST_STACK.map((layer) => (
                  <div
                    key={layer.step}
                    className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                        Layer {layer.step}
                      </span>
                      <span className="rounded-full bg-[var(--od-surface-subtle)] px-2.5 py-0.5 font-mono text-[10.5px] text-[var(--od-text-muted)]">
                        {layer.control}
                      </span>
                    </div>
                    <h3 className="mt-2 text-[17px] font-bold text-[var(--od-text)]">{layer.title}</h3>
                    <ul className="mt-2.5 space-y-1.5 text-[13.5px] text-[var(--od-text-muted)]">
                      {layer.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#266df0]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="rounded-[8px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-4 text-[14.5px] text-[var(--od-text)]">
                <strong>Key takeaway:</strong> AI visibility follows a clear order: owned content establishes the
                foundation, profiles reinforce it, and third-party sources validate it.
              </p>
            </section>

            {/* SECTION 5: CITATION PATTERNS BY INDUSTRY */}
            <section id="citation-patterns-by-industry" className="scroll-mt-24 mt-14 space-y-4">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                How AI citation patterns vary by industry
              </h2>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                AI search engines do not rely on the same sources across all industries. Citation patterns vary based on
                the type of information customers need, the level of risk involved, and the sources AI engines consider
                authoritative.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5">
                  <p className="font-mono text-[11px] uppercase text-[var(--od-action-content)]">Real Estate</p>
                  <h3 className="mt-1 text-[17px] font-bold text-[var(--od-text)]">~60% from listing platforms</h3>
                  <div className="mt-3 space-y-2.5 text-[13px]">
                    {[
                      { label: "Zillow", pct: 21.3 },
                      { label: "Redfin", pct: 11.1 },
                      { label: "Rentcafe", pct: 6.3 },
                    ].map((r) => (
                      <div key={r.label}>
                        <div className="flex justify-between font-mono text-[12px]">
                          <span>{r.label}</span>
                          <span className="font-bold">{r.pct}%</span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded-full bg-[var(--od-surface-subtle)]">
                          <div className="h-full rounded-full bg-[#266df0]" style={{ width: `${r.pct * 3.8}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5">
                  <p className="font-mono text-[11px] uppercase text-[var(--od-action-content)]">
                    Home &amp; Financial Services
                  </p>
                  <h3 className="mt-1 text-[17px] font-bold text-[var(--od-text)]">Trust &amp; verification layers</h3>
                  <div className="mt-3 space-y-2.5 text-[13px]">
                    {[
                      { label: "Home Services · BBB", pct: 8.1 },
                      { label: "Financial Services · BBB", pct: 6.5 },
                      { label: "Home Services · Angi", pct: 4.4 },
                    ].map((r) => (
                      <div key={r.label}>
                        <div className="flex justify-between font-mono text-[12px]">
                          <span>{r.label}</span>
                          <span className="font-bold">{r.pct}%</span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded-full bg-[var(--od-surface-subtle)]">
                          <div className="h-full rounded-full bg-[#266df0]" style={{ width: `${r.pct * 8.5}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                In healthcare, AI models lean on specialist sources for practitioner credentials, treatment options,
                insurance coverage, and patient trust. In every vertical, enterprise brands must identify which external
                sources corroborate answers in their category and maintain consistent facts across them.
              </p>
            </section>

            {/* SECTION 6: OWNED CONTENT */}
            <section id="owned-content-primary-input" className="scroll-mt-24 mt-14 space-y-4">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                Why is owned content the primary input for AI answers?
              </h2>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                Owned content plays a central role in how AI search engines generate answers because it is the only
                citation layer brands fully control. The focus is shifting from link building to content architecture,
                where clear service pages, location pages, FAQs, pricing details, and policy information help AI engines
                understand and cite the brand accurately.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-5">
                  <h3 className="text-[16px] font-bold text-[var(--od-text)]">Build machine-usable pages</h3>
                  <ul className="mt-3 space-y-2 text-[14px] text-[var(--od-text-muted)]">
                    <li>• Service and location pages with clearly defined offerings</li>
                    <li>• FAQ sections written in natural, query-based language</li>
                    <li>• Pricing, coverage, and policy details in structured formats</li>
                    <li>• Store directories supporting &ldquo;near me&rdquo; &amp; availability queries</li>
                  </ul>
                </div>
                <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-5">
                  <h3 className="text-[16px] font-bold text-[var(--od-text)]">Clear and consistent entity signals</h3>
                  <ul className="mt-3 space-y-2 text-[14px] text-[var(--od-text-muted)]">
                    <li>• Standardized naming across locations and platforms</li>
                    <li>• Accurate and complete service and location attributes</li>
                    <li>• Internal linking that connects related pages and removes ambiguity</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 7: MEASUREMENT TABLE */}
            <section id="how-performance-is-measured" className="scroll-mt-24 mt-14 space-y-4">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                How is performance measured in AI search?
              </h2>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                Traditional SEO evaluates rankings, organic traffic, keywords, and backlinks. AI search performance
                depends on whether a brand is selected, cited, and accurately represented in answers across relevant
                queries.
              </p>

              <div className="overflow-hidden rounded-[10px] border border-[var(--od-border)]">
                <table className="w-full border-collapse text-left text-[14.5px]">
                  <thead>
                    <tr className="border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)] font-mono text-[12px] uppercase">
                      <th className="w-1/2 px-5 py-3.5 text-[var(--od-text-muted)]">Traditional SEO</th>
                      <th className="w-1/2 bg-[var(--od-action-soft)]/50 px-5 py-3.5 text-[var(--od-action-content)]">
                        AI search
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--od-border)] bg-[var(--od-bg)]">
                    {MEASUREMENT_ROWS.map(([seo, ai]) => (
                      <tr key={seo}>
                        <td className="px-5 py-3.5 text-[var(--od-text-muted)]">{seo}</td>
                        <td className="bg-[var(--od-action-soft)]/20 px-5 py-3.5 font-semibold text-[var(--od-text)]">
                          {ai}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="pt-3 text-[19px] font-bold text-[var(--od-text)]">New enterprise metrics</h3>
              <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {[
                  {
                    t: "AI answer visibility",
                    d: "Frequency of brand inclusion in AI-generated responses",
                  },
                  {
                    t: "Owned content citation share",
                    d: "Contribution of first-party content to total citations",
                  },
                  {
                    t: "Location-level presence",
                    d: "Visibility across individual locations and markets",
                  },
                  {
                    t: "Sentiment in AI responses",
                    d: "How LLMs describe the brand based on available signals",
                  },
                ].map((m) => (
                  <li
                    key={m.t}
                    className="rounded-[8px] border border-[var(--od-border)] bg-[var(--od-bg)] p-4"
                  >
                    <p className="text-[14.5px] font-bold text-[var(--od-text)]">{m.t}</p>
                    <p className="mt-1 text-[13.5px] text-[var(--od-text-muted)]">{m.d}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* SECTION 8: 5-STEP ENTERPRISE PLAYBOOK */}
            <section id="what-enterprise-brands-should-do" className="scroll-mt-24 mt-14 space-y-4">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                What should enterprise brands do to win in AI search?
              </h2>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                For enterprise brands, the priority is not to chase every possible source. It is to improve the signals
                they control first, then reinforce them with trusted validation layers.
              </p>

              <ol className="divide-y divide-[var(--od-border)] border-y border-[var(--od-border)]">
                {PLAYBOOK_STEPS.map((st) => (
                  <li key={st.num} className="grid grid-cols-[36px_1fr] gap-4 py-6">
                    <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)] pt-1">
                      {st.num}
                    </span>
                    <div>
                      <h3 className="text-[18px] font-bold text-[var(--od-text)]">{st.title}</h3>
                      <ul className="mt-2.5 space-y-1.5 text-[14.5px] text-[var(--od-text-muted)]">
                        {st.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#266df0]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-[14px] text-[var(--od-text)]">{st.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* SECTION 9: PLATFORM CAPABILITIES */}
            <section id="how-search-ai-helps" className="scroll-mt-24 mt-14 space-y-5">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                How {BRAND} AI Search infrastructure helps enterprises win
              </h2>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                AI search requires continuous visibility, accurate location data, and strong trust signals across every
                store. Enterprise brands need a connected foundation that keeps owned pages, menus, hours, and AI
                discovery agents synchronized at scale.
              </p>

              <div className="space-y-4">
                {PLATFORM_CAPABILITIES.map((cap) => (
                  <div
                    key={cap.title}
                    className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6"
                  >
                    <h3 className="text-[17.5px] font-bold text-[var(--od-text)]">{cap.title}</h3>
                    <ul className="mt-2.5 space-y-1.5 text-[14px] text-[var(--od-text)]">
                      {cap.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#266df0]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[var(--od-text-muted)]">{cap.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 10: 10 FAQS */}
            <section id="faqs" className="scroll-mt-24 mt-14">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                FAQs about AI search for multi-location enterprises
              </h2>

              <div className="mt-6 border-t border-[var(--od-border)]">
                {ARTICLE_FAQS.map((item) => {
                  const open = !!openFaq[item.q];
                  return (
                    <div key={item.q} className="border-b border-[var(--od-border)]">
                      <button
                        type="button"
                        onClick={() => setOpenFaq((p) => ({ ...p, [item.q]: !p[item.q] }))}
                        className="flex w-full items-center justify-between gap-4 py-4.5 text-left text-[15.5px] font-bold text-[var(--od-text)] cursor-pointer"
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
                        <p className="pb-5 text-[14.5px] leading-[1.68] text-[var(--od-text-muted)]">{item.a}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 11: CONCLUSION + INLINE DARK DEMO BANNER */}
            <section id="future-answer-driven" className="scroll-mt-24 mt-14 space-y-4">
              <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--od-text)]">
                The future of search is answer-driven
              </h2>
              <p className="text-[15.5px] leading-[1.72] text-[var(--od-text-muted)]">
                AI search has shortened the path from discovery to decision. Customers now rely on direct answers, and
                those answers determine which brands they consider. For multi-location enterprises, winning requires
                maintaining consistent, structured, and verifiable information across every location and channel.
              </p>

              {/* Inline Dark Watch Demo CTA */}
              <div className="mt-6 relative overflow-hidden rounded-[12px] bg-[#0b0c0d] p-7 sm:p-9 text-white flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 top-1/2 h-[280px] w-[320px] -translate-y-1/2"
                  style={{
                    background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.3), transparent)",
                  }}
                />
                <div className="relative z-10 max-w-md">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#92b5ff]">Live walkthrough</p>
                  <h3 className="mt-1.5 text-[22px] font-bold leading-snug">
                    See how {BRAND} powers AI discovery across every location.
                  </h3>
                </div>
                <Link
                  href="/contact?meeting=demo#book"
                  className="relative z-10 inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-[6px] bg-[#266df0] px-5 text-[14px] font-semibold text-white hover:bg-[#1f5fd1]"
                >
                  Watch a free demo
                </Link>
              </div>
            </section>

            {/* AUTHOR BIO BOX */}
            <aside className="mt-12 rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6 sm:p-7 flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0b0c0d] font-mono text-[15px] font-bold text-white">
                AM
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--od-action-content)]">
                  About the Author
                </p>
                <p className="mt-1 text-[18px] font-bold text-[var(--od-text)]">Avtar Madan</p>
                <p className="text-[13px] font-medium text-[var(--od-text-muted)]">Global Director - SEO</p>
                <p className="mt-2.5 text-[14.5px] leading-[1.65] text-[var(--od-text-muted)]">
                  Avtar Madan leads SEO and Local SEO programs that help multi-location brands with 100+ to 10,000+
                  locations. With 20+ years of experience in the digital ecosystem, he began his career during the early
                  wave of digital transformation and holds an MBA from IIM Kozhikode.
                </p>
              </div>
            </aside>
          </article>

          {/* RIGHT STICKY RAIL (4 cols): GEO CHECKLIST LEAD MAGNET */}
          <aside className="lg:col-span-4 lg:sticky lg:top-[96px] space-y-6">
            <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 shadow-[0_14px_40px_-22px_rgba(11,12,13,0.18)]">
              {/* Ebook Cover Visual (Ordering.co Dark/Blue Design System) */}
              <div className="relative overflow-hidden rounded-[10px] bg-[#0b0c0d] p-6 text-white">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44"
                  style={{
                    background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.38), transparent)",
                  }}
                />
                <div className="relative z-10 mx-auto max-w-[200px] rounded-[8px] border border-white/15 bg-[#151821] p-4 shadow-lg">
                  <span className="inline-flex items-center gap-1 font-mono text-[9.5px] text-[#92b5ff]">
                    <Sparkles className="h-3 w-3" />
                    {BRAND} GUIDE
                  </span>
                  <p className="mt-2.5 text-[14px] font-bold leading-snug text-white">
                    Generative Engine Optimization (GEO)
                  </p>
                  <p className="mt-1.5 text-[10.5px] leading-relaxed text-[#989aa0]">
                    The Essential Checklist for Multi-Location Businesses
                  </p>
                  <div className="mt-4 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#266df0]" />
                    <span className="h-2 w-2 rounded-full bg-[#34d399]" />
                    <span className="h-2 w-2 rounded-full bg-[#fbbf24]" />
                    <span className="ml-auto font-mono text-[9.5px] text-[#92b5ff]">2026 PDF</span>
                  </div>
                </div>
              </div>

              <h2 className="mt-5 text-center text-[21px] font-bold leading-snug tracking-[-0.025em] text-[var(--od-text)]">
                Invisible in AI Search? Fix It With This Free GEO Checklist
              </h2>

              {checklistDone ? (
                <div className="mt-5 rounded-[8px] border border-[#16a34a]/30 bg-[#16a34a]/10 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-8 w-8 text-[#16a34a]" />
                  <p className="mt-2 text-[14.5px] font-bold text-[var(--od-text)]">Checklist sent!</p>
                  <p className="mt-1 text-[13px] text-[var(--od-text-muted)]">
                    We sent the 2026 GEO Checklist PDF to your work inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDownloadChecklist} className="mt-5 space-y-3">
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--od-text-muted)]" />
                    <input
                      type="email"
                      required
                      value={checklistEmail}
                      onChange={(e) => setChecklistEmail(e.target.value)}
                      placeholder="Business email"
                      aria-label="Business email"
                      className="h-[44px] w-full rounded-[6px] border border-[var(--od-border-strong)] bg-[var(--od-bg)] pl-9 pr-3 text-[14px] text-[var(--od-text)] outline-none focus:border-[#266df0]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={checklistSubmitting}
                    className="flex h-[44px] w-full items-center justify-center rounded-[6px] bg-[#266df0] px-4 text-[13.5px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#1f5fd1] disabled:opacity-60 cursor-pointer"
                  >
                    {checklistSubmitting ? "Sending..." : "Download now"}
                  </button>
                  <p className="text-center text-[11.5px] leading-[1.5] text-[var(--od-text-muted)]">
                    By continuing, you agree to our privacy policy and consent to receive communications from {BRAND}.
                  </p>
                </form>
              )}
            </div>

            {/* Compact Quick Navigation */}
            <div className="hidden lg:block rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--od-text-muted)]">
                Key sections
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                {TOC_ITEMS.slice(0, 6).map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block truncate text-[var(--od-text-muted)] hover:text-[var(--od-action-content)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* RELATED ARTICLES (3 CARDS) */}
        <section className="mt-16 border-t border-[var(--od-border)] pt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-[var(--od-text)]">
              Related Articles
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>All articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {RELATED_AI_ARTICLES.map((post) => (
              <Link
                key={post.slug}
                href="/blog#directory"
                className="group flex h-full flex-col justify-between rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5 transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)]"
              >
                <div>
                  <BlogCoverArt variant={post.coverVariant} badge={post.badgeText} />
                  <h3 className="mt-4 text-[17.5px] font-bold leading-snug text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                    {post.title}
                  </h3>
                </div>
                <p className="mt-5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-[var(--od-text-muted)]">
                  {post.readTime}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
