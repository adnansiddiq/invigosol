export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'IT Services', href: '/services/it-services' },
      { label: 'AI-Driven Development', href: '/services/ai-driven-development' },
      { label: 'Product Management', href: '/services/product-management' },
      { label: 'DevOps Management', href: '/services/devops-management' },
      { label: 'Architecture Design', href: '/services/architecture-design' },
      { label: 'Agent Development', href: '/services/agent-development' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'IT Services', href: '/services/it-services' },
    { label: 'AI-Driven Development', href: '/services/ai-driven-development' },
    { label: 'Product Management', href: '/services/product-management' },
    { label: 'DevOps Management', href: '/services/devops-management' },
    { label: 'Architecture Design', href: '/services/architecture-design' },
    { label: 'Agent Development', href: '/services/agent-development' },
  ],
};
