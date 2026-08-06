'use client';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { getProcessSteps } from '@/lib/data';
import { useLang } from '@/lib/LangContext';

export default function ProcessSection() {
  const { t, lang } = useLang();
  const PROCESS_STEPS = getProcessSteps(lang);
  return (
    <section className="py-28 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge={t('process_badge')}
          title={t('process_title')}
          highlight={t('process_title_highlight')}
          subtitle={t('process_subtitle')}
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative text-center group"
                >
                  {/* Step circle */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#F8FAFC] border-2 border-[#E5E7EB] group-hover:border-[#C9A227] group-hover:bg-[#10243B] flex items-center justify-center transition-all duration-400 mb-3 relative z-10">
                      <Icon size={22} className="text-[#10243B] group-hover:text-[#C9A227] transition-colors duration-400" />
                    </div>
                    <span className="text-[#C9A227] font-heading font-black text-xs tracking-widest" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t('process_step_label')} {step.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-[#10243B] mb-3 text-base sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[17px] leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
