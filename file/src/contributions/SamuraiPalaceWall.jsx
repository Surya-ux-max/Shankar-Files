import { CONTRIBUTIONS } from './contributionsData'
import SamuraiArmor from './SamuraiArmor'
import WarfareTools from './WarfareTools'
import ContributionFrame from './ContributionFrame'
import MasterOverviewScroll from './MasterOverviewScroll'

export default function SamuraiPalaceWall({ onSelectItem }) {
  // 4 contributions from the user prompt:
  // nvidia-k8s, nvidia-ambient-nri, nvidia-nullaway, uber-upstream
  const nvidiaContributions = CONTRIBUTIONS.filter((c) => c.company === 'NVIDIA')
  const uberContributions = CONTRIBUTIONS.filter((c) => c.company === 'Uber')

  return (
    <div className="palace-wall-architecture" aria-label="Samurai Palace Armory Wall">
      {/* ================= 1. UPPER PALACE RAFTERS & CROSSBEAMS (NAGESHI) ================= */}
      <div className="palace-timber-beam upper-beam">
        <div className="beam-texture" />
        <div className="beam-bracket bracket-1" />
        <div className="beam-bracket bracket-2" />
        <div className="beam-bracket bracket-3" />
        <div className="beam-iron-studs">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="iron-rivet" />
          ))}
        </div>
      </div>

      {/* ================= 2. AMBIENT LANTERNS & TORCHLIGHT GLOW ================= */}
      <div className="palace-lantern lantern-left" aria-hidden="true">
        <div className="lantern-cord" />
        <div className="lantern-cage">
          <div className="lantern-frame" />
          <div className="lantern-glow" />
          <div className="lantern-flame" />
        </div>
        <span className="lantern-tassel" />
      </div>

      <div className="palace-lantern lantern-right" aria-hidden="true">
        <div className="lantern-cord" />
        <div className="lantern-cage">
          <div className="lantern-frame" />
          <div className="lantern-glow" />
          <div className="lantern-flame" />
        </div>
        <span className="lantern-tassel" />
      </div>

      {/* ================= 3. UPPER WARFARE WEAPONS (NAGINATA & SPEARS) ================= */}
      <div className="palace-wall-weapons-row">
        <WarfareTools onInspectTool={onSelectItem} />
      </div>

      {/* ================= 4. MAIN WALL EXHIBIT GRID ================= */}
      <div className="palace-wall-exhibit-stage">
        {/* LEFT COLUMN: NVIDIA PHOTO FRAMES (Kubernetes & Ambient NRI) */}
        <div className="wall-column wall-col-left">
          <div className="wall-section-label">
            <span className="label-kanji">雲上</span>
            <span className="label-text">NVIDIA · INFRASTRUCTURE & RUNTIME</span>
          </div>

          <div className="frames-vertical-stack">
            <ContributionFrame
              contribution={nvidiaContributions[0]}
              onSelect={onSelectItem}
              index={0}
            />
            <ContributionFrame
              contribution={nvidiaContributions[1]}
              onSelect={onSelectItem}
              index={1}
            />
          </div>
        </div>

        {/* CENTER COLUMN: MASTER OVERVIEW SCROLL & WARRIOR SAMURAI ARMOR */}
        <div className="wall-column wall-col-center">
          <div className="wall-center-pieces">
            {/* The Master Hanging Scroll with 4 Merged Contributions */}
            <div className="center-piece-scroll">
              <MasterOverviewScroll onSelectCategory={onSelectItem} />
            </div>

            {/* The Great Warrior Armor Stand */}
            <div className="center-piece-armor">
              <SamuraiArmor onInspect={onSelectItem} />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: NVIDIA NULLAWAY & UBER FRAMES */}
        <div className="wall-column wall-col-right">
          <div className="wall-section-label">
            <span className="label-kanji">堅固</span>
            <span className="label-text">SAFETY & DISTRIBUTED SCALE</span>
          </div>

          <div className="frames-vertical-stack">
            <ContributionFrame
              contribution={nvidiaContributions[2]}
              onSelect={onSelectItem}
              index={2}
            />
            {uberContributions[0] && (
              <ContributionFrame
                contribution={uberContributions[0]}
                onSelect={onSelectItem}
                index={3}
              />
            )}
          </div>
        </div>
      </div>

      {/* ================= 5. BASEBOARD & TATAMI FLOORING TRIM ================= */}
      <div className="palace-floor-base">
        <div className="palace-wood-skirting" />
        <div className="tatami-border-rim">
          <div className="tatami-pattern-strip" />
        </div>
      </div>
    </div>
  )
}
