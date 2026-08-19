'use client';
import { motion } from 'framer-motion';
import Link from '@/components/ui/LocaleLink';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ListingCard from '@/components/ui/ListingCard';
import { Listing } from '@/lib/listings';
import { useLang } from '@/lib/LangContext';

export default function FeaturedListings({ listings }: { listings: Listing[] }) {
  const { t } = useLang();
  if (listings.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC]" aria-labelledby="featured-listings-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge={t('home_listings_badge')}
          title={t('home_listings_title')}
          highlight={t('home_listings_title_highlight')}
          subtitle={t('home_listings_subtitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing, i) => (
            <ListingCard key={listing.id} listing={listing} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 border-2 border-[#10243B] text-[#10243B] font-bold px-8 py-4 rounded-full hover:bg-[#10243B] hover:text-white transition-all duration-300 text-sm"
          >
            {t('home_listings_cta')} <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
