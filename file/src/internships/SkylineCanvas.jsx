import { useState } from 'react'
import CitySkylineSVG from './CitySkylineSVG'
import ForegroundObserverSVG from './ForegroundObserverSVG'
import InternshipCalloutCard from './InternshipCalloutCard'

export default function SkylineCanvas({
  internships,
  activeId,
  onSelectInternship,
  onOpenModal
}) {
  const [hoveredTower, setHoveredTower] = useState(null)

  const zoho = internships.find((item) => item.id === 'zoho')
  const infosys = internships.find((item) => item.id === 'infosys')

  return (
    <div className="skyline-canvas-wrapper">
      {/* Blueprint Navigation Bar */}
      <div className="skyline-top-bar">
        <div className="blueprint-status-indicator">
          <span className="live-dot" />
          <span className="status-label">VECTOR METROPOLIS BLUEPRINT</span>
          <span className="sep">/</span>
          <span className="hint-label">Hover towers or click blueprint cards to inspect engineering systems</span>
        </div>

        <div className="tower-quick-switch">
          <button
            type="button"
            className={`quick-pill ${activeId === 'zoho' ? 'active' : ''}`}
            onClick={() => onSelectInternship(zoho)}
          >
            <span className="pill-dot zoho-dot" />
            Zoho Corp (Tower 01)
          </button>
          <button
            type="button"
            className={`quick-pill ${activeId === 'infosys' ? 'active' : ''}`}
            onClick={() => onSelectInternship(infosys)}
          >
            <span className="pill-dot infosys-dot" />
            Infosys (Tower 02)
          </button>
        </div>
      </div>

      {/* Main Canvas Stage */}
      <div className="skyline-stage">
        {/* Vector Landscape Background (City, Sky, Towers, River, Train) */}
        <div className="skyline-artwork-vector-layer">
          <CitySkylineSVG
            hoveredTower={hoveredTower}
            activeId={activeId}
            onHoverTower={setHoveredTower}
            onSelectTower={(id) => {
              const target = internships.find((i) => i.id === id)
              if (target) onSelectInternship(target)
            }}
          />
        </div>

        {/* Foreground Overlook (Seated Engineer, Hillside, Railing, Signpost, Foliage) */}
        <div className="skyline-observer-vector-layer" aria-hidden="true">
          <ForegroundObserverSVG />
        </div>

        {/* Interactive CAD Leader Lines & Beacon Overlays */}
        <svg
          className="skyline-cad-overlay-svg"
          viewBox="0 0 1400 700"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Zoho Tower Beacon & Leader Line */}
          <g
            className={`cad-annotation-group ${
              hoveredTower === 'zoho' || activeId === 'zoho' ? 'is-highlighted' : ''
            }`}
          >
            {/* Spire Pulsing Beacon Rings */}
            <circle cx="685" cy="45" r="28" className="beacon-ring ring-1" />
            <circle cx="685" cy="45" r="16" className="beacon-ring ring-2" />

            {/* Leader Line to Floating Zoho Card */}
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
          <g
            className={`cad-annotation-group ${
              hoveredTower === 'infosys' || activeId === 'infosys' ? 'is-highlighted' : ''
            }`}
          >
            {/* Spire Pulsing Beacon Rings */}
            <circle cx="995" cy="160" r="24" className="beacon-ring ring-1 infosys-ring" />
            <circle cx="995" cy="160" r="14" className="beacon-ring ring-2 infosys-ring" />

            {/* Leader Line to Floating Infosys Card */}
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

        {/* Floating Blueprint Cards */}
        <div className="floating-cards-layer">
          {/* Zoho Card */}
          {zoho && (
            <div
              className={`floating-card-anchor zoho-anchor ${
                activeId === 'zoho' || hoveredTower === 'zoho' ? 'focused' : ''
              }`}
              onMouseEnter={() => setHoveredTower('zoho')}
              onMouseLeave={() => setHoveredTower(null)}
            >
              <InternshipCalloutCard
                internship={zoho}
                isActive={activeId === 'zoho'}
                onSelect={() => onOpenModal(zoho)}
                isFloating={true}
              />
            </div>
          )}

          {/* Infosys Card */}
          {infosys && (
            <div
              className={`floating-card-anchor infosys-anchor ${
                activeId === 'infosys' || hoveredTower === 'infosys' ? 'focused' : ''
              }`}
              onMouseEnter={() => setHoveredTower('infosys')}
              onMouseLeave={() => setHoveredTower(null)}
            >
              <InternshipCalloutCard
                internship={infosys}
                isActive={activeId === 'infosys'}
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
