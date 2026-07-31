import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowLeft, MapPin, Bed, Bath, Maximize2, Phone, Mail, MessageCircle, Tag } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';
import { BRAND } from '@/lib/data';
import { fetchListingBySlug, formatPrice, formatSize, propertyTypeLabel, purposeLabel } from '@/lib/listings';
import ListingGallery from './ListingGallery';

export const revalidate = 60;

const BASE_URL = 'https://www.orivantaproperty.rw';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = await fetchListingBySlug(slug);
  if (!listing) return {};
  const description = listing.description.slice(0, 155);
  return {
    title: listing.title,
    description,
    alternates: { canonical: `${BASE_URL}/listings/${slug}` },
    openGraph: {
      url: `${BASE_URL}/listings/${slug}`,
      title: `${listing.title} | ORIVANTA PROPERTY LTD`,
      description,
      images: listing.cover_image ? [{ url: listing.cover_image, width: 1200, height: 630, alt: listing.title }] : undefined,
    },
  };
}

export default async function ListingDetailPage({ params }: Props) {
  const { slug } = await params;
  const listing = await fetchListingBySlug(slug);
  if (!listing) notFound();

  const images = listing.images.length > 0 ? listing.images : listing.cover_image ? [listing.cover_image] : [];
  const size = formatSize(listing);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: listing.title,
    description: listing.description,
    url: `${BASE_URL}/listings/${listing.slug}`,
    image: listing.cover_image ?? undefined,
    address: { '@type': 'PostalAddress', addressLocality: listing.location, addressCountry: 'RW' },
    offers: {
      '@type': 'Offer',
      price: listing.price ?? undefined,
      priceCurrency: listing.currency,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <Script
        id={`json-ld-listing-${listing.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />

      <section className="pt-32 pb-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/listings" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#C9A227] transition-colors">
            <ArrowLeft size={15} /> Back to Listings
          </Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#10243B] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                  {purposeLabel(listing.purpose)}
                </span>
                <span className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
                  {propertyTypeLabel(listing.property_type)}
                </span>
              </div>
              <h1 className="font-heading font-bold text-[#10243B] text-2xl sm:text-3xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {listing.title}
              </h1>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-8">
                <MapPin size={14} className="text-[#C9A227]" />
                {listing.location}
              </div>

              <ListingGallery images={images} title={listing.title} />

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pb-8 border-b border-gray-100">
                {listing.bedrooms != null && (
                  <div className="flex items-center gap-2.5 bg-[#F8FAFC] rounded-sm px-4 py-3">
                    <Bed size={18} className="text-[#C9A227]" />
                    <div>
                      <div className="text-[#10243B] font-bold text-sm">{listing.bedrooms}</div>
                      <div className="text-gray-400 text-[11px] uppercase tracking-wide">Bedrooms</div>
                    </div>
                  </div>
                )}
                {listing.bathrooms != null && (
                  <div className="flex items-center gap-2.5 bg-[#F8FAFC] rounded-sm px-4 py-3">
                    <Bath size={18} className="text-[#C9A227]" />
                    <div>
                      <div className="text-[#10243B] font-bold text-sm">{listing.bathrooms}</div>
                      <div className="text-gray-400 text-[11px] uppercase tracking-wide">Bathrooms</div>
                    </div>
                  </div>
                )}
                {size && (
                  <div className="flex items-center gap-2.5 bg-[#F8FAFC] rounded-sm px-4 py-3">
                    <Maximize2 size={18} className="text-[#C9A227]" />
                    <div>
                      <div className="text-[#10243B] font-bold text-sm">{size}</div>
                      <div className="text-gray-400 text-[11px] uppercase tracking-wide">Size</div>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2.5 bg-[#F8FAFC] rounded-sm px-4 py-3">
                  <Tag size={18} className="text-[#C9A227]" />
                  <div>
                    <div className="text-[#10243B] font-bold text-sm">{propertyTypeLabel(listing.property_type)}</div>
                    <div className="text-gray-400 text-[11px] uppercase tracking-wide">Type</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="font-heading font-bold text-[#10243B] text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line">
                  {listing.description}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-28 lg:self-start space-y-5">
              <div className="bg-[#F8FAFC] rounded-sm border border-gray-100 p-7">
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Price</div>
                <div className="font-heading font-bold text-[#10243B] text-2xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {formatPrice(listing)}
                </div>

                <div className="space-y-3">
                  <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-2 bg-[#C9A227] text-[#10243B] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#b8911f] transition-colors w-full">
                    <Phone size={15} /> Call Us
                  </a>
                  <a href={`https://wa.me/${BRAND.whatsapp.replace(/\s/g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-[#10243B]/15 text-[#10243B] font-semibold text-sm px-6 py-3 rounded-full hover:border-[#C9A227] transition-colors w-full">
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                  <a href={`mailto:${BRAND.email}?subject=${encodeURIComponent('Inquiry: ' + listing.title)}`}
                    className="flex items-center justify-center gap-2 border-2 border-[#10243B]/15 text-[#10243B] font-semibold text-sm px-6 py-3 rounded-full hover:border-[#C9A227] transition-colors w-full">
                    <Mail size={15} /> Email Us
                  </a>
                </div>
              </div>

              <div className="bg-[#10243B] rounded-sm p-6">
                <div className="w-8 h-0.5 bg-[#C9A227] mb-4" />
                <h3 className="font-heading font-bold text-white text-sm mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Interested in This Property?
                </h3>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  Contact our team to schedule a viewing, ask questions, or make an offer.
                </p>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-colors w-full">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for a Different Property?"
        subtitle="Browse our full catalogue of listings or tell us exactly what you need."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel="View All Listings"
        secondaryHref="/listings"
      />
    </>
  );
}
