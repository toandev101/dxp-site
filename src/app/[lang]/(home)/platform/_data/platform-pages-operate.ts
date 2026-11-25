import type { PlatformPageSpec } from "./platform-types";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

export const ORDERING_MERCHANT_SPEC: PlatformPageSpec = {
  slug: "ordering-merchant",
  template: "showcase",
  metaTitle: "Ordering Merchant",
  metaDescription:
    "Ordering Merchant brings order handling, kitchen handoff, and store-level controls into one operational workspace for web, iOS, and Android.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Operate", href: "/products#operate" },
      { label: "Ordering Merchant" },
    ],
    title: "Every order in one queue, from accepted to out the door.",
    lede: "Ordering Merchant gives store teams one operational workspace for incoming orders. The order workflow can move from acceptance through preparation, readiness, and dispatch, while kitchen handoff and store controls stay close to the shift.",
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "Web, iOS and Android" },
      { text: "Printing and kitchen display" },
      { text: "Store on or off in one tap" },
    ],
  },
  pageIndex: [
    { label: "Overview", href: "#pillars" },
    { label: "Features", href: "#features" },
    { label: "Order management", href: "#order-management" },
    { label: "Inside the app", href: "#screens" },
    { label: "On every device", href: "#capabilities" },
    { label: "Order queue", href: "#order-queue" },
    { label: "Filters & exports", href: "#find-and-report" },
    { label: "Communication", href: "#stay-in-touch" },
    { label: "Printing", href: "#printing" },
    { label: "Compatible printers", href: "#printers" },
    { label: "Store controls", href: "#store-controls" },
    { label: "Connected", href: "#connected" },
    { label: "Delivery and access", href: "#control" },
  ],
  pillars: {
    eyebrow: "Ordering Merchant",
    title: "One app for the work a store actually does.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "One queue, every channel",
        body: "Direct and connected order channels can be handled from one operational queue, so store teams do not have to switch between separate order views.",
      },
      {
        label: "02",
        title: "A status the customer can see",
        body: "A clear sequence—accepted, preparing, ready, and dispatched—gives the store a shared way to manage each order as work progresses.",
      },
      {
        label: "03",
        title: "Printing and kitchen display",
        body: "Route order information to a printer, a kitchen display, or both, according to the store's kitchen workflow.",
      },
      {
        label: "04",
        title: "The store, under the store's control",
        body: "Store teams can work with menu, hours, availability, and store status alongside order handling.",
      },
    ],
  },
  features: {
    title: "What a store needs during the shift.",
    actionLink: { label: "All features", href: "/pricing#pricing-features" },
    items: [
      {
        title: "Accept, reject and set the time",
        body: "Accept an order with a preparation time, or record a rejection when the store cannot take it.",
      },
      {
        title: "Order statuses end to end",
        body: "Move an order from accepted to preparing, ready, and dispatched with a visible operating sequence for the team.",
      },
      {
        title: "Ticket printing",
        body: "Print the ticket when the order is accepted or on demand, at the station the store already uses.",
      },
      {
        title: "Kitchen display",
        body: "Send accepted orders to a kitchen display so the line reads the queue without paper.",
      },
      {
        title: "Notifications for the store",
        body: "New orders and status changes can surface notifications across the operational workspace.",
      },
      {
        title: "Handoff to a driver",
        body: "Continue a ready delivery order into the delivery workflow from the same order record.",
      },
    ],
  },
  stepsSplit: {
    id: "order-management",
    eyebrow: "Order management",
    title: "Accept, prepare, ready, dispatch.",
    lead: "The queue gives the shift a repeatable sequence. Store teams can set the operating status for each order and route its ticket to the kitchen in the format that fits the location.",
    steps: [
      {
        num: "01",
        title: "Accept",
        body: "The store reviews the order details and accepts it with a preparation time, or records a rejection.",
        tag: "Store action: confirm the order",
      },
      {
        num: "02",
        title: "Prepare",
        body: "The order can be routed to a printer, kitchen display, or both while the kitchen prepares it.",
        tag: "Store action: start preparation",
      },
      {
        num: "03",
        title: "Ready",
        body: "The store marks the order ready, separating completed kitchen work from the next handoff.",
        tag: "Store action: prepare handoff",
      },
      {
        num: "04",
        title: "Dispatch",
        body: "For delivery orders, the store moves the order into the configured delivery workflow for assignment or partner handoff.",
        tag: "Store action: dispatch delivery",
      },
    ],
  },
  preWalkthroughCapabilitiesList: {
    id: "connected-channel-scope",
    eyebrow: "Connected channels",
    title: `Centralize the orders that actually reach ${BRAND}.`,
    items: [
      {
        title: "Which orders are included",
        body: `Orders recorded in ${BRAND} from your configured website, app, kiosk, or other owned channels, plus orders received through an enabled marketplace connector. Confirm receipt, acceptance, and status with a test order for each channel.`,
      },
      {
        title: "Compare sales by channel",
        body: "In Dashboard, open Reports → Business reports. Where available, use Sales Channel and keep period, timezone, and business consistent when comparing. Confirm each connected channel is identified in the returned data; an empty filter does not mean zero sales.",
      },
      {
        title: "What remains outside",
        body: `Orders never sent to ${BRAND}, failed connections, and unimported counter sales remain outside this view. Do not assume universal consolidation of Uber Eats, DoorDash, or Grubhub. Reconciling net payouts, fees, refunds, and taxes also requires the provider’s records.`,
      },
    ],
  },
  screensWalkthrough: {
    id: "screens",
    eyebrow: "Inside the app",
    title: "An order, from the first alert to the last tap.",
    lead: "What the store team sees on a tablet at the counter or a phone in a pocket while an order moves through the shift.",
    caption: "App screens shown with demo stores and menus.",
    items: [
      {
        title: "A new order arrives, with a notification",
        body: "Incoming orders surface immediately on the counter tablet or mobile phone with channel, items, and prep window.",
      },
      {
        title: "Accept, reject, or assign a driver in a few taps",
        body: "Confirm the order with a preparation time, record a rejection, or continue a ready delivery straight into dispatch.",
      },
      {
        title: "Keep the customer and the driver in the loop",
        body: "Every status change and in-order message stays attached to the order history so customers and drivers see current progress.",
      },
      {
        title: "Adjust products and categories as stock changes",
        body: "Toggle individual products or entire categories off when an item runs out during service, and turn them back on once restocked.",
      },
    ],
  },
  preBandsCapabilitiesLists: [
    {
      id: "capabilities",
      eyebrow: "On every device",
      title: "Run the store from the counter or from anywhere.",
      items: [
        {
          title: "On a phone",
          body: "The mobile business app, built with React, keeps order control in your pocket instead of on a back-office screen.",
        },
        {
          title: "Full view on a tablet",
          body: "A landscape view with big, readable information for a mounted screen at the counter, so nothing is missed during a rush.",
        },
        {
          title: "Under your brand",
          body: "Put your logo on the store app so teams review orders, menus, schedules, and driver assignments in an app that carries your brand.",
        },
        {
          title: "Control from anywhere",
          body: "Owners and managers can run the business remotely from the device they already use, on iOS and Android.",
        },
        {
          title: "Locations and roles",
          body: "Coordinate several locations and set the roles, access rules, and handoffs each team needs.",
        },
        {
          title: "Every store, one switch each",
          body: "See every business you manage in the app, with a switch to open or close each one and an orders list you can filter by status, right from your phone.",
        },
      ],
    },
  ],
  capabilityBands: [
    {
      id: "order-queue",
      eyebrow: "Order queue",
      title: "Accept, track, and act on every order.",
      body: "Review incoming orders with customer details, itemized baskets, driver assignment, and clear status transitions from one operational screen.",
      where: "Dashboard and the Ordering Merchant app",
      columns: [
        {
          title: "From accepted to done",
          items: [
            {
              body: "Accept or reject incoming orders, set preparation times, and move each order cleanly through preparing, ready, and completed.",
            },
          ],
        },
        {
          title: "Everything about the order, in one place",
          items: [
            {
              title: "Complete order context",
              body: "Business details, customer contact info, driver assignment, payment method, and itemized modifiers sit in a single detail panel.",
            },
            {
              title: "Why it matters",
              body: "Teams resolve questions and hand off tickets without switching tools or re-checking receipts.",
            },
          ],
        },
      ],
    },
    {
      id: "find-and-report",
      eyebrow: "Find, export, and see the numbers",
      title: "Filter the queue, export it, or check today’s numbers.",
      body: "Slice live and historical orders by store, driver group, status, delivery type, payment method, date, or currency, then export the exact view as CSV.",
      where: "Dashboard",
      subtle: true,
      columns: [
        {
          title: "Filter criteria",
          items: [
            {
              body: "Filter by driver group, business, city, delivery type, country, date range, driver, status, payment method, and currency.",
            },
          ],
        },
        {
          title: "Export and today’s numbers",
          items: [
            {
              title: "Filtered or full CSV export",
              body: "Export all orders or only the current filtered slice for finance, operations, or store reconciliation.",
            },
            {
              title: "Why it matters",
              body: "Managers spot bottlenecks during the shift and share clean order records without manual spreadsheet cleanup.",
            },
          ],
        },
      ],
    },
    {
      id: "stay-in-touch",
      eyebrow: "Customer and driver communication",
      title: "Reach the customer or the driver without leaving the order.",
      body: "Every order carries its own message thread and alert notifications so store staff can coordinate substitutions, timing, or pickup handoffs immediately.",
      where: "Dashboard and the Ordering Merchant app",
      columns: [
        {
          title: "Messages, logged with the order",
          items: [
            {
              body: "Automated status updates and direct chat messages between the store, customer, and driver stay attached to the order record.",
            },
            {
              title: "A call when a message isn’t enough",
              body: "Access customer and driver contact details directly from the order detail screen when an urgent question needs a quick call.",
            },
          ],
        },
        {
          title: "New order alerts",
          items: [
            {
              body: "Real-time dashboard and mobile alerts announce new incoming orders with order numbers so nothing sits unnoticed.",
            },
            {
              title: "Why it matters",
              body: "Fast communication prevents missed items, delayed pickups, and preventable cancellations.",
            },
          ],
        },
      ],
    },
    {
      id: "printing",
      eyebrow: "Printing and kitchen handoff",
      title: "Print the ticket, wherever it needs to go.",
      body: "Send formatted order tickets with customer details, store details, itemized options, and totals to thermal receipt printers or kitchen stations.",
      where: "Dashboard and the Ordering Merchant app",
      subtle: true,
      columns: [
        {
          title: "What prints, and what’s on it",
          items: [
            {
              body: "Configure printer and paper size options to print customer details, store info, itemized products, subtotal, delivery fee, tip, service fee, and total.",
            },
          ],
        },
        {
          title: "Print from wherever the order needs handling",
          items: [
            {
              body: "Print automatically on acceptance or on demand from the web Dashboard or Merchant App on tablet and mobile.",
            },
            {
              title: "Why it matters",
              body: "Kitchen lines and packing stations get accurate tickets in the format they already rely on.",
            },
          ],
        },
      ],
    },
  ],
  postBandsCapabilitiesList: {
    id: "printers",
    eyebrow: "Compatible hardware",
    title: "Connect the printer the kitchen already runs.",
    items: [
      {
        title: "Sunmi thermal printer",
        body: "Combines a thermal printer and a barcode scanner in one device for mobile or desktop use, with quick printing, a large battery, a camera for scanning barcodes, and a 4G module.",
      },
      {
        title: "Star TSP650II",
        body: "A thermal receipt printer for traditional POS as well as mobile, tablet, and web-based POS systems, printing at 300 mm/s with 203 dpi quality, drop-in paper loading, barcode printing (including 2D), and an autocutter.",
      },
      {
        title: "Star TSP654IISK",
        body: "A liner-free thermal sticky label printer for full-service and quick-service restaurants, cafes, and takeaways, printing food and drink labels, allergy labels, order labels, and delivery bag seals.",
      },
      {
        title: "Star TSP143III",
        body: "A POS printer offered with WLAN, LAN, Bluetooth, or USB interface connection.",
      },
      {
        title: "GT Printers",
        body: "GT5000, GT5000S, GT5000S-Special, GT5000W, GT6000S, GT6000SW, and GT6000GW, with a built-in NFC reader, support for a barcode reader, and tickets in multiple languages, including English, Spanish, German, and Italian.",
      },
      {
        title: "GPRS/SMS remote connection",
        body: `For a location without a stable internet connection, a GSM-style terminal beeps to announce a new order so the store can confirm or reject it, which updates the order status. ${BRAND} can also integrate your own printer model for this connection, whatever the brand.`,
      },
    ],
  },
  extraCardGrid: {
    id: "store-controls",
    eyebrow: "Menu, hours and availability",
    title: "The store changes what the store knows.",
    lead: "Store-level controls belong beside operational work. Managers can keep a location's menu, hours, availability, and order status aligned with what the store can handle during the shift.",
    items: [
      {
        title: "Edit the menu",
        body: "Manage products, options, and descriptions at the store level.",
      },
      {
        title: "Set hours",
        body: "Opening hours and schedules for delivery, pickup and dine-in, per store.",
      },
      {
        title: "Mark availability",
        body: "Take a product or an option out for the night and put it back when the prep comes in.",
      },
      {
        title: "Turn the store on or off",
        body: "Set the store's order-taking status when the kitchen needs to pause or resume incoming work.",
      },
      {
        title: "Per-store users",
        body: "Use location-level access to support the operating roles that work in a store.",
      },
      {
        title: "Notifications",
        body: "Keep order and status updates visible to the teams handling the shift.",
      },
    ],
  },
  connected: {
    eyebrow: "One infrastructure",
    title: "The store is the last mile of the same order.",
    body: "Ordering Merchant is designed to sit within the same operating foundation as the ordering channels and delivery workflow. That connection helps the store follow an order from intake through kitchen handoff and dispatch in one operating context.",
    topRow: ["Web", "App", "Kiosk", "Phone", "AI agent"],
    hubNote: "Unified order intake, kitchen handoff, and dispatch",
    bottomRow: ["Merchant App", "POS", "Drivers", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Dispatch",
    title: "Your own drivers, or someone else's, from the same screen.",
    body: "When a delivery order is ready, the store can continue it into its delivery workflow. A business can plan for its own drivers, a connected delivery partner, or a combination that reflects how the location operates.",
    cards: [
      {
        title: "Driver App handoff",
        body: "Continue an order to the Driver App workflow for an in-house delivery operation.",
      },
      {
        title: "Third-party delivery",
        body: "Use the configured delivery-partner handoff for locations that rely on a courier network.",
      },
      {
        title: "Web, iOS and Android",
        body: "Give store teams an operational workspace across web, iOS, and Android.",
      },
      {
        title: "Per-store accounts",
        body: "Support store-level access for teams that work from different locations.",
      },
    ],
  },
  related: {
    title: "The rest of the operation.",
    items: [
      {
        label: "Operate",
        title: "Multi-location operations",
        body: "Run every store from one place, with per-store settings.",
        href: "/platform/multi-location-operations",
      },
      {
        label: "Build",
        title: "Ordering Call Center",
        body: "Your phone team takes the order, the store receives it.",
        href: "/platform/ordering-call-center",
      },
      {
        label: "Integrations",
        title: "Delivery integrations",
        body: "Your own drivers or a third-party delivery partner.",
        href: "/platform/third-party-delivery",
      },
      {
        label: "Integrations",
        title: "POS integrations",
        body: "Send accepted orders straight into the point of sale.",
        href: "/integrations/pos",
      },
    ],
  },
  closingCta: {
    title: "See the queue on your own menu.",
    body: "Explore how a store team can receive an order, move it through kitchen handoff, and continue it into delivery operations.",
    docGuide: { label: "Business App overview", href: "/demo" },
    primaryCta: { label: "Book a demo", modalTopic: "Ordering Merchant · Guided demo" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const DASHBOARD_SPEC: PlatformPageSpec = {
  slug: "dashboard",
  template: "catalog",
  metaTitle: "Ordering and Delivery Management Dashboard",
  metaDescription:
    "Configure stores, menus, orders, delivery, marketing, reports, and user roles from the OPERO Dashboard, in one workspace.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Dashboard" },
    ],
    title: "Run stores, menus, orders, and reports from one dashboard.",
    lede: "The Dashboard is where you configure your platform and follow the operation: stores and brands, menus, orders and delivery, marketing, reports, users, and messages.",
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "Stores, menus, and orders" },
      { text: "Delivery and marketing" },
      { text: "Reports and user roles" },
    ],
  },
  pageIndex: [
    { label: "Overview", href: "#pillars" },
    { label: "Features", href: "#features" },
    { label: "Modules", href: "#tour" },
    { label: "Day to day", href: "#capabilities" },
    { label: "Guide", href: "#resources" },
    { label: "Related products", href: "#related" },
  ],
  pillars: {
    title: "What your team manages in the Dashboard.",
    items: [
      {
        title: "Stores and brands",
        body: "Multi-store management, brands, delivery zones, cities, and the order types each store accepts.",
      },
      {
        title: "Menus and catalog",
        body: "Unlimited products, options with conditions, scheduled and shared menus, and stock.",
      },
      {
        title: "Orders and delivery",
        body: "Live and manual orders, driver assignment, delivery automation rules, and third-party couriers.",
      },
      {
        title: "Growth and reports",
        body: "Coupons, advanced offers, cart recovery, loyalty, business reports, and data exports.",
      },
    ],
  },
  featureCatalog: {
    title: "88 features, included in every plan.",
    categories: [
      {
        category: "Ordering experience",
        items: [
          { title: "Table reservations", description: "Configure table booking availability and guest seating details alongside ordering.", href: "/demo" },
          { title: "School ordering", description: "Organize scheduled meal ordering workflows tailored for school programs.", href: "/demo" },
          { title: "B2B ordering", description: "Support recurring wholesale and business-to-business order catalogs.", href: "/demo" },
        ],
      },
      {
        category: "Menus and catalog",
        items: [
          { title: "Unlimited products and categories", description: "Add as many menu categories, items, and variations as each store needs.", href: "/demo" },
          { title: "Menu management", description: "Create, edit, and publish menus across stores from a single workspace.", href: "/demo" },
          { title: "Parent categories", description: "Group related categories cleanly so large catalogs remain easy to browse.", href: "/demo" },
          { title: "Product options and conditions", description: "Configure required choices, add-ons, and conditional modifier logic.", href: "/demo" },
          { title: "Quantity limits", description: "Set minimum and maximum quantity rules on items and option groups.", href: "/demo" },
          { title: "Multiple menus per store", description: "Run distinct breakfast, lunch, dinner, or seasonal menus per location.", href: "/demo" },
          { title: "Scheduled menus", description: "Publish menus automatically by day of week and time window.", href: "/demo" },
          { title: "Menus by order type", description: "Tailor available items and pricing for delivery, pickup, or dine-in.", href: "/demo" },
          { title: "Menus by ordering channel", description: "Show channel-specific catalogs across web, app, kiosk, and call center.", href: "/demo" },
          { title: "Shared menus", description: "Maintain a master menu across multiple stores with controlled overrides.", href: "/demo" },
          { title: "Inventory and stock", description: "Track product inventory counts and prevent overselling out-of-stock items.", href: "/demo" },
          { title: "Quick disable", description: "Pause any item or modifier in one toggle during a busy service.", href: "/demo" },
          { title: "Vacation mode and service pauses", description: "Temporarily pause a store or schedule holiday closures in advance.", href: "/demo" },
          { title: "Product details", description: "Attach descriptions, tags, allergens, photos, and metadata to every item.", href: "/demo" },
          { title: "Weight-based pricing", description: "Price produce, meats, and specialty goods dynamically by weight.", href: "/demo" },
          { title: "Product cost tracking", description: "Record item costs to monitor margins across locations and channels.", href: "/demo" },
          { title: "Special instructions control", description: "Enable or restrict free-text customer notes per item or store.", href: "/demo" },
          { title: "Catalog importer", description: "Import and update large product catalogs in bulk via spreadsheet.", href: "/demo" },
        ],
      },
      {
        category: "Cart, checkout, and payments",
        items: [
          { title: "Automatic taxes", description: "Apply store, zone, or item-level tax calculations automatically at checkout.", href: "/demo" },
          { title: "Delivery fees by zone", description: "Set distance, radius, or polygon-based delivery fees per store zone.", href: "/demo" },
          { title: "Service fees", description: "Configure fixed or percentage service fees by store or order type.", href: "/demo" },
          { title: "Platform fee", description: "Define marketplace or commission fee rules cleanly in checkout totals.", href: "/demo" },
          { title: "Payment methods by channel and order type", description: "Choose which gateways and cash/card options appear per channel.", href: "/demo" },
          { title: "Split payments", description: "Support multi-party settlement and payout splits where configured.", href: "/demo" },
        ],
      },
      {
        category: "Order management",
        items: [
          { title: "Real-time order management", description: "Follow every incoming order live from placement through completion.", href: "/platform/ordering-merchant#order-management" },
          { title: "Manual orders", description: "Create phone, walk-in, or assisted orders directly inside the Dashboard.", href: "/platform/ordering-call-center" },
          { title: "Order printing", description: "Print kitchen and receipt tickets directly from the order screen.", href: "/platform/ordering-merchant#printing" },
          { title: "Prep and delivery times", description: "Set baseline preparation times and adjust dynamically during rush hours.", href: "/platform/ordering-merchant" },
          { title: "Order time targets", description: "Monitor SLA timers so delayed orders surface immediately for action.", href: "/platform/ordering-merchant" },
          { title: "Cancellations and refunds", description: "Handle full or partial cancellations and refund records from the order view.", href: "/demo" },
          { title: "Order review and fraud flags", description: "Flag suspicious orders for manual review before fulfillment.", href: "/demo" },
          { title: "Order filters", description: "Filter orders by store, status, driver, payment method, date, and city.", href: "/platform/ordering-merchant#find-and-report" },
          { title: "In-order chat", description: "Message customers and drivers inside a logged thread attached to each order.", href: "/platform/ordering-merchant#stay-in-touch" },
          { title: "Support tickets", description: "Track and resolve order-related customer or store inquiries centrally.", href: "/demo" },
        ],
      },
      {
        category: "Stores and locations",
        items: [
          { title: "Multi-store management", description: "Operate single stores, regional chains, or hundreds of locations together.", href: "/platform/multi-location-operations" },
          { title: "Store setup", description: "Configure addresses, hours, contact info, photos, and rules per store.", href: "/platform/multi-location-operations" },
          { title: "Multi-store owners", description: "Assign franchise owners or area operators to their specific group of stores.", href: "/platform/multi-location-operations" },
          { title: "Brand management", description: "Group locations under distinct brands with dedicated visual settings.", href: "/platform/multi-location-operations" },
          { title: "Delivery zones", description: "Draw polygon, radius, or zip-code delivery zones for each location.", href: "/platform/ordering-delivery" },
          { title: "Shared delivery zones", description: "Reuse standardized delivery coverage areas across nearby stores.", href: "/platform/ordering-delivery" },
          { title: "Cities", description: "Organize stores, delivery areas, and regional teams by city.", href: "/platform/multi-location-operations" },
          { title: "Store order types", description: "Enable delivery, pickup, curbside, or dine-in independently per store.", href: "/demo" },
          { title: "Store signup and approval", description: "Onboard new marketplace merchants with a review and approval workflow.", href: "/solutions#marketplaces" },
          { title: "Store invoices", description: "Generate period statements and invoices for participating stores.", href: "/demo" },
          { title: "Kiosk management", description: "Configure and monitor in-store self-ordering kiosks from the Dashboard.", href: "/platform/ordering-kiosk" },
        ],
      },
      {
        category: "Delivery and drivers",
        items: [
          { title: "Delivery dashboard", description: "Track live orders, driver positions, and delivery zones on one map.", href: "/platform/ordering-delivery" },
          { title: "Unlimited drivers", description: "Add as many in-house or contracted drivers as your operation requires.", href: "/platform/driver-app" },
          { title: "Driver management", description: "Maintain driver profiles, vehicles, documents, and active statuses.", href: "/platform/driver-app" },
          { title: "Driver teams", description: "Group drivers by store, city, or zone to control dispatch pools.", href: "/platform/ordering-delivery" },
          { title: "Manual assignment", description: "Assign or reassign orders to specific drivers whenever an exception arises.", href: "/platform/ordering-delivery" },
          { title: "Automatic assignment", description: "Dispatch ready orders automatically based on distance, load, and shift.", href: "/platform/ordering-delivery" },
          { title: "Order batching", description: "Group nearby deliveries onto a single driver run for faster fulfillment.", href: "/platform/ordering-delivery" },
          { title: "Driver location history", description: "Review route and GPS location logs for completed deliveries.", href: "/platform/driver-app" },
          { title: "Driver app settings", description: "Control proof-of-delivery rules, location checks, and app permissions.", href: "/platform/driver-app" },
          { title: "Driver schedules", description: "Coordinate active shift windows for each driver and fleet group.", href: "/platform/driver-app" },
          { title: "Driver availability", description: "See who is online, busy on a run, or off shift in real time.", href: "/platform/ordering-delivery" },
          { title: "Third-party delivery", description: "Connect external courier networks with quote selection and fallback rules.", href: "/platform/third-party-delivery" },
          { title: "Delivery companies", description: "Manage partner courier companies and their assigned territories.", href: "/platform/third-party-delivery" },
          { title: "Driver invoices", description: "Compile driver payout summaries and delivery fee statements.", href: "/platform/ordering-delivery" },
        ],
      },
      {
        category: "Marketing and loyalty",
        items: [
          { title: "Coupons and discounts", description: "Create promo codes with usage caps, validity dates, and store scope.", href: "/demo" },
          { title: "Advanced offers", description: "Run percentage, fixed-amount, BOGO, and minimum-basket promotions.", href: "/demo" },
          { title: "Cart recovery", description: "Follow up on abandoned carts to bring customers back to checkout.", href: "/demo" },
          { title: "Open cart tracking", description: "View active carts in progress to understand drop-off and conversion.", href: "/demo" },
          { title: "Cash wallet and cashback", description: "Issue store credit and cashback balances customers spend at checkout.", href: "/demo" },
          { title: "Points wallet", description: "Award loyalty points on qualifying orders for future redemptions.", href: "/demo" },
          { title: "Loyalty levels", description: "Define tiered rewards that unlock perks for repeat customers.", href: "/demo" },
          { title: "Gift cards", description: "Sell and redeem digital gift cards across your ordering channels.", href: "/demo" },
          { title: "Marketing automation", description: "Trigger targeted messages and offers based on order behavior.", href: "/demo" },
          { title: "Customer growth tools", description: "Run campaigns designed to increase repeat order frequency.", href: "/demo" },
          { title: "Referral invitations", description: "Reward existing customers when referred friends place their first order.", href: "/demo" },
          { title: "Customer records", description: "View order history, addresses, wallets, and preferences per customer.", href: "/demo" },
        ],
      },
      {
        category: "Reports and reviews",
        items: [
          { title: "Business reports", description: "Review sales, order volume, channels, and store performance trends.", href: "/demo" },
          { title: "End-of-day reports", description: "Close out daily shifts with clear payment, tax, and order summaries.", href: "/demo" },
          { title: "Advanced report filters", description: "Segment analytics by date range, brand, location, and sales channel.", href: "/demo" },
          { title: "Driver reports", description: "Analyze delivery times, completion rates, and fleet efficiency.", href: "/platform/ordering-delivery" },
          { title: "Data exports", description: "Export filtered order, sales, and customer datasets to CSV.", href: "/demo" },
          { title: "Reviews and ratings", description: "Collect, moderate, and respond to customer ratings per store and driver.", href: "/demo" },
          { title: "Activity logs", description: "Audit configuration changes and operational actions across team users.", href: "/demo" },
        ],
      },
      {
        category: "Administration and security",
        items: [
          { title: "Admin dashboard", description: "Central control plane for platform operators and headquarters teams.", href: "/platform/dashboard" },
          { title: "Branded dashboard", description: "Apply your logo and brand styling to the back-office workspace.", href: "/demo" },
          { title: "User roles", description: "Define granular access levels for admins, managers, store owners, and agents.", href: "/platform/multi-location-operations" },
          { title: "Business settings", description: "Configure global checkout, language, currency, and operational defaults.", href: "/demo" },
          { title: "Session management", description: "Monitor and manage active signed-in sessions for team security.", href: "/demo" },
        ],
      },
      {
        category: "Integrations and developer tools",
        items: [
          { title: "Ordering Connect", description: "Connect POS, payment gateways, delivery networks, and CRM apps.", href: "/integrations" },
          { title: "Marketplace integrations", description: "Route supported external channel orders into your operational workflow.", href: "/integrations" },
        ],
      },
    ],
    footnote: "10 more features work across the whole platform. The feature catalog lists them all.",
    cta: { label: "Open in the feature catalog", href: "/pricing#pricing-features" },
  },
  screensWalkthrough: {
    id: "tour",
    eyebrow: "Dashboard modules",
    title: "A tour of the modules your team works in.",
    lead: "Each module keeps one part of the operation on its own screen, from the orders coming in to the settings behind the whole platform.",
    caption: "Dashboard screens shown with demo stores and data.",
    items: [
      {
        title: "Orders: control every incoming order",
        body: "Track incoming orders with live status, business, customer, and driver columns, plus SLA timers and instant filtering.",
      },
      {
        title: "Messages: reach anyone in a few clicks",
        body: "Open any order conversation inside the Dashboard messages module to coordinate with customers, stores, or drivers.",
      },
      {
        title: "Stores: every store on one screen",
        body: "Manage store photos, categories, menus, delivery zones, and one-tap enable/disable switches from a single directory.",
      },
      {
        title: "Users: your customer base and team roles",
        body: "Inspect customer profiles, order histories, and team permissions for headquarters, managers, and local staff.",
      },
      {
        title: "Business Intelligence: reports for your next move",
        body: "Review live orders maps, sales charts, channel comparisons, and advanced reports to guide operational decisions.",
      },
      {
        title: "Delivery: drivers, managers, groups, and companies",
        body: "Configure driver availability, fleet teams, delivery automation rules, and third-party courier connections.",
      },
      {
        title: "Settings: the rules behind the platform",
        body: "Control checkout behavior, languages, currencies, notifications, and security settings across your workspace.",
      },
    ],
  },
  capabilitiesList: {
    id: "capabilities",
    eyebrow: "Day to day",
    title: "Stay ahead of stockouts and order changes.",
    items: [
      {
        title: "Low-stock alerts",
        body: "Get notified when a product runs low or goes out of stock, instead of leaving it listed as available.",
      },
      {
        title: "Edit a placed order",
        body: "Change a line item on an order directly from the Orders module rather than canceling and starting over.",
      },
    ],
  },
  extraCardGrid: {
    id: "resources",
    title: "More about the Dashboard",
    items: [
      {
        title: "Ordering Dashboard guide",
        body: "Everything there is to know about the Dashboard, module by module, in the documentation.",
        href: "/demo",
      },
    ],
  },
  related: {
    title: "Other products in operations",
    items: [
      {
        title: "Merchant app",
        body: "Store teams receive and manage orders on a tablet or phone.",
        href: "/platform/ordering-merchant",
      },
      {
        title: "Driver app",
        body: "Drivers receive, navigate, and complete deliveries.",
        href: "/platform/driver-app",
      },
    ],
  },
  closingCta: {
    title: "See it working with your operation.",
    body: "Tell us how you sell and deliver, and we will walk through the products and features that fit.",
    docGuide: { label: "Dashboard", href: "/demo" },
    primaryCta: { label: `Talk to ${BRAND}`, modalTopic: "Dashboard · Guided demo" },
    secondaryCta: { label: "See pricing", href: "/pricing" },
  },
};

export const MULTI_LOCATION_OPERATIONS_SPEC: PlatformPageSpec = {
  slug: "multi-location-operations",
  template: "showcase",
  metaTitle: "Multi-location operations",
  metaDescription:
    "Operate a network of locations with headquarters, regional, and store views, a shared catalog with local decisions, and roles per team.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Operate", href: "/products#operate" },
      { label: "Multi-location operations" },
    ],
    title: "Operate every location from a view built for its scope.",
    lede: "Multi-location operations need more than a list of stores. Whether you run a corporate chain, a multi-brand group, or a franchise network, headquarters, regional teams, and local operators need a clear view of the locations they are responsible for, a shared catalog structure, and rules for the changes each group may make.",
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "Network views by operating scope" },
      { text: "Shared catalog and local decisions" },
      { text: "Responsibilities by location and role" },
    ],
  },
  pillars: {
    eyebrow: "Multi-location operations",
    title: "Four operating questions a network needs to answer.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "One network view",
        body: "Give each operating role a way to see the locations in its scope and the order activity that needs attention.",
      },
      {
        label: "02",
        title: "Master catalog, local overrides",
        body: "Set the catalog structure centrally, then name the local decisions a store may make about availability, price, or service.",
      },
      {
        label: "03",
        title: "Roles and permissions",
        body: "Match access to responsibility: local operators work with their locations, regional teams work with their area, and headquarters has the wider view it needs.",
      },
      {
        label: "04",
        title: "Bulk changes",
        body: "Identify the changes that must be coordinated across a group of locations and the approvals required before they take effect.",
      },
    ],
  },
  features: {
    title: "Design the network view around operational decisions.",
    actionLink: { label: "All features", href: "/pricing#pricing-features" },
    items: [
      {
        title: "Network view for headquarters",
        body: "Give headquarters a concise view of locations, their current operating status, and the items that need a network-level decision.",
      },
      {
        title: "Regional manager view",
        body: "Use the same operating vocabulary at regional level, scoped to the locations that team is responsible for.",
      },
      {
        title: "Store, region and brand filters",
        body: "Model the business structure people already use: individual stores, regions, and, where relevant, distinct brands.",
      },
      {
        title: "Master catalog",
        body: "Give central teams a place to establish the products, modifiers, and categories that form the shared menu structure.",
      },
      {
        title: "Local overrides",
        body: "Document the store-specific information that must stay local, such as availability, hours, or service area, and the guardrails around it.",
      },
      {
        title: "Bulk changes across stores",
        body: "Create a repeatable approval path for a shared change, from the set of affected locations to the confirmation each team needs.",
      },
      {
        title: "Stock per location",
        body: "Track availability and stock at each location on the shared catalog, so a network of stores does not sell an item one store has run out of.",
      },
    ],
  },
  stepsSplit: {
    id: "permissions",
    eyebrow: "Roles and permissions",
    title: "Give every operating role an explicit scope.",
    lead: "Local, regional, and headquarters teams should not discover their responsibility by trial and error, whether a location is company-owned or run by a franchisee. Define the locations each role can see, the changes it may request or make, and the reports it needs to run its part of the network.",
    sideCards: [
      {
        title: "The network",
        body: "Headquarters and regional teams govern catalog standards, cross-store rollouts, and area-wide reviews.",
      },
      {
        title: "Their own locations",
        body: "Local operators and franchisees manage daily availability, shift hours, and live order fulfillment.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Scope by location",
        body: "Attach each role to the locations, region, or brand it is accountable for so the operating view begins with the right context.",
      },
      {
        num: "02",
        title: "Scope by setting",
        body: "State which changes are central decisions and which are local decisions, then make that boundary understandable to the people doing the work.",
      },
      {
        num: "03",
        title: "Scope by report",
        body: "Keep reporting scope consistent with operating scope, so an insight reaches the people who can act on it.",
      },
    ],
  },
  secondaryStepsSplit: {
    id: "reports",
    eyebrow: "Reports",
    title: "Review the network at the level where decisions happen.",
    lead: "A useful operating review answers different questions at store, region, and network level. Define those questions first, then make sure the people responsible for each level can see the relevant context.",
    steps: [
      {
        num: "01",
        title: "By store",
        body: "A location review helps the store team focus on its own ordering activity, fulfillment choices, and operational follow-up.",
      },
      {
        num: "02",
        title: "By region",
        body: "A regional review gives the team a way to compare locations that share an area, operating pattern, or accountable leader.",
      },
      {
        num: "03",
        title: "By brand",
        body: "A brand review helps an operator understand what needs to stay consistent across the locations that represent that brand.",
      },
      {
        num: "04",
        title: "By channel and period",
        body: "A channel and period review lets teams define the comparisons that matter for their own operating rhythm.",
      },
    ],
  },
  connected: {
    eyebrow: "One infrastructure",
    title: "Make the operating model visible across the network.",
    body: "A connected view starts with the relationships your team relies on: customer channels, store scope, catalog ownership, local fulfillment choices, and the people who need to act on the resulting information.",
    topRow: ["Storefront", "Apps", "Kiosk", "Call center", "AI agent"],
    hubNote: "Network scope, shared catalog, and per-store permissions",
    bottomRow: ["Network view", "Ordering Merchant", "POS", "Reports"],
  },
  control: {
    eyebrow: "Central and local",
    title: "Set it once at the top. Let each store run its day.",
    body: "Central teams should own the decisions that must stay consistent. Local teams should own the information that changes location by location. Agree that boundary before rolling out a shared operating model.",
    cards: [
      {
        title: "Bulk changes",
        body: "Define which changes affect a group of locations and the review path that confirms each affected team is ready.",
      },
      {
        title: "Master catalog",
        body: "Keep the common menu structure visible while documenting the local choices that must remain flexible.",
      },
      {
        title: "Roles and permissions",
        body: "Map local, regional, and headquarters responsibilities to the locations and decisions each team owns.",
      },
      {
        title: "One network view",
        body: "Give the network a way to frame store, regional, and brand-level questions before people turn data into action.",
      },
    ],
  },
  related: {
    title: "The rest of the network stack.",
    items: [
      {
        label: "Build",
        title: "Multi-store ordering",
        body: "How customers find a location and order from its menu, prices, hours, and delivery zones.",
        href: "/platform/multi-store-ordering",
      },
      {
        label: "Solutions",
        title: "Franchises",
        body: "How franchisors set brand standards and franchisees run their own stores on this operating model.",
        href: "/solutions/franchises",
      },
      {
        label: "Operate",
        title: "Ordering Merchant",
        body: "Where each store takes and runs its own orders.",
        href: "/platform/ordering-merchant",
      },
      {
        label: "Solutions",
        title: "Enterprise",
        body: "Rollout, integrations and support for large networks.",
        href: "/solutions/enterprise",
      },
    ],
  },
  closingCta: {
    title: "See your network in one view.",
    body: "Bring your location structure, local exceptions, and operating roles to a working session so you can map a shared model before rollout.",
    primaryCta: { label: `Talk to ${BRAND}`, modalTopic: "Multi-location operations · Working session" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const ORDERING_DELIVERY_SPEC: PlatformPageSpec = {
  slug: "ordering-delivery",
  template: "showcase",
  metaTitle: "Ordering Delivery",
  metaDescription:
    "Ordering Delivery brings zones, delivery rules, driver availability, and dispatch into the operating workflow for delivery orders.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Operate", href: "/products#operate" },
      { label: "Ordering Delivery" },
    ],
    title: "Delivery you configure, not a service you rent.",
    lede: "Ordering Delivery brings delivery zones, rules, and driver availability into one operating workflow. Teams can plan for an in-house fleet, a connected delivery partner, or a hybrid model, while keeping delivery work connected to the order.",
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "Auto dispatch" },
      { text: "Fleet, partner, or hybrid" },
    ],
  },
  pageIndex: [
    { label: "Overview", href: "#pillars" },
    { label: "Features", href: "#features" },
    { label: "Dispatch", href: "#dispatch-rules" },
    { label: "Delivery dashboards", href: "#dashboards" },
    { label: "Tracking and proof", href: "#capabilities" },
    { label: "Before you configure", href: "#questions" },
    { label: "Contactless delivery", href: "#contactless" },
    { label: "Fleet models", href: "#models" },
    { label: "Connected", href: "#connected" },
    { label: "Controls", href: "#control" },
  ],
  pillars: {
    eyebrow: "Ordering Delivery",
    title: "Four settings run the whole last mile.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "Zones and fees",
        body: "Define delivery coverage and delivery rules for each store, so teams can plan for the areas and hours they serve.",
      },
      {
        label: "02",
        title: "Dispatch rules",
        body: "Use assignment and fallback rules to direct delivery work to the fleet or partner workflow that fits the order.",
      },
      {
        label: "03",
        title: "Driver App",
        body: "Your drivers get the pickup, the route, the customer and the proof of delivery on iOS and Android.",
      },
      {
        label: "04",
        title: "Live tracking",
        body: "Keep delivery status connected to the order workflow as it moves from the store to the delivery operation.",
      },
    ],
  },
  features: {
    title: "What you can set, per store and per zone.",
    actionLink: { label: "All features", href: "/pricing#pricing-features" },
    items: [
      {
        title: "Delivery zones",
        body: "Define delivery areas for a store and associate each area with the delivery rules the operation needs.",
      },
      {
        title: "Fees and minimums",
        body: "Manage delivery fee and minimum-order rules as part of the delivery configuration.",
      },
      {
        title: "Schedules and preorders",
        body: "Coordinate store schedules and preparation timing with the delivery workflow.",
      },
      {
        title: "Driver groups and shifts",
        body: "Organize drivers around stores or delivery areas and use availability as an input to dispatch.",
        href: "/platform/driver-app",
      },
      {
        title: "Payouts and cash",
        body: "Keep delivery operations connected to the driver workflow and the order record.",
      },
      {
        title: "Performance",
        body: "Review delivery activity in the operating context of the driver, store, and delivery area.",
      },
    ],
  },
  stepsSplit: {
    id: "dispatch-rules",
    eyebrow: "Dispatch rules",
    title: "From the queue to the doorstep, without a dispatcher on the phone.",
    lead: "Dispatch turns the store's ready delivery order into a delivery task. The workflow brings zone, delivery-rule, and availability decisions together before work moves to a driver or partner handoff.",
    steps: [
      {
        num: "01",
        title: "Order enters the queue",
        body: "A delivery order reaches the operating workflow with the store and order context needed for the next step.",
      },
      {
        num: "02",
        title: "Zone and fee are resolved",
        body: "Delivery coverage and store-level rules determine how the operation evaluates the order for fulfillment.",
        tag: "Coverage and rules",
      },
      {
        num: "03",
        title: "Auto-assign",
        body: "Assignment can use the operation's driver availability and dispatch rules to direct work into an in-house fleet workflow.",
        tag: "In-house workflow",
      },
      {
        num: "04",
        title: "Fallback to a network",
        body: "A configured partner handoff can support the circumstances in which a store uses a courier network.",
        tag: "Partner workflow",
      },
      {
        num: "05",
        title: "The customer tracks live",
        body: "Delivery progress remains associated with the order as it passes through the chosen fulfillment workflow.",
        tag: "Order context retained",
      },
    ],
  },
  screensWalkthrough: {
    id: "dashboards",
    eyebrow: "Delivery dashboards",
    title: "Four views of the same delivery operation.",
    lead: "Each dashboard puts a different part of delivery in front of the people who run it, from the order list and the area map to the whole fleet moving live.",
    caption: "Dashboard screens shown with demo stores and orders.",
    items: [
      {
        title: "Delivery Dashboard: orders and the delivery-area map",
        body: "Review the active delivery order list directly beside a live map of your configured store delivery zones.",
      },
      {
        title: "Orders Delivery Dashboard: every order from pending to delivered",
        body: "Track each delivery order across every milestone from initial acceptance through handoff and completion.",
      },
      {
        title: "All-in-one Delivery Dashboard: orders, drivers, and the map on one screen",
        body: "Combine the Orders Manager list with live driver availability and real-time map pins for rapid dispatching.",
      },
      {
        title: "Drivers Delivery Dashboard: the whole fleet, live",
        body: "See where every online driver is across your coverage zones and balance active runs at a glance.",
      },
    ],
  },
  preBandsCapabilitiesLists: [
    {
      id: "capabilities",
      eyebrow: "Tracking, alerts, and proof",
      title: "What the delivery dashboards help your team see and do.",
      items: [
        {
          title: "Real-time tracking",
          body: "See each delivery vehicle’s current location and the estimated arrival time for every order. Drivers get real-time GPS to navigate accurately, avoid traffic, find delivery locations, and stay on schedule.",
        },
        {
          title: "Order status overview",
          body: "A summary of order status (pending, in transit, delivered, or delayed) on the dashboard.",
        },
        {
          title: "Order management",
          body: "Create, edit, and manage delivery orders, including order details, driver or vehicle assignment, and delivery priority.",
        },
        {
          title: "Traffic-aware route grouping",
          body: "Google Maps calculates traffic to sharpen delivery estimates and help group orders onto the same route.",
        },
        {
          title: "Alerts and notifications",
          body: "Configure alerts for critical events, such as a delayed delivery or a canceled order.",
        },
        {
          title: "Delivery instructions",
          body: "Show drivers detailed instructions, including special customer requests, delivery windows, and handling requirements for the items.",
        },
        {
          title: "Proof of delivery",
          body: "Drivers confirm each delivery with a PIN code, a photo, a video, or the customer’s signature, which supports transparency and reduces disputes.",
        },
        {
          title: "Status changes checked by location",
          body: "Settings keep a driver from marking an order as picked up unless they are at the store, or as delivered unless they are at the customer’s address. You set the distance in meters that counts as being there.",
        },
        {
          title: "Communication tools",
          body: "Where enabled, dispatchers, drivers, and customers communicate directly through the dashboard.",
        },
        {
          title: "Performance metrics",
          body: "Indicators such as delivery success or completion rate, average delivery time, delivery cost per order, driver performance, and customer satisfaction ratings, where enabled.",
        },
        {
          title: "Customer feedback",
          body: "Customer comments and ratings can appear on the dashboard, next to the delivery data they relate to, to review satisfaction and areas to improve.",
        },
      ],
    },
    {
      id: "questions",
      eyebrow: "Before you configure",
      title: "Questions to settle with your delivery and support teams.",
      items: [
        { title: "Which events should trigger an alert, and who should receive it?" },
        { title: "Which performance metrics does your team need to review, and how often?" },
        { title: "Should customer feedback be visible on the dashboard or handled elsewhere?" },
        { title: "Which delivery types need manual assignment?" },
        { title: "How close must drivers be to the store and to the customer to change an order’s status?" },
        { title: "Which communication tools should drivers have?" },
      ],
    },
  ],
  capabilityBands: [
    {
      id: "contactless",
      eyebrow: "Delivery options",
      title: "Let customers choose a contactless handoff.",
      body: "Customers can opt for drop-off at the door during checkout, passing clear handoff instructions straight to the Driver App.",
      where: "Checkout and the Driver App",
      columns: [
        {
          title: "How it works",
          items: [
            {
              body: "When enabled, customers select contactless delivery at checkout and add drop-off notes; the driver sees the request on the order and confirms handoff with photo or configured proof.",
            },
          ],
        },
        {
          title: "Why it matters",
          items: [
            {
              body: "Reduces friction at the door while keeping a clear delivery record for both the customer and support.",
            },
          ],
        },
      ],
    },
  ],
  extraCardGrid: {
    id: "models",
    eyebrow: "Coverage",
    title: "Own fleet, partner network, or both.",
    lead: "Choose the delivery model that reflects how each store is staffed. The same operating foundation can connect direct ordering work to an in-house fleet workflow, a partner workflow, or a combination of both.",
    actionLink: { label: "Run your own delivery", href: "/solutions#marketplaces" },
    items: [
      {
        title: "Own fleet",
        body: "Operate an in-house fleet through the Driver App and the delivery rules that match each store.",
      },
      {
        title: "Hybrid",
        body: "Plan for an in-house fleet and a connected delivery partner as complementary fulfillment paths.",
      },
      {
        title: "Partner network only",
        body: "Use a connected delivery-partner workflow for stores that do not operate their own fleet.",
      },
    ],
  },
  connected: {
    eyebrow: "One infrastructure",
    title: "Delivery is a stage of the order, not a separate system.",
    body: "Ordering Delivery connects delivery work to the ordering and store workflow. That shared context helps teams carry an order from store preparation into the delivery path they have configured.",
    topRow: ["Web", "App", "Kiosk", "Phone", "AI agent"],
    hubNote: "Zones, dispatch rules, fleet, and third-party fallback",
    bottomRow: ["Merchant App", "POS", "Drivers", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Control",
    title: "Every rule of your delivery is a setting, not a request.",
    body: "Delivery configuration is organized around the operating decisions a store needs to make: coverage, delivery rules, assignment, and the fulfillment path for each order.",
    cards: [
      {
        title: "Rules per store",
        body: "Plan coverage and delivery behavior at the store level.",
      },
      {
        title: "Manual override",
        body: "Keep an operational path for a manager when a delivery needs an explicit assignment decision.",
      },
      {
        title: "Zones per store",
        body: "Use delivery areas to reflect the local coverage each location can support.",
      },
      {
        title: "Partner fallback",
        body: "Use the configured delivery-partner path when the operation calls for courier support.",
      },
    ],
  },
  related: {
    title: "The rest of the last mile.",
    items: [
      {
        label: "Operate",
        title: "Driver App",
        body: "What your drivers see and do on the road.",
        href: "/platform/driver-app",
      },
      {
        label: "Connect",
        title: "Third-party delivery",
        body: "Hand the order to a network under your brand.",
        href: "/platform/third-party-delivery",
      },
      {
        label: "Connect",
        title: "Delivery networks",
        body: "Every partner you can fall back to.",
        href: "/integrations/delivery",
      },
      {
        label: "By outcome",
        title: "Run your own delivery",
        body: "The case for a fleet of your own.",
        href: "/solutions#marketplaces",
      },
    ],
  },
  closingCta: {
    title: "Set up a zone and dispatch an order.",
    body: "Explore how delivery coverage, driver availability, and the fulfillment path can be organized around your stores.",
    docGuide: { label: "Delivery overview", href: "/demo" },
    primaryCta: { label: "Book a demo", modalTopic: "Ordering Delivery · Guided demo" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const DRIVER_APP_SPEC: PlatformPageSpec = {
  slug: "driver-app",
  template: "showcase",
  metaTitle: "Driver App & dispatch",
  metaDescription:
    "The Driver App brings pickup, route guidance, communication, delivery confirmation, and shift availability into the delivery workflow on iOS and Android.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Operate", href: "/products#operate" },
      { label: "Driver App & dispatch" },
    ],
    title: "The app your drivers work in, and the dispatch behind it.",
    lede: "The Driver App supports the work between a ready order and its delivery handoff. Drivers can work from an assignment, follow the route, communicate with the store or customer, and record a delivery confirmation as part of the delivery workflow.",
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "iOS and Android" },
      { text: "Auto or manual assignment" },
      { text: "Delivery confirmation" },
    ],
  },
  pillars: {
    eyebrow: "Driver App",
    title: "Four things a driver needs, in one app.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "Routes and navigation",
        body: "Give the driver a delivery sequence and a clear next stop so the route is part of the workflow rather than a separate list.",
      },
      {
        label: "02",
        title: "Proof of delivery",
        body: "Record a photo, a video, signature, or PIN as a delivery confirmation associated with the delivery workflow.",
      },
      {
        label: "03",
        title: "Store and customer communication",
        body: "Keep a delivery conversation connected to the store or customer when a driver needs information for the handoff.",
      },
      {
        label: "04",
        title: "Shifts and availability",
        body: "Use availability and shift context to keep delivery work aligned with the drivers operating for a store.",
      },
    ],
  },
  features: {
    title: "What the app does between the store and the door.",
    actionLink: { label: "Ordering Delivery details", href: "/platform/ordering-delivery" },
    items: [
      {
        title: "Stacked orders in sequence",
        body: "Present the driver with the delivery sequence and next stop needed for the current run.",
      },
      {
        title: "One-tap maps",
        body: "Open the next delivery stop in Google Maps or Waze with one tap, as part of the driver's work.",
      },
      {
        title: "Customer chat and store chat",
        body: "Give the driver a path to communicate with the store or customer when the delivery needs clarification. Each order has one conversation with the customer, the store, and your admin team, and the driver can message any of them.",
      },
      {
        title: "Proof at the door",
        body: "Capture the delivery confirmation method used for the order: photo, video, signature, or PIN.",
      },
      {
        title: "Shift context",
        body: "Keep the driver's active delivery work connected to the store and shift context that dispatch uses.",
      },
      {
        title: "Online per store",
        body: "Use the driver's store or delivery-area availability as part of the delivery operation.",
      },
    ],
  },
  stepsSplit: {
    id: "journey",
    eyebrow: "One delivery",
    title: "A delivery, from assignment to the door.",
    lead: "The journey links a ready order to the person making the delivery. Each step preserves the operating context that the store, driver, and delivery workflow need for the handoff.",
    steps: [
      {
        num: "01",
        title: "Dispatch assigns",
        body: "The delivery workflow can direct an order to a driver through its configured assignment path or an explicit operating decision.",
      },
      {
        num: "02",
        title: "The driver accepts",
        body: "The driver works from an assigned delivery in the app with the information needed for the route and handoff.",
      },
      {
        num: "03",
        title: "Pickup at the store",
        body: "At pickup, the driver can use the order context and communication path to coordinate with the store.",
      },
      {
        num: "04",
        title: "Navigation and chat",
        body: "Route guidance and communication support the driver on the way to the delivery destination.",
      },
      {
        num: "05",
        title: "Proof of delivery",
        body: "Record the configured delivery confirmation at handoff: photo, video, signature, or PIN.",
      },
      {
        num: "06",
        title: "Delivery record",
        body: "The completed delivery remains connected to the order and the operating workflow for follow-up.",
      },
    ],
  },
  capabilityBands: [
    {
      id: "pickup-and-tracking",
      eyebrow: "Pickup and delivery tracking",
      title: "From accepting the order to the door.",
      body: "Drivers accept incoming runs, launch turn-by-turn navigation, and update live order status so customers and dispatch stay informed at every mile.",
      where: "Driver App",
      columns: [
        {
          title: "Accept and go",
          items: [
            {
              body: "Review pickup location, drop-off address, and order notes in one tap before heading to the store.",
            },
            {
              title: "Get there efficiently",
              body: "Launch Google Maps or Waze directly from the active stop to avoid delays and follow batched routes cleanly.",
            },
          ],
        },
        {
          title: "Keep the customer posted",
          items: [
            {
              body: "Each status tap updates the order record and live customer tracking link automatically.",
            },
            {
              title: "Why it matters",
              body: "Fewer status calls to the store and clearer accountability from pickup through doorstep handoff.",
            },
          ],
        },
      ],
    },
    {
      id: "messaging",
      eyebrow: "Messaging",
      title: "Keep drivers, the business, and customers talking.",
      body: "In-app order chat keeps every clarification logged inside the active delivery without sharing personal phone numbers.",
      where: "Driver App",
      subtle: true,
      columns: [
        {
          title: "Message the business",
          items: [
            {
              body: "Drivers coordinate pickup readiness, missing items, or parking details directly with store staff.",
            },
            {
              title: "Customers chat with their driver",
              body: "Customers can share gate codes or handoff notes in the same order conversation.",
            },
          ],
        },
        {
          title: "Why it matters",
          items: [
            {
              body: "Keeps deliveries moving smoothly and gives support teams a complete conversation record if a dispute arises.",
            },
          ],
        },
      ],
    },
  ],
  connected: {
    eyebrow: "One infrastructure",
    title: "Drivers are one side of the same system.",
    body: "The Driver App sits inside the delivery workflow rather than beside it. Store preparation, delivery assignment, driver work, and delivery confirmation remain connected to the order context throughout the handoff.",
    topRow: ["Web", "App", "Kiosk", "Phone", "AI agent"],
    hubNote: "Live dispatch, route guidance, and proof of delivery",
    bottomRow: ["Merchant App", "POS", "Drivers", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Control",
    title: "Organize the delivery operation around the people doing the work.",
    body: "Drivers can sign up on their own or be added by an admin. Driver availability and groupings help an operating team match delivery work to the store or delivery area where it is being performed.",
    cards: [
      {
        title: "Driver groups",
        body: "Organize drivers around the stores or delivery areas they support.",
      },
      {
        title: "Shifts and availability",
        body: "Use availability as part of the operating context for delivery work.",
      },
      {
        title: "Delivery handoff",
        body: "Keep pickup, route progress, and delivery confirmation connected to the driver workflow.",
      },
      {
        title: "Delivery records",
        body: "Keep completed delivery work connected to the relevant order and operating context.",
      },
    ],
  },
  related: {
    title: "The rest of delivery.",
    items: [
      {
        label: "Operate",
        title: "Ordering Delivery",
        body: "Zones, fees, dispatch rules and live tracking.",
        href: "/platform/ordering-delivery",
      },
      {
        label: "By outcome",
        title: "Run your own delivery",
        body: "Your drivers, your zones, your rules.",
        href: "/solutions#marketplaces",
      },
      {
        label: "Connect",
        title: "Third-party delivery",
        body: "Partner networks for when your fleet is full.",
        href: "/platform/third-party-delivery",
      },
      {
        label: "Operate",
        title: "Ordering Merchant",
        body: "What the store sees while the driver is out.",
        href: "/platform/ordering-merchant",
      },
      {
        label: "Feature",
        title: "Driver groups",
        body: "How stores and zones draw from the right driver pool.",
        href: "/platform/ordering-delivery",
      },
      {
        label: "Connect",
        title: "Driver App setup",
        body: "Plan driver accounts, delivery groups, and assignment for your project.",
        href: "/demo",
      },
    ],
  },
  closingCta: {
    title: "Put your fleet on one app.",
    body: "Explore how the Driver App carries a delivery from pickup through route guidance and delivery confirmation.",
    docGuide: { label: "Driver App", href: "/demo" },
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
  },
};

export const THIRD_PARTY_DELIVERY_SPEC: PlatformPageSpec = {
  slug: "third-party-delivery",
  template: "showcase",
  metaTitle: "Third-Party Delivery Integrations",
  metaDescription:
    "Connect third-party delivery to the order flow your team already operates. Configure partner selection by store and track status.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Operate", href: "/products#operate" },
      { label: "Third-party delivery" },
    ],
    title: "Bring third-party delivery into the order flow you already run.",
    lede: `When an order is ready, ${BRAND} sends the delivery request to the partners connected for that store. Your selection rule can choose a partner or move to the next option when the first one cannot take the order, while the delivery handoff stays attached to the order record.`,
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "Partner connections" },
      { text: "Rules by store" },
      { text: "Delivery status on the order" },
    ],
  },
  pillars: {
    eyebrow: "Third-party delivery",
    title: "Use a delivery network without breaking the order flow.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "Quotes from each network",
        body: "The delivery request starts with the order your team is already preparing, so the partner receives the store, customer, and fulfillment context it needs.",
      },
      {
        label: "02",
        title: "Fallback between networks",
        body: "Set a preferred partner or a fallback path for the cases where a delivery option declines or does not fit the order.",
      },
      {
        label: "03",
        title: "Choose the delivery model per store",
        body: "Use a network-only model, combine partners with your own drivers, or reserve a partner for the situations your team defines.",
      },
      {
        label: "04",
        title: "Keep delivery context on the order",
        body: "The delivery handoff stays connected to the original order, giving the store one operational record to follow.",
      },
    ],
  },
  features: {
    title: "What the handoff does for you.",
    actionLink: { label: "All delivery networks", href: "/integrations/delivery" },
    items: [
      {
        title: "Request a courier from the order",
        body: "The accepted order becomes the delivery request, so the store does not need to rebuild it in a separate courier workflow.",
      },
      {
        title: "Best quote, or your rule",
        body: "Choose a preferred partner or location-specific rule so the handoff reflects how that store operates.",
      },
      {
        title: "Fallback when a network says no",
        body: "A fallback rule gives the order a next delivery option when the first partner cannot take it.",
      },
      {
        title: "Plan coverage with available partners",
        body: "Review which delivery partners serve each market and location before you make them part of a store’s delivery setup.",
      },
      {
        title: "Set delivery terms for the store",
        body: "Decide how delivery fees and service areas should be presented in the customer experience for each location.",
      },
      {
        title: "Manual override from Ordering Merchant",
        body: "Give the operations team a clear path to review a live delivery handoff when an exception needs attention.",
      },
    ],
  },
  stepsSplit: {
    id: "flow",
    eyebrow: "How it runs",
    title: "How a network delivery runs.",
    lead: "The handoff uses the same order context your store already works with: readiness, location, delivery choice, and the resulting status all belong to the same operational flow.",
    steps: [
      {
        num: "01",
        title: "The order is ready",
        body: "The store prepares the order in its usual operating flow before the delivery handoff begins.",
        tag: "In your queue",
      },
      {
        num: "02",
        title: "Quotes are requested",
        body: "The delivery request is sent according to the partner connections and rules configured for that store.",
        tag: "All networks at once",
      },
      {
        num: "03",
        title: "A network is selected by rule",
        body: "The configured selection rule determines which delivery option should be considered for that order.",
        tag: "Your rule",
      },
      {
        num: "04",
        title: "A courier is assigned and tracked",
        body: "The selected partner takes the delivery request, and its delivery progress can remain associated with the order.",
        tag: "Under your brand",
      },
      {
        num: "05",
        title: "Delivered, status back on the order",
        body: "The delivery outcome becomes part of the order context that operations and support can review.",
        tag: "One record",
      },
    ],
  },
  midScopeNotes: [
    {
      id: "quote-scope",
      title: "A delivery quote is not a universal cost estimator",
      lead: "A connected provider quote depends on a store, addresses, timing, order details and account terms. Use it in the order workflow; it is not a public parcel-shipping calculator or a guaranteed rate for every address. Confirm eligibility, quote expiry, surcharges and courier acceptance before promising delivery.",
      paragraphs: [
        "A scheduled order sets a future delivery. Recurrence creates repeated orders under a rule and needs explicit change, cancellation, payment and availability handling for each occurrence. Do not assume an automatic recurring program across every provider: review that scope for the specific stores and connections. Coverage and service windows can vary by provider and territory.",
      ],
      links: [
        { label: "Choose a provider by territory and volume", href: "/integrations" },
        { label: "Compare your fleet and partners", href: "/platform/ordering-delivery" },
        { label: "Configure delivery services", href: "/demo" },
      ],
    },
  ],
  extraCardGrid: {
    id: "models",
    eyebrow: "Coverage",
    title: "Own fleet, hybrid or network only.",
    lead: "Third-party delivery can be one part of a store’s last-mile plan. Map the model to the locations, hours, service areas, and operational responsibilities that matter to your team.",
    actionLink: { label: "Ordering Delivery", href: "/platform/ordering-delivery" },
    items: [
      {
        title: "Network only",
        body: "A location can use connected delivery partners as its primary delivery option when that model fits the operation.",
      },
      {
        title: "Hybrid",
        body: "A location can combine its own delivery operation with connected partners for defined coverage or exception scenarios.",
      },
    ],
  },
  connected: {
    eyebrow: "One infrastructure",
    title: "Treat delivery as part of the order, not a separate handoff.",
    body: "The delivery setup connects to the catalog, stores, customer details, and order context your team already operates. That gives the store one place to understand the order and its delivery progress.",
    topRow: ["Web", "App", "Kiosk", "Phone", "AI agent"],
    hubNote: "Multi-network quotes, fallback routing, and branded tracking",
    bottomRow: ["Merchant App", "POS", "Drivers", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Control",
    title: "When a network takes an order is your decision.",
    body: "Document which partners, service areas, selection rules, and exception paths each store needs before delivery goes live. Those choices determine how the delivery handoff should operate.",
    cards: [
      {
        title: "Rules per store",
        body: "Map the delivery partners and preferences that apply to the location.",
      },
      {
        title: "Time-of-day rules",
        body: "Define the hours and operating scenarios that call for a third-party delivery option.",
      },
      {
        title: "Out-of-zone orders",
        body: "Plan how delivery requests outside an owned service area should be handled.",
      },
      {
        title: "Delivery cost policy",
        body: "Define the commercial and operational rules that determine when a delivery option should be used.",
      },
    ],
  },
  related: {
    title: "The rest of the last mile.",
    items: [
      {
        label: "Connect",
        title: "Delivery networks",
        body: "Every partner you can connect, city by city.",
        href: "/integrations/delivery",
      },
      {
        label: "Operate",
        title: "Ordering Delivery",
        body: "Zones, fees, dispatch rules and shifts.",
        href: "/platform/ordering-delivery",
      },
      {
        label: "Operate",
        title: "Driver App",
        body: "What your own drivers see on the road.",
        href: "/platform/driver-app",
      },
      {
        label: "By business",
        title: "Delivery companies",
        body: "For the network carrying other people's orders.",
        href: "/solutions/delivery-companies",
      },
    ],
  },
  closingCta: {
    title: "Map a delivery handoff for your operation.",
    body: "Bring a representative store, delivery area, and operating scenario. We can walk through the partner-selection and exception flow your team needs to evaluate.",
    docGuide: { label: "Delivery services overview", href: "/demo" },
    primaryCta: { label: "Book a demo", modalTopic: "Third-Party Delivery · Guided demo" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};
