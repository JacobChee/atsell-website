export const metadata = {
  title: 'Privacy Policy | Atsell',
  description: "Atsell's privacy policy — how we collect, use, and protect your information.",
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; -webkit-font-smoothing: antialiased; }
        a { color: #1e3a5f; }
      `}</style>

      <header style={{
        background: '#111b33', padding: '20px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src="/atsell-logo.png" alt="Atsell" style={{ height: 36, width: 'auto' }} />
        </a>
        <nav style={{ display: 'flex', gap: 24 }}>
          {[['Services', '/#services'], ['Pricing', '/#pricing'], ['Contact', 'https://wa.me/6597121217']].map(([label, href]) => (
            <a key={label} href={href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>{label}</a>
          ))}
        </nav>
      </header>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 96px', fontFamily: "'DM Sans', sans-serif", background: '#f7f6f3', minHeight: '100vh' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, margin: '0 0 8px', color: '#1e3a5f' }}>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 48px' }}>Last updated: May 2026</p>

        <p>Atsell Pte. Ltd. ("Atsell", "we", "us", or "our") operates atsell.io. This policy explains how we collect, use, and protect information when you use our website or engage with us.</p>

        {[
          { heading: '1. Information We Collect', body: null, list: [
            '<strong>Contact information</strong> — name, email address, phone number, and company name when you submit an enquiry or book a consultation.',
            '<strong>Usage data</strong> — pages visited, time on site, browser type, and referring URL, collected via analytics tools.',
            '<strong>Communications</strong> — messages you send us via WhatsApp, email, or our website contact form.',
          ]},
          { heading: '2. How We Use Your Information', body: null, list: [
            'Respond to your enquiries and provide requested services.',
            'Send service updates, proposals, and relevant communications.',
            'Improve our website and understand how visitors use it.',
            'Comply with legal and regulatory obligations.',
          ]},
          { heading: '3. Sharing of Information', body: 'We do not sell or rent your personal information. We may share information with trusted third-party service providers (such as analytics platforms or email tools) who assist us in operating our website and business, subject to confidentiality obligations. We may also disclose information where required by law.' },
          { heading: '4. Cookies and Analytics', body: 'Our website may use cookies and similar technologies to analyse traffic and improve user experience. You can control cookies through your browser settings. We use analytics tools such as Google Analytics to understand site usage in aggregate.' },
          { heading: '5. Data Retention', body: 'We retain personal information for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law.' },
          { heading: '6. Your Rights', body: 'Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information. To exercise any of these rights, contact us at the details below.' },
          { heading: '7. Security', body: 'We implement reasonable technical and organisational measures to protect your information against unauthorised access, disclosure, or loss. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.' },
          { heading: '8. Third-Party Links', body: 'Our website may contain links to third-party sites (such as Lazada, Shopee, or TikTok Shop). We are not responsible for the privacy practices of those sites and encourage you to review their respective privacy policies.' },
          { heading: '9. Changes to This Policy', body: 'We may update this policy from time to time. We will post the revised version on this page with an updated date. Continued use of our website after changes constitutes acceptance of the revised policy.' },
          { heading: '10. Contact Us', body: null, list: [
            '<strong>WhatsApp:</strong> <a href="https://wa.me/6597121217" target="_blank" rel="noopener noreferrer">+65 9712 1217</a>',
            '<strong>Website:</strong> <a href="https://atsell.io">atsell.io</a>',
          ]},
        ].map(({ heading, body, list }) => (
          <div key={heading}>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: '40px 0 12px', color: '#1e3a5f' }}>{heading}</h2>
            {body && <p style={{ fontSize: 15, lineHeight: 1.75, color: '#374151' }}>{body}</p>}
            {list && <ul style={{ paddingLeft: 20 }}>{list.map((item, i) => (
              <li key={i} style={{ fontSize: 15, lineHeight: 1.75, color: '#374151', marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: item }} />
            ))}</ul>}
          </div>
        ))}
      </main>

      <footer style={{ background: '#111b33', padding: 24, textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
        <span>© 2026 Atsell. All rights reserved.</span>
        {' · '}
        <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
        {' · '}
        <a href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Privacy Policy</a>
      </footer>
    </>
  )
}
