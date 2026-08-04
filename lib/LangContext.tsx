'use client';
import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { translations, TranslationKey } from './translations';
import { Lang, LOCALES, DEFAULT_LOCALE } from './locales';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
  pathWithoutLocale: string;
}

const LangContext = createContext<LangContextType>({
  lang: DEFAULT_LOCALE,
  setLang: () => {},
  t: (key) => translations.en[key],
  pathWithoutLocale: '/',
});

export function LangProvider({ children }: { children: ReactNode }) {
  const params = useParams<{ lang?: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const lang = (LOCALES as readonly string[]).includes(params.lang ?? '')
    ? (params.lang as Lang)
    : DEFAULT_LOCALE;

  const segments = pathname.split('/');
  const pathWithoutLocale = '/' + segments.slice(2).join('/');

  const setLang = (l: Lang) => {
    const next = [...segments];
    next[1] = l;
    router.push(next.join('/') || `/${l}`);
  };

  const t = (key: TranslationKey): string => translations[lang][key] ?? translations.en[key];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t, pathWithoutLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
