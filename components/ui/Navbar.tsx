'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Logo from './Logo';
import { useLang } from '@/lib/LangContext';
import { Lang } from '@/lib/translations';

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'rw', label: 'RW', flag: '🇷🇼' },
];

const SERVICE_LINKS = [
  { label: 'Property Valuation', href: '/services/property-valuation' },
  { label: 'Real Estate Consultancy', href: '/services/real-estate-consultancy' },
  { label: 'Property Management', href: '/services/property-management' },
  { label: 'Facility Management', href: '/services/facility-management' },
  { label: 'Real Estate Brokerage', href: '/services/real-estate-brokerage' },
  { label: 'Corporate Real Estate Advisory', href: '/services/corporate-real-estate-advisory' },
  { label: 'Investment Advisory', href: '/services/investment-advisory' },
  { label: 'Land Advisory', href: '/services/land-advisory' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navBg = scrolled || !isHome ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent';
  const linkColor = scrolled || !isHome ? 'text-[#10243B]' : 'text-white';
  const logoVariant = scrolled || !isHome ? 'dark' : 'light';

  const navLinks = [
    { label: t('nav_home'), href: '/' },
    { label: t('nav_about'), href: '/about' },
    { label: t('nav_services'), href: '/services', children: SERVICE_LINKS },
    { label: t('nav_team'), href: '/team' },
    { label: t('nav_contact'), href: '/contact' },
  ];

  const currentLang = LANGS.find(l => l.code === lang)!;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo variant={logoVariant} />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#C9A227] ${linkColor} ${pathname.startsWith('/services') ? 'text-[#C9A227]' : ''}`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-white rounded-sm shadow-xl border border-gray-100 py-2 z-50"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <Link href="/services" className="block px-5 py-2.5 text-xs font-bold text-[#C9A227] uppercase tracking-widest border-b border-gray-100 mb-1">
                            {t('nav_all_services')}
                          </Link>
                          {link.children.map((child) => (
                            <Link key={child.href} href={child.href}
                              className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#F8FAFC] hover:text-[#10243B] transition-colors">
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-[#C9A227] ${linkColor} ${pathname === link.href ? 'text-[#C9A227]' : ''}`}>
                    {link.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Desktop right: lang + phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(o => !o)}
                  className={`flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#C9A227] ${linkColor} border border-current/20 rounded-full px-3 py-1.5`}
                >
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.label}</span>
                  <ChevronDown size={12} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 bg-white rounded-sm shadow-xl border border-gray-100 py-1 z-50 min-w-[110px]"
                    >
                      {LANGS.map(l => (
                        <button key={l.code}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-[#F8FAFC] transition-colors ${lang === l.code ? 'text-[#C9A227] font-bold' : 'text-gray-700'}`}
                        >
                          {l.flag} {l.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="tel:+250XXXXXXXXX" className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#C9A227] ${linkColor}`}>
                <Phone size={15} />
                <span>+250 XXX XXX XXX</span>
              </a>

              <Link href="/contact"
                className="bg-[#C9A227] text-[#10243B] text-sm font-bold px-6 py-3 rounded-full hover:bg-[#b8911f] transition-colors">
                {t('nav_cta')}
              </Link>
            </div>

            {/* Mobile toggle */}
            <button className={`lg:hidden p-2 ${linkColor}`} onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu" aria-expanded={mobileOpen}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#10243B] flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link href={link.href}
                    className={`block py-4 text-lg font-semibold border-b border-white/10 transition-colors hover:text-[#C9A227] ${pathname === link.href ? 'text-[#C9A227]' : 'text-white'}`}>
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 mt-1 mb-2 space-y-1">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href}
                          className="block py-2 text-sm text-white/60 hover:text-[#C9A227] transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile lang switcher */}
            <div className="mt-6 flex gap-2">
              {LANGS.map(l => (
                <button key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`flex-1 py-2 rounded-full text-sm font-bold transition-colors ${lang === l.code ? 'bg-[#C9A227] text-[#10243B]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {l.flag} {l.label}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <Link href="/contact"
                className="block w-full text-center bg-[#C9A227] text-[#10243B] font-bold py-4 rounded-full hover:bg-[#b8911f] transition-colors">
                {t('nav_cta')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
