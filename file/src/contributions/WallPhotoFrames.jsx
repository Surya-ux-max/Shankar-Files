import { PHOTO_FRAMES_DATA } from './contributionsData'

export default function WallPhotoFrames({ onSelectFrame, hoveredFrame, setHoveredFrame }) {
  const overviewFrame = PHOTO_FRAMES_DATA.find((f) => f.id === 'overview-frame')
  const nvidiaFrame = PHOTO_FRAMES_DATA.find((f) => f.id === 'nvidia-frame')
  const uberFrame = PHOTO_FRAMES_DATA.find((f) => f.id === 'uber-frame')

  return (
    <div className="wall-photo-frames-container" aria-label="Gallery Wall Photo Frames">
      {/* ================= FRAME 1: MAIN ROLE & OVERVIEW ================= */}
      <div
        className={`palace-photo-frame frame-overview ${
          hoveredFrame === 'overview' ? 'is-frame-hovered' : ''
        }`}
        onMouseEnter={() => setHoveredFrame('overview')}
        onMouseLeave={() => setHoveredFrame(null)}
        onClick={() => onSelectFrame && onSelectFrame(overviewFrame)}
        role="button"
        tabIndex={0}
        aria-label="Inspect Open Source Contributor Overview"
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
              {/* Header */}
              <div className="frame-clean-header">
                <span className="frame-kicker">MILESTONE RECORD</span>
                <h3 className="frame-heading">Open Source Contributor</h3>
                <div className="frame-meta-line">
                  <span className="meta-time">2026 – Present</span>
                  <span className="meta-divider">•</span>
                  <span className="meta-status">Active Upstream</span>
                </div>
              </div>

              {/* Bold Stat Highlight */}
              <div className="frame-key-metric">
                <span className="key-number">4</span>
                <span className="key-label">Merged Upstream Contributions</span>
              </div>

              {/* Clear Summary List */}
              <div className="frame-simple-summary">
                <div className="summary-line">
                  <span className="summary-dot dot-nvidia" />
                  <span className="summary-text"><strong>NVIDIA:</strong> 3 contributions</span>
                </div>
                <div className="summary-line">
                  <span className="summary-dot dot-uber" />
                  <span className="summary-text"><strong>Uber:</strong> 1 contribution</span>
                </div>
              </div>

              {/* Clean Footer with Vermillion Hanko Seal */}
              <div className="frame-clean-footer">
                <span className="footer-action-text">Click to inspect spec ↗</span>
                <div className="footer-hanko-seal" title="Officially Merged">
                  <span className="seal-char">承認</span>
                </div>
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
        aria-label="Inspect NVIDIA Contributions"
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
              {/* Header */}
              <div className="frame-clean-header">
                <div className="company-title-row">
                  <h3 className="company-main-name name-nvidia">NVIDIA</h3>
                  <span className="company-badge-pill">3 contributions</span>
                </div>
                <span className="frame-sub-kicker">Upstream Core Contributions</span>
              </div>

              {/* Clear, Highly Legible List of the 3 contributions */}
              <div className="frame-bullet-list">
                <div className="frame-bullet-item">
                  <span className="bullet-num">1</span>
                  <div className="bullet-content">
                    <strong className="bullet-title">Kubernetes admission policies</strong>
                    <span className="bullet-desc">CEL validation & quota isolation for GPU clusters</span>
                  </div>
                </div>

                <div className="frame-bullet-item">
                  <span className="bullet-num">2</span>
                  <div className="bullet-content">
                    <strong className="bullet-title">Ambient NRI testing</strong>
                    <span className="bullet-desc">Zero-downtime container runtime plugin lifecycle tests</span>
                  </div>
                </div>

                <div className="frame-bullet-item">
                  <span className="bullet-num">3</span>
                  <div className="bullet-content">
                    <strong className="bullet-title">NullAway nullness analysis</strong>
                    <span className="bullet-desc">Compile-time AST static safety & dataflow checks</span>
                  </div>
                </div>
              </div>

              {/* Clean Footer with Vermillion Hanko Seal */}
              <div className="frame-clean-footer">
                <span className="footer-action-text">Click for deliverables ↗</span>
                <div className="footer-hanko-seal" title="NVIDIA Upstream Verified">
                  <span className="seal-char">皆伝</span>
                </div>
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
        aria-label="Inspect Uber Contribution"
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
              {/* Header */}
              <div className="frame-clean-header">
                <div className="company-title-row">
                  <h3 className="company-main-name name-uber">Uber</h3>
                  <span className="company-badge-pill">1 contribution</span>
                </div>
                <span className="frame-sub-kicker">Upstream Core Contributions</span>
              </div>

              {/* Clear, Highly Legible List for Uber */}
              <div className="frame-bullet-list">
                <div className="frame-bullet-item">
                  <span className="bullet-num">1</span>
                  <div className="bullet-content">
                    <strong className="bullet-title">Upstream Open Source Contribution</strong>
                    <span className="bullet-desc">
                      Resilience enhancements and developer platform tooling across Uber open-source repositories
                    </span>
                  </div>
                </div>
              </div>

              {/* Platform Highlights */}
              <div className="frame-extra-pill-row">
                <span className="highlight-tag">Go / Java Tooling</span>
                <span className="highlight-tag">Maintainer Approved</span>
              </div>

              {/* Clean Footer with Vermillion Hanko Seal */}
              <div className="frame-clean-footer">
                <span className="footer-action-text">Click for deliverables ↗</span>
                <div className="footer-hanko-seal" title="Uber Upstream Verified">
                  <span className="seal-char">免許</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
