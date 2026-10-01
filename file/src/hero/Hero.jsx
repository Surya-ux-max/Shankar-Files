import { useState, useEffect, useRef } from 'react'
import './Hero.css'
import shankarPhoto from '../image/shankar1.jpeg'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [inkDrops, setInkDrops] = useState([])
  const heroRef = useRef(null)

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 10
    const y = (e.clientY / innerHeight - 0.5) * 10
    setMousePos({ x, y })
  }

  const leaves = [
    { id: 1, left: '5%',  delay: '0s',   dur: '14s',  size: 14, rot: 20  },
    { id: 2, left: '18%', delay: '3s',   dur: '17s',  size: 10, rot: -15 },
    { id: 3, left: '35%', delay: '1.5s', dur: '12s',  size: 16, rot: 35  },
    { id: 4, left: '55%', delay: '5s',   dur: '16s',  size: 12, rot: -30 },
    { id: 5, left: '72%', delay: '2s',   dur: '13s',  size: 15, rot: 10  },
    { id: 6, left: '88%', delay: '6s',   dur: '18s',  size: 11, rot: -40 },
    { id: 7, left: '46%', delay: '8s',   dur: '15s',  size: 13, rot: 25  },
    { id: 8, left: '92%', delay: '4s',   dur: '11s',  size: 9,  rot: -20 },
  ]

  const handleClick = (e) => {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setInkDrops(prev => [...prev.slice(-8), { id, x, y }])
    setTimeout(() => setInkDrops(prev => prev.filter(d => d.id !== id)), 1800)
  }

  return (
    <section
      className="ghibli-hero"
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      aria-label="Hero Section"
    >
      <div className="paper-texture" aria-hidden="true" />

      <div className="watercolor-layer" aria-hidden="true">
        <div className="wc-blob wc-blob-1" />
        <div className="wc-blob wc-blob-2" />
        <div className="wc-blob wc-blob-3" />
        <div className="wc-blob wc-blob-4" />
        <div className="wc-blob wc-blob-5" />
      </div>

      <div className="storyboard-frame" aria-hidden="true">
        <div className="sb-corner sb-tl" />
        <div className="sb-corner sb-tr" />
        <div className="sb-corner sb-bl" />
        <div className="sb-corner sb-br" />
        <div className="sb-sketch-line sb-line-top" />
        <div className="sb-sketch-line sb-line-bottom" />
      </div>

      <div className="leaves-container" aria-hidden="true">
        {leaves.map(l => (
          <div
            key={l.id}
            className="sketch-leaf"
            style={{ left: l.left, animationDelay: l.delay, animationDuration: l.dur, '--rot': `${l.rot}deg` }}
          >
            <svg width={l.size} height={l.size} viewBox="0 0 20 20" fill="none">
              <path d="M10 2 C14 5, 18 10, 14 15 C11 19, 5 17, 4 12 C3 7, 7 3, 10 2 Z" stroke="#6b5c44" strokeWidth="1.4" fill="rgba(107,92,68,0.12)" strokeLinecap="round" />
              <path d="M10 2 C10 9, 10 14, 10 18" stroke="#6b5c44" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
          </div>
        ))}
      </div>

      <div className="ghibli-sky" aria-hidden="true"
        style={{ transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px, 0)` }}
      >
        <div className="sketch-cloud cloud-a">
          <svg width="200" height="90" viewBox="0 0 200 90" fill="none">
            <path d="M25 65 C15 65, 8 56, 14 44 C10 30, 26 18, 44 26 C54 12, 86 8, 104 22 C118 12, 144 16, 150 32 C166 36, 172 52, 160 64 C150 72, 36 72, 25 65 Z" stroke="#9b8c78" strokeWidth="2" fill="rgba(255,253,248,0.7)" strokeLinejoin="round" />
            <path d="M40 50 C50 42, 68 46, 74 54" stroke="#9b8c78" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M100 38 C112 32, 128 36, 132 44" stroke="#9b8c78" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="sketch-cloud cloud-b">
          <svg width="150" height="68" viewBox="0 0 150 68" fill="none">
            <path d="M18 50 C10 50, 5 42, 9 33 C6 22, 18 12, 32 18 C40 6, 64 4, 78 14 C90 6, 112 10, 116 24 C126 27, 130 40, 120 48 C112 54, 26 54, 18 50 Z" stroke="#9b8c78" strokeWidth="1.8" fill="rgba(255,253,248,0.65)" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="sketch-birds birds-a">
          <svg width="100" height="50" viewBox="0 0 100 50" fill="none" stroke="#6b5c44" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 20 Q11 12 18 20" />
            <path d="M26 30 Q32 23 38 30" strokeWidth="1.4" />
            <path d="M48 18 Q55 10 62 18" />
            <path d="M70 28 Q75 22 80 28" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="sketch-birds birds-b">
          <svg width="70" height="40" viewBox="0 0 70 40" fill="none" stroke="#6b5c44" strokeWidth="1.5" strokeLinecap="round">
            <path d="M4 16 Q10 9 16 16" />
            <path d="M22 26 Q27 20 32 26" strokeWidth="1.2" />
            <path d="M40 14 Q46 8 52 14" />
          </svg>
        </div>

        <svg className="ink-brush-bg" viewBox="0 0 800 500" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M0 380 C150 360, 300 390, 450 370 C600 350, 750 380, 800 365" stroke="rgba(107,92,68,0.08)" strokeWidth="60" strokeLinecap="round" />
          <path d="M0 420 C200 400, 400 430, 600 415 C700 408, 760 420, 800 415" stroke="rgba(107,92,68,0.06)" strokeWidth="40" strokeLinecap="round" />
        </svg>
      </div>

      <div
        className="ghibli-content"
        style={{ transform: `translate3d(${mousePos.x * 0.35}px, ${mousePos.y * 0.35}px, 0)` }}
      >
        <div className="ghibli-left">
          <div className="sketch-tag">
            <svg className="tag-pin" width="14" height="14" viewBox="0 0 14 14">
              <circle cx="7" cy="7" r="5" stroke="#6b5c44" strokeWidth="1.5" fill="rgba(254,240,138,0.8)" />
              <circle cx="7" cy="7" r="2" fill="#6b5c44" />
            </svg>
            <span className="tag-text">シャンカル · Portfolio Vol. I</span>
          </div>

          <div className="ghibli-name-block">
            <div className="name-jp-accent">
              <svg width="180" height="28" viewBox="0 0 180 28" fill="none">
                <path d="M4 20 C60 12, 120 18, 176 14" stroke="#6b5c44" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M8 24 C70 16, 130 22, 172 18" stroke="#6b5c44" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 3" />
              </svg>
              <span className="jp-whisper">— 匠の物語 —</span>
            </div>
            <h1 className="ghibli-title">SHANKAR</h1>
            <svg className="title-underline" viewBox="0 0 420 20" fill="none">
              <path d="M4 10 C80 5, 200 15, 320 8 C360 6, 396 12, 416 10" stroke="#6b5c44" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M8 16 C100 11, 240 18, 380 13 C400 12, 412 14, 418 13" stroke="#6b5c44" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 4" />
            </svg>
          </div>

          <div className="roles-panel">
            <div className="panel-corner pc-tl" />
            <div className="panel-corner pc-tr" />
            <div className="panel-corner pc-bl" />
            <div className="panel-corner pc-br" />
            <div className="panel-header">
              <span className="panel-num">No. 01</span>
              <span className="panel-rule">職人技 · SPECIALTY</span>
              <span className="panel-num">✦</span>
            </div>
            <div className="roles-grid">
              <div className="role-item">
                <div className="role-badge">AI</div>
                <div className="role-info">
                  <span className="role-name">AI Engineer</span>
                  <span className="role-jp">人工知能エンジニア</span>
                </div>
              </div>
              <div className="role-divider">
                <svg width="2" height="40" viewBox="0 0 2 40">
                  <path d="M1 2 C1 10, 1 30, 1 38" stroke="#9b8c78" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
                </svg>
              </div>
              <div className="role-item">
                <div className="role-badge">DEV</div>
                <div className="role-info">
                  <span className="role-name">Full Stack Dev</span>
                  <span className="role-jp">フルスタック開発者</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sketchbook-stats">
            <div className="stats-page-tab">LV. 2026 · STATS</div>
            <div className="stat-rows">
              <div className="stat-row">
                <span className="sr-label">AI</span>
                <div className="sr-track"><div className="sr-fill" style={{ width: '92%' }}><span className="sr-dots">· · · · · · · · ·</span></div></div>
                <span className="sr-val">92</span>
              </div>
              <div className="stat-row">
                <span className="sr-label">WEB</span>
                <div className="sr-track"><div className="sr-fill" style={{ width: '96%' }}><span className="sr-dots">· · · · · · · · · ·</span></div></div>
                <span className="sr-val">96</span>
              </div>
              <div className="stat-row">
                <span className="sr-label">UX</span>
                <div className="sr-track"><div className="sr-fill" style={{ width: '85%' }}><span className="sr-dots">· · · · · · · ·</span></div></div>
                <span className="sr-val">85</span>
              </div>
            </div>
          </div>

          <div className="handmade-open-sign">
            <div className="sign-string" />
            <div className="sign-card">
              <span className="sign-green-dot" />
              <span className="sign-card-text">営業中 · OPEN FOR WORK</span>
            </div>
          </div>
        </div>

        <div className="ghibli-right">
          <div className="hand-bubble">
            <span>"Crafting scalable AI &amp; Web magic!"</span>
            <div className="bubble-tail-sketch" />
          </div>

          <div className="sketchbook-window">
            <div className="vine-decor vine-left" aria-hidden="true">
              <svg width="45" height="220" viewBox="0 0 45 220" fill="none">
                <path d="M22 0 C22 40, 18 80, 22 120 C26 160, 18 200, 22 220" stroke="#7a9b6a" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 30 C22 30, 8 22, 5 12" stroke="#7a9b6a" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="4" cy="11" rx="6" ry="8" fill="rgba(122,155,106,0.25)" stroke="#7a9b6a" strokeWidth="1.2" transform="rotate(-20 4 11)" />
                <path d="M22 65 C22 65, 38 56, 40 46" stroke="#7a9b6a" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="41" cy="45" rx="5" ry="7" fill="rgba(122,155,106,0.25)" stroke="#7a9b6a" strokeWidth="1.2" transform="rotate(15 41 45)" />
                <path d="M22 100 C22 100, 6 94, 4 83" stroke="#7a9b6a" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="3" cy="82" rx="6" ry="7" fill="rgba(122,155,106,0.25)" stroke="#7a9b6a" strokeWidth="1.2" transform="rotate(-25 3 82)" />
                <path d="M22 140 C22 140, 40 130, 42 120" stroke="#7a9b6a" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="43" cy="119" rx="5" ry="7" fill="rgba(122,155,106,0.25)" stroke="#7a9b6a" strokeWidth="1.2" transform="rotate(10 43 119)" />
              </svg>
            </div>

            <div className="vine-decor vine-right" aria-hidden="true">
              <svg width="45" height="220" viewBox="0 0 45 220" fill="none">
                <path d="M23 0 C23 40, 27 80, 23 120 C19 160, 27 200, 23 220" stroke="#7a9b6a" strokeWidth="2" strokeLinecap="round" />
                <path d="M23 40 C23 40, 38 30, 40 20" stroke="#7a9b6a" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="41" cy="19" rx="6" ry="8" fill="rgba(122,155,106,0.25)" stroke="#7a9b6a" strokeWidth="1.2" transform="rotate(20 41 19)" />
                <path d="M23 80 C23 80, 8 70, 6 60" stroke="#7a9b6a" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="5" cy="59" rx="5" ry="7" fill="rgba(122,155,106,0.25)" stroke="#7a9b6a" strokeWidth="1.2" transform="rotate(-15 5 59)" />
                <path d="M23 120 C23 120, 38 110, 40 100" stroke="#7a9b6a" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="41" cy="99" rx="6" ry="7" fill="rgba(122,155,106,0.25)" stroke="#7a9b6a" strokeWidth="1.2" transform="rotate(25 41 99)" />
              </svg>
            </div>

            <div className="window-outer-frame">
              <div className="window-frame-header">
                <div className="wfh-inner">
                  <span className="wfh-dot" style={{ background: '#e6a96a' }} />
                  <span className="wfh-dot" style={{ background: '#d4c97a' }} />
                  <span className="wfh-dot" style={{ background: '#8fc78a' }} />
                  <span className="wfh-title">匠 ATELIER · PORTRAIT PANE · Vol. I</span>
                </div>
              </div>

              <div className="window-photo-pane">
                <img
                  src={shankarPhoto}
                  alt="Shankar — AI Engineer & Full Stack Developer"
                  className="portrait-photo"
                  loading="eager"
                />
                <div className="photo-hatch-overlay" aria-hidden="true" />
                <div className="photo-glare" aria-hidden="true" />
                <div className="photo-wc-bottom" aria-hidden="true" />
              </div>

              <div className="window-nameplate">
                <span className="np-name">SHANKAR V</span>
                <div className="np-divider" />
                <span className="np-rank">S+ BUILDER</span>
              </div>
            </div>

            <div className="corner-tea" title="Matcha powered">
              <span className="tea-steam-anim">♨</span>
              <span className="tea-emoji">🍵</span>
            </div>

            <div className="lucky-charm">
              <span className="charm-emoji">🎐</span>
              <span className="charm-text">Good vibes only</span>
            </div>
          </div>

          <div className="ink-annotation">
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
              <path d="M4 12 C20 6, 50 16, 76 10" stroke="#9b8c78" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span>Zero bugs. Production ready.</span>
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
              <path d="M4 10 C14 4, 28 14, 36 10" stroke="#9b8c78" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {inkDrops.map(drop => (
        <div key={drop.id} className="ink-splash" style={{ left: drop.x, top: drop.y }} aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="4" fill="rgba(107,92,68,0.6)" />
            <path d="M20 20 L32 12" stroke="rgba(107,92,68,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 20 L8 10" stroke="rgba(107,92,68,0.3)" strokeWidth="1" strokeLinecap="round" />
            <path d="M20 20 L34 26" stroke="rgba(107,92,68,0.35)" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M20 20 L14 33" stroke="rgba(107,92,68,0.3)" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      ))}

      <div className="ghibli-ground" aria-hidden="true">
        <svg width="100%" height="80" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
          <path d="M0 60 C120 40, 200 70, 360 55 C480 44, 600 68, 720 52 C840 38, 960 64, 1080 50 C1200 36, 1320 62, 1440 48 L1440 80 L0 80 Z" fill="rgba(122,155,106,0.18)" stroke="#7a9b6a" strokeWidth="2" />
          {[...Array(22)].map((_, i) => (
            <g key={i} transform={`translate(${i * 66 + 10}, 58)`}>
              <path d="M0 0 C-3 -12, -2 -20, 0 -24" stroke="#7a9b6a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              <path d="M4 0 C7 -14, 6 -22, 4 -18" stroke="#7a9b6a" strokeWidth="1" strokeLinecap="round" fill="none" />
            </g>
          ))}
        </svg>
      </div>
    </section>
  )
}
