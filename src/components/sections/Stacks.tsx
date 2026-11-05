import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { stackCategories, stackItems } from '@/data/stack';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Stacks() {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="stacks"
      tag={t('stacks.tag')}
      title={t('stacks.title')}
      subtitle={t('stacks.subtitle')}
      alternate
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {stackCategories.map((category, index) => {
          const items = stackItems.filter((item) => item.category === category);
          return (
            <motion.div
              key={category}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
                delay: reducedMotion ? 0 : index * 0.05,
              }}
            >
              <Card className="h-full p-6">
                <h3 className="mb-4 font-mono text-xs font-bold tracking-widest text-brand uppercase">
                  {t(`stacks.categories.${category}`)}
                </h3>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.id}
                        className="flex items-center gap-3 rounded-md border border-border bg-bg p-3 transition-colors duration-150 hover:border-border-brand"
                      >
                        <Icon
                          className="h-5 w-5 shrink-0"
                          style={{ color: item.color }}
                          aria-hidden="true"
                        />
                        <span className="font-mono text-xs font-medium text-text">
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
