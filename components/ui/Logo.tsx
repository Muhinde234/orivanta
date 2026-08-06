'use client';
import Image from 'next/image';
import Link from '@/components/ui/LocaleLink';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  // 'gold' reads on navy/dark backgrounds, 'navy' reads on white/light backgrounds
  variant?: 'gold' | 'navy';
}

const ICON_PX = { sm: 32, md: 40, lg: 52, xl: 72 };
const TITLE_CLASS = { sm: 'text-sm', md: 'text-base', lg: 'text-lg sm:text-xl', xl: 'text-2xl sm:text-3xl' };
const SRC = { gold: '/images/gold.png', navy: '/images/navy.png' };
const TITLE_COLOR = { gold: 'text-[#C9A227]', navy: 'text-[#10243B]' };

export default function Logo({ size = 'md', variant = 'navy' }: LogoProps) {
  const iconPx = ICON_PX[size];

  return (
    <Link href="/" className="flex items-center gap-3 min-w-0" aria-label="ORIVANTA PROPERTY LTD - Home">
      <Image
        src={SRC[variant]}
        alt=""
        width={iconPx}
        height={iconPx}
        priority
        className="object-contain shrink-0"
      />
      <span className={`font-heading font-bold whitespace-nowrap ${TITLE_CLASS[size]} ${TITLE_COLOR[variant]}`}>
        ORIVANTA PROPERTY LTD
      </span>
    </Link>
  );
}
