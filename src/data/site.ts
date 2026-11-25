// Single source of truth for site content.
export const site = {
  url: 'https://gavineke.com',
  projectsUrl: 'https://gavin.cloud/',
  name: 'Gavin Eke',
  title: 'Cyber Security Engineer',
  description: 'Gavin Eke is a cyber security engineer building secure systems and automating defence.',
} as const;

export type SocialIcon = 'github' | 'linkedin' | 'emdash';

type SocialLink = { label: string; href: string; icon: SocialIcon };

export const profiles: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/gavineke', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/gavineke', icon: 'linkedin' },
];

export const socials: SocialLink[] = [
  ...profiles,
  { label: 'EmDash Cyber', href: 'https://emdashcyber.com/', icon: 'emdash' },
];
