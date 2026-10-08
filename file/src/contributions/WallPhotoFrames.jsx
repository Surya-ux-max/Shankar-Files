import { PHOTO_FRAMES_DATA } from './contributionsData'

export default function WallPhotoFrames({ onSelectFrame, hoveredFrame, setHoveredFrame }) {
  const overviewFrame = PHOTO_FRAMES_DATA.find((f) => f.id === 'overview-frame')
  const nvidiaFrame = PHOTO_FRAMES_DATA.find((f) => f.id === 'nvidia-frame')
  const uberFrame = PHOTO_FRAMES_DATA.find((f) => f.id === 'uber-frame')

  return (
    <div className="wall-photo-frames-container" aria-label="Gallery Hanging Photo Frames">
      {/* ================= FRAME 1: OVERVIEW & MASTER ROLE ================= */}
      <div
        className={`palace-photo-frame frame-overview ${
          hoveredFrame === 'overview' ? 'is-frame-hovered' : ''
        }`}
        onMouseEnter={() => setHoveredFrame('overview')}
        onMouseLeave={() => setHoveredFrame(null)}
        onClick={() => onSelectFrame && onSelectFrame(overviewFrame)}
        role="button"
        tabIndex={0}
        aria-label="Inspect Open Source Contributor Overview Frame"
      >
        {/* Gallery Hanging Hardware: Brass Peg & Braided Silk Cord */}
        <div className="hanging-assembly">
          <div className="gallery-brass-peg" />
          <div className="braided-cord cord-l" />
          <div className="braided-cord cord-r" />
          <div className="cord-tassel" />
        </div>

        {/* Gallery Float Frame */}
        <div className="gallery-float-frame">
          <div className="frame-gold-bezel">
            <div className="frame-parchment-canvas">
              {/* Hanko Official Red Vermillion Seal */}
              <div className="frame-hanko-seal" title="Upstream Verified">
                <span className="hanko-seal-kanji">承認</span>
                <span className="hanko-seal-sub">MERGED</span>
              </div>

              {/* Top Header Tag */}
              <div className="frame-top-tag">
                <span className="tag-sparkle">✦</span>
                <span>OPEN SOURCE ROLE</span>
              </div>

              <h3 className="frame-main-title">{overviewFrame.title}</h3>

              <div className="frame-timeline-pill">
                <span className="timeline-pulse-dot" />
                <span>{overviewFrame.period}</span>
              </div>

              {/* Big Merged Number Callout */}
              <div className="frame-merged-stat-box">
                <span className="merged-num">4</span>
                <div className="merged-text-col">
                  <span className="merged-label-top">MERGED UPSTREAM</span>
                  <span className="merged-label-sub">CONTRIBUTIONS</span>
                </div>
              </div>

              {/* Company Breakdown Summary Rows */}
              <div className="frame-company-summary-list">
                <div className="company-summary-row nvidia-row">
                  <span className="summary-org">NVIDIA</span>
                  <span className="summary-val">3 contributions</span>
                </div>
                <div className="company-summary-row uber-row">
                  <span className="summary-org">Uber</span>
                  <span className="summary-val">1 contribution</span>
                </div>
              </div>

              <div className="frame-footer-hint">
                <span>View Full Spec ↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FRAME 2: NVIDIA CONTRIBUTIONS ================= */}
      <div
        className={`palace-photo-frame frame-nvidia ${
          hoveredFrame === 'nvidia' ? 'is-frame-hovered' : ''
        }`}
        onMouseEnter={() => setHoveredFrame('nvidia')}
        onMouseLeave={() => setHoveredFrame(null)}
        onClick={() => onSelectFrame && onSelectFrame(nvidiaFrame)}
        role="button"
        tabIndex={0}
        aria-label="Inspect NVIDIA 3 Contributions Frame"
      >
        <div className="hanging-assembly">
          <div className="gallery-brass-peg" />
          <div className="braided-cord cord-l" />
          <div className="braided-cord cord-r" />
          <div className="cord-tassel" />
        </div>

        <div className="gallery-float-frame">
          <div className="frame-gold-bezel">
            <div className="frame-parchment-canvas">
              {/* Hanko Seal */}
              <div className="frame-hanko-seal">
                <span className="hanko-seal-kanji">皆伝</span>
                <span className="hanko-seal-sub">NVIDIA</span>
              </div>

              <div className="frame-company-header">
                <div className="org-mark-badge nvidia-mark">
                  <span className="org-mark-text">NVIDIA</span>
                </div>
                <span className="org-count-chip">{nvidiaFrame.countText}</span>
              </div>

              <div className="frame-items-list">
                {nvidiaFrame.items.map((item, idx) => (
                  <div key={item.id} className="frame-contribution-row">
                    <div className="item-row-left">
                      <span className="item-num">0{idx + 1}.</span>
                      <div className="item-text-stack">
                        <strong className="item-name">{item.name}</strong>
                        <span className="item-category-sub">{item.category}</span>
                      </div>
                    </div>
                    <span className="item-merged-tag">Merged</span>
                  </div>
                ))}
              </div>

              <div className="frame-footer-hint">
                <span>View Technical Deliverables ↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FRAME 3: UBER CONTRIBUTION ================= */}
      <div
        className={`palace-photo-frame frame-uber ${
          hoveredFrame === 'uber' ? 'is-frame-hovered' : ''
        }`}
        onMouseEnter={() => setHoveredFrame('uber')}
        onMouseLeave={() => setHoveredFrame(null)}
        onClick={() => onSelectFrame && onSelectFrame(uberFrame)}
        role="button"
        tabIndex={0}
        aria-label="Inspect Uber Contribution Frame"
      >
        <div className="hanging-assembly">
          <div className="gallery-brass-peg" />
          <div className="braided-cord cord-l" />
          <div className="braided-cord cord-r" />
          <div className="cord-tassel" />
        </div>

        <div className="gallery-float-frame">
          <div className="frame-gold-bezel">
            <div className="frame-parchment-canvas">
              {/* Hanko Seal */}
              <div className="frame-hanko-seal">
                <span className="hanko-seal-kanji">免許</span>
                <span className="hanko-seal-sub">UBER</span>
              </div>

              <div className="frame-company-header">
                <div className="org-mark-badge uber-mark">
                  <span className="org-mark-text">Uber</span>
                </div>
                <span className="org-count-chip">{uberFrame.countText}</span>
              </div>

              <div className="frame-items-list">
                {uberFrame.items.map((item, idx) => (
                  <div key={item.id} className="frame-contribution-row">
                    <div className="item-row-left">
                      <span className="item-num">0{idx + 1}.</span>
                      <div className="item-text-stack">
                        <strong className="item-name">{item.name}</strong>
                        <span className="item-category-sub">{item.category}</span>
                      </div>
                    </div>
                    <span className="item-merged-tag">Merged</span>
                  </div>
                ))}
              </div>

              <div className="frame-footer-hint">
                <span>View Technical Deliverables ↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
