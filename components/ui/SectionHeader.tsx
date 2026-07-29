'use client';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string; // word(s) to render in gold
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  // If highlight provided, split title around it
  const renderTitle = () => {
    if (!highlight) return <>{title}</>;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="relative inline-block">
          <span className="relative z-10 text-[#C9A227]">{highlight}</span>
          {/* Animated underline */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#C9A227]/30 origin-left rounded-full"
          />
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <div className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          {/* Left tick */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="block w-6 h-px bg-[#C9A227] origin-left"
          />
          <span className="inline-flex items-center gap-2 bg-[#C9A227]/10 border border-[#C9A227]/25 text-[#C9A227] text-[11px] font-bold tracking-[0.22em] uppercase px-3 py-1 rounded-full">
            {badge}
          </span>
          {/* Right tick */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="block w-6 h-px bg-[#C9A227] origin-right"
          />
        </div>
      )}

      <h2
        className={`font-heading font-bold leading-tight text-3xl sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-[#10243B]'
        }`}
      >
        {renderTitle()}
      </h2>

      {/* Animated bottom bar */}
      <div className={`flex mt-5 mb-0 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '3rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-[3px] bg-[#C9A227] rounded-full"
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '0.75rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="h-[3px] bg-[#C9A227]/40 rounded-full ml-1"
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '0.375rem' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="h-[3px] bg-[#C9A227]/20 rounded-full ml-1"
        />
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`mt-5 text-[15px] leading-relaxed max-w-2xl ${isCenter ? 'mx-auto' : ''} ${
            light ? 'text-white/65' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
