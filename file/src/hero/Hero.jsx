import { useState, useEffect } from 'react'
import './Hero.css'
import shankarPhoto from '../image/shankar1.jpeg'

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 15
    const y = (e.clientY / innerHeight - 0.5) * 15
    setMouseOffset({ x, y })
  }

  return (
    <section className="ink-hero-section" id="hero" onMouseMove={handleMouseMove}>
      {/* Hand-drawn Sky & Atmosphere Elements */}
      <div className="ink-sky-layer" aria-hidden="true">
        {/* Floating Sketch Clouds */}
        <div className="ink-cloud cloud-1">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
            <path 
              d="M15 45 C10 45, 5 40, 8 32 C5 22, 18 12, 30 18 C38 6, 62 4, 72 15 C82 8, 98 12, 102 24 C112 26, 116 38, 108 46 C102 52, 20 52, 15 45 Z" 
              stroke="#18181b" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="#ffffff"
            />
            {/* Cloud detail hatches */}
            <path d="M25 35 C28 30, 38 32, 42 36" stroke="#18181b" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M68 28 C74 24, 86 26, 88 32" stroke="#18181b" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="ink-cloud cloud-2">
          <svg width="90" height="45" viewBox="0 0 90 45" fill="none">
            <path 
              d="M10 35 C5 35, 2 30, 6 24 C4 16, 15 8, 24 13 C30 4, 50 3, 58 11 C66 6, 78 9, 82 18 C90 20, 92 30, 85 36 C80 40, 15 40, 10 35 Z" 
              stroke="#18181b" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Ink Sketch Flying Birds */}
        <div className="ink-birds" aria-hidden="true">
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
            <path d="M4 14 Q10 6 16 14 Q22 6 28 14" stroke="#18181b" strokeWidth="2" strokeLinecap="round" />
            <path d="M36 28 Q41 22 46 28 Q51 22 56 28" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M20 38 Q24 33 28 38 Q32 33 36 38" stroke="#18181b" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>

        {/* Hand-drawn Tree Branch Framing Top Right */}
        <div className="ink-tree-branch" aria-hidden="true">
          <svg width="280" height="240" viewBox="0 0 280 240" fill="none">
            {/* Main Trunks */}
            <path d="M280 0 C240 40, 190 70, 160 130 C140 170, 110 210, 80 240" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
            <path d="M200 65 C160 75, 120 100, 90 140" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M165 125 C130 135, 95 155, 60 180" stroke="#18181b" strokeWidth="2" strokeLinecap="round" />
            {/* Fine Twigs & Cross-hatches */}
            <path d="M240 25 C210 20, 180 30, 150 25" stroke="#18181b" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M215 45 C190 35, 175 45, 155 40" stroke="#18181b" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M140 90 C110 80, 85 95, 60 85" stroke="#18181b" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M115 110 C90 105, 70 120, 45 115" stroke="#18181b" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M85 160 C65 150, 45 165, 25 155" stroke="#18181b" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M130 150 C110 160, 90 180, 70 195" stroke="#18181b" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Main Artisan Workshop Canvas */}
      <div 
        className="ink-hero-container"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`
        }}
      >
        
        {/* Left: Artisan Name & Profession Signboard */}
        <div className="ink-hero-left">
          
          {/* Workshop Canopy / Awning Scallops Top Bar */}
          <div className="ink-canopy-roof" aria-hidden="true">
            <div className="canopy-stripes">
              <div className="stripe" />
              <div className="stripe dark" />
              <div className="stripe" />
              <div className="stripe dark" />
              <div className="stripe" />
              <div className="stripe dark" />
              <div className="stripe" />
            </div>
            <div className="canopy-scallop-edge">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="scallop-arch" />
              ))}
            </div>
          </div>

          {/* Main Workshop Frame */}
          <div className="ink-signboard-card">
            
            {/* Small Workshop Badge */}
            <div className="ink-badge-pill">
              <span className="badge-ink-icon">✦</span>
              <span>STUDIO & CODE LAB</span>
            </div>

            {/* Display Name with Ink Hatching Accent */}
            <div className="ink-name-wrapper">
              <span className="ink-hello-tag">hello, I am</span>
              <h1 className="ink-hero-name">
                <span className="name-letter">S</span>
                <span className="name-letter">H</span>
                <span className="name-letter">A</span>
                <span className="name-letter">N</span>
                <span className="name-letter">K</span>
                <span className="name-letter">A</span>
                <span className="name-letter">R</span>
              </h1>
              
              {/* Hand-drawn double underline hatch */}
              <svg className="ink-underline-svg" viewBox="0 0 340 18" fill="none">
                <path d="M4 8 C80 3, 200 13, 336 6" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                <path d="M12 13 C90 8, 220 16, 328 11" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="6 3" />
              </svg>
            </div>

            {/* Profession Banner */}
            <div className="ink-profession-plaque">
              <div className="plaque-inner">
                <span className="plaque-title">AI Engineer</span>
                <span className="plaque-sep">✕</span>
                <span className="plaque-title">Full Stack Developer</span>
              </div>
              <div className="plaque-hatch-lines" aria-hidden="true" />
            </div>

            {/* Micro Hand-drawn Spec Footer */}
            <div className="ink-card-footer">
              <span className="footer-sketch-text">✎ Architecting Systems & Crafting Interfaces</span>
            </div>

          </div>

          {/* Potted Plant Ink Accent on Floor */}
          <div className="ink-floor-pot" aria-hidden="true">
            <svg width="48" height="42" viewBox="0 0 48 42" fill="none">
              {/* Plant leaves */}
              <path d="M24 18 Q16 4 10 10 Q18 14 24 18" stroke="#18181b" strokeWidth="1.8" fill="#ffffff" />
              <path d="M24 18 Q32 4 38 10 Q30 14 24 18" stroke="#18181b" strokeWidth="1.8" fill="#ffffff" />
              <path d="M24 18 Q24 2 24 0 Q28 8 24 18" stroke="#18181b" strokeWidth="1.8" fill="#ffffff" />
              {/* Clay Pot */}
              <path d="M12 18 L36 18 L32 38 L16 38 Z" stroke="#18181b" strokeWidth="2" fill="#ffffff" />
              <line x1="18" y1="24" x2="30" y2="24" stroke="#18181b" strokeWidth="1.2" />
              <line x1="19" y1="30" x2="29" y2="30" stroke="#18181b" strokeWidth="1.2" />
            </svg>
          </div>

        </div>

        {/* Right: Shankar Portrait in Ink Woodcut / Sketch Frame */}
        <div className="ink-hero-right">
          
          <div className="ink-portrait-easel">
            
            {/* Hanging Pin / Wooden Sign Hook */}
            <div className="easel-hanger" aria-hidden="true">
              <div className="hanger-pin" />
              <div className="hanger-wire-left" />
              <div className="hanger-wire-right" />
            </div>

            {/* Sketched Portrait Window */}
            <div className="ink-photo-frame">
              
              {/* Frame Corner Reinforcements */}
              <div className="frame-corner fc-tl">+</div>
              <div className="frame-corner fc-tr">+</div>
              <div className="frame-corner fc-bl">+</div>
              <div className="frame-corner fc-br">+</div>

              <div className="ink-photo-media">
                <img 
                  src={shankarPhoto} 
                  alt="Shankar V" 
                  className="ink-photo-img"
                  loading="eager"
                />
                {/* Linework overlay shadow */}
                <div className="photo-ink-border-inset" aria-hidden="true" />
              </div>

              {/* Plaque Tag */}
              <div className="ink-photo-tag">
                <span className="tag-roman">№ 01</span>
                <span className="tag-name">SHANKAR V</span>
                <span className="tag-status">ONLINE</span>
              </div>

            </div>

            {/* Hand-drawn Floor Shadow */}
            <div className="ink-floor-shadow" aria-hidden="true" />

          </div>

        </div>

      </div>

      {/* Sidewalk / Base Linework */}
      <div className="ink-ground-line" aria-hidden="true">
        <div className="ground-stones">
          <div className="stone" />
          <div className="stone" />
          <div className="stone" />
          <div className="stone" />
          <div className="stone" />
        </div>
      </div>
    </section>
  )
}
