'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Users, ArrowRight, Phone, Info, UserCircle2, Mail } from 'lucide-react';
import { SERVICES } from '@/lib/data';

export default function ServiceContent({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  const Icon = service.icon;

  const otherServices = SERVICES.filter(s => s.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">Service Overview</span>
              <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-5" />
              <h2 className="font-heading font-bold text-[#10243B] text-2xl mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                What is {service.title}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">{service.overview}</p>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              {/* Quick summary card */}
              <div className="bg-[#F8FAFC] rounded-sm border border-gray-100 p-7">
                <div className="w-14 h-14 rounded-sm bg-[#10243B] flex items-center justify-center mb-5">
                  <Icon size={26} className="text-[#C9A227]" />
                </div>
                <h3 className="font-heading font-bold text-[#10243B] mb-3 text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Quick Summary
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{service.shortDesc}</p>
                <div className="mt-5 pt-5 border-t border-gray-200">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#b8911f] transition-colors w-full justify-center">
                    {service.cta}
                  </Link>
                </div>
              </div>

              {/* Associate pages */}
              <div className="bg-white rounded-sm border border-gray-100 p-6 shadow-sm">
                <div className="w-8 h-0.5 bg-[#C9A227] mb-4" />
                <h3 className="font-heading font-bold text-[#10243B] text-sm mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Explore AXIOM</h3>
                <div className="space-y-2">
                  {[
                    { href: '/about', icon: Info, label: 'About Us', sub: 'Our story & values' },
                    { href: '/team', icon: UserCircle2, label: 'Our Team', sub: 'Meet the experts' },
                    { href: '/contact', icon: Mail, label: 'Contact Us', sub: 'Get in touch' },
                    { href: '/services', icon: ArrowRight, label: 'All Services', sub: 'Full service list' },
                  ].map(({ href, icon: LinkIcon, label, sub }) => (
                    <Link key={href} href={href}
                      className="flex items-center gap-3 p-3 rounded-sm hover:bg-[#F8FAFC] hover:border-[#C9A227]/20 border border-transparent transition-all duration-200 group">
                      <div className="w-8 h-8 rounded-sm bg-[#10243B]/5 group-hover:bg-[#10243B] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                        <LinkIcon size={14} className="text-[#10243B] group-hover:text-[#C9A227] transition-colors duration-200" />
                      </div>
                      <div>
                        <div className="text-[#10243B] font-semibold text-xs">{label}</div>
                        <div className="text-gray-400 text-xs">{sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other services */}
              <div className="bg-[#10243B] rounded-sm p-6">
                <div className="w-8 h-0.5 bg-[#C9A227] mb-4" />
                <h3 className="font-heading font-bold text-white text-sm mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Other Services</h3>
                <div className="space-y-2">
                  {otherServices.map(s => {
                    const SIcon = s.icon;
                    return (
                      <Link key={s.slug} href={`/services/${s.slug}`}
                        className="flex items-center gap-3 p-2.5 rounded-sm hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-200 group">
                        <SIcon size={14} className="text-[#C9A227] flex-shrink-0" />
                        <span className="text-white/70 group-hover:text-white text-[15px] transition-colors">{s.title}</span>
                      </Link>
                    );
                  })}
                  <Link href="/services"
                    className="flex items-center gap-2 pt-2 text-[#C9A227] text-xs font-semibold hover:underline">
                    View all services <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#10243B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
              <h3 className="font-heading font-bold text-white text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Why Do You Need This Service?
              </h3>
              <ul className="space-y-3">
                {service.whyNeed.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-white/70">
                    <CheckCircle size={15} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="w-10 h-0.5 bg-[#C9A227] mb-4" />
              <h3 className="font-heading font-bold text-white text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Who Needs This Service?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {service.whoNeeds.map((who, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-sm px-4 py-3">
                    <Users size={13} className="text-[#C9A227] flex-shrink-0" />
                    <span className="text-white/70 text-xs">{who}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
