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
  const innerColor = variant === 'light' ? navy : white;
  const accentColor = gold;
  const textColor = variant === 'light' ? white : navy;

  const sizes = { sm: { icon: 28, text: 'text-sm' }, md: { icon: 36, text: 'text-base' }, lg: { icon: 44, text: 'text-xl' } };
  const s = sizes[size];

  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="ORIVANTA PROPERTY LTD - Home">
      {/* Logo Concept: Geometric OP Monogram (Orivanta Property) */}
      <svg width={s.icon} height={s.icon} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Background square with rounded corners */}
        <rect width="44" height="44" rx="8" fill={iconColor} />
        {/* O — ring */}
        <circle cx="16.5" cy="23" r="9" stroke={accentColor} strokeWidth="2.5" fill="none" />
        {/* P — vertical stem */}
        <line x1="29" y1="12" x2="29" y2="34" stroke={innerColor} strokeWidth="2.5" strokeLinecap="round" />
        {/* P — bowl */}
        <path d="M29 12 Q38 12 38 17.5 Q38 23 29 23" stroke={innerColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-bold tracking-wider uppercase ${s.text}`}
          style={{ color: textColor, fontFamily: 'Poppins, sans-serif', letterSpacing: '0.12em' }}
        >
          ORIVANTA
        </span>
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: accentColor, fontFamily: 'Inter, sans-serif', letterSpacing: '0.18em', fontSize: '0.6rem' }}
        >
          Property Ltd
        </span>
      </div>
    </Link>
  );
}
