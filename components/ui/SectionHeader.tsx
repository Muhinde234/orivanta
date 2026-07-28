'use client';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({ badge, title, subtitle, align = 'center', light = false }: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#C9A227] mb-3">
          {badge}
        </span>
      )}
      <div className={`flex ${isCenter ? 'justify-center' : 'justify-start'} mb-4`}>
        <div className="w-10 h-0.5 bg-[#C9A227]" />
      </div>
      <h2 className={`font-heading font-bold leading-tight text-2xl sm:text-3xl lg:text-4xl ${light ? 'text-white' : 'text-[#10243B]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed max-w-2xl ${isCenter ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
