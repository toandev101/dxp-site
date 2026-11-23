import { siteConfig } from "@/lib/site-config";
import type { DeveloperHeroSlug } from "../_components/developer-hero-mockups";

const BRAND = siteConfig.name;

export interface DevLink {
  label: string;
  href?: string;
  external?: boolean;
  modalTopic?: string;
}

export interface DevCardItem {
  label?: string;
  title: string;
  body: string;
  href?: string;
  external?: boolean;
  modalTopic?: string;
}

export type DeveloperSection =
  | {
      type: "cardsGrid";
      id: string;
      eyebrow?: string;
      title: string;
      lead?: string;
      columns?: 2 | 3 | 4;
      items: DevCardItem[];
      actionButton?: DevLink;
      callout?: {
        title: string;
        body: string;
        note: string;
        link: DevLink;
      };
    }
  | {
      type: "connectedMap";
      id: string;
      eyebrow: string;
      title: string;
      body: string;
      topLabel: string;
      topRow: string[];
      hubTitle: string;
      hubSubtitle: string;
      bottomLabel: string;
      bottomRow: string[];
    }
  | {
      type: "ownershipSplit";
      id: string;
      eyebrow: string;
      title: string;
      body: string;
      panels: {
        eyebrow: string;
        title: string;
        bullets: string[];
      }[];
    }
  | {
      type: "controlBand";
      id: string;
      eyebrow: string;
      title: string;
      body: string;
      footnote?: string;
      tiles: { title: string; body: string }[];
      byocCallout?: {
        title: string;
        body: string;
        points: string[];
        link: DevLink;
      };
    }
  | {
      type: "managedBoundarySplit";
      id: string;
      eyebrow: string;
      title: string;
      body: string;
      items: { title: string; body: string }[];
    }
  | {
      type: "stepsSplit";
      id: string;
      eyebrow: string;
      title: string;
      body: string;
      sideNote?: {
        title: string;
        body: string;
        link: DevLink;
      };
      steps: { num: string; title: string; body: string }[];
    }
  | {
      type: "scopeNotes";
      id: string;
      title: string;
      lead: string;
      paragraphs: string[];
      links: DevLink[];
    }
  | {
      type: "faqAccordion";
      id: string;
      eyebrow: string;
      title: string;
      items: { q: string; a: string }[];
    };

export interface DeveloperPageSpec {
  slug: DeveloperHeroSlug;
  metaTitle: string;
  metaDescription: string;
  hero: {
    breadcrumbLabel?: string;
    title: string;
    lede: string;
    primaryCta: DevLink;
    secondaryCta?: DevLink;
    meta: string[];
  };
  sections: DeveloperSection[];
  closingCta: {
    title: string;
    body: string;
    docGuide?: { label: string; href: string };
    primaryCta: DevLink;
    secondaryCta?: DevLink;
  };
  bottomCrossLink?: {
    title: string;
    linkLabel: string;
    href: string;
  };
}

/** 1. /developers */
export const DEVELOPERS_HUB_SPEC: DeveloperPageSpec = {
  slug: "developers",
  metaTitle: `Developers | ${BRAND}`,
  metaDescription: `Use ${BRAND}’s public API reference and developer guides to frame an integration before you agree its implementation scope.`,
  hero: {
    title: `Start an ${BRAND} integration from the public contract.`,
    lede: `${BRAND} documentation provides developer guides and a public API reference for requests, authentication, parameters, schemas, and responses. The reference is read-only: no approved remote sandbox is currently configured for interactive testing.`,
    primaryCta: {
      label: "Open API reference",
      href: "https://docs.ordering.co/api-reference/",
      external: true,
    },
    secondaryCta: {
      label: "Read developer guides",
      href: "https://docs.ordering.co/docs/developers/",
      external: true,
    },
    meta: ["Public API reference", "Developer guides", "Read-only testing boundary"],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "api",
      eyebrow: "API reference",
      title: "Review the public interface before you design against it.",
      lead: "The public API reference is the source for operations, parameters, schemas, and responses. Use it to turn an idea into a technical question that an implementation team can evaluate precisely.",
      columns: 4,
      items: [
        {
          title: "Operations",
          body: "The available actions are organized as reference operations rather than implied by a sales page.",
        },
        {
          title: "Parameters",
          body: "Inspect the inputs a request describes before mapping your own data to it.",
        },
        {
          title: "Schemas",
          body: "Use the documented object shapes to clarify what an implementation needs to exchange.",
        },
        {
          title: "Responses",
          body: "Review the documented results and error shapes before you plan an integration flow.",
        },
      ],
      actionButton: {
        label: "Open API reference",
        href: "https://docs.ordering.co/api-reference/",
        external: true,
      },
    },
    {
      type: "cardsGrid",
      id: "docs",
      eyebrow: "Developer guides",
      title: "Use the guides to connect the interface to the product work.",
      lead: `The developer documentation is written for teams integrating with ${BRAND} products or contributing safely to product repositories. It points back to the canonical API reference for requests, schemas, and authentication.`,
      columns: 4,
      items: [
        {
          title: "Integration purpose",
          body: "State the product workflow your team is trying to support before selecting technical work.",
        },
        {
          title: "Authentication",
          body: "Use the documented authentication guidance instead of placing credentials into an unreviewed prototype.",
        },
        {
          title: "Cross-product handoffs",
          body: "Map where an integration touches another product or operating team so responsibility stays clear.",
        },
        {
          title: "Safe contribution",
          body: "Follow the documentation path when a team is contributing to product repositories.",
        },
      ],
      actionButton: {
        label: "Read developer guides",
        href: "https://docs.ordering.co/docs/developers/",
        external: true,
      },
    },
    {
      type: "cardsGrid",
      id: "sdks",
      eyebrow: "Implementation brief",
      title: "Design from the documented contract, not a package assumption.",
      lead: "A useful brief names the workflow, the documented operations under review, the data owner, and the acceptance check. That gives technical and operating teams one shared starting point.",
      columns: 4,
      items: [
        {
          title: "Workflow",
          body: "Describe the customer or operator outcome the integration must support.",
        },
        {
          title: "Objects",
          body: "List the documented operations and schemas your team needs to inspect.",
        },
        {
          title: "Ownership",
          body: "Name who owns source data, credentials, monitoring, and changes.",
        },
        {
          title: "Acceptance",
          body: "Define the demonstrated result that will show the chosen scope works.",
        },
      ],
      actionButton: {
        label: "Review API reference",
        href: "https://docs.ordering.co/api-reference/",
        external: true,
      },
    },
    {
      type: "cardsGrid",
      id: "webhooks",
      eyebrow: "Handoffs",
      title: "Treat each handoff as an operating responsibility.",
      lead: "Integration guides explain routes and cross-product handoffs. Before implementation, decide which team receives a change, how it checks the outcome, and what happens when an expected handoff needs attention.",
      columns: 4,
      items: [
        {
          title: "Trigger",
          body: "What documented change starts the handoff?",
        },
        {
          title: "Receiver",
          body: "Which system and team own the next step?",
        },
        {
          title: "Verification",
          body: "How will the receiving team confirm the expected outcome?",
        },
        {
          title: "Recovery",
          body: "Who investigates when the expected result is missing or inconsistent?",
        },
      ],
      actionButton: {
        label: "Read developer guides",
        href: "https://docs.ordering.co/docs/developers/",
        external: true,
      },
    },
    {
      type: "cardsGrid",
      id: "sandbox",
      eyebrow: "Safe testing",
      title: "Review first; do not treat the public reference as a live environment.",
      lead: `${BRAND}’s testing guidance states that the public API Reference is read-only and that no approved remote sandbox is configured for interactive testing. Plan any test environment and credentials through the appropriate implementation process.`,
      columns: 4,
      items: [
        {
          title: "Reference access",
          body: "Use the public interface to inspect operations and documentation safely.",
        },
        {
          title: "Interactive testing",
          body: "Do not assume a browser-based request can run against a remote sandbox.",
        },
        {
          title: "Credentials",
          body: "Keep keys, tokens, and customer identifiers out of the public reference and planning artifacts.",
        },
        {
          title: "Test plan",
          body: "Agree the environment, data, and acceptance check before testing a live integration.",
        },
      ],
      actionButton: {
        label: "Read testing requirements",
        href: "https://docs.ordering.co/docs/developers/api-reference-sandbox-testing/",
        external: true,
      },
    },
    {
      type: "cardsGrid",
      id: "knowledge-base",
      eyebrow: "Product guides",
      title: "Keep the documented product context close to the build.",
      lead: `The ${BRAND} documentation home groups product guides with the developer area. Use the relevant guide alongside the API reference so technical work remains connected to the product workflow it supports.`,
      columns: 4,
      items: [
        {
          title: "Product guide",
          body: "Read the guide for the product surface affected by the integration.",
        },
        {
          title: "API reference",
          body: "Use the canonical operations, parameters, schemas, and responses as the interface source.",
        },
        {
          title: "Operating owner",
          body: "Confirm who will use and maintain the resulting workflow.",
        },
        {
          title: "Release check",
          body: "Record the observable outcome the team will validate before relying on the integration.",
        },
      ],
      actionButton: {
        label: "Open product guides",
        href: "https://docs.ordering.co/",
        external: true,
      },
    },
    {
      type: "cardsGrid",
      id: "go-deeper",
      eyebrow: "Choose the next step",
      title: "Match the next conversation to the decision you actually need to make.",
      lead: "The public reference answers interface questions. Product, commercial, and operating scope still need to be agreed for the specific implementation.",
      columns: 3,
      items: [
        {
          title: "Inspect the API reference",
          body: "Review documented operations, parameters, schemas, and responses before proposing a technical path.",
          href: "https://docs.ordering.co/api-reference/",
          external: true,
        },
        {
          title: "Read the developer guides",
          body: "Use the guides to connect interface decisions to product integration and safe contribution practices.",
          href: "https://docs.ordering.co/docs/developers/",
          external: true,
        },
        {
          title: "Explore Automation integrations",
          body: "Review the specific webhook, API, authentication, workflow, and location references, then confirm which path applies to your project.",
          href: "/integrations/automation",
        },
        {
          title: "Define the product scope",
          body: "For a branded or specialized build, identify the surfaces, responsibilities, and acceptance checks that need a scoped decision.",
          href: "/developers/white-label",
        },
        {
          title: "Discuss the implementation",
          body: "Bring the workflow, technical questions, data ownership, and test plan to the team responsible for the project.",
          modalTopic: "Developer implementation scope",
        },
      ],
    },
    {
      type: "connectedMap",
      id: "connected",
      eyebrow: "One documented starting point",
      title: "Frame the work around a public interface and clear owners.",
      body: "An integration brief connects the workflow your team is building to the documented interface it needs to review. The technical reference and the operating acceptance check should stay together throughout the project.",
      topLabel: "What your team brings",
      topRow: ["Your workflow", "Your data owner", "Your release plan"],
      hubTitle: `${BRAND} API reference`,
      hubSubtitle: "Operations · Parameters · Schemas · Responses",
      bottomLabel: "What the project must resolve",
      bottomRow: ["Authentication", "Implementation scope", "Acceptance check"],
    },
  ],
  closingCta: {
    title: "Start with the reference, then make the scope concrete.",
    body: "Review the public interface first. When you are ready to plan the implementation, bring the workflow, data responsibilities, and acceptance criteria rather than an assumed capability list.",
    primaryCta: {
      label: "Read developer guides",
      href: "https://docs.ordering.co/docs/developers/",
      external: true,
    },
    secondaryCta: {
      label: `Talk to ${BRAND}`,
      modalTopic: "Developer API & integration scope",
    },
  },
};

/** 2. /developers/white-label */
export const WHITE_LABEL_SPEC: DeveloperPageSpec = {
  slug: "white-label",
  metaTitle: `White Label Ordering Platform | ${BRAND}`,
  metaDescription: `Understand the white-label decisions in a branded ${BRAND} implementation: customer-facing surfaces, operating responsibilities, and agreement scope.`,
  hero: {
    breadcrumbLabel: "White label",
    title: "Make the brand experience clear before you scope the technology.",
    lede: `${BRAND} is a white-label ordering solution: the customer experience carries the operator’s brand while ${BRAND} provides the platform underneath. The surfaces, rights, accounts, and responsibilities are agreed in your project scope.`,
    primaryCta: {
      label: `Talk to ${BRAND}`,
      modalTopic: "White-label ordering scope",
    },
    secondaryCta: {
      label: "Read developer guides",
      href: "/solutions/agencies-resellers",
    },
    meta: ["Branded experience", "Written scope", "Clear responsibilities"],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "surfaces",
      eyebrow: "Scope the customer experience",
      title: "Name every surface that needs a brand decision.",
      lead: `${BRAND}’s current public pricing materials list white-labeled marketplace websites, iOS and Android marketplace apps, and a dashboard. Treat that list as a starting point for a scope conversation, then document the exact surfaces and responsibilities for your project.`,
      columns: 3,
      items: [
        {
          title: "Marketplace website",
          body: `Public ${BRAND} pricing materials list a white-labeled marketplace website. Define the required identity, domain arrangement, content owner, and acceptance check for the website in your project scope.`,
        },
        {
          title: "iOS and Android apps",
          body: "White-labeled iOS and Android marketplace apps can be published to the App Store and Google Play on every plan, by your team with the documentation or with support on request.",
        },
        {
          title: "Dashboard",
          body: "Public pricing materials also list a white-labeled dashboard. Record which operators need it, the branding decisions it carries, and the workflows it must support.",
        },
        {
          title: "Customer communications",
          body: "If messages, receipts, or support touchpoints are part of the brand promise, specify the channel, copy owner, data boundary, and acceptance check instead of assuming they are covered.",
        },
        {
          title: "Domains and accounts",
          body: "Write down which party owns domain, store, analytics, and service accounts. Ownership and access should be resolved before release work begins.",
        },
        {
          title: "Operating handoff",
          body: "Name who updates brand material, approves releases, responds to customers, and validates the finished experience once it is in use.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "who",
      eyebrow: "Who needs the decision",
      title: "White label is a coordination model, not only a visual treatment.",
      lead: "The same brand questions appear whether a business runs its own channel, an agency serves clients, or an existing product is adding ordering. The important distinction is who makes each operating decision and who accepts the result.",
      columns: 3,
      items: [
        {
          label: "Brand",
          title: "A business running its own channel",
          body: "Clarify the customer experience, the operating team, and the brand assets that need approval before implementation.",
          href: "/solutions/restaurants",
        },
        {
          label: "Agency",
          title: "An agency or reseller serving clients",
          body: "Separate the agency’s delivery responsibilities from each client’s brand, account, data, and acceptance responsibilities.",
          href: "/solutions/agencies-resellers",
        },
        {
          label: "Product",
          title: "A product team adding ordering",
          body: "Map where ordering fits in the existing product and which team owns the interface, release, support, and ongoing change decisions.",
          href: "/solutions/software-companies",
        },
      ],
    },
    {
      type: "ownershipSplit",
      id: "ownership",
      eyebrow: "Write the boundaries down",
      title: "Turn brand decisions and platform responsibilities into one shared scope.",
      body: "A white-label implementation needs more than a logo treatment. The project should identify the customer-facing decisions the operator approves and the technology, implementation, and support responsibilities the parties agree to in writing.",
      panels: [
        {
          eyebrow: "Operator decisions",
          title: "The experience to approve",
          bullets: [
            "Brand identity and content rules",
            "Required customer-facing surfaces",
            "Domain and account ownership requirements",
            "Release and acceptance criteria",
            "Customer support and escalation model",
            "Ongoing change approvals",
          ],
        },
        {
          eyebrow: "Implementation scope",
          title: "The work to define with the platform team",
          bullets: [
            "Included technical surfaces",
            "Configuration and integration responsibilities",
            "Environment and credential handling",
            "Security and data responsibilities",
            "Release process and acceptance checks",
            "Maintenance and support terms",
          ],
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "beyond",
      eyebrow: "When branding is not the only decision",
      title: "Separate brand configuration from deeper technical requirements.",
      lead: "A branded surface may still leave product behavior, integrations, security, or operating workflows to resolve. Raise those requirements early, with documented acceptance criteria, so they are evaluated as scope rather than assumed to be part of white label.",
      columns: 2,
      items: [
        {
          label: "01",
          title: "Integration and behavior requirements",
          body: "Use the public developer reference to identify the operations, schemas, and handoffs that a product-specific build needs to review.",
          href: "/developers",
        },
        {
          label: "02",
          title: "Commercial and operating terms",
          body: "Document the included surfaces, rights, responsibilities, test conditions, and ongoing support expectations before the project relies on them.",
          href: "/solutions/custom-projects",
        },
      ],
    },
  ],
  closingCta: {
    title: "Bring a white-label scope, not just a mood board.",
    body: "Start with the experience you need to brand, the teams and accounts involved, and the acceptance checks that matter. That creates a concrete basis for a scoped implementation conversation.",
    primaryCta: {
      label: `Talk to ${BRAND}`,
      modalTopic: "White-label implementation scope",
    },
    secondaryCta: {
      label: "Read developer guides",
      href: "https://docs.ordering.co/docs/developers/",
      external: true,
    },
  },
  bottomCrossLink: {
    title: "Food delivery under your brand",
    linkLabel:
      "Launching a restaurant delivery business? Explore the white label food delivery app and its connected operating flow.",
    href: "/platform/ordering-apps",
  },
};

/** 3. /developers/source-code-license */
export const SOURCE_CODE_LICENSE_SPEC: DeveloperPageSpec = {
  slug: "source-code-license",
  metaTitle: `Source code license | ${BRAND}`,
  metaDescription: `The frontend source code of the ${BRAND} web storefront, customer apps, Merchant App, and Driver App is open source, included with every product.`,
  hero: {
    breadcrumbLabel: "Source code license",
    title: "Build the frontend your team needs. Keep the platform underneath managed.",
    lede: `The frontend source code of the web storefront, customer apps, Merchant App, and Driver App is open source and included with every ${BRAND} product, so your team can build on the technology that already runs the platform and choose its own release process. By default, the backend and the ${BRAND} API are managed by ${BRAND}. Enterprise organizations can license the backend source code under a separate agreement, subject to approval.`,
    primaryCta: {
      label: `Talk to ${BRAND}`,
      modalTopic: "Source code license inquiry",
    },
    secondaryCta: {
      label: "Developer overview",
      href: "/developers",
    },
    meta: ["Open source frontend", "Included with every product", "Backend and API managed"],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "licensed",
      eyebrow: "What is open source",
      title: "Four frontends, in source.",
      columns: 4,
      items: [
        {
          label: "01",
          title: "Ordering Web storefront",
          body: "Frontend code for the web ordering surface, including the customer-facing journey from menu to account and order tracking.",
        },
        {
          label: "02",
          title: "Customer apps",
          body: "Frontend code for the customer applications used to browse, order, and follow an order.",
        },
        {
          label: "03",
          title: "Merchant App",
          body: "Frontend code for the tools stores use as they accept, prepare, and track orders.",
        },
        {
          label: "04",
          title: "Driver App",
          body: "Frontend code for the app drivers use to receive assignments and complete deliveries.",
        },
      ],
    },
    {
      type: "controlBand",
      id: "backend",
      eyebrow: "The backend is on us",
      title: `Build the frontend. Leave the backend to ${BRAND}.`,
      body: `Your engineers spend their time on the experience customers see. ${BRAND} runs, secures, scales, and maintains the backend and the ${BRAND} API underneath it, on the technology that has powered ordering operations since 2012.`,
      footnote:
        "Managed infrastructure is included in every plan. This description does not establish an SLA or a specific certification.",
      tiles: [
        {
          title: "No servers to run",
          body: `${BRAND} operates the managed AWS infrastructure for you, so your team has no backend servers to maintain.`,
        },
        {
          title: "Scales with your orders",
          body: "Auto-scaling infrastructure built to process millions of orders a month.",
        },
        {
          title: "Secure by design",
          body: "Encrypted data transmission, access controls, continuous monitoring, and backups.",
        },
        {
          title: "High availability",
          body: "A high-availability architecture, distributed globally to support reliable performance.",
        },
        {
          title: "Proven with enterprise",
          body: "Technology proven with enterprise companies and refined since 2012.",
        },
        {
          title: "API and MCP included",
          body: `Build on the ${BRAND} API and connect compatible AI tools through MCP, while ${BRAND} keeps them running.`,
        },
      ],
      byocCallout: {
        title: `Run ${BRAND} in your own cloud.`,
        body: `Enterprise packages install ${BRAND} in your AWS, Google Cloud, Microsoft Azure, or Railway account.`,
        points: [
          "The whole backend: API, webhooks, and real-time.",
          "One contract at a fixed rate, with no charges per store or by transaction volume.",
        ],
        link: {
          label: "Explore bring your own cloud",
          href: "/developers/bring-your-own-cloud",
        },
      },
    },
    {
      type: "managedBoundarySplit",
      id: "managed",
      eyebrow: "What stays managed",
      title: "The frontend is open source. The backend is managed by default.",
      body: `The boundary is clear: your team works on the open source frontend code, while ${BRAND} manages the backend and the ${BRAND} API by default. That keeps the question practical: which customer and operator surfaces does your team want to change?`,
      items: [
        {
          title: "Backend and API",
          body: `By default, the backend and the ${BRAND} API are managed by ${BRAND}. The backend source code is available only to enterprise organizations, under a separate license agreement and after ${BRAND} approves the organization.`,
        },
        {
          title: "Platform services",
          body: "The services behind the frontend remain part of the managed platform rather than code your team receives.",
        },
        {
          title: "Your frontend release process",
          body: "Your team decides how it changes and releases its frontend code. The managed backend remains outside that release process.",
        },
        {
          title: "An intentional boundary",
          body: "Open source frontend code does not transfer ownership of the platform, backend, or API. It gives your team a defined frontend surface to evolve.",
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "how",
      eyebrow: "How it works",
      title: "Start with the surfaces your team wants to evolve.",
      body: "Working from the frontend source code is a fit when the standard interface needs deeper work from your engineers. Start with the surfaces in scope and the boundary between that code and the managed platform.",
      steps: [
        {
          num: "01",
          title: "Choose the surfaces in scope",
          body: `The frontend source code comes with every ${BRAND} product. Decide which web, customer, merchant, or driver surfaces your team will take on.`,
        },
        {
          num: "02",
          title: "Work from the open source frontend",
          body: "Your engineers use the frontend code as the starting point for the interface they are responsible for.",
        },
        {
          num: "03",
          title: "Build your own UX and features",
          body: "Use the frontend code as the place to adapt interface flows, presentation, and components to your product requirements.",
        },
        {
          num: "04",
          title: "Define the release boundary",
          body: "Decide how your team will maintain and release its frontend alongside the managed platform services it connects to.",
        },
        {
          num: "05",
          title: "Keep the platform boundary clear",
          body: `The managed backend and the ${BRAND} API remain with ${BRAND}. Align the frontend work with that boundary as your team designs the implementation.`,
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "compare",
      eyebrow: "Which route",
      title: "Choose the level of frontend involvement.",
      lead: "Configuration, frontend source code, and custom work are different ways to approach the interface. The useful distinction is who changes and maintains the frontend.",
      columns: 3,
      items: [
        {
          label: "01",
          title: "White label",
          body: "Start from configured surfaces when your team needs a branded ordering experience without taking on frontend source code.",
          href: "/developers/white-label",
        },
        {
          label: "02",
          title: "Frontend source code",
          body: "Work from the open source frontend when your engineers want a defined surface to adapt and maintain, with the backend and API still managed.",
        },
        {
          label: "03",
          title: "Custom projects",
          body: "Use custom work when the interface or integration needs a project designed around your particular requirements.",
          href: "/solutions/custom-projects",
        },
      ],
    },
    {
      type: "scopeNotes",
      id: "source-code-technologies",
      title: "Choose the official frontend for the technology you maintain.",
      lead: "The current Website engineering guide describes a React frontend built with Vite. The Customer App and Driver App engineering guides describe React Native projects with native iOS and Android workspaces.",
      paragraphs: [
        `Use the official ${BRAND} repositories linked below, then follow the matching README, license, engineering guide, and pinned shared dependencies. Android Studio is part of the Android build workflow for the native app project; it is not a separate pure-Android clone package.`,
        `These linked frontends are not PHP backend scripts or Flutter/Dart templates. If you need another frontend stack, define that implementation against the supported API rather than treating an unrelated GitHub clone as an ${BRAND} release. Repository access does not provide tenant credentials, signing identities, or a backend source license.`,
      ],
      links: [
        {
          label: "Website frontend: official repository",
          href: "https://github.com/Ordering-co/website-marketplace",
          external: true,
        },
        {
          label: "Customer App: official repository",
          href: "https://github.com/Ordering-co/ordering-app-marketplace",
          external: true,
        },
        {
          label: "Merchant App: official repository",
          href: "https://github.com/Ordering-co/ordering-app-business",
          external: true,
        },
        {
          label: "Driver App: official repository",
          href: "https://github.com/Ordering-co/ordering-app-driver",
          external: true,
        },
        {
          label: "Website engineering guide",
          href: "https://docs.ordering.co/docs/developers/website/engineering-guide/",
          external: true,
        },
        {
          label: "Customer App engineering guide",
          href: "https://docs.ordering.co/docs/developers/customer-app/engineering-guide/",
          external: true,
        },
        {
          label: "Driver App engineering guide",
          href: "https://docs.ordering.co/docs/developers/driver-app/engineering-guide/",
          external: true,
        },
      ],
    },
    {
      type: "faqAccordion",
      id: "faq",
      eyebrow: "Questions",
      title: "Questions about the source code.",
      items: [
        {
          q: "Which products include the frontend source code?",
          a: `Every ${BRAND} product. The frontend source code is open source, so your team can build on the technology that already runs the platform.`,
        },
        {
          q: "Is the backend included?",
          a: `No. The open source code is the frontend: the web storefront, the customer apps, the Merchant App, and the Driver App. By default, the backend and the ${BRAND} API are managed by ${BRAND}. The backend source code is available only to enterprise organizations, under a separate license agreement and after ${BRAND} approves the organization.`,
        },
        {
          q: "How does a team get the code and start working locally?",
          a: "Open the product in the Builder and download the frontend source code as an archive. Unzip it, open the folder in your terminal, and start a local server to preview changes as your team works, before deciding where the built frontend will run.",
        },
        {
          q: `Can we run ${BRAND} in our own cloud?`,
          a: `Yes, with an enterprise package. ${BRAND} can be installed in your AWS, Google Cloud, Microsoft Azure, or Railway account. Every other plan runs on the managed infrastructure that ${BRAND} operates for you.`,
        },
        {
          q: "Who maintains the code my team changes?",
          a: `Your team maintains and releases the frontend code it changes, with its own release process. ${BRAND} continues to run the backend and the API that frontend connects to.`,
        },
        {
          q: "Can we adapt the frontend for specific devices, browsers, or integrations?",
          a: `Yes. Working from the frontend source code lets your team optimize the interface for the devices and browsers your customers use and add the integrations your product needs, such as analytics or other external tools, while the backend and the ${BRAND} API stay managed by ${BRAND}.`,
        },
      ],
    },
  ],
  closingCta: {
    title: "Define the frontend boundary before you build.",
    body: "Tell us which web, customer, merchant, or driver surface your team wants to evolve. We can walk through what the frontend source code covers and what remains managed.",
    docGuide: {
      label: "Developers",
      href: "https://docs.ordering.co/docs/developers/",
    },
    primaryCta: {
      label: `Talk to ${BRAND}`,
      modalTopic: "Frontend source code boundary walkthrough",
    },
    secondaryCta: {
      label: "See pricing",
      href: "/pricing",
    },
  },
};

/** 4. /developers/bring-your-own-cloud */
export const BYOC_SPEC: DeveloperPageSpec = {
  slug: "bring-your-own-cloud",
  metaTitle: `Bring your own cloud | ${BRAND}`,
  metaDescription: `Run the same ${BRAND} backend, with API, webhooks, real-time, and MCP, in your own AWS, Google Cloud, Azure, or Railway account with an enterprise package.`,
  hero: {
    breadcrumbLabel: "Bring your own cloud",
    title: `Run ${BRAND} in your own cloud.`,
    lede: `For enterprise teams that need the platform inside a cloud account they control, ${BRAND} offers enterprise packages to install it on AWS, Google Cloud, Microsoft Azure, or Railway.`,
    primaryCta: {
      label: `Talk to ${BRAND}`,
      modalTopic: "Bring your own cloud enterprise package",
    },
    secondaryCta: {
      label: "See the managed option",
      href: "/developers/build-vs-buy#infrastructure",
    },
    meta: [
      "Enterprise packages",
      "Four cloud providers",
      "Support, security, and updates",
      "API, webhooks, and real-time",
    ],
  },
  sections: [
    {
      type: "cardsGrid",
      id: "reasons",
      eyebrow: "Why bring your own cloud",
      title: "The platform, inside the cloud your organization already runs.",
      columns: 3,
      items: [
        {
          label: "01",
          title: "An account you control",
          body: "The installation lives in your organization's cloud account, next to the rest of your infrastructure.",
        },
        {
          label: "02",
          title: "Your cloud policies",
          body: `Run ${BRAND} inside the security, procurement, and governance policies your organization already applies to its cloud.`,
        },
        {
          label: "03",
          title: "The provider you already use",
          body: "Choose AWS, Google Cloud, Microsoft Azure, or Railway, and build on the relationship and agreements you already have.",
        },
        {
          label: "04",
          title: `${BRAND} technology`,
          body: `The ordering platform your stores and customers use is ${BRAND}, installed where your organization needs it.`,
        },
        {
          label: "05",
          title: "One contract, a fixed rate",
          body: "One contract for an agreed term, at a fixed rate, with no charges per store or by transaction volume.",
        },
        {
          label: "06",
          title: "Everything the managed service includes",
          body: "MCP, AI ordering agents, Ordering Connect, marketplaces, and your own domains work the same in your installation.",
        },
      ],
    },
    {
      type: "cardsGrid",
      id: "backend",
      eyebrow: "The backend",
      title: "The whole backend, in your account.",
      columns: 4,
      items: [
        {
          title: "API",
          body: "The same endpoints as the public API reference.",
        },
        {
          title: "Webhooks",
          body: "Your own headers and query parameters, with sensitive header values stored encrypted.",
        },
        {
          title: "Real-time",
          body: "Socket updates keep orders, the dashboard, and delivery apps in sync.",
        },
        {
          title: "MCP",
          body: "Claude Code, ChatGPT, Codex, and other compatible AI tools.",
        },
        {
          title: "Orders",
          body: "Receive, accept, reject, update, cancel, and refund orders, including by item.",
        },
        {
          title: "Catalog",
          body: "Products, categories, and options.",
        },
        {
          title: "Stores and delivery",
          body: "Stores, hours, delivery zones, drivers, and connected delivery partners.",
        },
        {
          title: "Payments",
          body: "Payment gateways, with refunds to card or wallet.",
        },
      ],
      callout: {
        title: `The same backend ${BRAND} runs.`,
        body: `The same backend as ${BRAND}'s managed service, with the same products and features, including MCP, AI ordering agents, Ordering Connect, marketplaces, and your own domains. That backend already processes millions of orders a month on ${BRAND}'s own service.`,
        note: "Same endpoints, on your installation's base URL.",
        link: {
          label: "Open the API reference",
          href: "https://docs.ordering.co/api-reference/",
          external: true,
        },
      },
    },
    {
      type: "cardsGrid",
      id: "options",
      eyebrow: "Two ways to run the backend",
      title: "Managed for you, or installed in your cloud.",
      lead: "Most teams never touch the backend. Enterprise organizations that need the platform in their own account can bring their own cloud.",
      columns: 2,
      items: [
        {
          label: "01",
          title: `Managed by ${BRAND}`,
          body: `Included in every plan. ${BRAND} operates the managed AWS infrastructure, with auto-scaling, high availability, monitoring, and backups, so your team has no servers to run.`,
          href: "/developers/build-vs-buy#infrastructure",
        },
        {
          label: "02",
          title: "Bring your own cloud",
          body: `An enterprise package. ${BRAND} is installed in your AWS, Google Cloud, Microsoft Azure, or Railway account, with support, security, and update packages available for the installation.`,
        },
      ],
    },
    {
      type: "connectedMap",
      id: "connect",
      eyebrow: "How it connects",
      title: "Your systems talk to your installation.",
      body: "Your apps, POS and back office, and payment and delivery providers connect to your installation the same way they connect to the managed service. Email, SMS, and push notifications keep customers updated as orders move through it.",
      topLabel: "What connects",
      topRow: [
        "Your apps and websites",
        "POS and back office",
        "Payment and delivery providers",
        "AI tools through MCP",
      ],
      hubTitle: `${BRAND} in your cloud account`,
      hubSubtitle: "API · Webhooks · Real-time",
      bottomLabel: "Running in your account",
      bottomRow: ["Database", "Queues and background jobs", "Scheduled tasks", "File storage"],
    },
    {
      type: "ownershipSplit",
      id: "responsibilities",
      eyebrow: "Who's responsible for what",
      title: "Split cleanly between your account and the backend.",
      body: `Bring your own cloud draws a clear line between what your organization controls and what ${BRAND} brings to the installation.`,
      panels: [
        {
          eyebrow: "Yours",
          title: "What stays with your organization",
          bullets: [
            "The cloud account the installation runs in",
            "Your agreements with your cloud provider",
            "Your security, procurement, and governance policies",
          ],
        },
        {
          eyebrow: "Ours",
          title: `What ${BRAND} brings`,
          bullets: [
            "The same backend and products as the managed service",
            "Planning the installation with your team",
            "Support, security, and update packages you can add",
          ],
        },
      ],
    },
    {
      type: "stepsSplit",
      id: "how",
      eyebrow: "How it comes together",
      title: "Scope the package, then install it in your account.",
      body: "Each enterprise package starts from the cloud your organization uses and the parts of the platform the installation needs to cover.",
      sideNote: {
        title: "The frontend stays open source",
        body: "Every product includes the open-source frontend code, so your team can build its own experience on top of the platform running in your cloud.",
        link: {
          label: "Explore the source code",
          href: "/developers/source-code-license",
        },
      },
      steps: [
        {
          num: "01",
          title: "Choose your cloud",
          body: "AWS, Google Cloud, Microsoft Azure, or Railway.",
        },
        {
          num: "02",
          title: "Scope the installation",
          body: `Agree on the ${BRAND} products, environments, integrations, and responsibilities the package covers, and choose the support, security, and update packages you need.`,
        },
        {
          num: "03",
          title: `Plan it with ${BRAND}`,
          body: `Work with the ${BRAND} team on the installation in your account.`,
        },
        {
          num: "04",
          title: "Go live",
          body: "Start taking orders on the platform running in your cloud.",
        },
      ],
    },
    {
      type: "faqAccordion",
      id: "faq",
      eyebrow: "Questions",
      title: "Questions about bringing your own cloud.",
      items: [
        {
          q: "Who is bring your own cloud for?",
          a: `Enterprise organizations that need ${BRAND} installed in a cloud account they control. It is offered as an enterprise package.`,
        },
        {
          q: "Which cloud providers are supported?",
          a: "AWS, Google Cloud, Microsoft Azure, and Railway.",
        },
        {
          q: "Is it included in every plan?",
          a: `No. Every plan runs on the managed infrastructure that ${BRAND} operates for you. Bring your own cloud is available through enterprise packages.`,
        },
        {
          q: "What does an enterprise package cover?",
          a: `Each enterprise package covers the installation in your cloud account, and you can add support, security, and update packages. The details of each package are reviewed with the ${BRAND} team on a sales call.`,
        },
        {
          q: "Is it the same platform as the managed service?",
          a: `Yes. Bring your own cloud installs the same backend as ${BRAND}'s managed service, with the same products and features, including MCP, AI ordering agents, Ordering Connect, marketplaces, and your own domains.`,
        },
        {
          q: "Does the public API reference apply?",
          a: "Yes. The public API reference documents the same endpoints; your installation exposes them on its own base URL.",
        },
        {
          q: "How is bring your own cloud priced?",
          a: "Bring your own cloud runs on one contract for an agreed term at a fixed rate, with no charges per store or by transaction volume. The specific terms are agreed with each organization.",
        },
        {
          q: "Who keeps the installation supported, secure, and up to date?",
          a: `${BRAND} offers support, security, and update packages for installations in your own cloud. The ${BRAND} team walks you through the options on a sales call and scopes them with your enterprise package.`,
        },
        {
          q: "Do we still get the frontend source code?",
          a: `Yes. The frontend source code is open source and included with every ${BRAND} product. The backend source code is available only to enterprise organizations, under a separate license agreement and after ${BRAND} approves the organization.`,
        },
      ],
    },
  ],
  closingCta: {
    title: `Plan ${BRAND} in your own cloud.`,
    body: "Tell us which cloud provider your organization uses and what the installation needs to cover.",
    primaryCta: {
      label: `Talk to ${BRAND}`,
      modalTopic: "Bring your own cloud installation planning",
    },
    secondaryCta: {
      label: "See enterprise solutions",
      href: "/solutions/enterprise",
    },
  },
};
