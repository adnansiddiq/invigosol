# InvigoSol

**Engineering Intelligence. Delivering Outcomes.**

Invigosol is an AI-native technology partner that helps businesses architect, build, and scale intelligent systems — from strategy to production.

This repository contains the source code for [invigosol.com](https://www.invigosol.com), the company's public-facing marketing website.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 6](https://astro.build) — static-first, zero JS by default |
| Language | TypeScript |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Icons | [Lucide](https://lucide.dev) — tree-shakeable SVGs |
| Contact Form | [Formspree](https://formspree.io) — no backend required |
| Sitemap | @astrojs/sitemap — auto-generated XML |
| Hosting | Vercel / Netlify |

## Services

Eight services, defined once in `src/data/services.ts`. The navbar, footer, home grid, `/services` page,
service detail pages and contact-form dropdown are all generated from that file, so adding or removing a
service means editing only that file. Slugs are kept stable to protect existing links and rankings.

1. **AI Agent Development** (`agent-development`)
2. **Generative AI & LLM Development** (`ai-driven-development`)
3. **AI Business Process Automation** (`ai-automation`)
4. **WhatsApp Business API & Meta Integration** (`whatsapp-business-integration`)
5. **SaaS & Product Engineering** (`product-management`)
6. **DevOps, Cloud & MLOps** (`devops-management`)
7. **Software Architecture & AI Readiness** (`architecture-design`)
8. **Managed IT, Cloud & Cybersecurity** (`it-services`)

## Products

Defined in `src/data/products.ts`, rendered at `/products` and `/products/<slug>`.

- **BizAgent** (`bizagent`): WhatsApp and email monitoring for business owners, [bizagent.pk](https://bizagent.pk).
  Keep prices in sync with bizagent.pk/pricing.

## Site Structure

```
invigosol.com/
├── /                            Home
├── /about                       About the company
├── /services                    Services overview (AI & automation, Engineering & cloud)
│   └── /services/<slug>         8 service pages
├── /products                    Products overview
│   └── /products/bizagent
├── /contact                     Contact form + company info
├── /privacy                     Privacy policy (incl. Meta Platform Data)
├── /terms                       Terms of service
├── /data-deletion               Data deletion instructions (for Meta app review)
└── /404                         Custom 404 page (noindex)
```

**18 pages total**, all statically generated at build time.

## Brand

- Orange theme sampled from the logo (`#F35B18` to `#F8B10B`). Tokens live in `src/styles/global.css` (`primary-*`, `accent-*`, `ink-*`).
- Logo source: `public/images/brand/logo.jpg`. The transparent mark (`logo-mark.png`), favicons and `og-default.png` are derived from it.
- Headings use Plus Jakarta Sans and the wordmark uses Saira Condensed (italic 800).

## Legal entity and Meta verification

`src/data/company.ts` holds `legalName`, `address`, `country` and `phone`. These must match the business verified in
Meta Business Manager. Empty values are hidden on every page. Set them before submitting for Meta verification.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 22.12+
- npm (or pnpm/yarn)

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── layouts/
│   ├── BaseLayout.astro          # Root HTML shell (head, SEO, JSON-LD, nav, footer)
│   └── LegalLayout.astro         # Legal pages: hero, last-updated date, contents list
├── pages/
│   ├── index.astro               # Home
│   ├── about.astro               # About
│   ├── contact.astro             # Contact
│   ├── 404.astro                 # Custom 404
│   ├── privacy.astro, terms.astro, data-deletion.astro
│   ├── products/                 # Products overview + [slug] detail
│   └── services/
│       ├── index.astro           # Services overview grid
│       └── [slug].astro          # Service detail (generates 8 pages)
├── components/
│   ├── layout/                   # Navbar, Footer, MobileMenu
│   ├── home/                     # Home page sections
│   ├── services/                 # Service cards and detail sections
│   ├── about/                    # About page sections
│   ├── contact/                  # Contact form and info
│   └── shared/                   # Reusable components (Button, Container, etc.)
├── data/
│   ├── services.ts               # All 8 services (copy, FAQs, SEO meta)
│   ├── products.ts               # Products (BizAgent)
│   ├── company.ts                # Company + legal entity details
│   └── navigation.ts             # Nav/footer links, generated from services and products
└── styles/
    └── global.css                # Tailwind directives + custom properties
```

## Documentation

Detailed specifications are in the [`docs/`](docs/) directory:

- **[Site Reference](docs/site-reference.md)**: start here. Pages, data files, how to add services and products, brand tokens, SEO, legal pages and Meta verification, open items, changelog
- **[Site Content](docs/site-content.md)**: content summary per page, service keyword focus, SEO titles and content guidelines
- **[Implementation Plan](docs/implementation-plan.md)**: the original v1 build plan (historical)

## Deployment

The site builds to static HTML/CSS and can be deployed to any static hosting provider. Recommended:

1. Push to GitHub
2. Connect to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) (auto-detects Astro)
3. Configure custom domain (`invigosol.com`)
4. Set up Formspree form ID for the contact form

## License

All rights reserved.
