export const metadata = {
  title: 'Ecommerce Blog | Shopee, Lazada & TikTok Shop Insights — Atsell',
  description: 'Practical ecommerce guides for brands selling on Shopee, Lazada, and TikTok Shop in Southeast Asia. Written by Atsell\'s team of marketplace operators.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Ecommerce Blog | Shopee, Lazada & TikTok Shop Insights — Atsell',
    description: 'Practical ecommerce guides for brands selling in Southeast Asia.',
    url: 'https://atsell.io/blog',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
}

const NAVY = '#1e3a5f'
const NAVY_DARK = '#152a45'
const GOLD = '#e8a838'
const WHITE = '#ffffff'
const OFF_WHITE = '#f8f9fc'
const GRAY = '#6b7a90'

const posts = [
  {
    slug: 'what-is-an-ecommerce-enabler',
    title: 'What Is an Ecommerce Enabler? (And Why Brands Use One)',
    excerpt: 'An ecommerce enabler manages your marketplace stores end-to-end — listings, ads, customer service, and live selling. Here\'s what that means in practice and when it makes sense.',
    date: 'May 2026',
    readTime: '5 min read',
  },
  {
    slug: 'shopee-vs-lazada',
    title: 'Shopee vs Lazada: Which Platform Should Your Brand Focus On?',
    excerpt: 'Shopee and Lazada are Southeast Asia\'s two biggest marketplaces, but they serve different buyers, categories, and seller types. Here\'s how to decide where to put your energy.',
    date: 'May 2026',
    readTime: '7 min read',
  },
  {
    slug: 'shopee-vs-tiktok-shop',
    title: 'Shopee vs TikTok Shop: Which Platform Is Better for Your Brand?',
    excerpt: 'Shopee is search-led. TikTok Shop is discovery-led. These two platforms operate on completely different engines — and the right choice depends on your product, content capability, and growth strategy.',
    date: 'May 2026',
    readTime: '7 min read',
  },
  {
    slug: 'shopee-listing-title-optimisation',
    title: 'How to Optimise Your Shopee Listing Title (With Examples)',
    excerpt: 'Your Shopee listing title is the single biggest ranking factor in Shopee search. Here\'s exactly how to write one that ranks and converts — with before-and-after examples.',
    date: 'May 2026',
    readTime: '6 min read',
  },
  {
    slug: 'what-is-shopee-mall',
    title: 'What Is Shopee Mall and How to Get In',
    excerpt: 'Shopee Mall is Shopee\'s verified brand store tier — reserved for brand owners and authorised distributors. Here\'s what the Mall badge actually does, who qualifies, and how to apply.',
    date: 'May 2026',
    readTime: '6 min read',
  },
  {
    slug: 'how-to-sell-on-lazada-singapore',
    title: 'How to Sell on Lazada in Singapore: Complete Guide (2026)',
    excerpt: 'Everything you need to know to set up a Lazada store in Singapore — from account registration and store types to listings, ads, and campaign participation.',
    date: 'May 2026',
    readTime: '8 min read',
  },
  {
    slug: 'tiktok-shop-live-selling-tips',
    title: 'TikTok Shop Live Selling Tips for Brands in Southeast Asia',
    excerpt: 'Live selling is one of the highest-converting formats on TikTok Shop. Here are the session structures, host tactics, flash deal strategies, and common mistakes — from Atsell\'s live selling team.',
    date: 'May 2026',
    readTime: '8 min read',
  },
]

export default function Blog() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        .blog-card { transition: box-shadow 0.2s; }
        .blog-card:hover { box-shadow: 0 8px 32px rgba(30,58,95,0.1); }
      `}</style>

      <nav style={{ background: NAVY_DARK, padding: '0 24px', borderBottom: '1px solid rgba(232,168,56,0.15)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <img src="/atsell-logo.png" alt="Atsell" style={{ height: 36, width: 'auto' }} />
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {[['Lazada Partner', '/lazada-partner'], ['Shopee Partner', '/shopee-partner'], ['TikTok Shop Partner', '/tiktok-shop-partner']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{label}</a>
            ))}
            <a href="https://wa.me/6597121217" target="_blank" rel="noopener noreferrer" style={{ padding: '9px 20px', borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Book a Call</a>
          </div>
        </div>
      </nav>

      <section style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '64px 24px 48px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GOLD, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Atsell Blog</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: WHITE, margin: '12px 0 16px', lineHeight: 1.2 }}>
            Ecommerce insights from the operators
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 40 }}>
            Practical guides on selling across Shopee, Lazada, and TikTok Shop in Southeast Asia — written by the team that does it every day.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 0, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32, flexWrap: 'wrap' }}>
            {[['7', 'in-depth guides'], ['3', 'platforms covered'], ['100+', 'brands managed']].map(([val, label]) => (
              <div key={label} style={{ padding: '0 32px', borderRight: '1px solid rgba(255,255,255,0.12)', lastChild: { borderRight: 'none' } }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: GOLD, lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: OFF_WHITE, padding: '80px 24px', minHeight: '60vh' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {posts.map(({ slug, title, excerpt, date, readTime }) => (
              <a key={slug} href={`/blog/${slug}`} className="blog-card" style={{ textDecoration: 'none', display: 'block', background: WHITE, borderRadius: 20, padding: 40, border: '1px solid #e2e6ee' }}>
                <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY }}>{date}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY }}>·</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: GRAY }}>{readTime}</span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: NAVY, marginBottom: 12, lineHeight: 1.3 }}>{title}</h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.7, marginBottom: 20 }}>{excerpt}</p>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: GOLD }}>Read article →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: NAVY_DARK, padding: '32px 24px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ marginBottom: 12 }}>
          {[['Home', '/'], ['Lazada Partner', '/lazada-partner'], ['Shopee Partner', '/shopee-partner'], ['TikTok Shop Partner', '/tiktok-shop-partner'], ['Privacy', '/privacy']].map(([label, href]) => (
            <a key={label} href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>{label}</a>
          ))}
        </div>
        <span>© 2026 Atsell. All rights reserved.</span>
      </footer>
    </>
  )
}
