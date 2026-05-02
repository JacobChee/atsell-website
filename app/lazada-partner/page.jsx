export const metadata = {
  title: 'Lazada Partner Singapore | Lazada Store Management — Atsell',
  description: 'Official Lazada partner managing LazMall and Marketplace stores across Singapore, Malaysia, Vietnam & Thailand. Full-service Lazada management: listings, ads, campaigns, and customer support.',
  alternates: { canonical: '/lazada-partner' },
  openGraph: {
    title: 'Lazada Partner Singapore | Lazada Store Management — Atsell',
    description: 'Official Lazada partner managing LazMall and Marketplace stores across Southeast Asia.',
    url: 'https://atsell.io/lazada-partner',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
}

const NAVY = '#1e3a5f'
const NAVY_DARK = '#152a45'
const GOLD = '#e8a838'
const WHITE = '#ffffff'
const OFF_WHITE = '#f8f9fc'
const GRAY = '#6b7a90'

export default function LazadaPartner() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Lazada Store Management",
        "provider": { "@type": "Organization", "name": "Atsell", "url": "https://atsell.io" },
        "description": "Full-service Lazada store management including LazMall setup, product listing optimisation, Lazada Sponsored Solutions ads, and campaign participation across Singapore, Malaysia, Vietnam, and Thailand.",
        "areaServed": ["SG", "MY", "VN", "TH"],
        "url": "https://atsell.io/lazada-partner"
      })}} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ background: NAVY_DARK, padding: '0 24px', borderBottom: '1px solid rgba(232,168,56,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: GOLD }}>Atsell</span>
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {[['Shopee Partner', '/shopee-partner'], ['TikTok Shop Partner', '/tiktok-shop-partner'], ['Blog', '/blog']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{label}</a>
            ))}
            <a href="https://wa.me/6597121217" target="_blank" rel="noopener noreferrer" style={{ padding: '9px 20px', borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Book a Call</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(232,168,56,0.12)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, fontWeight: 600 }}>Official Lazada Partner</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: WHITE, lineHeight: 1.15, marginBottom: 24 }}>
            Lazada Store Management<br />
            <span style={{ background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Growing Brands</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
            Atsell is an official Lazada partner managing LazMall and Marketplace stores across Singapore, Malaysia, Vietnam, and Thailand. We handle every part of your Lazada operation — so you don't have to.
          </p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20to%20learn%20more%20about%20Lazada%20management." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Get a Free Lazada Consultation
          </a>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ background: OFF_WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>What We Manage</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '12px 0', lineHeight: 1.2 }}>
              Full-service Lazada management
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="grid-3">
            {[
              { title: 'Store Setup & Optimisation', desc: 'LazMall and Marketplace store setup, branding, category configuration, and ongoing storefront optimisation to maximise conversion.' },
              { title: 'Product Listing Management', desc: 'Keyword-rich titles, SEO-optimised descriptions, A/B-tested images, and accurate attribute tagging to rank higher and convert better.' },
              { title: 'Lazada Sponsored Solutions', desc: 'Managed Lazada ads: Sponsored Products, Sponsored Brands, and Display Ads. We set budgets, targeting, and bids — and report on ROAS weekly.' },
              { title: 'Campaign Participation', desc: 'We submit your products and plan your deals for all Lazada mega-campaigns: 11.11, 12.12, LazSale, Birthday Sale, and platform-specific promotions.' },
              { title: 'Customer Service', desc: 'Trained agents handle all Lazada buyer enquiries 6 days a week, 9am–6pm. Under 10-second response time guaranteed. Ratings and reviews monitored.' },
              { title: 'Performance Reporting', desc: 'Monthly reports covering revenue, traffic, conversion, ad spend, and keyword rankings — with clear next-step recommendations.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: WHITE, borderRadius: 16, padding: 32, border: '1px solid #e2e6ee' }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LazMall vs Marketplace */}
      <section style={{ background: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Store Types</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>LazMall and Marketplace — we manage both</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="grid-2">
            {[
              { label: 'LazMall', points: ['Premium brand storefront with official badge', 'Higher consumer trust and conversion', 'Access to LazMall-exclusive campaigns', 'Stricter listing and fulfilment standards', 'Best for established brands entering SEA'] },
              { label: 'Marketplace', points: ['Lower barrier to entry', 'Flexible pricing and promotions', 'Full access to Lazada Sponsored Products', 'Ideal for brands launching in SEA for the first time', 'Can be upgraded to LazMall once criteria are met'] },
            ].map(({ label, points }) => (
              <div key={label} style={{ background: OFF_WHITE, borderRadius: 20, padding: 36, border: '1px solid #e2e6ee' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 20 }}>{label}</div>
                {points.map(p => (
                  <div key={p} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                    <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.5 }}>{p}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Markets</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: WHITE, margin: '12px 0 16px' }}>We manage Lazada stores across Southeast Asia</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.65)', marginBottom: 48 }}>Local teams in each market with platform knowledge, campaign calendars, and consumer behaviour insights.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="grid-2">
            {['Singapore', 'Malaysia', 'Vietnam', 'Thailand'].map(m => (
              <div key={m} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '24px 16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: WHITE }}>{m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: OFF_WHITE, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: NAVY, marginBottom: 16 }}>Ready to grow on Lazada?</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, lineHeight: 1.7, marginBottom: 32 }}>Book a free consultation and we'll assess your current Lazada setup, identify growth opportunities, and share what we'd do differently.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20to%20learn%20more%20about%20Lazada%20management." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, marginTop: 16 }}>Also managing <a href="/shopee-partner" style={{ color: NAVY }}>Shopee</a> and <a href="/tiktok-shop-partner" style={{ color: NAVY }}>TikTok Shop</a>.</p>
        </div>
      </section>

      <footer style={{ background: NAVY_DARK, padding: '32px 24px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ marginBottom: 12 }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Home</a>
          <a href="/shopee-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Shopee Partner</a>
          <a href="/tiktok-shop-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>TikTok Shop Partner</a>
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Blog</a>
          <a href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Privacy</a>
        </div>
        <span>© 2026 Atsell. All rights reserved. · SG · MY · VN · TH · PH</span>
      </footer>
    </>
  )
}
