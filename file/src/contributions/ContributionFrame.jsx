import { useState } from 'react'

export default function ContributionFrame({ contribution, onSelect, index }) {
  const [isHovered, setIsHovered] = useState(false)

  const isNvidia = contribution.company.toLowerCase().includes('nvidia')
  const companyColor = isNvidia ? '#76b900' : '#000000'
  const accentBorder = isNvidia ? 'rgba(118, 185, 0, 0.4)' : 'rgba(255, 255, 255, 0.25)'

  return (
    <div
      className={`contribution-frame-wrapper frame-${contribution.id} ${
        isHovered ? 'frame-hovered' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(contribution)}
      role="button"
      tabIndex={0}
      aria-label={`Inspect ${contribution.company} Contribution: ${contribution.title}`}
    >
      {/* Wall Hanging Peg & Braided Silk Cord */}
      <div className="frame-hanging-assembly">
        <div className="hanging-peg" />
        <div className="braided-cord cord-left" />
        <div className="braided-cord cord-right" />
        <div className="agemaki-knot">
          <span className="knot-center">✦</span>
          <div className="tassel tassel-left" />
          <div className="tassel tassel-right" />
        </div>
      </div>

      {/* Ornate Photo Frame Body */}
      <div className="photo-frame-body" style={{ '--company-theme': companyColor }}>
        {/* Lacquered Wood Bezel Outer */}
        <div className="frame-bezel-outer">
          {/* Corner Kanakumono (Gilded Brass Corner Mounts) */}
          <span className="corner-mount mount-tl" />
          <span className="corner-mount mount-tr" />
          <span className="corner-mount mount-bl" />
          <span className="corner-mount mount-br" />

          {/* Gilded Inner Bevel */}
          <div className="frame-bezel-inner">
            {/* Parchment Canvas Surface */}
            <div className="frame-canvas">
              {/* Top Frame Header with Company Badge & Status */}
              <div className="canvas-header">
                <div className="frame-org-badge">
                  <span className="org-icon">{contribution.icon}</span>
                  <span className="org-name">{contribution.company}</span>
                </div>

                <div className="merged-pill">
                  <span className="merged-dot" />
                  <span>UPSTREAM</span>
                </div>
              </div>

              {/* Hanko / Inkan Official Vermillion Red Stamp */}
              <div className="hanko-seal" title="Officially Merged Upstream">
                <div className="hanko-outer-ring">
                  <span className="hanko-kanji">承認</span>
                  <span className="hanko-en">MERGED</span>
                </div>
              </div>

              {/* Contribution Title & Category */}
              <div className="canvas-content">
                <span className="item-category">{contribution.category}</span>
                <h4 className="item-title">{contribution.title}</h4>
                <p className="item-summary">{contribution.summary}</p>
              </div>

              {/* Tech Tags / Weapon Alignment */}
              <div className="canvas-footer">
                <div className="frame-tags">
                  {contribution.tech.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="frame-tag-pill">
                      {t}
                    </span>
                  ))}
                  {contribution.tech.length > 3 && (
                    <span className="frame-tag-more">+{contribution.tech.length - 3}</span>
                  )}
                </div>

                <div className="frame-inspect-action">
                  <span>Examine Scroll ↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
