'use client';
import { useEffect, useState, useCallback } from 'react';
import {
  Plus, Pencil, Trash2, X, Save, ArrowLeft, CheckCircle, AlertCircle, RefreshCw, Star,
} from 'lucide-react';
import {
  Listing, ListingInput, PROPERTY_TYPES, PURPOSES, PropertyType, Purpose, ListingStatus,
  fetchAllListingsAdmin, createListing, updateListing, deleteListing, slugify, formatPrice,
} from '@/lib/listings';

const emptyForm: ListingInput = {
  title: '',
  slug: '',
  property_type: 'house',
  purpose: 'sale',
  price: null,
  price_period: null,
  currency: 'RWF',
  location: '',
  bedrooms: null,
  bathrooms: null,
  size_value: null,
  size_unit: 'sqm',
  description: '',
  cover_image: '',
  images: [],
  featured: false,
  status: 'published',
};

export default function ListingsManager() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'list' | 'form'>('list');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ListingInput>(emptyForm);
  const [imagesText, setImagesText] = useState('');
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<Listing | null>(null);

  const showToast = (msg: string, ok: boolean) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3500);
  };

  const [loadError, setLoadError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await fetchAllListingsAdmin();
    setListings(data);
    setLoadError(error);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const startCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setImagesText('');
    setView('form');
  };

  const startEdit = (listing: Listing) => {
    setEditingId(listing.id);
    setForm({
      title: listing.title,
      slug: listing.slug,
      property_type: listing.property_type,
      purpose: listing.purpose,
      price: listing.price,
      price_period: listing.price_period,
      currency: listing.currency,
      location: listing.location,
      bedrooms: listing.bedrooms,
      bathrooms: listing.bathrooms,
      size_value: listing.size_value,
      size_unit: listing.size_unit,
      description: listing.description,
      cover_image: listing.cover_image,
      images: listing.images,
      featured: listing.featured,
      status: listing.status,
    });
    setImagesText(listing.images.join('\n'));
    setView('form');
  };

  const uniqueSlug = (base: string) => {
    let candidate = base;
    let n = 2;
    const taken = new Set(listings.filter(l => l.id !== editingId).map(l => l.slug));
    while (taken.has(candidate)) {
      candidate = `${base}-${n}`;
      n++;
    }
    return candidate;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.location.trim()) {
      showToast('Title and location are required', false);
      return;
    }
    setSaving(true);

    const images = imagesText.split('\n').map(s => s.trim()).filter(Boolean);
    const payload: ListingInput = {
      ...form,
      images,
      cover_image: form.cover_image?.trim() || images[0] || null,
      slug: editingId ? form.slug : uniqueSlug(slugify(form.title)),
    };

    if (editingId) {
      const { error } = await updateListing(editingId, payload);
      if (error) showToast('Save failed: ' + error, false);
      else { showToast('Listing updated', true); setView('list'); load(); }
    } else {
      const { error } = await createListing(payload);
      if (error) showToast('Save failed: ' + error, false);
      else { showToast('Listing created', true); setView('list'); load(); }
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!confirmDelete) return;
    const { error } = await deleteListing(confirmDelete.id);
    if (error) showToast('Delete failed: ' + error, false);
    else { showToast('Listing deleted', true); load(); }
    setConfirmDelete(null);
  };

  const inputCls = 'w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227]';
  const labelCls = 'block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2';

  return (
    <div className="max-w-5xl">
      {toast && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-sm shadow-xl text-sm font-medium ${
          toast.ok ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        }`}>
          {toast.ok ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {toast.msg}
        </div>
      )}

      {confirmDelete && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white rounded-sm shadow-2xl p-6 max-w-sm w-full">
            <h3 className="font-bold text-[#10243B] mb-2">Delete this listing?</h3>
            <p className="text-gray-500 text-sm mb-6">
              &ldquo;{confirmDelete.title}&rdquo; will be permanently removed. This can&rsquo;t be undone.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(null)}
                className="flex-1 border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-sm hover:bg-gray-50 transition-colors text-sm">
                Cancel
              </button>
              <button onClick={handleDelete}
                className="flex-1 bg-red-600 text-white font-semibold py-2.5 rounded-sm hover:bg-red-700 transition-colors text-sm">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {view === 'list' ? (
        <>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-bold text-[#10243B] text-xl">Property Listings</h1>
              <p className="text-gray-400 text-sm mt-0.5">Create, edit, and remove listings shown on the public site</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={load} className="flex items-center gap-2 text-gray-400 hover:text-[#10243B] text-xs transition-colors">
                <RefreshCw size={13} /> Reload
              </button>
              <button onClick={startCreate}
                className="flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-5 py-3 rounded-sm hover:bg-[#b8911f] transition-colors text-sm">
                <Plus size={15} /> Add Listing
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-gray-400 text-sm">Loading listings…</div>
          ) : loadError ? (
            <div className="border border-red-200 bg-red-50 rounded-sm p-6">
              <div className="flex items-center gap-2 text-red-700 font-semibold text-sm mb-2">
                <AlertCircle size={16} /> Couldn&rsquo;t load listings
              </div>
              <p className="text-red-600 text-sm mb-1">{loadError}</p>
              <p className="text-red-500/80 text-xs">
                If this says the &ldquo;listings&rdquo; relation doesn&rsquo;t exist, run the SQL migration in
                <code className="mx-1 px-1.5 py-0.5 bg-red-100 rounded font-mono">supabase-schema.sql</code>
                against your Supabase project first.
              </p>
            </div>
          ) : listings.length === 0 ? (
            <div className="border-2 border-dashed border-gray-200 rounded-sm p-12 text-center">
              <p className="text-gray-400 text-sm mb-4">No listings yet.</p>
              <button onClick={startCreate}
                className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-5 py-3 rounded-sm hover:bg-[#b8911f] transition-colors text-sm">
                <Plus size={15} /> Add Your First Listing
              </button>
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F8FAFC] text-left text-xs text-gray-400 uppercase tracking-wider">
                    <th className="px-5 py-3 font-semibold">Title</th>
                    <th className="px-5 py-3 font-semibold">Type</th>
                    <th className="px-5 py-3 font-semibold">Purpose</th>
                    <th className="px-5 py-3 font-semibold">Price</th>
                    <th className="px-5 py-3 font-semibold">Status</th>
                    <th className="px-5 py-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {listings.map(listing => (
                    <tr key={listing.id} className="hover:bg-[#F8FAFC]/60 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          {listing.featured && <Star size={13} className="text-[#C9A227] fill-[#C9A227] flex-shrink-0" />}
                          <span className="font-medium text-[#10243B]">{listing.title}</span>
                        </div>
                        <div className="text-gray-400 text-xs mt-0.5">{listing.location}</div>
                      </td>
                      <td className="px-5 py-4 text-gray-600 capitalize">{listing.property_type}</td>
                      <td className="px-5 py-4 text-gray-600 capitalize">{listing.purpose}</td>
                      <td className="px-5 py-4 text-gray-600">{formatPrice(listing)}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          listing.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {listing.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => startEdit(listing)} aria-label="Edit"
                            className="w-8 h-8 rounded-sm bg-[#F8FAFC] hover:bg-[#10243B] hover:text-white flex items-center justify-center text-gray-500 transition-colors">
                            <Pencil size={14} />
                          </button>
                          <button onClick={() => setConfirmDelete(listing)} aria-label="Delete"
                            className="w-8 h-8 rounded-sm bg-[#F8FAFC] hover:bg-red-600 hover:text-white flex items-center justify-center text-gray-500 transition-colors">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex items-center justify-between mb-8">
            <div>
              <button onClick={() => setView('list')} className="flex items-center gap-2 text-gray-400 hover:text-[#10243B] text-xs transition-colors mb-2">
                <ArrowLeft size={13} /> Back to Listings
              </button>
              <h1 className="font-bold text-[#10243B] text-xl">{editingId ? 'Edit Listing' : 'New Listing'}</h1>
            </div>
            <button onClick={handleSubmit} disabled={saving} form="listing-form"
              className="flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-6 py-3 rounded-sm hover:bg-[#b8911f] transition-colors text-sm disabled:opacity-60">
              <Save size={15} /> {saving ? 'Saving…' : 'Save Listing'}
            </button>
          </div>

          <form id="listing-form" onSubmit={handleSubmit} className="space-y-5">
            <div className="bg-white border border-gray-100 rounded-sm p-5">
              <label className={labelCls}>Title *</label>
              <input type="text" required value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                className={inputCls} placeholder="e.g. Modern 3-Bedroom House in Kibagabaga" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white border border-gray-100 rounded-sm p-5">
                <label className={labelCls}>Property Type *</label>
                <select value={form.property_type}
                  onChange={e => setForm({ ...form, property_type: e.target.value as PropertyType })}
                  className={inputCls}>
                  {PROPERTY_TYPES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
              </div>
              <div className="bg-white border border-gray-100 rounded-sm p-5">
                <label className={labelCls}>Purpose *</label>
                <select value={form.purpose}
                  onChange={e => setForm({ ...form, purpose: e.target.value as Purpose })}
                  className={inputCls}>
                  {PURPOSES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-sm p-5">
              <label className={labelCls}>Location *</label>
              <input type="text" required value={form.location}
                onChange={e => setForm({ ...form, location: e.target.value })}
                className={inputCls} placeholder="e.g. Kibagabaga, Kigali" />
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-white border border-gray-100 rounded-sm p-5">
                <label className={labelCls}>Price ({form.currency})</label>
                <input type="number" min="0" value={form.price ?? ''}
                  onChange={e => setForm({ ...form, price: e.target.value === '' ? null : Number(e.target.value) })}
                  className={inputCls} placeholder="e.g. 45000000" />
              </div>
              <div className="bg-white border border-gray-100 rounded-sm p-5">
                <label className={labelCls}>Price Period {form.purpose === 'rent' ? '(e.g. month)' : '(rent only)'}</label>
                <input type="text" value={form.price_period ?? ''}
                  onChange={e => setForm({ ...form, price_period: e.target.value || null })}
                  className={inputCls} placeholder="month" disabled={form.purpose !== 'rent'} />
              </div>
              <div className="bg-white border border-gray-100 rounded-sm p-5">
                <label className={labelCls}>Currency</label>
                <input type="text" value={form.currency}
                  onChange={e => setForm({ ...form, currency: e.target.value })}
                  className={inputCls} placeholder="RWF" />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-white border border-gray-100 rounded-sm p-5">
                <label className={labelCls}>Bedrooms</label>
                <input type="number" min="0" value={form.bedrooms ?? ''}
                  onChange={e => setForm({ ...form, bedrooms: e.target.value === '' ? null : Number(e.target.value) })}
                  className={inputCls} />
              </div>
              <div className="bg-white border border-gray-100 rounded-sm p-5">
                <label className={labelCls}>Bathrooms</label>
                <input type="number" min="0" value={form.bathrooms ?? ''}
                  onChange={e => setForm({ ...form, bathrooms: e.target.value === '' ? null : Number(e.target.value) })}
                  className={inputCls} />
              </div>
              <div className="bg-white border border-gray-100 rounded-sm p-5">
                <label className={labelCls}>Size</label>
                <div className="flex gap-2">
                  <input type="number" min="0" value={form.size_value ?? ''}
                    onChange={e => setForm({ ...form, size_value: e.target.value === '' ? null : Number(e.target.value) })}
                    className={inputCls} placeholder="500" />
                  <input type="text" value={form.size_unit ?? ''}
                    onChange={e => setForm({ ...form, size_unit: e.target.value })}
                    className={`${inputCls} w-24 flex-shrink-0`} placeholder="sqm" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-sm p-5">
              <label className={labelCls}>Description</label>
              <textarea rows={5} value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                className={`${inputCls} resize-y`} placeholder="Describe the property..." />
            </div>

            <div className="bg-white border border-gray-100 rounded-sm p-5">
              <label className={labelCls}>Cover Image URL (leave blank to use first image below)</label>
              <input type="text" value={form.cover_image ?? ''}
                onChange={e => setForm({ ...form, cover_image: e.target.value })}
                className={inputCls} placeholder="/images/1.jpg or https://..." />
            </div>

            <div className="bg-white border border-gray-100 rounded-sm p-5">
              <label className={labelCls}>Gallery Images (one URL per line)</label>
              <textarea rows={4} value={imagesText}
                onChange={e => setImagesText(e.target.value)}
                className={`${inputCls} resize-y font-mono text-xs`} placeholder={'/images/1.jpg\n/images/2.jpg'} />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white border border-gray-100 rounded-sm p-5">
                <label className={labelCls}>Status</label>
                <select value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value as ListingStatus })}
                  className={inputCls}>
                  <option value="published">Published (visible on site)</option>
                  <option value="draft">Draft (hidden from site)</option>
                </select>
              </div>
              <div className="bg-white border border-gray-100 rounded-sm p-5 flex items-center">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.featured}
                    onChange={e => setForm({ ...form, featured: e.target.checked })}
                    className="w-4 h-4 accent-[#C9A227]" />
                  <span className="text-sm text-gray-700 font-medium">Featured listing</span>
                </label>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
