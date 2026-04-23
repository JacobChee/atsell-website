import { useState, useRef } from "react";

// ── Design tokens matching AtsellLanding ──────────────────────────────────────
const C = {
  navy: "#1e3a5f",
  navyDark: "#152a45",
  navyLight: "#264a7a",
  gold: "#e8a838",
  goldLight: "#f5c96a",
  white: "#ffffff",
  offWhite: "#f8f9fc",
  gray100: "#f1f3f8",
  gray200: "#e2e6ee",
  gray500: "#6b7a90",
  gray700: "#3d4f63",
  gray900: "#1a2332",
  green: "#1a7f5a",
  greenBg: "#eaf7f2",
  amber: "#a05f00",
  amberBg: "#fef3e2",
  red: "#9b1c1c",
  redBg: "#fef2f2",
};

const FONT = "'DM Sans', sans-serif";
const SERIF = "'Playfair Display', serif";

// ── Category keyword maps ─────────────────────────────────────────────────────
const CAT_KW = {
  fashion: ["shirt","dress","shoes","bag","pants","jacket","top","skirt","sneaker","sandal","jeans","blouse","coat","tshirt","shorts","hoodie"],
  electronics: ["phone","laptop","earphone","cable","charger","speaker","watch","tablet","keyboard","mouse","camera","headphone","wireless","bluetooth","earbuds"],
  home: ["chair","table","lamp","shelf","cushion","curtain","organizer","storage","frame","towel","bedsheet","pillow","mat","rack","drawer","vase"],
  beauty: ["serum","cream","mask","toner","moisturizer","sunscreen","lipstick","foundation","cleanser","shampoo","lotion","essence","gel","primer","blush"],
  food: ["coffee","tea","snack","sauce","honey","cookie","biscuit","protein","vitamin","supplement","oil","vinegar","organic","nuts","chocolate"],
  sports: ["yoga","gym","running","cycling","swim","workout","fitness","ball","racket","gloves","mat","band","dumbbell","resistance","jersey"],
  baby: ["diaper","baby","infant","toddler","stroller","bottle","toy","wipes","cradle","carrier","teether","feeding","cot","nursing"],
  health: ["supplement","vitamin","collagen","probiotic","omega","zinc","magnesium","detox","immunity","glucose","blood","wellness"],
  pets: ["dog","cat","pet","leash","collar","bowl","treat","grooming","litter","aquarium","bird","fish","cage","bed","chew"],
  auto: ["car","motorcycle","tyre","tire","brake","oil","wiper","seat cover","dashcam","charger","cleaning","polish","filter","helmet"],
  general: [],
};

const CATEGORIES = [
  { value: "general", label: "General / other" },
  { value: "fashion", label: "Fashion & apparel" },
  { value: "electronics", label: "Electronics & gadgets" },
  { value: "home", label: "Home & living" },
  { value: "beauty", label: "Beauty & personal care" },
  { value: "food", label: "Food & grocery" },
  { value: "sports", label: "Sports & outdoors" },
  { value: "baby", label: "Baby & kids" },
  { value: "health", label: "Health & wellness" },
  { value: "pets", label: "Pets" },
  { value: "auto", label: "Automotive" },
];

const PLATFORMS = [
  { value: "shopee", label: "Shopee" },
  { value: "lazada", label: "Lazada" },
];

const MALL_TIERS = [
  { value: "regular", label: "Regular seller" },
  { value: "preferred", label: "Preferred / Star seller" },
  { value: "mall", label: "Shopee Mall / LazMall" },
];

// ── Scoring logic ─────────────────────────────────────────────────────────────
function scoreTitle(title, platform, mall, category) {
  if (!title) return null;
  const tl = title.toLowerCase();
  const words = tl.split(/\s+/);
  const first40 = title.slice(0, 40).toLowerCase();
  const spam = /[!@#$%^&*(){}<>|\\]+/.test(title);
  const allcaps = /\b[A-Z]{5,}\b/.test(title) && !/\b(USB|HDMI|LED|4K|UHD|LCD|RAM|GPU|CPU|DIY|BPA|SGD)\b/.test(title);
  const hasBrand = /\b[A-Z][a-z]{2,}/.test(title.slice(0, 35));
  const hasSize = /\b(size|s\/m|m\/l|xl|xxl|cm|mm|ml|\bg\b|kg|inch|ft|oz|pcs|pack|set)\b/i.test(title);
  const hasColor = /\b(black|white|red|blue|green|yellow|pink|purple|grey|gray|brown|beige|navy|silver|gold|rose|clear|multicolor)\b/i.test(title);
  const hasMat = /\b(cotton|polyester|leather|stainless|steel|aluminum|silicone|plastic|wood|bamboo|nylon|linen|canvas|ceramic|glass|rubber|foam)\b/i.test(title);
  const hasGender = /\b(men|women|unisex|kids|boys|girls|ladies|male|female|adult)\b/i.test(title);
  const hasUse = /\b(for|home|office|outdoor|travel|sport|kitchen|gym|school|work|daily|night|summer|winter|gaming|running|hiking)\b/i.test(title);
  const hasBenefit = /\b(waterproof|wireless|reusable|foldable|portable|adjustable|durable|lightweight|breathable|rechargeable|fast|safe|non.slip|anti|eco)\b/i.test(title);
  const hasSG = /\b(sg|singapore|local|free.ship|cod|ready.stock|instock|authentic|original|genuine)\b/i.test(tl);
  const hasSep = /[-|/]/.test(title);
  const ck = CAT_KW[category] || [];
  const hasCatKW = ck.some(k => tl.includes(k));
  const len = title.length;
  const maxC = platform === "lazada" ? 255 : 150;
  const mallBonus = mall === "mall" ? 2 : mall === "preferred" ? 1 : 0;

  let S = 0, P = 0, I = 0, Ch = 0, E = 0;

  if (first40.split(" ").length >= 2) S += 10;
  if (hasCatKW) S += 10;
  if (!spam && !allcaps) S += 5;
  if (hasBrand) P += 7;
  if (/\d/.test(title) || hasSize) P += 8;
  if (hasColor) P += 5;
  if (hasMat || hasGender) P += 5;
  if (hasUse) I += 10;
  if (hasBenefit) I += 10;
  if (len > maxC) { Ch = 0; }
  else if (len >= 70 && len <= 120) { Ch = 20; }
  else if (len >= 50 && len < 70) { Ch = 12; }
  else if (len > 120 && len <= maxC) { Ch = 12; }
  else { Ch = 5; }
  if (spam) Ch = Math.max(0, Ch - 8);
  if (hasSep) Ch = Math.min(Ch + 2, 20);
  if (hasSG) E += 5;
  if (words.length >= 7) E += 3;
  if (hasSep) E += 2;

  const total = Math.min(100, S + P + I + Ch + E + mallBonus);
  const grade = total >= 85 ? "A" : total >= 70 ? "B" : total >= 55 ? "C" : total >= 40 ? "D" : "F";

  const mallMandatory = mall === "mall" && !hasBrand
    ? [{ type: "fix", text: "Mall listings require the brand name at the very start of the title." }]
    : [];

  return {
    total, grade, S, P, I, Ch, E, mallBonus, len, maxC,
    recos: [
      { type: S >= 20 ? "good" : S >= 10 ? "improve" : "fix", text: S >= 20 ? "Primary keyword is well-placed in the title." : (!hasCatKW ? "Add a category-specific keyword (e.g. for fashion: 'dress', 'sneaker')." : "Move the main keyword into the first 40 characters.") + (spam || allcaps ? " Remove spam characters or excessive caps." : "") },
      { type: P >= 18 ? "good" : P >= 10 ? "improve" : "fix", text: P >= 18 ? "Product specifics are comprehensive." : [!hasBrand && "Add a brand name near the start.", (!/\d/.test(title) && !hasSize) && "Include size, quantity, or model number.", !hasColor && "Add a color variant.", (!hasMat && !hasGender) && "Add material or target gender."].filter(Boolean).join(" ") },
      { type: I >= 15 ? "good" : I >= 8 ? "improve" : "fix", text: I >= 15 ? "Good intent and benefit signals." : [!hasUse && "Add a use-case phrase (e.g. 'for home office', 'running').", !hasBenefit && "Add a benefit keyword (e.g. 'waterproof', 'lightweight')."].filter(Boolean).join(" ") },
      { type: Ch >= 15 ? "good" : Ch >= 8 ? "improve" : "fix", text: len > maxC ? `Exceeds ${maxC}-char limit — trim immediately.` : len >= 70 && len <= 120 ? `Ideal length (${len} chars).` : len < 50 ? `Too short (${len} chars). Add more keyword-rich detail.` : len < 70 ? `A bit short (${len} chars). Aim for 70–120.` : `Slightly long (${len} chars). Trim below 120 for mobile.` },
      { type: E >= 8 ? "good" : "improve", text: E >= 8 ? "Strong secondary keywords and local signals." : !hasSG ? "Add a local signal like 'SG Ready Stock' or 'Authentic' and secondary keywords." : "Add more secondary keywords and separators (dash or pipe) for readability." },
      ...mallMandatory,
    ],
  };
}

function scoreHealth(data, mall) {
  const mallBonus = mall === "mall" ? 5 : mall === "preferred" ? 2 : 0;
  const rating = parseFloat(data.rating) || 0;
  const reviews = parseInt(data.reviews) || 0;
  const sold = parseInt((data.sold || "").replace(/\D/g, "")) || 0;
  const images = parseInt(data.images) || 0;

  let R = 0, SV = 0, V = 0, D = 0, O = 0;

  if (rating >= 4.8) R += 15; else if (rating >= 4.5) R += 12; else if (rating >= 4.0) R += 8; else if (rating > 0) R += 4;
  if (reviews >= 500) R += 10; else if (reviews >= 100) R += 8; else if (reviews >= 30) R += 5; else if (reviews > 0) R += 2;
  if (sold >= 5000) SV += 20; else if (sold >= 1000) SV += 15; else if (sold >= 300) SV += 10; else if (sold >= 50) SV += 6; else if (sold > 0) SV += 2;
  if (images >= 8) V += 12; else if (images >= 5) V += 9; else if (images >= 3) V += 6; else if (images > 0) V += 3;
  if (data.video === "yes") V += 8;
  if (data.desc === "great") D = 20; else if (data.desc === "good") D = 15; else if (data.desc === "ok") D = 8; else if (data.desc === "poor") D = 3; else D = 10;
  if (data.ship === "fast") O += 8; else if (data.ship === "normal") O += 5; else if (data.ship === "slow") O += 2; else O += 4;
  if (data.promo === "yes") O += 7; else if (data.promo === "no") O += 2; else O += 3;

  const raw = Math.min(95, R + SV + V + D + O);
  const total = Math.min(100, raw + mallBonus);
  const grade = total >= 85 ? "A" : total >= 70 ? "B" : total >= 55 ? "C" : total >= 40 ? "D" : "F";

  return {
    total, grade, R, SV, V, D, O, mallBonus,
    recos: [
      { type: R >= 18 ? "good" : R >= 8 ? "improve" : "fix", text: rating === 0 ? "Enter your rating and review count to score this section." : `${rating.toFixed(1)}★ · ${reviews} reviews. ` + (rating >= 4.8 ? "Excellent — maintain service quality." : rating >= 4.5 ? "Good. Encourage more photo reviews." : "Improve fulfilment and response time to lift rating.") },
      { type: SV >= 12 ? "good" : SV >= 5 ? "improve" : "fix", text: sold === 0 ? "Enter units sold to score sales velocity." : sold >= 1000 ? `${sold.toLocaleString()} units — strong velocity signal to the algorithm.` : `${sold.toLocaleString()} units. ` + (sold < 50 ? "Use promotional pricing to build initial sales." : "Join campaign events (9.9, 11.11) to accelerate velocity.") },
      { type: V >= 14 ? "good" : V >= 7 ? "improve" : "fix", text: `${images || "?"} images · video: ${data.video === "yes" ? "yes" : data.video === "no" ? "no" : "unknown"}. ` + (images >= 8 && data.video === "yes" ? "Excellent visual content." : images < 5 ? "Aim for 8+ images (lifestyle, detail, size chart)." : "") + (data.video === "no" ? " A product video can boost CTR by 20–40%." : "") },
      { type: D >= 15 ? "good" : D >= 8 ? "improve" : "fix", text: data.desc === "unknown" ? "Rate your description quality to score this section." : data.desc === "great" ? "Well-structured with bullets, specs, and in-image text." : data.desc === "good" ? "Good. Add spec tables and lifestyle imagery in description." : data.desc === "ok" ? "Add bullet points, size guides, and searchable keywords." : "Description needs major work — add structure, specs, and keywords." },
      { type: O >= 10 ? "good" : "improve", text: (data.ship === "fast" ? "Fast shipping — positive ranking signal. " : data.ship === "slow" ? "Slow shipping hurts ranking — enable platform logistics. " : "") + (data.promo === "yes" ? "Active in campaigns — great for sales velocity." : "Joining platform campaigns (9.9, 11.11) gives lasting rank boosts.") },
    ],
  };
}

// ── Sub-components ────────────────────────────────────────────────────────────

function GradeCircle({ score, grade }) {
  const color = score >= 70 ? C.green : score >= 55 ? C.amber : C.red;
  const bg = score >= 70 ? C.greenBg : score >= 55 ? C.amberBg : C.redBg;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%", background: bg,
        border: `3px solid ${color}`, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <span style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 700, color, lineHeight: 1 }}>{score}</span>
        <span style={{ fontFamily: FONT, fontSize: 10, color, fontWeight: 600, letterSpacing: "0.5px" }}>/ 100</span>
      </div>
      <div>
        <div style={{
          display: "inline-block", fontFamily: FONT, fontSize: 12, fontWeight: 700,
          padding: "3px 10px", borderRadius: 100, background: bg, color, letterSpacing: "0.5px",
        }}>Grade {grade}</div>
        <div style={{ fontFamily: FONT, fontSize: 12, color: C.gray500, marginTop: 4 }}>
          {score >= 85 ? "Excellent — top-tier listing." : score >= 70 ? "Good — a few tweaks needed." : score >= 55 ? "Average — notable gaps to fix." : "Needs significant work."}
        </div>
      </div>
    </div>
  );
}

function ScoreBar({ score, max }) {
  const pct = Math.round((score / max) * 100);
  const color = pct >= 80 ? C.green : pct >= 50 ? C.amber : "#dc2626";
  return (
    <div style={{ height: 5, borderRadius: 3, background: C.gray200, overflow: "hidden", marginTop: 4 }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 3, transition: "width 0.5s ease" }} />
    </div>
  );
}

function CriteriaCard({ k, label, score, max, note }) {
  const pct = score / max;
  const ptsCls = pct >= 0.8 ? C.green : pct >= 0.5 ? C.amber : "#dc2626";
  return (
    <div style={{
      background: C.white, border: `1px solid ${C.gray200}`, borderRadius: 12,
      padding: "14px 16px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
        <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, color: C.gray500, textTransform: "uppercase", letterSpacing: "0.5px" }}>{k} — {label}</span>
        <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, color: ptsCls }}>{score}/{max}</span>
      </div>
      <ScoreBar score={score} max={max} />
      <p style={{ fontFamily: FONT, fontSize: 12, color: C.gray700, marginTop: 8, lineHeight: 1.5 }}>{note}</p>
    </div>
  );
}

function RecoItem({ type, text }) {
  const map = {
    fix: { bg: "#fef2f2", border: "#dc2626", color: C.red, icon: "✕" },
    improve: { bg: C.amberBg, border: "#d97706", color: C.amber, icon: "△" },
    good: { bg: C.greenBg, border: "#059669", color: C.green, icon: "✓" },
  };
  const s = map[type] || map.improve;
  return (
    <div style={{
      display: "flex", gap: 10, alignItems: "flex-start",
      padding: "8px 12px", background: s.bg, borderLeft: `3px solid ${s.border}`,
      marginBottom: 6, borderRadius: "0 6px 6px 0",
    }}>
      <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: s.color, flexShrink: 0, marginTop: 1 }}>{s.icon}</span>
      <span style={{ fontFamily: FONT, fontSize: 13, color: C.gray900, lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

function SelectField({ id, label, options, value, onChange }) {
  return (
    <div style={{ flex: 1, minWidth: 140 }}>
      <label style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</label>
      <select
        id={id} value={value} onChange={e => onChange(e.target.value)}
        style={{
          width: "100%", fontFamily: FONT, fontSize: 13, padding: "9px 12px",
          border: `1px solid ${C.gray200}`, borderRadius: 8, background: C.white,
          color: C.gray900, cursor: "pointer", appearance: "auto",
        }}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function InputField({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</label>
      <input
        type={type} value={value} onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%", fontFamily: FONT, fontSize: 13, padding: "8px 10px",
          border: `1px solid ${C.gray200}`, borderRadius: 8, background: C.white,
          color: C.gray900, outline: "none",
        }}
      />
    </div>
  );
}

function MallBadge({ platform, mall }) {
  if (mall === "mall") {
    return platform === "lazada"
      ? <span style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, background: "#e6f0fb", color: "#1a4a8a", padding: "3px 10px", borderRadius: 100 }}>LazMall</span>
      : <span style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, background: "#fff0e6", color: "#b84f00", padding: "3px 10px", borderRadius: 100 }}>Shopee Mall</span>;
  }
  if (mall === "preferred") return <span style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, background: C.greenBg, color: C.green, padding: "3px 10px", borderRadius: 100 }}>Preferred Seller</span>;
  return <span style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, background: C.gray100, color: C.gray700, padding: "3px 10px", borderRadius: 100 }}>Regular Seller</span>;
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ListingGrader() {
  const [tab, setTab] = useState("url");
  const [platform, setPlatform] = useState("shopee");
  const [mall, setMall] = useState("regular");
  const [category, setCategory] = useState("general");

  // URL tab
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  // Manual tab
  const [title, setTitle] = useState("");
  const [healthData, setHealthData] = useState({
    rating: "", reviews: "", sold: "", images: "",
    video: "unknown", desc: "unknown", ship: "unknown", promo: "unknown",
  });

  const [spiceResult, setSpiceResult] = useState(null);
  const [healthResult, setHealthResult] = useState(null);
  const [crawledMeta, setCrawledMeta] = useState(null);
  const resultRef = useRef(null);

  const charLimit = platform === "lazada" ? 255 : 150;
  const titleLen = title.length;
  const charColor = titleLen > charLimit ? "#dc2626" : titleLen > 120 ? C.amber : C.green;

  function updateHealth(key, val) {
    setHealthData(prev => ({ ...prev, [key]: val }));
  }

  function runGrade(t, hd) {
    const spice = scoreTitle(t, platform, mall, category);
    const health = scoreHealth(hd, mall);
    setSpiceResult(spice);
    setHealthResult(health);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }

  async function crawlAndGrade() {
    if (!url) return;
    if (!url.includes("shopee") && !url.includes("lazada")) {
      setFetchError("Please paste a Shopee or Lazada listing URL.");
      return;
    }
    setLoading(true);
    setFetchError("");
    setSpiceResult(null);
    setHealthResult(null);
    setCrawledMeta(null);

    try {
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          tools: [{ type: "web_search_20250305", name: "web_search" }],
          messages: [{
            role: "user",
            content: `Extract product listing data from this ${url.includes("shopee") ? "Shopee" : "Lazada"} URL: ${url}

Return ONLY a JSON object (no markdown, no explanation):
{
  "title": "exact product title",
  "price": "price as shown",
  "brand": "brand if visible",
  "category": "category shown on page",
  "rating_raw": "star rating e.g. 4.8",
  "reviews": "review count number only e.g. 420",
  "sold_raw": "units sold text e.g. 2300 sold",
  "images": "number of product images",
  "video": "yes or no",
  "desc_quality": "poor or ok or good or great",
  "shipping": "slow or normal or fast",
  "in_campaigns": "yes or no"
}
If inaccessible: {"error": "Cannot access listing."}`
          }]
        })
      });

      const data = await resp.json();
      let raw = "";
      for (const b of data.content) if (b.type === "text") raw += b.text;
      let listing = null;
      try {
        const m = raw.match(/\{[\s\S]*\}/);
        listing = m ? JSON.parse(m[0]) : null;
      } catch (e) { listing = null; }

      if (!listing || listing.error) {
        setFetchError(listing?.error || "Could not parse listing data. Try the manual tab.");
        setLoading(false);
        return;
      }

      const t = listing.title || "";
      const hd = {
        rating: listing.rating_raw || "",
        reviews: listing.reviews || "",
        sold: (listing.sold_raw || "").replace(/\D/g, ""),
        images: listing.images || "",
        video: listing.video || "unknown",
        desc: listing.desc_quality || "unknown",
        ship: listing.shipping || "unknown",
        promo: listing.in_campaigns || "unknown",
      };
      setCrawledMeta({ price: listing.price, brand: listing.brand, category: listing.category, rating: listing.rating_raw, sold: listing.sold_raw });
      runGrade(t, hd);
    } catch (err) {
      setFetchError("Network error: " + err.message);
    }
    setLoading(false);
  }

  const catLabel = CATEGORIES.find(c => c.value === category)?.label || category;
  const platLabel = platform.charAt(0).toUpperCase() + platform.slice(1);

  return (
    <section style={{ background: C.offWhite, padding: "80px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(232,168,56,0.12)", borderRadius: 100,
            padding: "6px 16px 6px 8px", marginBottom: 20,
            border: "1px solid rgba(232,168,56,0.25)",
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.gold }} />
            <span style={{ fontFamily: FONT, fontSize: 12, color: C.gold, fontWeight: 600, letterSpacing: "0.5px" }}>
              Free Tool
            </span>
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: C.navy, marginBottom: 12 }}>
            Listing Title Grader
          </h2>
          <p style={{ fontFamily: FONT, fontSize: 16, color: C.gray500, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Get an SEO score and full listing health audit for any Shopee or Lazada product — paste a URL or enter details manually.
          </p>
        </div>

        {/* Main card */}
        <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.gray200}`, overflow: "hidden", boxShadow: "0 4px 24px rgba(30,58,95,0.07)" }}>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: `1px solid ${C.gray200}` }}>
            {[{ key: "url", label: "Paste URL" }, { key: "manual", label: "Manual entry" }].map(t => (
              <button key={t.key} onClick={() => { setTab(t.key); setSpiceResult(null); setHealthResult(null); }}
                style={{
                  flex: 1, padding: "16px 24px", fontFamily: FONT, fontSize: 14, fontWeight: tab === t.key ? 600 : 400,
                  color: tab === t.key ? C.navy : C.gray500, background: "none", border: "none",
                  borderBottom: `3px solid ${tab === t.key ? C.gold : "transparent"}`, cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >{t.label}</button>
            ))}
          </div>

          <div style={{ padding: "28px 32px 32px" }}>

            {/* Shared selects row */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              <SelectField id="platform" label="Platform" options={PLATFORMS} value={platform} onChange={setPlatform} />
              <SelectField id="mall" label="Seller tier" options={MALL_TIERS} value={mall} onChange={setMall} />
              <SelectField id="category" label="Category" options={CATEGORIES} value={category} onChange={setCategory} />
            </div>

            {/* Mall context tip */}
            <div style={{
              padding: "10px 14px", background: C.navy + "08", borderRadius: 8,
              border: `1px solid ${C.navy}15`, marginBottom: 24,
              fontFamily: FONT, fontSize: 12, color: C.gray700, lineHeight: 1.5,
            }}>
              {mall === "mall"
                ? (platform === "lazada" ? "LazMall: higher search ranking + verified badge. Brand name in title is mandatory. Higher standard expected." : "Shopee Mall: algorithmic priority placement + badge trust boost. Brand-first title is required.")
                : mall === "preferred"
                  ? "Preferred / Star seller: badge improves CTR and algorithmic weight. Title quality matters even more to maintain status."
                  : "Regular seller: must rely on strong title SEO and listing quality to compete with Mall and Preferred sellers."}
            </div>

            {/* URL Tab */}
            {tab === "url" && (
              <div>
                <label style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>Listing URL</label>
                <input
                  type="text" value={url} onChange={e => setUrl(e.target.value)}
                  placeholder="https://shopee.sg/... or https://www.lazada.sg/products/..."
                  style={{
                    width: "100%", fontFamily: FONT, fontSize: 14, padding: "12px 14px",
                    border: `1px solid ${C.gray200}`, borderRadius: 10, background: C.white,
                    color: C.gray900, outline: "none", marginBottom: 16,
                  }}
                />
                <button
                  onClick={crawlAndGrade} disabled={loading || !url}
                  style={{
                    padding: "13px 28px", borderRadius: 10, fontFamily: FONT, fontSize: 14, fontWeight: 600,
                    background: loading || !url ? C.gray200 : `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                    color: loading || !url ? C.gray500 : C.navyDark, border: "none", cursor: loading || !url ? "default" : "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {loading ? "Fetching listing…" : "Fetch & grade →"}
                </button>
                {fetchError && <p style={{ fontFamily: FONT, fontSize: 13, color: C.red, marginTop: 10 }}>{fetchError}</p>}
              </div>
            )}

            {/* Manual Tab */}
            {tab === "manual" && (
              <div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <label style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, color: C.gray500, textTransform: "uppercase", letterSpacing: "0.5px" }}>Listing title</label>
                    <span style={{ fontFamily: FONT, fontSize: 12, color: charColor }}>{titleLen} / {charLimit} chars</span>
                  </div>
                  <textarea
                    value={title} onChange={e => setTitle(e.target.value)}
                    placeholder='e.g. "Nike Air Max 270 Men Running Shoes Lightweight Breathable Sneakers Black Size 40-45"'
                    rows={3}
                    style={{
                      width: "100%", fontFamily: FONT, fontSize: 14, padding: "12px 14px",
                      border: `1px solid ${C.gray200}`, borderRadius: 10, background: C.white,
                      color: C.gray900, outline: "none", resize: "vertical",
                    }}
                  />
                </div>

                {/* Health inputs */}
                <div style={{ marginBottom: 20 }}>
                  <p style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, color: C.gray500, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 12 }}>
                    Listing health inputs <span style={{ fontWeight: 400, textTransform: "none" }}>(fill what you know — leave blank to skip)</span>
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                    <InputField label="Star rating" value={healthData.rating} onChange={v => updateHealth("rating", v)} placeholder="e.g. 4.8" />
                    <InputField label="Review count" value={healthData.reviews} onChange={v => updateHealth("reviews", v)} placeholder="e.g. 420" />
                    <InputField label="Units sold" value={healthData.sold} onChange={v => updateHealth("sold", v)} placeholder="e.g. 2300" />
                    <InputField label="Image count" value={healthData.images} onChange={v => updateHealth("images", v)} placeholder="e.g. 6" />
                    <div>
                      <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.5px" }}>Has video?</label>
                      <select value={healthData.video} onChange={e => updateHealth("video", e.target.value)} style={{ width: "100%", fontFamily: FONT, fontSize: 13, padding: "8px 10px", border: `1px solid ${C.gray200}`, borderRadius: 8, background: C.white, color: C.gray900 }}>
                        <option value="unknown">Unknown</option><option value="yes">Yes</option><option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.5px" }}>Description quality</label>
                      <select value={healthData.desc} onChange={e => updateHealth("desc", e.target.value)} style={{ width: "100%", fontFamily: FONT, fontSize: 13, padding: "8px 10px", border: `1px solid ${C.gray200}`, borderRadius: 8, background: C.white, color: C.gray900 }}>
                        <option value="unknown">Unknown</option>
                        <option value="poor">Poor (short, no structure)</option>
                        <option value="ok">OK (some detail)</option>
                        <option value="good">Good (bullets + specs)</option>
                        <option value="great">Great (bullets + images + specs)</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.5px" }}>Shipping speed</label>
                      <select value={healthData.ship} onChange={e => updateHealth("ship", e.target.value)} style={{ width: "100%", fontFamily: FONT, fontSize: 13, padding: "8px 10px", border: `1px solid ${C.gray200}`, borderRadius: 8, background: C.white, color: C.gray900 }}>
                        <option value="unknown">Unknown</option>
                        <option value="slow">Slow (&gt;5 days)</option>
                        <option value="normal">Normal (2–5 days)</option>
                        <option value="fast">Fast (1–2 days)</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.5px" }}>In campaigns / vouchers?</label>
                      <select value={healthData.promo} onChange={e => updateHealth("promo", e.target.value)} style={{ width: "100%", fontFamily: FONT, fontSize: 13, padding: "8px 10px", border: `1px solid ${C.gray200}`, borderRadius: 8, background: C.white, color: C.gray900 }}>
                        <option value="unknown">Unknown</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => runGrade(title, healthData)} disabled={!title}
                  style={{
                    padding: "13px 28px", borderRadius: 10, fontFamily: FONT, fontSize: 14, fontWeight: 600,
                    background: !title ? C.gray200 : `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                    color: !title ? C.gray500 : C.navyDark, border: "none", cursor: !title ? "default" : "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Grade listing →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {spiceResult && healthResult && (
          <div ref={resultRef} style={{ marginTop: 32 }}>

            {/* Context bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
              <MallBadge platform={platform} mall={mall} />
              <span style={{ fontFamily: FONT, fontSize: 12, color: C.gray500 }}>{platLabel}</span>
              <span style={{ fontFamily: FONT, fontSize: 12, color: C.gray500 }}>·</span>
              <span style={{ fontFamily: FONT, fontSize: 12, color: C.gray500 }}>{catLabel}</span>
              {mall === "mall" && spiceResult.mallBonus > 0 && (
                <span style={{ fontFamily: FONT, fontSize: 11, color: C.green, background: C.greenBg, padding: "2px 8px", borderRadius: 100 }}>+{spiceResult.mallBonus} pts mall boost (title)</span>
              )}
            </div>

            {/* Crawled meta */}
            {crawledMeta && (
              <div style={{ background: C.white, border: `1px solid ${C.gray200}`, borderRadius: 12, padding: "14px 20px", marginBottom: 20, display: "flex", gap: 24, flexWrap: "wrap" }}>
                {[["Price", crawledMeta.price], ["Brand", crawledMeta.brand], ["Category", crawledMeta.category], ["Rating", crawledMeta.rating], ["Sold", crawledMeta.sold]].filter(([, v]) => v).map(([l, v]) => (
                  <div key={l}>
                    <div style={{ fontFamily: FONT, fontSize: 11, color: C.gray500, textTransform: "uppercase", letterSpacing: "0.5px" }}>{l}</div>
                    <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, color: C.gray900 }}>{v}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Two score cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }} className="grader-scores-grid">
              {[
                { label: "Title SEO score", sub: "SPICE framework", result: spiceResult, color: C.navy },
                { label: "Listing health score", sub: "Performance factors" + (healthResult.mallBonus > 0 ? ` · +${healthResult.mallBonus} mall boost` : ""), result: healthResult, color: C.navyLight },
              ].map(({ label, sub, result, color }) => (
                <div key={label} style={{ background: C.white, border: `1px solid ${C.gray200}`, borderRadius: 16, padding: "24px" }}>
                  <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: C.gray700, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: FONT, fontSize: 11, color: C.gray500, marginBottom: 16 }}>{sub}</div>
                  <GradeCircle score={result.total} grade={result.grade} />
                </div>
              ))}
            </div>

            {/* SPICE breakdown */}
            <div style={{ background: C.white, border: `1px solid ${C.gray200}`, borderRadius: 16, padding: "28px", marginBottom: 20 }}>
              <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 4 }}>Title SEO — SPICE breakdown</h3>
              <p style={{ fontFamily: FONT, fontSize: 13, color: C.gray500, marginBottom: 20 }}>How your title scores on each of the five ranking signals.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }} className="grader-criteria-grid">
                {[
                  { k: "S", label: "Search terms", s: spiceResult.S, m: 25 },
                  { k: "P", label: "Product specifics", s: spiceResult.P, m: 25 },
                  { k: "I", label: "Intent match", s: spiceResult.I, m: 20 },
                  { k: "C", label: "Char optimization", s: spiceResult.Ch, m: 20 },
                  { k: "E", label: "Engagement hooks", s: spiceResult.E, m: 10 },
                ].map((c, i) => <CriteriaCard key={i} {...c} note={spiceResult.recos[i]?.text || ""} />)}
              </div>
              <h4 style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: C.gray700, marginBottom: 10 }}>Recommendations</h4>
              {spiceResult.recos.map((r, i) => <RecoItem key={i} type={r.type} text={r.text} />)}
            </div>

            {/* Health breakdown */}
            <div style={{ background: C.white, border: `1px solid ${C.gray200}`, borderRadius: 16, padding: "28px", marginBottom: 20 }}>
              <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 4 }}>Listing health breakdown</h3>
              <p style={{ fontFamily: FONT, fontSize: 13, color: C.gray500, marginBottom: 20 }}>Beyond the title — the factors that drive ranking and conversions.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }} className="grader-criteria-grid">
                {[
                  { k: "R", label: "Ratings & reviews", s: healthResult.R, m: 25 },
                  { k: "SV", label: "Sales velocity", s: healthResult.SV, m: 20 },
                  { k: "V", label: "Visual content", s: healthResult.V, m: 20 },
                  { k: "D", label: "Description quality", s: healthResult.D, m: 20 },
                  { k: "O", label: "Operations & promos", s: healthResult.O, m: 15 },
                ].map((c, i) => <CriteriaCard key={i} {...c} note={healthResult.recos[i]?.text || ""} />)}
              </div>
              <h4 style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: C.gray700, marginBottom: 10 }}>Recommendations</h4>
              {healthResult.recos.map((r, i) => <RecoItem key={i} type={r.type} text={r.text} />)}
            </div>

            {/* CTA */}
            <div style={{
              background: `linear-gradient(135deg, ${C.navyDark}, ${C.navy})`,
              borderRadius: 16, padding: "32px", textAlign: "center",
            }}>
              <h3 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 700, color: C.white, marginBottom: 8 }}>Want us to fix this for you?</h3>
              <p style={{ fontFamily: FONT, fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 24, maxWidth: 400, margin: "0 auto 24px" }}>
                Our team optimizes Shopee and Lazada listings daily across 100+ clients in SEA.
              </p>
              <a
                href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20help%20optimizing%20my%20listings."
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-block", padding: "13px 32px", borderRadius: 10,
                  background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                  color: C.navyDark, fontFamily: FONT, fontWeight: 700, fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Book a free consultation →
              </a>
            </div>
          </div>
        )}

        {/* Framework footnote */}
        <div style={{ marginTop: 24, padding: "16px 20px", background: C.gray100, borderRadius: 10, textAlign: "center" }}>
          <p style={{ fontFamily: FONT, fontSize: 12, color: C.gray500, lineHeight: 1.6 }}>
            <strong style={{ color: C.gray700 }}>SPICE framework:</strong> Search terms (25) · Product specifics (25) · Intent match (20) · Char optimization (20) · Engagement hooks (10) &nbsp;|&nbsp;
            <strong style={{ color: C.gray700 }}>Health:</strong> Ratings (25) · Sales velocity (20) · Visuals (20) · Description (20) · Operations (15) &nbsp;|&nbsp;
            Grades: A 85+ · B 70+ · C 55+ · D 40+ · F &lt;40
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .grader-scores-grid { grid-template-columns: 1fr !important; }
          .grader-criteria-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
