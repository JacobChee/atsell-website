import AtsellLanding from '../src/AtsellLanding'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is an ecommerce enabler?",
              "acceptedAnswer": { "@type": "Answer", "text": "An ecommerce enabler is a full-service partner that manages every aspect of a brand's online store on behalf of the brand. Unlike a software tool or a traditional agency, an enabler handles end-to-end operations: store setup, product listing optimisation, marketing, customer service, and logistics coordination — so brands can focus on their product while the enabler drives online sales." }
            },
            {
              "@type": "Question",
              "name": "Which marketplaces does Atsell manage?",
              "acceptedAnswer": { "@type": "Answer", "text": "Atsell is an official partner of Lazada, Shopee, and TikTok Shop — the three largest ecommerce marketplaces in Southeast Asia. We manage storefronts, run marketplace-specific ad campaigns, and participate in platform promotions across all three." }
            },
            {
              "@type": "Question",
              "name": "Which countries does Atsell operate in?",
              "acceptedAnswer": { "@type": "Answer", "text": "Atsell operates across four Southeast Asian markets: Singapore, Malaysia, Vietnam, and Thailand. We have local teams with on-the-ground knowledge of each market's consumer behaviour, platform nuances, and promotional calendars." }
            },
            {
              "@type": "Question",
              "name": "How is Atsell different from a marketing agency?",
              "acceptedAnswer": { "@type": "Answer", "text": "A marketing agency typically handles advertising only. Atsell takes full ownership of your ecommerce operation — from storefront setup and listing optimisation to customer support and live selling. We are measured on your revenue growth, not just ad spend or impressions." }
            },
            {
              "@type": "Question",
              "name": "What results can brands expect working with Atsell?",
              "acceptedAnswer": { "@type": "Answer", "text": "Across our active client base, brands see an average revenue growth of 156% after partnering with Atsell. Results vary by category, starting baseline, and market, but our KPI-driven model means we are directly incentivised to grow your numbers." }
            },
            {
              "@type": "Question",
              "name": "Do I need to already be selling online to work with Atsell?",
              "acceptedAnswer": { "@type": "Answer", "text": "No. Atsell works with brands at any stage — from those launching on a Southeast Asian marketplace for the first time to established sellers looking to scale. We handle the full setup process including store creation, content production, and account configuration." }
            },
            {
              "@type": "Question",
              "name": "How does Atsell's pricing work?",
              "acceptedAnswer": { "@type": "Answer", "text": "Atsell's pricing is tailored to each brand's scale, category, and the markets they want to enter. Book a free consultation through our website and our team will put together a proposal based on your specific situation." }
            },
            {
              "@type": "Question",
              "name": "How long does it take to launch a store with Atsell?",
              "acceptedAnswer": { "@type": "Answer", "text": "Most stores are live within 2–4 weeks of onboarding, depending on the marketplace, the number of SKUs, and the availability of brand assets. Our team manages the entire submission and approval process with the platforms." }
            }
          ]
        })}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Client Reviews",
          "itemListElement": [
            {
              "@type": "Review",
              "position": 1,
              "author": { "@type": "Person", "name": "Kelvin" },
              "reviewBody": "Ecommerce talent is scarce, and turnover is high. A solid team would cost business owners at least USD 10,000/mth. This is why I'm glad to work with the Atsell team. They are true professionals in the ecommerce space and have supported me tremendously in scaling up my online business.",
              "itemReviewed": { "@type": "Organization", "name": "Atsell", "url": "https://atsell.io" }
            },
            {
              "@type": "Review",
              "position": 2,
              "author": { "@type": "Person", "name": "Hana" },
              "reviewBody": "With Atsell's expertise and network, it has helped me to push my marketplace sales further and most importantly reduce my workload!",
              "itemReviewed": { "@type": "Organization", "name": "Atsell", "url": "https://atsell.io" }
            },
            {
              "@type": "Review",
              "position": 3,
              "author": { "@type": "Person", "name": "Eric" },
              "reviewBody": "Thank you for the great support rendered to us for the past 6 months. Lirong helped us set up everything on the platform from zero to where we are today. We will continue to work closely with you to bring us to the next level!",
              "itemReviewed": { "@type": "Organization", "name": "Atsell", "url": "https://atsell.io" }
            }
          ]
        })}}
      />
      <AtsellLanding />
    </>
  )
}
