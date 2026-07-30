'use client';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { TESTIMONIALS } from '@/lib/data';
import { useLang } from '@/lib/LangContext';

export default function Testimonials() {
  const { t } = useLang();
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-28 bg-white relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Soft gold radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C9A227 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t('testimonials_badge')}
          title={t('testimonials_title')}
          highlight="Clients"
          subtitle={t('testimonials_subtitle')}
          light={false}
        />
      </div>

      {/* Sliding marquee — pauses on hover/focus, respects prefers-reduced-motion */}
      <div className="relative mt-14 overflow-hidden testimonial-fade-edges" role="region" aria-label="Client testimonials">
        <div
          className="testimonial-track flex gap-6 w-max"
          style={{ ['--marquee-duration' as string]: `${TESTIMONIALS.length * 9}s` }}
        >
          {loop.map((item, i) => {
            const isDuplicate = i >= TESTIMONIALS.length;
            return (
              <div
                key={i}
                aria-hidden={isDuplicate || undefined}
                className="w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col items-center text-center px-4"
              >
                {/* Circular avatar */}
                <div className="relative w-24 h-24 rounded-full bg-[#10243B] flex items-center justify-center ring-4 ring-[#C9A227]/20 mb-5">
                  <span className="text-white font-black text-3xl">{item.name[0]}</span>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#C9A227] flex items-center justify-center ring-4 ring-white">
                    <Quote size={13} className="text-[#10243B]" aria-hidden="true" />
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} size={13} className="text-[#C9A227] fill-[#C9A227]" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-gray-600 text-[15px] leading-relaxed italic mb-5">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="font-heading font-bold text-[#10243B] text-sm">{item.name}</div>
                <div className="text-[#C9A227] text-xs font-medium mt-0.5">{item.role} · {item.company}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
