import { NextRequest, NextResponse } from 'next/server';
import { isValidAdminPassword } from '@/lib/supabase-admin';

export async function POST(req: NextRequest) {
  const { password } = await req.json().catch(() => ({ password: null }));
  if (isValidAdminPassword(password)) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ ok: false, error: 'Incorrect password' }, { status: 401 });
}
