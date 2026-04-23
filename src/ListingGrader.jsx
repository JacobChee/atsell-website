import { useState, useRef, useEffect } from "react";

const C = {
  navy: "#1e3a5f", navyDark: "#152a45", navyLight: "#264a7a",
  gold: "#e8a838", goldLight: "#f5c96a",
  white: "#ffffff", offWhite: "#f8f9fc",
  gray100: "#f1f3f8", gray200: "#e2e6ee", gray500: "#6b7a90", gray700: "#3d4f63", gray900: "#1a2332",
  green: "#0f6e4a", greenBg: "#eaf7f0",
  amber: "#92580a", amberBg: "#fef3e2",
  red: "#9b1c1c", redBg: "#fef2f2",
};
const FONT = "'DM Sans', sans-serif";
const SERIF = "'Playfair Display', serif";

// ── Category definitions ──────────────────────────────────────────────────────
const CATS = {
  // ── Atsell hero categories ────────────────────────────────────────────────
  batteries: {
    label: "⚡ Batteries & power",
    group: "⭐ Atsell Specialist Categories",
    primaryKW: ["battery","batteries","aa battery","aaa battery","rechargeable","alkaline","lithium","9v","cr2032","cr123a","18650","lr44","c battery","d battery","nimh","powerbank","power bank","charger","aa","aaa"],
    required: {
      batteryType: { re: /\b(aa\b|aaa\b|c\s?battery|d\s?battery|9v|cr\d{4}|lr\d{2,}|18650|21700|26650|nimh|alkaline|lithium|li.ion|lead.acid|button.cell|coin.cell|rechargeable)\b/i, label: "battery type (e.g. AA, AAA, CR2032, 18650)" },
      packSize: { re: /\b(\d+\s?(pack|pcs|pieces|units?|pc\b|x\b)|\d+.pack|\bpack of \d+|twin pack|value pack|bulk)\b/i, label: "pack size (e.g. 4 pack, 20pcs)" },
      technology: { re: /\b(alkaline|lithium|li.ion|nimh|ni-mh|rechargeable|heavy.duty|ultra|performance|long.life|long.lasting|industrial)\b/i, label: "technology type (e.g. Alkaline, Lithium, NiMH Rechargeable)" },
    },
    niceToHave: {
      capacity: /\b(\d+\s?(mah|wh|v\b|ah))\b/i,
      shelfLife: /\b(\d+.year|long.shelf|shelf.life|expiry)\b/i,
      useCase: /\b(remote|controller|toy|camera|torch|flashlight|smoke|alarm|high.drain|everyday|industrial|medical|emergency)\b/i,
    },
    warranty: false,
    sgMatters: true,
    brandTypeRelevant: false,
    aiHints: "Battery type (AA/AAA/CR2032 etc) and pack size are the two most critical search terms — buyers always search by these. Technology type (Alkaline vs Lithium vs NiMH) is the next most important differentiator. mAh capacity matters for rechargeables. SG Ready Stock is important as batteries are commodity goods and buyers want assurance of local stock.",
  },

  appliances: {
    label: "🏠 Home appliances",
    group: "⭐ Atsell Specialist Categories",
    primaryKW: ["kettle","toaster","coffee machine","coffee maker","blender","mixer","juicer","air fryer","microwave","oven","washing machine","dryer","fridge","refrigerator","dishwasher","vacuum","robot vacuum","fan","aircon","air purifier","humidifier","dehumidifier","iron","steamer","rice cooker","pressure cooker","induction","hob","hood","water heater","heater"],
    required: {
      applianceType: { re: /\b(kettle|toaster|coffee\s?machine|coffee\s?maker|blender|mixer|juicer|air\s?fryer|microwave|oven|washing\s?machine|washer|dryer|fridge|refrigerator|dishwasher|vacuum|robot\s?vacuum|fan|air\s?con|aircon|air\s?purifier|humidifier|dehumidifier|iron|steamer|rice\s?cooker|pressure\s?cooker|induction|hob|hood|water\s?heater|heater|hair\s?dryer|hair\s?straightener|curler)\b/i, label: "appliance type (e.g. Kettle, Air Fryer, Washing Machine)" },
      capacity: { re: /\b(\d+(\.\d+)?\s?(l\b|litre|liter|kg\b|w\b|watt|kw\b|cu\.?ft|inch|"|\bbar\b|rpm|db\b|btu))\b/i, label: "capacity or wattage (e.g. 1.7L, 2000W, 8kg)" },
      voltage: { re: /\b(220v|240v|110v|230v|sg plug|3.pin|universal voltage|dual voltage|50hz|60hz)\b/i, label: "voltage/plug type (e.g. 220V, 3-pin SG plug)" },
    },
    niceToHave: {
      model: /\b([A-Z]{2,}\d{2,}|\d{2,}[A-Z]{2,}|[A-Z]+\d+[A-Z]*)\b/,
      warranty: /\b(\d+.year.warranty|\d+.yr.warranty|warranty.included|comes.with.warranty|manufacturer.warranty|local.warranty)\b/i,
      color: /\b(black|white|grey|gray|red|cream|pastel|mint|pink|blue|silver|stainless|retro|vintage|50s|matte|glossy)\b/i,
    },
    warranty: true,
    sgMatters: true,
    brandTypeRelevant: true,
    aiHints: "Appliance type and capacity/wattage are mandatory. Voltage (220V / 3-pin SG plug) is critical for Singapore buyers. Model number helps buyers searching directly. For lifestyle brands (SMEG), color and aesthetic keywords ('retro', '50s style', pastel color names) are major purchase drivers and should be prominent. For functional brands (Electrolux, Philips), prioritize specs, energy rating, and warranty. 'Authorised Dealer' and warranty duration are strong conversion signals for high-ticket appliances.",
  },

  // ── Other categories ──────────────────────────────────────────────────────
  fashion: {
    label: "Fashion & apparel",
    group: "Other categories",
    primaryKW: ["shirt","dress","shoes","bag","pants","jacket","top","sneaker","sandal","jeans","blouse","coat","tshirt","shorts","hoodie","skirt","boots","heels","polo","cardigan","romper","jumpsuit","swimwear","activewear"],
    required: {
      color: { re: /\b(black|white|red|blue|green|yellow|pink|purple|grey|gray|brown|beige|navy|silver|gold|rose|cream|nude|camel|khaki|olive|maroon|coral|teal|multicolor|multi.colou?r)\b/i, label: "color or shade" },
      size: { re: /\b(xs|s\b|m\b|l\b|xl|xxl|xxxl|size|uk\s?\d|us\s?\d|eu\s?\d|\bfree size\b|\bone size\b)\b/i, label: "size (e.g. XL, UK 38, Free Size)" },
      gender: { re: /\b(men|women|mens|womens|unisex|kids|boys|girls|ladies|male|female|adult|toddler)\b/i, label: "target gender or audience" },
    },
    niceToHave: {
      material: /\b(cotton|polyester|linen|silk|wool|denim|leather|chiffon|satin|velvet|nylon|spandex|rayon|modal|bamboo)\b/i,
      occasion: /\b(casual|formal|office|party|wedding|sport|beach|gym|outdoor|everyday|work)\b/i,
    },
    warranty: false, sgMatters: false, brandTypeRelevant: false,
    aiHints: "Color, size and target gender are mandatory. Material and occasion keywords boost conversion. Fashion buyers search very specifically — include cut, fit, and fabric where possible.",
  },

  electronics: {
    label: "Electronics & gadgets",
    group: "Other categories",
    primaryKW: ["phone","laptop","earphone","earbuds","cable","charger","speaker","smartwatch","tablet","keyboard","mouse","camera","headphone","monitor","router","powerbank","ssd","gaming","bluetooth","wireless","adapter","hub","dock"],
    required: {
      spec: { re: /\b(\d+\s?(gb|tb|mb|mah|w\b|hz|mp|inch|"|ghz|mhz|ohm|db|ms\b|fps|v\b|a\b|pcs|pack))\b/i, label: "key spec (e.g. 10000mAh, 65W, 512GB)" },
      brand: { re: /\b(apple|samsung|sony|anker|jbl|bose|logitech|xiaomi|huawei|oppo|asus|acer|dell|hp|lenovo|lg|philips|panasonic|canon|nikon|gopro|garmin|fitbit|marshall|sennheiser|razer|corsair|[A-Z][a-z]{2,})\b/, label: "brand name" },
    },
    niceToHave: {
      compatibility: /\b(compatible|works with|for iphone|for samsung|for android|for ios|universal)\b/i,
      wireless: /\b(wireless|bluetooth|wifi|true wireless|tws|anc|noise cancel)\b/i,
    },
    warranty: true, sgMatters: true, brandTypeRelevant: false,
    aiHints: "Brand and key spec are mandatory. Compatibility signals matter. For premium electronics, warranty duration (e.g. '2 Year Warranty') is a strong trust and conversion signal.",
  },

  home: {
    label: "Home & living (décor/furniture)",
    group: "Other categories",
    primaryKW: ["chair","table","lamp","shelf","cushion","curtain","organizer","storage","frame","towel","bedsheet","pillow","mat","rack","drawer","sofa","bed","wardrobe","mirror","rug","vase","pot","pan"],
    required: {
      dimension: { re: /\b(\d+(\.\d+)?\s?(cm|mm|m\b|inch|"|x\s?\d|litre|liter|l\b|kg|g\b|ml|oz|ft|sq))\b/i, label: "dimensions or size (e.g. 60x80cm, 2L)" },
      material: { re: /\b(wood|metal|steel|iron|glass|plastic|fabric|cotton|polyester|ceramic|bamboo|rattan|concrete|marble|oak|pine|walnut|aluminum|stainless)\b/i, label: "material (e.g. Oak Wood, Stainless Steel)" },
    },
    niceToHave: {
      color: /\b(black|white|grey|gray|brown|beige|navy|wood|natural|oak|pine|walnut)\b/i,
      room: /\b(bedroom|living room|kitchen|bathroom|office|dining|balcony|outdoor|indoor)\b/i,
    },
    warranty: false, sgMatters: false, brandTypeRelevant: false,
    aiHints: "Material and dimensions are mandatory for furniture and décor. Room type and color help buyers filter.",
  },

  beauty: {
    label: "Beauty & personal care",
    group: "Other categories",
    primaryKW: ["serum","cream","moisturizer","toner","sunscreen","spf","foundation","lipstick","mascara","eyeshadow","concealer","primer","blush","cleanser","shampoo","conditioner","lotion","oil","essence","mask","mist","scrub","retinol","vitamin c","hyaluronic","niacinamide"],
    required: {
      concern: { re: /\b(anti.age|anti-aging|brightening|whitening|hydrating|moisturizing|acne|pore|sensitive|oily|dry|combination|normal skin|all skin|spf\s?\d|pa\+|uv|dark spot|pigmentation|firming|lifting|soothing|repair|barrier)\b/i, label: "skin concern or benefit (e.g. SPF 50, Hydrating, Acne)" },
      size: { re: /\b(\d+\s?(ml|g\b|oz|fl oz|pcs|pack|set|piece))\b/i, label: "size or quantity (e.g. 30ml, 50g)" },
    },
    niceToHave: {
      ingredient: /\b(retinol|vitamin c|hyaluronic|niacinamide|aha|bha|peptide|collagen|ceramide|salicylic|glycolic|kojic|arbutin|tranexamic)\b/i,
      brand: /\b([A-Z][a-z]{2,})\b/,
    },
    warranty: false, sgMatters: false, brandTypeRelevant: false,
    aiHints: "Skin concern and volume/quantity are mandatory. Active ingredient keywords boost search reach significantly.",
  },

  food: {
    label: "Food & grocery",
    group: "Other categories",
    primaryKW: ["coffee","tea","snack","sauce","honey","cookie","biscuit","protein","vitamin","supplement","oil","chocolate","nuts","cereal","oat","pasta","rice","noodle","chips","candy","jam","butter","cheese","milk","juice","drink","bar","powder","capsule","gummy"],
    required: {
      quantity: { re: /\b(\d+\s?(g\b|kg|mg|ml|l\b|oz|lb|pcs|pack|pieces|bags?|boxes?|bottles?|cans?|sachets?|servings?|capsules?|tablets?|gummies?))\b/i, label: "quantity or weight (e.g. 500g, 12 pack)" },
      dietary: { re: /\b(halal|vegan|vegetarian|gluten.free|sugar.free|organic|non.gmo|keto|low.carb|dairy.free|kosher|low.sugar|no.added.sugar|natural|whole.grain|plant.based)\b/i, label: "dietary flag (e.g. Halal, Vegan, Organic)" },
    },
    niceToHave: {
      flavor: /\b(chocolate|vanilla|strawberry|original|unflavored|matcha|mocha|caramel|mint|lemon|orange|berry|mango|salted caramel)\b/i,
      cert: /\b(halal|organic|non.gmo|iso|haccp|fda|hsa|approved)\b/i,
    },
    warranty: false, sgMatters: false, brandTypeRelevant: false,
    aiHints: "Quantity and dietary/certification flags are mandatory. Flavor and brand origin help differentiate.",
  },

  sports: {
    label: "Sports & outdoors",
    group: "Other categories",
    primaryKW: ["yoga","gym","running","cycling","swim","workout","fitness","basketball","football","tennis","badminton","golf","hiking","camping","boxing","pilates","crossfit","weights","dumbbell","barbell","resistance","treadmill","bicycle","helmet","gloves","jersey","shorts","leggings","sneaker"],
    required: {
      sport: { re: /\b(yoga|gym|running|cycling|swimming|basketball|football|tennis|badminton|golf|hiking|camping|boxing|pilates|crossfit|climbing|fitness|training|workout)\b/i, label: "sport or activity type" },
      spec: { re: /\b(\d+\s?(kg|lb|g\b|cm|mm|m\b|inch|l\b|pair|pcs|pack|set)|\b(adjustable|foldable|portable|heavy duty|non.slip|waterproof|breathable))\b/i, label: "size, weight, or key feature" },
    },
    niceToHave: {
      gender: /\b(men|women|unisex|kids|boys|girls)\b/i,
      level: /\b(beginner|intermediate|professional|pro|amateur|competition)\b/i,
    },
    warranty: false, sgMatters: false, brandTypeRelevant: false,
    aiHints: "Sport type and key spec/feature are mandatory. Level and gender help buyers self-select.",
  },

  baby: {
    label: "Baby & kids",
    group: "Other categories",
    primaryKW: ["diaper","nappy","baby","infant","toddler","stroller","pram","bottle","toy","wipes","cradle","cot","carrier","teether","nursing","feeding","formula","monitor","car seat","highchair","bouncer","swing","playmat","mobile","rattle","pacifier","soother","bib","onesie","romper"],
    required: {
      ageRange: { re: /\b(newborn|0.3m|0.6m|3.6m|6.12m|0.12m|1.2\s?year|2.3\s?year|\bages?\s?\d|\bmonths?|\byears?\s?old|all ages)\b/i, label: "age range (e.g. 0-6 months, 1-3 years)" },
      safety: { re: /\b(bpa.free|bpa free|non.toxic|fda|hsa|certified|safe|food.grade|organic|hypoallergenic|tested|approved|astm|en71)\b/i, label: "safety certification (e.g. BPA-Free, Non-Toxic, HSA)" },
    },
    niceToHave: {
      material: /\b(cotton|organic|bamboo|silicone|bpa.free|food.grade|muslin|fleece)\b/i,
      gender: /\b(boy|girl|unisex|gender.neutral)\b/i,
    },
    warranty: false, sgMatters: true, brandTypeRelevant: false,
    aiHints: "Age range and safety certifications are mandatory — parents specifically filter by these. BPA-free and material safety are strong conversion triggers.",
  },

  health: {
    label: "Health & wellness",
    group: "Other categories",
    primaryKW: ["supplement","vitamin","collagen","probiotic","omega","zinc","magnesium","calcium","iron","vitamin c","vitamin d","vitamin b","multivitamin","fish oil","protein","whey","creatine","bcaa","melatonin","elderberry","turmeric","ashwagandha","spirulina","biotin","coq10","glucosamine"],
    required: {
      quantity: { re: /\b(\d+\s?(capsules?|tablets?|softgels?|gummies?|sachets?|servings?|g\b|mg|ml|oz|pcs|pack|days?\s?supply|months?\s?supply))\b/i, label: "quantity or supply (e.g. 60 capsules, 30 days supply)" },
      claim: { re: /\b(immune|energy|sleep|stress|gut|digestion|joint|skin|hair|nail|heart|brain|memory|focus|weight|metabolism|antioxidant|anti.inflammatory|detox|cleanse)\b/i, label: "health benefit or claim (e.g. Immune Support, Energy)" },
    },
    niceToHave: {
      cert: /\b(halal|hsa|fda|usda|organic|gmp|non.gmo|third.party.tested|clinically|doctor)\b/i,
      dosage: /\b(\d+\s?mg|\d+\s?mcg|\d+\s?iu|once.daily|twice.daily|daily)\b/i,
    },
    warranty: false, sgMatters: true, brandTypeRelevant: false,
    aiHints: "Quantity/supply count and health benefit claim are mandatory. Certification (Halal, HSA, GMP) are strong trust signals in SG market.",
  },

  pets: {
    label: "Pets",
    group: "Other categories",
    primaryKW: ["dog","cat","pet","puppy","kitten","rabbit","hamster","bird","fish","reptile","leash","collar","harness","bowl","treat","grooming","litter","cage","aquarium","tank","bed","toy","food","dry food","wet food","kibble","shampoo","brush","flea","tick"],
    required: {
      petType: { re: /\b(dog|cat|puppy|kitten|rabbit|hamster|bird|fish|reptile|guinea pig|ferret|turtle|parrot|all pet)\b/i, label: "pet type (e.g. Dog, Cat, Rabbit)" },
      spec: { re: /\b(\d+\s?(kg|g\b|lb|cm|mm|m\b|l\b|pcs|pack|pieces|bags?|sizes?)|small|medium|large|x.large|adjustable)\b/i, label: "size or quantity (e.g. 5kg, Large, 24 pack)" },
    },
    niceToHave: {
      material: /\b(stainless|silicon|nylon|cotton|fleece|waterproof|non.slip|washable|durable)\b/i,
      feature: /\b(adjustable|foldable|washable|breathable|reflective|anti.pull|no.pull|ergonomic|orthopedic)\b/i,
    },
    warranty: false, sgMatters: false, brandTypeRelevant: false,
    aiHints: "Pet type and size/quantity are mandatory. Material safety and washability are important trust signals.",
  },

  auto: {
    label: "Automotive",
    group: "Other categories",
    primaryKW: ["car","motorcycle","tyre","tire","brake","engine oil","wiper","seat cover","dashcam","car charger","car mat","polish","wax","cleaner","filter","battery","headlight","taillight","led","horn","antenna","parking","reverse camera","gps","tracker","lock","alarm","steering"],
    required: {
      compatibility: { re: /\b(universal|for all car|for sedan|for suv|for mpv|fit for|compatible|for toyota|for honda|for mitsubishi|for mazda|for bmw|for mercedes|for hyundai|for kia|for nissan|\d{4}.model|obd|12v|24v)\b/i, label: "compatibility (e.g. Universal, 12V, For Toyota)" },
      spec: { re: /\b(\d+\s?(inch|"|w\b|v\b|a\b|ah|cm|mm|pcs|pack|set|litre|l\b|ml|g\b|kg))\b/i, label: "key spec or measurement" },
    },
    niceToHave: {
      feature: /\b(waterproof|hd|4k|night vision|wide angle|loop recording|parking mode|g.sensor|wifi|app|bluetooth)\b/i,
      material: /\b(leather|carbon|stainless|aluminum|pvc|rubber|silicone|neoprene)\b/i,
    },
    warranty: false, sgMatters: false, brandTypeRelevant: false,
    aiHints: "Compatibility (universal vs specific car model) and spec are mandatory. For dashcams and electronics, resolution and features are key differentiators.",
  },

  general: {
    label: "General / other",
    group: "Other categories",
    primaryKW: [],
    required: {
      brand: { re: /\b[A-Z][a-zA-Z]{1,}\b/, label: "brand name" },
      quantity: { re: /\b(\d+\s?(pcs|pack|pieces|set|units?|g\b|kg|ml|l\b|cm|mm|m\b|inch))\b/i, label: "quantity or size" },
    },
    niceToHave: {
      color: /\b(black|white|red|blue|green|yellow|pink|purple|grey|gray|brown|beige|silver|gold|multicolor)\b/i,
      benefit: /\b(waterproof|wireless|portable|adjustable|durable|lightweight|rechargeable|fast|safe|eco)\b/i,
    },
    warranty: false, sgMatters: false, brandTypeRelevant: false,
    aiHints: "Brand and quantity are the baseline requirements. Add as many specific product attributes as possible.",
  },
};

// Group categories for dropdown
const CAT_GROUPS = {};
Object.entries(CATS).forEach(([key, cat]) => {
  if (!CAT_GROUPS[cat.group]) CAT_GROUPS[cat.group] = [];
  CAT_GROUPS[cat.group].push([key, cat.label]);
});

const BENEFIT_KW = /\b(waterproof|wireless|reusable|foldable|portable|adjustable|durable|lightweight|breathable|rechargeable|fast charge|quick charge|safe|non.slip|anti|eco.friendly|energy.saving|space.saving|multi.purpose|multipurpose|2.in.1|3.in.1)\b/i;
const SG_SIGNAL = /\b(sg ready stock|sg\b|singapore|local seller|local stock|ready stock|in stock|authentic|genuine|100% original)\b/i;
const SPAM_CHARS = /[!@#$%^&*(){}<>|\\]{2,}|[!]{2,}/;
const EXEMPT_CAPS = /\b(USB|HDMI|LED|4K|UHD|LCD|RAM|GPU|CPU|DIY|BPA|SGD|SSD|ANC|TWS|SPF|UVA|UVB|GMP|FDA|HSA|ISO|AHA|BHA|BCAA|NIMH|AA|AAA|CR\d+|LR\d+|DC|AC|RPM|DB)\b/g;
const WARRANTY_RE = /\b(\d+.year.warranty|\d+.yr.warranty|warranty.included|comes.with.warranty|manufacturer.warranty|local.warranty)\b/i;

function hasAllCaps(title) {
  return /\b[A-Z]{5,}\b/.test(title.replace(EXEMPT_CAPS, ""));
}

// ── Scoring ───────────────────────────────────────────────────────────────────
// Mall tier logic:
//   Regular seller  → standard thresholds. Grade A = 85+
//   Preferred seller → slightly stricter. Grade A = 87+. Brand-first recommended.
//   Mall / LazMall  → strictest. Grade A = 90+. Brand-first is a HARD requirement.
//                     Missing it is a critical error, not a suggestion.
//                     Mall badge gives algorithmic priority — title must convert that into clicks.
//                     Mall sellers compete against other Mall sellers, not regular ones.
//                     A Mall title scoring 77 is worse than a regular seller at 77.

function scoreTitle(title, platform, mall, category, brandType) {
  if (!title) return null;
  const tl = title.toLowerCase();
  const words = title.split(/\s+/);
  const len = title.length;
  const maxC = platform === "lazada" ? 255 : 150;
  const cat = CATS[category] || CATS.general;
  const isMall = mall === "mall";
  const isPreferred = mall === "preferred";
  const isLifestyle = brandType === "lifestyle";
  const isFunctional = brandType === "functional";

  // Grade thresholds differ by tier
  // Mall: A=90, B=77, C=62, D=45 — held to higher standard
  // Preferred: A=87, B=73, C=58, D=42
  // Regular: A=85, B=70, C=55, D=40
  const gradeThresholds = isMall
    ? { A: 90, B: 77, C: 62, D: 45 }
    : isPreferred
    ? { A: 87, B: 73, C: 58, D: 42 }
    : { A: 85, B: 70, C: 55, D: 40 };

  const criticalIssues = []; // shown with ✕ red — blocking issues
  const issues = [];         // shown with ✕ red — standard issues

  // ── Mall brand-first: HARD requirement ───────────────────────────────────
  // For Mall/LazMall: brand must be the very first word(s).
  // For Preferred: brand should be in first 35 chars — flagged if not.
  // For Regular: brand anywhere in first 50 chars is fine.
  const brandInFirst15 = /^[A-Z][a-zA-Z]{1,}/.test(title.trim());
  const brandInFirst35 = /\b[A-Z][a-zA-Z]{1,}\b/.test(title.slice(0, 35));
  const brandInFirst50 = /\b[A-Z][a-zA-Z]{1,}\b/.test(title.slice(0, 50));
  const hasBrand = brandInFirst50;

  if (isMall && !brandInFirst15) {
    criticalIssues.push(`[Mall requirement] Brand name must be the first word — Mall listings without brand-first placement underperform and risk delisting`);
  } else if (isPreferred && !brandInFirst35) {
    issues.push(`Brand name should appear in the first 35 characters for Preferred seller listings`);
  }

  // ── S: Search terms (25pts) ──────────────────────────────────────────────
  // Mall sellers: keyword must be in first 50 chars (tighter than regular's 60)
  // Mall sellers: no spam is strictly enforced — penalty is heavier
  let S = 0;
  const hasPrimaryKW = cat.primaryKW.length === 0 || cat.primaryKW.some(k => tl.includes(k));
  const kwFirst60 = cat.primaryKW.length === 0 || cat.primaryKW.some(k => title.slice(0, 60).toLowerCase().includes(k));
  const kwFirst50 = cat.primaryKW.length === 0 || cat.primaryKW.some(k => title.slice(0, 50).toLowerCase().includes(k));
  const hasSpam = SPAM_CHARS.test(title) || hasAllCaps(title);

  if (hasPrimaryKW) {
    S += 15;
    const kwInRange = isMall ? kwFirst50 : kwFirst60;
    if (kwInRange) S += 5;
    else issues.push(`Move main keyword into first ${isMall ? "50" : "60"} characters${isMall ? " — Mall buyers scan fast, keyword placement is critical" : ""}`);
  } else {
    const examples = cat.primaryKW.slice(0, 3).join('", "');
    issues.push(`Add a specific keyword buyers search for (e.g. "${examples}")`);
  }
  if (!hasSpam) {
    S += 5;
  } else {
    if (isMall) criticalIssues.push(`[Mall policy] Remove spam characters or excessive ALL CAPS — Mall listings are penalised more strictly for this`);
    else issues.push("Remove spam characters or excessive ALL CAPS");
  }

  // ── P: Product specifics (25pts) ─────────────────────────────────────────
  // Mall sellers: ALL required attributes expected — missing any is flagged as critical
  // Regular sellers: missing attributes are suggestions, not blockers
  let P = 0;
  const reqEntries = Object.entries(cat.required);
  const ptsEach = reqEntries.length > 0 ? Math.floor(20 / reqEntries.length) : 20;

  reqEntries.forEach(([key, def]) => {
    const re = def.re || def;
    const label = def.label || key;
    if (re.test(title)) {
      P += ptsEach;
    } else {
      if (isMall) {
        criticalIssues.push(`[Mall standard] Add ${label} — Mall buyers are more research-driven and expect complete product information`);
      } else if (isLifestyle && key === "color") {
        issues.unshift(`[Important for your brand] Add color/shade — lifestyle buyers choose by aesthetics`);
      } else {
        issues.push(`Add ${label}`);
      }
    }
  });

  // Brand pts (5pts) — for categories that don't already require brand
  if (!reqEntries.some(([k]) => k === "brand")) {
    if (hasBrand) P += 5;
    else {
      if (isMall) criticalIssues.push(`[Mall requirement] Include brand name — mandatory for Mall listings`);
      else issues.push("Include brand name");
    }
  }

  // Functional appliance brand: model number
  if (category === "appliances" && isFunctional) {
    const hasModel = /\b([A-Z]{2,}\d{2,}|\d{2,}[A-Z]{2,}|[A-Z]+\d+[A-Z]*)\b/.test(title);
    if (!hasModel) {
      if (isMall) issues.push("Add model number — Mall buyers frequently search by exact model");
      else issues.push("Add model number — functional brand buyers often search by model");
    }
  }

  // Mall: full attribute set required — penalise if less than 80% of required attrs present
  const reqCount = reqEntries.length;
  const metCount = reqEntries.filter(([, def]) => (def.re || def).test(title)).length;
  if (isMall && reqCount > 0 && metCount / reqCount < 0.6) {
    P = Math.floor(P * 0.8); // additional penalty for Mall with very incomplete specs
  }

  // ── I: Intent match (20pts) ──────────────────────────────────────────────
  // Mall sellers: BOTH benefit AND differentiator are required for full score
  // Regular sellers: one of the two is enough for partial score
  let I = 0;
  const hasLifestyleIntent = isLifestyle && /\b(retro|vintage|50s|aesthetic|design|style|stylish|elegant|modern|classic|iconic|limited edition|pastel|matte|glossy)\b/i.test(title);
  const hasBenefit = BENEFIT_KW.test(title);
  const hasNiceToHave = Object.values(cat.niceToHave).some(re => re.test(title));
  const hasUseCase = /\b(for home|for office|for kitchen|for gym|for outdoor|for travel|for kids|for men|for women|for car|for pet|daily use|everyday|professional|commercial|heavy duty|multi.purpose)\b/i.test(title);
  const hasWarranty = cat.warranty && WARRANTY_RE.test(title);

  const hasAnyIntent = hasBenefit || hasNiceToHave || hasLifestyleIntent;
  const hasAnyContext = hasUseCase || hasNiceToHave || hasLifestyleIntent || hasWarranty;

  if (hasAnyIntent) I += 12;
  else {
    if (isMall) issues.push(`[Mall standard] Add benefit/feature keywords — Mall buyers compare listings carefully (e.g. ${category === "batteries" ? "'Long Lasting', 'High Drain'" : category === "appliances" ? "'Fast Boil', 'Energy Saving'" : "'Portable', 'Waterproof'"})`);
    else if (isLifestyle) issues.push("Add design/aesthetic keywords (e.g. 'Retro', '50s Style') — lifestyle buyers choose by look");
    else issues.push(`Add a benefit or feature keyword (e.g. ${category === "batteries" ? "'Long Lasting', 'High Drain', 'for Remote'" : category === "appliances" ? "'Fast Boil', 'Energy Saving', 'Auto Shutoff'" : "'Portable', 'Adjustable', 'Waterproof'"})`);
  }

  if (hasAnyContext) I += 8;
  else {
    if (isMall) issues.push("[Mall standard] Add a differentiating descriptor or use-case — your title competes against other Mall listings, not just regular sellers");
    else issues.push("Add use-case or differentiating context");
  }

  // Warranty bonus (up to +3, capped at 20)
  if (cat.warranty) {
    if (hasWarranty) I = Math.min(20, I + 3);
    else {
      if (isMall) issues.push("Add warranty duration — essential for Mall big-ticket items (e.g. '2 Year Local Warranty')");
      else issues.push("Consider adding warranty duration — strong conversion signal for big-ticket items");
    }
  }

  // ── Ch: Character optimization (20pts) ───────────────────────────────────
  // Mall sellers: ideal range is 80–120 (not 70–120) — more info expected
  // Regular sellers: 70–120 ideal
  let Ch = 0;
  const mallMinIdeal = isMall ? 80 : 70;
  if (len > maxC) {
    Ch = 0;
    issues.push(`Exceeds ${maxC}-char limit — trim immediately (currently ${len} chars)`);
  } else if (len >= mallMinIdeal && len <= 120) {
    Ch = 20;
  } else if (len > 120 && len <= maxC) {
    Ch = 14;
    issues.push(`Slightly long (${len} chars) — trim below 120 to avoid mobile truncation`);
  } else if (len >= 50 && len < mallMinIdeal) {
    Ch = isMall ? 8 : 10;
    issues.push(`${isMall ? `Too short for a Mall listing (${len} chars) — aim for 80–120 to include full specs and variants` : `A bit short (${len} chars) — expand with specs, variants, and benefits (aim 70–120)`}`);
  } else {
    Ch = 4;
    issues.push(`Too short (${len} chars) — add product type, key specs, and features`);
  }

  // ── E: Engagement hooks (10pts) ──────────────────────────────────────────
  // SG signals: same category-aware logic, but Mall sellers shouldn't need "Ready Stock"
  // since Mall badge already communicates authenticity and local fulfilment
  let E = 0;
  const hasSG = SG_SIGNAL.test(title);

  if (cat.sgMatters) {
    if (isMall) {
      // For Mall: "SG Ready Stock" is redundant (badge covers it) but still a minor positive
      if (hasSG) E += 2;
      // Not penalised for missing it — badge does the job
    } else {
      if (hasSG) E += 5;
      else issues.push(`Add an SG trust signal — buyers in this category search for it (e.g. 'SG Ready Stock', 'Authentic')`);
    }
  } else {
    if (hasSG) E += 1; // minor positive, not scored meaningfully for non-sg-matters cats
  }

  // Secondary keyword richness
  // Mall: expect 10+ meaningful words; regular: 8+
  const meaningfulWords = words.filter(w => w.length > 3);
  const mallRichTarget = isMall ? 10 : 8;
  const richScore = Math.min(isMall ? 8 : 5, Math.floor((meaningfulWords.length / mallRichTarget) * (isMall ? 8 : 5)));
  E += richScore;
  if (richScore < (isMall ? 5 : 3)) {
    issues.push(isMall
      ? "Mall titles need richer keyword coverage — add specs, variants, and descriptors to hit 10+ meaningful words"
      : "Add more descriptive keywords to improve search coverage"
    );
  }

  // ── Missing niceToHave signals (for Atsell specialist categories) ────────────
  // These are things that would improve the title but aren't hard-required.
  // We surface them as prompts so the seller knows what to add.
  const ATSELL_CATS = ["batteries", "appliances"];
  const missingSignals = [];
  if (ATSELL_CATS.includes(category)) {
    const niceChecks = {
      batteries: [
        { key: "capacity",  re: /\b(\d+\s?(mah|wh|v\b|ah))\b/i,        question: "What's the capacity? (e.g. 2500mAh, 3.6V)",        label: "💡 Capacity" },
        { key: "shelfLife", re: /\b(\d+.year|long.shelf|shelf.life|expiry)\b/i, question: "What's the shelf life? (e.g. 10 year shelf life)", label: "⏳ Shelf life" },
        { key: "useCase",   re: /\b(remote|controller|toy|camera|torch|flashlight|smoke|alarm|high.drain|everyday|industrial|medical|emergency)\b/i, question: "What device is it for? (e.g. for remotes, for cameras, high-drain devices)", label: "🎯 Use case" },
      ],
      appliances: [
        { key: "model",    re: /\b([A-Z]{2,}\d{2,}|\d{2,}[A-Z]{2,}|[A-Z]+\d+[A-Z]*)\b/, question: "What's the model number? (e.g. KLF03, HD9252)", label: "🔢 Model number" },
        { key: "warranty", re: /\b(\d+.year.warranty|\d+.yr.warranty|warranty.included|comes.with.warranty|manufacturer.warranty|local.warranty)\b/i, question: "Is there a warranty? (e.g. 2 year local warranty)", label: "🛡 Warranty" },
        { key: "color",    re: /\b(black|white|grey|gray|red|cream|pastel|mint|pink|blue|silver|stainless|retro|vintage|50s|matte|glossy)\b/i, question: "What colour is it? (e.g. Cream, Matte Black, Pastel Pink)", label: "🎨 Colour" },
      ],
    };
    (niceChecks[category] || []).forEach(({ re, question, label }) => {
      if (!re.test(title)) missingSignals.push({ question, label });
    });
  }

  // ── Final score and grade ─────────────────────────────────────────────────
  const rawTotal = Math.min(100, S + P + I + Ch + E);

  // Mall utilization penalty: if a Mall seller scores below 70 raw,
  // they're actively wasting their Mall advantage — apply a visibility note
  const mallUnderutilized = isMall && rawTotal < 70;

  const grade = rawTotal >= gradeThresholds.A ? "A"
    : rawTotal >= gradeThresholds.B ? "B"
    : rawTotal >= gradeThresholds.C ? "C"
    : rawTotal >= gradeThresholds.D ? "D" : "F";

  const scores = { S, P, I, Ch, E };
  const allIssues = [...criticalIssues, ...issues];

  return {
    total: rawTotal,
    grade,
    gradeThresholds,
    scores,
    issues: allIssues,
    criticalCount: criticalIssues.length,
    len,
    maxC,
    mallUnderutilized,
    cat,
    missingSignals,
  };
}

// ── Spider chart ──────────────────────────────────────────────────────────────
function SpiderChart({ scores, animated }) {
  const dims = [{ key: "S", label: "Search", max: 25 }, { key: "P", label: "Specifics", max: 25 }, { key: "I", label: "Intent", max: 20 }, { key: "Ch", label: "Length", max: 20 }, { key: "E", label: "Hooks", max: 10 }];
  const cx = 130, cy = 130, r = 85;
  const angle = (i) => (Math.PI * 2 * i) / dims.length - Math.PI / 2;
  const pt = (i, radius) => ({ x: cx + radius * Math.cos(angle(i)), y: cy + radius * Math.sin(angle(i)) });
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!animated) return;
    setProgress(0);
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 800, 1);
      setProgress(p < 1 ? p * p * (3 - 2 * p) : 1);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [animated, scores]);
  const scoreColor = (pct) => pct >= 0.8 ? C.green : pct >= 0.5 ? C.gold : "#e24b4a";
  const dataPoints = dims.map((d, i) => pt(i, r * Math.min(scores[d.key] / d.max, 1) * progress));
  return (
    <svg viewBox="0 0 260 260" style={{ width: "100%", maxWidth: 240 }}>
      {[0.25, 0.5, 0.75, 1].map((frac, ri) => (
        <polygon key={ri} points={dims.map((_, i) => { const p = pt(i, r * frac); return `${p.x},${p.y}`; }).join(" ")} fill="none" stroke={C.gray200} strokeWidth="1" />
      ))}
      {dims.map((_, i) => { const o = pt(i, r); return <line key={i} x1={cx} y1={cy} x2={o.x} y2={o.y} stroke={C.gray200} strokeWidth="1" />; })}
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

// ── Grade ring ────────────────────────────────────────────────────────────────
function GradeRing({ score, grade }) {
  const fc = score >= 70 ? C.green : score >= 55 ? C.amber : C.red;
  const bg = score >= 70 ? C.greenBg : score >= 55 ? C.amberBg : C.redBg;
  const r = 44, circ = 2 * Math.PI * r;
  const [dash, setDash] = useState(0);
  useEffect(() => { const t = setTimeout(() => setDash((score / 100) * circ), 150); return () => clearTimeout(t); }, [score, circ]);
  return (
    <div style={{ position: "relative", width: 110, height: 110 }}>
      <svg viewBox="0 0 100 100" style={{ width: 110, height: 110, transform: "rotate(-90deg)" }}>
        <circle cx="50" cy="50" r={r} fill="none" stroke={C.gray200} strokeWidth="9" />
        <circle cx="50" cy="50" r={r} fill="none" stroke={fc} strokeWidth="9" strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" style={{ transition: "stroke-dasharray 0.9s cubic-bezier(.4,0,.2,1)" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 700, color: fc, lineHeight: 1 }}>{score}</span>
        <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 700, color: fc, background: bg, padding: "1px 7px", borderRadius: 100, marginTop: 3 }}>Grade {grade}</span>
      </div>
    </div>
  );
}

// ── AI rewrite ────────────────────────────────────────────────────────────────
async function fetchAIRewrite(title, platform, mall, category, brandType, issues, notes) {
  const cat = CATS[category] || CATS.general;
  const mallLabel = mall === "mall" ? (platform === "lazada" ? "LazMall" : "Shopee Mall") : mall === "preferred" ? "Preferred Seller" : "Regular Seller";
  const brandContext = cat.brandTypeRelevant
    ? brandType === "lifestyle" ? "\nBRAND TYPE: Lifestyle/design brand — color, aesthetic, and design language (e.g. 'Retro', '50s Style', specific color names) are MAJOR purchase drivers. Prioritize these alongside specs."
    : brandType === "functional" ? "\nBRAND TYPE: Functional/performance brand — prioritize specs, capacity, energy efficiency, and model number. Warranty duration (e.g. '2 Year Local Warranty') is a strong conversion signal."
    : ""
    : "";

  const isMall = mall === "mall";
  const isPreferred = mall === "preferred";

  const mallRules = isMall
    ? `MALL REQUIREMENTS (non-negotiable):
- Brand name MUST be the very first word
- All key product specs must be included (appliance type, capacity, spec, voltage etc.)
- Title should be 80–120 chars — Mall buyers expect comprehensive info
- No spam, no ALL CAPS, no keyword stuffing
- SG Ready Stock is NOT needed — the Mall badge already communicates this
- Compete against other Mall titles, not regular sellers`
    : isPreferred
    ? `PREFERRED SELLER REQUIREMENTS:
- Brand name should appear in first 35 chars
- Complete product attributes expected
- Title should be 70–120 chars
- SG trust signals helpful where category-relevant`
    : `REGULAR SELLER REQUIREMENTS:
- Lead with strongest search keyword
- Brand in first 50 chars
- Title 70–120 chars
- SG signals important for relevant categories`;

  const prompt = `You are an expert Shopee and Lazada SEO specialist for Singapore market sellers.

Platform: ${platform === "lazada" ? "Lazada" : "Shopee"} (${mallLabel})
Category: ${cat.label}
Character limit: ${platform === "lazada" ? "255" : "150"} chars
${brandContext}

${mallRules}

Current title: "${title}"

Issues to fix:
${issues.map((issue, n) => `${n + 1}. ${issue}`).join("\n")}

${notes ? `Seller notes — MUST incorporate these: ${notes}` : ""}

Category SEO intelligence:
${cat.aiHints}

Additional rules:
- Fix all listed issues, prioritise critical ones first
- Preserve accurate product details from the original
- No keyword stuffing or word repetition
- Natural, readable language
- Stay within character limit

Return ONLY valid JSON, no markdown:
{"rewritten":"the optimized title","changes":["specific change 1","specific change 2","specific change 3"],"reasoning":"one sentence on the core strategy"}`;

  const resp = await fetch("/api/anthropic", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 600, messages: [{ role: "user", content: prompt }] }),
  });
  const data = await resp.json();
  const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("");
  const match = text.match(/\{[\s\S]*\}/);
  return match ? JSON.parse(match[0]) : null;
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ListingGrader() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [platform, setPlatform] = useState("shopee");
  const [mall, setMall] = useState("regular");
  const [category, setCategory] = useState("general");
  const [brandType, setBrandType] = useState("none");
  const [result, setResult] = useState(null);
  const [aiResult, setAiResult] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [animated, setAnimated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notesHighlight, setNotesHighlight] = useState(false);
  const resultRef = useRef(null);
  const notesRef = useRef(null);

  const cat = CATS[category] || CATS.general;
  const charLimit = platform === "lazada" ? 255 : 150;
  const len = title.length;
  const charColor = len > charLimit ? C.red : len > 120 ? C.amber : len >= 70 ? C.green : C.gray500;
  const mallLabel = mall === "mall" ? (platform === "lazada" ? "LazMall" : "Shopee Mall") : mall === "preferred" ? "Preferred / Star Seller" : "Regular Seller";

  function grade() {
    const r = scoreTitle(title, platform, mall, category, brandType);
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
      const r = await fetchAIRewrite(title, platform, mall, category, brandType, result.issues, notes);
      if (r) setAiResult(r);
      else setAiError("Could not parse AI response. Please try again.");
    } catch (e) {
      setAiError("Connection error: " + e.message);
    }
    setAiLoading(false);
  }

  function copyTitle() {
    if (!aiResult) return;
    navigator.clipboard.writeText(aiResult.rewritten);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const selectStyle = { width: "100%", fontFamily: FONT, fontSize: 13, padding: "9px 10px", border: `1px solid ${C.gray200}`, borderRadius: 10, background: C.white, color: C.gray900, cursor: "pointer" };

  return (
    <section style={{ background: `linear-gradient(180deg, ${C.offWhite} 0%, ${C.white} 100%)`, padding: "80px 24px" }}>
      <style>{`
        .gi:focus{outline:none;border-color:${C.gold}!important;box-shadow:0 0 0 3px ${C.gold}22;}
        .gb:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 8px 24px ${C.gold}44!important;}
        .gb:active:not(:disabled){transform:scale(0.98);}
        .ab:hover:not(:disabled){background:${C.navyLight}!important;}
        .cb:hover{background:${C.gray100}!important;}
        @media(max-width:640px){.rg{grid-template-columns:1fr!important;}.sg{flex-direction:column!important;}}
        @keyframes spin{to{transform:rotate(360deg);}}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.5;transform:scale(.8);}}
        @keyframes shake{0%,100%{transform:translateX(0);}15%{transform:translateX(-6px);}30%{transform:translateX(6px);}45%{transform:translateX(-4px);}60%{transform:translateX(4px);}75%{transform:translateX(-2px);}90%{transform:translateX(2px);}}
        optgroup{font-weight:700;font-style:normal;color:${C.navy};}
        option{font-weight:400;}
      `}</style>

      <div style={{ maxWidth: 740, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.gold}18`, border: `1px solid ${C.gold}33`, borderRadius: 100, padding: "5px 14px 5px 8px", marginBottom: 18 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.gold, animation: "pulse 2s infinite" }} />
            <span style={{ fontFamily: FONT, fontSize: 12, color: C.gold, fontWeight: 600, letterSpacing: "0.5px" }}>Free SEO Tool</span>
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: C.navy, margin: "0 0 12px" }}>Listing Title Grader</h2>
          <p style={{ fontFamily: FONT, fontSize: 16, color: C.gray500, maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
            Category-aware SEO scoring for Shopee and Lazada — with an AI-powered rewrite that actually understands your product.
          </p>
        </div>

        {/* Input card */}
        <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.gray200}`, padding: "32px", marginBottom: 20, boxShadow: `0 4px 32px ${C.navy}08` }}>

          {/* Row 1: Platform + Mall */}
          <div className="sg" style={{ display: "flex", gap: 12, marginBottom: 14 }}>
            {/* Platform selector */}
            <div style={{ flex: 1 }}>
              <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.6px" }}>Platform</label>
              <select className="gi" value={platform} onChange={e => { setPlatform(e.target.value); setMall("regular"); }} style={selectStyle}>
                <option value="shopee">Shopee</option>
                <option value="lazada">Lazada</option>
              </select>
            </div>

            {/* Seller tier — options depend on selected platform */}
            <div style={{ flex: 1 }}>
              <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.6px" }}>Seller tier</label>
              <select className="gi" value={mall} onChange={e => setMall(e.target.value)} style={selectStyle}>
                <option value="regular">Regular seller</option>
                {platform === "shopee" && <option value="preferred">⭐ Preferred / Star seller</option>}
                {platform === "lazada" && <option value="preferred">⭐ LazPreferred seller</option>}
                {platform === "shopee" && <option value="mall">🏪 Shopee Mall</option>}
                {platform === "lazada" && <option value="mall">🏪 LazMall</option>}
              </select>
            </div>
          </div>

          {/* Row 2: Category + Brand type */}
          <div className="sg" style={{ display: "flex", gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 2 }}>
              <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.6px" }}>Category</label>
              <select className="gi" value={category} onChange={e => { setCategory(e.target.value); setBrandType("none"); }} style={selectStyle}>
                {Object.entries(CAT_GROUPS).map(([group, cats]) => (
                  <optgroup key={group} label={group}>
                    {cats.map(([k, l]) => <option key={k} value={k}>{l}</option>)}
                  </optgroup>
                ))}
              </select>
            </div>

            {cat.brandTypeRelevant && (
              <div style={{ flex: 1 }}>
                <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gold, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.6px" }}>Brand type</label>
                <select className="gi" value={brandType} onChange={e => setBrandType(e.target.value)} style={{ ...selectStyle, border: `1px solid ${C.gold}66`, background: `${C.gold}08` }}>
                  <option value="none">Select brand type</option>
                  <option value="lifestyle">🎨 Lifestyle / design brand (e.g. SMEG)</option>
                  <option value="functional">⚙️ Functional / performance brand (e.g. Electrolux)</option>
                </select>
              </div>
            )}
          </div>

          {/* Category tip */}
          <div style={{ padding: "10px 14px", background: `${C.navy}07`, borderRadius: 8, border: `1px solid ${C.navy}10`, marginBottom: 14, fontSize: 12, fontFamily: FONT, color: C.gray700, lineHeight: 1.6 }}>
            {category === "batteries" && "⚡ Battery type (AA/AAA/CR2032) and pack size are the #1 search signals. Technology type (Alkaline vs Lithium) is the key differentiator."}
            {category === "appliances" && brandType === "lifestyle" && "🎨 Lifestyle brand: color and aesthetic keywords ('Retro', '50s Style') are major purchase drivers — score weighted accordingly."}
            {category === "appliances" && brandType === "functional" && "⚙️ Functional brand: capacity, wattage, model number, and warranty are your strongest signals."}
            {category === "appliances" && brandType === "none" && "🏠 Select a Brand Type above to unlock SMEG vs Electrolux-specific scoring."}
            {!["batteries","appliances"].includes(category) && (mall === "mall" ? `${mallLabel}: brand must appear first. Higher bar, premium placement in return.` : mall === "preferred" ? "Preferred seller: title quality directly impacts your badge retention." : "Regular seller: your title SEO is your primary edge against Mall competitors.")}
            {cat.sgMatters && " SG trust signals matter in this category."}
          </div>

          {/* Title */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
              <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.gray500, textTransform: "uppercase", letterSpacing: "0.6px" }}>Your listing title</label>
              <span style={{ fontFamily: FONT, fontSize: 12, color: charColor, fontWeight: 500 }}>{len} / {charLimit} chars</span>
            </div>
            <textarea className="gi" value={title} onChange={e => setTitle(e.target.value)}
              placeholder={category === "batteries" ? "e.g. GP Ultra Alkaline AA Battery 8 Pack — High Performance, Long Lasting SG Ready Stock" : category === "appliances" ? "e.g. SMEG Retro Electric Kettle KLF03 1.7L — 50s Style, 8 Colors, 2 Year Warranty SG" : "Paste your listing title here"}
              rows={3}
              style={{ width: "100%", fontFamily: FONT, fontSize: 14, lineHeight: 1.6, padding: "12px 14px", border: `1px solid ${C.gray200}`, borderRadius: 12, background: C.offWhite, color: C.gray900, resize: "vertical", transition: "border 0.2s, box-shadow 0.2s" }}
            />
          </div>

          {/* Product notes */}
          <div style={{ marginBottom: 20, animation: notesHighlight ? "shake 0.5s ease" : "none" }}>
            <label style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: notesHighlight ? C.amber : C.gray500, display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.6px", transition: "color 0.2s" }}>
              Extra product details{" "}
              <span style={{ fontWeight: 400, textTransform: "none", color: notesHighlight ? C.amber : C.gray500 }}>
                {notesHighlight ? "⚠ Needed for a better AI rewrite — add details then click generate again" : "(recommended for AI rewrite)"}
              </span>
            </label>
            <input ref={notesRef} className="gi" type="text" value={notes} onChange={e => { setNotes(e.target.value); if (notesHighlight) setNotesHighlight(false); }}
              placeholder={category === "batteries" ? "e.g. 10 year shelf life, for high-drain devices, EU certified" : category === "appliances" ? "e.g. 2 year local warranty, 8 colour options, works with Alexa, 220V SG plug" : "e.g. 2 year warranty, free gift included, ships same day"}
              style={{ width: "100%", fontFamily: FONT, fontSize: 13, padding: "10px 14px", border: `1px solid ${notesHighlight ? C.gold : C.gray200}`, borderRadius: 10, background: notesHighlight ? `${C.gold}0e` : C.offWhite, color: C.gray900, transition: "border 0.2s, box-shadow 0.2s, background 0.2s", boxShadow: notesHighlight ? `0 0 0 3px ${C.gold}33` : "none" }}
            />
            {/* Missing signal chips — only shown for Atsell specialist categories after grading */}
            {result?.missingSignals?.length > 0 && (
              <div style={{ marginTop: 8 }}>
                <p style={{ fontFamily: FONT, fontSize: 11, color: C.amber, fontWeight: 600, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  ✦ Add these to improve your title score:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {result.missingSignals.map(({ label, question }) => {
                    const alreadyInNotes = notes.toLowerCase().includes(question.split("?")[0].toLowerCase().slice(0, 15));
                    return (
                      <button
                        key={label}
                        onClick={() => {
                          const prefix = notes.trim() ? notes.trim().replace(/,?\s*$/, "") + ", " : "";
                          setNotes(prefix + question);
                          notesRef.current?.focus();
                        }}
                        style={{
                          fontFamily: FONT, fontSize: 12, fontWeight: 500,
                          padding: "5px 12px", borderRadius: 100, cursor: "pointer",
                          border: `1px solid ${alreadyInNotes ? C.green : C.gold}`,
                          background: alreadyInNotes ? C.greenBg : `${C.gold}12`,
                          color: alreadyInNotes ? C.green : C.amber,
                          transition: "all 0.15s",
                        }}
                      >
                        {alreadyInNotes ? "✓ " : "+ "}{label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button className="gb" onClick={grade} disabled={!title.trim()}
            style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", fontFamily: FONT, fontSize: 15, fontWeight: 700, background: !title.trim() ? C.gray200 : `linear-gradient(135deg,${C.gold},${C.goldLight})`, color: !title.trim() ? C.gray500 : C.navyDark, cursor: !title.trim() ? "default" : "pointer", transition: "all 0.25s" }}>
            Grade my title →
          </button>
        </div>

        {/* Results */}
        {result && (
          <div ref={resultRef}>
            <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.gray200}`, padding: "32px", marginBottom: 16, boxShadow: `0 4px 32px ${C.navy}08` }}>
              <div className="rg" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 36, alignItems: "start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                  <GradeRing score={result.total} grade={result.grade} />
                  <SpiderChart scores={result.scores} animated={animated} />
                </div>
                <div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
                    {[
                      { label: mallLabel, bg: mall === "mall" ? "#e6f0fb" : mall === "preferred" ? C.greenBg : C.gray100, color: mall === "mall" ? "#1a4a8a" : mall === "preferred" ? C.green : C.gray700 },
                      { label: cat.label.replace(/^[^\s]+\s/, ""), bg: `${C.gold}15`, color: C.amber },
                      ...(cat.brandTypeRelevant && brandType !== "none" ? [{ label: brandType === "lifestyle" ? "🎨 Lifestyle" : "⚙️ Functional", bg: C.gray100, color: C.gray700 }] : []),
                    ].map(({ label, bg, color }) => (
                      <span key={label} style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 100, background: bg, color }}>{label}</span>
                    ))}
                  </div>

                  {/* Grade context */}
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontFamily: FONT, fontSize: 12, color: C.gray500, margin: "0 0 4px" }}>
                      {mall === "mall" ? `Mall threshold: A ≥ 90 · B ≥ 77 · C ≥ 62` : mall === "preferred" ? `Preferred threshold: A ≥ 87 · B ≥ 73 · C ≥ 58` : `Standard threshold: A ≥ 85 · B ≥ 70 · C ≥ 55`}
                    </p>
                    {result.mallUnderutilized && (
                      <div style={{ padding: "7px 12px", background: `${C.gold}18`, border: `1px solid ${C.gold}44`, borderRadius: 8, fontFamily: FONT, fontSize: 12, color: C.amber }}>
                        ⚠ Your Mall badge gives algorithmic priority — but this title isn't strong enough to convert that visibility into clicks. Competitors with better titles will outperform you despite your Mall status.
                      </div>
                    )}
                  </div>

                  <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: C.gray900, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>
                    {result.issues.length === 0 ? "✓ No issues found" : `${result.criticalCount > 0 ? `${result.criticalCount} critical · ` : ""}${result.issues.length - result.criticalCount} standard issue${result.issues.length - result.criticalCount !== 1 ? "s" : ""}`}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 20 }}>
                    {result.issues.length === 0 ? (
                      <div style={{ padding: "8px 12px", background: C.greenBg, borderLeft: `3px solid ${C.green}`, borderRadius: "0 6px 6px 0", fontFamily: FONT, fontSize: 13, color: C.green, fontWeight: 500 }}>✓ Title meets {mall === "mall" ? "Mall" : mall === "preferred" ? "Preferred seller" : "standard"} requirements</div>
                    ) : result.issues.map((issue, i) => {
                      const isCritical = issue.startsWith("[Mall") || issue.startsWith("[Important");
                      const isImportant = issue.startsWith("[Important");
                      const bg = isCritical && !isImportant ? "#fff0f0" : isImportant ? `${C.gold}15` : C.redBg;
                      const border = isCritical && !isImportant ? "#c00" : isImportant ? C.gold : "#e24b4a";
                      const color = isCritical && !isImportant ? "#8b0000" : isImportant ? C.amber : C.red;
                      const icon = isCritical && !isImportant ? "🚫" : isImportant ? "★" : "✕";
                      return (
                        <div key={i} style={{ display: "flex", gap: 8, padding: "8px 12px", background: bg, borderLeft: `3px solid ${border}`, borderRadius: "0 6px 6px 0", fontFamily: FONT, fontSize: 13, color }}>
                          <span style={{ fontWeight: 700, flexShrink: 0, fontSize: 12 }}>{icon}</span>{issue}
                        </div>
                      );
                    })}
                  </div>

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

            {/* AI Rewrite */}
            <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.gray200}`, padding: "32px", marginBottom: 16, boxShadow: `0 4px 32px ${C.navy}08` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, gap: 16, flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 700, color: C.navy, margin: "0 0 4px" }}>AI-optimized rewrite</h3>
                  <p style={{ fontFamily: FONT, fontSize: 13, color: C.gray500, margin: 0 }}>
                    Claude rewrites using {cat.label.replace(/^[^\s]+\s/, "")} SEO rules{notes ? " + your product notes" : ""}
                    {cat.brandTypeRelevant && brandType !== "none" ? ` (${brandType} brand strategy)` : ""}
                  </p>
                  {!notes.trim() && (
                    <p style={{ fontFamily: FONT, fontSize: 12, color: C.amber, margin: "6px 0 0", display: "flex", alignItems: "center", gap: 5 }}>
                      <span>💡</span>
                      {result?.missingSignals?.length > 0
                        ? "Fill in the missing details above — they'll be baked into your rewrite"
                        : "Add product details above for a much better rewrite"}
                    </p>
                  )}
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
                  <p style={{ fontFamily: FONT, fontSize: 13, color: C.gray500, margin: 0 }}>Applying {cat.label.replace(/^[^\s]+\s/, "")} SEO rules and crafting your title…</p>
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
                    {(aiResult.changes || []).map((ch, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, fontFamily: FONT, fontSize: 13, color: C.gray700 }}>
                        <span style={{ color: C.green, fontWeight: 700, flexShrink: 0 }}>✓</span>{ch}
                      </div>
                    ))}
                  </div>

                  <button className="cb" onClick={copyTitle}
                    style={{ padding: "9px 20px", borderRadius: 8, border: `1px solid ${C.gray200}`, fontFamily: FONT, fontSize: 13, fontWeight: 600, background: copied ? C.greenBg : C.white, color: copied ? C.green : C.navy, cursor: "pointer", transition: "all 0.2s" }}>
                    {copied ? "✓ Copied!" : "Copy rewritten title"}
                  </button>
                </div>
              )}

              {!aiResult && !aiLoading && (
                <div style={{ padding: "32px", background: C.gray100, borderRadius: 12, textAlign: "center", border: `2px dashed ${C.gray200}` }}>
                  <p style={{ fontFamily: FONT, fontSize: 14, color: C.gray500, margin: "0 0 6px" }}>Hit "Generate rewrite" — Claude fixes every issue using category-specific SEO rules</p>
                  {notes && <p style={{ fontFamily: FONT, fontSize: 12, color: C.green, margin: 0 }}>✓ Your product notes will be included in the rewrite</p>}
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

        <div style={{ marginTop: 20, textAlign: "center" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, color: C.gray500, lineHeight: 1.7 }}>
            SPICE framework: Search terms (25) · Category specifics (25) · Intent & benefits (20) · Length (20) · Hooks (10)<br />
            Scoring is category-aware and brand-type sensitive. SG signals weighted by category relevance.
          </p>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg);}}`}</style>
    </section>
  );
}
