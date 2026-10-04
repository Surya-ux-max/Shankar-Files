import { useState } from 'react'
import { INTERNSHIPS_DATA } from './internshipsData'
import SkylineCanvas from './SkylineCanvas'
import InternshipCalloutCard from './InternshipCalloutCard'
import InternshipModal from './InternshipModal'
import './Internships.css'

export default function Internships() {
  const [selectedInternship, setSelectedInternship] = useState(INTERNSHIPS_DATA[0])
  const [modalInternship, setModalInternship] = useState(null)

  const handleSelectInternship = (item) => {
    setSelectedInternship(item)
  }

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

          <h2 className="internships-title">METROPOLIS OF EXPERIENCE</h2>

          <p className="internships-subtitle">
            Looking out from foundational studies into the enterprise skyline — building high-throughput systems,
            machine learning engines, and civic platforms at <strong>Zoho Corporation</strong> and <strong>Infosys Springboard</strong>.
          </p>

          <div className="kanji-quote">
            <span className="kanji-badge">未来へ</span>
            <span>"Looking toward the horizon where concepts transform into enterprise engineering."</span>
          </div>
        </header>

        {/* Master Panoramic Blueprint Skyline Canvas */}
        <SkylineCanvas
          internships={INTERNSHIPS_DATA}
          activeId={selectedInternship?.id}
          onSelectInternship={handleSelectInternship}
          onOpenModal={handleOpenModal}
        />

        {/* Mobile & Tablet Fallback Stacked Cards */}
        <div className="internships-mobile-cards">
          {INTERNSHIPS_DATA.map((item) => (
            <InternshipCalloutCard
              key={item.id}
              internship={item}
              isActive={selectedInternship?.id === item.id}
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
