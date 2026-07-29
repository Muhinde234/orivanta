import type { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';
import CTASection from '@/components/sections/CTASection';
import TeamContent from './TeamContent';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the professional team behind AXIOM Realty Consultant Ltd — experts in property valuation, real estate consultancy, investment advisory, and more.',
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
