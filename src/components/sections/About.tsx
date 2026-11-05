import { GraduationCap, MapPin, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/config/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function About() {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  const facts = [
    {
      icon: GraduationCap,
      label: t('about.factEducationLabel'),
      value: t('about.factEducationValue'),
      detail: t('about.factInstitutionValue'),
    },
    {
      icon: MapPin,
      label: t('about.factLocationLabel'),
      value: t('about.factLocationValue'),
    },
    {
      icon: Target,
      label: t('about.factGoalLabel'),
      value: t('about.factGoalValue'),
    },
  ];

  return (
    <Section id="about" tag={t('about.tag')} title={t('about.title')}>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12"
      >
        <div className="space-y-5 lg:col-span-7">
          <p className="text-base sm:text-lg leading-relaxed text-text-muted">
            {t('about.p1')}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-text-muted">
            {t('about.p2')}
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-border-brand hover:bg-brand-dim hover:text-text"
            >
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              <span>{t('about.github')}</span>
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-border-brand hover:bg-brand-dim hover:text-text"
            >
              <FaLinkedin className="h-4 w-4" aria-hidden="true" />
              <span>{t('about.linkedin')}</span>
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-border-brand hover:bg-brand-dim hover:text-text"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
              <span>{t('about.whatsapp')}</span>
            </a>
          </div>
        </div>

        <Card className="p-6 sm:p-8 lg:col-span-5">
          <h3 className="sr-only">{t('about.factsTitle')}</h3>
          <dl className="divide-y divide-border">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border-brand bg-brand-dim text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="font-mono text-xs tracking-wider text-text-muted uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-display text-base font-semibold text-text">
                      {fact.value}
                    </dd>
                    {fact.detail ? (
                      <dd className="mt-0.5 text-sm text-text-muted">
                        {fact.detail}
                      </dd>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </dl>
        </Card>
      </motion.div>
    </Section>
  );
}
