'use client';
import Link from '@/components/ui/LocaleLink';

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
      {/* Logo Concept: OV Monogram — O ring merging into V, with a skyline + home mark inside */}
      <svg width={s.icon} height={s.icon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Background square with rounded corners */}
        <rect width="100" height="100" rx="20" fill={iconColor} />
        {/* O — ring */}
        <ellipse cx="40" cy="54" rx="23" ry="27" stroke={accentColor} strokeWidth="9" fill="none" />
        {/* V */}
        <path d="M50 25 L67 82 L84 25" stroke={accentColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Home roof + skyline, inside the O */}
        <path d="M18 58 L25.5 49 L33 58 Z" fill={innerColor} />
        <rect x="20" y="58" width="11" height="13" fill={innerColor} />
        <rect x="35" y="46" width="7" height="25" fill={innerColor} />
        <rect x="44" y="52" width="7" height="19" fill={innerColor} />
        <rect x="53" y="58" width="6" height="13" fill={innerColor} />
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
