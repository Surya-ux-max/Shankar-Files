/**
 * Panoramic Sunset Mountain Range Vector Canvas
 * Features:
 * - Radiant setting orange sun in a blazing evening sunset sky
 * - 4 distinct big mountains with glacier-filled snowy peaks (LOCUS, DRAKE, HIREMIND, SIGNLY)
 * - Interactive glacier tips with radiant beacon pulses, crystalline glacier facets, and hover detection
 * - Layered mountain ridges, pine forest foothills, and mirror alpine lake reflections
 */

export default function MountainSunsetSVG({
  projects,
  hoveredProject,
  onHoverPeak,
  onSelectPeak
}) {
  return (
    <svg
      className="mountain-sunset-svg"
      viewBox="0 0 1440 680"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sunset Mountain Range with Glacier Summits"
    >
      <defs>
        {/* Evening Sunset Sky Gradients */}
        <linearGradient id="eveningSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#431407" />
          <stop offset="18%" stopColor="#7c2d12" />
          <stop offset="42%" stopColor="#c2410c" />
          <stop offset="68%" stopColor="#ea580c" />
          <stop offset="85%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>

        {/* Setting Sun Radiant Glows */}
        <radialGradient id="settingSunAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="25%" stopColor="#fef08a" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#f97316" stopOpacity="0.65" />
          <stop offset="80%" stopColor="#ea580c" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c2410c" stopOpacity="0" />
        </radialGradient>

        {/* Glacier Ice & Snow Gradients */}
        <linearGradient id="glacierLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#f0f9ff" />
          <stop offset="75%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>

        <linearGradient id="glacierSunsetGleam" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#fed7aa" />
          <stop offset="70%" stopColor="#fca5a5" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>

        <linearGradient id="glacierShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        {/* Mountain Rock Faces (Sunset Lit & Shadow Faces) */}
        <linearGradient id="rockSunlit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9a3412" />
          <stop offset="45%" stopColor="#7c2d12" />
          <stop offset="100%" stopColor="#431407" />
        </linearGradient>

        <linearGradient id="rockShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#292524" />
          <stop offset="50%" stopColor="#1c1917" />
          <stop offset="100%" stopColor="#0c0a09" />
        </linearGradient>

        <linearGradient id="rockMidground" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6b21a8" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#1c1917" />
        </linearGradient>

        {/* Lake Sunset Reflection */}
        <linearGradient id="lakeReflectionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="30%" stopColor="#f97316" />
          <stop offset="65%" stopColor="#c2410c" />
          <stop offset="100%" stopColor="#431407" />
        </linearGradient>

        {/* Filters */}
        <filter id="sunBloom" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="28" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="beaconGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="glow" />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>
        <filter id="ridgeDrop" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* ================= 1. EVENING SKY ================= */}
      <rect x="0" y="0" width="1440" height="680" fill="url(#eveningSkyGrad)" />

      {/* Atmospheric Sunset Cloud Bands with Golden Underbellies */}
      <g opacity="0.6">
        <path d="M 0 110 Q 240 95 480 120 T 960 100 T 1440 115 L 1440 155 Q 1100 135 800 160 T 260 145 L 0 155 Z" fill="#9a3412" opacity="0.4" />
        <path d="M 0 170 Q 340 150 720 180 T 1440 165 L 1440 200 Q 1060 185 640 215 T 0 205 Z" fill="#c2410c" opacity="0.45" />
        <path d="M 120 70 Q 360 55 600 75 Q 840 55 1080 70 L 1050 85 Q 780 70 540 90 T 100 85 Z" fill="#fed7aa" opacity="0.35" />
      </g>

      {/* ================= 2. SETTING ORANGE SUN ================= */}
      {/* Positioned behind the majestic mountain range near the golden horizon */}
      <g id="setting-sun-group" transform="translate(680, 240)">
        {/* Vast Radiant Sunset Halo */}
        <circle cx="0" cy="0" r="160" fill="url(#settingSunAura)" filter="url(#sunBloom)" />
        {/* Inner Glowing Sun Disc */}
        <circle cx="0" cy="0" r="75" fill="#fef08a" />
        <circle cx="0" cy="0" r="70" fill="#f97316" opacity="0.85" />
        <circle cx="0" cy="0" r="62" fill="#ffffff" opacity="0.9" />
        {/* Horizontal Sun Flare Streaks across horizon */}
        <line x1="-380" y1="10" x2="380" y2="10" stroke="#fef08a" strokeWidth="2.5" opacity="0.45" />
        <line x1="-260" y1="28" x2="260" y2="28" stroke="#fdba74" strokeWidth="1.8" opacity="0.35" />
      </g>

      {/* ================= 3. DISTANT MOUNTAIN SILHOUETTE RANGE ================= */}
      <path
        d="M 0 380 L 110 320 L 260 360 L 380 290 L 510 340 L 680 280 L 820 330 L 990 270 L 1140 330 L 1290 285 L 1440 350 L 1440 520 L 0 520 Z"
        fill="#581c87"
        opacity="0.35"
      />

      {/* ================= 4. THE 4 BIG GLACIATED MOUNTAINS (THE PROJECTS) ================= */}

      {/* ----------------- MOUNTAIN 1: LOCUS (West Ridge, x: 230) ----------------- */}
      <g id="mountain-locus-body" filter="url(#ridgeDrop)">
        {/* Dark Rock Base & Shadows */}
        <polygon points="230,220 80,480 370,480" fill="url(#rockShadow)" />
        {/* Sunlit Rock Face */}
        <polygon points="230,220 230,480 370,480" fill="url(#rockSunlit)" opacity="0.85" />
        {/* Mountain Ridge Strata & Ridges */}
        <path d="M 230 220 Q 200 340 140 480" stroke="#0c0a09" strokeWidth="3" />
        <path d="M 230 220 Q 265 330 310 480" stroke="#7c2d12" strokeWidth="2.5" />
      </g>

      {/* ----------------- MOUNTAIN 2: DRAKE (Grand Central Summit, x: 550) ----------------- */}
      <g id="mountain-drake-body" filter="url(#ridgeDrop)">
        {/* Huge Central Summit dominating the sunset */}
        <polygon points="550,150 330,500 780,500" fill="url(#rockShadow)" />
        <polygon points="550,150 550,500 780,500" fill="url(#rockSunlit)" opacity="0.9" />
        {/* Sharp Central Arête Knife-edge Ridge */}
        <line x1="550" y1="150" x2="550" y2="500" stroke="#fed7aa" strokeWidth="2.5" opacity="0.75" />
        <path d="M 550 150 Q 480 290 390 500" stroke="#09090b" strokeWidth="3" />
        <path d="M 550 150 Q 640 310 710 500" stroke="#9a3412" strokeWidth="2.5" />
      </g>

      {/* ----------------- MOUNTAIN 3: HIREMIND (Eastern Massif, x: 880) ----------------- */}
      <g id="mountain-hiremind-body" filter="url(#ridgeDrop)">
        <polygon points="880,175 690,490 1080,490" fill="url(#rockShadow)" />
        <polygon points="880,175 880,490 1080,490" fill="url(#rockSunlit)" opacity="0.88" />
        <line x1="880" y1="175" x2="880" y2="490" stroke="#fed7aa" strokeWidth="2" opacity="0.7" />
        <path d="M 880 175 Q 810 320 730 490" stroke="#0c0a09" strokeWidth="3" />
        <path d="M 880 175 Q 960 310 1020 490" stroke="#9a3412" strokeWidth="2.5" />
      </g>

      {/* ----------------- MOUNTAIN 4: SIGNLY (Far East Glacier, x: 1210) ----------------- */}
      <g id="mountain-signly-body" filter="url(#ridgeDrop)">
        <polygon points="1210,245 1040,490 1390,490" fill="url(#rockShadow)" />
        <polygon points="1210,245 1210,490 1390,490" fill="url(#rockSunlit)" opacity="0.85" />
        <line x1="1210" y1="245" x2="1210" y2="490" stroke="#fed7aa" strokeWidth="2" opacity="0.65" />
        <path d="M 1210 245 Q 1150 350 1080 490" stroke="#0c0a09" strokeWidth="2.8" />
        <path d="M 1210 245 Q 1280 340 1340 490" stroke="#9a3412" strokeWidth="2.2" />
      </g>

      {/* ================= 5. INTERACTIVE GLACIER-FILLED SUMMIT TIPS ================= */}
      {/* These are the interactive glacier caps where hovering reveals project details! */}

      {/* ----- GLACIER TIP 1: LOCUS (Summit: 230, 220) ----- */}
      <g
        id="glacier-tip-locus"
        className={`interactive-glacier-tip ${hoveredProject === 'locus' ? 'is-glacier-active' : ''}`}
        onMouseEnter={() => onHoverPeak('locus')}
        onMouseLeave={() => onHoverPeak(null)}
        onClick={() => onSelectPeak('locus')}
        role="button"
        tabIndex={0}
        aria-label="Glacier Summit: Project 01 — LOCUS"
      >
        {/* Snowy Glacier Facets (Icy Blue & Sunset Gleam) */}
        <polygon points="230,220 185,290 230,278" fill="url(#glacierShadow)" />
        <polygon points="230,220 230,278 275,290" fill="url(#glacierSunsetGleam)" />
        {/* Serrated Glacier Crevasse Edge */}
        <path
          d="M 185 290 L 195 282 L 208 288 L 220 279 L 230 286 L 244 280 L 258 288 L 275 290 L 260 275 L 245 260 L 230 220 L 212 258 L 198 274 Z"
          fill="url(#glacierLight)"
        />

        {/* Pulse Beacon / Radar Rings on Hover */}
        <circle cx="230" cy="220" r="28" className="beacon-ring ring-outer" />
        <circle cx="230" cy="220" r="16" className="beacon-ring ring-mid" />
        <circle cx="230" cy="220" r="6" className="beacon-center-dot" filter="url(#beaconGlow)" />

        {/* Summit Flag & Pin Label */}
        <g transform="translate(230, 205)">
          <line x1="0" y1="0" x2="0" y2="15" stroke="#38bdf8" strokeWidth="2" />
          <polygon points="0,0 14,4 0,8" fill="#38bdf8" />
        </g>
        <text x="230" y="190" className="glacier-summit-text" textAnchor="middle">
          01 · LOCUS
        </text>
      </g>

      {/* ----- GLACIER TIP 2: DRAKE (Summit: 550, 150) ----- */}
      <g
        id="glacier-tip-drake"
        className={`interactive-glacier-tip ${hoveredProject === 'drake' ? 'is-glacier-active' : ''}`}
        onMouseEnter={() => onHoverPeak('drake')}
        onMouseLeave={() => onHoverPeak(null)}
        onClick={() => onSelectPeak('drake')}
        role="button"
        tabIndex={0}
        aria-label="Glacier Summit: Project 02 — DRAKE"
      >
        <polygon points="550,150 495,245 550,230" fill="url(#glacierShadow)" />
        <polygon points="550,150 550,230 605,245" fill="url(#glacierSunsetGleam)" />
        <path
          d="M 495 245 L 510 234 L 526 242 L 538 232 L 550 240 L 565 233 L 582 243 L 605 245 L 585 220 L 568 200 L 550 150 L 532 198 L 515 224 Z"
          fill="url(#glacierLight)"
        />

        <circle cx="550" cy="150" r="32" className="beacon-ring ring-outer" />
        <circle cx="550" cy="150" r="18" className="beacon-ring ring-mid" />
        <circle cx="550" cy="150" r="7" className="beacon-center-dot" filter="url(#beaconGlow)" />

        <g transform="translate(550, 135)">
          <line x1="0" y1="0" x2="0" y2="15" stroke="#fbbf24" strokeWidth="2" />
          <polygon points="0,0 16,5 0,10" fill="#fbbf24" />
        </g>
        <text x="550" y="120" className="glacier-summit-text" textAnchor="middle">
          02 · DRAKE
        </text>
      </g>

      {/* ----- GLACIER TIP 3: HIREMIND (Summit: 880, 175) ----- */}
      <g
        id="glacier-tip-hiremind"
        className={`interactive-glacier-tip ${hoveredProject === 'hiremind' ? 'is-glacier-active' : ''}`}
        onMouseEnter={() => onHoverPeak('hiremind')}
        onMouseLeave={() => onHoverPeak(null)}
        onClick={() => onSelectPeak('hiremind')}
        role="button"
        tabIndex={0}
        aria-label="Glacier Summit: Project 03 — HIREMIND"
      >
        <polygon points="880,175 825,260 880,248" fill="url(#glacierShadow)" />
        <polygon points="880,175 880,248 935,260" fill="url(#glacierSunsetGleam)" />
        <path
          d="M 825 260 L 840 250 L 855 258 L 868 249 L 880 256 L 895 249 L 912 258 L 935 260 L 918 232 L 898 210 L 880 175 L 862 210 L 845 235 Z"
          fill="url(#glacierLight)"
        />

        <circle cx="880" cy="175" r="30" className="beacon-ring ring-outer" />
        <circle cx="880" cy="175" r="16" className="beacon-ring ring-mid" />
        <circle cx="880" cy="175" r="6" className="beacon-center-dot" filter="url(#beaconGlow)" />

        <g transform="translate(880, 160)">
          <line x1="0" y1="0" x2="0" y2="15" stroke="#f43f5e" strokeWidth="2" />
          <polygon points="0,0 15,4 0,8" fill="#f43f5e" />
        </g>
        <text x="880" y="145" className="glacier-summit-text" textAnchor="middle">
          03 · HIREMIND
        </text>
      </g>

      {/* ----- GLACIER TIP 4: SIGNLY (Summit: 1210, 245) ----- */}
      <g
        id="glacier-tip-signly"
        className={`interactive-glacier-tip ${hoveredProject === 'signly' ? 'is-glacier-active' : ''}`}
        onMouseEnter={() => onHoverPeak('signly')}
        onMouseLeave={() => onHoverPeak(null)}
        onClick={() => onSelectPeak('signly')}
        role="button"
        tabIndex={0}
        aria-label="Glacier Summit: Project 04 — SIGNLY"
      >
        <polygon points="1210,245 1165,315 1210,305" fill="url(#glacierShadow)" />
        <polygon points="1210,245 1210,305 1255,315" fill="url(#glacierSunsetGleam)" />
        <path
          d="M 1165 315 L 1178 305 L 1190 312 L 1200 304 L 1210 310 L 1222 304 L 1238 312 L 1255 315 L 1242 295 L 1225 275 L 1210 245 L 1195 276 L 1180 296 Z"
          fill="url(#glacierLight)"
        />

        <circle cx="1210" cy="245" r="28" className="beacon-ring ring-outer" />
        <circle cx="1210" cy="245" r="15" className="beacon-ring ring-mid" />
        <circle cx="1210" cy="245" r="6" className="beacon-center-dot" filter="url(#beaconGlow)" />

        <g transform="translate(1210, 230)">
          <line x1="0" y1="0" x2="0" y2="15" stroke="#a855f7" strokeWidth="2" />
          <polygon points="0,0 14,4 0,8" fill="#a855f7" />
        </g>
        <text x="1210" y="215" className="glacier-summit-text" textAnchor="middle">
          04 · SIGNLY
        </text>
      </g>

      {/* ================= 6. FOREGROUND PINE FOOTHILLS & REFLECTIVE ALPINE LAKE ================= */}
      {/* Alpine Pine Ridge Silhouette */}
      <g opacity="0.95">
        <path
          d="M 0 490 L 40 475 L 80 495 L 120 470 L 160 490 L 220 465 L 280 490 L 360 460 L 440 485 L 540 455 L 640 480 L 760 450 L 880 480 L 980 455 L 1100 485 L 1220 460 L 1320 480 L 1440 455 L 1440 540 L 0 540 Z"
          fill="#1c1917"
        />
        {/* Pine Tree Peaks */}
        {[25, 75, 140, 195, 260, 320, 390, 480, 570, 660, 750, 830, 920, 1020, 1120, 1240, 1360].map((xPos, idx) => (
          <polygon
            key={`pine-${idx}`}
            points={`${xPos},445 ${xPos - 12},480 ${xPos + 12},480`}
            fill="#0f172a"
          />
        ))}
      </g>

      {/* Tranquil Alpine Mirror Lake reflecting the Orange Sunset */}
      <g id="alpine-mirror-lake" transform="translate(0, 520)">
        <rect x="0" y="0" width="1440" height="160" fill="url(#lakeReflectionGrad)" />
        {/* Shimmering Horizontal Water Wavelets */}
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={`water-wave-${i}`}
            x1={50 + (i % 3) * 60}
            y1={12 + i * 10}
            x2={1380 - (i % 4) * 50}
            y2={12 + i * 10}
            stroke="#fef08a"
            strokeWidth="1.2"
            opacity={0.3 + (i % 3) * 0.15}
            strokeDasharray={`${20 + i * 5} ${15 + i * 4}`}
          />
        ))}
        {/* Sun Inverted Reflection in the Water */}
        <ellipse cx="680" cy="50" rx="120" ry="25" fill="#fef08a" opacity="0.35" filter="url(#sunBloom)" />
      </g>
    </svg>
  )
}
