import { useState } from 'react'
import { PHOTO_FRAMES_DATA } from './contributionsData'
import SamuraiWallCanvas from './SamuraiWallCanvas'
import ContributionModal from './ContributionModal'
import './Contributions.css'

export default function Contributions() {
  const [modalFrame, setModalFrame] = useState(null)

  const handleOpenModal = (frame) => {
    setModalFrame(frame)
  }

  const handleCloseModal = () => {
    setModalFrame(null)
  }

  return (
    <section className="contributions-section" id="contributions" aria-label="Open Source Contributions">
      {/* Background Drafting Grid & Paper Texture (Matching Internship Section) */}
      <div className="contributions-paper-bg" aria-hidden="true" />

      {/* Atmospheric Ambient Glow Washes */}
      <div className="contributions-ambient-glow" aria-hidden="true">
        <div className="ambient-patch patch-samurai-amber" />
        <div className="ambient-patch patch-samurai-crimson" />
      </div>

      <div className="contributions-container">
        {/* Section Header */}
        <header className="contributions-header">
          <div className="contributions-tag">
            <span className="tag-dot" />
            <span>No. 06 · OPEN SOURCE CONTRIBUTIONS</span>
          </div>

          <h2 className="contributions-title">THE SAMURAI PALACE ARMORY</h2>

          <p className="contributions-subtitle">
            Upstream engineering contributions displayed inside ceremonial hanging frames along the castle armory wall —
            where warfare tools and warrior armors stand watch over verified codebase milestones.
          </p>
        </header>

        {/* Master Panoramic Samurai Palace Wall Canvas */}
        <SamuraiWallCanvas onOpenModal={handleOpenModal} />

        {/* Mobile & Tablet Fallback Stacked Cards */}
        <div className="contributions-mobile-cards">
          {PHOTO_FRAMES_DATA.map((frame) => (
            <div
              key={frame.id}
              className="contributions-mobile-card"
              onClick={() => handleOpenModal(frame)}
            >
              <div className="mobile-card-header">
                <span className="mobile-card-tag">{frame.period}</span>
                <span className="mobile-card-status">{frame.status}</span>
              </div>
              <h3 className="mobile-card-title">{frame.title}</h3>
              {frame.items ? (
                <ul className="mobile-card-items">
                  {frame.items.map((it) => (
                    <li key={it.id}>• {it.name}</li>
                  ))}
                </ul>
              ) : (
                <p className="mobile-card-desc">{frame.badge}</p>
              )}
              <span className="mobile-card-link">View Specification ↗</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Architectural Blueprint Specification Modal */}
      {modalFrame && (
        <ContributionModal
          frame={modalFrame}
          onClose={handleCloseModal}
        />
      )}
    </section>
  )
}
