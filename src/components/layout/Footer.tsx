import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/layout/Container';
import { siteConfig } from '@/config/site';

export function Footer() {
  const { t } = useTranslation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg-alt py-8">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-base font-bold text-brand">{siteConfig.logo}</span>

        <p className="text-center text-xs sm:text-sm text-text-muted">
          {t('footer.copyPrefix')}{' '}
          <span aria-hidden="true" className="text-brand">
            ♥
          </span>{' '}
          {t('footer.copySuffix')}
        </p>

        <button
          type="button"
          onClick={handleScrollToTop}
          aria-label={t('footer.backToTop')}
          title={t('footer.backToTop')}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-bg-card text-text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-border-brand hover:text-brand"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </button>
      </Container>
    </footer>
  );
}
