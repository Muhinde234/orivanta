'use client';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const gold = '#C9A227';
  const navy = '#10243B';
  const white = '#FFFFFF';

  const iconColor = variant === 'light' ? white : navy;
  const accentColor = gold;
  const textColor = variant === 'light' ? white : navy;

  const sizes = { sm: { icon: 28, text: 'text-sm' }, md: { icon: 36, text: 'text-base' }, lg: { icon: 44, text: 'text-xl' } };
  const s = sizes[size];

  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="AXIOM Realty Consultant Ltd - Home">
      {/* Logo Concept 1: Geometric AR Monogram */}
      <svg width={s.icon} height={s.icon} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Background square with rounded corners */}
        <rect width="44" height="44" rx="8" fill={iconColor} />
        {/* A shape - left triangle */}
        <path d="M8 34L16 12L24 34" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* A crossbar */}
        <line x1="10.5" y1="27" x2="21.5" y2="27" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        {/* R vertical */}
        <line x1="27" y1="12" x2="27" y2="34" stroke={white} strokeWidth="2.5" strokeLinecap="round" />
        {/* R bump */}
        <path d="M27 12 Q36 12 36 19 Q36 26 27 26" stroke={white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* R leg */}
        <line x1="27" y1="26" x2="36" y2="34" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-bold tracking-wider uppercase ${s.text}`}
          style={{ color: textColor, fontFamily: 'Poppins, sans-serif', letterSpacing: '0.12em' }}
        >
          AXIOM
        </span>
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: accentColor, fontFamily: 'Inter, sans-serif', letterSpacing: '0.18em', fontSize: '0.6rem' }}
        >
          Realty Consultant
        </span>
      </div>
    </Link>
  );
}
