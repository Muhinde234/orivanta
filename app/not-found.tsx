import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#10243B] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-heading font-black text-[#C9A227] mb-4" style={{ fontSize: '8rem', fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}>
          404
        </div>
        <div className="w-12 h-0.5 bg-[#C9A227] mx-auto mb-6" />
        <h1 className="font-heading font-bold text-white text-2xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Page Not Found
        </h1>
        <p className="text-white/60 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-8 py-4 rounded-sm hover:bg-[#b8911f] transition-colors text-sm"
        >
          Return to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
