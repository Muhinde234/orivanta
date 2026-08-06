import type { Metadata } from 'next';
import Link from '@/components/ui/LocaleLink';
import { ArrowRight } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import CTASection from '@/components/sections/CTASection';
import { getServices } from '@/lib/data';
import { Lang } from '@/lib/locales';
import { translations } from '@/lib/translations';

const BASE_URL = 'https://www.orivantaproperty.rw';

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  const tr = translations[lang];
  const url = `${BASE_URL}/${lang}/services`;
  return {
    title: tr.meta_services_title,
    description: tr.meta_services_desc,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${tr.services_title} | ORIVANTA PROPERTY LTD`,
      description: tr.meta_services_desc,
      images: [{ url: '/images/orivanta-social.png', width: 800, height: 800, alt: 'ORIVANTA PROPERTY Services' }],
    },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const tr = translations[lang];
  const SERVICES = getServices(lang);
  return (
    <>
      <PageBanner
        title={tr.services_title}
        subtitle={tr.services_subtitle}
        breadcrumbs={[{ label: tr.nav_home, href: '/' }, { label: tr.nav_services }]}
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
                  <div className="text-[#C9A227] text-xs font-semibold tracking-widest uppercase mb-2">{tr.service_number_prefix} {String(i + 1).padStart(2, '0')}</div>
                  <h2 className="font-heading font-bold text-[#10243B] text-lg mb-3 leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-2 text-[#10243B] group-hover:text-[#C9A227] text-xs font-bold uppercase tracking-wider transition-colors duration-300">
                    {tr.learn_more} <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={tr.services_cta_title}
        subtitle={tr.services_cta_subtitle}
        primaryLabel={tr.services_cta_primary}
        primaryHref="/contact"
        secondaryLabel={tr.services_cta_secondary}
        secondaryHref="/about#team"
      />
    </>
  );
}
