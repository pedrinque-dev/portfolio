import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '@/lib/i18n';

export interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const currentLang: SupportedLanguage = i18n.language.startsWith('en') ? 'en' : 'pt';

  const handleSelectLanguage = (lang: SupportedLanguage) => {
    if (lang !== currentLang) {
      void i18n.changeLanguage(lang);
    }
  };

  return (
    <div
      role="group"
      aria-label={t('nav.langSwitchLabel')}
      className={`inline-flex items-center rounded-full border border-border bg-bg-card p-0.5 font-mono text-xs ${className}`}
    >
      <button
        type="button"
        onClick={() => handleSelectLanguage('pt')}
        aria-pressed={currentLang === 'pt'}
        aria-label={t('nav.langPt')}
        className={`cursor-pointer rounded-full px-2.5 py-1 font-bold tracking-wider transition-colors duration-150 ${
          currentLang === 'pt'
            ? 'bg-brand text-white'
            : 'text-text-muted hover:text-text'
        }`}
      >
        PT
      </button>
      <span aria-hidden="true" className="px-0.5 text-text-faint select-none">
        |
      </span>
      <button
        type="button"
        onClick={() => handleSelectLanguage('en')}
        aria-pressed={currentLang === 'en'}
        aria-label={t('nav.langEn')}
        className={`cursor-pointer rounded-full px-2.5 py-1 font-bold tracking-wider transition-colors duration-150 ${
          currentLang === 'en'
            ? 'bg-brand text-white'
            : 'text-text-muted hover:text-text'
        }`}
      >
        EN
      </button>
    </div>
  );
}
