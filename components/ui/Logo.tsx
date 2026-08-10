'use client';
import Image from 'next/image';
import Link from '@/components/ui/LocaleLink';

interface LogoProps {
  // 'gold' reads on navy/dark backgrounds, 'navy' reads on white/light backgrounds
  variant?: 'gold' | 'navy';
}

const SRC = { gold: '/images/orivanta-highres-gold-transparent.png', navy: '/images/orivanta-highres-navy-transparent.png' };

// Full lockup — the artwork already carries the wordmark and tagline, so no
// text is rendered next to it. The source is 1480x400 (3.7:1), so size by
// WIDTH and let height follow; a square box would crush it to a sliver.
// Tops out at w-56 (224px => ~61px tall), which fits the Navbar's h-24.
export default function Logo({ variant = 'navy' }: LogoProps) {
  return (
    <Link href="/" className="flex items-center" aria-label="ORIVANTA PROPERTY LTD - Home">
      <Image
        src={SRC[variant]}
        alt="ORIVANTA PROPERTY LTD"
        width={1480}
        height={400}
        priority
        className="object-contain h-auto w-40 sm:w-48 lg:w-56"
      />
    </Link>
  );
}
