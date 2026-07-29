import type { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';
import ValuesSection from '@/components/sections/ValuesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import AboutContent from './AboutContent';

const BASE_URL = 'https://www.axiomrealty.rw';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about AXIOM Realty Consultant Ltd — our story, vision, mission, values, and the professional team behind Rwanda\'s leading real estate advisory firm in Kigali.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    url: `${BASE_URL}/about`,
    title: 'About AXIOM Realty Consultant Ltd | Rwanda Real Estate Advisory',
    description: 'Our story, vision, mission, and the professional team behind Rwanda\'s leading real estate advisory firm.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'About AXIOM Realty' }],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About AXIOM Realty Consultant Ltd"
        subtitle="A professional real estate advisory company committed to delivering reliable, innovative, and client-focused property solutions."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />
      <AboutContent />
      <ValuesSection />
      <ProcessSection />
      <CTASection
        title="Ready to Work With AXIOM?"
        subtitle="Our experienced professionals are ready to discuss your property needs and provide solutions designed around your objectives."
        primaryLabel="Contact Us Today"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
