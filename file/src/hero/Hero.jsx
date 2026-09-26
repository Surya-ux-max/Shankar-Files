import { useState } from 'react'
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

  return (
    <section className="anime-shop-hero" id="hero" onMouseMove={handleMouseMove}>
      
      {/* Sky & Manga Nature Elements */}
      <div className="anime-sky-backdrop" aria-hidden="true">
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
            {/* Main Tree Trunk & Branches */}
            <path d="M290 0 C250 40, 200 70, 170 135 C150 175, 120 220, 90 260" strokeWidth="4" strokeLinecap="round" />
            <path d="M210 70 C170 80, 130 110, 100 150" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M175 135 C140 145, 105 168, 70 195" strokeWidth="2.2" strokeLinecap="round" />
            {/* Fine Twigs */}
            <path d="M250 28 C220 22, 190 34, 160 28" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M225 50 C200 40, 185 50, 165 45" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M150 95 C120 85, 95 102, 70 92" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M125 120 C100 112, 80 130, 55 125" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M95 175 C75 162, 55 180, 35 170" strokeWidth="1.4" strokeLinecap="round" />
            {/* Anime Leaf Clusters */}
            <path d="M185 30 Q195 15 205 30 Q195 45 185 30" fill="#ffffff" strokeWidth="1.5" />
            <path d="M145 60 Q155 45 165 60 Q155 75 145 60" fill="#ffffff" strokeWidth="1.5" />
            <path d="M85 110 Q95 95 105 110 Q95 125 85 110" fill="#ffffff" strokeWidth="1.5" />
            <path d="M45 155 Q55 140 65 155 Q55 170 45 155" fill="#ffffff" strokeWidth="1.5" />
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
        
        {/* Shophouse Upper Roof / Chimney Line */}
        <div className="shop-roof-ridge">
          <div className="chimney-pot">
            <div className="smoke-puff" />
          </div>
          <div className="roof-shingles-bar" />
        </div>

        {/* Double Scalloped Canvas Awning */}
        <div className="shop-double-awning">
          {/* Top Awning Tier */}
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

        {/* Storefront Main Stage (Left: Sign & Counter | Right: Display Window Photo) */}
        <div className="shop-front-body">
          
          {/* Wooden Structural Pillar (Left) */}
          <div className="timber-pillar pillar-left" aria-hidden="true" />

          {/* Center Left: Main Shop Sign & Counter */}
          <div className="shop-main-counter">
            
            {/* Hanging Shop Open Sign */}
            <div className="hanging-open-sign">
              <div className="sign-ropes">
                <span className="rope left" />
                <span className="rope right" />
              </div>
              <div className="sign-board">
                <span className="sign-dot">●</span>
                <span className="sign-text">OPEN FOR CODE & CRAFT</span>
              </div>
            </div>

            {/* Shop Nameboard (Handcrafted Timber Sign) */}
            <div className="shop-name-board">
              <span className="board-sub">ATELIER // NO. 01</span>
              <h1 className="shop-title-name">SHANKAR</h1>
              {/* Hand-drawn ink underline */}
              <svg className="name-ink-hatch" viewBox="0 0 320 16" fill="none">
                <path d="M4 8 C80 3, 200 13, 316 6" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M12 13 C90 8, 220 16, 308 11" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="5 3" />
              </svg>
            </div>

            {/* Storefront Profession Menu Plaque */}
            <div className="shop-profession-menu">
              <div className="menu-header">
                <span className="menu-icon">✦</span>
                <span className="menu-title">SPECIALTY OF THE HOUSE</span>
                <span className="menu-icon">✦</span>
              </div>
              <div className="menu-items">
                <div className="menu-item">
                  <span className="item-badge">01</span>
                  <span className="item-name">AI Engineer</span>
                </div>
                <span className="menu-divider">&amp;</span>
                <div className="menu-item">
                  <span className="item-badge">02</span>
                  <span className="item-name">Full Stack Developer</span>
                </div>
              </div>
            </div>

            {/* Potted Bonsai / Plant by the Door */}
            <div className="sidewalk-plant-pot" aria-hidden="true">
              <svg width="56" height="48" viewBox="0 0 56 48" fill="none">
                {/* Leaves */}
                <path d="M28 20 Q18 4 10 12 Q20 16 28 20" stroke="#18181b" strokeWidth="2" fill="#ffffff" />
                <path d="M28 20 Q38 4 46 12 Q36 16 28 20" stroke="#18181b" strokeWidth="2" fill="#ffffff" />
                <path d="M28 20 Q28 0 28 -2 Q34 8 28 20" stroke="#18181b" strokeWidth="2" fill="#ffffff" />
                {/* Clay Pot */}
                <path d="M14 20 L42 20 L37 46 L19 46 Z" stroke="#18181b" strokeWidth="2.5" fill="#ffffff" />
                <line x1="20" y1="28" x2="36" y2="28" stroke="#18181b" strokeWidth="1.5" />
                <line x1="22" y1="36" x2="34" y2="36" stroke="#18181b" strokeWidth="1.5" />
              </svg>
              <span className="plant-label">handmade software</span>
            </div>

          </div>

          {/* Center Right: Shop Window with Shankar's Portrait */}
          <div className="shop-display-window">
            
            {/* Hanging Lantern Lamp */}
            <div className="shop-lantern" aria-hidden="true">
              <div className="lantern-cord" />
              <div className="lantern-body">
                <div className="lantern-glow" />
              </div>
            </div>

            {/* Framed Window Pane */}
            <div className="window-frame-card">
              
              {/* Window Panes Header Bar */}
              <div className="window-header-pane">
                <span className="pane-tick">+</span>
                <span className="pane-title">PORTRAIT PANE // 01</span>
                <span className="pane-tick">+</span>
              </div>

              {/* Photo Display with Hand-drawn Grid Reflection */}
              <div className="window-glass">
                <img 
                  src={shankarPhoto} 
                  alt="Shankar" 
                  className="shopkeeper-photo"
                  loading="eager"
                />
                <div className="glass-reflection-hatch" aria-hidden="true" />
              </div>

              {/* Window Base Nameplate */}
              <div className="window-base-plate">
                <span className="plate-craftsman">SHANKAR V</span>
                <span className="plate-tag">CHIEF BUILDER</span>
              </div>

            </div>

            {/* Sidewalk Produce Basket / Crates */}
            <div className="sidewalk-crate" aria-hidden="true">
              <div className="crate-label">FRESH CODE // 2026</div>
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
