/**
 * Realistic Vector Canvas of a Samurai Palace Armory Wall
 * Featuring:
 * - Authentic Japanese Castle Shoin-zukuri timber posts (Hashira) & beams (Nageshi)
 * - Decorative iron nail-covers (Kugi-kakushi)
 * - Tatami flooring border (Tatami-beri)
 * - Hanging warfare tools: Katana on Katanakake rack, hanging Tanto & Kunai knives, mounted Yari/Naginata, embedded Shuriken
 * - Great Warrior Armor (Yoroi) with Kabuto helmet, Menpo mask, Do cuirass, and Sashimono banner
 * - Palace Andon lantern illumination
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
        {/* Wood Texture & Gradients */}
        <linearGradient id="wallPlankGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2c1a11" />
          <stop offset="50%" stopColor="#23140c" />
          <stop offset="100%" stopColor="#190e08" />
        </linearGradient>

        <linearGradient id="beamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#452718" />
          <stop offset="40%" stopColor="#2d190e" />
          <stop offset="100%" stopColor="#170c06" />
        </linearGradient>

        <linearGradient id="pillarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e1008" />
          <stop offset="30%" stopColor="#3c2214" />
          <stop offset="80%" stopColor="#29160c" />
          <stop offset="100%" stopColor="#170b05" />
        </linearGradient>

        <linearGradient id="goldAccents" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        <linearGradient id="steelBlade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        <linearGradient id="lacquerBlack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#27272a" />
          <stop offset="50%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#09090b" />
        </linearGradient>

        {/* Soft Drop Shadows */}
        <filter id="wallShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.65" />
        </filter>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ================= 1. CEDAR WOOD WALL BACKGROUND ================= */}
      <rect x="0" y="0" width="1360" height="620" fill="url(#wallPlankGrad)" />

      {/* Vertical Wood Slat Lines */}
      {Array.from({ length: 28 }).map((_, i) => (
        <line
          key={`slat-${i}`}
          x1={i * 50}
          y1="0"
          x2={i * 50}
          y2="580"
          stroke="#160c07"
          strokeWidth="1.5"
          opacity="0.8"
        />
      ))}

      {/* ================= 2. ARCHITECTURAL PILLARS (HASHIRA) ================= */}
      {/* Left Outer Pillar */}
      <rect x="0" y="0" width="44" height="580" fill="url(#pillarGrad)" />
      <line x1="44" y1="0" x2="44" y2="580" stroke="#0f0703" strokeWidth="2" />

      {/* Left-Center Dividing Pillar */}
      <rect x="360" y="0" width="36" height="580" fill="url(#pillarGrad)" />
      <line x1="360" y1="0" x2="360" y2="580" stroke="#0f0703" strokeWidth="1" />
      <line x1="396" y1="0" x2="396" y2="580" stroke="#0f0703" strokeWidth="1" />

      {/* Right-Center Dividing Pillar */}
      <rect x="960" y="0" width="36" height="580" fill="url(#pillarGrad)" />
      <line x1="960" y1="0" x2="960" y2="580" stroke="#0f0703" strokeWidth="1" />
      <line x1="996" y1="0" x2="996" y2="580" stroke="#0f0703" strokeWidth="1" />

      {/* Right Outer Pillar */}
      <rect x="1316" y="0" width="44" height="580" fill="url(#pillarGrad)" />
      <line x1="1316" y1="0" x2="1316" y2="580" stroke="#0f0703" strokeWidth="2" />

      {/* ================= 3. UPPER HORIZONTAL BEAM (NAGESHI) ================= */}
      <rect x="0" y="32" width="1360" height="34" fill="url(#beamGrad)" filter="url(#wallShadow)" />
      <line x1="0" y1="32" x2="1360" y2="32" stroke="#5c351f" strokeWidth="1.5" />
      <line x1="0" y1="66" x2="1360" y2="66" stroke="#120904" strokeWidth="2" />

      {/* Decorative Bronze/Iron Nail Covers (Kugi-kakushi) on the beam */}
      {[22, 195, 378, 660, 978, 1145, 1338].map((xPos, idx) => (
        <g key={`kugi-${idx}`} transform={`translate(${xPos}, 49)`}>
          <circle cx="0" cy="0" r="9" fill="#18181b" stroke="#d97706" strokeWidth="1.5" />
          {/* 4-petaled bronze mon flower */}
          <circle cx="-3" cy="0" r="3" fill="#f59e0b" />
          <circle cx="3" cy="0" r="3" fill="#f59e0b" />
          <circle cx="0" cy="-3" r="3" fill="#f59e0b" />
          <circle cx="0" cy="3" r="3" fill="#f59e0b" />
          <circle cx="0" cy="0" r="2" fill="#78350f" />
        </g>
      ))}

      {/* ================= 4. HANGING WEAPONS & WARFARE TOOLS ================= */}

      {/* A) UPPER MOUNTED WAR NAGINATA & YARI POLEARM */}
      <g id="mounted-naginata" filter="url(#wallShadow)">
        {/* Wall mounting hooks */}
        <path d="M 440 22 L 440 40 L 448 40 L 448 22" fill="#18181b" stroke="#b45309" strokeWidth="1" />
        <path d="M 880 22 L 880 40 L 888 40 L 888 22" fill="#18181b" stroke="#b45309" strokeWidth="1" />
        {/* Dark lacquered wood shaft */}
        <line x1="390" y1="26" x2="930" y2="26" stroke="#2d160c" strokeWidth="5.5" strokeLinecap="round" />
        {/* Gold collars */}
        <rect x="470" y="23" width="7" height="6" fill="url(#goldAccents)" />
        <rect x="710" y="23" width="7" height="6" fill="url(#goldAccents)" />
        <rect x="850" y="22" width="10" height="8" fill="url(#goldAccents)" rx="1" />
        {/* Curved Naginata Steel Blade */}
        <path
          d="M 860 26 Q 890 25 940 18 Q 960 14 970 12 Q 950 26 900 29 L 860 28 Z"
          fill="url(#steelBlade)"
          stroke="#64748b"
          strokeWidth="1"
        />
        {/* Red Silk Tassel */}
        <path d="M 713 29 Q 711 38 713 46" stroke="#dc2626" strokeWidth="2.5" fill="none" />
        <circle cx="713" cy="46" r="3" fill="#ef4444" />
      </g>

      {/* B) TWO-TIER KATANA SWORD RACK (KATANAKAKE) ON THE WALL */}
      <g id="katana-wall-mount" transform="translate(68, 120)" filter="url(#wallShadow)">
        {/* Lacquered wooden wall rack frame */}
        <rect x="30" y="0" width="10" height="70" fill="url(#lacquerBlack)" stroke="#57331f" strokeWidth="1" rx="2" />
        <rect x="230" y="0" width="10" height="70" fill="url(#lacquerBlack)" stroke="#57331f" strokeWidth="1" rx="2" />
        {/* Sword cradle notches */}
        <path d="M 26 22 Q 35 28 44 22" fill="#18181b" stroke="#78350f" strokeWidth="1" />
        <path d="M 226 22 Q 235 28 244 22" fill="#18181b" stroke="#78350f" strokeWidth="1" />

        {/* Master Katana Sword */}
        {/* Hilt (Tsuka) with gold wrap & pommel */}
        <line x1="8" y1="21" x2="68" y2="19" stroke="#09090b" strokeWidth="8" strokeLinecap="round" />
        <line x1="12" y1="21" x2="64" y2="19" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="6" cy="21" r="4.5" fill="url(#goldAccents)" />
        {/* Round Guard (Tsuba) */}
        <ellipse cx="70" cy="19" rx="4.5" ry="12" fill="url(#goldAccents)" stroke="#78350f" strokeWidth="1.2" />
        {/* Sleek Curved Scabbard (Saya) */}
        <path
          d="M 74 19 Q 160 15 285 9 Q 295 8 302 6"
          stroke="url(#lacquerBlack)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* Crimson Sageo Silk Cord Tie */}
        <rect x="105" y="14" width="14" height="7" rx="2" fill="#dc2626" />
        <line x1="109" y1="14" x2="109" y2="21" stroke="#fef08a" strokeWidth="1" />
        {/* Gold kojiri tip */}
        <ellipse cx="302" cy="6" rx="3.5" ry="3.8" fill="url(#goldAccents)" />
      </g>

      {/* C) HANGING TANTO KNIFE & STEEL KUNAI FROM WALL PEGS */}
      <g id="hanging-knives" transform="translate(90, 225)" filter="url(#wallShadow)">
        {/* Peg 1 - Tanto */}
        <circle cx="40" cy="0" r="5" fill="#78350f" stroke="#b45309" strokeWidth="1" />
        <line x1="40" y1="5" x2="40" y2="22" stroke="#dc2626" strokeWidth="2" />
        {/* Tanto knife in sheath hanging vertically */}
        <rect x="36" y="22" width="8" height="24" rx="2" fill="#18181b" stroke="#f59e0b" strokeWidth="1" />
        <ellipse cx="40" cy="46" rx="8" ry="3" fill="url(#goldAccents)" />
        <path d="M 36 48 L 44 48 L 43 96 Q 42 108 40 112 Q 38 108 37 96 Z" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        <rect x="37" y="52" width="6" height="3" fill="#f59e0b" />

        {/* Peg 2 - Kunai */}
        <circle cx="100" cy="0" r="5" fill="#78350f" stroke="#b45309" strokeWidth="1" />
        <line x1="100" y1="5" x2="100" y2="18" stroke="#dc2626" strokeWidth="2" />
        {/* Kunai hanging */}
        <circle cx="100" cy="24" r="6" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
        <line x1="100" y1="30" x2="100" y2="52" stroke="#334155" strokeWidth="4" />
        <polygon points="100,52 92,74 100,108 108,74" fill="url(#steelBlade)" stroke="#475569" strokeWidth="1.2" />
      </g>

      {/* D) 4-POINT STEEL SHURIKEN EMBEDDED IN TIMBER BEAM */}
      <g id="embedded-shuriken" transform="translate(325, 49)" filter="url(#wallShadow)">
        {/* Wood cracks */}
        <line x1="0" y1="0" x2="8" y2="6" stroke="#120803" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="-6" y2="8" stroke="#120803" strokeWidth="1.5" />
        {/* Rotated Star */}
        <g transform="rotate(25)">
          <polygon
            points="0,-16 4,-5 16,-14 5,-3 16,0 5,3 16,14 4,5 0,16 -4,5 -16,14 -5,3 -16,0 -5,-3 -16,-14 -4,-5"
            fill="url(#steelBlade)"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <circle cx="0" cy="0" r="3.5" fill="#09090b" stroke="#f59e0b" strokeWidth="0.8" />
        </g>
      </g>

      {/* ================= 5. GREAT WARRIOR SAMURAI ARMOR STAND ================= */}
      {/* Standing on the right side of the wall on its lacquered chest */}
      <g id="great-warrior-armor" transform="translate(1015, 115)" filter="url(#wallShadow)">
        {/* Ceremonial Sashimono War Banner behind armor */}
        <line x1="210" y1="-20" x2="210" y2="380" stroke="#3e2316" strokeWidth="4" />
        <rect x="212" y="0" width="36" height="150" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
        <text x="230" y="48" fontSize="24" fill="#ffffff" fontFamily="serif" textAnchor="middle" fontWeight="bold">
          義
        </text>
        <text x="230" y="78" fontSize="20" fill="#ffffff" fontFamily="serif" textAnchor="middle">
          勇
        </text>

        {/* Lacquered Armor Chest Box (Gusoku-bitsu) Base */}
        <rect x="35" y="360" width="170" height="95" fill="url(#lacquerBlack)" stroke="#452718" strokeWidth="2.5" rx="3" />
        {/* Gold Corner and Latch Hardware on chest */}
        <rect x="35" y="360" width="18" height="18" fill="url(#goldAccents)" />
        <rect x="187" y="360" width="18" height="18" fill="url(#goldAccents)" />
        <circle cx="120" cy="405" r="14" fill="#1c1917" stroke="url(#goldAccents)" strokeWidth="2" />
        <text x="120" y="411" fontSize="13" fill="#fef08a" textAnchor="middle" fontWeight="bold">
          前
        </text>

        {/* Armor Wooden Display Stand Frame */}
        <rect x="114" y="240" width="12" height="125" fill="#3e2316" />
        <line x1="75" y1="280" x2="165" y2="280" stroke="#3e2316" strokeWidth="6" strokeLinecap="round" />

        {/* KABUTO (Samurai Helmet) */}
        {/* Crescent Moon Maedate (Golden Crest) */}
        <path
          d="M 75 75 C 102 38 138 38 165 75 C 148 58 92 58 75 75 Z"
          fill="url(#goldAccents)"
          stroke="#78350f"
          strokeWidth="1.5"
        />
        {/* Helmet Bowl (Hachi) */}
        <path
          d="M 86 92 C 86 64 154 64 154 92 C 154 112 86 112 86 92 Z"
          fill="url(#lacquerBlack)"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <circle cx="120" cy="82" r="6" fill="url(#goldAccents)" stroke="#78350f" strokeWidth="1" />
        <circle cx="120" cy="82" r="2.5" fill="#dc2626" />

        {/* Shikoro (Tiered Neck Guard with crimson cords) */}
        <path d="M 78 104 Q 120 114 162 104 L 166 114 Q 120 125 74 114 Z" fill="#27272a" stroke="#b91c1c" strokeWidth="1" />
        <path d="M 74 115 Q 120 127 166 115 L 170 126 Q 120 138 70 126 Z" fill="#18181b" stroke="#ef4444" strokeWidth="1" />

        {/* MENPO (Fierce Warrior Iron Mask) */}
        <path
          d="M 102 106 L 138 106 L 134 130 C 130 142 110 142 106 130 Z"
          fill="#1c1917"
          stroke="#991b1b"
          strokeWidth="1.5"
        />
        {/* Silver warrior moustache & mouth */}
        <line x1="108" y1="116" x2="132" y2="116" stroke="#d4d4d8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 112 122 Q 120 126 128 122" stroke="#dc2626" strokeWidth="1.2" fill="none" />

        {/* O-SODE (SHOULDER GUARDS) */}
        {/* Left Sode */}
        <rect x="48" y="135" width="34" height="14" rx="2" fill="url(#lacquerBlack)" stroke="#d97706" strokeWidth="1" />
        <rect x="46" y="150" width="36" height="13" rx="2" fill="#27272a" stroke="#dc2626" strokeWidth="1" />
        <rect x="44" y="164" width="38" height="13" rx="2" fill="#18181b" stroke="#b45309" strokeWidth="1" />
        <line x1="54" y1="135" x2="54" y2="177" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="72" y1="135" x2="72" y2="177" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* Right Sode */}
        <rect x="158" y="135" width="34" height="14" rx="2" fill="url(#lacquerBlack)" stroke="#d97706" strokeWidth="1" />
        <rect x="158" y="150" width="36" height="13" rx="2" fill="#27272a" stroke="#dc2626" strokeWidth="1" />
        <rect x="158" y="164" width="38" height="13" rx="2" fill="#18181b" stroke="#b45309" strokeWidth="1" />
        <line x1="168" y1="135" x2="168" y2="177" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="184" y1="135" x2="184" y2="177" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* DO (CHEST CUIRASS) */}
        <path
          d="M 90 138 L 150 138 L 156 210 L 84 210 Z"
          fill="url(#lacquerBlack)"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        {/* Mon Crest Medallion */}
        <circle cx="120" cy="168" r="14" fill="#09090b" stroke="url(#goldAccents)" strokeWidth="1.8" />
        <polygon
          points="120,158 123,165 130,165 125,170 127,177 120,173 113,177 115,170 110,165 117,165"
          fill="url(#goldAccents)"
        />
        {/* Crimson Belt & Cord */}
        <rect x="83" y="210" width="74" height="10" fill="#dc2626" rx="2" />
        <circle cx="120" cy="215" r="4" fill="url(#goldAccents)" />

        {/* Kusazuri (Tasset skirt plates) */}
        <path d="M 82 222 L 98 222 L 96 265 L 80 265 Z" fill="#27272a" stroke="#b91c1c" strokeWidth="1" />
        <path d="M 101 222 L 118 222 L 118 270 L 101 270 Z" fill="#18181b" stroke="#f59e0b" strokeWidth="1" />
        <path d="M 122 222 L 139 222 L 139 270 L 122 270 Z" fill="#18181b" stroke="#f59e0b" strokeWidth="1" />
        <path d="M 142 222 L 158 222 L 160 265 L 144 265 Z" fill="#27272a" stroke="#b91c1c" strokeWidth="1" />
      </g>

      {/* ================= 6. HANGING PALACE ANDON LANTERN ================= */}
      <g id="palace-andon-lantern" transform="translate(62, 38)" filter="url(#softGlow)">
        <line x1="18" y1="0" x2="18" y2="40" stroke="#b45309" strokeWidth="2" />
        <rect x="0" y="40" width="36" height="52" fill="rgba(254, 240, 138, 0.25)" stroke="#78350f" strokeWidth="2" rx="3" />
        <circle cx="18" cy="66" r="14" fill="rgba(245, 158, 11, 0.45)" filter="url(#softGlow)" />
        <circle cx="18" cy="66" r="6" fill="#fef08a" />
        {/* Tassel */}
        <line x1="18" y1="92" x2="18" y2="108" stroke="#dc2626" strokeWidth="3" />
      </g>

      {/* ================= 7. BASEBOARD & TATAMI RIM AT FLOOR ================= */}
      {/* Dark lacquered wood baseboard */}
      <rect x="0" y="575" width="1360" height="15" fill="#1b0e07" stroke="#3c1f10" strokeWidth="1" />
      {/* Tatami Mat Border (Tatami-beri) */}
      <rect x="0" y="590" width="1360" height="30" fill="#2d3d21" />
      <line x1="0" y1="590" x2="1360" y2="590" stroke="#485f36" strokeWidth="2" />
      {/* Gold & black diamond weave pattern */}
      {Array.from({ length: 45 }).map((_, i) => (
        <polygon
          key={`tatami-${i}`}
          points={`${i * 30},605 ${i * 30 + 15},595 ${i * 30 + 30},605 ${i * 30 + 15},615`}
          fill="#1c2615"
          stroke="#73895a"
          strokeWidth="1"
          opacity="0.6"
        />
      ))}
    </svg>
  )
}
