'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Building2, TrendingUp, Award } from 'lucide-react';
import { STATS } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #10243B 0%, #0d1e30 40%, #1a3a5c 100%)',
        }}
      />
      {/* Architectural grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A227]/40 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A227]/20 to-transparent" />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[#C9A227]" />
              <span className="text-[#C9A227] text-xs font-semibold tracking-[0.25em] uppercase">
                Professional Real Estate Advisory
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: 'Poppins, sans-serif' }}
            >
              AXIOM Realty
              <br />
              <span className="text-[#C9A227]">Consultant</span> Ltd
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 leading-relaxed mb-4"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
            >
              Where Property Meets Professional Expertise
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/55 leading-relaxed mb-10 max-w-lg"
              style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
            >
              A professional real estate consulting company dedicated to providing reliable and innovative property solutions for individuals, businesses, investors, and institutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-all duration-300 hover:gap-3 text-sm"
              >
                Request Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/5 transition-all duration-300 text-sm"
              >
                Explore Our Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-4 gap-6 pt-8 border-t border-white/10"
            >
              {STATS.map((stat, i) => (
                <div key={i}>
                  <div className="font-heading font-bold text-[#C9A227] text-xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating cards */}
          <div className="hidden lg:block relative h-[520px]">
            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-8 right-0 w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#C9A227] flex items-center justify-center">
                  <Building2 size={20} className="text-[#10243B]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Property Valuation</div>
                  <div className="text-white/50 text-xs">Professional Standards</div>
                </div>
              </div>
              <div className="text-white/60 text-xs leading-relaxed">
                Independent, accurate valuations for residential, commercial, and specialized properties.
              </div>
            </motion.div>

            {/* Second card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-52 left-0 w-64 bg-[#C9A227]/10 backdrop-blur-md border border-[#C9A227]/30 rounded-sm p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-[#C9A227]/20 flex items-center justify-center">
                  <TrendingUp size={18} className="text-[#C9A227]" />
                </div>
                <div className="text-white font-semibold text-sm">Investment Advisory</div>
              </div>
              <div className="text-white/50 text-xs">Strategic guidance for real estate investors across Rwanda and Africa.</div>
            </motion.div>

            {/* Third card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-8 right-8 w-60 bg-white/5 backdrop-blur-md border border-white/15 rounded-sm p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center">
                  <Award size={18} className="text-[#C9A227]" />
                </div>
                <div className="text-white font-semibold text-sm">Professional Excellence</div>
              </div>
              <div className="flex gap-1 mt-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-4 h-1 rounded-full bg-[#C9A227]" />
                ))}
              </div>
              <div className="text-white/50 text-xs mt-2">Trusted by clients across Rwanda</div>
            </motion.div>

            {/* Decorative circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#C9A227]/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#C9A227]/5" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} className="text-[#C9A227]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
