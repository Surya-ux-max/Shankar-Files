import LeadershipIllustration from './LeadershipIllustration'
import PeelAchievementDeck from './PeelAchievementDeck'
import { LEADERSHIP_CATEGORIES, LEADERSHIP_STATS } from './leadershipData'
import './Leadership.css'

export default function Leadership() {
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

        {/* ── Illustration Canvas (Untouched Vector Visual) ── */}
        <div className="ldp-canvas-wrapper">
          <LeadershipIllustration />
          <p className="ldp-canvas-caption">
            Honours & Recognition Sketchbook — Team & Milestone Review
          </p>
        </div>

        {/* ── Space-Saving Tactile Peel Card Deck ── */}
        <PeelAchievementDeck categories={LEADERSHIP_CATEGORIES} />

      </div>
    </section>
  )
}
