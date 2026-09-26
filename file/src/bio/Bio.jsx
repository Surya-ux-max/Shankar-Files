import './Bio.css'

export default function Bio() {
  const shelfItems = [
    {
      jarNo: '01',
      jarIcon: '⚡',
      title: 'Full-Stack Web',
      tag: 'CRAFT',
      desc: 'Building responsive, rich interactive web applications with clean design.'
    },
    {
      jarNo: '02',
      jarIcon: '🛠️',
      title: 'Backend Systems',
      tag: 'ENGINE',
      desc: 'Architecting scalable server-side systems, robust APIs & databases.'
    },
    {
      jarNo: '03',
      jarIcon: '📱',
      title: 'Mobile Apps',
      tag: 'NATIVE',
      desc: 'Developing smooth, high-performance cross-platform mobile experiences.'
    },
    {
      jarNo: '04',
      jarIcon: '🧠',
      title: 'AI & Machine Learning',
      tag: 'INTELLIGENCE',
      desc: 'Engineering intelligent pipelines, models & pragmatic AI integrations.'
    }
  ]

  return (
    <section className="anime-shop-bio" id="about">
      
      <div className="bio-shop-container">
        
        {/* Shophouse Signpost / Chalkboard Menu Header */}
        <div className="shop-chalkboard-sign">
          <div className="sign-hanger" aria-hidden="true">
            <span className="sign-screw" />
            <span className="sign-chain left" />
            <span className="sign-chain right" />
          </div>
          <div className="chalkboard-frame">
            <span className="chalk-corner tl">✦</span>
            <span className="chalk-corner tr">✦</span>
            <span className="chalk-corner bl">✦</span>
            <span className="chalk-corner br">✦</span>
            <span className="chalk-sub">ATELIER ARCHIVES // SECTION 02</span>
            <h2 className="chalk-heading">The Shopkeeper's Ledger</h2>
          </div>
        </div>

        {/* The Main Artisan Storyboard Box */}
        <div className="shop-story-box">
          
          {/* Scalloped Canopy Roof for the Section */}
          <div className="story-awning-top" aria-hidden="true">
            <div className="story-stripes">
              {[...Array(11)].map((_, i) => (
                <div key={i} className={`s-stripe ${i % 2 === 1 ? 'dark' : ''}`} />
              ))}
            </div>
            <div className="story-scallops">
              {[...Array(11)].map((_, i) => (
                <div key={i} className="s-scallop" />
              ))}
            </div>
          </div>

          <div className="story-box-body">
            
            {/* Bio Narrative Note / Recipe Card */}
            <div className="bio-recipe-card">
              <div className="recipe-tag">CHIEF RECIPE // BIO</div>
              <p className="recipe-lead">
                I’m <strong className="shop-name-ink">Shankar V</strong>, a <strong>Computer Science student</strong> and <strong>Software Developer</strong> passionate about building impactful software and AI systems.
              </p>
              <p className="recipe-sub">
                I work across <span className="shop-underline">full-stack development</span>, <span className="shop-underline">backend engineering</span>, <span className="shop-underline">mobile applications</span>, and <span className="shop-underline">AI/ML</span>. I enjoy solving complex problems, contributing to open source, and turning ideas into practical solutions.
              </p>
            </div>

            {/* Shop Pantry / Shelves of Craft Skills */}
            <div className="shop-pantry-section">
              <div className="pantry-shelf-label">
                <span className="label-line" />
                <span className="label-text">✦ INVENTORY OF SKILLS & DOMAINS ✦</span>
                <span className="label-line" />
              </div>

              <div className="pantry-shelf-grid">
                {shelfItems.map((item) => (
                  <div key={item.jarNo} className="shelf-jar-box">
                    <div className="jar-header">
                      <span className="jar-num">№ {item.jarNo}</span>
                      <span className="jar-tag">{item.tag}</span>
                    </div>
                    <div className="jar-title-row">
                      <span className="jar-icon">{item.jarIcon}</span>
                      <h3 className="jar-title">{item.title}</h3>
                    </div>
                    <p className="jar-desc">{item.desc}</p>
                    <div className="jar-hatch-accent" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>

            {/* Shopkeeper's Stamp & Motto */}
            <div className="shop-motto-row">
              <span className="motto-feather">🪶</span>
              <span className="motto-text">"Crafting purposeful software with artisan care & zero fluff."</span>
            </div>

          </div>

          {/* Wooden Shelf Base */}
          <div className="story-timber-base" aria-hidden="true" />

        </div>

      </div>

    </section>
  )
}
