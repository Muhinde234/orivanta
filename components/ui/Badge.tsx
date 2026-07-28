interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'light';
}

export default function Badge({ children, variant = 'gold' }: BadgeProps) {
  const variants = {
    gold: 'bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/20',
    navy: 'bg-[#10243B]/10 text-[#10243B] border border-[#10243B]/20',
    light: 'bg-white/10 text-white border border-white/20',
  };
  return (
    <span className={`inline-block text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm ${variants[variant]}`}>
      {children}
    </span>
  );
}
