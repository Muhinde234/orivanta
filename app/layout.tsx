import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
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
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
