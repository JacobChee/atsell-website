export const metadata = {
  title: 'Atsell vs Synagie — Boutique Enabler vs SGX-Listed Ecommerce Operator',
  description: 'Comparing Atsell and Synagie for ecommerce management in Singapore and Southeast Asia? Here\'s an honest breakdown of both — flexibility, service depth, platform coverage, and brand fit.',
  alternates: { canonical: '/vs/synagie' },
  openGraph: {
    title: 'Atsell vs Synagie | Ecommerce Enabler Comparison Singapore',
    description: 'Side-by-side comparison of Atsell and Synagie — boutique focus vs listed operator scale for brands on Shopee, Lazada, and TikTok Shop.',
    url: 'https://atsell.io/vs/synagie',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
}

const NAVY = '#1e3a5f'
const NAVY_DARK = '#152a45'
const GOLD = '#e8a838'
const WHITE = '#ffffff'
const OFF_WHITE = '#f8f9fc'
const GRAY = '#6b7a90'

const CHECK = '✓'
const PARTIAL = '~'
const CROSS = '✗'

export default function AtsellVsSynagie() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the difference between Atsell and Synagie?", "acceptedAnswer": { "@type": "Answer", "text": "Synagie is a SGX Catalist-listed ecommerce enabler based in Singapore with marketplace operations across Southeast Asia. Atsell is a boutique enabler with a capped client base, official partnerships on Shopee, Lazada, and TikTok Shop, and a team structure designed for close brand relationships. Synagie suits brands that prefer a listed company with formal governance. Atsell suits brands that want dedicated attention, flexibility, and a partner whose entire focus is their revenue growth." } },
          { "@type": "Question", "name": "Is Atsell or Synagie better for ecommerce enabling in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "Both are Singapore-based ecommerce enablers with platform partnerships. Atsell is the stronger choice for brands that need flexibility — adapting to brand-specific workflows, fast decision-making, and a boutique team structure where each account manager handles fewer brands. Synagie's listed company structure adds governance overhead that can slow responsiveness." } }
        ]
      })}} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .compare-table { font-size: 13px !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      <nav style={{ background: NAVY_DARK, padding: '0 24px', borderBottom: '1px solid rgba(232,168,56,0.15)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <img src="/atsell-logo.png" alt="Atsell" style={{ height: 36, width: 'auto' }} />
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <div className="nav-links" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              {[['Shopee Partner', '/shopee-partner'], ['Lazada Partner', '/lazada-partner'], ['TikTok Shop Partner', '/tiktok-shop-partner'], ['Blog', '/blog']].map(([label, href]) => (
                <a key={label} href={href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{label}</a>
              ))}
            </div>
            <a href="https://wa.me/6597121217" target="_blank" rel="noopener noreferrer" style={{ padding: '9px 20px', borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Book a Call</a>
          </div>
        </div>
      </nav>

      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '72px 24px 64px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(232,168,56,0.12)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, fontWeight: 600 }}>Comparison</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, margin: '8px 0 32px' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '10px 24px' }}>
              <img src="/atsell-logo.png" alt="Atsell" style={{ height: 26, width: 'auto', display: 'block' }} />
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: GOLD }}>vs</span>
            <a href="https://synagie.com" target="_blank" rel="nofollow noopener noreferrer" style={{ background: WHITE, borderRadius: 12, padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', minWidth: 120, minHeight: 46 }}>
              <img src="https://synagie.com/_next/static/media/logo.7cd0a8ce.png" alt="Synagie" style={{ height: 26, width: 'auto', maxWidth: 130, display: 'block' }} />
            </a>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, color: WHITE, lineHeight: 1.15, marginBottom: 20 }}>
            Atsell vs Synagie
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 40px' }}>
            Both Singapore-based enablers with platform partnerships. The difference comes down to corporate structure vs boutique agility — and what that means for your brand day to day.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 20, padding: '32px 40px', textAlign: 'left', maxWidth: 700, margin: '0 auto' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 16 }}>TL;DR</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
              Synagie is a SGX-listed operator — the listed structure adds legitimacy but also adds the corporate layers that slow things down. Account managers handle more brands, decisions take longer, and flexibility is harder to come by. Atsell keeps its client base deliberately small so every brand gets a team that actually knows their products, responds fast, and works around their workflows — not the other way around.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>At a Glance</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Feature comparison</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table" style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', sans-serif", fontSize: 15 }}>
              <thead>
                <tr style={{ background: NAVY_DARK }}>
                  <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textAlign: 'left', width: '40%' }}>Feature</th>
                  <th style={{ padding: '16px 20px', color: GOLD, fontWeight: 700, textAlign: 'center' }}>Atsell</th>
                  <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'center' }}>Synagie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Full end-to-end management', CHECK, CHECK],
                  ['Official Shopee partner', CHECK, CHECK],
                  ['Official Lazada partner', CHECK, CHECK],
                  ['Official TikTok Shop partner', CHECK, PARTIAL],
                  ['Liveselling (in-house hosts)', CHECK, PARTIAL],
                  ['Customer support included', CHECK, CHECK],
                  ['Boutique client load per AM', CHECK, CROSS],
                  ['Flexible to brand workflows', CHECK, PARTIAL],
                  ['Fast response & direct access', CHECK, PARTIAL],
                  ['Covers SG, MY, VN, TH, PH', CHECK, CHECK],
                  ['Live within 2–4 weeks', CHECK, PARTIAL],
                  ['SGX-listed governance', CROSS, CHECK],
                ].map(([feature, atsell, syn], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? OFF_WHITE : WHITE, borderBottom: '1px solid #e2e6ee' }}>
                    <td style={{ padding: '14px 20px', color: NAVY, fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: atsell === CHECK ? '#16a34a' : atsell === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{atsell}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: syn === CHECK ? '#16a34a' : syn === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{syn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, marginTop: 12 }}>✓ Included &nbsp;&nbsp; ~ Partial / varies &nbsp;&nbsp; ✗ Not standard</p>
          </div>
        </div>
      </section>

      <section style={{ background: OFF_WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Key Differences</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Where it actually matters</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              {
                title: 'Listed company structure vs boutique agility',
                content: 'Synagie\'s listing on SGX Catalist signals financial transparency and governance — which matters to some procurement processes. But listed company structure comes with layers: more management approvals, standardised service contracts, and account teams that serve a client portfolio sized for shareholder-friendly margins. Atsell is privately held and deliberately small — decisions are made quickly, account managers carry fewer brands, and the team can adapt without committee sign-off.'
              },
              {
                title: 'Account manager load',
                content: 'The single most predictable indicator of service quality in ecommerce enabling is how many brands each account manager handles. When that number climbs past 15–20, response times suffer, context gets lost between conversations, and the "dedicated" relationship becomes account administration. Atsell caps this deliberately. The team who onboards your brand is the team who manages it six months later — and they\'re not stretched across dozens of other accounts.'
              },
              {
                title: 'Working around your brand, not the other way around',
                content: 'Both Synagie and Atsell offer end-to-end marketplace management. The difference shows in how they handle brand-specific requirements. Synagie runs consistent processes across its client base — efficient, but inflexible when your brand has particular workflows, approval cycles, or content standards. Atsell builds the operating model around each brand. If you need weekly sign-off before any promotion goes live, or a custom reporting format, or specific communication channels — that\'s standard at Atsell, and an exception request at a listed operator.'
              },
            ].map(({ title, content }) => (
              <div key={title} style={{ background: WHITE, borderRadius: 16, padding: '32px 36px', border: '1px solid #e2e6ee' }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 14 }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.75 }}>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Honest Verdict</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Who should choose which</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="grid-2">
            <div style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, borderRadius: 20, padding: '36px 32px' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 20 }}>Choose Atsell if…</div>
              {[
                'You want fast responses, not ticketing systems',
                'Your brand has specific workflows or approval processes',
                'You need a team that handles the small stuff',
                'Flexibility and directness matter more than corporate credentials',
                'You want liveselling as a core service, not an add-on',
                'You\'re a growing brand that wants to be treated like a priority',
              ].map(point => (
                <div key={point} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: GOLD, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>
            <div style={{ background: OFF_WHITE, borderRadius: 20, padding: '36px 32px', border: '1px solid #e2e6ee' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 20 }}>Synagie might suit you if…</div>
              {[
                'Your procurement process requires a listed company',
                'You need formal SLAs and governance documentation',
                'You\'re a larger enterprise with complex contracting needs',
                'You want integrated tech platform with reporting dashboards',
              ].map(point => (
                <div key={point} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: NAVY, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>→</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: NAVY, lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '72px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <blockquote style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24 }}>
            "Ecommerce talent is scarce. A solid team would cost at least USD 10,000/mth. Atsell are true professionals and have supported me tremendously in scaling up my online business."
          </blockquote>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GOLD, fontWeight: 600 }}>Kelvin — Kingswood</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>Furniture brand · $90k+ monthly Shopee revenue in 5 months</div>
        </div>
      </section>

      <section style={{ background: OFF_WHITE, padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, marginBottom: 16 }}>Talk to a team that works around you</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, lineHeight: 1.7, marginBottom: 32 }}>Book a free consultation — we'll walk through your store and show you how Atsell would approach it differently.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27m%20comparing%20ecommerce%20enablers%20and%20would%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, marginTop: 16 }}>
            Also compare: <a href="/vs/sci-ecommerce" style={{ color: NAVY }}>Atsell vs SCI</a> · <a href="/vs/acommerce" style={{ color: NAVY }}>Atsell vs aCommerce</a> · <a href="/vs/leap-commerce" style={{ color: NAVY }}>Atsell vs LEAP Commerce</a>
          </p>
        </div>
      </section>

      <footer style={{ background: NAVY_DARK, padding: '32px 24px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ marginBottom: 12 }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Home</a>
          <a href="/shopee-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Shopee Partner</a>
          <a href="/lazada-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Lazada Partner</a>
          <a href="/tiktok-shop-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>TikTok Shop Partner</a>
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Blog</a>
        </div>
        <span>© 2026 Atsell. All rights reserved. · SG · MY · VN · TH · PH</span>
      </footer>
    </>
  )
}
