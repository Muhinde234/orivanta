import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';
import { BRAND, SERVICES } from '@/lib/data';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1e30] text-white" aria-label="Site footer">
      {/* Gold top accent */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/[0.07]">

          {/* Brand — spans 4 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Logo variant="light" />
            <p className="text-white/55 text-sm leading-7" style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}>
              Rwanda&apos;s professional real estate advisory firm delivering reliable, innovative, and client-focused property solutions across the full property lifecycle.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { label: 'in', title: 'LinkedIn', href: BRAND.linkedin },
                { label: 'f', title: 'Facebook', href: BRAND.facebook },
                { label: 'ig', title: 'Instagram', href: BRAND.instagram },
                { label: 'yt', title: 'YouTube', href: BRAND.youtube },
                { label: 'x', title: 'X / Twitter', href: BRAND.twitter },
              ].map(({ label, title, href }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  className="w-8 h-8 rounded bg-white/8 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/60 hover:bg-[#C9A227] hover:text-[#10243B] hover:border-[#C9A227] transition-all duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services — spans 3 cols */}
          <div className="lg:col-span-3 lg:pl-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40 mb-5"
              style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
              Services
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
              Company
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
                Contact
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
                Newsletter
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30" style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}>
            © {year} AXIOM Realty Consultant Ltd. All rights reserved.
          </p>
          <p className="text-[12px] text-white/30" style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}>
            Professional Real Estate Advisory · Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
