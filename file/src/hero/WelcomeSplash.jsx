import { useEffect, useState } from 'react'
import './WelcomeSplash.css'

export default function WelcomeSplash() {
  // Stages: 'floating' (gentle hover & welcome note) -> 'diving' (3D fly-through zoom) -> 'cleared'
  const [stage, setStage] = useState('floating')

  useEffect(() => {
    // 1. Hold peaceful sky view for 2.4s, then initiate dive
    const diveTimer = setTimeout(() => setStage('diving'), 2400)
    // 2. Remove from DOM after dive completes (1.4s dive)
    const clearTimer = setTimeout(() => setStage('cleared'), 3800)

    return () => {
      clearTimeout(diveTimer)
      clearTimeout(clearTimer)
    }
  }, [])

  const handleInstantDive = () => {
    if (stage !== 'diving' && stage !== 'cleared') {
      setStage('diving')
      setTimeout(() => setStage('cleared'), 1400)
    }
  }

  if (stage === 'cleared') return null

  return (
    <div
      className={`flythrough-viewport ${stage === 'diving' ? 'is-diving' : ''}`}
      onClick={handleInstantDive}
      title="Click anywhere to dive in"
      role="banner"
      aria-label="Welcome Opening Screen"
    >
      {/* Deep Sky Base */}
      <div className="fly-sky-backdrop" />
      <div className="fly-paper-grain" />

      {/* Radiant Sun Glow at center */}
      <div className="fly-sun-core">
        <div className="fly-sun-glow" />
        <div className="fly-sun-rays" />
      </div>

      {/* Layer 3: Far Background Clouds (Gentle Drift & Slower Zoom) */}
      <div className="cloud-plane plane-distant">
        <div className="cloud-item c-far-top-left">
          <svg width="320" height="130" viewBox="0 0 320 130" fill="none">
            <path
              d="M30 90 C12 90, 4 75, 12 56 C6 38, 26 22, 48 32 C62 14, 98 8, 120 24 C138 10, 172 14, 178 36 C198 40, 206 58, 192 74 C178 86, 42 86, 30 90 Z"
              stroke="#b5c4d2" strokeWidth="1.8" fill="rgba(255, 255, 255, 0.6)"
            />
          </svg>
        </div>
        <div className="cloud-item c-far-top-right">
          <svg width="340" height="140" viewBox="0 0 340 140" fill="none">
            <path
              d="M34 100 C16 100, 6 84, 14 64 C8 44, 30 26, 54 36 C70 16, 110 10, 134 28 C154 12, 192 16, 200 42 C224 46, 234 68, 218 86 C204 98, 46 98, 34 100 Z"
              stroke="#b5c4d2" strokeWidth="1.8" fill="rgba(255, 255, 255, 0.6)"
            />
          </svg>
        </div>
      </div>

      {/* Layer 2: Midground Clouds (Fly outward past camera) */}
      <div className="cloud-plane plane-midground">
        <div className="cloud-item c-mid-left">
          <svg width="420" height="190" viewBox="0 0 420 190" fill="none">
            <path
              d="M45 140 C20 140, 8 120, 18 96 C10 68, 38 42, 70 56 C88 24, 140 14, 170 42 C196 18, 248 24, 256 62 C290 68, 302 100, 280 128 C260 148, 62 148, 45 140 Z"
              stroke="#8c7d6b" strokeWidth="2" fill="rgba(255, 253, 248, 0.9)" strokeLinejoin="round"
            />
            <path d="M78 100 C98 86, 130 92, 138 110" stroke="#8c7d6b" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <path d="M178 72 C198 60, 228 66, 234 84" stroke="#8c7d6b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="cloud-item c-mid-right">
          <svg width="440" height="200" viewBox="0 0 440 200" fill="none">
            <path
              d="M48 145 C22 145, 10 125, 20 100 C12 70, 40 44, 74 58 C92 26, 146 14, 178 44 C204 18, 260 24, 270 65 C304 70, 318 105, 294 135 C274 155, 66 155, 48 145 Z"
              stroke="#8c7d6b" strokeWidth="2" fill="rgba(255, 253, 248, 0.9)" strokeLinejoin="round"
            />
            <path d="M82 105 C104 90, 136 98, 146 116" stroke="#8c7d6b" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <path d="M186 76 C208 64, 240 70, 248 90" stroke="#8c7d6b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Layer 1: Giant Foreground Fluffy Cloud Puffs (Rush past sides on dive) */}
      <div className="cloud-plane plane-foreground">
        <div className="cloud-item c-fore-bottom-left">
          <svg width="550" height="260" viewBox="0 0 550 260" fill="none">
            <path
              d="M0 260 L0 140
                 C50 90, 110 100, 150 140
                 C190 70, 290 50, 370 100
                 C440 30, 530 60, 550 150
                 C520 230, 460 260, 400 260 Z"
              fill="rgba(255, 253, 248, 0.98)" stroke="#7a6c58" strokeWidth="2.4"
            />
            <path d="M110 140 C140 160, 170 160, 190 140" stroke="#7a6c58" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <path d="M290 100 C330 120, 360 120, 380 100" stroke="#7a6c58" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="cloud-item c-fore-bottom-right">
          <svg width="550" height="260" viewBox="0 0 550 260" fill="none">
            <path
              d="M550 260 L550 140
                 C500 90, 440 100, 400 140
                 C360 70, 260 50, 180 100
                 C110 30, 20 60, 0 150
                 C30 230, 90 260, 150 260 Z"
              fill="rgba(255, 253, 248, 0.98)" stroke="#7a6c58" strokeWidth="2.4"
            />
            <path d="M440 140 C410 160, 380 160, 360 140" stroke="#7a6c58" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <path d="M260 100 C220 120, 190 120, 170 100" stroke="#7a6c58" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Flapping Birds across sky */}
      <div className="fly-birds-layer">
        <div className="fly-birds b-group-top">
          <svg width="90" height="42" viewBox="0 0 90 42" fill="none" stroke="#5a4c38" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 20 Q14 11 22 20" />
            <path d="M30 30 Q36 23 42 30" strokeWidth="1.4" />
            <path d="M52 16 Q59 8 66 16" />
            <path d="M72 26 Q77 20 82 26" strokeWidth="1.2" />
          </svg>
        </div>
      </div>

      {/* ================= CENTER CLEAN WELCOME CARD ================= */}
      <div className="fly-center-wrap">
        <div className="fly-welcome-card">
          <div className="fcard-badge">
            <span>SHANKAR&apos;S PORTFOLIO</span>
          </div>

          <h1 className="fcard-title">WELCOME</h1>
          <div className="fcard-line" />

          <p className="fcard-subtitle">AI Engineer &amp; Full Stack Developer</p>

          <div className="fcard-cue">
            <span className="cue-dot" />
            <span className="cue-label">Click anywhere to dive in</span>
          </div>

          {/* Corner Stitch Accents */}
          <div className="fcard-pin fp-tl" />
          <div className="fcard-pin fp-tr" />
          <div className="fcard-pin fp-bl" />
          <div className="fcard-pin fp-br" />
        </div>
      </div>

      {/* Flash overlay at the end of dive */}
      <div className="dive-flash-overlay" />
    </div>
  )
}