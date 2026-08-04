import type { Metadata } from 'next';
import { Lang } from '@/lib/locales';
import PageBanner from '@/components/ui/PageBanner';
import ValuesSection from '@/components/sections/ValuesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import AboutContent from './AboutContent';

const BASE_URL = 'https://www.orivantaproperty.rw';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  const url = `${BASE_URL}/${lang}/about`;
  return {
    title: 'About Us',
    description:
      'Learn about ORIVANTA PROPERTY LTD — our story, vision, mission, values, and the professional team behind Rwanda\'s leading real estate advisory firm in Kigali.',
    alternates: { canonical: url },
    openGraph: {
      url,
      title: 'About ORIVANTA PROPERTY LTD | Rwanda Real Estate Advisory',
      description: 'Our story, vision, mission, and the professional team behind Rwanda\'s leading real estate advisory firm.',
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'About ORIVANTA PROPERTY' }],
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About ORIVANTA PROPERTY LTD"
        subtitle="A professional real estate advisory company committed to delivering reliable, innovative, and client-focused property solutions."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />
      <AboutContent />
      <ValuesSection />
      <ProcessSection />
      <CTASection
        title="Ready to Work With ORIVANTA?"
        subtitle="Our experienced professionals are ready to discuss your property needs and provide solutions designed around your objectives."
        primaryLabel="Contact Us Today"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
