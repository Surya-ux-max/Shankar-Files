import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="project-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="project-modal-sheet"
        style={{ '--modal-accent': project.accentColor }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Blueprint Corner Fasteners */}
        <div className="sheet-screw screw-tl" aria-hidden="true">+</div>
        <div className="sheet-screw screw-tr" aria-hidden="true">+</div>
        <div className="sheet-screw screw-bl" aria-hidden="true">+</div>
        <div className="sheet-screw screw-br" aria-hidden="true">+</div>

        {/* Blueprint Sheet Header */}
        <header className="sheet-header">
          <div className="sheet-meta-tag">
            <span className="cad-spec">SPEC // PRJ-SYS-{project.id.toUpperCase()}</span>
            <span className="cad-status">{project.status}</span>
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
          {/* Title & Summit Meta */}
          <div className="modal-title-section">
            <div className="modal-title-top">
              <span className="modal-num-badge">PROJECT {project.num}</span>
              <span className="modal-summit-tag">🏔️ {project.elevation}</span>
            </div>

            <h3 id="modal-project-title" className="modal-main-heading">
              {project.title}
            </h3>

            <p className="modal-tagline">{project.tagline}</p>
          </div>

          {/* Lead Summary Box */}
          <div className="modal-summary-box">
            <p className="modal-summary-text">{project.summary}</p>
          </div>

          {/* Engineering Deliverables */}
          <div className="modal-section-block">
            <h4 className="modal-section-title">Core Engineering Deliverables & Architecture</h4>
            <div className="modal-deliverables-list">
              {project.details.map((detail, idx) => (
                <div key={idx} className="modal-deliverable-item">
                  <span className="deliverable-bullet">▸</span>
                  <p className="deliverable-text">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Grid */}
          {project.metrics && (
            <div className="modal-section-block">
              <h4 className="modal-section-title">System Benchmarks & Key Metrics</h4>
              <div className="modal-metrics-grid">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="modal-metric-card">
                    <span className="metric-label">{metric.label}</span>
                    <strong className="metric-value">{metric.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="modal-section-block">
            <h4 className="modal-section-title">Technologies & Frameworks</h4>
            <div className="modal-tech-grid">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="modal-tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sheet Footer */}
        <footer className="sheet-footer">
          <span className="footer-doc-code">
            ARCHITECTURAL SPECIFICATION // SUMMIT {project.num} // VERIFIED
          </span>
          <button type="button" className="footer-done-btn" onClick={onClose}>
            Close Specification
          </button>
        </footer>
      </div>
    </div>
  )
}
