import type { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with AXIOM Realty Consultant Ltd for professional real estate advisory services. Request a consultation, ask questions, or visit our office in Kigali, Rwanda.',
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact AXIOM Realty Consultant Ltd"
        subtitle="We are ready to assist you with professional real estate solutions tailored to your needs. Reach out to our team today."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
      />
      <ContactContent />
    </>
  );
}
