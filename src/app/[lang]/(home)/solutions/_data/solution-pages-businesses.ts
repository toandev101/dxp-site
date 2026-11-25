import type { SolutionPageSpec } from "./solution-types";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

export const RESTAURANTS_SPEC: SolutionPageSpec = {
  slug: "restaurants",
  metaTitle: "Online ordering for restaurants",
  metaDescription:
    "Launch online ordering for your restaurant: a branded website or app, a menu your team can operate, and delivery options that fit how you run.",
  hero: {
    breadcrumbLabel: "Restaurants",
    title: "Launch and run online ordering for your restaurant.",
    lede: "For independent restaurants and small groups: give guests a website or app under your brand, keep the menu your team runs close to the order flow, and manage the shift and the delivery handoff from one connected setup.",
    primaryCta: { label: "Book a demo", modalTopic: "Restaurants · Guided demo" },
    secondaryCta: { label: "See pricing", href: "/pricing" },
    meta: [
      "Branded website and app",
      "Menu and order operations",
      "Pickup and delivery",
    ],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "offer",
      eyebrow: "What you run",
      title: "Set up the guest experience and the work behind every order.",
      columns: 4,
      items: [
        {
          label: "01",
          title: "Your ordering surface",
          body: "Give guests a restaurant-branded website or app where they can browse the menu and start an order.",
        },
        {
          label: "02",
          title: "A menu your team can operate",
          body: "Keep products, options, availability, and store hours close to the order flow so a shift change is reflected where guests order.",
        },
        {
          label: "03",
          title: "One place for the shift",
          body: "Ordering Merchant is designed to bring orders from supported channels into the store team’s operational queue.",
        },
        {
          label: "04",
          title: "Delivery choices",
          body: "Plan whether a restaurant will use its own drivers, a connected delivery service, or a combination that fits its operating model.",
        },
      ],
    },
    {
      type: "calloutBanner",
      id: "commission",
      eyebrow: "Marketplace commissions",
      title: "Paying marketplace commissions on repeat orders?",
      body: "Marketplaces and a direct channel do different jobs: marketplaces help new guests find you, while your own website or app gives regulars a place to reorder under your brand.",
      cta: { label: "See pricing and 0% commission plans", href: "/pricing" },
    },
    {
      type: "stepsSplit",
      id: "launch",
      eyebrow: "Plan the setup",
      title: "Start with the decisions that shape the guest experience.",
      lead: "A useful ordering setup begins by aligning the menu, order types, operations, and channels before a restaurant invites guests to order.",
      steps: [
        {
          num: "01",
          title: "Map the service model",
          body: "Decide which order types the restaurant needs to support and who owns each handoff.",
        },
        {
          num: "02",
          title: "Prepare the menu",
          body: "Review categories, products, options, availability, and the information a guest needs to make a choice.",
        },
        {
          num: "03",
          title: "Connect operations",
          body: "Review the operational tools, payment setup, POS, and delivery services that apply to the restaurant.",
        },
        {
          num: "04",
          title: "Validate the guest journey",
          body: "Walk through the ordering path with the team before directing guests to the new channel.",
        },
      ],
    },
    {
      type: "connectedMap",
      id: "connected",
      eyebrow: "Operational foundation",
      title: "Connect the customer-facing journey to the store team.",
      body: "Ordering Web, apps, kiosks, and other enabled channels can be planned around the same restaurant operations. The important decision is how each order reaches the store, its kitchen workflow, and its delivery handoff.",
      topRow: ["Website", "App", "Kiosk", "Phone"],
      hubNote: "Unified restaurant menu, orders, and payments",
      bottomRow: ["Ordering Merchant", "POS", "Delivery"],
    },
    {
      type: "commercialScope",
      id: "pricing",
      eyebrow: "Commercial scope",
      title: "Price the setup you actually need.",
      body: "The right conversation starts with locations, channels, integrations, and delivery responsibilities. Review the current pricing information and confirm what applies to your restaurant before making a commercial decision.",
      panelEyebrow: "Bring to the conversation",
      panelTitle: "What shapes your restaurant scope",
      bullets: [
        "Locations and service areas",
        "Guest channels",
        "Menu and store operations",
        "Delivery and integration needs",
      ],
      primaryCta: { label: "See pricing", href: "/pricing" },
      secondaryCta: { label: "Book a demo", modalTopic: "Restaurants · Commercial scope" },
    },
    {
      type: "comparisonTable",
      id: "restaurant-management-scope",
      title: "Separate order management from the systems around it.",
      lead: `Use ${BRAND} for the ordering journey and merchant operation, and identify which responsibilities stay with your POS or accounting system.`,
      headers: ["Area", "Where it runs", "Operating boundary"],
      rows: [
        [
          "Menus and orders",
          BRAND,
          "Manage the ordering catalog, availability, incoming orders, and the merchant workflow.",
        ],
        [
          "Stock",
          `${BRAND} or a connected source`,
          "Manage product availability in the ordering tools; if another system owns stock, agree its update direction and connector behavior.",
        ],
        [
          "POS",
          "A specific connection",
          "Review the actual menu and order handoff with the selected POS. A connection does not establish identical behavior across every system.",
        ],
        [
          "Reservations",
          "Configured reservation journey",
          "Customers can book a table, or reserve and preorder. Review the configured acceptance and restaurant handoff.",
        ],
        [
          "Accounting and finance",
          "The business’s accounting system",
          "Order and payment records do not replace bookkeeping, payroll, or tax reporting. Define the required export or integration separately.",
        ],
      ],
      links: [
        { label: "Review merchant order handling", href: "/platform/ordering-merchant" },
        { label: "Explore POS integrations", href: "/integrations/pos" },
      ],
    },
    {
      type: "scopeNotes",
      id: "restaurant-reservation-notes",
      notes: [
        {
          id: "restaurant-reservation-order",
          title: "Connect the reservation with the order you intend to serve.",
          lead: "A table reservation and a food order are distinct journeys, even when a guest completes both together.",
          paragraphs: [
            "Customers choose a business and request a table; when the configured journey offers reservation and preorder, they also choose food before arriving. The restaurant receives the reservation in its merchant tools and coordinates preparation with the visit.",
            "Review the configured party, date, time, payment step, and final acceptance with the guest and restaurant roles. A displayed time or completed form is not a confirmed reservation. Test the accepted reservation and its order handoff rather than inferring capacity rules from a calendar.",
          ],
          links: [
            { label: "Explore restaurant website features", href: "/platform/restaurant-website" },
            { label: "See a live demo", href: "/demo" },
          ],
        },
      ],
    },
    {
      type: "relatedGrid",
      id: "related",
      title: "Plan the next part of your operation.",
      items: [
        {
          label: "Solutions",
          title: "Franchises",
          body: "Coordinate shared standards and local operations across a store network.",
          href: "/solutions/franchises",
        },
        {
          label: "Platform",
          title: "Restaurant website",
          body: "Branded web ordering for your single restaurant or group.",
          href: "/platform/restaurant-website",
        },
        {
          label: "Operate",
          title: "Ordering Delivery",
          body: "Explore the operating choices behind a restaurant delivery fleet.",
          href: "/platform/ordering-delivery",
        },
        {
          label: "Solutions",
          title: "Migrate to OPERO",
          body: "Plan a move from an existing ordering provider.",
          href: "/#migration",
        },
      ],
    },
  ],
  closingCta: {
    title: "See how online ordering can run in your restaurant.",
    body: "Bring your menu, locations, and operating model to a working conversation.",
    docGuide: { label: "Browse services and reservations", href: "/demo" },
    primaryCta: { label: "Book a demo", modalTopic: "Restaurants · Working conversation" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const FRANCHISES_SPEC: SolutionPageSpec = {
  slug: "franchises",
  metaTitle: "Online ordering for franchise networks",
  metaDescription:
    "Set the brand standards a franchise network shares, give each franchisee room to run its shift, and bring locations onto the same channels.",
  hero: {
    breadcrumbLabel: "Franchises",
    title: "Set the brand standard once. Let every franchisee run the shift.",
    lede: `Franchise networks need consistency without turning every local decision into a headquarters task. With ${BRAND}, the franchisor defines what the brand shares, each franchisee decides what belongs to its own stores, and every new location joins the same channels and operating model.`,
    primaryCta: { label: `Talk to ${BRAND}`, modalTopic: "Franchise network consultation" },
    secondaryCta: { label: "See pricing", href: "/pricing" },
    meta: [
      "Brand standards set by the franchisor",
      "Local decisions owned by each franchisee",
      "New locations join the same model",
    ],
    bottomStrip: {
      lead: "Trusted by multi-location brands and global franchise operators.",
      logos: ["Domino's", "KFC", "Starbucks", "Burger King", "Alsea"],
    },
  },
  sections: [
    {
      type: "cardsGrid",
      id: "problem",
      eyebrow: "The franchise relationship",
      title: "A franchise network runs on an agreement about who decides what.",
      columns: 3,
      items: [
        {
          label: "01",
          title: "The brand needs a clear owner",
          body: "A franchise network needs to decide which menu structure belongs to the franchisor and which changes a franchisee can make for its own store.",
        },
        {
          label: "02",
          title: "Franchisees need meaningful scope",
          body: "Franchisees, regional managers, and headquarters should see the locations, settings, and reports that match their part of the agreement.",
        },
        {
          label: "03",
          title: "Every change needs a network path",
          body: "When a policy, menu structure, or setting changes, the network needs to know whether it applies to one franchisee, a region, or every location.",
        },
      ],
    },
    {
      type: "twoColumnLists",
      id: "control",
      eyebrow: "Franchisor and franchisee",
      title: "The franchisor sets the standard. Franchisees run their stores within it.",
      lead: "Separate the brand decisions that must stay consistent across the network from the local decisions a franchisee makes during a shift.",
      panels: [
        {
          eyebrow: "The franchisor defines",
          title: "Network standards",
          bullets: [
            "Catalog structure",
            "Allowed local overrides",
            "Roles and scopes",
            "Network-level settings",
          ],
        },
        {
          eyebrow: "Each franchisee operates",
          title: "The local shift",
          bullets: [
            "Hours and pauses",
            "Availability",
            "Approved local overrides",
            "Store users and handoffs",
          ],
        },
      ],
      steps: [
        {
          num: "01",
          title: "Brand standards with room for local detail",
          body: "Publish a shared menu structure while defining the fields a franchisee can adjust for its own operation.",
        },
        {
          num: "02",
          title: "Access that matches the agreement",
          body: "Scope each franchisee, regional team, and headquarters user to the stores, region, or brand they are responsible for.",
        },
        {
          num: "03",
          title: "Network changes at the right level",
          body: "Apply a change to the selected group of franchise locations instead of repeating the same work store by store.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "channels",
      eyebrow: "Customer channels",
      title: "Every ordering channel follows the same network model.",
      lead: "On web and apps, customers pick the franchise location that will serve them before they build a cart.",
      columns: 4,
      actionLink: { label: "Explore multi-store ordering", href: "/platform/multi-store-ordering" },
      items: [
        {
          label: "01",
          title: "Web and apps",
          body: "A network can plan its storefront and customer apps around its franchise locations, shared menu, and local operating rules.",
        },
        {
          label: "02",
          title: "Kiosk",
          body: "Use a kiosk where self-service fits the store experience, with the same choices that inform the rest of the order flow.",
        },
        {
          label: "03",
          title: "Call center",
          body: "Review whether phone ordering is part of the network’s customer journey and how calls should reach the right location.",
        },
        {
          label: "04",
          title: "Store operations",
          body: "Make sure each enabled channel has a clear path into the franchisee team’s order workflow.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "operations",
      eyebrow: "Operations",
      title: "Give every level of the franchise a view of its own work.",
      lead: "The multi-location model is designed to organize stores by location, region, and brand, so franchisees, area teams, and the franchisor each work from a view that matches their responsibility.",
      steps: [
        {
          num: "01",
          title: "Franchisee view",
          body: "A franchisee’s store team works with its own operating details and order workflow.",
        },
        {
          num: "02",
          title: "Regional view",
          body: "A regional or area team can organize the locations it is responsible for without needing the whole network.",
        },
        {
          num: "03",
          title: "Franchisor view",
          body: "Headquarters works with network-level catalog, role, and change decisions.",
        },
        {
          num: "04",
          title: "Delivery planning",
          body: "Define the delivery model for each store and verify the enabled drivers or partner services before launch.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "integrations",
      eyebrow: "Connected operations",
      title: "Map the systems each franchise location already depends on.",
      lead: "A network rollout should identify point of sale, payment, delivery, loyalty, and reporting dependencies by store or region before the configuration is finalized.",
      columns: 4,
      items: [
        {
          label: "POS",
          title: "Point of sale",
          body: "Confirm the POS workflow and its role in the store’s order and kitchen operations.",
          href: "/integrations/pos",
        },
        {
          label: "Payments",
          title: "Payments",
          body: "Confirm payment methods, merchant responsibilities, and the gateways that apply to each market.",
          href: "/integrations/payments",
        },
        {
          label: "Delivery",
          title: "Delivery services",
          body: "Confirm the own-fleet and connected-partner model for the locations that deliver orders.",
          href: "/integrations/delivery",
        },
        {
          label: "More",
          title: "Other systems",
          body: "Review the systems that need a defined connection before the network goes live.",
          href: "/integrations",
        },
      ],
    },
    {
      type: "controlBand",
      id: "extend",
      eyebrow: "A planning foundation",
      title: "Use the franchise model to structure the rollout conversation.",
      body: "A strong network plan names the stores, franchisees, roles, channels, integrations, and local exceptions before it turns into a rollout schedule.",
      tiles: [
        { title: "Network map", body: "Stores, regions, brands, and responsibility boundaries." },
        { title: "Catalog model", body: "What is shared and what can vary by location." },
        { title: "Channel plan", body: "Which guest channels apply to which stores." },
        { title: "Integration map", body: "The systems and service providers that need validation." },
      ],
    },
    {
      type: "cardsGrid",
      id: "rollout",
      eyebrow: "New locations and franchisees",
      title: "Bring each new location into the network in stages.",
      columns: 3,
      items: [
        {
          label: "01 · Map",
          title: "Define the network",
          body: "Document locations, franchisees, roles, channels, operating rules, and existing dependencies.",
        },
        {
          label: "02 · Validate",
          title: "Test the operating model",
          body: "Walk through the menu, order, store, and delivery paths with the teams that will own them.",
        },
        {
          label: "03 · Expand",
          title: "Apply the confirmed model",
          body: "Bring additional locations and franchisees into a plan only after their local requirements are understood.",
        },
      ],
    },
    {
      type: "commercialScope",
      id: "pricing",
      eyebrow: "Commercial scope",
      title: "Discuss scope around the network you run.",
      body: "Pricing and commercial terms depend on the setup under consideration. Start with locations, channels, integrations, and the operating responsibilities that apply to your network.",
      panelEyebrow: "Franchise network",
      panelTitle: "Bring the operating model to the conversation.",
      kvRows: [
        { label: "Locations and regions", value: "confirm scope" },
        { label: "Customer channels", value: "confirm scope" },
        { label: "Operational integrations", value: "confirm scope" },
        { label: "Delivery model", value: "confirm scope" },
      ],
      primaryCta: { label: `Talk to ${BRAND}`, modalTopic: "Franchise scope review" },
      secondaryCta: { label: "See pricing", href: "/pricing" },
    },
  ],
  closingCta: {
    title: "See how the model can fit your franchise network.",
    body: "Start with the stores, franchisees, and operating decisions you need to coordinate.",
    primaryCta: { label: `Talk to ${BRAND}`, modalTopic: "Franchise network demo" },
    secondaryCta: { label: "See pricing", href: "/pricing" },
  },
};

export const ENTERPRISE_SPEC: SolutionPageSpec = {
  slug: "enterprise",
  metaTitle: "Enterprise Online Ordering Platform",
  metaDescription:
    "Structure the decisions behind a multi-location ordering setup: network scope, channels, operating roles, integrations, and rollout validation.",
  hero: {
    breadcrumbLabel: "Enterprise",
    eyebrow: "Planning sequence",
    title: "Plan the ordering model for a complex restaurant network.",
    lede: `Large networks need more than a feature list. They need a clear view of locations, channels, roles, integrations, and the operating handoffs that each team must own. Use that model to frame an enterprise conversation with ${BRAND}.`,
    primaryCta: { label: "Talk to enterprise sales", modalTopic: "Enterprise sales consultation" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
    meta: [
      "Network and location scope",
      "Operational roles and handoffs",
      "Integration and rollout planning",
    ],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "offer",
      eyebrow: "Enterprise planning",
      title: "Start with the decisions that change the operating model.",
      columns: 3,
      items: [
        {
          label: "01",
          title: "Network scope",
          body: "Map the locations, regions, brands, and service models that need to work together.",
        },
        {
          label: "02",
          title: "Channel scope",
          body: "Identify the website, apps, kiosks, phone, and delivery paths that are relevant to the network.",
        },
        {
          label: "03",
          title: "Role scope",
          body: "Define what headquarters, regional teams, franchisees, and store teams need to see and change.",
        },
        {
          label: "04",
          title: "Integration scope",
          body: "Document the POS, payments, delivery, loyalty, reporting, and other systems that need a validated connection.",
        },
        {
          label: "05",
          title: "Rollout scope",
          body: "Choose a sequence that lets the teams responsible for each location validate the operating model.",
        },
        {
          label: "06",
          title: "Commercial scope",
          body: "Confirm the current product, services, terms, and responsibilities that apply to the proposed setup.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "rollout",
      eyebrow: "A staged approach",
      title: "Make each operating dependency explicit before expanding the network.",
      lead: "A rollout plan is useful when it turns a large program into decisions that the next location can actually validate: menu, order path, store workflow, integrations, and responsible teams.",
      steps: [
        {
          num: "01",
          title: "Map",
          body: "Document locations, markets, channels, store operations, and the systems that are in scope.",
        },
        {
          num: "02",
          title: "Model",
          body: "Define catalog ownership, local overrides, roles, and the handoffs from guest order to store operation.",
        },
        {
          num: "03",
          title: "Validate",
          body: "Review the proposed journeys with the operators, technical teams, and partners that will own them.",
        },
        {
          num: "04",
          title: "Expand",
          body: "Use the validated model as the starting point for the next defined group of locations.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "reliability",
      eyebrow: "Operating requirements",
      title: "Bring the requirements that affect launch decisions into the open.",
      lead: "Availability expectations, support coverage, incident communication, data responsibilities, and regional constraints are material decisions for an enterprise setup. They should be defined in the scope that governs the work, not assumed from a generic page.",
      footnote: "Confirm the current scope, responsibilities, and any applicable commitments in the commercial and technical review.",
      columns: 3,
      items: [
        {
          title: "Support and escalation",
          body: "Define who needs to respond, through which channel, and how the operating team is involved.",
        },
        {
          title: "Service expectations",
          body: "Document the availability and performance requirements that are material to the network’s operating model.",
        },
        {
          title: "Incident communication",
          body: "Agree the contacts, communication path, and follow-up expectations before a launch plan depends on them.",
        },
      ],
      extraCallout: {
        title: `Run ${BRAND} in your own cloud.`,
        bullets: [
          "The whole backend: API, webhooks, and real-time.",
          "One contract at a fixed rate, with no charges per store or by transaction volume.",
        ],
      },
    },
    {
      type: "connectedMap",
      id: "connected",
      eyebrow: "One operating model",
      title: "Trace every customer channel to the team that runs it.",
      body: `A useful network model makes the path from guest ordering to store operations visible. ${BRAND}’s platform pages describe the customer channels and operational surfaces that can be evaluated for that path.`,
      topRow: ["Web", "Apps", "Kiosk", "Phone"],
      hubNote: "Central governance, regional oversight, and store execution",
      bottomRow: ["Ordering Merchant", "POS", "Delivery", "Reports"],
    },
    {
      type: "controlBand",
      id: "agreement",
      eyebrow: "Commercial and technical review",
      title: "Turn network requirements into a defined scope.",
      body: "Bring the decisions that affect responsibility, implementation, and commercial terms to a working conversation. That keeps the proposed setup tied to the network you actually run.",
      tiles: [
        { title: "Network model", body: "Locations, regions, brands, and operating roles." },
        { title: "Channel model", body: "Guest journeys and store handoffs that are in scope." },
        { title: "System model", body: "The integrations and dependencies that need validation." },
        { title: "Commercial model", body: "Current product scope, services, terms, and responsibilities." },
      ],
    },
    {
      type: "relatedGrid",
      id: "related",
      title: "Explore the operating surfaces behind the plan.",
      items: [
        {
          label: "Solutions",
          title: "Franchises",
          body: "Coordinate shared standards and local operations across a franchise network.",
          href: "/solutions/franchises",
        },
        {
          label: "Platform",
          title: "Multi-location operations",
          body: "Review the catalog, roles, and views used to organize a network.",
          href: "/platform/multi-location-operations",
        },
        {
          label: "Solutions",
          title: "Custom projects",
          body: "Discuss a scope that depends on specific technical or operational requirements.",
          href: "/solutions/custom-projects",
        },
        {
          label: "Solutions",
          title: "Migrate to OPERO",
          body: "Plan the decisions involved in moving from an existing provider.",
          href: "/#migration",
        },
      ],
    },
  ],
  closingCta: {
    title: "Bring the network model to the conversation.",
    body: "Start with locations, operating teams, customer channels, and the systems that need a defined path.",
    primaryCta: { label: "Talk to enterprise sales", modalTopic: "Enterprise network architecture review" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const GROCERIES_SPEC: SolutionPageSpec = {
  slug: "groceries",
  metaTitle: "Online Ordering for Groceries and Local Stores",
  metaDescription:
    "Ordering for stores that sell by weight, by unit and by the aisle: large catalogs, scheduled slots, substitutions, and pickers in the Merchant App.",
  hero: {
    breadcrumbLabel: "Groceries & local stores",
    title: "Ordering built for aisles, not just menus.",
    lede: `A grocery order is not a menu order. It is a long list, sold by weight and by unit, picked by a person walking the store, with items that run out and a delivery slot the customer chose. ${BRAND} handles that shape of order end to end.`,
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: ["Large catalogs", "Weights and units", "Scheduled slots"],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "built",
      eyebrow: "Built for a grocery order",
      title: "Everything a basket needs that a menu never did.",
      columns: 3,
      items: [
        {
          label: "01",
          title: "Large catalogs",
          body: "Categories, subcategories, brands and variants for a store that sells the whole aisle, not a dozen dishes. Search and filters that hold up when the catalog is large.",
        },
        {
          label: "02",
          title: "Weights and units",
          body: "Sell by kilo, by gram, by piece or by pack. Set the step a customer can order in, and let the picked weight settle against the order.",
        },
        {
          label: "03",
          title: "Substitutions",
          body: "When an item is out, the picker proposes a replacement and the customer confirms it before the order is packed. No silent swaps.",
        },
        {
          label: "04",
          title: "Scheduled slots",
          body: "Delivery and pickup windows the customer picks at checkout, with capacity per slot so the store only sells the hours it can serve.",
        },
        {
          label: "05",
          title: "Pickers and packers",
          body: "The picking list lives in the Ordering Merchant app: item by item, aisle by aisle, with the weight or count recorded as it is picked.",
        },
        {
          label: "06",
          title: "Delivery zones and fees",
          body: "Draw the zones each store serves, set the fee rule that applies to each one, and dispatch to your own drivers or a delivery partner.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "flow",
      eyebrow: "From the aisle to the doorstep",
      title: "One order, from the slot the customer picked to the door.",
      lead: "The path a grocery order takes is longer than a menu order's, and most of it happens inside the store. Every step below runs on the same order, visible to the customer and to the staff working it.",
      steps: [
        {
          num: "01",
          title: "The customer orders and picks a slot",
          body: "They build a basket from your catalog, choose weights or units per item, and select the delivery or pickup window they want.",
        },
        {
          num: "02",
          title: "A picker works the list in the Merchant App",
          body: "The order arrives as a picking list grouped the way the store is walked. Each item is marked as picked, with its weight or count.",
        },
        {
          num: "03",
          title: "Substitutions are confirmed with the customer",
          body: "If something is out of stock, the picker sends a replacement for approval. The customer accepts, swaps or removes the item before packing.",
        },
        {
          num: "04",
          title: "The order is packed and handed to delivery",
          body: "The final list is packed against the slot, then dispatched to your own driver or a delivery partner, and tracked to the door.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "delivery",
      eyebrow: "Delivery zones and fees",
      title: "Serve the streets you can serve, on the terms you set.",
      lead: `Grocery delivery is a local business before it is a logistics one. ${BRAND} lets each store define where it delivers and what applies there, then run those deliveries with the fleet of its choice.`,
      sidePanel: {
        eyebrow: "Per store",
        title: "What a store sets for itself",
        bullets: [
          "Delivery zones and their boundaries",
          "Fee rules per zone or distance",
          "Slot capacity and cut-off times",
          "Minimum order conditions",
          "Own drivers, partners, or both",
          "Pickup hours and pickup points",
        ],
      },
      steps: [
        {
          num: "01",
          title: "Zones per store",
          body: "Draw a delivery area around each location, or several, so customers only see a store that can actually reach their address.",
        },
        {
          num: "02",
          title: "Fees by zone or distance",
          body: "Set the fee rule that applies per zone, by distance, or by order conditions, so each store can reflect how it serves its neighborhood.",
        },
        {
          num: "03",
          title: "Your drivers or a partner",
          body: "Dispatch to your own fleet in the driver app, or hand the order to a delivery partner when your drivers are busy.",
        },
      ],
    },
    {
      type: "connectedMap",
      id: "connected",
      eyebrow: "One infrastructure",
      title: "The store is the point. The channels are just how people reach it.",
      body: "Web, apps, phone and AI agents write into the same catalog, the same stock and the same slots. The order lands in the Ordering Merchant app of the store that will pick it, and from there to your POS and your drivers.",
      topRow: ["Web", "App", "Kiosk", "Phone", "AI agent"],
      hubNote: "Large catalogs, weights, substitutions, and slot capacity",
      bottomRow: ["Merchant App", "POS", "Drivers", "Loyalty & CRM"],
    },
    {
      type: "controlBand",
      id: "control",
      eyebrow: "One store or many",
      title: "Open a second store without opening a second system.",
      body: `A local chain is a catalog problem before it is anything else. ${BRAND} keeps one storefront over every location you run, with the catalog, stock and slots that each store actually has.`,
      tiles: [
        {
          title: "Multi-store from the start",
          body: "One storefront, every location. Customers reach the store that serves their address.",
        },
        {
          title: "Catalog by store",
          body: "A shared catalog structure, with the items, availability and units each store carries.",
        },
        {
          title: "Slots per store",
          body: "Delivery and pickup windows and capacity set by the store that has to staff them.",
        },
        {
          title: "One view of the group",
          body: "Orders, pickers and deliveries across every store, from the same data.",
        },
      ],
    },
    {
      type: "scopeNotes",
      id: "grocery-scope-notes",
      notes: [
        {
          id: "grocery-app-setup",
          title: "Configure and publish a white-label grocery delivery app.",
          lead: "Start with your store catalog and ordering workflow, then prepare a branded customer app for iOS and Android.",
          paragraphs: [
            "Set up stores, catalog, weights and units, order types, and delivery zones and hours. In Dashboard, configure the app name, theme colors, images, icon, and launch screen. Prepare the developer accounts and signing details, create a test build, and review a complete order before submitting a release to the App Store and Google Play.",
            "For a convenience store, test a basket with bananas by weight and a drink by unit. If a brand is out of stock, have the picker request approval for a substitute before packing. Try immediate delivery when the store and driver can fulfill it, then repeat the order for an available future slot.",
          ],
          links: [
            { label: "Explore Ordering Apps", href: "/platform/ordering-apps" },
            { label: "Review pricing and scope", href: "/pricing" },
          ],
        },
        {
          id: "grocery-instant-scheduled",
          title: "Offer now and scheduled delivery with different operating rules.",
          lead: "An immediate order asks the store to start fulfillment now; a scheduled order carries an available future time. Neither means a guaranteed arrival time.",
          paragraphs: [
            "For immediate orders, align the open store, picking readiness, delivery coverage, and driver availability. For scheduled orders, let customers choose among the configured dates and times; the Website’s preorder choices depend on the business or menu schedule and order context. A closed store alone does not establish future availability.",
          ],
          links: [
            { label: "Explore Ordering Delivery", href: "/platform/ordering-delivery" },
          ],
        },
        {
          id: "grocery-batching-limits",
          title: "Group eligible orders without promising universal route optimization.",
          lead: `${BRAND}’s driver logistics can group nearby orders into a trip within configured limits. Treat third-party delivery orchestration as a connector-specific scope.`,
          paragraphs: [
            "Configure the maximum orders per group, the time window between orders, and distances between pickup stores and delivery points. Driver capacity is a separate setting. Review the grouped request and acceptance in the Driver App; configuration alone does not establish a completed assignment.",
          ],
          links: [
            { label: "Explore Driver App & dispatch", href: "/platform/driver-app" },
          ],
        },
      ],
    },
    {
      type: "relatedGrid",
      id: "related",
      title: "The rest of the stack a store runs on.",
      items: [
        {
          label: "Build",
          title: "Multi-store ordering",
          body: "One storefront over every location you run.",
          href: "/platform/multi-store-ordering",
        },
        {
          label: "Operate",
          title: "Ordering Delivery",
          body: "Your drivers, your zones, your dispatch.",
          href: "/platform/ordering-delivery",
        },
        {
          label: "Operate",
          title: "Ordering Merchant",
          body: "Where staff take, pick and pack every order.",
          href: "/platform/ordering-merchant",
        },
        {
          label: "Solutions",
          title: "Restaurants",
          body: "The same infrastructure, shaped for menus.",
          href: "/solutions/restaurants",
        },
      ],
    },
  ],
  closingCta: {
    title: "See a grocery order picked end to end.",
    body: "Bring your catalog, your slots and your delivery zones, and we will show you the order running through them.",
    docGuide: { label: "Configure automatic dispatch and batching", href: "/demo" },
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
  },
};
