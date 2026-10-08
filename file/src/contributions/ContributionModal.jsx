import { useEffect } from 'react'

export default function ContributionModal({ frame, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!frame) return null

  const isOverview = frame.type === 'headline'

  return (
    <div
      className="contribution-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-frame-title"
    >
      <div
        className="contribution-modal-sheet"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Corner Fasteners */}
        <div className="sheet-screw screw-tl" aria-hidden="true">+</div>
        <div className="sheet-screw screw-tr" aria-hidden="true">+</div>
        <div className="sheet-screw screw-bl" aria-hidden="true">+</div>
        <div className="sheet-screw screw-br" aria-hidden="true">+</div>

        {/* Blueprint Sheet Header */}
        <header className="sheet-header">
          <div className="sheet-meta-tag">
            <span className="cad-spec">SPEC // OSS-CONTRIB-{frame.id.toUpperCase()}</span>
            <span className="cad-status">{frame.status}</span>
          </div>

          <button
            type="button"
            className="sheet-close-btn"
            onClick={onClose}
            aria-label="Close Specification"
          >
            ✕
          </button>
        </header>

        {/* Modal Main Content */}
        <div className="sheet-content-body">
          {/* Header Title Section */}
          <div className="modal-title-section">
            <div className="modal-title-top">
              <h3 id="modal-frame-title" className="modal-main-heading">
                {frame.title}
              </h3>
              <span className="modal-period-chip">{frame.period}</span>
            </div>

            {isOverview ? (
              <p className="modal-lead-summary">{frame.summary}</p>
            ) : (
              <p className="modal-lead-summary">
                Upstream open-source engineering deliverables for <strong>{frame.company}</strong> repositories.
              </p>
            )}
          </div>

          {/* If Overview Frame */}
          {isOverview && (
            <div className="modal-overview-grid">
              <div className="modal-stat-panel">
                <span className="panel-count">4</span>
                <span className="panel-label">Total Upstream Pull Requests Merged</span>
              </div>

              <div className="modal-org-split">
                <div className="split-card split-nvidia">
                  <div className="split-card-header">
                    <strong>NVIDIA</strong>
                    <span className="split-badge">3 Contributions</span>
                  </div>
                  <ul className="split-list">
                    <li>• Kubernetes admission policies</li>
                    <li>• Ambient NRI testing</li>
                    <li>• NullAway nullness analysis</li>
                  </ul>
                </div>

                <div className="split-card split-uber">
                  <div className="split-card-header">
                    <strong>Uber</strong>
                    <span className="split-badge">1 Contribution</span>
                  </div>
                  <ul className="split-list">
                    <li>• Upstream open source platform tooling</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* If Company Frame (NVIDIA or Uber) */}
          {!isOverview && frame.items && (
            <div className="modal-items-container">
              {frame.items.map((item, idx) => (
                <div key={item.id} className="modal-detail-card">
                  <div className="detail-card-top">
                    <span className="detail-index">0{idx + 1}</span>
                    <div className="detail-title-col">
                      <h4 className="detail-title-text">{item.name}</h4>
                      <span className="detail-cat-badge">{item.category}</span>
                    </div>
                    <span className="detail-status-pill">Merged Upstream</span>
                  </div>

                  <p className="detail-body-desc">{item.detail}</p>

                  <div className="detail-tech-chips">
                    <span className="tech-label">Stack:</span>
                    {item.tech.map((t, tIdx) => (
                      <span key={tIdx} className="modal-tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sheet Footer */}
        <footer className="sheet-footer">
          <span className="footer-doc-code">VERIFIED UPSTREAM ARTIFACT // REPO: 2026-PRESENT</span>
          <button type="button" className="footer-done-btn" onClick={onClose}>
            Close Inspection
          </button>
        </footer>
      </div>
    </div>
  )
}
