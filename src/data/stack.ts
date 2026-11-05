import type { IconType } from 'react-icons';
import {
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export type StackCategory = 'frontend' | 'backend' | 'database' | 'tools';

export interface StackItem {
  id: string;
  name: string;
  category: StackCategory;
  icon: IconType;
  color: string;
}

export const stackCategories: StackCategory[] = [
  'frontend',
  'backend',
  'database',
  'tools',
];

export const stackItems: StackItem[] = [
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: SiReact,
    color: '#61DAFB',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    icon: SiTypescript,
    color: '#3178C6',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    icon: SiJavascript,
    color: '#F7DF1E',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: SiTailwindcss,
    color: '#06B6D4',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    icon: SiPython,
    color: '#3776AB',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    icon: SiFastapi,
    color: '#009688',
  },
  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    icon: SiDjango,
    color: '#44B78B',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    icon: SiNodedotjs,
    color: '#339933',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    icon: SiPostgresql,
    color: '#4169E1',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'tools',
    icon: SiDocker,
    color: '#2496ED',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    icon: SiGit,
    color: '#F05032',
  },
];
