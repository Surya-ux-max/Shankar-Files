import { useState } from 'react'
import ConstellationMapSVG, { CONSTELLATIONS } from './ConstellationMapSVG'
import { LEADERSHIP_STATS } from './leadershipData'
import './Leadership.css'

// Flatten all stars from all constellations for lookup
const ALL_STARS = CONSTELLATIONS.flatMap((cat) =>
  cat.stars.map((star) => ({ ...star, catId: cat.id, catLabel: cat.label, catColor: cat.color }))
)

export default function Leadership() {
  const [hoveredStarId, setHoveredStarId] = useState(null)

  const activeStar = ALL_STARS.find((s) => s.id === hoveredStarId) ?? null
  const activeCat = activeStar
    ? CONSTELLATIONS.find((c) => c.id === activeStar.catId)
    : null

  return (
    <section className="leadership-section" id="leadership" aria-label="Leadership, Achievements & Recognition">
      <div className="leadership-bg" aria-hidden="true" />

      <div className="leadership-container">

        {/* ── Header ── */}
        <header className="leadership-header">
          <div className="leadership-tag">
            <span className="tag-dot" />
            <span>No. 08 · LEADERSHIP & RECOGNITION</span>
          </div>
          <h2 className="leadership-title">THE CONSTELLATION OF HONOURS</h2>
          <p className="leadership-subtitle">
            Each star is an achievement. Hover over any star to read its story.
            Four constellations — Competitions, Rankings, Academic, and Leadership.
          </p>
        </header>

        {/* ── Stat Bar ── */}
        <div className="leadership-stat-bar">
          {LEADERSHIP_STATS.map((stat) => (
            <div key={stat.label} className="ldp-stat-item">
              <span className="ldp-stat-value">{stat.value}</span>
              <span className="ldp-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ── Constellation Stage ── */}
        <div className="constellation-stage">

          {/* Left: SVG Map */}
          <div className="constellation-map-wrapper">
            {/* Category legend inside canvas top */}
            <div className="constellation-legend">
              {CONSTELLATIONS.map((cat) => (
                <div key={cat.id} className="legend-item" style={{ '--cat': cat.color }}>
                  <span className="legend-dot" />
                  <span className="legend-label">{cat.label}</span>
                </div>
              ))}
            </div>

            <ConstellationMapSVG
              hoveredStar={hoveredStarId}
              onHoverStar={setHoveredStarId}
            />

            {/* Hover hint */}
            <div className="constellation-hint">
              <span className="hint-pulse" />
              <span>Hover over any star to illuminate an achievement</span>
            </div>
          </div>

          {/* Right: Detail Panel */}
          <div className="constellation-detail-panel">
            {activeStar ? (
              <div
                className="detail-card is-active"
                style={{ '--cat': activeStar.catColor }}
                key={activeStar.id}
              >
                {/* Category badge */}
                <div className="detail-cat-badge">
                  <span className="detail-cat-dot" />
                  <span>{activeStar.catLabel}</span>
                </div>

                {/* Rank */}
                <span className="detail-rank">{activeStar.rank}</span>

                {/* Title */}
                <h3 className="detail-title">{activeStar.title}</h3>

                {/* Prize / tag */}
                <span className="detail-prize">{activeStar.prize}</span>

                {/* Body text */}
                <p className="detail-body">
                  {ALL_STARS.find((s) => s.id === activeStar.id)?.highlight
                    ? '★ Featured Achievement'
                    : ''}
                </p>

                {/* Star glow decoration */}
                <div
                  className="detail-star-deco"
                  style={{ background: `radial-gradient(circle, ${activeStar.catColor}33 0%, transparent 70%)` }}
                />
              </div>
            ) : (
              <div className="detail-card is-empty">
                {/* Empty state */}
                <div className="empty-cosmos">
                  {/* Animated rings */}
                  <div className="empty-ring ring-1" />
                  <div className="empty-ring ring-2" />
                  <div className="empty-ring ring-3" />
                  <span className="empty-star">✦</span>
                </div>
                <p className="empty-text">Hover a star to read its achievement</p>
                <div className="empty-legend">
                  {CONSTELLATIONS.map((cat) => (
                    <div key={cat.id} className="empty-legend-row" style={{ '--cat': cat.color }}>
                      <span className="empty-legend-dot" />
                      <span className="empty-legend-name">{cat.label}</span>
                      <span className="empty-legend-count">{cat.stars.length}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Achievement Cards list — all items ── */}
        <div className="achievement-grid">
          {CONSTELLATIONS.map((cat) => (
            <div
              key={cat.id}
              className="achievement-category"
              style={{ '--cat-color': cat.color }}
            >
              <div className="cat-header">
                <span className="cat-dot" />
                <h3 className="cat-title">{cat.label}</h3>
                <span className="cat-count">{cat.stars.length}</span>
              </div>
              <div className="cat-items">
                {cat.stars.map((star) => (
                  <div
                    key={star.id}
                    className={`ach-row ${star.highlight ? 'is-highlight' : ''} ${hoveredStarId === star.id ? 'is-active' : ''}`}
                    onMouseEnter={() => setHoveredStarId(star.id)}
                    onMouseLeave={() => setHoveredStarId(null)}
                  >
                    <span className="ach-star-icon">✦</span>
                    <div className="ach-body">
                      <span className="ach-rank">{star.rank}</span>
                      <span className="ach-title">{star.title}</span>
                    </div>
                    <span className="ach-prize">{star.prize}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
