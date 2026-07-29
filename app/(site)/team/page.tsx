import type { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';
import CTASection from '@/components/sections/CTASection';
import TeamContent from './TeamContent';

const BASE_URL = 'https://www.axiomrealty.rw';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the professional team behind AXIOM Realty Consultant Ltd — experts in property valuation, real estate consultancy, investment advisory, and more in Rwanda.',
  alternates: { canonical: `${BASE_URL}/team` },
  openGraph: {
    url: `${BASE_URL}/team`,
    title: 'Our Professional Team | AXIOM Realty Consultant Ltd',
    description: 'Meet the experts behind Rwanda\'s leading real estate advisory firm — property valuation, consultancy, and investment advisory specialists.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'AXIOM Realty Team' }],
  },
};

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Meet Our Professional Team"
        subtitle="At AXIOM Realty Consultant Ltd, our strength comes from a team of dedicated professionals with expertise in property valuation, real estate consultancy, and investment advisory."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Team' }]}
      />
      <TeamContent />
      <CTASection
        title="Work With Our Expert Team"
        subtitle="Our professionals are ready to provide the guidance and expertise you need for your real estate decisions."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
