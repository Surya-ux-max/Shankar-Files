import './Education.css'

export default function Education() {
  const educationData = [
    {
      id: '01',
      stopLabel: 'CURRENT DESTINATION',
      jpLabel: '現在地',
      type: 'BACHELOR OF ENGINEERING',
      jpType: '大学工学部',
      status: 'ACTIVE PURSUIT',
      statusColor: 'green',
      institution: 'Sri Eshwar College of Engineering',
      location: 'Coimbatore, Tamil Nadu',
      degree: 'B.E. Computer Science & Engineering',
      metricLabel: 'CGPA',
      metricValue: '8.26',
      metricSuffix: '/ 10',
      period: '2024 – 2028',
      details: 'Core CS Foundations, Data Structures, Algorithms & AI Pipelines',
      sealCode: 'SECE · CSE',
      wcClass: 'wc-sage',
    },
    {
      id: '02',
      stopLabel: 'ORIGIN POINT',
      jpLabel: '出発地',
      type: 'HIGHER SECONDARY',
      jpType: '高等教育修了',
      status: 'DISTINCTION',
      statusColor: 'gold',
      institution: 'Jayam Vidhyalaya Higher Secondary School',
      location: 'Dharmapuri, Tamil Nadu',
      degree: 'Higher Secondary Education',
      metricLabel: 'SCORE',
      metricValue: '96.67',
      metricSuffix: '%',
      period: '2023 – 2024',
      details: 'Mathematics & Computer Science Stream · High Academic Honors',
      sealCode: 'JVHSS · HSC',
      wcClass: 'wc-peach',
    },
  ]

  return (
    <section className="ghibli-edu" id="education">

      {/* Paper background */}
      <div className="edu-paper-bg" aria-hidden="true" />

      {/* Watercolor blobs */}
      <div className="edu-wc-layer" aria-hidden="true">
        <div className="edu-wc edu-wc-1" />
        <div className="edu-wc edu-wc-2" />
        <div className="edu-wc edu-wc-3" />
      </div>

      {/* Storyboard corner brackets */}
      <div className="edu-sb-frame" aria-hidden="true">
        <div className="edu-sb-corner edu-sb-tl" />
        <div className="edu-sb-corner edu-sb-tr" />
        <div className="edu-sb-corner edu-sb-bl" />
        <div className="edu-sb-corner edu-sb-br" />
      </div>

      {/* Ambient doodles */}
      <div className="edu-doodles" aria-hidden="true">
        <svg className="edu-doodle edu-doodle-compass" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" stroke="#9b8c78" strokeWidth="1.5" strokeDasharray="4 3"/>
          <circle cx="24" cy="24" r="3" fill="#9b8c78"/>
          <path d="M24 6 L24 10 M24 38 L24 42 M6 24 L10 24 M38 24 L42 24" stroke="#9b8c78" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M24 24 L18 10 L24 16 L30 10 Z" fill="rgba(107,92,68,0.3)" stroke="#9b8c78" strokeWidth="1"/>
          <path d="M24 24 L30 38 L24 32 L18 38 Z" fill="rgba(107,92,68,0.12)" stroke="#9b8c78" strokeWidth="0.8"/>
        </svg>
        <svg className="edu-doodle edu-doodle-star" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 2 L15.8 11 L24 7 L18 14 L24 21 L15.8 17 L14 26 L12.2 17 L4 21 L10 14 L4 7 L12.2 11 Z"
            stroke="#9b8c78" strokeWidth="1.3" fill="rgba(254,240,138,0.3)" strokeLinejoin="round"/>
        </svg>
        <svg className="edu-doodle edu-doodle-leaves" width="68" height="55" viewBox="0 0 68 55" fill="none">
          <path d="M10 47 C10 47, 4 25, 20 17 C20 17, 17 39, 10 47 Z" stroke="#7a9b6a" strokeWidth="1.3" fill="rgba(122,155,106,0.2)" strokeLinecap="round"/>
          <path d="M23 43 C23 43, 13 21, 32 13 C32 13, 29 37, 23 43 Z" stroke="#7a9b6a" strokeWidth="1.3" fill="rgba(122,155,106,0.2)" strokeLinecap="round"/>
          <path d="M37 41 C37 41, 28 21, 46 14 C46 14, 42 35, 37 41 Z" stroke="#7a9b6a" strokeWidth="1.3" fill="rgba(122,155,106,0.2)" strokeLinecap="round"/>
          <path d="M10 47 C22 44, 37 42, 56 40" stroke="#7a9b6a" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <svg className="edu-doodle edu-doodle-swirl" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M36 8 C30 4, 12 7, 10 19 C8 31, 18 39, 28 35 C38 31, 40 20, 34 16 C28 12, 17 17, 18 25"
            stroke="#9b8c78" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="edu-container">

        {/* ── SECTION HEADER ── */}
        <div className="edu-page-header">
          <div className="edu-rope-row" aria-hidden="true">
            <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
              <path d="M0 10 C33 4, 66 15, 100 9 C133 3, 166 13, 200 8"
                stroke="#9b8c78" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round"/>
            </svg>
            <div className="edu-rope-pin" />
            <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
              <path d="M0 8 C33 14, 66 4, 100 11 C133 17, 166 6, 200 11"
                stroke="#9b8c78" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="edu-header-card">
            <svg className="edu-header-border" viewBox="0 0 520 82" fill="none" preserveAspectRatio="none">
              <path d="M6 6 C60 4, 460 4, 514 6 C516 30, 516 56, 514 76 C460 78, 60 78, 6 76 C4 52, 4 28, 6 6 Z"
                stroke="#6b5c44" strokeWidth="2.5" fill="rgba(254,243,220,0.93)" strokeLinecap="round"/>
            </svg>
            <div className="edu-header-inner">
              <span className="edu-chapter">学歴 · CHAPTER 03</span>
              <h2 className="edu-title">Credentials &amp; Milestones</h2>
              <svg viewBox="0 0 280 12" fill="none" style={{width:'clamp(160px,25vw,280px)',height:'12px'}}>
                <path d="M4 6 C70 2, 180 10, 276 5" stroke="#6b5c44" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* ── JOURNEY MAP ── */}
        <div className="journey-map">

          {/* Map paper background with grid */}
          <div className="map-paper" aria-hidden="true">
            <svg className="map-grid-svg" width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none">
              {/* Subtle grid */}
              {[...Array(14)].map((_,i) => (
                <line key={`h${i}`} x1="0" y1={i*46} x2="800" y2={i*46} stroke="rgba(107,92,68,0.05)" strokeWidth="1"/>
              ))}
              {[...Array(18)].map((_,i) => (
                <line key={`v${i}`} x1={i*46} y1="0" x2={i*46} y2="600" stroke="rgba(107,92,68,0.05)" strokeWidth="1"/>
              ))}
            </svg>
          </div>

          {/* Map title stamp */}
          <div className="map-title-stamp" aria-hidden="true">
            <svg width="110" height="50" viewBox="0 0 110 50" fill="none">
              <rect x="1" y="1" width="108" height="48" rx="2" stroke="#9b8c78" strokeWidth="1.5" strokeDasharray="4 3" fill="rgba(254,243,220,0.8)"/>
              <text x="55" y="18" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill="#9b8c78" letterSpacing="1.5">ACADEMIC</text>
              <text x="55" y="30" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill="#9b8c78" letterSpacing="1.5">JOURNEY MAP</text>
              <text x="55" y="42" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#9b8c78" letterSpacing="1">SHANKAR V · 2024–</text>
            </svg>
          </div>

          {/* Dotted travel path connecting the two stops */}
          <div className="travel-path-wrap" aria-hidden="true">
            <svg className="travel-path-svg" viewBox="0 0 900 120" fill="none" preserveAspectRatio="none">
              {/* Dotted road */}
              <path
                d="M60 60 C200 20, 400 100, 540 60 C680 20, 800 80, 860 60"
                stroke="#9b8c78"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 6"
              />
              {/* Direction arrow */}
              <path d="M560 52 L575 60 L560 68" stroke="#9b8c78" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              {/* Distance annotation */}
              <text x="450" y="48" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#9b8c78" letterSpacing="1">JOURNEY · 2023 → 2028</text>
            </svg>
          </div>

          {/* The two destination stop cards */}
          <div className="journey-stops">
            {educationData.map((item, idx) => (
              <div key={item.id} className={`stop-card ${item.wcClass}`}>

                {/* Location map pin (SVG, no emoji) */}
                <div className="stop-map-pin" aria-hidden="true">
                  <svg width="28" height="38" viewBox="0 0 28 38" fill="none">
                    <path d="M14 2 C7 2, 2 7, 2 14 C2 22, 14 36, 14 36 C14 36, 26 22, 26 14 C26 7, 21 2, 14 2 Z"
                      stroke="#6b5c44" strokeWidth="2"
                      fill={idx === 0 ? 'rgba(122,155,106,0.4)' : 'rgba(230,169,106,0.4)'}
                    />
                    <circle cx="14" cy="14" r="5" fill="#6b5c44"/>
                    <circle cx="14" cy="14" r="2.5" fill="rgba(253,249,241,0.8)"/>
                  </svg>
                </div>

                {/* Watercolor wash card top */}
                <div className="stop-wc-wash" aria-hidden="true" />

                {/* Sketch inner border */}
                <div className="stop-inner-border" aria-hidden="true" />

                {/* Card meta row */}
                <div className="stop-meta-row">
                  <span className="stop-no">№ {item.id}</span>
                  <span className="stop-label-badge">{item.stopLabel}</span>
                  <span className="stop-jp">{item.jpLabel}</span>
                </div>

                {/* Period */}
                <div className="stop-period-tag">{item.period}</div>

                {/* Institution */}
                <h3 className="stop-institution">{item.institution}</h3>

                {/* Location — SVG pin icon */}
                <div className="stop-location">
                  <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                    <path d="M6 1 C3 1, 1 3, 1 6 C1 10, 6 15, 6 15 C6 15, 11 10, 11 6 C11 3, 9 1, 6 1 Z"
                      stroke="#9b8c78" strokeWidth="1.3" fill="rgba(107,92,68,0.12)"/>
                    <circle cx="6" cy="6" r="2" fill="#9b8c78"/>
                  </svg>
                  <span>{item.location}</span>
                </div>

                {/* Programme box */}
                <div className="stop-program-box">
                  <div className="stop-prog-header">
                    <span className="stop-prog-type">{item.type}</span>
                    <span className={`stop-prog-status ${item.statusColor}`}>{item.status}</span>
                  </div>
                  <p className="stop-degree">{item.degree}</p>
                </div>

                {/* Score plaque */}
                <div className="stop-score-plaque">
                  <span className="score-plaque-label">{item.metricLabel}</span>
                  <div className="score-plaque-value">
                    <span className="score-big">{item.metricValue}</span>
                    <span className="score-suffix">{item.metricSuffix}</span>
                  </div>
                </div>

                {/* Annotation note */}
                <div className="stop-annotation">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12 L4 8 L10 2 L12 4 L6 10 Z" stroke="#9b8c78" strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M9 3 L11 5" stroke="#9b8c78" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M2 12 L1 13" stroke="#9b8c78" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  <span className="annotation-text">{item.details}</span>
                </div>

                {/* Ink seal */}
                <div className="stop-seal" aria-hidden="true">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="#9b8c78" strokeWidth="1.8" strokeDasharray="4 3"/>
                    <circle cx="32" cy="32" r="23" stroke="#9b8c78" strokeWidth="1"/>
                    <text x="32" y="30" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="700" fill="#9b8c78" letterSpacing="0.5">{item.sealCode}</text>
                    <text x="32" y="42" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#9b8c78" letterSpacing="1">{item.metricValue}{item.metricSuffix}</text>
                  </svg>
                </div>

                {/* Corner hatch */}
                <div className="stop-hatch" aria-hidden="true" />
              </div>
            ))}
          </div>

          {/* Map decorative SVG sketches */}
          <div className="map-deco" aria-hidden="true">
            {/* Tiny sketch mountains left */}
            <svg className="map-deco-mountains" width="80" height="48" viewBox="0 0 80 48" fill="none">
              <path d="M0 48 L18 14 L36 48 Z" stroke="#9b8c78" strokeWidth="1.2" fill="rgba(107,92,68,0.06)" strokeLinejoin="round"/>
              <path d="M28 48 L50 8 L72 48 Z" stroke="#9b8c78" strokeWidth="1.2" fill="rgba(107,92,68,0.08)" strokeLinejoin="round"/>
              <path d="M50 48 L64 22 L80 48 Z" stroke="#9b8c78" strokeWidth="1" fill="rgba(107,92,68,0.05)" strokeLinejoin="round"/>
              <path d="M12 30 L18 14 L24 30" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none"/>
              <path d="M40 22 L50 8 L60 22" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none"/>
            </svg>
            {/* Tiny sketch tree right */}
            <svg className="map-deco-tree" width="36" height="60" viewBox="0 0 36 60" fill="none">
              <path d="M18 58 L18 26" stroke="#7a9b6a" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 42 C4 42, 8 28, 18 26 C28 24, 32 36, 32 36 C26 34, 10 40, 4 42 Z"
                stroke="#7a9b6a" strokeWidth="1.2" fill="rgba(122,155,106,0.2)" strokeLinejoin="round"/>
              <path d="M8 30 C8 30, 12 18, 18 16 C24 14, 30 22, 30 22 C24 20, 12 28, 8 30 Z"
                stroke="#7a9b6a" strokeWidth="1.2" fill="rgba(122,155,106,0.18)" strokeLinejoin="round"/>
              <path d="M12 20 C12 20, 15 10, 18 8 C21 6, 26 12, 26 12 C22 10, 14 18, 12 20 Z"
                stroke="#7a9b6a" strokeWidth="1" fill="rgba(122,155,106,0.15)" strokeLinejoin="round"/>
            </svg>
            {/* Wind rose */}
            <svg className="map-deco-rose" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <path d="M19 2 L21 16 L19 14 L17 16 Z" fill="rgba(107,92,68,0.25)" stroke="#9b8c78" strokeWidth="0.8"/>
              <path d="M19 36 L17 22 L19 24 L21 22 Z" fill="rgba(107,92,68,0.12)" stroke="#9b8c78" strokeWidth="0.8"/>
              <path d="M2 19 L16 17 L14 19 L16 21 Z" fill="rgba(107,92,68,0.12)" stroke="#9b8c78" strokeWidth="0.8"/>
              <path d="M36 19 L22 21 L24 19 L22 17 Z" fill="rgba(107,92,68,0.12)" stroke="#9b8c78" strokeWidth="0.8"/>
              <circle cx="19" cy="19" r="4" stroke="#9b8c78" strokeWidth="1" fill="rgba(254,243,220,0.8)"/>
              <circle cx="19" cy="19" r="1.5" fill="#9b8c78"/>
              <text x="19" y="7" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#9b8c78">N</text>
            </svg>
          </div>

        </div>

        {/* ── MEADOW GROUND ── */}
        <div className="edu-ground" aria-hidden="true">
          <svg width="100%" height="52" viewBox="0 0 1200 52" preserveAspectRatio="none" fill="none">
            <path d="M0 38 C120 26, 240 44, 400 33 C560 22, 700 44, 860 33 C1020 22, 1130 40, 1200 30 L1200 52 L0 52 Z"
              fill="rgba(122,155,106,0.14)" stroke="#7a9b6a" strokeWidth="1.5"/>
            {[...Array(18)].map((_,i)=>(
              <g key={i} transform={`translate(${i*68+14},36)`}>
                <path d="M0 0 C-2 -10,-1 -17,0 -20" stroke="#7a9b6a" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
                <path d="M3 0 C5 -11,5 -18,3 -15" stroke="#7a9b6a" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
              </g>
            ))}
          </svg>
        </div>

      </div>
    </section>
  )
}
