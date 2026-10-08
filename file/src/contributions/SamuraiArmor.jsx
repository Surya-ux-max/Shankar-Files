import { useState } from 'react'
import { SAMURAI_ARMOR_LORE } from './contributionsData'

export default function SamuraiArmor({ onInspect }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`samurai-armor-stand ${isHovered ? 'armor-stand-active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onInspect && onInspect(SAMURAI_ARMOR_LORE)}
      role="button"
      tabIndex={0}
      aria-label="Samurai Warrior Armor Stand - Click to inspect lore"
    >
      {/* Armor Crest Banner (Sashimono) behind armor */}
      <div className="sashimono-banner">
        <div className="banner-pole" />
        <div className="banner-cloth">
          <span className="banner-kanji">義</span>
          <span className="banner-subtext">HONOR</span>
        </div>
      </div>

      {/* Ornate Armor Illustration (SVG) */}
      <svg
        className="armor-svg"
        viewBox="0 0 240 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Lacquered Gold & Crimson Gradients */}
          <linearGradient id="goldCrestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="45%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="steelBladeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="lacquerArmorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1f1d1d" />
            <stop offset="50%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
          <linearGradient id="crimsonCordGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
          <filter id="armorShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Armor Stand Wooden Frame Base */}
        <path d="M70 295 L170 295 L160 310 L80 310 Z" fill="#2d1c13" stroke="#452718" strokeWidth="2" />
        <rect x="114" y="160" width="12" height="135" fill="#3e2316" />
        <line x1="85" y1="210" x2="155" y2="210" stroke="#3e2316" strokeWidth="5" strokeLinecap="round" />

        {/* ===== KABUTO (HELMET) ===== */}
        <g id="kabuto-group" filter="url(#armorShadow)">
          {/* Crescent Moon Golden Crest (Maedate) */}
          <path
            d="M80 50 C105 20, 135 20, 160 50 C145 35, 95 35, 80 50 Z"
            fill="url(#goldCrestGrad)"
            stroke="#78350f"
            strokeWidth="1.5"
          />
          {/* Helmet Bowl (Hachi) */}
          <path
            d="M88 64 C88 40, 152 40, 152 64 C152 82, 88 82, 88 64 Z"
            fill="url(#lacquerArmorGrad)"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          {/* Central Crest Medallion */}
          <circle cx="120" cy="56" r="6" fill="url(#goldCrestGrad)" stroke="#78350f" strokeWidth="1" />
          <circle cx="120" cy="56" r="2.5" fill="#dc2626" />

          {/* Neck Guard (Shikoro) tiered plates with crimson lacing */}
          <path d="M80 75 Q120 85 160 75 L164 85 Q120 95 76 85 Z" fill="#27272a" stroke="#b91c1c" strokeWidth="1" />
          <path d="M76 86 Q120 98 164 86 L168 97 Q120 109 72 97 Z" fill="#18181b" stroke="#ef4444" strokeWidth="1" />

          {/* MENPO (Fierce Warrior Face Mask) */}
          <path
            d="M102 78 L138 78 L134 100 C130 112, 110 112, 106 100 Z"
            fill="#1c1917"
            stroke="#991b1b"
            strokeWidth="1.5"
          />
          {/* Menpo moustache & fierce teeth */}
          <line x1="108" y1="88" x2="132" y2="88" stroke="#d4d4d8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M112 94 Q120 98 128 94" stroke="#e11d48" strokeWidth="1.2" fill="none" />
        </g>

        {/* ===== O-SODE (SHOULDER GUARDS) ===== */}
        <g id="sode-left" filter="url(#armorShadow)">
          <rect x="52" y="105" width="34" height="14" rx="2" fill="url(#lacquerArmorGrad)" stroke="#d97706" strokeWidth="1" />
          <rect x="50" y="120" width="36" height="13" rx="2" fill="#27272a" stroke="#dc2626" strokeWidth="1" />
          <rect x="48" y="134" width="38" height="13" rx="2" fill="#18181b" stroke="#b45309" strokeWidth="1" />
          {/* Lacing cords */}
          <line x1="58" y1="105" x2="58" y2="147" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="78" y1="105" x2="78" y2="147" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
        </g>

        <g id="sode-right" filter="url(#armorShadow)">
          <rect x="154" y="105" width="34" height="14" rx="2" fill="url(#lacquerArmorGrad)" stroke="#d97706" strokeWidth="1" />
          <rect x="154" y="120" width="36" height="13" rx="2" fill="#27272a" stroke="#dc2626" strokeWidth="1" />
          <rect x="154" y="134" width="38" height="13" rx="2" fill="#18181b" stroke="#b45309" strokeWidth="1" />
          {/* Lacing cords */}
          <line x1="162" y1="105" x2="162" y2="147" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="182" y1="105" x2="182" y2="147" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
        </g>

        {/* ===== DO (CHEST CUIRASS) ===== */}
        <g id="cuirass-group" filter="url(#armorShadow)">
          {/* Upper chest armor */}
          <path
            d="M92 108 L148 108 L154 175 L86 175 Z"
            fill="url(#lacquerArmorGrad)"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          {/* Gold Mon / Crest on Chest */}
          <circle cx="120" cy="136" r="14" fill="#09090b" stroke="url(#goldCrestGrad)" strokeWidth="1.8" />
          <path
            d="M120 126 L123 133 L130 133 L125 138 L127 145 L120 141 L113 145 L115 138 L110 133 L117 133 Z"
            fill="url(#goldCrestGrad)"
          />
          <text x="120" y="166" fontSize="7" fill="#fef08a" textAnchor="middle" fontFamily="serif" fontWeight="bold">
            MERGED
          </text>

          {/* Waist Ribbon / Belt (Obi & Cord) */}
          <rect x="85" y="175" width="70" height="10" fill="url(#crimsonCordGrad)" rx="2" />
          <circle cx="120" cy="180" r="4" fill="url(#goldCrestGrad)" />

          {/* Kusazuri (Tassets / Skirt Armor plates) */}
          <path d="M84 186 L100 186 L98 226 L82 226 Z" fill="#27272a" stroke="#b91c1c" strokeWidth="1" />
          <path d="M103 186 L118 186 L118 230 L103 230 Z" fill="#18181b" stroke="#f59e0b" strokeWidth="1" />
          <path d="M122 186 L137 186 L137 230 L122 230 Z" fill="#18181b" stroke="#f59e0b" strokeWidth="1" />
          <path d="M140 186 L156 186 L158 226 L142 226 Z" fill="#27272a" stroke="#b91c1c" strokeWidth="1" />
        </g>
      </svg>

      {/* Stand Plaque */}
      <div className="armor-stand-plaque">
        <span className="plaque-kanji">武士道</span>
        <span className="plaque-title">GREAT WARRIOR ARMOR</span>
        <span className="plaque-sub">Click to Inspect Lore</span>
      </div>

      {/* Floating Hover Glow Tag */}
      {isHovered && (
        <div className="armor-tooltip-badge">
          <span>⚔️ Master Guardian of Open Source</span>
        </div>
      )}
    </div>
  )
}
