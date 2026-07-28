'use client';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';

export default function MDSection() {
  return (
    <section className="py-28 bg-[#F8FAFC]" aria-labelledby="md-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Gold frame accent */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A227]/30 rounded-sm" />
              {/* Portrait placeholder */}
              <div className="relative bg-gradient-to-br from-[#10243B] to-[#1a3a5c] rounded-sm aspect-[3/4] flex flex-col items-center justify-center overflow-hidden">
                <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-[#C9A227]/40 flex items-center justify-center mb-4">
                  <User size={48} className="text-white/40" />
                </div>
                <div className="text-white/30 text-xs tracking-widest uppercase">Portrait Photo</div>
                {/* Decorative bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C9A227]" />
              </div>
              {/* Name badge */}
              <div className="absolute -bottom-5 left-6 right-6 bg-white shadow-xl rounded-sm px-5 py-4 border-l-4 border-[#C9A227]">
                <div className="font-heading font-bold text-[#10243B] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Daniel NGARUKIYIMANA
                </div>
                <div className="text-[#C9A227] text-xs font-medium mt-0.5">Founder & Managing Director</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pt-8 lg:pt-0"
          >
            <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">Leadership</span>
            <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-5" />
            <h2
              className="font-heading font-bold text-[#10243B] leading-tight mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'Poppins, sans-serif' }}
            >
              A Message From Our Founder
            </h2>

            {/* Quote block */}
            <div className="relative bg-[#10243B] rounded-sm p-7 mb-7">
              <Quote size={32} className="text-[#C9A227]/30 absolute top-5 left-5" aria-hidden="true" />
              <p className="text-white/80 leading-relaxed text-sm relative z-10 pl-4 italic">
                Real estate decisions are among the most important financial decisions individuals and organizations make. Our goal is to provide professional knowledge, accurate information, and strategic guidance that enables our clients to make confident decisions.
              </p>
              <p className="text-white/60 leading-relaxed text-sm mt-4 pl-4">
                At AXIOM, we are committed to delivering excellence, building trust, and creating sustainable value through professional real estate solutions. We look forward to becoming your trusted partner in real estate.
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-4">
              <div>
                <div
                  className="font-heading font-bold text-[#10243B] text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                >
                  Daniel NGARUKIYIMANA
                </div>
                <div className="text-gray-500 text-sm">Founder & Managing Director, AXIOM Realty Consultant Ltd</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
