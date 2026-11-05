import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { Container } from '@/components/layout/Container';

export function Home() {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.title = t('meta.homeTitle');
  }, [t]);

  useEffect(() => {
    if (!location.hash) {
      return;
    }
    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <Container className="py-28">
      <h1 className="font-display text-4xl font-bold text-text">
        {t('hero.name')}
      </h1>
    </Container>
  );
}

export default Home;
