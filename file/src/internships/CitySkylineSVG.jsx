import { getLightingState } from './skylineLighting'

export default function CitySkylineSVG({
  hoveredTower,
  activeId,
  onHoverTower,
  onSelectTower,
  timeOfDay = 0.25
}) {
  const isZohoActive = hoveredTower === 'zoho' || activeId === 'zoho'
  const isInfosysActive = hoveredTower === 'infosys' || activeId === 'infosys'

  // Calculate celestial, sky, and illumination parameters from the roll lever
  const lighting = getLightingState(timeOfDay)

  // Star positions for night sky
  const stars = [
    { x: 280, y: 40, r: 1.5, d: '0s' },
    { x: 340, y: 70, r: 1.2, d: '1.2s' },
    { x: 420, y: 35, r: 2.0, d: '0.5s' },
    { x: 500, y: 90, r: 1.4, d: '2.1s' },
    { x: 560, y: 45, r: 1.8, d: '1.6s' },
    { x: 620, y: 25, r: 1.2, d: '0.8s' },
    { x: 740, y: 30, r: 2.2, d: '1.9s' },
    { x: 790, y: 65, r: 1.5, d: '0.3s' },
    { x: 860, y: 40, r: 1.8, d: '2.5s' },
    { x: 910, y: 80, r: 1.3, d: '1.1s' },
    { x: 980, y: 30, r: 2.0, d: '0.7s' },
    { x: 1040, y: 60, r: 1.5, d: '2.2s' },
    { x: 1100, y: 25, r: 1.9, d: '1.4s' },
    { x: 1160, y: 75, r: 1.3, d: '0.9s' },
    { x: 1240, y: 40, r: 2.2, d: '2.0s' },
    { x: 1310, y: 60, r: 1.4, d: '0.4s' },
    { x: 1370, y: 35, r: 1.7, d: '1.7s' },
    { x: 380, y: 115, r: 1.2, d: '2.3s' },
    { x: 470, y: 140, r: 1.6, d: '1.0s' },
    { x: 830, y: 110, r: 1.4, d: '1.8s' },
    { x: 1200, y: 120, r: 1.8, d: '0.6s' }
  ]

  return (
    <svg
      className="metropolis-master-svg"
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Dynamic Sky Gradient (Transitions from Dawn -> Day -> Sunset -> Deep Night) */}
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={lighting.skyTop} />
          <stop offset="50%" stopColor={lighting.skyMid} />
          <stop offset="100%" stopColor={lighting.skyBottom} />
        </linearGradient>

        {/* Dynamic Sun Glow */}
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor={timeOfDay > 0.55 ? '#fb923c' : '#fef08a'}
            stopOpacity="0.9"
          />
          <stop
            offset="45%"
            stopColor={timeOfDay > 0.55 ? '#f97316' : '#fde047'}
            stopOpacity="0.45"
          />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>

        {/* Lunar Glow */}
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#bae6fd" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>

        {/* Dynamic River Water Gradient */}
        <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={lighting.riverStart} />
          <stop offset="50%" stopColor={lighting.riverMid} />
          <stop offset="100%" stopColor={lighting.riverEnd} />
        </linearGradient>

        {/* Dynamic Zoho Glass Facade */}
        <linearGradient id="zohoGlass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={lighting.zohoGlass0} />
          <stop offset="50%" stopColor={lighting.zohoGlass50} />
          <stop offset="100%" stopColor={lighting.zohoGlass0} />
        </linearGradient>

        {/* Dynamic Infosys Glass Facade */}
        <linearGradient id="infosysGlass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={lighting.infosysGlass0} />
          <stop offset="50%" stopColor={lighting.infosysGlass50} />
          <stop offset="100%" stopColor={lighting.infosysGlass0} />
        </linearGradient>

        {/* Beacons and Neon Glow Filters */}
        <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-lamp" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Streetlight light cone gradient */}
        <linearGradient id="lampConeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#fef08a" stopOpacity="0.02" />
        </linearGradient>

        {/* Headlight cone gradient */}
        <linearGradient id="headlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ================= 1. SKY BACKDROP ================= */}
      <rect width="1400" height="700" fill="url(#skyGrad)" />

      {/* ================= 2. TWINKLING STARS IN NIGHT SKY ================= */}
      {lighting.nightFactor > 0.05 && (
        <g
          className="night-stars-constellation"
          opacity={lighting.nightFactor}
          fill="#ffffff"
          style={{ transition: 'opacity 0.4s ease' }}
        >
          {stars.map((s, idx) => (
            <circle
              key={`star-${idx}`}
              cx={s.x}
              cy={s.y}
              r={s.r}
              className="star-twinkle"
              style={{ animationDelay: s.d }}
            />
          ))}
          {/* Subtle Constellation Lines */}
          <line x1="420" y1="35" x2="500" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          <line x1="500" y1="90" x2="560" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          <line x1="980" y1="30" x2="1040" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          <line x1="1040" y1="60" x2="1100" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        </g>
      )}

      {/* ================= 3. CELESTIAL BODIES: PASSING SUN ================= */}
      {lighting.sunOpacity > 0.01 && (
        <g
          className="celestial-sun-group"
          transform={`translate(${lighting.sunX}, ${lighting.sunY})`}
          opacity={lighting.sunOpacity}
          style={{ transition: 'transform 0.15s ease-out, opacity 0.3s ease' }}
        >
          {/* Solar corona / aura */}
          <circle cx="0" cy="0" r={timeOfDay > 0.55 ? 120 : 90} fill="url(#sunGlow)" />
          {/* Solar mid disc */}
          <circle
            cx="0"
            cy="0"
            r={timeOfDay > 0.55 ? 42 : 32}
            fill={timeOfDay > 0.55 ? '#fb923c' : '#fed7aa'}
            opacity="0.9"
          />
          {/* Core disc */}
          <circle
            cx="0"
            cy="0"
            r={timeOfDay > 0.55 ? 30 : 22}
            fill={timeOfDay > 0.55 ? '#ffedd5' : '#ffffff'}
            opacity="0.95"
          />
          {/* Sunbeams (visible in daylight & golden hour) */}
          <g
            stroke={timeOfDay > 0.55 ? '#ea580c' : '#f59e0b'}
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity={timeOfDay > 0.55 ? 0.6 : 0.85}
          >
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={`ray-${deg}`}
                x1={45 * Math.cos((deg * Math.PI) / 180)}
                y1={45 * Math.sin((deg * Math.PI) / 180)}
                x2={60 * Math.cos((deg * Math.PI) / 180)}
                y2={60 * Math.sin((deg * Math.PI) / 180)}
              />
            ))}
          </g>
        </g>
      )}

      {/* ================= 4. CELESTIAL BODIES: RISING MOON ================= */}
      {lighting.moonOpacity > 0.01 && (
        <g
          className="celestial-moon-group"
          transform={`translate(${lighting.moonX}, ${lighting.moonY})`}
          opacity={lighting.moonOpacity}
          style={{ transition: 'transform 0.15s ease-out, opacity 0.3s ease' }}
        >
          {/* Soft lunar atmosphere halo */}
          <circle cx="0" cy="0" r="70" fill="url(#moonGlow)" />
          {/* Moon orb */}
          <circle cx="0" cy="0" r="26" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Moon craters & surface depth */}
          <circle cx="-6" cy="-7" r="4.5" fill="#e2e8f0" opacity="0.8" />
          <circle cx="8" cy="4" r="5.5" fill="#e2e8f0" opacity="0.8" />
          <circle cx="-3" cy="9" r="3.5" fill="#e2e8f0" opacity="0.7" />
          <circle cx="9" cy="-8" r="2.5" fill="#e2e8f0" opacity="0.7" />
          {/* Crescent shadow edge */}
          <path
            d="M -18 18 A 26 26 0 0 0 18 -18 A 24 24 0 0 1 -18 18 Z"
            fill="#0f172a"
            opacity="0.22"
          />
        </g>
      )}

      {/* ================= 5. PASSING ANIMATED CLOUDS LAYER ================= */}
      <g
        className="passing-clouds-layer"
        fill={lighting.cloudFill}
        opacity={lighting.cloudOpacity}
        style={{ transition: 'fill 0.4s ease, opacity 0.4s ease' }}
      >
        {/* Cloud Group A: High gentle drift */}
        <g className="cloud-cluster cloud-speed-1">
          <ellipse cx="280" cy="90" rx="60" ry="20" />
          <ellipse cx="320" cy="78" rx="40" ry="24" />
          <ellipse cx="250" cy="95" rx="35" ry="16" />
          <ellipse cx="350" cy="94" rx="45" ry="16" />
        </g>

        {/* Cloud Group B: Mid-sky drift */}
        <g className="cloud-cluster cloud-speed-2">
          <ellipse cx="880" cy="130" rx="75" ry="24" />
          <ellipse cx="930" cy="115" rx="55" ry="28" />
          <ellipse cx="840" cy="138" rx="45" ry="18" />
          <ellipse cx="970" cy="135" rx="50" ry="18" />
        </g>

        {/* Cloud Group C: Horizon drift */}
        <g className="cloud-cluster cloud-speed-3">
          <ellipse cx="1220" cy="190" rx="90" ry="26" />
          <ellipse cx="1280" cy="172" rx="65" ry="30" />
          <ellipse cx="1170" cy="198" rx="50" ry="20" />
          <ellipse cx="1320" cy="196" rx="55" ry="18" />
        </g>

        {/* Cloud Group D: Distant Left */}
        <g className="cloud-cluster cloud-speed-4">
          <ellipse cx="40" cy="160" rx="70" ry="22" />
          <ellipse cx="80" cy="146" rx="45" ry="26" />
          <ellipse cx="115" cy="165" rx="45" ry="18" />
        </g>
      </g>

      {/* ================= 6. DISTANT MOUNTAINS & BIRDS ================= */}
      <path
        d="M 980 430 Q 1120 370 1230 400 T 1400 390 L 1400 480 L 980 480 Z"
        fill={lighting.mountain1}
        opacity="0.8"
        style={{ transition: 'fill 0.4s ease' }}
      />
      <path
        d="M 1080 420 Q 1200 380 1310 405 T 1400 395 L 1400 480 L 1080 480 Z"
        fill={lighting.mountain2}
        opacity="0.9"
        style={{ transition: 'fill 0.4s ease' }}
      />

      {/* Distant Spire / Needle Tower */}
      <g
        transform="translate(1340, 310)"
        stroke={lighting.nightFactor > 0.6 ? '#64748b' : '#8c7e6c'}
        strokeWidth="1.2"
      >
        <line x1="0" y1="90" x2="0" y2="0" strokeWidth="2.2" />
        <line x1="-12" y1="65" x2="12" y2="65" />
        <line x1="-8" y1="45" x2="8" y2="45" />
        <ellipse cx="0" cy="30" rx="9" ry="3.5" fill="#f7efe1" strokeWidth="1.2" />
        <circle cx="0" cy="0" r="2.5" fill="#ef4444" />
        {lighting.nightFactor > 0.3 && (
          <circle cx="0" cy="0" r="6" fill="#ef4444" opacity={lighting.nightFactor * 0.8} filter="url(#glow-gold)" />
        )}
      </g>

      {/* Birds (Active during day/dusk, resting at night) */}
      {lighting.nightFactor < 0.75 && (
        <g
          stroke={lighting.nightFactor > 0.4 ? '#475569' : '#71624d'}
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          opacity={Math.max(0, 0.8 - lighting.nightFactor)}
          style={{ transition: 'opacity 0.4s ease' }}
        >
          <path d="M 850 100 Q 856 94 862 100 Q 868 94 874 100" />
          <path d="M 878 114 Q 883 109 888 114 Q 893 109 898 114" strokeWidth="1.2" />
          <path d="M 835 125 Q 839 121 843 125 Q 847 121 851 125" strokeWidth="1.1" />
          <path d="M 1020 160 Q 1025 155 1030 160 Q 1035 155 1040 160" />
          <path d="M 1045 174 Q 1049 170 1053 174 Q 1057 170 1061 174" strokeWidth="1.2" />
        </g>
      )}

      {/* ================= 7. BACKGROUND CITY ARCHITECTURE ================= */}
      {/* Distant Low-Rise Skyline Silhouettes */}
      <g fill={lighting.distantCityFill} stroke="#1e293b" strokeWidth="0.8" style={{ transition: 'fill 0.4s ease' }}>
        <rect x="340" y="360" width="45" height="120" />
        <rect x="380" y="340" width="35" height="140" />
        <rect x="410" y="320" width="50" height="160" />
        <rect x="455" y="350" width="40" height="130" />
        <rect x="580" y="330" width="55" height="150" />
        <rect x="630" y="310" width="40" height="170" />
        <rect x="760" y="340" width="50" height="140" />
        <rect x="805" y="315" width="45" height="165" />
        <rect x="845" y="360" width="40" height="120" />
        <rect x="880" y="330" width="50" height="150" />
        <rect x="1110" y="340" width="45" height="140" />
        <rect x="1150" y="325" width="55" height="155" />
        <rect x="1200" y="355" width="50" height="125" />
        <rect x="1245" y="370" width="45" height="110" />
      </g>

      {/* Midground Detailed Buildings */}
      <g fill={lighting.midCityFill} stroke="#1e293b" strokeWidth="1.2" style={{ transition: 'fill 0.4s ease' }}>
        <rect x="400" y="310" width="60" height="170" />
        <rect x="455" y="330" width="55" height="150" />
        <rect x="765" y="270" width="70" height="210" />
        <rect x="1130" y="330" width="80" height="150" />
      </g>

      {/* Night Windows Across Background Skyline (Click on at night!) */}
      {lighting.windowLightOpacity > 0.05 && (
        <g
          className="city-night-windows"
          opacity={lighting.windowLightOpacity}
          style={{ transition: 'opacity 0.3s ease' }}
        >
          {/* Windows Cluster Left */}
          {[...Array(6)].map((_, r) => (
            <g key={`bw-l-${r}`}>
              <rect x="412" y={325 + r * 18} width="8" height="5" fill="#fef08a" />
              <rect x="428" y={325 + r * 18} width="8" height="5" fill="#fed7aa" />
              <rect x="444" y={325 + r * 18} width="8" height="5" fill="#e0f2fe" />
            </g>
          ))}
          {/* Windows Center Cluster */}
          {[...Array(8)].map((_, r) => (
            <g key={`bw-c-${r}`}>
              <rect x="780" y={290 + r * 18} width="10" height="6" fill="#fef08a" />
              <rect x="800" y={290 + r * 18} width="10" height="6" fill="#fed7aa" />
              <rect x="820" y={290 + r * 18} width="10" height="6" fill="#fde047" />
            </g>
          ))}
          {/* Windows Right Cluster */}
          {[...Array(6)].map((_, r) => (
            <g key={`bw-r-${r}`}>
              <rect x="1145" y={345 + r * 18} width="9" height="5" fill="#fef08a" />
              <rect x="1165" y={345 + r * 18} width="9" height="5" fill="#bae6fd" />
              <rect x="1185" y={345 + r * 18} width="9" height="5" fill="#fde047" />
            </g>
          ))}
        </g>
      )}

      {/* ================= 8. ZOHO CORPORATION SKYSCRAPER ================= */}
      <g
        className={`tower-entity zoho-tower-entity ${isZohoActive ? 'is-active' : ''}`}
        onClick={() => onSelectTower('zoho')}
        onMouseEnter={() => onHoverTower('zoho')}
        onMouseLeave={() => onHoverTower(null)}
        cursor="pointer"
      >
        <rect x="615" y="20" width="140" height="460" fill="transparent" pointerEvents="all" />

        {/* Crown Radiating Rays */}
        <g
          stroke={lighting.nightFactor > 0.5 ? '#fde047' : '#eab308'}
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity={isZohoActive ? 1 : 0.75}
        >
          <line x1="685" y1="45" x2="685" y2="12" strokeWidth="2.4" />
          <line x1="670" y1="52" x2="650" y2="28" />
          <line x1="700" y1="52" x2="720" y2="28" />
          <line x1="655" y1="62" x2="630" y2="52" />
          <line x1="715" y1="62" x2="740" y2="52" />
        </g>

        {/* Angled Modern Spire & Crown Roofline */}
        <polygon
          points="625,75 685,45 745,85 745,480 625,480"
          fill="url(#zohoGlass)"
          stroke="#1e293b"
          strokeWidth="2.4"
          style={{ transition: 'fill 0.4s ease' }}
        />

        {/* Facade Mullion Lines */}
        <g stroke={lighting.nightFactor > 0.5 ? '#38bdf8' : '#5e7582'} strokeWidth="1.2" opacity="0.6">
          <line x1="655" y1="68" x2="655" y2="480" />
          <line x1="685" y1="46" x2="685" y2="480" strokeWidth="1.6" />
          <line x1="715" y1="72" x2="715" y2="480" />

          {/* Floor Plates */}
          {[...Array(14)].map((_, i) => (
            <line key={`zf-${i}`} x1="626" y1={100 + i * 26} x2="744" y2={100 + i * 26} strokeDasharray="4 4" />
          ))}
        </g>

        {/* Zoho Office Windows - Turn ON at Night! */}
        {lighting.windowLightOpacity > 0.05 && (
          <g
            className="zoho-night-lit-windows"
            opacity={lighting.windowLightOpacity}
            style={{ transition: 'opacity 0.3s ease' }}
          >
            {[...Array(12)].map((_, floor) => {
              const y = 175 + floor * 25
              return (
                <g key={`znw-${floor}`}>
                  <rect x="635" y={y} width="14" height="11" rx="1.5" fill="#fef08a" />
                  <rect x="660" y={y} width="16" height="11" rx="1.5" fill="#fed7aa" />
                  <rect x="692" y={y} width="16" height="11" rx="1.5" fill="#fef08a" />
                  <rect x="718" y={y} width="14" height="11" rx="1.5" fill="#dcfce7" />
                </g>
              )
            })}
          </g>
        )}

        {/* Colorful Zoho Logo Quadrant */}
        <g transform="translate(640, 115)">
          <rect x="0" y="0" width="18" height="18" rx="4" fill="#fee2e2" stroke="#e11d48" strokeWidth="2.4" />
          <rect x="14" y="0" width="18" height="18" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.4" />
          <rect x="28" y="0" width="18" height="18" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.4" />
          <rect x="42" y="0" width="18" height="18" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="2.4" />
        </g>

        {/* Zoho Signage */}
        <text
          x="685"
          y="156"
          textAnchor="middle"
          fill={lighting.nightFactor > 0.6 ? '#ffffff' : '#1e293b'}
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="2px"
          filter={lighting.nightFactor > 0.6 ? 'url(#glow-gold)' : 'none'}
        >
          ZOHO
        </text>

        {/* Spire Beacon */}
        <circle
          cx="685"
          cy="45"
          r={lighting.nightFactor > 0.5 ? 7 : 5.5}
          fill="#fef08a"
          stroke="#ca8a04"
          strokeWidth="2"
          filter="url(#glow-gold)"
        />
      </g>

      {/* ================= 9. INFOSYS SKYSCRAPER ================= */}
      <g
        className={`tower-entity infosys-tower-entity ${isInfosysActive ? 'is-active' : ''}`}
        onClick={() => onSelectTower('infosys')}
        onMouseEnter={() => onHoverTower('infosys')}
        onMouseLeave={() => onHoverTower(null)}
        cursor="pointer"
      >
        <rect x="930" y="130" width="130" height="355" fill="transparent" pointerEvents="all" />

        {/* Crown Radiating Sunbeams */}
        <g
          stroke={lighting.nightFactor > 0.5 ? '#38bdf8' : '#0284c7'}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity={isInfosysActive ? 1 : 0.75}
        >
          <line x1="995" y1="160" x2="995" y2="130" strokeWidth="2.2" />
          <line x1="980" y1="165" x2="962" y2="145" />
          <line x1="1010" y1="165" x2="1028" y2="145" />
          <line x1="970" y1="175" x2="950" y2="168" />
          <line x1="1020" y1="175" x2="1040" y2="168" />
        </g>

        {/* Tower Main Geometry */}
        <polygon
          points="945,185 995,160 1045,180 1045,480 945,480"
          fill="url(#infosysGlass)"
          stroke="#1e293b"
          strokeWidth="2.4"
          style={{ transition: 'fill 0.4s ease' }}
        />

        {/* Vertical Glass Mullions */}
        <g stroke={lighting.nightFactor > 0.5 ? '#38bdf8' : '#537b99'} strokeWidth="1.2" opacity="0.65">
          <line x1="970" y1="177" x2="970" y2="480" />
          <line x1="995" y1="161" x2="995" y2="480" strokeWidth="1.5" />
          <line x1="1020" y1="174" x2="1020" y2="480" />

          {[...Array(11)].map((_, i) => (
            <line key={`if-${i}`} x1="946" y1={205 + i * 25} x2="1044" y2={205 + i * 25} strokeDasharray="3 4" />
          ))}
        </g>

        {/* Infosys Office Windows - Turn ON at Night! */}
        {lighting.windowLightOpacity > 0.05 && (
          <g
            className="infosys-night-lit-windows"
            opacity={lighting.windowLightOpacity}
            style={{ transition: 'opacity 0.3s ease' }}
          >
            {[...Array(10)].map((_, floor) => {
              const y = 250 + floor * 23
              return (
                <g key={`inw-${floor}`}>
                  <rect x="955" y={y} width="14" height="10" rx="1.5" fill="#bae6fd" />
                  <rect x="977" y={y} width="16" height="10" rx="1.5" fill="#e0f2fe" />
                  <rect x="1003" y={y} width="16" height="10" rx="1.5" fill="#38bdf8" />
                  <rect x="1025" y={y} width="12" height="10" rx="1.5" fill="#ffffff" />
                </g>
              )
            })}
          </g>
        )}

        {/* Infosys Signage */}
        <text
          x="995"
          y="235"
          textAnchor="middle"
          fill={lighting.nightFactor > 0.6 ? '#38bdf8' : '#0284c7'}
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="800"
          fontSize="20"
          letterSpacing="0.5px"
          filter={lighting.nightFactor > 0.6 ? 'url(#glow-blue)' : 'none'}
        >
          Infosys
        </text>

        {/* Spire Beacon */}
        <circle
          cx="995"
          cy="160"
          r={lighting.nightFactor > 0.5 ? 7 : 5.5}
          fill="#bae6fd"
          stroke="#0284c7"
          strokeWidth="2"
          filter="url(#glow-blue)"
        />
      </g>

      {/* ================= 10. RIVER WATERWAY & REFLECTIONS ================= */}
      <rect x="0" y="520" width="1400" height="180" fill="url(#riverGrad)" style={{ transition: 'fill 0.4s ease' }} />

      {/* Water Shimmer & Night Building Light Reflections */}
      <g stroke="#ffffff" strokeWidth="1.5" opacity={lighting.nightFactor > 0.5 ? 0.3 : 0.45} strokeLinecap="round">
        <line x1="200" y1="540" x2="350" y2="540" />
        <line x1="450" y1="555" x2="680" y2="555" />
        <line x1="300" y1="575" x2="520" y2="575" />
        <line x1="720" y1="545" x2="890" y2="545" />
        <line x1="640" y1="565" x2="820" y2="565" />
        <line x1="940" y1="550" x2="1140" y2="550" />
        <line x1="880" y1="580" x2="1050" y2="580" />
        <line x1="1120" y1="570" x2="1320" y2="570" />
      </g>

      {/* Night Shimmering Water Reflections of Towers */}
      {lighting.windowLightOpacity > 0.1 && (
        <g opacity={lighting.windowLightOpacity * 0.7}>
          {/* Zoho Tower Golden Water Reflection */}
          <path
            d="M 660 525 L 710 525 L 700 660 L 670 660 Z"
            fill="rgba(254, 240, 138, 0.12)"
            filter="url(#glow-gold)"
          />
          {/* Infosys Tower Blue Water Reflection */}
          <path
            d="M 970 525 L 1020 525 L 1010 660 L 980 660 Z"
            fill="rgba(56, 189, 248, 0.14)"
            filter="url(#glow-blue)"
          />
        </g>
      )}

      {/* ================= 11. LOWER HIGHWAY BRIDGE & MOVING TRAFFIC ================= */}
      <g className="lower-bridge-layer">
        <rect
          x="300"
          y="505"
          width="1100"
          height="14"
          fill={lighting.nightFactor > 0.6 ? '#27272a' : '#e2d8c3'}
          stroke="#1e293b"
          strokeWidth="2"
        />
        <line x1="300" y1="512" x2="1400" y2="512" stroke="#ffffff" strokeDasharray="14 10" strokeWidth="1.4" />
        <line x1="300" y1="500" x2="1400" y2="500" stroke="#5c4a33" strokeWidth="1.8" />

        {/* Bridge vehicles */}
        {/* Yellow Bus with Headlight */}
        <g transform="translate(680, 486)" className="bridge-vehicle bus">
          <rect x="0" y="0" width="56" height="18" rx="3" fill="#f59e0b" stroke="#1e293b" strokeWidth="1.6" />
          <rect x="5" y="4" width="10" height="7" rx="1" fill="#e0f2fe" stroke="#1e293b" strokeWidth="1" />
          <rect x="18" y="4" width="10" height="7" rx="1" fill="#e0f2fe" stroke="#1e293b" strokeWidth="1" />
          <rect x="31" y="4" width="10" height="7" rx="1" fill="#e0f2fe" stroke="#1e293b" strokeWidth="1" />
          <rect x="44" y="4" width="8" height="7" rx="1" fill="#e0f2fe" stroke="#1e293b" strokeWidth="1" />
          <circle cx="12" cy="18" r="3" fill="#18181b" />
          <circle cx="44" cy="18" r="3" fill="#18181b" />
          {/* Bus Night Headlights */}
          {lighting.streetlampGlowOpacity > 0.1 && (
            <polygon
              points="56,7 130,0 130,22 56,15"
              fill="url(#headlightGrad)"
              opacity={lighting.streetlampGlowOpacity * 0.75}
            />
          )}
        </g>

        {/* Red Sedan */}
        <g transform="translate(540, 492)" className="bridge-vehicle car-1">
          <path d="M 0 12 L 8 4 L 24 4 L 32 12 Z" fill="#ef4444" stroke="#1e293b" strokeWidth="1.4" />
          <rect x="0" y="8" width="36" height="6" rx="2" fill="#ef4444" stroke="#1e293b" strokeWidth="1.4" />
          <circle cx="8" cy="14" r="2.8" fill="#18181b" />
          <circle cx="28" cy="14" r="2.8" fill="#18181b" />
          {/* Night Headlights */}
          {lighting.streetlampGlowOpacity > 0.1 && (
            <polygon
              points="36,9 90,4 90,18 36,13"
              fill="url(#headlightGrad)"
              opacity={lighting.streetlampGlowOpacity * 0.7}
            />
          )}
        </g>

        {/* White Sedan */}
        <g transform="translate(860, 492)" className="bridge-vehicle car-2">
          <path d="M 0 12 L 8 4 L 24 4 L 32 12 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
          <rect x="0" y="8" width="36" height="6" rx="2" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
          <circle cx="8" cy="14" r="2.8" fill="#18181b" />
          <circle cx="28" cy="14" r="2.8" fill="#18181b" />
          {/* Night Headlights */}
          {lighting.streetlampGlowOpacity > 0.1 && (
            <polygon
              points="36,9 90,4 90,18 36,13"
              fill="url(#headlightGrad)"
              opacity={lighting.streetlampGlowOpacity * 0.7}
            />
          )}
        </g>
      </g>

      {/* ================= 12. ELEVATED METRO VIADUCT & COMMUTER TRAIN ================= */}
      <g className="metro-viaduct-layer">
        {/* Concrete Pillars */}
        {[520, 720, 920, 1120, 1300].map((px) => (
          <g key={`pil-${px}`}>
            <rect
              x={px - 9}
              y="445"
              width="18"
              height="80"
              fill={lighting.nightFactor > 0.6 ? '#1e293b' : '#d8cbba'}
              stroke="#1e293b"
              strokeWidth="2"
            />
            <rect
              x={px - 14}
              y="442"
              width="28"
              height="8"
              fill={lighting.nightFactor > 0.6 ? '#334155' : '#bfae99'}
              stroke="#1e293b"
              strokeWidth="1.8"
            />
            {/* Streetlamp on pillar head (turns on at night!) */}
            {lighting.streetlampGlowOpacity > 0.1 && (
              <g opacity={lighting.streetlampGlowOpacity}>
                <circle cx={px} cy="442" r="3" fill="#fef08a" filter="url(#glow-lamp)" />
                <polygon
                  points={`${px - 14},444 ${px + 14},444 ${px + 30},520 ${px - 30},520`}
                  fill="url(#lampConeGrad)"
                />
              </g>
            )}
          </g>
        ))}

        {/* Viaduct Girder Beam */}
        <rect
          x="360"
          y="440"
          width="1040"
          height="14"
          fill={lighting.nightFactor > 0.6 ? '#334155' : '#cec0ad'}
          stroke="#1e293b"
          strokeWidth="2.2"
        />

        {/* Animated Commuter Train */}
        <g className="metro-commuter-train">
          {/* Train Car 1 (Engine) */}
          <g transform="translate(710, 420)">
            <path
              d="M 0 6 C 0 2, 4 0, 8 0 L 76 0 C 80 0, 84 4, 84 10 L 84 19 L 0 19 Z"
              fill="#ecfdf5"
              stroke="#1e293b"
              strokeWidth="2"
            />
            <rect x="0" y="11" width="84" height="4" fill="#10b981" />
            <rect
              x="10"
              y="3"
              width="12"
              height="6"
              rx="1"
              fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'}
            />
            <rect
              x="28"
              y="3"
              width="12"
              height="6"
              rx="1"
              fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'}
            />
            <rect
              x="46"
              y="3"
              width="12"
              height="6"
              rx="1"
              fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'}
            />
            <rect
              x="64"
              y="3"
              width="14"
              height="6"
              rx="1"
              fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'}
            />
            <circle cx="18" cy="19.5" r="2.5" fill="#334155" />
            <circle cx="66" cy="19.5" r="2.5" fill="#334155" />
            {/* Train Night Headlight Beam Projecting Forward */}
            {lighting.streetlampGlowOpacity > 0.1 && (
              <polygon
                points="84,10 180,2 180,26 84,18"
                fill="url(#headlightGrad)"
                opacity={lighting.streetlampGlowOpacity * 0.9}
              />
            )}
          </g>

          {/* Train Car 2 */}
          <g transform="translate(798, 420)">
            <rect x="0" y="0" width="76" height="19" rx="2" fill="#ecfdf5" stroke="#1e293b" strokeWidth="2" />
            <rect x="0" y="11" width="76" height="4" fill="#10b981" />
            <rect x="8" y="3" width="12" height="6" rx="1" fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'} />
            <rect x="26" y="3" width="12" height="6" rx="1" fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'} />
            <rect x="44" y="3" width="12" height="6" rx="1" fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'} />
            <rect x="60" y="3" width="10" height="6" rx="1" fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'} />
            <circle cx="16" cy="19.5" r="2.5" fill="#334155" />
            <circle cx="60" cy="19.5" r="2.5" fill="#334155" />
          </g>

          {/* Train Car 3 */}
          <g transform="translate(878, 420)">
            <rect x="0" y="0" width="76" height="19" rx="2" fill="#ecfdf5" stroke="#1e293b" strokeWidth="2" />
            <rect x="0" y="11" width="76" height="4" fill="#10b981" />
            <rect x="8" y="3" width="12" height="6" rx="1" fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'} />
            <rect x="26" y="3" width="12" height="6" rx="1" fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'} />
            <rect x="44" y="3" width="12" height="6" rx="1" fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'} />
            <rect x="60" y="3" width="10" height="6" rx="1" fill={lighting.nightFactor > 0.5 ? '#fef08a' : '#0284c7'} />
            <circle cx="16" cy="19.5" r="2.5" fill="#334155" />
            <circle cx="60" cy="19.5" r="2.5" fill="#334155" />
          </g>
        </g>
      </g>

      {/* ================= 13. RIVERBANK TREES ================= */}
      <g stroke="#1e293b" strokeWidth="1.4">
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
            fill={lighting.nightFactor > 0.6 ? '#1b3815' : tree.color}
          />
        ))}
      </g>
    </svg>
  )
}
