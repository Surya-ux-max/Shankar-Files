export default function CitySkylineSVG({
  hoveredTower,
  activeId,
  onHoverTower,
  onSelectTower
}) {
  const isZohoActive = hoveredTower === 'zoho' || activeId === 'zoho'
  const isInfosysActive = hoveredTower === 'infosys' || activeId === 'infosys'

  return (
    <svg
      className="metropolis-master-svg"
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Sky Gradient: Morning/Sunset warm parchment to soft azure */}
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f7ecd7" />
          <stop offset="35%" stopColor="#faefe0" />
          <stop offset="70%" stopColor="#fdf7ed" />
          <stop offset="100%" stopColor="#f3ede2" />
        </linearGradient>

        {/* Sun Glow Gradient */}
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#fef08a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fef9c3" stopOpacity="0" />
        </radialGradient>

        {/* River Water Gradient */}
        <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9cc5c9" />
          <stop offset="45%" stopColor="#b4d7dc" />
          <stop offset="85%" stopColor="#a7cfd4" />
          <stop offset="100%" stopColor="#96bebe" />
        </linearGradient>

        {/* Zoho Glass Facade Gradient */}
        <linearGradient id="zohoGlass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d1e8ee" />
          <stop offset="50%" stopColor="#eaf4f7" />
          <stop offset="100%" stopColor="#c3dfe6" />
        </linearGradient>

        {/* Infosys Glass Facade Gradient */}
        <linearGradient id="infosysGlass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c9e2ee" />
          <stop offset="55%" stopColor="#e3f0f7" />
          <stop offset="100%" stopColor="#bad7e5" />
        </linearGradient>

        {/* Beacon Glow Filters */}
        <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ================= 1. SKY & DISTANT HORIZON ================= */}
      <rect width="1400" height="700" fill="url(#skyGrad)" />

      {/* Sun on the distant right horizon */}
      <circle cx="1240" cy="380" r="110" fill="url(#sunGlow)" />
      <circle cx="1240" cy="380" r="42" fill="#fed7aa" opacity="0.85" />
      <circle cx="1240" cy="380" r="32" fill="#fffbeb" opacity="0.9" />

      {/* Distant Mountain Ridges */}
      <path
        d="M 980 430 Q 1120 370 1230 400 T 1400 390 L 1400 480 L 980 480 Z"
        fill="#e5dac7"
        opacity="0.7"
      />
      <path
        d="M 1080 420 Q 1200 380 1310 405 T 1400 395 L 1400 480 L 1080 480 Z"
        fill="#ded1bd"
        opacity="0.8"
      />

      {/* Distant Communications Spire / Needle Tower */}
      <g transform="translate(1340, 310)" stroke="#8c7e6c" strokeWidth="1.2">
        <line x1="0" y1="90" x2="0" y2="0" strokeWidth="2.2" />
        <line x1="-12" y1="65" x2="12" y2="65" />
        <line x1="-8" y1="45" x2="8" y2="45" />
        <ellipse cx="0" cy="30" rx="9" ry="3.5" fill="#f7efe1" stroke="#8c7e6c" strokeWidth="1.2" />
        <circle cx="0" cy="0" r="2.5" fill="#8c7e6c" />
      </g>

      {/* Flocks of Soaring Birds */}
      <g stroke="#71624d" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.75">
        <path d="M 850 100 Q 856 94 862 100 Q 868 94 874 100" />
        <path d="M 878 114 Q 883 109 888 114 Q 893 109 898 114" strokeWidth="1.2" />
        <path d="M 835 125 Q 839 121 843 125 Q 847 121 851 125" strokeWidth="1.1" />
        <path d="M 1020 160 Q 1025 155 1030 160 Q 1035 155 1040 160" />
        <path d="M 1045 174 Q 1049 170 1053 174 Q 1057 170 1061 174" strokeWidth="1.2" />
      </g>

      {/* ================= 2. BACKGROUND CITY ARCHITECTURE ================= */}
      {/* Distant Low-Rise Skyline Silhouettes */}
      <g fill="#dfd6c4" stroke="#a39682" strokeWidth="1">
        {/* Buildings left */}
        <rect x="340" y="360" width="45" height="120" />
        <rect x="380" y="340" width="35" height="140" />
        <rect x="410" y="320" width="50" height="160" />
        <rect x="455" y="350" width="40" height="130" />
        {/* Mid-skyline clusters */}
        <rect x="580" y="330" width="55" height="150" />
        <rect x="630" y="310" width="40" height="170" />
        <rect x="760" y="340" width="50" height="140" />
        <rect x="805" y="315" width="45" height="165" />
        <rect x="845" y="360" width="40" height="120" />
        <rect x="880" y="330" width="50" height="150" />
        {/* Right skyline clusters */}
        <rect x="1110" y="340" width="45" height="140" />
        <rect x="1150" y="325" width="55" height="155" />
        <rect x="1200" y="355" width="50" height="125" />
        <rect x="1245" y="370" width="45" height="110" />
      </g>

      {/* Midground Detailed Buildings */}
      <g fill="#ede4d2" stroke="#685946" strokeWidth="1.3">
        {/* Left Cluster */}
        <rect x="400" y="310" width="60" height="170" />
        {/* Windows hatching */}
        <line x1="412" y1="325" x2="412" y2="450" strokeDasharray="3 5" stroke="#968571" />
        <line x1="428" y1="325" x2="428" y2="450" strokeDasharray="3 5" stroke="#968571" />
        <line x1="444" y1="325" x2="444" y2="450" strokeDasharray="3 5" stroke="#968571" />

        <rect x="455" y="330" width="55" height="150" />
        <line x1="470" y1="345" x2="470" y2="450" strokeDasharray="3 5" stroke="#968571" />
        <line x1="492" y1="345" x2="492" y2="450" strokeDasharray="3 5" stroke="#968571" />

        {/* Center Buildings Between Towers */}
        <rect x="765" y="270" width="70" height="210" fill="#f0e9da" />
        <line x1="780" y1="285" x2="780" y2="450" strokeDasharray="4 6" stroke="#968571" />
        <line x1="800" y1="285" x2="800" y2="450" strokeDasharray="4 6" stroke="#968571" />
        <line x1="820" y1="285" x2="820" y2="450" strokeDasharray="4 6" stroke="#968571" />

        {/* Right Buildings Beside Infosys */}
        <rect x="1130" y="330" width="80" height="150" fill="#f0e8d9" />
        <line x1="1150" y1="345" x2="1150" y2="450" strokeDasharray="3 5" stroke="#968571" />
        <line x1="1175" y1="345" x2="1175" y2="450" strokeDasharray="3 5" stroke="#968571" />
        <line x1="1195" y1="345" x2="1195" y2="450" strokeDasharray="3 5" stroke="#968571" />
      </g>

      {/* ================= 3. ZOHO CORPORATION SKYSCRAPER ================= */}
      <g
        className={`tower-entity zoho-tower-entity ${isZohoActive ? 'is-active' : ''}`}
        onClick={() => onSelectTower('zoho')}
        onMouseEnter={() => onHoverTower('zoho')}
        onMouseLeave={() => onHoverTower(null)}
        cursor="pointer"
      >
        {/* Generous Invisible Hover Hit Area */}
        <rect x="615" y="20" width="140" height="460" fill="transparent" pointerEvents="all" />

        {/* Crown Radiating Sunbeams (Artistic pencil rays) */}
        <g stroke="#eab308" strokeWidth="1.6" strokeLinecap="round" opacity={isZohoActive ? 1 : 0.65}>
          <line x1="685" y1="45" x2="685" y2="15" strokeWidth="2.2" />
          <line x1="670" y1="52" x2="650" y2="30" />
          <line x1="700" y1="52" x2="720" y2="30" />
          <line x1="655" y1="62" x2="630" y2="52" />
          <line x1="715" y1="62" x2="740" y2="52" />
          <line x1="685" y1="42" x2="675" y2="25" strokeDasharray="2 3" />
          <line x1="685" y1="42" x2="695" y2="25" strokeDasharray="2 3" />
        </g>

        {/* Angled Modern Spire & Crown Roofline */}
        <polygon
          points="625,75 685,45 745,85 745,480 625,480"
          fill="url(#zohoGlass)"
          stroke="#3d3326"
          strokeWidth="2.4"
        />

        {/* Facade Vertical & Horizontal Glass Mullion Lines */}
        <g stroke="#5e7582" strokeWidth="1.2" opacity="0.6">
          <line x1="655" y1="68" x2="655" y2="480" />
          <line x1="685" y1="46" x2="685" y2="480" strokeWidth="1.6" />
          <line x1="715" y1="72" x2="715" y2="480" />

          {/* Diagonal Glass Reflective Sheen Bands */}
          <path d="M 626 120 L 744 190" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
          <path d="M 626 210 L 744 280" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
          <path d="M 626 310 L 744 380" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />

          {/* Horizontal Floor Plates */}
          {[...Array(14)].map((_, i) => (
            <line key={`zf-${i}`} x1="626" y1={100 + i * 26} x2="744" y2={100 + i * 26} strokeDasharray="4 4" />
          ))}
        </g>

        {/* Colorful Zoho Emblem on the Glass Facade */}
        <g transform="translate(640, 115)">
          {/* 4 Interlinked Rounded Squares */}
          <rect x="0" y="0" width="18" height="18" rx="4" fill="#fee2e2" stroke="#e11d48" strokeWidth="2.4" />
          <rect x="14" y="0" width="18" height="18" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.4" />
          <rect x="28" y="0" width="18" height="18" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.4" />
          <rect x="42" y="0" width="18" height="18" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2.4" />
        </g>

        {/* Bold Signage: ZOHO */}
        <text
          x="685"
          y="156"
          textAnchor="middle"
          fill="#1e293b"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="2px"
        >
          ZOHO
        </text>

        {/* Interactive Beacon Core on Spire */}
        <circle cx="685" cy="45" r="5.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" filter="url(#glow-gold)" />
      </g>

      {/* ================= 4. INFOSYS SKYSCRAPER ================= */}
      <g
        className={`tower-entity infosys-tower-entity ${isInfosysActive ? 'is-active' : ''}`}
        onClick={() => onSelectTower('infosys')}
        onMouseEnter={() => onHoverTower('infosys')}
        onMouseLeave={() => onHoverTower(null)}
        cursor="pointer"
      >
        {/* Generous Invisible Hover Hit Area */}
        <rect x="930" y="130" width="130" height="355" fill="transparent" pointerEvents="all" />

        {/* Crown Radiating Sunbeams */}
        <g stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity={isInfosysActive ? 1 : 0.65}>
          <line x1="995" y1="160" x2="995" y2="135" strokeWidth="2" />
          <line x1="980" y1="165" x2="962" y2="148" />
          <line x1="1010" y1="165" x2="1028" y2="148" />
          <line x1="970" y1="175" x2="950" y2="168" />
          <line x1="1020" y1="175" x2="1040" y2="168" />
        </g>

        {/* Tower Main Geometry */}
        <polygon
          points="945,185 995,160 1045,180 1045,480 945,480"
          fill="url(#infosysGlass)"
          stroke="#3d3326"
          strokeWidth="2.4"
        />

        {/* Vertical Glass Mullions & Facade Reflections */}
        <g stroke="#537b99" strokeWidth="1.2" opacity="0.65">
          <line x1="970" y1="177" x2="970" y2="480" />
          <line x1="995" y1="161" x2="995" y2="480" strokeWidth="1.5" />
          <line x1="1020" y1="174" x2="1020" y2="480" />

          {/* Diagonal Glass Sheen */}
          <path d="M 946 220 L 1044 280" stroke="#ffffff" strokeWidth="2.5" opacity="0.75" />
          <path d="M 946 300 L 1044 360" stroke="#ffffff" strokeWidth="2" opacity="0.6" />

          {/* Floor Plates */}
          {[...Array(11)].map((_, i) => (
            <line key={`if-${i}`} x1="946" y1={205 + i * 25} x2="1044" y2={205 + i * 25} strokeDasharray="3 4" />
          ))}
        </g>

        {/* Infosys Signage on Glass Facade */}
        <text
          x="995"
          y="235"
          textAnchor="middle"
          fill="#0284c7"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="800"
          fontSize="20"
          letterSpacing="0.5px"
        >
          Infosys
        </text>

        {/* Beacon Core on Spire */}
        <circle cx="995" cy="160" r="5.5" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" filter="url(#glow-blue)" />
      </g>

      {/* ================= 5. THE WATERWAY & DOUBLE-TIER TRANSIT BRIDGES ================= */}
      {/* City River */}
      <rect x="0" y="520" width="1400" height="180" fill="url(#riverGrad)" />

      {/* Water Ripples & Watercolor Stroke Reflections */}
      <g stroke="#ffffff" strokeWidth="1.5" opacity="0.45" strokeLinecap="round">
        <line x1="200" y1="540" x2="350" y2="540" />
        <line x1="450" y1="555" x2="680" y2="555" />
        <line x1="300" y1="575" x2="520" y2="575" />
        <line x1="720" y1="545" x2="890" y2="545" />
        <line x1="640" y1="565" x2="820" y2="565" />
        <line x1="940" y1="550" x2="1140" y2="550" />
        <line x1="880" y1="580" x2="1050" y2="580" />
        <line x1="1120" y1="570" x2="1320" y2="570" />
      </g>

      {/* Lower Bridge (River Promenade / Highway with Moving Traffic) */}
      <g className="lower-bridge-layer">
        {/* Bridge Concrete Deck */}
        <rect x="300" y="505" width="1100" height="14" fill="#e2d8c3" stroke="#4a3e2c" strokeWidth="2" />
        <line x1="300" y1="512" x2="1400" y2="512" stroke="#ffffff" strokeDasharray="14 10" strokeWidth="1.4" />

        {/* Bridge Railing */}
        <line x1="300" y1="500" x2="1400" y2="500" stroke="#5c4a33" strokeWidth="1.8" />
        {[...Array(28)].map((_, i) => (
          <line key={`lr-${i}`} x1={320 + i * 38} y1="500" x2={320 + i * 38} y2="505" stroke="#5c4a33" strokeWidth="1.5" />
        ))}

        {/* Stylized Moving Bus & Cars */}
        {/* Yellow City Bus */}
        <g transform="translate(680, 486)" className="bridge-vehicle bus">
          <rect x="0" y="0" width="56" height="18" rx="3" fill="#f59e0b" stroke="#3d3226" strokeWidth="1.6" />
          <rect x="5" y="4" width="10" height="7" rx="1" fill="#e0f2fe" stroke="#3d3226" strokeWidth="1" />
          <rect x="18" y="4" width="10" height="7" rx="1" fill="#e0f2fe" stroke="#3d3226" strokeWidth="1" />
          <rect x="31" y="4" width="10" height="7" rx="1" fill="#e0f2fe" stroke="#3d3226" strokeWidth="1" />
          <rect x="44" y="4" width="8" height="7" rx="1" fill="#e0f2fe" stroke="#3d3226" strokeWidth="1" />
          <circle cx="12" cy="18" r="3" fill="#18181b" />
          <circle cx="44" cy="18" r="3" fill="#18181b" />
        </g>

        {/* Red Sedan */}
        <g transform="translate(540, 492)" className="bridge-vehicle car-1">
          <path d="M 0 12 L 8 4 L 24 4 L 32 12 Z" fill="#ef4444" stroke="#3d3226" strokeWidth="1.4" />
          <rect x="0" y="8" width="36" height="6" rx="2" fill="#ef4444" stroke="#3d3226" strokeWidth="1.4" />
          <circle cx="8" cy="14" r="2.8" fill="#18181b" />
          <circle cx="28" cy="14" r="2.8" fill="#18181b" />
        </g>

        {/* White Sedan */}
        <g transform="translate(860, 492)" className="bridge-vehicle car-2">
          <path d="M 0 12 L 8 4 L 24 4 L 32 12 Z" fill="#ffffff" stroke="#3d3226" strokeWidth="1.4" />
          <rect x="0" y="8" width="36" height="6" rx="2" fill="#ffffff" stroke="#3d3226" strokeWidth="1.4" />
          <circle cx="8" cy="14" r="2.8" fill="#18181b" />
          <circle cx="28" cy="14" r="2.8" fill="#18181b" />
        </g>
      </g>

      {/* Elevated Metro Transit Viaduct & Pillars */}
      <g className="metro-viaduct-layer">
        {/* Massive Concrete Pillars */}
        {[520, 720, 920, 1120, 1300].map((px) => (
          <g key={`pil-${px}`}>
            <rect x={px - 9} y="445" width="18" height="80" fill="#d8cbba" stroke="#4a3e2c" strokeWidth="2" />
            <rect x={px - 14} y="442" width="28" height="8" fill="#bfae99" stroke="#4a3e2c" strokeWidth="1.8" />
          </g>
        ))}

        {/* Viaduct Girder Beam */}
        <rect x="360" y="440" width="1040" height="14" fill="#cec0ad" stroke="#4a3e2c" strokeWidth="2.2" />
        <line x1="360" y1="447" x2="1400" y2="447" stroke="#4a3e2c" strokeWidth="1.2" />

        {/* Animated Commuter Train Gliding Across Elevated Track */}
        <g className="metro-commuter-train">
          {/* Train Car 1 (Engine) */}
          <g transform="translate(710, 420)">
            <path
              d="M 0 6 C 0 2, 4 0, 8 0 L 76 0 C 80 0, 84 4, 84 10 L 84 19 L 0 19 Z"
              fill="#ecfdf5"
              stroke="#2e382b"
              strokeWidth="2"
            />
            {/* Green Metro Line Stripe */}
            <rect x="0" y="11" width="84" height="4" fill="#10b981" />
            {/* Passenger Windows */}
            <rect x="10" y="3" width="12" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <rect x="28" y="3" width="12" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <rect x="46" y="3" width="12" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <rect x="64" y="3" width="14" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            {/* Train Wheels */}
            <circle cx="18" cy="19.5" r="2.5" fill="#334155" />
            <circle cx="66" cy="19.5" r="2.5" fill="#334155" />
          </g>

          {/* Train Car 2 */}
          <g transform="translate(798, 420)">
            <rect x="0" y="0" width="76" height="19" rx="2" fill="#ecfdf5" stroke="#2e382b" strokeWidth="2" />
            <rect x="0" y="11" width="76" height="4" fill="#10b981" />
            <rect x="8" y="3" width="12" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <rect x="26" y="3" width="12" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <rect x="44" y="3" width="12" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <rect x="60" y="3" width="10" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <circle cx="16" cy="19.5" r="2.5" fill="#334155" />
            <circle cx="60" cy="19.5" r="2.5" fill="#334155" />
          </g>

          {/* Train Car 3 */}
          <g transform="translate(878, 420)">
            <rect x="0" y="0" width="76" height="19" rx="2" fill="#ecfdf5" stroke="#2e382b" strokeWidth="2" />
            <rect x="0" y="11" width="76" height="4" fill="#10b981" />
            <rect x="8" y="3" width="12" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <rect x="26" y="3" width="12" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <rect x="44" y="3" width="12" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <rect x="60" y="3" width="10" height="6" rx="1" fill="#0284c7" opacity="0.8" />
            <circle cx="16" cy="19.5" r="2.5" fill="#334155" />
            <circle cx="60" cy="19.5" r="2.5" fill="#334155" />
          </g>
        </g>
      </g>

      {/* Lush Trees along the Riverbank Promenade */}
      <g stroke="#3a4a2a" strokeWidth="1.4">
        {[
          { x: 380, y: 504, r: 14, color: '#84cc16' },
          { x: 420, y: 502, r: 16, color: '#65a30d' },
          { x: 470, y: 504, r: 13, color: '#84cc16' },
          { x: 610, y: 504, r: 15, color: '#4d7c0f' },
          { x: 650, y: 502, r: 14, color: '#65a30d' },
          { x: 790, y: 504, r: 16, color: '#84cc16' },
          { x: 830, y: 502, r: 15, color: '#4d7c0f' },
          { x: 1040, y: 504, r: 17, color: '#65a30d' },
          { x: 1080, y: 502, r: 14, color: '#84cc16' },
          { x: 1220, y: 504, r: 15, color: '#4d7c0f' },
          { x: 1260, y: 502, r: 16, color: '#65a30d' }
        ].map((tree, i) => (
          <ellipse
            key={`rt-${i}`}
            cx={tree.x}
            cy={tree.y}
            rx={tree.r}
            ry={tree.r * 1.1}
            fill={tree.color}
          />
        ))}
      </g>
    </svg>
  )
}
