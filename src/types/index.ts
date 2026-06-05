export type NavItem = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
};

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};
