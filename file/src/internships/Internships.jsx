import { useState } from 'react'
import { INTERNSHIPS_DATA } from './internshipsData'
import SkylineCanvas from './SkylineCanvas'
import InternshipCalloutCard from './InternshipCalloutCard'
import InternshipModal from './InternshipModal'
import './Internships.css'

export default function Internships() {
  const [modalInternship, setModalInternship] = useState(null)

  const handleOpenModal = (item) => {
    setModalInternship(item)
  }

  const handleCloseModal = () => {
    setModalInternship(null)
  }

  return (
    <section className="internships-section" id="internships" aria-label="Professional Internships">
      {/* Background Drafting Grid & Paper Texture */}
      <div className="internships-paper-bg" aria-hidden="true" />

      {/* Atmospheric Ambient Glow */}
      <div className="internships-ambient-glow" aria-hidden="true">
        <div className="ambient-patch patch-zoho-glow" />
        <div className="ambient-patch patch-infosys-glow" />
      </div>

      <div className="internships-container">
        {/* Section Header */}
        <header className="internships-header">
          <div className="internships-tag">
            <span className="tag-dot" />
            <span>No. 05 · PROFESSIONAL MILESTONES</span>
          </div>

          <h2 className="internships-title">INDUSTRY HORIZONS & INTERNSHIPS</h2>

          <p className="internships-subtitle">
            Hands-on software development and full-stack engineering at <strong>Zoho Corporation</strong> and <strong>Infosys Springboard</strong> — building high-throughput systems, relational architectures, and machine learning models.
          </p>
        </header>

        {/* Master Panoramic Vector Skyline Canvas */}
        <SkylineCanvas
          internships={INTERNSHIPS_DATA}
          onOpenModal={handleOpenModal}
        />

        {/* Mobile & Tablet Fallback Stacked Cards */}
        <div className="internships-mobile-cards">
          {INTERNSHIPS_DATA.map((item) => (
            <InternshipCalloutCard
              key={item.id}
              internship={item}
              isActive={false}
              onSelect={handleOpenModal}
              isFloating={false}
            />
          ))}
        </div>
      </div>

      {/* Detailed Architectural Blueprint Specification Modal */}
      {modalInternship && (
        <InternshipModal
          internship={modalInternship}
          onClose={handleCloseModal}
        />
      )}
    </section>
  )
}
