'use client';
import { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { subscribeNewsletter } from '@/lib/inquiries';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    const { error: err } = await subscribeNewsletter(email.trim());
    if (err) { setError(err); setStatus('error'); }
    else { setStatus('done'); setEmail(''); }
  };

  if (status === 'done') {
    return (
      <p className="flex items-center gap-2 text-[13px] text-[#C9A227]">
        <Check size={14} /> Thanks for subscribing!
      </p>
    );
  }

  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 min-w-0 bg-white/[0.06] border border-white/[0.12] rounded-full px-4 py-2.5 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-[#C9A227] transition-colors"
          style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
          aria-label="Email for newsletter"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex-shrink-0 bg-[#C9A227] text-[#10243B] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#b8911f] transition-colors disabled:opacity-60"
          aria-label="Subscribe to newsletter"
        >
          {status === 'loading' ? <Loader2 size={15} className="animate-spin" /> : <ArrowRight size={15} />}
        </button>
      </form>
      {status === 'error' && <p className="text-red-400 text-xs mt-2">{error}</p>}
    </div>
  );
}
