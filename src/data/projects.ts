import nutriNatyImg from '@/assets/nutri-naty.png';
import strideStoreImg from '@/assets/stride-store.png';
import superMarioImg from '@/assets/super-mario.png';

export interface Project {
  slug: string;
  titleKey: string;
  descriptionKey: string;
  imageAltKey: string;
  contextKey?: string;
  decisionsKey?: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: 'nutri-naty-ai',
    titleKey: 'projects.items.nutri-naty-ai.title',
    descriptionKey: 'projects.items.nutri-naty-ai.description',
    imageAltKey: 'projects.items.nutri-naty-ai.imageAlt',
    tags: ['React', 'AI', 'Node.js'],
    repoUrl: 'https://github.com/pedrinque-dev/nutri-naty-ai',
    image: nutriNatyImg,
  },
  {
    slug: 'stride-store',
    titleKey: 'projects.items.stride-store.title',
    descriptionKey: 'projects.items.stride-store.description',
    imageAltKey: 'projects.items.stride-store.imageAlt',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/pedrinque-dev/stride-store',
    liveUrl: 'https://stride-store-alpha.vercel.app',
    image: strideStoreImg,
  },
  {
    slug: 'super-mario',
    titleKey: 'projects.items.super-mario.title',
    descriptionKey: 'projects.items.super-mario.description',
    imageAltKey: 'projects.items.super-mario.imageAlt',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/pedrinque-dev/super-mario',
    liveUrl: 'https://super-mario-ten-peach.vercel.app',
    image: superMarioImg,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
