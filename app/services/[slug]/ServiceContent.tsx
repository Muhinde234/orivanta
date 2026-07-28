'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Users } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export default function ServiceContent({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  const Icon = service.icon;

  return (
    <>
      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">Service Overview</span>
              <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-5" />
              <h2 className="font-heading font-bold text-[#10243B] text-2xl mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What is {service.title}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">{service.overview}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F8FAFC] rounded-sm border border-gray-100 p-7"
            >
              <div className="w-14 h-14 rounded-sm bg-[#10243B] flex items-center justify-center mb-5">
                <Icon size={26} className="text-[#C9A227]" />
              </div>
              <h3 className="font-heading font-bold text-[#10243B] mb-3 text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Quick Summary
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.shortDesc}</p>
              <div className="mt-5 pt-5 border-t border-gray-200">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#b8911f] transition-colors w-full justify-center"
                >
                  {service.cta}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Need + Who Needs */}
      <section className="py-20 bg-[#10243B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
              <h3 className="font-heading font-bold text-white text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Why Do You Need This Service?
              </h3>
              <ul className="space-y-3">
                {service.whyNeed.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle size={15} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
              <h3 className="font-heading font-bold text-white text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Who Needs This Service?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {service.whoNeeds.map((who, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-sm px-4 py-3">
                    <Users size={13} className="text-[#C9A227] flex-shrink-0" />
                    <span className="text-white/70 text-xs">{who}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
