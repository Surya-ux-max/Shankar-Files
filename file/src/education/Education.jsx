import { useState } from 'react'
import './Education.css'

export default function Education() {
  const [activeEstate, setActiveEstate] = useState('college')

  return (
    <section className="education-landscape-section" id="education" aria-label="Education Journey">
      {/* Paper & Watercolor Base */}
      <div className="edu-paper-bg" aria-hidden="true" />

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
            Journeying along the countryside road from school foundations to engineering craftsmanship.
          </p>
        </div>

        {/* ================= THE COUNTRYSIDE ROUTE CANVAS ================= */}
        <div className="ghibli-landscape-canvas">
          {/* Sky Horizon with Hills & Birds */}
          <div className="landscape-backdrop" aria-hidden="true">
            <svg className="hills-svg" viewBox="0 0 1200 240" preserveAspectRatio="none" fill="none">
              <path
                d="M0 150 C240 80, 500 130, 750 90 C960 50, 1100 110, 1200 80 L1200 240 L0 240 Z"
                fill="rgba(195, 222, 195, 0.45)"
              />
              <path
                d="M0 175 C300 120, 580 160, 840 125 C1020 95, 1120 145, 1200 130 L1200 240 L0 240 Z"
                fill="rgba(215, 235, 205, 0.55)"
              />
            </svg>

            {/* Drifting Clouds */}
            <div className="sky-cloud cloud-left">
              <svg width="100" height="42" viewBox="0 0 100 42" fill="none">
                <path
                  d="M12 30 C5 30, 2 22, 6 16 C4 9, 14 3, 23 9 C29 2, 44 2, 53 7 C62 2, 73 3, 76 12 C84 14, 88 22, 80 27 C73 32, 18 32, 12 30 Z"
                  stroke="#9b8c78" strokeWidth="1.5" fill="rgba(255, 253, 248, 0.85)"
                />
              </svg>
            </div>

            <div className="sky-cloud cloud-right">
              <svg width="125" height="50" viewBox="0 0 125 50" fill="none">
                <path
                  d="M16 36 C7 36, 2 27, 7 20 C5 11, 18 5, 29 11 C36 3, 54 3, 65 10 C75 3, 90 5, 95 16 C104 18, 108 27, 99 34 C90 41, 23 41, 16 36 Z"
                  stroke="#9b8c78" strokeWidth="1.5" fill="rgba(255, 253, 248, 0.85)"
                />
              </svg>
            </div>

            {/* Birds */}
            <div className="sky-birds-flock">
              <svg width="60" height="26" viewBox="0 0 60 26" fill="none" stroke="#6b5c44" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 12 Q8 6 12 12" />
                <path d="M18 17 Q21 12 24 17" strokeWidth="1.2" />
                <path d="M34 10 Q37 5 40 10" />
              </svg>
            </div>
          </div>

          {/* Rural Countryside Road with Rice Fields & Grass (Replacing River/Bridge) */}
          <div className="country-route-layer" aria-hidden="true">
            <svg className="route-svg" viewBox="0 0 1200 480" preserveAspectRatio="none" fill="none">
              {/* Green Meadow Plains */}
              <rect width="1200" height="480" fill="#eef7e6" />

              {/* Rice Paddies & Farmland Texture */}
              <g stroke="#9ab888" strokeWidth="1.2" strokeDasharray="6 8" opacity="0.6">
                <line x1="80" y1="180" x2="320" y2="180" />
                <line x1="80" y1="210" x2="300" y2="210" />
                <line x1="880" y1="170" x2="1120" y2="170" />
                <line x1="900" y1="200" x2="1120" y2="200" />
              </g>

              {/* Winding Countryside Dirt Road (Source Left -> Dest Right) */}
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

              {/* Road Ink Borders */}
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

              {/* Dashed Center Tire Tracks */}
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

              {/* Grass Tufts along Roadside */}
              <g stroke="#6b5c44" strokeWidth="1.4" strokeLinecap="round">
                <path d="M 360 248 L 356 238 M 360 248 L 364 240 M 360 248 L 360 236" />
                <path d="M 690 234 L 686 224 M 690 234 L 694 226 M 690 234 L 690 222" />
                <path d="M 470 326 L 466 338 M 470 326 L 474 336 M 470 326 L 470 340" />
                <path d="M 770 340 L 766 352 M 770 340 L 774 350 M 770 340 L 770 354" />
              </g>

              {/* Roadside Wooden Milestone Signpost */}
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

                {/* Hand-Drawn Red Japanese Farmer Tractor SVG */}
                <svg className="tractor-svg" viewBox="0 0 110 70" fill="none">
                  {/* Exhaust Pipe */}
                  <rect x="72" y="8" width="4" height="22" fill="#3d3226" rx="1" />
                  <ellipse cx="74" cy="8" rx="3.5" ry="2" fill="#3d3226" />

                  {/* Japanese Farmer with Straw Hat */}
                  <ellipse cx="44" cy="18" rx="14" ry="4" fill="#eed9be" stroke="#3d3226" strokeWidth="1.6" />
                  <path d="M38 18 C38 10, 50 10, 50 18" fill="#e2c49e" stroke="#3d3226" strokeWidth="1.6" />
                  <circle cx="44" cy="22" r="5" fill="#fcd34d" stroke="#3d3226" strokeWidth="1.4" />
                  {/* Driver Body / Overalls */}
                  <rect x="38" y="27" width="13" height="15" rx="3" fill="#2563eb" stroke="#3d3226" strokeWidth="1.8" />
                  {/* Steering Wheel */}
                  <path d="M53 25 L60 30" stroke="#3d3226" strokeWidth="2.4" strokeLinecap="round" />
                  <circle cx="61" cy="28" r="3.5" fill="none" stroke="#3d3226" strokeWidth="2" />

                  {/* Tractor Engine Hood (Japanese Red / Orange Kubota style) */}
                  <path
                    d="M 52 32 L 86 32 C 90 32, 94 36, 94 42 L 94 50 L 52 50 Z"
                    fill="#e11d48"
                    stroke="#3d3226"
                    strokeWidth="2.2"
                  />
                  {/* Hood Grill & Headlight */}
                  <line x1="88" y1="36" x2="88" y2="46" stroke="#3d3226" strokeWidth="1.5" />
                  <circle cx="92" cy="38" r="3" fill="#fef08a" stroke="#3d3226" strokeWidth="1.4" />

                  {/* Driver Mudguard / Seat Structure */}
                  <path
                    d="M 22 36 C 22 28, 48 28, 48 36 L 52 48 L 22 48 Z"
                    fill="#be123c"
                    stroke="#3d3226"
                    strokeWidth="2.2"
                  />

                  {/* Rear Tool Basket / Cargo carrying books & seedling */}
                  <rect x="10" y="32" width="14" height="16" rx="2" fill="#8c5835" stroke="#3d3226" strokeWidth="1.8" />
                  {/* Little Green Plant Sprout in back */}
                  <path d="M 16 32 Q 13 24 10 26 Q 16 26 17 32" fill="#22c55e" stroke="#3d3226" strokeWidth="1.2" />
                  <path d="M 17 32 Q 20 22 23 25 Q 18 26 17 32" fill="#22c55e" stroke="#3d3226" strokeWidth="1.2" />

                  {/* Large Rear Wheel with Mud Treads */}
                  <g className="tractor-wheel wheel-rear">
                    <circle cx="34" cy="52" r="16" fill="#2d3748" stroke="#1a202c" strokeWidth="3" />
                    <circle cx="34" cy="52" r="8" fill="#fef08a" stroke="#3d3226" strokeWidth="2" />
                    {/* Wheel spokes / treads */}
                    <line x1="34" y1="38" x2="34" y2="66" stroke="#1a202c" strokeWidth="2.4" />
                    <line x1="20" y1="52" x2="48" y2="52" stroke="#1a202c" strokeWidth="2.4" />
                    <line x1="24" y1="42" x2="44" y2="62" stroke="#1a202c" strokeWidth="2.4" />
                    <line x1="24" y1="62" x2="44" y2="42" stroke="#1a202c" strokeWidth="2.4" />
                  </g>

                  {/* Small Front Wheel */}
                  <g className="tractor-wheel wheel-front">
                    <circle cx="82" cy="55" r="11" fill="#2d3748" stroke="#1a202c" strokeWidth="2.5" />
                    <circle cx="82" cy="55" r="5" fill="#fef08a" stroke="#3d3226" strokeWidth="1.8" />
                    {/* Front spokes */}
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
    </section>
  )
}