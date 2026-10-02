import { useState } from 'react'
import './Education.css'

export default function Education() {
  const [activeEstate, setActiveEstate] = useState('college')

  return (
    <section className="education-landscape-section" id="education" aria-label="Education Journey">
      {/* Paper & Farmland Watercolor Atmosphere */}
      <div className="edu-paper-bg" aria-hidden="true" />

      {/* Farmland Background Ambient Washes */}
      <div className="edu-farmland-backdrop" aria-hidden="true">
        <div className="farm-wc-patch patch-sky" />
        <div className="farm-wc-patch patch-paddy-1" />
        <div className="farm-wc-patch patch-paddy-2" />
        <div className="farm-wc-patch patch-harvest" />
      </div>

      {/* Storyboard Outer Frame */}
      <div className="edu-frame" aria-hidden="true">
        <div className="ef-corner ef-tl" />
        <div className="ef-corner ef-tr" />
        <div className="ef-corner ef-bl" />
        <div className="ef-corner ef-br" />
      </div>

      <div className="edu-content-container">
        {/* Section Header */}
        <div className="edu-header">
          <div className="edu-tag">
            <span>No. 04 · ACADEMIC JOURNEY</span>
          </div>
          <h2 className="edu-title">THE PATH OF LEARNING</h2>
          <p className="edu-subtitle">
            Journeying across the countryside farm fields from school foundations to engineering craftsmanship.
          </p>
          <div className="mobile-scroll-hint" aria-hidden="true">
            <span>↔ Scroll horizontally to explore the farm route</span>
          </div>
        </div>

        {/* ================= THE COUNTRYSIDE FARMLAND CANVAS ================= */}
        <div className="canvas-scroll-container">
          <div className="ghibli-landscape-canvas">
            {/* Sky Horizon with Hills, Clouds, & Farm Silhouettes */}
            <div className="landscape-backdrop" aria-hidden="true">
              <svg className="hills-svg" viewBox="0 0 1200 240" preserveAspectRatio="none" fill="none">
                <path
                  d="M0 130 C200 70, 480 120, 720 70 C940 35, 1080 95, 1200 65 L1200 240 L0 240 Z"
                  fill="rgba(195, 222, 195, 0.45)"
                />
                <path
                  d="M0 160 C260 110, 540 150, 820 110 C1000 80, 1110 130, 1200 115 L1200 240 L0 240 Z"
                  fill="rgba(215, 238, 198, 0.65)"
                />
                {/* Windmill & Silo */}
                <g transform="translate(680, 85)" stroke="#7a9b6a" strokeWidth="1.5">
                  <line x1="0" y1="0" x2="0" y2="28" strokeWidth="2.2" />
                  <line x1="-12" y1="-8" x2="12" y2="8" strokeWidth="1.4" />
                  <line x1="-12" y1="8" x2="12" y2="-8" strokeWidth="1.4" />
                  <circle cx="0" cy="0" r="2.5" fill="#7a9b6a" />
                </g>
                <rect x="730" y="92" width="16" height="24" rx="2" fill="#d2e6bc" stroke="#7a9b6a" strokeWidth="1.6" />
                <polygon points="738,82 727,92 749,92" fill="#c4dda9" stroke="#7a9b6a" strokeWidth="1.6" />
              </svg>

              {/* Drifting Sky Clouds */}
              <div className="sky-cloud cloud-left">
                <svg width="115" height="46" viewBox="0 0 115 46" fill="none">
                  <path
                    d="M14 32 C6 32, 2 24, 7 18 C5 10, 16 3, 26 9 C33 2, 50 2, 60 7 C70 2, 83 3, 87 13 C96 15, 100 24, 91 30 C83 36, 20 36, 14 32 Z"
                    stroke="#9b8c78" strokeWidth="1.6" fill="rgba(255, 253, 248, 0.9)"
                  />
                </svg>
              </div>

              <div className="sky-cloud cloud-center">
                <svg width="90" height="38" viewBox="0 0 90 38" fill="none">
                  <path
                    d="M10 26 C4 26, 1 20, 5 15 C3 8, 12 3, 20 7 C26 2, 38 2, 46 6 C54 2, 64 3, 67 11 C74 12, 78 19, 71 24 C65 29, 16 29, 10 26 Z"
                    stroke="#9b8c78" strokeWidth="1.5" fill="rgba(255, 253, 248, 0.85)"
                  />
                </svg>
              </div>

              <div className="sky-cloud cloud-right">
                <svg width="135" height="52" viewBox="0 0 135 52" fill="none">
                  <path
                    d="M16 38 C8 38, 2 28, 8 21 C6 12, 19 5, 30 11 C38 3, 58 3, 69 10 C80 3, 96 5, 101 16 C111 18, 115 28, 105 35 C96 42, 24 42, 16 38 Z"
                    stroke="#9b8c78" strokeWidth="1.6" fill="rgba(255, 253, 248, 0.9)"
                  />
                </svg>
              </div>

              {/* Birds Flock */}
              <div className="sky-birds-flock">
                <svg width="70" height="30" viewBox="0 0 70 30" fill="none" stroke="#6b5c44" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M4 14 Q9 7 14 14" />
                  <path d="M20 20 Q24 14 28 20" strokeWidth="1.3" />
                  <path d="M38 11 Q42 6 46 11" />
                  <path d="M54 18 Q58 13 62 18" strokeWidth="1.2" />
                </svg>
              </div>
            </div>

            {/* Farmland Layers: Terraced Paddies, Crops, Fences, & Country Route */}
            <div className="country-route-layer" aria-hidden="true">
              <svg className="route-svg" viewBox="0 0 1200 480" preserveAspectRatio="none" fill="none">
                <rect width="1200" height="480" fill="#eaf5e1" />

                {/* Terraced Rice Paddies */}
                <path d="M 0 130 C 140 125, 280 135, 420 120 L 410 170 C 260 180, 120 170, 0 180 Z" fill="#d9eed0" stroke="#7a9b6a" strokeWidth="1.5" />
                <path d="M 0 180 C 130 175, 260 185, 390 170 L 370 220 C 240 230, 110 220, 0 230 Z" fill="#cbe6bd" stroke="#7a9b6a" strokeWidth="1.5" />
                <path d="M 800 120 C 940 135, 1070 125, 1200 130 L 1200 180 C 1080 170, 950 180, 810 170 Z" fill="#d9eed0" stroke="#7a9b6a" strokeWidth="1.5" />
                <path d="M 830 170 C 960 185, 1080 175, 1200 180 L 1200 230 C 1090 220, 970 230, 840 220 Z" fill="#cbe6bd" stroke="#7a9b6a" strokeWidth="1.5" />

                {/* Crop Seedlings */}
                <g stroke="#8ba876" strokeWidth="1.2" strokeLinecap="round" opacity="0.75">
                  {[...Array(9)].map((_, i) => (
                    <path key={`lc-${i}`} d={`M ${50 + i * 36} 145 L ${48 + i * 36} 136 M ${50 + i * 36} 145 L ${53 + i * 36} 137`} />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <path key={`lc2-${i}`} d={`M ${60 + i * 38} 195 L ${58 + i * 38} 186 M ${60 + i * 38} 195 L ${63 + i * 38} 187`} />
                  ))}
                  {[...Array(9)].map((_, i) => (
                    <path key={`rc-${i}`} d={`M ${850 + i * 36} 145 L ${848 + i * 36} 136 M ${850 + i * 36} 145 L ${853 + i * 36} 137`} />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <path key={`rc2-${i}`} d={`M ${870 + i * 38} 195 L ${868 + i * 38} 186 M ${870 + i * 38} 195 L ${873 + i * 38} 187`} />
                  ))}
                </g>

                {/* Wooden Country Fence Along Farmland */}
                <g stroke="#6b5c44" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M 20 225 L 340 215" strokeDasharray="32 10" />
                  <path d="M 20 235 L 340 225" strokeDasharray="32 10" />
                  {[...Array(8)].map((_, i) => (
                    <line key={`fp-${i}`} x1={30 + i * 42} y1="216" x2={30 + i * 42} y2="242" strokeWidth="2.4" />
                  ))}

                  <path d="M 870 215 L 1180 225" strokeDasharray="32 10" />
                  <path d="M 870 225 L 1180 235" strokeDasharray="32 10" />
                  {[...Array(8)].map((_, i) => (
                    <line key={`fp2-${i}`} x1={880 + i * 40} y1="216" x2={880 + i * 40} y2="242" strokeWidth="2.4" />
                  ))}
                </g>

                {/* Farm Fruit Trees */}
                <g transform="translate(430, 110)">
                  <line x1="20" y1="20" x2="20" y2="44" stroke="#6b5c44" strokeWidth="2.4" strokeLinecap="round" />
                  <ellipse cx="20" cy="18" rx="16" ry="18" fill="#b9dc9e" stroke="#6b5c44" strokeWidth="2" />
                  <circle cx="16" cy="14" r="2" fill="#ef4444" />
                  <circle cx="25" cy="20" r="2" fill="#ef4444" />
                </g>
                <g transform="translate(760, 105)">
                  <line x1="20" y1="20" x2="20" y2="44" stroke="#6b5c44" strokeWidth="2.4" strokeLinecap="round" />
                  <ellipse cx="20" cy="18" rx="17" ry="19" fill="#c6e5a8" stroke="#6b5c44" strokeWidth="2" />
                  <circle cx="15" cy="15" r="2" fill="#ef4444" />
                  <circle cx="24" cy="22" r="2" fill="#ef4444" />
                </g>

                {/* Winding Country Road */}
                <path
                  d="M 170 300
                     C 340 300, 420 280, 520 270
                     C 640 260, 720 285, 860 285
                     C 940 285, 990 295, 1030 300"
                  stroke="#d7c2a0"
                  strokeWidth="78"
                  strokeLinecap="round"
                  fill="none"
                />

                <path
                  d="M 160 261
                     C 335 261, 415 241, 515 231
                     C 635 221, 715 246, 855 246
                     C 940 246, 990 256, 1040 261"
                  stroke="#6b5c44"
                  strokeWidth="2.4"
                  fill="none"
                />
                <path
                  d="M 160 339
                     C 345 339, 425 319, 525 309
                     C 645 299, 725 324, 865 324
                     C 940 324, 990 334, 1040 339"
                  stroke="#6b5c44"
                  strokeWidth="2.4"
                  fill="none"
                />

                {/* Tire Tracks */}
                <path
                  d="M 170 300
                     C 340 300, 420 280, 520 270
                     C 640 260, 720 285, 860 285
                     C 940 285, 990 295, 1030 300"
                  stroke="#baa17d"
                  strokeWidth="3"
                  strokeDasharray="14 14"
                  fill="none"
                />

                {/* Grass Tufts */}
                <g stroke="#6b5c44" strokeWidth="1.4" strokeLinecap="round">
                  <path d="M 360 248 L 356 238 M 360 248 L 364 240 M 360 248 L 360 236" />
                  <path d="M 690 234 L 686 224 M 690 234 L 694 226 M 690 234 L 690 222" />
                  <path d="M 470 326 L 466 338 M 470 326 L 474 336 M 470 326 L 470 340" />
                  <path d="M 770 340 L 766 352 M 770 340 L 774 350 M 770 340 L 770 354" />
                </g>

                {/* Roadside Milestone */}
                <g transform="translate(600, 205)">
                  <rect x="-3" y="0" width="6" height="26" fill="#8c5835" stroke="#3d3226" strokeWidth="1.8" />
                  <polygon points="0,-14 26,-4 0,6 -26,6 -26,-14" fill="#fdfaf3" stroke="#3d3226" strokeWidth="1.8" />
                </g>
              </svg>

              {/* Road Sign Text Badge */}
              <div className="road-sign-badge">
                <span>To College ➔</span>
              </div>

              {/* ================= ANIMATED JAPANESE FARMER TRACTOR ================= */}
              <div className="tractor-journey-track">
                <div className="japanese-tractor">
                  {/* Exhaust Puff Smoke */}
                  <div className="tractor-exhaust-smoke" aria-hidden="true">
                    <span className="smoke-puff p1" />
                    <span className="smoke-puff p2" />
                    <span className="smoke-puff p3" />
                  </div>

                  {/* Japanese Farmer Tractor SVG */}
                  <svg className="tractor-svg" viewBox="0 0 110 70" fill="none">
                    <rect x="72" y="8" width="4" height="22" fill="#3d3226" rx="1" />
                    <ellipse cx="74" cy="8" rx="3.5" ry="2" fill="#3d3226" />

                    <ellipse cx="44" cy="18" rx="14" ry="4" fill="#eed9be" stroke="#3d3226" strokeWidth="1.6" />
                    <path d="M38 18 C38 10, 50 10, 50 18" fill="#e2c49e" stroke="#3d3226" strokeWidth="1.6" />
                    <circle cx="44" cy="22" r="5" fill="#fcd34d" stroke="#3d3226" strokeWidth="1.4" />
                    <rect x="38" y="27" width="13" height="15" rx="3" fill="#2563eb" stroke="#3d3226" strokeWidth="1.8" />
                    <path d="M53 25 L60 30" stroke="#3d3226" strokeWidth="2.4" strokeLinecap="round" />
                    <circle cx="61" cy="28" r="3.5" fill="none" stroke="#3d3226" strokeWidth="2" />

                    <path
                      d="M 52 32 L 86 32 C 90 32, 94 36, 94 42 L 94 50 L 52 50 Z"
                      fill="#e11d48"
                      stroke="#3d3226"
                      strokeWidth="2.2"
                    />
                    <line x1="88" y1="36" x2="88" y2="46" stroke="#3d3226" strokeWidth="1.5" />
                    <circle cx="92" cy="38" r="3" fill="#fef08a" stroke="#3d3226" strokeWidth="1.4" />

                    <path
                      d="M 22 36 C 22 28, 48 28, 48 36 L 52 48 L 22 48 Z"
                      fill="#be123c"
                      stroke="#3d3226"
                      strokeWidth="2.2"
                    />

                    <rect x="10" y="32" width="14" height="16" rx="2" fill="#8c5835" stroke="#3d3226" strokeWidth="1.8" />
                    <path d="M 16 32 Q 13 24 10 26 Q 16 26 17 32" fill="#22c55e" stroke="#3d3226" strokeWidth="1.2" />
                    <path d="M 17 32 Q 20 22 23 25 Q 18 26 17 32" fill="#22c55e" stroke="#3d3226" strokeWidth="1.2" />

                    <g className="tractor-wheel wheel-rear">
                      <circle cx="34" cy="52" r="16" fill="#2d3748" stroke="#1a202c" strokeWidth="3" />
                      <circle cx="34" cy="52" r="8" fill="#fef08a" stroke="#3d3226" strokeWidth="2" />
                      <line x1="34" y1="38" x2="34" y2="66" stroke="#1a202c" strokeWidth="2.4" />
                      <line x1="20" y1="52" x2="48" y2="52" stroke="#1a202c" strokeWidth="2.4" />
                      <line x1="24" y1="42" x2="44" y2="62" stroke="#1a202c" strokeWidth="2.4" />
                      <line x1="24" y1="62" x2="44" y2="42" stroke="#1a202c" strokeWidth="2.4" />
                    </g>

                    <g className="tractor-wheel wheel-front">
                      <circle cx="82" cy="55" r="11" fill="#2d3748" stroke="#1a202c" strokeWidth="2.5" />
                      <circle cx="82" cy="55" r="5" fill="#fef08a" stroke="#3d3226" strokeWidth="1.8" />
                      <line x1="82" y1="46" x2="82" y2="64" stroke="#1a202c" strokeWidth="2" />
                      <line x1="73" y1="55" x2="91" y2="55" stroke="#1a202c" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* ================= THE SOURCE & DESTINATION ESTATES ================= */}
            <div className="landscape-estates-row">
              {/* 1. SOURCE: SCHOOL (LEFT) */}
              <div
                className={`estate-card estate-school ${activeEstate === 'school' ? 'is-active' : ''}`}
                onClick={() => setActiveEstate('school')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveEstate('school')
                  }
                }}
                aria-label="Jayam Vidhyalaya Higher Secondary School"
              >
                <div className="estate-pill origin-pill">
                  <span>ORIGIN · 2023 – 2024</span>
                </div>

                <div className="estate-illustration">
                  <svg viewBox="0 0 240 220" fill="none">
                    <rect x="42" y="32" width="18" height="34" fill="#eed9be" stroke="#3d3226" strokeWidth="2.4" />
                    <path d="M51 26 C44 16, 58 8, 48 0" stroke="#9b8c78" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />

                    <polygon points="120,24 15,96 225,96" fill="#e8c89e" stroke="#3d3226" strokeWidth="2.8" strokeLinejoin="round" />
                    <line x1="120" y1="24" x2="120" y2="96" stroke="#6b5c44" strokeWidth="1.5" strokeDasharray="4 3" />
                    <line x1="80" y1="50" x2="60" y2="96" stroke="#6b5c44" strokeWidth="1.2" strokeDasharray="4 3" />
                    <line x1="160" y1="50" x2="180" y2="96" stroke="#6b5c44" strokeWidth="1.2" strokeDasharray="4 3" />

                    <rect x="32" y="96" width="176" height="106" rx="2" fill="#ffffff" stroke="#3d3226" strokeWidth="2.8" />

                    <rect x="48" y="112" width="34" height="36" rx="3" fill="#fef08a" stroke="#3d3226" strokeWidth="2" />
                    <line x1="65" y1="112" x2="65" y2="148" stroke="#3d3226" strokeWidth="1.4" />
                    <line x1="48" y1="130" x2="82" y2="130" stroke="#3d3226" strokeWidth="1.4" />

                    <rect x="158" y="112" width="34" height="36" rx="3" fill="#fef08a" stroke="#3d3226" strokeWidth="2" />
                    <line x1="175" y1="112" x2="175" y2="148" stroke="#3d3226" strokeWidth="1.4" />
                    <line x1="158" y1="130" x2="192" y2="130" stroke="#3d3226" strokeWidth="1.4" />

                    <path d="M100 132 C100 120, 140 120, 140 132 L140 202 L100 202 Z" fill="#8c5835" stroke="#3d3226" strokeWidth="2.2" />
                    <circle cx="132" cy="165" r="3" fill="#fef08a" />

                    <line x1="12" y1="202" x2="228" y2="202" stroke="#3d3226" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="estate-signboard">
                  <h3 className="estate-name">Jayam Vidhyalaya Higher Secondary School</h3>
                  <div className="estate-specs-list">
                    <span className="spec-item">Higher Secondary Education · HSC</span>
                    <span className="score-badge">Score: 96.67%</span>
                    <span className="loc-item">Dharmapuri, Tamil Nadu</span>
                  </div>
                </div>
              </div>

              {/* Spacer for Road & Tractor Journey Center */}
              <div className="estate-journey-spacer" aria-hidden="true" />

              {/* 2. DESTINATION: COLLEGE (RIGHT) */}
              <div
                className={`estate-card estate-college ${activeEstate === 'college' ? 'is-active' : ''}`}
                onClick={() => setActiveEstate('college')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveEstate('college')
                  }
                }}
                aria-label="Sri Eshwar College of Engineering"
              >
                <div className="estate-pill current-pill">
                  <span>CURRENT · 2024 – 2028</span>
                </div>

                <div className="estate-illustration">
                  <svg viewBox="0 0 260 220" fill="none">
                    <rect x="114" y="12" width="32" height="42" fill="#edd9b6" stroke="#3d3226" strokeWidth="2.4" />
                    <polygon points="130,0 110,14 150,14" fill="#3d3226" />
                    <circle cx="130" cy="30" r="7.5" fill="#fef08a" stroke="#3d3226" strokeWidth="1.8" />
                    <line x1="130" y1="30" x2="130" y2="26" stroke="#3d3226" strokeWidth="1.5" />
                    <line x1="130" y1="30" x2="134" y2="30" stroke="#3d3226" strokeWidth="1.5" />

                    <polygon points="130,46 15,96 245,96" fill="#dfb88e" stroke="#3d3226" strokeWidth="2.8" strokeLinejoin="round" />
                    <line x1="130" y1="46" x2="130" y2="96" stroke="#6b5c44" strokeWidth="1.5" strokeDasharray="4 3" />
                    <line x1="85" y1="62" x2="65" y2="96" stroke="#6b5c44" strokeWidth="1.2" strokeDasharray="4 3" />
                    <line x1="175" y1="62" x2="195" y2="96" stroke="#6b5c44" strokeWidth="1.2" strokeDasharray="4 3" />

                    <rect x="25" y="96" width="210" height="106" rx="2" fill="#ffffff" stroke="#3d3226" strokeWidth="2.8" />

                    <rect x="44" y="112" width="34" height="34" rx="3" fill="#fef08a" stroke="#3d3226" strokeWidth="2" />
                    <line x1="61" y1="112" x2="61" y2="146" stroke="#3d3226" strokeWidth="1.4" />
                    <line x1="44" y1="129" x2="78" y2="129" stroke="#3d3226" strokeWidth="1.4" />

                    <rect x="182" y="112" width="34" height="34" rx="3" fill="#fef08a" stroke="#3d3226" strokeWidth="2" />
                    <line x1="199" y1="112" x2="199" y2="146" stroke="#3d3226" strokeWidth="1.4" />
                    <line x1="182" y1="129" x2="216" y2="129" stroke="#3d3226" strokeWidth="1.4" />

                    <path d="M104 130 C104 116, 156 116, 156 130 L156 202 L104 202 Z" fill="#2d3748" stroke="#3d3226" strokeWidth="2.4" />
                    <line x1="130" y1="126" x2="130" y2="202" stroke="#fef08a" strokeWidth="1.6" />

                    <line x1="12" y1="202" x2="248" y2="202" stroke="#3d3226" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="estate-signboard">
                  <h3 className="estate-name">Sri Eshwar College of Engineering</h3>
                  <div className="estate-specs-list">
                    <span className="spec-item">B.E. Computer Science &amp; Engineering</span>
                    <span className="score-badge">CGPA: 8.26 / 10</span>
                    <span className="loc-item">Coimbatore, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}