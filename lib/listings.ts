import { getSupabase, getSupabaseServer } from './supabase';

export type PropertyType = 'land' | 'house' | 'apartment' | 'commercial' | 'office';
export type Purpose = 'sale' | 'rent';
export type ListingStatus = 'published' | 'draft';

export interface Listing {
  id: string;
  title: string;
  slug: string;
  property_type: PropertyType;
  purpose: Purpose;
  price: number | null;
  price_period: string | null;
  currency: string;
  location: string;
  bedrooms: number | null;
  bathrooms: number | null;
  size_value: number | null;
  size_unit: string | null;
  description: string;
  cover_image: string | null;
  images: string[];
  featured: boolean;
  status: ListingStatus;
  created_at: string;
  updated_at: string;
}

export type ListingInput = Omit<Listing, 'id' | 'created_at' | 'updated_at'>;

export const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: 'land', label: 'Land' },
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'office', label: 'Office' },
];

export const PURPOSES: { value: Purpose; label: string }[] = [
  { value: 'sale', label: 'For Sale' },
  { value: 'rent', label: 'For Rent' },
];

export function propertyTypeLabel(value: string): string {
  return PROPERTY_TYPES.find(p => p.value === value)?.label ?? value;
}

export function purposeLabel(value: string): string {
  return PURPOSES.find(p => p.value === value)?.label ?? value;
}

export function formatPrice(listing: Pick<Listing, 'price' | 'price_period' | 'currency' | 'purpose'>): string {
  if (listing.price == null) return 'Price on request';
  const formatted = `${listing.currency} ${listing.price.toLocaleString()}`;
  if (listing.purpose === 'rent' && listing.price_period) return `${formatted} / ${listing.price_period}`;
  return formatted;
}

export function formatSize(listing: Pick<Listing, 'size_value' | 'size_unit'>): string | null {
  if (listing.size_value == null) return null;
  return `${listing.size_value.toLocaleString()} ${listing.size_unit ?? 'sqm'}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// ── Public reads (server-safe; used from Server Components) ─────────────────

export async function fetchPublishedListings(filters?: { propertyType?: PropertyType; purpose?: Purpose }): Promise<Listing[]> {
  const client = getSupabaseServer();
  if (!client) return [];
  let query = client.from('listings').select('*').eq('status', 'published');
  if (filters?.propertyType) query = query.eq('property_type', filters.propertyType);
  if (filters?.purpose) query = query.eq('purpose', filters.purpose);
  const { data, error } = await query.order('featured', { ascending: false }).order('created_at', { ascending: false });
  if (error || !data) return [];
  return data as Listing[];
}

export async function fetchListingBySlug(slug: string): Promise<Listing | null> {
  const client = getSupabaseServer();
  if (!client) return null;
  const { data, error } = await client.from('listings').select('*').eq('slug', slug).eq('status', 'published').maybeSingle();
  if (error || !data) return null;
  return data as Listing;
}

// ── Admin reads/writes (client-side only, used from the /admin dashboard) ───

export async function fetchAllListingsAdmin(): Promise<{ data: Listing[]; error: string | null }> {
  const client = getSupabase();
  if (!client) return { data: [], error: 'Supabase is not configured (missing NEXT_PUBLIC_SUPABASE_URL / KEY).' };
  const { data, error } = await client.from('listings').select('*').order('created_at', { ascending: false });
  if (error) return { data: [], error: error.message };
  return { data: (data as Listing[]) ?? [], error: null };
}

export async function createListing(input: ListingInput): Promise<{ data: Listing | null; error: string | null }> {
  const client = getSupabase();
  if (!client) return { data: null, error: 'Supabase is not configured' };
  const { data, error } = await client.from('listings').insert(input).select().single();
  if (error) return { data: null, error: error.message };
  return { data: data as Listing, error: null };
}

export async function updateListing(id: string, input: Partial<ListingInput>): Promise<{ data: Listing | null; error: string | null }> {
  const client = getSupabase();
  if (!client) return { data: null, error: 'Supabase is not configured' };
  const { data, error } = await client.from('listings').update({ ...input, updated_at: new Date().toISOString() }).eq('id', id).select().single();
  if (error) return { data: null, error: error.message };
  return { data: data as Listing, error: null };
}

export async function deleteListing(id: string): Promise<{ error: string | null }> {
  const client = getSupabase();
  if (!client) return { error: 'Supabase is not configured' };
  const { error } = await client.from('listings').delete().eq('id', id);
  return { error: error?.message ?? null };
}
