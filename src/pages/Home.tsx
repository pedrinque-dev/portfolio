import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Stacks } from '@/components/sections/Stacks';

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
    <>
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
