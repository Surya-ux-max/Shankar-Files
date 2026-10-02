import { useState } from 'react'
import './Skills.css'

export default function Skills() {
  const [activeVesselId, setActiveVesselId] = useState(2)

  const toggleVessel = (id) => {
    setActiveVesselId((prev) => (prev === id ? null : id))
  }

  const vessels = [
    // Top / Far row on table
    {
      id: 1,
      name: 'Languages',
      row: 'top',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
      foodColor: '#f6ad55',
    },
    {
      id: 2,
      name: 'Frontend & Backend',
      row: 'top',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'MERN Stack'],
      foodColor: '#fc8181',
    },
    {
      id: 3,
      name: 'Databases',
      row: 'top',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'ChromaDB'],
      foodColor: '#68d391',
    },

    // Bottom / Near row on table
    {
      id: 4,
      name: 'AI / ML',
      row: 'bottom',
      skills: ['Machine Learning', 'Deep Learning', 'RAG', 'LangGraph', 'MCP', 'TensorFlow', 'scikit-learn', 'XGBoost'],
      foodColor: '#f6e05e',
    },
    {
      id: 5,
      name: 'Core CS',
      row: 'bottom',
      skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'DBMS'],
      foodColor: '#fbd38d',
    },
    {
      id: 6,
      name: 'Tools',
      row: 'bottom',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Jupyter Notebook', 'Google Colab', 'Power BI', 'Vercel'],
      foodColor: '#b794f4',
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

        {/* Realistic Perspective Dining Table View */}
        <div className="dining-table-wrapper">
          {/* Table Canvas with Perspective Surface */}
          <div className="chabudai-table">
            {/* Table Surface Mat */}
            <div className="tabletop-mat">
              {/* Wood Plank Lines & Grain */}
              <div className="tabletop-grain-lines" aria-hidden="true" />

              {/* 6 Bowls Positioned on the Table */}
              <div className="table-dishes-grid">
                {vessels.map((vessel) => {
                  const isOpen = activeVesselId === vessel.id

                  return (
                    <div
                      key={vessel.id}
                      className={`table-dish-spot spot-${vessel.id} row-${vessel.row} ${isOpen ? 'is-open' : 'is-closed'}`}
                    >
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
                        {/* 1. LIFTED LID (Hovers in the air above when open) */}
                        <div className="vessel-lid-unit">
                          <svg className="vessel-lid-svg" viewBox="0 0 160 65" fill="none">
                            {/* Knob Handle */}
                            <line x1="80" y1="2" x2="80" y2="18" stroke="#3d3226" strokeWidth="3" strokeLinecap="round" />
                            <ellipse cx="80" cy="18" rx="9" ry="4.5" fill="#3d3226" />
                            {/* Dome Shell */}
                            <path
                              d="M12 48 C20 16, 140 16, 148 48 Z"
                              fill="#fcf8f0"
                              stroke="#3d3226"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                            />
                            {/* Hand-drawn Accent Line */}
                            <path d="M28 40 C46 26, 114 26, 132 40" stroke="#8c7d6b" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </div>

                        {/* 2. FLOATING SKILLS & STEAM IN THE AIR */}
                        <div className="floating-skills-air-zone" aria-hidden={!isOpen}>
                          {/* Rising Steam Lines */}
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

                          {/* Floating Category Banner */}
                          <div className="air-category-tag">
                            <span className="air-category-name">{vessel.name}</span>
                          </div>

                          {/* Floating Skill Pills Cloud */}
                          <div className="air-skills-cloud">
                            {vessel.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="air-skill-pill"
                                style={{ animationDelay: `${sIdx * 30}ms` }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 3. BOWL BASIN WITH HOT FOOD */}
                        <div className="vessel-bowl-unit">
                          <svg className="vessel-bowl-svg" viewBox="0 0 160 75" fill="none">
                            {/* Bowl Body */}
                            <path
                              d="M14 18 C22 64, 138 64, 146 18 Z"
                              fill="#ffffff"
                              stroke="#3d3226"
                              strokeWidth="2.4"
                              strokeLinejoin="round"
                            />
                            {/* Foot Rim */}
                            <path d="M52 64 L108 64" stroke="#3d3226" strokeWidth="3.2" strokeLinecap="round" />

                            {/* Food Soup / Broth Layer */}
                            <ellipse
                              cx="80"
                              cy="20"
                              rx="62"
                              ry="13"
                              fill={vessel.foodColor}
                              stroke="#3d3226"
                              strokeWidth="1.8"
                            />

                            {/* Savory Garnish Inside */}
                            <circle cx="66" cy="20" r="4.5" fill="#16a34a" />
                            <circle cx="94" cy="21" r="4" fill="#dc2626" />
                            <circle cx="80" cy="18" r="3.5" fill="#ffffff" />
                          </svg>
                        </div>

                        {/* Vessel Table Shadow */}
                        <div className="vessel-table-shadow" />

                        {/* Bottom Category Label */}
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
                  <svg width="36" height="48" viewBox="0 0 36 48" fill="none">
                    <path d="M4 6 L8 44 C9 46, 27 46, 28 44 L32 6 Z" fill="#ffffff" stroke="#3d3226" strokeWidth="2.2" />
                    <ellipse cx="18" cy="8" rx="13" ry="4" fill="#68d391" stroke="#3d3226" strokeWidth="1.4" />
                    <line x1="8" y1="20" x2="28" y2="20" stroke="#3d3226" strokeWidth="1.2" strokeDasharray="3 2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Front Table Lip & Supporting Legs */}
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