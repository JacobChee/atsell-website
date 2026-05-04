export const metadata = {
  title: 'Atsell vs Anchanto — Managed Ecommerce Service vs SaaS Platform',
  description: 'Anchanto is a SaaS platform for brands managing their own ecommerce. Atsell is a managed team that runs it for you. Here\'s which model fits your brand.',
  alternates: { canonical: '/vs/anchanto' },
  openGraph: {
    title: 'Atsell vs Anchanto | Managed Service vs Software Platform',
    description: 'Comparing Atsell\'s full-service ecommerce management with Anchanto\'s OMS/WMS software — different models, different buyers.',
    url: 'https://atsell.io/vs/anchanto',
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

export default function AtsellVsAnchanto() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the difference between Atsell and Anchanto?", "acceptedAnswer": { "@type": "Answer", "text": "Anchanto is a SaaS platform that provides order management (OMS) and warehouse management (WMS) software for brands who want to operate their own ecommerce. Atsell is a full-service managed team — they run your Shopee, Lazada, and TikTok Shop stores on your behalf, including listings, ads, customer service, and liveselling. If you want software to manage ecommerce yourself, Anchanto fits. If you want a team to manage ecommerce for you, Atsell fits." } },
          { "@type": "Question", "name": "Does Anchanto manage ecommerce for brands?", "acceptedAnswer": { "@type": "Answer", "text": "Anchanto provides the software tools for brands to manage their own ecommerce operations. It is not a managed service — your team still needs to operate the platform, run ads, handle customer service, and create content. Atsell, by contrast, handles all of this on your behalf." } },
          { "@type": "Question", "name": "Which is cheaper — Anchanto or Atsell?", "acceptedAnswer": { "@type": "Answer", "text": "Anchanto charges a SaaS subscription fee, but brands still need to staff and run ecommerce operations in-house. Total cost includes the software plus salaries. Atsell charges a management fee that covers the entire team. For many brands, especially those without an existing ecommerce team, Atsell's all-in cost is lower than building and staffing internal capability." } }
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

      {/* Nav */}
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

      {/* Hero */}
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
            <a href="https://anchanto.com" target="_blank" rel="nofollow noopener noreferrer" style={{ background: WHITE, borderRadius: 12, padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', minWidth: 120, minHeight: 46 }}>
              <img src="https://anchanto.com/wp-content/themes/anchanto-v2/assets/images/anchanto-dark-logo-svg.svg" alt="Anchanto" style={{ height: 26, width: 'auto', maxWidth: 130, display: 'block' }} />
            </a>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, color: WHITE, lineHeight: 1.15, marginBottom: 20 }}>
            Atsell vs Anchanto
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 40px' }}>
            These are fundamentally different products. Anchanto gives you software. Atsell gives you a team. Here's how to decide which model your brand actually needs.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 20, padding: '32px 40px', textAlign: 'left', maxWidth: 700, margin: '0 auto' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 16 }}>TL;DR</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
              Anchanto is a software platform — your team still needs to run ecommerce using it. Atsell is a managed service — your team doesn't need to touch the platforms at all. If you have an internal ecommerce team and want better tooling, Anchanto makes sense. If you want to outsource the whole operation, Atsell is the right call.
            </p>
          </div>
        </div>
      </section>

      {/* The Core Difference */}
      <section style={{ background: WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>The Core Question</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Do you want to run ecommerce, or have it run for you?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="grid-2">
            <div style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, borderRadius: 20, padding: '36px 32px' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, fontWeight: 700, marginBottom: 16 }}>Atsell — managed service</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 20 }}>
                Atsell's team operates your Shopee, Lazada, and TikTok Shop stores end-to-end. They handle listings, ads, customer service, live selling, and campaign strategy. You review reports and approve major decisions. That's it.
              </p>
              {['No ecommerce team needed', 'Listings, ads, CS, liveselling all included', 'Official partner access on all 3 platforms', 'KPI-driven — we grow with your revenue', 'Live in 2–4 weeks'].map(p => (
                <div key={p} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                  <span style={{ color: GOLD, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ background: OFF_WHITE, borderRadius: 20, padding: '36px 32px', border: '1px solid #e2e6ee' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: NAVY, fontWeight: 700, marginBottom: 16 }}>Anchanto — SaaS platform</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.7, marginBottom: 20 }}>
                Anchanto provides OMS (order management) and WMS (warehouse management) software. It centralises your marketplace orders and inventory. Your team still needs to run operations — they just do it through Anchanto's interface instead of managing platforms separately.
              </p>
              {['Centralised order and inventory management', 'Multi-channel order syncing', 'Requires your own in-house team to operate', 'No marketplace ads or content management', 'Subscription-based SaaS pricing'].map(p => (
                <div key={p} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                  <span style={{ color: NAVY, flexShrink: 0 }}>→</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: NAVY }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ background: OFF_WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>At a Glance</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Feature comparison</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table" style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', sans-serif", fontSize: 15 }}>
              <thead>
                <tr style={{ background: NAVY_DARK }}>
                  <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textAlign: 'left', width: '40%' }}>Capability</th>
                  <th style={{ padding: '16px 20px', color: GOLD, fontWeight: 700, textAlign: 'center' }}>Atsell</th>
                  <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'center' }}>Anchanto</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Marketplace listing management', CHECK, CROSS],
                  ['Marketplace ads management', CHECK, CROSS],
                  ['Customer service handling', CHECK, CROSS],
                  ['Live selling (in-house hosts)', CHECK, CROSS],
                  ['Campaign & voucher strategy', CHECK, CROSS],
                  ['Order management (OMS)', CHECK, CHECK],
                  ['Inventory sync across channels', CHECK, CHECK],
                  ['Warehouse management (WMS)', PARTIAL, CHECK],
                  ['Requires in-house ecommerce team', CROSS, CHECK],
                  ['Official Shopee/Lazada/TikTok partner', CHECK, CROSS],
                  ['Covers SG, MY, VN, TH, PH', CHECK, CHECK],
                ].map(([feature, atsell, anchanto], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? WHITE : OFF_WHITE, borderBottom: '1px solid #e2e6ee' }}>
                    <td style={{ padding: '14px 20px', color: NAVY, fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: atsell === CHECK ? '#16a34a' : atsell === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{atsell}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: anchanto === CHECK ? '#16a34a' : anchanto === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{anchanto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, marginTop: 12 }}>✓ Included &nbsp;&nbsp; ~ Partial / varies &nbsp;&nbsp; ✗ Not included</p>
          </div>
        </div>
      </section>

      {/* Cost Reality */}
      <section style={{ background: WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Real Cost</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Software fee vs total cost</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              {
                title: 'The hidden cost of Anchanto',
                content: 'Anchanto\'s SaaS fee covers the software — but someone still has to run ecommerce. That means hiring: an ecommerce manager, a listing specialist, a customer service agent, and potentially a marketing executive. In Singapore, that team costs at least SGD 15,000–20,000 per month in salaries alone, before benefits, training, or turnover. The software is just the start.'
              },
              {
                title: 'Atsell\'s all-in model',
                content: 'Atsell\'s fee covers the full team: account management, listing optimisation, ads management, customer service (6 days/week), live selling hosts, and monthly reporting. You\'re not paying separately for people, tools, and coordination overhead. For most brands, this is significantly cheaper than building capability in-house — and it comes with 156% average revenue growth built in.'
              },
            ].map(({ title, content }) => (
              <div key={title} style={{ background: OFF_WHITE, borderRadius: 16, padding: '32px 36px', border: '1px solid #e2e6ee' }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 14 }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.75 }}>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ background: OFF_WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Honest Verdict</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Who should choose which</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="grid-2">
            <div style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, borderRadius: 20, padding: '36px 32px' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 20 }}>Choose Atsell if…</div>
              {[
                'You don\'t have an in-house ecommerce team',
                'You want end-to-end management, not just software',
                'You want to launch fast without building a team',
                'You\'re a brand focused on product, not platform ops',
                'You want accountability tied to revenue results',
              ].map(point => (
                <div key={point} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: GOLD, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>
            <div style={{ background: WHITE, borderRadius: 20, padding: '36px 32px', border: '1px solid #e2e6ee' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 20 }}>Anchanto might be better if…</div>
              {[
                'You have an existing in-house ecommerce team',
                'You need a centralised OMS across many channels',
                'You want to keep operational control in-house',
                'You run a large distribution business with complex inventory',
                'You have custom fulfilment workflows to integrate',
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
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>$90k+ monthly Shopee revenue in 5 months from zero</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: OFF_WHITE, padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, marginBottom: 16 }}>Skip the ecommerce hiring challenge</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, lineHeight: 1.7, marginBottom: 32 }}>Talk to us about what you need. We'll give you an honest read on whether a managed service makes sense over building in-house.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27m%20evaluating%20ecommerce%20management%20options%20and%20would%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, marginTop: 16 }}>
            Also compare: <a href="/vs/sci-ecommerce" style={{ color: NAVY }}>Atsell vs SCI Ecommerce</a> · <a href="/vs/intrepid" style={{ color: NAVY }}>Atsell vs Intrepid</a> · <a href="/vs/ban-leong" style={{ color: NAVY }}>Atsell vs Ban Leong</a>
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
