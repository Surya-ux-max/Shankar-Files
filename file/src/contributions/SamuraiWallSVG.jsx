/**
 * Modern High-Style Samurai Palace Dojo & Gallery Wall Vector Art
 * Features:
 * - Distressed stone/concrete gallery wall with subtle masonry and paper grain
 * - Overhead rustic cedar timber beams with architectural black track spotlights
 * - Realistic downward spotlight illumination cones
 * - Dynamic Sumi-e black ink samurai warrior murals (Gusoku armor, Kabuto, Naginata, Enso ink brush arcs)
 * - Hanging warfare tools: Katana on rack, Tanto daggers, Kunai knives, embedded Shuriken
 * - Rustic wooden base trim
 */

export default function SamuraiWallSVG() {
  return (
    <svg
      className="samurai-wall-svg"
      viewBox="0 0 1360 620"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Wall Gradients & Textures */}
        <linearGradient id="concreteWallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c5c0b8" />
          <stop offset="35%" stopColor="#b6b0a6" />
          <stop offset="70%" stopColor="#9e978c" />
          <stop offset="100%" stopColor="#787166" />
        </linearGradient>

        <linearGradient id="timberBeamGrad" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#452718" />
          <stop offset="40%" stopColor="#2c180e" />
          <stop offset="70%" stopColor="#5a3420" />
          <stop offset="100%" stopColor="#1e1008" />
        </linearGradient>

        <linearGradient id="spotlightCone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="35%" stopColor="#fef08a" stopOpacity="0.25" />
          <stop offset="75%" stopColor="#fde047" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="steelBlade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>

        <linearGradient id="goldAccents" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Drop Shadows & Glows */}
        <filter id="muralDropShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.35" />
        </filter>
        <filter id="weaponShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.55" />
        </filter>
        <filter id="spotlightBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      {/* ================= 1. DISTRESSED STONE CONCRETE WALL ================= */}
      <rect x="0" y="0" width="1360" height="620" fill="url(#concreteWallGrad)" />

      {/* Concrete Wall Mottled Texture Details & Distressed Scratches */}
      <g opacity="0.35">
        <path d="M 40 180 Q 90 190 140 175 T 280 185" stroke="#44403c" strokeWidth="1.2" strokeDasharray="6 8" fill="none" />
        <path d="M 680 90 Q 740 105 820 85 T 980 95" stroke="#44403c" strokeWidth="1.2" strokeDasharray="8 12" fill="none" />
        <path d="M 1040 220 Q 1120 235 1220 215 T 1340 230" stroke="#44403c" strokeWidth="1.2" strokeDasharray="4 10" fill="none" />
        <circle cx="210" cy="110" r="1.5" fill="#292524" />
        <circle cx="490" cy="270" r="2" fill="#292524" />
        <circle cx="890" cy="150" r="2" fill="#292524" />
        <circle cx="1180" cy="290" r="1.5" fill="#292524" />
        <line x1="0" y1="460" x2="1360" y2="460" stroke="#57534e" strokeWidth="0.8" opacity="0.4" />
      </g>

      {/* ================= 2. SUMI-E INK BRUSH SAMURAI WARRIORS MURAL ================= */}
      {/* Inspired by the magnificent ink-wash mural reference */}
      <g id="samurai-ink-mural" opacity="0.9" filter="url(#muralDropShadow)">
        
        {/* WARRIOR 1: Massive Horned Kabuto Warrior (Left Flank) */}
        <g id="warrior-1" transform="translate(60, 40)">
          {/* Background Ink Splatters */}
          <circle cx="95" cy="120" r="4" fill="#18181b" opacity="0.6" />
          <circle cx="110" cy="80" r="2.5" fill="#18181b" opacity="0.7" />
          <circle cx="70" cy="240" r="3" fill="#18181b" opacity="0.5" />

          {/* Kabuto Helmet with Fierce Antler / Demon Horns */}
          <path d="M 75 75 Q 55 30 35 15 Q 45 40 68 82 Z" fill="#09090b" />
          <path d="M 115 75 Q 135 30 155 15 Q 145 40 122 82 Z" fill="#09090b" />
          <circle cx="95" cy="78" r="8" fill="#18181b" stroke="#09090b" strokeWidth="2" />
          <polygon points="95,68 98,75 104,75 100,80 102,86 95,83 88,86 90,80 86,75 92,75" fill="#e4e4e7" />

          {/* Menpo Warrior Mask with fierce expression */}
          <path d="M 80 85 L 110 85 L 105 110 Q 95 118 85 110 Z" fill="#09090b" />
          <line x1="86" y1="98" x2="104" y2="98" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

          {/* Tiered Neckguard Shikoro */}
          <path d="M 65 95 Q 95 108 125 95 L 130 112 Q 95 125 60 112 Z" fill="#18181b" />

          {/* Broad O-Sode Shoulder Plates */}
          <path d="M 40 120 L 75 120 L 70 185 L 35 185 Z" fill="#09090b" />
          <line x1="42" y1="135" x2="72" y2="135" stroke="#e4e4e7" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="40" y1="150" x2="70" y2="150" stroke="#e4e4e7" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="38" y1="165" x2="68" y2="165" stroke="#e4e4e7" strokeWidth="2" strokeDasharray="3 3" />

          <path d="M 115 120 L 150 120 L 155 185 L 120 185 Z" fill="#09090b" />
          <line x1="118" y1="135" x2="148" y2="135" stroke="#e4e4e7" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="120" y1="150" x2="150" y2="150" stroke="#e4e4e7" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="122" y1="165" x2="152" y2="165" stroke="#e4e4e7" strokeWidth="2" strokeDasharray="3 3" />

          {/* Heavy Dō Cuirass with Laced Scales */}
          <path d="M 72 120 L 118 120 L 125 240 L 65 240 Z" fill="#18181b" />
          <circle cx="95" cy="155" r="16" fill="#09090b" stroke="#e4e4e7" strokeWidth="2" />
          <line x1="74" y1="185" x2="116" y2="185" stroke="#ffffff" strokeWidth="2" />
          <line x1="72" y1="200" x2="118" y2="200" stroke="#ffffff" strokeWidth="2" />
          <line x1="70" y1="215" x2="120" y2="215" stroke="#ffffff" strokeWidth="2" />

          {/* Sheathed Katana on hip */}
          <path d="M 45 220 Q 20 280 -5 320" stroke="#09090b" strokeWidth="8" strokeLinecap="round" />
          <circle cx="48" cy="216" r="6" fill="#f59e0b" />

          {/* Lower Armored Skirt & Greaves */}
          <path d="M 62 245 L 88 245 L 85 340 L 58 340 Z" fill="#09090b" />
          <path d="M 102 245 L 128 245 L 132 340 L 105 340 Z" fill="#09090b" />
        </g>

        {/* CALLIGRAPHIC ENSO BRUSH ARC (Ink Brush Circle behind Center) */}
        <g id="enso-brush" transform="translate(680, 220)">
          <path
            d="M 110 -110 C 220 -80 250 80 180 160 C 100 240 -80 220 -150 140 C -220 50 -180 -80 -80 -140"
            stroke="#18181b"
            strokeWidth="28"
            strokeLinecap="round"
            strokeDasharray="600 20"
            opacity="0.32"
            fill="none"
          />
          {/* Dynamic Ink Splatters */}
          <circle cx="210" cy="50" r="5" fill="#18181b" opacity="0.45" />
          <circle cx="225" cy="80" r="3" fill="#18181b" opacity="0.5" />
          <circle cx="-160" cy="180" r="4" fill="#18181b" opacity="0.4" />
        </g>

        {/* WARRIOR 2: Standing Battle Commander with Naginata (Right Flank) */}
        <g id="warrior-2" transform="translate(1120, 30)">
          {/* Raised Naginata Spear Blade */}
          <line x1="-30" y1="20" x2="-30" y2="420" stroke="#18181b" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M -30 20 Q -28 -20 -18 -45 Q -32 -25 -32 20 Z" fill="#09090b" />
          <rect x="-33" y="15" width="6" height="8" fill="#f59e0b" />

          {/* Commander Kabuto with Crescent Moon Maedate */}
          <path d="M 50 65 C 65 35 95 35 110 65 C 95 50 65 50 50 65 Z" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
          <path d="M 58 75 C 58 55 102 55 102 75 C 102 92 58 92 58 75 Z" fill="#09090b" />
          
          {/* Menpo Mask */}
          <path d="M 68 85 L 92 85 L 88 105 Q 80 110 72 105 Z" fill="#1c1917" />
          
          {/* Flowing War Cloak / Jinbaori */}
          <path d="M 40 105 Q 80 100 120 105 L 140 280 Q 80 290 20 280 Z" fill="#18181b" />
          <path d="M 55 115 L 105 115 L 110 230 L 50 230 Z" fill="#09090b" />

          {/* War Stance Legs */}
          <path d="M 42 280 L 62 280 L 58 410 L 36 410 Z" fill="#09090b" />
          <path d="M 98 280 L 118 280 L 122 410 L 102 410 Z" fill="#09090b" />
        </g>
      </g>

      {/* ================= 3. OVERHEAD SOLID TIMBER BEAMS & BLACK TRACK SPOTLIGHTS ================= */}
      {/* Heavy Rustic Ceiling Timber Beam 1 */}
      <polygon points="0,0 1360,0 1360,38 0,38" fill="url(#timberBeamGrad)" filter="url(#muralDropShadow)" />
      <line x1="0" y1="38" x2="1360" y2="38" stroke="#1c0f08" strokeWidth="2.5" />

      {/* Diagonal Architectural Cross-Rafters (like in the modern loft photo) */}
      <polygon points="260,0 340,0 220,110 140,110" fill="url(#timberBeamGrad)" opacity="0.85" />
      <polygon points="820,0 900,0 780,110 700,110" fill="url(#timberBeamGrad)" opacity="0.85" />

      {/* Modern Black Lighting Track mounted under beam */}
      <rect x="0" y="38" width="1360" height="6" fill="#18181b" />

      {/* Downward Architectural Track Spotlights */}
      {/* Spotlight 1 (Aiming Left Frame) */}
      <g id="spotlight-left" transform="translate(360, 44)">
        <rect x="-10" y="0" width="20" height="14" fill="#09090b" rx="2" />
        <ellipse cx="0" cy="14" rx="8" ry="3" fill="#fde047" />
        <polygon points="0,14 -130,520 130,520" fill="url(#spotlightCone)" />
      </g>

      {/* Spotlight 2 (Aiming Center Frame) */}
      <g id="spotlight-center" transform="translate(680, 44)">
        <rect x="-10" y="0" width="20" height="14" fill="#09090b" rx="2" />
        <ellipse cx="0" cy="14" rx="8" ry="3" fill="#fde047" />
        <polygon points="0,14 -140,520 140,520" fill="url(#spotlightCone)" />
      </g>

      {/* Spotlight 3 (Aiming Right Frame) */}
      <g id="spotlight-right" transform="translate(980, 44)">
        <rect x="-10" y="0" width="20" height="14" fill="#09090b" rx="2" />
        <ellipse cx="0" cy="14" rx="8" ry="3" fill="#fde047" />
        <polygon points="0,14 -130,520 130,520" fill="url(#spotlightCone)" />
      </g>

      {/* ================= 4. HANGING WEAPONS & WARFARE TOOLS ON WALL ================= */}
      {/* Master Katana on Wall Sword Mount (Top Center-Right) */}
      <g id="katana-sword-mount" transform="translate(480, 75)" filter="url(#weaponShadow)">
        {/* Sleek Minimalist Wall Brackets */}
        <rect x="40" y="0" width="8" height="38" fill="#18181b" rx="2" />
        <rect x="260" y="0" width="8" height="38" fill="#18181b" rx="2" />
        {/* Sword Hilt & Scabbard */}
        <line x1="8" y1="20" x2="68" y2="19" stroke="#09090b" strokeWidth="7" strokeLinecap="round" />
        <line x1="12" y1="20" x2="64" y2="19" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
        <ellipse cx="70" cy="19" rx="4" ry="10" fill="url(#goldAccents)" />
        <path d="M 74 19 Q 180 15 310 9 Q 320 8 328 6" stroke="#09090b" strokeWidth="6.5" strokeLinecap="round" fill="none" />
        <rect x="110" y="15" width="12" height="6" fill="#dc2626" rx="1" />
        <ellipse cx="328" cy="6" rx="3" ry="3.5" fill="url(#goldAccents)" />
      </g>

      {/* Hanging Tanto Knife on Peg (Left Wall) */}
      <g id="hanging-tanto" transform="translate(245, 95)" filter="url(#weaponShadow)">
        <circle cx="20" cy="0" r="5" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
        <line x1="20" y1="5" x2="20" y2="28" stroke="#dc2626" strokeWidth="2" />
        <rect x="16" y="28" width="8" height="20" fill="#18181b" rx="2" stroke="#f59e0b" strokeWidth="0.8" />
        <ellipse cx="20" cy="48" rx="8" ry="3" fill="url(#goldAccents)" />
        <path d="M 16 50 L 24 50 L 23 90 Q 22 98 20 102 Q 18 98 17 90 Z" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
      </g>

      {/* Hanging Kunai on Peg (Right Wall) */}
      <g id="hanging-kunai" transform="translate(1095, 95)" filter="url(#weaponShadow)">
        <circle cx="20" cy="0" r="5" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
        <line x1="20" y1="5" x2="20" y2="24" stroke="#dc2626" strokeWidth="2" />
        <circle cx="20" cy="30" r="5.5" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
        <line x1="20" y1="36" x2="20" y2="52" stroke="#334155" strokeWidth="3.5" />
        <polygon points="20,52 13,72 20,102 27,72" fill="url(#steelBlade)" stroke="#475569" strokeWidth="1" />
      </g>

      {/* 4-Point Steel Shuriken Embedded in Rafter */}
      <g id="shuriken-beam" transform="translate(420, 22)">
        <g transform="rotate(32)">
          <polygon
            points="0,-14 4,-4 14,-12 5,-2 14,0 5,2 14,12 4,4 0,14 -4,4 -14,12 -5,2 -14,0 -5,-2 -14,-12 -4,-4"
            fill="url(#steelBlade)"
            stroke="#09090b"
            strokeWidth="1"
          />
          <circle cx="0" cy="0" r="3" fill="#18181b" />
        </g>
      </g>

      {/* ================= 5. RUSTIC TIMBER TABLE / BENCH SHELF AT BASE ================= */}
      {/* Inspired by the solid wood communal counter in the photo */}
      <g id="timber-table-shelf" transform="translate(0, 560)" filter="url(#muralDropShadow)">
        <polygon points="120,0 1240,0 1260,28 100,28" fill="#d4a373" stroke="#8c5828" strokeWidth="1.5" />
        <polygon points="100,28 1260,28 1260,45 100,45" fill="#b07d48" />
        <line x1="100" y1="45" x2="1260" y2="45" stroke="#5c3818" strokeWidth="1" />
      </g>
    </svg>
  )
}
