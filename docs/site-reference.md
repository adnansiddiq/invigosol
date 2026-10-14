# InvigoSol.com: Site Reference

> The current reference for how the site is built and maintained. Last updated 2026-10-14 (orange rebrand,
> services refresh, BizAgent product, Meta-ready legal pages).
>
> `implementation-plan.md` is the original v1 build plan and is kept for history. `site-content.md` describes page
> content. When code and docs disagree, the data files in `src/data/` win.

---

## 1. What the site is

- Public marketing site for **InvigoSol** at `https://www.invigosol.com`.
- Astro 6 static site with Tailwind CSS 4 and Lucide icons. No backend. The contact form posts to Formspree.
- It lists InvigoSol's services and products (currently **BizAgent**). It is also the business website Meta checks
  when verifying InvigoSol as a **Meta Tech Provider** for the BizAgent app.

## 2. Pages

| Route | Source | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero, services grid, BizAgent spotlight, why us + process, FAQ, CTA |
| `/about` | `src/pages/about.astro` | Story, mission/vision, values, BizAgent spotlight |
| `/services` | `src/pages/services/index.astro` | Two groups: "AI & automation" and "Engineering & cloud" |
| `/services/<slug>` | `src/pages/services/[slug].astro` | One page per entry in `services.ts` |
| `/products` | `src/pages/products/index.astro` | One card per entry in `products.ts` |
| `/products/<slug>` | `src/pages/products/[slug].astro` | Features, how it works, pricing, FAQ, legal links |
| `/contact` | `src/pages/contact.astro` | Formspree form + contact details |
| `/privacy` | `src/pages/privacy.astro` | Privacy policy, including Meta Platform Data |
| `/terms` | `src/pages/terms.astro` | Terms of service, including Meta/WhatsApp rules |
| `/data-deletion` | `src/pages/data-deletion.astro` | Data deletion instructions (Meta requirement) |
| `/404` | `src/pages/404.astro` | `noindex`, excluded from the sitemap |

18 pages in total, all generated at build time.

## 3. Data files (single source of truth)

| File | Holds | Used by |
|---|---|---|
| `src/data/company.ts` | Name, legal name, email, address/country/phone, social links, legal "last updated" date | Layout, footer, contact, legal pages, JSON-LD |
| `src/data/services.ts` | All services: copy, features, process, FAQs, related services, SEO meta | Nav, footer, home grid, `/services`, detail pages, contact form |
| `src/data/products.ts` | Products: copy, highlights, steps, plans, FAQs, legal URLs, SEO meta | Nav, footer, home/about spotlight, `/products`, detail pages |
| `src/data/navigation.ts` | Nav and footer links, **generated** from services and products | Navbar, Footer |

### How to add or change a service
1. Add or edit an entry in `src/data/services.ts`. Every field in the `Service` interface is required, including
   `shortTitle` (menus), `faqs` and `meta`.
2. `icon` must be a key in `src/components/shared/Icon.astro`. Add the Lucide icon there if it is new.
3. If it belongs in the "AI & automation" group on `/services`, add its slug to `aiSlugs` in
   `src/pages/services/index.astro`. Everything else goes in "Engineering & cloud".
4. Do **not** rename existing slugs. They are live URLs with search rankings.

### How to add a product
Add an entry to `src/data/products.ts` and put its logos in `public/images/products/`. The nav, footer and pages update
automatically. `ProductsSpotlight.astro` currently features BizAgent only.

### Keeping BizAgent in sync
BizAgent facts and prices come from the BizAgent website (`bizpilot-web`, `src/lib/site.ts`). When BizAgent pricing or
plans change, update `plans` and `pricingNote` in `products.ts`.

## 4. Brand and design

- **Colours.** Sampled from the logo: deep orange `#F35B18` to amber `#F8B10B`. Tokens are defined in
  `src/styles/global.css`:
  - `primary-50…950`: orange. Brand colour is `primary-600 #e8590c`. Use `primary-700` for small text on white (AA contrast).
  - `accent-300…500`: amber.
  - `ink-800…950`: near-black, used for heroes, dark sections and the footer.
  - `neutral-*`: warm stone greys.
  - Utilities: `brand-gradient` (backgrounds), `text-brand-gradient` (headline text), `bg-grid` (hero grid pattern),
    and `.prose-legal` for legal page typography.
- **Fonts** (Google Fonts, loaded in `BaseLayout.astro`):
  - Inter for body text.
  - Plus Jakarta Sans for headings.
  - Saira Condensed italic 800 for the wordmark and step numbers.
- **Logo:**
  - Source: `public/images/brand/logo.jpg` (907×907, white background).
  - Derived files: `logo-mark.png` / `logo-mark-128.png` (transparent mark), `logo-full.png`, `icon-192/512.png`,
    `/favicon.ico`, `/favicon-32.png`, `/apple-touch-icon.png`.
  - The navbar/footer lockup is `src/components/shared/Logo.astro`: the mark plus "INVIGO" + "SOL" in the brand font.
  - To regenerate the derived files, crop the mark region of the JPG, turn white into transparency, and resize.
- **Share image:** `public/images/og-default.png` (1200×630). It's rendered from an SVG with `rsvg-convert`. Re-render it if the
  tagline or logo changes.
- **Shared components** (`src/components/shared/`):
  - `PageHero` is the dark hero on every inner page.
  - `SectionHeading` supports `eyebrow` and `tone`.
  - `Button` variants: primary, secondary, outline, white, outline-white.
  - `FaqSection` renders the accordion and FAQPage JSON-LD.
  - `LegalEntity` is the company block on legal pages.

## 5. SEO

- **Meta tags** are handled in `src/layouts/BaseLayout.astro`. Props: `title`, `description`, `canonicalPath`,
  `ogImage`, `ogType`, `noindex`, `jsonLd`.
- **Canonical URLs** always end in `/` to match the sitemap.
- **Title pattern:** "Primary keyword | InvigoSol", 60 characters or fewer. Descriptions are 150–160 characters.
  Service and product meta lives in the `meta` field of the data files.
- **JSON-LD:**
  - every page: `Organization` (with `legalName`, plus `address` once set, and `brand` → BizAgent);
  - home: `WebSite`;
  - `/services`: `ItemList`;
  - service pages: `Service` + `OfferCatalog`;
  - product pages: `SoftwareApplication`;
  - any page with FAQs: `FAQPage`;
  - all inner pages: `BreadcrumbList`.
- **Sitemap:** `@astrojs/sitemap` generates it, with the 404 page filtered out in `astro.config.mjs`.
  `public/robots.txt` points to `sitemap-index.xml`.
- **Service keyword targets (Oct 2026):** AI agent development, MCP integrations, generative AI / LLM / RAG,
  AI business process automation, WhatsApp Business API / Cloud API integration, SaaS product engineering,
  DevOps / MLOps / LLMOps, AI readiness assessment, managed IT and cybersecurity.

## 6. Legal pages and Meta verification

InvigoSol is the legal entity for the website and for BizAgent. Meta checks the following:

| Requirement | Where |
|---|---|
| Business name matches the verified business | `company.legalName` (`InvigoSol`), shown on every legal page and in the footer |
| Business address and contact | `company.address`, `country`, `phone`. **Still empty (TODO).** Hidden until set |
| Privacy policy that explains Meta data use | `/privacy` §4 "Data we receive from Meta", with a permissions table |
| Data deletion instructions | `/data-deletion` |
| Terms | `/terms` §5 "Meta and WhatsApp rules" |

The privacy page lists these Meta permissions; keep the table in sync with the permissions the app actually requests:
- `whatsapp_business_messaging`
- `whatsapp_business_management`
- `business_management`
- `public_profile`
- `email`

**URLs to enter in the BizAgent Meta app:** BizAgent has its own pages on bizagent.pk, also issued by InvigoSol:
- Privacy: `https://bizagent.pk/privacy/`
- Terms: `https://bizagent.pk/terms/`
- Data deletion: `https://bizagent.pk/data-deletion/`

The Business Manager website URL is `https://www.invigosol.com`.

**When the legal text changes,** update `company.legal.updated` in `company.ts`. The "Last updated" line comes from it.

## 7. Open items

- [ ] Set `company.address`, `country` and `phone` exactly as in Meta Business Manager. Set the same address in the
      BizAgent site (`src/lib/site.ts`, `company.address`).
- [ ] Replace `FORMSPREE_FORM_ID` in `src/components/contact/ContactForm.astro`. Until then the form does not send.
- [ ] Confirm that the privacy promises match operations: tokens encrypted at rest, MFA on production access, 30-day
      deletion, 24-month enquiry retention, and AI providers that do not train on customer data. Get a legal review.
- [ ] After Meta approval, change the "Meta Tech Provider in progress" wording in the WhatsApp service copy
      (`services.ts`, `whatsapp-business-integration`).
- [ ] Add real testimonials and case studies when available. The placeholder ones were removed, so don't add
      invented quotes.

## 8. Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # static build to dist/
npm run preview   # serve dist/ locally
```

Node 22.12 or newer is required (`package.json` engines).

## 9. Changelog

- **2026-10-14:** Orange rebrand from the new logo. Layout refresh: navbar with dropdowns, dark heroes, a new
  footer, and FAQ sections.
  - **Services:** rewritten for October 2026 search demand. Six services became eight (added `ai-automation`
    and `whatsapp-business-integration`), with the slugs kept.
  - **Products:** `/products` and `/products/bizagent` added.
  - **Legal:** `/privacy`, `/terms` and `/data-deletion` added for Meta Tech Provider verification.
  - **SEO:** added `ogType`, `noindex`, `og:locale`, `twitter:site`, more JSON-LD, trailing-slash canonicals and the
    404 sitemap filter.
  - **Removed:** placeholder testimonials, the team section, the OpenClaw spotlight and the `PlaceholderImage`
    component.
- **v1:** Initial Astro site. See `implementation-plan.md`.
