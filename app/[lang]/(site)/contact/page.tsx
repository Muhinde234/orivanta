import type { Metadata } from 'next';
import { Lang } from '@/lib/locales';
import { translations } from '@/lib/translations';
import PageBanner from '@/components/ui/PageBanner';
import ContactContent from './ContactContent';

const BASE_URL = 'https://www.orivantaproperty.rw';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  const tr = translations[lang];
  const url = `${BASE_URL}/${lang}/contact`;
  return {
    title: tr.meta_contact_title,
    description: tr.meta_contact_desc,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${tr.contact_banner_title} | Kigali, Rwanda`,
      description: tr.meta_contact_desc,
      images: [{ url: '/images/orivanta-social.png', width: 800, height: 800, alt: 'Contact ORIVANTA PROPERTY' }],
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const tr = translations[lang];
  return (
    <>
      <PageBanner
        title={tr.contact_banner_title}
        subtitle={tr.contact_banner_subtitle}
        breadcrumbs={[{ label: tr.nav_home, href: '/' }, { label: tr.sidebar_contact }]}
      />
      <ContactContent />
    </>
  );
}
