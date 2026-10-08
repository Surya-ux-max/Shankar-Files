import { useState } from 'react'
import SamuraiWallSVG from './SamuraiWallSVG'
import WallPhotoFrames from './WallPhotoFrames'

export default function SamuraiWallCanvas({ onOpenModal }) {
  const [hoveredFrame, setHoveredFrame] = useState(null)

  return (
    <div className="samurai-wall-canvas-wrapper">
      {/* Top Clean Minimal Controls Bar (matching SkylineCanvas pattern) */}
      <div className="samurai-wall-clean-bar">
        <div className="samurai-hover-prompt">
          <span className="prompt-dot" />
          <span className="prompt-text">
            Click on any photo frame along the armory wall to inspect upstream engineering contributions
          </span>
        </div>
      </div>

      {/* Main Wall Canvas Stage */}
      <div className="samurai-wall-stage">
        {/* Layer 1: Real Samurai Palace Wall Vector Scene (Plaster, Timber, Hanging Katana, Knives, Warrior Armor) */}
        <div className="samurai-wall-vector-layer">
          <SamuraiWallSVG />
        </div>

        {/* Layer 2: Hanging Photo Frames Layer (Only the specified contribution content) */}
        <div className="samurai-frames-interactive-layer">
          <WallPhotoFrames
            onSelectFrame={onOpenModal}
            hoveredFrame={hoveredFrame}
            setHoveredFrame={setHoveredFrame}
          />
        </div>
      </div>
    </div>
  )
}
