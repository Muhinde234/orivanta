import type { Metadata } from 'next';
import { Lang } from '@/lib/locales';
import { translations } from '@/lib/translations';
import { fetchPublishedListings } from '@/lib/listings';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturedListings from '@/components/sections/FeaturedListings';
import WhyChoose from '@/components/sections/WhyChoose';
import ValuesSection from '@/components/sections/ValuesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import MDSection from '@/components/sections/MDSection';
// Testimonials hidden for now — company is newly launched, no client feedback yet.
// import Testimonials from '@/components/sections/Testimonials';
import GalleryStrip from '@/components/sections/GalleryStrip';
import CTASection from '@/components/sections/CTASection';

const BASE_URL = 'https://www.orivantaproperty.rw';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  const tr = translations[lang];
  const url = `${BASE_URL}/${lang}`;
  return {
    title: tr.meta_home_title,
    description: tr.meta_home_desc,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: tr.meta_home_title,
      description: tr.meta_home_desc,
      images: [{ url: '/images/orivanta-01.png', width: 400, height: 400, alt: 'ORIVANTA PROPERTY LTD' }],
    },
  };
}

export default async function HomePage() {
  const featuredListings = (await fetchPublishedListings()).slice(0, 6);
  return (
    <>
      <Hero />
      {/* Quick intro strip — removed */}
      <ServicesSection />
      <FeaturedListings listings={featuredListings} />
      <WhyChoose />
      <ValuesSection />
      <ProcessSection />
      <MDSection />
      {/* <Testimonials /> — re-enable once real client feedback is available */}
      <GalleryStrip />
      <CTASection />
    </>
  );
}
