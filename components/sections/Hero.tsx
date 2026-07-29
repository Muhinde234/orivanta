'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Building2, TrendingUp, Award } from 'lucide-react';
import { STATS } from '@/lib/data';
import { useCMS } from '@/lib/useCMS';
import { useLang } from '@/lib/LangContext';

export default function Hero() {
  const { data } = useCMS(['hero_title','hero_tagline','hero_body','hero_cta_primary','hero_cta_secondary','hero_image']);
  const { t } = useLang();

  const heroImage = data.hero_image || '/images/1.jpg';
  const tagline = data.hero_tagline || t('hero_tagline');
  const body = data.hero_body || t('hero_body');
  const ctaPrimary = data.hero_cta_primary || t('hero_cta_primary');
  const ctaSecondary = data.hero_cta_secondary || t('hero_cta_secondary');

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero">
      {/* Background image */}
      <Image src={heroImage} alt="" fill className="object-cover object-center" priority />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(16,36,59,0.92) 0%, rgba(13,30,48,0.88) 40%, rgba(26,58,92,0.85) 100%)' }} />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A227]/40 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A227]/20 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#C9A227]" />
              <span className="text-[#C9A227] text-xs font-bold tracking-[0.25em] uppercase">
                Professional Real Estate Advisory
              </span>
            </motion.div>

            {/* h1 — display size, fluid */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-white leading-[1.1] mb-5 text-4xl sm:text-5xl lg:text-6xl"
            >
              {data.hero_title || 'AXIOM Realty'}
              <br />
              <span className="text-[#C9A227]">Consultant</span> Ltd
            </motion.h1>

            {/* Tagline — body-lg */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/75 text-lg sm:text-xl font-medium mb-3"
            >
              {tagline}
            </motion.p>

            {/* Body copy — standard body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/55 text-[17px] leading-relaxed mb-10 max-w-lg"
            >
              {body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-7 py-3.5 rounded-full hover:bg-[#b8911f] transition-all duration-300 text-sm sm:text-base">
                {ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:border-white hover:bg-white/5 transition-all duration-300 text-sm sm:text-base">
                {ctaSecondary}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-4 gap-4 pt-8 border-t border-white/10"
            >
              {STATS.map((stat, i) => (
                <div key={i}>
                  <div className="font-heading font-bold text-[#C9A227] text-lg sm:text-xl mb-0.5">{stat.value}</div>
                  <div className="text-white/50 text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating cards — desktop only */}
          <div className="hidden lg:block relative h-[520px]">
            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-8 right-0 w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#C9A227] flex items-center justify-center">
                  <Building2 size={20} className="text-[#10243B]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Property Valuation</div>
                  <div className="text-white/50 text-xs">Professional Standards</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Independent, accurate valuations for residential, commercial, and specialized properties.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-52 left-0 w-64 bg-[#C9A227]/10 backdrop-blur-md border border-[#C9A227]/30 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#C9A227]/20 flex items-center justify-center">
                  <TrendingUp size={18} className="text-[#C9A227]" />
                </div>
                <div className="text-white font-semibold text-sm">Investment Advisory</div>
              </div>
              <p className="text-white/50 text-sm">Strategic guidance for real estate investors across Rwanda and Africa.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-8 right-8 w-60 bg-white/5 backdrop-blur-md border border-white/15 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <Award size={18} className="text-[#C9A227]" />
                </div>
                <div className="text-white font-semibold text-sm">Professional Excellence</div>
              </div>
              <div className="flex gap-1 mt-2">
                {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-1 rounded-full bg-[#C9A227]" />)}
              </div>
              <p className="text-white/50 text-xs mt-2">Trusted by clients across Rwanda</p>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#C9A227]/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#C9A227]/5" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
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
