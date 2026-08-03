import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin, isValidAdminPassword } from '@/lib/supabase-admin';

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

export async function GET(req: NextRequest) {
  if (!isValidAdminPassword(req.headers.get('x-admin-password'))) return unauthorized();
  const client = getSupabaseAdmin();
  if (!client) return NextResponse.json({ error: 'Supabase service role not configured' }, { status: 500 });

  const { data, error } = await client.from('newsletter_subscribers').select('*').order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

export async function DELETE(req: NextRequest) {
  if (!isValidAdminPassword(req.headers.get('x-admin-password'))) return unauthorized();
  const client = getSupabaseAdmin();
  if (!client) return NextResponse.json({ error: 'Supabase service role not configured' }, { status: 500 });

  const id = req.nextUrl.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  const { error } = await client.from('newsletter_subscribers').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
