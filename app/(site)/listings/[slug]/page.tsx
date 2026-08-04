import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { fetchListingBySlug } from '@/lib/listings';
import ListingDetailContent from './ListingDetailContent';

export const revalidate = 60;

const BASE_URL = 'https://www.orivantaproperty.rw';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = await fetchListingBySlug(slug);
  if (!listing) return {};
  const description = listing.description.slice(0, 155);
  return {
    title: listing.title,
    description,
    alternates: { canonical: `${BASE_URL}/listings/${slug}` },
    openGraph: {
      url: `${BASE_URL}/listings/${slug}`,
      title: `${listing.title} | ORIVANTA PROPERTY LTD`,
      description,
      images: listing.cover_image ? [{ url: listing.cover_image, width: 1200, height: 630, alt: listing.title }] : undefined,
    },
  };
}

export default async function ListingDetailPage({ params }: Props) {
  const { slug } = await params;
  const listing = await fetchListingBySlug(slug);
  if (!listing) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: listing.title,
    description: listing.description,
    url: `${BASE_URL}/listings/${listing.slug}`,
    image: listing.cover_image ?? undefined,
    address: { '@type': 'PostalAddress', addressLocality: listing.location, addressCountry: 'RW' },
    offers: {
      '@type': 'Offer',
      price: listing.price ?? undefined,
      priceCurrency: listing.currency,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <Script
        id={`json-ld-listing-${listing.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      <ListingDetailContent listing={listing} />
    </>
  );
}
