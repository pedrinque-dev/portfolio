import type { ReactNode } from 'react';
import { Container } from '@/components/layout/Container';

export interface SectionProps {
  id: string;
  tag?: string;
  title: string;
  subtitle?: string;
  alternate?: boolean;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  tag,
  title,
  subtitle,
  alternate = false,
  children,
  className = '',
}: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`relative py-16 md:py-24 transition-colors duration-300 ${
        alternate ? 'bg-bg-alt' : 'bg-bg'
      } ${className}`}
    >
      <Container>
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          {tag ? (
            <span className="mb-3 inline-block rounded-full border border-border-brand bg-brand-dim px-3 py-1 font-mono text-xs tracking-widest text-brand lowercase">
              {tag}
            </span>
          ) : null}
          <h2
            id={titleId}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text"
          >
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="mt-2.5 block h-0.5 w-10 rounded-full bg-gradient-to-r from-brand to-transparent"
          />
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base text-text-muted">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
