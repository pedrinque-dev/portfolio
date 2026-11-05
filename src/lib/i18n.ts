import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/locales/en.json';
import pt from '@/locales/pt.json';

export type SupportedLanguage = 'pt' | 'en';

const STORAGE_KEY = 'pl-lang';

function getInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') {
    return 'pt';
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'en' ? 'en' : 'pt';
}

function updateDocumentLanguage(lang: SupportedLanguage): void {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    document.documentElement.setAttribute('data-lang', lang);
  }
}

const initialLanguage = getInitialLanguage();
updateDocumentLanguage(initialLanguage);

void i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  const normalized: SupportedLanguage = lng === 'en' ? 'en' : 'pt';
  updateDocumentLanguage(normalized);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, normalized);
  }
});

export { i18n };
