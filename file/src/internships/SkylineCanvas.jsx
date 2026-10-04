import { useState } from 'react'
import CitySkylineSVG from './CitySkylineSVG'
import ForegroundObserverSVG from './ForegroundObserverSVG'
import InternshipCalloutCard from './InternshipCalloutCard'
import TimeRoller from './TimeRoller'

export default function SkylineCanvas({
  internships,
  onOpenModal
}) {
  const [hoveredTower, setHoveredTower] = useState(null)
  const [timeOfDay, setTimeOfDay] = useState(0.28)

  const zoho = internships.find((item) => item.id === 'zoho')
  const infosys = internships.find((item) => item.id === 'infosys')

  return (
    <div className="skyline-canvas-wrapper">
      {/* Top Controls Bar: Minimal Hover Prompt + Interactive Day-Night Lever */}
      <div className="skyline-clean-bar">
        <div className="skyline-hover-prompt">
          <span className="prompt-dot" />
          <span className="prompt-text">Hover over buildings to view experience</span>
        </div>

        {/* Interactive Roll Lever: Day -> Sunset -> Night Atmosphere Cycle */}
        <TimeRoller timeOfDay={timeOfDay} onChange={setTimeOfDay} />
      </div>

      {/* Main Canvas Stage */}
      <div className="skyline-stage">
        {/* Vector Landscape Background (City, Sky, Towers, River, Train, Passing Sun/Moon/Clouds) */}
        <div className="skyline-artwork-vector-layer">
          <CitySkylineSVG
            hoveredTower={hoveredTower}
            activeId={hoveredTower}
            onHoverTower={setHoveredTower}
            timeOfDay={timeOfDay}
            onSelectTower={(id) => {
              const target = internships.find((i) => i.id === id)
              if (target) onOpenModal(target)
            }}
          />
        </div>

        {/* Foreground Overlook (Developer standing in back pose, Hillside, Signpost, Foliage) */}
        <div className="skyline-observer-vector-layer" aria-hidden="true">
          <ForegroundObserverSVG timeOfDay={timeOfDay} />
        </div>

        {/* Interactive CAD Leader Lines & Beacon Overlays (Appears on Hover) */}
        <svg
          className="skyline-cad-overlay-svg"
          viewBox="0 0 1400 700"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Zoho Tower Beacon & Leader Line */}
          <g className={`cad-annotation-group ${hoveredTower === 'zoho' ? 'is-visible' : ''}`}>
            <circle cx="685" cy="45" r="28" className="beacon-ring ring-1" />
            <circle cx="685" cy="45" r="16" className="beacon-ring ring-2" />

            <path
              d="M 590 145 L 640 145 L 685 115"
              className="cad-leader-line zoho-cad-line"
              strokeDasharray="4 2"
            />
            <circle cx="590" cy="145" r="3.5" className="cad-pin-dot" />
            <circle cx="640" cy="145" r="3" className="cad-pin-dot" />
            <circle cx="685" cy="115" r="4.5" className="cad-pin-dot pin-target-zoho" />
          </g>

          {/* Infosys Tower Beacon & Leader Line */}
          <g className={`cad-annotation-group ${hoveredTower === 'infosys' ? 'is-visible' : ''}`}>
            <circle cx="995" cy="160" r="24" className="beacon-ring ring-1 infosys-ring" />
            <circle cx="995" cy="160" r="14" className="beacon-ring ring-2 infosys-ring" />

            <path
              d="M 1080 230 L 1040 230 L 995 210"
              className="cad-leader-line infosys-cad-line"
              strokeDasharray="4 2"
            />
            <circle cx="1080" cy="230" r="3.5" className="cad-pin-dot" />
            <circle cx="1040" cy="230" r="3" className="cad-pin-dot" />
            <circle cx="995" cy="210" r="4.5" className="cad-pin-dot pin-target-infosys" />
          </g>
        </svg>

        {/* Floating Blueprint Cards (Appear ONLY when hovered over the building or card) */}
        <div className="floating-cards-layer">
          {/* Zoho Card */}
          {zoho && (
            <div
              className={`floating-card-anchor zoho-anchor ${
                hoveredTower === 'zoho' ? 'is-shown' : ''
              }`}
              onMouseEnter={() => setHoveredTower('zoho')}
              onMouseLeave={() => setHoveredTower(null)}
            >
              <InternshipCalloutCard
                internship={zoho}
                isActive={true}
                onSelect={() => onOpenModal(zoho)}
                isFloating={true}
              />
            </div>
          )}

          {/* Infosys Card */}
          {infosys && (
            <div
              className={`floating-card-anchor infosys-anchor ${
                hoveredTower === 'infosys' ? 'is-shown' : ''
              }`}
              onMouseEnter={() => setHoveredTower('infosys')}
              onMouseLeave={() => setHoveredTower(null)}
            >
              <InternshipCalloutCard
                internship={infosys}
                isActive={true}
                onSelect={() => onOpenModal(infosys)}
                isFloating={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
