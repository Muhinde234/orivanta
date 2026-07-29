'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, BookOpen } from 'lucide-react';
import { useCMS } from '@/lib/useCMS';

const TIMELINE = [
  { year: 'Founded', title: 'AXIOM Established', desc: 'AXIOM Realty Consultant Ltd was established with a vision to transform how individuals, investors, and organizations approach real estate decisions.' },
  { year: 'Growth', title: 'Expanding Services', desc: 'Expanded service offerings to cover the full real estate lifecycle — from valuation and consultancy to investment advisory and facility management.' },
  { year: 'Today', title: 'Rwanda\'s Trusted Advisor', desc: 'Serving individuals, businesses, investors, and institutions across Rwanda with professional expertise and client-focused solutions.' },
  { year: 'Vision', title: 'Pan-African Reach', desc: 'Working toward becoming Africa\'s most trusted real estate consulting firm, delivering innovative solutions that create lasting value.' },
];

export default function AboutContent() {
  const { data } = useCMS(['about_who_we_are','about_who_we_are_2','about_vision','about_mission']);

  return (
    <>
      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">Who We Are</span>
              <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-5" />
              <h2
                className="font-heading font-bold text-[#10243B] leading-tight mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontFamily: 'Poppins, sans-serif' }}
              >
                A Professional Real Estate Advisory Company
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                {data.about_who_we_are || 'AXIOM Realty Consultant Ltd is a professional real estate advisory company committed to delivering reliable, innovative, and client-focused property solutions.'}
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                {data.about_who_we_are_2 || 'We provide comprehensive real estate services including property valuation, real estate consultancy, property management, facility management, real estate brokerage, corporate real estate advisory, and investment advisory.'}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our company supports individuals, businesses, investors, developers, financial institutions, and organizations by providing professional expertise and strategic solutions that help clients make informed property decisions and maximize the value of their real estate assets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              {/* Image grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/images/3.jpg" alt="AXIOM office" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/images/4.jpg" alt="Property advisory" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/images/5.jpg" alt="Real estate" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/images/6.jpg" alt="Kigali property" fill className="object-cover" />
                </div>
              </div>
              {[
                { icon: Eye, title: 'Our Vision', color: '#C9A227', desc: data.about_vision || 'To become Africa\'s most trusted real estate consulting firm, delivering innovative property solutions, sustainable developments, and professional advisory services that create lasting value for investors, businesses, communities, and future generations.' },
                { icon: Target, title: 'Our Mission', color: '#10243B', desc: data.about_mission || 'To provide reliable, ethical and innovative real estate solutions that empower clients to make informed decisions, maximize property value, and achieve sustainable investment growth.' },
                { icon: BookOpen, title: 'Our Story', color: '#C9A227', desc: 'Established with a vision to transform the way individuals, investors, and organizations approach real estate decisions — bridging the gap between real estate opportunities and expert guidance.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-5 p-6 bg-[#F8FAFC] rounded-sm border border-gray-100 hover:border-[#C9A227]/30 hover:shadow-md transition-all duration-300">
                    <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: item.color === '#C9A227' ? '#C9A227' : '#10243B' }}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[#10243B] mb-2 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">Our Journey</span>
            <div className="w-12 h-0.5 bg-[#C9A227] mx-auto mt-3 mb-5" />
            <h2 className="font-heading font-bold text-[#10243B]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif' }}>
              Building Rwanda&apos;s Premier Real Estate Advisory Firm
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E5E7EB] hidden lg:block" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? '' : 'lg:direction-rtl'}`}
                >
                  {/* Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#C9A227] border-4 border-white shadow-md z-10" />

                  <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                    <span className="inline-block text-[#C9A227] font-heading font-black text-sm tracking-widest uppercase mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-[#10243B] text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats counters */}
      <section className="py-20 bg-[#10243B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '8+', label: 'Professional Services' },
              { value: '100%', label: 'Client Commitment' },
              { value: 'Rwanda', label: 'Headquarters' },
              { value: 'Pan-Africa', label: 'Strategic Vision' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="font-heading font-black text-[#C9A227] mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Poppins, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
