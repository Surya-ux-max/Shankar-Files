import { useState } from 'react'
import SamuraiPalaceWall from './SamuraiPalaceWall'
import ContributionModal from './ContributionModal'
import { CONTRIBUTION_OVERVIEW } from './contributionsData'
import './Contributions.css'

export default function Contributions() {
  const [selectedItem, setSelectedItem] = useState(null)

  const handleSelectItem = (item) => {
    setSelectedItem(item)
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
  }

  return (
    <section className="contributions-section" id="contributions" aria-label="Open Source Contributions">
      {/* Background Palace Chamber Atmosphere */}
      <div className="palace-chamber-bg" aria-hidden="true" />
      <div className="palace-timber-texture" aria-hidden="true" />

      {/* Atmospheric Fire/Lantern Ambient Glows */}
      <div className="palace-ambient-glow" aria-hidden="true">
        <div className="glow-orb orb-left" />
        <div className="glow-orb orb-center" />
        <div className="glow-orb orb-right" />
      </div>

      <div className="contributions-container">
        {/* Section Header */}
        <header className="contributions-header">
          <div className="contributions-tag">
            <span className="tag-mon">⚔️</span>
            <span>No. 06 · OPEN SOURCE CONTRIBUTIONS</span>
          </div>

          <h2 className="contributions-title">THE SAMURAI PALACE ARMORY</h2>

          <p className="contributions-subtitle">
            Forging resilient distributed systems and robust static analysis tools. Inspect the warfare tools,
            great warrior armor, and ceremonial hanging photo frames displaying verified upstream contributions.
          </p>

          {/* Quick Summary Pill Bar */}
          <div className="contributions-summary-bar">
            <div className="summary-chip">
              <span className="chip-count">4</span>
              <span className="chip-label">Merged Upstream</span>
            </div>
            <div className="summary-divider">|</div>
            <div className="summary-chip">
              <span className="chip-org nvidia">NVIDIA (3)</span>
              <span className="chip-sub">Kubernetes, NRI, NullAway</span>
            </div>
            <div className="summary-divider">|</div>
            <div className="summary-chip">
              <span className="chip-org uber">Uber (1)</span>
              <span className="chip-sub">Upstream Tooling</span>
            </div>
            <div className="summary-divider">|</div>
            <div className="summary-chip timeline">
              <span className="chip-dot" />
              <span>{CONTRIBUTION_OVERVIEW.timeline}</span>
            </div>
          </div>
        </header>

        {/* Master Samurai Palace Wall Exhibit */}
        <SamuraiPalaceWall onSelectItem={handleSelectItem} />
      </div>

      {/* Deep Dive Inspection Modal */}
      {selectedItem && (
        <ContributionModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </section>
  )
}
