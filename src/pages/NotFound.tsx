import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { Container } from '@/components/layout/Container';
import { PageMeta } from '@/components/layout/PageMeta';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <Container className="flex min-h-[75vh] flex-col items-center justify-center py-24 text-center">
      <PageMeta
        title={t('meta.notFoundTitle')}
        description={t('notFound.description')}
        path="/404"
      />
      <span className="font-mono text-sm tracking-widest text-brand">
        {t('notFound.code')}
      </span>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-text">
        {t('notFound.title')}
      </h1>
      <p className="mt-4 max-w-md text-text-muted">
        {t('notFound.description')}
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand bg-brand px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:border-brand-bright hover:bg-brand-bright hover:shadow-brand"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {t('notFound.backHome')}
      </Link>
    </Container>
  );
}

export default NotFound;
