import './Bio.css'

export default function Bio() {
  const skillCards = [
    {
      no: '01',
      icon: '⚡',
      title: 'Full-Stack Web',
      jp: 'ウェブ開発',
      level: 98,
      tag: 'MASTERED',
      desc: 'Building responsive, richly interactive web applications with clean, purposeful design.',
      wc: 'wc-cyan',
    },
    {
      no: '02',
      icon: '🛠️',
      title: 'Backend Systems',
      jp: 'バックエンド',
      level: 95,
      tag: 'EXPERT',
      desc: 'Architecting scalable server-side systems, robust APIs and high-performance databases.',
      wc: 'wc-peach',
    },
    {
      no: '03',
      icon: '📱',
      title: 'Mobile Apps',
      jp: 'モバイルアプリ',
      level: 90,
      tag: 'SKILLED',
      desc: 'Developing smooth, high-performance cross-platform mobile experiences users love.',
      wc: 'wc-lavender',
    },
    {
      no: '04',
      icon: '🧠',
      title: 'AI & Machine Learning',
      jp: '人工知能',
      level: 99,
      tag: 'S+ RANK',
      desc: 'Engineering intelligent pipelines, models and pragmatic AI integrations at scale.',
      wc: 'wc-sage',
    },
  ]

  return (
    <section className="ghibli-bio" id="about">

      {/* Background paper + watercolor */}
      <div className="bio-paper-bg" aria-hidden="true" />
      <div className="bio-wc-layer" aria-hidden="true">
        <div className="bio-wc bio-wc-1" />
        <div className="bio-wc bio-wc-2" />
        <div className="bio-wc bio-wc-3" />
      </div>

      {/* Storyboard border corners */}
      <div className="bio-sb-frame" aria-hidden="true">
        <div className="bio-sb-corner bio-sb-tl" />
        <div className="bio-sb-corner bio-sb-tr" />
        <div className="bio-sb-corner bio-sb-bl" />
        <div className="bio-sb-corner bio-sb-br" />
      </div>

      {/* Floating ink doodles */}
      <div className="bio-doodles" aria-hidden="true">
        {/* top-left ink star */}
        <svg className="doodle doodle-star-a" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 2 L15.5 12 L24 7 L17 14 L24 21 L15.5 16 L14 26 L12.5 16 L4 21 L11 14 L4 7 L12.5 12 Z"
            stroke="#9b8c78" strokeWidth="1.4" fill="rgba(254,240,138,0.35)" strokeLinejoin="round"/>
        </svg>
        {/* top-right sketch swirl */}
        <svg className="doodle doodle-swirl-a" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M40 10 C35 5, 15 8, 12 20 C9 32, 20 40, 30 36 C40 32, 42 22, 36 18 C30 14, 20 18, 20 26"
            stroke="#9b8c78" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
        {/* bottom-left leaves cluster */}
        <svg className="doodle doodle-leaves" width="70" height="55" viewBox="0 0 70 55" fill="none">
          <path d="M10 45 C10 45, 5 25, 20 18 C20 18, 18 38, 10 45 Z" stroke="#7a9b6a" strokeWidth="1.3" fill="rgba(122,155,106,0.2)" strokeLinecap="round"/>
          <path d="M22 42 C22 42, 14 22, 30 15 C30 15, 28 36, 22 42 Z" stroke="#7a9b6a" strokeWidth="1.3" fill="rgba(122,155,106,0.2)" strokeLinecap="round"/>
          <path d="M35 40 C35 40, 28 22, 44 16 C44 16, 40 34, 35 40 Z" stroke="#7a9b6a" strokeWidth="1.3" fill="rgba(122,155,106,0.2)" strokeLinecap="round"/>
          <path d="M10 45 C22 43, 35 41, 55 40" stroke="#7a9b6a" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        {/* right ink drop */}
        <svg className="doodle doodle-drop" width="18" height="26" viewBox="0 0 18 26" fill="none">
          <path d="M9 2 C9 2, 18 14, 18 18 C18 22, 14 26, 9 26 C4 26, 0 22, 0 18 C0 14, 9 2, 9 2 Z"
            stroke="#9b8c78" strokeWidth="1.4" fill="rgba(140,190,220,0.25)" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="bio-container">

        {/* ── SECTION HEADER — Sketchbook Page Title ── */}
        <div className="bio-page-header">
          <div className="bph-rope-row" aria-hidden="true">
            <svg width="180" height="20" viewBox="0 0 180 20" fill="none">
              <path d="M0 10 C30 4, 60 14, 90 8 C120 2, 150 12, 180 8"
                stroke="#9b8c78" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round"/>
            </svg>
            <div className="bph-pin" />
            <svg width="180" height="20" viewBox="0 0 180 20" fill="none">
              <path d="M0 8 C30 12, 60 4, 90 10 C120 16, 150 6, 180 10"
                stroke="#9b8c78" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="bph-card">
            <svg className="bph-sketch-border" viewBox="0 0 520 80" fill="none" preserveAspectRatio="none">
              <path d="M6 6 C60 4, 460 4, 514 6 C516 30, 516 54, 514 74 C460 76, 60 76, 6 74 C4 50, 4 30, 6 6 Z"
                stroke="#6b5c44" strokeWidth="2.5" fill="rgba(254,243,220,0.92)" strokeLinecap="round"/>
            </svg>
            <div className="bph-inner">
              <span className="bph-chapter">冒険の書 · CHAPTER 02</span>
              <h2 className="bph-title">The Artisan's Story</h2>
              <svg className="bph-underline" viewBox="0 0 280 12" fill="none">
                <path d="M4 6 C70 2, 180 10, 276 5" stroke="#6b5c44" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* ── BIO NARRATIVE — Open sketchbook spread ── */}
        <div className="bio-sketchbook-spread">

          {/* Left binding spine */}
          <div className="spread-spine" aria-hidden="true">
            <div className="spine-line" />
            {[...Array(8)].map((_, i) => (
              <div key={i} className="spine-stitch" style={{ top: `${8 + i * 12}%` }} />
            ))}
          </div>

          {/* Left page — bio text */}
          <div className="spread-page page-left">
            <div className="page-lines-overlay" aria-hidden="true" />

            <div className="page-margin-line" aria-hidden="true" />

            <div className="page-tag-row">
              <span className="page-tag">CHARACTER BIO // プロフィール</span>
              <span className="page-rank">RANK: APPRENTICE MASTER</span>
            </div>

            <p className="page-lead">
              I'm <strong className="bio-name-ink">Shankar V</strong>, a{' '}
              <strong>Computer Science student</strong> and{' '}
              <strong>Software Developer</strong> passionate about building
              impactful software and AI systems.
            </p>
            <p className="page-body">
              I work across{' '}
              <span className="bio-underline">full-stack development</span>,{' '}
              <span className="bio-underline">backend engineering</span>,{' '}
              <span className="bio-underline">mobile applications</span>, and{' '}
              <span className="bio-underline">AI/ML</span>. I enjoy solving
              complex problems, contributing to open source, and turning ideas
              into practical solutions.
            </p>

            {/* Hand-drawn ink signature area */}
            <div className="page-signature">
              <svg width="140" height="40" viewBox="0 0 140 40" fill="none">
                <path d="M10 30 C20 10, 35 35, 50 20 C65 5, 75 32, 90 22 C105 12, 118 28, 130 24"
                  stroke="#6b5c44" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M10 36 C50 34, 100 36, 130 34" stroke="#6b5c44" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="4 3"/>
              </svg>
              <span className="sig-label">— Shankar V, 2026</span>
            </div>

            {/* Tiny washi tape corner */}
            <div className="washi-tape" aria-hidden="true" />
          </div>

          {/* Right page — facts & motto */}
          <div className="spread-page page-right">
            <div className="page-lines-overlay" aria-hidden="true" />

            <div className="page-right-header">
              <svg width="100%" height="18" viewBox="0 0 260 18" fill="none" preserveAspectRatio="none">
                <path d="M4 9 C60 4, 180 14, 256 8" stroke="#9b8c78" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span className="right-pg-title">Quick Facts</span>
              <svg width="100%" height="18" viewBox="0 0 260 18" fill="none" preserveAspectRatio="none">
                <path d="M4 8 C60 14, 180 4, 256 10" stroke="#9b8c78" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>

            <ul className="facts-list">
              {[
                { icon: '🎓', label: 'CS Student', note: 'Computer Science' },
                { icon: '🌏', label: 'Based in India', note: 'Building globally' },
                { icon: '☕', label: 'Matcha Powered', note: 'Brewed daily, no bugs' },
                { icon: '🔓', label: 'Open Source', note: 'Active contributor' },
                { icon: '⚡', label: 'Fast Learner', note: 'Always levelling up' },
              ].map((f, i) => (
                <li key={i} className="fact-item">
                  <span className="fact-icon">{f.icon}</span>
                  <div className="fact-text">
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-note">{f.note}</span>
                  </div>
                  <svg className="fact-ink-line" height="1" viewBox="0 0 80 1" fill="none" preserveAspectRatio="none">
                    <line x1="0" y1="0.5" x2="80" y2="0.5" stroke="#d4c9b8" strokeWidth="1" strokeDasharray="3 2"/>
                  </svg>
                </li>
              ))}
            </ul>

            {/* Motto banner */}
            <div className="page-motto">
              <svg className="motto-left-curl" width="24" height="40" viewBox="0 0 24 40" fill="none">
                <path d="M20 2 C10 10, 4 20, 10 30 C14 36, 20 38, 18 38" stroke="#9b8c78" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <span className="motto-text">
                "Crafting purposeful software with artisan care &amp; zero fluff."
              </span>
              <svg className="motto-right-curl" width="24" height="40" viewBox="0 0 24 40" fill="none">
                <path d="M4 2 C14 10, 20 20, 14 30 C10 36, 4 38, 6 38" stroke="#9b8c78" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Stamp */}
            <div className="page-stamp" aria-hidden="true">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="26" stroke="#9b8c78" strokeWidth="2" strokeDasharray="4 3"/>
                <circle cx="28" cy="28" r="20" stroke="#9b8c78" strokeWidth="1.2"/>
                <text x="28" y="26" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="700" fill="#9b8c78" letterSpacing="1">SHANKAR</text>
                <text x="28" y="36" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#9b8c78" letterSpacing="1">2026 ✦</text>
              </svg>
            </div>
          </div>
        </div>

        {/* ── SKILL CARDS — Pinned to cork board ── */}
        <div className="bio-skills-section">

          <div className="skills-divider">
            <svg width="100%" height="24" viewBox="0 0 900 24" fill="none" preserveAspectRatio="none">
              <path d="M0 12 C150 6, 300 18, 450 12 C600 6, 750 18, 900 12"
                stroke="#9b8c78" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="0"/>
            </svg>
            <div className="divider-tag">
              <span>✦ スキル · SKILLS INVENTORY ✦</span>
            </div>
            <svg width="100%" height="24" viewBox="0 0 900 24" fill="none" preserveAspectRatio="none">
              <path d="M0 12 C150 18, 300 6, 450 12 C600 18, 750 6, 900 12"
                stroke="#9b8c78" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="skills-grid">
            {skillCards.map((card) => (
              <div key={card.no} className={`skill-card ${card.wc}`}>

                {/* Pin at top */}
                <div className="card-pin" aria-hidden="true">
                  <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
                    <circle cx="7" cy="6" r="5" stroke="#6b5c44" strokeWidth="1.5" fill="rgba(254,240,138,0.9)"/>
                    <circle cx="7" cy="6" r="2.5" fill="#6b5c44"/>
                    <path d="M7 11 L7 20" stroke="#6b5c44" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                {/* Sketch border overlay */}
                <div className="card-sketch-border" aria-hidden="true" />

                {/* Card content */}
                <div className="card-header">
                  <span className="card-no">№ {card.no}</span>
                  <span className="card-tag">{card.tag}</span>
                </div>

                <div className="card-icon-row">
                  <span className="card-icon">{card.icon}</span>
                  <div className="card-title-group">
                    <h3 className="card-title">{card.title}</h3>
                    <span className="card-jp">{card.jp}</span>
                  </div>
                </div>

                <p className="card-desc">{card.desc}</p>

                {/* Sketch progress bar */}
                <div className="card-level-row">
                  <span className="level-label">LV</span>
                  <div className="level-track">
                    <div className="level-fill" style={{ width: `${card.level}%` }}>
                      <span className="level-dots">· · · · · · · · · ·</span>
                    </div>
                  </div>
                  <span className="level-val">{card.level}</span>
                </div>

                {/* Corner hatch doodle */}
                <div className="card-hatch" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        {/* ── MEADOW GROUND ── */}
        <div className="bio-ground" aria-hidden="true">
          <svg width="100%" height="50" viewBox="0 0 1200 50" preserveAspectRatio="none" fill="none">
            <path d="M0 40 C100 28, 200 44, 350 34 C500 24, 650 44, 800 34 C950 24, 1100 40, 1200 32 L1200 50 L0 50 Z"
              fill="rgba(122,155,106,0.14)" stroke="#7a9b6a" strokeWidth="1.5"/>
            {[...Array(18)].map((_, i) => (
              <g key={i} transform={`translate(${i * 68 + 14}, 38)`}>
                <path d="M0 0 C-2 -10, -1 -17, 0 -20" stroke="#7a9b6a" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
                <path d="M3 0 C5 -11, 5 -18, 3 -15" stroke="#7a9b6a" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
              </g>
            ))}
          </svg>
        </div>

      </div>
    </section>
  )
}
