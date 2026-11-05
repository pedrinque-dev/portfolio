import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import heroPhotoAvif256 from '@/assets/foto-256.avif';
import heroPhotoWebp256 from '@/assets/foto-256.webp';
import heroPhotoAvif512 from '@/assets/foto-512.avif';
import heroPhotoWebp512 from '@/assets/foto-512.webp';
import heroPhotoFallback from '@/assets/foto.jpg';
import { Container } from '@/components/layout/Container';
import { siteConfig } from '@/config/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Hero() {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  const initialFade = reducedMotion ? false : { opacity: 0, y: 16 };
  const animateFade = { opacity: 1, y: 0 };
  const transitionBase = { duration: 0.35, ease: 'easeOut' as const };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_75%_30%,rgba(230,57,70,0.12)_0%,transparent_70%)]"
      />

      <Container className="relative z-10">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-16">
          <motion.div
            initial={initialFade}
            animate={animateFade}
            transition={transitionBase}
            className="flex max-w-2xl flex-1 flex-col items-center text-center md:items-start md:text-left"
          >
            <span className="mb-3 font-mono text-xs font-bold tracking-widest text-brand uppercase">
              {t('hero.greeting')}
            </span>

            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text"
            >
              {t('hero.name')}
            </h1>

            <p className="mt-4 font-display text-xl sm:text-2xl font-medium text-text">
              {t('hero.headline')}
            </p>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-text-muted">
              {t('hero.subheadline')}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-brand bg-brand px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-bright hover:bg-brand-bright hover:shadow-brand"
              >
                <span>{t('hero.ctaProjects')}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-6 py-3 text-sm font-medium text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-border-brand hover:text-brand"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>{t('hero.ctaResume')}</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('hero.socialGithub')}
                title={t('hero.socialGithub')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-border-brand hover:bg-brand-dim hover:text-text"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('hero.socialLinkedin')}
                title={t('hero.socialLinkedin')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-border-brand hover:bg-brand-dim hover:text-text"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('hero.socialWhatsapp')}
                title={t('hero.socialWhatsapp')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-border-brand hover:bg-brand-dim hover:text-text"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' as const, delay: 0.05 }}
            className="relative shrink-0"
          >
            <div className="relative h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64 overflow-hidden rounded-full border-2 border-border-brand bg-bg-card shadow-card">
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${heroPhotoAvif256} 256w, ${heroPhotoAvif512} 512w`}
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 256px"
                />
                <source
                  type="image/webp"
                  srcSet={`${heroPhotoWebp256} 256w, ${heroPhotoWebp512} 512w`}
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 256px"
                />
                <img
                  src={heroPhotoFallback}
                  alt={t('hero.photoAlt')}
                  width={256}
                  height={256}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
