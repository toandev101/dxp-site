export type PillarKey = "build" | "operate" | "connect" | "extend";

export interface NavItem {
  labelKey: string;
  href?: string;
  descriptionKey?: string;
  badge?: string;
  children?: {
    labelKey: string;
    descriptionKey: string;
    href: string;
    icon: string;
    badge?: string;
  }[];
}

export interface ProductItem {
  id: string;
  pillar: PillarKey;
  titleEn: string;
  titleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  highlightsEn: string[];
  highlightsVi: string[];
  icon: string;
  badge?: string;
}

export interface SolutionItem {
  id: string;
  titleEn: string;
  titleVi: string;
  subtitleEn: string;
  subtitleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  metricsEn: string;
  metricsVi: string;
  featuresEn: string[];
  featuresVi: string[];
  icon: string;
  accent: string;
}

export interface IntegrationItem {
  id: string;
  name: string;
  category: "pos" | "payments" | "delivery" | "crm" | "developers";
  descriptionEn: string;
  descriptionVi: string;
  badge?: string;
  initials: string;
  color: string;
}

export interface PricingTier {
  id: string;
  nameEn: string;
  nameVi: string;
  taglineEn: string;
  taglineVi: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  unitEn: string;
  unitVi: string;
  commissionEn: string;
  commissionVi: string;
  popular?: boolean;
  ctaEn: string;
  ctaVi: string;
  featuresEn: string[];
  featuresVi: string[];
}

export interface TestimonialItem {
  id: string;
  quoteEn: string;
  quoteVi: string;
  author: string;
  roleEn: string;
  roleVi: string;
  company: string;
  metricEn: string;
  metricVi: string;
  avatarBg: string;
  initials: string;
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionVi: string;
  answerEn: string;
  answerVi: string;
}
