# Invigosol.com — Website Implementation Plan

## 1. Overview

**Company:** Invigosol  
**Website:** invigosol.com  
**Purpose:** Public-facing marketing website to showcase IT services and products  
**Type:** Static site — no backend server required  

### Company Services

| # | Service | Description |
|---|---------|-------------|
| 1 | IT Services | End-to-end IT consulting, infrastructure management, and support |
| 2 | AI-Driven Development | Intelligent software solutions powered by AI/ML |
| 3 | Product Management & Maintenance | Full lifecycle product ownership, roadmap planning, and ongoing maintenance |
| 4 | DevOps Management | CI/CD pipelines, cloud infrastructure, monitoring, and automation |
| 5 | Architecture Design | Scalable system design, microservices architecture, and technical blueprints |
| 6 | Agent Development (OpenClaw) | AI agent development platform and custom agent solutions |

---

## 2. Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Astro 5** | Purpose-built for static/content sites; ships zero JavaScript by default; excellent SEO out of the box |
| Language | **TypeScript** | Type safety and better developer experience |
| Styling | **Tailwind CSS 4** | Utility-first CSS; small production bundles; rapid UI development |
| Icons | **Lucide** | Tree-shakeable SVG icons with no JS overhead |
| Contact Form | **Formspree** | Third-party form endpoint; no backend needed; free tier (50 submissions/month) |
| Sitemap | **@astrojs/sitemap** | Auto-generates XML sitemap from all pages |
| Deployment | **Vercel / Netlify** | Zero-config static hosting with CDN, preview deploys, and custom domains |

### Why Astro (Not Next.js)?

- All content is static — no server-side logic, database, or API routes needed
- Astro ships **zero JavaScript** by default (Next.js always ships the React runtime)
- Built specifically for content/marketing sites
- Produces pure static HTML/CSS files — deployable on any static host
- Lighter build output, faster page loads, better Lighthouse scores

---

## 3. Site Map

```
invigosol.com/
├── /                           Home
├── /about                      About the company
├── /services                   Services overview (all 6)
│   ├── /services/it-services
│   ├── /services/ai-driven-development
│   ├── /services/product-management
│   ├── /services/devops-management
│   ├── /services/architecture-design
│   └── /services/agent-development
├── /contact                    Contact form + company info
├── /404                        Custom 404 page
├── /sitemap.xml                Auto-generated
└── /robots.txt                 Auto-generated
```

**Total pages:** 12 (Home + About + Services overview + 6 service detail + Contact + 404)

---

## 4. Page Specifications

### 4.1 Home Page (`/`)

| Section | Content |
|---------|---------|
| **Hero** | Full-width gradient background, headline ("Empowering Innovation Through Technology"), subheading, two CTAs: "Explore Services" and "Contact Us" |
| **Services Overview** | 6 cards in a responsive grid — icon, title, one-liner, link to detail page |
| **Why Choose Us** | 3–4 pillars: "AI-First Approach", "End-to-End Delivery", "Proven Track Record", "Dedicated Teams" |
| **OpenClaw Spotlight** | Dedicated banner for the OpenClaw agent development product with description and CTA |
| **Testimonials** | Client quotes in a grid or carousel (placeholder content initially) |
| **CTA** | "Ready to transform your business?" with contact button |

### 4.2 About Page (`/about`)

| Section | Content |
|---------|---------|
| **Company Story** | Who Invigosol is, when founded, mission |
| **Mission & Vision** | Side-by-side cards with mission and vision statements |
| **Core Values** | 4–6 values with icons and descriptions |
| **Team** | Team member cards with placeholder photos, name, role, bio |

### 4.3 Services Overview (`/services`)

Grid layout showing all 6 services. Each card includes:
- Icon
- Service title
- 2–3 sentence description
- "Learn More" link to the detail page

### 4.4 Service Detail (`/services/[slug]`)

Each of the 6 services gets a dedicated page with:

| Section | Content |
|---------|---------|
| **Hero** | Service title, tagline, placeholder background image |
| **Problem Statement** | "Challenges We Solve" — 3–4 pain points the service addresses |
| **Features / Capabilities** | List of features with icon, title, and paragraph |
| **Process** | Numbered timeline: "How We Work" (Discovery, Planning, Execution, Delivery) |
| **Related Services** | Links to 2–3 related services |
| **CTA** | "Discuss your [service] needs" with contact link |

### 4.5 Contact Page (`/contact`)

| Section | Content |
|---------|---------|
| **Contact Form** | Fields: Name, Email, Company, Phone (optional), Service Interest (dropdown), Message. Posts to Formspree. HTML5 validation. |
| **Company Info** | Address, email, phone, social media links |

### 4.6 404 Page

Branded error page with heading, message, and link back to home.

---

## 5. Directory Structure

```
invigosol/
  astro.config.mjs                  # Site URL, integrations (Tailwind, sitemap)
  tailwind.config.mjs               # Brand colors, fonts, custom theme
  tsconfig.json
  package.json
  docs/
    implementation-plan.md           # This document
  src/
    layouts/
      BaseLayout.astro               # Root HTML: <head>, Navbar, Footer, fonts, meta tags
    pages/
      index.astro                    # Home
      about.astro                    # About
      contact.astro                  # Contact
      404.astro                      # Custom 404
      services/
        index.astro                  # Services overview
        [slug].astro                 # Service detail (generates 6 static pages)
    components/
      layout/
        Navbar.astro                 # Desktop navigation + logo
        Footer.astro                 # Site footer with links and copyright
        MobileMenu.astro             # Hamburger menu (only JS component)
      home/
        HeroSection.astro
        ServicesOverview.astro
        WhyChooseUs.astro
        OpenClawSpotlight.astro
        Testimonials.astro
        CTASection.astro
      services/
        ServiceCard.astro
        ServiceDetailHero.astro
        ServiceFeatureList.astro
        RelatedServices.astro
      about/
        MissionVision.astro
        TeamSection.astro
        ValuesSection.astro
      contact/
        ContactForm.astro            # Formspree form
        ContactInfo.astro
      shared/
        SectionHeading.astro         # Reusable section title + subtitle
        Button.astro                 # Primary/secondary/outline button variants
        Container.astro              # Max-width centered content wrapper
        JsonLd.astro                 # Reusable JSON-LD structured data injector
        Breadcrumbs.astro            # Breadcrumb navigation
        PlaceholderImage.astro       # Styled image placeholder (swap with real images later)
    data/
      services.ts                    # All 6 services: slug, title, features, process steps
      company.ts                     # Company name, address, email, phone, social links
      navigation.ts                  # Nav link structure
    styles/
      global.css                     # Tailwind directives + CSS custom properties
  public/
    images/
      logo.svg                       # Company logo (placeholder)
      og-default.png                 # 1200x630 Open Graph fallback image
      services/                      # Service hero images (placeholders initially)
    favicon.svg
```

---

## 6. Service Data Model

All service content is defined in a single TypeScript file (`src/data/services.ts`). No CMS or database needed.

```typescript
export interface Service {
  slug: string;               // URL slug, e.g. "ai-driven-development"
  title: string;              // Display name, e.g. "AI-Driven Development"
  tagline: string;            // Short tagline for hero sections
  description: string;        // 2-3 sentences for overview cards
  longDescription: string;    // Paragraph for detail page hero
  icon: string;               // Lucide icon name
  features: {
    title: string;
    description: string;
  }[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  relatedSlugs: string[];     // 2-3 slugs of related services
}
```

**Service slugs:**
- `it-services`
- `ai-driven-development`
- `product-management`
- `devops-management`
- `architecture-design`
- `agent-development`

---

## 7. SEO Strategy

### 7.1 Metadata (Every Page)

Each page provides unique values to `BaseLayout.astro` which renders:

```html
<title>{pageTitle} | Invigosol</title>
<meta name="description" content="{pageDescription}" />
<link rel="canonical" href="https://www.invigosol.com{path}" />
<meta property="og:title" content="{pageTitle}" />
<meta property="og:description" content="{pageDescription}" />
<meta property="og:image" content="/images/og-default.png" />
<meta property="og:url" content="https://www.invigosol.com{path}" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

### 7.2 Structured Data (JSON-LD)

| Schema | Where | Purpose |
|--------|-------|---------|
| Organization | Root layout (all pages) | Company name, logo, URL, contact info, social links |
| WebSite | Home page | Site name and URL for Google knowledge panel |
| Service | Each `/services/[slug]` | Service name, description, provider — helps Google understand offerings |
| BreadcrumbList | All inner pages | Enables breadcrumb display in search results |

### 7.3 Sitemap & Robots

- **Sitemap**: Auto-generated by `@astrojs/sitemap` at `/sitemap.xml` — lists all pages with priority values
- **Robots.txt**: Allows all crawlers, points to sitemap URL
- **Site URL**: Configured in `astro.config.mjs` as `https://www.invigosol.com`

### 7.4 Semantic HTML Checklist

- [ ] One `<h1>` per page
- [ ] Proper `<h2>` / `<h3>` heading hierarchy (no skipped levels)
- [ ] Semantic elements: `<main>`, `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`
- [ ] `alt` text on every image
- [ ] `<html lang="en">`
- [ ] Internal linking between service pages ("Related Services")
- [ ] Canonical URL on every page

---

## 8. Responsive Design (Mobile-First)

All styles written mobile-first, then enhanced with Tailwind breakpoint prefixes.

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Default | < 640px | Single column, hamburger nav, stacked cards, full-width form inputs |
| `sm` | 640px | Minor spacing adjustments |
| `md` | 768px | 2-column grids, side-by-side layouts |
| `lg` | 1024px | 3-column grids, desktop navigation visible, hamburger hidden |
| `xl` | 1280px | Max content width (1280px), larger hero text |

### Mobile-Specific Requirements

- Hamburger menu with slide-out overlay (only interactive JS component)
- Sticky navbar with compact height
- Service cards stack vertically
- Hero: text above image (not side-by-side)
- Contact form: full-width inputs
- Footer columns stack vertically
- All tap targets minimum **44px** (Apple HIG / WCAG guideline)
- No horizontal scrolling on any viewport width

---

## 9. Placeholder Image Strategy

All image slots use styled CSS placeholders. Real images will be added later.

### PlaceholderImage Component

A reusable `PlaceholderImage.astro` component that renders a gradient box with an icon and label:

```
┌─────────────────────────────┐
│                             │
│      [ camera icon ]        │
│      "Hero Image"           │
│                             │
└─────────────────────────────┘
```

- Configurable aspect ratio (16:9 for heroes, 1:1 for avatars, 4:3 for cards)
- Gradient background (`slate-200` to `slate-300`)
- Descriptive label so it's clear what image goes there
- Same dimensions as the final images to prevent layout shift when swapped

### Where Placeholders Are Used

- Home page hero background
- Service detail page hero images
- Service card thumbnails (optional)
- Team member photos (about page)
- OpenClaw spotlight image
- Testimonial avatars
- OG default image (`public/images/og-default.png`)

### Swapping In Real Images

Replace `<PlaceholderImage label="..." aspectRatio="16/9" />` with:
```html
<img src="/images/hero.jpg" alt="Description" class="..." />
```
Or use Astro's optimized `<Image>` component for automatic WebP conversion and sizing.

---

## 10. Performance Targets

| Metric | Target | How |
|--------|--------|-----|
| Lighthouse Performance | 98+ | Static HTML, no runtime JS, optimized images |
| Lighthouse SEO | 100 | Meta tags, sitemap, semantic HTML, canonical URLs |
| Lighthouse Accessibility | 100 | ARIA labels, color contrast, keyboard nav, heading hierarchy |
| LCP (Largest Contentful Paint) | < 1.5s | Static HTML served from CDN |
| CLS (Cumulative Layout Shift) | ~0 | No JS layout shifts, sized placeholders, font-display: swap |
| INP (Interaction to Next Paint) | < 100ms | Near-zero client-side JS |
| JavaScript shipped | 0 KB (most pages) | Astro's zero-JS default; only MobileMenu uses `client:load` |

---

## 11. Contact Form (Formspree)

No backend required. The HTML form posts directly to Formspree's endpoint.

**Form fields:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Name | text | Yes | |
| Email | email | Yes | HTML5 email validation |
| Company | text | No | |
| Phone | tel | No | |
| Service Interest | select | No | Dropdown of 6 services + "General Inquiry" |
| Message | textarea | Yes | |

**Setup steps:**
1. Create a free Formspree account
2. Create a form and get the form ID
3. Set the form `action` to `https://formspree.io/f/{form_id}`
4. Formspree handles email delivery, spam filtering, and a dashboard

---

## 12. Implementation Phases

### Phase 1: Foundation (Steps 1–9)

1. Initialize Astro project with TypeScript + Tailwind
2. Install integrations: `@astrojs/sitemap`
3. Configure `astro.config.mjs` with site URL and integrations
4. Define brand colors and fonts in `tailwind.config.mjs`
5. Create `src/styles/global.css` with Tailwind directives
6. Create `src/data/company.ts` with company info
7. Build shared components: `Container`, `Button`, `SectionHeading`, `JsonLd`, `Breadcrumbs`, `PlaceholderImage`
8. Build `BaseLayout.astro` with `<head>` (meta, fonts, OG tags), Navbar, Footer
9. Build `Navbar.astro` (desktop + mobile hamburger) and `Footer.astro`

### Phase 2: Service Pages (Steps 10–14)

10. Create `src/data/services.ts` with all 6 services fully defined
11. Build `ServiceCard.astro` component
12. Build `/services/index.astro` — overview grid
13. Build `/services/[slug].astro` — detail page with `getStaticPaths`, hero, features, process, related services
14. Add per-page metadata + Service JSON-LD to each detail page

### Phase 3: Remaining Pages (Steps 15–18)

15. Build Home page: Hero, ServicesOverview, WhyChooseUs, OpenClawSpotlight, Testimonials, CTA
16. Build About page: MissionVision, ValuesSection, TeamSection
17. Build Contact page: ContactForm (Formspree), ContactInfo
18. Build custom 404 page

### Phase 4: SEO & Polish (Steps 19–25)

19. Verify every page has unique title, description, canonical URL, OG tags
20. Add JSON-LD: Organization (layout), Service (detail pages), BreadcrumbList (inner pages), WebSite (home)
21. Verify sitemap lists all pages
22. Add `robots.txt`
23. Create placeholder OG image (1200x630)
24. Accessibility audit: keyboard nav, color contrast, ARIA labels, heading hierarchy
25. Run Lighthouse on all pages — fix issues until targets met

### Phase 5: Deploy (Steps 26–31)

26. Initialize git repo, create `.gitignore`, push to GitHub
27. Connect to Vercel/Netlify (auto-detects Astro)
28. Configure custom domain (`invigosol.com`)
29. Set up Formspree form and update form action URL
30. Test production build — verify meta tags, sitemap, form submission
31. Submit sitemap to Google Search Console

---

## 13. Verification Checklist

- [ ] `npm run build` completes with zero errors
- [ ] `npm run preview` — all pages render correctly
- [ ] Lighthouse: 98+ Performance, 100 SEO, 100 Accessibility on all pages
- [ ] View page source: correct `<title>`, `<meta description>`, canonical, OG tags, JSON-LD
- [ ] `/sitemap.xml` lists all 12 pages
- [ ] Responsive: test at 375px, 390px, 768px, 1024px, 1440px — no horizontal scroll, hamburger works, cards stack, touch targets >= 44px
- [ ] Contact form: validation errors display, successful submission works
- [ ] All navigation links work, service cards link to correct detail pages
- [ ] Invalid URL shows custom 404 page
- [ ] OG tags validate with social card validators
- [ ] Zero JS shipped on pages without interactive components

---

## 14. Future Enhancements (Post-Launch)

- **Blog** — MDX-based blog for content marketing and SEO
- **CMS integration** — Contentful or Sanity if non-developers need to edit content
- **OpenClaw landing page** — Dedicated sub-site or expanded section for the OpenClaw product
- **Analytics** — Plausible or Fathom (privacy-friendly) or Google Analytics
- **Internationalization** — Multi-language support if needed
- **Dark mode** — Toggle between light/dark themes
