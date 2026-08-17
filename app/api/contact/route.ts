import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getSupabaseAdmin } from '@/lib/supabase-admin';
import { BRAND } from '@/lib/data';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Missing RESEND_API_KEY');
    return NextResponse.json({ error: 'Mail service not configured.' }, { status: 500 });
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || 'ORIVANTA PROPERTY LTD <onboarding@resend.dev>';
  const leadsRecipient = process.env.LEADS_RECIPIENT_EMAIL || BRAND.email;

  const resend = new Resend(apiKey);
  const body = await req.json().catch(() => null);

  if (!body) return NextResponse.json({ error: 'Invalid request' }, { status: 400 });

  try {
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim().toLowerCase();
    const phone = String(body.phone ?? '').trim();
    const company = String(body.company ?? '').trim();
    const service = String(body.service ?? '').trim();
    const location = String(body.location ?? '').trim();
    const message = String(body.message ?? '').trim();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'name, email, phone and message are required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company);
    const safeService = escapeHtml(service || 'Not specified');
    const safeLocation = escapeHtml(location);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    const client = getSupabaseAdmin();
    if (client) {
      const { error } = await client.from('inquiries').insert({
        name, email, phone, company: company || null, service: service || null,
        location: location || null, message,
      });
      if (error) console.error('Supabase insert error:', error.message);
    }

    const { error: leadEmailError } = await resend.emails.send({
      from: fromEmail,
      to: [leadsRecipient],
      subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; color: #10243B;">
          <h2>New Website Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          ${company ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ''}
          <p><strong>Service:</strong> ${safeService}</p>
          ${location ? `<p><strong>Location:</strong> ${safeLocation}</p>` : ''}
          <p><strong>Message:</strong></p>
          <div style="border-left: 4px solid #C9A227; padding-left: 15px; margin: 20px 0;">
            ${safeMessage}
          </div>
        </div>
      `,
    });
    if (leadEmailError) console.error('Resend lead-notification error:', leadEmailError);

    const { error: replyEmailError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: `Thank you for contacting ${BRAND.name}`,
      html: `
        <div style="font-family: serif; color: #10243B; padding: 20px;">
          <h1 style="color: #10243B;">Hello ${safeName},</h1>
          <p>Thank you for reaching out to <strong>${BRAND.name}</strong>.</p>
          <p>We have received your inquiry regarding <strong>${safeService}</strong>. Our team will get back to you within 24 hours.</p>
          <br />
          <p>Best Regards,</p>
          <p><strong>The ${BRAND.name} Team</strong></p>
          <hr style="border: none; border-top: 1px solid #C9A227; margin-top: 20px;" />
          <p style="font-size: 12px; color: #999;">${BRAND.address}</p>
        </div>
      `,
    });
    if (replyEmailError) console.error('Resend auto-reply error:', replyEmailError);

    // The lead is saved to Supabase regardless — email delivery is a
    // best-effort notification, not the source of truth for the admin dashboard.
    if (leadEmailError && replyEmailError) {
      return NextResponse.json({ error: 'Inquiry saved, but the notification email failed to send.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
