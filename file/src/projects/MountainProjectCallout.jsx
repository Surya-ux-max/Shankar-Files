export default function MountainProjectCallout({ project, onSelect, onClose }) {
  if (!project) return null

  return (
    <div
      className={`mountain-project-callout-card card-${project.id}`}
      style={{ '--project-accent': project.accentColor }}
      role="region"
      aria-label={`Project Preview: ${project.title}`}
    >
      {/* Card Header */}
      <div className="mpc-header">
        <div className="mpc-badge-group">
          <span className="mpc-num-badge">{project.num}</span>
          <span className="mpc-status-chip">{project.status}</span>
        </div>
        <span className="mpc-summit-elevation">🏔️ {project.elevation}</span>
      </div>

      {/* Title & Category */}
      <div className="mpc-title-row">
        <h3 className="mpc-title">{project.title}</h3>
        <span className="mpc-category">{project.category}</span>
      </div>

      {/* Summary */}
      <p className="mpc-summary">{project.summary}</p>

      {/* Tech Stack Chips */}
      <div className="mpc-tech-pills">
        {project.techStack.slice(0, 5).map((tech, idx) => (
          <span key={idx} className="mpc-tech-badge">
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="mpc-tech-more">+{project.techStack.length - 5} more</span>
        )}
      </div>

      {/* Key Metric Highlight */}
      {project.metrics && project.metrics[0] && (
        <div className="mpc-metric-bar">
          <span className="mpc-metric-label">{project.metrics[0].label}:</span>
          <strong className="mpc-metric-val">{project.metrics[0].value}</strong>
        </div>
      )}

      {/* Call to Action */}
      <div className="mpc-action-row" onClick={() => onSelect(project)}>
        <span className="mpc-action-btn">
          Explore Blueprint Specification ↗
        </span>
      </div>
    </div>
  )
}
