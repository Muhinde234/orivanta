'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { useLang } from '@/lib/LangContext';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref = '/services',
}: CTASectionProps) {
  const { t } = useLang();
  const resolvedTitle = title ?? t('cta_title');
  const resolvedSubtitle = subtitle ?? t('cta_subtitle');
  const resolvedPrimary = primaryLabel ?? t('cta_primary');
  const resolvedSecondary = secondaryLabel ?? t('cta_secondary');
  return (
    <section className="py-20 sm:py-24 bg-[#10243B] relative overflow-hidden" aria-labelledby="cta-heading">
      <Image src="/images/9.jpg" alt="" fill className="object-cover opacity-20" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A227]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-5">
            <div className="w-10 h-0.5 bg-[#C9A227]" />
          </div>
          {/* h2 — section heading scale */}
          <h2 id="cta-heading"
            className="font-heading font-bold text-white leading-tight mb-5 text-2xl sm:text-3xl lg:text-4xl">
            {resolvedTitle}
          </h2>
          <p className="text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto text-[17px]">
            {resolvedSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={primaryHref}
              className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-7 py-3.5 rounded-full hover:bg-[#b8911f] transition-all duration-300 text-sm sm:text-base">
              <Phone size={16} />
              {resolvedPrimary}
            </Link>
            <Link href={secondaryHref}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:border-white hover:bg-white/5 transition-all duration-300 text-sm sm:text-base">
              {resolvedSecondary} <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
