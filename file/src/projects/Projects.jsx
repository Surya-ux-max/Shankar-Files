import { useState } from 'react'
import { PROJECTS_DATA } from './projectsData'
import MountainProjectsCanvas from './MountainProjectsCanvas'
import ProjectModal from './ProjectModal'
import './Projects.css'

export default function Projects() {
  const [modalProject, setModalProject] = useState(null)

  const handleOpenModal = (project) => {
    setModalProject(project)
  }

  const handleCloseModal = () => {
    setModalProject(null)
  }

  return (
    <section className="projects-section" id="projects" aria-label="Featured Engineering Projects">
      {/* Background Drafting Grid & Paper Texture */}
      <div className="projects-paper-bg" aria-hidden="true" />

      {/* Atmospheric Evening Sunset Ambient Washes */}
      <div className="projects-ambient-glow" aria-hidden="true">
        <div className="ambient-patch patch-sunset-orange" />
        <div className="ambient-patch patch-sunset-amber" />
      </div>

      <div className="projects-container">
        {/* Section Header */}
        <header className="projects-header">
          <div className="projects-tag">
            <span className="tag-dot" />
            <span>No. 07 · FEATURED ENGINEERING PROJECTS</span>
          </div>

          <h2 className="projects-title">ALPINE SUMMITS & ARCHITECTURE</h2>

          <p className="projects-subtitle">
            Towering mountain ranges standing against the glowing orange evening sunset sky — where each glacier-filled
            summit represents an engineering milestone in edge AI, distributed graph analysis, and scalable platforms.
          </p>
        </header>

        {/* Master Panoramic Mountain Sunset Canvas */}
        <MountainProjectsCanvas
          projects={PROJECTS_DATA}
          onOpenModal={handleOpenModal}
        />

        {/* Mobile & Tablet Fallback Stacked Cards */}
        <div className="projects-mobile-cards">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              className="projects-mobile-card"
              style={{ '--card-accent': proj.accentColor }}
              onClick={() => handleOpenModal(proj)}
              role="button"
              tabIndex={0}
            >
              <div className="mobile-card-top-row">
                <span className="mobile-project-num">{proj.num}</span>
                <span className="mobile-summit-badge">🏔️ {proj.elevation}</span>
              </div>

              <h3 className="mobile-project-title">{proj.title}</h3>
              <span className="mobile-project-category">{proj.category}</span>
              <p className="mobile-project-summary">{proj.summary}</p>

              <div className="mobile-tech-pills">
                {proj.techStack.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="mobile-tech-tag">
                    {tech}
                  </span>
                ))}
                {proj.techStack.length > 4 && (
                  <span className="mobile-tech-more">+{proj.techStack.length - 4}</span>
                )}
              </div>

              <div className="mobile-card-footer">
                <span className="mobile-inspect-link">Explore Blueprint Specification ↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Architectural Blueprint Specification Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={handleCloseModal}
        />
      )}
    </section>
  )
}
