import type { Metadata } from 'next';
import { Lang } from '@/lib/locales';
import { translations } from '@/lib/translations';
import PageBanner from '@/components/ui/PageBanner';
import ValuesSection from '@/components/sections/ValuesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import AboutContent from './AboutContent';

const BASE_URL = 'https://www.orivantaproperty.rw';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  const tr = translations[lang];
  const url = `${BASE_URL}/${lang}/about`;
  return {
    title: tr.meta_about_title,
    description: tr.meta_about_desc,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${tr.about_banner_title} | Rwanda Real Estate Advisory`,
      description: tr.meta_about_desc,
      images: [{ url: '/images/orivanta-01.png', width: 400, height: 400, alt: 'About ORIVANTA PROPERTY' }],
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const tr = translations[lang];
  return (
    <>
      <PageBanner
        title={tr.about_banner_title}
        subtitle={tr.about_banner_subtitle}
        breadcrumbs={[{ label: tr.nav_home, href: '/' }, { label: tr.sidebar_about }]}
      />
      <AboutContent />
      <ValuesSection />
      <ProcessSection />
      <CTASection
        title={tr.about_cta_title}
        subtitle={tr.about_cta_subtitle}
        primaryLabel={tr.about_cta_primary}
        primaryHref="/contact"
        secondaryLabel={tr.about_cta_secondary}
        secondaryHref="/services"
      />
    </>
  );
}
