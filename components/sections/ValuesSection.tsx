'use client';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { VALUES } from '@/lib/data';
import { useLang } from '@/lib/LangContext';

export default function ValuesSection() {
  const { t } = useLang();
  return (
    <section className="py-28 bg-[#10243B] relative overflow-hidden" aria-labelledby="values-heading">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t('values_badge')}
          title={t('values_title')}
          highlight="ORIVANTA"
          subtitle={t('values_subtitle')}
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={`${value.letter}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/10 hover:border-[#C9A227]/50 transition-all duration-400 cursor-default overflow-hidden flex gap-5 items-start"
              >
                {/* Letter watermark */}
                <div
                  className="absolute -bottom-3 -right-1 font-heading font-black text-[7rem] leading-none text-white/[0.04] group-hover:text-[#C9A227]/[0.07] transition-colors duration-400 select-none pointer-events-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  aria-hidden="true"
                >
                  {value.letter}
                </div>

                {/* Left: icon + letter */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-sm bg-[#C9A227]/10 group-hover:bg-[#C9A227]/20 flex items-center justify-center transition-colors duration-300">
                    <Icon size={20} className="text-[#C9A227]" />
                  </div>
                  <div className="text-[#C9A227] font-heading font-black text-2xl leading-none">
                    {value.letter}
                  </div>
                </div>

                {/* Right: text */}
                <div className="relative z-10 min-w-0">
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/55 text-[17px] leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
