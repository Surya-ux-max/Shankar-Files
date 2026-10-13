/**
 * LeadershipIllustration — Hand-drawn Sketchbook Style
 *
 * A flat vector scene: a presenter standing at a board
 * (inspired by the reference), redrawn in the site's ink/paper aesthetic —
 * simple bold outlines, muted watercolour fills, no gradients.
 *
 * Scene elements:
 *  - Projection screen / whiteboard showing a trophy and graph
 *  - Standing figure (presenter / leader) gesturing
 *  - Two seated team members with laptops
 *  - Desk, chairs, plants, clock, scattered paper notes
 *  - Floating achievement tags pinned around the board
 */
export default function LeadershipIllustration() {
  return (
    <svg
      className="leadership-illustration-svg"
      viewBox="0 0 860 380"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Leader presenting achievements to a team — sketchbook illustration"
      role="img"
    >
      {/* ═══ BACKGROUND PAPER WASH ═══ */}
      <rect x="0" y="0" width="860" height="380" fill="#fdf9f1" />

      {/* Subtle grid (like graph paper) */}
      {Array.from({ length: 43 }).map((_, i) => (
        <line key={`gv-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="380"
          stroke="rgba(107,92,68,0.06)" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 19 }).map((_, i) => (
        <line key={`gh-${i}`} x1="0" y1={i * 20} x2="860" y2={i * 20}
          stroke="rgba(107,92,68,0.06)" strokeWidth="0.5" />
      ))}

      {/* Watercolour blobs */}
      <ellipse cx="160" cy="160" rx="130" ry="100" fill="rgba(140,190,220,0.10)" />
      <ellipse cx="680" cy="200" rx="140" ry="110" fill="rgba(122,155,106,0.10)" />
      <ellipse cx="430" cy="80" rx="180" ry="70" fill="rgba(254,240,138,0.13)" />
      <ellipse cx="430" cy="320" rx="200" ry="60" fill="rgba(230,169,106,0.10)" />

      {/* ═══ BACK WALL ═══ */}
      {/* Wall panel background */}
      <rect x="20" y="20" width="820" height="240" rx="4"
        fill="#fffef9" stroke="#3d3226" strokeWidth="1.5" />

      {/* Pinboard corkboard texture strip at top */}
      <rect x="20" y="20" width="820" height="22" rx="4"
        fill="#e8d9c0" stroke="#3d3226" strokeWidth="1.5" />
      <text x="30" y="35" fontFamily="'Space Mono', monospace" fontSize="9"
        fontWeight="700" fill="#6b5c44" letterSpacing="2">
        ACHIEVEMENTS · HALL OF RECORDS
      </text>

      {/* ═══ WHITEBOARD / PROJECTION SCREEN (right side) ═══ */}
      {/* Board frame */}
      <rect x="490" y="52" width="330" height="185" rx="3"
        fill="#f5f2eb" stroke="#3d3226" strokeWidth="2.5" />
      {/* Board legs */}
      <line x1="560" y1="237" x2="550" y2="264" stroke="#3d3226" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="750" y1="237" x2="760" y2="264" stroke="#3d3226" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="547" y1="264" x2="573" y2="264" stroke="#3d3226" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="747" y1="264" x2="773" y2="264" stroke="#3d3226" strokeWidth="2.5" strokeLinecap="round" />

      {/* Board top rail */}
      <rect x="490" y="52" width="330" height="10" rx="2" fill="#d4c5a9" stroke="#3d3226" strokeWidth="1.5" />

      {/* Chalk/marker content on board: trophy + bar chart */}
      {/* Title on board */}
      <text x="655" y="88" textAnchor="middle" fontFamily="'Caveat', cursive"
        fontSize="15" fontWeight="700" fill="#3d3226">
        Key Achievements
      </text>
      <line x1="520" y1="93" x2="790" y2="93" stroke="#3d3226" strokeWidth="1"
        strokeDasharray="4 3" opacity="0.4" />

      {/* Bar chart on board */}
      {[
        { x: 535, h: 60, label: '₹12.5k', fill: 'rgba(254,240,138,0.7)' },
        { x: 575, h: 80, label: '19k+', fill: 'rgba(186,230,185,0.7)' },
        { x: 615, h: 45, label: '1891', fill: 'rgba(186,210,240,0.7)' },
        { x: 655, h: 55, label: '4 OSS', fill: 'rgba(230,180,200,0.6)' },
      ].map(({ x, h, label, fill }) => (
        <g key={label}>
          <rect x={x} y={200 - h} width="28" height={h} rx="2"
            fill={fill} stroke="#3d3226" strokeWidth="1.2" />
          <text x={x + 14} y={212} textAnchor="middle"
            fontFamily="'Space Mono', monospace" fontSize="7" fill="#6b5c44">
            {label}
          </text>
        </g>
      ))}
      {/* Bar chart baseline */}
      <line x1="522" y1="200" x2="700" y2="200" stroke="#3d3226" strokeWidth="1.2" />

      {/* Trophy icon on board (right side) */}
      <g transform="translate(720, 105)">
        {/* Cup */}
        <path d="M-20,0 Q-22,25 -18,45 L18,45 Q22,25 20,0 Z"
          fill="rgba(254,240,138,0.75)" stroke="#3d3226" strokeWidth="1.5" />
        {/* Cup rim */}
        <rect x="-22" y="-3" width="44" height="7" rx="2"
          fill="#f9e87a" stroke="#3d3226" strokeWidth="1.2" />
        {/* Handles */}
        <path d="M-20,10 Q-30,10 -30,22 Q-30,34 -20,35"
          fill="none" stroke="#3d3226" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20,10 Q30,10 30,22 Q30,34 20,35"
          fill="none" stroke="#3d3226" strokeWidth="1.5" strokeLinecap="round" />
        {/* Stem */}
        <rect x="-4" y="45" width="8" height="14" fill="#d4c090" stroke="#3d3226" strokeWidth="1.2" />
        <rect x="-14" y="59" width="28" height="6" rx="1" fill="#d4c090" stroke="#3d3226" strokeWidth="1.2" />
        {/* Star */}
        <text x="0" y="30" textAnchor="middle" fontSize="16" fill="#3d3226" opacity="0.7">★</text>
      </g>

      {/* ═══ STANDING LEADER / PRESENTER ═══ */}
      {/* Shadow */}
      <ellipse cx="452" cy="300" rx="30" ry="8"
        fill="rgba(61,50,38,0.12)" />
      {/* Legs */}
      <rect x="440" y="254" width="11" height="44" rx="4"
        fill="#4a6fa5" stroke="#3d3226" strokeWidth="1.5" />
      <rect x="456" y="254" width="11" height="44" rx="4"
        fill="#4a6fa5" stroke="#3d3226" strokeWidth="1.5" />
      {/* Shoes */}
      <ellipse cx="446" cy="299" rx="10" ry="5" fill="#2d2519" stroke="#3d3226" strokeWidth="1.2" />
      <ellipse cx="462" cy="299" rx="10" ry="5" fill="#2d2519" stroke="#3d3226" strokeWidth="1.2" />
      {/* Body / jacket */}
      <path d="M430,175 L435,255 L475,255 L480,175 Z"
        fill="#5b8ecf" stroke="#3d3226" strokeWidth="2" strokeLinejoin="round" />
      {/* Lapels */}
      <path d="M448,175 L440,200 L455,210 L470,200 L462,175 Z"
        fill="#1a1a2e" stroke="#3d3226" strokeWidth="1.5" />
      {/* Shirt collar */}
      <path d="M448,175 L453,190 L458,175" fill="none" stroke="#ffffff" strokeWidth="1.5" />
      {/* Right arm (pointing at board) */}
      <path d="M476,190 Q510,170 488,165"
        fill="none" stroke="#3d3226" strokeWidth="2" strokeLinecap="round" />
      <rect x="473" y="185" width="10" height="30" rx="5"
        fill="#5b8ecf" stroke="#3d3226" strokeWidth="1.5"
        transform="rotate(-35 478 200)" />
      {/* Left arm (relaxed) */}
      <rect x="426" y="185" width="10" height="28" rx="5"
        fill="#5b8ecf" stroke="#3d3226" strokeWidth="1.5"
        transform="rotate(15 431 199)" />
      {/* Hands */}
      <ellipse cx="493" cy="163" rx="7" ry="6"
        fill="#c8956c" stroke="#3d3226" strokeWidth="1.2" />
      <ellipse cx="420" cy="208" rx="6" ry="5"
        fill="#c8956c" stroke="#3d3226" strokeWidth="1.2" />
      {/* Neck */}
      <rect x="446" y="157" width="18" height="20" rx="4"
        fill="#c8956c" stroke="#3d3226" strokeWidth="1.2" />
      {/* Head */}
      <ellipse cx="455" cy="145" rx="22" ry="24"
        fill="#c8956c" stroke="#3d3226" strokeWidth="2" />
      {/* Hair */}
      <path d="M433,136 Q435,115 455,113 Q475,115 477,136 Q466,125 455,126 Q444,125 433,136 Z"
        fill="#1a1212" stroke="#3d3226" strokeWidth="1.2" />
      {/* Facial features */}
      <ellipse cx="448" cy="145" rx="2.5" ry="3" fill="#1a1212" />
      <ellipse cx="462" cy="145" rx="2.5" ry="3" fill="#1a1212" />
      <path d="M448,153 Q455,158 462,153" fill="none" stroke="#3d3226" strokeWidth="1.5" strokeLinecap="round" />

      {/* ═══ CONFERENCE TABLE ═══ */}
      {/* Table top */}
      <ellipse cx="300" cy="292" rx="230" ry="28"
        fill="#d4c090" stroke="#3d3226" strokeWidth="2.5" />
      <ellipse cx="300" cy="285" rx="230" ry="25"
        fill="#e8d9b0" stroke="#3d3226" strokeWidth="2" />
      {/* Table legs */}
      <rect x="110" y="285" width="14" height="60" rx="3"
        fill="#b49a60" stroke="#3d3226" strokeWidth="1.5" />
      <rect x="376" y="285" width="14" height="60" rx="3"
        fill="#b49a60" stroke="#3d3226" strokeWidth="1.5" />
      {/* Table leg crossbar */}
      <line x1="117" y1="330" x2="383" y2="330"
        stroke="#b49a60" strokeWidth="8" strokeLinecap="round" />

      {/* ═══ SEATED PERSON LEFT ═══ */}
      {/* Chair */}
      <rect x="68" y="260" width="80" height="8" rx="3"
        fill="#9b8c78" stroke="#3d3226" strokeWidth="1.5" />
      <rect x="72" y="268" width="6" height="45" rx="2"
        fill="#9b8c78" stroke="#3d3226" strokeWidth="1.2" />
      <rect x="136" y="268" width="6" height="45" rx="2"
        fill="#9b8c78" stroke="#3d3226" strokeWidth="1.2" />
      {/* Chair back */}
      <rect x="68" y="220" width="80" height="42" rx="4"
        fill="#b8a98c" stroke="#3d3226" strokeWidth="1.5" />

      {/* Person left: body */}
      <rect x="80" y="210" width="56" height="52" rx="6"
        fill="#e8b4b8" stroke="#3d3226" strokeWidth="2" />
      {/* Collar */}
      <path d="M104,210 L108,225 L116,210" fill="none" stroke="#3d3226" strokeWidth="1.5" />
      {/* Arms resting on table */}
      <rect x="60" y="230" width="14" height="36" rx="6"
        fill="#e8b4b8" stroke="#3d3226" strokeWidth="1.5" transform="rotate(20 67 248)" />
      {/* Head */}
      <ellipse cx="108" cy="193" rx="20" ry="22"
        fill="#c8956c" stroke="#3d3226" strokeWidth="2" />
      {/* Hair (long) */}
      <path d="M88,192 Q88,165 108,163 Q128,165 128,192 Q120,188 108,188 Q96,188 88,192 Z"
        fill="#1a1212" stroke="#3d3226" strokeWidth="1.2" />
      <path d="M88,192 Q82,220 90,230" fill="none" stroke="#1a1212" strokeWidth="6" strokeLinecap="round" />
      <path d="M128,192 Q130,215 124,225" fill="none" stroke="#1a1212" strokeWidth="4" strokeLinecap="round" />
      {/* Face */}
      <ellipse cx="102" cy="193" rx="2" ry="2.5" fill="#1a1212" />
      <ellipse cx="114" cy="193" rx="2" ry="2.5" fill="#1a1212" />
      <path d="M104,200 Q108,204 112,200" fill="none" stroke="#3d3226" strokeWidth="1.2" strokeLinecap="round" />

      {/* Laptop (left person) */}
      <rect x="78" y="264" width="80" height="8" rx="2"
        fill="#2d2519" stroke="#3d3226" strokeWidth="1.5" />
      <rect x="85" y="245" width="66" height="21" rx="2"
        fill="#1a1212" stroke="#3d3226" strokeWidth="1.5" />
      <rect x="88" y="248" width="60" height="15" rx="1" fill="#3a6ea5" opacity="0.7" />
      {/* Screen content */}
      <rect x="90" y="250" width="30" height="3" rx="1" fill="rgba(255,255,255,0.5)" />
      <rect x="90" y="255" width="20" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
      {/* Brand dot */}
      <circle cx="118" cy="253" r="3" fill="rgba(254,240,138,0.6)" />

      {/* ═══ SEATED PERSON RIGHT ═══ */}
      {/* Chair */}
      <rect x="352" y="260" width="80" height="8" rx="3"
        fill="#9b8c78" stroke="#3d3226" strokeWidth="1.5" />
      <rect x="356" y="268" width="6" height="45" rx="2"
        fill="#9b8c78" stroke="#3d3226" strokeWidth="1.2" />
      <rect x="420" y="268" width="6" height="45" rx="2"
        fill="#9b8c78" stroke="#3d3226" strokeWidth="1.2" />
      <rect x="352" y="220" width="80" height="42" rx="4"
        fill="#b8a98c" stroke="#3d3226" strokeWidth="1.5" />
      {/* Person right: body */}
      <rect x="362" y="210" width="56" height="52" rx="6"
        fill="#d4e8d0" stroke="#3d3226" strokeWidth="2" />
      <path d="M386,210 L390,225 L398,210" fill="none" stroke="#3d3226" strokeWidth="1.5" />
      {/* Head */}
      <ellipse cx="390" cy="193" rx="20" ry="22"
        fill="#dba882" stroke="#3d3226" strokeWidth="2" />
      {/* Hair */}
      <path d="M370,188 Q372,165 390,163 Q408,165 410,188 Q400,180 390,181 Q380,180 370,188 Z"
        fill="#2d1e0e" stroke="#3d3226" strokeWidth="1.2" />
      {/* Face */}
      <ellipse cx="384" cy="193" rx="2" ry="2.5" fill="#1a1212" />
      <ellipse cx="396" cy="193" rx="2" ry="2.5" fill="#1a1212" />
      <path d="M385,200 Q390,205 395,200" fill="none" stroke="#3d3226" strokeWidth="1.2" strokeLinecap="round" />
      {/* Tablet / notepad */}
      <rect x="358" y="256" width="54" height="40" rx="3"
        fill="#f5f0e8" stroke="#3d3226" strokeWidth="1.5" />
      <rect x="362" y="260" width="46" height="32" rx="2" fill="#ffffff" opacity="0.7" />
      {/* Lines on notepad */}
      {[0, 6, 12, 18, 24].map((dy) => (
        <line key={dy} x1="364" y1={264 + dy} x2="406" y2={264 + dy}
          stroke="#3d3226" strokeWidth="0.8" opacity="0.3" />
      ))}
      <line x1="374" y1="260" x2="374" y2="292"
        stroke="rgba(234,88,12,0.25)" strokeWidth="0.8" />

      {/* ═══ DECORATIVE ELEMENTS ═══ */}
      {/* Wall clock */}
      <circle cx="80" cy="80" r="28" fill="#f5f0e8" stroke="#3d3226" strokeWidth="2" />
      <circle cx="80" cy="80" r="3" fill="#3d3226" />
      {/* Clock hands */}
      <line x1="80" y1="80" x2="80" y2="58" stroke="#3d3226" strokeWidth="2" strokeLinecap="round" />
      <line x1="80" y1="80" x2="95" y2="84" stroke="#3d3226" strokeWidth="1.5" strokeLinecap="round" />
      {/* Clock ticks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const r = angle % 90 === 0 ? 22 : 20
        const x1 = 80 + r * Math.sin((angle * Math.PI) / 180)
        const y1 = 80 - r * Math.cos((angle * Math.PI) / 180)
        const x2 = 80 + 25 * Math.sin((angle * Math.PI) / 180)
        const y2 = 80 - 25 * Math.cos((angle * Math.PI) / 180)
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#3d3226" strokeWidth={angle % 90 === 0 ? 1.8 : 0.8} />
      })}

      {/* Plant left */}
      <rect x="24" y="290" width="44" height="52" rx="3"
        fill="#f5f0e8" stroke="#3d3226" strokeWidth="1.5" />
      <ellipse cx="46" cy="290" rx="22" ry="10" fill="#e8d5b0" stroke="#3d3226" strokeWidth="1.5" />
      {/* Leaves */}
      <path d="M46,285 Q30,260 20,250 Q36,255 46,280 Z" fill="rgba(95,140,80,0.7)" stroke="#3d3226" strokeWidth="1.2" />
      <path d="M46,275 Q62,252 74,245 Q62,258 46,272 Z" fill="rgba(95,140,80,0.7)" stroke="#3d3226" strokeWidth="1.2" />
      <path d="M46,268 Q35,240 36,225 Q46,240 48,265 Z" fill="rgba(120,160,95,0.65)" stroke="#3d3226" strokeWidth="1.2" />
      <path d="M46,270 Q58,242 56,228 Q47,244 44,267 Z" fill="rgba(120,160,95,0.65)" stroke="#3d3226" strokeWidth="1.2" />

      {/* Plant right */}
      <rect x="792" y="295" width="40" height="47" rx="3"
        fill="#f5f0e8" stroke="#3d3226" strokeWidth="1.5" />
      <ellipse cx="812" cy="295" rx="20" ry="9" fill="#e8d5b0" stroke="#3d3226" strokeWidth="1.5" />
      <path d="M812,290 Q796,267 788,257 Q802,262 812,285 Z" fill="rgba(95,140,80,0.7)" stroke="#3d3226" strokeWidth="1.2" />
      <path d="M812,282 Q826,262 832,252 Q822,263 812,278 Z" fill="rgba(95,140,80,0.7)" stroke="#3d3226" strokeWidth="1.2" />
      <path d="M812,275 Q800,250 802,238 Q812,252 814,272 Z" fill="rgba(120,160,95,0.65)" stroke="#3d3226" strokeWidth="1.2" />

      {/* Scattered paper notes on table */}
      {[
        { x: 148, y: 268, r: -8, label: '1,891', sub: 'LeetCode' },
        { x: 215, y: 272, r: 5, label: '19,450+', sub: 'iQOO' },
        { x: 278, y: 266, r: -4, label: '#1,247', sub: 'Global' },
        { x: 330, y: 273, r: 6, label: '3rd 🏆', sub: 'NeoVerse' },
      ].map(({ x, y, r, label, sub }) => (
        <g key={label} transform={`rotate(${r} ${x + 28} ${y + 18})`}>
          <rect x={x} y={y} width="56" height="36" rx="2"
            fill="#fffef5" stroke="#3d3226" strokeWidth="1.2"
            style={{ filter: 'drop-shadow(1px 2px 2px rgba(61,50,38,0.12))' }} />
          <text x={x + 28} y={y + 16} textAnchor="middle"
            fontFamily="'Caveat', cursive" fontSize="13" fontWeight="700" fill="#3d3226">
            {label}
          </text>
          <text x={x + 28} y={y + 28} textAnchor="middle"
            fontFamily="'Space Mono', monospace" fontSize="7" fill="#9b8c78">
            {sub}
          </text>
        </g>
      ))}

      {/* ═══ PINNED ACHIEVEMENT TAGS (on corkboard strip) ═══ */}
      {[
        { x: 200, y: 38, text: 'Springer LNAI Published', col: '#fef08a' },
        { x: 360, y: 38, text: 'Reliance Foundation Scholar', col: '#bbf7d0' },
        { x: 570, y: 38, text: 'IIT Bombay Top 15', col: '#bae6fd' },
        { x: 730, y: 38, text: 'State Finalist · TN-SKILLS', col: '#fbcfe8' },
      ].map(({ x, y, text, col }) => (
        <g key={text}>
          {/* Pin */}
          <circle cx={x} cy={y - 5} r="4" fill="#e34d4d" stroke="#3d3226" strokeWidth="1" />
          <line x1={x} y1={y - 1} x2={x} y2={y + 4} stroke="#3d3226" strokeWidth="1" />
          {/* Tag */}
          <rect x={x - 64} y={y + 2} width="128" height="18" rx="3"
            fill={col} stroke="#3d3226" strokeWidth="1.2"
            style={{ filter: 'drop-shadow(1px 2px 0 rgba(61,50,38,0.15))' }} />
          <text x={x} y={y + 14} textAnchor="middle"
            fontFamily="'Space Mono', monospace" fontSize="8" fontWeight="700" fill="#3d3226">
            {text}
          </text>
        </g>
      ))}

      {/* ═══ SPEECH / THOUGHT BUBBLE FROM PRESENTER ═══ */}
      <path d="M490,120 Q482,105 475,110 Q480,115 483,122 Z"
        fill="#fffef9" stroke="#3d3226" strokeWidth="1.2" />
      <rect x="390" y="90" width="100" height="34" rx="8"
        fill="#fffef9" stroke="#3d3226" strokeWidth="1.5"
        style={{ filter: 'drop-shadow(2px 2px 0 rgba(61,50,38,0.15))' }} />
      <text x="440" y="111" textAnchor="middle"
        fontFamily="'Caveat', cursive" fontSize="13" fontWeight="700" fill="#3d3226">
        Let me show you!
      </text>

      {/* ═══ STORYBOARD CORNER BRACKETS ═══ */}
      {[
        { x: 28, y: 28, dx: 1, dy: 1 },
        { x: 832, y: 28, dx: -1, dy: 1 },
        { x: 28, y: 352, dx: 1, dy: -1 },
        { x: 832, y: 352, dx: -1, dy: -1 },
      ].map(({ x, y, dx, dy }, i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x + dx * 18} y2={y}
            stroke="#6b5c44" strokeWidth="2" strokeLinecap="square" />
          <line x1={x} y1={y} x2={x} y2={y + dy * 18}
            stroke="#6b5c44" strokeWidth="2" strokeLinecap="square" />
        </g>
      ))}
    </svg>
  )
}
