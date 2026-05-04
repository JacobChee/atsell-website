import ListingGrader from '../../src/ListingGrader'

export const metadata = {
  title: 'Shopee & Lazada Listing Title Grader | Free SEO Tool — Atsell',
  description: 'Grade your Shopee or Lazada listing title against platform SEO criteria. Category-aware scoring across 12 product types, with an AI-powered rewrite. Free tool by Atsell.',
  alternates: { canonical: '/seo-grader' },
  openGraph: {
    title: 'Free Shopee & Lazada Listing SEO Grader — Atsell',
    description: 'Paste your listing title and get an instant SEO score with category-specific feedback and an AI rewrite.',
    url: 'https://atsell.io/seo-grader',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
}

const NAVY = '#1e3a5f'
const NAVY_DARK = '#152a45'
const GOLD = '#e8a838'
const WHITE = '#ffffff'
const OFF_WHITE = '#f8f9fc'
const GRAY = '#6b7a90'

export default function SeoGraderPage() {
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
              {[['Shopee', '/shopee-partner'], ['Lazada', '/lazada-partner'], ['TikTok Shop', '/tiktok-shop-partner'], ['Calculator', '/calculator'], ['Blog', '/blog']].map(([label, href]) => (
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
              Listing Title SEO Grader
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              Category-aware SEO scoring for Shopee and Lazada listing titles — with an AI-powered rewrite that understands your product category.
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: '36px 32px', border: '1px solid rgba(232,168,56,0.15)' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 24 }}>SPICE scoring framework</div>
            {[
              ['Search terms', '25 pts — primary keyword presence & placement'],
              ['Product specifics', '25 pts — required attributes for your category'],
              ['Intent & benefits', '20 pts — benefit keywords and use-case signals'],
              ['Character length', '20 pts — optimal 70–120 chars'],
              ['Engagement hooks', '10 pts — SG trust signals & keyword richness'],
            ].map(([label, desc]) => (
              <div key={label} style={{ display: 'flex', gap: 14, marginBottom: 14, alignItems: 'flex-start' }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: GOLD, minWidth: 110, paddingTop: 2 }}>{label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ListingGrader />

      <footer style={{ background: NAVY_DARK, padding: '32px 24px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ marginBottom: 12 }}>
          {[['Home', '/'], ['Shopee Partner', '/shopee-partner'], ['Lazada Partner', '/lazada-partner'], ['TikTok Shop Partner', '/tiktok-shop-partner'], ['Calculator', '/calculator'], ['Blog', '/blog'], ['Privacy', '/privacy']].map(([label, href]) => (
            <a key={label} href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>{label}</a>
          ))}
        </div>
        <span>© 2026 Atsell. All rights reserved.</span>
      </footer>
    </>
  )
}
