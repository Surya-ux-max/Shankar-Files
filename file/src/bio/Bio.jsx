import './Bio.css'

export default function Bio() {
  const domains = [
    {
      code: '01',
      title: 'Full-Stack Development',
      desc: 'Crafting responsive, intuitive web interfaces and interactive client systems.'
    },
    {
      code: '02',
      title: 'Backend Engineering',
      desc: 'Architecting scalable server-side systems, microservices & reliable databases.'
    },
    {
      code: '03',
      title: 'Mobile Applications',
      desc: 'Developing performant cross-platform mobile experiences with clean architecture.'
    },
    {
      code: '04',
      title: 'AI & Machine Learning',
      desc: 'Building intelligent pipelines, LLM agent workflows & practical AI integrations.'
    }
  ]

  return (
    <section className="ink-bio-section" id="about">
      {/* Background Ruled Architecture Lines */}
      <div className="ink-grid-backdrop" aria-hidden="true" />

      <div className="ink-bio-container">
        
        {/* Section Heading Plaque */}
        <div className="ink-section-header">
          <div className="header-plaque">
            <span className="plaque-corner top-left">+</span>
            <span className="plaque-corner top-right">+</span>
            <span className="plaque-corner bottom-left">+</span>
            <span className="plaque-corner bottom-right">+</span>
            <span className="header-chapter">CHAPTER // 02</span>
            <h2 className="header-main-title">About Shankar</h2>
          </div>
          <div className="header-divider-line">
            <span className="line-diamond">◆</span>
          </div>
        </div>

        {/* Main Artisan Workshop Storyboard Card */}
        <div className="ink-story-card">
          
          {/* Top Canopy Scallop Border */}
          <div className="card-top-awning" aria-hidden="true">
            <div className="awning-scallops">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="awning-arch" />
              ))}
            </div>
          </div>

          <div className="card-body">
            
            {/* Primary Bio Statement */}
            <div className="story-lead-block">
              <p className="story-lead-paragraph">
                I’m <strong className="ink-name-highlight">Shankar V</strong>, a <strong>Computer Science student</strong> and <strong>Software Developer</strong> passionate about building impactful software and AI systems.
              </p>
              <p className="story-sub-paragraph">
                I work across <span className="ink-underline-phrase">full-stack development</span>, <span className="ink-underline-phrase">backend engineering</span>, <span className="ink-underline-phrase">mobile applications</span>, and <span className="ink-underline-phrase">AI/ML</span>. I enjoy solving complex problems, contributing to open source, and turning ideas into practical solutions.
              </p>
            </div>

            {/* Cross-Hatched Domain Pillars */}
            <div className="domains-ink-grid">
              {domains.map((item, idx) => (
                <div key={idx} className="domain-card">
                  <div className="domain-top-bar">
                    <span className="domain-code">{item.code}</span>
                    <h3 className="domain-title">{item.title}</h3>
                  </div>
                  <p className="domain-desc">{item.desc}</p>
                  <div className="domain-hatch" aria-hidden="true" />
                </div>
              ))}
            </div>

            {/* Bottom Signature Line */}
            <div className="story-card-footer">
              <span className="quill-icon">✒</span>
              <span className="footer-quote">
                "Solving complex challenges through clean code and pragmatic AI."
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
