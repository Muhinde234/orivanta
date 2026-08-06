'use client';
import Image from 'next/image';
import Link from '@/components/ui/LocaleLink';

interface LogoProps {
  // 'gold' reads on navy/dark backgrounds, 'navy' reads on white/light backgrounds
  variant?: 'gold' | 'navy';
}

const SRC = { gold: '/images/gold.png', navy: '/images/navy.png' };

// Icon only — no wordmark text. Single responsive scale shared by every usage
// (Navbar, Footer, ...) so gold and navy always render at the same size.
// Tops out at w-24/h-24 (96px) on desktop — matching the Navbar's h-24 header.
export default function Logo({ variant = 'navy' }: LogoProps) {
  return (
    <Link href="/" className="flex items-center" aria-label="ORIVANTA PROPERTY LTD - Home">
      <Image
        src={SRC[variant]}
        alt="ORIVANTA PROPERTY LTD"
        width={96}
        height={96}
        priority
        className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
      />
    </Link>
  );
}
