'use client';
import { ArrowRight } from 'lucide-react';

export default function NewsletterForm() {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 bg-white/10 border border-white/20 rounded-sm px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C9A227] transition-colors"
        aria-label="Email for newsletter"
      />
      <button
        type="submit"
        className="bg-[#C9A227] text-[#10243B] px-4 py-2.5 rounded-sm font-bold text-sm hover:bg-[#b8911f] transition-colors"
        aria-label="Subscribe"
      >
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
