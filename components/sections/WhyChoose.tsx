'use client';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { WHY_CHOOSE } from '@/lib/data';

export default function WhyChoose() {
  return (
    <section className="py-28 bg-[#F8FAFC]" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              badge="Why AXIOM"
              title="The AXIOM Advantage"
              highlight="AXIOM"
              subtitle="At AXIOM, we believe successful real estate decisions require accurate information, professional expertise, and strategic thinking. We provide solutions designed around our clients' objectives."
              align="left"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 bg-[#10243B] rounded-sm"
            >
              <p className="text-white/80 text-sm leading-relaxed italic">
                &ldquo;Our approach combines valuation knowledge, market analysis, and innovative solutions to support clients throughout the real estate lifecycle.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-px bg-[#C9A227]" />
                <span className="text-[#C9A227] text-xs font-semibold tracking-widest uppercase">AXIOM Realty</span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white border border-gray-100 rounded-sm p-6 hover:shadow-lg hover:border-[#C9A227]/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#10243B]/5 group-hover:bg-[#C9A227]/10 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon size={18} className="text-[#10243B] group-hover:text-[#C9A227] transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-[#10243B] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
