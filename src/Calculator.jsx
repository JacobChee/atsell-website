'use client';
import { useState, useRef, useEffect } from "react";

const MALL_COMMISSION = {
  coins: {
    mobile_phones_tablets:              { rate: 0.0872, cap: 80 },
    lenses_cameras_drones:              { rate: 0.0981, cap: 80 },
    large_household_appliances:         { rate: 0.0872, cap: 80 },
    desktop_computers_laptops:          { rate: 0.0872, cap: 80 },
    desktop_laptop_components_printers: { rate: 0.1090, cap: 80 },
    console_machines_video_games:       { rate: 0.1090, cap: 80 },
    all_other_electronics:              { rate: 0.1090, cap: 80 },
    alcoholic_beverages:                { rate: 0.1090, cap: null },
    diapering_milk_baby_food:           { rate: 0.1090, cap: null },
    all_pet_subcategories:              { rate: 0.1090, cap: null },
    all_other_non_electronics:          { rate: 0.1090, cap: null },
  },
  non_coins: {
    mobile_phones_tablets:              { rate: 0.1090, cap: 80 },
    lenses_cameras_drones:              { rate: 0.1199, cap: 80 },
    large_household_appliances:         { rate: 0.1308, cap: 80 },
    desktop_computers_laptops:          { rate: 0.1090, cap: 80 },
    desktop_laptop_components_printers: { rate: 0.1308, cap: 80 },
    console_machines_video_games:       { rate: 0.1308, cap: 80 },
    all_other_electronics:              { rate: 0.1526, cap: 80 },
    alcoholic_beverages:                { rate: 0.1308, cap: null },
    diapering_milk_baby_food:           { rate: 0.1308, cap: null },
    all_pet_subcategories:              { rate: 0.1308, cap: null },
    all_other_non_electronics:          { rate: 0.1526, cap: null },
  },
};

const NONMALL_COMMISSION = {
  coins: {
    mobile_phones_tablets:              { rate: 0.0763, cap: 30 },
    lenses_cameras_drones:              { rate: 0.0763, cap: 30 },
    large_household_appliances:         { rate: 0.0763, cap: 30 },
    desktop_computers_laptops:          { rate: 0.0763, cap: 30 },
    desktop_laptop_components_printers: { rate: 0.0763, cap: 30 },
    console_machines_video_games:       { rate: 0.0763, cap: 30 },
    all_other_electronics:              { rate: 0.0763, cap: 30 },
    alcoholic_beverages:                { rate: 0.0763, cap: null },
    diapering_milk_baby_food:           { rate: 0.0763, cap: null },
    all_pet_subcategories:              { rate: 0.0763, cap: null },
    all_other_non_electronics:          { rate: 0.0763, cap: null },
  },
  non_coins: {
    mobile_phones_tablets:              { rate: 0.0981, cap: 30 },
    lenses_cameras_drones:              { rate: 0.0981, cap: 30 },
    large_household_appliances:         { rate: 0.0981, cap: 30 },
    desktop_computers_laptops:          { rate: 0.0981, cap: 30 },
    desktop_laptop_components_printers: { rate: 0.0981, cap: 30 },
    console_machines_video_games:       { rate: 0.0981, cap: 30 },
    all_other_electronics:              { rate: 0.1199, cap: 30 },
    alcoholic_beverages:                { rate: 0.0981, cap: null },
    diapering_milk_baby_food:           { rate: 0.0981, cap: null },
    all_pet_subcategories:              { rate: 0.0981, cap: null },
    all_other_non_electronics:          { rate: 0.1199, cap: null },
  },
};

const SUBCATEGORIES = [
  { key: "mobile_phones_tablets",              label: "Mobile Phones, Tablets",                         group: "Electronics" },
  { key: "lenses_cameras_drones",              label: "Lenses, Cameras, Drones",                        group: "Electronics" },
  { key: "large_household_appliances",         label: "Large Household Appliances",                     group: "Electronics" },
  { key: "desktop_computers_laptops",          label: "Desktop Computers, Laptops",                     group: "Electronics" },
  { key: "desktop_laptop_components_printers", label: "Desktop/Laptop Components, Printers & Scanners", group: "Electronics" },
  { key: "console_machines_video_games",       label: "Console Machines, Video Games",                  group: "Electronics" },
  { key: "all_other_electronics",              label: "All Other Electronics Sub-categories",           group: "Electronics" },
  { key: "alcoholic_beverages",                label: "Alcoholic Beverages",                            group: "Non-Electronics" },
  { key: "diapering_milk_baby_food",           label: "Diapering, Potty, Milk Formula & Baby Food",    group: "Non-Electronics" },
  { key: "all_pet_subcategories",              label: "All Pet Sub-categories",                         group: "Non-Electronics" },
  { key: "all_other_non_electronics",          label: "All Other Non-Electronics Sub-categories",      group: "Non-Electronics" },
];

const OTHER_RATES = {
  shopee_mall: {
    coins:     { txn: 0.0327, service: 0.0327, service_cap: 60 },
    non_coins: { txn: 0.0327, service: 0,       service_cap: 0  },
  },
  shopee_nonmall: {
    coins:     { txn: 0.0218, service: 0.0327, service_cap: 30 },
    non_coins: { txn: 0.0327, service: 0,       service_cap: 0  },
  },
};

const LAZADA_GST = 1.09;
const LAZADA_TXN = 0.03;

const LAZADA_CATEGORIES = {
  marketplace: [
    { key: "electronics_main",   label: "Electronics (Mobiles, Tablets, Computers, Laptops, Camera, Gaming)", spa: { rate: 0.05, cap: 30 }, non_spa: { rate: 0.085, cap: 30 } },
    { key: "electronics_others", label: "Other Electronics",                                                    spa: { rate: 0.065, cap: 30 }, non_spa: { rate: 0.10,  cap: 30 } },
    { key: "diapering_milk_pet", label: "Diapering & Potty, Milk Formula & Baby Food, Pet Supplies",           spa: { rate: 0.06,  cap: 60 }, non_spa: { rate: 0.085, cap: 60 } },
    { key: "alcoholic_grocery",  label: "Alcoholic Beverages & All Groceries",                                  spa: { rate: 0.065, cap: 60 }, non_spa: { rate: 0.10,  cap: 60 } },
    { key: "other_categories",   label: "All Other Categories",                                                 spa: { rate: 0.065, cap: 60 }, non_spa: { rate: 0.10,  cap: 60 } },
  ],
  lazmall: [
    { key: "electronics_core",   label: "Electronics — Mobiles & Tablets, Desktop Computers, Laptops",         spa: { rate: 0.07, cap: 75 }, non_spa: { rate: 0.09, cap: 75 } },
    { key: "large_appliances",   label: "Electronics — Large Home Appliances",                                  spa: { rate: 0.07, cap: 75 }, non_spa: { rate: 0.11, cap: 75 } },
    { key: "camera_drones",      label: "Electronics — Camera & Drones",                                        spa: { rate: 0.08, cap: 75 }, non_spa: { rate: 0.10, cap: 75 } },
    { key: "comp_components",    label: "Electronics — Computer Components, Printers & Scanners, Software",     spa: { rate: 0.09, cap: 75 }, non_spa: { rate: 0.11, cap: 75 } },
    { key: "gaming_others_elec", label: "Electronics — Gaming Devices & Software, Other Electronics",           spa: { rate: 0.09, cap: 75 }, non_spa: { rate: 0.13, cap: 75 } },
    { key: "non_elec",           label: "Non-Electronics (Diapering, Milk Formula, Pet Supplies, Alcoholic Bev)", spa: { rate: 0.09, cap: 150 }, non_spa: { rate: 0.11, cap: 150 } },
    { key: "other_categories",   label: "All Other Categories",                                                 spa: { rate: 0.09, cap: 150 }, non_spa: { rate: 0.13, cap: 150 } },
  ],
};

const TIKTOK_CATEGORIES = [
  { key: "fashion",              label: "Fashion (Clothing, Shoes, Bags, Accessories)", stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "beauty",               label: "Beauty & Personal Care",                       stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "food_beverages",       label: "Food & Beverages",                             stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "health",               label: "Health & Wellness",                            stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "baby_maternity",       label: "Baby & Maternity",                             stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "home_supplies",        label: "Home Supplies & Decor",                        stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "pet_supplies",         label: "Pet Supplies",                                 stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "sports_outdoor",       label: "Sports & Outdoor",                             stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "toys_collectibles",    label: "Toys, Hobbies & Collectibles",                 stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "automotive",           label: "Automotive & Motorcycle",                      stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "furniture",            label: "Furniture & Home Improvement",                 stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "books_media",          label: "Books, Magazines & Audio",                     stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "tools_hardware",       label: "Tools & Hardware",                             stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "mobile_accessories",   label: "Mobile Phone Accessories",                     stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "audio_video",          label: "Audio & Video Equipment",                      stdRate: 0.08175, bxpRate: 0.07085 },
  { key: "computers_office",     label: "Computers & Office Equipment",                 stdRate: 0.06540, bxpRate: 0.05450 },
  { key: "phones_tablets",       label: "Mobile Phones & Tablets",                      stdRate: 0.06540, bxpRate: 0.05450 },
  { key: "cameras_photography",  label: "Cameras & Photography",                        stdRate: 0.06540, bxpRate: 0.05450 },
  { key: "household_appliances", label: "Household Appliances (Large & Small)",         stdRate: 0.06540, bxpRate: 0.05450 },
  { key: "gaming_consoles",      label: "Gaming & Consoles",                            stdRate: 0.06540, bxpRate: 0.05450 },
  { key: "smart_wearables",      label: "Smart & Wearable Devices",                     stdRate: 0.06540, bxpRate: 0.05450 },
  { key: "vouchers_virtual",     label: "Vouchers & Virtual Products",                  stdRate: 0.06540, bxpRate: 0.05450 },
  { key: "massage_chairs",       label: "Massage Chairs",                               stdRate: 0.06540, bxpRate: 0.05450 },
];

const calcFmt  = (n) => "$" + Math.abs(n).toFixed(2);
const calcPct  = (n) => (n * 100).toFixed(2) + "%";
const calcComm = (rate, cap, base) => cap !== null ? Math.min(rate * base, cap) : rate * base;

function WaterfallChart({ price, fees, payout }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const W   = canvas.offsetWidth;
    const H   = canvas.offsetHeight;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    const bars = [
      { label: "Selling\nprice", val: price, type: "start" },
      ...fees.map(f => ({ label: f.label, val: f.val, type: "fee" })),
      { label: "Payout", val: payout, type: "payout" },
    ];
    const PAD    = { top: 28, right: 16, bottom: 52, left: 60 };
    const chartW = W - PAD.left - PAD.right;
    const chartH = H - PAD.top  - PAD.bottom;
    const barW   = Math.min(54, (chartW / bars.length) * 0.6);
    const gap    = (chartW - barW * bars.length) / (bars.length - 1);
    const maxVal = price * 1.08;
    const toY    = (v) => PAD.top + chartH - (v / maxVal) * chartH;
    const steps  = 4;
    for (let i = 0; i <= steps; i++) {
      const v = (price / steps) * i;
      const y = toY(v);
      ctx.strokeStyle = "rgba(255,255,255,0.07)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + chartW, y); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.3)"; ctx.font = "11px 'DM Sans', sans-serif"; ctx.textAlign = "right";
      ctx.fillText("$" + Math.round(v), PAD.left - 6, y + 4);
    }
    let cumulative = 0;
    bars.forEach((bar, i) => {
      const x = PAD.left + i * (barW + gap);
      let barTop, barBottom;
      if (bar.type === "start") {
        barTop = toY(price); barBottom = PAD.top + chartH; cumulative = price;
      } else if (bar.type === "fee") {
        barTop = toY(cumulative); barBottom = toY(cumulative - bar.val); cumulative -= bar.val;
      } else {
        barTop = toY(payout); barBottom = PAD.top + chartH;
      }
      const palettes = {
        start:  { fill: "rgba(136,135,128,0.5)", stroke: "#888780" },
        fee:    { fill: "rgba(226,75,74,0.7)",   stroke: "#E24B4A" },
        payout: { fill: "rgba(29,158,117,0.7)",  stroke: "#1D9E75" },
      };
      const { fill, stroke } = palettes[bar.type];
      const r = 4;
      ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x + r, barTop); ctx.lineTo(x + barW - r, barTop);
      ctx.arcTo(x + barW, barTop, x + barW, barTop + r, r);
      ctx.lineTo(x + barW, barBottom); ctx.lineTo(x, barBottom); ctx.lineTo(x, barTop + r);
      ctx.arcTo(x, barTop, x + r, barTop, r); ctx.closePath();
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = bar.type === "fee" ? "#f09595" : (bar.type === "payout" ? "#5DCAA5" : "rgba(255,255,255,0.7)");
      ctx.font = "bold 11px 'DM Sans', sans-serif"; ctx.textAlign = "center";
      const dispVal = bar.type === "fee" ? "-" + calcFmt(bar.val) : calcFmt(bar.type === "start" ? price : payout);
      ctx.fillText(dispVal, x + barW / 2, barTop - 7);
      ctx.fillStyle = "rgba(255,255,255,0.4)"; ctx.font = "11px 'DM Sans', sans-serif"; ctx.textAlign = "center";
      bar.label.split("\n").forEach((line, li) => { ctx.fillText(line, x + barW / 2, PAD.top + chartH + 16 + li * 14); });
      if (bar.type === "fee" && i < bars.length - 1) {
        const nextX = PAD.left + (i + 1) * (barW + gap);
        ctx.strokeStyle = "rgba(255,255,255,0.12)"; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(x + barW, toY(cumulative)); ctx.lineTo(nextX, toY(cumulative)); ctx.stroke();
        ctx.setLineDash([]);
      }
    });
  }, [price, fees, payout]);
  return <canvas ref={canvasRef} style={{ width: "100%", height: 230, display: "block" }} aria-label="Waterfall chart showing fee deductions from selling price to payout" />;
}

function BreakdownTable({ price, fees, payout, feeRate, keepRate }) {
  const row = { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'DM Sans', sans-serif", fontSize: 13 };
  const col = (flex, align = "right") => ({ flex: "0 0 " + flex, textAlign: align });
  let running = price;
  return (
    <div>
      <div style={{ ...row, fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.8px", textTransform: "uppercase" }}>
        <span style={col("38%", "left")}>Item</span>
        <span style={col("22%")}>Rate / detail</span>
        <span style={col("18%")}>Amount</span>
        <span style={col("22%")}>Running total</span>
      </div>
      <div style={{ ...row, color: "rgba(255,255,255,0.75)" }}>
        <span style={col("38%", "left")}>Selling price</span>
        <span style={{ ...col("22%"), color: "rgba(255,255,255,0.28)" }}>—</span>
        <span style={{ ...col("18%"), fontWeight: 600 }}>{calcFmt(price)}</span>
        <span style={{ ...col("22%"), color: "rgba(255,255,255,0.4)" }}>{calcFmt(price)}</span>
      </div>
      {fees.map((f, i) => {
        running -= f.val;
        return (
          <div key={i} style={{ ...row, color: "rgba(255,255,255,0.55)" }}>
            <span style={col("38%", "left")}>{f.label}</span>
            <span style={{ ...col("22%"), color: "rgba(255,255,255,0.28)", fontSize: 11 }}>{f.detail || "—"}</span>
            <span style={{ ...col("18%"), fontWeight: 600, color: "#f09595" }}>-{calcFmt(f.val)}</span>
            <span style={{ ...col("22%"), color: "rgba(255,255,255,0.38)" }}>{calcFmt(running)}</span>
          </div>
        );
      })}
      <div style={{ ...row, borderBottom: "none", marginTop: 8, background: "rgba(29,158,117,0.1)", borderRadius: 8, padding: "11px 12px", color: "#ffffff" }}>
        <span style={{ ...col("38%", "left"), fontWeight: 600 }}>Estimated payout</span>
        <span style={{ ...col("22%"), color: "rgba(255,255,255,0.35)", fontSize: 11 }}>{keepRate.toFixed(1)}% keep rate</span>
        <span style={{ ...col("18%"), fontWeight: 700, color: "#5DCAA5", fontSize: 15 }}>{calcFmt(payout)}</span>
        <span style={{ ...col("22%"), color: "rgba(255,255,255,0.35)", fontSize: 11 }}>{feeRate.toFixed(1)}% in fees</span>
      </div>
    </div>
  );
}

function CalcLegend() {
  const item = (color, label) => (
    <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.38)", fontFamily: "'DM Sans', sans-serif" }}>
      <span style={{ width: 10, height: 10, borderRadius: 2, background: color, display: "inline-block", flexShrink: 0 }} />
      {label}
    </span>
  );
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 10 }}>
      {item("#888780", "Start / subtotal")}
      {item("#E24B4A", "Fee deduction")}
      {item("#1D9E75", "Payout")}
    </div>
  );
}

export default function Calculator() {
  const CALC_COLORS = {
    navy: "#1a2744", navyDark: "#111b33", white: "#ffffff", offWhite: "#f7f6f3",
    gold: "#e8a838", gray200: "#e8e8e8", gray500: "#6b7280",
  };

  const [tab, setTab]               = useState("shopee_mall");
  const [price, setPrice]           = useState(1298);
  const [voucher, setVoucher]       = useState(0);
  const [shipping, setShipping]     = useState(0);
  const [programme, setProgramme]   = useState("non_coins");
  const [subcat, setSubcat]         = useState("mobile_phones_tablets");
  const [isCampaign, setIsCampaign] = useState(false);
  const [lazStoreType, setLazStoreType] = useState("marketplace");
  const [lazSellerType, setLazSellerType] = useState("spa");
  const [lazCat, setLazCat]         = useState("electronics_main");
  const [tiktokCat, setTiktokCat]   = useState("fashion");
  const [isBxp, setIsBxp]           = useState(false);

  const switchTab = (t) => {
    setTab(t);
    setPrice(t === "lazada" ? 258 : t === "tiktok" ? 500 : t === "shopee_nonmall" ? 998 : 1298);
    setVoucher(0); setShipping(0); setProgramme("non_coins");
    setSubcat("mobile_phones_tablets"); setIsCampaign(false);
    setLazStoreType("marketplace"); setLazSellerType("spa"); setLazCat("electronics_main");
    setTiktokCat("fashion"); setIsBxp(false);
  };

  let fees = [], totalFees = 0, payout = 0;

  if (tab === "shopee_mall") {
    const r = OTHER_RATES.shopee_mall[programme];
    const { rate: cr, cap: commCap } = MALL_COMMISSION[programme][subcat] ?? MALL_COMMISSION[programme]["all_other_non_electronics"];
    const net  = price - voucher;
    const txn  = net * r.txn;
    const comm = calcComm(cr, commCap, net);
    const svc  = r.service > 0 ? Math.min(net * r.service, r.service_cap) : 0;
    totalFees  = voucher + txn + comm + svc;
    payout     = price - totalFees;
    if (voucher > 0) fees.push({ label: "Voucher", detail: "seller-funded", val: voucher });
    fees.push({ label: "Transaction fee", detail: calcPct(r.txn), val: txn });
    fees.push({ label: "Commission", detail: calcPct(cr) + (commCap ? ", cap $" + commCap : ", no cap"), val: comm });
    if (svc > 0) fees.push({ label: "Coins cashback fee", detail: calcPct(r.service) + ", cap $" + r.service_cap, val: svc });
  } else if (tab === "shopee_nonmall") {
    const r = OTHER_RATES.shopee_nonmall[programme];
    const { rate: cr, cap: commCap } = NONMALL_COMMISSION[programme][subcat] ?? NONMALL_COMMISSION[programme]["all_other_non_electronics"];
    const net  = price - voucher;
    const txn  = net * r.txn;
    const comm = calcComm(cr, commCap, net);
    const svc  = r.service > 0 ? Math.min(net * r.service, r.service_cap) : 0;
    totalFees  = voucher + txn + comm + svc;
    payout     = price - totalFees;
    if (voucher > 0) fees.push({ label: "Voucher", detail: "seller-funded", val: voucher });
    fees.push({ label: "Transaction fee", detail: calcPct(r.txn), val: txn });
    fees.push({ label: "Commission", detail: calcPct(cr) + (commCap ? ", cap $" + commCap : ", no cap"), val: comm });
    if (svc > 0) fees.push({ label: "Coins cashback fee", detail: calcPct(r.service) + ", cap $" + r.service_cap, val: svc });
  } else if (tab === "tiktok") {
    const catObj = TIKTOK_CATEGORIES.find(c => c.key === tiktokCat) ?? TIKTOK_CATEGORIES[0];
    const rate   = isBxp ? catObj.bxpRate : catObj.stdRate;
    const net    = price - voucher;
    const comm   = net * rate;
    totalFees    = comm;
    payout       = price - totalFees;
    if (voucher > 0) fees.push({ label: "Seller discount", detail: "deducted from base", val: voucher });
    fees.push({ label: "Platform commission", detail: calcPct(rate) + " (GST incl.)", val: comm });
  } else {
    const cats   = LAZADA_CATEGORIES[lazStoreType];
    const catObj = cats.find(c => c.key === lazCat) ?? cats[0];
    const rateObj = catObj[lazSellerType];
    const net   = price - voucher;
    const comm  = Math.min(rateObj.rate * net * LAZADA_GST, rateObj.cap * LAZADA_GST);
    const txn   = (net + shipping) * LAZADA_TXN * LAZADA_GST;
    totalFees   = voucher + txn + comm;
    payout      = price - totalFees;
    if (voucher > 0) fees.push({ label: "Seller promotions", detail: "deducted from base", val: voucher });
    fees.push({ label: "Transaction fee", detail: "3% + GST" + (shipping > 0 ? " (incl. shipping)" : ""), val: txn });
    fees.push({ label: "Commission", detail: calcPct(rateObj.rate) + " + GST, cap $" + (rateObj.cap * LAZADA_GST).toFixed(2) + " — " + (lazStoreType === "lazmall" ? "LazMall" : "Marketplace") + " " + (lazSellerType === "spa" ? "SPA" : "Non-SPA"), val: comm });
  }

  const feeRate  = price > 0 ? (totalFees / price) * 100 : 0;
  const keepRate = price > 0 ? (payout    / price) * 100 : 0;

  const tabStyle = (t) => ({
    padding: "10px 22px", cursor: "pointer", fontSize: 13, fontWeight: 600,
    letterSpacing: "0.3px", border: "none", borderRadius: "12px 12px 0 0",
    background: tab === t ? CALC_COLORS.navy : CALC_COLORS.gray200,
    color: tab === t ? CALC_COLORS.white : CALC_COLORS.gray500,
    fontFamily: "'DM Sans', sans-serif", transition: "all 0.25s",
  });

  const inputStyle = {
    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8, padding: "10px 14px", color: CALC_COLORS.white,
    fontFamily: "'DM Sans', sans-serif", fontSize: 14, width: 220, outline: "none",
  };

  const labelStyle = { fontSize: 13, color: "rgba(255,255,255,0.6)", minWidth: 150, fontFamily: "'DM Sans', sans-serif" };
  const sectionLabel = { fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: CALC_COLORS.gold, fontWeight: 700, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" };

  const isShopee = tab === "shopee_mall" || tab === "shopee_nonmall";
  const isTiktok = tab === "tiktok";
  const electronics    = SUBCATEGORIES.filter(s => s.group === "Electronics");
  const nonElectronics = SUBCATEGORIES.filter(s => s.group === "Non-Electronics");

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        <button style={tabStyle("shopee_mall")}    onClick={() => switchTab("shopee_mall")}>Shopee Mall</button>
        <button style={tabStyle("shopee_nonmall")} onClick={() => switchTab("shopee_nonmall")}>Shopee Non-Mall</button>
        <button style={tabStyle("lazada")}         onClick={() => switchTab("lazada")}>Lazada</button>
        <button style={tabStyle("tiktok")}         onClick={() => switchTab("tiktok")}>TikTok Shop</button>
      </div>

      <div style={{ background: "linear-gradient(135deg, " + CALC_COLORS.navyDark + ", " + CALC_COLORS.navy + ")", borderRadius: "0 16px 16px 16px", padding: 32, color: CALC_COLORS.white }}>
        <div style={{ marginBottom: 24 }}>
          <div style={sectionLabel}>Input</div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <label style={labelStyle}>Selling price ($)</label>
            <input type="number" value={price} step="1" onChange={e => setPrice(+e.target.value)} style={inputStyle} />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <label style={labelStyle}>Voucher ($){tab === "lazada" && <span style={{ opacity: 0.5, fontSize: 11 }}> (0 = auto)</span>}</label>
            <input type="number" value={voucher} step="1" onChange={e => setVoucher(+e.target.value)} style={inputStyle} />
          </div>

          {isShopee && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <label style={labelStyle}>Programme</label>
              <select value={programme} onChange={e => setProgramme(e.target.value)} style={{ ...inputStyle, appearance: "auto" }}>
                <option value="coins"     style={{ background: CALC_COLORS.navy }}>Coins Cashback Programme</option>
                <option value="non_coins" style={{ background: CALC_COLORS.navy }}>Non-Coins Cashback Programme</option>
              </select>
            </div>
          )}

          {isShopee && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <label style={labelStyle}>Sub-category</label>
              <select value={subcat} onChange={e => setSubcat(e.target.value)} style={{ ...inputStyle, appearance: "auto" }}>
                <optgroup label="── Electronics ──" style={{ background: CALC_COLORS.navy }}>
                  {electronics.map(s => <option key={s.key} value={s.key} style={{ background: CALC_COLORS.navy }}>{s.label}</option>)}
                </optgroup>
                <optgroup label="── Non-Electronics ──" style={{ background: CALC_COLORS.navy }}>
                  {nonElectronics.map(s => <option key={s.key} value={s.key} style={{ background: CALC_COLORS.navy }}>{s.label}</option>)}
                </optgroup>
              </select>
            </div>
          )}

          {tab === "lazada" && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <label style={labelStyle}>Store type</label>
              <select value={lazStoreType} onChange={e => { setLazStoreType(e.target.value); setLazCat(e.target.value === "lazmall" ? "electronics_core" : "electronics_main"); }} style={{ ...inputStyle, appearance: "auto" }}>
                <option value="marketplace" style={{ background: CALC_COLORS.navy }}>Lazada Marketplace</option>
                <option value="lazmall"     style={{ background: CALC_COLORS.navy }}>LazMall</option>
              </select>
            </div>
          )}

          {tab === "lazada" && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <label style={labelStyle}>Seller type</label>
              <select value={lazSellerType} onChange={e => setLazSellerType(e.target.value)} style={{ ...inputStyle, appearance: "auto" }}>
                <option value="spa"     style={{ background: CALC_COLORS.navy }}>SPA Seller</option>
                <option value="non_spa" style={{ background: CALC_COLORS.navy }}>Non-SPA Seller</option>
              </select>
            </div>
          )}

          {tab === "lazada" && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <label style={labelStyle}>Category</label>
              <select value={lazCat} onChange={e => setLazCat(e.target.value)} style={{ ...inputStyle, appearance: "auto", width: 280 }}>
                {LAZADA_CATEGORIES[lazStoreType].map(c => (
                  <option key={c.key} value={c.key} style={{ background: CALC_COLORS.navy }}>{c.label}</option>
                ))}
              </select>
            </div>
          )}

          {tab === "lazada" && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <label style={labelStyle}>Customer shipping ($)</label>
              <input type="number" value={shipping} step="1" onChange={e => setShipping(+e.target.value)} style={inputStyle} />
            </div>
          )}

          {tab === "lazada" && (
            <div style={{ marginTop: 8, padding: "8px 12px", background: "rgba(232,168,56,0.08)", border: "1px solid rgba(232,168,56,0.15)", borderRadius: 8, fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>
              ✦ Rates effective 9 Feb 2026. Formula: Commission = Rate × (Price − Seller Promotions) + 9% GST. Transaction fee 3% + GST.
            </div>
          )}

          {isTiktok && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <label style={labelStyle}>Category</label>
              <select value={tiktokCat} onChange={e => setTiktokCat(e.target.value)} style={{ ...inputStyle, appearance: "auto", width: 280 }}>
                <optgroup label="── Standard rate (8.175%) ──" style={{ background: CALC_COLORS.navy }}>
                  {TIKTOK_CATEGORIES.filter(c => c.stdRate > 0.07).map(c => (
                    <option key={c.key} value={c.key} style={{ background: CALC_COLORS.navy }}>{c.label}</option>
                  ))}
                </optgroup>
                <optgroup label="── Lower rate (6.54%) ──" style={{ background: CALC_COLORS.navy }}>
                  {TIKTOK_CATEGORIES.filter(c => c.stdRate < 0.07).map(c => (
                    <option key={c.key} value={c.key} style={{ background: CALC_COLORS.navy }}>{c.label}</option>
                  ))}
                </optgroup>
              </select>
            </div>
          )}

          {isTiktok && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <label style={labelStyle}>Seller programme</label>
              <select value={isBxp ? "bxp" : "std"} onChange={e => setIsBxp(e.target.value === "bxp")} style={{ ...inputStyle, appearance: "auto" }}>
                <option value="std" style={{ background: CALC_COLORS.navy }}>Standard seller</option>
                <option value="bxp" style={{ background: CALC_COLORS.navy }}>Bonus Extra Program (BXP)</option>
              </select>
            </div>
          )}

          {isShopee && (
            <div style={{ marginTop: 8, padding: "8px 12px", background: "rgba(232,168,56,0.08)", border: "1px solid rgba(232,168,56,0.15)", borderRadius: 8, fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>
              ✦ Rates effective 1 Jan 2026 (incl. GST). Non-Coins sellers pay transaction fee + commission only. Coins Cashback sellers also pay the coins cashback fee.
            </div>
          )}

          {isTiktok && (
            <div style={{ marginTop: 8, padding: "8px 12px", background: "rgba(232,168,56,0.08)", border: "1px solid rgba(232,168,56,0.15)", borderRadius: 8, fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>
              ✦ Formula: (Item Price − Seller Discount) × Rate. Rates effective from 1 Apr 2026 (incl. GST)
            </div>
          )}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "4px 0 24px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "rgba(232,168,56,0.1)", border: "1px solid rgba(232,168,56,0.2)", borderRadius: 12, marginBottom: 28 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif" }}>Estimated payout</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: CALC_COLORS.gold }}>{calcFmt(payout)}</span>
        </div>

        <div style={sectionLabel}>Fee waterfall</div>
        <CalcLegend />
        <WaterfallChart price={price} fees={fees} payout={payout} />

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "24px 0 20px" }} />

        <div style={sectionLabel}>Fee breakdown</div>
        <BreakdownTable price={price} fees={fees} payout={payout} feeRate={feeRate} keepRate={keepRate} />
      </div>
    </div>
  );
}
