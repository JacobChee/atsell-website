export const metadata = {
  title: 'Atsell vs Ban Leong Technologies — Pure-Play Enabler vs IT Distributor',
  description: 'Comparing Atsell and Ban Leong Technologies for ecommerce management in Singapore? Here\'s how a focused ecommerce enabler differs from a diversified IT distributor\'s ecommerce arm.',
  alternates: { canonical: '/vs/ban-leong' },
  openGraph: {
    title: 'Atsell vs Ban Leong Technologies | Ecommerce Enabler Comparison',
    description: 'Atsell is a pure-play ecommerce enabler. Ban Leong is an IT distributor with an ecommerce arm. Here\'s the difference for brands.',
    url: 'https://atsell.io/vs/ban-leong',
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

export default function AtsellVsBanLeong() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the difference between Atsell and Ban Leong Technologies?", "acceptedAnswer": { "@type": "Answer", "text": "Ban Leong Technologies is a Singapore Stock Exchange-listed IT products distributor that also operates an ecommerce enabler arm. Their core business is IT distribution. Atsell is a pure-play ecommerce enabler — 100% focused on helping brands sell on Shopee, Lazada, and TikTok Shop. For brands that need dedicated marketplace expertise rather than a distributor's ecommerce service, Atsell is the specialist choice." } },
          { "@type": "Question", "name": "Is Atsell or Ban Leong better for ecommerce enabling in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "Atsell is built exclusively for ecommerce enabling. With 100+ active clients, official partner status on all three major SEA platforms, and a 30+ person team focused entirely on marketplace operations, Atsell brings a depth of ecommerce expertise that a diversified IT distributor cannot match. Ban Leong's ecommerce services are best suited to brands already within their IT distribution network." } }
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
        }
      `}</style>

      {/* Nav */}
      <nav style={{ background: NAVY_DARK, padding: '0 24px', borderBottom: '1px solid rgba(232,168,56,0.15)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <img src="/atsell-logo.png" alt="Atsell" style={{ height: 36, width: 'auto' }} />
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {[['Shopee Partner', '/shopee-partner'], ['Lazada Partner', '/lazada-partner'], ['TikTok Shop Partner', '/tiktok-shop-partner'], ['Blog', '/blog']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{label}</a>
            ))}
            <a href="https://wa.me/6597121217" target="_blank" rel="noopener noreferrer" style={{ padding: '9px 20px', borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Book a Call</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '72px 24px 64px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(232,168,56,0.12)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, fontWeight: 600 }}>Comparison</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, color: WHITE, lineHeight: 1.15, marginBottom: 20 }}>
            Atsell vs Ban Leong Technologies
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 40px' }}>
            Ban Leong is an IT distributor with an ecommerce arm. Atsell is built purely to grow brands on SEA marketplaces. Here's what that difference means in practice.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 20, padding: '32px 40px', textAlign: 'left', maxWidth: 700, margin: '0 auto' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 16 }}>TL;DR</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
              Ban Leong Technologies is primarily an IT distributor — their ecommerce services are an extension of their distribution business and best suited to IT, electronics, and gaming categories within their existing network. Atsell manages brands across all categories on Shopee, Lazada, and TikTok Shop, with no category restrictions and a team whose entire focus is marketplace performance.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
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
                  <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'center' }}>Ban Leong</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pure-play ecommerce enabling', CHECK, CROSS],
                  ['All product categories', CHECK, PARTIAL],
                  ['Official Shopee partner', CHECK, PARTIAL],
                  ['Official Lazada partner', CHECK, PARTIAL],
                  ['Official TikTok Shop partner', CHECK, PARTIAL],
                  ['In-house liveselling hosts', CHECK, PARTIAL],
                  ['Customer support (6 days/week)', CHECK, PARTIAL],
                  ['Boutique account focus', CHECK, CROSS],
                  ['Flexible to brand workflows', CHECK, PARTIAL],
                  ['Founded specifically for enabling', CHECK, CROSS],
                  ['Covers SG, MY, VN, TH, PH', CHECK, PARTIAL],
                ].map(([feature, atsell, bl], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? OFF_WHITE : WHITE, borderBottom: '1px solid #e2e6ee' }}>
                    <td style={{ padding: '14px 20px', color: NAVY, fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: atsell === CHECK ? '#16a34a' : atsell === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{atsell}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: bl === CHECK ? '#16a34a' : bl === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{bl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, marginTop: 12 }}>✓ Included &nbsp;&nbsp; ~ Partial / varies &nbsp;&nbsp; ✗ Not standard</p>
          </div>
        </div>
      </section>

      {/* Deep Comparison */}
      <section style={{ background: OFF_WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Key Differences</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Where it actually matters</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              {
                title: 'Core business focus',
                content: 'Ban Leong Technologies is a public company whose primary revenue comes from IT distribution — brands like Razer, Motorola, and others in electronics and gaming. Their ecommerce services are built around supporting that distribution network. Atsell exists solely to grow brands on Shopee, Lazada, and TikTok Shop. Every hire, every process, every platform integration has been built for one purpose. That focus shows in depth of platform expertise.'
              },
              {
                title: 'Category flexibility',
                content: 'Ban Leong\'s ecommerce strengths are tied to their distribution roots — IT, electronics, gaming, consumer tech. Brands outside these verticals are less naturally aligned with their infrastructure and expertise. Atsell manages brands across all categories — from furniture and home goods (Kingswood) to FMCG, health, lifestyle, and apparel. Category shouldn\'t restrict your choice of enabler.'
              },
              {
                title: 'Boutique attention at every stage',
                content: 'As a listed company with distribution operations, Ban Leong\'s ecommerce accounts sit within a larger corporate structure. Escalation paths are longer, decisions involve more layers, and account managers serve across a broader set of priorities. Atsell is a boutique with a flat structure — you get fast answers, flexible decisions, and a team that works around your timeline, not theirs.'
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

      {/* Who It's For */}
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
                'You\'re not in IT/electronics/gaming',
                'You want a pure-play ecommerce specialist',
                'You need full-service: listings, ads, CS, liveselling',
                'You want boutique attention and a flexible partner',
                'You need to be live on Shopee, Lazada, and TikTok Shop',
                'You want real results, not just account management',
              ].map(point => (
                <div key={point} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: GOLD, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>
            <div style={{ background: OFF_WHITE, borderRadius: 20, padding: '36px 32px', border: '1px solid #e2e6ee' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 20 }}>Ban Leong might suit you if…</div>
              {[
                'Your brand is in IT, electronics, or gaming',
                'You\'re already in Ban Leong\'s distribution network',
                'You want ecommerce bundled with IT distribution',
                'Singapore is your primary market focus',
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

      {/* Social Proof */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '72px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <blockquote style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24 }}>
            "Ecommerce talent is scarce. A solid team would cost at least USD 10,000/mth. Atsell are true professionals and have supported me tremendously in scaling up my online business."
          </blockquote>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GOLD, fontWeight: 600 }}>Kelvin — Kingswood</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>Furniture brand · $90k+ monthly Shopee revenue in 5 months</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 48 }}>
            {[['100+', 'Active clients'], ['156%', 'Avg. revenue growth'], ['30+', 'Team members']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: WHITE }}>{val}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: OFF_WHITE, padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, marginBottom: 16 }}>Work with a team that only does ecommerce</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, lineHeight: 1.7, marginBottom: 32 }}>Book a free consultation. We'll walk you through what Atsell would do with your store — specifics, not generalities.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27m%20comparing%20ecommerce%20enablers%20and%20would%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, marginTop: 16 }}>
            Also compare: <a href="/vs/sci-ecommerce" style={{ color: NAVY }}>Atsell vs SCI Ecommerce</a> · <a href="/vs/anchanto" style={{ color: NAVY }}>Atsell vs Anchanto</a> · <a href="/vs/intrepid" style={{ color: NAVY }}>Atsell vs Intrepid</a>
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
