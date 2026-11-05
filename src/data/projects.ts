import nutriNatyAvif1200 from '@/assets/nutri-naty-1200.avif';
import nutriNatyWebp1200 from '@/assets/nutri-naty-1200.webp';
import nutriNatyAvif640 from '@/assets/nutri-naty-640.avif';
import nutriNatyWebp640 from '@/assets/nutri-naty-640.webp';
import nutriNatyImg from '@/assets/nutri-naty.png';
import strideStoreAvif1200 from '@/assets/stride-store-1200.avif';
import strideStoreWebp1200 from '@/assets/stride-store-1200.webp';
import strideStoreAvif640 from '@/assets/stride-store-640.avif';
import strideStoreWebp640 from '@/assets/stride-store-640.webp';
import strideStoreImg from '@/assets/stride-store.png';
import superMarioAvif1200 from '@/assets/super-mario-1200.avif';
import superMarioWebp1200 from '@/assets/super-mario-1200.webp';
import superMarioAvif640 from '@/assets/super-mario-640.avif';
import superMarioWebp640 from '@/assets/super-mario-640.webp';
import superMarioImg from '@/assets/super-mario.png';

export interface ProjectImageSet {
  fallback: string;
  avif640: string;
  avif1200: string;
  webp640: string;
  webp1200: string;
}

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
  image: ProjectImageSet;
}

export const projects: Project[] = [
  {
    slug: 'nutri-naty-ai',
    titleKey: 'projects.items.nutri-naty-ai.title',
    descriptionKey: 'projects.items.nutri-naty-ai.description',
    imageAltKey: 'projects.items.nutri-naty-ai.imageAlt',
    tags: ['React', 'AI', 'Node.js'],
    repoUrl: 'https://github.com/pedrinque-dev/nutri-naty-ai',
    image: {
      fallback: nutriNatyImg,
      avif640: nutriNatyAvif640,
      avif1200: nutriNatyAvif1200,
      webp640: nutriNatyWebp640,
      webp1200: nutriNatyWebp1200,
    },
  },
  {
    slug: 'stride-store',
    titleKey: 'projects.items.stride-store.title',
    descriptionKey: 'projects.items.stride-store.description',
    imageAltKey: 'projects.items.stride-store.imageAlt',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/pedrinque-dev/stride-store',
    liveUrl: 'https://stride-store-alpha.vercel.app',
    image: {
      fallback: strideStoreImg,
      avif640: strideStoreAvif640,
      avif1200: strideStoreAvif1200,
      webp640: strideStoreWebp640,
      webp1200: strideStoreWebp1200,
    },
  },
  {
    slug: 'super-mario',
    titleKey: 'projects.items.super-mario.title',
    descriptionKey: 'projects.items.super-mario.description',
    imageAltKey: 'projects.items.super-mario.imageAlt',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/pedrinque-dev/super-mario',
    liveUrl: 'https://super-mario-ten-peach.vercel.app',
    image: {
      fallback: superMarioImg,
      avif640: superMarioAvif640,
      avif1200: superMarioAvif1200,
      webp640: superMarioWebp640,
      webp1200: superMarioWebp1200,
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
