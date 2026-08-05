'use client';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { getValues } from '@/lib/data';
import { useLang } from '@/lib/LangContext';

export default function ValuesSection() {
  const { t, lang } = useLang();
  const VALUES = getValues(lang);
  return (
    <section className="py-28 bg-[#10243B] relative overflow-hidden" aria-labelledby="values-heading">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      {/* Soft gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C9A227 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t('values_badge')}
          title={t('values_title')}
          highlight="ORIVANTA"
          subtitle={t('values_subtitle')}
          light
        />

        {/* Acronym strip — the brand name spelled out letter by letter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-start justify-center gap-x-1 gap-y-6 mb-16 sm:mb-20"
        >
          {VALUES.map((value, i) => (
            <div key={`letter-${i}`} className="flex flex-col items-center w-[11%] min-w-[58px]">
              <span
                className="font-heading font-black leading-none text-[#C9A227] text-3xl sm:text-4xl lg:text-5xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {value.letter}
              </span>
              <span className="w-6 h-0.5 bg-[#C9A227]/30 mt-3" />
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={`${value.letter}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-sm p-6 hover:border-[#C9A227]/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30 transition-all duration-400 cursor-default overflow-hidden"
              >
                {/* Expanding top accent line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#C9A227] to-[#C9A227]/30 group-hover:w-full transition-all duration-500" />

                {/* Letter watermark */}
                <div
                  className="absolute -bottom-4 -right-2 font-heading font-black text-[6rem] leading-none text-white/[0.04] group-hover:text-[#C9A227]/[0.08] transition-colors duration-400 select-none pointer-events-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  aria-hidden="true"
                >
                  {value.letter}
                </div>

                <div className="relative z-10 flex items-center gap-3 mb-5">
                  <div className="flex-shrink-0 w-13 h-13 rounded-full border-2 border-[#C9A227]/40 group-hover:border-[#C9A227] flex items-center justify-center transition-colors duration-300"
                    style={{ width: '3.25rem', height: '3.25rem' }}>
                    <span className="font-heading font-black text-lg text-[#C9A227]">{value.letter}</span>
                  </div>
                  <div className="w-11 h-11 rounded-sm bg-[#C9A227]/10 group-hover:bg-[#C9A227] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon size={19} className="text-[#C9A227] group-hover:text-[#10243B] transition-colors duration-300" />
                  </div>
                </div>

                <div className="relative z-10 min-w-0">
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/55 text-[15px] leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
