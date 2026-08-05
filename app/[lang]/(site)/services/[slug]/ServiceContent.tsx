'use client';
import { motion } from 'framer-motion';
import Link from '@/components/ui/LocaleLink';
import { CheckCircle, Users, ArrowRight, Info, Mail, Quote } from 'lucide-react';
import { getServices, getStats, getTestimonials } from '@/lib/data';
import { useLang } from '@/lib/LangContext';

export default function ServiceContent({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const SERVICES = getServices(lang);
  const STATS = getStats(lang);
  const TESTIMONIALS = getTestimonials(lang);
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  const Icon = service.icon;

  const otherServices = SERVICES.filter(s => s.slug !== slug).slice(0, 4);
  const testimonial = TESTIMONIALS[SERVICES.findIndex(s => s.slug === slug) % TESTIMONIALS.length];

  return (
    <>
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex"
            >
              <div className="bg-[#F8FAFC] border border-gray-100 rounded-sm p-8 lg:p-10 w-full flex flex-col">
                <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">{t('service_overview_badge')}</span>
                <div className="w-10 h-0.5 bg-[#C9A227] mt-3 mb-5" />
                <h2 className="font-heading font-bold text-[#10243B] text-2xl mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('service_overview_title')} {service.title}?
                </h2>
                <p className="text-gray-600 leading-relaxed text-[15px]">{service.overview}</p>

                {/* Key benefits */}
                <div className="mt-9">
                  <h3 className="font-heading font-bold text-[#10243B] text-sm uppercase tracking-wide mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t('service_key_benefits')}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.whyNeed.slice(0, 6).map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 rounded-sm px-4 py-3.5 hover:border-[#C9A227]/30 hover:shadow-sm transition-all duration-200">
                        <div className="w-7 h-7 rounded-sm bg-[#10243B] flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={13} className="text-[#C9A227]" />
                        </div>
                        <span className="text-[#10243B] text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who it's for */}
                <div className="mt-9">
                  <h3 className="font-heading font-bold text-[#10243B] text-sm uppercase tracking-wide mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t('service_ideal_for')}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {service.whoNeeds.map((who, i) => (
                      <span key={i} className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#10243B] text-xs font-medium px-3.5 py-2 rounded-full">
                        <Users size={12} className="text-[#C9A227]" />
                        {who}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats strip */}
                <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {STATS.map((stat, i) => (
                    <div key={i}>
                      <div className="font-heading font-bold text-[#10243B] text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.value}</div>
                      <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Trust quote — anchored to the bottom of the card */}
                <div className="mt-auto pt-8 border-t border-gray-200 flex items-start gap-4">
                  <Quote size={26} className="text-[#C9A227]/40 flex-shrink-0" />
                  <p className="text-gray-500 text-sm italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                    <span className="block not-italic text-[#10243B] font-semibold text-xs mt-2">{testimonial.name}, {testimonial.role}</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 lg:sticky lg:top-28 lg:self-start"
            >
              {/* Quick summary card */}
              <div className="bg-[#F8FAFC] rounded-sm border border-gray-100 p-7">
                <div className="w-14 h-14 rounded-sm bg-[#10243B] flex items-center justify-center mb-5">
                  <Icon size={26} className="text-[#C9A227]" />
                </div>
                <h3 className="font-heading font-bold text-[#10243B] mb-3 text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('service_quick_summary')}
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
                <h3 className="font-heading font-bold text-[#10243B] text-sm mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{t('service_explore')}</h3>
                <div className="space-y-2">
                  {[
                    { href: '/about', icon: Info, label: t('sidebar_about'), sub: t('sidebar_about_sub') },
                    { href: '/contact', icon: Mail, label: t('sidebar_contact'), sub: t('sidebar_contact_sub') },
                    { href: '/services', icon: ArrowRight, label: t('sidebar_all_services'), sub: t('sidebar_all_services_sub') },
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
                <h3 className="font-heading font-bold text-white text-sm mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{t('service_other')}</h3>
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
                    {t('service_view_all')} <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#10243B]">
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
                {t('service_why_need')}
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
                {t('service_who_needs')}
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
