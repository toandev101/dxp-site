export type CustomerSegment =
  | "Restaurant groups"
  | "Restaurant brands"
  | "Delivery businesses"
  | "Marketplaces & retail";

export type CustomerRegion =
  | ""
  | "Latin America"
  | "North America"
  | "Europe"
  | "Africa"
  | "Asia";

export interface CustomerStoryCard {
  slug: string;
  name: string;
  segment: CustomerSegment;
  region: CustomerRegion;
  market: string;
  summary: string;
  products: string[];
  hasFullPage?: boolean;
}

export const CUSTOMER_SEGMENTS: ("All" | CustomerSegment)[] = [
  "All",
  "Restaurant groups",
  "Restaurant brands",
  "Delivery businesses",
  "Marketplaces & retail",
];

export const CUSTOMER_REGIONS: { value: CustomerRegion; label: string }[] = [
  { value: "", label: "All regions" },
  { value: "Latin America", label: "Latin America" },
  { value: "North America", label: "North America" },
  { value: "Europe", label: "Europe" },
  { value: "Africa", label: "Africa" },
  { value: "Asia", label: "Asia" },
];

export const ALL_CUSTOMERS: CustomerStoryCard[] = [
  {
    slug: "alsea",
    name: "Alsea",
    segment: "Restaurant groups",
    region: "Latin America",
    market: "Mexico · Colombia",
    summary: "The WOW+ app, ten brand storefronts, call centers, and delivery for a multi-brand restaurant operator.",
    products: ["Ordering Web", "Ordering Apps", "Call Center", "Delivery", "Loyalty & offers"],
    hasFullPage: true,
  },
  {
    slug: "archies-colombia",
    name: "Archie's Colombia",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Colombia",
    summary:
      "A faster, redesigned ordering website with custom product options, promotions, and in-house and Rappi delivery.",
    products: ["Ordering Web", "Delivery"],
  },
  {
    slug: "bookelu",
    name: "Bookelu",
    segment: "Marketplaces & retail",
    region: "",
    market: "",
    summary:
      "Bookelu launched a branded website and app where customers book beauty and wellness services in one place.",
    products: ["Ordering Web", "Ordering Apps", "Marketplace"],
  },
  {
    slug: "burger-king-cyprus",
    name: "Burger King Cyprus",
    segment: "Restaurant brands",
    region: "Europe",
    market: "Cyprus",
    summary: "A branded website and customer app with built-in delivery logistics and marketing and loyalty tools.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "burger-king",
    name: "Burger King Mexico",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Mexico",
    summary: "Self-ordering kiosks trialed at an airport and deployed across multiple stores, plus online ordering.",
    products: ["Ordering Kiosk", "Ordering Web", "Loyalty & offers"],
  },
  {
    slug: "chilis-mexico",
    name: "Chili's Mexico",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Mexico",
    summary:
      "A responsive ordering website matching its US brand, with marketing and loyalty tools and built-in delivery logistics.",
    products: ["Ordering Web", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "coldstone",
    name: "Cold Stone Creamery",
    segment: "Restaurant brands",
    region: "Africa",
    market: "Nigeria",
    summary:
      "A branded website and customer app for customizable ice cream, with built-in delivery logistics and loyalty tools.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "dominos-mexico-and-colombia",
    name: "Domino's Pizza",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Mexico · Colombia",
    summary:
      "Call center software with caller recognition, agent handoffs, secure card entry, and a menu new agents learn fast.",
    products: ["Call Center", "Delivery"],
  },
  {
    slug: "eatngo",
    name: "EatN'Go",
    segment: "Restaurant groups",
    region: "Africa",
    market: "Nigeria",
    summary: "Direct web and app ordering for Cold Stone Creamery and Pinkberry in Nigeria, with delivery and campaigns.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "el-porton-mexico",
    name: "El Portón",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Mexico",
    summary: "El Portón runs a branded, responsive ordering website with catering, delivery logistics, and loyalty tools.",
    products: ["Ordering Web", "Catering", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "foodplanet",
    name: "Food Planet",
    segment: "Delivery businesses",
    region: "Europe",
    market: "Sweden",
    summary:
      "Own ordering website, customer app, driver app, and store app in Karlshamn, Sweden, replacing manual delivery.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "gomamam",
    name: "GoMamam",
    segment: "Marketplaces & retail",
    region: "Asia",
    market: "Brunei",
    summary:
      "A six-category delivery marketplace in Brunei, from food to groceries, pharmacy, and electronics, on web and app.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Marketplace"],
  },
  {
    slug: "gotchew",
    name: "GotChew",
    segment: "Delivery businesses",
    region: "North America",
    market: "United States",
    summary: "Own ordering website, customer app, delivery app, and store app for restaurant delivery in Massachusetts.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "hungrydodo",
    name: "HungryDodo",
    segment: "Marketplaces & retail",
    region: "Africa",
    market: "Mauritius",
    summary: "A restaurant delivery marketplace in Mauritius with its own ordering website, customer app, and offers.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Catering", "Marketplace"],
  },
  {
    slug: "itsjustwings",
    name: "It's Just Wings Mexico",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Mexico",
    summary: "A branded ordering website and customer app with offers, loyalty, and built-in delivery logistics.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "italiannis-mexico",
    name: "Italianni's Mexico",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Mexico",
    summary:
      "A branded, responsive ordering website for delivery, pickup, and catering, designed to match the US experience.",
    products: ["Ordering Web", "Delivery", "Loyalty & offers", "Catering"],
  },
  {
    slug: "kfc-albania",
    name: "KFC Albania",
    segment: "Restaurant brands",
    region: "Europe",
    market: "Albania",
    summary:
      "A branded website, customer app, store and driver apps, and delivery dashboards for KFC's online orders in Albania.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "kfc-kosova",
    name: "KFC Kosova",
    segment: "Restaurant brands",
    region: "Europe",
    market: "Kosovo",
    summary:
      "A branded website, customer app, store and driver apps, and delivery dashboards for KFC's online orders in Kosovo.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "kfc-macedonia",
    name: "KFC Macedonia",
    segment: "Restaurant brands",
    region: "Europe",
    market: "Macedonia",
    summary:
      "A branded website, customer app, kiosk, store and driver apps, and delivery dashboards for KFC in Macedonia.",
    products: ["Ordering Web", "Ordering Apps", "Ordering Kiosk", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "mylocal",
    name: "MyLocal",
    segment: "Marketplaces & retail",
    region: "Europe",
    market: "Ireland",
    summary:
      "MyLocal sells food, alcohol, and groceries from local businesses through a branded website and iOS and Android app.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers", "Marketplace"],
  },
  {
    slug: "p-f-changs",
    name: "P.F. Chang's Mexico",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Mexico",
    summary: "A branded ordering website with takeout and catering menus, delivery automation, and targeted promotions.",
    products: ["Ordering Web", "Catering", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "piki",
    name: "Piki",
    segment: "Delivery businesses",
    region: "Africa",
    market: "Tanzania",
    summary: "A branded delivery marketplace with a website, customer app, driver app, and store app.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers", "Marketplace"],
  },
  {
    slug: "pinknberrry",
    name: "Pinkberry",
    segment: "Restaurant brands",
    region: "Africa",
    market: "Nigeria",
    summary: "A branded ordering website and customer app with promotions, loyalty tools, and built-in delivery logistics.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "pupuseria-suiza",
    name: "Pupusería Suiza",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "El Salvador",
    summary:
      "A branded ordering website, customer app, driver app, and store app with delivery automation and loyalty tools.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "quickdelivery",
    name: "Quickdelivery",
    segment: "Delivery businesses",
    region: "",
    market: "",
    summary: "A branded ordering website and customer app with route planning, real-time tracking, offers, and loyalty.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "sauce-capital",
    name: "Sauce Capital",
    segment: "Restaurant groups",
    region: "",
    market: "",
    summary: "Sauce Capital runs its website, the Chew app, delivery, and special offers for its self-owned hybrid kitchens.",
    products: ["Ordering Web", "Ordering Apps", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "starbucks-mexico",
    name: "Starbucks Mexico",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Mexico",
    summary: "Starbucks Mexico runs online orders, catering requests, and delivery on a branded website and customer app.",
    products: ["Ordering Web", "Ordering Apps", "Catering", "Delivery", "Loyalty & offers"],
  },
  {
    slug: "the-cheesecake-factory",
    name: "The Cheesecake Factory Mexico",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Mexico",
    summary: "A branded ordering website for Mexico with catering, offers, loyalty, and built-in delivery logistics.",
    products: ["Ordering Web", "Delivery", "Loyalty & offers", "Catering"],
  },
  {
    slug: "vips",
    name: "Vips Mexico",
    segment: "Restaurant brands",
    region: "Latin America",
    market: "Mexico",
    summary:
      "A customized ordering website with delivery management, promotions, and call center ordering for Vips in Mexico.",
    products: ["Ordering Web", "Delivery", "Call Center", "Loyalty & offers", "Catering"],
  },
  {
    slug: "watson",
    name: "Watson",
    segment: "Marketplaces & retail",
    region: "Europe",
    market: "Spain",
    summary:
      "Watson runs a responsive ordering website with delivery and special offers for hundreds of listed stores in Spain.",
    products: ["Ordering Web", "Delivery", "Loyalty & offers", "Marketplace"],
  },
];

export const ALSEA_BRAND_SLUGS = [
  "archies-colombia",
  "burger-king",
  "chilis-mexico",
  "dominos-mexico-and-colombia",
  "el-porton-mexico",
  "italiannis-mexico",
  "p-f-changs",
  "starbucks-mexico",
  "the-cheesecake-factory",
  "vips",
];
