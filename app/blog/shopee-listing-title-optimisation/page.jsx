export const metadata = {
  title: 'How to Optimise Your Shopee Listing Title (With Examples) | Atsell Blog',
  description: "Your Shopee listing title is the single biggest ranking factor in Shopee search. Here's exactly how to write one that ranks and converts — with real examples.",
  alternates: { canonical: '/blog/shopee-listing-title-optimisation' },
  openGraph: {
    title: 'How to Optimise Your Shopee Listing Title (With Examples)',
    description: 'Practical guide to writing Shopee listing titles that rank in search and convert browsers into buyers.',
    url: 'https://atsell.io/blog/shopee-listing-title-optimisation',
    type: 'article',
    images: [{ url: '/og-logo.png', width: 1200, height: 630 }],
  },
}

const NAVY = '#1e3a5f'
const NAVY_DARK = '#152a45'
const GOLD = '#e8a838'
const WHITE = '#ffffff'
const OFF_WHITE = '#f8f9fc'
const GRAY = '#6b7a90'
const GRAY_DARK = '#374151'

export default function ShopeeListingTitleOptimisation() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Optimise Your Shopee Listing Title (With Examples)",
        "description": "Your Shopee listing title is the single biggest ranking factor in Shopee search. Here's exactly how to write one that ranks and converts.",
        "author": { "@type": "Organization", "name": "Atsell", "url": "https://atsell.io" },
        "publisher": { "@type": "Organization", "name": "Atsell", "url": "https://atsell.io", "logo": { "@type": "ImageObject", "url": "https://atsell.io/favicon.png" } },
        "datePublished": "2026-05-02",
        "dateModified": "2026-05-02",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atsell.io/blog/shopee-listing-title-optimisation" }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How long should a Shopee listing title be?", "acceptedAnswer": { "@type": "Answer", "text": "Shopee allows up to 120 characters for a listing title. Aim to use 80–120 characters to maximise keyword coverage. Titles that are too short leave ranking opportunity on the table." } },
          { "@type": "Question", "name": "Where should the main keyword go in a Shopee title?", "acceptedAnswer": { "@type": "Answer", "text": "Put your primary keyword as close to the start of the title as possible. Shopee's search algorithm weights keywords that appear earlier in the title more heavily." } },
          { "@type": "Question", "name": "Can I use special characters or ALL CAPS in Shopee titles?", "acceptedAnswer": { "@type": "Answer", "text": "Avoid special characters, ALL CAPS, and excessive punctuation in Shopee titles. These reduce click-through rate and may violate Shopee's listing policies." } }
        ]
      })}} />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        .prose h2 { font-family: 'Playfair Display', serif; font-size: clamp(20px, 2.5vw, 26px); font-weight: 700; color: ${NAVY}; margin: 40px 0 16px; line-height: 1.3; }
        .prose p { font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.8; color: ${GRAY_DARK}; margin-bottom: 20px; }
        .prose ul { padding-left: 20px; margin-bottom: 20px; }
        .prose ol { padding-left: 20px; margin-bottom: 20px; }
        .prose li { font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.8; color: ${GRAY_DARK}; margin-bottom: 8px; }
        .prose strong { font-weight: 700; color: ${NAVY}; }
        .prose a { color: ${NAVY}; }
        .example-good { background: #f0faf4; border-left: 4px solid #4caf78; border-radius: 0 12px 12px 0; padding: 18px 24px; margin-bottom: 16px; font-family: 'DM Sans', sans-serif; font-size: 15px; line-height: 1.6; color: ${GRAY_DARK}; }
        .example-bad { background: #fff5f5; border-left: 4px solid #e57373; border-radius: 0 12px 12px 0; padding: 18px 24px; margin-bottom: 16px; font-family: 'DM Sans', sans-serif; font-size: 15px; line-height: 1.6; color: ${GRAY_DARK}; }
      `}</style>

      <nav style={{ background: NAVY_DARK, padding: '0 24px', borderBottom: '1px solid rgba(232,168,56,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: GOLD }}>Atsell</span>
          </a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="/blog" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>← Blog</a>
            <a href="https://wa.me/6597121217" target="_blank" rel="noopener noreferrer" style={{ padding: '9px 20px', borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Book a Call</a>
          </div>
        </div>
      </nav>

      <article style={{ background: WHITE }}>
        <div style={{ background: `linear-gradient(135deg, ${NAVY_DARK}, ${NAVY})`, padding: '64px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>May 2026</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>·</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>6 min read</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: WHITE, lineHeight: 1.2, marginBottom: 20 }}>
              How to Optimise Your Shopee Listing Title (With Examples)
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              Your Shopee listing title is the single most important on-page factor for ranking in Shopee search. Here's the exact formula — with before-and-after examples.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' }} className="prose">

          <h2>Why the title matters so much</h2>
          <p>Shopee's search algorithm uses your product title as its primary signal for deciding which listings to show for a given query. A well-structured title with the right keywords in the right positions can rank your product for dozens of related searches — a poorly structured one leaves you invisible regardless of how good your images or reviews are.</p>
          <p>The title also drives click-through rate. A buyer scanning search results reads titles first. If your title clearly matches what they're looking for and communicates the key benefit, they click. If it's vague or cluttered, they scroll past.</p>

          <h2>The character limit</h2>
          <p>Shopee allows up to <strong>120 characters</strong> for a product title. You should aim to use most of them — 80 to 120 characters is the optimal range. Short titles waste ranking potential. At Atsell, titles that use 90–120 characters with strong keyword coverage consistently outperform short titles across every category we manage.</p>

          <h2>The title formula</h2>
          <p>The most effective Shopee listing titles follow this structure:</p>
          <p><strong>[Primary Keyword] + [Brand or Model] + [Key Spec or Benefit] + [Secondary Keywords]</strong></p>
          <ul>
            <li><strong>Primary keyword:</strong> The exact phrase your buyer types into Shopee search. Put this first — Shopee weights keywords that appear earlier more heavily. Use Shopee's search autocomplete or the Seller Centre keyword tool to find the highest-volume phrase for your product.</li>
            <li><strong>Brand and model:</strong> Include your brand name and model number if buyers search for it. For generic or unbranded products, skip the brand and go straight to specs.</li>
            <li><strong>Key spec or benefit:</strong> The one attribute a buyer needs to confirm this is the right product — size, capacity, material, colour, certification, or compatibility.</li>
            <li><strong>Secondary keywords:</strong> Additional search terms that describe your product from different angles: category terms, use cases, and common synonyms.</li>
          </ul>

          <h2>Before and after examples</h2>

          <p><strong>Standing desk</strong></p>
          <div className="example-bad"><strong style={{ color: '#c62828' }}>Before:</strong> "Height Adjustable Desk — White" (29 characters)</div>
          <div className="example-good"><strong style={{ color: '#2e7d32' }}>After:</strong> "Standing Desk Height Adjustable Electric Sit Stand Office Desk Table White 120cm Home Workstation" (97 characters)</div>
          <p>The improved title adds "electric," "sit stand," "office desk," and "workstation" — covering four distinct buyer search intents that the original missed entirely.</p>

          <p><strong>Vitamin C serum</strong></p>
          <div className="example-bad"><strong style={{ color: '#c62828' }}>Before:</strong> "Vitamin C Serum Brightening" (26 characters)</div>
          <div className="example-good"><strong style={{ color: '#2e7d32' }}>After:</strong> "Vitamin C Serum Face Brightening Whitening Anti-Aging Hyaluronic Acid Moisturising Glow Skincare 30ml" (100 characters)</div>
          <p>The improved title ranks for brightening, whitening, anti-aging, moisturising, and glow — all legitimate searches for the same product from buyers with slightly different language.</p>

          <p><strong>Laptop stand</strong></p>
          <div className="example-bad"><strong style={{ color: '#c62828' }}>Before:</strong> "Laptop Stand Adjustable" (23 characters)</div>
          <div className="example-good"><strong style={{ color: '#2e7d32' }}>After:</strong> "Laptop Stand Adjustable Foldable Aluminium Ergonomic Notebook Holder Riser MacBook Compatible Desk" (98 characters)</div>
          <p>Adding "foldable," "aluminium," "ergonomic," "notebook holder," "riser," and "MacBook" captures buyers with different search habits and product expectations.</p>

          <h2>What to include</h2>
          <ul>
            <li>The highest-volume search keyword for your product — placed first</li>
            <li>Product type (so Shopee categorises it correctly)</li>
            <li>Key specifications: size, weight, capacity, material, colour, volume</li>
            <li>Common use cases or buyer intent phrases ("for home," "for office," "kids")</li>
            <li>Synonyms — buyers use different words for the same product</li>
            <li>Compatibility or model fit if relevant ("for iPhone 16," "for Dyson V8")</li>
          </ul>

          <h2>What to avoid</h2>
          <ul>
            <li><strong>ALL CAPS</strong> — looks spammy, reduces click-through rate, and may violate Shopee listing policies</li>
            <li><strong>Excessive punctuation</strong> — asterisks, exclamation marks, and ellipsis clutter the title and signal low quality</li>
            <li><strong>Irrelevant keywords</strong> — adding unrelated popular terms to piggyback on search volume violates Shopee policies and will get your listing removed</li>
            <li><strong>Brand name first</strong> — unless you're Nike or Samsung, buyers don't search for your brand first. Lead with the product keyword.</li>
            <li><strong>Filler phrases</strong> — "high quality," "best seller," "hot item" consume characters without adding keyword value</li>
          </ul>

          <h2>How to find the right keywords</h2>
          <ol>
            <li><strong>Shopee search autocomplete.</strong> Type your product keyword into Shopee search and note the autocomplete suggestions — these are real queries buyers are using. Include the most relevant ones in your title.</li>
            <li><strong>Shopee Seller Centre keyword tool.</strong> The Seller Centre has a keyword suggestion and volume tool under the Listing section. Use it to identify high-volume terms in your specific category.</li>
            <li><strong>Top-ranking competitor titles.</strong> Search for your product on Shopee and study the titles of the top 5 listings. What keywords appear consistently? What's in their title that yours is missing?</li>
          </ol>

          <h2>What else affects Shopee search ranking</h2>
          <p>The title is the most important ranking factor, but it works together with:</p>
          <ul>
            <li><strong>Product attributes:</strong> Fill in every attribute Shopee offers for your category. Incomplete attributes reduce visibility in filtered searches.</li>
            <li><strong>Main image:</strong> Drives click-through rate from search results. A high-quality image with a clean white background and clear product view consistently outperforms cluttered or low-resolution images.</li>
            <li><strong>Sales velocity:</strong> Shopee's algorithm favours listings with recent sales. New listings get a short "New Arrival" boost but need early sales to sustain ranking — which is why promotional pricing and Shopee Ads matter at launch.</li>
            <li><strong>Shop rating:</strong> Overall shop health (ratings, fulfilment rate, response rate) affects how Shopee surfaces your products. Poor shop metrics suppress ranking even for well-optimised titles.</li>
          </ul>

          <h2>FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
            {[
              { q: 'How long should a Shopee listing title be?', a: "Shopee allows up to 120 characters. Aim for 80–120 characters to maximise keyword coverage. Short titles leave ranking potential unused." },
              { q: 'Where should the main keyword go in a Shopee title?', a: "Put your primary keyword as close to the start of the title as possible. Shopee's search algorithm weights keywords that appear earlier more heavily." },
              { q: 'Can I use special characters or ALL CAPS in Shopee titles?', a: "Avoid special characters, ALL CAPS, and excessive punctuation. These reduce click-through rate and may violate Shopee's listing policies." },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: OFF_WHITE, borderRadius: 16, padding: '24px 28px', border: '1px solid #e2e6ee' }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{q}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <section style={{ background: OFF_WHITE, padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e2e6ee' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: NAVY, marginBottom: 12 }}>Want us to optimise your Shopee listings?</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.7, marginBottom: 28 }}>Atsell optimises listings across 100+ brands on Shopee, Lazada, and TikTok Shop. Book a free consultation to see what's possible for your store.</p>
          <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20to%20learn%20more%20about%20Shopee%20listing%20optimisation." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '14px 36px', borderRadius: 10, background: `linear-gradient(135deg, ${GOLD}, #f5c96a)`, color: NAVY_DARK, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Book a Free Consultation
          </a>
        </div>
      </section>

      <footer style={{ background: NAVY_DARK, padding: '32px 24px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ marginBottom: 12 }}>
          {[['Home', '/'], ['Blog', '/blog'], ['Shopee Partner', '/shopee-partner'], ['Lazada Partner', '/lazada-partner'], ['TikTok Shop Partner', '/tiktok-shop-partner']].map(([label, href]) => (
            <a key={label} href={href} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', margin: '0 12px' }}>{label}</a>
          ))}
        </div>
        <span>© 2026 Atsell. All rights reserved.</span>
      </footer>
    </>
  )
}
