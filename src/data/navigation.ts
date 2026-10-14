import { services } from './services';
import { products } from './products';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  children?: NavLink[];
}

const serviceLinks: NavLink[] = services.map((s) => ({
  label: s.shortTitle,
  href: `/services/${s.slug}`,
  description: s.description,
}));

const productLinks: NavLink[] = products.map((p) => ({
  label: p.name,
  href: `/products/${p.slug}`,
  description: p.tagline,
}));

export const mainNav: NavLink[] = [
  { label: 'Services', href: '/services', children: serviceLinks },
  { label: 'Products', href: '/products', children: productLinks },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  services: serviceLinks,
  products: [...productLinks, { label: 'All products', href: '/products' }],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Data Deletion', href: '/data-deletion' },
  ],
};
