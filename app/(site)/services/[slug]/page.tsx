import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import PageBanner from '@/components/ui/PageBanner';
import FAQ from '@/components/ui/FAQ';
import CTASection from '@/components/sections/CTASection';
import { SERVICES } from '@/lib/data';
import ServiceContent from './ServiceContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.shortDesc };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <ServiceContent slug={service.slug} />

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-sm border border-gray-100 p-8 shadow-sm">
              <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
              <h3 className="font-heading font-bold text-[#10243B] text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Client Requirements
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
                What You Will Receive
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

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FAQ items={service.faqs} />
        </div>
      </section>

      <CTASection
        title={`Ready to Get Started with ${service.title}?`}
        subtitle="Our professional team is ready to discuss your requirements and provide expert guidance tailored to your needs."
        primaryLabel={service.cta}
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </>
  );
}
