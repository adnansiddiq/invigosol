# InvigoSol.com: Website Content

> Content reference by page. Last updated 2026-10-14.
>
> The live copy for services and products lives in code: `src/data/services.ts` and `src/data/products.ts`. This file
> summarises it and records the content rules. Edit the data files to change the site, then update this summary.
> See `site-reference.md` for structure, brand, SEO and legal.

---

## Global elements

- **Company name:** InvigoSol. The wordmark is set as "INVIGO" + "SOL", with SOL in orange.
- **Tagline:** "Engineering Intelligence. Delivering Outcomes."
- **One-liner:** InvigoSol is an AI-native technology company. We build AI agents, LLM applications, WhatsApp
  Business integrations and cloud platforms, and we make BizAgent, the WhatsApp and email monitoring app for
  business owners.
- **Primary call to action:** "Book a consultation" or "Book a free consultation" → `/contact`.
- **Email:** hello@invigosol.com

## Navigation

- **Services:** a mega-menu with all 8 services, each with a short description, plus "View all services".
- **Products:** BizAgent, plus "View all products".
- **About**
- **Contact**
- **Button:** "Book a consultation"

Footer columns: Services · Products · Company (About, Contact) · Legal (Privacy Policy, Terms of Service, Data
Deletion). The bottom bar has the copyright for the legal entity and the line "WhatsApp and Facebook are trademarks of
Meta Platforms, Inc."

---

## 1. Home (`/`)

1. **Hero:**
   - Headline: "AI that does real work in your business."
   - Subhead: we design, build and run AI agents, LLM apps, WhatsApp Business integrations and the cloud underneath,
     with guardrails and measurable results.
   - The card on the right is an illustrative operations overview.
   - Capability strip: AI agents & MCP, LLM & RAG apps, WhatsApp Cloud API, AI automation, Cloud/DevOps/LLMOps,
     Cybersecurity.
2. **Services:** "Everything you need to put AI to work", a grid of all 8 services.
3. **Our product (BizAgent):**
   - Tagline, description and 4 highlights.
   - Buttons: "Discover BizAgent" and "Visit bizagent.pk".
   - Mock daily report, labelled "Illustrative example".
4. **Why InvigoSol, "Outcomes you can measure":** AI-native not AI-washed · Measured from day one · Safe by design · No
   lock-in.
5. **How we work:** Discovery call → Scoped proposal → Pilot → Scale & support.
6. **FAQ:** What does InvigoSol do · Industries · How quickly can we start · Working with your team.
7. **CTA:** "Have an AI idea or a process that eats your team's time?"

## 2. About (`/about`)

- **Hero:** "We engineer intelligence and deliver outcomes".
- **Story:** "Outcomes, not output". It explains why InvigoSol exists and that we build our own product (BizAgent) on
  the same stack we deliver for clients.
- Mission & vision, values (5), BizAgent spotlight, CTA.
- **No team section** until real names and photos are available.

## 3. Services (`/services` and `/services/<slug>`)

The index page groups services as **AI & automation** (first four) and **Engineering & cloud** (last four).

| # | Slug | Title | Keyword focus |
|---|---|---|---|
| 1 | `agent-development` | AI Agent Development | AI agent development company, agentic workflows, MCP, multi-agent |
| 2 | `ai-driven-development` | Generative AI & LLM Development | GenAI / LLM development, RAG, AI copilots, fine-tuning |
| 3 | `ai-automation` | AI Business Process Automation | AI process automation, inbox/lead triage, n8n/Make, document processing |
| 4 | `whatsapp-business-integration` | WhatsApp Business API & Meta Integration | WhatsApp Cloud API integration, Embedded Signup, templates, chat automation |
| 5 | `product-management` | SaaS & Product Engineering | MVP development, SaaS engineering, maintenance |
| 6 | `devops-management` | DevOps, Cloud & MLOps | CI/CD, IaC, Kubernetes, FinOps, MLOps/LLMOps |
| 7 | `architecture-design` | Software Architecture & AI Readiness | architecture review, legacy modernisation, AI readiness assessment |
| 8 | `it-services` | Managed IT, Cloud & Cybersecurity | managed IT, Workspace/M365, security hardening, compliance |

Every service page has these sections:
1. hero (title, tagline, "Talk to an expert");
2. overview and "Challenges we solve";
3. capabilities (5–6);
4. "How we work" (4 steps);
5. FAQ (2–4);
6. related services;
7. CTA.

## 4. Products (`/products` and `/products/bizagent`)

BizAgent:
- **Tagline:** "See how your team handles every customer."
- **What it does:** WhatsApp and email monitoring for owners in Pakistan and the Gulf: unanswered customers, slow
  replies, complaints, hot leads, and reports on the owner's own WhatsApp.
- **Languages:** Urdu, Roman Urdu, English, Arabic.
- **Pricing:** Starter PKR 2,999 / $19, Pro PKR 6,999 / $39 (featured), Business PKR 12,999 / $69. Monthly per
  business, no per-seat fees, free 30-day pilot. Keep in sync with bizagent.pk/pricing.
- **Page sections:** hero (visit bizagent.pk, start the free pilot), overview, features (6), how it works (4), pricing,
  FAQ, "Operated by InvigoSol" panel linking to the BizAgent privacy, terms and data-deletion pages, CTA.
- **Wording:** describe how BizAgent connects in neutral terms ("connect your business WhatsApp number"). Do not
  promote unofficial WhatsApp connection methods on this site.

## 5. Contact (`/contact`)

- **Hero:** "Let's build something intelligent". We reply within one business day.
- **Form:** name, work email, company, phone (optional), "What can we help with?" (general enquiry, BizAgent, each
  service), message. There's a privacy note linking `/privacy`.
- **Contact panel:** email, phone and address (shown only once set in `company.ts`), reply time, social links.

## 6. Legal

| Page | Sections |
|---|---|
| `/privacy` | Who we are · Scope · Website and enquiries · **Data we receive from Meta** (Facebook Login for Business, WhatsApp Cloud API, permissions table) · How we use data · What we never do · Sharing · International transfers · Retention · Security · Deleting your data · Your rights · Children · Changes · Contact |
| `/terms` | About · Using this website · Client services · Products and apps · **Meta and WhatsApp rules** · Intellectual property · Liability · Changes · Contact |
| `/data-deletion` | Ask us to delete (email with subject "Data deletion request") · Remove the app in Facebook · What we delete (within 30 days) · What we may keep · Confirmation · BizAgent users · Contact |

Write legal copy in plain, short sentences. Promise only what operations actually do.

## 7. SEO meta (per page)

| Page | Title |
|---|---|
| Home | InvigoSol \| AI Agent Development & AI Automation Company |
| About | About InvigoSol \| AI-Native Technology Company |
| Services | AI, Automation & Software Engineering Services \| InvigoSol |
| Service pages | From `meta.title` in `services.ts` |
| Products | Products \| BizAgent and More by InvigoSol |
| BizAgent | BizAgent: WhatsApp & Email Team Monitoring \| InvigoSol |
| Contact | Contact InvigoSol \| Book an AI Consultation |
| Privacy / Terms / Data deletion | Privacy Policy \| InvigoSol · Terms of Service \| InvigoSol · Data Deletion Instructions \| InvigoSol |

Descriptions are in each page's `BaseLayout` props, or in the `meta` field of the data files.

---

## 8. Content guidelines

### Tone of voice
- **Confident, not arrogant.** State what we do with authority, and never dismiss others.
- **Technical, not jargon-heavy.** Speak to technical decision-makers but stay readable for business stakeholders.
- **Outcome-focused.** Every statement connects back to a business result.
- **Direct.** Short sentences, active voice, no filler.

### Honesty rules
- No invented testimonials, client logos, team members or statistics. Mark illustrative UI as illustrative.
- Don't promise specific savings or results. Say how we measure and report them instead.
- Don't claim certifications, partnerships or Meta status before they are granted.

### Words we use
- AI-native (not "AI-powered")
- Production-grade
- Outcome / impact / result
- Architect / engineer / build
- Scale / resilient / observable
- AI agents / agentic AI / human in the loop / guardrails

### Words we avoid
- Cutting-edge / state-of-the-art / world-class
- Digital transformation
- Synergy / leverage / paradigm
- "We're passionate about…"
- Disruptive / revolutionary
