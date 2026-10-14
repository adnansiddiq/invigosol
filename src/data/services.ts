export interface Service {
  slug: string;
  title: string;
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
  relatedSlugs: string[];
  meta: {
    title: string;
    description: string;
  };
}

export const services: Service[] = [
  {
    slug: 'it-services',
    title: 'IT Services',
    tagline: 'Enterprise infrastructure that runs — reliably, securely, and at scale.',
    description:
      'Enterprise-grade infrastructure, cloud management, and technical operations — built for reliability at scale.',
    longDescription:
      "Modern businesses run on technology. When that technology breaks, everything stops. Invigosol's IT Services ensure your critical systems are architected for resilience, managed with precision, and ready to scale with your growth. We handle the operational complexity so your engineering team can focus on building what's next.",
    icon: 'Monitor',
    challenges: [
      "Legacy infrastructure that can't keep pace with business growth",
      'Security vulnerabilities and compliance gaps across cloud and on-premise environments',
      'Fragmented systems that create data silos and operational inefficiency',
      'Rising operational costs with diminishing returns on infrastructure investment',
    ],
    features: [
      {
        title: 'Cloud Infrastructure Management',
        description:
          'Design, migration, and ongoing management of cloud environments across AWS, Azure, and GCP. We optimize for performance, cost, and security — not just uptime.',
      },
      {
        title: 'System Integration & Modernization',
        description:
          'Connect disparate systems into a unified, efficient technology ecosystem. We modernize legacy applications without the risk of big-bang migrations — incremental, tested, production-safe.',
      },
      {
        title: 'Security & Compliance',
        description:
          'Proactive security posture management, vulnerability assessments, and compliance frameworks (SOC 2, HIPAA, GDPR). Security is built in, not bolted on.',
      },
      {
        title: '24/7 Technical Operations',
        description:
          'Round-the-clock monitoring, incident response, and performance optimization. We use AI-driven observability to detect and resolve issues before they impact users.',
      },
      {
        title: 'Cost Optimization',
        description:
          'Continuous analysis of infrastructure spend with actionable recommendations. We typically reduce cloud costs by 20-40% without sacrificing performance.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Assess',
        description:
          'Comprehensive audit of your current infrastructure, security posture, and operational workflows',
      },
      {
        step: 2,
        title: 'Design',
        description:
          'Architecture blueprint optimized for your specific scale, compliance, and performance requirements',
      },
      {
        step: 3,
        title: 'Implement',
        description:
          'Phased rollout with zero-downtime migration and automated testing at every stage',
      },
      {
        step: 4,
        title: 'Operate',
        description:
          'Ongoing management, monitoring, and continuous optimization with transparent reporting',
      },
    ],
    relatedSlugs: ['devops-management', 'architecture-design', 'ai-driven-development'],
    meta: {
      title: 'IT Services | Invigosol',
      description:
        'Enterprise IT services including cloud infrastructure, system integration, security management, and 24/7 technical operations — built for reliability at scale.',
    },
  },
  {
    slug: 'ai-driven-development',
    title: 'AI-Driven Development',
    tagline: 'Software that thinks. Products that learn. Intelligence at the core, not the edge.',
    description:
      'Intelligent software solutions that embed AI into your core product — not as a feature, but as the foundation.',
    longDescription:
      "AI isn't a feature — it's a foundation. Invigosol builds software where intelligence is embedded into the product's DNA, not sprinkled on top as an afterthought. From LLM-powered interfaces to predictive analytics engines to autonomous decision systems — we deliver AI that works in production, at scale, with guardrails.",
    icon: 'Brain',
    challenges: [
      'AI proofs-of-concept that never make it to production',
      'Models that perform in notebooks but fail under real-world data conditions',
      'Lack of in-house ML/AI expertise to build and maintain intelligent systems',
      "AI implementations that don't connect to measurable business outcomes",
    ],
    features: [
      {
        title: 'LLM Integration & Fine-Tuning',
        description:
          'Integrate large language models into your product with retrieval-augmented generation (RAG), fine-tuning, and prompt engineering optimized for your domain. We build LLM systems that are accurate, fast, and cost-efficient.',
      },
      {
        title: 'Predictive Analytics & ML Pipelines',
        description:
          'End-to-end machine learning pipelines — from data ingestion and feature engineering to model training, evaluation, and deployment. Automated retraining ensures your models stay accurate as data evolves.',
      },
      {
        title: 'Intelligent Automation',
        description:
          'Automate complex business processes using AI-driven decision engines. From document processing to workflow orchestration — we build systems that handle edge cases, not just the happy path.',
      },
      {
        title: 'AI-Native Product Design',
        description:
          'We rethink product experiences through an AI lens. Not "add a chatbot" — rather, "how does embedded intelligence fundamentally change what this product can do for users?"',
      },
      {
        title: 'Production AI Infrastructure',
        description:
          'Model serving, A/B testing, observability, cost management, and guardrails. We build the infrastructure that keeps your AI systems reliable, observable, and compliant in production.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discover',
        description:
          'Identify the highest-impact AI opportunities aligned with your business goals',
      },
      {
        step: 2,
        title: 'Prototype',
        description:
          'Rapid proof of value with real data to validate feasibility and ROI',
      },
      {
        step: 3,
        title: 'Build',
        description:
          'Production-grade development with testing, monitoring, and safety guardrails',
      },
      {
        step: 4,
        title: 'Scale',
        description:
          'Performance optimization, cost management, and continuous model improvement',
      },
    ],
    relatedSlugs: ['agent-development', 'architecture-design', 'product-management'],
    meta: {
      title: 'AI-Driven Development | Invigosol',
      description:
        'Build AI-native software products with embedded intelligence — from LLM integration and ML pipelines to production AI systems that deliver measurable business impact.',
    },
  },
  {
    slug: 'product-management',
    title: 'Product Management & Maintenance',
    tagline: 'From roadmap to reality. From launch to long-term evolution.',
    description:
      'End-to-end product ownership — from roadmap to release, from launch to long-term evolution.',
    longDescription:
      "Great products aren't just built — they're stewarded. Invigosol provides end-to-end product management and maintenance, combining strategic thinking with engineering execution. We own your product's lifecycle from discovery through growth — ensuring every feature shipped solves a real problem and every release reaches users without disruption.",
    icon: 'Package',
    challenges: [
      "Products that ship features but don't move metrics",
      'Disconnected product and engineering teams with conflicting priorities',
      'Accumulating tech debt that slows every subsequent release',
      'No structured process for prioritization, measurement, and iteration',
    ],
    features: [
      {
        title: 'Product Strategy & Roadmapping',
        description:
          'Data-driven roadmap development that balances user needs, business goals, and technical feasibility. We use outcome-based planning — every initiative maps to a measurable result.',
      },
      {
        title: 'Discovery & Validation',
        description:
          'User research, competitive analysis, and rapid prototyping to validate ideas before committing engineering resources. We kill bad ideas fast and double down on winners.',
      },
      {
        title: 'Development Execution',
        description:
          'Agile delivery with sprint planning, backlog management, and cross-functional coordination. We integrate seamlessly with your existing team or operate as a standalone product squad.',
      },
      {
        title: 'Launch & Growth',
        description:
          "Release management, feature flagging, A/B testing, and analytics-driven iteration. We don't just ship — we measure, learn, and optimize.",
      },
      {
        title: 'Ongoing Maintenance & Evolution',
        description:
          'Performance monitoring, bug triage, dependency updates, security patches, and incremental improvements. Your product stays healthy, modern, and competitive long after launch.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Understand',
        description:
          'Deep dive into your business, users, market, and existing product landscape',
      },
      {
        step: 2,
        title: 'Strategize',
        description:
          'Define product vision, success metrics, and a prioritized roadmap',
      },
      {
        step: 3,
        title: 'Execute',
        description:
          'Iterative development with continuous user feedback and measurement',
      },
      {
        step: 4,
        title: 'Evolve',
        description:
          'Ongoing optimization, maintenance, and strategic evolution as the market shifts',
      },
    ],
    relatedSlugs: ['ai-driven-development', 'architecture-design', 'devops-management'],
    meta: {
      title: 'Product Management & Maintenance | Invigosol',
      description:
        'Full-lifecycle product management — from strategy and roadmap to development, launch, and ongoing maintenance. We own the outcome, not just the backlog.',
    },
  },
  {
    slug: 'devops-management',
    title: 'DevOps Management',
    tagline: 'Ship with confidence. Deploy without drama. Observe everything.',
    description:
      'Automated pipelines, infrastructure as code, and observability — so your team ships with confidence, every time.',
    longDescription:
      "Speed without stability is chaos. Stability without speed is stagnation. Invigosol's DevOps practice delivers both — automated pipelines, infrastructure as code, comprehensive observability, and a culture of continuous improvement. We transform your delivery capability so your team ships faster, safer, and more frequently.",
    icon: 'GitBranch',
    challenges: [
      'Slow, manual deployment processes that bottleneck engineering output',
      '"Works on my machine" gaps between development and production environments',
      "Infrastructure that's manually configured, undocumented, and fragile",
      'Lack of visibility into system health, performance, and cost',
    ],
    features: [
      {
        title: 'CI/CD Pipeline Engineering',
        description:
          'Automated build, test, and deployment pipelines tailored to your stack. From commit to production in minutes — with automated quality gates, security scanning, and rollback capabilities.',
      },
      {
        title: 'Infrastructure as Code (IaC)',
        description:
          'Your entire infrastructure defined in version-controlled code — Terraform, Pulumi, or CloudFormation. Reproducible, auditable, and drift-free environments across dev, staging, and production.',
      },
      {
        title: 'Container Orchestration',
        description:
          "Kubernetes and container platform management — from cluster architecture to auto-scaling policies to cost optimization. We run production Kubernetes so your team doesn't have to become Kubernetes experts.",
      },
      {
        title: 'Observability & Monitoring',
        description:
          'Full-stack observability with metrics, logs, traces, and alerting. We implement monitoring that answers "what\'s broken and why?" — not just "something is broken."',
      },
      {
        title: 'Platform Engineering',
        description:
          'Internal developer platforms that abstract infrastructure complexity. Self-service environments, automated provisioning, and golden paths — so developers ship features, not YAML.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Audit',
        description:
          'Assess your current delivery pipeline, infrastructure, and operational maturity',
      },
      {
        step: 2,
        title: 'Design',
        description:
          'Blueprint for your target DevOps architecture and toolchain',
      },
      {
        step: 3,
        title: 'Automate',
        description:
          'Implement pipelines, IaC, monitoring, and platform capabilities',
      },
      {
        step: 4,
        title: 'Optimize',
        description:
          'Continuous improvement of deployment frequency, lead time, change failure rate, and recovery time',
      },
    ],
    relatedSlugs: ['it-services', 'architecture-design', 'ai-driven-development'],
    meta: {
      title: 'DevOps Management | Invigosol',
      description:
        'DevOps engineering and management — CI/CD pipelines, infrastructure as code, cloud automation, and observability. Ship faster with confidence.',
    },
  },
  {
    slug: 'architecture-design',
    title: 'Architecture Design',
    tagline: "Blueprints built for today's traffic and tomorrow's ambition.",
    description:
      "Scalable, resilient system blueprints — designed for today's load and tomorrow's growth.",
    longDescription:
      "Architecture is the decisions you'll live with for years. Get it right, and your system scales gracefully, adapts to new requirements, and enables your team to move fast. Get it wrong, and every feature takes longer, every scale event is a crisis, and every new requirement feels impossible. Invigosol designs systems that are resilient, scalable, and ready for what's next — including AI.",
    icon: 'Building2',
    challenges: [
      "Monolithic systems that can't scale or evolve independently",
      'Architecture that forces full redeployment for every small change',
      'Systems designed for current load that collapse under 5x growth',
      'No clear technical strategy for integrating AI into existing platforms',
    ],
    features: [
      {
        title: 'System Architecture & Design',
        description:
          "End-to-end architecture design from requirements through detailed technical specifications. We produce architecture decision records, component diagrams, data flow models, and implementation guides — not just whiteboard sketches.",
      },
      {
        title: 'Microservices & Domain-Driven Design',
        description:
          'Decompose complex systems into well-bounded, independently deployable services. We use domain-driven design to ensure service boundaries match business reality — not arbitrary technical splits.',
      },
      {
        title: 'Event-Driven Architecture',
        description:
          'Design reactive, loosely-coupled systems using event streaming (Kafka, EventBridge) and CQRS patterns. Ideal for real-time data processing, workflow automation, and multi-system coordination.',
      },
      {
        title: 'Cloud-Native Platform Design',
        description:
          'Architecture optimized for cloud — leveraging managed services, serverless compute, and auto-scaling. We design for elasticity, cost-efficiency, and multi-region availability.',
      },
      {
        title: 'AI-Ready Architecture',
        description:
          'Systems designed with AI integration as a first-class concern — vector databases, model serving infrastructure, feature stores, and data pipelines that feed intelligent components.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discover',
        description:
          'Understand your business domain, scale requirements, team capabilities, and constraints',
      },
      {
        step: 2,
        title: 'Design',
        description:
          'Create detailed architecture blueprints with trade-off analysis and decision records',
      },
      {
        step: 3,
        title: 'Validate',
        description:
          'Load testing, security review, and architectural spike implementations to prove the design',
      },
      {
        step: 4,
        title: 'Guide',
        description:
          'Hands-on support during implementation to ensure the architecture is executed as designed',
      },
    ],
    relatedSlugs: ['ai-driven-development', 'devops-management', 'it-services'],
    meta: {
      title: 'Architecture Design | Invigosol',
      description:
        'Scalable system architecture and technical design — microservices, event-driven systems, cloud-native platforms, and AI-ready infrastructure.',
    },
  },
  {
    slug: 'agent-development',
    title: 'Agent Development',
    tagline: 'Autonomous agents that execute, coordinate, and deliver — powered by OpenClaw.',
    description:
      'Autonomous AI agents that execute complex workflows — powered by OpenClaw, our agent development platform.',
    longDescription:
      "The next wave of AI isn't chatbots — it's agents. Autonomous systems that reason, plan, use tools, and execute complex workflows without constant human supervision. Invigosol is at the forefront of agentic AI, building production-grade agent systems with OpenClaw — our framework for developing, orchestrating, and deploying AI agents that actually work in the real world, with the guardrails enterprises require.",
    icon: 'Bot',
    challenges: [
      'AI agents that work in demos but fail in production edge cases',
      'No framework for coordinating multiple agents on complex workflows',
      'Lack of observability and control over autonomous AI actions',
      'Enterprise security and compliance concerns with agentic systems',
    ],
    features: [
      {
        title: 'Custom Agent Development',
        description:
          'Purpose-built AI agents designed for your specific business workflows — customer support automation, data pipeline orchestration, code generation, document processing, and more. Every agent is built for your domain, not generic.',
      },
      {
        title: 'Multi-Agent Orchestration',
        description:
          "Complex problems need multiple specialized agents working together. We design multi-agent systems with coordination protocols, shared context management, and conflict resolution — so agents collaborate, not compete.",
      },
      {
        title: 'Tool Integration & Function Calling',
        description:
          'Agents that can interact with your existing systems — APIs, databases, SaaS tools, internal platforms. We build robust tool-use frameworks with error handling, retry logic, and permission controls.',
      },
      {
        title: 'Production Guardrails & Safety',
        description:
          "Enterprise-grade safety layers — output validation, action approval workflows, rate limiting, audit logging, and human-in-the-loop escalation. Autonomous doesn't mean unsupervised.",
      },
      {
        title: 'OpenClaw Platform',
        description:
          'Our open framework for agent development. OpenClaw provides the building blocks — agent runtime, orchestration engine, tool registry, observability dashboard, and evaluation suite — so you can build, test, and deploy agents at production quality.',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: 'Identify',
        description:
          'Map your highest-value automation opportunities and define agent capabilities',
      },
      {
        step: 2,
        title: 'Design',
        description:
          'Architect agent systems with clear boundaries, tool access, and safety constraints',
      },
      {
        step: 3,
        title: 'Build',
        description:
          'Develop and rigorously test agents with real-world scenarios, edge cases, and adversarial inputs',
      },
      {
        step: 4,
        title: 'Deploy',
        description:
          'Production rollout with monitoring, guardrails, and continuous evaluation',
      },
    ],
    relatedSlugs: ['ai-driven-development', 'architecture-design', 'product-management'],
    meta: {
      title: 'Agent Development — OpenClaw | Invigosol',
      description:
        'Build autonomous AI agents with OpenClaw — multi-agent orchestration, tool integration, and production-grade guardrails for enterprise agentic AI systems.',
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return services.map((s) => s.slug);
}
