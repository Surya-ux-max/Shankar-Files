import { useState } from 'react'
import { WARFARE_TOOLS } from './contributionsData'

export default function WarfareTools({ onInspectTool }) {
  const [activeTool, setActiveTool] = useState(null)

  const handleToolClick = (toolId) => {
    const found = WARFARE_TOOLS.find((t) => t.id === toolId)
    if (found && onInspectTool) {
      onInspectTool(found)
    }
  }

  return (
    <div className="warfare-tools-container" aria-label="Warfare Tools and Weapon Rack">
      {/* ================= 1. UPPER HORIZONTAL NAGINATA / YARI WALL MOUNT ================= */}
      <div
        className="wall-weapon-mount naginata-mount"
        onMouseEnter={() => setActiveTool('naginata')}
        onMouseLeave={() => setActiveTool(null)}
        onClick={() => handleToolClick('naginata')}
        role="button"
        tabIndex={0}
        aria-label="Inspect War Naginata"
      >
        <div className="bracket bracket-left" />
        <div className="bracket bracket-right" />
        <svg className="naginata-svg" viewBox="0 0 460 30" fill="none">
          {/* Wooden Shaft */}
          <line x1="20" y1="15" x2="360" y2="15" stroke="#452718" strokeWidth="6" strokeLinecap="round" />
          {/* Gold Ferrules & Rings */}
          <rect x="70" y="10" width="8" height="10" fill="#f59e0b" rx="1" />
          <rect x="180" y="10" width="8" height="10" fill="#f59e0b" rx="1" />
          <rect x="345" y="9" width="16" height="12" fill="#d97706" rx="2" />
          {/* Curved Curved Naginata Blade */}
          <path
            d="M360 15 Q390 14 430 7 Q445 4 452 2 Q435 15 390 18 L360 17 Z"
            fill="url(#steelGrad)"
            stroke="#94a3b8"
            strokeWidth="1.2"
          />
          {/* Crimson Tassel hanging from shaft */}
          <path d="M184 18 Q182 25 183 30" stroke="#dc2626" strokeWidth="2" fill="none" />
          <circle cx="183" cy="29" r="2" fill="#ef4444" />
        </svg>
        <div className="weapon-label-chip">
          <span className="chip-kanji">薙刀</span>
          <span className="chip-text">Yari & Naginata</span>
        </div>
      </div>

      {/* ================= 2. KATANA-KAKE (SWORD WALL RACK) ================= */}
      <div
        className="wall-weapon-mount katana-rack"
        onMouseEnter={() => setActiveTool('katana')}
        onMouseLeave={() => setActiveTool(null)}
        onClick={() => handleToolClick('katana')}
        role="button"
        tabIndex={0}
        aria-label="Inspect Katana Blade"
      >
        {/* Lacquered Two-Tier Wooden Rack */}
        <div className="katana-rack-frame">
          <div className="rack-pillar rack-pillar-l" />
          <div className="rack-pillar rack-pillar-r" />
          <div className="rack-crest">
            <span className="rack-mon">⚔️</span>
          </div>
        </div>

        {/* Katana Sword in Scabbard & Blade */}
        <svg className="katana-svg" viewBox="0 0 340 40" fill="none">
          <defs>
            <linearGradient id="scabbardGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#18181b" />
              <stop offset="60%" stopColor="#27272a" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
            <linearGradient id="steelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="goldHilt" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>

          {/* Tsuka (Hilt / Grip with Diamond Wrap) */}
          <path d="M20 23 L75 21" stroke="#1c1917" strokeWidth="8" strokeLinecap="round" />
          <path d="M22 23 L73 21" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="3 3" />
          {/* Kashira (Pommel Cap) */}
          <circle cx="18" cy="23" r="4.5" fill="url(#goldHilt)" stroke="#78350f" strokeWidth="1" />
          {/* Tsuba (Circular Handguard) */}
          <ellipse cx="78" cy="21" rx="4.5" ry="12" fill="url(#goldHilt)" stroke="#78350f" strokeWidth="1.2" />

          {/* Saya (Saya / Scabbard with Sleek Curve) */}
          <path
            d="M82 21 Q180 18 310 13 Q320 12 328 10"
            stroke="url(#scabbardGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          {/* Sageo Cord Wrap (Crimson Silk Tie) */}
          <rect x="110" y="16" width="16" height="8" rx="2" fill="#dc2626" />
          <line x1="114" y1="16" x2="114" y2="24" stroke="#fef08a" strokeWidth="1" />
          <line x1="122" y1="16" x2="122" y2="24" stroke="#fef08a" strokeWidth="1" />
          {/* Kojiri (End Cap) */}
          <ellipse cx="328" cy="10" rx="3.5" ry="4" fill="url(#goldHilt)" stroke="#78350f" strokeWidth="0.8" />
        </svg>

        <div className="weapon-label-chip">
          <span className="chip-kanji">日本刀</span>
          <span className="chip-text">Masamune Katana</span>
        </div>
      </div>

      {/* ================= 3. HANGING TANTO KNIVES ON PEGS ================= */}
      <div className="hanging-daggers-group">
        {/* Tanto 1 */}
        <div
          className="hanging-knife knife-item-1"
          onMouseEnter={() => setActiveTool('tanto')}
          onMouseLeave={() => setActiveTool(null)}
          onClick={() => handleToolClick('tanto')}
          role="button"
          tabIndex={0}
          aria-label="Inspect Tanto Dagger"
        >
          {/* Wall Peg and Braided Silk Cord */}
          <div className="wall-peg" />
          <div className="hanging-cord cord-tanto" />
          <svg className="knife-svg" viewBox="0 0 50 140" fill="none">
            {/* Cord Loop */}
            <circle cx="25" cy="12" r="6" stroke="#b91c1c" strokeWidth="2.5" fill="none" />
            <line x1="25" y1="18" x2="25" y2="35" stroke="#b91c1c" strokeWidth="2.5" />
            {/* Grip */}
            <rect x="21" y="35" width="8" height="28" rx="2" fill="#18181b" stroke="#f59e0b" strokeWidth="1" />
            <line x1="21" y1="42" x2="29" y2="42" stroke="#dc2626" strokeWidth="1.5" />
            <line x1="21" y1="49" x2="29" y2="49" stroke="#dc2626" strokeWidth="1.5" />
            <line x1="21" y1="56" x2="29" y2="56" stroke="#dc2626" strokeWidth="1.5" />
            {/* Guard */}
            <ellipse cx="25" cy="64" rx="9" ry="3.5" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
            {/* Tanto Blade in Saya / Sheath */}
            <path
              d="M20 66 L30 66 L29 116 Q28 128 25 132 Q22 128 21 116 Z"
              fill="#27272a"
              stroke="#3f3f46"
              strokeWidth="1.5"
            />
            {/* Gold Accents */}
            <rect x="21" y="70" width="8" height="3" fill="#f59e0b" />
            <circle cx="25" cy="126" r="2.5" fill="#f59e0b" />
          </svg>
          <div className="weapon-tag">Tanto Knife</div>
        </div>

        {/* Kunai 2 (Hanging beside it) */}
        <div
          className="hanging-knife knife-item-2"
          onMouseEnter={() => setActiveTool('tanto')}
          onMouseLeave={() => setActiveTool(null)}
          onClick={() => handleToolClick('tanto')}
          role="button"
          tabIndex={0}
          aria-label="Inspect Kunai Dagger"
        >
          <div className="wall-peg" />
          <div className="hanging-cord cord-kunai" />
          <svg className="knife-svg" viewBox="0 0 50 140" fill="none">
            {/* Ring pommel */}
            <circle cx="25" cy="30" r="7" stroke="#94a3b8" strokeWidth="3" fill="none" />
            <line x1="25" y1="37" x2="25" y2="60" stroke="#334155" strokeWidth="5" />
            {/* Grip wrapped in white cord */}
            <line x1="23" y1="42" x2="27" y2="44" stroke="#f8fafc" strokeWidth="1.5" />
            <line x1="23" y1="48" x2="27" y2="50" stroke="#f8fafc" strokeWidth="1.5" />
            <line x1="23" y1="54" x2="27" y2="56" stroke="#f8fafc" strokeWidth="1.5" />
            {/* Leaf-shaped Kunai steel blade */}
            <polygon
              points="25,60 16,85 25,128 34,85"
              fill="url(#steelGrad)"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <line x1="25" y1="62" x2="25" y2="124" stroke="#64748b" strokeWidth="1" />
          </svg>
          <div className="weapon-tag">Steel Kunai</div>
        </div>
      </div>

      {/* ================= 4. EMBEDDED SHURIKEN (IN THE TIMBER BEAM) ================= */}
      <div
        className="embedded-shuriken-group"
        onMouseEnter={() => setActiveTool('shuriken')}
        onMouseLeave={() => setActiveTool(null)}
        onClick={() => handleToolClick('shuriken')}
        role="button"
        tabIndex={0}
        aria-label="Inspect Embedded Shuriken"
      >
        <svg className="shuriken-svg" viewBox="0 0 70 70" fill="none">
          {/* Wood fracture cracks */}
          <path d="M35 35 L48 42 M35 35 L20 48 M35 35 L42 20" stroke="#29180e" strokeWidth="1.5" strokeLinecap="round" />
          {/* 4-point Steel Shuriken embedded diagonally */}
          <g transform="translate(35, 35) rotate(28)">
            <polygon
              points="0,-24 5,-7 22,-22 7,-5 24,0 7,5 22,22 5,7 0,24 -5,7 -22,22 -7,5 -24,0 -7,-5 -22,-22 -5,-7"
              fill="url(#steelGrad)"
              stroke="#1e293b"
              strokeWidth="1.5"
            />
            <circle cx="0" cy="0" r="5" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          </g>
        </svg>
        <span className="shuriken-hint">4-Point Hira-Shuriken</span>
      </div>

      {/* Floating dynamic info card when active */}
      {activeTool && (
        <div className="weapon-floating-card">
          {(() => {
            const tool = WARFARE_TOOLS.find((t) => t.id === activeTool)
            if (!tool) return null
            return (
              <>
                <div className="wfc-header">
                  <span className="wfc-kanji">{tool.kanji}</span>
                  <div>
                    <strong className="wfc-name">{tool.name}</strong>
                    <div className="wfc-type">{tool.type}</div>
                  </div>
                </div>
                <p className="wfc-desc">{tool.description}</p>
                <div className="wfc-hint">Click weapon to view open-source alignment ⚔️</div>
              </>
            )
          })()}
        </div>
      )}
    </div>
  )
}
