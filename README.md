# DXP Site (`dxp-site`)

White-label ordering infrastructure marketing & platform website inspired by [Ordering.co](https://www.ordering.co/), engineered with the same Next.js 16 App Router architecture as `dxp-storefront`.

## Tech Stack & Architecture (aligned with `dxp-storefront`)

- **Framework**: Next.js 16 (`output: "standalone"`), React 19, TypeScript 5.9
- **Styling**: Tailwind CSS 3.4 with CSS custom property design tokens (`src/app/[lang]/global.css` + `tailwind.config.ts`), `class-variance-authority`, `clsx`, `tailwind-merge`
- **UI Primitives**: Radix UI (`@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-slot`), Lucide Icons, Motion, Sonner toasts
- **Forms & State**: `react-hook-form`, `zod`, `@hookform/resolvers`, `zustand`
- **i18n Routing**: `[lang]` App Router segment (`en` default at `/`, `vi` at `/vi`) with `src/proxy.ts`, `i18n-config.ts`, `TranslationProvider`, and `useDictionaries`
- **Typography**: Local Vietnamese-capable `FZ Poppins` (`next/font/local` in `src/lib/fonts.ts`)

## Pages

- `/` — Full Ordering.co-style homepage (Hero + Interactive Live Preview, Trust Bar, 3-Options Comparison, Build/Operate/Connect/Extend Pillars, AI Ordering Agents Simulator, Industry Solutions, Integrations Hub, Developer API/MCP Code Showcase, Testimonials, Pricing Preview, FAQ, Final CTA)
- `/products` — Filterable 20+ connected products catalog
- `/solutions` — Restaurants, Franchises, Multi-Vendor Marketplaces, Grocery/Retail, Cloud Kitchens
- `/integrations` — Searchable POS, Payments, 3PL Delivery, CRM & API/MCP directory
- `/pricing` — Monthly/Annual toggle, Restaurant/Marketplace/Enterprise tiers, interactive 0% Commission Savings Calculator, full comparison table
- `/demo` — Validated 1-on-1 Live Demo booking page (`/api/demo`)
- `/api/health` — Service health endpoint

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) (English) or [http://localhost:3010/vi](http://localhost:3010/vi) (Vietnamese).

## Quality Checks & Build

```bash
npm run check-types
npm run lint
npm run build
```
