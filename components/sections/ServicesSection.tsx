'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { SERVICES } from '@/lib/data';

export default function ServicesSection() {
  return (
    <section className="py-28 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Our Real Estate Services"
          subtitle="Comprehensive real estate solutions designed to support property owners, investors, developers, businesses, and institutions throughout the entire property lifecycle."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full bg-white border border-gray-100 rounded-sm p-7 hover:border-[#C9A227]/40 hover:shadow-xl transition-all duration-400 relative overflow-hidden"
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-[#10243B] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-sm bg-[#F8FAFC] group-hover:bg-[#C9A227]/20 flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon size={22} className="text-[#10243B] group-hover:text-[#C9A227] transition-colors duration-300" />
                    </div>
                    <h3
                      className="font-heading font-bold text-[#10243B] group-hover:text-white mb-3 leading-snug transition-colors duration-300"
                      style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/65 text-sm leading-relaxed mb-5 transition-colors duration-300">
                      {service.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#C9A227] text-xs font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all duration-300">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-[#10243B] text-[#10243B] font-bold px-8 py-4 rounded-full hover:bg-[#10243B] hover:text-white transition-all duration-300 text-sm"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
