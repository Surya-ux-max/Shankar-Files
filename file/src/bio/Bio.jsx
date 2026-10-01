import './Bio.css'

export default function Bio() {

  const disciplines = [
    {
      no: '01',
      title: 'Full-Stack Web',
      jp: 'ウェブ開発',
      desc: 'Building responsive, richly interactive web applications with clean, purposeful design and precision.',
    },
    {
      no: '02',
      title: 'Backend Systems',
      jp: 'バックエンド',
      desc: 'Architecting scalable server-side systems, robust APIs and high-performance databases built to last.',
    },
    {
      no: '03',
      title: 'Mobile Applications',
      jp: 'モバイルアプリ',
      desc: 'Developing smooth, high-performance cross-platform mobile experiences that feel native and fluid.',
    },
    {
      no: '04',
      title: 'AI & Machine Learning',
      jp: '人工知能',
      desc: 'Engineering intelligent pipelines, models and pragmatic AI integrations that solve real problems.',
    },
  ]

  const facts = [
    { bullet: 'CS', label: 'Computer Science Student', note: 'Actively learning & building' },
    { bullet: 'IN', label: 'Based in India',           note: 'Building for a global audience' },
    { bullet: 'OS', label: 'Open Source Contributor',  note: 'Giving back to the community' },
    { bullet: 'FS', label: 'Fast & Focused Learner',   note: 'Always levelling up' },
    { bullet: 'AI', label: 'AI Systems Enthusiast',    note: 'Pragmatic, production-first approach' },
  ]

  return (
    <section className="ghibli-bio" id="about">

      {/* Paper background */}
      <div className="bio-paper-bg" aria-hidden="true" />

      {/* Watercolor blobs */}
      <div className="bio-wc-layer" aria-hidden="true">
        <div className="bio-wc bio-wc-1" />
        <div className="bio-wc bio-wc-2" />
        <div className="bio-wc bio-wc-3" />
      </div>

      {/* Storyboard corner brackets */}
      <div className="bio-sb-frame" aria-hidden="true">
        <div className="bio-sb-corner bio-sb-tl" />
        <div className="bio-sb-corner bio-sb-tr" />
        <div className="bio-sb-corner bio-sb-bl" />
        <div className="bio-sb-corner bio-sb-br" />
      </div>

      {/* Ambient SVG doodles — no emojis */}
      <div className="bio-doodles" aria-hidden="true">
        <svg className="doodle doodle-star-a" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 3 L16.8 12 L25 8 L19 15 L25 22 L16.8 18 L15 27 L13.2 18 L5 22 L11 15 L5 8 L13.2 12 Z"
            stroke="#9b8c78" strokeWidth="1.4" fill="rgba(254,240,138,0.3)" strokeLinejoin="round"/>
        </svg>
        <svg className="doodle doodle-swirl-a" width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M42 10 C36 5, 14 8, 11 21 C8 34, 20 42, 31 38 C42 34, 44 23, 37 18 C30 13, 19 18, 20 27"
            stroke="#9b8c78" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <svg className="doodle doodle-leaves" width="72" height="58" viewBox="0 0 72 58" fill="none">
          <path d="M10 48 C10 48, 4 26, 20 18 C20 18, 17 40, 10 48 Z" stroke="#7a9b6a" strokeWidth="1.3" fill="rgba(122,155,106,0.2)" strokeLinecap="round"/>
          <path d="M23 44 C23 44, 14 22, 32 14 C32 14, 29 38, 23 44 Z" stroke="#7a9b6a" strokeWidth="1.3" fill="rgba(122,155,106,0.2)" strokeLinecap="round"/>
          <path d="M37 42 C37 42, 29 22, 46 15 C46 15, 42 36, 37 42 Z" stroke="#7a9b6a" strokeWidth="1.3" fill="rgba(122,155,106,0.2)" strokeLinecap="round"/>
          <path d="M10 48 C23 45, 37 43, 58 41" stroke="#7a9b6a" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <svg className="doodle doodle-drop" width="18" height="27" viewBox="0 0 18 27" fill="none">
          <path d="M9 2 C9 2, 18 14, 18 19 C18 23, 14 27, 9 27 C4 27, 0 23, 0 19 C0 14, 9 2, 9 2 Z"
            stroke="#9b8c78" strokeWidth="1.4" fill="rgba(140,190,220,0.22)" strokeLinecap="round"/>
          <path d="M6 20 C7 17, 10 16, 12 18" stroke="#9b8c78" strokeWidth="0.8" strokeLinecap="round" fill="none"/>
        </svg>
        <svg className="doodle doodle-cross" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M3 3 L19 19 M19 3 L3 19" stroke="#9b8c78" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="bio-container">

        {/* ── SECTION HEADER ── */}
        <div className="bio-page-header">
          <div className="bph-rope-row" aria-hidden="true">
            <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
              <path d="M0 10 C33 4, 66 15, 100 9 C133 3, 166 13, 200 8"
                stroke="#9b8c78" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round"/>
            </svg>
            <div className="bph-pin" />
            <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
              <path d="M0 8 C33 14, 66 4, 100 11 C133 17, 166 6, 200 11"
                stroke="#9b8c78" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="bph-card">
            <svg className="bph-sketch-border" viewBox="0 0 520 82" fill="none" preserveAspectRatio="none">
              <path d="M6 6 C60 4, 460 4, 514 6 C516 30, 516 56, 514 76 C460 78, 60 78, 6 76 C4 52, 4 28, 6 6 Z"
                stroke="#6b5c44" strokeWidth="2.5" fill="rgba(254,243,220,0.93)" strokeLinecap="round"/>
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

        {/* ── OPEN SKETCHBOOK SPREAD ── */}
        <div className="bio-sketchbook-spread">

          {/* Binding spine */}
          <div className="spread-spine" aria-hidden="true">
            <div className="spine-line" />
            {[...Array(9)].map((_, i) => (
              <div key={i} className="spine-stitch" style={{ top: `${6 + i * 11}%` }} />
            ))}
          </div>

          {/* Left page — bio narrative */}
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
              into practical, production-ready solutions.
            </p>

            {/* Hand-drawn ink signature */}
            <div className="page-signature">
              <svg width="140" height="40" viewBox="0 0 140 40" fill="none">
                <path d="M10 30 C20 10, 35 35, 50 20 C65 5, 75 32, 90 22 C105 12, 118 28, 130 24"
                  stroke="#6b5c44" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M10 36 C50 34, 100 36, 130 34"
                  stroke="#6b5c44" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="4 3"/>
              </svg>
              <span className="sig-label">— Shankar V, 2026</span>
            </div>

            {/* Washi tape accent */}
            <div className="washi-tape" aria-hidden="true" />
          </div>

          {/* Right page — quick facts (no emojis, SVG bullets) */}
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
              {facts.map((f, i) => (
                <li key={i} className="fact-item">
                  {/* SVG badge instead of emoji */}
                  <div className="fact-badge">{f.bullet}</div>
                  <div className="fact-text">
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-note">{f.note}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Motto */}
            <div className="page-motto">
              <svg className="motto-curl" width="20" height="38" viewBox="0 0 20 38" fill="none">
                <path d="M17 2 C8 10, 3 19, 9 28 C13 34, 17 36, 15 36" stroke="#9b8c78" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <span className="motto-text">
                "Crafting purposeful software with artisan care &amp; zero fluff."
              </span>
              <svg className="motto-curl" width="20" height="38" viewBox="0 0 20 38" fill="none">
                <path d="M3 2 C12 10, 17 19, 11 28 C7 34, 3 36, 5 36" stroke="#9b8c78" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Ink stamp */}
            <div className="page-stamp" aria-hidden="true">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="#9b8c78" strokeWidth="2" strokeDasharray="4 3"/>
                <circle cx="30" cy="30" r="21" stroke="#9b8c78" strokeWidth="1.2"/>
                <text x="30" y="27" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="700" fill="#9b8c78" letterSpacing="1">SHANKAR</text>
                <text x="30" y="38" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#9b8c78" letterSpacing="2">2026</text>
              </svg>
            </div>
          </div>
        </div>

        {/* ── DISCIPLINES — clean text grid, no emojis ── */}
        <div className="bio-disciplines">

          <div className="disc-header">
            <svg width="100%" height="18" viewBox="0 0 800 18" fill="none" preserveAspectRatio="none">
              <path d="M0 9 C133 4, 266 14, 400 9 C533 4, 666 14, 800 9"
                stroke="#9b8c78" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="disc-header-label">職人技 · DISCIPLINES</span>
            <svg width="100%" height="18" viewBox="0 0 800 18" fill="none" preserveAspectRatio="none">
              <path d="M0 9 C133 14, 266 4, 400 9 C533 14, 666 4, 800 9"
                stroke="#9b8c78" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="disc-grid">
            {disciplines.map((d, i) => (
              <div key={d.no} className="disc-card">
                {/* Top watercolor accent bar — alternating colors via CSS */}
                <div className={`disc-bar disc-bar-${i + 1}`} />

                {/* Sketch inner border */}
                <div className="disc-inner-border" aria-hidden="true" />

                <div className="disc-card-top">
                  <span className="disc-no">{d.no}</span>
                  <svg className="disc-tick" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10 L8 14 L16 6" stroke="#6b5c44" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="disc-title-block">
                  <h3 className="disc-title">{d.title}</h3>
                  <span className="disc-jp">{d.jp}</span>
                </div>

                <p className="disc-desc">{d.desc}</p>

                {/* Corner hatch */}
                <div className="disc-hatch" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        {/* ── MEADOW GROUND ── */}
        <div className="bio-ground" aria-hidden="true">
          <svg width="100%" height="52" viewBox="0 0 1200 52" preserveAspectRatio="none" fill="none">
            <path d="M0 40 C100 28, 200 44, 350 34 C500 24, 650 44, 800 34 C950 24, 1100 40, 1200 32 L1200 52 L0 52 Z"
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
