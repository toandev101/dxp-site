import type { SolutionPageSpec } from "./solution-types";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

export const AGENCIES_RESELLERS_SPEC: SolutionPageSpec = {
  slug: "agencies-resellers",
  metaTitle: "Agencies & resellers",
  metaDescription:
    "Offer branded ordering experiences to your clients without building the underlying ordering platform from scratch yourself.",
  hero: {
    breadcrumbLabel: "Agencies & resellers",
    title: "Sell ordering under your brand. We run the infrastructure.",
    lede: `Offer white-label ordering experiences to clients while ${BRAND} provides the platform technology underneath.`,
    primaryCta: { label: "Talk about a partnership", modalTopic: "Agency & reseller partnership" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      "White-label configuration",
      "Your brand at the front",
      "Platform technology underneath",
    ],
    bottomStrip: {
      lead: "White-label software gives agencies a way to bring ordering into a client offer under the agency's brand.",
    },
  },
  sections: [
    {
      type: "cardsGrid",
      id: "problem",
      eyebrow: "The reseller problem",
      title: "Every client wants ordering. Nobody wants to build it twice.",
      columns: 3,
      items: [
        {
          label: "01",
          title: "Custom builds don't scale",
          body: "Each client project starts from zero. Margins shrink with every bug fix, app update and payment change you're asked to absorb.",
        },
        {
          label: "02",
          title: "Plugins break the brand",
          body: "Off-the-shelf ordering widgets carry someone else's logo, someone else's support and someone else's roadmap.",
        },
        {
          label: "03",
          title: "Recurring revenue needs a product",
          body: "Projects end. A platform your clients run their business on gets billed every month, for years.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "how-it-works",
      eyebrow: "How it works",
      title: "Build a clearer client offer.",
      lead: "Start each client conversation with the ordering experience, brand and operating requirements that matter for that business.",
      steps: [
        {
          num: "01",
          title: "Define the client setup",
          body: "Start with the client’s brand, domain, catalog and the ordering experience they need.",
        },
        {
          num: "02",
          title: "White label everything",
          body: "Use a branded ordering site and apps so the customer experience carries your client’s identity.",
        },
        {
          num: "03",
          title: "Shape your client offer",
          body: "Decide how ordering fits alongside the web, POS, payments or marketing services you already provide.",
        },
        {
          num: "04",
          title: "We run the platform",
          body: `${BRAND} maintains the platform technology while your agency stays focused on the customer relationship.`,
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "clients",
      eyebrow: "What your clients get",
      title: "The full platform, under your name.",
      columns: 4,
      actionLink: { label: "Explore the platform", href: "/products" },
      items: [
        {
          label: "Build",
          title: "Branded storefront and apps",
          body: "Give a client an ordering presence that uses its own brand, domain and customer-facing identity.",
        },
        {
          label: "Operate",
          title: "Merchant and delivery",
          body: "Connect the customer experience to the operations that receive and fulfil orders.",
        },
        {
          label: "Connect",
          title: "POS and payments",
          body: "Discuss the POS, payment and delivery requirements that matter for the client’s operating model.",
        },
        {
          label: "Plan",
          title: "A tailored client offer",
          body: "Choose the ordering surfaces and operating requirements that fit the work you are selling.",
        },
      ],
    },
    {
      type: "twoColumnLists",
      id: "brand",
      eyebrow: "Ownership",
      title: "You own the relationship. We stay invisible.",
      lead: `Your agency remains the customer-facing partner. ${BRAND} provides the platform technology behind the branded ordering experience.`,
      panels: [
        {
          eyebrow: "Carries your brand",
          title: "The product",
          bullets: [
            "Domains and storefronts",
            "Client communication and operating tools",
            "Receipts, emails and notifications",
            "Plans, pricing and invoicing",
            "Client relationship and account management",
          ],
        },
        {
          eyebrow: `Provided by ${BRAND}`,
          title: "The infrastructure",
          bullets: [
            "Ordering platform technology",
            "Branded ordering surfaces",
            "Order, payment and delivery capabilities",
            "Platform maintenance and updates",
            "Technical fit discussion",
          ],
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "who-resells",
      eyebrow: `Who resells ${BRAND}`,
      title: "Built for the people who already sell to restaurants.",
      columns: 3,
      items: [
        {
          label: "Digital agencies",
          title: "Add ordering to every web and app project",
          body: "Stop quoting custom checkouts. Ship a branded storefront and apps with the design work you already do, and bill it monthly.",
        },
        {
          label: "POS and payments resellers",
          title: "Sell the channel on top of the terminal",
          body: "Your merchants already trust you with payments. Give them online, app and phone orders that flow straight into the POS you installed.",
        },
        {
          label: "Software companies",
          title: "Launch an ordering product without a new team",
          body: "Restaurant software, loyalty, reservations, accounting. Add ordering as a module through the API or the white label.",
        },
      ],
    },
    {
      type: "controlBand",
      id: "partner-program",
      eyebrow: "Partner program",
      title: "Start with the work your agency already does.",
      body: "A partner conversation can clarify the customer experience, technical fit and commercial model for your agency.",
      tiles: [
        {
          title: "Describe your clients",
          body: "Share the markets and types of businesses your agency serves.",
        },
        {
          title: "Map the experience",
          body: "Identify the branded site, apps and operating tools your offer needs.",
        },
        {
          title: "Review technical fit",
          body: "Bring the POS, payments and delivery requirements that affect the solution.",
        },
        {
          title: "Discuss the commercial model",
          body: "Use the conversation to understand the available reseller and white-label options.",
        },
      ],
    },
    {
      type: "commercialScope",
      id: "apply",
      eyebrow: "Become a reseller",
      title: "Don't rebuild ordering infrastructure. Sell your business on top of it.",
      body: "Tell us about the clients you serve and the ordering experience you want to offer.",
      panelEyebrow: "Bring to the partnership call",
      panelTitle: "What helps us scope your reseller offer",
      bullets: [
        "Company and the market you serve",
        "The client work you want to support",
        "What you sell now: web, POS, payments, software",
      ],
      primaryCta: { label: "Talk about a partnership", modalTopic: "Reseller partnership inquiry" },
    },
  ],
  closingCta: {
    title: "Add recurring ordering revenue to your agency.",
    body: "Explore white-label storefronts, native apps, and reseller options tailored to the clients you already serve.",
    primaryCta: { label: "Talk about a partnership", modalTopic: "Agency partnership demo" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const STARTUPS_SPEC: SolutionPageSpec = {
  slug: "startups",
  metaTitle: "For startups and entrepreneurs",
  metaDescription:
    "Start a branded ordering operation, then add locations, channels or marketplace workflows only when the business model calls for them.",
  hero: {
    breadcrumbLabel: "Startups & entrepreneurs",
    title: "Start the ordering operation you want to run.",
    lede: "Start with a branded storefront and delivery workflow. Add locations, channels or marketplace operations only when the business model calls for them.",
    primaryCta: { label: "Explore the platform", href: "/products" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      "Branded customer ordering",
      "No commission on your orders",
      "Review scope before launch",
    ],
  },
  sections: [
    {
      type: "comparisonTable",
      id: "compare",
      eyebrow: `Build vs ${BRAND}`,
      title: "Choose configuration over rebuilding the basics.",
      lead: "An ordering operation depends on the customer experience, merchant workflow and delivery model working together. Start by choosing the scope you need now.",
      actionLink: { label: "Build vs buy: the full comparison", href: "/developers/build-vs-buy" },
      headers: ["Criterion", "Building it yourself", `On ${BRAND}`],
      rows: [
        [
          "Customer ordering",
          "Define and build each buying surface",
          "Plan the storefront and customer flow around your model",
        ],
        [
          "Merchant workflow",
          "Design catalog and order operations from scratch",
          "Configure the merchant workflow your launch requires",
        ],
        [
          "Delivery model",
          "Build the rules and integrations for delivery",
          "Choose fleet, third-party delivery or a mix based on your coverage",
        ],
        [
          "Operating changes",
          "Rework the product each time the model changes",
          "Review which operational settings and integrations fit the next stage",
        ],
        [
          "Commercial scope",
          "Carry the full scope in the first build",
          "Start with the scope you can operate and review expansion deliberately",
        ],
        [
          "Launch decisions",
          "Decide architecture before you can test the model",
          "Discuss product, delivery and commercial requirements together",
        ],
      ],
    },
    {
      type: "cardsGrid",
      id: "use-cases",
      eyebrow: "What you can launch",
      title: "One infrastructure, many businesses.",
      columns: 4,
      actionLink: { label: "Explore the platform", href: "/products" },
      items: [
        {
          label: "01",
          title: "Food delivery brand",
          body: "A branded customer ordering experience with the delivery model that fits your service area.",
        },
        {
          label: "02",
          title: "Ghost kitchen",
          body: "A focused ordering operation where catalog, preparation and delivery decisions need to work together.",
        },
        {
          label: "03",
          title: "Local marketplace",
          body: "A multi-merchant model that brings customer ordering, merchant operations and delivery planning into one scope.",
          href: "/solutions/marketplaces",
        },
        {
          label: "04",
          title: "Niche delivery app",
          body: "A category-specific operation with a customer journey and fulfillment model designed around the service you provide.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "foundation",
      eyebrow: "Self-Service plan",
      title: "Choose the pieces that support the experience you want customers to have.",
      lead: "A self-service path works best when the storefront, delivery needs, promotions and team resources are clear from the start. These areas turn an initial idea into a workable scope for online ordering and delivery.",
      columns: 4,
      items: [
        {
          title: "Your online presence",
          body: "Plan how customers find and recognize the ordering experience, including the domain and storefront details that matter to your brand.",
        },
        {
          title: "Ordering and delivery",
          body: "Define the ordering journey and delivery workflows your operation needs customers and teams to use.",
        },
        {
          title: "Offers and retention",
          body: "Decide where coupons and discounts support the customer journey you want to run.",
        },
        {
          title: "Learning resources",
          body: "Get the guidance your team needs as it learns the platform.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "scope",
      eyebrow: "Scope your setup",
      title: "Work from the customer journey back to the operating work.",
      lead: "Before you begin, name the customer touchpoints, the order and delivery steps your team manages, and the offers you want to make available. That turns a feature list into a setup your team can operate.",
      steps: [
        {
          num: "01",
          title: "Define the storefront and ordering path.",
          body: "Confirm your brand, domain, menu structure, and customer checkout steps.",
        },
        {
          num: "02",
          title: "Map delivery and customer-support responsibilities.",
          body: "Decide who fulfills orders, which zones are covered, and how exceptions are resolved.",
        },
        {
          num: "03",
          title: "Confirm the promotion and learning resources your team needs.",
          body: "Set up introductory offers and walk your operators through the Dashboard and Merchant App.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "scale",
      eyebrow: "Start small, scale later",
      title: "Start with the next operating stage, not every future one.",
      lead: "Choose a launch scope your team can run, then review new locations, channels or merchant workflows when the business is ready for them.",
      steps: [
        {
          num: "01",
          title: "Launch one brand",
          body: "Define the customer ordering experience, merchant workflow and delivery coverage for one launchable operation.",
        },
        {
          num: "02",
          title: "Review the next channel or location",
          body: "Add only the customer touchpoints and operating complexity that the next stage requires.",
        },
        {
          num: "03",
          title: "Plan a marketplace model",
          body: "When third-party merchants become part of the model, define onboarding, commissions, delivery and payout requirements before expansion.",
        },
      ],
    },
    {
      type: "controlBand",
      id: "control",
      eyebrow: "Control",
      title: "Keep your brand and customer relationships central.",
      body: `Run customer-facing ordering on your domain and coordinate its operations in ${BRAND}. Customer control does not transfer platform or source-code ownership.`,
      tiles: [
        {
          title: "No commission on your orders",
          body: `${BRAND} does not charge any commission on your orders. You pay your plan price. Payment processing, delivery, taxes and other third-party costs are separate.`,
        },
        {
          title: "Customer-facing brand",
          body: "Plan the domain and the customer experience customers will associate with your business.",
        },
        {
          title: "Customer relationships",
          body: "Review the customer data, access and integration requirements your operating model depends on.",
        },
        {
          title: "Integration requirements",
          body: "Bring API or custom workflow requirements into the scope conversation before you rely on them.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "path",
      eyebrow: "Path to launch",
      title: "Four decisions before your first order.",
      lead: "Move deliberately from initial concept to live ordering without over-engineering day one.",
      steps: [
        {
          num: "01",
          subtitle: "Foundation",
          title: "Define the customer experience",
          body: "Set the brand, service area and ordering journey you want customers to recognize.",
        },
        {
          num: "02",
          subtitle: "Configuration",
          title: "Prepare operational basics",
          body: "Organize the catalog, hours, delivery conditions and payment requirements around the model you will run.",
        },
        {
          num: "03",
          subtitle: "Release preparation",
          title: "Confirm launch responsibilities",
          body: "Identify what your team owns, what partners own and which product requirements need to be confirmed before launch.",
        },
        {
          num: "04",
          subtitle: "Launch",
          title: "Open the operation",
          body: "Invite customers when merchant readiness, delivery coverage and the support process are in place.",
        },
      ],
    },
    {
      type: "commercialScope",
      id: "pricing",
      eyebrow: "Startup program",
      title: "Launching soon? Apply to the startup program.",
      body: "Whether you are launching one brand with one or a few locations, or building a local marketplace with many merchants, we help you set the foundation for your ordering operation.",
      panelEyebrow: "Your starting scope",
      panelTitle: "Startup launch tracks",
      kvRows: [
        { label: "One brand, one or a few locations", value: "Discuss your setup" },
        { label: "A marketplace with many merchants", value: "Talk to us" },
        { label: "Startup program", value: "Apply for early-stage pricing" },
      ],
      primaryCta: { label: "Apply now", modalTopic: "Startup program application" },
      secondaryCta: { label: "See pricing", href: "/pricing" },
    },
  ],
  closingCta: {
    title: "Start with a model you can operate.",
    body: "Review customer ordering, merchant operations and delivery requirements before you commit to the next stage.",
    primaryCta: { label: "Explore the platform", href: "/products" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
  },
};

export const DELIVERY_COMPANIES_SPEC: SolutionPageSpec = {
  slug: "delivery-companies",
  metaTitle: "Delivery Management Software",
  metaDescription:
    "Courier businesses sell ordering to the merchants they already deliver for: Driver App, dispatch, and a marketplace storefront under your brand.",
  hero: {
    breadcrumbLabel: "Delivery companies",
    title: "Sell ordering to the merchants you already deliver for.",
    lede: `You have the drivers, the zones and the merchants. ${BRAND} adds the storefront, apps and merchant tools that carry your brand, so you can connect each merchant’s orders with the dispatch operation you run.`,
    primaryCta: { label: `Talk to ${BRAND}`, modalTopic: "Delivery companies platform" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
    meta: ["Driver App and dispatch", "Merchant onboarding", "White label"],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "offer",
      eyebrow: "What a delivery company gets",
      title: "A product to sell, on top of the fleet you already run.",
      columns: 3,
      actionLink: { label: "Explore Ordering Delivery", href: "/platform/ordering-delivery" },
      items: [
        {
          label: "Operate",
          title: "Driver App and dispatch",
          body: "Give couriers a driver workflow for pickup, delivery status and the handoff. Dispatch keeps the delivery work connected to the merchants and zones you operate.",
        },
        {
          label: "Grow",
          title: "Merchant onboarding",
          body: "Set up a merchant’s name, domain, menu, hours and payment connection from your console, then prepare its storefront for the channel you choose to operate.",
        },
        {
          label: "Build",
          title: "Marketplace storefront",
          body: "A multi-merchant storefront and apps where customers can browse the merchants you operate, order, and follow the delivery experience under your brand.",
        },
        {
          label: "Build",
          title: "White label",
          body: "Present your own brand across the storefront, apps, merchant tools, receipts and notifications.",
        },
        {
          label: "Grow",
          title: "Reseller program",
          body: "Sell ordering as your own product. You set the plans, bill your merchants and own the relationship. We run the platform underneath.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "sell",
      eyebrow: "Sell ordering to your merchants",
      title: "From a merchant visit to a delivery your driver makes.",
      lead: "The merchants you already deliver for are the ones who need ordering most. This is the same loop for every one of them.",
      steps: [
        {
          num: "01",
          title: "Onboard a merchant",
          body: "Sign the merchant and create the account in your console. Menu, hours, delivery zone and payouts are set up in the same session.",
        },
        {
          num: "02",
          title: "Their storefront and menu, under your brand",
          body: "The merchant gets a branded storefront, apps and Ordering Merchant to manage the day. Their customers see the merchant; the platform underneath is yours.",
        },
        {
          num: "03",
          title: "Orders flow to your dispatch",
          body: "Every order from that merchant's storefront, apps or your marketplace enters the same queue, with the address checked against your zones before checkout.",
        },
        {
          num: "04",
          title: "Your drivers deliver",
          body: "Dispatch assigns the order to a driver on shift, the customer tracks it live on your map, and the proof of delivery closes it in your system.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "ownership",
      eyebrow: "Ownership",
      title: "Your brand, your merchants, our infrastructure.",
      lead: `You keep the parts of the business you operate: couriers, merchant relationships and the pricing you offer. ${BRAND} provides the connected commerce and operations layer underneath.`,
      steps: [
        {
          num: "01",
          title: "White label everywhere",
          body: "Configure the customer-facing storefront, apps, merchant console, receipts and notifications around your brand.",
        },
        {
          num: "02",
          title: "Merchant accounts you own",
          body: "Every merchant is an account in your console. You create them, price them, bill them and support them.",
        },
        {
          num: "03",
          title: "One connected platform",
          body: "Keep merchant ordering and delivery operations connected through the same commerce foundation.",
        },
        {
          num: "04",
          title: "A clear operating setup",
          body: "Define merchant, zone and delivery settings before bringing each storefront into your operation.",
        },
      ],
    },
    {
      type: "connectedMap",
      id: "connected",
      eyebrow: "One infrastructure",
      title: "Every channel your merchants sell on ends at your drivers.",
      body: "Storefronts, apps, your marketplace, the phone and AI agents all write to the same order model. The merchant sees their own orders, and dispatch sees one queue across every merchant you serve.",
      topRow: ["Storefront", "App", "Marketplace", "Phone", "AI agent"],
      hubNote: "Unified merchant storefronts and central fleet dispatch",
      bottomRow: ["Merchant App", "POS", "Drivers", "Payouts"],
    },
    {
      type: "controlBand",
      id: "control",
      eyebrow: "Control",
      title: "How the delivery runs is a setting, not a support ticket.",
      body: "The rules that decide where a merchant delivers and how the work is organized belong in the operating setup for your marketplace or delivery business.",
      tiles: [
        {
          title: "Dispatch rules",
          body: "Set dispatch rules around the drivers, zones and delivery workflow your business operates.",
        },
        {
          title: "Zones",
          body: "Define delivery areas and the conditions that apply to each merchant’s service area.",
        },
        {
          title: "Driver accounts",
          body: "Organize drivers and delivery work so dispatch has the context it needs for each order.",
        },
        {
          title: "Merchant accounts",
          body: "Keep each merchant’s menu, operating details and order workflow connected to the service you provide.",
        },
      ],
    },
    {
      type: "scopeNotes",
      id: "delivery-scope-notes",
      notes: [
        {
          id: "delivery-booking-scope",
          title: "Define what booking means for your delivery operation.",
          lead: "A booking is a request to carry an order with an identified pickup, destination, and requested schedule; it is not a promise of same-day capacity.",
          paragraphs: [
            "Create or receive the delivery order with pickup and recipient details, the requested time, and fulfillment instructions. Then follow assignment, driver acceptance, collection, customer tracking, and proof of delivery. Define who handles a rejected request, a missed pickup, or an unavailable recipient.",
            "A parcel can be carried in a last-mile operation, but that does not establish a parcel-network system with hubs, shipping labels, dimensional-weight rating, customs workflows, or package scanning. The confirmed proof-of-delivery options include PIN, photo, signature, and video; these are not barcode or package-scan evidence.",
          ],
          links: [
            { label: "Review driver workflows", href: "/platform/driver-app" },
            { label: "Review dispatch", href: "/platform/ordering-delivery" },
          ],
        },
        {
          id: "build-on-demand-delivery-app",
          title: "Build an on-demand delivery app around a pilot.",
          lead: "Choose how customers will request a delivery, which jobs your fleet can accept and how dispatch will hand each job to a driver.",
          paragraphs: [
            `Start by configuring your branded ordering channels, merchants, zones and dispatch rules. Extend the open-source frontend if you need a different customer interface. ${BRAND} manages the backend and API by default.`,
            "For a pilot, take one pickup-and-drop-off request through the documented Custom Orders web flow. Check the route against your distance limit, send the order to dispatch, verify driver acceptance and collection, and follow the delivery to proof.",
          ],
          links: [
            { label: "Explore automation & Custom Orders", href: "/integrations/automation" },
          ],
        },
        {
          id: "delivery-trial-pricing",
          title: "Separate a software trial from the cost of running couriers.",
          lead: "Current public pricing offers a free trial of Restaurant or Marketplace, without a credit card. Review the pricing page for the current access and proposal scope.",
          paragraphs: [
            "A software trial does not make a complete courier operation free. Budget your drivers, delivery partners, vehicles, devices, payment providers, custom integrations, and any implementation or support services you agree.",
          ],
          links: [
            { label: "See current pricing", href: "/pricing" },
            { label: "See a live demo", href: "/demo" },
          ],
        },
      ],
    },
    {
      type: "relatedGrid",
      id: "related",
      title: "Keep exploring.",
      items: [
        {
          label: "Operate",
          title: "Ordering Delivery",
          body: "Driver App, dispatch and live tracking for your fleet.",
          href: "/platform/ordering-delivery",
        },
        {
          label: "For builders",
          title: "Agencies & resellers",
          body: "The reseller console and the partner program in full.",
          href: "/solutions/agencies-resellers",
        },
        {
          label: "For businesses",
          title: "Marketplaces",
          body: "A multi-merchant storefront under your own brand.",
          href: "/solutions/marketplaces",
        },
        {
          label: "Connect",
          title: "Delivery integrations",
          body: "Every partner network you can plug in beside your fleet.",
          href: "/integrations/delivery",
        },
      ],
    },
  ],
  closingCta: {
    title: "Turn the fleet you run into a platform you sell.",
    body: "Tell us how you serve merchants and operate delivery. We will walk through the storefront, merchant and dispatch workflow that fits your model.",
    docGuide: { label: "Driver App", href: "/platform/driver-app" },
    primaryCta: { label: `Talk to ${BRAND}`, modalTopic: "Delivery company platform demo" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const SOFTWARE_COMPANIES_SPEC: SolutionPageSpec = {
  slug: "software-companies",
  metaTitle: "Ordering Infrastructure for Software Companies",
  metaDescription:
    "Explore API access, white-label surfaces, and source-code options for bringing branded ordering into your own software product.",
  hero: {
    breadcrumbLabel: "Software companies",
    title: "Ship ordering as a feature of your product, not a project.",
    lede: "Explore API access, white-label surfaces and source-code options for adding branded ordering to the product you already sell.",
    primaryCta: { label: `Build on ${BRAND}`, href: "/developers" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: ["API access", "White-label surfaces", "Source-code options"],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "what-you-get",
      eyebrow: "Integration options",
      title: "Choose an integration model that fits your product.",
      lead: `${BRAND} offers more than one way to put branded ordering into a software product. The right choice depends on how much of the customer experience your team wants to own.`,
      columns: 3,
      items: [
        {
          title: "API access",
          body: "Use API access when your team needs to connect ordering to an experience it already owns.",
        },
        {
          title: "White-label surfaces",
          body: "Use branded ordering sites and apps when a ready-made customer experience fits the product you sell.",
        },
        {
          title: "White label",
          body: `Keep your brand at the front while ${BRAND} provides the underlying ordering technology.`,
        },
        {
          title: "Source-code options",
          body: "The frontend code is open source and included with every product, for teams that need more control over their frontend implementation.",
        },
        {
          title: "A commercial fit",
          body: "Discuss the product, technical and plan requirements before choosing an integration path.",
        },
        {
          title: "Ordering operations",
          body: "Consider how orders, payments and delivery need to connect to the rest of your product.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "embed",
      eyebrow: "How to assess the fit",
      title: "Plan ordering as part of your product.",
      lead: "Start by defining the customer experience and the operating requirements, then choose the integration approach that fits them.",
      steps: [
        {
          num: "01",
          title: "Define the experience",
          body: "Decide which parts of the ordering journey should feel native to your existing product.",
        },
        {
          num: "02",
          title: "Review API access",
          body: "Use the API reference to assess how ordering could connect with the systems your team already maintains.",
        },
        {
          num: "03",
          title: "Choose branded surfaces",
          body: "A white-label site or app can give customers a branded ordering experience without building every screen from scratch.",
        },
        {
          num: "04",
          title: "Confirm the commercial model",
          body: "Discuss the plan and implementation options that match the way your product is offered to customers.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "ways-to-build",
      eyebrow: "Ways to build",
      title: "Three ways to put ordering in your product.",
      lead: "The platform can sit behind an experience your team builds, a branded surface you configure, or a selected source-code option.",
      columns: 3,
      items: [
        {
          label: "Model 01",
          title: "API only",
          body: "Your team owns the product experience and assesses API access for the ordering workflow.",
          bullets: [
            "API access",
            "Your product experience",
            "Ordering connected to your workflow",
            "Technical fit to discuss",
          ],
        },
        {
          label: "Model 02",
          title: "White label",
          body: "A branded ordering site or app can become part of the product you already sell.",
          bullets: [
            "Branded ordering site and apps",
            "Your brand and domain",
            "Ordering technology underneath",
            "Configuration before launch",
          ],
        },
        {
          label: "Model 03",
          title: "Source-code options",
          body: "The frontend code is open source and included with every product, for teams that need more frontend control.",
          bullets: [
            "Included with every product",
            "Frontend implementation flexibility",
            "API access to discuss",
            `Backend and API managed by ${BRAND}`,
          ],
        },
      ],
    },
    {
      type: "connectedMap",
      id: "connected",
      eyebrow: "One operating model",
      title: "Your product on top. Ordering technology underneath.",
      body: "A branded ordering experience can connect your product to the order, payment and delivery operations it needs to support.",
      topRow: ["Your product", "Branded ordering site", "Customer apps"],
      hubNote: "REST API, webhooks, open-source frontends, and white-label core",
      bottomRow: ["Orders", "Payments", "Delivery"],
    },
    {
      type: "controlBand",
      id: "developer-experience",
      eyebrow: "Implementation conversation",
      title: "Decide the integration model before the build.",
      body: "Use the product conversation to separate the customer experience, technical connection and commercial model that your team needs.",
      tiles: [
        {
          title: "API access",
          body: "Evaluate the API reference against the workflow your product needs to support.",
        },
        {
          title: "White-label surfaces",
          body: "Decide whether a branded ordering site or app fits the experience you want to offer.",
        },
        {
          title: "Source-code options",
          body: "Confirm whether an eligible plan provides the level of frontend control your team needs.",
        },
        {
          title: "Commercial fit",
          body: "Review the plan and implementation choices before committing to an approach.",
        },
      ],
    },
    {
      type: "relatedGrid",
      id: "related",
      title: "Keep exploring",
      items: [
        {
          label: "Solutions",
          title: "Agencies & resellers",
          body: "Offer branded ordering to the clients your agency serves.",
          href: "/solutions/agencies-resellers",
        },
        {
          label: "Solutions",
          title: "Custom projects",
          body: "Hand the build to the platform team when the standard flow doesn't cover your case.",
          href: "/solutions/custom-projects",
        },
        {
          label: "Developers",
          title: `Build on ${BRAND}`,
          body: "Start with the public developer documentation and API reference.",
          href: "/developers",
        },
        {
          label: "Solutions",
          title: "Marketplaces",
          body: "Launch a multi-vendor marketplace on the same stores, payments and delivery.",
          href: "/solutions/marketplaces",
        },
        {
          label: "Developers",
          title: "Bring your own cloud",
          body: `Enterprise organizations can install ${BRAND} in their own AWS, Google Cloud, Microsoft Azure, or Railway account.`,
          href: "/developers/bring-your-own-cloud",
        },
      ],
    },
  ],
  closingCta: {
    title: "Don't rebuild ordering infrastructure. Build your product on top of it.",
    body: "Tell us what your product does and where ordering needs to fit. We can discuss API, white-label and source-code options.",
    primaryCta: { label: `Talk to ${BRAND}`, modalTopic: "Software company integration architecture" },
    secondaryCta: { label: `Build on ${BRAND}`, href: "/developers" },
  },
};

export const MIDDLEWARE_SPEC: SolutionPageSpec = {
  slug: "middleware",
  metaTitle: "Ordering.co as Middleware for Your Own Website and App",
  metaDescription:
    "Keep your own website, app or kiosk. Connect it once to the Ordering.co API and reach the POS, delivery, marketplace and payment integrations in the Dashboard.",
  hero: {
    breadcrumbLabel: `${BRAND} as middleware`,
    title: "Keep your storefront. Connect it to everything else.",
    lede: `Your website, app or kiosk stays yours. Connect it once to the ${BRAND} API, and ${BRAND} routes menus, orders and statuses to the POS, delivery, marketplace and payment providers already in the Dashboard.`,
    primaryCta: { label: "Book a demo", modalTopic: "Ordering.co as middleware" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      "More than 15 POS integrations",
      "More than 20 delivery partners",
      "More than 50 payment gateways",
    ],
    bottomStrip: {
      lead: `Already have a front end? You don't need a new one. ${BRAND} sits in the middle and connects it to the tools you use.`,
    },
  },
  sections: [
    {
      type: "cardsGrid",
      id: "why",
      eyebrow: `Why ${BRAND} as middleware`,
      title: "Build one integration instead of dozens.",
      lead: `Every POS, courier and marketplace has its own API, credentials and edge cases. Connect your front end to ${BRAND} once and use the integrations that are already built and maintained.`,
      columns: 3,
      items: [
        {
          title: "One API, many destinations",
          body: "Your team connects to a single, documented REST API. The POS, delivery, marketplace and payment connections behind it are already in the Dashboard.",
        },
        {
          title: "Menus come from your POS",
          body: "Supported POS integrations sync menus into your project, so your website and app read one catalog instead of keeping copies in step.",
        },
        {
          title: "Statuses flow back",
          body: "Webhooks and the API tell your front end when an order is accepted, prepared, picked up or delivered, so you notify customers in your own design.",
        },
        {
          title: "One Dashboard for every channel",
          body: "Orders from your own front ends, marketplaces and other channels land in the same Dashboard, ready to manage, report on and export.",
        },
        {
          title: "Change providers without a rebuild",
          body: `Add a courier, a marketplace or another payment gateway from the Dashboard. The connection between your front end and ${BRAND} stays the same.`,
        },
        {
          title: "Your accounts, your data",
          body: "You connect each provider with your own account and credentials. Your menus, customers and orders stay yours.",
        },
      ],
    },
    {
      type: "connectedMap",
      id: "how-it-works",
      eyebrow: "How the connection works",
      title: `Your front on top. Your stack underneath. ${BRAND} in the middle.`,
      body: `Customers order in the experience you built. ${BRAND} receives the order through the API, sends it to the POS and delivery provider you choose, and returns every status change to your front end.`,
      topRow: ["Your website", "Your app", "Your kiosk"],
      hubNote: "Single REST API + real-time webhooks in the middle",
      bottomRow: ["POS", "Delivery", "Marketplaces", "Payments"],
    },
    {
      type: "stepsSplit",
      id: "get-started",
      eyebrow: "Getting started",
      title: "From sign-up to your first routed order.",
      lead: "Your team builds one connection. Everything else is set up from the Dashboard.",
      steps: [
        {
          num: "01",
          title: "Create your project",
          body: "Sign up at accounts.ordering.co. Your project and Dashboard are ready as soon as you log in.",
        },
        {
          num: "02",
          title: "Connect your providers",
          body: "In the Dashboard, add the POS, delivery, marketplace and payment providers you use, with your own accounts.",
        },
        {
          num: "03",
          title: "Connect your front end",
          body: `Your developers send the orders placed on your website or app to your project through the ${BRAND} API.`,
        },
        {
          num: "04",
          title: "Listen for statuses",
          body: "Set up webhooks so your front end receives every order update, then test end to end and go live.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "integrations",
      eyebrow: "What you can connect",
      title: "Use the integrations already in the Dashboard.",
      lead: "Pick a category to see every provider, how it connects and what it syncs.",
      columns: 4,
      items: [
        {
          label: "01",
          title: "POS",
          body: "Wansoft, Square, Clover, Oracle Simphony, Shopify and more: menus in, orders out.",
          href: "/integrations/pos",
        },
        {
          label: "02",
          title: "POS through middleware",
          body: "Deliverect, ItsaCheckmate, Stream and Mokka reach many more POS systems.",
          href: "/integrations/pos#pos-systems",
        },
        {
          label: "03",
          title: "Delivery",
          body: "Uber Direct, DoorDash Drive, Shipday, Lalamove, Stuart and your own drivers.",
          href: "/integrations/delivery",
        },
        {
          label: "04",
          title: "Marketplaces",
          body: "Uber Eats, DoorDash, Rappi and Just Eat orders in the same Dashboard.",
          href: "/integrations",
        },
        {
          label: "05",
          title: "Payments",
          body: "Stripe Connect, Adyen, PayPal, Mercado Pago and more than 50 gateways.",
          href: "/integrations/payments",
        },
        {
          label: "06",
          title: "Loyalty and CRM",
          body: "Ordering Loyalty, HubSpot through Zapier, Mailchimp and Spoonity.",
          href: "/integrations/loyalty",
        },
        {
          label: "07",
          title: "Analytics",
          body: "Google Analytics 4, Google Tag Manager, Meta Pixel and Segment.",
          href: "/integrations/analytics",
        },
        {
          label: "08",
          title: "Automation",
          body: "Webhooks, plugins, Zapier and WhatsApp order notifications.",
          href: "/integrations/automation",
        },
      ],
    },
    {
      type: "controlBand",
      id: "developers",
      eyebrow: "For developers",
      title: "Documented, server-side, ready to build on.",
      body: `The same API, webhooks and plugins ${BRAND} uses for its own products. Keep your API key on your server and build the connection your front end needs.`,
      tiles: [
        {
          title: "REST API",
          body: "One base URL per project and language, authenticated with an API key in the X-Api-Key header.",
        },
        {
          title: "Webhooks",
          body: "Order events delivered to your own URL instead of polling.",
        },
        {
          title: "Plugins",
          body: "Hook-based extensions built from your Dashboard.",
        },
        {
          title: "MCP",
          body: `Connect AI tools to your ${BRAND} account.`,
        },
      ],
    },
    {
      type: "faqAccordion",
      id: "faq",
      eyebrow: "FAQ",
      title: "Questions teams ask before connecting.",
      items: [
        {
          q: `Do I have to use the ${BRAND} website or apps?`,
          a: `No. You can keep your own website, app or kiosk and connect it to ${BRAND} through the API. The ${BRAND} website and apps stay available if you want them later.`,
        },
        {
          q: "Do I need to build each integration myself?",
          a: `No. The integrations are already built into the Dashboard. Your team builds one connection from your front end to the ${BRAND} API, then you turn on the providers you need.`,
        },
        {
          q: "Whose accounts do the integrations use?",
          a: "Yours. You connect each POS, courier, marketplace or payment provider with your own account. Any fees those providers charge are billed by them.",
        },
        {
          q: "How do order statuses reach my website or app?",
          a: "Through webhooks configured in the Dashboard, or by reading orders through the API. Your front end then shows each update to the customer.",
        },
        {
          q: "Is this the same as the middleware integrations?",
          a: `No. Middleware integrations such as Deliverect or ItsaCheckmate connect ${BRAND} to more POS systems. Here, ${BRAND} itself is the middleware between your own front end and your providers. You can use both together.`,
        },
        {
          q: "What if the integration I need isn't listed?",
          a: `Tell us which provider you use. New connections are scoped with the ${BRAND} team and quoted separately as custom work.`,
        },
      ],
    },
    {
      type: "relatedGrid",
      id: "related",
      title: "Related",
      items: [
        {
          label: "Integrations",
          title: "All integrations",
          body: "Browse every provider in the Dashboard.",
          href: "/integrations",
        },
        {
          label: "Integrations",
          title: "POS & middleware",
          body: "Reach more POS systems through Deliverect, Stream and others.",
          href: "/integrations/pos",
        },
        {
          label: "Developers",
          title: "API and MCP",
          body: "Endpoints, webhooks and AI tools for your team.",
          href: "/developers",
        },
        {
          label: "Solutions",
          title: "Software companies",
          body: "Put ordering inside the product you already sell.",
          href: "/solutions/software-companies",
        },
        {
          label: "Solutions",
          title: "Agencies and resellers",
          body: "Deliver ordering projects for your clients.",
          href: "/solutions/agencies-resellers",
        },
      ],
    },
  ],
  closingCta: {
    title: "Keep what you built. Connect what you need.",
    body: `Create your project and route your first order from your own front end through ${BRAND}.`,
    primaryCta: { label: "Book a demo", modalTopic: "Middleware API routing demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
  },
};

export const CUSTOM_PROJECTS_SPEC: SolutionPageSpec = {
  slug: "custom-projects",
  metaTitle: "Custom projects",
  metaDescription:
    "Explore a tailored ordering project when the standard platform needs a feature, workflow or integration adapted to your operation.",
  hero: {
    breadcrumbLabel: "Custom projects",
    title: "When the standard platform isn't enough, we build on top of it.",
    lede: "Bring the ordering requirement that does not fit the standard platform. Start by mapping the workflow, integration or customer experience that needs to change.",
    primaryCta: { label: "Send a project brief", modalTopic: "Custom project brief" },
    secondaryCta: { label: "Explore the API", href: "/developers" },
    meta: ["Custom features", "Tailored workflows", "Integrations"],
    bottomStrip: {
      lead: "Start with the operational need, then decide whether the standard platform, an integration or a tailored project is the right fit.",
    },
  },
  sections: [
    {
      type: "cardsGrid",
      id: "what-we-build",
      eyebrow: "What we build",
      title: "Ordering requirements that need a tailored approach.",
      columns: 3,
      items: [
        {
          title: "Custom customer apps",
          body: "A customer experience with a workflow or interface that needs to be assessed beyond the standard ordering surfaces.",
        },
        {
          title: "POS, ERP and back-office integrations",
          body: "A POS, ERP, accounting or inventory requirement that needs to connect to the ordering operation.",
        },
        {
          title: "Bespoke ordering flows",
          body: "An ordering journey with requirements such as catering, group orders, subscriptions or B2B purchasing.",
          href: "/platform/dashboard",
        },
        {
          title: "Kiosk and in-store",
          body: "An in-store ordering requirement where the device, operational flow or customer interaction differs from the standard experience.",
        },
        {
          title: "An operation-specific experience",
          body: "A customer or staff experience that needs to reflect the rules, language or steps of your operation.",
        },
        {
          title: "White-label and reseller platforms",
          body: "A branded ordering offer that needs to match the way your company serves its own customers.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "process",
      eyebrow: "How it works",
      title: "Start with the operating need.",
      lead: "A project conversation should separate what the standard platform already covers from the workflow, integration or interface that needs a tailored approach.",
      steps: [
        {
          num: "01",
          title: "Scoping call",
          body: "Describe the outcome, the people involved and the point in the ordering journey that needs to change.",
        },
        {
          num: "02",
          title: "Review the options",
          body: "Compare the standard platform, configuration, API access and a tailored project against the requirement.",
        },
        {
          num: "03",
          title: "Agree the delivery plan",
          body: "Confirm the scope, responsibilities and implementation approach before work begins.",
        },
        {
          num: "04",
          title: "Prepare the launch",
          body: "Plan the validation and launch steps around the stores, systems and people affected by the change.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "who",
      eyebrow: "Who it's for",
      title: "Teams whose ordering is a product, not a setting.",
      columns: 3,
      items: [
        {
          label: "01",
          title: "Enterprise groups and franchises",
          body: "National brands with a proprietary POS, a loyalty program that must stay, or a call center that takes every order in the country.",
        },
        {
          label: "02",
          title: "Builders",
          body: "Marketplaces and software companies whose product needs a flow the standard platform doesn't ship yet.",
        },
        {
          label: "03",
          title: "Agencies and resellers",
          body: `Delivering a client project on ${BRAND} and needing platform engineering behind it.`,
        },
      ],
    },
    {
      type: "controlBand",
      id: "source-code",
      eyebrow: "Build it yourself",
      title: "Or assess an in-house implementation.",
      body: `API access and the open-source frontend code are included with every ${BRAND} product. Use them when your team needs a different level of ownership over the implementation.`,
      tiles: [
        {
          title: "API access",
          body: "Review the public API reference against the workflow your team needs to support.",
        },
        {
          title: "Integration fit",
          body: "Identify the systems and operating steps that need to connect to ordering.",
        },
        {
          title: "Source-code options",
          body: "Start from the open-source frontend code included with every product, and decide which surfaces your team will extend.",
        },
        {
          title: "White label",
          body: "Keep a branded ordering experience in view while deciding how much of the implementation your team owns.",
        },
      ],
    },
    {
      type: "commercialScope",
      id: "brief",
      eyebrow: "Scope a project",
      title: "Describe the outcome. We'll tell you what it takes.",
      body: "Send a project brief through Contact, or book a scoping call. Either way, these details let us answer with specifics about platform fit and implementation options.",
      panelEyebrow: "Project brief",
      panelTitle: "Include in your brief",
      kvRows: [
        {
          label: "What you need built or changed",
          value: "An ERP integration, a catering flow, a custom app…",
        },
        {
          label: "The systems and workflows involved",
          value: "What it connects to, and who uses it.",
        },
        {
          label: "Your company and role",
          value: "e.g. Head of Digital, Brand Group",
        },
        {
          label: "Locations or businesses",
          value: "How many it covers today, approximately.",
        },
      ],
      primaryCta: { label: "Send a project brief", modalTopic: "Custom project brief" },
      secondaryCta: { label: "Scope your project", modalTopic: "Custom project scoping call" },
    },
  ],
  closingCta: {
    title: "Bring the requirement. Decide the right way to build it.",
    body: "Tell us what needs to change in the ordering experience or operation, and we can discuss the available paths.",
    primaryCta: { label: "Scope your project", modalTopic: "Custom project scoping call" },
    secondaryCta: { label: "Explore the API", href: "/developers" },
  },
};
