import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { projects } from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Projects() {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="projects"
      tag={t('projects.tag')}
      title={t('projects.title')}
      subtitle={t('projects.subtitle')}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const title = t(project.titleKey);
          return (
            <motion.article
              key={project.slug}
              aria-label={title}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.35,
                ease: 'easeOut',
                delay: reducedMotion ? 0 : index * 0.06,
              }}
              className="flex"
            >
              <Card
                interactive
                className="group flex w-full flex-col overflow-hidden"
              >
                <Link
                  to={`/projects/${project.slug}`}
                  aria-label={`${title} — ${t('projects.caseStudy')}`}
                  className="relative aspect-video overflow-hidden bg-bg-alt"
                >
                  <img
                    src={project.image}
                    alt={t(project.imageAltKey)}
                    width={640}
                    height={360}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {!project.liveUrl ? (
                    <span className="absolute top-3 right-3 rounded-full border border-border bg-bg/90 px-3 py-1 font-mono text-xs font-medium text-text backdrop-blur-sm">
                      {t('projects.comingSoon')}
                    </span>
                  ) : null}
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl font-bold tracking-tight text-text">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="transition-colors duration-150 hover:text-brand"
                      >
                        {title}
                      </Link>
                    </h3>
                  </div>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-muted">
                    {t(project.descriptionKey)}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t('projects.viewCode')} - ${title}`}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg px-3 py-1.5 text-xs font-medium text-text-muted transition-colors duration-150 hover:border-border-brand hover:bg-brand-dim hover:text-text"
                      >
                        <FaGithub className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{t('projects.viewCode')}</span>
                      </a>

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t('projects.liveDemo')} - ${title}`}
                          className="inline-flex items-center gap-1.5 rounded-md border border-brand bg-brand px-3 py-1.5 text-xs font-medium text-white transition-colors duration-150 hover:border-brand-bright hover:bg-brand-bright"
                        >
                          <ExternalLink
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                          <span>{t('projects.liveDemo')}</span>
                        </a>
                      ) : null}
                    </div>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 font-mono text-xs font-medium text-brand transition-colors duration-150 hover:text-brand-bright"
                    >
                      <span>{t('projects.caseStudy')}</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
