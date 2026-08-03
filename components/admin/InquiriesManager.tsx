'use client';
import { useEffect, useState, useCallback } from 'react';
import { Mail, MailOpen, Trash2, RefreshCw, CheckCircle, AlertCircle, Users } from 'lucide-react';
import {
  Inquiry, NewsletterSubscriber,
  fetchInquiriesAdmin, markInquiryRead, deleteInquiry,
  fetchNewsletterAdmin, deleteNewsletterSubscriber,
} from '@/lib/inquiries';

export default function InquiriesManager({ password }: { password: string }) {
  const [tab, setTab] = useState<'inquiries' | 'newsletter'>('inquiries');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const showToast = (msg: string, ok: boolean) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3500);
  };

  const load = useCallback(async () => {
    setLoading(true);
    if (tab === 'inquiries') {
      const { data, error } = await fetchInquiriesAdmin(password);
      setInquiries(data);
      setLoadError(error);
    } else {
      const { data, error } = await fetchNewsletterAdmin(password);
      setSubscribers(data);
      setLoadError(error);
    }
    setLoading(false);
  }, [tab, password]);

  useEffect(() => { load(); }, [load]);

  const toggleRead = async (inquiry: Inquiry) => {
    const { error } = await markInquiryRead(inquiry.id, !inquiry.is_read, password);
    if (error) showToast('Failed: ' + error, false);
    else setInquiries(prev => prev.map(i => i.id === inquiry.id ? { ...i, is_read: !i.is_read } : i));
  };

  const removeInquiry = async (id: string) => {
    const { error } = await deleteInquiry(id, password);
    if (error) showToast('Delete failed: ' + error, false);
    else { showToast('Inquiry deleted', true); setInquiries(prev => prev.filter(i => i.id !== id)); }
  };

  const removeSubscriber = async (id: string) => {
    const { error } = await deleteNewsletterSubscriber(id, password);
    if (error) showToast('Delete failed: ' + error, false);
    else { showToast('Subscriber removed', true); setSubscribers(prev => prev.filter(s => s.id !== id)); }
  };

  const unreadCount = inquiries.filter(i => !i.is_read).length;

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

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-bold text-[#10243B] text-xl">Inquiries</h1>
          <p className="text-gray-400 text-sm mt-0.5">Contact form submissions and newsletter subscribers</p>
        </div>
        <button onClick={load} className="flex items-center gap-2 text-gray-400 hover:text-[#10243B] text-xs transition-colors">
          <RefreshCw size={13} /> Reload
        </button>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setTab('inquiries')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
            tab === 'inquiries' ? 'bg-[#10243B] text-white' : 'bg-[#F8FAFC] text-gray-500 hover:bg-gray-100'
          }`}
        >
          <Mail size={13} /> Messages {unreadCount > 0 && `(${unreadCount})`}
        </button>
        <button
          onClick={() => setTab('newsletter')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
            tab === 'newsletter' ? 'bg-[#10243B] text-white' : 'bg-[#F8FAFC] text-gray-500 hover:bg-gray-100'
          }`}
        >
          <Users size={13} /> Newsletter
        </button>
      </div>

      {loading ? (
        <div className="text-gray-400 text-sm">Loading…</div>
      ) : loadError ? (
        <div className="border border-red-200 bg-red-50 rounded-sm p-6">
          <div className="flex items-center gap-2 text-red-700 font-semibold text-sm mb-2">
            <AlertCircle size={16} /> Couldn&rsquo;t load data
          </div>
          <p className="text-red-600 text-sm mb-1">{loadError}</p>
          <p className="text-red-500/80 text-xs">
            Make sure you&rsquo;ve run the SQL migration in <code className="mx-1 px-1.5 py-0.5 bg-red-100 rounded font-mono">supabase-schema.sql</code>
            and set <code className="mx-1 px-1.5 py-0.5 bg-red-100 rounded font-mono">SUPABASE_SERVICE_ROLE_KEY</code> in your environment.
          </p>
        </div>
      ) : tab === 'inquiries' ? (
        inquiries.length === 0 ? (
          <div className="border-2 border-dashed border-gray-200 rounded-sm p-12 text-center text-gray-400 text-sm">
            No inquiries yet.
          </div>
        ) : (
          <div className="space-y-3">
            {inquiries.map(inquiry => (
              <div key={inquiry.id} className={`bg-white border rounded-sm overflow-hidden ${inquiry.is_read ? 'border-gray-100' : 'border-[#C9A227]/40'}`}>
                <button
                  onClick={() => setExpanded(expanded === inquiry.id ? null : inquiry.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#F8FAFC]/60 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {!inquiry.is_read && <span className="w-2 h-2 rounded-full bg-[#C9A227] flex-shrink-0" />}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#10243B] text-sm">{inquiry.name}</span>
                        {inquiry.service && <span className="text-[11px] text-gray-400 bg-[#F8FAFC] px-2 py-0.5 rounded-full">{inquiry.service}</span>}
                      </div>
                      <div className="text-gray-400 text-xs truncate">{inquiry.email} {inquiry.phone && `· ${inquiry.phone}`}</div>
                    </div>
                  </div>
                  <span className="text-gray-300 text-xs flex-shrink-0">
                    {new Date(inquiry.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </button>
                {expanded === inquiry.id && (
                  <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                    {inquiry.location && <p className="text-gray-500 text-xs mb-2"><span className="font-semibold text-gray-600">Location:</span> {inquiry.location}</p>}
                    {inquiry.company && <p className="text-gray-500 text-xs mb-2"><span className="font-semibold text-gray-600">Company:</span> {inquiry.company}</p>}
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-4">{inquiry.message}</p>
                    <div className="flex items-center gap-2">
                      <button onClick={() => toggleRead(inquiry)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#10243B] bg-[#F8FAFC] px-3 py-2 rounded-sm transition-colors">
                        {inquiry.is_read ? <Mail size={13} /> : <MailOpen size={13} />}
                        {inquiry.is_read ? 'Mark unread' : 'Mark read'}
                      </button>
                      <a href={`mailto:${inquiry.email}`}
                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#10243B] bg-[#F8FAFC] px-3 py-2 rounded-sm transition-colors">
                        <Mail size={13} /> Reply by Email
                      </a>
                      <button onClick={() => removeInquiry(inquiry.id)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-white hover:bg-red-600 bg-[#F8FAFC] px-3 py-2 rounded-sm transition-colors ml-auto">
                        <Trash2 size={13} /> Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )
      ) : subscribers.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-sm p-12 text-center text-gray-400 text-sm">
          No subscribers yet.
        </div>
      ) : (
        <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F8FAFC] text-left text-xs text-gray-400 uppercase tracking-wider">
                <th className="px-5 py-3 font-semibold">Email</th>
                <th className="px-5 py-3 font-semibold">Subscribed</th>
                <th className="px-5 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {subscribers.map(sub => (
                <tr key={sub.id} className="hover:bg-[#F8FAFC]/60 transition-colors">
                  <td className="px-5 py-4 text-[#10243B] font-medium">{sub.email}</td>
                  <td className="px-5 py-4 text-gray-500">
                    {new Date(sub.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button onClick={() => removeSubscriber(sub.id)} aria-label="Remove"
                      className="w-8 h-8 rounded-sm bg-[#F8FAFC] hover:bg-red-600 hover:text-white flex items-center justify-center text-gray-500 transition-colors inline-flex">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
