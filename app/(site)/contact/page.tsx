import type { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';
import ContactContent from './ContactContent';

const BASE_URL = 'https://www.orivantaproperty.rw';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with ORIVANTA PROPERTY LTD for professional real estate advisory services in Rwanda. Request a consultation, ask questions, or visit our office in Kigali.',
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    url: `${BASE_URL}/contact`,
    title: 'Contact ORIVANTA PROPERTY LTD | Kigali, Rwanda',
    description: 'Reach out to our professional team for real estate consultancy, property valuation, and advisory services in Rwanda.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Contact ORIVANTA PROPERTY' }],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact ORIVANTA PROPERTY LTD"
        subtitle="We are ready to assist you with professional real estate solutions tailored to your needs. Reach out to our team today."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
      />
      <ContactContent />
    </>
  );
}
