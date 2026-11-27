"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown, Route, Search, Store, Truck } from "lucide-react";

import { OperoLockup } from "@/components/brand/opero-logo";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { BrandLogo } from "@/components/layout/header";
import { useUiStore } from "@/stores/ui-store";
import useDictionaries from "@/hooks/useDictionaries";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import {
  ALL_CATEGORIES,
  COUNTRY_NAMES,
  type IntegrationCategory,
  type IntegrationItem,
} from "../_data/integrations-catalog";
import {
  getCategoryLabel,
  localizeIntegrationItem,
} from "../_data/integrations-catalog-vi";

const BRAND = siteConfig.name;

export interface HeroBreadcrumb {
  label: string;
  href?: string;
}

export function IntegrationHero({
  breadcrumbs,
  eyebrow,
  title,
  lede,
  primaryCta,
  secondaryCta,
  meta,
  aside,
}: {
  breadcrumbs: HeroBreadcrumb[];
  eyebrow?: string;
  title: string;
  lede: string;
  primaryCta?: { label: string; href?: string; modalTopic?: string };
  secondaryCta?: { label: string; href?: string; openChat?: boolean };
  meta?: string[];
  aside: ReactNode;
}) {
  const { openDemoModal, setChatOpen } = useUiStore();

  return (
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
              {breadcrumbs.map((crumb, idx) => (
                <span key={crumb.label} className="inline-flex items-center gap-1.5">
                  {idx > 0 && <span className="text-[#6E6D75]">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-[#F9D0D8] underline underline-offset-4 hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#F9D0D8]">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>

            {eyebrow && (
              <p className="mt-5 font-mono text-[12px] font-medium text-[#A9A8AF]">{eyebrow}</p>
            )}

            <h1 className="mt-4 text-[40px] sm:text-[52px] lg:text-[60px] font-bold tracking-[-0.04em] leading-[1.03] text-white [text-wrap:balance]">
              {title}
            </h1>

            <p className="mt-5 max-w-xl text-[16.5px] sm:text-[18px] leading-[1.6] text-[#A9A8AF]">{lede}</p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {primaryCta &&
                  (primaryCta.href ? (
                    <Link
                      href={primaryCta.href}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A]"
                    >
                      {primaryCta.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => openDemoModal(primaryCta.modalTopic || title)}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A] cursor-pointer"
                    >
                      {primaryCta.label}
                    </button>
                  ))}

                {secondaryCta &&
                  (secondaryCta.openChat ? (
                    <button
                      type="button"
                      onClick={() => setChatOpen(true)}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F] cursor-pointer"
                    >
                      {secondaryCta.label}
                    </button>
                  ) : (
                    <Link
                      href={secondaryCta.href || "/integrations"}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F]"
                    >
                      {secondaryCta.label}
                    </Link>
                  ))}
              </div>
            )}

            {meta && meta.length > 0 && (
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#A9A8AF]">
                {meta.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6">{aside}</div>
        </div>
      </Container>
    </section>
  );
}

/** Crisp, zero-external-dependency provider logo mark */
export function ProviderLogoMark({ item }: { item: IntegrationItem }) {
  if (item.isOrderingBuiltIn) {
    return (
      <div className="inline-flex items-center text-[var(--od-text)]">
        <OperoLockup className="h-[22px] w-auto" />
      </div>
    );
  }

  const initials = item.name
    .split(/[\s.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || "")
    .join("");

  return (
    <div className="inline-flex items-center gap-2.5">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-[11px] font-bold text-white shadow-xs"
        style={{ backgroundColor: item.brandColor }}
      >
        {initials}
      </span>
      <span
        className="text-[15px] font-extrabold tracking-[-0.03em]"
        style={{ color: item.brandColor === "#151417" || item.brandColor === "#111111" ? "var(--od-text)" : item.brandColor }}
      >
        {item.name}
      </span>
    </div>
  );
}

export function IntegrationProviderCard({
  item,
  compact = false,
}: {
  item: IntegrationItem;
  compact?: boolean;
}) {
  const { openDemoModal } = useUiStore();
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const isComingSoon = item.badge === "Coming soon";
  const displayItem = localizeIntegrationItem(item, isVi);

  const cardInner = (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2">
          <ProviderLogoMark item={displayItem} />
          {displayItem.badge && (
            <span
              className={cn(
                "shrink-0 rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold",
                isComingSoon
                  ? "bg-[#fef3c7] text-[#b45309]"
                  : "border border-[var(--od-border)] bg-[var(--od-surface-subtle)] text-[var(--od-text-muted)]"
              )}
            >
              {displayItem.badge}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-[17px] font-bold text-[var(--od-text)] group-hover:text-[var(--od-action-content)] transition-colors">
          {displayItem.name}
        </h3>
        <p className="mt-1.5 text-[14px] leading-[1.58] text-[var(--od-text-muted)]">{displayItem.description}</p>
      </div>

      <div className="mt-5 pt-3.5 border-t border-[var(--od-border)] flex flex-wrap items-center justify-between gap-2 font-mono text-[11.5px]">
        <span className="text-[var(--od-text-muted)]">{getCategoryLabel(displayItem.category, isVi)}</span>
        <span className="font-medium text-[var(--od-action-content)] group-hover:underline">
          {displayItem.ctaLabel}
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] transition-colors hover:border-[var(--od-border-strong)]">
      {displayItem.href ? (
        <Link href={displayItem.href} className={cn("group flex-1 block", compact ? "p-5" : "p-6")}>
          {cardInner}
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => openDemoModal(`${displayItem.name} integration`)}
          className={cn("group flex-1 block w-full text-left cursor-pointer", compact ? "p-5" : "p-6")}
        >
          {cardInner}
        </button>
      )}

      {displayItem.countrySummary && (
        <details className="border-t border-[var(--od-border)] px-6 py-3 text-[12px] text-[var(--od-text-muted)]">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:text-[var(--od-text)]">
            <span>{displayItem.countrySummary}</span>
            <ChevronDown className="h-3.5 w-3.5 shrink-0" />
          </summary>
          <div className="mt-2.5 space-y-2 border-t border-[var(--od-border)] pt-2.5 leading-[1.55]">
            {displayItem.countries.length > 0 && (
              <p className="text-[var(--od-text)]">
                {displayItem.countries.map((code) => COUNTRY_NAMES[code] || code).join(", ")}
              </p>
            )}
            {displayItem.countryNote && <p>{displayItem.countryNote}</p>}
          </div>
        </details>
      )}
    </div>
  );
}

export function FilterableIntegrationsGrid({
  items,
  searchPlaceholder,
  countNoun = "integrations",
  showCategoryPills = false,
  initialCategory = "All",
  onCategoryChange,
  defaultVisibleCount = 36,
}: {
  items: IntegrationItem[];
  searchPlaceholder: string;
  countNoun?: string;
  showCategoryPills?: boolean;
  initialCategory?: "All" | IntegrationCategory;
  onCategoryChange?: (cat: "All" | IntegrationCategory) => void;
  defaultVisibleCount?: number;
}) {
  const { openDemoModal } = useUiStore();
  const { lang } = useDictionaries();
  const isVi = lang === "vi";
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("ALL");
  const [selectedCategory, setSelectedCategory] = useState<"All" | IntegrationCategory>(initialCategory);
  const [showAll, setShowAll] = useState(false);

  const availableCountries = useMemo(() => {
    const set = new Set<string>();
    items.forEach((it) => it.countries.forEach((c) => set.add(c)));
    return Array.from(set).sort((a, b) => (COUNTRY_NAMES[a] || a).localeCompare(COUNTRY_NAMES[b] || b));
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (
        selectedCategory !== "All" &&
        item.category !== selectedCategory &&
        item.secondaryCategory !== selectedCategory
      ) {
        return false;
      }
      if (selectedCountry === "NOT_LISTED") {
        return false;
      }
      if (selectedCountry !== "ALL" && !item.countries.includes(selectedCountry)) {
        return false;
      }
      if (q) {
        const localized = isVi ? localizeIntegrationItem(item, true) : item;
        const hay = `${item.name} ${localized.name} ${item.description} ${localized.description} ${item.category} ${getCategoryLabel(item.category, isVi)} ${item.countries
          .map((c) => COUNTRY_NAMES[c] || c)
          .join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [items, query, selectedCountry, selectedCategory, isVi]);

  const visibleItems = showAll ? filtered : filtered.slice(0, defaultVisibleCount);

  const handleCatClick = (cat: "All" | IntegrationCategory) => {
    setSelectedCategory(cat);
    setShowAll(false);
    onCategoryChange?.(cat);
  };

  return (
    <div>
      {/* Search + Country Select Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="relative w-full sm:max-w-[280px]">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--od-text-muted)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowAll(false);
            }}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-[44px] w-full rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] pl-10 pr-3.5 text-[14px] text-[var(--od-text)] placeholder:text-[var(--od-text-muted)] focus:border-[#D91842] focus:outline-none"
          />
        </div>

        <div className="w-full sm:w-[220px]">
          <label
            htmlFor="business-country-filter"
            className="block text-[12px] font-medium text-[var(--od-text-muted)] mb-1.5"
          >
            {isVi ? "Quốc gia kinh doanh" : "Business country"}
          </label>
          <select
            id="business-country-filter"
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setShowAll(false);
            }}
            className="h-[44px] w-full rounded-[6px] border border-[var(--od-border)] bg-[var(--od-bg)] px-3 text-[14px] font-medium text-[var(--od-text)] focus:border-[#D91842] focus:outline-none"
          >
            <option value="ALL">{isVi ? "Tất cả quốc gia" : "All countries"}</option>
            {availableCountries.map((code) => (
              <option key={code} value={code}>
                {COUNTRY_NAMES[code] || code}
              </option>
            ))}
            <option value="NOT_LISTED">
              {isVi ? "Quốc gia của tôi chưa có" : "My country isn’t listed"}
            </option>
          </select>
        </div>
      </div>

      {/* Category Pills Row */}
      {showCategoryPills && (
        <div className="mt-5 flex flex-wrap gap-2">
          {(["All", ...ALL_CATEGORIES] as const).map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCatClick(cat)}
                className={cn(
                  "rounded-[6px] border px-3.5 py-2 text-[13px] font-medium transition-colors cursor-pointer",
                  active
                    ? "border-[#D91842] bg-[var(--od-action-soft)] text-[var(--od-action-content)] font-semibold"
                    : "border-[var(--od-border)] bg-[var(--od-bg)] text-[var(--od-text)] hover:border-[var(--od-border-strong)]"
                )}
              >
                {getCategoryLabel(cat, isVi)}
              </button>
            );
          })}
        </div>
      )}

      {/* Exact Country Helper Disclaimer */}
      <p className="mt-5 border-t border-[var(--od-border)] pt-5 max-w-2xl text-[13px] leading-[1.55] text-[var(--od-text-muted)]">
        {isVi
          ? "Bộ lọc quốc gia dựa trên thị trường kinh doanh được từng nhà cung cấp công bố, không phải danh sách quốc gia nơi khách hàng của bạn có thể đặt hàng. Các nhà cung cấp chưa công bố danh sách quốc gia sẽ hiển thị khi không chọn quốc gia."
          : "Country filtering uses each provider’s documented business markets, not the countries your customers can order from. Providers without a published country list appear when no country is selected."}
      </p>

      {/* Dynamic Count */}
      <p className="mt-4 font-mono text-[12px] text-[var(--od-text-muted)]">
        {filtered.length} {countNoun}
      </p>

      {/* Results or Empty / Country Not Listed Prompt */}
      {selectedCountry === "NOT_LISTED" ? (
        <div className="mt-6 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-8 max-w-2xl">
          <h3 className="text-[18px] font-bold text-[var(--od-text)]">
            {isVi ? "Không thấy quốc gia của bạn trong danh sách?" : "Don’t see your country listed?"}
          </h3>
          <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
            {isVi
              ? "Hãy cho chúng tôi biết quốc gia kinh doanh, đơn vị tiền tệ và nhà cung cấp nội địa bạn dùng — đội ngũ chúng tôi sẽ xác nhận phạm vi hỗ trợ hoặc thiết kế tích hợp cho dự án của bạn."
              : "Tell us your business country, currencies, and local providers — our team will confirm coverage or scope a connection for your project."}
          </p>
          <button
            type="button"
            onClick={() => openDemoModal("Integration country inquiry")}
            className="mt-4 inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#D91842] px-4 py-2 text-[13.5px] font-semibold text-white hover:bg-[#B8123A] cursor-pointer"
          >
            {isVi ? `Liên hệ ${BRAND}` : `Talk to ${BRAND}`}
          </button>
        </div>
      ) : visibleItems.length === 0 ? (
        <div className="mt-6 rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-8 text-center">
          <p className="text-[15px] font-semibold text-[var(--od-text)]">
            {isVi ? "Không tìm thấy tích hợp phù hợp với bộ lọc." : "No integrations match that filter."}
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedCountry("ALL");
              setSelectedCategory("All");
            }}
            className="mt-3 text-[13.5px] font-semibold text-[var(--od-action-content)] hover:underline cursor-pointer"
          >
            {isVi ? "Đặt lại bộ lọc" : "Reset filters"}
          </button>
        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <IntegrationProviderCard key={`${item.category}-${item.id}`} item={item} />
            ))}
          </div>

          {!showAll && filtered.length > defaultVisibleCount && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--od-border)] bg-[var(--od-bg)] px-5 py-2.5 text-[14px] font-semibold text-[var(--od-text)] hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] cursor-pointer"
              >
                {isVi
                  ? `Hiển thị tất cả ${filtered.length} ${countNoun}`
                  : `Show all ${filtered.length} ${countNoun}`}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/** Exact 5-step bidirectional PosFlowDiagram from /integrations/pos/ */
export function PosFlowDiagram() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  return (
    <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-5 sm:p-8">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
        {/* Left: Your POS */}
        <div className="lg:col-span-2 flex flex-col justify-center rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-5">
          <Store className="h-5 w-5 text-[var(--od-text-muted)]" />
          <p className="mt-2.5 text-[15px] font-bold text-[var(--od-text)]">
            {isVi ? "POS của bạn" : "Your POS"}
          </p>
        </div>

        {/* Middle-Left: Menu Route (1 & 2) + Order Route (4) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-4">
          {/* Menu Route */}
          <div className="space-y-2.5">
            <p className="font-mono text-[11px] text-[var(--od-text-muted)]">
              {isVi ? "Luồng thực đơn" : "Menu route"}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D91842] text-[11px] font-bold text-white">
                    1
                  </span>
                  <p className="text-[13.5px] font-bold leading-snug text-[var(--od-text)]">
                    {isVi ? "Nhập thực đơn và giá" : "Import menu and prices"}
                  </p>
                </div>
                <p className="pl-7 text-[12.5px] leading-[1.5] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Món ăn, giá bán và tùy chọn bổ sung được đồng bộ trực tiếp từ POS."
                    : "Items, prices, and modifiers are pulled from your POS."}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D91842] text-[11px] font-bold text-white">
                    2
                  </span>
                  <p className="text-[13.5px] font-bold leading-snug text-[var(--od-text)]">
                    {isVi ? "Giữ luôn đồng bộ" : "Keep it in sync"}
                  </p>
                </div>
                <p className="pl-7 text-[12.5px] leading-[1.5] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Webhook tự động bật/tắt món ngay khi POS thay đổi, hoặc chạy đồng bộ theo lịch bạn chọn."
                    : "Webhooks switch items on or off as soon as they change in your POS, or a scheduled sync runs at the interval you choose."}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 pt-1 text-[#D91842]">
              <div className="h-[2px] flex-1 bg-[#D91842]" />
              <ArrowRight className="h-4 w-4 shrink-0" />
            </div>
          </div>

          {/* Order Route */}
          <div className="space-y-2">
            <p className="font-mono text-[11px] text-[var(--od-text-muted)]">
              {isVi ? "Luồng đơn hàng" : "Order route"}
            </p>
            <div className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D91842] text-[11px] font-bold text-white">
                4
              </span>
              <div>
                <p className="text-[13.5px] font-bold text-[var(--od-text)]">
                  {isVi ? "Đẩy thẳng vào POS" : "Injected into your POS"}
                </p>
                <p className="mt-0.5 text-[12.5px] leading-[1.5] text-[var(--od-text-muted)]">
                  {isVi
                    ? "Mỗi đơn trực tuyến đi thẳng vào POS và tuân theo đúng quy trình nhân viên đang sử dụng."
                    : "Each online order goes straight into your POS and follows the workflow your staff already use."}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[#D91842]">
              <ArrowRight className="h-4 w-4 shrink-0 rotate-180" />
              <div className="h-[2px] flex-1 bg-[#D91842]" />
            </div>
          </div>
        </div>

        {/* Center: OPERO Card (Step 3) */}
        <div className="lg:col-span-3 flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] border-t-[3px] border-t-[#D91842] bg-[var(--od-bg)] p-5 shadow-xs">
          <div>
            <div className="border-b border-[var(--od-border)] pb-3">
              <BrandLogo />
            </div>
            <div className="mt-4 flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D91842] text-[11px] font-bold text-white">
                3
              </span>
              <div>
                <p className="text-[14px] font-bold text-[var(--od-text)]">
                  {isVi ? "Làm giàu thực đơn trực tuyến" : "Enrich it online"}
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--od-text-muted)]">
                  {isVi
                    ? `Bổ sung những gì POS chưa có như hình ảnh, danh mục và nhóm món ngay trên Bảng điều khiển ${BRAND}.`
                    : `Add what your POS does not have, such as images, categories, and subcategories, from the ${BRAND} Dashboard.`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Step 5 + Delivery Card */}
        <div className="lg:col-span-3 flex flex-col justify-end gap-4">
          <div className="space-y-1.5">
            <div className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D91842] text-[11px] font-bold text-white">
                5
              </span>
              <div>
                <p className="text-[13.5px] font-bold text-[var(--od-text)]">
                  {isVi ? "Điều phối giao hàng" : "Delivery assigned"}
                </p>
                <p className="mt-0.5 text-[12.5px] leading-[1.5] text-[var(--od-text-muted)]">
                  {isVi
                    ? `Kết hợp với hệ thống giao hàng ${BRAND} để tự động điều phối đối tác vận chuyển hoặc tài xế nội bộ.`
                    : `Combine it with ${BRAND} delivery to auto-assign delivery companies or your in-house drivers.`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[#D91842]">
              <div className="h-[2px] flex-1 bg-[#D91842]" />
              <ArrowRight className="h-4 w-4 shrink-0" />
            </div>
          </div>

          <div className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-4">
            <Route className="h-4 w-4 text-[var(--od-text-muted)]" />
            <p className="mt-2 text-[14px] font-bold leading-snug text-[var(--od-text)]">
              {isVi ? "Đối tác giao hàng hoặc tài xế nội bộ" : "Delivery companies or in-house drivers"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Flow Diagram for /integrations/delivery/ */
export function DeliveryFlowDiagram() {
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  const steps = isVi
    ? [
        {
          num: "1",
          title: "Khách đặt đơn",
          body: "Khách thanh toán trên website, ứng dụng, ki-ốt hoặc tổng đài với khu vực và phí giao hàng được tính sẵn.",
        },
        {
          num: "2",
          title: "Cửa hàng chuẩn bị",
          body: "Chi nhánh xác nhận thời gian chuẩn bị trong Ordering Merchant và đánh dấu đơn sẵn sàng bàn giao.",
        },
        {
          num: "3",
          title: "Điều phối tự động",
          body: `${BRAND} tự động gán nhóm tài xế nội bộ hoặc gọi tài xế từ đối tác giao hàng đã kết nối.`,
        },
        {
          num: "4",
          title: "Theo dõi trực tiếp",
          body: "Trạng thái nhận hàng, lộ trình di chuyển, thông tin tài xế và bằng chứng giao hàng luôn gắn liền với hồ sơ đơn.",
        },
      ]
    : [
        {
          num: "1",
          title: "Order placed",
          body: `Customer checks out on your website, app, kiosk, or phone channel with delivery zone and fee resolved.`,
        },
        {
          num: "2",
          title: "Store prepares",
          body: "The location confirms prep time in Ordering Merchant and marks the order ready for pickup.",
        },
        {
          num: "3",
          title: "Automatic dispatch",
          body: `${BRAND} assigns your in-house driver group or requests a courier from your connected delivery company.`,
        },
        {
          num: "4",
          title: "Live tracking",
          body: "Pickup, route progress, courier details, and proof of delivery stay connected to the order record.",
        },
      ];

  return (
    <div className="rounded-[12px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.num}
            className="rounded-[10px] border border-[var(--od-border)] border-t-[3px] border-t-[#D91842] bg-[var(--od-bg)] p-5"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D91842] text-[12px] font-bold text-white">
                {s.num}
              </span>
              <h3 className="text-[15.5px] font-bold text-[var(--od-text)]">{s.title}</h3>
            </div>
            <p className="mt-3 text-[13.5px] leading-[1.6] text-[var(--od-text-muted)]">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--od-border)] pt-4 text-[12.5px] text-[var(--od-text-muted)]">
        <span className="inline-flex items-center gap-2 font-medium text-[var(--od-text)]">
          <Truck className="h-4 w-4 text-[#D91842]" />
          {isVi
            ? "Hoạt động linh hoạt với đội tài xế riêng, đối tác giao hàng bên thứ ba hoặc mô hình kết hợp theo từng cửa hàng."
            : "Works with your own fleet, third-party delivery companies, or a hybrid setup per store."}
        </span>
        <Link href="/platform/ordering-delivery" className="font-semibold text-[var(--od-action-content)] hover:underline">
          {isVi ? "Khám phá Ordering Delivery →" : "Explore Ordering Delivery →"}
        </Link>
      </div>
    </div>
  );
}

export function IntegrationClosingCta({
  title,
  body,
  docGuide,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  body: string;
  docGuide?: { label: string; href: string };
  primaryCta: { label: string; href?: string; modalTopic?: string };
  secondaryCta: { label: string; href?: string; openChat?: boolean };
}) {
  const { openDemoModal, setChatOpen } = useUiStore();
  const { lang } = useDictionaries();
  const isVi = lang === "vi";

  return (
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
              {title}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#A9A8AF]">{body}</p>
            {docGuide && (
              <p className="mt-4 text-[13.5px] text-[#9A99A1]">
                {isVi ? "Hướng dẫn sản phẩm: " : "Product guide: "}
                <Link
                  href={docGuide.href}
                  className="font-semibold text-[#F9D0D8] underline underline-offset-4 hover:text-white"
                >
                  {docGuide.label}
                </Link>
              </p>
            )}
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
            {primaryCta.href ? (
              <Link
                href={primaryCta.href}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A]"
              >
                {primaryCta.label}
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => openDemoModal(primaryCta.modalTopic || title)}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A] cursor-pointer"
              >
                {primaryCta.label}
              </button>
            )}

            {secondaryCta.openChat ? (
              <button
                type="button"
                onClick={() => setChatOpen(true)}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F] cursor-pointer"
              >
                {secondaryCta.label}
              </button>
            ) : (
              <Link
                href={secondaryCta.href || "/pricing"}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F]"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
