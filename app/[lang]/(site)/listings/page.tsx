import type { Metadata } from 'next';
import { Lang } from '@/lib/locales';
import { translations } from '@/lib/translations';
import ListingsContent from './ListingsContent';
import { fetchPublishedListings } from '@/lib/listings';

const BASE_URL = 'https://www.orivantaproperty.rw';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  const tr = translations[lang];
  const url = `${BASE_URL}/${lang}/listings`;
  return {
    title: tr.meta_listings_title,
    description: tr.meta_listings_desc,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${tr.meta_listings_title} | ORIVANTA PROPERTY LTD`,
      description: tr.meta_listings_desc,
      images: [{ url: '/images/orivanta-01.png', width: 400, height: 400, alt: 'ORIVANTA PROPERTY Listings' }],
    },
  };
}

export default async function ListingsPage() {
  const listings = await fetchPublishedListings();
  return <ListingsContent listings={listings} />;
}
