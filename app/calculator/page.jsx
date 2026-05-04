import Calculator from '../../src/Calculator'

export const metadata = {
  title: 'Shopee, Lazada & TikTok Shop Fee Calculator | Free Tool — Atsell',
  description: 'Calculate your exact payout after Shopee, Lazada, and TikTok Shop platform fees. Covers commission, transaction fees, and GST. Free tool by Atsell.',
  alternates: { canonical: '/calculator' },
  openGraph: {
    title: 'Free Marketplace Fee Calculator — Shopee, Lazada & TikTok Shop',
    description: 'See exactly what you keep after platform fees on Shopee, Lazada, and TikTok Shop. Free calculator by Atsell.',
    url: 'https://atsell.io/calculator',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
}

const NAVY = '#1e3a5f'
const NAVY_DARK = '#152a45'
const GOLD = '#e8a838'
const WHITE = '#ffffff'
const OFF_WHITE = '#f8f9fc'
const GRAY = '#6b7a90'

export default function CalculatorPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; max-width: 1100px; margin: 0 auto; }
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr; gap: 32px; } .nav-links { display: none !important; } }
      `}</style>

      <nav style={{ background: NAVY_DARK, padding: '0 24px', borderBottom: '1px solid rgba(232,168,56,0.15)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <img src="/atsell-logo.png" alt="Atsell" style={{ height: 36, width: 'auto' }} />
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <div className="nav-links" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              {[['Shopee', '/shopee-partner'], ['Lazada', '/lazada-partner'], ['TikTok Shop', '/tiktok-shop-partner'], ['SEO Grader', '/seo-grader'], ['Blog', '/blog']].map(([label, href]) => (
                <a key={label} href={href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{label}</a>
              ))}
            </div>
            <a href="https://wa.me/6597121217" target="_blank" rel="noopener noreferrer" style={{ padding: '9px 20px', borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Book a Call</a>
          </div>
        </div>
      </nav>

      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '72px 24px' }}>
        <div className="hero-grid">
          <div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Free Tool</span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, color: WHITE, margin: '12px 0 16px', lineHeight: 1.2 }}>
              Marketplace Fee Calculator
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              See exactly what you keep after Shopee, Lazada, and TikTok Shop platform fees — commission, transaction fees, and GST included.
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: '36px 32px', border: '1px solid rgba(232,168,56,0.15)' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 24 }}>What's covered</div>
            {[
              ['Shopee Mall', 'Commission + transaction + coins cashback fee'],
              ['Shopee Non-Mall', 'Commission + transaction fee by sub-category'],
              ['Lazada', 'Marketplace & LazMall · SPA & Non-SPA rates + GST'],
              ['TikTok Shop', 'Standard & BXP commission rates + GST'],
            ].map(([platform, desc]) => (
              <div key={platform} style={{ display: 'flex', gap: 14, marginBottom: 18, alignItems: 'flex-start' }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: GOLD, minWidth: 100, paddingTop: 2 }}>{platform}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: OFF_WHITE, padding: '64px 24px 80px' }}>
        <Calculator />
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, textAlign: 'center', marginTop: 24, maxWidth: 600, margin: '24px auto 0' }}>
          Fee rates are based on official Singapore marketplace rate cards (Shopee effective 1 Jan 2026, Lazada effective 9 Feb 2026, TikTok Shop effective 1 Apr 2026). Estimates only — actual payouts may vary.
        </p>
      </section>

      <section style={{ background: WHITE, padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e2e6ee' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: NAVY, marginBottom: 12 }}>Want someone to manage the whole store?</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.7, marginBottom: 28 }}>Atsell is an official partner of Shopee, Lazada, and TikTok Shop. We handle listings, ads, customer service, and live selling for 100+ brands across Southeast Asia.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20ecommerce%20services." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '14px 36px', borderRadius: 10, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
        </div>
      </section>

      <footer style={{ background: NAVY_DARK, padding: '32px 24px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ marginBottom: 12 }}>
          {[['Home', '/'], ['Shopee Partner', '/shopee-partner'], ['Lazada Partner', '/lazada-partner'], ['TikTok Shop Partner', '/tiktok-shop-partner'], ['SEO Grader', '/seo-grader'], ['Blog', '/blog'], ['Privacy', '/privacy']].map(([label, href]) => (
            <a key={label} href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>{label}</a>
          ))}
        </div>
        <span>© 2026 Atsell. All rights reserved.</span>
      </footer>
    </>
  )
}
