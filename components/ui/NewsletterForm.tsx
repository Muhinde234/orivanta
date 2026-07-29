'use client';
import { ArrowRight } from 'lucide-react';

export default function NewsletterForm() {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 min-w-0 bg-white/[0.06] border border-white/[0.12] rounded px-3 py-2.5 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-[#C9A227] transition-colors"
        style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
        aria-label="Email for newsletter"
      />
      <button
        type="submit"
        className="flex-shrink-0 bg-[#C9A227] text-[#10243B] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#b8911f] transition-colors"
        aria-label="Subscribe to newsletter"
      >
        <ArrowRight size={15} />
      </button>
    </form>
  );
}
