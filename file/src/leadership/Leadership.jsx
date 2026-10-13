import { useState } from 'react'
import LeadershipIllustration from './LeadershipIllustration'
import { LEADERSHIP_CATEGORIES, LEADERSHIP_STATS } from './leadershipData'
import './Leadership.css'

export default function Leadership() {
  const [activeId, setActiveId] = useState(null)

  return (
    <section className="ldp-section" id="leadership" aria-label="Leadership & Recognition">

      {/* Paper texture bg */}
      <div className="ldp-paper-bg" aria-hidden="true" />

      {/* Watercolour wash blobs */}
      <div className="ldp-wc-layer" aria-hidden="true">
        <div className="ldp-blob ldp-blob-yellow" />
        <div className="ldp-blob ldp-blob-green" />
        <div className="ldp-blob ldp-blob-sky" />
      </div>

      {/* Storyboard corner marks */}
      <div className="ldp-frame" aria-hidden="true">
        <span className="lf-corner lf-tl" /><span className="lf-corner lf-tr" />
        <span className="lf-corner lf-bl" /><span className="lf-corner lf-br" />
      </div>

      <div className="ldp-container">

        {/* ── Section Header ── */}
        <header className="ldp-header">
          <div className="ldp-tag">
            <span className="ldp-tag-dot" />
            <span>No. 08 · LEADERSHIP & RECOGNITION</span>
          </div>
          <h2 className="ldp-title">HONOURS & ACHIEVEMENTS</h2>
          <p className="ldp-subtitle">
            Hackathon podiums, national rankings, published research and campus leadership —
            milestones earned through code, curiosity and community.
          </p>
        </header>

        {/* ── Stat Bar ── */}
        <div className="ldp-stat-bar">
          {LEADERSHIP_STATS.map((s) => (
            <div key={s.label} className="ldp-stat">
              <span className="ldp-stat-val">{s.value}</span>
              <span className="ldp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Illustration Canvas ── */}
        <div className="ldp-canvas-wrapper">
          <LeadershipIllustration />
          <p className="ldp-canvas-caption">
            Hover over achievements below ↓
          </p>
        </div>

        {/* ── Achievement Grid ── */}
        <div className="ldp-grid">
          {LEADERSHIP_CATEGORIES.map((cat) => (
            <div key={cat.id} className="ldp-cat-card" style={{ '--cat': cat.color }}>

              {/* Category header */}
              <div className="ldp-cat-head">
                <span className="ldp-cat-icon">{cat.icon}</span>
                <h3 className="ldp-cat-title">{cat.label}</h3>
                <span className="ldp-cat-count">{cat.achievements.length}</span>
              </div>

              {/* Items */}
              <div className="ldp-cat-items">
                {cat.achievements.map((item) => (
                  <div
                    key={item.id}
                    className={`ldp-item ${item.highlight ? 'ldp-item--star' : ''} ${activeId === item.id ? 'ldp-item--active' : ''}`}
                    onMouseEnter={() => setActiveId(item.id)}
                    onMouseLeave={() => setActiveId(null)}
                  >
                    <div className="ldp-item-left">
                      <span className="ldp-item-rank">{item.rank}</span>
                      <p className="ldp-item-title">{item.title}</p>
                      {activeId === item.id && (
                        <p className="ldp-item-detail">{item.detail}</p>
                      )}
                    </div>
                    <span className="ldp-item-prize">{item.prize}</span>
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
