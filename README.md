# Invigosol

**Engineering Intelligence. Delivering Outcomes.**

Invigosol is an AI-native technology partner that helps businesses architect, build, and scale intelligent systems — from strategy to production.

This repository contains the source code for [invigosol.com](https://www.invigosol.com), the company's public-facing marketing website.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 5](https://astro.build) — static-first, zero JS by default |
| Language | TypeScript |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Icons | [Lucide](https://lucide.dev) — tree-shakeable SVGs |
| Contact Form | [Formspree](https://formspree.io) — no backend required |
| Sitemap | @astrojs/sitemap — auto-generated XML |
| Hosting | Vercel / Netlify |

## Services

The site showcases six core service offerings:

1. **IT Services** — Enterprise infrastructure, cloud management, and technical operations
2. **AI-Driven Development** — Intelligent software powered by AI/ML
3. **Product Management & Maintenance** — Full-lifecycle product ownership and evolution
4. **DevOps Management** — CI/CD pipelines, infrastructure as code, and observability
5. **Architecture Design** — Scalable system blueprints and cloud-native architecture
6. **Agent Development (OpenClaw)** — Custom AI agents and multi-agent orchestration

## Site Structure

```
invigosol.com/
├── /                            Home
├── /about                       About the company
├── /services                    Services overview
│   ├── /services/it-services
│   ├── /services/ai-driven-development
│   ├── /services/product-management
│   ├── /services/devops-management
│   ├── /services/architecture-design
│   └── /services/agent-development
├── /contact                     Contact form + company info
└── /404                         Custom 404 page
```

**12 pages total** — all statically generated at build time.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+
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
│   └── BaseLayout.astro          # Root HTML shell (head, nav, footer)
├── pages/
│   ├── index.astro               # Home
│   ├── about.astro               # About
│   ├── contact.astro             # Contact
│   ├── 404.astro                 # Custom 404
│   └── services/
│       ├── index.astro           # Services overview grid
│       └── [slug].astro          # Service detail (generates 6 pages)
├── components/
│   ├── layout/                   # Navbar, Footer, MobileMenu
│   ├── home/                     # Home page sections
│   ├── services/                 # Service cards and detail sections
│   ├── about/                    # About page sections
│   ├── contact/                  # Contact form and info
│   └── shared/                   # Reusable components (Button, Container, etc.)
├── data/
│   ├── services.ts               # All 6 services defined in one file
│   ├── company.ts                # Company info, social links
│   └── navigation.ts             # Nav link structure
└── styles/
    └── global.css                # Tailwind directives + custom properties
```

## Documentation

Detailed specifications are in the [`docs/`](docs/) directory:

- **[Implementation Plan](docs/implementation-plan.md)** — Tech stack rationale, directory structure, data models, SEO strategy, responsive design specs, performance targets, and phased implementation steps
- **[Site Content](docs/site-content.md)** — Complete copy for every page, SEO metadata, JSON-LD schemas, and content guidelines

## Deployment

The site builds to static HTML/CSS and can be deployed to any static hosting provider. Recommended:

1. Push to GitHub
2. Connect to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) (auto-detects Astro)
3. Configure custom domain (`invigosol.com`)
4. Set up Formspree form ID for the contact form

## License

All rights reserved.
