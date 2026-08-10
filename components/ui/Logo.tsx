'use client';
import Image from 'next/image';
import Link from '@/components/ui/LocaleLink';

interface LogoProps {

  variant?: 'gold' | 'navy';
}

const SRC = { gold: '/images/orivanta-highres-gold-transparent.png', navy: '/images/orivanta-highres-navy-transparent.png' };


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
