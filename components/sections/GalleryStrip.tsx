'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const IMAGES = [
  { src: '/images/1.jpg', alt: 'Kigali real estate' },
  { src: '/images/2.jpg', alt: 'Property advisory' },
  { src: '/images/3.jpg', alt: 'Professional consultation' },
  { src: '/images/4.jpg', alt: 'Real estate investment' },
  { src: '/images/5.jpg', alt: 'Property management' },
  { src: '/images/6.jpg', alt: 'Facility management' },
  { src: '/images/7.jpg', alt: 'Land advisory' },
  { src: '/images/8.jpg', alt: 'Brokerage services' },
];

export default function GalleryStrip() {
  return (
    <section className="py-16 bg-[#F8FAFC] overflow-hidden" aria-label="Photo gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">Our Work</span>
        <div className="w-10 h-0.5 bg-[#C9A227] mx-auto mt-3" />
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 px-6 lg:px-8 max-w-7xl mx-auto scrollbar-hide">
        {IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative flex-shrink-0 w-56 h-40 rounded-sm overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#10243B]/0 group-hover:bg-[#10243B]/30 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
