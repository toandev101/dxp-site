export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  updatedAt: string;
  author: string;
  authorRole: string;
  excerpt: string;
  featured?: boolean;
  hasFullPage?: boolean;
  coverVariant: "ai" | "franchise" | "local" | "analytics" | "reputation" | "operations";
  badgeText?: string;
}

export const BLOG_CATEGORIES: { name: string; count: number }[] = [
  { name: "AI Search Optimization", count: 41 },
  { name: "AI Marketing", count: 17 },
  { name: "Artificial Intelligence", count: 30 },
  { name: "Google Business Profile", count: 61 },
  { name: "Local SEO", count: 54 },
  { name: "Business Listing Management", count: 45 },
  { name: "Online Reputation Management", count: 103 },
  { name: "Online Reviews", count: 120 },
  { name: "Customer Experience", count: 86 },
  { name: "Digital Marketing", count: 132 },
  { name: "Business Best Practices", count: 91 },
  { name: "Marketing Automation", count: 20 },
  { name: "Competitor Analysis", count: 15 },
  { name: "Software Integrations", count: 8 },
];

export const LEAD_FEATURED_POST: BlogPost = {
  slug: "state-of-ai-search",
  title: "State of AI Search 2026: The Enterprise Multi-Location Brand Report",
  category: "AI Search Optimization",
  readTime: "17 min read",
  updatedAt: "Aug 20, 2026",
  author: "Avtar Madan",
  authorRole: "Global Director - SEO",
  excerpt:
    "AI search in 2026 delivers a single, citation-backed answer instead of ranked links. See how enterprise multi-location brands earn top citations with structured content, accurate profiles, and verifiable trust signals.",
  featured: true,
  hasFullPage: true,
  coverVariant: "ai",
  badgeText: "2026 Benchmark Report",
};

export const FEATURED_ARTICLES: BlogPost[] = [
  {
    slug: "google-business-profile-for-franchises",
    title: "Google Business Profile for franchises: A guide to managing every location at scale",
    category: "Google Business Profile",
    readTime: "25 min read",
    updatedAt: "Aug 17, 2026",
    author: "Avtar Madan",
    authorRole: "Global Director - SEO",
    excerpt:
      "How multi-location franchise teams govern categories, hours, store attributes, and verification across hundreds or thousands of locations without losing local accuracy.",
    featured: true,
    coverVariant: "franchise",
    badgeText: "Franchise Playbook",
  },
  {
    slug: "ai-visibility-mentions-to-local-decisions",
    title: "You’re optimizing for the wrong AI: The pivot from mentions to local decisions",
    category: "AI Search Optimization",
    readTime: "18 min read",
    updatedAt: "Aug 20, 2026",
    author: "Avtar Madan",
    authorRole: "Global Director - SEO",
    excerpt:
      "Brand mentions alone do not drive store visits. Learn how answer engines evaluate location-level data, hours, menus, and review depth when making local recommendations.",
    featured: true,
    coverVariant: "ai",
    badgeText: "AI Strategy",
  },
  {
    slug: "google-spam-policies-ai-search",
    title: "Google spam policies now apply to AI search results. Here’s what multi-location brands need to know",
    category: "Local SEO",
    readTime: "9 min read",
    updatedAt: "Aug 20, 2026",
    author: "Editorial Team",
    authorRole: "Search & Compliance",
    excerpt:
      "Scaled template spam and thin doorway pages now risk exclusion from both organic rankings and AI Overviews. Here is how to build durable location pages.",
    featured: true,
    coverVariant: "local",
    badgeText: "Policy Update",
  },
  {
    slug: "search-measurement-gap-ai-era",
    title: "Your search impressions fell 54%. Your customers still found you. That’s not a coincidence.",
    category: "AI Marketing",
    readTime: "12 min read",
    updatedAt: "Sep 9, 2026",
    author: "Editorial Team",
    authorRole: "Growth Analytics",
    excerpt:
      "Zero-click AI answers are reshaping attribution. Discover the new metrics enterprise teams use to connect answer presence with store conversions.",
    featured: true,
    coverVariant: "analytics",
    badgeText: "Measurement",
  },
];

export const DIRECTORY_POSTS: BlogPost[] = [
  {
    slug: "listings-management-software-uk",
    title: "Listings management software UK: A guide for multi-location brands",
    category: "Business Listing Management",
    readTime: "16 min read",
    updatedAt: "Nov 20, 2026",
    author: "Editorial Team",
    authorRole: "Enterprise Listings",
    excerpt:
      "Compare how multi-location operators synchronize hours, services, and address data across maps, directories, and AI answer engines in the UK.",
    coverVariant: "local",
    badgeText: "Listings Guide",
  },
  {
    slug: "multi-location-listings-uk",
    title: "Multi-location listings management UK: How to keep every site accurate",
    category: "Business Listing Management",
    readTime: "14 min read",
    updatedAt: "Nov 20, 2026",
    author: "Editorial Team",
    authorRole: "Enterprise Listings",
    excerpt:
      "Prevent data drift across hundreds of storefronts with governed approval workflows, automated conflict checks, and structured location feeds.",
    coverVariant: "operations",
    badgeText: "Operations",
  },
  {
    slug: "answer-engine-optimisation-uk",
    title: "Answer engine optimisation UK: Guide for multi-location brands",
    category: "AI Search Optimization",
    readTime: "13 min read",
    updatedAt: "Nov 20, 2026",
    author: "Avtar Madan",
    authorRole: "Global Director - SEO",
    excerpt:
      "A practical AEO framework for turning service pages, FAQs, and regional landing pages into primary citation sources across ChatGPT, Gemini, and Perplexity.",
    coverVariant: "ai",
    badgeText: "AEO Framework",
  },
  {
    slug: "ai-search-visibility-multi-location-uk",
    title: "AI search visibility for multi-location UK brands: How to track and improve every location",
    category: "AI Search Optimization",
    readTime: "11 min read",
    updatedAt: "Nov 19, 2026",
    author: "Avtar Madan",
    authorRole: "Global Director - SEO",
    excerpt:
      "How to benchmark citation share by city, uncover third-party aggregator gaps, and prioritize owned-content updates per store.",
    coverVariant: "analytics",
    badgeText: "Visibility Tracking",
  },
  {
    slug: "enterprise-reputation-management-uk",
    title: "Enterprise reputation management for multi-location brands in the UK",
    category: "Online Reputation Management",
    readTime: "11 min read",
    updatedAt: "Nov 18, 2026",
    author: "Editorial Team",
    authorRole: "Customer Experience",
    excerpt:
      "Why detailed review sentiment and fast operator replies now act as core verification signals for both customers and large language models.",
    coverVariant: "reputation",
    badgeText: "Reputation",
  },
  {
    slug: "holiday-hours-checklist-multi-location-brands",
    title: "Fix your business holiday hours before AI repeats them",
    category: "Business Best Practices",
    readTime: "8 min read",
    updatedAt: "Nov 19, 2026",
    author: "Editorial Team",
    authorRole: "Local Operations",
    excerpt:
      "Outdated seasonal schedules propagate rapidly through AI answers. Use this pre-holiday checklist to update every channel from one source of truth.",
    coverVariant: "operations",
    badgeText: "Checklist",
  },
  {
    slug: "chatgpt-business-vs-businesses-in-chatgpt",
    title: "ChatGPT Business is not Businesses in ChatGPT",
    category: "Artificial Intelligence",
    readTime: "7 min read",
    updatedAt: "Nov 18, 2026",
    author: "Editorial Team",
    authorRole: "AI Research",
    excerpt:
      "Clarifying the difference between internal workspace AI seats and how external customer-facing discovery recommends your brand inside ChatGPT.",
    coverVariant: "ai",
    badgeText: "AI Discovery",
  },
  {
    slug: "google-my-business-singapore",
    title: "Google Business Profile Singapore: The complete setup & optimisation guide (2026)",
    category: "Google Business Profile",
    readTime: "24 min read",
    updatedAt: "Nov 17, 2026",
    author: "Editorial Team",
    authorRole: "APAC Local SEO",
    excerpt:
      "Step-by-step verification, multilingual attributes, local menu links, and multi-outlet governance for brands operating in Singapore.",
    coverVariant: "franchise",
    badgeText: "Regional Guide",
  },
  {
    slug: "dentist-reviews-uk",
    title: "Dentist reviews UK: A guide for multi-location dental groups",
    category: "Online Reviews",
    readTime: "13 min read",
    updatedAt: "Nov 17, 2026",
    author: "Editorial Team",
    authorRole: "Healthcare & Local",
    excerpt:
      "How multi-site healthcare groups collect compliant patient feedback that builds trust signals across specialist directories and AI answers.",
    coverVariant: "reputation",
    badgeText: "Industry Guide",
  },
  // Page 2 items
  {
    slug: "detail-beats-stars-ai-search-trust",
    title: "A five-star review tells AI nearly nothing. The question you ask customers decides what it learns.",
    category: "Online Reviews",
    readTime: "6 min read",
    updatedAt: "Nov 12, 2026",
    author: "Editorial Team",
    authorRole: "Customer Experience",
    excerpt:
      "Specificity beats star averages. Learn how structured post-order prompts generate review detail that LLMs can actually verify and cite.",
    coverVariant: "reputation",
    badgeText: "Trust Signals",
  },
  {
    slug: "neighborhood-names-ai-search-multi-location",
    title: "One city, many neighborhood names. How storage leaders manage local detail at scale.",
    category: "Local SEO",
    readTime: "5 min read",
    updatedAt: "Nov 10, 2026",
    author: "Editorial Team",
    authorRole: "Local SEO",
    excerpt:
      "Capturing colloquial neighborhood queries without duplicating thin pages across metro areas.",
    coverVariant: "local",
    badgeText: "Local Depth",
  },
  {
    slug: "removery-rebuilding-team-ai-agents",
    title: "The old team shape stopped fitting. Here is how Removery rebuilt around AI agents.",
    category: "AI Marketing",
    readTime: "6 min read",
    updatedAt: "Nov 6, 2026",
    author: "Editorial Team",
    authorRole: "AI Operations",
    excerpt:
      "Inside an enterprise operating shift: pairing governed AI workflows with lean regional teams across 150+ locations.",
    coverVariant: "ai",
    badgeText: "Case Study",
  },
];

export const RELATED_AI_ARTICLES = DIRECTORY_POSTS.slice(9, 12);
