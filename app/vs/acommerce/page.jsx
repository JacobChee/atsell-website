export const metadata = {
  title: 'Atsell vs aCommerce — Boutique SEA Enabler vs Regional Enterprise Operator',
  description: 'Comparing Atsell and aCommerce for ecommerce enabling in Southeast Asia? Here\'s an honest breakdown — service model, flexibility, platform coverage, and who each is built for.',
  alternates: { canonical: '/vs/acommerce' },
  openGraph: {
    title: 'Atsell vs aCommerce | Ecommerce Enabler Comparison SEA',
    description: 'Boutique vs enterprise ecommerce enabling in Southeast Asia — how Atsell and aCommerce differ on service depth, flexibility, and brand attention.',
    url: 'https://atsell.io/vs/acommerce',
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

export default function AtsellVsAcommerce() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the difference between Atsell and aCommerce?", "acceptedAnswer": { "@type": "Answer", "text": "aCommerce is one of Southeast Asia's largest ecommerce enablers, headquartered in Thailand with enterprise-scale operations across the region. Atsell is a boutique Singapore-based enabler with a capped client base, official partnerships on Shopee, Lazada, and TikTok Shop, and a team that works closely with each brand. aCommerce suits large enterprise brands needing regional infrastructure at scale. Atsell suits growing brands that want dedicated attention, flexibility, and a partner accountable for revenue results." } },
          { "@type": "Question", "name": "Is Atsell or aCommerce better for growing brands in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "Atsell is better suited for growing brands in Singapore and Southeast Asia. As a boutique enabler, Atsell keeps a capped client roster so each brand gets a dedicated team and fast responses. aCommerce's enterprise model is optimised for large-scale operations, which can mean longer response times and less flexibility for brands with specific workflows or smaller SKU counts." } },
          { "@type": "Question", "name": "Does Atsell cover the same markets as aCommerce?", "acceptedAnswer": { "@type": "Answer", "text": "Atsell covers Singapore, Malaysia, Vietnam, Thailand, and the Philippines — the five core SEA markets. aCommerce operates across similar SEA markets with additional fulfilment and logistics infrastructure. For brands focused on marketplace performance (Shopee, Lazada, TikTok Shop), Atsell's platform-native team delivers stronger results." } }
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

      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '72px 24px 64px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(232,168,56,0.12)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, fontWeight: 600 }}>Comparison</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, color: WHITE, lineHeight: 1.15, marginBottom: 20 }}>
            Atsell vs aCommerce
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 40px' }}>
            aCommerce is one of SEA's largest ecommerce operators. Atsell is boutique. Here's what that difference actually means for your brand.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 20, padding: '32px 40px', textAlign: 'left', maxWidth: 700, margin: '0 auto' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 16 }}>TL;DR</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
              aCommerce is built for enterprise volume — regional infrastructure, large logistics networks, and standardised processes that work best at scale. Atsell is built for brands that want a team that genuinely knows their products, adapts to their workflows, and is accountable for revenue growth. If you're not a Unilever or L'Oréal, Atsell will give you far more attention for your money.
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
                  <th style={{ padding: '16px 20px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'center' }}>aCommerce</th>
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
                  ['Boutique client load per AM', CHECK, CROSS],
                  ['Flexible to brand workflows', CHECK, CROSS],
                  ['Suitable for growing brands', CHECK, PARTIAL],
                  ['Covers SG, MY, VN, TH, PH', CHECK, CHECK],
                  ['Live within 2–4 weeks', CHECK, PARTIAL],
                  ['Enterprise logistics & fulfilment', PARTIAL, CHECK],
                ].map(([feature, atsell, acom], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? OFF_WHITE : WHITE, borderBottom: '1px solid #e2e6ee' }}>
                    <td style={{ padding: '14px 20px', color: NAVY, fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: atsell === CHECK ? '#16a34a' : atsell === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{atsell}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: acom === CHECK ? '#16a34a' : acom === PARTIAL ? '#d97706' : '#dc2626', fontWeight: 700, fontSize: 18 }}>{acom}</td>
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
                title: 'Enterprise infrastructure vs boutique attention',
                content: 'aCommerce built its business around enterprise FMCG and consumer brands that need regional scale — end-to-end supply chain, warehousing, last-mile delivery, and marketplace operations rolled into one. That infrastructure is valuable at the right scale. But enterprise systems mean enterprise overhead: longer onboarding timelines, standardised playbooks, and account managers juggling many accounts at once. Atsell caps its client roster deliberately so every brand gets a team that\'s genuinely invested in their numbers, not just their account.'
              },
              {
                title: 'Flexibility vs standardisation',
                content: 'Large operators like aCommerce run consistent processes across hundreds of brands — that\'s how they maintain quality at scale. The trade-off is rigidity. If your brand has specific content approval workflows, promotional pricing rules, custom reporting needs, or logistics quirks, fitting into an enterprise template creates friction. Atsell is small enough to adapt. Whether that means working around your internal sign-off process, matching your brand tone precisely, or adjusting campaign strategy mid-month — boutique means flexibility.'
              },
              {
                title: 'Platform-native expertise',
                content: 'Atsell is built entirely around Shopee, Lazada, and TikTok Shop — the three platforms that drive the majority of SEA ecommerce. Every team member lives in these platforms daily, across 100+ active brands. That depth shows in keyword strategy, campaign timing, listing optimisation, and algorithm awareness. aCommerce covers these platforms as part of a broader regional commerce offering — but marketplace operations are one of many workstreams, not the singular focus.'
              },
              {
                title: 'Who pays the price for enterprise scale',
                content: 'aCommerce\'s model requires significant minimum commitments — it\'s designed for brands with large budgets and complex regional requirements. For growing brands that don\'t yet fit the enterprise bracket, the experience is often: high prices, slower response, and a team more focused on their larger accounts. Atsell\'s boutique model means you\'re never the smallest client in a portfolio — and the pricing reflects actual service delivered, not enterprise overhead.'
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
                'You\'re a growing brand, not yet enterprise-scale',
                'You want a team that knows your products inside out',
                'You need flexibility to match your workflows',
                'Fast responses and direct access matter',
                'You want liveselling included from day one',
                'You\'re focused on Shopee, Lazada, TikTok Shop performance',
              ].map(point => (
                <div key={point} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: GOLD, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>
            <div style={{ background: OFF_WHITE, borderRadius: 20, padding: '36px 32px', border: '1px solid #e2e6ee' }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: GRAY, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 20 }}>aCommerce might suit you if…</div>
              {[
                'You\'re an enterprise FMCG or consumer brand',
                'You need integrated warehousing and last-mile logistics',
                'You have a large, complex regional footprint',
                'You operate in 5+ SEA markets simultaneously',
                'Your brief goes beyond marketplace into full supply chain',
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: NAVY, marginBottom: 16 }}>You don't need enterprise scale to deserve enterprise attention</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, lineHeight: 1.7, marginBottom: 32 }}>Book a free consultation — we'll review your store and tell you exactly what we'd do differently.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27m%20comparing%20ecommerce%20enablers%20and%20would%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, marginTop: 16 }}>
            Also compare: <a href="/vs/sci-ecommerce" style={{ color: NAVY }}>Atsell vs SCI</a> · <a href="/vs/synagie" style={{ color: NAVY }}>Atsell vs Synagie</a> · <a href="/vs/leap-commerce" style={{ color: NAVY }}>Atsell vs LEAP Commerce</a>
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
