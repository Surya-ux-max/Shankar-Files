import CompanyLogo from './CompanyLogo'

export default function InternshipCalloutCard({
  internship,
  isActive,
  onSelect,
  isFloating = false
}) {
  const {
    id,
    company,
    role,
    period,
    location,
    bullets,
    techStack,
    logoType,
    badgeText
  } = internship

  return (
    <article
      className={`blueprint-callout-card ${id}-card ${isActive ? 'is-active' : ''} ${
        isFloating ? 'is-floating' : 'is-static'
      }`}
      onClick={() => onSelect(internship)}
      tabIndex={0}
      role="button"
      aria-label={`View internship details for ${company}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(internship)
        }
      }}
    >
      {/* 4 Architectural Drafting Corner Screws (+) */}
      <div className="card-screw screw-tl" aria-hidden="true">+</div>
      <div className="card-screw screw-tr" aria-hidden="true">+</div>
      <div className="card-screw screw-bl" aria-hidden="true">+</div>
      <div className="card-screw screw-br" aria-hidden="true">+</div>

      {/* Card Header */}
      <header className="card-header">
        <div className="brand-lockup">
          <CompanyLogo type={logoType} size={26} />
          <div className="brand-titles">
            <h3 className="company-heading">{company}</h3>
            <span className="role-subheading">{role}</span>
          </div>
        </div>
        <span className="cad-badge" aria-label={`Badge: ${badgeText}`}>
          {badgeText}
        </span>
      </header>

      {/* Meta Specs Grid */}
      <div className="card-meta-grid">
        <div className="meta-item">
          <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="meta-text">{period}</span>
        </div>

        <div className="meta-item">
          <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="meta-text">{location}</span>
        </div>
      </div>

      {/* Key Resume Contributions */}
      <div className="card-contributions">
        <div className="contributions-header">
          <svg className="meta-icon doc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span className="contributions-title">Key Work & Impact:</span>
        </div>
        <ul className="bullet-list">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="bullet-item">
              <span className="bullet-dash" aria-hidden="true">—</span>
              <span className="bullet-text">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Chips */}
      <footer className="card-footer">
        <div className="tech-chip-group">
          {techStack.slice(0, 4).map((tech, i) => (
            <span key={i} className="tech-chip">
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="tech-chip more-chip">+{techStack.length - 4} more</span>
          )}
        </div>

        <div className="view-details-prompt">
          <span>Click for Full Architecture</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </footer>
    </article>
  )
}
