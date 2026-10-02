import { useState } from 'react'
import './Skills.css'

export default function Skills() {
  // All open by default or toggleable
  const [openVessels, setOpenVessels] = useState(new Set([1, 2, 3, 4, 5, 6]))

  const toggleVessel = (id) => {
    setOpenVessels((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const dishes = [
    {
      id: 1,
      category: 'Languages',
      vesselName: 'Bamboo Steamer',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
      vesselType: 'steamer',
    },
    {
      id: 2,
      category: 'Frontend & Backend',
      vesselName: 'Bento Box',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'MERN Stack'],
      vesselType: 'bento',
    },
    {
      id: 3,
      category: 'Databases',
      vesselName: 'Donburi Bowl',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'ChromaDB'],
      vesselType: 'donburi',
    },
    {
      id: 4,
      category: 'AI & ML',
      vesselName: 'Hot Pot',
      skills: ['Machine Learning', 'Deep Learning', 'RAG', 'LangGraph', 'MCP', 'TensorFlow', 'scikit-learn', 'XGBoost'],
      vesselType: 'nabe',
    },
    {
      id: 5,
      category: 'Core CS',
      vesselName: 'Ramen Bowl',
      skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'DBMS'],
      vesselType: 'ramen',
    },
    {
      id: 6,
      category: 'Tools & DevOps',
      vesselName: 'Serving Platter',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Jupyter Notebook', 'Google Colab', 'Power BI', 'Vercel'],
      vesselType: 'yakitori',
    },
  ]

  return (
    <section className="simple-skills-section" id="skills" aria-label="Skills Table">
      <div className="skills-container">
        {/* Simple Clean Header */}
        <div className="skills-header">
          <span className="skills-tag">TECHNICAL SKILLS</span>
          <h2 className="skills-title">SKILLS TABLE</h2>
          <p className="skills-hint">Click any dish to open or close the lid</p>
        </div>

        {/* The Single Dining Table Spread */}
        <div className="simple-dining-table">
          <div className="table-grid">
            {dishes.map((dish) => {
              const isOpen = openVessels.has(dish.id)

              return (
                <div
                  key={dish.id}
                  className={`table-dish-card ${isOpen ? 'is-open' : 'is-closed'}`}
                  onClick={() => toggleVessel(dish.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleVessel(dish.id)
                    }
                  }}
                  title="Click to toggle lid"
                >
                  {/* Category Title */}
                  <div className="dish-top">
                    <h3 className="dish-category">{dish.category}</h3>
                    <span className="dish-lid-btn">{isOpen ? 'Close' : 'Open'}</span>
                  </div>

                  {/* Interactive Food Vessel */}
                  <div className="dish-stage">
                    {/* Steam when open */}
                    <div className={`dish-steam ${isOpen ? 'active' : ''}`} aria-hidden="true">
                      <svg viewBox="0 0 20 40" fill="none">
                        <path d="M10 38 C4 28, 16 18, 10 0" stroke="#9b8c78" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                      <svg viewBox="0 0 20 40" fill="none">
                        <path d="M10 38 C16 28, 4 18, 10 0" stroke="#9b8c78" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* Lid (Lifts Up) */}
                    <div className="dish-lid">
                      {renderSimpleLid(dish.vesselType)}
                    </div>

                    {/* Basin / Food Base */}
                    <div className="dish-basin">
                      {renderSimpleBasin(dish.vesselType)}
                    </div>
                  </div>

                  {/* Skills tags directly inside the vessel */}
                  <div className="dish-skills-list">
                    {dish.skills.map((skill, idx) => (
                      <span key={idx} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   CLEAN VECTOR LIDS
   ========================================================================= */
function renderSimpleLid(type) {
  switch (type) {
    case 'steamer':
      return (
        <svg viewBox="0 0 140 50" fill="none">
          <ellipse cx="70" cy="35" rx="60" ry="12" fill="#edd9b6" stroke="#6b5c44" strokeWidth="2" />
          <path d="M15 35 C20 12, 120 12, 125 35" fill="#edd9b6" stroke="#6b5c44" strokeWidth="2" />
          <path d="M62 16 C62 8, 78 8, 78 16" stroke="#6b5c44" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'bento':
      return (
        <svg viewBox="0 0 140 45" fill="none">
          <rect x="15" y="12" width="110" height="28" rx="3" fill="#2d3748" stroke="#1a202c" strokeWidth="2" />
          <line x1="15" y1="22" x2="125" y2="22" stroke="#d69e2e" strokeWidth="1.4" />
        </svg>
      )
    case 'donburi':
      return (
        <svg viewBox="0 0 140 50" fill="none">
          <path d="M16 38 C20 12, 120 12, 124 38 Z" fill="#ebf4ff" stroke="#2b6cb0" strokeWidth="2" />
          <ellipse cx="70" cy="14" rx="8" ry="5" fill="#2b6cb0" />
        </svg>
      )
    case 'nabe':
      return (
        <svg viewBox="0 0 140 50" fill="none">
          <path d="M18 38 C22 14, 118 14, 122 38 Z" fill="#c05621" stroke="#431407" strokeWidth="2" />
          <ellipse cx="70" cy="14" rx="9" ry="6" fill="#7b341e" />
        </svg>
      )
    case 'ramen':
      return (
        <svg viewBox="0 0 140 50" fill="none">
          <path d="M18 36 C25 14, 115 14, 122 36 Z" fill="#fffaf0" stroke="#744210" strokeWidth="2" />
          <line x1="28" y1="30" x2="112" y2="30" stroke="#d69e2e" strokeWidth="1.5" strokeDasharray="5 3" />
        </svg>
      )
    case 'yakitori':
      return (
        <svg viewBox="0 0 140 45" fill="none">
          <rect x="12" y="16" width="116" height="22" rx="3" fill="#faf5ff" stroke="#553c9a" strokeWidth="2" />
          <path d="M50 16 C50 8, 90 8, 90 16" stroke="#805ad5" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

/* =========================================================================
   CLEAN VECTOR BASINS
   ========================================================================= */
function renderSimpleBasin(type) {
  switch (type) {
    case 'steamer':
      return (
        <svg viewBox="0 0 140 60" fill="none">
          <ellipse cx="70" cy="45" rx="58" ry="12" fill="#d69e2e" opacity="0.2" />
          <path d="M14 18 L18 46 C20 54, 120 54, 122 46 L126 18" fill="#fef3c7" stroke="#6b5c44" strokeWidth="2" />
        </svg>
      )
    case 'bento':
      return (
        <svg viewBox="0 0 140 60" fill="none">
          <rect x="15" y="12" width="110" height="42" rx="3" fill="#1a202c" stroke="#1a202c" strokeWidth="2" />
        </svg>
      )
    case 'donburi':
      return (
        <svg viewBox="0 0 140 60" fill="none">
          <path d="M18 15 C22 52, 118 52, 122 15 Z" fill="#ebf8ff" stroke="#2b6cb0" strokeWidth="2" />
        </svg>
      )
    case 'nabe':
      return (
        <svg viewBox="0 0 140 60" fill="none">
          <path d="M18 16 C22 54, 118 54, 122 16 Z" fill="#7b341e" stroke="#431407" strokeWidth="2" />
        </svg>
      )
    case 'ramen':
      return (
        <svg viewBox="0 0 140 60" fill="none">
          <path d="M18 15 C22 52, 118 52, 122 15 Z" fill="#fffaf0" stroke="#744210" strokeWidth="2" />
        </svg>
      )
    case 'yakitori':
      return (
        <svg viewBox="0 0 140 60" fill="none">
          <rect x="12" y="16" width="116" height="36" rx="3" fill="#2d3748" stroke="#553c9a" strokeWidth="2" />
        </svg>
      )
    default:
      return null
  }
}