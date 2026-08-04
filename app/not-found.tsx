import Link from 'next/link';
import { ArrowRight, Home, Building2, Briefcase, PhoneCall } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const QUICK_LINKS = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Property Listings', href: '/listings', icon: Building2 },
  { label: 'Our Services', href: '/services', icon: Briefcase },
  { label: 'Contact Us', href: '/contact', icon: PhoneCall },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-[#10243B] flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-lg">
          <div
            className="font-black text-[#C9A227] mb-4"
            style={{ fontSize: '7rem', fontFamily: 'Poppins, sans-serif', lineHeight: 1 }}
          >
            404
          </div>
          <div className="w-12 h-0.5 bg-[#C9A227] mx-auto mb-6" />
          <h1
            className="font-bold text-white text-2xl mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            We Can&apos;t Find That Page
          </h1>
          <p className="text-white/60 text-sm mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist, may have been moved, or the link
            you followed might be outdated. Try one of the pages below, or head back home.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10">
            {QUICK_LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm px-4 py-3.5 text-left text-white/80 hover:text-white text-sm transition-colors"
              >
                <Icon size={16} className="text-[#C9A227] flex-shrink-0" />
                {label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#C9A227] text-[#10243B] font-bold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-colors text-sm"
          >
            Return to Home <ArrowRight size={16} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
