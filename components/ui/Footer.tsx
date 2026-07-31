'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';
import { BRAND, SERVICES } from '@/lib/data';
import { useLang } from '@/lib/LangContext';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const QUICK_LINKS = [
    { label: t('nav_home'), href: '/' },
    { label: t('nav_about'), href: '/about' },
    { label: t('nav_services'), href: '/services' },
    { label: t('nav_contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-[#0d1e30] text-white" aria-label="Site footer">
      {/* Gold top accent */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
      {/* Extra visual separator */}
      <div className="h-px bg-white/[0.06]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/[0.07]">

          {/* Brand — spans 4 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Logo variant="light" />
            <p className="text-white/55 text-[15px] leading-7" style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}>
              {t('footer_desc')}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { title: 'LinkedIn', href: BRAND.linkedin, svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /> },
                { title: 'Facebook', href: BRAND.facebook, svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
                { title: 'Instagram', href: BRAND.instagram, svg: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></> },
                { title: 'YouTube', href: BRAND.youtube, svg: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> },
                { title: 'X (Twitter)', href: BRAND.twitter, svg: <path d="M18 6 6 18M6 6l12 12" /> },
              ].map(({ title, href, svg }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  className="w-8 h-8 rounded bg-white/8 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#C9A227] hover:text-[#10243B] hover:border-[#C9A227] transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{svg}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services — spans 3 cols */}
          <div className="lg:col-span-3 lg:pl-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 mb-5"
              style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
              {t('footer_services')}
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-2 text-[13px] text-white/55 hover:text-[#C9A227] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
                  >
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#C9A227]" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links — spans 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 mb-5"
              style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
              {t('footer_company')}
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[13px] text-white/55 hover:text-[#C9A227] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}
                  >
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#C9A227]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter — spans 3 cols */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 mb-5"
                style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
                {t('footer_contact')}
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: MapPin, value: BRAND.address, href: undefined },
                  { icon: Phone, value: BRAND.phone, href: `tel:${BRAND.phone}` },
                  { icon: Mail, value: BRAND.email, href: `mailto:${BRAND.email}` },
                  { icon: Clock, value: BRAND.hours, href: undefined },
                ].map(({ icon: Icon, value, href }, i) => {
                  const inner = (
                    <span className="flex items-start gap-2.5 text-[13px] text-white/55 hover:text-white/80 transition-colors"
                      style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}>
                      <Icon size={13} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                      {value}
                    </span>
                  );
                  return (
                    <li key={i}>
                      {href ? <a href={href}>{inner}</a> : inner}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="pt-2 border-t border-white/[0.07]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 mb-3"
                style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
                {t('footer_newsletter')}
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30" style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}>
            © {year} ORIVANTA PROPERTY LTD. {t('footer_rights')}
          </p>
          <p className="text-[12px] text-white/30" style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}>
            {t('footer_tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
}
