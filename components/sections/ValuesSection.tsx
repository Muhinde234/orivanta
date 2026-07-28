'use client';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { VALUES } from '@/lib/data';

export default function ValuesSection() {
  return (
    <section className="py-28 bg-[#10243B] relative overflow-hidden" aria-labelledby="values-heading">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Principles"
          title="The AXIOM Principles"
          subtitle="Our name represents more than a brand — it represents the principles that guide our decisions, our services, and our relationships with clients."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-sm p-7 hover:bg-white/10 hover:border-[#C9A227]/50 transition-all duration-400 cursor-default overflow-hidden"
              >
                {/* Letter watermark */}
                <div
                  className="absolute -top-4 -right-2 font-heading font-black text-8xl text-white/5 group-hover:text-[#C9A227]/10 transition-colors duration-400 select-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  aria-hidden="true"
                >
                  {value.letter}
                </div>

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-sm bg-[#C9A227]/10 group-hover:bg-[#C9A227]/20 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={20} className="text-[#C9A227]" />
                  </div>
                  <div className="text-[#C9A227] font-heading font-black text-3xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {value.letter}
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-white/55 text-xs leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
