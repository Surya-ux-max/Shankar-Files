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
            Hover or click on the hanging photo frames along the armory wall to inspect verified upstream contributions
          </span>
        </div>

        {/* Quick Active Spotlight Status Pill */}
        <div className="samurai-spotlight-status">
          <span className="spotlight-icon">💡</span>
          <span className="spotlight-text">
            {hoveredFrame
              ? `Spotlight: ${hoveredFrame.toUpperCase()} FRAME`
              : 'Ambient Gallery Lighting'}
          </span>
        </div>
      </div>

      {/* Main Wall Canvas Stage */}
      <div className="samurai-wall-stage">
        {/* Layer 1: Real Samurai Palace Wall Vector Scene with Warriors, Weapons, and Dynamic Spotlights */}
        <div className="samurai-wall-vector-layer">
          <SamuraiWallSVG activeSpotlight={hoveredFrame} />
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
