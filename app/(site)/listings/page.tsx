import type { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';
import CTASection from '@/components/sections/CTASection';
import ListingsContent from './ListingsContent';
import { fetchPublishedListings } from '@/lib/listings';

const BASE_URL = 'https://www.orivantaproperty.rw';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Property Listings',
  description:
    'Browse land, houses, apartments, commercial, and office properties for sale or rent across Rwanda, listed by ORIVANTA PROPERTY LTD.',
  alternates: { canonical: `${BASE_URL}/listings` },
  openGraph: {
    url: `${BASE_URL}/listings`,
    title: 'Property Listings | ORIVANTA PROPERTY LTD',
    description: 'Browse land, houses, apartments, commercial, and office properties for sale or rent across Rwanda.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'ORIVANTA PROPERTY Listings' }],
  },
};

export default async function ListingsPage() {
  const listings = await fetchPublishedListings();

  return (
    <>
      <PageBanner
        title="Property Listings"
        subtitle="Browse available land, houses, apartments, and commercial properties for sale or rent across Rwanda."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Listings' }]}
      />

      <ListingsContent listings={listings} />

      <CTASection
        title="Can't Find What You're Looking For?"
        subtitle="Tell us what you need and our team will help you find the right property or list yours with us."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
