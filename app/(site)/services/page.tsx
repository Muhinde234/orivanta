import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import CTASection from '@/components/sections/CTASection';
import { SERVICES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive real estate services from AXIOM Realty Consultant Ltd — property valuation, consultancy, management, brokerage, investment advisory, and more.',
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Real Estate Services"
        subtitle="Comprehensive real estate solutions designed to support property owners, investors, developers, businesses, and institutions throughout the entire property lifecycle."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block bg-white border border-gray-100 rounded-sm p-8 hover:border-[#C9A227]/40 hover:shadow-xl transition-all duration-400 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-[#C9A227] group-hover:h-full transition-all duration-400" />
                  <div className="w-14 h-14 rounded-sm bg-[#F8FAFC] group-hover:bg-[#10243B] flex items-center justify-center mb-6 transition-colors duration-400">
                    <Icon size={24} className="text-[#10243B] group-hover:text-[#C9A227] transition-colors duration-400" />
                  </div>
                  <div className="text-[#C9A227] text-xs font-semibold tracking-widest uppercase mb-2">Service {String(i + 1).padStart(2, '0')}</div>
                  <h2 className="font-heading font-bold text-[#10243B] text-lg mb-3 leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-2 text-[#10243B] group-hover:text-[#C9A227] text-xs font-bold uppercase tracking-wider transition-colors duration-300">
                    Learn More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        subtitle="Our consultants are ready to understand your situation and recommend the most appropriate professional solution."
        primaryLabel="Book a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Meet Our Team"
        secondaryHref="/team"
      />
    </>
  );
}
