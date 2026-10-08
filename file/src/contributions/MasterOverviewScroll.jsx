import { CONTRIBUTION_OVERVIEW } from './contributionsData'

export default function MasterOverviewScroll({ onSelectCategory }) {
  return (
    <div className="master-scroll-wrapper" aria-label="Contribution Master Certificate">
      {/* Hanging Top Rod & Cord */}
      <div className="scroll-hanging-mount">
        <div className="scroll-wall-peg" />
        <div className="scroll-cord" />
      </div>

      <div className="scroll-wooden-rod rod-top">
        <span className="rod-finial finial-left" />
        <span className="rod-finial finial-right" />
      </div>

      {/* Main Silk & Parchment Body */}
      <div className="scroll-body-canvas">
        <div className="scroll-silk-brocade-border">
          <div className="scroll-parchment-inner">
            {/* Red Mon Seal */}
            <div className="scroll-crest-badge">
              <span className="crest-kanji">貢献</span>
            </div>

            <div className="scroll-header-group">
              <span className="scroll-subtitle-tag">{CONTRIBUTION_OVERVIEW.badge}</span>
              <h3 className="scroll-title">{CONTRIBUTION_OVERVIEW.role}</h3>
              <div className="scroll-period-pill">
                <span className="period-dot" />
                <span>{CONTRIBUTION_OVERVIEW.timeline}</span>
              </div>
            </div>

            <p className="scroll-motto">{CONTRIBUTION_OVERVIEW.motto}</p>

            {/* Big Stat Callout */}
            <div className="scroll-metric-box">
              <div className="metric-number-wrap">
                <span className="metric-number">{CONTRIBUTION_OVERVIEW.totalMerged}</span>
                <span className="metric-plus">+</span>
              </div>
              <div className="metric-text-wrap">
                <span className="metric-heading">MERGED UPSTREAM</span>
                <span className="metric-sub">CONTRIBUTIONS</span>
              </div>
            </div>

            {/* Organizations Breakdown Chips */}
            <div className="scroll-org-breakdown">
              <div className="org-stat-card org-nvidia">
                <div className="org-stat-top">
                  <span className="stat-org-name">NVIDIA</span>
                  <span className="stat-badge">3 Merged</span>
                </div>
                <div className="org-stat-list">
                  <span>• Kubernetes admission policies</span>
                  <span>• Ambient NRI testing</span>
                  <span>• NullAway nullness analysis</span>
                </div>
              </div>

              <div className="org-stat-card org-uber">
                <div className="org-stat-top">
                  <span className="stat-org-name">Uber</span>
                  <span className="stat-badge">1 Merged</span>
                </div>
                <div className="org-stat-list">
                  <span>• Upstream tooling & infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Weighted Wooden Rod */}
      <div className="scroll-wooden-rod rod-bottom">
        <span className="rod-finial finial-left" />
        <span className="rod-finial finial-right" />
      </div>
    </div>
  )
}
