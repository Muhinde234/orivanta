import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChoose from '@/components/sections/WhyChoose';
import ValuesSection from '@/components/sections/ValuesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import MDSection from '@/components/sections/MDSection';
import Testimonials from '@/components/sections/Testimonials';
import GalleryStrip from '@/components/sections/GalleryStrip';
import CTASection from '@/components/sections/CTASection';

const BASE_URL = 'https://www.orivantaproperty.rw';

export const metadata: Metadata = {
  title: 'ORIVANTA PROPERTY LTD | Professional Real Estate Advisory in Rwanda',
  description:
    'Where property potential becomes lasting value. ORIVANTA PROPERTY LTD provides property valuation, real estate consultancy, investment advisory, and more in Kigali, Rwanda.',
  alternates: { canonical: BASE_URL },
  openGraph: {
    url: BASE_URL,
    title: 'ORIVANTA PROPERTY LTD | Professional Real Estate Advisory in Rwanda',
    description: 'Rwanda\'s trusted real estate advisory firm — property valuation, consultancy, management, brokerage, and investment advisory in Kigali.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'ORIVANTA PROPERTY LTD' }],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Quick intro strip — removed */}
      <ServicesSection />
      <WhyChoose />
      <ValuesSection />
      <ProcessSection />
      <MDSection />
      <Testimonials />
      <GalleryStrip />
      <CTASection />
    </>
  );
}
