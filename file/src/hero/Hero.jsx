import { useState, useEffect } from 'react'
import './Hero.css'
import shankarPhoto from '../image/shankar1.jpeg'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 12
    const y = (e.clientY / innerHeight - 0.5) * 12
    setMousePos({ x, y })
  }

  // Sakura petals floating in the breeze
  const petals = [
    { id: 1, left: '8%', delay: '0s', dur: '9s' },
    { id: 2, left: '22%', delay: '2.5s', dur: '11s' },
    { id: 3, left: '45%', delay: '1s', dur: '10s' },
    { id: 4, left: '68%', delay: '3.5s', dur: '12s' },
    { id: 5, left: '85%', delay: '1.8s', dur: '9.5s' },
    { id: 6, left: '92%', delay: '4s', dur: '13s' },
  ]

  return (
    <section className="anime-shop-hero" id="hero" onMouseMove={handleMouseMove}>
      
      {/* Drifting Sakura Petals */}
      <div className="sakura-container" aria-hidden="true">
        {petals.map((p) => (
          <div 
            key={p.id} 
            className="sakura-petal" 
            style={{ left: p.left, animationDelay: p.delay, animationDuration: p.dur }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="#18181b">
              <path d="M10 2 C12 6, 17 9, 15 14 C13 18, 7 18, 5 14 C3 9, 8 6, 10 2 Z" opacity="0.75" />
            </svg>
          </div>
        ))}
      </div>

      {/* Sky & Manga Nature Elements */}
      <div className="anime-sky-backdrop" aria-hidden="true">
        
        {/* Manga Sound Effect Bubble (Top Left) */}
        <div className="manga-sfx sfx-kirakira">
          <span className="sfx-japanese">キラキラ</span>
          <span className="sfx-sub">✨ [kira-kira]</span>
        </div>

        {/* Manga Sound Effect Bubble (Right) */}
        <div className="manga-sfx sfx-katakata">
          <span className="sfx-japanese">カタカタ...</span>
          <span className="sfx-sub">⌨ [coding...]</span>
        </div>

        {/* Fluffy Anime Clouds */}
        <div className="anime-cloud c-left">
          <svg width="140" height="70" viewBox="0 0 140 70" fill="#ffffff" stroke="#18181b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 52 C12 52, 6 46, 10 36 C6 24, 20 14, 34 20 C42 8, 70 6, 82 18 C94 10, 112 14, 118 28 C128 32, 132 44, 122 54 C116 60, 26 60, 20 52 Z" />
            <path d="M30 40 C34 34, 44 36, 48 42" strokeWidth="1.6" fill="none" />
            <path d="M78 32 C84 28, 96 30, 98 36" strokeWidth="1.6" fill="none" />
          </svg>
        </div>

        <div className="anime-cloud c-right">
          <svg width="110" height="55" viewBox="0 0 110 55" fill="#ffffff" stroke="#18181b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 42 C8 42, 4 36, 8 28 C5 18, 18 10, 28 15 C36 5, 60 4, 70 14 C80 8, 94 11, 98 22 C106 25, 108 36, 100 44 C95 48, 20 48, 15 42 Z" />
          </svg>
        </div>

        {/* Flying Manga Birds */}
        <div className="anime-birds">
          <svg width="90" height="50" viewBox="0 0 90 50" fill="none" stroke="#18181b" strokeWidth="2" strokeLinecap="round">
            <path d="M6 16 Q13 7 20 16 Q27 7 34 16" />
            <path d="M42 30 Q48 23 54 30 Q60 23 66 30" strokeWidth="1.8" />
            <path d="M22 40 Q27 34 32 40 Q37 34 42 40" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Ghibli Tree Foliage Branch */}
        <div className="anime-tree-foliage">
          <svg width="290" height="260" viewBox="0 0 290 260" fill="none" stroke="#18181b">
            <path d="M290 0 C250 40, 200 70, 170 135 C150 175, 120 220, 90 260" strokeWidth="4" strokeLinecap="round" />
            <path d="M210 70 C170 80, 130 110, 100 150" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M175 135 C140 145, 105 168, 70 195" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M250 28 C220 22, 190 34, 160 28" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M225 50 C200 40, 185 50, 165 45" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M150 95 C120 85, 95 102, 70 92" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M125 120 C100 112, 80 130, 55 125" strokeWidth="1.4" strokeLinecap="round" />
            {/* Anime Leaf Clusters */}
            <path d="M185 30 Q195 15 205 30 Q195 45 185 30" fill="#ffffff" strokeWidth="1.5" />
            <path d="M145 60 Q155 45 165 60 Q155 75 145 60" fill="#ffffff" strokeWidth="1.5" />
            <path d="M85 110 Q95 95 105 110 Q95 125 85 110" fill="#ffffff" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Main Shophouse Architecture Façade */}
      <div 
        className="anime-shop-facade"
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`
        }}
      >
        
        {/* Shophouse Upper Roof & Chimney & Sleeping Neko Cat */}
        <div className="shop-roof-ridge">
          
          <div className="chimney-pot">
            <div className="smoke-puff" />
          </div>

          {/* Cute Anime Shop Cat sleeping on Roof */}
          <div className="roof-anime-cat" aria-hidden="true">
            <span className="cat-sleeping">(=^･ω･^=) 💤</span>
            <span className="cat-label">Shop Neko</span>
          </div>

          <div className="roof-shingles-bar" />
        </div>

        {/* Double Scalloped Canvas Awning */}
        <div className="shop-double-awning">
          <div className="awning-tier tier-upper">
            <div className="awning-stripes">
              <div className="a-stripe" />
              <div className="a-stripe dark" />
              <div className="a-stripe" />
              <div className="a-stripe dark" />
              <div className="a-stripe" />
              <div className="a-stripe dark" />
              <div className="a-stripe" />
              <div className="a-stripe dark" />
              <div className="a-stripe" />
            </div>
            <div className="awning-scallops">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="scallop-petal" />
              ))}
            </div>
          </div>
        </div>

        {/* Storefront Main Stage */}
        <div className="shop-front-body">
          
          {/* Wooden Structural Pillar (Left) */}
          <div className="timber-pillar pillar-left" aria-hidden="true" />

          {/* Left: Main Counter & Name Sign */}
          <div className="shop-main-counter">
            
            {/* Hanging Shop Open Sign with Japanese Subtitle */}
            <div className="hanging-open-sign">
              <div className="sign-ropes">
                <span className="rope left" />
                <span className="rope right" />
              </div>
              <div className="sign-board">
                <span className="sign-dot">●</span>
                <span className="sign-text">営業中 · OPEN ATELIER</span>
              </div>
            </div>

            {/* Shop Nameboard with Japanese Calligraphy Accent */}
            <div className="shop-name-board">
              <div className="board-jp-tag">
                <span className="jp-text">シャンカル</span>
                <span className="jp-roman">// SHANKAR V</span>
              </div>
              
              <h1 className="shop-title-name">SHANKAR</h1>

              {/* Hand-drawn ink underline */}
              <svg className="name-ink-hatch" viewBox="0 0 320 16" fill="none">
                <path d="M4 8 C80 3, 200 13, 316 6" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M12 13 C90 8, 220 16, 308 11" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="5 3" />
              </svg>
            </div>

            {/* Storefront Profession Menu Plaque with Japanese Role */}
            <div className="shop-profession-menu">
              <div className="menu-header">
                <span className="menu-icon">✦</span>
                <span className="menu-title">職人技 // SPECIALTY CRAFT</span>
                <span className="menu-icon">✦</span>
              </div>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-badge">AI</span>
                  <div className="item-text-group">
                    <span className="item-name">AI Engineer</span>
                    <span className="item-jp">人工知能エンジニア</span>
                  </div>
                </div>
                <span className="menu-divider">✕</span>
                <div className="menu-item">
                  <span className="item-badge">DEV</span>
                  <div className="item-text-group">
                    <span className="item-name">Full Stack Developer</span>
                    <span className="item-jp">フルスタック開発者</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RPG Status Bar & Steaming Green Tea */}
            <div className="sidewalk-items-row">
              <div className="rpg-stat-bar">
                <span className="rpg-label">LV. 2026</span>
                <div className="rpg-bars">
                  <div className="stat-line">
                    <span className="stat-code">AI</span>
                    <div className="stat-meter"><div className="stat-fill" style={{ width: '92%' }} /></div>
                  </div>
                  <div className="stat-line">
                    <span className="stat-code">WEB</span>
                    <div className="stat-meter"><div className="stat-fill" style={{ width: '96%' }} /></div>
                  </div>
                </div>
              </div>

              <div className="sidewalk-tea-cup" title="Matcha Tea for coding stamina">
                <span className="tea-steam">♨</span>
                <span className="tea-cup">🍵</span>
              </div>
            </div>

          </div>

          {/* Right: Display Window with Shankar Photo */}
          <div className="shop-display-window">
            
            {/* Hanging Lantern Lamp with Anime Glow */}
            <div className="shop-lantern" aria-hidden="true">
              <div className="lantern-cord" />
              <div className="lantern-body">
                <span className="lantern-kanji">匠</span>
                <div className="lantern-glow" />
              </div>
            </div>

            {/* Anime Speech Bubble from Window */}
            <div className="anime-speech-bubble" aria-hidden="true">
              <span>"Let's craft scalable AI &amp; Web apps!"</span>
              <div className="bubble-tail" />
            </div>

            {/* Framed Window Pane */}
            <div className="window-frame-card">
              
              <div className="window-header-pane">
                <span className="pane-tick">✦</span>
                <span className="pane-title">匠 ATELIER PANE // 01</span>
                <span className="pane-tick">✦</span>
              </div>

              {/* Photo Display with Hand-drawn Screentone Reflection */}
              <div className="window-glass">
                <img 
                  src={shankarPhoto} 
                  alt="Shankar" 
                  className="shopkeeper-photo"
                  loading="eager"
                />
                <div className="manga-screentone-overlay" aria-hidden="true" />
              </div>

              {/* Window Base Nameplate */}
              <div className="window-base-plate">
                <span className="plate-craftsman">SHANKAR V</span>
                <span className="plate-rank">RANK: S+ BUILDER</span>
              </div>

            </div>

            {/* Sidewalk Lucky Daruma / Box */}
            <div className="sidewalk-crate" aria-hidden="true">
              <span className="crate-daruma">🎯</span>
              <span className="crate-label">ZERO BUGS // PRODUCTION READY</span>
            </div>

          </div>

          {/* Wooden Structural Pillar (Right) */}
          <div className="timber-pillar pillar-right" aria-hidden="true" />

        </div>

        {/* Sidewalk Cobblestone Pavement */}
        <div className="shop-sidewalk-base">
          <div className="pavement-stones">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="cobble-stone" />
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}
