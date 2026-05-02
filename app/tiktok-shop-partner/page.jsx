export const metadata = {
  title: 'TikTok Shop Partner Singapore | TikTok Shop Management — Atsell',
  description: 'Official TikTok Shop partner managing storefronts, TikTok Ads, affiliate outreach, and live selling across Singapore, Malaysia, Vietnam & Thailand. Full-service TikTok commerce management.',
  alternates: { canonical: '/tiktok-shop-partner' },
  openGraph: {
    title: 'TikTok Shop Partner Singapore | TikTok Shop Management — Atsell',
    description: 'Official TikTok Shop partner managing storefronts and live selling across Southeast Asia.',
    url: 'https://atsell.io/tiktok-shop-partner',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
}

const NAVY = '#1e3a5f'
const NAVY_DARK = '#152a45'
const GOLD = '#e8a838'
const WHITE = '#ffffff'
const OFF_WHITE = '#f8f9fc'
const GRAY = '#6b7a90'

export default function TikTokShopPartner() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "TikTok Shop Management",
        "provider": { "@type": "Organization", "name": "Atsell", "url": "https://atsell.io" },
        "description": "Full-service TikTok Shop management including storefront setup, product listing optimisation, TikTok Ads for commerce, affiliate outreach, and professional live selling across Singapore, Malaysia, Vietnam, and Thailand.",
        "areaServed": ["SG", "MY", "VN", "TH"],
        "url": "https://atsell.io/tiktok-shop-partner"
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
            {[['Lazada Partner', '/lazada-partner'], ['Shopee Partner', '/shopee-partner'], ['Blog', '/blog']].map(([label, href]) => (
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
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, fontWeight: 600 }}>Official TikTok Shop Partner</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: WHITE, lineHeight: 1.15, marginBottom: 24 }}>
            TikTok Shop Management<br />
            <span style={{ background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Southeast Asia</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
            Atsell is an official TikTok Shop partner. We manage your TikTok storefront, run TikTok Ads, recruit affiliates, and execute professional live selling sessions — turning TikTok traffic into real revenue.
          </p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20to%20learn%20more%20about%20TikTok%20Shop%20management." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Get a Free TikTok Shop Consultation
          </a>
        </div>
      </section>

      {/* Why TikTok Shop */}
      <section style={{ background: OFF_WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Why TikTok Shop</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>The fastest-growing commerce platform in SEA</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="grid-3">
            {[
              { stat: '325M+', label: 'Monthly active users in SEA', desc: 'TikTok reaches more than half the internet users in Southeast Asia every month.' },
              { stat: '#1', label: 'Social commerce platform in SEA', desc: 'TikTok Shop surpassed Instagram and Facebook Shop as the leading social commerce destination.' },
              { stat: '3×', label: 'Higher conversion from live selling', desc: 'Live commerce on TikTok converts at 3× the rate of traditional product pages when done right.' },
            ].map(({ stat, label, desc }) => (
              <div key={stat} style={{ background: WHITE, borderRadius: 16, padding: 32, border: '1px solid #e2e6ee', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{stat}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>What We Manage</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Full-service TikTok Shop management</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="grid-3">
            {[
              { title: 'TikTok Shop Store Setup', desc: 'Full storefront setup: brand profile, product catalogue upload, pricing, shipping configuration, and seller account optimisation.' },
              { title: 'Product Listing Optimisation', desc: 'TikTok-native product titles, SEO tags, rich media (images and video), and category configuration to rank in TikTok Shop search.' },
              { title: 'TikTok Ads for Commerce', desc: 'Managed Video Shopping Ads, LIVE Shopping Ads, and Product Shopping Ads. We handle creative strategy, targeting, and budget optimisation.' },
              { title: 'Live Selling', desc: 'Professional hosts run scheduled live streams — product showcase, Q&A, flash deals, and countdown offers — to drive real-time impulse purchases.' },
              { title: 'Affiliate & Creator Outreach', desc: 'We identify and recruit relevant TikTok creators to promote your products through the TikTok Shop affiliate program, driving organic reach and sales.' },
              { title: 'Campaign Participation', desc: 'Full participation in TikTok Shop mega-sales: 9.9, 10.10, 11.11, 12.12, and brand-specific campaigns. We plan deals, vouchers, and live schedules.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: OFF_WHITE, borderRadius: 16, padding: 32, border: '1px solid #e2e6ee' }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: WHITE, marginBottom: 16 }}>Ready to sell on TikTok Shop?</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 32 }}>Book a free consultation. We'll assess your brand's TikTok Shop opportunity and put together a launch or growth plan.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20to%20learn%20more%20about%20TikTok%20Shop%20management." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>Also managing <a href="/lazada-partner" style={{ color: 'rgba(255,255,255,0.6)' }}>Lazada</a> and <a href="/shopee-partner" style={{ color: 'rgba(255,255,255,0.6)' }}>Shopee</a>.</p>
        </div>
      </section>

      <footer style={{ background: NAVY_DARK, padding: '32px 24px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif", borderTop: '1px solid rgba(232,168,56,0.1)' }}>
        <div style={{ marginBottom: 12 }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Home</a>
          <a href="/lazada-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Lazada Partner</a>
          <a href="/shopee-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Shopee Partner</a>
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Blog</a>
          <a href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Privacy</a>
        </div>
        <span>© 2026 Atsell. All rights reserved. · SG · MY · VN · TH · PH</span>
      </footer>
    </>
  )
}
