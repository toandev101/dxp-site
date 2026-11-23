export type SolutionSlug =
  | "restaurants"
  | "marketplaces"
  | "franchises"
  | "enterprise"
  | "groceries"
  | "agencies-resellers"
  | "startups"
  | "delivery-companies"
  | "software-companies"
  | "middleware"
  | "custom-projects";

export interface SolutionLink {
  label: string;
  href?: string;
  modalTopic?: string;
  openChat?: boolean;
}

export interface SolutionCard {
  label?: string;
  title: string;
  body: string;
  bullets?: string[];
  href?: string;
}

export interface SolutionStep {
  num: string;
  title: string;
  subtitle?: string;
  body: string;
}

export type SolutionSection =
  | {
      type: "cardsGrid";
      id: string;
      eyebrow?: string;
      title: string;
      lead?: string;
      footnote?: string;
      columns?: 2 | 3 | 4;
      actionLink?: SolutionLink;
      items: SolutionCard[];
      extraCallout?: {
        title: string;
        bullets: string[];
      };
    }
  | {
      type: "calloutBanner";
      id: string;
      eyebrow?: string;
      title: string;
      body: string;
      cta?: SolutionLink;
    }
  | {
      type: "stepsSplit";
      id: string;
      eyebrow?: string;
      title: string;
      lead: string;
      sidePanel?: {
        eyebrow?: string;
        title: string;
        bullets: string[];
      };
      steps: SolutionStep[];
    }
  | {
      type: "twoColumnLists";
      id: string;
      eyebrow?: string;
      title: string;
      lead?: string;
      panels: {
        eyebrow?: string;
        title: string;
        subtitle?: string;
        bullets: string[];
      }[];
      steps?: SolutionStep[];
    }
  | {
      type: "connectedMap";
      id: string;
      eyebrow: string;
      title: string;
      body: string;
      topRow: string[];
      hubNote: string;
      bottomRow: string[];
    }
  | {
      type: "comparisonTable";
      id: string;
      eyebrow?: string;
      title: string;
      lead?: string;
      actionLink?: SolutionLink;
      headers: string[];
      rows: string[][];
      links?: { label: string; href: string }[];
    }
  | {
      type: "controlBand";
      id: string;
      eyebrow: string;
      title: string;
      body: string;
      tiles: { title: string; body: string }[];
    }
  | {
      type: "commercialScope";
      id: string;
      eyebrow?: string;
      title: string;
      body: string;
      panelEyebrow?: string;
      panelTitle?: string;
      bullets?: string[];
      kvRows?: { label: string; value: string }[];
      primaryCta?: SolutionLink;
      secondaryCta?: SolutionLink;
    }
  | {
      type: "scopeNotes";
      id: string;
      notes: {
        id: string;
        title: string;
        lead: string;
        paragraphs: string[];
        links?: { label: string; href: string }[];
      }[];
    }
  | {
      type: "faqAccordion";
      id: string;
      eyebrow?: string;
      title: string;
      items: { q: string; a: string }[];
    }
  | {
      type: "relatedGrid";
      id: string;
      title: string;
      items: SolutionCard[];
    };

export interface SolutionPageSpec {
  slug: Exclude<SolutionSlug, "marketplaces">;
  metaTitle: string;
  metaDescription: string;
  hero: {
    breadcrumbLabel: string;
    eyebrow?: string;
    title: string;
    lede: string;
    primaryCta: SolutionLink;
    secondaryCta?: SolutionLink;
    meta: string[];
    bottomStrip?: {
      lead: string;
      logos?: string[];
    };
  };
  sections: SolutionSection[];
  closingCta: {
    title: string;
    body: string;
    docGuide?: { label: string; href: string };
    primaryCta: SolutionLink;
    secondaryCta?: SolutionLink;
  };
}
