'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye, Target, BookOpen } from 'lucide-react';
import { useCMS } from '@/lib/useCMS';

const TIMELINE = [
  { year: 'Founded', title: 'AXIOM Established', desc: 'AXIOM Realty Consultant Ltd was established with a vision to transform how individuals, investors, and organizations approach real estate decisions.' },
  { year: 'Growth', title: 'Expanding Services', desc: 'Expanded service offerings to cover the full real estate lifecycle — from valuation and consultancy to investment advisory and facility management.' },
  { year: 'Today', title: "Rwanda's Trusted Advisor", desc: 'Serving individuals, businesses, investors, and institutions across Rwanda with professional expertise and client-focused solutions.' },
  { year: 'Vision', title: 'Pan-African Reach', desc: "Working toward becoming Africa's most trusted real estate consulting firm, delivering innovative solutions that create lasting value." },
];

const TABS = [
  { key: 'vision', label: 'Our Vision', icon: Eye },
  { key: 'mission', label: 'Our Mission', icon: Target },
  { key: 'story', label: 'Our Story', icon: BookOpen },
];

export default function AboutContent() {
  const { data } = useCMS(['about_who_we_are', 'about_who_we_are_2', 'about_vision', 'about_mission']);
  const [activeTab, setActiveTab] = useState('vision');

  const tabContent: Record<string, { icon: React.ElementType; heading: string; body: string; image: string }> = {
    vision: {
      icon: Eye,
      heading: 'Our Vision',
      body: data.about_vision || "To become Africa's most trusted real estate consulting firm, delivering innovative property solutions, sustainable developments, and professional advisory services that create lasting value for investors, businesses, communities, and future generations.",
      image: '/images/7.jpg',
    },
    mission: {
      icon: Target,
      heading: 'Our Mission',
      body: data.about_mission || 'To provide reliable, ethical and innovative real estate solutions that empower clients to make informed decisions, maximize property value, and achieve sustainable investment growth.',
      image: '/images/8.jpg',
    },
    story: {
      icon: BookOpen,
      heading: 'Our Story',
      body: "Established with a vision to transform the way individuals, investors, and organizations approach real estate decisions — bridging the gap between real estate opportunities and expert guidance.",
      image: '/images/9.jpg',
    },
  };

  const current = tabContent[activeTab];
  const Icon = current.icon;

  return (
    <>
      {/* ── Who We Are ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">Who We Are</span>
              <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-6" />
              <h2 className="font-heading font-bold text-[#10243B] leading-tight mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
                A Professional Real Estate Advisory Company
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                {data.about_who_we_are || 'AXIOM Realty Consultant Ltd is a professional real estate advisory company committed to delivering reliable, innovative, and client-focused property solutions.'}
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                {data.about_who_we_are_2 || 'We provide comprehensive real estate services including property valuation, real estate consultancy, property management, facility management, real estate brokerage, corporate real estate advisory, and investment advisory.'}
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Our company supports individuals, businesses, investors, developers, financial institutions, and organizations by providing professional expertise and strategic solutions.
              </p>
            </motion.div>

            {/* Stacked image collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[480px]"
            >
              {/* Main large image */}
              <div className="absolute top-0 right-0 w-[75%] h-[340px] rounded-sm overflow-hidden shadow-xl">
                <Image src="/images/3.jpg" alt="AXIOM advisory" fill className="object-cover" />
              </div>
              {/* Accent image bottom-left */}
              <div className="absolute bottom-0 left-0 w-[55%] h-[240px] rounded-sm overflow-hidden shadow-xl border-4 border-white">
                <Image src="/images/4.jpg" alt="Property consulting" fill className="object-cover" />
              </div>
              {/* Gold accent block */}
              <div className="absolute bottom-10 right-4 w-20 h-20 bg-[#C9A227] rounded-sm flex items-center justify-center shadow-lg">
                <span className="text-[#10243B] font-black text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>AX</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision / Mission / Story tabs ──────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Tab buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {TABS.map(tab => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#10243B] text-white shadow-lg'
                      : 'bg-white border border-gray-200 text-gray-500 hover:border-[#C9A227] hover:text-[#10243B]'
                  }`}
                >
                  <TabIcon size={15} className={isActive ? 'text-[#C9A227]' : ''} />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* Tab panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl order-2 lg:order-1">
                <Image src={current.image} alt={current.heading} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243B]/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center">
                    <Icon size={18} className="text-[#10243B]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="w-10 h-0.5 bg-[#C9A227] mb-5" />
                <h2 className="font-heading font-bold text-[#10243B] mb-6"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                  {current.heading}
                </h2>
                {/* Large decorative quote mark */}
                <div className="text-[#C9A227]/20 font-black leading-none mb-2 select-none"
                  style={{ fontSize: '6rem', fontFamily: 'Georgia, serif', lineHeight: 0.8 }}>
                  &ldquo;
                </div>
                <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
                  {current.body}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">Our Journey</span>
            <div className="w-12 h-0.5 bg-[#C9A227] mx-auto mt-3 mb-5" />
            <h2 className="font-heading font-bold text-[#10243B]"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Building Rwanda&apos;s Premier Real Estate Advisory Firm
            </h2>
          </motion.div>

          {/* Horizontal timeline on desktop */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center lg:items-center"
                >
                  {/* Dot */}
                  <div className="w-16 h-16 rounded-full bg-[#10243B] border-4 border-[#C9A227]/30 flex items-center justify-center mb-5 flex-shrink-0 shadow-md">
                    <span className="text-[#C9A227] font-black text-xs tracking-widest uppercase"
                      style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[#10243B] text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#10243B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
                <div className="font-heading font-black text-[#C9A227] mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {stat.value}
                </div>
                <div className="text-white/60 text-[15px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
