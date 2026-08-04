'use client';
import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useLang } from '@/lib/LangContext';

type Props = ComponentProps<typeof Link>;

export default function LocaleLink({ href, ...rest }: Props) {
  const { lang } = useLang();
  const hrefStr = typeof href === 'string' ? href : (href.pathname ?? '/');
  const localized = hrefStr.startsWith('/') ? `/${lang}${hrefStr === '/' ? '' : hrefStr}` : hrefStr;
  return <Link href={localized} {...rest} />;
}
