import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (typeof window === 'undefined') return null; // never run on server
  if (_client) return _client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  _client = createClient(url, key);
  return _client;
}

let _serverClient: SupabaseClient | null = null;

// Safe to use in Server Components — NEXT_PUBLIC_* vars are the publishable
// (anon) key by design, so there's no secret being exposed here.
export function getSupabaseServer(): SupabaseClient | null {
  if (_serverClient) return _serverClient;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  _serverClient = createClient(url, key);
  return _serverClient;
}
