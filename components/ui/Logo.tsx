'use client';
import Image from 'next/image';
import Link from '@/components/ui/LocaleLink';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SIZES = { sm: 56, md: 72, lg: 80, xl: 116 };

export default function Logo({ size = 'md' }: LogoProps) {
  const px = SIZES[size];

  return (
    <Link href="/" className="flex items-center" aria-label="ORIVANTA PROPERTY LTD - Home">
      <Image
        src="/images/orivanta-01-transparent.png"
        alt="ORIVANTA PROPERTY LTD"
        width={px}
        height={px}
        priority
        className="object-contain"
      />
    </Link>
  );
}
