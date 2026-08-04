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

const BASE_URL = 'https://www.orivantaproperty.rw';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ORIVANTA PROPERTY LTD | Professional Real Estate Advisory in Rwanda',
    template: '%s | ORIVANTA PROPERTY LTD',
  },
  description:
    'ORIVANTA PROPERTY LTD is Rwanda\'s trusted real estate advisory firm. We offer property valuation, real estate consultancy, property management, brokerage, investment advisory, and land development services in Kigali and across Rwanda.',
  keywords: [
    'real estate Rwanda',
    'property valuation Kigali',
    'real estate consultancy Rwanda',
    'property management Kigali',
    'investment advisory Rwanda',
    'land advisory Rwanda',
    'real estate brokerage Kigali',
    'facility management Rwanda',
    'ORIVANTA PROPERTY',
    'corporate real estate advisory',
  ],
  authors: [{ name: 'ORIVANTA PROPERTY LTD', url: BASE_URL }],
  creator: 'ORIVANTA PROPERTY LTD',
  publisher: 'ORIVANTA PROPERTY LTD',
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
    siteName: 'ORIVANTA PROPERTY LTD',
    title: 'ORIVANTA PROPERTY LTD | Professional Real Estate Advisory in Rwanda',
    description:
      'Rwanda\'s trusted real estate advisory firm — property valuation, consultancy, management, brokerage, and investment advisory in Kigali.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'ORIVANTA PROPERTY LTD' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORIVANTA PROPERTY LTD | Professional Real Estate Advisory in Rwanda',
    description:
      'Rwanda\'s trusted real estate advisory firm — property valuation, consultancy, management, brokerage, and investment advisory in Kigali.',
    images: ['/images/og-default.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
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
      name: 'ORIVANTA PROPERTY LTD',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/logo.png` },
      image: `${BASE_URL}/images/og-default.jpg`,
      description:
        'Professional real estate advisory firm in Rwanda offering property valuation, consultancy, management, brokerage, and investment advisory services.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'KN 82 St, Nyarugenge, NDAMAGE Building, 3rd Floor (opposite T2000 Building)',
        addressLocality: 'Kigali',
        addressCountry: 'RW',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+250-787-072-060',
        contactType: 'customer service',
        email: 'olivantaproperty@gmail.com',
        availableLanguage: ['English', 'French', 'Kinyarwanda'],
      },
      sameAs: [
        'https://www.linkedin.com/company/orivanta-property',
        'https://www.facebook.com/orivantaproperty',
        'https://www.instagram.com/orivantaproperty',
      ],
      areaServed: { '@type': 'Country', name: 'Rwanda' },
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'ORIVANTA PROPERTY LTD',
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
      <body suppressHydrationWarning className="antialiased" style={{ fontFamily: 'var(--font-mulish), Mulish, sans-serif' }}>
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
