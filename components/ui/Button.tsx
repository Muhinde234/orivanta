'use client';
import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children, variant = 'primary', size = 'md', href, onClick,
  className = '', type = 'button', disabled, external
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A227] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#C9A227] text-[#10243B] hover:bg-[#b8911f] active:scale-[0.98]',
    secondary: 'bg-[#10243B] text-white hover:bg-[#1a3a5c] active:scale-[0.98]',
    outline: 'border-2 border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#10243B] active:scale-[0.98]',
    ghost: 'border-2 border-white text-white hover:bg-white hover:text-[#10243B] active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
    return <Link href={href} className={cls}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
