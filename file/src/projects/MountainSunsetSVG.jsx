/**
 * Panoramic Sunset Mountain Range Vector Canvas
 * Features:
 * - Radiant setting orange sun in a blazing evening sunset sky
 * - 4 distinct big mountains with glacier-filled snowy peaks (LOCUS, DRAKE, HIREMIND, SIGNLY)
 * - Animated drifting clouds across the sunset sky
 * - Animated birds (V-shaped, soaring silhouettes) flying in formation
 * - Hover on glacier tips reveals project (subtle glow only — no beacon circles)
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

        {/* Lake Sunset Reflection */}
        <linearGradient id="lakeReflectionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="30%" stopColor="#f97316" />
          <stop offset="65%" stopColor="#c2410c" />
          <stop offset="100%" stopColor="#431407" />
        </linearGradient>

        {/* Cloud fill — warm sunset-lit edges */}
        <radialGradient id="cloudGrad1" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#fb923c" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c2410c" stopOpacity="0.2" />
        </radialGradient>
        <radialGradient id="cloudGrad2" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#fed7aa" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.18" />
        </radialGradient>
        <radialGradient id="cloudGrad3" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
        </radialGradient>

        {/* Filters */}
        <filter id="sunBloom" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="28" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="ridgeDrop" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.45" />
        </filter>
        <filter id="cloudSoft" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="glacierHoverGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" result="glow" />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>
      </defs>

      {/* ================= 1. EVENING SKY ================= */}
      <rect x="0" y="0" width="1440" height="680" fill="url(#eveningSkyGrad)" />

      {/* ================= 2. ANIMATED CLOUDS ================= */}
      {/* Cloud Layer A — large slow clouds drifting right */}
      <g className="cloud-group cloud-layer-a" aria-hidden="true">
        {/* Cloud A1 */}
        <g transform="translate(0, 0)">
          <ellipse cx="160" cy="88" rx="90" ry="30" fill="url(#cloudGrad1)" filter="url(#cloudSoft)" opacity="0.85" />
          <ellipse cx="200" cy="74" rx="58" ry="24" fill="url(#cloudGrad1)" filter="url(#cloudSoft)" opacity="0.9" />
          <ellipse cx="115" cy="82" rx="45" ry="20" fill="url(#cloudGrad1)" filter="url(#cloudSoft)" opacity="0.75" />
          <ellipse cx="255" cy="85" rx="40" ry="17" fill="url(#cloudGrad1)" filter="url(#cloudSoft)" opacity="0.7" />
        </g>
        {/* Cloud A2 (offset start for loop) */}
        <g transform="translate(1440, 0)">
          <ellipse cx="160" cy="88" rx="90" ry="30" fill="url(#cloudGrad1)" filter="url(#cloudSoft)" opacity="0.85" />
          <ellipse cx="200" cy="74" rx="58" ry="24" fill="url(#cloudGrad1)" filter="url(#cloudSoft)" opacity="0.9" />
          <ellipse cx="115" cy="82" rx="45" ry="20" fill="url(#cloudGrad1)" filter="url(#cloudSoft)" opacity="0.75" />
          <ellipse cx="255" cy="85" rx="40" ry="17" fill="url(#cloudGrad1)" filter="url(#cloudSoft)" opacity="0.7" />
        </g>
      </g>

      {/* Cloud Layer B — medium clouds, medium speed */}
      <g className="cloud-group cloud-layer-b" aria-hidden="true">
        <g transform="translate(0, 0)">
          <ellipse cx="580" cy="65" rx="110" ry="28" fill="url(#cloudGrad2)" filter="url(#cloudSoft)" opacity="0.78" />
          <ellipse cx="630" cy="50" rx="70" ry="22" fill="url(#cloudGrad2)" filter="url(#cloudSoft)" opacity="0.85" />
          <ellipse cx="530" cy="62" rx="55" ry="18" fill="url(#cloudGrad2)" filter="url(#cloudSoft)" opacity="0.7" />
          <ellipse cx="700" cy="68" rx="48" ry="16" fill="url(#cloudGrad2)" filter="url(#cloudSoft)" opacity="0.65" />
        </g>
        <g transform="translate(-1440, 0)">
          <ellipse cx="580" cy="65" rx="110" ry="28" fill="url(#cloudGrad2)" filter="url(#cloudSoft)" opacity="0.78" />
          <ellipse cx="630" cy="50" rx="70" ry="22" fill="url(#cloudGrad2)" filter="url(#cloudSoft)" opacity="0.85" />
          <ellipse cx="530" cy="62" rx="55" ry="18" fill="url(#cloudGrad2)" filter="url(#cloudSoft)" opacity="0.7" />
          <ellipse cx="700" cy="68" rx="48" ry="16" fill="url(#cloudGrad2)" filter="url(#cloudSoft)" opacity="0.65" />
        </g>
      </g>

      {/* Cloud Layer C — small wispy fast-ish clouds */}
      <g className="cloud-group cloud-layer-c" aria-hidden="true">
        <g transform="translate(0, 0)">
          <ellipse cx="1050" cy="55" rx="80" ry="18" fill="url(#cloudGrad3)" filter="url(#cloudSoft)" opacity="0.7" />
          <ellipse cx="1100" cy="44" rx="50" ry="14" fill="url(#cloudGrad3)" filter="url(#cloudSoft)" opacity="0.75" />
          <ellipse cx="990" cy="52" rx="42" ry="13" fill="url(#cloudGrad3)" filter="url(#cloudSoft)" opacity="0.6" />
        </g>
        <g transform="translate(1440, 0)">
          <ellipse cx="1050" cy="55" rx="80" ry="18" fill="url(#cloudGrad3)" filter="url(#cloudSoft)" opacity="0.7" />
          <ellipse cx="1100" cy="44" rx="50" ry="14" fill="url(#cloudGrad3)" filter="url(#cloudSoft)" opacity="0.75" />
          <ellipse cx="990" cy="52" rx="42" ry="13" fill="url(#cloudGrad3)" filter="url(#cloudSoft)" opacity="0.6" />
        </g>
      </g>

      {/* ================= 3. SETTING ORANGE SUN ================= */}
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

      {/* ================= 4. DISTANT MOUNTAIN SILHOUETTE RANGE ================= */}
      <path
        d="M 0 380 L 110 320 L 260 360 L 380 290 L 510 340 L 680 280 L 820 330 L 990 270 L 1140 330 L 1290 285 L 1440 350 L 1440 520 L 0 520 Z"
        fill="#581c87"
        opacity="0.35"
      />

      {/* ================= 5. THE 4 BIG GLACIATED MOUNTAINS ================= */}

      {/* MOUNTAIN 1: LOCUS */}
      <g id="mountain-locus-body" filter="url(#ridgeDrop)">
        <polygon points="230,220 80,480 370,480" fill="url(#rockShadow)" />
        <polygon points="230,220 230,480 370,480" fill="url(#rockSunlit)" opacity="0.85" />
        <path d="M 230 220 Q 200 340 140 480" stroke="#0c0a09" strokeWidth="3" />
        <path d="M 230 220 Q 265 330 310 480" stroke="#7c2d12" strokeWidth="2.5" />
      </g>

      {/* MOUNTAIN 2: DRAKE */}
      <g id="mountain-drake-body" filter="url(#ridgeDrop)">
        <polygon points="550,150 330,500 780,500" fill="url(#rockShadow)" />
        <polygon points="550,150 550,500 780,500" fill="url(#rockSunlit)" opacity="0.9" />
        <line x1="550" y1="150" x2="550" y2="500" stroke="#fed7aa" strokeWidth="2.5" opacity="0.75" />
        <path d="M 550 150 Q 480 290 390 500" stroke="#09090b" strokeWidth="3" />
        <path d="M 550 150 Q 640 310 710 500" stroke="#9a3412" strokeWidth="2.5" />
      </g>

      {/* MOUNTAIN 3: HIREMIND */}
      <g id="mountain-hiremind-body" filter="url(#ridgeDrop)">
        <polygon points="880,175 690,490 1080,490" fill="url(#rockShadow)" />
        <polygon points="880,175 880,490 1080,490" fill="url(#rockSunlit)" opacity="0.88" />
        <line x1="880" y1="175" x2="880" y2="490" stroke="#fed7aa" strokeWidth="2" opacity="0.7" />
        <path d="M 880 175 Q 810 320 730 490" stroke="#0c0a09" strokeWidth="3" />
        <path d="M 880 175 Q 960 310 1020 490" stroke="#9a3412" strokeWidth="2.5" />
      </g>

      {/* MOUNTAIN 4: SIGNLY */}
      <g id="mountain-signly-body" filter="url(#ridgeDrop)">
        <polygon points="1210,245 1040,490 1390,490" fill="url(#rockShadow)" />
        <polygon points="1210,245 1210,490 1390,490" fill="url(#rockSunlit)" opacity="0.85" />
        <line x1="1210" y1="245" x2="1210" y2="490" stroke="#fed7aa" strokeWidth="2" opacity="0.65" />
        <path d="M 1210 245 Q 1150 350 1080 490" stroke="#0c0a09" strokeWidth="2.8" />
        <path d="M 1210 245 Q 1280 340 1340 490" stroke="#9a3412" strokeWidth="2.2" />
      </g>

      {/* ================= 6. GLACIER TIPS — INTERACTIVE (no beacon circles) ================= */}

      {/* GLACIER TIP 1: LOCUS */}
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
        <polygon points="230,220 185,290 230,278" fill="url(#glacierShadow)" />
        <polygon points="230,220 230,278 275,290" fill="url(#glacierSunsetGleam)" />
        <path
          d="M 185 290 L 195 282 L 208 288 L 220 279 L 230 286 L 244 280 L 258 288 L 275 290 L 260 275 L 245 260 L 230 220 L 212 258 L 198 274 Z"
          fill="url(#glacierLight)"
        />
        <text x="230" y="205" className="glacier-summit-text" textAnchor="middle">
          01 · LOCUS
        </text>
      </g>

      {/* GLACIER TIP 2: DRAKE */}
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
        <text x="550" y="132" className="glacier-summit-text" textAnchor="middle">
          02 · DRAKE
        </text>
      </g>

      {/* GLACIER TIP 3: HIREMIND */}
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
        <text x="880" y="158" className="glacier-summit-text" textAnchor="middle">
          03 · HIREMIND
        </text>
      </g>

      {/* GLACIER TIP 4: SIGNLY */}
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
        <text x="1210" y="228" className="glacier-summit-text" textAnchor="middle">
          04 · SIGNLY
        </text>
      </g>

      {/* ================= 7. ANIMATED FLYING BIRDS ================= */}
      {/*
        Birds are V-shaped SVG path silhouettes animated to fly across the sky.
        Multiple formations at different heights and speeds.
      */}

      {/* Bird flock formation A — mid sky, soaring right */}
      <g className="bird-flock bird-flock-a" aria-hidden="true">
        {/* Bird 1 (lead) */}
        <path className="bird" d="M0,-4 C6,-8 12,-6 16,0 C20,-6 26,-8 32,-4" stroke="#1c1917" strokeWidth="1.8" fill="none" strokeLinecap="round" transform="translate(320, 148)" />
        {/* Bird 2 */}
        <path className="bird" d="M0,-3 C5,-7 10,-5 14,0 C18,-5 23,-7 28,-3" stroke="#1c1917" strokeWidth="1.6" fill="none" strokeLinecap="round" transform="translate(355, 158)" />
        {/* Bird 3 */}
        <path className="bird" d="M0,-3 C5,-6 9,-5 13,0 C17,-5 21,-6 26,-3" stroke="#1c1917" strokeWidth="1.5" fill="none" strokeLinecap="round" transform="translate(348, 140)" />
        {/* Bird 4 (trail) */}
        <path className="bird" d="M0,-2.5 C4,-5.5 8,-4.5 11,0 C14,-4.5 18,-5.5 22,-2.5" stroke="#1c1917" strokeWidth="1.4" fill="none" strokeLinecap="round" transform="translate(385, 152)" />
        {/* Bird 5 (far trail) */}
        <path className="bird" d="M0,-2 C4,-5 7,-4 10,0 C13,-4 16,-5 20,-2" stroke="#292524" strokeWidth="1.3" fill="none" strokeLinecap="round" transform="translate(380, 135)" />
      </g>

      {/* Bird flock formation B — higher up, moving slower */}
      <g className="bird-flock bird-flock-b" aria-hidden="true">
        <path className="bird" d="M0,-5 C7,-9 13,-7 18,0 C23,-7 29,-9 36,-5" stroke="#292524" strokeWidth="1.7" fill="none" strokeLinecap="round" transform="translate(820, 108)" />
        <path className="bird" d="M0,-4 C6,-8 11,-6 15,0 C19,-6 24,-8 30,-4" stroke="#292524" strokeWidth="1.5" fill="none" strokeLinecap="round" transform="translate(858, 120)" />
        <path className="bird" d="M0,-3.5 C5,-7 9,-5.5 13,0 C17,-5.5 21,-7 26,-3.5" stroke="#292524" strokeWidth="1.4" fill="none" strokeLinecap="round" transform="translate(850, 98)" />
        <path className="bird" d="M0,-3 C4,-6 8,-5 12,0 C16,-5 20,-6 24,-3" stroke="#3a3535" strokeWidth="1.3" fill="none" strokeLinecap="round" transform="translate(890, 114)" />
      </g>

      {/* Bird flock formation C — low horizon, smaller (distant) */}
      <g className="bird-flock bird-flock-c" aria-hidden="true">
        <path className="bird" d="M0,-2 C3,-4.5 6,-3.5 9,0 C12,-3.5 15,-4.5 18,-2" stroke="#431407" strokeWidth="1.2" fill="none" strokeLinecap="round" transform="translate(100, 195)" />
        <path className="bird" d="M0,-1.8 C2.5,-4 5,-3 7.5,0 C10,-3 12.5,-4 15,-1.8" stroke="#431407" strokeWidth="1.1" fill="none" strokeLinecap="round" transform="translate(122, 202)" />
        <path className="bird" d="M0,-1.6 C2,-3.5 4.5,-2.8 7,0 C9.5,-2.8 12,-3.5 14,-1.6" stroke="#431407" strokeWidth="1" fill="none" strokeLinecap="round" transform="translate(116, 188)" />
        <path className="bird" d="M0,-1.5 C2,-3 4,-2.5 6,0 C8,-2.5 10,-3 12,-1.5" stroke="#581c87" strokeWidth="1" fill="none" strokeLinecap="round" transform="translate(141, 196)" />
        <path className="bird" d="M0,-1.5 C2,-3 4,-2.5 6,0 C8,-2.5 10,-3 12,-1.5" stroke="#581c87" strokeWidth="1" fill="none" strokeLinecap="round" transform="translate(136, 183)" />
        <path className="bird" d="M0,-1.2 C1.5,-2.8 3.5,-2 5,0 C6.5,-2 8.5,-2.8 10,-1.2" stroke="#581c87" strokeWidth="0.9" fill="none" strokeLinecap="round" transform="translate(158, 191)" />
      </g>

      {/* Bird formation D — very high, tiny, far-off specks */}
      <g className="bird-flock bird-flock-d" aria-hidden="true">
        <path className="bird" d="M0,-1.5 C2,-3 4,-2.5 6,0 C8,-2.5 10,-3 12,-1.5" stroke="#7c2d12" strokeWidth="0.9" fill="none" strokeLinecap="round" transform="translate(1100, 72)" />
        <path className="bird" d="M0,-1.2 C1.5,-2.5 3,-2 5,0 C7,-2 8.5,-2.5 10,-1.2" stroke="#7c2d12" strokeWidth="0.9" fill="none" strokeLinecap="round" transform="translate(1118, 80)" />
        <path className="bird" d="M0,-1 C1.5,-2.2 3,-1.8 4.5,0 C6,-1.8 7.5,-2.2 9,-1" stroke="#9a3412" strokeWidth="0.8" fill="none" strokeLinecap="round" transform="translate(1112, 64)" />
        <path className="bird" d="M0,-1 C1.5,-2 2.8,-1.6 4,0 C5.2,-1.6 6.5,-2 8,-1" stroke="#9a3412" strokeWidth="0.8" fill="none" strokeLinecap="round" transform="translate(1132, 74)" />
      </g>

      {/* ================= 8. FOREGROUND PINE FOOTHILLS & ALPINE LAKE ================= */}
      <g opacity="0.95">
        <path
          d="M 0 490 L 40 475 L 80 495 L 120 470 L 160 490 L 220 465 L 280 490 L 360 460 L 440 485 L 540 455 L 640 480 L 760 450 L 880 480 L 980 455 L 1100 485 L 1220 460 L 1320 480 L 1440 455 L 1440 540 L 0 540 Z"
          fill="#1c1917"
        />
        {[25, 75, 140, 195, 260, 320, 390, 480, 570, 660, 750, 830, 920, 1020, 1120, 1240, 1360].map((xPos, idx) => (
          <polygon
            key={`pine-${idx}`}
            points={`${xPos},445 ${xPos - 12},480 ${xPos + 12},480`}
            fill="#0f172a"
          />
        ))}
      </g>

      {/* Tranquil Alpine Mirror Lake */}
      <g id="alpine-mirror-lake" transform="translate(0, 520)">
        <rect x="0" y="0" width="1440" height="160" fill="url(#lakeReflectionGrad)" />
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
