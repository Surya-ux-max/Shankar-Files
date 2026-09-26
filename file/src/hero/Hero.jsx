import { useState } from 'react'
import './Hero.css'
import shankarPhoto from '../image/shankar1.jpeg'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const email = "shankar.ai.dev@gmail.com"

  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const skills = ['PyTorch', 'GenAI / LLMs', 'React', 'FastAPI', 'TypeScript', 'Docker']

  return (
    <section className="sketch-hero" id="hero">
      {/* Subtle Graph Paper Grid */}
      <div className="sketch-bg-grid" aria-hidden="true" />

      <div className="hero-shell">
        {/* Left: Text & Actions */}
        <div className="hero-text-col">
          
          {/* Status Badge */}
          <div className="sketch-badge">
            <span className="badge-dot" />
            <span className="badge-text">Available for new opportunities</span>
          </div>

          {/* Heading */}
          <div className="hero-title-group">
            <span className="hero-greeting">Hi, I'm</span>
            <div className="hero-name-wrap">
              <h1 className="hero-name">Shankar</h1>
              {/* Hand-drawn Underline */}
              <svg className="sketch-underline" viewBox="0 0 240 14" fill="none" preserveAspectRatio="none">
                <path 
                  d="M3 9 C60 3, 140 13, 237 6" 
                  stroke="var(--ink)" 
                  strokeWidth="3.2" 
                  strokeLinecap="round" 
                />
                <path 
                  d="M10 11 C80 6, 170 12, 230 8" 
                  stroke="var(--accent-amber)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  opacity="0.8" 
                />
              </svg>
            </div>
          </div>

          {/* Subtitle / Role */}
          <h2 className="hero-role">
            AI Engineer <span className="role-sep">&middot;</span> Full Stack Developer
          </h2>

          {/* Short Bio */}
          <p className="hero-bio">
            Designing intelligent AI pipelines, fine-tuned models, and robust end-to-end web applications with clean architecture and scalable systems.
          </p>

          {/* Tech Stack Chips */}
          <div className="hero-skills-row">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-sketch btn-sketch-primary">
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <button 
              onClick={handleCopyEmail} 
              className={`btn-sketch btn-sketch-secondary ${copied ? 'copied' : ''}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>{copied ? 'Email Copied!' : 'Contact Email'}</span>
            </button>
          </div>

        </div>

        {/* Right: Portrait in Sketch Frame */}
        <div className="hero-image-col">
          <div className="sketch-frame-wrapper">
            
            {/* Hand-drawn subtle note / annotation */}
            <div className="sketch-annotation">
              <span className="annotation-hand">AI & Web Architect</span>
              <svg className="annotation-arrow" width="40" height="35" viewBox="0 0 40 35" fill="none">
                <path d="M32 4 C 20 8, 8 18, 6 28" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
                <path d="M2 22 L 6 29 L 12 24" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Sketched Photo Card */}
            <div className="photo-card">
              <div className="photo-inner">
                <img 
                  src={shankarPhoto} 
                  alt="Shankar" 
                  className="photo-img"
                  loading="eager"
                />
              </div>
              <div className="photo-tag-strip">
                <span className="tag-label">SHANKAR</span>
                <span className="tag-dot">&bull;</span>
                <span className="tag-sub">DEV // 01</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
