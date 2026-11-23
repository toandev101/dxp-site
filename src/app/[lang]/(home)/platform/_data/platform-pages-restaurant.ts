import type { PlatformFeatureCategory, PlatformPageSpec } from "./platform-types";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

const RESTAURANT_WEBSITE_CATEGORIES: PlatformFeatureCategory[] = [
  {
    category: "Ordering experience",
    items: [
      { title: "Branded ordering website", description: "An ordering website with your brand on your own domain.", href: "/platform/ordering-web" },
      { title: "Progressive web app", description: "Customers add your ordering site to their home screen for quick reordering.", href: "/platform/ordering-web" },
      { title: "QR code ordering", description: "Customers scan a QR code to order from the table, counter, or curbside.", href: "/products#build" },
      { title: "Order types", description: "Delivery, pickup, dine in, curbside, and drive thru, configured per store.", href: "/products#build" },
      { title: "ASAP and scheduled orders", description: "Customers order for as soon as possible or for a specific date and time.", href: "/platform/ordering-web#website-future-orders" },
      { title: "Catering orders", description: "Take large and planned orders with catering workflows.", href: "/products#build" },
      { title: "Table reservations", description: "Customers book a table, and the reservation reaches the store team.", href: "/products#build" },
      { title: "Appointments and services", description: "Sell services that customers book for a time slot.", href: "/products#build" },
      { title: "School ordering", description: "Parents order school meals for each student, with menus filtered by allergies and dietary tags.", href: "/products#build" },
      { title: "B2B ordering", description: "Sell wholesale and direct to consumers from one dashboard and storefront.", href: "/solutions#franchises" },
      { title: "Website ordering widgets", description: "Add ordering to an existing website with embeddable widgets.", href: "/platform/ordering-web#widget" },
      { title: "Sell on social media", description: "Share ordering links on Facebook, Instagram, TikTok, and other social channels.", href: "/products#build" },
      { title: "Ordering from Google", description: "Connect your Google Business Profile so customers can start an order from search.", href: "/integrations" },
      { title: "Customer accounts", description: "Each customer keeps an account with saved addresses, cards, and order history.", href: "/products#build" },
      { title: "Login options", description: "Sign in with email or phone and password, or a one-time code by email or SMS.", href: "/products#build" },
      { title: "Social login", description: "Customers sign up and log in with Facebook, Google, or Apple.", href: "/integrations" },
      { title: "Personalized home page", description: "A home page with banners, ongoing orders, and the stores that serve the customer’s address.", href: "/products#build" },
      { title: "Search and filters", description: "Search and browse by product, store, and category, with filters that include price.", href: "/products#build" },
      { title: "Direct store links", description: "Share a link that opens a specific store page.", href: "/platform/multi-store-ordering" },
      { title: "Favorites", description: "Customers save favorite orders, products, and stores.", href: "/products#build" },
      { title: "Quick reorder", description: "Customers repeat a previous order in a few taps from their order history.", href: "/products#build" },
      { title: "Personalized recommendations", description: "Suggest items based on what each customer ordered before.", href: "/products#build" },
      { title: "Multi-language ordering", description: "Translate your platform, stores, and products into several languages.", href: "/products#build" },
      { title: "Contactless handoff", description: "Offer contactless drop-off and curbside pickup.", href: "/products#operate" },
      { title: "Live order tracking", description: "Customers follow the order status and the driver’s location in real time.", href: "/products#operate" },
      { title: "Shareable order confirmation", description: "Share an order confirmation link with guests.", href: "/products#build" },
      { title: "Help section", description: "A built-in guide that helps customers use your ordering channels.", href: "/platform/ordering-web#help-section" },
    ],
  },
  {
    category: "Menus and catalog",
    items: [
      { title: "Parent categories", description: "Group categories under parent categories to organize large menus.", href: "/products#operate" },
      { title: "Product images and gallery", description: "Show several images for each product.", href: "/products#operate" },
      { title: "Product videos", description: "Add videos to product pages.", href: "/products#operate" },
      { title: "Featured products", description: "Pin selected products to the top of the list.", href: "/products#operate" },
      { title: "Product labels and badges", description: "Mark products as new, on sale, running low, or out of stock.", href: "/products#operate" },
      { title: "WebP images", description: "Images are served in the lightweight WebP format.", href: "/products#build" },
    ],
  },
  {
    category: "Cart, checkout, and payments",
    items: [
      { title: "Guest checkout", description: "Customers order without creating an account.", href: "/products#build" },
      { title: "One-screen checkout", description: "A checkout and confirmation page designed to finish the order in one screen.", href: "/platform/ordering-web#cart-and-checkout" },
      { title: "Cart editing", description: "Change quantities and options, remove items, or empty the cart in a few clicks.", href: "/products#build" },
      { title: "Cart sync across channels", description: "The cart stays in sync when the customer switches between web and app.", href: "/platform/restaurant-app" },
      { title: "Real-time cart validation", description: "Checks availability, address changes, and promotions before the order is placed.", href: "/products#build" },
      { title: "Saved addresses", description: "Customers save several addresses and choose one at checkout.", href: "/products#build" },
      { title: "Out-of-zone address alerts", description: "Customers are told when an address is outside the delivery area.", href: "/platform/multi-store-ordering" },
      { title: "Driver tips", description: "Preset tips as a percentage or fixed amount, plus a custom tip option.", href: "/products#operate" },
      { title: "Online card payments", description: "Accept cards online through Stripe and other supported processors.", href: "/integrations" },
      { title: "Saved cards", description: "Customers save a card and pay with one click.", href: "/integrations" },
      { title: "Custom checkout fields", description: "Ask customers for extra details at checkout, such as notes, preferences, or order information.", href: "/products#build" },
      { title: "Apple Pay and Google Pay", description: "Wallet payments processed through Stripe.", href: "/integrations" },
      { title: "PayPal", description: "Customers pay with PayPal.", href: "/integrations" },
      { title: "Local payment methods", description: "Redirect-based local payment methods supported by Stripe.", href: "/integrations" },
      { title: "Cash and card on delivery", description: "Accept cash or card when the order is delivered or picked up.", href: "/integrations" },
    ],
  },
  {
    category: "Order management",
    items: [
      { title: "Order notifications", description: "Automatic order emails and push notifications keep customers updated.", href: "/products#operate" },
      { title: "In-order chat", description: "Customers, stores, drivers, and admins message each other inside each order.", href: "/products#operate" },
    ],
  },
  {
    category: "Stores and locations",
    items: [
      { title: "Store page layouts", description: "Choose a layout for each store page.", href: "/platform/multi-store-ordering" },
      { title: "Store SEO and social links", description: "SEO settings and social profiles for each store.", href: "/platform/ordering-web#seo" },
      { title: "Channels per store or brand", description: "Give individual stores or franchise brands their own website and app channels.", href: "/platform/multi-store-ordering" },
      { title: "Multi-country platform", description: "Country domains that send each customer to the right site automatically.", href: "/solutions#franchises" },
    ],
  },
  {
    category: "Delivery and drivers",
    items: [
      { title: "Advanced delivery estimates", description: "More precise delivery time estimates for customers.", href: "/products#operate" },
    ],
  },
  {
    category: "Marketing and loyalty",
    items: [
      { title: "Ad banners", description: "Promotional banners in your ordering channels.", href: "/products#build" },
      { title: "Upselling", description: "Recommend products before checkout.", href: "/products#build" },
      { title: "Cash wallet and cashback", description: "Customers keep a cash balance and earn cashback you manage from the dashboard.", href: "/products#operate" },
      { title: "Points wallet", description: "Customers earn and spend reward points you manage from the dashboard.", href: "/products#operate" },
      { title: "Loyalty levels", description: "Tiered loyalty programs that reward repeat customers.", href: "/products#operate" },
      { title: "Gift cards", description: "Sell gift cards that customers redeem on their orders.", href: "/products#operate" },
      { title: "Referral invitations", description: "Customers invite friends with a link; when a friend signs up, both earn points or money.", href: "/products#operate" },
      { title: "SEO settings", description: "Titles, descriptions, and URLs for your platform, products, and categories.", href: "/platform/ordering-web#seo" },
    ],
  },
  {
    category: "Reports and reviews",
    items: [
      { title: "Reviews and ratings", description: "Customers review stores, products, and drivers, and drivers and admins rate customers.", href: "/products#operate" },
    ],
  },
  {
    category: "Administration and security",
    items: [
      { title: "Themes and branding", description: "Adjust the colors and look of your ordering channels.", href: "/#control" },
      { title: "Content management", description: "Edit pages, the home page, the footer, and help content with the built-in CMS.", href: "/products#operate" },
      { title: "Custom domain and SSL", description: "Use your own domain, protected with an SSL certificate.", href: "/#control" },
      { title: "Bot protection", description: "reCAPTCHA protects signup and login from bots.", href: "/integrations" },
      { title: "Verified signups", description: "Require email and phone verification after signup.", href: "/integrations" },
    ],
  },
  {
    category: "Integrations and developer tools",
    items: [
      { title: "Analytics and tracking", description: "Google Analytics with ecommerce tracking, Meta Pixel, and Segment.", href: "/integrations" },
    ],
  },
];

const WEBSITE_ONLY_TITLES = new Set([
  "Branded ordering website",
  "Progressive web app",
  "QR code ordering",
  "B2B ordering",
  "Website ordering widgets",
  "Sell on social media",
  "Ordering from Google",
  "Direct store links",
  "Store SEO and social links",
  "Multi-country platform",
  "SEO settings",
  "Content management",
  "Custom domain and SSL",
]);

const RESTAURANT_APP_CATEGORIES: PlatformFeatureCategory[] = RESTAURANT_WEBSITE_CATEGORIES.map((cat) => {
  const filtered = cat.items.filter((item) => !WEBSITE_ONLY_TITLES.has(item.title));
  if (cat.category === "Ordering experience") {
    return {
      category: cat.category,
      items: [
        {
          title: "Branded customer apps",
          description: "iOS and Android ordering apps with your brand, published to your developer accounts.",
          href: "/platform/ordering-apps",
        },
        ...filtered,
      ],
    };
  }
  return { category: cat.category, items: filtered };
});

export const RESTAURANT_WEBSITE_SPEC: PlatformPageSpec = {
  slug: "restaurant-website",
  template: "catalog",
  metaTitle: "Restaurant Online Ordering Website",
  metaDescription:
    "A branded online ordering website for your restaurant, on your own domain, connected to your menu, payments, and orders.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Restaurant customer website" },
    ],
    title: "Your restaurant’s ordering website, on your own domain.",
    lede: "Customers order for delivery, pickup, dine in, curbside, or drive thru from a website with your brand. Menus, payments, and orders stay connected to the Dashboard and Merchant app your team uses.",
    primaryCta: { label: "See a live demo", href: "/demo#restaurant" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "Your brand and domain" },
      { text: "Every order type" },
      { text: "Included in every plan" },
    ],
  },
  pillars: {
    title: "What the website gives your customers.",
    numbered: false,
    items: [
      { title: "Your brand, your domain", body: "Use your own domain with an SSL certificate, and adjust colors and content with themes and the built-in CMS." },
      { title: "Every way to order", body: "Delivery, pickup, dine in, curbside, drive thru, and QR code ordering, for as soon as possible or a scheduled time." },
      { title: "A short path to checkout", body: "Guest checkout, saved cards, Apple Pay and Google Pay, and real-time checks on availability and promotions." },
      { title: "Reasons to come back", body: "Customer accounts, quick reorder, favorites, wallets, and loyalty levels." },
    ],
  },
  featureCatalog: {
    title: "70 features, included in every plan.",
    categories: RESTAURANT_WEBSITE_CATEGORIES,
    footnote: "10 more features work across the whole platform. The feature catalog lists them all.",
    cta: { label: "Open in the feature catalog", href: "/pricing#pricing-features" },
  },
  related: {
    title: "Other products in ordering channels",
    items: [
      { title: "Restaurant customer app", body: "Your restaurant’s branded iOS and Android app.", href: "/platform/restaurant-app" },
      { title: "Marketplace customer website", body: "A multi-store ordering website for your marketplace.", href: "/platform/ordering-web" },
      { title: "Marketplace customer app", body: "Your marketplace on iOS and Android.", href: "/platform/ordering-apps" },
      { title: "Kiosk", body: "Self-ordering screens inside the store.", href: "/platform/ordering-kiosk" },
      { title: "Call center software", body: "Phone orders taken by your agents.", href: "/platform/ordering-call-center" },
      { label: "New", title: "Web AI Ordering", body: "Customers order through conversations inside your online ordering experience.", href: "/platform/ai-ordering-agents" },
      { label: "New", title: "WhatsApp AI Ordering", body: "Customers order through WhatsApp conversations.", href: "/platform/ai-ordering-agents" },
    ],
  },
  closingCta: {
    title: "See it working with your operation.",
    body: "Tell us how you sell and deliver, and we will walk through the products and features that fit.",
    docGuide: { label: "Website overview", href: "/demo#restaurant" },
    primaryCta: { label: `Talk to ${BRAND}`, modalTopic: "Restaurant Website · Guided demo" },
    secondaryCta: { label: "See pricing", href: "/pricing" },
  },
};

export const RESTAURANT_APP_SPEC: PlatformPageSpec = {
  slug: "restaurant-app",
  template: "catalog",
  metaTitle: "Restaurant customer app",
  metaDescription:
    "Your restaurant’s branded ordering app for iOS and Android, connected to the same menu, cart, payments, and orders as your website.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Restaurant customer app" },
    ],
    title: "Your restaurant’s own app on iOS and Android.",
    lede: "A branded ordering app published to your Apple and Google developer accounts. It uses the same menu, cart, payments, and orders as your website.",
    primaryCta: { label: "See a live demo", href: "/demo#restaurant" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "iOS and Android" },
      { text: "Published to your developer accounts" },
      { text: "Included in every plan" },
    ],
  },
  pillars: {
    title: "What the app gives your customers.",
    numbered: false,
    items: [
      { title: "Your brand in the app stores", body: "The app carries your name and visual identity and is published to your own developer accounts. New versions are rebuilt with one click and resubmitted to the stores." },
      { title: "One menu and one cart", body: "Menus, prices, and the cart stay in sync with your website in real time, so customers can move between them." },
      { title: "Every order, followed", body: "Order notifications, live tracking with the driver’s location, and chat inside each order." },
      { title: "Built for repeat orders", body: "Quick reorder, favorites, personalized recommendations, wallets, and loyalty levels." },
    ],
    footnote: "Developer accounts and app-store fees are listed on Pricing.",
  },
  featureCatalog: {
    title: "58 features, included in every plan.",
    categories: RESTAURANT_APP_CATEGORIES,
    footnote: "10 more features work across the whole platform. The feature catalog lists them all.",
    cta: { label: "Open in the feature catalog", href: "/pricing#pricing-features" },
  },
  capabilitiesList: {
    id: "capabilities",
    eyebrow: "Stay in touch",
    title: "Keep customers coming back after they order.",
    items: [
      { title: "Push notifications", body: "Send push notifications after an order to bring customers back for the next one." },
      { title: "Hours, location, and contact in the app", body: "Show opening hours, address, and contact details on the app so customers don’t have to look elsewhere." },
    ],
  },
  related: {
    title: "Other products in ordering channels",
    items: [
      { title: "Restaurant customer website", body: "Your restaurant’s branded ordering website.", href: "/platform/restaurant-website" },
      { title: "Marketplace customer website", body: "A multi-store ordering website for your marketplace.", href: "/platform/ordering-web" },
      { title: "Marketplace customer app", body: "Your marketplace on iOS and Android.", href: "/platform/ordering-apps" },
      { title: "Kiosk", body: "Self-ordering screens inside the store.", href: "/platform/ordering-kiosk" },
      { title: "Call center software", body: "Phone orders taken by your agents.", href: "/platform/ordering-call-center" },
      { label: "New", title: "Web AI Ordering", body: "Customers order through conversations inside your online ordering experience.", href: "/platform/ai-ordering-agents" },
      { label: "New", title: "WhatsApp AI Ordering", body: "Customers order through WhatsApp conversations.", href: "/platform/ai-ordering-agents" },
    ],
  },
  closingCta: {
    title: "See it working with your operation.",
    body: "Tell us how you sell and deliver, and we will walk through the products and features that fit.",
    docGuide: { label: "Customer App overview", href: "/demo#restaurant" },
    primaryCta: { label: `Talk to ${BRAND}`, modalTopic: "Restaurant App · Guided demo" },
    secondaryCta: { label: "See pricing", href: "/pricing" },
  },
};
