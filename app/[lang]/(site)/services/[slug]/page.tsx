import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { CheckCircle } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import FAQ from '@/components/ui/FAQ';
import CTASection from '@/components/sections/CTASection';
import { SERVICE_SLUGS, getService } from '@/lib/data';
import { LOCALES, Lang } from '@/lib/locales';
import { translations } from '@/lib/translations';
import ServiceContent from './ServiceContent';

interface Props {
  params: Promise<{ lang: Lang; slug: string }>;
}

const BASE_URL = 'https://www.orivantaproperty.rw';

export async function generateStaticParams() {
  return LOCALES.flatMap((lang) => SERVICE_SLUGS.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const service = getService(lang, slug);
  if (!service) return {};
  const url = `${BASE_URL}/${lang}/services/${slug}`;
  return {
    title: service.title,
    description: service.shortDesc,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${service.title} | ORIVANTA PROPERTY LTD`,
      description: service.shortDesc,
      images: [{ url: '/images/orivanta-01.png', width: 400, height: 400, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { lang, slug } = await params;
  const service = getService(lang, slug);
  if (!service) notFound();
  const tr = translations[lang];

  return (
    <>
      <Script
        id={`json-ld-service-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: service.title,
            name: service.title,
            description: service.shortDesc,
            url: `${BASE_URL}/${lang}/services/${service.slug}`,
            provider: {
              '@type': 'Organization',
              name: 'ORIVANTA PROPERTY LTD',
              url: BASE_URL,
            },
            areaServed: { '@type': 'Country', name: 'Rwanda' },
          }),
        }}
        strategy="afterInteractive"
      />
      <PageBanner
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: tr.nav_home, href: '/' },
          { label: tr.nav_services, href: '/services' },
          { label: service.title },
        ]}
      />

      <ServiceContent slug={service.slug} />

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-sm border border-gray-100 p-8 shadow-sm">
              <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
              <h3 className="font-heading font-bold text-[#10243B] text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {tr.service_requirements}
              </h3>
              <ul className="space-y-3">
                {service.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600">
                    <CheckCircle size={16} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#10243B] rounded-sm p-8">
              <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
              <h3 className="font-heading font-bold text-white text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {tr.service_deliverables}
              </h3>
              <ul className="space-y-3">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-white/70">
                    <CheckCircle size={16} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FAQ items={service.faqs} title={tr.faqs_default_title} />
        </div>
      </section>

      <CTASection
        title={`${tr.service_ready_prefix} ${service.title}?`}
        subtitle={tr.service_slug_cta_subtitle}
        primaryLabel={service.cta}
        primaryHref="/contact"
        secondaryLabel={tr.services_view_all}
        secondaryHref="/services"
      />
    </>
  );
}
