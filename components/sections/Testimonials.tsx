'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = TESTIMONIALS.length;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % total);
    }, 4500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (dir: 1 | -1) => {
    setActive(prev => (prev + dir + total) % total);
    startTimer();
  };

  const t = TESTIMONIALS[active];

  return (
    <section className="py-28 bg-white relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Soft gold radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C9A227 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Client Feedback"
          title="What Our Clients Say"
          subtitle="Trusted by individuals, investors, and organizations across Rwanda for professional real estate advisory services."
          light={false}
        />

        {/* Carousel */}
        <div className="relative flex flex-col items-center text-center min-h-[320px] justify-center">

          {/* Large quote icon */}
          <Quote size={48} className="text-[#C9A227]/30 mb-6" aria-hidden="true" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-[#C9A227] fill-[#C9A227]" aria-hidden="true" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed italic max-w-2xl mb-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Circle avatar + name */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#10243B] flex items-center justify-center ring-4 ring-[#10243B]/10">
                  <span className="text-white font-black text-2xl">{t.name[0]}</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-[#10243B] text-base">{t.name}</div>
                  <div className="text-[#C9A227] text-sm font-medium mt-0.5">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); startTimer(); }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 h-2 bg-[#C9A227]' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
