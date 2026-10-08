import { useState } from 'react'
import MountainSunsetSVG from './MountainSunsetSVG'
import MountainProjectCallout from './MountainProjectCallout'

export default function MountainProjectsCanvas({ projects, onOpenModal }) {
  const [hoveredProjectId, setHoveredProjectId] = useState('drake') // Default preview on central Drake summit

  const activeProject = projects.find((p) => p.id === hoveredProjectId)

  return (
    <div className="mountain-projects-canvas-wrapper">
      {/* Top Clean Controls Bar */}
      <div className="mountain-canvas-clean-bar">
        <div className="mountain-hover-prompt">
          <span className="prompt-pulse-dot" />
          <span className="prompt-text">
            Hover over the glacier-filled mountain tips to explore projects
          </span>
        </div>

        {/* Quick Mountain Summit Selector Chips */}
        <div className="mountain-summit-chips" role="tablist">
          {projects.map((proj) => {
            const isActive = hoveredProjectId === proj.id
            return (
              <button
                key={proj.id}
                type="button"
                className={`summit-nav-chip ${isActive ? 'is-summit-active' : ''}`}
                onClick={() => {
                  setHoveredProjectId(proj.id)
                  onOpenModal(proj)
                }}
                onMouseEnter={() => setHoveredProjectId(proj.id)}
                role="tab"
                aria-selected={isActive}
              >
                <span className="chip-num">{proj.num}</span>
                <span className="chip-title">{proj.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Mountain Stage */}
      <div className="mountain-canvas-stage">
        {/* Layer 1: Panoramic Vector Sunset Mountain Landscape */}
        <div className="mountain-vector-layer">
          <MountainSunsetSVG
            projects={projects}
            hoveredProject={hoveredProjectId}
            onHoverPeak={(id) => setHoveredProjectId(id)}
            onSelectPeak={(id) => {
              const target = projects.find((p) => p.id === id)
              if (target) onOpenModal(target)
            }}
          />
        </div>

        {/* Layer 2: CAD Leader Lines & Summit Reticles SVG */}
        <svg
          className="mountain-cad-overlay-svg"
          viewBox="0 0 1440 680"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {activeProject && (
            <g className="cad-annotation-active">
              {/* Pulsing Beacon on Summit */}
              <circle
                cx={activeProject.beaconCoord.x}
                cy={activeProject.beaconCoord.y}
                r="18"
                className="beacon-ping-ring"
                stroke={activeProject.accentColor}
              />
              <circle
                cx={activeProject.beaconCoord.x}
                cy={activeProject.beaconCoord.y}
                r="4.5"
                fill={activeProject.accentColor}
              />
            </g>
          )}
        </svg>

        {/* Layer 3: Floating Project Callout Card */}
        {activeProject && (
          <div
            className={`mountain-callout-anchor anchor-${activeProject.id}`}
            onMouseEnter={() => setHoveredProjectId(activeProject.id)}
          >
            <MountainProjectCallout
              project={activeProject}
              onSelect={onOpenModal}
              onClose={() => setHoveredProjectId(null)}
            />
          </div>
        )}
      </div>
    </div>
  )
}
