'use client';
import { useState, useEffect, useCallback } from 'react';
import { getSupabase } from '@/lib/supabase';
import { Save, Lock, Eye, EyeOff, CheckCircle, AlertCircle, RefreshCw, Building2, Mail } from 'lucide-react';
import ListingsManager from '@/components/admin/ListingsManager';
import InquiriesManager from '@/components/admin/InquiriesManager';

// ─── Types ────────────────────────────────────────────────────────────────────
type Row = { key: string; value: string };

const SECTIONS: { label: string; fields: { key: string; label: string; multiline?: boolean }[] }[] = [
  {
    label: 'Hero Section',
    fields: [
      { key: 'hero_title', label: 'Main Title' },
      { key: 'hero_tagline', label: 'Tagline' },
      { key: 'hero_body', label: 'Body Text', multiline: true },
      { key: 'hero_cta_primary', label: 'Primary CTA Label' },
      { key: 'hero_cta_secondary', label: 'Secondary CTA Label' },
      { key: 'hero_image', label: 'Hero Background Image (e.g. /images/1.jpg)' },
    ],
  },
  {
    label: "MD's Message",
    fields: [
      { key: 'md_name', label: 'Full Name' },
      { key: 'md_role', label: 'Role / Title' },
      { key: 'md_quote', label: 'Quote (italic block)', multiline: true },
      { key: 'md_body', label: 'Second paragraph', multiline: true },
      { key: 'md_photo', label: 'Photo path (e.g. /images/PXL_20231128_151335702.PORTRAIT~2.jpg)' },
    ],
  },
  {
    label: 'About Page',
    fields: [
      { key: 'about_who_we_are', label: 'Who We Are (paragraph 1)', multiline: true },
      { key: 'about_who_we_are_2', label: 'Who We Are (paragraph 2)', multiline: true },
      { key: 'about_vision', label: 'Vision', multiline: true },
      { key: 'about_mission', label: 'Mission', multiline: true },
    ],
  },
  {
    label: 'Team Member',
    fields: [
      { key: 'team_name', label: 'Full Name' },
      { key: 'team_role', label: 'Role / Title' },
      { key: 'team_bio', label: 'Biography', multiline: true },
      { key: 'team_photo', label: 'Photo path (e.g. /images/2.jpg)' },
      { key: 'team_email', label: 'Email' },
      { key: 'team_linkedin', label: 'LinkedIn URL' },
    ],
  },
  {
    label: 'Contact & Brand',
    fields: [
      { key: 'brand_phone', label: 'Phone Number' },
      { key: 'brand_whatsapp', label: 'WhatsApp Number' },
      { key: 'brand_email', label: 'Email Address' },
      { key: 'brand_address', label: 'Address' },
      { key: 'brand_hours', label: 'Office Hours' },
      { key: 'brand_linkedin', label: 'LinkedIn URL' },
      { key: 'brand_facebook', label: 'Facebook URL' },
      { key: 'brand_instagram', label: 'Instagram URL' },
    ],
  },
  {
    label: 'Testimonials',
    fields: [
      { key: 'testimonial_1_name', label: 'Testimonial 1 — Name' },
      { key: 'testimonial_1_role', label: 'Testimonial 1 — Role' },
      { key: 'testimonial_1_quote', label: 'Testimonial 1 — Quote', multiline: true },
      { key: 'testimonial_2_name', label: 'Testimonial 2 — Name' },
      { key: 'testimonial_2_role', label: 'Testimonial 2 — Role' },
      { key: 'testimonial_2_quote', label: 'Testimonial 2 — Quote', multiline: true },
      { key: 'testimonial_3_name', label: 'Testimonial 3 — Name' },
      { key: 'testimonial_3_role', label: 'Testimonial 3 — Role' },
      { key: 'testimonial_3_quote', label: 'Testimonial 3 — Quote', multiline: true },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [pwError, setPwError] = useState('');

  const [data, setData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [mode, setMode] = useState<'content' | 'listings' | 'inquiries'>('content');

  const showToast = (msg: string, ok: boolean) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3000);
  };

  const load = useCallback(async () => {
    setLoading(true);
    const client = getSupabase();
    if (!client) { setLoading(false); return; }
    const { data: rows, error } = await client.from('cms_content').select('key, value');
    if (error) { showToast('Failed to load content: ' + error.message, false); }
    else {
      const map: Record<string, string> = {};
      (rows as Row[]).forEach(r => { map[r.key] = r.value; });
      setData(map);
    }
    setLoading(false);
  }, []);

  useEffect(() => { if (authed) load(); }, [authed, load]);

  const [loggingIn, setLoggingIn] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setPwError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw }),
      });
      if (res.ok) setAuthed(true);
      else setPwError('Incorrect password');
    } catch {
      setPwError('Could not reach the server. Please try again.');
    } finally {
      setLoggingIn(false);
    }
  };

  const saveSection = async (sectionIndex: number) => {
    const section = SECTIONS[sectionIndex];
    setSaving(section.label);
    const client = getSupabase();
    if (!client) { showToast('Supabase not available', false); setSaving(null); return; }
    const upserts = section.fields.map(f => ({ key: f.key, value: data[f.key] ?? '' }));
    const { error } = await client.from('cms_content').upsert(upserts, { onConflict: 'key' });
    if (error) showToast('Save failed: ' + error.message, false);
    else showToast(`"${section.label}" saved successfully!`, true);
    setSaving(null);
  };

  // ── Login screen ────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#10243B] flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-white rounded-sm shadow-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#C9A227] rounded-sm flex items-center justify-center">
              <Lock size={18} className="text-[#10243B]" />
            </div>
            <div>
              <div className="font-bold text-[#10243B] text-sm">ORIVANTA CMS</div>
              <div className="text-gray-400 text-xs">Content Management</div>
            </div>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                Admin Password
              </label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={pw}
                  onChange={e => { setPw(e.target.value); setPwError(''); }}
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] pr-10"
                  placeholder="Enter password"
                  autoFocus
                />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {pwError && <p className="text-red-500 text-xs mt-1">{pwError}</p>}
            </div>
            <button type="submit" disabled={loggingIn}
              className="w-full bg-[#C9A227] text-[#10243B] font-bold py-3 rounded-sm hover:bg-[#b8911f] transition-colors text-sm disabled:opacity-60">
              {loggingIn ? 'Signing In…' : 'Sign In'}
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-6">
            ORIVANTA PROPERTY LTD · Admin Panel
          </p>
        </div>
      </div>
    );
  }

  // ── CMS Dashboard ───────────────────────────────────────────────────────────
  const section = SECTIONS[activeSection];

  return (
    <div className="h-screen overflow-hidden bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="sticky top-0 h-screen w-64 bg-[#10243B] text-white flex flex-col flex-shrink-0 overflow-y-auto">
        <div className="px-6 py-6 border-b border-white/10">
          <div className="text-[#C9A227] font-bold text-sm tracking-wider uppercase">ORIVANTA CMS</div>
          <div className="text-white/40 text-xs mt-0.5">Content Management</div>
        </div>
        <nav className="flex-1 py-4">
          <button
            onClick={() => setMode('listings')}
            className={`w-full flex items-center gap-2.5 text-left px-6 py-3 text-sm transition-colors ${
              mode === 'listings'
                ? 'bg-[#C9A227]/15 text-[#C9A227] border-r-2 border-[#C9A227]'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Building2 size={15} /> Property Listings
          </button>
          <button
            onClick={() => setMode('inquiries')}
            className={`w-full flex items-center gap-2.5 text-left px-6 py-3 text-sm transition-colors ${
              mode === 'inquiries'
                ? 'bg-[#C9A227]/15 text-[#C9A227] border-r-2 border-[#C9A227]'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Mail size={15} /> Inquiries
          </button>
          <div className="mx-6 my-3 h-px bg-white/10" />
          <div className="px-6 pb-2 text-[10px] font-bold uppercase tracking-wider text-white/25">Site Content</div>
          {SECTIONS.map((s, i) => (
            <button
              key={i}
              onClick={() => { setMode('content'); setActiveSection(i); }}
              className={`w-full text-left px-6 py-3 text-sm transition-colors ${
                mode === 'content' && activeSection === i
                  ? 'bg-[#C9A227]/15 text-[#C9A227] border-r-2 border-[#C9A227]'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="px-6 py-4 border-t border-white/10">
          {mode === 'content' && (
            <button onClick={load} className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors">
              <RefreshCw size={12} /> Reload from DB
            </button>
          )}
          <button onClick={() => setAuthed(false)} className="mt-2 text-white/30 hover:text-red-400 text-xs transition-colors">
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0 h-screen overflow-y-auto p-5 lg:p-8">
        {mode === 'listings' ? (
          <ListingsManager />
        ) : mode === 'inquiries' ? (
          <InquiriesManager password={pw} />
        ) : (
          <>
        {/* Toast */}
        {toast && (
          <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-sm shadow-xl text-sm font-medium ${
            toast.ok ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}>
            {toast.ok ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
            {toast.msg}
          </div>
        )}

        <div className="max-w-3xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-bold text-[#10243B] text-xl">{section.label}</h1>
              <p className="text-gray-400 text-sm mt-0.5">Edit and save content for this section</p>
            </div>
            <button
              onClick={() => saveSection(activeSection)}
              disabled={!!saving}
              className="flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-6 py-3 rounded-sm hover:bg-[#b8911f] transition-colors text-sm disabled:opacity-60"
            >
              <Save size={15} />
              {saving === section.label ? 'Saving…' : 'Save Section'}
            </button>
          </div>

          {loading ? (
            <div className="text-gray-400 text-sm">Loading content…</div>
          ) : (
            <div className="space-y-5">
              {section.fields.map(field => (
                <div key={field.key} className="bg-white border border-gray-100 rounded-sm p-5">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {field.label}
                  </label>
                  <div className="text-[10px] text-gray-300 mb-2 font-mono">{field.key}</div>
                  {field.multiline ? (
                    <textarea
                      rows={4}
                      value={data[field.key] ?? ''}
                      onChange={e => setData(prev => ({ ...prev, [field.key]: e.target.value }))}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] resize-y"
                    />
                  ) : (
                    <input
                      type="text"
                      value={data[field.key] ?? ''}
                      onChange={e => setData(prev => ({ ...prev, [field.key]: e.target.value }))}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227]"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Image reference */}
          <div className="mt-8 bg-[#10243B] rounded-sm p-5">
            <div className="text-[#C9A227] text-xs font-bold uppercase tracking-wider mb-3">Available Images</div>
            <div className="grid grid-cols-3 gap-2">
              {['1','2','3','4','5','6','7','8','9','10','11'].map(n => (
                <div key={n} className="bg-white/5 rounded px-3 py-2 text-white/60 text-xs font-mono">
                  /images/{n}.jpg
                </div>
              ))}
              <div className="col-span-3 bg-white/5 rounded px-3 py-2 text-white/60 text-xs font-mono break-all">
                /images/PXL_20231128_151335702.PORTRAIT~2.jpg
              </div>
            </div>
          </div>
        </div>
          </>
        )}
      </main>
    </div>
  );
}
