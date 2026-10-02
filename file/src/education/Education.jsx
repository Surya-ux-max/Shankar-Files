import { useState } from 'react'
import './Education.css'

export default function Education() {
  const [activeBuilding, setActiveBuilding] = useState('college') // 'school' | 'college'

  return (
    <section className="education-landscape-section" id="education" aria-label="Education Landscape">
      {/* Paper & Watercolor Ambience */}
      <div className="edu-paper-bg" aria-hidden="true" />
      <div className="edu-wc-layer" aria-hidden="true">
        <div className="edu-wc-blob wc-sky" />
        <div className="edu-wc-blob wc-river" />
        <div className="edu-wc-blob wc-meadow" />
      </div>

      {/* Storyboard Frame Corners */}
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
            From foundational school roots across the bridge to engineering craftsmanship.
          </p>
        </div>

        {/* ================= THE ILLUSTRATED LANDSCAPE ================= */}
        <div className="landscape-stage">
          {/* Sky Elements: Drifting Clouds & Birds (Matching sketch) */}
          <div className="landscape-sky" aria-hidden="true">
            <div className="sky-cloud cloud-1">
              <svg width="120" height="50" viewBox="0 0 120 50" fill="none">
                <path
                  d="M15 35 C8 35, 4 28, 8 20 C6 12, 18 6, 28 12 C35 4, 52 3, 62 10 C72 4, 86 6, 90 16 C98 18, 102 26, 94 32 C86 38, 22 38, 15 35 Z"
                  stroke="#9b8c78" strokeWidth="1.8" fill="rgba(255, 253, 248, 0.7)"
                />
              </svg>
            </div>

            <div className="sky-birds">
              <svg width="70" height="30" viewBox="0 0 70 30" fill="none" stroke="#6b5c44" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 14 Q9 7 14 14" />
                <path d="M20 20 Q24 15 28 20" strokeWidth="1.2" />
                <path d="M38 12 Q42 7 46 12" />
              </svg>
            </div>

            {/* Hillside Tree from sketch */}
            <div className="sky-tree">
              <svg width="50" height="70" viewBox="0 0 50 70" fill="none">
                {/* Trunk */}
                <path d="M23 40 L23 68 M27 40 L27 68" stroke="#6b5c44" strokeWidth="2.2" strokeLinecap="round" />
                {/* Foliage */}
                <path
                  d="M25 10 C12 10, 8 22, 14 30 C8 36, 16 46, 25 44 C34 46, 42 36, 36 30 C42 22, 38 10, 25 10 Z"
                  fill="rgba(122, 155, 106, 0.35)"
                  stroke="#6b5c44"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Flowing River Silhouette (Under bridge) */}
          <div className="landscape-river" aria-hidden="true">
            <svg viewBox="0 0 1000 320" preserveAspectRatio="none" fill="none">
              {/* Riverbanks and Water Flow */}
              <path
                d="M 520 0
                   C 460 70, 380 120, 240 190
                   C 100 260, 20 290, 0 320
                   L 1000 320
                   C 950 280, 880 230, 780 160
                   C 680 90, 620 40, 580 0 Z"
                fill="rgba(140, 190, 220, 0.18)"
              />
              {/* River Current Flow Lines (from sketch) */}
              <path d="M120 250 C180 230, 260 210, 340 180" stroke="#7aaac6" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="12 8" />
              <path d="M200 280 C280 260, 380 230, 480 200" stroke="#7aaac6" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="16 10" />
              <path d="M380 260 C460 230, 560 180, 640 140" stroke="#7aaac6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="14 8" />
              <path d="M520 120 C580 80, 660 60, 720 30" stroke="#7aaac6" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="10 6" />
            </svg>
          </div>

          {/* ================= LEFT BUILDING: SCHOOL ================= */}
          <div
            className={`building-entity building-school ${activeBuilding === 'school' ? 'is-active' : ''}`}
            onClick={() => setActiveBuilding('school')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActiveBuilding('school')
              }
            }}
            aria-label="Jayam Vidhyalaya Higher Secondary School"
          >
            <div className="building-roof-badge">ORIGIN · 2023 – 2024</div>

            {/* Hand-Drawn School House Illustration */}
            <div className="building-illustration">
              <svg viewBox="0 0 220 200" fill="none">
                {/* Chimney with Smoke */}
                <rect x="40" y="32" width="16" height="30" fill="#edd9b6" stroke="#3d3226" strokeWidth="2.2" />
                <path d="M48 28 C42 18, 54 10, 46 2" stroke="#9b8c78" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 2" />

                {/* Sloped Roof (matching sketch) */}
                <polygon points="110,22 15,92 205,92" fill="#edd9b6" stroke="#3d3226" strokeWidth="2.6" strokeLinejoin="round" />
                <line x1="110" y1="22" x2="110" y2="92" stroke="#6b5c44" strokeWidth="1.4" strokeDasharray="4 3" />

                {/* School House Main Walls */}
                <rect x="30" y="92" width="160" height="98" fill="#ffffff" stroke="#3d3226" strokeWidth="2.6" />

                {/* Left & Right Windows */}
                <rect x="46" y="108" width="28" height="32" rx="2" fill="#fef08a" stroke="#3d3226" strokeWidth="1.8" />
                <line x1="60" y1="108" x2="60" y2="140" stroke="#3d3226" strokeWidth="1.4" />
                <line x1="46" y1="124" x2="74" y2="124" stroke="#3d3226" strokeWidth="1.4" />

                <rect x="146" y="108" width="28" height="32" rx="2" fill="#fef08a" stroke="#3d3226" strokeWidth="1.8" />
                <line x1="160" y1="108" x2="160" y2="140" stroke="#3d3226" strokeWidth="1.4" />
                <line x1="146" y1="124" x2="174" y2="124" stroke="#3d3226" strokeWidth="1.4" />

                {/* Wooden Door */}
                <path d="M92 130 C92 120, 128 120, 128 130 L128 190 L92 190 Z" fill="#8c5835" stroke="#3d3226" strokeWidth="2" />
                <circle cx="120" cy="158" r="2.5" fill="#fef08a" />

                {/* Ground Grass Baseline */}
                <line x1="10" y1="190" x2="210" y2="190" stroke="#3d3226" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* School Name & Information directly on the building façade */}
            <div className="building-signboard">
              <h3 className="building-name">Jayam Vidhyalaya Higher Secondary School</h3>
              <div className="building-sub-details">
                <span className="b-spec">Higher Secondary Education · HSC</span>
                <span className="b-score">Score: 96.67%</span>
                <span className="b-loc">Dharmapuri, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* ================= CENTER BRIDGE / PATH ================= */}
          <div className="landscape-bridge-zone">
            <div className="bridge-visual-assembly">
              {/* Arched Wooden Suspension Footbridge (matching sketch) */}
              <svg className="bridge-svg" viewBox="0 0 380 120" fill="none">
                {/* Upper Handrail Cable */}
                <path
                  d="M 10 40 Q 190 75 370 40"
                  stroke="#3d3226"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Lower Footpath Plank Beam */}
                <path
                  d="M 10 70 Q 190 102 370 70"
                  stroke="#3d3226"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />

                {/* Vertical Bridge Slats / Railing Posts (From sketch) */}
                {[...Array(14)].map((_, i) => {
                  const x = 30 + i * 24.5
                  return (
                    <line
                      key={i}
                      x1={x}
                      y1={48 + Math.sin((i / 13) * Math.PI) * 22}
                      x2={x}
                      y2={74 + Math.sin((i / 13) * Math.PI) * 24}
                      stroke="#5a3d24"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  )
                })}

                {/* Bridge Left & Right Anchoring Posts */}
                <rect x="6" y="32" width="8" height="52" rx="1" fill="#8c5835" stroke="#3d3226" strokeWidth="2.2" />
                <rect x="366" y="32" width="8" height="52" rx="1" fill="#8c5835" stroke="#3d3226" strokeWidth="2.2" />
              </svg>

              {/* Journey Stepping Marker / Bridge Narrative Tag */}
              <div className="bridge-journey-tag">
                <span className="journey-arrow">➔</span>
                <span className="journey-text">Transition &amp; Academic Growth</span>
                <span className="journey-arrow">➔</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT BUILDING: COLLEGE ================= */}
          <div
            className={`building-entity building-college ${activeBuilding === 'college' ? 'is-active' : ''}`}
            onClick={() => setActiveBuilding('college')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActiveBuilding('college')
              }
            }}
            aria-label="Sri Eshwar College of Engineering"
          >
            <div className="building-roof-badge active-badge">CURRENT · 2024 – 2028</div>

            {/* Hand-Drawn Engineering College Campus Illustration */}
            <div className="building-illustration">
              <svg viewBox="0 0 240 200" fill="none">
                {/* Engineering Clock / Spire Tower */}
                <rect x="105" y="10" width="30" height="42" fill="#edd9b6" stroke="#3d3226" strokeWidth="2.2" />
                <polygon points="120,0 102,12 138,12" fill="#3d3226" />
                <circle cx="120" cy="28" r="6" fill="#fef08a" stroke="#3d3226" strokeWidth="1.5" />

                {/* Sloped Roof (matching sketch) */}
                <polygon points="120,44 15,92 225,92" fill="#edd9b6" stroke="#3d3226" strokeWidth="2.6" strokeLinejoin="round" />
                <line x1="120" y1="44" x2="120" y2="92" stroke="#6b5c44" strokeWidth="1.4" strokeDasharray="4 3" />

                {/* College Main Structure */}
                <rect x="25" y="92" width="190" height="98" fill="#ffffff" stroke="#3d3226" strokeWidth="2.6" />

                {/* Triple Campus Windows */}
                <rect x="42" y="108" width="30" height="30" rx="2" fill="#fef08a" stroke="#3d3226" strokeWidth="1.8" />
                <line x1="57" y1="108" x2="57" y2="138" stroke="#3d3226" strokeWidth="1.4" />
                <line x1="42" y1="123" x2="72" y2="123" stroke="#3d3226" strokeWidth="1.4" />

                <rect x="168" y="108" width="30" height="30" rx="2" fill="#fef08a" stroke="#3d3226" strokeWidth="1.8" />
                <line x1="183" y1="108" x2="183" y2="138" stroke="#3d3226" strokeWidth="1.4" />
                <line x1="168" y1="123" x2="198" y2="123" stroke="#3d3226" strokeWidth="1.4" />

                {/* Grand Campus Double Arch Entrance */}
                <path d="M98 126 C98 114, 142 114, 142 126 L142 190 L98 190 Z" fill="#2d3748" stroke="#3d3226" strokeWidth="2" />
                <line x1="120" y1="122" x2="120" y2="190" stroke="#fef08a" strokeWidth="1.5" />

                {/* Ground Grass Baseline */}
                <line x1="10" y1="190" x2="230" y2="190" stroke="#3d3226" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* College Name & Information directly on the building façade */}
            <div className="building-signboard">
              <h3 className="building-name">Sri Eshwar College of Engineering</h3>
              <div className="building-sub-details">
                <span className="b-spec">B.E. Computer Science &amp; Engineering</span>
                <span className="b-score">CGPA: 8.26 / 10</span>
                <span className="b-loc">Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}