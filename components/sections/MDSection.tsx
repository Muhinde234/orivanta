'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { useCMS } from '@/lib/useCMS';
import { useLang } from '@/lib/LangContext';

export default function MDSection() {
  const { data } = useCMS(['md_name','md_role','md_quote','md_body','md_photo']);
  const { t } = useLang();

  const name = data.md_name || 'Daniel NGARUKIYIMANA';
  const role = data.md_role || t('md_role');
  const quote = data.md_quote || t('md_quote');
  const body = data.md_body || t('md_body');
  const photo = data.md_photo || '/images/PXL_20231128_151335702.PORTRAIT~2.jpg';

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC]" aria-labelledby="md-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Gold frame accent */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A227]/30 rounded-sm" />
              {/* Portrait */}
              <div className="relative rounded-sm aspect-[3/4] overflow-hidden">
                <Image src={photo} alt={name} fill className="object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
              </div>
              {/* Name badge */}
              <div className="absolute -bottom-5 left-6 right-6 bg-white shadow-xl rounded-sm px-5 py-4 border-l-4 border-[#C9A227]">
                <div className="font-heading font-bold text-[#10243B] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {name}
                </div>
                <div className="text-[#C9A227] text-xs font-medium mt-0.5">{role}</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pt-8 lg:pt-0"
          >
            <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">{t('md_badge')}</span>
            <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-5" />
            <h2 className="font-heading font-bold text-[#10243B] leading-tight mb-6 text-2xl sm:text-3xl lg:text-4xl">
              {t('md_heading')}
            </h2>

            {/* Quote block */}
            <div className="relative bg-[#10243B] rounded-sm p-5 sm:p-6 mb-6">
              <Quote size={28} className="text-[#C9A227]/30 absolute top-5 left-5" aria-hidden="true" />
              <p className="text-white/80 leading-relaxed text-sm sm:text-[15px] relative z-10 pl-4 italic">
                {quote}
              </p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-[15px] mt-4 pl-4">
                {body}
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-4">
              <div>
                <div className="font-heading font-bold text-[#10243B] text-lg sm:text-xl" style={{ fontStyle: 'italic' }}>
                  {name}
                </div>
                <div className="text-gray-500 text-sm sm:text-base">{role}, ORIVANTA PROPERTY LTD</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
