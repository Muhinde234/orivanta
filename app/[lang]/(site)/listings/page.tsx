import type { Metadata } from 'next';
import { Lang } from '@/lib/locales';
import ListingsContent from './ListingsContent';
import { fetchPublishedListings } from '@/lib/listings';

const BASE_URL = 'https://www.orivantaproperty.rw';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  const url = `${BASE_URL}/${lang}/listings`;
  return {
    title: 'Property Listings',
    description:
      'Browse land, houses, apartments, commercial, and office properties for sale or rent across Rwanda, listed by ORIVANTA PROPERTY LTD.',
    alternates: { canonical: url },
    openGraph: {
      url,
      title: 'Property Listings | ORIVANTA PROPERTY LTD',
      description: 'Browse land, houses, apartments, commercial, and office properties for sale or rent across Rwanda.',
      images: [{ url: '/images/orivanta-01.png', width: 400, height: 400, alt: 'ORIVANTA PROPERTY Listings' }],
    },
  };
}

export default async function ListingsPage() {
  const listings = await fetchPublishedListings();
  return <ListingsContent listings={listings} />;
}
