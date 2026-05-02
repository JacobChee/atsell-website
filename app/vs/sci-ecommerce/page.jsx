export const metadata = {
  title: 'Atsell vs SCI Ecommerce — Which Ecommerce Enabler Is Right for Your Brand?',
  description: 'Comparing Atsell and SCI Ecommerce? Here\'s an honest breakdown of both enablers — service model, flexibility, platform coverage, and who each is built for.',
  alternates: { canonical: '/vs/sci-ecommerce' },
  openGraph: {
    title: 'Atsell vs SCI Ecommerce | Ecommerce Enabler Comparison',
    description: 'Side-by-side comparison of Atsell and SCI Ecommerce — service depth, flexibility, platform coverage, and results.',
    url: 'https://atsell.io/vs/sci-ecommerce',
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

export default function AtsellVsSCI() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the difference between Atsell and SCI Ecommerce?", "acceptedAnswer": { "@type": "Answer", "text": "Atsell is a boutique ecommerce enabler that works closely with each brand — handling all operations end-to-end across Shopee, Lazada, and TikTok Shop. SCI Ecommerce is a larger operator with more clients across more categories. Atsell suits brands that want dedicated, flexible partnership. SCI suits brands that need a high-volume operator with established enterprise processes." } },
          { "@type": "Question", "name": "Is Atsell or SCI Ecommerce better for small to mid-size brands?", "acceptedAnswer": { "@type": "Answer", "text": "Atsell is better suited for small to mid-size brands. As a boutique enabler, Atsell caps its client base to ensure every brand gets a dedicated team, fast responses, and a partner who genuinely knows their products. Larger operators like SCI run more accounts, which can mean less individual attention." } },
          { "@type": "Question", "name": "Does Atsell offer the same platform coverage as SCI Ecommerce?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Atsell is an official partner of Shopee, Lazada, and TikTok Shop — the three largest SEA marketplaces — covering Singapore, Malaysia, Vietnam, Thailand, and the Philippines." } }
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
            Atsell vs SCI Ecommerce
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 40px' }}>
            Both are Singapore-based ecommerce enablers with official platform partnerships. The difference comes down to scale vs attention — here's an honest comparison.
          </p>
          {/* TL;DR box */}
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 20, padding: '32px 40px', textAlign: 'left', maxWidth: 700, margin: '0 auto' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 16 }}>TL;DR</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
              SCI Ecommerce is a larger operator — established processes, broad category coverage, enterprise-grade volume. Atsell is boutique — capped client base, flexible enough to work around your workflows, and a team that handles the small stuff larger operators skip. If you want a partner that knows your products as well as your own team does, that's Atsell.
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
                  <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'center' }}>SCI Ecommerce</th>
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
                  ['Dedicated account team per brand', CHECK, PARTIAL],
                  ['Flexible to brand workflows', CHECK, '✗'],
                  ['Custom onboarding process', CHECK, PARTIAL],
                  ['Boutique client load (team focus)', CHECK, '✗'],
                  ['Covers SG, MY, VN, TH, PH', CHECK, CHECK],
                  ['Live within 2–4 weeks', CHECK, PARTIAL],
                ].map(([feature, atsell, sci], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? OFF_WHITE : WHITE, borderBottom: '1px solid #e2e6ee' }}>
                    <td style={{ padding: '14px 20px', color: NAVY, fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: atsell === CHECK ? '#16a34a' : atsell === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{atsell}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: sci === CHECK ? '#16a34a' : sci === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{sci}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, marginTop: 12 }}>✓ Included &nbsp;&nbsp; ~ Partial / varies by package &nbsp;&nbsp; ✗ Not standard</p>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {[
              {
                title: 'Account attention',
                content: `Larger enablers like SCI run a high volume of accounts — that's how the economics work at scale. Account managers handle dozens of brands simultaneously, which means response times slow down and the playbook gets standardised. Atsell deliberately caps its client base so every account manager is genuinely across your products, your margins, and your campaign calendar. When you message Atsell, you're not getting a ticketing system — you're getting someone who knows your store.`
              },
              {
                title: 'Flexibility and workflow fit',
                content: `Enterprise operators are built for consistency, not customisation. Their processes work well when you can fit into their template. Brands that have their own approval workflows, brand guidelines, content sign-off processes, or unusual logistics requirements often find large enablers slow to adapt. Atsell is built to work around you — whether that means weekly sign-off calls, custom reporting formats, or integrating with your existing logistics setup.`
              },
              {
                title: 'The small stuff',
                content: `The gap between a good and great marketplace store lives in the details: listing attribute completeness, keyword refresh cycles, campaign voucher stacking, buyer review responses, chat response speed. These are the tasks that move conversion rate but don't show up in big-picture reports. Larger operators optimise for the high-impact levers. Atsell handles both — because a boutique team is closer to the work.`
              },
              {
                title: 'Platform partnerships',
                content: `Both Atsell and SCI hold official platform partnerships with Shopee and Lazada. Atsell additionally holds TikTok Shop official partner status, which is increasingly relevant as TikTok Shop's share of SEA ecommerce grows. Official status means direct platform support, early access to beta features, and campaign priority — not just a badge.`
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
                'You want a team that knows your brand inside out',
                'You have specific workflows or approval processes',
                'You want liveselling included, not bolted on',
                'Speed of response matters to your operations',
                'You\'re a growing brand, not yet enterprise-scale',
                'You want flexibility, not a fixed playbook',
              ].map(point => (
                <div key={point} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: GOLD, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>
            <div style={{ background: OFF_WHITE, borderRadius: 20, padding: '36px 32px', border: '1px solid #e2e6ee' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 20 }}>SCI might be better if…</div>
              {[
                'You\'re an enterprise brand with 500+ SKUs',
                'You need a proven large-scale operator',
                'Your category requires deep physical distribution ties',
                'You have a large existing SCI relationship',
                'You need warehouse and fulfilment embedded into the contract',
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
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>What Brands Say</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: WHITE, margin: '12px 0 40px' }}>Built for brands that expect more</h2>
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, marginBottom: 16 }}>See if Atsell is the right fit</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, lineHeight: 1.7, marginBottom: 32 }}>Book a free 30-minute consultation. We'll review your current setup and tell you honestly what's possible — no hard sell.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27m%20comparing%20ecommerce%20enablers%20and%20would%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, marginTop: 16 }}>
            Also compare: <a href="/vs/anchanto" style={{ color: NAVY }}>Atsell vs Anchanto</a> · <a href="/vs/intrepid" style={{ color: NAVY }}>Atsell vs Intrepid</a> · <a href="/vs/ban-leong" style={{ color: NAVY }}>Atsell vs Ban Leong</a>
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
