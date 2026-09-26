import './Education.css'

export default function Education() {
  const educationData = [
    {
      id: '01',
      type: 'BACHELOR OF ENGINEERING',
      jpType: '大学工学部',
      status: 'ACTIVE PURSUIT',
      rank: 'RANK S+',
      institution: 'Sri Eshwar College of Engineering',
      location: 'Coimbatore, Tamil Nadu',
      degree: 'B.E. Computer Science & Engineering',
      metricLabel: 'CGPA SCORE',
      metricValue: '8.26 / 10',
      period: '2024 – 2028',
      details: 'Core CS Foundations, Data Structures, Algorithms & AI Pipelines',
      sealText: 'SECE // CSE 2028'
    },
    {
      id: '02',
      type: 'HIGHER SECONDARY',
      jpType: '高等教育修了',
      status: 'DISTINCTION',
      rank: 'RANK S',
      institution: 'Jayam Vidhyalaya Higher Secondary School',
      location: 'Dharmapuri, Tamil Nadu',
      degree: 'Higher Secondary Education',
      metricLabel: 'BOARD SCORE',
      metricValue: '96.67%',
      period: '2023 – 2024',
      details: 'Mathematics & Computer Science Stream · High Academic Honors',
      sealText: 'JVHSS // 96.67%'
    }
  ]

  return (
    <section className="anime-edu-section" id="education">
      
      <div className="anime-edu-container">
        
        {/* Shophouse Timber Signboard Header with Japanese Subtitle */}
        <div className="shop-hanging-header">
          <div className="beam-hook" aria-hidden="true">
            <div className="timber-beam" />
            <div className="hanging-chains">
              <span className="chain-link" />
              <span className="chain-link" />
            </div>
          </div>

          <div className="shop-header-sign">
            <span className="header-eyebrow">✦ 学歴 // ACADEMIC GUILD ARCHIVES ✦</span>
            <h2 className="header-title">Credentials &amp; Milestones</h2>
            <div className="header-ink-line">
              <span className="line-center-knot">✦</span>
            </div>
          </div>
        </div>

        {/* Sidewalk Chalkboard Easels (Side by Side) */}
        <div className="edu-easel-grid">
          {educationData.map((item) => (
            <div key={item.id} className="easel-board-stand">
              
              {/* Awning Shingle Topper */}
              <div className="easel-shingle-topper" aria-hidden="true">
                <div className="shingle-bars">
                  <div className="s-bar" />
                  <div className="s-bar dark" />
                  <div className="s-bar" />
                  <div className="s-bar dark" />
                  <div className="s-bar" />
                </div>
                <div className="shingle-scallops">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="s-scallop-arch" />
                  ))}
                </div>
              </div>

              {/* Main Blackboard Card */}
              <div className="easel-blackboard">
                
                {/* Top Board Meta */}
                <div className="board-meta-strip">
                  <span className="board-index">№ {item.id}</span>
                  <span className="board-jp-tag">{item.jpType}</span>
                  <span className="board-period">{item.period}</span>
                </div>

                {/* Hand-drawn Anime Seal Stamp */}
                <div className="anime-round-seal" aria-hidden="true">
                  <div className="seal-border-circle">
                    <span className="seal-tag">{item.rank}</span>
                    <strong className="seal-val">{item.sealText}</strong>
                  </div>
                </div>

                {/* Institution Heading */}
                <div className="board-institution-wrap">
                  <h3 className="board-inst-name">{item.institution}</h3>
                  <div className="board-inst-loc">
                    <span className="loc-icon">📍</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Degree / Program Strip */}
                <div className="board-program-box">
                  <div className="program-header">
                    <span className="prog-type">{item.type}</span>
                    <span className={`prog-status ${item.status === 'DISTINCTION' ? 'gold' : 'green'}`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="prog-degree-title">{item.degree}</h4>
                </div>

                {/* Score & CGPA Plaque */}
                <div className="board-score-plaque">
                  <span className="score-desc">{item.metricLabel}</span>
                  <div className="score-val-row">
                    <span className="score-main-number">{item.metricValue}</span>
                    <div className="score-ink-hatch" aria-hidden="true" />
                  </div>
                </div>

                {/* Focus Note Annotation */}
                <div className="board-focus-note">
                  <span className="quill-pin">✎</span>
                  <p className="focus-text">{item.details}</p>
                </div>

                {/* Corner Reinforcement Bolts */}
                <span className="board-bolt b-tl">+</span>
                <span className="board-bolt b-tr">+</span>
                <span className="board-bolt b-bl">+</span>
                <span className="board-bolt b-br">+</span>

              </div>

              {/* Wooden Easel Legs at Bottom */}
              <div className="easel-wooden-legs" aria-hidden="true">
                <div className="leg leg-left" />
                <div className="leg leg-right" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
