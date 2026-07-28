import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChoose from '@/components/sections/WhyChoose';
import ValuesSection from '@/components/sections/ValuesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import MDSection from '@/components/sections/MDSection';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'AXIOM Realty Consultant Ltd | Professional Real Estate Advisory in Rwanda',
  description: 'Where property meets professional expertise. AXIOM Realty Consultant Ltd provides property valuation, real estate consultancy, investment advisory, and more in Rwanda.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Quick intro strip */}
      <section className="py-16 bg-[#10243B]" aria-label="Company introduction">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { num: '8+', label: 'Professional Services' },
              { num: 'Rwanda', label: 'Based in Kigali' },
              { num: 'Pan-Africa', label: 'Vision & Reach' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="font-heading font-black text-[#C9A227] text-3xl mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.num}
                </div>
                <div className="text-white/60 text-sm tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicesSection />
      <WhyChoose />
      <ValuesSection />
      <ProcessSection />
      <MDSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
