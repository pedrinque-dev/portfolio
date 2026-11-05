import type { IconType } from 'react-icons';
import { FaCss3Alt } from 'react-icons/fa6';
import {
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVite,
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
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    icon: SiHtml5,
    color: '#E34F26',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    icon: FaCss3Alt,
    color: '#1572B6',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    icon: SiJavascript,
    color: '#F7DF1E',
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: SiReact,
    color: '#61DAFB',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: SiTailwindcss,
    color: '#06B6D4',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    icon: SiNodedotjs,
    color: '#339933',
  },
  {
    id: 'express',
    name: 'Express',
    category: 'backend',
    icon: SiExpress,
    color: 'currentColor',
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    icon: SiPhp,
    color: '#777BB4',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    icon: SiMysql,
    color: '#4479A1',
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'tools',
    icon: SiVite,
    color: '#646CFF',
  },
];
