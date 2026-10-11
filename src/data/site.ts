// Single source of truth for site content. Copy marked "placeholder" should be edited.
export const site = {
  url: 'https://gavineke.com',
  name: 'Gavin Eke',
  title: 'Cyber Security Engineer',
  description:
    'Gavin Eke is a cyber security engineer building secure systems, automating defence and sharing what he learns.',
  email: '',
  location: 'United Kingdom', // placeholder
  blog: 'https://scripting.rocks/',
} as const;

export type SocialIcon = 'github' | 'linkedin' | 'x' | 'rss';

export const socials: { label: string; href: string; icon: SocialIcon }[] = [
  { label: 'GitHub', href: 'https://github.com/gavineke', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/gavineke', icon: 'linkedin' },
  { label: 'X', href: 'https://x.com/gavineke', icon: 'x' },
  { label: 'Blog', href: site.blog, icon: 'rss' },
];

export const about = {
  // placeholder
  paragraphs: [
    'I am a cyber security engineer focused on building secure, resilient systems and automating the boring parts of defence.',
    'I enjoy scripting, cloud security, detection engineering and turning hard-won lessons into tools and write-ups that other people can reuse.',
  ],
  skills: [
    'Cloud security',
    'Detection engineering',
    'Security automation',
    'Incident response',
    'Threat modelling',
    'PowerShell',
    'Python',
    'Infrastructure as code',
  ],
};

// placeholder
export const experience: {
  role: string;
  company: string;
  period: string;
  summary: string;
}[] = [
  {
    role: 'Cyber Security Engineer',
    company: 'Company name',
    period: '2020 – Present',
    summary: 'Describe the scope of the role and the outcomes you delivered.',
  },
  {
    role: 'Previous role',
    company: 'Company name',
    period: '2016 – 2020',
    summary: 'Describe the scope of the role and the outcomes you delivered.',
  },
];

// placeholder
export const projects: {
  name: string;
  description: string;
  href: string;
  tags: string[];
}[] = [
  {
    name: 'scripting.rocks',
    description: 'My blog on scripting, automation and security.',
    href: 'https://scripting.rocks/',
    tags: ['Writing', 'Automation'],
  },
  {
    name: 'Open source tool',
    description: 'A short description of a project you are proud of and the problem it solves.',
    href: 'https://github.com/gavineke',
    tags: ['Security', 'Python'],
  },
  {
    name: 'Another project',
    description: 'A short description of another project, talk or write-up.',
    href: 'https://github.com/gavineke',
    tags: ['Cloud', 'IaC'],
  },
];
