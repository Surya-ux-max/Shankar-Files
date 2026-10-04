import { useState, useEffect } from 'react'
import CompanyLogo from './CompanyLogo'

export default function InternshipModal({ internship, onClose }) {
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!internship) return null

  const {
    id,
    company,
    role,
    period,
    location,
    mode,
    bullets,
    techStack,
    logoType,
    badgeText,
    stats,
    description
  } = internship

  return (
    <div
      className="internship-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-internship-title"
    >
      <div
        className={`internship-modal-sheet ${id}-modal-sheet`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drafting Screws */}
        <div className="sheet-screw screw-tl" aria-hidden="true">+</div>
        <div className="sheet-screw screw-tr" aria-hidden="true">+</div>
        <div className="sheet-screw screw-bl" aria-hidden="true">+</div>
        <div className="sheet-screw screw-br" aria-hidden="true">+</div>

        {/* Blueprint Sheet Header */}
        <header className="sheet-header">
          <div className="sheet-meta-tag">
            <span className="cad-spec">SPEC // EXP-SYS-{id.toUpperCase()}</span>
            <span className="cad-status">{badgeText}</span>
          </div>

          <button
            type="button"
            className="sheet-close-btn"
            onClick={onClose}
            aria-label="Close specification sheet"
          >
            ✕
          </button>
        </header>

        {/* Main Title Area */}
        <div className="sheet-title-banner">
          <div className="sheet-brand-group">
            <CompanyLogo type={logoType} size={36} />
            <div>
              <h2 id="modal-internship-title" className="sheet-company-title">
                {company}
              </h2>
              <div className="sheet-role-row">
                <span className="sheet-role">{role}</span>
                <span className="sheet-dot">•</span>
                <span className="sheet-period">{period}</span>
                <span className="sheet-dot">•</span>
                <span className="sheet-location">{location} ({mode})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="sheet-nav-tabs">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Blueprint Overview
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'engineering' ? 'active' : ''}`}
            onClick={() => setActiveTab('engineering')}
          >
            Engineering & Architecture
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'stack' ? 'active' : ''}`}
            onClick={() => setActiveTab('stack')}
          >
            Tech Stack & Specs
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="sheet-body-content">
          {activeTab === 'overview' && (
            <div className="tab-pane-overview">
              <p className="sheet-lead-description">{description}</p>

              {/* Stats Grid */}
              <div className="sheet-stats-grid">
                {stats.map((stat, i) => (
                  <div key={i} className="sheet-stat-box">
                    <span className="stat-label">{stat.label}</span>
                    <strong className="stat-value">{stat.value}</strong>
                  </div>
                ))}
              </div>

              {/* Core Resume Deliverables */}
              <div className="sheet-deliverables-section">
                <h4 className="section-subheading">VERIFIED RESUME DELIVERABLES</h4>
                <ul className="sheet-bullets-list">
                  {bullets.map((b, i) => (
                    <li key={i} className="sheet-bullet-item">
                      <span className="bullet-indexer">0{i + 1}</span>
                      <span className="bullet-content">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'engineering' && (
            <div className="tab-pane-engineering">
              {id === 'zoho' ? (
                <div className="eng-architecture-breakdown">
                  <div className="eng-card">
                    <h5>Session-Based Enterprise Asset Inventory</h5>
                    <p>
                      Engineered multi-tenant session workflows ensuring transactional integrity across simultaneous inventory checkouts, item reservations, and catalog auditing.
                    </p>
                  </div>
                  <div className="eng-card">
                    <h5>Relational Schemas & REST API Optimization</h5>
                    <p>
                      Designed 3NF normalized PostgreSQL/MySQL schemas with strategic foreign key constraints, composite B-tree indexing, and query optimization for low-latency endpoints.
                    </p>
                  </div>
                  <div className="eng-card">
                    <h5>Hybrid ML Recommendation Engine</h5>
                    <p>
                      Synthesized statistical ARIMA time-series forecasting for seasonal asset demand with LightFM matrix factorization collaborative filtering for contextual asset allocations.
                    </p>
                  </div>
                  <div className="eng-card">
                    <h5>ETL Validation Pipelines</h5>
                    <p>
                      Constructed automated schema validation, transformation routines, and error logging to ingest enterprise telemetry without data drift.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="eng-architecture-breakdown">
                  <div className="eng-card">
                    <h5>City Governance & RBAC Architecture</h5>
                    <p>
                      Implemented fine-grained Role-Based Access Control separating citizen rights, administrative verification, and municipal council approval channels.
                    </p>
                  </div>
                  <div className="eng-card">
                    <h5>Citizen Petition & Voting Workflows</h5>
                    <p>
                      Architected tamper-resistant petition lifecycles featuring digital voting verification, quota triggers, and live progression tracking.
                    </p>
                  </div>
                  <div className="eng-card">
                    <h5>JWT Security & Custom Middleware</h5>
                    <p>
                      Built cryptographically secure JSON Web Token authentication with rotating refresh tokens, rate-limiting, and sanitized input validation guards.
                    </p>
                  </div>
                  <div className="eng-card">
                    <h5>CI/CD & Milestone Delivery</h5>
                    <p>
                      Maintained rigorous GitHub CI/CD workflows, automated build checks, peer code reviews, and incremental release sprints.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="tab-pane-stack">
              <h4 className="section-subheading">TECHNOLOGIES & FRAMEWORKS EMPLOYED</h4>
              <div className="modal-tech-pills">
                {techStack.map((tech, i) => (
                  <div key={i} className="modal-pill">
                    <span className="pill-dot" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              <div className="stack-takeaway-box">
                <div className="takeaway-header">
                  <span className="takeaway-tag">KEY TAKEAWAY</span>
                  <strong>Enterprise Readiness</strong>
                </div>
                <p>
                  Practical exposure to high-standard enterprise engineering, robust data integrity,
                  security guardrails, and production-ready system architecture.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <footer className="sheet-footer">
          <div className="cad-ref-id">REF // {company} · {role}</div>
          <button type="button" className="sheet-done-btn" onClick={onClose}>
            Close Blueprint
          </button>
        </footer>
      </div>
    </div>
  )
}
