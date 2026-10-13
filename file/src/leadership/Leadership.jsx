import { LEADERSHIP_CATEGORIES, LEADERSHIP_STATS } from './leadershipData'
import HonourHallSVG from './HonourHallSVG'
import './Leadership.css'

export default function Leadership() {
  return (
    <section className="leadership-section" id="leadership" aria-label="Leadership, Achievements & Recognition">

      {/* Background */}
      <div className="leadership-bg" aria-hidden="true" />
      <div className="leadership-ambient" aria-hidden="true">
        <div className="ldp-glow ldp-glow-gold" />
        <div className="ldp-glow ldp-glow-purple" />
      </div>

      <div className="leadership-container">

        {/* ── Section Header ── */}
        <header className="leadership-header">
          <div className="leadership-tag">
            <span className="tag-dot" />
            <span>No. 08 · LEADERSHIP & RECOGNITION</span>
          </div>
          <h2 className="leadership-title">THE HALL OF HONOURS</h2>
          <p className="leadership-subtitle">
            Hackathon podiums, national rankings, published research, and campus leadership —
            each achievement etched into the honour wall of the ceremony hall.
          </p>
        </header>

        {/* ── Stat Bar ── */}
        <div className="leadership-stat-bar" aria-label="Key Statistics">
          {LEADERSHIP_STATS.map((stat) => (
            <div key={stat.label} className="ldp-stat-item">
              <span className="ldp-stat-value">{stat.value}</span>
              <span className="ldp-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ── Honour Hall Vector Illustration ── */}
        <div className="honour-hall-wrapper" aria-hidden="true">
          <HonourHallSVG />
          {/* Banner labels beneath the SVG canvas */}
          <div className="honour-hall-labels">
            {LEADERSHIP_CATEGORIES.map((cat) => (
              <div key={cat.id} className="hall-label" style={{ '--cat-color': cat.color }}>
                <span className="hall-label-icon">{cat.icon}</span>
                <span className="hall-label-text">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Achievement Cards Grid ── */}
        <div className="achievement-grid">
          {LEADERSHIP_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="achievement-category"
              style={{ '--cat-color': cat.color, '--cat-glow': cat.glow }}
            >
              {/* Category Header */}
              <div className="cat-header">
                <span className="cat-kanji">{cat.kanji}</span>
                <div className="cat-title-group">
                  <span className="cat-icon">{cat.icon}</span>
                  <h3 className="cat-title">{cat.label}</h3>
                </div>
                <span className="cat-count">{cat.achievements.length}</span>
              </div>

              {/* Achievement Items */}
              <div className="cat-items">
                {cat.achievements.map((item) => (
                  <div
                    key={item.id}
                    className={`achievement-item ${item.highlight ? 'is-highlight' : ''}`}
                  >
                    <div className="ach-left">
                      <span className="ach-rank">{item.rank}</span>
                      <div className="ach-body">
                        <p className="ach-title">{item.title}</p>
                        <p className="ach-detail">{item.detail}</p>
                      </div>
                    </div>
                    <span className="ach-prize">{item.prize}</span>
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
