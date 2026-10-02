import { useState } from 'react'
import './Skills.css'

export default function Skills() {
  // Currently opened vessel ID (starts with one open so the user immediately discovers the interaction)
  const [activeVesselId, setActiveVesselId] = useState(2)

  const toggleVessel = (id) => {
    setActiveVesselId((prev) => (prev === id ? null : id))
  }

  const vessels = [
    // Top Row (Back of table in perspective)
    {
      id: 1,
      name: 'Languages',
      row: 'top',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
      foodColor: '#f6ad55',
      soupDetails: 'Dumplings & Noodles',
    },
    {
      id: 2,
      name: 'Frontend & Backend',
      row: 'top',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'MERN Stack'],
      foodColor: '#fc8181',
      soupDetails: 'Rich Ramen & Chashu',
    },
    {
      id: 3,
      name: 'Databases',
      row: 'top',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'ChromaDB'],
      foodColor: '#68d391',
      soupDetails: 'Steamed Rice & Fish',
    },

    // Bottom Row (Front of table in perspective)
    {
      id: 4,
      name: 'AI / ML',
      row: 'bottom',
      skills: ['Machine Learning', 'Deep Learning', 'RAG', 'LangGraph', 'MCP', 'TensorFlow', 'scikit-learn', 'XGBoost'],
      foodColor: '#f6e05e',
      soupDetails: 'Simmering Hot Pot',
    },
    {
      id: 5,
      name: 'Core CS',
      row: 'bottom',
      skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'DBMS'],
      foodColor: '#fbd38d',
      soupDetails: 'Artisan Soba Broth',
    },
    {
      id: 6,
      name: 'Tools',
      row: 'bottom',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Jupyter Notebook', 'Google Colab', 'Power BI', 'Vercel'],
      foodColor: '#b794f4',
      soupDetails: 'Savory Grilled Skewers',
    },
  ]

  return (
    <section className="perspective-table-section" id="skills" aria-label="Skills Table">
      <div className="pt-container">
        {/* Section Header */}
        <div className="pt-header">
          <div className="pt-badge">
            <span>TECHNICAL TOOLKIT</span>
          </div>
          <h2 className="pt-title">SKILLS TABLE</h2>
          <p className="pt-subtitle">
            Click any vessel to lift the lid and reveal the floating skills
          </p>
        </div>

        {/* 3D Perspective Dining Table Scene */}
        <div className="table-scene-viewport">
          <div className="wooden-dining-table">
            {/* Tabletop Surface with Wood Plank Grid */}
            <div className="tabletop-surface">
              <div className="table-wood-lines" aria-hidden="true" />

              {/* Table Bowls Grid based on user sketch */}
              <div className="bowls-arrangement">
                {vessels.map((vessel) => {
                  const isOpen = activeVesselId === vessel.id

                  return (
                    <div
                      key={vessel.id}
                      className={`vessel-spot spot-${vessel.id} row-${vessel.row} ${isOpen ? 'vessel-open' : 'vessel-closed'}`}
                    >
                      {/* Interactive Vessel Object */}
                      <div
                        className="japanese-vessel"
                        onClick={() => toggleVessel(vessel.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            toggleVessel(vessel.id)
                          }
                        }}
                        aria-expanded={isOpen}
                        title={`Click to ${isOpen ? 'close' : 'open'} ${vessel.name}`}
                      >
                        {/* 1. LIFTED LID (Floats in air above when open) */}
                        <div className="vessel-lid-unit">
                          <svg className="vessel-lid-svg" viewBox="0 0 140 60" fill="none">
                            {/* Top Knob Handle */}
                            <line x1="70" y1="2" x2="70" y2="18" stroke="#3d3226" strokeWidth="3" strokeLinecap="round" />
                            <ellipse cx="70" cy="18" rx="8" ry="4" fill="#3d3226" />
                            {/* Dome Lid Shell */}
                            <path
                              d="M10 44 C18 16, 122 16, 130 44 Z"
                              fill="#fcf8f0"
                              stroke="#3d3226"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                            />
                            {/* Hand-drawn Accent Line */}
                            <path d="M24 38 C40 26, 100 26, 116 38" stroke="#6b5c44" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </div>

                        {/* 2. FLOATING SKILLS & STEAM CLOUD (Hovering in air above open food) */}
                        <div className="floating-skills-air-zone" aria-hidden={!isOpen}>
                          {/* Rising Hand-Drawn Steam */}
                          <div className="steam-wisps-wrap">
                            <svg className="steam-line st-1" viewBox="0 0 20 60" fill="none">
                              <path d="M10 55 C4 42, 16 28, 10 14 C6 6, 12 2, 10 0" stroke="#9b8c78" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                            <svg className="steam-line st-2" viewBox="0 0 20 60" fill="none">
                              <path d="M10 55 C16 40, 4 25, 10 12 C14 5, 8 2, 10 0" stroke="#9b8c78" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            <svg className="steam-line st-3" viewBox="0 0 20 60" fill="none">
                              <path d="M10 55 C5 38, 15 22, 10 10 C7 4, 11 1, 10 0" stroke="#9b8c78" strokeWidth="1.4" strokeLinecap="round" />
                            </svg>
                          </div>

                          {/* Floating Category Title */}
                          <div className="air-category-tag">
                            <span className="air-category-name">{vessel.name}</span>
                          </div>

                          {/* Floating Skills Pills in the Air */}
                          <div className="air-skills-cloud">
                            {vessel.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="air-skill-pill"
                                style={{ animationDelay: `${sIdx * 35}ms` }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 3. BOWL BASIN WITH HOT FOOD INSIDE */}
                        <div className="vessel-bowl-unit">
                          <svg className="vessel-bowl-svg" viewBox="0 0 140 70" fill="none">
                            {/* Bowl Ceramic Body */}
                            <path
                              d="M12 16 C20 60, 120 60, 128 16 Z"
                              fill="#ffffff"
                              stroke="#3d3226"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                            />
                            {/* Foot Rim */}
                            <path d="M48 58 L92 58" stroke="#3d3226" strokeWidth="3" strokeLinecap="round" />

                            {/* Hot Broth / Food Layer inside */}
                            <ellipse
                              cx="70"
                              cy="18"
                              rx="54"
                              ry="12"
                              fill={vessel.foodColor}
                              stroke="#3d3226"
                              strokeWidth="1.8"
                            />

                            {/* Savory Garnish Inside */}
                            <circle cx="58" cy="18" r="4" fill="#16a34a" />
                            <circle cx="82" cy="19" r="3.5" fill="#dc2626" />
                            <circle cx="70" cy="16" r="3" fill="#ffffff" />
                          </svg>
                        </div>

                        {/* Vessel Table Shadow */}
                        <div className="vessel-table-shadow" />

                        {/* Bottom Label when Closed */}
                        <div className="vessel-closed-label">
                          <span>{vessel.name}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Table Accessories (Chopsticks Pairs & Cup as sketched) */}
                <div className="table-chopsticks chop-1" aria-hidden="true">
                  <div className="chopstick-pair" />
                  <div className="chopstick-rest-block" />
                </div>

                <div className="table-chopsticks chop-2" aria-hidden="true">
                  <div className="chopstick-pair" />
                  <div className="chopstick-rest-block" />
                </div>

                <div className="table-cup" aria-hidden="true">
                  <svg width="34" height="46" viewBox="0 0 34 46" fill="none">
                    <path d="M4 6 L8 42 C9 44, 25 44, 26 42 L30 6 Z" fill="#ffffff" stroke="#3d3226" strokeWidth="2" />
                    <ellipse cx="17" cy="8" rx="12" ry="4" fill="#68d391" stroke="#3d3226" strokeWidth="1.2" />
                    <line x1="8" y1="18" x2="26" y2="18" stroke="#3d3226" strokeWidth="1.2" strokeDasharray="3 2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Front Table Edge & Legs (3D Perspective Table Frame) */}
            <div className="table-front-lip">
              <div className="table-leg leg-left" />
              <div className="table-leg leg-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}