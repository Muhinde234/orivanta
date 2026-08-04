import type { Metadata } from 'next';
import { Lang } from '@/lib/locales';
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
  const url = `${BASE_URL}/${lang}`;
  return {
    title: 'ORIVANTA PROPERTY LTD | Professional Real Estate Advisory in Rwanda',
    description:
      'Where property potential becomes lasting value. ORIVANTA PROPERTY LTD provides property valuation, real estate consultancy, investment advisory, and more in Kigali, Rwanda.',
    alternates: { canonical: url },
    openGraph: {
      url,
      title: 'ORIVANTA PROPERTY LTD | Professional Real Estate Advisory in Rwanda',
      description: 'Rwanda\'s trusted real estate advisory firm — property valuation, consultancy, management, brokerage, and investment advisory in Kigali.',
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'ORIVANTA PROPERTY LTD' }],
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
