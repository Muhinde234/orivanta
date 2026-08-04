export const LOCALES = ['en', 'fr', 'rw'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Lang = 'en';
