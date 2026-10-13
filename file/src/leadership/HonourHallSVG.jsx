/**
 * HonourHallSVG — Japanese Night Ceremony Hall
 * A vector illustration of a traditional Japanese pavilion at night:
 * - Full moon rising behind the structure
 * - Paper lanterns (chochin) hung from wooden beams
 * - Four hanging honour banners (one per category)
 * - A central wooden podium with a trophy
 * - Cherry blossom petals drifting down
 * - Stars in the indigo night sky
 */

export default function HonourHallSVG() {
  return (
    <svg
      className="honour-hall-svg"
      viewBox="0 0 1200 480"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Japanese Night Ceremony Hall — Hall of Honours"
      role="img"
    >
      <defs>
        {/* Night sky gradient */}
        <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0c0a1e" />
          <stop offset="45%" stopColor="#1a1040" />
          <stop offset="80%" stopColor="#2d1b69" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>

        {/* Moon glow */}
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef9c3" stopOpacity="1" />
          <stop offset="30%" stopColor="#fef08a" stopOpacity="0.9" />
          <stop offset="65%" stopColor="#fde68a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>

        {/* Wood grain gradient */}
        <linearGradient id="woodDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1c0f06" />
          <stop offset="30%" stopColor="#2d1a0e" />
          <stop offset="60%" stopColor="#3d2310" />
          <stop offset="100%" stopColor="#1c0f06" />
        </linearGradient>
        <linearGradient id="woodMid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3d2310" />
          <stop offset="40%" stopColor="#5c3317" />
          <stop offset="70%" stopColor="#7c4a1e" />
          <stop offset="100%" stopColor="#3d2310" />
        </linearGradient>
        <linearGradient id="woodLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#92501f" />
          <stop offset="100%" stopColor="#5c3317" />
        </linearGradient>

        {/* Roof gradient */}
        <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#0f0f1e" />
        </linearGradient>

        {/* Tile edge */}
        <linearGradient id="tileEdge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a4a7a" />
          <stop offset="100%" stopColor="#2a2a5a" />
        </linearGradient>

        {/* Lantern red */}
        <radialGradient id="lanternGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#f97316" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0.2" />
        </radialGradient>
        <radialGradient id="lanternGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef9c3" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#facc15" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.15" />
        </radialGradient>

        {/* Floor wood */}
        <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5c3317" />
          <stop offset="100%" stopColor="#3d2310" />
        </linearGradient>

        {/* Podium gradient */}
        <linearGradient id="podiumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#92501f" />
          <stop offset="50%" stopColor="#7c4a1e" />
          <stop offset="100%" stopColor="#3d2310" />
        </linearGradient>

        {/* Trophy gold */}
        <linearGradient id="trophyGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Banner gradients */}
        <linearGradient id="bannerAmber" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
        <linearGradient id="bannerBlue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0c4a6e" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
        <linearGradient id="bannerPurple" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b0764" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="bannerGreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#052e16" />
          <stop offset="100%" stopColor="#021d0e" />
        </linearGradient>

        {/* Filters */}
        <filter id="moonHalo" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="22" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="lanternBloom" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.6" />
        </filter>
        <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ═══════════════ SKY & STARS ═══════════════ */}
      <rect x="0" y="0" width="1200" height="480" fill="url(#nightSky)" />

      {/* Stars */}
      {[
        [60, 40], [130, 25], [200, 55], [290, 18], [380, 42], [450, 12],
        [530, 38], [600, 20], [700, 48], [780, 15], [870, 35], [950, 22],
        [1020, 50], [1100, 18], [1150, 44], [1170, 30],
        [85, 70], [250, 75], [440, 68], [620, 80], [800, 65], [980, 72],
        [160, 90], [360, 88], [680, 82], [1060, 86],
      ].map(([x, y], i) => (
        <circle
          key={`star-${i}`}
          cx={x} cy={y}
          r={i % 4 === 0 ? 1.5 : i % 3 === 0 ? 1.2 : 0.8}
          fill="#ffffff"
          opacity={0.5 + (i % 5) * 0.1}
          className="star-twinkle"
          style={{ animationDelay: `${(i * 0.37) % 3}s` }}
        />
      ))}

      {/* ═══════════════ MOON ═══════════════ */}
      {/* Moon halo bloom */}
      <circle cx="600" cy="95" r="110" fill="url(#moonGlow)" filter="url(#moonHalo)" />
      {/* Moon disc */}
      <circle cx="600" cy="95" r="58" fill="#fef9c3" />
      <circle cx="600" cy="95" r="56" fill="#fef08a" opacity="0.9" />
      {/* Moon surface detail craters */}
      <circle cx="580" cy="85" r="7" fill="#fde68a" opacity="0.5" />
      <circle cx="615" cy="105" r="5" fill="#fde68a" opacity="0.4" />
      <circle cx="595" cy="118" r="4" fill="#fde68a" opacity="0.35" />
      <circle cx="624" cy="78" r="3" fill="#fde68a" opacity="0.3" />

      {/* ═══════════════ DISTANT PAGODA SILHOUETTES ═══════════════ */}
      {/* Far left small pagoda */}
      <g opacity="0.25" fill="#1a1040">
        <rect x="80" y="280" width="30" height="90" />
        <polygon points="65,280 95,265 125,280" />
        <rect x="73" y="255" width="24" height="28" />
        <polygon points="62,255 85,242 108,255" />
        <rect x="78" y="232" width="14" height="24" />
        <polygon points="70,232 85,222 100,232" />
        <rect x="82" y="215" width="6" height="18" />
      </g>
      {/* Far right small pagoda */}
      <g opacity="0.22" fill="#1a1040">
        <rect x="1100" y="285" width="28" height="85" />
        <polygon points="1086,285 1114,270 1142,285" />
        <rect x="1090" y="260" width="22" height="26" />
        <polygon points="1082,260 1101,247 1120,260" />
        <rect x="1094" y="238" width="12" height="22" />
        <polygon points="1088,238 1100,228 1112,238" />
      </g>

      {/* ═══════════════ MAIN PAVILION STRUCTURE ═══════════════ */}

      {/* --- UPPER ROOF (main curved roof) --- */}
      {/* Roof underside shadow */}
      <path
        d="M 120 210 Q 200 195 300 192 Q 600 182 900 192 Q 1000 195 1080 210 L 1080 225 Q 900 212 600 202 Q 300 212 120 225 Z"
        fill="#0a0820"
        opacity="0.8"
      />
      {/* Main roof body */}
      <path
        d="M 80 220 Q 180 198 300 194 Q 600 183 900 194 Q 1020 198 1120 220 L 1100 240 Q 900 222 600 212 Q 300 222 100 240 Z"
        fill="url(#roofGrad)"
        filter="url(#softShadow)"
      />
      {/* Roof ridge line */}
      <path
        d="M 200 208 Q 600 195 1000 208"
        stroke="#4a4a7a" strokeWidth="3" opacity="0.7"
      />
      {/* Upswept eave tips */}
      <path d="M 80 220 Q 40 215 20 205 Q 30 218 75 235 Z" fill="#1a1a3e" />
      <path d="M 1120 220 Q 1160 215 1180 205 Q 1170 218 1125 235 Z" fill="#1a1a3e" />
      {/* Roof tiles row */}
      {Array.from({ length: 20 }).map((_, i) => (
        <ellipse
          key={`tile-${i}`}
          cx={120 + i * 52}
          cy={222}
          rx="22" ry="6"
          fill="url(#tileEdge)"
          opacity="0.8"
        />
      ))}
      {/* Ornamental roof crest finial */}
      <polygon points="598,183 600,175 602,183" fill="#facc15" opacity="0.9" />
      <circle cx="600" cy="175" r="5" fill="#f59e0b" />

      {/* --- LOWER ROOF (secondary overhanging eave) --- */}
      <path
        d="M 150 295 Q 600 278 1050 295 L 1035 312 Q 600 296 165 312 Z"
        fill="#111128"
      />
      {/* Lower eave upswept tips */}
      <path d="M 150 295 Q 118 290 105 282 Q 115 296 155 308 Z" fill="#1a1a38" />
      <path d="M 1050 295 Q 1082 290 1095 282 Q 1085 296 1045 308 Z" fill="#1a1a38" />
      {Array.from({ length: 16 }).map((_, i) => (
        <ellipse
          key={`tile2-${i}`}
          cx={165 + i * 58}
          cy={296}
          rx="24" ry="5"
          fill="#2e2e5e"
          opacity="0.7"
        />
      ))}

      {/* --- WOODEN PILLARS --- */}
      {[185, 390, 600, 810, 1015].map((x, i) => (
        <g key={`pillar-${i}`}>
          {/* Pillar shadow */}
          <rect x={x + 4} y={312} width={28} height={148} fill="#0a0505" opacity="0.5" rx="2" />
          {/* Pillar body */}
          <rect x={x} y={312} width={28} height={148} fill="url(#woodDark)" rx="2" />
          {/* Pillar highlight */}
          <rect x={x + 3} y={312} width={4} height={148} fill="#5c3317" opacity="0.5" rx="1" />
          {/* Pillar cap */}
          <rect x={x - 4} y={308} width={36} height={10} fill="url(#woodMid)" rx="2" />
        </g>
      ))}

      {/* --- MAIN HORIZONTAL BEAM --- */}
      <rect x="178" y="308" width="844" height="14" fill="url(#woodMid)" />
      <rect x="178" y="308" width="844" height="3" fill="#7c4a1e" opacity="0.6" />

      {/* --- WOODEN FLOOR / STAGE PLATFORM --- */}
      <rect x="160" y="456" width="880" height="24" fill="url(#floorGrad)" />
      {/* Floor planks */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={`plank-${i}`}
          x1={160 + i * 74} y1="456"
          x2={160 + i * 74} y2="480"
          stroke="#3d2310" strokeWidth="1.5" opacity="0.6"
        />
      ))}
      {/* Stage front edge */}
      <rect x="155" y="452" width="890" height="6" fill="#92501f" />
      {/* Stage step */}
      <rect x="185" y="476" width="830" height="4" fill="#7c4a1e" opacity="0.5" />

      {/* --- SHOJI SCREEN BACKGROUNDS (paper walls) --- */}
      {[[213, 326], [418, 326], [628, 326], [838, 326]].map(([x, y], i) => (
        <g key={`shoji-${i}`}>
          <rect x={x} y={y} width={164} height={126} fill="#1a0f08" opacity="0.6" rx="1" />
          {/* Grid lines */}
          {[0, 55, 110].map((dx) => (
            <line key={`sh-v-${i}-${dx}`} x1={x + dx + 27} y1={y + 6} x2={x + dx + 27} y2={y + 120} stroke="#3d2310" strokeWidth="1" opacity="0.4" />
          ))}
          {[0, 40, 80].map((dy) => (
            <line key={`sh-h-${i}-${dy}`} x1={x + 6} y1={y + dy + 20} x2={x + 158} y2={y + dy + 20} stroke="#3d2310" strokeWidth="1" opacity="0.4" />
          ))}
        </g>
      ))}

      {/* ═══════════════ HANGING HONOUR BANNERS ═══════════════ */}

      {/* Banner 1: Competitions (Amber) — between pillars 1 & 2 */}
      <g filter="url(#softShadow)">
        <line x1="243" y1="322" x2="243" y2="328" stroke="#b45309" strokeWidth="3" />
        <rect x="220" y="328" width="46" height="120" fill="url(#bannerAmber)" rx="2" />
        {/* Banner top rod */}
        <rect x="216" y="325" width="54" height="5" fill="#92501f" rx="1" />
        {/* Kanji character */}
        <text x="243" y="395" textAnchor="middle" fill="#f59e0b" fontSize="38" fontFamily="serif" opacity="0.9">武</text>
        {/* Bottom fringe */}
        {[0, 8, 16, 24, 32, 40].map((dx) => (
          <line key={`fringe1-${dx}`} x1={222 + dx} y1="448" x2={221 + dx} y2="458" stroke="#b45309" strokeWidth="1.5" opacity="0.7" />
        ))}
        {/* Banner border */}
        <rect x="220" y="328" width="46" height="120" stroke="#f59e0b" strokeWidth="1" fill="none" opacity="0.4" rx="2" />
      </g>

      {/* Banner 2: Rankings (Blue) — between pillars 2 & 3 */}
      <g filter="url(#softShadow)">
        <line x1="453" y1="322" x2="453" y2="328" stroke="#0369a1" strokeWidth="3" />
        <rect x="430" y="328" width="46" height="120" fill="url(#bannerBlue)" rx="2" />
        <rect x="426" y="325" width="54" height="5" fill="#0c4a6e" rx="1" />
        <text x="453" y="395" textAnchor="middle" fill="#38bdf8" fontSize="38" fontFamily="serif" opacity="0.9">道</text>
        {[0, 8, 16, 24, 32, 40].map((dx) => (
          <line key={`fringe2-${dx}`} x1={432 + dx} y1="448" x2={431 + dx} y2="458" stroke="#0369a1" strokeWidth="1.5" opacity="0.7" />
        ))}
        <rect x="430" y="328" width="46" height="120" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.4" rx="2" />
      </g>

      {/* Banner 3: Academic (Purple) — between pillars 3 & 4 */}
      <g filter="url(#softShadow)">
        <line x1="663" y1="322" x2="663" y2="328" stroke="#6d28d9" strokeWidth="3" />
        <rect x="640" y="328" width="46" height="120" fill="url(#bannerPurple)" rx="2" />
        <rect x="636" y="325" width="54" height="5" fill="#3b0764" rx="1" />
        <text x="663" y="395" textAnchor="middle" fill="#a78bfa" fontSize="38" fontFamily="serif" opacity="0.9">知</text>
        {[0, 8, 16, 24, 32, 40].map((dx) => (
          <line key={`fringe3-${dx}`} x1={642 + dx} y1="448" x2={641 + dx} y2="458" stroke="#6d28d9" strokeWidth="1.5" opacity="0.7" />
        ))}
        <rect x="640" y="328" width="46" height="120" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.4" rx="2" />
      </g>

      {/* Banner 4: Leadership (Green) — between pillars 4 & 5 */}
      <g filter="url(#softShadow)">
        <line x1="873" y1="322" x2="873" y2="328" stroke="#15803d" strokeWidth="3" />
        <rect x="850" y="328" width="46" height="120" fill="url(#bannerGreen)" rx="2" />
        <rect x="846" y="325" width="54" height="5" fill="#052e16" rx="1" />
        <text x="873" y="395" textAnchor="middle" fill="#86efac" fontSize="38" fontFamily="serif" opacity="0.9">将</text>
        {[0, 8, 16, 24, 32, 40].map((dx) => (
          <line key={`fringe4-${dx}`} x1={852 + dx} y1="448" x2={851 + dx} y2="458" stroke="#15803d" strokeWidth="1.5" opacity="0.7" />
        ))}
        <rect x="850" y="328" width="46" height="120" stroke="#86efac" strokeWidth="1" fill="none" opacity="0.4" rx="2" />
      </g>

      {/* ═══════════════ PAPER LANTERNS (Chochin) ═══════════════ */}

      {/* Large central lantern */}
      <g className="lantern-sway" filter="url(#lanternBloom)">
        <line x1="600" y1="240" x2="600" y2="256" stroke="#7c4a1e" strokeWidth="2.5" />
        <ellipse cx="600" cy="264" rx="6" ry="4" fill="#5c3317" />
        <ellipse cx="600" cy="296" rx="22" ry="36" fill="#dc2626" />
        <ellipse cx="600" cy="268" rx="20" ry="12" fill="url(#lanternGlow1)" opacity="0.95" />
        {/* Lantern ribs */}
        {[-3, -1, 1, 3].map((dy) => (
          <ellipse key={`rib-c-${dy}`} cx="600" cy={282 + dy * 8} rx="22" ry="3" stroke="#991b1b" strokeWidth="0.8" fill="none" opacity="0.6" />
        ))}
        <ellipse cx="600" cy="325" rx="6" ry="4" fill="#5c3317" />
        <line x1="600" y1="329" x2="600" y2="336" stroke="#7c4a1e" strokeWidth="2" />
        {/* Inner glow */}
        <ellipse cx="600" cy="290" rx="14" ry="22" fill="url(#lanternGlow2)" opacity="0.5" />
      </g>

      {/* Left lantern cluster */}
      {[[340, 248, 18, 28], [420, 252, 14, 22]].map(([cx, cy, rx, ry], i) => (
        <g key={`lantern-l-${i}`} className="lantern-sway" style={{ animationDelay: `${i * 0.8}s` }} filter="url(#lanternBloom)">
          <line x1={cx} y1={cy - 8} x2={cx} y2={cy} stroke="#7c4a1e" strokeWidth="2" />
          <ellipse cx={cx} cy={cy + ry / 2} rx={rx} ry={ry} fill="#b91c1c" />
          <ellipse cx={cx} cy={cy + 4} rx={rx - 2} ry={9} fill="url(#lanternGlow1)" opacity="0.85" />
          {[-1, 1].map((d) => (
            <ellipse key={`rib-l-${i}-${d}`} cx={cx} cy={cy + ry / 2 + d * 8} rx={rx} ry="2.5" stroke="#991b1b" strokeWidth="0.8" fill="none" opacity="0.5" />
          ))}
          <ellipse cx={cx} cy={cy + ry} rx="4" ry="3" fill="#5c3317" />
        </g>
      ))}

      {/* Right lantern cluster */}
      {[[780, 248, 14, 22], [860, 244, 18, 28]].map(([cx, cy, rx, ry], i) => (
        <g key={`lantern-r-${i}`} className="lantern-sway" style={{ animationDelay: `${1.2 + i * 0.7}s` }} filter="url(#lanternBloom)">
          <line x1={cx} y1={cy - 8} x2={cx} y2={cy} stroke="#7c4a1e" strokeWidth="2" />
          <ellipse cx={cx} cy={cy + ry / 2} rx={rx} ry={ry} fill="#b91c1c" />
          <ellipse cx={cx} cy={cy + 4} rx={rx - 2} ry={9} fill="url(#lanternGlow1)" opacity="0.85" />
          {[-1, 1].map((d) => (
            <ellipse key={`rib-r-${i}-${d}`} cx={cx} cy={cy + ry / 2 + d * 8} rx={rx} ry="2.5" stroke="#991b1b" strokeWidth="0.8" fill="none" opacity="0.5" />
          ))}
          <ellipse cx={cx} cy={cy + ry} rx="4" ry="3" fill="#5c3317" />
        </g>
      ))}

      {/* ═══════════════ CENTRAL PODIUM & TROPHY ═══════════════ */}

      {/* Podium base steps */}
      <rect x="520" y="432" width="160" height="24" fill="url(#podiumGrad)" rx="2" />
      <rect x="535" y="416" width="130" height="18" fill="url(#woodLight)" rx="2" />
      <rect x="548" y="402" width="104" height="16" fill="#92501f" rx="2" />
      {/* Podium top surface */}
      <rect x="544" y="398" width="112" height="6" fill="#b45309" rx="1" />

      {/* Trophy */}
      <g filter="url(#glowFilter)">
        {/* Cup */}
        <path d="M 575 360 Q 565 375 568 392 L 632 392 Q 635 375 625 360 Z" fill="url(#trophyGold)" />
        {/* Cup rim */}
        <rect x="572" y="358" width="56" height="5" fill="#fef08a" rx="2" />
        {/* Stem */}
        <rect x="596" y="392" width="8" height="20" fill="#f59e0b" />
        {/* Base */}
        <rect x="582" y="410" width="36" height="8" fill="#d97706" rx="1" />
        {/* Star on cup */}
        <text x="600" y="385" textAnchor="middle" fill="#fef9c3" fontSize="18" fontFamily="serif">★</text>
        {/* Handles */}
        <path d="M 572 370 Q 558 368 558 380 Q 558 390 572 388" stroke="#f59e0b" strokeWidth="3" fill="none" />
        <path d="M 628 370 Q 642 368 642 380 Q 642 390 628 388" stroke="#f59e0b" strokeWidth="3" fill="none" />
      </g>

      {/* ═══════════════ CHERRY BLOSSOM PETALS ═══════════════ */}
      {[
        [150, 160, 0], [280, 200, 0.5], [400, 140, 1], [520, 175, 1.5],
        [700, 155, 0.8], [820, 185, 0.2], [940, 145, 1.3], [1060, 170, 0.6],
        [200, 300, 0.4], [750, 280, 1.1], [1000, 260, 0.7],
        [350, 260, 1.6], [480, 290, 0.3],
      ].map(([x, y, delay], i) => (
        <g
          key={`petal-${i}`}
          className="petal-fall"
          style={{ animationDelay: `${delay}s`, transformOrigin: `${x}px ${y}px` }}
        >
          <ellipse
            cx={x} cy={y}
            rx={i % 3 === 0 ? 5 : 4} ry={i % 3 === 0 ? 3 : 2.5}
            fill="#fce7f3"
            opacity={0.55 + (i % 4) * 0.1}
            transform={`rotate(${(i * 37) % 180} ${x} ${y})`}
          />
        </g>
      ))}

      {/* ═══════════════ DECORATIVE GROUND LINE ═══════════════ */}
      <rect x="0" y="475" width="1200" height="5" fill="#0a0520" opacity="0.8" />
      {/* Ground texture stones */}
      {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080].map((x, i) => (
        <rect key={`stone-${i}`} x={x} y={475} width="110" height="5" fill={i % 2 === 0 ? '#0f0a28' : '#0a0820'} />
      ))}
    </svg>
  )
}
