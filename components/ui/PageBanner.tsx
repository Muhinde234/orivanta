'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb { label: string; href?: string; }

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}

export default function PageBanner({ title, subtitle, breadcrumbs }: PageBannerProps) {
  return (
    <section
      className="relative pt-36 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #10243B 0%, #1a3a5c 60%, #10243B 100%)' }}
    >
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A227]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs sm:text-sm text-white/50 mb-6"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight size={13} />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#C9A227] transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-10 h-0.5 bg-[#C9A227] mb-5" />
          <h1 className="font-heading font-bold text-white leading-tight text-3xl sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-white/65 max-w-2xl leading-relaxed text-[15px] sm:text-base">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
