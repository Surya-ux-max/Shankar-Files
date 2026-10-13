import { useState, useMemo } from 'react'

export default function PeelAchievementDeck({ categories }) {
  const [selectedCat, setSelectedCat] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPeeling, setIsPeeling] = useState(false)
  const [peelDirection, setPeelDirection] = useState('next')

  const allAchievements = useMemo(() => {
    return categories.flatMap((cat) =>
      cat.achievements.map((item) => ({
        ...item,
        categoryId: cat.id,
        categoryLabel: cat.label,
        categoryColor: cat.color,
      }))
    )
  }, [categories])

  const items = useMemo(() => {
    if (selectedCat === 'all') return allAchievements
    return allAchievements.filter((a) => a.categoryId === selectedCat)
  }, [allAchievements, selectedCat])

  const safeIndex = currentIndex >= items.length ? 0 : currentIndex
  const currentItem = items[safeIndex] || items[0]
  const nextItem = items[(safeIndex + 1) % items.length]
  const thirdItem = items[(safeIndex + 2) % items.length]

  const handleCategoryChange = (catId) => {
    setSelectedCat(catId)
    setCurrentIndex(0)
  }

  const handlePeelNext = () => {
    if (isPeeling || items.length <= 1) return
    setPeelDirection('next')
    setIsPeeling(true)

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
      setIsPeeling(false)
    }, 420)
  }

  const handlePeelPrev = () => {
    if (isPeeling || items.length <= 1) return
    setPeelDirection('prev')
    setIsPeeling(true)

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
      setIsPeeling(false)
    }, 420)
  }

  const handleJumpTo = (idx) => {
    if (isPeeling || idx === safeIndex) return
    setCurrentIndex(idx)
  }

  return (
    <div className="peel-deck-section" aria-label="Achievement Deck">
      {/* Category Domain Filter Tabs */}
      <div className="peel-deck-tabs" role="tablist">
        <button
          type="button"
          className={`peel-tab-btn ${selectedCat === 'all' ? 'is-active' : ''}`}
          onClick={() => handleCategoryChange('all')}
          role="tab"
          aria-selected={selectedCat === 'all'}
        >
          <span>All Milestones</span>
          <span className="peel-tab-count">{allAchievements.length}</span>
        </button>

        {categories.map((cat) => {
          const isActive = selectedCat === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              className={`peel-tab-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
              role="tab"
              aria-selected={isActive}
            >
              <span>{cat.label}</span>
              <span className="peel-tab-count">{cat.achievements.length}</span>
            </button>
          )
        })}
      </div>

      {/* Peel Deck Canvas */}
      <div className="peel-deck-container">
        {/* Stacked Paper Sheets Behind */}
        {thirdItem && items.length > 2 && (
          <div className="peel-card-sheet sheet-depth-2" aria-hidden="true" />
        )}

        {nextItem && items.length > 1 && (
          <div className="peel-card-sheet sheet-depth-1" aria-hidden="true">
            <div className="sheet-preview-row">
              <span className="peek-tag">Next: {nextItem.title}</span>
              <span className="peek-rank">{nextItem.rank}</span>
            </div>
          </div>
        )}

        {/* Active Top Card */}
        {currentItem && (
          <div
            className={`peel-card-sheet sheet-active ${
              isPeeling ? (peelDirection === 'next' ? 'is-peeling-away' : 'is-peeling-back') : ''
            } ${currentItem.highlight ? 'sheet-highlight' : ''}`}
            style={{ '--sheet-accent': currentItem.categoryColor }}
            onClick={handlePeelNext}
            role="region"
            aria-label={`Achievement ${safeIndex + 1} of ${items.length}: ${currentItem.title}`}
          >
            {/* Top Accent Strip */}
            <div className="sheet-accent-top" />

            {/* Corner */}
            <div
              className="sheet-peel-corner"
              title="Click to view next achievement"
              onClick={(e) => {
                e.stopPropagation()
                handlePeelNext()
              }}
            >
              <div className="peel-corner-fold" />
              <span className="peel-corner-hint">NEXT</span>
            </div>

            {/* Main Sheet Body */}
            <div className="sheet-body">
              {/* Sheet Header Row */}
              <div className="sheet-top-meta">
                <div className="sheet-badge-group">
                  <span className="sheet-cat-badge">
                    {currentItem.categoryLabel}
                  </span>
                  <span className="sheet-rank-badge">{currentItem.rank}</span>
                </div>

                <div className="sheet-index-mark">
                  <span>{String(safeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="sheet-title">{currentItem.title}</h3>

              {/* Description */}
              <p className="sheet-desc">{currentItem.detail}</p>

              {/* Card Footer */}
              <div className="sheet-footer">
                <div className="sheet-outcome-box">
                  <span className="outcome-pill">{currentItem.prize}</span>
                </div>

                <button
                  type="button"
                  className="sheet-peel-action-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePeelNext()
                  }}
                >
                  <span>Next Achievement</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Deck Controls */}
      <div className="peel-deck-controls">
        <button
          type="button"
          className="peel-nav-btn prev-btn"
          onClick={handlePeelPrev}
          disabled={isPeeling || items.length <= 1}
          aria-label="Previous Achievement"
        >
          <span>Previous</span>
        </button>

        {/* Sheet Dots */}
        <div className="peel-sheet-dots" role="tablist" aria-label="Achievement sheets">
          {items.map((it, idx) => (
            <button
              key={it.id}
              type="button"
              className={`peel-dot ${idx === safeIndex ? 'is-active-dot' : ''}`}
              onClick={() => handleJumpTo(idx)}
              aria-label={`Go to sheet ${idx + 1}: ${it.title}`}
              title={`${idx + 1}. ${it.title}`}
            >
              <span className="dot-num">{idx + 1}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="peel-nav-btn next-btn"
          onClick={handlePeelNext}
          disabled={isPeeling || items.length <= 1}
          aria-label="Next Achievement"
        >
          <span>Next</span>
        </button>
      </div>

      <p className="peel-deck-hint">
        Click the card or buttons to navigate through achievements
      </p>
    </div>
  )
}
