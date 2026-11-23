export type PlatformSlug =
  | "ordering-web"
  | "ordering-apps"
  | "restaurant-website"
  | "restaurant-app"
  | "ordering-kiosk"
  | "ordering-call-center"
  | "multi-store-ordering"
  | "ai-ordering-agents";

export interface PlatformBreadcrumb {
  label: string;
  href?: string;
}

export interface PlatformCardItem {
  label?: string;
  title: string;
  body: string;
  href?: string;
}

export interface PlatformStepItem {
  num: string;
  title: string;
  body: string;
}

export interface PlatformJourneyStep {
  num: string;
  eyebrow: string;
  title: string;
  body: string;
  setupText: string;
  caption: string;
  previewType: "marketplace-home" | "store-menu" | "checkout" | "order-details";
  extraViews: string[];
}

export interface PlatformCapabilityBand {
  id: string;
  eyebrow?: string;
  title: string;
  body: string;
  where?: string;
  columns: { title: string; items: { title?: string; body: string }[] }[];
  link?: { label: string; href: string };
}

export interface PlatformScopeNote {
  id: string;
  title: string;
  lead: string;
  paragraphs: string[];
  links?: { label: string; href: string }[];
}

export interface PlatformFeatureCategory {
  category: string;
  items: { title: string; description: string; href: string }[];
}

export interface PlatformPageSpec {
  slug: PlatformSlug;
  template: "showcase" | "catalog";
  metaTitle: string;
  metaDescription: string;
  hero: {
    breadcrumbs: PlatformBreadcrumb[];
    title: string;
    lede: string;
    primaryCta: { label: string; href?: string; modalTopic?: string };
    secondaryCta: { label: string; href?: string; openChat?: boolean };
    meta: { text: string; pill?: boolean }[];
    mockupCaption?: string;
    bottomStrip?: { lead: string; items: string[] };
  };
  pageIndex?: { label: string; href: string }[];
  pillars: {
    eyebrow?: string;
    title: string;
    numbered?: boolean;
    items: PlatformCardItem[];
    footnote?: string;
  };
  features?: {
    title: string;
    actionLink?: { label: string; href: string };
    items: PlatformCardItem[];
  };
  featureCatalog?: {
    title: string;
    categories: PlatformFeatureCategory[];
    footnote: string;
    cta: { label: string; href: string };
  };
  journey?: {
    id: string;
    eyebrow: string;
    title: string;
    lead: string;
    steps: PlatformJourneyStep[];
  };
  widgetSection?: {
    id: string;
    eyebrow: string;
    title: string;
    body: string;
    caption: string;
  };
  stepsSplit?: {
    id: string;
    eyebrow: string;
    title: string;
    lead: string;
    steps: PlatformStepItem[];
  };
  screensWalkthrough?: {
    id: string;
    eyebrow: string;
    title: string;
    lead: string;
    caption: string;
    items: { title: string; body: string }[];
  };
  appExampleShowcase?: {
    eyebrow: string;
    title: string;
    body: string;
    faq: { q: string; a: string }[];
    whiteLabelPoints: { title: string; body: string }[];
  };
  capabilityBands?: PlatformCapabilityBand[];
  capabilitiesList?: {
    id: string;
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  scopeNotes?: PlatformScopeNote[];
  connected?: {
    eyebrow: string;
    title: string;
    body: string;
    topRow: string[];
    hubNote: string;
    bottomRow: string[];
  };
  control?: {
    eyebrow: string;
    title: string;
    body: string;
    cards: { title: string; body: string }[];
  };
  related: {
    title: string;
    items: PlatformCardItem[];
  };
  closingCta: {
    title: string;
    body: string;
    docGuide?: { label: string; href: string };
    primaryCta: { label: string; href?: string; modalTopic?: string };
    secondaryCta: { label: string; href?: string; openChat?: boolean };
  };
  bottomUtilityStrip?: {
    text: string;
    linkLabel: string;
    href: string;
  };
}
