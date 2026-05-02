export const metadata = {
  title: 'TikTok Shop Partner Singapore | TikTok Shop Management — Atsell',
  description: 'Official TikTok Shop partner managing storefronts, TikTok Ads, affiliate outreach, and live selling across Singapore, Malaysia, Vietnam & Thailand. Full-service TikTok commerce management.',
  alternates: { canonical: '/tiktok-shop-partner' },
  openGraph: {
    title: 'TikTok Shop Partner Singapore | TikTok Shop Management — Atsell',
    description: 'Official TikTok Shop partner managing storefronts and live selling across Southeast Asia.',
    url: 'https://atsell.io/tiktok-shop-partner',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
}

const NAVY = '#1e3a5f'
const NAVY_DARK = '#152a45'
const GOLD = '#e8a838'
const WHITE = '#ffffff'
const OFF_WHITE = '#f8f9fc'
const GRAY = '#6b7a90'

export default function TikTokShopPartner() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "TikTok Shop Management",
        "provider": { "@type": "Organization", "name": "Atsell", "url": "https://atsell.io" },
        "description": "Full-service TikTok Shop management including storefront setup, product listing optimisation, TikTok Ads for commerce, affiliate outreach, and professional live selling across Singapore, Malaysia, Vietnam, and Thailand.",
        "areaServed": ["SG", "MY", "VN", "TH"],
        "url": "https://atsell.io/tiktok-shop-partner"
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is TikTok Shop and how does it work for brands?", "acceptedAnswer": { "@type": "Answer", "text": "TikTok Shop is TikTok's integrated commerce platform that lets brands sell products directly within the TikTok app through short videos, live streams, and a dedicated shop tab. Buyers purchase without leaving TikTok. Atsell manages the full operation: store setup, ads, affiliates, and live sessions." } },
          { "@type": "Question", "name": "Do I need an existing TikTok following to sell on TikTok Shop?", "acceptedAnswer": { "@type": "Answer", "text": "No. TikTok Shop sales are driven primarily by paid TikTok Ads and affiliate creator content — not your account's organic following. Atsell runs ad campaigns and recruits creators to drive traffic to your products from day one." } },
          { "@type": "Question", "name": "How does TikTok Shop affiliate marketing work?", "acceptedAnswer": { "@type": "Answer", "text": "The TikTok Shop affiliate programme lets creators earn commission for sales they drive by featuring your products in their videos. Atsell identifies and recruits relevant creators in your category, manages commission structures, and tracks affiliate performance and GMV." } },
          { "@type": "Question", "name": "What markets does TikTok Shop operate in across SEA?", "acceptedAnswer": { "@type": "Answer", "text": "TikTok Shop is live in Singapore, Malaysia, Vietnam, Thailand, Indonesia, and the Philippines. Atsell manages TikTok Shop stores across Singapore, Malaysia, Vietnam, and Thailand." } },
          { "@type": "Question", "name": "What TikTok ad formats are available for commerce?", "acceptedAnswer": { "@type": "Answer", "text": "TikTok offers Video Shopping Ads (shoppable videos in feed), LIVE Shopping Ads (promoting live sessions), and Product Shopping Ads (catalogue-based ads). Atsell manages all three and recommends the right mix based on your product and budget." } },
          { "@type": "Question", "name": "How quickly can my brand start selling on TikTok Shop?", "acceptedAnswer": { "@type": "Answer", "text": "Most brands are live within two to three weeks of onboarding with Atsell — including TikTok Shop account setup, full product catalogue upload, initial affiliate recruitment, first live session, and running ad campaigns." } }
        ]
      })}} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ background: NAVY_DARK, padding: '0 24px', borderBottom: '1px solid rgba(232,168,56,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <img src="/atsell-logo.png" alt="Atsell" style={{ height: 36, width: 'auto' }} />
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {[['Lazada Partner', '/lazada-partner'], ['Shopee Partner', '/shopee-partner'], ['Blog', '/blog']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{label}</a>
            ))}
            <a href="https://wa.me/6597121217" target="_blank" rel="noopener noreferrer" style={{ padding: '9px 20px', borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Book a Call</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="grid-2">
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(232,168,56,0.12)', border: '1px solid rgba(232,168,56,0.2)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, fontWeight: 600 }}>Official TikTok Shop Partner</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: WHITE, lineHeight: 1.15, marginBottom: 20 }}>
              TikTok Shop Management<br />
              <span style={{ background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Southeast Asia</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 36 }}>
              Store setup, TikTok Ads, affiliate recruitment, and professional live selling — we turn TikTok traffic into real revenue.
            </p>
            <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20to%20learn%20more%20about%20TikTok%20Shop%20management." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              Get a Free TikTok Shop Consultation
            </a>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 24, padding: '40px 36px', border: '1px solid rgba(232,168,56,0.12)' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: 28 }}>TikTok Shop in Southeast Asia</div>
            {[
              { value: '325M+', label: 'Monthly active users in SEA' },
              { value: '#1', label: 'Social commerce platform in SEA' },
              { value: '3×', label: 'Higher conversion from live selling' },
              { value: 'SG · MY · VN · TH', label: 'Markets Atsell manages' },
            ].map(({ value, label }, i, arr) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: WHITE }}>{value}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)', maxWidth: 140, textAlign: 'right', lineHeight: 1.4 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TikTok Shop */}
      <section style={{ background: OFF_WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Why TikTok Shop</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>The fastest-growing commerce platform in SEA</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="grid-3">
            {[
              { stat: '325M+', label: 'Monthly active users in SEA', desc: 'TikTok reaches more than half the internet users in Southeast Asia every month.' },
              { stat: '#1', label: 'Social commerce platform in SEA', desc: 'TikTok Shop surpassed Instagram and Facebook Shop as the leading social commerce destination.' },
              { stat: '3×', label: 'Higher conversion from live selling', desc: 'Live commerce on TikTok converts at 3× the rate of traditional product pages when done right.' },
            ].map(({ stat, label, desc }) => (
              <div key={stat} style={{ background: WHITE, borderRadius: 16, padding: 32, border: '1px solid #e2e6ee', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{stat}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>What We Manage</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Full-service TikTok Shop management</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="grid-3">
            {[
              { title: 'TikTok Shop Store Setup', desc: 'Full storefront setup: brand profile, product catalogue upload, pricing, shipping configuration, and seller account optimisation.' },
              { title: 'Product Listing Optimisation', desc: 'TikTok-native product titles, SEO tags, rich media (images and video), and category configuration to rank in TikTok Shop search.' },
              { title: 'TikTok Ads for Commerce', desc: 'Managed Video Shopping Ads, LIVE Shopping Ads, and Product Shopping Ads. We handle creative strategy, targeting, and budget optimisation.' },
              { title: 'Live Selling', desc: 'Professional hosts run scheduled live streams — product showcase, Q&A, flash deals, and countdown offers — to drive real-time impulse purchases.' },
              { title: 'Affiliate & Creator Outreach', desc: 'We identify and recruit relevant TikTok creators to promote your products through the TikTok Shop affiliate program, driving organic reach and sales.' },
              { title: 'Campaign Participation', desc: 'Full participation in TikTok Shop mega-sales: 9.9, 10.10, 11.11, 12.12, and brand-specific campaigns. We plan deals, vouchers, and live schedules.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: OFF_WHITE, borderRadius: 16, padding: 32, border: '1px solid #e2e6ee' }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: OFF_WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Process</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Live on TikTok Shop in 30 days</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, maxWidth: 560, margin: '0 auto' }}>From first call to live store with running ads and an active affiliate roster — most brands are selling within three to four weeks.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }} className="grid-3">
            {[
              { step: '01', title: 'Onboarding & Strategy', desc: 'We audit your brand, products, and TikTok presence. You get a launch strategy covering store setup, ad direction, affiliate targets, and a live selling schedule.' },
              { step: '02', title: 'Setup & First Live', desc: 'We set up your TikTok Shop, upload the full product catalogue, launch TikTok Ads, recruit initial affiliates, and run your first live session — within 2–3 weeks.' },
              { step: '03', title: 'Scale & Report', desc: 'Ongoing management of ads, affiliates, and live sessions — with monthly reports on revenue, ad ROAS, affiliate GMV, and live performance.' },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 700, color: 'rgba(30,58,95,0.07)', lineHeight: 1, marginBottom: 16 }}>{step}</div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section style={{ background: WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Markets</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '12px 0 16px' }}>TikTok Shop management across Southeast Asia</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: GRAY, maxWidth: 560, margin: '0 auto 48px' }}>Local operators in each market with TikTok platform knowledge, creator networks, and regional consumer insights.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="grid-2">
            {['Singapore', 'Malaysia', 'Vietnam', 'Thailand'].map(m => (
              <div key={m} style={{ background: OFF_WHITE, borderRadius: 16, padding: '24px 16px', border: '1px solid #e2e6ee' }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY }}>{m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: OFF_WHITE, padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>FAQ</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '12px 0' }}>Questions about TikTok Shop management</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'What is TikTok Shop and how does it work for brands?', a: "TikTok Shop is TikTok's integrated commerce platform. Brands list products and sell directly within the TikTok app — through short videos, live streams, and a dedicated shop tab. Buyers purchase without leaving TikTok. Atsell manages the full operation: store setup, ads, affiliates, and live sessions." },
              { q: 'Do I need an existing TikTok following to sell on TikTok Shop?', a: "No. TikTok Shop sales are driven primarily by paid TikTok Ads and affiliate creator content — not your account's organic following. Atsell runs ad campaigns and recruits creators to drive traffic to your products from day one, regardless of your current follower count." },
              { q: 'How does TikTok Shop affiliate marketing work?', a: 'The TikTok Shop affiliate programme lets creators earn commission for sales they drive by featuring your products in their videos. Atsell identifies and recruits relevant creators in your category, manages commission structures, and tracks affiliate performance and GMV.' },
              { q: 'What markets does TikTok Shop operate in across SEA?', a: 'TikTok Shop is live in Singapore, Malaysia, Vietnam, Thailand, Indonesia, and the Philippines. Atsell currently manages TikTok Shop stores across Singapore, Malaysia, Vietnam, and Thailand.' },
              { q: 'What TikTok ad formats are available for commerce?', a: 'TikTok offers Video Shopping Ads (shoppable videos in the feed), LIVE Shopping Ads (ads promoting your live sessions), and Product Shopping Ads (catalogue-based ads). Atsell manages all three and recommends the right mix based on your product and budget.' },
              { q: 'How quickly can my brand start selling on TikTok Shop?', a: 'Most brands are live within two to three weeks of onboarding with Atsell — including TikTok Shop account setup, full product catalogue upload, initial affiliate recruitment, first live session, and running ad campaigns.' },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: WHITE, borderRadius: 16, padding: '28px 32px', border: '1px solid #e2e6ee' }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{q}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: WHITE, marginBottom: 16 }}>Ready to sell on TikTok Shop?</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 32 }}>Book a free consultation. We'll assess your brand's TikTok Shop opportunity and put together a launch or growth plan.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20to%20learn%20more%20about%20TikTok%20Shop%20management." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>Also managing <a href="/lazada-partner" style={{ color: 'rgba(255,255,255,0.6)' }}>Lazada</a> and <a href="/shopee-partner" style={{ color: 'rgba(255,255,255,0.6)' }}>Shopee</a>.</p>
        </div>
      </section>

      <footer style={{ background: NAVY_DARK, padding: '32px 24px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif", borderTop: '1px solid rgba(232,168,56,0.1)' }}>
        <div style={{ marginBottom: 12 }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Home</a>
          <a href="/lazada-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Lazada Partner</a>
          <a href="/shopee-partner" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Shopee Partner</a>
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Blog</a>
          <a href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>Privacy</a>
        </div>
        <span>© 2026 Atsell. All rights reserved. · SG · MY · VN · TH · PH</span>
      </footer>
    </>
  )
}
