'use client';
import { useMemo, useState } from 'react';
import { Home as HomeIcon } from 'lucide-react';
import ListingCard from '@/components/ui/ListingCard';
import { Listing, PROPERTY_TYPES, PURPOSES, PropertyType, Purpose } from '@/lib/listings';
import { useLang } from '@/lib/LangContext';

export default function ListingsContent({ listings }: { listings: Listing[] }) {
  const { t } = useLang();
  const [propertyType, setPropertyType] = useState<PropertyType | 'all'>('all');
  const [purpose, setPurpose] = useState<Purpose | 'all'>('all');

  const filtered = useMemo(() => {
    return listings.filter(l =>
      (propertyType === 'all' || l.property_type === propertyType) &&
      (purpose === 'all' || l.purpose === purpose)
    );
  }, [listings, propertyType, purpose]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 pb-8 border-b border-gray-100">
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('listings_filter_type')}</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setPropertyType('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                  propertyType === 'all' ? 'bg-[#10243B] text-white' : 'bg-[#F8FAFC] text-gray-500 hover:bg-gray-100'
                }`}
              >
                {t('listings_filter_all')}
              </button>
              {PROPERTY_TYPES.map(p => (
                <button
                  key={p.value}
                  onClick={() => setPropertyType(p.value)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                    propertyType === p.value ? 'bg-[#10243B] text-white' : 'bg-[#F8FAFC] text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t('listings_filter_purpose')}</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setPurpose('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                  purpose === 'all' ? 'bg-[#C9A227] text-[#10243B]' : 'bg-[#F8FAFC] text-gray-500 hover:bg-gray-100'
                }`}
              >
                {t('listings_filter_all')}
              </button>
              {PURPOSES.map(p => (
                <button
                  key={p.value}
                  onClick={() => setPurpose(p.value)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                    purpose === p.value ? 'bg-[#C9A227] text-[#10243B]' : 'bg-[#F8FAFC] text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-[#F8FAFC] border-2 border-dashed border-gray-300 flex items-center justify-center mx-auto mb-4">
              <HomeIcon size={24} className="text-gray-300" />
            </div>
            <h3 className="font-heading font-bold text-gray-400 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('listings_empty_title')}
            </h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">{t('listings_empty_body')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((listing, i) => (
              <ListingCard key={listing.id} listing={listing} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
