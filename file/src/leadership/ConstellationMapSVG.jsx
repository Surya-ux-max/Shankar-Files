/**
 * ConstellationMapSVG
 * Deep cosmos canvas with 4 constellations — one per achievement category.
 * Each star = one achievement. Hover to illuminate. Connected by constellation lines.
 */

const CONSTELLATIONS = [
  {
    id: 'competitions',
    label: 'COMPETITIONS',
    color: '#f59e0b',
    glow: '#f59e0b',
    stars: [
      { id: 'neoverse',  x: 210, y: 130, r: 7,   rank: '3rd Place',     title: "NeoVerse'26 National AI Hackathon",           prize: '₹10,000',          highlight: true  },
      { id: 'forgex',    x: 290, y: 200, r: 5.5, rank: 'Podium',        title: 'Forge X CMRIT National Hackathon',            prize: '₹2,500',           highlight: false },
      { id: 'iqoo',      x: 160, y: 230, r: 5,   rank: 'Top 24',        title: 'iQOO Hyderabad City Battle',                  prize: '19,450+ entrants', highlight: false },
      { id: 'tnskills',  x: 340, y: 145, r: 4.5, rank: 'State Finalist', title: 'TN-SKILLS SDE Domain',                       prize: 'Tamil Nadu',       highlight: false },
    ],
    lines: [
      [0, 1], [1, 2], [0, 3], [1, 3],
    ],
    labelPos: { x: 195, y: 90 },
  },
  {
    id: 'rankings',
    label: 'RANKINGS',
    color: '#38bdf8',
    glow: '#38bdf8',
    stars: [
      { id: 'leetcode',  x: 760, y: 105, r: 7.5, rank: 'Knight',  title: 'LeetCode Knight',                        prize: 'Rating 1,891',     highlight: true  },
      { id: 'iitbombay', x: 840, y: 200, r: 5.5, rank: 'Top 15',  title: 'National Entrepreneurship Challenge',    prize: 'IIT Bombay E-Cell', highlight: false },
    ],
    lines: [
      [0, 1],
    ],
    labelPos: { x: 740, y: 68 },
  },
  {
    id: 'academic',
    label: 'ACADEMIC',
    color: '#c084fc',
    glow: '#c084fc',
    stars: [
      { id: 'springer',  x: 560, y: 290, r: 7,   rank: 'Published', title: 'Springer LNAI Research Paper',              prize: 'International',   highlight: true  },
      { id: 'reliance',  x: 650, y: 360, r: 5.5, rank: 'Scholar',   title: 'Reliance Foundation Undergraduate Scholar', prize: 'National Award', highlight: false },
    ],
    lines: [
      [0, 1],
    ],
    labelPos: { x: 520, y: 260 },
  },
  {
    id: 'leadership',
    label: 'LEADERSHIP',
    color: '#4ade80',
    glow: '#4ade80',
    stars: [
      { id: 'tnjug',  x: 380, y: 330, r: 5.5, rank: 'Campus Leader',  title: 'TNJUG Campus Leader',                          prize: 'Community',      highlight: false },
      { id: 'gfg',    x: 460, y: 400, r: 5,   rank: 'Campus Mantri',  title: 'GeeksforGeeks Campus Ambassador',               prize: 'GFG Official',   highlight: false },
      { id: 'edc',    x: 310, y: 410, r: 6,   rank: 'Technical Lead', title: 'Entrepreneurship Development Cell, SECE',        prize: 'Former Tech Lead', highlight: true },
    ],
    lines: [
      [0, 1], [0, 2], [1, 2],
    ],
    labelPos: { x: 280, y: 305 },
  },
]

export default function ConstellationMapSVG({ hoveredStar, onHoverStar }) {
  return (
    <svg
      className="constellation-svg"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Achievement Constellation Map"
    >
      <defs>
        {/* Deep space background */}
        <radialGradient id="cosmosGrad" cx="50%" cy="42%" r="60%">
          <stop offset="0%"   stopColor="#1e1b4b" />
          <stop offset="40%"  stopColor="#0f0c2e" />
          <stop offset="100%" stopColor="#050311" />
        </radialGradient>

        {/* Nebula glow patches */}
        <radialGradient id="nebula1" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#7c3aed" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#0284c7" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula3" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>

        {/* Milky way gradient */}
        <linearGradient id="milkyWay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
          <stop offset="35%"  stopColor="#a5b4fc" stopOpacity="0.05" />
          <stop offset="55%"  stopColor="#c4b5fd" stopOpacity="0.08" />
          <stop offset="75%"  stopColor="#a5b4fc" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Star glow filter */}
        <filter id="starGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="starGlowActive" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Per-category star glow radials */}
        {CONSTELLATIONS.map((cat) => (
          <radialGradient key={`sg-${cat.id}`} id={`starGrad-${cat.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%"  stopColor={cat.color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={cat.color} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>

      {/* ═══ COSMOS BACKGROUND ═══ */}
      <rect x="0" y="0" width="1000" height="500" fill="url(#cosmosGrad)" />

      {/* Milky way band */}
      <ellipse cx="500" cy="250" rx="520" ry="160" fill="url(#milkyWay)" />

      {/* Nebula clouds */}
      <ellipse cx="200" cy="180" rx="200" ry="160" fill="url(#nebula1)" />
      <ellipse cx="780" cy="160" rx="180" ry="140" fill="url(#nebula2)" />
      <ellipse cx="580" cy="340" rx="160" ry="120" fill="url(#nebula3)" />

      {/* Background micro-stars */}
      {[
        [30,20],[80,60],[140,15],[195,45],[255,28],[320,60],[400,18],[460,50],[510,25],[570,55],
        [630,20],[690,45],[740,22],[800,55],[870,18],[920,48],[970,25],[50,100],[110,85],[170,110],
        [240,90],[310,105],[375,80],[445,98],[500,75],[555,100],[615,82],[680,108],[730,88],[795,78],
        [855,102],[910,80],[960,95],[25,150],[95,135],[155,160],[220,138],[290,155],[360,130],[425,148],
        [490,128],[545,152],[600,134],[665,158],[715,138],[770,162],[830,135],[900,155],[955,140],
        [70,195],[130,210],[190,195],[260,215],[330,200],[395,218],[455,198],[520,212],[575,195],
        [635,210],[700,194],[755,215],[815,198],[875,212],[935,200],[985,215],
        [45,250],[100,265],[160,248],[225,268],[295,252],[360,268],[430,248],[500,265],[560,250],
        [625,268],[685,252],[748,268],[808,252],[865,268],[928,252],[975,265],
        [55,310],[115,295],[175,312],[240,298],[308,312],[372,298],[438,315],[505,298],[568,315],
        [628,298],[692,315],[752,298],[812,315],[875,298],[938,315],[988,298],
        [32,360],[90,345],[152,362],[218,345],[282,362],[348,345],[415,362],[478,345],[542,362],
        [605,345],[668,362],[728,345],[790,362],[852,345],[914,362],[970,345],
        [60,415],[118,400],[180,418],[245,402],[310,418],[375,402],[440,418],[505,402],[568,418],
        [630,402],[692,418],[755,402],[818,418],[880,402],[940,418],[985,402],
        [30,460],[88,445],[150,462],[215,445],[278,462],[342,445],[408,462],[472,445],[535,462],
        [598,445],[660,462],[723,445],[785,462],[848,445],[910,462],[968,445],
      ].map(([x, y], i) => (
        <circle
          key={`bg-star-${i}`}
          cx={x} cy={y}
          r={i % 7 === 0 ? 1.2 : i % 5 === 0 ? 1.0 : i % 3 === 0 ? 0.7 : 0.4}
          fill="#ffffff"
          opacity={0.2 + (i % 6) * 0.08}
          className="bg-star"
          style={{ animationDelay: `${(i * 0.23) % 4}s` }}
        />
      ))}

      {/* ═══ CONSTELLATION LINES ═══ */}
      {CONSTELLATIONS.map((cat) =>
        cat.lines.map(([a, b], li) => {
          const sa = cat.stars[a]
          const sb = cat.stars[b]
          const isActive = hoveredStar && cat.stars.some(s => s.id === hoveredStar)
          return (
            <line
              key={`line-${cat.id}-${li}`}
              x1={sa.x} y1={sa.y}
              x2={sb.x} y2={sb.y}
              stroke={cat.color}
              strokeWidth={isActive ? 1.5 : 0.8}
              opacity={isActive ? 0.65 : 0.28}
              strokeDasharray="4 5"
              filter={isActive ? 'url(#lineGlow)' : undefined}
              className="constellation-line"
              style={{ transition: 'stroke-width 0.3s, opacity 0.3s' }}
            />
          )
        })
      )}

      {/* ═══ CONSTELLATION CATEGORY LABEL ═══ */}
      {CONSTELLATIONS.map((cat) => (
        <text
          key={`label-${cat.id}`}
          x={cat.labelPos.x}
          y={cat.labelPos.y}
          fill={cat.color}
          fontSize="9.5"
          fontFamily="'Space Mono', monospace"
          fontWeight="700"
          letterSpacing="3"
          opacity="0.55"
          textAnchor="middle"
        >
          {cat.label}
        </text>
      ))}

      {/* ═══ STARS (Achievement Nodes) ═══ */}
      {CONSTELLATIONS.map((cat) =>
        cat.stars.map((star) => {
          const isHovered = hoveredStar === star.id
          const catHovered = hoveredStar && cat.stars.some(s => s.id === hoveredStar)
          const dimmed = hoveredStar && !catHovered

          return (
            <g
              key={`star-${star.id}`}
              className="achievement-star"
              onMouseEnter={() => onHoverStar(star.id)}
              onMouseLeave={() => onHoverStar(null)}
              style={{
                cursor: 'pointer',
                opacity: dimmed ? 0.3 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              {/* Outer pulse ring on hover */}
              {isHovered && (
                <>
                  <circle cx={star.x} cy={star.y} r={star.r * 4.5} fill="none"
                    stroke={cat.color} strokeWidth="1" opacity="0.2" className="star-pulse-outer" />
                  <circle cx={star.x} cy={star.y} r={star.r * 2.8} fill="none"
                    stroke={cat.color} strokeWidth="1" opacity="0.35" className="star-pulse-mid" />
                </>
              )}
              {/* Glow halo */}
              <circle
                cx={star.x} cy={star.y}
                r={isHovered ? star.r * 2.2 : star.r * 1.5}
                fill={cat.color}
                opacity={isHovered ? 0.28 : 0.12}
                filter="url(#starGlow)"
                style={{ transition: 'r 0.3s, opacity 0.3s' }}
              />
              {/* Star body */}
              <circle
                cx={star.x} cy={star.y}
                r={isHovered ? star.r * 1.25 : star.r}
                fill={isHovered ? '#ffffff' : `url(#starGrad-${cat.id})`}
                filter={isHovered ? 'url(#starGlowActive)' : 'url(#starGlow)'}
                style={{ transition: 'r 0.25s ease' }}
              />
              {/* Highlight dot */}
              {star.highlight && !isHovered && (
                <circle cx={star.x - star.r * 0.3} cy={star.y - star.r * 0.3}
                  r="1.5" fill="#ffffff" opacity="0.8" />
              )}
            </g>
          )
        })
      )}
    </svg>
  )
}

export { CONSTELLATIONS }
