import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router';
import { Container } from '@/components/layout/Container';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { siteConfig } from '@/config/site';

interface NavItem {
  id: string;
  labelKey: string;
}

const navItems: NavItem[] = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'stacks', labelKey: 'nav.stacks' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname !== '/') {
        setActiveSection('projects');
        return;
      }

      let current = '';
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element && window.scrollY >= element.offsetTop - 120) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      void navigate(`/#${sectionId}`);
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-border bg-navbar backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:text-white"
      >
        {t('nav.skipToContent')}
      </a>

      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          aria-label={t('nav.homeLabel')}
          onClick={() => {
            setMenuOpen(false);
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="font-mono text-xl font-bold tracking-tight text-brand transition-colors duration-150 hover:text-brand-bright"
        >
          {siteConfig.logo}
        </Link>

        <nav
          aria-label={t('nav.mainLabel')}
          className="hidden md:flex md:items-center md:gap-8"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`border-b-2 py-1 font-mono text-xs tracking-wider lowercase transition-colors duration-150 ${
                  isActive
                    ? 'border-brand text-text'
                    : 'border-transparent text-text-muted hover:border-brand hover:text-text'
                }`}
              >
                {t(item.labelKey)}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border border-border bg-bg-card text-text-muted transition-colors duration-150 hover:border-border-brand hover:text-text md:hidden"
          >
            {menuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <nav
          id="mobile-nav-menu"
          aria-label={t('nav.mainLabel')}
          className="border-b border-border bg-navbar px-6 py-5 backdrop-blur-lg md:hidden"
        >
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="w-full text-center">
                  <a
                    href={`/#${item.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`inline-block w-full rounded-md py-2 font-mono text-sm tracking-wider lowercase transition-colors duration-150 ${
                      isActive
                        ? 'bg-brand-dim font-bold text-brand'
                        : 'text-text-muted hover:text-text'
                    }`}
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
