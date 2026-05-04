export const metadata = {
  title: 'SCI Ecommerce Alternatives — Best Ecommerce Enablers in Southeast Asia',
  description: 'Looking for SCI Ecommerce alternatives? Here are the top ecommerce enablers in Singapore and SEA — with honest comparisons across service model, flexibility, pricing, and fit.',
  alternates: { canonical: '/alternatives/sci-ecommerce' },
  openGraph: {
    title: 'SCI Ecommerce Alternatives | Best SEA Ecommerce Enablers',
    description: 'Honest comparison of the best SCI Ecommerce alternatives for brands selling on Shopee, Lazada, and TikTok Shop in Southeast Asia.',
    url: 'https://atsell.io/alternatives/sci-ecommerce',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
}

const NAVY = '#1e3a5f'
const NAVY_DARK = '#152a45'
const GOLD = '#e8a838'
const WHITE = '#ffffff'
const OFF_WHITE = '#f8f9fc'
const GRAY = '#6b7a90'

const alternatives = [
  {
    name: 'Atsell',
    url: 'https://atsell.io',
    tag: 'Best for boutique brands',
    tagColor: GOLD,
    description: 'Full-service ecommerce enabler with official partnerships on Shopee, Lazada, and TikTok Shop. Boutique team structure means every brand gets dedicated attention — not a rotating account manager. Handles listings, ads, customer service, and liveselling end-to-end.',
    strengths: ['Official Shopee, Lazada & TikTok Shop partner', 'Boutique — capped client load, real attention', 'Liveselling with in-house hosts included', 'Flexible to your workflows and brand guidelines', '156% average revenue growth across clients', 'Live within 2–4 weeks'],
    bestFor: 'Growing brands that want a genuine partner, not just a vendor. Especially strong for brands where flexibility and responsiveness matter.',
    pricing: 'Custom pricing — free consultation to get a tailored proposal.',
    cta: { label: 'Get a free consultation', href: 'https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27m%20looking%20for%20an%20ecommerce%20enabler%20and%20would%20like%20to%20learn%20more.' },
    highlight: true,
  },
  {
    name: 'SCI Ecommerce',
    url: 'https://sci-ecommerce.com',
    tag: 'Enterprise scale',
    tagColor: GRAY,
    description: 'One of Singapore\'s larger ecommerce enablers with official Shopee and Lazada partnerships. Established processes and enterprise-grade volume capacity. Better suited to large brands with high SKU counts that fit a standardised operating model.',
    strengths: ['Established enterprise operator', 'Official Shopee & Lazada partner', 'Multi-country capacity', 'Broad category coverage'],
    bestFor: 'Enterprise-scale brands that fit a standardised playbook and have high SKU volumes.',
    pricing: 'Custom — enterprise engagement model.',
    cta: null,
    highlight: false,
  },
  {
    name: 'Anchanto',
    url: 'https://anchanto.com',
    tag: 'SaaS platform',
    tagColor: '#6366f1',
    description: 'Not a managed service — Anchanto provides OMS and WMS software for brands who want to manage ecommerce in-house with better tooling. If you have your own team, Anchanto centralises order and inventory management across channels. Requires in-house headcount to operate.',
    strengths: ['Centralised OMS/WMS platform', 'Multi-channel order sync', 'Inventory management across warehouses', 'Good for brands with existing in-house teams'],
    bestFor: 'Brands with in-house ecommerce teams that need better operational software, not a managed service.',
    pricing: 'SaaS subscription — additional cost for in-house team still required.',
    cta: null,
    highlight: false,
  },
  {
    name: 'Intrepid',
    url: 'https://intrepidgroup.asia',
    tag: 'Broader digital scope',
    tagColor: '#6366f1',
    description: 'Digital services company operating across SEA with services spanning ecommerce management and performance marketing. Suits brands that want a broader digital agency relationship rather than a marketplace-only specialist.',
    strengths: ['Broader digital services scope', 'Regional SEA presence', 'Performance marketing included'],
    bestFor: 'Brands that want one agency for both marketplace ecommerce and broader digital marketing.',
    pricing: 'Custom engagement.',
    cta: null,
    highlight: false,
  },
  {
    name: 'In-House Team',
    url: null,
    tag: 'Full control',
    tagColor: '#6b7a90',
    description: 'Hiring your own ecommerce manager, listing specialist, and customer service team. Gives maximum control and institutional knowledge over time — but comes with high fixed cost, slow ramp-up, and exposure to turnover. Ecommerce specialists in Singapore are scarce and expensive.',
    strengths: ['Full operational control', 'Builds internal capability over time', 'No dependency on external partner'],
    bestFor: 'Large brands with long-term SEA ecommerce ambitions and budget to build a full team (typically SGD 15k–20k/month in salaries).',
    pricing: 'SGD 15,000–20,000/month in salaries alone before tools, training, and turnover.',
    cta: null,
    highlight: false,
  },
]

export default function SCIAlternatives() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What are the best SCI Ecommerce alternatives?", "acceptedAnswer": { "@type": "Answer", "text": "The best SCI Ecommerce alternatives for brands selling on Shopee, Lazada, and TikTok Shop in Southeast Asia include Atsell (boutique full-service enabler), Anchanto (SaaS OMS platform for self-managed brands), and Intrepid (broader digital services). Atsell is the top choice for growing brands that want dedicated attention, flexibility, and a partner accountable for revenue results." } },
          { "@type": "Question", "name": "Why do brands look for SCI Ecommerce alternatives?", "acceptedAnswer": { "@type": "Answer", "text": "Common reasons brands look for SCI Ecommerce alternatives include slow response times, lack of flexibility to adapt to brand-specific workflows, account managers handling too many accounts simultaneously, and pricing that doesn't suit growing brands. Boutique alternatives like Atsell offer more dedicated attention and flexible partnership models." } },
          { "@type": "Question", "name": "What should I look for in an ecommerce enabler?", "acceptedAnswer": { "@type": "Answer", "text": "When evaluating ecommerce enablers, look for: official platform partnership status (Shopee, Lazada, TikTok Shop), end-to-end service scope (listings, ads, customer service, liveselling), account team structure (how many brands per manager), flexibility to your workflows, pricing model, and provable results across similar brands." } }
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
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(232,168,56,0.12)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, fontWeight: 600 }}>Alternatives Guide</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, color: WHITE, lineHeight: 1.15, marginBottom: 20 }}>
            SCI Ecommerce Alternatives
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 620, margin: '0 auto' }}>
            A straightforward comparison of the best ecommerce enablers and alternatives for brands selling on Shopee, Lazada, and TikTok Shop in Southeast Asia.
          </p>
        </div>
      </section>

      {/* Why Brands Switch */}
      <section style={{ background: WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Why Brands Look for Alternatives</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Common reasons brands move on</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="grid-3">
            {[
              { icon: '⏱', title: 'Slow response times', desc: 'When account managers handle 30+ brands, response times slow down. Brands with fast-moving campaigns can\'t wait 24–48 hours for a reply.' },
              { icon: '🔒', title: 'Rigid playbooks', desc: 'Large operators run standardised processes. If your brand has specific workflows, content approvals, or pricing rules, rigid systems become friction.' },
              { icon: '💸', title: 'Pricing that doesn\'t scale', desc: 'Enterprise pricing makes sense at enterprise volume. Brands that are growing but not yet large often pay for infrastructure they don\'t use.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: OFF_WHITE, borderRadius: 16, padding: '28px 28px', border: '1px solid #e2e6ee' }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section style={{ background: OFF_WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Evaluation Criteria</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>What to look for in an ecommerce enabler</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-2">
            {[
              { label: 'Official platform partnership', detail: 'Ask whether they\'re a certified Shopee, Lazada, and TikTok Shop partner — not just a reseller. Official status means platform support, early access, and campaign priority.' },
              { label: 'Service scope', detail: 'Confirm they handle listings, ads, customer service, AND liveselling. Many operators cover some of these but not all, leaving gaps for your team to fill.' },
              { label: 'Account structure', detail: 'How many brands does each account manager handle? More than 10–15 and response times suffer. Ask the question directly.' },
              { label: 'Flexibility', detail: 'Will they adapt to your approval workflows, content guidelines, and pricing rules? Or do you need to fit their system? Test this with a specific scenario.' },
              { label: 'Provable results', detail: 'Ask for case studies with real revenue numbers — not just % uplift in metrics. Month-on-month revenue growth across multiple brands is the clearest signal.' },
              { label: 'Market coverage', detail: 'If you need SG, MY, VN, TH, and PH, confirm they have local operators in each — not just a Singapore team "managing" remotely.' },
            ].map(({ label, detail }) => (
              <div key={label} style={{ background: WHITE, borderRadius: 14, padding: '24px 28px', border: '1px solid #e2e6ee', display: 'flex', gap: 16 }}>
                <span style={{ color: GOLD, fontWeight: 700, fontSize: 18, flexShrink: 0, marginTop: 2 }}>✓</span>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.6 }}>{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternatives List */}
      <section style={{ background: WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>The Options</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>SCI Ecommerce alternatives compared</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {alternatives.map((alt, i) => (
              <div key={alt.name} style={{
                background: alt.highlight ? `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})` : OFF_WHITE,
                borderRadius: 20,
                padding: '36px 40px',
                border: alt.highlight ? `2px solid rgba(232,168,56,0.4)` : '1px solid #e2e6ee',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: alt.highlight ? WHITE : NAVY }}>{alt.name}</h3>
                      <span style={{ background: alt.highlight ? 'rgba(232,168,56,0.15)' : 'rgba(30,58,95,0.07)', border: `1px solid ${alt.tagColor}30`, borderRadius: 100, padding: '4px 14px', fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: alt.tagColor, fontWeight: 600 }}>{alt.tag}</span>
                      {i === 0 && <span style={{ background: GOLD, borderRadius: 100, padding: '4px 14px', fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: NAVY_DARK, fontWeight: 700 }}>#1 Pick</span>}
                    </div>
                  </div>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: alt.highlight ? 'rgba(255,255,255,0.75)' : GRAY, lineHeight: 1.7, marginBottom: 24 }}>{alt.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="grid-2">
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: alt.highlight ? GOLD : NAVY, textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, marginBottom: 12 }}>Key strengths</div>
                    {alt.strengths.map(s => (
                      <div key={s} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                        <span style={{ color: alt.highlight ? GOLD : NAVY, flexShrink: 0 }}>✓</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: alt.highlight ? 'rgba(255,255,255,0.8)' : NAVY, lineHeight: 1.4 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: alt.highlight ? GOLD : NAVY, textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, marginBottom: 12 }}>Best for</div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: alt.highlight ? 'rgba(255,255,255,0.75)' : GRAY, lineHeight: 1.65, marginBottom: 16 }}>{alt.bestFor}</p>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: alt.highlight ? GOLD : NAVY, textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, marginBottom: 8 }}>Pricing</div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: alt.highlight ? 'rgba(255,255,255,0.75)' : GRAY, lineHeight: 1.5 }}>{alt.pricing}</p>
                  </div>
                </div>
                {alt.cta && (
                  <div style={{ marginTop: 28 }}>
                    <a href={alt.cta.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 10, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                      {alt.cta.label}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section style={{ background: OFF_WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Summary</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Quick comparison</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table" style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
              <thead>
                <tr style={{ background: NAVY_DARK }}>
                  <th style={{ padding: '14px 18px', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textAlign: 'left' }}></th>
                  <th style={{ padding: '14px 18px', color: GOLD, fontWeight: 700, textAlign: 'center' }}>Atsell</th>
                  <th style={{ padding: '14px 18px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'center' }}>SCI</th>
                  <th style={{ padding: '14px 18px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'center' }}>Anchanto</th>
                  <th style={{ padding: '14px 18px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'center' }}>Intrepid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Service model', 'Managed', 'Managed', 'SaaS', 'Agency'],
                  ['Platform partner', '✓✓✓', '✓✓', '✗', '~'],
                  ['Liveselling', '✓', '~', '✗', '~'],
                  ['Boutique focus', '✓', '✗', 'N/A', '~'],
                  ['All categories', '✓', '✓', '✓', '✓'],
                  ['SG/MY/VN/TH/PH', '✓', '✓', '✓', '✓'],
                  ['No in-house team needed', '✓', '✓', '✗', '~'],
                ].map(([label, atsell, sci, anchanto, intrepid], i) => (
                  <tr key={label} style={{ background: i % 2 === 0 ? WHITE : OFF_WHITE, borderBottom: '1px solid #e2e6ee' }}>
                    <td style={{ padding: '12px 18px', color: NAVY, fontWeight: 600 }}>{label}</td>
                    <td style={{ padding: '12px 18px', textAlign: 'center', color: GOLD, fontWeight: 700 }}>{atsell}</td>
                    <td style={{ padding: '12px 18px', textAlign: 'center', color: GRAY }}>{sci}</td>
                    <td style={{ padding: '12px 18px', textAlign: 'center', color: GRAY }}>{anchanto}</td>
                    <td style={{ padding: '12px 18px', textAlign: 'center', color: GRAY }}>{intrepid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendation by Use Case */}
      <section style={{ background: WHITE, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Find Your Fit</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Recommendation by situation</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { situation: 'I\'m a growing brand and want someone to run my stores for me', recommendation: 'Atsell', reason: 'Full-service, official partner, boutique enough to actually care about your brand.' },
              { situation: 'I have my own ecommerce team and need better order/inventory tooling', recommendation: 'Anchanto', reason: 'OMS/WMS software for self-operated brands. Your team runs it, Anchanto organises it.' },
              { situation: 'I\'m an enterprise brand with 500+ SKUs needing a high-volume operator', recommendation: 'SCI Ecommerce', reason: 'Established enterprise processes, broad category experience, handles volume.' },
              { situation: 'I need marketplace management plus broader digital marketing in one brief', recommendation: 'Intrepid', reason: 'Broader digital agency scope covers ecommerce alongside other channels.' },
              { situation: 'I want a boutique enabler flexible enough to work around my team', recommendation: 'Atsell', reason: 'Atsell adapts to your workflows, not the other way around.' },
            ].map(({ situation, recommendation, reason }) => (
              <div key={situation} style={{ background: OFF_WHITE, borderRadius: 14, padding: '24px 28px', border: '1px solid #e2e6ee', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ flex: 2, minWidth: 200 }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginBottom: 4 }}>{situation}</div>
                </div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GOLD, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: 4 }}>Recommended</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{recommendation}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, lineHeight: 1.5 }}>{reason}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: WHITE, marginBottom: 16 }}>Still evaluating? Talk to Atsell first.</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 32 }}>Book a free 30-minute consultation. We'll review your current store, tell you what we'd do differently, and give you enough to make a proper comparison — no pressure.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27m%20evaluating%20ecommerce%20enablers%20and%20would%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>
            Direct comparisons: <a href="/vs/sci-ecommerce" style={{ color: 'rgba(255,255,255,0.6)' }}>Atsell vs SCI</a> · <a href="/vs/anchanto" style={{ color: 'rgba(255,255,255,0.6)' }}>Atsell vs Anchanto</a> · <a href="/vs/intrepid" style={{ color: 'rgba(255,255,255,0.6)' }}>Atsell vs Intrepid</a> · <a href="/vs/ban-leong" style={{ color: 'rgba(255,255,255,0.6)' }}>Atsell vs Ban Leong</a>
          </p>
        </div>
      </section>

      <footer style={{ background: NAVY_DARK, padding: '32px 24px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif", borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
