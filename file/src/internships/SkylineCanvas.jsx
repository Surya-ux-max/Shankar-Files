import { useState } from 'react'
import InternshipCalloutCard from './InternshipCalloutCard'
import cityArtwork from '../assets/internships_city.jpg'

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
      {/* Visual Navigation Hint */}
      <div className="skyline-top-bar">
        <div className="blueprint-status-indicator">
          <span className="live-dot" />
          <span className="status-label">INTERACTIVE METROPOLIS BLUEPRINT</span>
          <span className="sep">/</span>
          <span className="hint-label">Hover towers or click cards to inspect systems</span>
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

      {/* Main Pan / Canvas Viewport */}
      <div className="skyline-stage">
        {/* Foundation Panoramic Artwork */}
        <div className="artwork-image-container">
          <img
            src={cityArtwork}
            alt="Anime sketch of aspiring engineer overlooking city skyline with Zoho and Infosys landmark towers"
            className="skyline-artwork-img"
            loading="lazy"
          />
        </div>

        {/* Ambient Watercolor / Light Overlay */}
        <div className="canvas-atmospheric-fx" aria-hidden="true">
          <div className={`tower-halo halo-zoho ${hoveredTower === 'zoho' || activeId === 'zoho' ? 'is-radiant' : ''}`} />
          <div className={`tower-halo halo-infosys ${hoveredTower === 'infosys' || activeId === 'infosys' ? 'is-radiant' : ''}`} />
        </div>

        {/* Interactive SVG Layer (Beacons, Leader Lines, Hotspots) */}
        <svg
          className="skyline-interactive-svg"
          viewBox="0 0 1600 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Pulsing Glow Filters */}
            <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ============ ZOHO TOWER BEACON & LEADER LINE ============ */}
          <g
            className={`tower-svg-group zoho-svg-group ${
              hoveredTower === 'zoho' || activeId === 'zoho' ? 'is-highlighted' : ''
            }`}
          >
            {/* Tower Spire Beacon Pulsing Rings */}
            <circle cx="770" cy="80" r="28" className="beacon-ring ring-1" />
            <circle cx="770" cy="80" r="16" className="beacon-ring ring-2" />
            <circle cx="770" cy="80" r="6" className="beacon-core" filter="url(#glow-gold)" />

            {/* Architectural Leader Line to Left Callout Card */}
            <path
              d="M 660 155 L 720 155 L 755 125"
              className="cad-leader-line zoho-cad-line"
              strokeDasharray="4 2"
            />
            {/* Joint pins */}
            <circle cx="660" cy="155" r="3.5" className="cad-pin-dot" />
            <circle cx="720" cy="155" r="3" className="cad-pin-dot" />
            <circle cx="755" cy="125" r="4.5" className="cad-pin-dot pin-target" />
          </g>

          {/* ============ INFOSYS TOWER BEACON & LEADER LINE ============ */}
          <g
            className={`tower-svg-group infosys-svg-group ${
              hoveredTower === 'infosys' || activeId === 'infosys' ? 'is-highlighted' : ''
            }`}
          >
            {/* Tower Spire Beacon Pulsing Rings */}
            <circle cx="1140" cy="205" r="24" className="beacon-ring ring-1 infosys-ring" />
            <circle cx="1140" cy="205" r="14" className="beacon-ring ring-2 infosys-ring" />
            <circle cx="1140" cy="205" r="6" className="beacon-core infosys-core" filter="url(#glow-blue)" />

            {/* Architectural Leader Line to Right Callout Card */}
            <path
              d="M 1255 235 L 1205 235 L 1180 248"
              className="cad-leader-line infosys-cad-line"
              strokeDasharray="4 2"
            />
            {/* Joint pins */}
            <circle cx="1255" cy="235" r="3.5" className="cad-pin-dot" />
            <circle cx="1205" cy="235" r="3" className="cad-pin-dot" />
            <circle cx="1180" cy="248" r="4.5" className="cad-pin-dot pin-target" />
          </g>

          {/* Clickable Hotspot Zones over the Skyscrapers */}
          {/* Zoho Skyscraper */}
          <rect
            x="690"
            y="50"
            width="160"
            height="390"
            className="tower-hotspot-rect"
            onMouseEnter={() => setHoveredTower('zoho')}
            onMouseLeave={() => setHoveredTower(null)}
            onClick={() => onSelectInternship(zoho)}
            aria-label="Select Zoho Tower"
          />

          {/* Infosys Skyscraper */}
          <rect
            x="1070"
            y="170"
            width="145"
            height="340"
            className="tower-hotspot-rect"
            onMouseEnter={() => setHoveredTower('infosys')}
            onMouseLeave={() => setHoveredTower(null)}
            onClick={() => onSelectInternship(infosys)}
            aria-label="Select Infosys Tower"
          />
        </svg>

        {/* Floating Blueprint Cards Overlay (Positioned in harmony with the artwork) */}
        <div className="floating-cards-layer">
          {/* Zoho Card on Left */}
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

          {/* Infosys Card on Right */}
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

          {/* Wooden Kanji Sign Badge 「未来へ」 */}
          <div className="signpost-badge" title="Towards the Future">
            <span className="sign-kanji">未来へ</span>
            <span className="sign-label">TO THE FUTURE</span>
          </div>
        </div>
      </div>
    </div>
  )
}
