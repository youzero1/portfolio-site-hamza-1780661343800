import type { NavItem, Skill, Project, Experience } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 78, category: 'backend' },
  { name: 'GraphQL', level: 72, category: 'backend' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'Git', level: 92, category: 'tools' },
  { name: 'AWS', level: 70, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and an admin dashboard. Built with React, Node.js, and PostgreSQL.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'A real-time chat application powered by AI with natural language processing, sentiment analysis, and intelligent auto-replies.',
    tech: ['Next.js', 'OpenAI', 'WebSockets', 'Prisma', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative project management tool with drag-and-drop, real-time updates, and advanced analytics dashboard.',
    tech: ['React', 'GraphQL', 'Apollo', 'MongoDB', 'D3.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Developer Portfolio Generator',
    description: 'A CLI tool that generates beautiful developer portfolios from a simple YAML configuration file.',
    tech: ['Node.js', 'Handlebars', 'SCSS', 'Webpack'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, and historical data visualization.',
    tech: ['Vue.js', 'Chart.js', 'WebSockets', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Open Source CLI Toolkit',
    description: 'A collection of productivity CLI tools for developers — file watchers, code formatters, and deployment helpers.',
    tech: ['Python', 'Click', 'Docker', 'GitHub Actions'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'TechCorp Inc.',
    period: '2022 – Present',
    description: [
      'Led development of a micro-frontend architecture serving 2M+ monthly users.',
      'Reduced bundle size by 40% through code splitting and lazy loading strategies.',
      'Mentored a team of 5 junior engineers, conducting weekly code reviews.',
      'Collaborated with design and product teams to ship 3 major product features.',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 – 2022',
    description: [
      'Built and maintained a SaaS platform from scratch using React and Node.js.',
      'Designed and implemented RESTful and GraphQL APIs consumed by mobile clients.',
      'Integrated third-party services: Stripe, Twilio, Sendgrid, and AWS S3.',
      'Improved API response times by 60% through caching and query optimization.',
    ],
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'Digital Agency Co.',
    period: '2018 – 2020',
    description: [
      'Developed responsive websites and landing pages for 20+ clients.',
      'Worked closely with designers to faithfully translate Figma mockups into code.',
      'Maintained and enhanced legacy PHP and jQuery codebases.',
      'Introduced automated testing with Jest, increasing coverage from 0% to 65%.',
    ],
  },
];
