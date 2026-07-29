import type { Metadata } from 'next';
import { Poppins, Mulish } from 'next/font/google';
import Script from 'next/script';
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

const BASE_URL = 'https://www.axiomrealty.rw';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AXIOM Realty Consultant Ltd | Professional Real Estate Advisory in Rwanda',
    template: '%s | AXIOM Realty Consultant Ltd',
  },
  description:
    'AXIOM Realty Consultant Ltd is Rwanda\'s trusted real estate advisory firm. We offer property valuation, real estate consultancy, property management, brokerage, investment advisory, and land development services in Kigali and across Rwanda.',
  keywords: [
    'real estate Rwanda',
    'property valuation Kigali',
    'real estate consultancy Rwanda',
    'property management Kigali',
    'investment advisory Rwanda',
    'land advisory Rwanda',
    'real estate brokerage Kigali',
    'facility management Rwanda',
    'AXIOM Realty',
    'corporate real estate advisory',
  ],
  authors: [{ name: 'AXIOM Realty Consultant Ltd', url: BASE_URL }],
  creator: 'AXIOM Realty Consultant Ltd',
  publisher: 'AXIOM Realty Consultant Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_RW',
    url: BASE_URL,
    siteName: 'AXIOM Realty Consultant Ltd',
    title: 'AXIOM Realty Consultant Ltd | Professional Real Estate Advisory in Rwanda',
    description:
      'Rwanda\'s trusted real estate advisory firm — property valuation, consultancy, management, brokerage, and investment advisory in Kigali.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'AXIOM Realty Consultant Ltd' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AXIOM Realty Consultant Ltd | Professional Real Estate Advisory in Rwanda',
    description:
      'Rwanda\'s trusted real estate advisory firm — property valuation, consultancy, management, brokerage, and investment advisory in Kigali.',
    images: ['/images/og-default.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SITE_VERIFICATION',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'RealEstateAgent'],
      '@id': `${BASE_URL}/#organization`,
      name: 'AXIOM Realty Consultant Ltd',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/logo.png` },
      image: `${BASE_URL}/images/og-default.jpg`,
      description:
        'Professional real estate advisory firm in Rwanda offering property valuation, consultancy, management, brokerage, and investment advisory services.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kigali',
        addressCountry: 'RW',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+250-XXX-XXX-XXX',
        contactType: 'customer service',
        email: 'info@axiomrealty.rw',
        availableLanguage: ['English', 'French', 'Kinyarwanda'],
      },
      sameAs: [
        'https://www.linkedin.com/company/axiom-realty',
        'https://www.facebook.com/axiomrealty',
        'https://www.instagram.com/axiomrealty',
      ],
      areaServed: { '@type': 'Country', name: 'Rwanda' },
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'AXIOM Realty Consultant Ltd',
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/services?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${mulish.variable}`}>
      <head>
        <meta name="geo.region" content="RW" />
        <meta name="geo.placename" content="Kigali, Rwanda" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased" style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}>
        {children}
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
