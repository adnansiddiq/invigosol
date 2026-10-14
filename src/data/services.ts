export interface Service {
  slug: string;
  title: string;
  /** Short label for menus and cards. */
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  challenges: string[];
  features: {
    title: string;
    description: string;
  }[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
  meta: {
    title: string;
    description: string;
  };
}

// Ordered by demand: the first services are the ones buyers search for most in 2026.
// Slugs are kept stable so existing links and rankings are not lost.
export const services: Service[] = [
  {
    slug: 'agent-development',
    title: 'AI Agent Development',
    shortTitle: 'AI Agent Development',
    tagline: 'Agents that do real work inside your systems, with guardrails, evaluations and a human in the loop.',
    description:
      'Custom AI agents and multi-agent workflows that act on your tools and data: support, sales ops, back office and internal copilots.',
    longDescription:
      'Most companies have tried a chatbot. Far fewer have an agent that reliably finishes a task: reads the ticket, checks the order system, drafts the refund, and asks a person to approve it. We design and build agentic systems on current frontier models, connect them to your tools through APIs and the Model Context Protocol (MCP), and ship them with the evaluations, permissions, audit logs and cost controls that production needs.',
    icon: 'Bot',
    challenges: [
      'Agent demos that work once but fail on real, messy inputs',
      'No safe way to let an AI act on business systems without risk',
      'No evaluation suite, so nobody knows whether a prompt change made things better or worse',
      'Model costs and latency that grow faster than usage',
    ],
    features: [
      {
        title: 'Agentic workflow design',
        description:
          'We map the task, decide where an agent adds value and where a plain rule is better, and design tool-calling flows with clear approval steps.',
      },
      {
        title: 'MCP servers and tool integrations',
        description:
          'MCP servers and typed tool APIs that let agents read and act on your CRM, ERP, ticketing, email, WhatsApp and internal databases, with scoped permissions.',
      },
      {
        title: 'Multi-agent orchestration',
        description:
          'Planner, worker and reviewer agents that split long tasks, with shared memory, retries and hand-off to a human when confidence is low.',
      },
      {
        title: 'Evaluations and guardrails',
        description:
          'Test sets built from your real cases, automated scoring, prompt-injection defences, PII redaction and policy checks before any action runs.',
      },
      {
        title: 'Observability and cost control',
        description:
          'Tracing for every model and tool call, per-task cost tracking, model routing and caching so the agent stays fast and affordable.',
      },
      {
        title: 'Voice and messaging agents',
        description:
          'Agents that work where your customers are: WhatsApp, web chat, email and voice, with the same rules and audit trail across channels.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Discover', description: 'Pick one high-value task, collect real examples and define what "done well" means.' },
      { step: 2, title: 'Prototype', description: 'A working agent on your data in two to three weeks, measured against the test set.' },
      { step: 3, title: 'Harden', description: 'Guardrails, approvals, permissions, monitoring and load testing.' },
      { step: 4, title: 'Operate', description: 'Launch, watch the metrics, and keep improving with new evaluation cases.' },
    ],
    faqs: [
      {
        question: 'What is the difference between an AI agent and a chatbot?',
        answer:
          'A chatbot answers questions. An agent takes actions: it calls tools and APIs, works through several steps, and finishes a task such as updating a record or drafting a reply for approval.',
      },
      {
        question: 'Which AI models do you use?',
        answer:
          'We are model-agnostic. We pick from current frontier and open-weight models based on accuracy on your test set, cost, latency and data-residency needs, and we can route between them.',
      },
      {
        question: 'How do you keep agents safe when they can act on our systems?',
        answer:
          'Scoped permissions, human approval for sensitive actions, input and output guardrails, full audit logs, and an evaluation suite that runs before every release.',
      },
      {
        question: 'How long does a first agent take?',
        answer: 'A focused first agent usually reaches a measured pilot in four to eight weeks.',
      },
    ],
    relatedSlugs: ['ai-driven-development', 'ai-automation', 'whatsapp-business-integration'],
    meta: {
      title: 'AI Agent Development Company | InvigoSol',
      description:
        'Custom AI agents and multi-agent workflows with MCP tool integrations, evaluations, guardrails and human approval. From pilot to production in weeks.',
    },
  },
  {
    slug: 'ai-driven-development',
    title: 'Generative AI & LLM Development',
    shortTitle: 'Generative AI & LLM Apps',
    tagline: 'LLM features your users trust: grounded in your data, measured, and cheap enough to run at scale.',
    description:
      'RAG systems, AI copilots and LLM-powered product features, built on your data and shipped with evaluation and monitoring.',
    longDescription:
      'Adding an LLM to a product is easy. Making its answers accurate, safe and affordable is the real work. We build retrieval-augmented generation (RAG) over your documents and databases, AI copilots inside your apps, document and data extraction, and fine-tuned or distilled models when an off-the-shelf model is not enough.',
    icon: 'Sparkles',
    challenges: [
      'Answers that sound right but are wrong (hallucinations)',
      'Proofs of concept that never reach production',
      'Sensitive data that cannot leave your environment',
      'Token costs that make the feature unprofitable',
    ],
    features: [
      {
        title: 'RAG and enterprise search',
        description:
          'Hybrid search, re-ranking and citations over your documents, wikis, tickets and databases, with access control respected per user.',
      },
      {
        title: 'AI copilots in your product',
        description:
          'Assistants that draft, summarise, explain and fill forms inside your web or mobile app, with streaming UI and feedback capture.',
      },
      {
        title: 'Document and data extraction',
        description:
          'Turn invoices, contracts, forms and emails into structured data with confidence scores and a review queue for edge cases.',
      },
      {
        title: 'Fine-tuning and small models',
        description:
          'Fine-tuned, distilled or open-weight models for narrow tasks where speed, cost or privacy matter more than generality.',
      },
      {
        title: 'Private and on-prem deployment',
        description:
          'Deploy on your cloud account or on-prem with no training on your data, for regulated industries and strict data-residency needs.',
      },
      {
        title: 'LLM evaluation and monitoring',
        description:
          'Offline test sets, online quality scoring, drift alerts and cost dashboards so quality never silently drops.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Scope', description: 'Pick the use case, collect sample questions and agree on quality metrics.' },
      { step: 2, title: 'Build', description: 'Data pipeline, retrieval, prompts and UI, measured against the test set.' },
      { step: 3, title: 'Validate', description: 'Red-teaming, security review and a pilot with real users.' },
      { step: 4, title: 'Scale', description: 'Production rollout with monitoring, caching and cost optimisation.' },
    ],
    faqs: [
      {
        question: 'What is RAG and do we need it?',
        answer:
          'Retrieval-augmented generation lets a model answer from your own documents and data instead of its general training. You need it whenever answers must be specific to your business and up to date.',
      },
      {
        question: 'Will our data be used to train public models?',
        answer:
          'No. We use enterprise API terms that exclude training on your data, or private and open-weight models deployed in your own environment.',
      },
      {
        question: 'How do you reduce hallucinations?',
        answer:
          'Grounding in retrieved sources, citations, structured outputs, refusal when evidence is missing, and an evaluation set that catches regressions before release.',
      },
    ],
    relatedSlugs: ['agent-development', 'ai-automation', 'architecture-design'],
    meta: {
      title: 'Generative AI & LLM Development Services | InvigoSol',
      description:
        'RAG, AI copilots, document extraction and fine-tuned LLMs built on your data, with evaluations, private deployment and cost control. Production-ready GenAI.',
    },
  },
  {
    slug: 'ai-automation',
    title: 'AI Business Process Automation',
    shortTitle: 'AI Process Automation',
    tagline: 'Take the copy-paste out of operations. Keep people for the decisions.',
    description:
      'Automate back-office work across email, WhatsApp, spreadsheets, CRM and ERP with AI workflows and clear human approval steps.',
    longDescription:
      'Most operations teams still spend hours moving information between inboxes, spreadsheets and business systems. We automate those flows with a mix of workflow tools, integrations and AI steps that read, classify and draft, and we keep a person in charge of anything that matters. You get faster turnaround, fewer errors and a full log of what ran.',
    icon: 'Workflow',
    challenges: [
      'Staff time lost to manual data entry and copy-paste between systems',
      'Leads and customer requests that slip through busy inboxes',
      'Old RPA bots that break whenever a screen changes',
      'No visibility into which tasks are done, stuck or late',
    ],
    features: [
      {
        title: 'Process discovery',
        description: 'We map the current process, measure the time it takes and rank automation candidates by return.',
      },
      {
        title: 'AI inbox and lead triage',
        description:
          'Classify, route and draft replies for email and WhatsApp messages; flag hot leads and complaints for a person.',
      },
      {
        title: 'Integration workflows',
        description:
          'Reliable flows between CRM, ERP, accounting, e-commerce and spreadsheets using APIs and workflow tools such as n8n or Make, or custom code.',
      },
      {
        title: 'Document processing',
        description: 'Invoices, orders, CVs and forms read automatically and posted to the right system after validation.',
      },
      {
        title: 'Reports and alerts',
        description: 'Daily summaries and exception alerts delivered to email, Slack or WhatsApp.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Map', description: 'Document the process and pick the first two or three automations.' },
      { step: 2, title: 'Automate', description: 'Build the flows with approval steps and error handling.' },
      { step: 3, title: 'Pilot', description: 'Run side by side with the team and measure time saved.' },
      { step: 4, title: 'Expand', description: 'Roll out and add the next processes.' },
    ],
    faqs: [
      {
        question: 'Is AI automation different from RPA?',
        answer:
          'Yes. RPA copies clicks on a screen and breaks when the screen changes. AI automation works through APIs and understands unstructured text such as emails, chats and documents.',
      },
      {
        question: 'Do we have to replace our current software?',
        answer: 'No. We connect the tools you already use.',
      },
    ],
    relatedSlugs: ['agent-development', 'whatsapp-business-integration', 'ai-driven-development'],
    meta: {
      title: 'AI Business Process Automation Services | InvigoSol',
      description:
        'Automate back-office work across email, WhatsApp, CRM, ERP and spreadsheets with AI workflows and human approval. Less manual work, fewer errors.',
    },
  },
  {
    slug: 'whatsapp-business-integration',
    title: 'WhatsApp Business API & Meta Integration',
    shortTitle: 'WhatsApp Business API',
    tagline: 'Official WhatsApp Cloud API integrations for sales, support and notifications.',
    description:
      'WhatsApp Cloud API setup, Embedded Signup, CRM integration, chat automation and AI agents on the official Meta platform.',
    longDescription:
      'WhatsApp is where customers in Pakistan, the Gulf and many other markets expect to talk to a business. We build on the official WhatsApp Business Platform (Cloud API): onboarding your numbers, message templates, webhooks, CRM and helpdesk integration, chat automation and AI agents that hand over to your team. As a Meta Tech Provider in progress, InvigoSol also builds multi-tenant WhatsApp products for software companies.',
    icon: 'MessageCircle',
    challenges: [
      'Customer chats spread across personal phones with no oversight',
      'Unofficial tools that put the business number at risk of being banned',
      'No link between WhatsApp conversations and the CRM',
      'Template rejections and confusion about the 24-hour messaging window',
    ],
    features: [
      {
        title: 'Cloud API onboarding',
        description:
          'Business portfolio, WhatsApp Business Account and phone number setup, display name approval and webhook configuration.',
      },
      {
        title: 'Embedded Signup for SaaS',
        description:
          'Let your own customers connect their WhatsApp numbers to your product in a few clicks through Facebook Login for Business.',
      },
      {
        title: 'Templates and campaigns',
        description:
          'Utility, authentication and marketing templates designed to pass review, with opt-in capture and opt-out handling.',
      },
      {
        title: 'CRM and helpdesk integration',
        description: 'Two-way sync with your CRM, helpdesk or order system so every conversation is linked to a customer record.',
      },
      {
        title: 'Chat automation and AI agents',
        description:
          'Order status, booking, FAQs and lead qualification handled automatically, with a clean hand-over to a person.',
      },
      {
        title: 'Monitoring and quality',
        description:
          'Response-time tracking, quality rating alerts and conversation analytics. See BizAgent, our own product built on this stack.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Plan', description: 'Use cases, message types, templates and integrations.' },
      { step: 2, title: 'Connect', description: 'Number onboarding, webhooks and templates submitted for approval.' },
      { step: 3, title: 'Build', description: 'Integrations, automation flows and agent hand-over.' },
      { step: 4, title: 'Launch', description: 'Go live, monitor quality rating and response times.' },
    ],
    faqs: [
      {
        question: 'What is the WhatsApp Cloud API?',
        answer:
          "It is Meta's official, hosted API for the WhatsApp Business Platform. It lets software send and receive WhatsApp messages for a business number in line with WhatsApp's policies.",
      },
      {
        question: 'Can we keep using the WhatsApp Business app on the same number?',
        answer:
          'In many cases yes. Meta supports coexistence, so a number can use the Business app and the Cloud API together. We check eligibility for your number during planning.',
      },
      {
        question: 'How are WhatsApp messages charged?',
        answer:
          'Meta charges per template message delivered, at a rate that depends on the category and the country. Replies inside the 24-hour customer service window are free. We help you design flows that keep costs low.',
      },
    ],
    relatedSlugs: ['ai-automation', 'agent-development', 'product-management'],
    meta: {
      title: 'WhatsApp Business API Integration | Cloud API | InvigoSol',
      description:
        'Official WhatsApp Cloud API integration: number onboarding, Embedded Signup, templates, CRM sync, chat automation and AI agents for sales and support.',
    },
  },
  {
    slug: 'product-management',
    title: 'SaaS & Product Engineering',
    shortTitle: 'SaaS & Product Engineering',
    tagline: 'From MVP to a product that scales, with one team that owns the outcome.',
    description:
      'Product strategy, UX, full-stack web and mobile engineering and long-term maintenance for SaaS and digital products.',
    longDescription:
      'We take products from idea to market and keep them healthy afterwards. One team covers discovery, UX, web and mobile development, AI features, releases and maintenance. We build with modern, well-supported stacks (TypeScript, React and Next.js, Astro, Node.js, Python, Flutter and React Native) and we use AI-assisted engineering to ship faster without cutting quality.',
    icon: 'Rocket',
    challenges: [
      'Roadmaps driven by opinions rather than evidence',
      'MVPs that cannot grow into a real product',
      'Mounting technical debt that slows every release',
      'No dedicated team to maintain the product after launch',
    ],
    features: [
      {
        title: 'Product discovery and MVP',
        description: 'Problem validation, prototypes and a focused MVP that tests the riskiest assumptions first.',
      },
      {
        title: 'Full-stack web and mobile',
        description: 'Fast, accessible web apps and cross-platform mobile apps with clean APIs and automated tests.',
      },
      {
        title: 'Multi-tenant SaaS foundations',
        description: 'Auth, roles, billing, tenant isolation, audit logs and admin tools done right from the start.',
      },
      {
        title: 'AI features in your product',
        description: 'Copilots, smart search, summaries and automation added where they improve the product.',
      },
      {
        title: 'Maintenance and support',
        description: 'Security updates, dependency upgrades, bug fixes and performance work on a predictable monthly plan.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Discover', description: 'Users, problems, metrics and a prioritised roadmap.' },
      { step: 2, title: 'Design', description: 'UX flows, prototypes and the technical plan.' },
      { step: 3, title: 'Build', description: 'Two-week sprints with working software in every demo.' },
      { step: 4, title: 'Grow', description: 'Launch, measure, iterate and maintain.' },
    ],
    faqs: [
      {
        question: 'Can you take over an existing product?',
        answer:
          'Yes. We start with a code and architecture review, stabilise the release process and then continue development or maintenance.',
      },
      {
        question: 'How do you price product development?',
        answer: 'Fixed-scope phases for MVPs, and a monthly team or retainer for ongoing development and maintenance.',
      },
    ],
    relatedSlugs: ['architecture-design', 'devops-management', 'ai-driven-development'],
    meta: {
      title: 'SaaS & Product Engineering Services | InvigoSol',
      description:
        'Product discovery, MVP development, full-stack web and mobile engineering, multi-tenant SaaS and long-term maintenance from one accountable team.',
    },
  },
  {
    slug: 'devops-management',
    title: 'DevOps, Cloud & MLOps',
    shortTitle: 'DevOps, Cloud & MLOps',
    tagline: 'Ship daily, sleep at night, and know exactly what the cloud bill pays for.',
    description:
      'CI/CD, infrastructure as code, Kubernetes, observability, FinOps and MLOps/LLMOps for teams running AI in production.',
    longDescription:
      'We build platforms that make releases routine: automated pipelines, infrastructure as code, container platforms and observability that shows problems before customers do. For AI workloads we add MLOps and LLMOps: model and prompt versioning, evaluation gates, GPU and inference cost control, and tracing for every model call.',
    icon: 'GitBranch',
    challenges: [
      'Manual, risky deployments that slow the team down',
      'Cloud bills that grow without anyone knowing why',
      'Outages discovered by customers instead of alerts',
      'AI models and prompts released with no versioning or rollback',
    ],
    features: [
      {
        title: 'CI/CD pipelines',
        description: 'Automated build, test, security scan and deploy with preview environments and one-click rollback.',
      },
      {
        title: 'Infrastructure as code',
        description: 'Terraform or OpenTofu and GitOps for AWS, Azure, GCP and smaller clouds; every change reviewed and repeatable.',
      },
      {
        title: 'Kubernetes and containers',
        description: 'Right-sized container platforms, or simpler serverless options when Kubernetes is more than you need.',
      },
      {
        title: 'Observability and SRE',
        description: 'OpenTelemetry tracing, metrics, logs, SLOs and on-call runbooks.',
      },
      {
        title: 'FinOps and cost optimisation',
        description: 'Cost allocation by team and feature, rightsizing, reserved capacity and inference cost tuning.',
      },
      {
        title: 'MLOps and LLMOps',
        description: 'Model and prompt registries, evaluation gates in CI, inference serving and LLM tracing.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Audit', description: 'Review pipelines, infrastructure, costs and incidents.' },
      { step: 2, title: 'Plan', description: 'Target platform and a phased roadmap with quick wins first.' },
      { step: 3, title: 'Automate', description: 'Pipelines, IaC and observability rolled out service by service.' },
      { step: 4, title: 'Run', description: 'Ongoing operations, cost reviews and improvements.' },
    ],
    faqs: [
      {
        question: 'What is LLMOps?',
        answer:
          'LLMOps applies DevOps practices to LLM applications: versioning prompts and models, running evaluations before release, tracing every call and controlling inference cost.',
      },
      {
        question: 'Can you reduce our cloud costs?',
        answer:
          'We start with a cost audit that shows where the money goes, then rightsize, remove waste and tune architecture. Savings depend on your setup, and we report them openly.',
      },
    ],
    relatedSlugs: ['it-services', 'architecture-design', 'ai-driven-development'],
    meta: {
      title: 'DevOps, Cloud & MLOps Services | InvigoSol',
      description:
        'CI/CD, infrastructure as code, Kubernetes, observability, FinOps and MLOps/LLMOps. Faster releases, fewer incidents and a cloud bill you understand.',
    },
  },
  {
    slug: 'architecture-design',
    title: 'Software Architecture & AI Readiness',
    shortTitle: 'Architecture & AI Readiness',
    tagline: 'Make the big technical decisions once, and make them well.',
    description:
      'Architecture reviews, cloud-native and event-driven design, legacy modernisation and AI readiness assessments.',
    longDescription:
      'Good architecture lets a product grow without constant rewrites. We review existing systems, design new ones and plan modernisation step by step. Our AI readiness assessment looks at your data, systems, security and team, and gives you a ranked list of AI use cases with a realistic plan to deliver them.',
    icon: 'Building2',
    challenges: [
      'Systems that cannot scale without a costly rewrite',
      'Legacy platforms that block new features and AI adoption',
      'Data spread across silos with no clear owner',
      'Unclear where AI would actually pay off',
    ],
    features: [
      {
        title: 'Architecture review',
        description: 'A written assessment of scalability, reliability, security and cost, with prioritised recommendations.',
      },
      {
        title: 'Cloud-native and event-driven design',
        description: 'Modular services, event streams and APIs designed for the scale you actually expect.',
      },
      {
        title: 'Legacy modernisation',
        description: 'Step-by-step migration that keeps the business running, using patterns such as the strangler fig.',
      },
      {
        title: 'AI readiness assessment',
        description: 'Data, systems, governance and skills review with ranked AI use cases and a delivery roadmap.',
      },
      {
        title: 'Security and compliance by design',
        description: 'Threat modelling, least-privilege access and data protection built into the design.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Understand', description: 'Business goals, constraints and the current landscape.' },
      { step: 2, title: 'Assess', description: 'Interviews, code and infrastructure review.' },
      { step: 3, title: 'Design', description: 'Target architecture, decision records and a roadmap.' },
      { step: 4, title: 'Guide', description: 'Support your team through delivery.' },
    ],
    faqs: [
      {
        question: 'What do we get from an AI readiness assessment?',
        answer:
          'A short report covering data quality, systems, security and skills, a ranked list of AI use cases with expected value and effort, and a 90-day plan.',
      },
      {
        question: 'How long does an architecture review take?',
        answer: 'Typically two to four weeks, depending on the size of the system.',
      },
    ],
    relatedSlugs: ['devops-management', 'product-management', 'ai-driven-development'],
    meta: {
      title: 'Software Architecture & AI Readiness Assessment | InvigoSol',
      description:
        'Architecture reviews, cloud-native design, legacy modernisation and AI readiness assessments with a ranked use-case roadmap.',
    },
  },
  {
    slug: 'it-services',
    title: 'Managed IT, Cloud & Cybersecurity',
    shortTitle: 'Managed IT & Security',
    tagline: 'Reliable, secure IT for growing businesses, with one team to call.',
    description:
      'Managed cloud and Microsoft 365 or Google Workspace, security hardening, backups, monitoring and IT support.',
    longDescription:
      'Growing businesses need IT that just works and stays secure. We manage cloud infrastructure, workspace tools, devices and access, and we harden your security against the threats that matter today: phishing, account takeover and ransomware. Clear monthly reporting shows what we did and what is at risk.',
    icon: 'ShieldCheck',
    challenges: [
      'No one owns IT, so issues wait until something breaks',
      'Weak passwords, no MFA and shared accounts',
      'Backups that have never been tested',
      'Security questionnaires from customers you cannot answer',
    ],
    features: [
      {
        title: 'Managed cloud',
        description: 'Day-to-day management of AWS, Azure, GCP and VPS environments with patching and monitoring.',
      },
      {
        title: 'Workspace and identity',
        description: 'Google Workspace or Microsoft 365, single sign-on, MFA and least-privilege access.',
      },
      {
        title: 'Security hardening',
        description: 'Vulnerability scanning, email security, endpoint protection and security awareness for staff.',
      },
      {
        title: 'Backup and recovery',
        description: 'Automated, encrypted backups with regular restore tests and a written recovery plan.',
      },
      {
        title: 'Compliance support',
        description: 'Policies and evidence for customer security reviews and frameworks such as ISO 27001, SOC 2 and GDPR.',
      },
    ],
    processSteps: [
      { step: 1, title: 'Assess', description: 'Inventory of systems, accounts and current risks.' },
      { step: 2, title: 'Fix', description: 'Close the most important security gaps first.' },
      { step: 3, title: 'Manage', description: 'Ongoing monitoring, updates and support.' },
      { step: 4, title: 'Report', description: 'Monthly report on health, risks and next steps.' },
    ],
    faqs: [
      {
        question: 'Do you offer support for small businesses?',
        answer: 'Yes. Our managed plans are sized for small and mid-sized teams, with a fixed monthly fee.',
      },
      {
        question: 'Can you help us answer customer security questionnaires?',
        answer: 'Yes. We put the right controls in place and prepare the policies and evidence reviewers ask for.',
      },
    ],
    relatedSlugs: ['devops-management', 'architecture-design', 'ai-automation'],
    meta: {
      title: 'Managed IT, Cloud & Cybersecurity Services | InvigoSol',
      description:
        'Managed cloud, Google Workspace and Microsoft 365, security hardening, backups and compliance support for growing businesses, with clear monthly reporting.',
    },
  },
];
