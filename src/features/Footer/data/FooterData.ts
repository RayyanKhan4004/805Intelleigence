// footerData.ts

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export const footerSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Market report', href: '/market-report' },
      { label: 'Lead Generation', href: '/lead-generation' },
      { label: 'Advanced Analytics', href: '/analytics' },
      { label: 'Facebook Ads', href: '/facebook-ads' },
      { label: 'Email Campaigns', href: '/email-campaigns' },
      { label: 'Website Integration', href: '/website-integration' },
      { label: 'CRM Integration', href: '/crm-integration' },
    ],
  },

  {
    title: 'Solutions',
    links: [
      { label: 'For Agents', href: '/solutions/agents' },
      { label: 'For Brokers', href: '/solutions/brokers' },
      { label: 'For Mortgage', href: '/solutions/mortgage' },
      { label: 'For Title', href: '/solutions/title' },
    ],
  },

  {
    title: 'Pricing',
    links: [{ label: 'Subscription Plans', href: '/pricing' }],
  },

  {
    title: 'Get in Touch',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Book for a DEMO', href: '/demo' },
      { label: 'Log In', href: '/login' },
      { label: 'Insight Blogs', href: '/blogs' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Services', href: '/terms' },
    ],
  },
]
