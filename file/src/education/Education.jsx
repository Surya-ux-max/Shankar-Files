import './Education.css'

export default function Education() {
  return (
    <section className="anime-shop-edu" id="education">
      
      <div className="edu-shop-container">
        
        {/* Shophouse Chalkboard Sign Header */}
        <div className="edu-chalkboard-sign">
          <div className="edu-sign-hanger" aria-hidden="true">
            <span className="sign-bolt" />
            <span className="sign-wire left" />
            <span className="sign-wire right" />
          </div>
          <div className="edu-chalk-box">
            <span className="chalk-star tl">✦</span>
            <span className="chalk-star tr">✦</span>
            <span className="chalk-star bl">✦</span>
            <span className="chalk-star br">✦</span>
            <span className="edu-chap-tag">ATELIER ARCHIVES // SECTION 03</span>
            <h2 className="edu-shop-title">Academic Craft &amp; Guild</h2>
          </div>
        </div>

        {/* The Two Master Craft Board Stands (Side by Side) */}
        <div className="edu-boards-grid">
          
          {/* Card 1: College Guild Certificate */}
          <div className="shop-craft-card card-college">
            
            {/* Awning Top Header */}
            <div className="card-awning-header" aria-hidden="true">
              <div className="awning-shingles">
                <div className="shingle" />
                <div className="shingle dark" />
                <div className="shingle" />
                <div className="shingle dark" />
                <div className="shingle" />
              </div>
              <div className="awning-teeth">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="tooth" />
                ))}
              </div>
            </div>

            {/* Anime Guild Stamp */}
            <div className="guild-ink-stamp stamp-college" aria-hidden="true">
              <div className="stamp-ring">
                <span className="stamp-org">GUILD CSE</span>
                <strong className="stamp-score">8.26 CGPA</strong>
                <span className="stamp-yrs">2024-2028</span>
              </div>
            </div>

            <div className="craft-card-inner">
              
              <div className="craft-folio-tag">
                <span className="folio-label">RECORD № 01 // UNIVERSITY</span>
                <span className="status-badge-active">● PURSUING</span>
              </div>

              <h3 className="craft-inst-name">Sri Eshwar College of Engineering</h3>
              
              <div className="craft-location">
                <span className="loc-pin">📍</span>
                <span>Coimbatore, Tamil Nadu</span>
              </div>

              {/* Course Detail Plaque */}
              <div className="craft-course-strip">
                <div className="course-head">
                  <span className="course-label">DISCIPLINE</span>
                  <span className="course-time">2024 – 2028</span>
                </div>
                <h4 className="course-title">B.E. Computer Science & Engineering</h4>
              </div>

              {/* Hand-hatched Metric Progress Gauge */}
              <div className="craft-metric-gauge">
                <div className="gauge-header">
                  <span className="gauge-title">Cumulative Grade Metric</span>
                  <span className="gauge-val">8.26 <span className="val-sub">/ 10</span></span>
                </div>
                <div className="gauge-track">
                  <div className="gauge-fill fill-sece" style={{ width: '82.6%' }}>
                    <div className="gauge-hatches" />
                  </div>
                </div>
              </div>

              {/* Anime Annotation Note */}
              <div className="craft-note-row">
                <svg className="craft-arrow-svg" width="32" height="22" viewBox="0 0 32 22" fill="none">
                  <path d="M4 16 C 10 10, 18 12, 26 5" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2" />
                  <path d="M19 5 L 27 4 L 24 12" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="craft-note-text">AI Systems, Data Structures & Algorithms</span>
              </div>

            </div>

            {/* Corner Bracket Reinforcements */}
            <span className="corner-bracket cb-tl">+</span>
            <span className="corner-bracket cb-tr">+</span>
            <span className="corner-bracket cb-bl">+</span>
            <span className="corner-bracket cb-br">+</span>

          </div>

          {/* Card 2: Higher Secondary Board */}
          <div className="shop-craft-card card-school">
            
            {/* Awning Top Header */}
            <div className="card-awning-header" aria-hidden="true">
              <div className="awning-shingles">
                <div className="shingle" />
                <div className="shingle dark" />
                <div className="shingle" />
                <div className="shingle dark" />
                <div className="shingle" />
              </div>
              <div className="awning-teeth">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="tooth" />
                ))}
              </div>
            </div>

            {/* Anime Guild Stamp */}
            <div className="guild-ink-stamp stamp-school" aria-hidden="true">
              <div className="stamp-ring">
                <span className="stamp-org">HONORS HSC</span>
                <strong className="stamp-score">96.67%</strong>
                <span className="stamp-yrs">2023-2024</span>
              </div>
            </div>

            <div className="craft-card-inner">
              
              <div className="craft-folio-tag">
                <span className="folio-label">RECORD № 02 // ACADEMIC</span>
                <span className="status-badge-done">✓ DISTINCTION</span>
              </div>

              <h3 className="craft-inst-name">Jayam Vidhyalaya Higher Secondary School</h3>
              
              <div className="craft-location">
                <span className="loc-pin">📍</span>
                <span>Dharmapuri, Tamil Nadu</span>
              </div>

              {/* Course Detail Plaque */}
              <div className="craft-course-strip">
                <div className="course-head">
                  <span className="course-label">STREAM</span>
                  <span className="course-time">2023 – 2024</span>
                </div>
                <h4 className="course-title">Higher Secondary Education</h4>
              </div>

              {/* Hand-hatched Metric Progress Gauge */}
              <div className="craft-metric-gauge">
                <div className="gauge-header">
                  <span className="gauge-title">Board Examination Score</span>
                  <span className="gauge-val">96.67<span className="val-sub">%</span></span>
                </div>
                <div className="gauge-track">
                  <div className="gauge-fill fill-jayam" style={{ width: '96.67%' }}>
                    <div className="gauge-hatches" />
                  </div>
                </div>
              </div>

              {/* Anime Annotation Note */}
              <div className="craft-note-row">
                <svg className="craft-arrow-svg" width="32" height="22" viewBox="0 0 32 22" fill="none">
                  <path d="M4 16 C 10 10, 18 12, 26 5" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2" />
                  <path d="M19 5 L 27 4 L 24 12" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="craft-note-text">Mathematics & Computer Science Stream</span>
              </div>

            </div>

            {/* Corner Bracket Reinforcements */}
            <span className="corner-bracket cb-tl">+</span>
            <span className="corner-bracket cb-tr">+</span>
            <span className="corner-bracket cb-bl">+</span>
            <span className="corner-bracket cb-br">+</span>

          </div>

        </div>

      </div>

    </section>
  )
}
