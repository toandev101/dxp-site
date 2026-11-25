"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Globe,
  Link2,
  Mail,
  MapPin,
  Search,
  Sparkles,
  Star,
  Store,
  X,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import {
  BLOG_CATEGORIES,
  DIRECTORY_POSTS,
  FEATURED_ARTICLES,
  LEAD_FEATURED_POST,
  type BlogPost,
} from "../_data/blog-posts";

const BRAND = siteConfig.name;
const PAGE_SIZE = 9;

export function BlogCoverArt({
  variant,
  badge,
  large = false,
}: {
  variant: BlogPost["coverVariant"];
  badge?: string;
  large?: boolean;
}) {
  if (variant === "ai" && large) {
    return (
      <div className="relative flex h-full min-h-[260px] w-full flex-col justify-between overflow-hidden rounded-[10px] border border-[#23252a] bg-[#0b0c0d] p-6 sm:p-8 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -bottom-20 h-[340px] w-[380px]"
          style={{
            background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.36), transparent)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#266df0]/45 bg-[#266df0]/15 px-3 py-1 font-mono text-[11px] font-semibold text-[#92b5ff]">
            <Sparkles className="h-3 w-3" />
            {badge || "Research Report"}
          </span>
          <span className="font-mono text-[11px] text-[#989aa0]">ChatGPT · Gemini · Perplexity</span>
        </div>

        {/* Visual AI Engine & Search Pill Graphic */}
        <div className="relative z-10 my-6 space-y-4">
          <div className="flex items-center gap-2.5">
            {["ChatGPT", "Gemini", "Perplexity"].map((engine, i) => (
              <span
                key={engine}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12px] font-semibold",
                  i === 0
                    ? "border-[#266df0] bg-[#266df0] text-white"
                    : "border-white/15 bg-white/8 text-[#e4e6ea]"
                )}
              >
                <Bot className="h-3.5 w-3.5" />
                {engine}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-full border border-white/15 bg-white/8 px-4 py-2.5 text-[12.5px] text-[#c4c6ca] backdrop-blur-xs">
            <span className="truncate font-mono">Best multi-location ordering brand near me...</span>
            <span className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#266df0] text-white">
              <Search className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Bottom Benchmark Pills */}
        <div className="relative z-10 grid grid-cols-3 gap-2.5 border-t border-white/10 pt-4 text-left">
          <div>
            <p className="text-[20px] font-bold text-white">80%</p>
            <p className="font-mono text-[10.5px] text-[#989aa0]">Cited at least once</p>
          </div>
          <div>
            <p className="text-[20px] font-bold text-[#639bff]">15%</p>
            <p className="font-mono text-[10.5px] text-[#989aa0]">#1 owned domain</p>
          </div>
          <div>
            <p className="text-[20px] font-bold text-white">20%</p>
            <p className="font-mono text-[10.5px] text-[#989aa0]">Not cited at all</p>
          </div>
        </div>
      </div>
    );
  }

  const config = {
    ai: {
      icon: Sparkles,
      bg: "bg-[#0b0c0d] text-white",
      accent: "text-[#639bff]",
      chipBg: "border-[#266df0]/40 bg-[#266df0]/15 text-[#92b5ff]",
      meta: "AI Search · Citations",
    },
    franchise: {
      icon: Store,
      bg: "bg-[#0e1526] text-white",
      accent: "text-[#92b5ff]",
      chipBg: "border-[#266df0]/40 bg-[#266df0]/20 text-[#92b5ff]",
      meta: "Multi-location · Scale",
    },
    local: {
      icon: MapPin,
      bg: "bg-[#14161a] text-white",
      accent: "text-[#639bff]",
      chipBg: "border-white/15 bg-white/10 text-[#d6d8dc]",
      meta: "Local SEO · Listings",
    },
    analytics: {
      icon: BarChart3,
      bg: "bg-[#111521] text-white",
      accent: "text-[#34d399]",
      chipBg: "border-[#34d399]/35 bg-[#10b981]/15 text-[#6ee7b7]",
      meta: "Benchmarks · Attribution",
    },
    reputation: {
      icon: Star,
      bg: "bg-[#17181c] text-white",
      accent: "text-[#fbbf24]",
      chipBg: "border-[#fbbf24]/35 bg-[#f59e0b]/15 text-[#fcd34d]",
      meta: "Reviews · Trust Signals",
    },
    operations: {
      icon: Globe,
      bg: "bg-[#0f131a] text-white",
      accent: "text-[#639bff]",
      chipBg: "border-white/15 bg-white/10 text-[#d6d8dc]",
      meta: "Operations · Accuracy",
    },
  }[variant];

  const Icon = config.icon;

  return (
    <div
      className={cn(
        "relative flex aspect-[16/9] w-full flex-col justify-between overflow-hidden rounded-[8px] border border-[#23252a] p-5",
        config.bg
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-12 h-40 w-44"
        style={{
          background: "radial-gradient(closest-side, rgba(38, 109, 240, 0.28), transparent)",
        }}
      />
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span className={cn("inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] font-semibold", config.chipBg)}>
          {badge || "Guide"}
        </span>
        <Icon className={cn("h-4 w-4", config.accent)} />
      </div>

      <div className="relative z-10 flex items-end justify-between gap-3">
        <span className="font-mono text-[11px] text-[#989aa0]">{config.meta}</span>
        <div className="flex items-end gap-1" aria-hidden="true">
          <span className="h-3 w-1.5 rounded-sm bg-white/20" />
          <span className="h-5 w-1.5 rounded-sm bg-white/35" />
          <span className="h-7 w-1.5 rounded-sm bg-[#266df0]" />
          <span className="h-4 w-1.5 rounded-sm bg-white/25" />
        </div>
      </div>
    </div>
  );
}

export function BlogHubView() {
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  // Share copy state
  const [copiedLead, setCopiedLead] = useState(false);

  // Directory filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const [catFilterText, setCatFilterText] = useState("");
  const [page, setPage] = useState(1);

  // Quick-read modal for secondary articles
  const [previewPost, setPreviewPost] = useState<BlogPost | null>(null);

  const visibleCategories = useMemo(() => {
    const q = catFilterText.trim().toLowerCase();
    if (!q) return BLOG_CATEGORIES;
    return BLOG_CATEGORIES.filter((c) => c.name.toLowerCase().includes(q));
  }, [catFilterText]);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return DIRECTORY_POSTS.filter((p) => {
      if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
      if (q) {
        const hay = `${p.title} ${p.category} ${p.excerpt}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pagedPosts = filteredPosts.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) return;
    setNewsletterDone(true);
    setNewsletterEmail("");
  };

  const handleCopyLead = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/blog/state-of-ai-search`).catch(() => {});
    }
    setCopiedLead(true);
    setTimeout(() => setCopiedLead(false), 2000);
  };

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. BLOG HERO + LEAD FEATURED ARTICLE */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[12px]">
              <Link href="/products" className="text-[var(--od-action-content)] underline underline-offset-4">
                Resources
              </Link>
              <span className="text-[var(--od-text-muted)]">/</span>
              <span className="text-[var(--od-text)]">Blog</span>
            </nav>

            <h1 className="mt-5 text-[42px] sm:text-[56px] font-bold tracking-[-0.045em] leading-[1.03] text-[var(--od-text)]">
              {BRAND} Blog
            </h1>
            <p className="mt-3 text-[16.5px] sm:text-[18px] leading-[1.6] text-[var(--od-text-muted)]">
              <strong className="font-semibold text-[var(--od-text)]">Your guide to success.</strong> Learn how to
              differentiate yourself from the competition.
            </p>
          </div>

          {/* Lead Featured Story Card */}
          <article className="mt-10 grid grid-cols-1 gap-8 rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5 sm:p-7 lg:grid-cols-12 items-center">
            <Link href="/blog/state-of-ai-search" className="lg:col-span-6 block transition-opacity hover:opacity-95">
              <BlogCoverArt variant="ai" badge={LEAD_FEATURED_POST.badgeText} large />
            </Link>

            <div className="lg:col-span-6 lg:pl-2">
              <div className="flex flex-wrap items-center gap-2.5 font-mono text-[12px]">
                <span className="rounded-full border border-[#266df0]/30 bg-[var(--od-action-soft)] px-2.5 py-0.5 font-semibold text-[var(--od-action-content)]">
                  {LEAD_FEATURED_POST.category}
                </span>
                <span className="text-[var(--od-text-muted)]">{LEAD_FEATURED_POST.readTime}</span>
              </div>

              <h2 className="mt-4 text-[28px] sm:text-[36px] font-bold tracking-[-0.035em] leading-[1.12] text-[var(--od-text)]">
                <Link
                  href="/blog/state-of-ai-search"
                  className="hover:text-[var(--od-action-content)] transition-colors"
                >
                  {LEAD_FEATURED_POST.title}
                </Link>
              </h2>

              <p className="mt-3.5 text-[15px] leading-[1.6] text-[var(--od-text-muted)]">
                {LEAD_FEATURED_POST.excerpt}
              </p>

              {/* Author & Share Row */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--od-border)] pt-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b0c0d] font-mono text-[12px] font-bold text-white">
                    AM
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-[var(--od-text)]">{LEAD_FEATURED_POST.author}</p>
                    <p className="text-[12.5px] text-[var(--od-text-muted)]">{LEAD_FEATURED_POST.authorRole}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11.5px] text-[var(--od-text-muted)] mr-1">Share</span>
                  <button
                    type="button"
                    onClick={handleCopyLead}
                    aria-label="Copy article link"
                    className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-3 text-[12px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)] cursor-pointer"
                  >
                    {copiedLead ? <Check className="h-3.5 w-3.5 text-[#16a34a]" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedLead ? "Copied" : "Copy link"}</span>
                  </button>
                  <Link
                    href="/blog/state-of-ai-search"
                    className="inline-flex h-8 items-center gap-1 rounded-full bg-[#266df0] px-3.5 text-[12px] font-semibold text-white hover:bg-[#1f5fd1]"
                  >
                    <span>Read report</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* 2. INLINE NEWSLETTER BANNER */}
          <div className="mt-8 rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-6 py-7 sm:px-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-[var(--od-border)] bg-[var(--od-bg)] text-[#266df0]">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold tracking-[-0.025em] text-[var(--od-text)]">
                  Get insights in your inbox
                </h2>
                <p className="text-[13.5px] text-[var(--od-text-muted)]">
                  Research reports, AI search benchmarks, and multi-location playbooks.
                </p>
              </div>
            </div>

            {newsletterDone ? (
              <div className="inline-flex items-center gap-2 rounded-[8px] border border-[#16a34a]/30 bg-[#16a34a]/10 px-4 py-2.5 text-[14px] font-semibold text-[#15803d]">
                <Check className="h-4 w-4" />
                <span>Subscribed — check your inbox for our latest report.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col gap-2.5 sm:flex-row">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  className="h-[44px] flex-1 rounded-[6px] border border-[var(--od-border-strong)] bg-[var(--od-bg)] px-3.5 text-[14px] text-[var(--od-text)] outline-none focus:border-[#266df0]"
                />
                <button
                  type="submit"
                  className="h-[44px] shrink-0 rounded-[6px] bg-[#0b0c0d] px-6 text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#266df0] cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>

      {/* 3. FEATURED ARTICLES (4 CARDS) */}
      <section className="border-t border-[var(--od-border)] py-14 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">Editor&apos;s picks</p>
              <h2 className="mt-2 text-[30px] sm:text-[38px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
                Featured Articles
              </h2>
            </div>
            <Link
              href="/blog/state-of-ai-search"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>Read the 2026 AI Search Report</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED_ARTICLES.map((post) => (
              <button
                key={post.slug}
                type="button"
                onClick={() => setPreviewPost(post)}
                className="group flex h-full flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-4 text-left transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
              >
                <div>
                  <BlogCoverArt variant={post.coverVariant} badge={post.badgeText} />
                  <p className="mt-4 font-mono text-[11px] font-semibold text-[var(--od-action-content)]">
                    {post.category}
                  </p>
                  <h3 className="mt-1.5 text-[16.5px] font-bold leading-snug text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                    {post.title}
                  </h3>
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.04em] text-[var(--od-text-muted)]">
                  {post.readTime} · {post.updatedAt}
                </p>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. MORE BLOGS — SEARCH + SEARCHABLE CATEGORY DROPDOWN + 3-COL GRID + PAGINATION */}
      <section id="directory" className="scroll-mt-24 border-t border-[var(--od-border)] py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[12px] font-semibold text-[var(--od-action-content)]">Archive</p>
              <h2 className="mt-2 text-[30px] sm:text-[38px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
                More articles
              </h2>
            </div>

            {/* Search + Searchable Category Dropdown */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative w-full sm:w-[260px]">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--od-text-muted)]" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder={`Search ${BRAND} Blog`}
                  aria-label="Search blog"
                  className="h-[44px] w-full rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] pl-9 pr-3 text-[14px] text-[var(--od-text)] outline-none focus:border-[#266df0]"
                />
              </div>

              {/* Searchable Category Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCatDropdownOpen((v) => !v)}
                  aria-expanded={catDropdownOpen}
                  className="flex h-[44px] w-full sm:w-[230px] items-center justify-between gap-2 rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-3.5 text-[14px] font-medium text-[var(--od-text)] hover:border-[var(--od-border-strong)] cursor-pointer"
                >
                  <span className="truncate">{selectedCategory === "All" ? "Category" : selectedCategory}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-[var(--od-text-muted)] transition-transform",
                      catDropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {catDropdownOpen && (
                  <div className="absolute right-0 z-30 mt-2 w-full sm:w-[280px] rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-2.5 shadow-xl">
                    <input
                      type="search"
                      value={catFilterText}
                      onChange={(e) => setCatFilterText(e.target.value)}
                      placeholder="Search categories..."
                      className="h-[36px] w-full rounded-[6px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-3 text-[13px] text-[var(--od-text)] outline-none focus:border-[#266df0]"
                    />
                    <ul className="mt-2 max-h-[260px] overflow-y-auto divide-y divide-[var(--od-border)]/50 text-[13px]">
                      <li>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCategory("All");
                            setCatDropdownOpen(false);
                            setPage(1);
                          }}
                          className={cn(
                            "flex w-full items-center justify-between rounded px-2.5 py-2 text-left hover:bg-[var(--od-surface-subtle)] cursor-pointer",
                            selectedCategory === "All" && "font-bold text-[var(--od-action-content)]"
                          )}
                        >
                          <span>All Categories</span>
                          <span className="font-mono text-[11px] text-[var(--od-text-muted)]">
                            {DIRECTORY_POSTS.length}
                          </span>
                        </button>
                      </li>
                      {visibleCategories.map((cat) => (
                        <li key={cat.name}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCategory(cat.name);
                              setCatDropdownOpen(false);
                              setPage(1);
                            }}
                            className={cn(
                              "flex w-full items-center justify-between rounded px-2.5 py-2 text-left hover:bg-[var(--od-surface-subtle)] cursor-pointer",
                              selectedCategory === cat.name && "font-bold text-[var(--od-action-content)]"
                            )}
                          >
                            <span className="truncate">{cat.name}</span>
                            <span className="font-mono text-[11px] text-[var(--od-text-muted)]">({cat.count})</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {(selectedCategory !== "All" || searchQuery.trim()) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                    setPage(1);
                  }}
                  className="h-[44px] rounded-[6px] border border-[var(--od-border)] px-3.5 text-[13px] font-semibold text-[var(--od-text-muted)] hover:text-[var(--od-text)] cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* 3-Column Card Grid */}
          {pagedPosts.length > 0 ? (
            <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pagedPosts.map((post) => (
                <button
                  key={post.slug}
                  type="button"
                  onClick={() => setPreviewPost(post)}
                  className="group flex h-full flex-col justify-between rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5 text-left transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
                >
                  <div>
                    <BlogCoverArt variant={post.coverVariant} badge={post.badgeText} />
                    <h3 className="mt-5 text-[19px] font-bold leading-snug tracking-[-0.02em] text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
                      {post.title}
                    </h3>
                  </div>

                  <p className="mt-6 font-mono text-[11.5px] uppercase tracking-[0.06em] text-[var(--od-text-muted)]">
                    {post.readTime}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-9 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-10 text-center">
              <p className="text-[17px] font-bold text-[var(--od-text)]">No articles match that filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setPage(1);
                }}
                className="mt-4 inline-flex h-[40px] items-center rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 text-[13.5px] font-semibold text-[var(--od-text)] cursor-pointer"
              >
                Show all articles
              </button>
            </div>
          )}

          {/* Circular Numbered Pagination */}
          {totalPages > 1 && (
            <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-2">
              <button
                type="button"
                disabled={safePage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                aria-label="Previous page"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--od-border)] text-[var(--od-text)] disabled:opacity-35 hover:border-[var(--od-border-strong)] cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setPage(num)}
                  aria-current={safePage === num ? "page" : undefined}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-full border text-[14px] font-semibold transition-colors cursor-pointer",
                    safePage === num
                      ? "border-[#0b0c0d] bg-[#0b0c0d] text-white"
                      : "border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)] hover:border-[var(--od-border-strong)]"
                  )}
                >
                  {num}
                </button>
              ))}

              <button
                type="button"
                disabled={safePage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                aria-label="Next page"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--od-border)] text-[var(--od-text)] disabled:opacity-35 hover:border-[var(--od-border-strong)] cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </Container>
      </section>

      {/* 5. CLOSING DARK CTA BAND */}
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
              <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#92b5ff]">Multi-location AI &amp; ordering</p>
              <h2 className="mt-3 text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-white">
                Built for multi-location brands winning AI discovery.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#c4c6ca]">
                See how {BRAND} keeps menus, locations, ordering channels, and AI agents structured from one connected
                platform.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?meeting=demo#book"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] bg-[#266df0] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1f5fd1]"
              >
                Watch demo
              </Link>
              <Link
                href="/blog/state-of-ai-search"
                className="inline-flex min-h-[46px] items-center justify-center rounded-[6px] border border-[#34363a] bg-[#17181a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#5b5e64] hover:bg-[#212224]"
              >
                Read State of AI Search
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick-Reader Modal for non-flagship blog cards */}
      {previewPost && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-preview-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
          onClick={() => setPreviewPost(null)}
        >
          <div
            className="w-full max-w-xl rounded-[12px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="inline-block rounded-full border border-[#266df0]/30 bg-[var(--od-action-soft)] px-3 py-1 font-mono text-[11px] font-semibold text-[var(--od-action-content)]">
                {previewPost.category}
              </span>
              <button
                type="button"
                onClick={() => setPreviewPost(null)}
                aria-label="Close"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--od-border)] text-[var(--od-text-muted)] hover:text-[var(--od-text)] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <h3 id="blog-preview-title" className="mt-4 text-[22px] sm:text-[26px] font-bold leading-snug text-[var(--od-text)]">
              {previewPost.title}
            </h3>
            <p className="mt-2 font-mono text-[12px] text-[var(--od-text-muted)]">
              {previewPost.author} · {previewPost.readTime} · Updated {previewPost.updatedAt}
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--od-text-muted)]">{previewPost.excerpt}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[var(--od-border)] pt-5">
              <Link
                href="/blog/state-of-ai-search"
                onClick={() => setPreviewPost(null)}
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-[6px] bg-[#266df0] px-4 text-[14px] font-semibold text-white hover:bg-[#1f5fd1]"
              >
                <span>Read full State of AI Search 2026 report</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?meeting=demo#book"
                onClick={() => setPreviewPost(null)}
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-[6px] border border-[var(--od-border)] px-4 text-[14px] font-semibold text-[var(--od-text)] hover:bg-[var(--od-surface-subtle)]"
              >
                <Link2 className="h-4 w-4" />
                <span>Talk to our team</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
