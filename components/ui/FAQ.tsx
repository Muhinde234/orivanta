'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem { q: string; a: string; }

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = 'Frequently Asked Questions' }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <div className="mb-8">
          <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
          <h3 className="font-heading font-bold text-[#10243B] text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
        </div>
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-100 rounded-sm overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-[#10243B] pr-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.q}</span>
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#10243B] flex items-center justify-center">
                {open === i ? <Minus size={14} className="text-[#C9A227]" /> : <Plus size={14} className="text-[#C9A227]" />}
              </span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 text-[15px]">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
