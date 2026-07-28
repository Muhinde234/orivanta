'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-28 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Client Feedback"
          title="What Our Clients Say"
          subtitle="Trusted by individuals, investors, and organizations across Rwanda for professional real estate advisory services."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 hover:shadow-lg hover:border-[#C9A227]/20 transition-all duration-300 relative group"
            >
              <Quote size={28} className="text-[#C9A227]/20 group-hover:text-[#C9A227]/40 transition-colors mb-4" aria-hidden="true" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-[#C9A227] fill-[#C9A227]" aria-hidden="true" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#10243B] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-[#10243B] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
