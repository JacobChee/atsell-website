import { useState, useRef, useEffect } from "react";

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
  green: "#0f6e4a",
  greenBg: "#eaf7f0",
  amber: "#92580a",
  amberBg: "#fef3e2",
  red: "#9b1c1c",
  redBg: "#fef2f2",
};
const FONT = "'DM Sans', sans-serif";
const SERIF = "'Playfair Display', serif";

const CAT_KW = {
  fashion: ["shirt","dress","shoes","bag","pants","jacket","top","sneaker","sandal","jeans","blouse","coat","tshirt","shorts","hoodie"],
  electronics: ["phone","laptop","earphone","cable","charger","speaker","watch","tablet","keyboard","mouse","camera","headphone","wireless","bluetooth"],
  home: ["chair","table","lamp","shelf","cushion","curtain","organizer","storage","frame","towel","bedsheet","pillow","mat","rack","drawer"],
  beauty: ["serum","cream","mask","toner","moisturizer","sunscreen","lipstick","foundation","cleanser","shampoo","lotion","essence","gel","primer"],
  food: ["coffee","tea","snack","sauce","honey","cookie","biscuit","protein","vitamin","supplement","oil","organic","nuts","chocolate"],
  sports: ["yoga","gym","running","cycling","swim","workout","fitness","ball","racket","gloves","mat","band","dumbbell","resistance"],
  baby: ["diaper","baby","infant","toddler","stroller","bottle","toy","wipes","cradle","carrier","teether","feeding","cot"],
  health: ["supplement","vitamin","collagen","probiotic","omega","zinc","magnesium","detox","immunity","wellness"],
  pets: ["dog","cat","pet","leash","collar","bowl","treat","grooming","litter","bird","fish","cage"],
  auto: ["car","motorcycle","tyre","tire","brake","oil","wiper","seat cover","dashcam","polish","filter","helmet"],
  general: [],
};

function scoreTitle(title, platform, mall, category) {
  if (!title) return null;
  const tl = title.toLowerCase();
  const words = tl.split(/\s+/);
  const first40 = title.slice(0, 40).toLowerCase();
  const spam = /[!@#$%^&*(){}<>|\\]+/.test(title);
  const allcaps = /\b[A-Z]{5,}\b/.test(title) && !/\b(USB|HDMI|LED|4K|UHD|LCD|RAM|GPU|CPU|DIY|BPA)\b/.test(title);
  const hasBrand = /\b[A-Z][a-z]{2,}/.test(title.slice(0, 35));
  const hasSize = /\b(size|s\/m|m\/l|xl|xxl|cm|mm|ml|\bg\b|kg|inch|oz|pcs|pack|set)\b/i.test(title);
  const hasColor = /\b(black|white|red|blue|green|yellow|pink|purple|grey|gray|brown|beige|navy|silver|gold|rose|clear|multicolor)\b/i.test(title);
  const hasMat = /\b(cotton|polyester|leather|stainless|steel|aluminum|silicone|plastic|wood|bamboo|nylon|linen|ceramic|glass|rubber|foam)\b/i.test(title);
  const hasGender = /\b(men|women|unisex|kids|boys|girls|ladies|male|female|adult)\b/i.test(title);
  const hasUse = /\b(for|home|office|outdoor|travel|sport|kitchen|gym|school|work|daily|gaming|running|hiking)\b/i.test(title);
  const hasBenefit = /\b(waterproof|wireless|reusable|foldable|portable|adjustable|durable|lightweight|breathable|rechargeable|fast|safe|non.slip|anti|eco)\b/i.test(title);
  const hasSG = /\b(sg|singapore|local|ready.stock|instock|authentic|original|genuine)\b/i.test(tl);
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
  if (len > maxC) Ch = 0;
  else if (len >= 70 && len <= 120) Ch = 20;
  else if (len >= 50 && len < 70) Ch = 12;
  else if (len > 120 && len <= maxC) Ch = 12;
  else Ch = 5;
  if (spam) Ch = Math.max(0, Ch - 8);
  if (hasSep) Ch = Math.min(Ch + 2, 20);
  if (hasSG) E += 5;
  if (words.length >= 7) E += 3;
  if (hasSep) E += 2;

  const scores = { S, P, I, Ch, E };
  const total = Math.min(100, S + P + I + Ch + E + mallBonus);
  const grade = total >= 85 ? "A" : total >= 70 ? "B" : total >= 55 ? "C" : total >= 40 ? "D" : "F";

  const issues = [];
  if (!hasCatKW) issues.push("Missing category keyword");
  if (!hasBrand) issues.push("No brand name detected");
  if (!hasSize && !/\d/.test(title)) issues.push("No size or model number");
  if (!hasColor) issues.push("No color specified");
  if (!hasUse && !hasBenefit) issues.push("No use-case or benefit signal");
  if (len < 70) issues.push(`Title too short (${len} chars — aim 70–120)`);
  if (len > maxC) issues.push(`Exceeds ${maxC}-char limit — trim immediately`);
  if (spam || allcaps) issues.push("Remove spam characters or excessive caps");
  if (!hasSG) issues.push("Add a local signal (e.g. 'SG Ready Stock')");

  return { total, grade, scores, issues, len, maxC, mallBonus };
}

function SpiderChart({ scores, animated }) {
  const dims = [
    { key: "S", label: "Search", max: 25 },
    { key: "P", label: "Specifics", max: 25 },
    { key: "I", label: "Intent", max: 20 },
    { key: "Ch", label: "Length", max: 20 },
    { key: "E", label: "Hooks", max: 10 },
  ];
  const cx = 130, cy = 130, r = 85;
  const n = dims.length;
  const angle = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const pt = (i, radius) => ({ x: cx + radius * Math.cos(angle(i)), y: cy + radius * Math.sin(angle(i)) });

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!animated) return;
    setProgress(0);
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 800, 1);
      const smooth = p < 1 ? p * p * (3 - 2 * p) : 1;
      setProgress(smooth);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [animated, scores]);

  const rings = [0.25, 0.5, 0.75, 1];
  const toPath = (pts) => pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") + "Z";
  const dataPoints = dims.map((d, i) => pt(i, r * Math.min(scores[d.key] / d.max, 1) * progress));
  const scoreColor = (pct) => pct >= 0.8 ? C.green : pct >= 0.5 ? C.gold : "#e24b4a";

  return (
    <svg viewBox="0 0 260 260" style={{ width: "100%", maxWidth: 240 }}>
      {rings.map((frac, ri) => (
        <polygon key={ri} points={dims.map((_, i) => { const p = pt(i, r * frac); return `${p.x},${p.y}`; }).join(" ")} fill="none" stroke={C.gray200} strokeWidth="1" />
      ))}
      {dims.map((_, i) => { const outer = pt(i, r); return <line key={i} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke={C.gray200} strokeWidth="1" />; })}
      <polygon points={dataPoints.map(p => `${p.x},${p.y}`).join(" ")} fill={`${C.gold}25`} stroke={C.gold} strokeWidth="2" />
      {dataPoints.map((p, i) => {
        const pct = scores[dims[i].key] / dims[i].max;
        return <circle key={i} cx={p.x} cy={p.y} r="4.5" fill={scoreColor(pct)} stroke={C.white} strokeWidth="1.5" />;
      })}
      {dims.map((d, i) => {
        const lp = pt(i, r + 22);
        const pct = scores[d.key] / d.max;
        return (
          <g key={i}>
            <text x={lp.x} y={lp.y - 4} textAnchor="middle" fontSize="10" fontFamily={FONT} fontWeight="600" fill={C.gray700}>{d.label}</text>
            <text x={lp.x} y={lp.y + 9} textAnchor="middle" fontSize="9" fontFamily={FONT} fill={scoreColor(pct)}>{scores[d.key]}/{d.max}</text>
          </g>
        );
      })}
    </svg>
  );
}

function GradeRing({ score, grade }) {
  const fc = score >= 70 ? C.green : score >= 55 ? C.amber : C.red;
  const r = 44, circ = 2 * Math.PI * r;
  const [dash, setDash] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setDash((score / 100) * circ), 150);
    return () => clearTimeout(t);
  }, [score, circ]);
  const bg = score >= 70 ? C.greenBg : score >= 55 ? C.amberBg : C.redBg;
  return (
    <div style={{ position: "relative", width: 110, height: 110 }}>
      <svg viewBox="0 0 100 100" style={{ width: 110, height: 110, transform: "rotate(-90deg)" }}>
        <circle cx="50" cy="50" r={r} fill="none" stroke={C.gray200} strokeWidth="9" />
        <circle cx="50" cy="50" r={r} fill="none" stroke={fc} strokeWidth="9"
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.9s cubic-bezier(.4,0,.2,1)" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 700, color: fc, lineHeight: 1 }}>{score}</span>
        <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 700, color: fc, background: bg, padding: "1px 7px", borderRadius: 100, marginTop: 3 }}>Grade {grade}</span>
      </div>
    </div>
  );
}

async function fetchAIRewrite(title, platform, mall, category, issues) {
  const mallLabel = mall === "mall" ? (platform === "lazada" ? "LazMall" : "Shopee Mall") : mall === "preferred" ? "Preferred Seller" : "Regular Seller";
  const prompt = `You are an expert Shopee and Lazada SEO specialist for Singapore sellers.

Rewrite this product listing title to maximize search ranking and clicks on ${platform === "lazada" ? "Lazada" : "Shopee"} (${mallLabel}, category: ${category}).

Current title: "${title}"
Issues to fix: ${issues.join(", ")}

Rules:
- Max ${platform === "lazada" ? "255" : "150"} characters, ideal 70-120
- Format: [Brand] [Product Type] [Key Features] [Use Case/Benefit] [Variant]
- Include category keywords naturally, no stuffing
- No spam characters
- ${mall === "mall" ? "Brand name must be first" : "Start with strongest search keyword"}
- Add local SG signals if space allows

Return ONLY valid JSON (no markdown):
{"rewritten":"optimized title here","changes":["change 1","change 2","change 3"],"reasoning":"one sentence on main strategy"}`;

  const resp = await fetch("/api/anthropic", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 500, messages: [{ role: "user", content: prompt }] }),
  });
  const data = await resp.json();
  const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("");
  const match = text.match(/\{[\s\S]*\}/);
  return match ? JSON.parse(match[0]) : null;
}

export default function ListingGrader() {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("shopee");
  const [mall, setMall] = useState("regular");
  const [category, setCategory] = useState("general");
  const [result, setResult] = useState(null);
  const [aiResult, setAiResult] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [animated, setAnimated] = useState(false);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef(null);

  const charLimit = platform === "lazada" ? 255 : 150;
  const len = title.length;
  const charColor = len > charLimit ? C.red : len > 120 ? C.amber : len >= 70 ? C.green : C.gray500;

  function grade() {
    const r = scoreTitle(title, platform, mall, category);
    setResult(r);
    setAiResult(null);
    setAiError("");
    setAnimated(false);
    setCopied(false);
    setTimeout(() => { setAnimated(true); resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }, 100);
  }

  async function getAIRewrite() {
    if (!result) return;
    setAiLoading(true);
    setAiError("");
    setAiResult(null);
    try {
      const r = await fetchAIRewrite(title, platform, mall, category, result.issues);
      if (r) setAiResult(r);
      else setAiError("Could not generate rewrite. Please try again.");
    } catch (e) {
      setAiError("Error connecting to AI: " + e.message);
    }
    setAiLoading(false);
  }

  function copyTitle() {
    if (!aiResult) return;
    navigator.clipboard.writeText(aiResult.rewritten);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const mallLabel = mall === "mall" ? (platform === "lazada" ? "LazMall" : "Shopee Mall") : mall === "preferred" ? "Preferred / Star Seller" : "Regular Seller";

  return (
    <section style={{ background: `linear-gradient(180deg, ${C.offWhite} 0%, ${C.white} 100%)`, padding: "80px 24px" }}>
      <style>{`
        .gi:focus{outline:none;border-color:${C.gold}!important;box-shadow:0 0 0 3px ${C.gold}22;}
        .gb:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 8px 24px ${C.gold}44!important;}
        .gb:active:not(:disabled){transform:scale(0.98);}
        .ab:hover:not(:disabled){background:${C.navyLight}!important;}
        @media(max-width:640px){.rg{grid-template-columns:1fr!important;}.sg{flex-direction:column!important;}}
        @keyframes spin{to{transform:rotate(360deg);}}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.5;transform:scale(.8);}}
      `}</style>

      <div style={{ maxWidth: 740, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.gold}18`, border: `1px solid ${C.gold}33`, borderRadius: 100, padding: "5px 14px 5px 8px", marginBottom: 18 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.gold, animation: "pulse 2s infinite" }} />
            <span style={{ fontFamily: FONT, fontSize: 12, color: C.gold, fontWeight: 600, letterSpacing: "0.5px" }}>Free SEO Tool</span>
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: C.navy, margin: "0 0 12px" }}>Listing Title Grader</h2>
          <p style={{ fontFamily: FONT, fontSize: 16, color: C.gray500, maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
            Score your Shopee or Lazada title, spot every gap, and get an AI-optimized rewrite instantly.
          </p>
        </div>

        {/* Input card */}
        <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.gray200}`, padding: "32px", marginBottom: 20, boxShadow: `0 4px 32px ${C.navy}08` }}>

          {/* Selects */}
          <div className="sg" style={{ display: "flex", gap: 12, marginBottom: 20 }}>
            {[
              { label: "Platform", val: platform, set: setPlatform, opts: [["shopee","Shopee"],["lazada","Lazada"]] },
              { label: "Seller tier", val: mall, set: setMall, opts: [["regular","Regular seller"],["preferred","Preferred / Star"],["mall","Shopee Mall / LazMall"]] },
              { label: "Category", val: category, set: setCategory, opts: [["general","General"],["fashion","Fashion"],["electronics","Electronics"],["home","Home & living"],["beauty","Beauty"],["food","Food & grocery"],["sports","Sports"],["baby","Baby & kids"],["health","Health"],["pets","Pets"],["auto","Automotive"]] },
            ].map(({ label, val, set, opts }) => (
              <div key={label} style={{ flex: 1 }}>
                <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.6px" }}>{label}</label>
                <select className="gi" value={val} onChange={e => set(e.target.value)} style={{ width: "100%", fontFamily: FONT, fontSize: 13, padding: "9px 10px", border: `1px solid ${C.gray200}`, borderRadius: 10, background: C.white, color: C.gray900, cursor: "pointer", transition: "border 0.2s" }}>
                  {opts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
            ))}
          </div>

          {/* Textarea */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
              <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, textTransform: "uppercase", letterSpacing: "0.6px" }}>Your listing title</label>
              <span style={{ fontFamily: FONT, fontSize: 12, color: charColor, fontWeight: 500 }}>{len} / {charLimit} chars</span>
            </div>
            <textarea className="gi" value={title} onChange={e => setTitle(e.target.value)}
              placeholder='e.g. "Philips Hue White A60 Smart Bulb E27 - Works with Alexa, 9W LED SG Ready Stock"'
              rows={3}
              style={{ width: "100%", fontFamily: FONT, fontSize: 14, lineHeight: 1.6, padding: "12px 14px", border: `1px solid ${C.gray200}`, borderRadius: 12, background: C.offWhite, color: C.gray900, resize: "vertical", transition: "border 0.2s, box-shadow 0.2s" }}
            />
          </div>

          {/* Tier tip */}
          <div style={{ padding: "9px 14px", background: `${C.navy}07`, borderRadius: 8, border: `1px solid ${C.navy}10`, marginBottom: 20 }}>
            <span style={{ fontFamily: FONT, fontSize: 12, color: C.gray700 }}>
              {mall === "mall" ? `${mallLabel}: brand must appear first. Higher bar, premium placement in return.` : mall === "preferred" ? "Preferred seller: title quality directly impacts your badge retention. Aim for Grade A." : "Regular seller: your title SEO is your main weapon against Mall competitors."}
            </span>
          </div>

          <button className="gb" onClick={grade} disabled={!title.trim()}
            style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", fontFamily: FONT, fontSize: 15, fontWeight: 700, background: !title.trim() ? C.gray200 : `linear-gradient(135deg,${C.gold},${C.goldLight})`, color: !title.trim() ? C.gray500 : C.navyDark, cursor: !title.trim() ? "default" : "pointer", transition: "all 0.25s" }}>
            Grade my title →
          </button>
        </div>

        {/* Results */}
        {result && (
          <div ref={resultRef}>

            {/* Score card */}
            <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.gray200}`, padding: "32px", marginBottom: 16, boxShadow: `0 4px 32px ${C.navy}08` }}>
              <div className="rg" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 36, alignItems: "start" }}>

                {/* Spider + ring */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                  <GradeRing score={result.total} grade={result.grade} />
                  <SpiderChart scores={result.scores} animated={animated} />
                </div>

                {/* Issues */}
                <div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
                    {[
                      { label: mallLabel, bg: mall === "mall" ? "#e6f0fb" : mall === "preferred" ? C.greenBg : C.gray100, color: mall === "mall" ? "#1a4a8a" : mall === "preferred" ? C.green : C.gray700 },
                      { label: platform.charAt(0).toUpperCase() + platform.slice(1), bg: C.gray100, color: C.gray700 },
                    ].map(({ label, bg, color }) => (
                      <span key={label} style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 100, background: bg, color }}>{label}</span>
                    ))}
                  </div>

                  <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: C.gray900, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>
                    {result.issues.length === 0 ? "✓ No issues found" : `${result.issues.length} issue${result.issues.length > 1 ? "s" : ""} to fix`}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 20 }}>
                    {result.issues.length === 0 ? (
                      <div style={{ padding: "8px 12px", background: C.greenBg, borderLeft: `3px solid ${C.green}`, borderRadius: "0 6px 6px 0", fontFamily: FONT, fontSize: 13, color: C.green, fontWeight: 500 }}>✓ Title is fully optimized</div>
                    ) : result.issues.map((issue, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, padding: "8px 12px", background: C.redBg, borderLeft: "3px solid #e24b4a", borderRadius: "0 6px 6px 0", fontFamily: FONT, fontSize: 13, color: C.red }}>
                        <span style={{ fontWeight: 700, flexShrink: 0 }}>✕</span>{issue}
                      </div>
                    ))}
                  </div>

                  {/* Score pills */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {[["Search", result.scores.S, 25], ["Specifics", result.scores.P, 25], ["Intent", result.scores.I, 20], ["Length", result.scores.Ch, 20], ["Hooks", result.scores.E, 10]].map(([label, score, max]) => {
                      const pct = score / max;
                      const bg = pct >= 0.8 ? C.greenBg : pct >= 0.5 ? C.amberBg : C.redBg;
                      const col = pct >= 0.8 ? C.green : pct >= 0.5 ? C.amber : C.red;
                      return <span key={label} style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 100, background: bg, color: col }}>{label} {score}/{max}</span>;
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Rewrite card */}
            <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.gray200}`, padding: "32px", marginBottom: 16, boxShadow: `0 4px 32px ${C.navy}08` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 700, color: C.navy, margin: "0 0 4px" }}>AI-optimized rewrite</h3>
                  <p style={{ fontFamily: FONT, fontSize: 13, color: C.gray500, margin: 0 }}>Claude fixes every issue and rewrites your title for maximum ranking</p>
                </div>
                <button className="ab" onClick={getAIRewrite} disabled={aiLoading}
                  style={{ padding: "11px 22px", borderRadius: 10, border: "none", fontFamily: FONT, fontSize: 14, fontWeight: 600, background: C.navy, color: C.white, cursor: aiLoading ? "default" : "pointer", opacity: aiLoading ? 0.7 : 1, transition: "all 0.2s", whiteSpace: "nowrap", flexShrink: 0 }}>
                  {aiLoading ? "Rewriting…" : aiResult ? "Regenerate ↻" : "Generate rewrite →"}
                </button>
              </div>

              {aiError && <p style={{ fontFamily: FONT, fontSize: 13, color: C.red, marginBottom: 12 }}>{aiError}</p>}

              {aiLoading && (
                <div style={{ padding: "32px", background: C.gray100, borderRadius: 12, textAlign: "center" }}>
                  <div style={{ width: 30, height: 30, border: `3px solid ${C.gray200}`, borderTopColor: C.gold, borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 12px" }} />
                  <p style={{ fontFamily: FONT, fontSize: 13, color: C.gray500, margin: 0 }}>Analyzing issues and crafting an optimized title…</p>
                </div>
              )}

              {aiResult && !aiLoading && (
                <div>
                  <div className="rg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
                    {[
                      { label: "Before", text: title, bg: C.redBg, border: "#e24b4a55", color: C.red },
                      { label: "After", text: aiResult.rewritten, bg: C.greenBg, border: `${C.green}55`, color: C.green },
                    ].map(({ label, text, bg, border, color }) => (
                      <div key={label} style={{ padding: "16px", background: bg, border: `1px solid ${border}`, borderRadius: 12 }}>
                        <div style={{ fontFamily: FONT, fontSize: 10, fontWeight: 700, color, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>{label}</div>
                        <p style={{ fontFamily: FONT, fontSize: 13, color: C.gray900, lineHeight: 1.6, margin: "0 0 8px" }}>{text}</p>
                        <span style={{ fontFamily: FONT, fontSize: 11, color, fontWeight: 600 }}>{text.length} chars</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: "12px 16px", background: `${C.navy}07`, borderRadius: 10, marginBottom: 16 }}>
                    <span style={{ fontFamily: FONT, fontSize: 13, color: C.gray700, lineHeight: 1.6 }}>
                      <strong style={{ color: C.navy }}>Strategy: </strong>{aiResult.reasoning}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 20 }}>
                    {(aiResult.changes || []).map((c, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, fontFamily: FONT, fontSize: 13, color: C.gray700 }}>
                        <span style={{ color: C.green, fontWeight: 700, flexShrink: 0 }}>✓</span>{c}
                      </div>
                    ))}
                  </div>

                  <button onClick={copyTitle}
                    style={{ padding: "9px 20px", borderRadius: 8, border: `1px solid ${C.gray200}`, fontFamily: FONT, fontSize: 13, fontWeight: 600, background: copied ? C.greenBg : C.white, color: copied ? C.green : C.navy, cursor: "pointer", transition: "all 0.2s" }}>
                    {copied ? "✓ Copied!" : "Copy rewritten title"}
                  </button>
                </div>
              )}

              {!aiResult && !aiLoading && (
                <div style={{ padding: "32px", background: C.gray100, borderRadius: 12, textAlign: "center", border: `2px dashed ${C.gray200}` }}>
                  <p style={{ fontFamily: FONT, fontSize: 14, color: C.gray500, margin: 0 }}>Hit "Generate rewrite" — Claude will fix every issue and return an optimized title</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <div style={{ background: `linear-gradient(135deg,${C.navyDark},${C.navy})`, borderRadius: 20, padding: "36px 32px", textAlign: "center" }}>
              <h3 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 700, color: C.white, margin: "0 0 10px" }}>Want us to optimize your full catalogue?</h3>
              <p style={{ fontFamily: FONT, fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 auto 24px", maxWidth: 360, lineHeight: 1.7 }}>Our team handles Shopee and Lazada listing optimization for 100+ brands across SEA.</p>
              <a href="https://wa.me/6597121217?text=Hi%20Atsell%2C%20I%27d%20like%20help%20optimizing%20my%20listings." target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-block", padding: "13px 32px", borderRadius: 12, background: `linear-gradient(135deg,${C.gold},${C.goldLight})`, color: C.navyDark, fontFamily: FONT, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                Book a free consultation →
              </a>
            </div>
          </div>
        )}

        {/* Framework footnote */}
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, color: C.gray500, lineHeight: 1.7 }}>
            SPICE framework: Search terms (25) · Specifics (25) · Intent (20) · Length (20) · Hooks (10) &nbsp;·&nbsp; Grades: A 85+ · B 70+ · C 55+ · D 40+ · F &lt;40
          </p>
        </div>
      </div>
    </section>
  );
}
