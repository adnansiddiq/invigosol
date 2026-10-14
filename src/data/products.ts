// Facts for BizAgent come from the BizAgent website (bizagent-web: src/lib/site.ts).
// Keep prices and plan limits in sync with bizagent.pk/pricing when they change there.

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  url: string;
  appUrl?: string;
  logo: string;
  logoDark?: string;
  audience: string;
  languages: string[];
  highlights: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  plans: { name: string; pkr: string; usd: string; summary: string; featured?: boolean }[];
  pricingNote: string;
  faqs: { question: string; answer: string }[];
  legal: { privacy: string; terms: string; dataDeletion: string };
  meta: { title: string; description: string };
}

export const products: Product[] = [
  {
    slug: 'bizagent',
    name: 'BizAgent',
    tagline: 'See how your team handles every customer.',
    description:
      'WhatsApp and email monitoring for business owners. BizAgent tracks every customer your team has not answered, slow replies, complaints and hot leads, and reports to you on your own WhatsApp.',
    longDescription:
      'Owners of growing businesses rarely know how many customers were left without a reply yesterday. BizAgent reads the business WhatsApp number and shared email inbox alongside your team, follows every enquiry until someone answers, and sends you alerts and a daily report in a private WhatsApp chat. Your team keeps working exactly as before, and nothing is sent to a customer without your approval.',
    category: 'BusinessApplication',
    url: 'https://bizagent.pk',
    appUrl: 'https://app.bizagent.pk',
    logo: '/images/products/bizagent-logo.svg',
    logoDark: '/images/products/bizagent-logo-dark.svg',
    audience:
      'Owners of online shops, clinics and labs, real estate and travel agencies, service firms and distributors in Pakistan and the Gulf.',
    languages: ['Urdu', 'Roman Urdu', 'English', 'Arabic'],
    highlights: [
      {
        title: 'Unanswered-customer alerts',
        description: 'Every enquiry is tracked until someone replies. You hear about the ones that slip before the customer gives up.',
      },
      {
        title: 'Reply-time reports',
        description: 'First-reply and follow-up times for the team as a whole, every day, without scoring individual staff.',
      },
      {
        title: 'Complaints and hot leads',
        description: 'Messages are classified automatically, and leads get a 0-100 score so the best ones are answered first.',
      },
      {
        title: "The owner's WhatsApp agent",
        description:
          'A private chat on your own WhatsApp for alerts, the daily report and questions like "which enquiries are still open?".',
      },
      {
        title: 'WhatsApp and Gmail in one view',
        description: 'Connect the business WhatsApp number and Gmail or Google Workspace inboxes.',
      },
      {
        title: 'You approve before anything is sent',
        description: 'BizAgent drafts; you approve. Automatic sending only happens for rules you explicitly set to Automatic.',
      },
    ],
    steps: [
      { title: 'Connect', description: 'Link your business WhatsApp number and email inbox in one short setup call.' },
      { title: 'Track', description: 'BizAgent reads alongside your team and follows every customer conversation.' },
      { title: 'Report', description: 'Alerts and a daily report arrive in your private WhatsApp chat.' },
      { title: 'Act', description: 'Ask questions, approve replies, and fix what is slipping.' },
    ],
    plans: [
      { name: 'Starter', pkr: '2,999', usd: '19', summary: '1 WhatsApp number, 1 inbox, 2,000 messages a month' },
      { name: 'Pro', pkr: '6,999', usd: '39', summary: '1 number, 2 inboxes, 8,000 messages, lead scoring', featured: true },
      { name: 'Business', pkr: '12,999', usd: '69', summary: '3 numbers, 3 inboxes, 20,000 messages, priority support' },
    ],
    pricingNote: 'Monthly per business, no per-seat fees. Free 30-day pilot.',
    faqs: [
      {
        question: 'Will BizAgent reply to my customers by itself?',
        answer:
          'No. Your team keeps replying as usual. BizAgent only sends a message after you approve the draft, unless you set a rule to Automatic yourself.',
      },
      {
        question: 'Is BizAgent spying on my staff?',
        answer:
          'No. It reports on the team as a whole: unanswered queries, reply times, open complaints and leads at risk. It does not score individual staff.',
      },
      {
        question: 'Who makes BizAgent?',
        answer:
          'BizAgent is designed, built and operated by InvigoSol. InvigoSol is the company responsible for the service and for the data it processes.',
      },
    ],
    legal: {
      privacy: 'https://bizagent.pk/privacy/',
      terms: 'https://bizagent.pk/terms/',
      dataDeletion: 'https://bizagent.pk/data-deletion/',
    },
    meta: {
      title: 'BizAgent: WhatsApp & Email Team Monitoring | InvigoSol',
      description:
        'BizAgent by InvigoSol tracks unanswered customers, slow replies, complaints and hot leads across WhatsApp and email, and reports to owners on WhatsApp.',
    },
  },
];
