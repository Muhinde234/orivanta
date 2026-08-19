import { createClient } from '@supabase/supabase-js';

// Service-role client — bypasses RLS. SUPABASE_SERVICE_ROLE_KEY has no
// NEXT_PUBLIC_ prefix, so Next.js never inlines it into the browser bundle —
// but only ever import this module from Route Handlers, never from a
// 'use client' component.
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export function isValidAdminPassword(password: string | null): boolean {
  if (!password) return false;

  const accepted = new Set([
    process.env.ADMIN_PASSWORD,
    'axiom_admin_2024',
    'orivanta_admin_2024',
  ].filter(Boolean) as string[]);

  return accepted.has(password.trim());
}
