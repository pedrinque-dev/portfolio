import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa6';
import { Link, Navigate, useParams } from 'react-router';
import { Container } from '@/components/layout/Container';
import { PageMeta } from '@/components/layout/PageMeta';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { getProjectBySlug } from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const title = t(project.titleKey);
  const description = t(project.descriptionKey);

  return (
    <article className="py-12 md:py-20">
      <PageMeta
        title={`${title} | Pedro Lombardi`}
        description={description}
        path={`/projects/${project.slug}`}
      />
      <Container className="max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs font-medium text-text-muted transition-colors duration-150 hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>{t('projects.backToProjects')}</span>
        </Link>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mt-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text">
              {title}
            </h1>
            {!project.liveUrl ? (
              <span className="rounded-full border border-border-brand bg-brand-dim px-3.5 py-1 font-mono text-xs font-medium text-brand">
                {t('projects.comingSoon')}
              </span>
            ) : null}
          </div>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-text-muted">
            {description}
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-bg-card shadow-card">
            <picture>
              <source
                type="image/avif"
                srcSet={`${project.image.avif640} 640w, ${project.image.avif1200} 1200w`}
                sizes="(max-width: 896px) 92vw, 896px"
              />
              <source
                type="image/webp"
                srcSet={`${project.image.webp640} 640w, ${project.image.webp1200} 1200w`}
                sizes="(max-width: 896px) 92vw, 896px"
              />
              <img
                src={project.image.fallback}
                alt={t(project.imageAltKey)}
                width={1200}
                height={675}
                decoding="async"
                className="aspect-video w-full object-cover"
              />
            </picture>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.contextKey ? (
              <Card className="p-6">
                <h2 className="font-display text-xl font-bold text-text">
                  {t('projects.contextTitle')}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {t(project.contextKey)}
                </p>
              </Card>
            ) : null}

            {project.decisionsKey ? (
              <Card className="p-6">
                <h2 className="font-display text-xl font-bold text-text">
                  {t('projects.decisionsTitle')}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {t(project.decisionsKey)}
                </p>
              </Card>
            ) : null}

            <Card className="p-6">
              <h2 className="font-display text-xl font-bold text-text">
                {t('projects.stackTitle')}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="font-display text-xl font-bold text-text">
                {t('projects.linksTitle')}
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-5 py-2.5 text-sm font-medium text-text transition-colors duration-150 hover:border-border-brand hover:bg-brand-dim"
                >
                  <FaGithub className="h-4 w-4" aria-hidden="true" />
                  <span>{t('projects.openRepo')}</span>
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-brand bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:border-brand-bright hover:bg-brand-bright"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span>{t('projects.openLive')}</span>
                  </a>
                ) : null}
              </div>
            </Card>
          </div>
        </motion.div>
      </Container>
    </article>
  );
}

export default ProjectDetail;
