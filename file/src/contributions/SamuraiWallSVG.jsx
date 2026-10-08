/**
 * High-Style Modern Samurai Palace Armory Wall Vector Canvas
 * Features:
 * - Distressed stone/concrete gallery wall with subtle masonry and paper grain
 * - Overhead rustic cedar timber beams with architectural black track spotlights
 * - Interactive downward spotlight illumination cones tied to hovered frame
 * - Dynamic Sumi-e black ink samurai warrior murals on left & right flanks
 * - Hanging warfare tools: Katana on rack, Tanto daggers, Kunai knives, embedded Shuriken
 * - Rustic solid timber shelf/table in foreground
 */

export default function SamuraiWallSVG({ activeSpotlight }) {
  return (
    <svg
      className="samurai-wall-svg"
      viewBox="0 0 1440 680"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Stone / Concrete Wall Gradients */}
        <linearGradient id="concreteWallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#cfc9bf" />
          <stop offset="35%" stopColor="#beb7ac" />
          <stop offset="70%" stopColor="#a7a094" />
          <stop offset="100%" stopColor="#7a7367" />
        </linearGradient>

        <linearGradient id="timberBeamGrad" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#452718" />
          <stop offset="30%" stopColor="#2c180e" />
          <stop offset="70%" stopColor="#54301d" />
          <stop offset="100%" stopColor="#1a0e07" />
        </linearGradient>

        <linearGradient id="tableWoodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d8ab79" />
          <stop offset="40%" stopColor="#c8965f" />
          <stop offset="80%" stopColor="#a3703c" />
          <stop offset="100%" stopColor="#6e451e" />
        </linearGradient>

        {/* Spotlights */}
        <linearGradient id="spotlightNormal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="35%" stopColor="#fef08a" stopOpacity="0.22" />
          <stop offset="75%" stopColor="#fde047" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="spotlightIntense" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="30%" stopColor="#fef08a" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#fde047" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="steelBlade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="45%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>

        <linearGradient id="goldAccents" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Filters */}
        <filter id="muralShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.4" />
        </filter>
        <filter id="weaponGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* ================= 1. DISTRESSED STONE CONCRETE WALL ================= */}
      <rect x="0" y="0" width="1440" height="680" fill="url(#concreteWallGrad)" />

      {/* Masonry Texture & Subtle Concrete Seams */}
      <g opacity="0.32">
        <line x1="0" y1="210" x2="1440" y2="210" stroke="#44403c" strokeWidth="0.8" strokeDasharray="16 20" />
        <line x1="0" y1="470" x2="1440" y2="470" stroke="#44403c" strokeWidth="0.8" strokeDasharray="20 24" />
        <line x1="360" y1="0" x2="360" y2="680" stroke="#44403c" strokeWidth="0.6" strokeDasharray="12 16" />
        <line x1="1080" y1="0" x2="1080" y2="680" stroke="#44403c" strokeWidth="0.6" strokeDasharray="12 16" />

        {/* Subtle Stains & Weathering Splatters */}
        <circle cx="180" cy="140" r="2" fill="#292524" />
        <circle cx="290" cy="380" r="1.5" fill="#292524" />
        <circle cx="510" cy="270" r="2.5" fill="#292524" />
        <circle cx="940" cy="180" r="2" fill="#292524" />
        <circle cx="1220" cy="310" r="1.8" fill="#292524" />
      </g>

      {/* ================= 2. SUMI-E INK SAMURAI WARRIORS (LEFT & RIGHT FLANKS) ================= */}
      {/* LEFT FLANK: Horned Kabuto Great Warrior with Katana (x: 40 - 320) */}
      <g id="left-warrior-mural" transform="translate(45, 45)" filter="url(#muralShadow)" opacity="0.92">
        {/* Kanji Calligraphy on wall */}
        <text x="210" y="110" fontSize="32" fill="#18181b" opacity="0.45" fontFamily="serif" fontWeight="bold">
          武士道
        </text>
        <text x="210" y="150" fontSize="11" fill="#44403c" opacity="0.5" fontFamily="monospace" letterSpacing="2">
          BUSHIDO
        </text>

        {/* Antler Horns (Kuwagata / Deer Antlers) */}
        <path d="M 90 75 Q 65 25 40 10 Q 55 35 80 82 Z" fill="#09090b" />
        <path d="M 130 75 Q 155 25 180 10 Q 165 35 140 82 Z" fill="#09090b" />
        {/* Central Golden Crest Medallion */}
        <circle cx="110" cy="78" r="9" fill="url(#goldAccents)" stroke="#09090b" strokeWidth="1.5" />
        <polygon points="110,70 113,76 119,76 115,81 117,87 110,84 103,87 105,81 101,76 107,76" fill="#78350f" />

        {/* Menpo Warrior Mask */}
        <path d="M 92 88 L 128 88 L 124 116 Q 110 125 96 116 Z" fill="#09090b" />
        <line x1="98" y1="102" x2="122" y2="102" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />

        {/* Tiered Neckguard (Shikoro) */}
        <path d="M 75 98 Q 110 112 145 98 L 150 116 Q 110 130 70 116 Z" fill="#18181b" />
        <path d="M 68 117 Q 110 132 152 117 L 156 134 Q 110 148 64 134 Z" fill="#09090b" />

        {/* Left Shoulder Guard (O-Sode) */}
        <path d="M 45 125 L 82 125 L 76 195 L 38 195 Z" fill="#09090b" />
        <line x1="48" y1="140" x2="80" y2="140" stroke="#ffffff" strokeWidth="1.8" strokeDasharray="3 3" />
        <line x1="46" y1="156" x2="78" y2="156" stroke="#ffffff" strokeWidth="1.8" strokeDasharray="3 3" />
        <line x1="44" y1="172" x2="76" y2="172" stroke="#ffffff" strokeWidth="1.8" strokeDasharray="3 3" />

        {/* Right Shoulder Guard */}
        <path d="M 138 125 L 175 125 L 182 195 L 144 195 Z" fill="#09090b" />
        <line x1="140" y1="140" x2="172" y2="140" stroke="#ffffff" strokeWidth="1.8" strokeDasharray="3 3" />
        <line x1="142" y1="156" x2="174" y2="156" stroke="#ffffff" strokeWidth="1.8" strokeDasharray="3 3" />
        <line x1="144" y1="172" x2="176" y2="172" stroke="#ffffff" strokeWidth="1.8" strokeDasharray="3 3" />

        {/* Dō Cuirass with Laced Scales */}
        <path d="M 82 125 L 138 125 L 145 255 L 75 255 Z" fill="#18181b" />
        <circle cx="110" cy="165" r="18" fill="#09090b" stroke="#ffffff" strokeWidth="2" />
        <text x="110" y="172" fontSize="16" fill="#fef08a" textAnchor="middle" fontWeight="bold">
          義
        </text>
        <line x1="84" y1="195" x2="136" y2="195" stroke="#ffffff" strokeWidth="2" />
        <line x1="82" y1="212" x2="138" y2="212" stroke="#ffffff" strokeWidth="2" />
        <line x1="80" y1="229" x2="140" y2="229" stroke="#ffffff" strokeWidth="2" />

        {/* Drawn Katana in Two Hands */}
        <line x1="60" y1="230" x2="250" y2="210" stroke="#09090b" strokeWidth="9" strokeLinecap="round" />
        <line x1="110" y1="225" x2="250" y2="210" stroke="url(#steelBlade)" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="108" cy="225" rx="5" ry="12" fill="url(#goldAccents)" />

        {/* Armored Skirt & Lower Greaves */}
        <path d="M 72 260 L 102 260 L 98 370 L 68 370 Z" fill="#09090b" />
        <path d="M 118 260 L 148 260 L 152 370 L 122 370 Z" fill="#09090b" />
      </g>

      {/* RIGHT FLANK: Samurai Commander with Naginata & Enso Arc (x: 1120 - 1420) */}
      <g id="right-warrior-mural" transform="translate(1130, 40)" filter="url(#muralShadow)" opacity="0.92">
        {/* Dynamic Enso Ink Brush Circle */}
        <path
          d="M 60 40 C 140 10 200 90 180 180 C 160 260 60 280 -20 220 C -90 160 -80 60 10 10"
          stroke="#18181b"
          strokeWidth="22"
          strokeLinecap="round"
          strokeDasharray="500 30"
          opacity="0.3"
          fill="none"
        />
        <circle cx="160" cy="60" r="4.5" fill="#18181b" opacity="0.5" />
        <circle cx="190" cy="120" r="3" fill="#18181b" opacity="0.4" />
        <circle cx="-50" cy="190" r="4" fill="#18181b" opacity="0.35" />

        {/* Kanji on Wall */}
        <text x="-40" y="90" fontSize="30" fill="#18181b" opacity="0.45" fontFamily="serif" fontWeight="bold">
          不退転
        </text>
        <text x="-40" y="125" fontSize="10" fill="#44403c" opacity="0.5" fontFamily="monospace" letterSpacing="2">
          RESOLVE
        </text>

        {/* Raised War Naginata Spear */}
        <line x1="-15" y1="20" x2="-15" y2="480" stroke="#18181b" strokeWidth="6" strokeLinecap="round" />
        <path d="M -15 20 Q -12 -30 2 -60 Q -18 -35 -18 20 Z" fill="url(#steelBlade)" stroke="#09090b" strokeWidth="1" />
        <rect x="-19" y="15" width="8" height="10" fill="url(#goldAccents)" rx="1" />
        <path d="M -15 30 Q -24 45 -22 65" stroke="#dc2626" strokeWidth="2.5" fill="none" />
        <circle cx="-22" cy="65" r="3" fill="#ef4444" />

        {/* Commander Kabuto with Crescent Moon Maedate */}
        <path d="M 65 65 C 80 35 120 35 135 65 C 120 48 80 48 65 65 Z" fill="url(#goldAccents)" stroke="#78350f" strokeWidth="1.5" />
        <path d="M 74 75 C 74 54 126 54 126 75 C 126 94 74 94 74 75 Z" fill="#09090b" />
        <circle cx="100" cy="65" r="5" fill="#dc2626" />

        {/* Menpo Warrior Face Mask */}
        <path d="M 85 86 L 115 86 L 110 108 Q 100 115 90 108 Z" fill="#1c1917" />

        {/* Flowing War Cloak / Jinbaori */}
        <path d="M 50 105 Q 100 98 150 105 L 175 300 Q 100 310 25 300 Z" fill="#18181b" />
        <path d="M 70 115 L 130 115 L 136 245 L 64 245 Z" fill="#09090b" />

        {/* Commander Stance Legs & Greaves */}
        <path d="M 55 300 L 78 300 L 74 440 L 48 440 Z" fill="#09090b" />
        <path d="M 122 300 L 145 300 L 150 440 L 128 440 Z" fill="#09090b" />
      </g>

      {/* ================= 3. OVERHEAD TIMBER RAFTERS & TRACK SPOTLIGHTS ================= */}
      {/* Ceiling Timber Header Beam */}
      <polygon points="0,0 1440,0 1440,42 0,42" fill="url(#timberBeamGrad)" filter="url(#muralShadow)" />
      <line x1="0" y1="42" x2="1440" y2="42" stroke="#1c0f08" strokeWidth="2.5" />

      {/* Heavy Diagonal Ceiling Beams (Loft Architecture) */}
      <polygon points="280,0 365,0 230,120 145,120" fill="url(#timberBeamGrad)" opacity="0.88" />
      <polygon points="860,0 945,0 810,120 725,120" fill="url(#timberBeamGrad)" opacity="0.88" />

      {/* Black Architectural Lighting Track Rail */}
      <rect x="0" y="42" width="1440" height="7" fill="#18181b" />

      {/* Track Spotlights with Cones pointing at the 3 Photo Frames */}
      {/* Spotlight 1 (Left Frame: NVIDIA) */}
      <g id="spotlight-left-group" transform="translate(490, 49)">
        <rect x="-12" y="0" width="24" height="15" fill="#09090b" rx="2" />
        <ellipse cx="0" cy="15" rx="9" ry="3" fill="#fde047" />
        <polygon
          points="0,15 -140,560 140,560"
          fill={activeSpotlight === 'nvidia' ? 'url(#spotlightIntense)' : 'url(#spotlightNormal)'}
        />
      </g>

      {/* Spotlight 2 (Center Frame: Master Overview) */}
      <g id="spotlight-center-group" transform="translate(720, 49)">
        <rect x="-12" y="0" width="24" height="15" fill="#09090b" rx="2" />
        <ellipse cx="0" cy="15" rx="9" ry="3" fill="#fde047" />
        <polygon
          points="0,15 -150,560 150,560"
          fill={activeSpotlight === 'overview' ? 'url(#spotlightIntense)' : 'url(#spotlightNormal)'}
        />
      </g>

      {/* Spotlight 3 (Right Frame: Uber) */}
      <g id="spotlight-right-group" transform="translate(950, 49)">
        <rect x="-12" y="0" width="24" height="15" fill="#09090b" rx="2" />
        <ellipse cx="0" cy="15" rx="9" ry="3" fill="#fde047" />
        <polygon
          points="0,15 -140,560 140,560"
          fill={activeSpotlight === 'uber' ? 'url(#spotlightIntense)' : 'url(#spotlightNormal)'}
        />
      </g>

      {/* ================= 4. HANGING WEAPONS ON CENTER WALL ================= */}
      {/* A) Katana on Wall Sword Mount (Upper Center Wall) */}
      <g id="katana-sword-rack" transform="translate(540, 78)" filter="url(#weaponGlow)">
        {/* Sword Rack Brackets */}
        <rect x="40" y="0" width="8" height="42" fill="#18181b" rx="2" />
        <rect x="280" y="0" width="8" height="42" fill="#18181b" rx="2" />
        {/* Sword Tsuka (Grip) */}
        <line x1="10" y1="22" x2="72" y2="21" stroke="#09090b" strokeWidth="8" strokeLinecap="round" />
        <line x1="14" y1="22" x2="68" y2="21" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 3" />
        <ellipse cx="74" cy="21" rx="4.5" ry="11" fill="url(#goldAccents)" />
        {/* Curved Saya Scabbard */}
        <path d="M 78 21 Q 190 17 325 11 Q 335 10 344 8" stroke="#09090b" strokeWidth="7" strokeLinecap="round" fill="none" />
        <rect x="115" y="16" width="14" height="7" fill="#dc2626" rx="1" />
        <ellipse cx="344" cy="8" rx="3.5" ry="4" fill="url(#goldAccents)" />
      </g>

      {/* B) Hanging Tanto Dagger on Peg (Left of Center) */}
      <g id="hanging-tanto-knife" transform="translate(385, 95)" filter="url(#weaponGlow)">
        <circle cx="20" cy="0" r="5" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
        <line x1="20" y1="5" x2="20" y2="30" stroke="#dc2626" strokeWidth="2" />
        <rect x="16" y="30" width="8" height="22" fill="#18181b" rx="2" stroke="#f59e0b" strokeWidth="0.8" />
        <ellipse cx="20" cy="52" rx="8" ry="3" fill="url(#goldAccents)" />
        <path d="M 16 54 L 24 54 L 23 98 Q 22 108 20 112 Q 18 108 17 98 Z" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
      </g>

      {/* C) Hanging Kunai on Peg (Right of Center) */}
      <g id="hanging-kunai-knife" transform="translate(1040, 95)" filter="url(#weaponGlow)">
        <circle cx="20" cy="0" r="5" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
        <line x1="20" y1="5" x2="20" y2="26" stroke="#dc2626" strokeWidth="2" />
        <circle cx="20" cy="32" r="6" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
        <line x1="20" y1="38" x2="20" y2="56" stroke="#334155" strokeWidth="3.5" />
        <polygon points="20,56 12,78 20,112 28,78" fill="url(#steelBlade)" stroke="#475569" strokeWidth="1" />
      </g>

      {/* D) 4-Point Steel Shuriken Embedded into Upper Beam */}
      <g id="embedded-shuriken-star" transform="translate(460, 24)">
        <g transform="rotate(28)">
          <polygon
            points="0,-15 4,-5 15,-13 5,-2 15,0 5,2 15,13 4,5 0,15 -4,5 -15,13 -5,2 -15,0 -5,-2 -15,-13 -4,-5"
            fill="url(#steelBlade)"
            stroke="#09090b"
            strokeWidth="1"
          />
          <circle cx="0" cy="0" r="3" fill="#18181b" />
        </g>
      </g>

      {/* ================= 5. RUSTIC SOLID TIMBER BENCH TABLE (FOREGROUND) ================= */}
      {/* Solid wooden table in foreground matching reference image */}
      <g id="rustic-communal-table" transform="translate(0, 605)" filter="url(#muralShadow)">
        <polygon points="80,0 1360,0 1380,32 60,32" fill="url(#tableWoodGrad)" stroke="#6e451e" strokeWidth="1.5" />
        <polygon points="60,32 1380,32 1380,55 60,55" fill="#8c5828" />
        <line x1="60" y1="55" x2="1380" y2="55" stroke="#4a2a10" strokeWidth="1.5" />
      </g>
    </svg>
  )
}
