'use client';
import Link from '@/components/ui/LocaleLink';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/LangContext';

export default function NotFound() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-[#10243B] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-heading font-black text-[#C9A227] mb-4" style={{ fontSize: '8rem', fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}>
          404
        </div>
        <div className="w-12 h-0.5 bg-[#C9A227] mx-auto mb-6" />
        <h1 className="font-heading font-bold text-white text-2xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('not_found_title')}
        </h1>
        <p className="text-white/60 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          {t('not_found_body')}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-colors text-sm"
        >
          {t('return_home')} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
