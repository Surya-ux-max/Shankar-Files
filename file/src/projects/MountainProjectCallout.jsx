export default function MountainProjectCallout({ project, onSelect, onClose }) {
  if (!project) return null

  return (
    <div
      className={`mpc-card card-${project.id}`}
      style={{ '--accent': project.accentColor }}
      role="region"
      aria-label={`Project Preview: ${project.title}`}
    >
      {/* Accent top bar */}
      <div className="mpc-accent-bar" />

      {/* Header row: num + status + elevation */}
      <div className="mpc-top-row">
        <div className="mpc-left-meta">
          <span className="mpc-num">{project.num}</span>
          <span className="mpc-status">{project.status}</span>
        </div>
        <span className="mpc-elevation">🏔 {project.elevation}</span>
      </div>

      {/* Title + Category */}
      <div className="mpc-title-block">
        <h3 className="mpc-title">{project.title}</h3>
        <p className="mpc-category">{project.category}</p>
      </div>

      {/* Summary */}
      <p className="mpc-summary">{project.summary}</p>

      {/* Divider */}
      <div className="mpc-divider" />

      {/* Tech Stack */}
      <div className="mpc-tech-row">
        {project.techStack.slice(0, 5).map((tech, idx) => (
          <span key={idx} className="mpc-tech-chip">{tech}</span>
        ))}
        {project.techStack.length > 5 && (
          <span className="mpc-tech-overflow">+{project.techStack.length - 5}</span>
        )}
      </div>

      {/* Key Metric */}
      {project.metrics?.[0] && (
        <div className="mpc-metric-row">
          <span className="mpc-metric-label">{project.metrics[0].label}</span>
          <span className="mpc-metric-value">{project.metrics[0].value}</span>
        </div>
      )}

      {/* CTA */}
      <button
        className="mpc-cta-btn"
        onClick={() => onSelect(project)}
        type="button"
      >
        <span>View Full Specification</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
