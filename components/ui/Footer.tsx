import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';
import { BRAND, SERVICES } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#10243B] text-white" aria-label="Site footer">
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-white/60 text-sm leading-relaxed">
              Rwanda&apos;s professional real estate advisory firm delivering reliable, innovative, and client-focused property solutions.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: 'in', href: BRAND.linkedin, title: 'LinkedIn' },
                { label: 'f', href: BRAND.facebook, title: 'Facebook' },
                { label: 'ig', href: BRAND.instagram, title: 'Instagram' },
                { label: 'yt', href: BRAND.youtube, title: 'YouTube' },
                { label: 'x', href: BRAND.twitter, title: 'X (Twitter)' },
              ].map(({ label, href, title }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center hover:bg-[#C9A227] hover:text-[#10243B] transition-all duration-300 text-white hover:text-[#10243B] text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C9A227] transition-colors group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Team', href: '/team' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Request Consultation', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C9A227] transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h3>
            <ul className="space-y-3 mb-7">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={15} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                {BRAND.address}
              </li>
              <li>
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-[#C9A227] transition-colors">
                  <Phone size={15} className="text-[#C9A227] flex-shrink-0" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-[#C9A227] transition-colors">
                  <Mail size={15} className="text-[#C9A227] flex-shrink-0" />
                  {BRAND.email}
                </a>
              </li>
            </ul>
            {/* Newsletter */}
            <div>
              <p className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-3">Newsletter</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {year} AXIOM Realty Consultant Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Professional Real Estate Advisory · Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
