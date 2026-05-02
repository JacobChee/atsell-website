export const metadata = {
  title: 'Ecommerce Enabler Singapore | Atsell — Shopee, Lazada & TikTok Shop',
  description: 'Official partner of Lazada, Shopee & TikTok Shop. Atsell manages your ecommerce operations across Singapore, Malaysia, Vietnam & Thailand. Book a free consultation.',
  keywords: 'Atsell, ecommerce enabler, Shopee partner, Lazada partner, TikTok Shop partner, ecommerce growth, marketplace management, Singapore',
  authors: [{ name: 'Atsell' }],
  robots: 'index, follow',
  metadataBase: new URL('https://atsell.io'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ecommerce Enabler Singapore | Atsell — Shopee, Lazada & TikTok Shop',
    description: 'Official partner of Lazada, Shopee & TikTok Shop. Atsell manages your ecommerce operations across Singapore, Malaysia, Vietnam & Thailand.',
    type: 'website',
    url: 'https://atsell.io',
    siteName: 'Atsell',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Enabler Singapore | Atsell — Shopee, Lazada & TikTok Shop',
    description: 'Official partner of Lazada, Shopee & TikTok Shop. Atsell manages your ecommerce operations across Singapore, Malaysia, Vietnam & Thailand.',
    images: ['/og-logo.png'],
  },
  verification: {
    google: 'wfcvYDQOielwiHTiUV_P0NYadtj60HO2AtiNrplKeNs',
  },
  icons: { icon: '/favicon.png' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Playfair+Display:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Atsell",
            "url": "https://atsell.io/"
          })}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Atsell",
            "url": "https://atsell.io/",
            "logo": "https://atsell.io/favicon.png",
            "description": "Ecommerce enabler helping brands grow across Lazada, Shopee and TikTok Shop in Southeast Asia.",
            "foundingDate": "2019",
            "areaServed": ["SG", "MY", "VN", "TH"],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "availableLanguage": ["English"]
            }
          })}}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
