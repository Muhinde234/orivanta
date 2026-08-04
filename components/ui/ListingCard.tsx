'use client';
import Image from 'next/image';
import Link from '@/components/ui/LocaleLink';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize2 } from 'lucide-react';
import { Listing, formatPrice, formatSize, propertyTypeLabel, purposeLabel } from '@/lib/listings';
import { useLang } from '@/lib/LangContext';

export default function ListingCard({ listing, index = 0 }: { listing: Listing; index?: number }) {
  const { t } = useLang();
  const size = formatSize(listing);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
    >
      <Link
        href={`/listings/${listing.slug}`}
        className="group block bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F8FAFC]">
          {listing.cover_image ? (
            <Image
              src={listing.cover_image}
              alt={listing.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-sm">{t('listing_no_image')}</div>
          )}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-[#10243B] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
              {purposeLabel(listing.purpose, t)}
            </span>
            {listing.featured && (
              <span className="bg-[#C9A227] text-[#10243B] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                {t('listing_featured_badge')}
              </span>
            )}
          </div>
        </div>

        <div className="p-5">
          <div className="text-[#C9A227] text-[11px] font-semibold uppercase tracking-widest mb-2">
            {propertyTypeLabel(listing.property_type, t)}
          </div>
          <h3 className="font-heading font-bold text-[#10243B] text-base mb-2 leading-snug line-clamp-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {listing.title}
          </h3>
          <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
            <MapPin size={13} className="text-[#C9A227] flex-shrink-0" />
            <span className="truncate">{listing.location}</span>
          </div>

          <div className="flex items-center gap-4 text-gray-500 text-xs mb-4 pb-4 border-b border-gray-100">
            {listing.bedrooms != null && (
              <span className="flex items-center gap-1"><Bed size={14} /> {listing.bedrooms}</span>
            )}
            {listing.bathrooms != null && (
              <span className="flex items-center gap-1"><Bath size={14} /> {listing.bathrooms}</span>
            )}
            {size && (
              <span className="flex items-center gap-1"><Maximize2 size={14} /> {size}</span>
            )}
          </div>

          <div className="font-heading font-bold text-[#10243B] text-lg">
            {formatPrice(listing, t)}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
