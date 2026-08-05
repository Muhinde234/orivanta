import { getSupabase } from './supabase';
import { translations, Lang } from './translations';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string | null;
  location: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
}

export interface InquiryInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  location?: string;
  message: string;
}

// ── Public submissions (client-side, anon key — insert-only by RLS) ─────────

export async function submitInquiry(input: InquiryInput, lang: Lang = 'en'): Promise<{ error: string | null }> {
  const client = getSupabase();
  if (!client) return { error: translations[lang].error_service_unavailable_contact };
  const { error } = await client.from('inquiries').insert(input);
  return { error: error?.message ?? null };
}

export async function subscribeNewsletter(email: string, lang: Lang = 'en'): Promise<{ error: string | null; alreadySubscribed?: boolean }> {
  const client = getSupabase();
  if (!client) return { error: translations[lang].error_service_unavailable_retry };
  const { error } = await client.from('newsletter_subscribers').insert({ email });
  if (error) {
    if (error.code === '23505') return { error: null, alreadySubscribed: true }; // unique_violation
    return { error: error.message };
  }
  return { error: null };
}

// ── Admin reads (via protected server routes — service role, not anon key) ──

async function adminFetch(path: string, password: string, init?: RequestInit) {
  const res = await fetch(path, {
    ...init,
    headers: { ...init?.headers, 'x-admin-password': password, 'Content-Type': 'application/json' },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) return { data: null, error: body.error ?? `Request failed (${res.status})` };
  return { data: body.data ?? body, error: null };
}

export async function fetchInquiriesAdmin(password: string): Promise<{ data: Inquiry[]; error: string | null }> {
  const { data, error } = await adminFetch('/api/admin/inquiries', password);
  return { data: (data as Inquiry[]) ?? [], error };
}

export async function markInquiryRead(id: string, isRead: boolean, password: string): Promise<{ error: string | null }> {
  const { error } = await adminFetch(`/api/admin/inquiries?id=${id}`, password, {
    method: 'PATCH',
    body: JSON.stringify({ is_read: isRead }),
  });
  return { error };
}

export async function deleteInquiry(id: string, password: string): Promise<{ error: string | null }> {
  const { error } = await adminFetch(`/api/admin/inquiries?id=${id}`, password, { method: 'DELETE' });
  return { error };
}

export async function fetchNewsletterAdmin(password: string): Promise<{ data: NewsletterSubscriber[]; error: string | null }> {
  const { data, error } = await adminFetch('/api/admin/newsletter', password);
  return { data: (data as NewsletterSubscriber[]) ?? [], error };
}

export async function deleteNewsletterSubscriber(id: string, password: string): Promise<{ error: string | null }> {
  const { error } = await adminFetch(`/api/admin/newsletter?id=${id}`, password, { method: 'DELETE' });
  return { error };
}
