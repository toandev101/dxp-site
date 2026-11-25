"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { useUiStore } from "@/stores/ui-store";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { BuildVsBuyHeroMockup } from "../../_components/developer-hero-mockups";

const BRAND = siteConfig.name;

interface ComparisonGroup {
  groupTitle: string;
  rows: {
    criterion: string;
    scratch: string;
    saas: string;
    ordering: string;
    orderingLink?: { label: string; href: string };
  }[];
}

const COMPARISON_GROUPS: ComparisonGroup[] = [
  {
    groupTitle: "Getting to your first order",
    rows: [
      {
        criterion: "Starting point",
        scratch: "An empty repository and a blank roadmap",
        saas: "A finished product with fixed edges",
        ordering: "20+ connected products and 1,500+ features, refined over 12+ years",
      },
      {
        criterion: "Time to launch",
        scratch: "Months of design, engineering, and testing before the first order",
        saas: "Fast, if the product already fits your model",
        ordering: "Configure working products; the timeline follows the scope you launch with",
      },
      {
        criterion: "Upfront investment",
        scratch: "An engineering budget spent before any revenue",
        saas: "A subscription",
        ordering: "A plan instead of a build budget",
        orderingLink: { label: "See pricing", href: "/pricing" },
      },
      {
        criterion: "Customer ordering",
        scratch: "Define and build each buying surface",
        saas: "The channels the vendor offers",
        ordering: "Websites, apps, kiosk, call center, and AI ordering, planned around your model",
      },
      {
        criterion: "Merchant workflow",
        scratch: "Design catalog and order operations from scratch",
        saas: "The vendor’s workflow, as it is",
        ordering: "Configure the merchant workflow your launch requires",
      },
      {
        criterion: "Delivery model",
        scratch: "Build the rules and integrations for delivery",
        saas: "The delivery options the vendor supports",
        ordering: "Choose your own fleet, third-party delivery, or a mix based on your coverage",
      },
      {
        criterion: "Launch decisions",
        scratch: "Decide architecture before you can test the model",
        saas: "Decide within the vendor’s options",
        ordering: "Discuss product, delivery, and commercial requirements together",
      },
    ],
  },
  {
    groupTitle: "After launch",
    rows: [
      {
        criterion: "Maintenance",
        scratch: "Bug fixes, OS updates, app-store compliance, security, and scaling stay with you for as long as the code runs",
        saas: "Handled by the vendor",
        ordering: `By default, the backend and the ${BRAND} API are managed by ${BRAND}`,
      },
      {
        criterion: "Operating changes",
        scratch: "Rework the product each time the model changes",
        saas: "Wait for the vendor or work around it",
        ordering: "Review which operational settings and integrations fit the next stage",
      },
      {
        criterion: "Commercial scope",
        scratch: "Carry the full scope in the first build",
        saas: "Take the vendor’s package as it is",
        ordering: "Start with the scope you can operate and expand deliberately",
      },
      {
        criterion: "Extending it",
        scratch: "Anything, if your team builds and maintains it",
        saas: "Limited to the settings and integrations the vendor exposes",
        ordering: "API and webhooks, MCP for compatible AI tools, and frontend source code on eligible plans",
      },
      {
        criterion: "Servers and scale",
        scratch: "Your team sizes, runs, and pays for servers, databases, and queues for the peak",
        saas: "Depends on the vendor",
        ordering: "Managed, globally distributed AWS infrastructure with auto-scaling, built to process millions of orders a month",
      },
      {
        criterion: "Availability",
        scratch: "Redundancy, monitoring, backups, and an on-call rota are yours to set up",
        saas: "Depends on the vendor",
        ordering: `High-availability architecture with continuous monitoring and backups, run by ${BRAND}`,
      },
      {
        criterion: "Security",
        scratch: "Every account, payment flow, and customer record is yours to protect and patch",
        saas: "Depends on the vendor",
        ordering: "Encrypted data transmission, secure cloud infrastructure, access controls, and continuous monitoring",
      },
      {
        criterion: "Speed worldwide",
        scratch: "Set up and tune your own CDN, image pipeline, and caching",
        saas: "Depends on the vendor",
        ordering: "Images and static assets delivered through a global CDN, in WebP",
      },
      {
        criterion: "Modules and integrations",
        scratch: "Every new channel is a project and every provider an integration to build",
        saas: "The modules and connections the vendor offers",
        ordering: "20+ products on one catalog and order flow, plus payment, delivery, POS, marketing, and analytics connections",
      },
      {
        criterion: "Roadmap",
        scratch: "Yours, and so is every hour it costs",
        saas: "The vendor’s",
        ordering: `${BRAND} keeps shipping the platform; your team builds what makes you different`,
      },
      {
        criterion: "Risk",
        scratch: "Time and budget overruns and a long time to market",
        saas: "Lock-in to limits you cannot change",
        ordering: "Start on proven technology and go deeper only where it pays off",
      },
    ],
  },
];

const FEATURE_INVENTORY = [
  {
    title: "Ordering experience",
    desc: "How customers find you, browse, and place orders on every channel.",
    samples: ["Branded ordering website", "Branded customer apps", "Self-ordering kiosk", "Progressive web app"],
  },
  {
    title: "Menus and catalog",
    desc: "Products, options, menus, and availability.",
    samples: ["Unlimited products and categories", "Product options and conditions", "Scheduled menus", "Menu management"],
  },
  {
    title: "Cart, checkout, and payments",
    desc: "Cart rules, fees, taxes, and the ways customers pay.",
    samples: ["Guest checkout", "Automatic taxes", "Online card payments", "One-screen checkout"],
  },
  {
    title: "Order management",
    desc: "Receiving, preparing, and updating orders in the store.",
    samples: ["Real-time order management", "Merchant app on tablet and phone", "Order printing", "Manual orders"],
  },
  {
    title: "Stores and locations",
    desc: "Multi-store, multi-brand, and delivery-zone setup.",
    samples: ["Multi-store management", "Brand management", "Delivery zones", "Store setup"],
  },
  {
    title: "Delivery and drivers",
    desc: "Dispatch, driver operations, and courier partners.",
    samples: ["Driver app for deliveries", "Delivery dashboard", "Automatic assignment", "Unlimited drivers"],
  },
  {
    title: "Marketing and loyalty",
    desc: "Promotions, wallets, loyalty, and customer engagement.",
    samples: ["Coupons and discounts", "Advanced offers", "Cart recovery", "Ad banners"],
  },
  {
    title: "Reports and reviews",
    desc: "Performance reporting, exports, and customer feedback.",
    samples: ["Business reports", "Data exports", "Reviews and ratings", "End-of-day reports"],
  },
  {
    title: "Administration and security",
    desc: "Users, roles, content, branding, and account protection.",
    samples: ["Admin dashboard", "User roles", "Custom domain and SSL", "Branded dashboard"],
  },
  {
    title: "Integrations and developer tools",
    desc: "Connections, APIs, and ways to extend the platform.",
    samples: ["Integrations", "API access", "Analytics and tracking", "Ordering Connect"],
  },
];

const INFRASTRUCTURE_CARDS = [
  {
    title: "Servers that scale on their own",
    body: "Managed, globally distributed AWS infrastructure with auto-scaling, built to process millions of orders a month. A launch, a campaign, or a new city adds capacity automatically.",
    ifYouBuild: "Size servers, databases, and queues for your peak, and pay for them before the first order.",
    linkLabel: "Cloud infrastructure",
    href: "/developers/bring-your-own-cloud",
  },
  {
    title: "High availability, monitored",
    body: `A high-availability architecture with continuous monitoring and backups, run by ${BRAND}.`,
    ifYouBuild: "Redundancy, alerts, backups, and someone on call when something breaks at the dinner rush.",
    linkLabel: "How it runs",
    href: "/developers/bring-your-own-cloud",
  },
  {
    title: "Security in every layer",
    body: "Encrypted data transmission, secure cloud infrastructure, access controls, continuous monitoring, and backups protect business and customer data.",
    ifYouBuild: "Every account, payment flow, and customer record is yours to protect, audit, and patch.",
    linkLabel: "Platform security",
    href: "/integrations/login-security",
  },
  {
    title: "A global CDN",
    body: "Images and static assets are delivered through a global CDN, in WebP, to improve load times across supported regions.",
    ifYouBuild: "Set up and tune your own CDN, image pipeline, and caching for every market.",
    linkLabel: "Global CDN",
    href: "/platform/ordering-web",
  },
  {
    title: "Your domain, with SSL",
    body: "Ordering websites run on your own domain, protected with an SSL certificate.",
    ifYouBuild: "Certificates, renewals, and DNS for every brand and store.",
    linkLabel: "Custom domains",
    href: "/developers/white-label",
  },
  {
    title: "Modules you switch on",
    body: "20+ products work as modules on one catalog and order flow: add a kiosk, call center, AI ordering, loyalty, or your own delivery as your plan and scope include them, and connect payment, delivery, POS, marketing, and analytics providers.",
    ifYouBuild: "Every new channel is a new project, and every provider is another integration to build and keep working.",
    linkLabel: "Integrations",
    href: "/integrations",
  },
];

const EXTEND_LAYERS = [
  {
    tag: "Brand",
    title: "Put your brand on the experience",
    body: `White-label ordering: the customer experience carries your brand while ${BRAND} provides the platform underneath. The exact surfaces are agreed in your scope.`,
    linkLabel: "White label",
    href: "/developers/white-label",
  },
  {
    tag: "API",
    title: "Connect your systems",
    body: `Build integrations and custom experiences on the ${BRAND} API, included in every plan, and send order and platform events to your systems with webhooks.`,
    linkLabel: "API & MCP",
    href: "/developers#api",
  },
  {
    tag: "MCP",
    title: "Bring your AI tools",
    body: `Connect compatible AI tools to your ${BRAND} account through MCP, so agents can work with the same stores, menus, and orders your team does.`,
    linkLabel: "API & MCP",
    href: "/developers",
  },
  {
    tag: "Plugins",
    title: "Automate with the tools you use",
    body: "Extend the platform with plugins, or connect thousands of apps through Zapier.",
    linkLabel: "Automation",
    href: "/integrations/automation",
  },
  {
    tag: "Source",
    title: "Own your frontend code",
    body: `The frontend source code for the web storefront, customer apps, Merchant App, and Driver App is open source and included with every product. Build your own UX and features. By default, the backend and the ${BRAND} API are managed by ${BRAND}.`,
    linkLabel: "Source code license",
    href: "/developers/source-code-license",
  },
  {
    tag: "Custom",
    title: "Add what does not exist yet",
    body: "Custom integrations, design, features, and reports are available as services when your model needs something new.",
    linkLabel: "Custom projects",
    href: "/solutions/custom-projects",
  },
];

const HIDDEN_COSTS = [
  { title: "Bug fixes", body: "Every defect in every app is yours to find, fix, and release." },
  { title: "OS and device updates", body: "iOS, Android, and browsers change every year, and your apps have to keep up." },
  { title: "App-store compliance", body: "Store policies change, and each release has to pass review again." },
  { title: "Security", body: "Payments, accounts, and customer data need continuous protection." },
  { title: "Scaling", body: "Peak hours, new cities, and new stores all land on your infrastructure." },
  { title: "Every next feature", body: "Loyalty, dispatch rules, a new channel: each one waits for your engineers." },
];

const DECISION_QUESTIONS = [
  {
    num: "01",
    q: "Is ordering technology your core product, or the way you run your business?",
    a: `If it is how you run the business, configure ${BRAND} and put your effort into operations. If it is your product, license the frontend source code on an eligible plan and build your differentiator on top.`,
  },
  {
    num: "02",
    q: "Do you have a team to build and maintain it for years?",
    a: `Without one, the platform, backend, and updates stay with ${BRAND}. With one, point your engineers at what makes you different through the API, MCP, and frontend source code.`,
  },
  {
    num: "03",
    q: "How long can you wait to launch?",
    a: "A from-scratch build takes months before the first order. Starting from working products lets you test your model with real customers first.",
  },
  {
    num: "04",
    q: "How much do you want to invest before the first order?",
    a: "A plan replaces a large upfront build budget and the maintenance that follows it.",
    link: { label: "See pricing", href: "/pricing" },
  },
  {
    num: "05",
    q: "Are your needs genuinely unique, or mostly standard?",
    a: "Most of an ordering operation is standard: catalog, checkout, order management, dispatch. Build only the part that is unique, on top of what already works.",
  },
];

const PROOF_STATS = [
  { value: "12+", label: "years building ordering technology" },
  { value: "Millions", label: "of orders a month, on auto-scaling infrastructure" },
  { value: "20+", label: "products across ordering channels, operations, and delivery" },
  { value: "1,500+", label: "features, from catalog to dispatch" },
];

const ENTERPRISE_LOGOS = ["Starbucks", "Domino's", "Burger King", "Chili's", "P.F. Chang's", "Alsea"];

const FAQS = [
  {
    q: "Should I build or buy a food delivery app?",
    a: `Neither in its pure form. Building from scratch costs months and a large budget before the first order, and a closed SaaS limits what you can change. Build on ${BRAND} instead: launch on working products, then extend them with the API, webhooks, MCP, and frontend source code on eligible plans.`,
  },
  {
    q: "Is it cheaper to build or buy a delivery app?",
    a: `Buying is usually cheaper over the first years because there is no upfront build and maintenance is included. Building means an engineering budget before launch, plus ongoing fixes, OS updates, app-store compliance, security, and scaling. See Pricing for current ${BRAND} plans.`,
  },
  {
    q: "When does it make sense to build from scratch?",
    a: `The usual reasons are that the technology is your competitive edge, you have an engineering team, and your requirements are not met by existing products. Those are reasons to build on ${BRAND} rather than from zero: the frontend source code is open source and included with every product, so you can build the difference there. By default, the backend and the ${BRAND} API are managed by ${BRAND}, and 1,500+ features keep running underneath.`,
  },
  {
    q: "What are the risks of building a delivery app?",
    a: "Time and budget overruns, the ongoing burden of maintenance and security, app-store compliance, and the opportunity cost of a long time to market.",
  },
  {
    q: "How fast can I launch with a platform versus building?",
    a: `Building from scratch typically takes months before the first order. On ${BRAND} you start from working customer, merchant, and driver products, so the timeline depends on the scope, integrations, and app-store reviews your launch needs.`,
  },
  {
    q: "Can I move from a platform to a custom build later?",
    a: `On ${BRAND} you do not have to start over to go further. Teams launch and validate on the platform, then add integrations with the API, AI workflows through MCP, or their own UX with the licensed frontend source code.`,
  },
  {
    q: "Do I get the source code?",
    a: `The frontend source code license, open source and included with every product, covers the web storefront, customer apps, Merchant App, and Driver App. By default, the backend and the ${BRAND} API are managed by ${BRAND}. The backend source code is available only to enterprise organizations, under a separate license agreement and after ${BRAND} approves the organization. No license transfers ownership of the platform.`,
  },
  {
    q: "What can I build with the API and MCP?",
    a: `The ${BRAND} API is included in every plan: use it to build integrations and custom experiences, and use webhooks to send order and platform events to your systems. MCP connects compatible AI tools to your ${BRAND} account.`,
  },
  {
    q: "Can the platform carry my brand?",
    a: `Yes. ${BRAND} offers white-label ordering: the customer experience carries your brand while ${BRAND} provides the platform underneath. The exact surfaces and responsibilities are agreed in your implementation scope.`,
  },
  {
    q: "Who runs the servers, security, and CDN?",
    a: `${BRAND} does. The platform runs on managed, globally distributed AWS infrastructure with auto-scaling, high availability, monitoring, and backups; data is encrypted in transit and protected with access controls; and images and static assets are delivered through a global CDN. Your team builds on top instead of operating the stack underneath. Enterprise organizations can install ${BRAND} in their own AWS, Google Cloud, Microsoft Azure, or Railway account.`,
  },
  {
    q: "Can it handle enterprise volume?",
    a: `${BRAND} runs on auto-scaling infrastructure that processes millions of orders a month, and enterprise brands such as Alsea run on ${BRAND} technology.`,
  },
];

const KEEP_READING = [
  { label: "How much does it cost to build a marketplace app?", href: "/solutions/marketplaces" },
  { label: "Can AI build your marketplace? Yes — and no.", href: "/platform/ai-ordering-agents" },
  { label: "How to scope a food delivery marketplace", href: "/solutions/marketplaces" },
  { label: "How to build your own food delivery app", href: "/platform/ordering-apps" },
  { label: `Compare ${BRAND} with other platforms`, href: "/#migration" },
];

export function BuildVsBuyView() {
  const { openDemoModal } = useUiStore();
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  return (
    <div className="bg-[var(--od-bg)] text-[var(--od-text)]">
      {/* 1. DARK HERO */}
      <section
        className="relative overflow-hidden bg-[#111013] text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-32 h-[540px] w-[620px]"
          style={{
            background: "none",
          }}
        />

        <Container className="relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 font-mono text-[12px]">
                <Link href="/developers" className="text-[#F9D0D8] underline underline-offset-4 hover:text-white">
                  Developers
                </Link>
                <span className="text-[#6E6D75]">/</span>
                <span className="text-[#F9D0D8]">Build vs buy</span>
              </nav>

              <h1 className="text-[40px] sm:text-[54px] lg:text-[60px] font-bold tracking-[-0.04em] leading-[1.03] text-white [text-wrap:balance]">
                Build vs buy? Build on {BRAND}.
              </h1>

              <p className="mt-5 max-w-xl text-[16.5px] sm:text-[18px] leading-[1.6] text-[#A9A8AF]">
                Building from scratch means months of engineering before your first order. Buying a closed SaaS means
                living inside someone else&apos;s limits. There is a third option: start from 12+ years of ordering
                technology on managed, auto-scaling, secured infrastructure, then extend it with the API, webhooks, MCP,
                and frontend source code.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openDemoModal("Build vs buy architecture evaluation")}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A] cursor-pointer"
                >
                  Talk to {BRAND}
                </button>
                <a
                  href="#paths"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F]"
                >
                  Compare the three paths
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <BuildVsBuyHeroMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. #paths — THREE PATHS COMPARISON TABLE */}
      <section id="paths" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              Three paths to an ordering platform.
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
              Both a custom build and a SaaS product can carry your brand. The real differences are where you start, who
              maintains the technology, and how far you can take it.
            </p>
          </div>

          <div className="mt-9 overflow-x-auto rounded-[12px] border border-[var(--od-border)]">
            <table className="w-full min-w-[760px] border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-[var(--od-border)] bg-[var(--od-surface-subtle)]">
                  <th className="w-[18%] px-5 py-4 font-mono text-[11.5px] uppercase text-[var(--od-text-muted)]">
                    &nbsp;
                  </th>
                  <th className="w-[26%] px-5 py-4 font-bold text-[var(--od-text)]">Build from scratch</th>
                  <th className="w-[24%] px-5 py-4 font-bold text-[var(--od-text)]">Buy a closed SaaS</th>
                  <th className="w-[32%] bg-[var(--od-action-soft)]/50 px-5 py-4 font-bold text-[var(--od-action-content)]">
                    Build on {BRAND}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--od-border)] bg-[var(--od-bg)]">
                {COMPARISON_GROUPS.map((group) => (
                  <GroupRows key={group.groupTitle} group={group} />
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 3. #starting-point — 10-CATEGORY FEATURE INVENTORY */}
      <section id="starting-point" className="scroll-mt-24 border-t border-[var(--od-border)] py-16 lg:py-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                What you would build before your first order.
              </h2>
              <p className="mt-3.5 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
                An ordering business is not one app. It is customer channels, store operations, payments, delivery,
                marketing, and the connections between them. A from-scratch build has to cover all of it before the first
                customer orders. On {BRAND}, it is already built and connected: 20+ products and 1,500+ features, from
                catalog to dispatch.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>Browse all features</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
              >
                <span>Explore the platform</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {FEATURE_INVENTORY.map((cat) => (
              <div
                key={cat.title}
                className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
              >
                <h3 className="text-[18px] font-bold text-[var(--od-text)]">{cat.title}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-[var(--od-text-muted)]">{cat.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2 border-t border-[var(--od-border)] pt-4">
                  {cat.samples.map((sample) => (
                    <li
                      key={sample}
                      className="rounded-md border border-[var(--od-border)] bg-[var(--od-surface-subtle)] px-2.5 py-1 text-[12.5px] font-medium text-[var(--od-text)]"
                    >
                      {sample}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. #infrastructure — 6 INFRASTRUCTURE CARDS WITH "IF YOU BUILD IT" */}
      <section
        id="infrastructure"
        className="scroll-mt-24 border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-16 lg:py-20"
      >
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              The infrastructure is already running.
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
              Behind every order sits infrastructure someone has to provision, secure, and scale. Build from scratch and
              that is your team, your cloud bill, and your on-call rota. On {BRAND}, it is managed for you from day one.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INFRASTRUCTURE_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-[10px] border border-[var(--od-border)] bg-[var(--od-bg)] p-6"
              >
                <div>
                  <h3 className="text-[18px] font-bold text-[var(--od-text)]">{card.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{card.body}</p>
                  <p className="mt-4 rounded-[8px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-3.5 text-[13px] leading-[1.55] text-[var(--od-text-muted)]">
                    <strong className="font-semibold text-[var(--od-text)]">If you build it: </strong>
                    {card.ifYouBuild}
                  </p>
                </div>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--od-action-content)] hover:underline"
                >
                  <span>{card.linkLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. #extend — 6 EXTENSIBILITY LAYERS */}
      <section id="extend" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              Go as deep as your product needs.
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
              Most teams start by configuring. When the product needs more, each layer opens on the same platform, so
              you never start over to go further.
            </p>
          </div>

          <ol className="mt-10 divide-y divide-[var(--od-border)] border-y border-[var(--od-border)]">
            {EXTEND_LAYERS.map((layer) => (
              <li
                key={layer.tag}
                className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-12 sm:items-start"
              >
                <div className="sm:col-span-2">
                  <span className="inline-flex rounded-md border border-[#D91842]/30 bg-[var(--od-action-soft)] px-2.5 py-1 font-mono text-[12px] font-semibold text-[var(--od-action-content)]">
                    {layer.tag}
                  </span>
                </div>
                <div className="sm:col-span-7">
                  <h3 className="text-[18px] font-bold text-[var(--od-text)]">{layer.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{layer.body}</p>
                </div>
                <div className="sm:col-span-3 sm:text-right">
                  <Link
                    href={layer.href}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
                  >
                    <span>{layer.linkLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-[14.5px] text-[var(--od-text-muted)]">
            Working on an integration? Start with the{" "}
            <a
              href="https://docs.ordering.co/api-reference/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[var(--od-action-content)] hover:underline"
            >
              API reference
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>{" "}
            and the{" "}
            <a
              href="https://docs.ordering.co/docs/developers/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[var(--od-action-content)] hover:underline"
            >
              Developer guides
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            .
          </p>
        </Container>
      </section>

      {/* 6. #hidden-cost — MAINTENANCE COMMITMENT */}
      <section
        id="hidden-cost"
        className="scroll-mt-24 border-t border-[var(--od-border)] py-16 lg:py-20"
      >
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
              Building is a commitment, not a project.
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.6] text-[var(--od-text-muted)]">
              The build quote is only the start. Once you own the code, you own it for as long as it runs. Many build
              decisions look cheaper on day one and cost more across the first years.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HIDDEN_COSTS.map((cost) => (
              <li
                key={cost.title}
                className="rounded-[10px] border border-[var(--od-border)] bg-[var(--od-surface-subtle)] p-6"
              >
                <h3 className="text-[17px] font-bold text-[var(--od-text)]">{cost.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">{cost.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-[10px] border border-[#D91842]/30 bg-[var(--od-action-soft)]/35 p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] font-medium text-[var(--od-text)]">
              On {BRAND}, the platform underneath keeps moving while your team works on what makes you different.
            </p>
            <Link
              href="/changelog"
              className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-semibold text-[var(--od-action-content)] hover:underline"
            >
              <span>See what shipped recently</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 7. #decide — FIVE QUESTIONS */}
      <section id="decide" className="scroll-mt-24 border-t border-[var(--od-border)] py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-[32px] sm:text-[42px] font-bold tracking-[-0.035em] leading-[1.08] text-[var(--od-text)]">
                Five questions to decide how you start.
              </h2>
              <p className="mt-3.5 text-[15.5px] leading-[1.6] text-[var(--od-text-muted)]">
                Answer them honestly. Each answer points to a way to start on {BRAND}, not to a reason to start from
                zero.
              </p>
            </div>

            <ol className="lg:col-span-7 divide-y divide-[var(--od-border)] border-y border-[var(--od-border)]">
              {DECISION_QUESTIONS.map((item) => (
                <li key={item.num} className="grid grid-cols-[36px_1fr] gap-4 py-6">
                  <span className="font-mono text-[12px] font-semibold text-[var(--od-action-content)] pt-1">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-[17.5px] font-bold text-[var(--od-text)]">{item.q}</h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--od-text-muted)]">
                      {item.a}{" "}
                      {item.link && (
                        <Link
                          href={item.link.href}
                          className="inline-flex items-center gap-1 font-semibold text-[var(--od-action-content)] hover:underline"
                        >
                          {item.link.label}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 8. PROOF STATS & ENTERPRISE LOGOS */}
      <section className="border-y border-[var(--od-border)] bg-[var(--od-surface-subtle)] py-14">
        <Container>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {PROOF_STATS.map((stat) => (
              <div key={stat.label}>
                <dd className="text-[36px] sm:text-[44px] font-bold tracking-[-0.04em] leading-none text-[var(--od-text)]">
                  {stat.value}
                </dd>
                <dt className="mt-2.5 text-[13.5px] leading-[1.5] text-[var(--od-text-muted)]">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-10 border-t border-[var(--od-border)] pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[13.5px] font-medium text-[var(--od-text-muted)]">
              Enterprise brands running on {BRAND} technology
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[15px] font-bold tracking-[-0.02em] text-[var(--od-text)]">
              {ENTERPRISE_LOGOS.map((brand) => (
                <Link key={brand} href="/#customers" className="hover:text-[var(--od-action-content)] transition-colors">
                  {brand}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 9. #faq — 11 BUILD VS BUY QUESTIONS */}
      <section id="faq" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--od-text)]">
                Build vs buy questions.
              </h2>
            </div>

            <div className="lg:col-span-8 border-t border-[var(--od-border)]">
              {FAQS.map((item) => {
                const open = !!openFaq[item.q];
                return (
                  <div key={item.q} className="border-b border-[var(--od-border)]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq((p) => ({ ...p, [item.q]: !p[item.q] }))}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left text-[16px] font-bold text-[var(--od-text)] cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <Plus
                        className={cn(
                          "h-4 w-4 shrink-0 text-[var(--od-text-muted)] transition-transform",
                          open && "rotate-45 text-[var(--od-action-content)]"
                        )}
                      />
                    </button>
                    {open && (
                      <p className="pb-5 text-[14.5px] leading-[1.65] text-[var(--od-text-muted)]">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 10. KEEP READING */}
      <nav aria-label="Keep reading" className="border-t border-[var(--od-border)] py-14">
        <Container>
          <h2 className="text-[22px] font-bold tracking-[-0.025em] text-[var(--od-text)]">Keep reading</h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {KEEP_READING.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between gap-3 rounded-[8px] border border-[var(--od-border)] bg-[var(--od-bg)] px-4 py-3.5 text-[14px] font-semibold text-[var(--od-text)] transition-colors hover:border-[var(--od-border-strong)] hover:bg-[var(--od-surface-subtle)] hover:text-[var(--od-action-content)]"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--od-action-content)]" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* 11. CLOSING DARK CTA BAND */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[10px] bg-[#111013] px-7 py-14 sm:px-14 sm:py-[72px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-[634px] w-[696px] -translate-y-1/2"
              style={{
                background: "none",
              }}
            />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-[32px] sm:text-[44px] font-bold tracking-[-0.035em] leading-[1.06] text-white">
                Start twelve years ahead.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#A9A8AF]">
                Discuss your model and the technical scope your product needs with {BRAND}.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openDemoModal("Build on OPERO technical scope")}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#D91842] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#B8123A] cursor-pointer"
              >
                Talk to {BRAND}
              </button>
              <Link
                href="/pricing"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#2A2A2E] bg-[#1B1A1F] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:border-[#6E6D75] hover:bg-[#1B1A1F]"
              >
                See pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function GroupRows({ group }: { group: ComparisonGroup }) {
  return (
    <>
      <tr className="bg-[var(--od-surface-subtle)]/75">
        <th
          colSpan={4}
          scope="colgroup"
          className="px-5 py-3 font-mono text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[var(--od-action-content)]"
        >
          {group.groupTitle}
        </th>
      </tr>
      {group.rows.map((row) => (
        <tr key={row.criterion}>
          <th scope="row" className="px-5 py-4 align-top font-bold text-[var(--od-text)]">
            {row.criterion}
          </th>
          <td className="px-5 py-4 align-top leading-[1.6] text-[var(--od-text-muted)]">{row.scratch}</td>
          <td className="px-5 py-4 align-top leading-[1.6] text-[var(--od-text-muted)]">{row.saas}</td>
          <td className="bg-[var(--od-action-soft)]/25 px-5 py-4 align-top leading-[1.6] text-[var(--od-text)]">
            <div className="flex items-start gap-2">
              <Check className="mt-1 h-4 w-4 shrink-0 text-[#D91842]" />
              <span>
                {row.ordering}
                {row.orderingLink && (
                  <>
                    {" "}
                    <Link
                      href={row.orderingLink.href}
                      className="font-semibold text-[var(--od-action-content)] underline underline-offset-4 hover:opacity-80"
                    >
                      {row.orderingLink.label}
                    </Link>
                  </>
                )}
              </span>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
