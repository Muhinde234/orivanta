import type { Metadata } from 'next';
import { Poppins, Mulish } from 'next/font/google';
import './globals.css';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mulish',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AXIOM Realty Consultant Ltd | Professional Real Estate Advisory',
    template: '%s | AXIOM Realty Consultant Ltd',
  },
  description: 'AXIOM Realty Consultant Ltd is Rwanda\'s professional real estate advisory firm offering property valuation, consultancy, management, brokerage, and investment advisory services.',
  keywords: ['real estate', 'property valuation', 'real estate consultancy', 'Rwanda', 'Kigali', 'property management', 'investment advisory'],
  openGraph: {
    type: 'website',
    locale: 'en_RW',
    siteName: 'AXIOM Realty Consultant Ltd',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${mulish.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased" style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
