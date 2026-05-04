export const metadata = {
  title: 'Atsell vs LEAP Commerce — Ecommerce Enabler Comparison for SEA Brands',
  description: 'Comparing Atsell and LEAP Commerce for ecommerce management in Southeast Asia? Here\'s an honest breakdown of both enablers — service depth, flexibility, platform coverage, and brand fit.',
  alternates: { canonical: '/vs/leap-commerce' },
  openGraph: {
    title: 'Atsell vs LEAP Commerce | Ecommerce Enabler Comparison',
    description: 'Side-by-side comparison of Atsell and LEAP Commerce for brands evaluating ecommerce enablers in Southeast Asia.',
    url: 'https://atsell.io/vs/leap-commerce',
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

export default function AtsellVsLeapCommerce() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the difference between Atsell and LEAP Commerce?", "acceptedAnswer": { "@type": "Answer", "text": "Both Atsell and LEAP Commerce are ecommerce enablers operating across Southeast Asia with marketplace management services. LEAP Commerce operates at a larger regional scale with a broader country footprint. Atsell is a boutique enabler — capped client base, official partnerships on all three major SEA platforms, and a team structure built for close brand relationships and flexibility. Brands that want dedicated attention and a partner that adapts to their workflows consistently prefer Atsell." } },
          { "@type": "Question", "name": "Is Atsell or LEAP Commerce better for Shopee and TikTok Shop management?", "acceptedAnswer": { "@type": "Answer", "text": "Atsell holds official partner status on Shopee, Lazada, and TikTok Shop — all three. The team manages 100+ active brands exclusively on these platforms, building depth in listing optimisation, ads strategy, and platform algorithm changes that comes from daily immersion across a focused client base. Both enablers cover these platforms, but Atsell's boutique focus means more dedicated expertise per brand." } }
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
            <a href="https://leapcommerce.com" target="_blank" rel="nofollow noopener noreferrer" style={{ background: WHITE, borderRadius: 12, padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', minWidth: 120, minHeight: 46 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: NAVY_DARK }}>LEAP Commerce</span>
            </a>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, color: WHITE, lineHeight: 1.15, marginBottom: 20 }}>
            Atsell vs LEAP Commerce
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 40px' }}>
            Both are active SEA ecommerce enablers with growing regional footprints. Here's an honest look at where they differ — and which fits your brand better.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 20, padding: '32px 40px', textAlign: 'left', maxWidth: 700, margin: '0 auto' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 16 }}>TL;DR</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
              LEAP Commerce is scaling its regional presence across SEA with a broader country footprint. Atsell is deliberately boutique — fewer clients, more attention per brand, official partnerships on all three major platforms, and a team flexible enough to work around your workflows rather than a standardised template. If you want to be a priority account rather than one of many, Atsell is the better fit.
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
                  <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'center' }}>LEAP Commerce</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Full end-to-end management', CHECK, CHECK],
                  ['Official Shopee partner', CHECK, PARTIAL],
                  ['Official Lazada partner', CHECK, PARTIAL],
                  ['Official TikTok Shop partner', CHECK, PARTIAL],
                  ['Liveselling (in-house hosts)', CHECK, PARTIAL],
                  ['Customer support included', CHECK, CHECK],
                  ['Boutique client load per AM', CHECK, PARTIAL],
                  ['Flexible to brand workflows', CHECK, PARTIAL],
                  ['Covers SG, MY, VN, TH, PH', CHECK, CHECK],
                  ['Founded 2019, proven track record', CHECK, CHECK],
                  ['KPI-driven revenue model', CHECK, PARTIAL],
                ].map(([feature, atsell, leap], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? OFF_WHITE : WHITE, borderBottom: '1px solid #e2e6ee' }}>
                    <td style={{ padding: '14px 20px', color: NAVY, fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: atsell === CHECK ? '#16a34a' : atsell === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{atsell}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: leap === CHECK ? '#16a34a' : leap === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{leap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, marginTop: 12 }}>✓ Included &nbsp;&nbsp; ~ Partial / varies by package &nbsp;&nbsp; ✗ Not standard</p>
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
                title: 'Growth at scale vs boutique depth',
                content: 'LEAP Commerce has been expanding its regional footprint — more markets, more brands, more headcount. That trajectory suits brands that need a rapidly scaling operator with geographic breadth. The natural tension with aggressive growth is that the client-to-team ratio rises, and individual brand attention can thin out. Atsell made a deliberate choice to stay boutique — the team grows proportionally with the client base, keeping the quality of attention consistent as the roster grows.'
              },
              {
                title: 'Platform-native vs broad commerce',
                content: 'Atsell is entirely built around Shopee, Lazada, and TikTok Shop — the three platforms driving the majority of SEA ecommerce. Official partner status on all three means direct platform support, early campaign access, and a team that\'s seen every algorithmic change first-hand across 100+ live brands. LEAP Commerce covers marketplace management as part of a broader commerce offering. For brands where Shopee, Lazada, and TikTok Shop are the core channels, depth beats breadth.'
              },
              {
                title: 'Flexibility for brand-specific workflows',
                content: 'Growing regional operators tend to standardise delivery to maintain efficiency across a large client base. That creates friction for brands with non-standard operating requirements: specific content approval flows, custom promotional logic, non-standard reporting, or unique logistics constraints. Atsell is built to adapt. A boutique structure means fewer layers between your brief and the team executing it — and a team flexible enough to handle the small stuff that makes a real difference to conversion.'
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
                'You want a team genuinely across your products',
                'Official partner access on all 3 platforms matters',
                'You have brand-specific workflows to work around',
                'You want liveselling built in from the start',
                'Fast response time is part of how you operate',
                'You want accountability measured in revenue, not activity',
              ].map(point => (
                <div key={point} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: GOLD, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>
            <div style={{ background: OFF_WHITE, borderRadius: 20, padding: '36px 32px', border: '1px solid #e2e6ee' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 20 }}>LEAP might suit you if…</div>
              {[
                'You need presence across 6+ SEA markets simultaneously',
                'You want a single partner for a very large regional rollout',
                'Your brand is already in the LEAP Commerce ecosystem',
                'You need integrated D2C and marketplace under one roof',
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

      <section style={{ background: OFF_WHITE, padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, marginBottom: 16 }}>See what a boutique team can do for your brand</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, lineHeight: 1.7, marginBottom: 32 }}>Book a free consultation — we'll review your current setup and give you a specific, honest view of what's possible.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27m%20comparing%20ecommerce%20enablers%20and%20would%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, marginTop: 16 }}>
            Also compare: <a href="/vs/sci-ecommerce" style={{ color: NAVY }}>Atsell vs SCI</a> · <a href="/vs/acommerce" style={{ color: NAVY }}>Atsell vs aCommerce</a> · <a href="/vs/synagie" style={{ color: NAVY }}>Atsell vs Synagie</a>
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
