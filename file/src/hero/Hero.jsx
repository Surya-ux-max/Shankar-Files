import './Hero.css'
import shankarPhoto from '../image/shankar1.jpeg'

/* ── Reusable annotation label ── */
function AnnotLabel({ children, variant }) {
  return <span className={`h-annot-label h-annot-label--${variant}`}>{children}</span>
}

/* ── Corner-tick SVG frame overlay ── */
function SketchFrame() {
  return (
    <>
      <svg className="h-frame-ticks" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 16 L0 0 L16 0"   stroke="#2c2c2c" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M84 0 L100 0 L100 16"  stroke="#2c2c2c" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M0 84 L0 100 L16 100"  stroke="#2c2c2c" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M84 100 L100 100 L100 84" stroke="#2c2c2c" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <svg className="h-frame-dash" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <rect x="2" y="2" width="96" height="96" stroke="#ccc" strokeWidth="0.6" strokeDasharray="5 3" rx="1" className="h-frame-dash-rect"/>
      </svg>
    </>
  )
}

/* ── Hand-drawn SVG annotations ── */
function SketchAnnotations() {
  return (
    <div className="h-sketch-layer" aria-hidden="true">
      {/* AI Engineer label + downward arrow */}
      <div className="h-annot h-annot--ai">
        <AnnotLabel variant="box">⚡ AI Engineer</AnnotLabel>
        <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
          <path d="M54 6 Q40 6 28 22 Q18 33 10 40"
            stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"
            className="h-annot-path h-annot-path--ai"/>
          <path d="M8 38 L10 40 L13 36"
            stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            className="h-annot-path h-annot-path--ai"/>
        </svg>
      </div>

      {/* Full Stack label + upward arrow */}
      <div className="h-annot h-annot--fs">
        <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
          <path d="M8 6 Q20 10 30 17 Q38 23 42 30"
            stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"
            className="h-annot-path h-annot-path--fs"/>
          <path d="M44 32 L42 30 L39 33"
            stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            className="h-annot-path h-annot-path--fs"/>
        </svg>
        <AnnotLabel variant="dashed">{"</>"} Full Stack</AnnotLabel>
      </div>

      {/* Bracket lines top / bottom */}
      <svg className="h-bracket h-bracket--top" viewBox="0 0 100 8" fill="none" preserveAspectRatio="none">
        <path d="M2 6 Q25 2 50 5 Q75 8 98 3" stroke="#ccc" strokeWidth="1.2" strokeLinecap="round" className="h-bracket-path"/>
      </svg>
      <svg className="h-bracket h-bracket--bottom" viewBox="0 0 100 8" fill="none" preserveAspectRatio="none">
        <path d="M2 3 Q25 7 50 4 Q75 1 98 6" stroke="#ccc" strokeWidth="1.2" strokeLinecap="round" className="h-bracket-path"/>
      </svg>

      {/* Floating doodles */}
      <span className="h-doodle h-doodle--1">★</span>
      <span className="h-doodle h-doodle--2">◆</span>
      <span className="h-doodle h-doodle--3">◇</span>
      <span className="h-doodle h-doodle--4">✦</span>
    </div>
  )
}

/* ══════════════════════════════════════════
   HERO — Main Component
   ══════════════════════════════════════════ */
export default function Hero() {
  const nameChars = 'SHANKAR'.split('')

  return (
    <section className="hero" aria-label="Shankar – AI Engineer and Full Stack Developer">

      {/* Paper grid background */}
      <div className="hero__bg" aria-hidden="true" />

      {/* Page corner doodles */}
      <div className="hero__corner hero__corner--tl" aria-hidden="true">
        <span>✦</span><span>✏</span>
      </div>
      <div className="hero__corner hero__corner--tr" aria-hidden="true">
        <span>◯</span>
      </div>

      {/* ══ MAIN GRID ══ */}
      <div className="hero__grid">

        {/* ─── LEFT: Typography ─── */}
        <div className="hero__text">

          {/* Availability badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          {/* Name — letter by letter */}
          <h1 className="hero__name" aria-label="Shankar">
            {nameChars.map((ch, i) => (
              <span key={i} className="hero__name-ch" style={{ '--i': i }}>{ch}</span>
            ))}
          </h1>

          {/* Hand-drawn wavy underline */}
          <svg className="hero__name-line" viewBox="0 0 420 14" aria-hidden="true">
            <path
              d="M2 10 Q52 4 105 8 Q157 12 210 7 Q262 2 315 8 Q367 13 418 7"
              fill="none" stroke="#2c2c2c" strokeWidth="2.5" strokeLinecap="round"
              className="hero__name-line-path"
            />
          </svg>

          {/* Role */}
          <p className="hero__role">
            <span className="hero__role-ai" style={{ '--i': 0 }}>AI Engineer</span>
            <span className="hero__role-sep" style={{ '--i': 1 }}> · </span>
            <span className="hero__role-fs"  style={{ '--i': 2 }}>Full Stack Developer</span>
          </p>

          {/* Separator line */}
          <svg className="hero__sep" viewBox="0 0 380 6" aria-hidden="true">
            <path d="M2 3 Q95 1 190 4 Q285 6 378 2"
              fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round"
              className="hero__sep-path"/>
          </svg>

          {/* Description */}
          <p className="hero__desc" style={{ '--i': 3 }}>
            I build intelligent digital experiences where AI meets full-stack
            engineering — transforming ambitious ideas into fast, scalable,
            and meaningful products.
          </p>

          {/* CTA Buttons */}
          <div className="hero__ctas" style={{ '--i': 4 }}>
            <a href="#work" className="hero__btn hero__btn--dark">
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Let&#39;s Talk <span className="hero__btn-doodle">✎</span>
            </a>
          </div>

          {/* Location annotation */}
          <div className="hero__location" style={{ '--i': 5 }}>
            <svg width="30" height="22" viewBox="0 0 30 22" fill="none">
              <path d="M26 4 Q17 4 11 11 Q7 16 4 20"
                stroke="#bbb" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
              <path d="M2 18 L4 20 L6 17"
                stroke="#bbb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>📍 India</span>
          </div>

        </div>

        {/* ─── RIGHT: Image + sketch decorations ─── */}
        <div className="hero__visual">

          {/* Sketch annotations layer */}
          <SketchAnnotations />

          {/* Image frame */}
          <div className="hero__frame-wrap">
            <div className="hero__frame-shadow" aria-hidden="true" />
            <div className="hero__frame">
              <img
                src={shankarPhoto}
                alt="Shankar — AI Engineer and Full Stack Developer"
                className="hero__photo"
                draggable="false"
              />
              {/* Halftone-dot overlay for sketch feel */}
              <div className="hero__photo-overlay" aria-hidden="true" />
            </div>
            <SketchFrame />
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-text">scroll</span>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
      </div>

    </section>
  )
}
