import { useState, useEffect } from 'react'

export default function TimeRoller({ timeOfDay, onChange }) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Auto-cycle animation when play is active
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      onChange((prev) => {
        const next = prev + 0.004
        return next > 1 ? 0 : next
      })
    }, 40)
    return () => clearInterval(interval)
  }, [isPlaying, onChange])

  const pct = Math.round(timeOfDay * 100)

  const label =
    timeOfDay < 0.15 ? 'DAWN' :
    timeOfDay < 0.45 ? 'DAY' :
    timeOfDay < 0.65 ? 'NOON' :
    timeOfDay < 0.78 ? 'SUNSET' :
    timeOfDay < 0.88 ? 'DUSK' :
    'NIGHT'

  const labelColor =
    timeOfDay < 0.55 ? '#ca8a04' :
    timeOfDay < 0.78 ? '#ea580c' :
    timeOfDay < 0.88 ? '#a855f7' :
    '#38bdf8'

  return (
    <div className="time-roller-widget" aria-label="Interactive Day-Night Atmosphere Lever">
      {/* Quick Jump Mode Buttons */}
      <div className="time-presets">
        <button
          type="button"
          className={`time-preset-btn ${timeOfDay < 0.5 ? 'is-active' : ''}`}
          onClick={() => { setIsPlaying(false); onChange(0.25) }}
          title="Switch to Daylight"
        >
          ☀️ Day
        </button>
        <button
          type="button"
          className={`time-preset-btn ${timeOfDay >= 0.5 && timeOfDay < 0.8 ? 'is-active' : ''}`}
          onClick={() => { setIsPlaying(false); onChange(0.72) }}
          title="Switch to Sunset"
        >
          🌅 Sunset
        </button>
        <button
          type="button"
          className={`time-preset-btn ${timeOfDay >= 0.8 ? 'is-active' : ''}`}
          onClick={() => { setIsPlaying(false); onChange(0.95) }}
          title="Switch to Night"
        >
          🌙 Night
        </button>
      </div>

      {/* Tactile Roll Lever Container */}
      <div className="time-roller-dial">
        {/* Sun Icon */}
        <span className="celestial-icon sun-icon" title="Sunrise / Day">
          ☀️
        </span>

        {/* Custom Dial Track & Input */}
        <div className="dial-track-wrapper">
          <input
            type="range"
            min="0"
            max="100"
            value={pct}
            onChange={(e) => {
              setIsPlaying(false)
              onChange(Number(e.target.value) / 100)
            }}
            className="time-range-input"
            aria-label="Drag roll lever to change atmosphere from day to night"
          />
        </div>

        {/* Moon Icon */}
        <span className="celestial-icon moon-icon" title="Night / Stars">
          🌙
        </span>
      </div>

      {/* Atmosphere Badge & Play/Pause Loop */}
      <div className="time-controls-end">
        <span className="time-badge" style={{ borderColor: labelColor, color: labelColor }}>
          <span className="badge-pulse" style={{ backgroundColor: labelColor }} />
          {label}
        </span>

        <button
          type="button"
          className={`time-cycle-toggle-btn ${isPlaying ? 'is-playing' : ''}`}
          onClick={() => setIsPlaying(!isPlaying)}
          title={isPlaying ? 'Pause atmosphere cycle' : 'Auto-play 24h city cycle'}
        >
          {isPlaying ? '⏸ Pause' : '▶ Auto'}
        </button>
      </div>
    </div>
  )
}
