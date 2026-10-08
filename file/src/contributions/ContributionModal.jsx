import { useEffect } from 'react'

export default function ContributionModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!item) return null

  const isArmorLore = !item.company && item.kabuto
  const isWeaponLore = !item.company && item.kanji && item.subtitle

  return (
    <div className="contribution-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="contribution-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Scroll Roller / Header Trim */}
        <div className="modal-roller-bar">
          <div className="roller-finial" />
          <span className="roller-title-kanji">
            {isArmorLore ? '侍の魂' : isWeaponLore ? '名刀秘伝' : '上流貢献録'}
          </span>
          <div className="roller-finial" />
        </div>

        {/* Modal Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Scroll Inspection">
          ✕
        </button>

        {/* Modal Inner Parchment Body */}
        <div className="modal-body-scroll">
          {/* ================= CASE 1: SAMURAI ARMOR INSPECTION ================= */}
          {isArmorLore && (
            <div className="modal-lore-view">
              <div className="modal-lore-header">
                <span className="lore-crest">🛡️</span>
                <span className="lore-kanji">{item.kanji}</span>
                <h3 className="modal-lore-title">{item.title}</h3>
                <p className="modal-lore-quote">{item.quote}</p>
              </div>

              <div className="armor-components-grid">
                <div className="armor-part-card">
                  <span className="part-label">兜 · KABUTO</span>
                  <p>{item.kabuto}</p>
                </div>
                <div className="armor-part-card">
                  <span className="part-label">面頬 · MENPO</span>
                  <p>{item.menpo}</p>
                </div>
                <div className="armor-part-card">
                  <span className="part-label">胴 · DŌ CUIRASS</span>
                  <p>{item.do}</p>
                </div>
                <div className="armor-part-card">
                  <span className="part-label">大袖 · O-SODE</span>
                  <p>{item.sode}</p>
                </div>
              </div>

              <div className="modal-motto-callout">
                <span>{item.motto}</span>
              </div>
            </div>
          )}

          {/* ================= CASE 2: WARFARE TOOL LORE ================= */}
          {isWeaponLore && (
            <div className="modal-lore-view">
              <div className="modal-lore-header">
                <span className="lore-crest">⚔️</span>
                <span className="lore-kanji">{item.kanji}</span>
                <h3 className="modal-lore-title">{item.name}</h3>
                <span className="modal-subtitle-chip">{item.subtitle}</span>
              </div>

              <p className="modal-weapon-desc">{item.description}</p>
            </div>
          )}

          {/* ================= CASE 3: OPEN SOURCE CONTRIBUTION INSPECTION ================= */}
          {!isArmorLore && !isWeaponLore && (
            <div className="modal-contribution-view">
              {/* Header Badges */}
              <div className="modal-contrib-header">
                <div className="modal-org-tag">
                  <span className="modal-org-icon">{item.icon}</span>
                  <span className="modal-org-title">{item.company}</span>
                </div>

                <div className="modal-status-badge">
                  <span className="status-glow-dot" />
                  <span>{item.status}</span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="modal-headline">
                <span className="modal-category-label">{item.category}</span>
                <h3 className="modal-title-text">{item.title}</h3>
                <span className="modal-timeline-tag">Timeline: {item.period}</span>
              </div>

              {/* Summary */}
              <div className="modal-summary-box">
                <p className="modal-summary-text">{item.summary}</p>
              </div>

              {/* Technical Deep Dive Details */}
              <div className="modal-details-section">
                <h4 className="details-section-title">Upstream Engineering Deliverables</h4>
                <ul className="details-list">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="details-item">
                      <span className="detail-arrow">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges & Branch Stats */}
              <div className="modal-meta-row">
                <div className="modal-tech-stack">
                  <span className="meta-label">Technologies & Frameworks:</span>
                  <div className="meta-tag-pills">
                    {item.tech.map((t, idx) => (
                      <span key={idx} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {item.stats && (
                  <div className="modal-stats-card">
                    <div className="stat-row">
                      <span className="stat-name">Branch:</span>
                      <code className="stat-val">{item.stats.branch}</code>
                    </div>
                    <div className="stat-row">
                      <span className="stat-name">Impact:</span>
                      <span className="stat-val">{item.stats.impact}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Weapon Metaphor Alignment */}
              {item.weaponTieIn && (
                <div className="modal-weapon-tiein">
                  <span className="tiein-icon">⛩️</span>
                  <div>
                    <span className="tiein-label">Palace Armory Alignment:</span>
                    <p className="tiein-text">{item.weaponTieIn}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Finial */}
        <div className="modal-bottom-bar">
          <span>Click anywhere outside or press ESC to roll up scroll</span>
        </div>
      </div>
    </div>
  )
}
