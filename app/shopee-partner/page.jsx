export const metadata = {
  title: 'Shopee Partner Singapore | Shopee Store Management — Atsell',
  description: 'Official Shopee partner managing Shopee Mall and non-Mall stores across Singapore, Malaysia, Vietnam & Thailand. Full-service Shopee management: listings, ads, campaigns, live selling, and customer support.',
  alternates: { canonical: '/shopee-partner' },
  openGraph: {
    title: 'Shopee Partner Singapore | Shopee Store Management — Atsell',
    description: 'Official Shopee partner managing Shopee Mall and non-Mall stores across Southeast Asia.',
    url: 'https://atsell.io/shopee-partner',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
}

const NAVY = '#1e3a5f'
const NAVY_DARK = '#152a45'
const GOLD = '#e8a838'
const WHITE = '#ffffff'
const OFF_WHITE = '#f8f9fc'
const GRAY = '#6b7a90'

export default function ShopeePartner() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Shopee Store Management",
        "provider": { "@type": "Organization", "name": "Atsell", "url": "https://atsell.io" },
        "description": "Full-service Shopee store management including Shopee Mall setup, product listing optimisation, Shopee Ads, Shopee Live selling, and campaign participation across Singapore, Malaysia, Vietnam, and Thailand.",
        "areaServed": ["SG", "MY", "VN", "TH"],
        "url": "https://atsell.io/shopee-partner"
      })}} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ background: NAVY_DARK, padding: '0 24px', borderBottom: '1px solid rgba(232,168,56,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: GOLD }}>Atsell</span>
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {[['Lazada Partner', '/lazada-partner'], ['TikTok Shop Partner', '/tiktok-shop-partner'], ['Blog', '/blog']].map(([label, href]) => (
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
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, fontWeight: 600 }}>Official Shopee Partner</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: WHITE, lineHeight: 1.15, marginBottom: 24 }}>
            Shopee Store Management<br />
            <span style={{ background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>that Drives Real Sales</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
            Atsell is an official Shopee partner. We manage Shopee Mall and non-Mall stores end-to-end — listings, ads, Shopee Live, customer service, and campaign execution across Singapore, Malaysia, Vietnam, and Thailand.
          </p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20to%20learn%20more%20about%20Shopee%20management." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Get a Free Shopee Consultation
          </a>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: OFF_WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>What We Manage</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Everything your Shopee store needs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="grid-3">
            {[
              { title: 'Shopee Store Setup', desc: 'Full Shopee Mall and non-Mall store setup: shop branding, category configuration, product upload, and initial keyword optimisation.' },
              { title: 'Listing Optimisation', desc: 'SEO-driven product titles, rich descriptions, optimised attributes, and high-quality images to rank in Shopee search and convert browsers to buyers.' },
              { title: 'Shopee Ads Management', desc: 'Managed Shopee Ads: Search Ads, Discovery Ads, and Shop Ads. We handle bidding strategy, budget allocation, and weekly performance reporting.' },
              { title: 'Shopee Live Selling', desc: 'Professional hosts run live selling sessions on Shopee Live to drive real-time sales. We handle host, script, scheduling, and post-stream analytics.' },
              { title: 'Campaign & Voucher Strategy', desc: 'Full participation in Shopee mega-campaigns (9.9, 10.10, 11.11, 12.12), flash deals, and platform voucher programs including Coins Cashback.' },
              { title: 'Customer Service', desc: 'Trained agents handle all Shopee buyer enquiries 6 days a week, 9am–6pm. Sub-10-second response time. Shop ratings and review responses managed.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: WHITE, borderRadius: 16, padding: 32, border: '1px solid #e2e6ee' }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Proven Results</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: WHITE, margin: '12px 0 48px' }}>Kingswood: from offline to Shopee's top wardrobe seller</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 }} className="grid-4">
            {[
              { label: 'Month 2', value: '$10,000+', sub: 'revenue' },
              { label: 'Month 3', value: '$50,000+', sub: 'revenue' },
              { label: 'Month 5', value: '$90,000+', sub: 'revenue' },
              { label: 'MoM Growth', value: '+456%', sub: 'revenue growth' },
            ].map(({ label, value, sub }) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: 24, border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: GOLD, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>{label}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: WHITE, marginBottom: 4 }}>{value}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{sub}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', maxWidth: 600, margin: '0 auto' }}>
            "Ecommerce talent is scarce. A solid team would cost at least USD 10,000/mth. Atsell are true professionals and have supported me tremendously in scaling up my online business." — Kelvin, Kingswood
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: OFF_WHITE, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: NAVY, marginBottom: 16 }}>Ready to grow on Shopee?</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, lineHeight: 1.7, marginBottom: 32 }}>Book a free consultation and we'll review your Shopee store, identify what's holding back your rankings, and show you what's possible.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20to%20learn%20more%20about%20Shopee%20management." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, marginTop: 16 }}>Also managing <a href="/lazada-partner" style={{ color: NAVY }}>Lazada</a> and <a href="/tiktok-shop-partner" style={{ color: NAVY }}>TikTok Shop</a>.</p>
        </div>
      </section>

      <footer style={{ background: NAVY_DARK, padding: '32px 24px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ marginBottom: 12 }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Home</a>
          <a href="/lazada-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Lazada Partner</a>
          <a href="/tiktok-shop-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>TikTok Shop Partner</a>
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Blog</a>
          <a href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Privacy</a>
        </div>
        <span>© 2026 Atsell. All rights reserved. · SG · MY · VN · TH · PH</span>
      </footer>
    </>
  )
}
