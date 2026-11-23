import type { PlatformPageSpec } from "./platform-types";
import { siteConfig } from "@/lib/site-config";

const BRAND = siteConfig.name;

export const ORDERING_WEB_SPEC: PlatformPageSpec = {
  slug: "ordering-web",
  template: "showcase",
  metaTitle: "Online Ordering Website",
  metaDescription:
    "Plan a branded web ordering journey and the operational connections it needs for your website launch project.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Build", href: "/products#build" },
      { label: "Ordering Web" },
    ],
    title: "Plan a web ordering journey around your operation.",
    lede: "Ordering Web is the place to discuss the storefront, menu and order flow your customers should use, plus the operations and connections that must support it.",
    primaryCta: { label: "Book a demo", modalTopic: "Ordering Web · Guided demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "Storefront planning" },
      { text: "Branded journey" },
      { text: "Project-based scope" },
    ],
    mockupCaption: "Example storefront preview with menu categories, a cart, and checkout.",
    bottomStrip: {
      lead: "Start with the order journey, then map the work behind it.",
      items: ["Storefront", "Menu", "Order flow", "Fulfillment"],
    },
  },
  pillars: {
    eyebrow: "Ordering Web",
    title: "Design the storefront around a real order journey.",
    numbered: true,
    items: [
      {
        label: "01",
        title: "Customer journey",
        body: "Start with the menu, service choices and order steps customers need to understand before they place an order.",
      },
      {
        label: "02",
        title: "Brand and domain",
        body: "Discuss the brand expression, domain setup and responsibilities for your website.",
      },
      {
        label: "03",
        title: "Operational readiness",
        body: "Identify the hosting, availability and support expectations that need an explicit project agreement.",
      },
      {
        label: "04",
        title: "Implementation approach",
        body: "Choose the appropriate configuration or implementation path after confirming the customer journey and technical requirements.",
      },
    ],
  },
  features: {
    title: "Clarify the storefront decisions before implementation.",
    actionLink: { label: "All features", href: "/pricing#pricing-features" },
    items: [
      {
        title: "Menu structure",
        body: "Define the categories, products and choices customers must see to place the right order.",
      },
      {
        title: "Checkout scope",
        body: "Confirm the payment, account and checkout requirements that apply to the selected market and project.",
      },
      {
        title: "Service choices",
        body: "Map the fulfillment choices customers need, including the store, timing and handoff that each one requires.",
      },
      {
        title: "Location model",
        body: "Identify how customers find the correct store and which location rules need to be supported.",
      },
      {
        title: "Order communication",
        body: "Decide which status, service and follow-up communications belong in the customer journey.",
      },
      {
        title: "Public information",
        body: "Plan the storefront pages and local information customers need before they start an order.",
      },
    ],
  },
  journey: {
    id: "journey",
    eyebrow: "See Ordering Web in action",
    title: "See the marketplace journey customers move through.",
    lead: "Start with a business, choose from its menu, review the cart, and return to the order detail. The views below show these moments across the web experience.",
    steps: [
      {
        num: "01",
        eyebrow: "Discover",
        title: "Find businesses that fit the customer's location.",
        body: "Customers can set a delivery address, explore categories and filters, or use a map to move from a broad marketplace to a business listing.",
        setupText: "Choose the location, categories, filters, and businesses that belong in your marketplace.",
        caption: "Find a business through categories, filters, and listings.",
        previewType: "marketplace-home",
        extraViews: [
          "Set a delivery address before exploring nearby businesses.",
          "Compare businesses with categories and delivery details in view.",
          "Browse businesses, open a menu, and begin an order on the web.",
        ],
      },
      {
        num: "02",
        eyebrow: "Choose",
        title: "Turn a business listing into a menu choice.",
        body: "A business page brings together menu categories, product images, prices, and item options. Customers can review an item before adding it to the cart.",
        setupText: "Define the menu, options, upsells, and relevant offers each business can show.",
        caption: "Open a business page to browse its menu.",
        previewType: "store-menu",
        extraViews: [
          "See featured menu items and prices together.",
          "Move between menu categories to find an item.",
          "Review product options before adding an item.",
          "Choose item extras before adding to the cart.",
        ],
      },
      {
        num: "03",
        eyebrow: "Place",
        title: "Keep the cart and checkout choices clear.",
        body: "Customers can review items, choose delivery or pickup where offered, enter order details, and see the payment choices and total available for that order.",
        setupText: "Confirm fulfillment, payment, fees, offers, and loyalty choices for your project.",
        caption: "Review delivery details, payment, and the total before ordering.",
        previewType: "checkout",
        extraViews: [
          "Edit quantities and review the cart subtotal.",
          "Keep customer information and fulfillment choices together.",
          "Review the payment and loyalty choices available for the order.",
        ],
      },
      {
        num: "04",
        eyebrow: "Follow up",
        title: "Give every order a place to return to.",
        body: "Order details show the items and status. The web experience also shows a rating prompt and a way to start another order.",
        setupText: "Choose the status updates and return visit actions your customers should see.",
        caption: "Check items, order status, and delivery information after checkout.",
        previewType: "order-details",
        extraViews: [
          "See ratings alongside featured menu items.",
          "Give returning customers a way to sign in.",
        ],
      },
    ],
  },
  widgetSection: {
    id: "widget",
    eyebrow: "Ordering Widget",
    title: "Decide where ordering belongs in your web experience.",
    body: "When an existing website is part of the customer journey, use the project conversation to choose the placement and flow that should lead into ordering.",
    caption: "Example entry points; availability depends on your plan.",
  },
  capabilityBands: [
    {
      id: "staging",
      eyebrow: "Before you launch",
      title: "Try changes on a staging site before customers see them.",
      body: "A staging version of your ordering website is a separate copy of the live site, used to test changes before they reach customers.",
      where: "Your project setup, alongside the live storefront",
      columns: [
        {
          title: "What a staging site is for",
          items: [
            { body: "Test new menus, pricing rules, themes, and integrations without touching live customer traffic." },
          ],
        },
        {
          title: "Why it matters",
          items: [
            { title: "Fewer surprises at launch", body: "Bugs and issues get caught on staging instead of in front of customers." },
            { title: "A team ready on day one", body: "Staff who have already practiced on staging can support customers as soon as the site goes live." },
          ],
        },
      ],
      link: { label: "See order and product reports", href: "/products#operate" },
    },
    {
      id: "cart-and-checkout",
      eyebrow: "Cart and checkout",
      title: "Customers review everything before they pay.",
      body: "Customers browse the menu, pick items, and finish the order from one screen, with a cart they can change until the last step.",
      where: "Ordering Web and customer apps",
      columns: [
        {
          title: "One screen to order",
          items: [
            { body: "Keep items, quantities, fulfillment details, and payment methods in one clear flow." },
          ],
        },
        {
          title: "Why it matters",
          items: [
            { title: "Fewer order mistakes", body: "A last review of items and payment details catches errors before the order reaches the store." },
          ],
        },
      ],
      link: { label: "Explore payment integrations", href: "/integrations" },
    },
    {
      id: "seo",
      eyebrow: "Search visibility",
      title: "Pages and images that search engines understand.",
      body: "SEO settings let you describe your platform, stores, products, and images the way you want them to appear in search results.",
      where: "Dashboard, for Ordering Web",
      columns: [
        {
          title: "What you can set",
          items: [{ body: "Custom page titles, meta descriptions, friendly URLs, and image alt text across stores and categories." }],
        },
        {
          title: "Why it matters",
          items: [
            { title: "More customers from search", body: "Clear descriptions help the right customers find and choose your website in search results." },
          ],
        },
      ],
    },
    {
      id: "help-section",
      eyebrow: "Built-in help",
      title: "Answers inside the ordering experience.",
      body: "A help section inside your ordering channels gives customers and your team a place to find answers without leaving the site.",
      where: "Ordering Web and customer apps; content edited from the Dashboard",
      columns: [
        {
          title: "What the help section includes",
          items: [{ body: "Editable guides, FAQs, and order-support content managed centrally from the Dashboard." }],
        },
        {
          title: "Why it matters",
          items: [
            { title: "Fewer repeat questions", body: "Customers resolve common questions themselves, so your team spends less time on them." },
          ],
        },
      ],
    },
  ],
  connected: {
    eyebrow: "One infrastructure",
    title: "Map the storefront to the work behind an order.",
    body: "Use the planning map to identify the menu, store, fulfillment and system connections that must be reviewed with the selected customer journey.",
    topRow: ["Web", "App", "Kiosk", "Phone", "AI agent"],
    hubNote: "Selected ordering channels and operations",
    bottomRow: ["Merchant App", "POS", "Drivers", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Project decisions",
    title: "Agree the implementation path before launch.",
    body: "The project should record the storefront design, content ownership, integrations and technical responsibilities that its chosen ordering journey requires.",
    cards: [
      { title: "Brand expression", body: "Clarify the brand assets, pages and content ownership required for the storefront." },
      { title: "Content needs", body: "Identify the public information customers need before they reach the menu." },
      { title: "Technical connections", body: "Identify which system connections or implementation decisions must be evaluated with technical owners." },
      { title: "Delivery responsibilities", body: "Confirm the hosting, implementation and support responsibilities included in your plan." },
    ],
  },
  scopeNotes: [
    {
      id: "website-future-orders",
      title: "Let customers select a future order time within the configured schedule.",
      lead: "Advance ordering uses the availability returned for the business, order type, and Website configuration, rather than a universal list of delivery slots.",
      paragraphs: [
        "When preorder is available, the customer chooses a date and then an offered time before continuing to the menu. Depending on configuration, availability follows business hours or a selected menu schedule and the business timezone.",
        "Test the enabled order type, future-date range, store or menu hours, and the cart after changing the schedule. For curbside, also agree the pickup identifier and staff handoff.",
      ],
      links: [
        { label: "Review pickup, delivery, and dine-in", href: "/platform/restaurant-website" },
        { label: "Explore live demos", href: "/demo" },
      ],
    },
    {
      id: "website-tracking-amounts",
      title: "Distinguish order tracking from a portal that hides internal rates.",
      lead: "Website order details can show status, fulfillment information, products, and saved customer totals. Conditional rows can include taxes, fees, delivery charges, tips, or refunds.",
      paragraphs: [
        "The customer’s order charges are different from your negotiated carrier or internal commercial rates. Define the fields customers may see and review the signed-in view and any shared order-access link separately.",
      ],
      links: [{ label: "Explore order tracking and notifications", href: "/platform/ordering-apps" }],
    },
  ],
  related: {
    title: "Every other way your customers order.",
    items: [
      { label: "Build", title: "Ordering Apps", body: "Explore the app journey and requirements alongside the web storefront.", href: "/platform/ordering-apps" },
      { label: "Build", title: "Ordering Kiosk", body: "Explore the in-store customer journey alongside the web storefront.", href: "/platform/ordering-kiosk" },
      { label: "Build", title: "Ordering Call Center", body: "Explore assisted ordering needs for teams that take orders by phone.", href: "/platform/ordering-call-center" },
      { label: "New", title: "AI Ordering Agents", body: "Explore conversational ordering alongside the web storefront.", href: "/platform/ai-ordering-agents" },
      { label: "Build", title: "Restaurant website", body: "The same ordering website for a single restaurant brand instead of a marketplace.", href: "/platform/restaurant-website" },
    ],
  },
  closingCta: {
    title: "Plan your storefront around the operation.",
    body: "Use a demo to review the customer journey and confirm the website, domain, payment, integration and fulfillment scope relevant to your project.",
    docGuide: { label: "Website overview", href: "/demo" },
    primaryCta: { label: "Book a demo", modalTopic: "Ordering Web · Guided demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
  },
};

export const ORDERING_APPS_SPEC: PlatformPageSpec = {
  slug: "ordering-apps",
  template: "showcase",
  metaTitle: "Branded Ordering Apps for iOS and Android",
  metaDescription:
    "Plan a branded iOS and Android ordering app experience around the catalog, stores, and order flow your business operates.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Build", href: "/products#build" },
      { label: "Ordering Apps" },
    ],
    title: "Bring your ordering experience to iOS and Android.",
    lede: "A branded app gives customers a mobile place to browse a menu, return to past orders, and follow an order after checkout. Use the same store, catalog, and ordering decisions across the customer journey instead of planning each mobile screen in isolation.",
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "iOS and Android app experience" },
      { text: "Branded customer journey" },
      { text: "Store and catalog-aware ordering" },
    ],
    bottomStrip: {
      lead: "Design the mobile channel around the way customers choose a store, place an order, and return.",
      items: ["Order accepted", "In the kitchen", "On the way", "Delivered"],
    },
  },
  pillars: {
    eyebrow: "Ordering Apps",
    title: "A mobile channel that follows your ordering model.",
    numbered: true,
    items: [
      { label: "01", title: "iOS and Android", body: "Shape the customer journey for the two mobile platforms your customers use, from store selection through order follow-up." },
      { label: "02", title: "Your brand in the journey", body: "Use your name, visual identity, and menu experience so the app feels like part of the same business customers visit on the web." },
      { label: "03", title: "The same catalog as the web", body: "Keep store selection and menu information consistent across the mobile experience and the storefront customers already recognize." },
      { label: "04", title: "Built for return visits", body: "Consider the moments after a first order: account details, order history, order status, and relevant follow-up communications." },
    ],
  },
  features: {
    title: "Plan the mobile experience around real customer moments.",
    actionLink: { label: "All features", href: "/pricing#pricing-features" },
    items: [
      { title: "Push notifications", body: "A clear notification strategy can keep customers informed about order changes or relevant offers without making them reopen the app to check." },
      { title: "Saved addresses and cards", body: "Account details can reduce repeated entry when a customer returns, while your team defines which fields and payment methods are supported." },
      { title: "One-tap reorder", body: "Order history gives a returning customer a starting point for rebuilding a familiar order before they review the current menu." },
      { title: "Live order tracking", body: "A status view helps customers understand the stage of an order and where to look for the next update." },
      { title: "Loyalty in the pocket", body: "If your program includes rewards, put the balance and available reward choices where customers can find them during an order." },
      { title: "Payment choices in context", body: "Decide which payment methods appear in the app alongside the store, currency, and checkout rules that apply to that order." },
    ],
  },
  appExampleShowcase: {
    eyebrow: "Marketplace App example",
    title: "See Marketplace App in action.",
    body: "Explore how a customer can find a business, choose from its menu, check out, follow an order, and come back to the app. These screens show one Marketplace App experience; your stores and operating choices shape yours.",
    whiteLabelPoints: [
      { title: "Store listing preparation", body: "Prepare the name, artwork, screenshots, description, and account ownership needed for the app-store listing your team intends to publish." },
      { title: "Your identity", body: "Carry the visual system customers know through the menu, account, order status, and communications they receive." },
      { title: "Release responsibilities", body: "Clarify who owns app-store access, release approvals, content updates, and ongoing product changes before development starts." },
      { title: "Your customers' language", body: "The app is available in more than 25 languages, so customers can order in the one they use." },
    ],
    faq: [
      {
        q: "How does the app connect to my stores and catalog?",
        a: "Start with the stores and menus you operate. Decide which customers each store serves, what they can order, and how menu and availability updates reach the app. The connection depends on your setup.",
      },
      {
        q: "What should we decide before launch?",
        a: "Confirm your stores and catalog, order and delivery options, payment methods, customer sign-in, app-store accounts, and who handles an order after checkout.",
      },
      {
        q: "Where can I explore more features?",
        a: "Use All features above to explore more options, then choose the ones that fit the app you want to launch.",
      },
    ],
  },
  capabilityBands: [
    {
      id: "mobile-management",
      eyebrow: "For your team",
      title: "Run the business from a phone when you are away from the desk.",
      body: "A mobile view into the operation lets your team check on the business without waiting to sit down at a computer.",
      where: "Mobile browser or the Business App",
      columns: [
        {
          title: "What your team can do on the go",
          items: [{ body: "Review incoming orders, monitor store status, adjust availability, and coordinate handoffs directly from a phone." }],
        },
        {
          title: "Why it matters",
          items: [
            { title: "Faster responses when it matters", body: "A team that can act from a phone responds to orders and customers faster, wherever they are." },
            { title: "Coordination across locations", body: "Shared, up-to-date information helps a multi-location or multi-shift team stay coordinated." },
          ],
        },
      ],
    },
    {
      id: "app-experience",
      eyebrow: "For your customers",
      title: "Apps that respond to the touch and stay up to date.",
      body: "Small details in the customer app make ordering feel responsive, and every customer runs the version you released.",
      where: "Customer apps for iOS and Android",
      columns: [
        {
          title: "Haptic feedback & forced updates",
          items: [
            { title: "Haptic feedback", body: "Touch feedback makes the ordering flow feel responsive and clear." },
            { title: "Forced updates", body: "Prompt customers to update so everyone runs the current release." },
          ],
        },
        {
          title: "Why it matters",
          items: [
            { title: "One version to support", body: "With every customer on the current version, your team supports a single, up-to-date app." },
          ],
        },
      ],
    },
  ],
  connected: {
    eyebrow: "One infrastructure",
    title: "Connect the app to the ordering decisions customers already make.",
    body: "The app experience needs the same practical context as every ordering channel: a selected store, an available menu, the right checkout choices, and a clear destination for the resulting order.",
    topRow: ["Web", "App", "Kiosk", "Phone", "AI agent"],
    hubNote: "Shared catalog, orders, and customer accounts",
    bottomRow: ["Merchant App", "POS", "Drivers", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Launch responsibilities",
    title: "Plan the release path before the app reaches a customer.",
    body: "A mobile launch has responsibilities beyond interface design: store accounts, required listing materials, review timing, release ownership, and the operating changes that affect an order after it is placed.",
    cards: [
      { title: "Account ownership", body: "Publish under your own Apple Developer and Google Play accounts so the listing belongs to your brand." },
      { title: "Release cadence", body: "Coordinate store reviews, version updates, and content adjustments with clear team ownership." },
      { title: "Connected systems", body: "Keep menus, loyalty balances, and payment methods aligned with your web channel and POS." },
      { title: "Delivery scope", body: "Define whether orders fulfill through in-house drivers, third-party fleets, or pickup." },
    ],
  },
  scopeNotes: [
    {
      id: "apps-collaborative-order",
      title: "Build a team lunch order through the confirmed sharing flow.",
      lead: `${BRAND} supports shared order links whose participants can add items or make permitted changes. Collaboration is different from a complete corporate account and billing system.`,
      paragraphs: [
        "The organizer starts the order and shares the supported link. Colleagues contribute, then the organizer reviews the combined items, delivery location, requested time, and the actual checkout and payment flow.",
      ],
    },
    {
      id: "apps-weekly-corporate-scope",
      title: "Separate repeat ordering from a weekly meal-plan service.",
      lead: "An order template or reorder can speed up a recurring purchase; a scheduled individual order does not establish an automated team meal plan.",
      paragraphs: [
        "For office lunch, name the payer, the people who may change items, the delivery owner, and how the group reviews the final total. Company-wide accounts, centralized invoices, and spending limits require an explicit finance and implementation scope.",
      ],
      links: [{ label: "Review advance ordering", href: "/platform/ordering-web" }],
    },
  ],
  related: {
    title: "Every other way your customers order.",
    items: [
      { label: "Build", title: "Ordering Web", body: "The white-labeled storefront on your own domain.", href: "/platform/ordering-web" },
      { label: "Build", title: "Ordering Kiosk", body: "Self-order in store, on the same catalog.", href: "/platform/ordering-kiosk" },
      { label: "Build", title: "Ordering Call Center", body: "Your agents take phone orders into the same system.", href: "/platform/ordering-call-center" },
      { label: "Build", title: "Multi-store ordering", body: "One storefront and one app for every location.", href: "/platform/multi-store-ordering" },
      { label: "Build", title: "Restaurant app", body: "The same native apps for a single restaurant brand instead of a marketplace.", href: "/platform/restaurant-app" },
    ],
  },
  closingCta: {
    title: "Put your brand on the home screen.",
    body: "Bring your mobile ordering goals, store model, and release ownership to a working session so you can map the experience before development begins.",
    docGuide: { label: "Customer App overview", href: "/demo" },
    primaryCta: { label: "Book a demo", modalTopic: "Ordering Apps · Guided demo" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const ORDERING_KIOSK_SPEC: PlatformPageSpec = {
  slug: "ordering-kiosk",
  template: "showcase",
  metaTitle: "Self-Ordering Kiosk Software",
  metaDescription:
    "Plan a self-order kiosk around the menu, fulfillment choices, payment flow, and kitchen handoff that your dining room needs.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Build", href: "/products#build" },
      { label: "Ordering Kiosk" },
    ],
    title: "Give in-store guests a clear self-ordering path.",
    lede: "Ordering Kiosk guides guests through a touch-first order in the dining room. They can choose dine-in or takeout, make the configured payment step, and receive the order or pickup detail your store uses while the order moves into the kitchen handoff.",
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "Touch-first order flow" },
      { text: "Dine-in and takeout choices" },
      { text: "Kitchen handoff planning" },
    ],
  },
  pageIndex: [
    { label: "Overview", href: "#pillars" },
    { label: "Features", href: "#features" },
    { label: "Kitchen handoff", href: "#kitchen" },
    { label: "On the screen", href: "#screens" },
    { label: "In the dining room", href: "#capabilities" },
    { label: "Connected", href: "#connected" },
    { label: "Hardware and setup", href: "#control" },
  ],
  pillars: {
    eyebrow: "Ordering Kiosk",
    title: "Design the in-store order flow around how your team serves guests.",
    numbered: true,
    items: [
      { label: "01", title: "One catalog, one price list", body: "The kiosk uses the menu, options, and pricing rules prepared for the store, so guests make choices from the same order structure your team operates." },
      { label: "02", title: "Eat in or take out", body: "Guests choose dine-in or takeout at the start, and that choice carries through the order journey." },
      { label: "03", title: "A payment step that fits the store", body: "The kiosk can present the configured terminal, QR, or gateway payment flow selected for the location." },
      { label: "04", title: "Straight to the kitchen", body: "The confirmed order can carry an order number and preparation details into the systems your team uses to make the food." },
    ],
  },
  features: {
    title: "Build the decisions a guest needs into the kiosk journey.",
    actionLink: { label: "All features", href: "/pricing#pricing-features" },
    items: [
      { title: "Guided self-ordering", body: "Categories, products, modifiers, and prompts give guests a touch-first path through the order." },
      { title: "Eat in and take out", body: "The guest’s fulfillment choice carries into the receipt, preparation, and pickup experience." },
      { title: "Card and QR payment", body: "Use the configured card-terminal, QR, or gateway flow that fits how guests pay at this location." },
      { title: "Order numbers and pickup", body: "Use an order-number and pickup approach that matches the store’s service model." },
      { title: "Kitchen and POS handoff", body: "Route the confirmed order to the kitchen, printer, and POS systems included in the store’s setup." },
      { title: "Your brand on the screen", body: "Use the store’s brand and content guidelines to make the kiosk part of the in-store experience." },
    ],
  },
  stepsSplit: {
    id: "kitchen",
    eyebrow: "From the screen to the kitchen",
    title: "What happens after the customer taps pay.",
    lead: "A kiosk flow ends with a clear operational handoff: confirmation, order number, preparation details, and payment status move from the guest screen to the team preparing the order.",
    steps: [
      { num: "01", title: "The customer confirms and pays", body: "The guest confirms the items, fulfillment choice, and configured payment step." },
      { num: "02", title: "The order gets a number", body: "The experience presents the order number or pickup detail that the store has chosen." },
      { num: "03", title: "Operations receive the order context", body: "The team receives the order information required to review, prepare, and fulfill the guest’s request." },
      { num: "04", title: "Preparation systems receive the handoff", body: "Route the information to the kitchen, printer, and POS systems included in the store’s setup." },
    ],
  },
  screensWalkthrough: {
    id: "screens",
    eyebrow: "On the screen",
    title: "What guests see, and what you keep current.",
    lead: "The kiosk opens on your brand and follows the guest from the first tap to a menu you can change at any time.",
    caption: "Kiosk screens shown with a demo store and menu.",
    items: [
      { title: "Start on your brand, then choose eat in or take out", body: "Welcome guests with your visual identity and let them choose dine-in or counter pickup on the first tap." },
      { title: "Browse a menu you keep current", body: "Update prices, modifiers, and out-of-stock items centrally from the Dashboard so every kiosk reflects live availability." },
    ],
  },
  capabilitiesList: {
    id: "capabilities",
    eyebrow: "In the dining room",
    title: "What a self-ordering kiosk changes for guests and staff.",
    items: [
      { title: "Efficient ordering", body: "Guests browse the menu, customize the order, and pay directly at the kiosk." },
      { title: "Shorter lines", body: "Guests order without waiting at the counter, which frees staff for the moments that need them." },
      { title: "Customization", body: "Guests personalize the order to their own preferences, at their own pace." },
      { title: "Upselling and promotions", body: "The kiosk can show promotions and complementary items alongside the menu." },
      { title: "Order accuracy", body: "Guests enter their own choices, which reduces manual order entry." },
      { title: "Data insights", body: "Kiosk activity feeds data on customer preferences and order trends." },
      { title: "The same brand as a customer app", body: `On every plan, the branded ordering experience can also ship as a customer app published to the App Store and Google Play.` },
    ],
  },
  scopeNotes: [
    {
      id: "kiosk-curbside-scope",
      title: "Separate counter pickup from curbside pickup.",
      lead: "The current Ordering Kiosk guide documents in-store ordering for counter pickup or eating at a table. A takeout choice does not establish a curbside workflow.",
      paragraphs: [
        "In the documented kiosk journey, the customer’s name and confirmation number help the restaurant identify the order. They do not by themselves identify a vehicle or parking spot.",
        "For a documented curbside entry point, use the store’s QR ordering flow: a curbside code can carry a spot or place number and opens the menu on the customer’s phone.",
      ],
    },
  ],
  connected: {
    eyebrow: "One infrastructure",
    title: "Keep the kiosk connected to the way the store operates.",
    body: "Plan the kiosk alongside the catalog, customer information, fulfillment options, and operational systems that support the rest of the ordering experience.",
    topRow: ["Web", "App", "Kiosk", "Phone", "AI agent"],
    hubNote: "Unified menu, payments, and kitchen routing",
    bottomRow: ["Merchant App", "POS", "Kitchen display", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Your hardware, your brand",
    title: "Match the kiosk setup to the store.",
    body: "Before launch, align the guest flow with the hardware, payment method, printer, kitchen handoff, and brand treatment that the location needs.",
    cards: [
      { title: "Standard tablets", body: "Run the kiosk interface on supported commercial tablets and countertop stands." },
      { title: "Kiosk hardware", body: "Pair with floor enclosures, receipt printers, and supported card payment terminals." },
      { title: "Brand customization", body: "Apply your logo, colors, typography, and attract-screen promotions per brand." },
      { title: "Per-store setup", body: "Configure order numbers, dine-in/takeout modes, and kitchen routing per location." },
    ],
  },
  related: {
    title: "Every other way your customers order.",
    items: [
      { label: "Build", title: "Ordering Web", body: "The white-labeled storefront on your own domain.", href: "/platform/ordering-web" },
      { label: "Build", title: "Ordering Apps", body: "Native iOS and Android under your brand.", href: "/platform/ordering-apps" },
      { label: "Build", title: "Ordering Call Center", body: "Your agents take phone orders into the same system.", href: "/platform/ordering-call-center" },
      { label: "Integrations", title: "POS integrations", body: "Send kiosk orders to the POS the store already runs.", href: "/integrations" },
    ],
  },
  closingCta: {
    title: "Plan a self-ordering journey for a representative store.",
    body: "Bring a menu, service model, and kitchen handoff scenario. We can walk through the guest decisions and setup choices the kiosk journey needs.",
    docGuide: { label: "Use the Ordering Kiosk app", href: "/demo" },
    primaryCta: { label: "Book a demo", modalTopic: "Ordering Kiosk · Guided demo" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const ORDERING_CALL_CENTER_SPEC: PlatformPageSpec = {
  slug: "ordering-call-center",
  template: "showcase",
  metaTitle: "Call Center Ordering Software",
  metaDescription:
    "A console for your own phone agents: find the customer, pick a saved address, route to the nearest store, and build the order from the menu.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Build", href: "/products#build" },
      { label: "Ordering Call Center" },
    ],
    title: "Your agents take the call. The order lands in the right store.",
    lede: "Ordering Call Center is the console your own phone team works in. The customer is found by their number, their saved addresses are already there, the nearest store is selected, and the order goes to that store's Merchant App and POS like any other channel.",
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "Lookup by phone number" },
      { text: "Nearest store selected" },
      { text: "Roles for agents and supervisors" },
    ],
  },
  pageIndex: [
    { label: "Overview", href: "#pillars" },
    { label: "Features", href: "#features" },
    { label: "The call", href: "#flow" },
    { label: "Inside the console", href: "#console" },
    { label: "Customer records", href: "#customer-records" },
    { label: "Across the shift", href: "#capabilities" },
    { label: "Connected", href: "#connected" },
    { label: "Agents and supervisors", href: "#control" },
  ],
  pillars: {
    eyebrow: "Ordering Call Center",
    title: "One console for the calls your team already takes.",
    numbered: true,
    items: [
      { label: "01", title: "The customer, by phone number", body: "The agent types the number and the account opens: name, order history and saved addresses, before the first question." },
      { label: "02", title: "The right store, chosen for them", body: "The saved address picks the nearest store that can serve it, so the agent never has to know your map." },
      { label: "03", title: "The full menu, with options", body: "The same catalog the storefront uses, with categories, product options and conditionals, built for typing while talking." },
      { label: "04", title: "Payment without a card read aloud", body: "Send a payment link to the caller's phone or charge a card already on file. The agent never handles the number." },
    ],
  },
  features: {
    title: "What a phone team needs to close the order.",
    actionLink: { label: "All features", href: "/pricing#pricing-features" },
    items: [
      { title: "Lookup and customer history", body: "Search by phone number or name. Past orders, addresses and notes are on the same screen as the new order." },
      { title: "Saved addresses and new ones", body: "Pick an address the customer already has, or add one on the call and keep it on the account for next time." },
      { title: "Nearest store by address", body: "The console resolves the address against your stores and delivery zones and selects the location that covers it." },
      { title: "Delivery or pickup, like any channel", body: "The order type, the timing and the store follow the same rules as your storefront, so nothing is configured twice for the phone." },
      { title: "Payment link or card on file", body: "The caller pays on their own phone, or on a card stored with their account." },
      { title: "The order lands in the store", body: "It arrives in that store's Merchant App and POS as a normal order, with tracking and messages for the customer." },
    ],
  },
  stepsSplit: {
    id: "flow",
    eyebrow: "On the call",
    title: "One call, one order, the right store.",
    lead: "The console follows the shape of the conversation instead of a form. Each step leaves the next one already answered, so the agent spends the call on the customer and not on your operation.",
    steps: [
      { num: "01", title: "Look the customer up by phone", body: "The number opens the account: name, previous orders and saved addresses, or a blank customer the agent fills in as they talk." },
      { num: "02", title: "Confirm the address, get the store", body: "The customer picks a saved address or gives a new one, and the console selects the nearest store that serves that point." },
      { num: "03", title: "Build the order from the menu", body: "The full catalog of that store, with product options and conditionals, so the agent can answer what is available while typing." },
      { num: "04", title: "Take payment on the caller's phone", body: "Send a payment link by message or charge the card on file." },
      { num: "05", title: "The order lands in that store", body: "It appears in that location's Merchant App and POS, and the customer gets the same tracking and messages as any other channel." },
    ],
  },
  screensWalkthrough: {
    id: "console",
    eyebrow: "Inside the console",
    title: "What the agent sees at each point in the call.",
    lead: "The same call, screen by screen: finding the caller, building the order, closing it, and keeping the queue organized afterwards.",
    caption: "Console screens shown with a demo store and menu.",
    items: [
      { title: "Find the caller by phone number", body: "Suggest registered customers as the agent types a phone number, or create a new customer record mid-call." },
      { title: "Confirm the details and build the order", body: "Browse store categories, customize modifiers, and add suggested upsell items alongside the live cart." },
      { title: "Close with the full order summary", body: "Verify store, delivery address, items, taxes, fees, and payment method before dispatching." },
      { title: "Keep the queue organized", body: "Monitor pending orders, statuses, business, customer, and driver columns across the shift." },
    ],
  },
  capabilityBands: [
    {
      id: "customer-records",
      eyebrow: "Customer records",
      title: "Save more than one number, and order for someone else.",
      body: "Keep secondary phone numbers and recipient delivery details organized on the customer account for faster repeat calls.",
      where: "Ordering Call Center console",
      columns: [
        {
          title: "Saved phone numbers & recipients",
          items: [
            { title: "Saved phone numbers", body: "Recognize returning callers whether they dial from home, office, or mobile." },
            { title: "Order for someone else", body: "Let a caller place and pay for an order delivered to a colleague or family member." },
          ],
        },
        {
          title: "Why it matters",
          items: [
            { body: "Reduces call handling time and prevents duplicate customer profiles across branches." },
          ],
        },
      ],
    },
  ],
  capabilitiesList: {
    id: "capabilities",
    eyebrow: "Across the shift",
    title: "More of what the console gives your team.",
    items: [
      { title: "Multichannel support", body: "Help customers quickly, resolve questions and problems, and collect the feedback that improves service quality." },
      { title: "AI assistance", body: "Analysis of the data agents already see, for faster and more accurate answers." },
      { title: "Real-time analytics", body: "Monitor key metrics as they change, spot emerging trends, and act on them during the shift." },
      { title: "Custom workflows", body: "Shape how your team resolves a case, so problems are settled faster and the customer relationship stays strong." },
      { title: "Customer data in sync", body: "Agents work from the same up-to-date customer record, so they can anticipate what the caller needs." },
      { title: "A focused interface", body: "Built for accurate, personal answers without slowing the agent down." },
      { title: "Fast, reliable performance", body: "Keeps wait times short and the service running through the shift." },
    ],
  },
  connected: {
    eyebrow: "One infrastructure",
    title: "The phone is one channel. The infrastructure is the point.",
    body: "The console shares catalog, prices, stores, delivery zones, customers and payments with your website, apps, kiosks and AI agents. A phone order is the same order object as a web order.",
    topRow: ["Web", "App", "Kiosk", "Phone", "AI agent"],
    hubNote: "Unified order object across every channel",
    bottomRow: ["Merchant App", "POS", "Drivers", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Agents and supervisors",
    title: "A console for the floor, a view for the people running it.",
    body: "Give agents the locations they need to serve and give supervisors a single view of the team. Keep accounts, permissions and order history together as your phone operation grows.",
    cards: [
      { title: "Agent accounts", body: "Assign scoped permissions for phone agents taking and modifying orders." },
      { title: "Supervisor roles", body: "Review active queues, escalations, and agent performance from one view." },
      { title: "Multi-store from one desk", body: "Route calls to any branch across cities without switching tools." },
      { title: "Orders on the record", body: "Every phone order stays linked to customer history, payments, and store analytics." },
    ],
  },
  related: {
    title: "Every other way your customers order.",
    items: [
      { label: "Build", title: "Ordering Web", body: "The white-labeled storefront on your own domain.", href: "/platform/ordering-web" },
      { label: "Build", title: "Ordering Apps", body: "Native iOS and Android under your brand.", href: "/platform/ordering-apps" },
      { label: "Build", title: "Ordering Kiosk", body: "Self-order in store, on the same catalog.", href: "/platform/ordering-kiosk" },
      { label: "Build", title: "Multi-store ordering", body: "One storefront for every location you run.", href: "/platform/multi-store-ordering" },
    ],
  },
  closingCta: {
    title: "Put your phone orders on the same rails.",
    body: "See the console take a call end to end, on your menu, your stores and your delivery zones.",
    primaryCta: { label: "Book a demo", modalTopic: "Ordering Call Center · Guided demo" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const MULTI_STORE_ORDERING_SPEC: PlatformPageSpec = {
  slug: "multi-store-ordering",
  template: "showcase",
  metaTitle: "Multi-store ordering",
  metaDescription:
    "Help customers find the right location, see its menu, prices, hours, and delivery zones, and check out with that store’s context in one ordering journey.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Build", href: "/products#build" },
      { label: "Multi-store ordering" },
    ],
    title: "Help every customer find the right store and order from it.",
    lede: "A multi-store storefront begins with a simple customer decision: which location can serve this order? From there, the menu, prices, hours, fulfillment choices, and checkout reflect that store, so the customer always knows who is preparing the order.",
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "One entry point for every location" },
      { text: "Store selection before ordering" },
      { text: "Local menu and fulfillment context" },
    ],
  },
  pillars: {
    eyebrow: "Multi-store ordering",
    title: "One customer journey, with each store recognizable.",
    numbered: true,
    items: [
      { label: "01", title: "One storefront, every store", body: "Give customers a clear path from a shared entry point to the location that will prepare or fulfill their order." },
      { label: "02", title: "The right store, found for them", body: "Let the customer choose a location or use address information to narrow the available choices before the menu appears." },
      { label: "03", title: "Local menus, one brand", body: "Show the menu, hours, availability, and fulfillment choices that apply to the store the customer selected." },
      { label: "04", title: "Store context follows the order", body: "Treat the selected location as part of the order record so the team can design the downstream handoff around the right store." },
    ],
  },
  features: {
    title: "The decisions that shape the customer’s journey.",
    actionLink: { label: "All features", href: "/pricing#pricing-features" },
    items: [
      { title: "Store finder", body: "Define how customers find a store: an address, a shared location, a store list, or a combination that suits the business." },
      { title: "Per-store menus and prices", body: "Connect the chosen store to the menu, availability, and price information customers should see for that location." },
      { title: "Hours and delivery zones", body: "Make store hours, ordering windows, delivery areas, and pickup options clear before a customer invests time building a cart." },
      { title: "Multi-store checkout", body: "Decide whether one checkout is always tied to a single location or whether the business needs a defined multi-location basket rule." },
      { title: "Market-specific choices", body: "Where your business operates across markets, identify the language, currency, catalog, and store rules that change the ordering experience." },
      { title: "A page for every location", body: "Plan a clear location page for customers who arrive looking for a specific restaurant, store, or fulfillment point." },
    ],
  },
  stepsSplit: {
    id: "finder",
    eyebrow: "Store finder",
    title: "How a customer finds the right store.",
    lead: "The store finder should answer a practical question quickly: where can this customer order? Keep the resulting choice visible through menu browsing and checkout so the customer understands which location is serving them.",
    steps: [
      { num: "01", title: "Enter an address or share location", body: "Offer the location input your business can support, whether that is an address, a shared position, or an explicit store selection." },
      { num: "02", title: "See the stores that can serve it", body: "Present the choices with the information customers need to decide, such as store name, current hours, and applicable fulfillment methods." },
      { num: "03", title: "Open that store's menu", body: "Use the selected store to determine which menu details and fulfillment options appear before the customer adds an item." },
      { num: "04", title: "The order routes to that store", body: "Carry the selected store into checkout and define the exception path for any business that needs a different basket or fulfillment rule." },
      { num: "05", title: "The customer gets a confirmation", body: "A confirmation email or text message follows, with the selected store's address, phone number, and an estimated pickup or delivery time." },
    ],
  },
  scopeNotes: [
    {
      id: "food-court-ordering",
      title: "Choose the right ordering flow for a food court.",
      lead: "Use store selection when the customer orders from one location. When the customer wants to buy from multiple independent merchants in one visit, evaluate multi-business checkout.",
      paragraphs: [
        "With store selection, the customer chooses one location and sees its menu, availability, and fulfillment options. That location receives and prepares the order.",
        "With multi-business checkout configured on the website or Marketplace App, the customer can shop across participating businesses in one checkout experience. Each business has its own cart and prepares its own order once confirmed, with separate pickup or delivery instructions.",
      ],
    },
  ],
  connected: {
    eyebrow: "One infrastructure",
    title: "Treat the storefront as the visible edge of a store model.",
    body: "The customer-facing experience only works when the location, catalog, fulfillment choices, and order destination agree. Map those operating relationships across the channels your business chooses to support.",
    topRow: ["Storefront", "App", "Kiosk", "Phone", "AI agent"],
    hubNote: "Location-aware routing and catalogs",
    bottomRow: ["Merchant App", "POS", "Drivers", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "What customers see",
    title: "A consistent brand for customers, with each store’s details kept true.",
    body: "Customers trust a multi-store storefront when the shared brand stays consistent and each location shows its real menu, availability, hours, and delivery rules.",
    cards: [
      { title: "Master catalog", body: "Maintain brand-wide items and categories centrally while allowing local overrides." },
      { title: "Per-store settings", body: "Control hours, delivery zones, fees, and item availability individually for every branch." },
      { title: "Roles and permissions", body: "Grant HQ, regional managers, and local store teams the exact scope they need." },
      { title: "One view of the network", body: "Monitor orders, availability, and performance across every location in one dashboard." },
    ],
  },
  related: {
    title: "Every other way your customers order, and the network behind them.",
    items: [
      { label: "Build", title: "Ordering Web", body: "The white-labeled storefront on your own domain.", href: "/platform/ordering-web" },
      { label: "Build", title: "Ordering Apps", body: "Native iOS and Android under your brand.", href: "/platform/ordering-apps" },
      { label: "Build", title: "Ordering Kiosk", body: "Self-order in store, on the same catalog.", href: "/platform/ordering-kiosk" },
      { label: "Build", title: "AI Ordering Agents", body: "Explore a conversational ordering surface for the channels your business chooses to support.", href: "/platform/ai-ordering-agents" },
      { label: "Operate", title: "Multi-location operations", body: "The back office behind the storefront: network views, catalog ownership, local changes, and roles by location.", href: "/solutions#franchises" },
      { label: "Solutions", title: "Franchises", body: "How franchise networks keep one brand standard while each franchisee runs its own store.", href: "/solutions#franchises" },
    ],
  },
  closingCta: {
    title: "One storefront for the whole network.",
    body: "Bring your location model, fulfillment rules, and customer journey to a working session and map the store-selection experience together.",
    primaryCta: { label: "Book a demo", modalTopic: "Multi-store ordering · Guided demo" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
};

export const AI_ORDERING_AGENTS_SPEC: PlatformPageSpec = {
  slug: "ai-ordering-agents",
  template: "showcase",
  metaTitle: "AI Ordering Agents",
  metaDescription:
    "AI Ordering Agents guide customers through voice, messaging, chat, and web conversations using the catalog, store, and fulfillment context you configure.",
  hero: {
    breadcrumbs: [
      { label: "Platform", href: "/products" },
      { label: "Build", href: "/products#build" },
      { label: "AI Ordering Agents" },
    ],
    title: "Turn customer conversations into an order flow your team can operate.",
    lede: "AI Ordering Agents guide customers through voice, messaging, chat, and web conversations using the catalog, store, and fulfillment context you configure. The conversation can gather the order details your team needs, with a defined handoff when a person should take over.",
    primaryCta: { label: "See a live demo", href: "/demo" },
    secondaryCta: { label: `Talk to ${BRAND}`, openChat: true },
    meta: [
      { text: "VOICE, MESSAGING, CHAT, AND WEB", pill: true },
      { text: "Catalog and store context" },
      { text: "Human handoff rules" },
    ],
    mockupCaption: "Illustrative conversation",
  },
  pillars: {
    eyebrow: "AI Ordering Agents",
    title: "Use the conversational channels that match your customer journey.",
    numbered: true,
    items: [
      { label: "01", title: "Voice", body: "The agent can guide a customer through an order conversation by phone, including the store and fulfillment details your team has configured." },
      { label: "02", title: "WhatsApp", body: "The agent can guide an ordering conversation in the messaging channel your customers already use." },
      { label: "03", title: "Chat", body: "A chat flow can guide customers through the menu and fulfillment information available to the agent." },
      { label: "04", title: "Web", body: "A conversational entry point on the web can guide customers through an order instead of leaving them to interpret the menu alone." },
    ],
  },
  features: {
    title: "Start with the operational context an agent needs.",
    actionLink: { label: "All features", href: "/pricing#pricing-features" },
    items: [
      { title: "The same catalog", body: "The agent reads the live menu, categories, modifiers, and pricing configured for your stores." },
      { title: "The right store", body: "Match the customer’s address or pickup preference to the store that serves them." },
      { title: "Payment handoff", body: "Guide the customer to the configured payment link or checkout step that matches the channel." },
      { title: "Delivery like any other order", body: "The conversation captures the fulfillment choice so the order can follow the store’s delivery or pickup process." },
      { title: "In the languages your customers use", body: "Choose the language policy the agent should support for the customer journey." },
      { title: "Handoff to a human", body: "Set clear rules for the situations where the agent should hand the conversation to your team." },
    ],
  },
  stepsSplit: {
    id: "how",
    eyebrow: "From conversation to order",
    title: "Design a conversation with a clear path into operations.",
    lead: "The agent guides the customer through the same decisions your operation needs to fulfill: items, store or delivery choice, payment step, and any handoff to a person.",
    steps: [
      { num: "01", title: "The customer writes or calls", body: "Choose the channel where the customer begins the ordering conversation." },
      { num: "02", title: "The agent works your catalog and stores", body: "The agent uses the catalog, store, and fulfillment choices you have prepared to guide the next step." },
      { num: "03", title: "The payment step is clear", body: "Direct the customer to the configured payment step that fits the channel and order journey." },
      { num: "04", title: "The order reaches the operations flow", body: "The resulting order information passes to the team and systems responsible for preparing and fulfilling it." },
      { num: "05", title: "A person takes over when it matters", body: "Use the handoff rule when the customer needs help that should be handled by your team." },
    ],
  },
  scopeNotes: [
    {
      id: "ai-channel-scope",
      title: "Distinguish phone voice, SMS, and drive-thru lane audio.",
      lead: "Each conversational channel has different latency, telephony, and handoff boundaries. Confirm the exact channel scope before deployment.",
      paragraphs: [
        "Web AI Ordering and WhatsApp AI Ordering operate on documented messaging and web surfaces connected directly to your store catalog and order flow.",
        "Telephony voice ordering, SMS threads, and drive-thru lane audio involve separate hardware, carrier, and acoustic requirements that should be scoped explicitly with your engineering team.",
      ],
      links: [
        { label: "Review the call-center operation", href: "/platform/ordering-call-center" },
        { label: "Explore live demos", href: "/demo#ai-agents" },
      ],
    },
  ],
  connected: {
    eyebrow: "One infrastructure",
    title: "Make conversations part of a connected operating model.",
    body: "AI Ordering Agents share the same stores, menus, prices, payments, and delivery rules as your web, app, kiosk, and call-center channels.",
    topRow: ["Web", "App", "Kiosk", "Phone", "AI agent"],
    hubNote: "Catalog, store, and fulfillment context via API & MCP",
    bottomRow: ["Merchant App", "POS", "Drivers", "Loyalty & CRM"],
  },
  control: {
    eyebrow: "Your rules",
    title: "Decide the role the agent plays in your operation.",
    body: "Configure language policies, store scope, escalation triggers, and operational review before turning a conversational channel live.",
    cards: [
      { title: "Languages you choose", body: "Define which customer languages the agent replies in across web, chat, and messaging." },
      { title: "Handoff rules", body: "Specify exactly when a conversation transfers to a human agent or supervisor." },
      { title: "Store scope", body: "Enable AI ordering for selected stores, menus, or operating hours." },
      { title: "Operational review", body: "Inspect order transcripts, handoff events, and confirmed orders from the Dashboard." },
    ],
  },
  related: {
    title: "Every other way your customers order.",
    items: [
      { label: "Build", title: "Ordering Call Center", body: "Your agents take phone orders into the same system.", href: "/platform/ordering-call-center" },
      { label: "Build", title: "Ordering Web", body: "The white-labeled storefront on your own domain.", href: "/platform/ordering-web" },
      { label: "Build", title: "Ordering Apps", body: "Native iOS and Android under your brand.", href: "/platform/ordering-apps" },
      { label: "Operate", title: "Ordering Merchant", body: "Receive, accept, and prepare confirmed orders in store.", href: "/products#operate" },
    ],
  },
  closingCta: {
    title: "Evaluate a conversational ordering flow for your operation.",
    body: "Bring a representative ordering journey, channel, and handoff scenario. We can walk through the customer decisions and operational context that flow needs.",
    docGuide: { label: "AI Dashboard documentation", href: "/demo#ai-agents" },
    primaryCta: { label: "Book a demo", modalTopic: "AI Ordering Agents · Guided demo" },
    secondaryCta: { label: "See a live demo", href: "/demo" },
  },
  bottomUtilityStrip: {
    text: "Explore an annual gross revenue scenario with your own assumptions:",
    linkLabel: "Review pricing and scope",
    href: "/pricing",
  },
};
