'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useLang } from '@/lib/LangContext';

export default function ListingGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const { t } = useLang();

  if (images.length === 0) {
    return (
      <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-[#F8FAFC] flex items-center justify-center text-gray-300 text-sm">
        {t('listing_no_image_available')}
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-lg">
        <Image src={images[active]} alt={`${title} — ${t('listing_photo_alt_prefix')} ${active + 1}`} fill className="object-cover" priority />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-3 mt-3">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`${t('listing_view_photo_aria')} ${i + 1}`}
              className={`relative aspect-[4/3] rounded-sm overflow-hidden border-2 transition-colors ${
                active === i ? 'border-[#C9A227]' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
