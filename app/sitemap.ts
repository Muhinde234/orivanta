import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/data';
import { fetchPublishedListings } from '@/lib/listings';
import { LOCALES } from '@/lib/locales';

const BASE_URL = 'https://www.orivantaproperty.rw';

const STATIC_PATHS: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/listings', changeFrequency: 'daily', priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const listings = await fetchPublishedListings();

  const routes: MetadataRoute.Sitemap = LOCALES.flatMap((locale) => [
    ...STATIC_PATHS.map(({ path, changeFrequency, priority }) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...SERVICES.map((s) => ({
      url: `${BASE_URL}/${locale}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...listings.map((l) => ({
      url: `${BASE_URL}/${locale}/listings/${l.slug}`,
      lastModified: new Date(l.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    })),
  ]);

  return routes;
}
