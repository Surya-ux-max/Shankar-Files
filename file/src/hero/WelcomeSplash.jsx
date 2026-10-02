import { useEffect, useState } from 'react'
import './WelcomeSplash.css'

export default function WelcomeSplash() {
  const [phase, setPhase] = useState('visible')

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fading'), 2800)
    const goneTimer = setTimeout(() => setPhase('gone'), 4200)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(goneTimer)
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <div className={`splash-root ${phase === 'fading' ? 'splash-fade-out' : ''}`} aria-hidden="true">

      <div className="splash-sky" />

      <div className="splash-clouds">

        <div className="splash-cloud sc-large sc-left">
          <svg width="340" height="140" viewBox="0 0 340 140" fill="none">
            <path
              d="M42 108 C22 108, 8 92, 18 72 C10 50, 34 30, 62 42 C78 18, 122 10, 148 32 C170 14, 214 18, 222 48 C250 52, 262 78, 244 100 C228 116, 56 116, 42 108 Z"
              stroke="#b8a898" strokeWidth="2.2" fill="rgba(255,253,248,0.84)" strokeLinejoin="round"
            />
            <path d="M72 78 C90 66, 118 72, 126 86" stroke="#b8a898" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <path d="M158 56 C176 46, 200 52, 206 68" stroke="#b8a898" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M85 95 C105 89, 130 93, 140 100" stroke="#b8a898" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="splash-cloud sc-medium sc-right-top">
          <svg width="240" height="100" viewBox="0 0 240 100" fill="none">
            <path
              d="M28 76 C14 76, 6 64, 12 50 C8 36, 24 22, 44 32 C56 14, 90 10, 110 26 C128 12, 156 16, 162 36 C180 40, 186 58, 174 72 C160 82, 40 82, 28 76 Z"
              stroke="#b8a898" strokeWidth="2" fill="rgba(255,253,248,0.8)" strokeLinejoin="round"
            />
            <path d="M50 58 C64 50, 82 54, 88 64" stroke="#b8a898" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M108 40 C122 34, 140 38, 144 50" stroke="#b8a898" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="splash-cloud sc-small sc-right-mid">
          <svg width="160" height="70" viewBox="0 0 160 70" fill="none">
            <path
              d="M18 50 C10 50, 5 42, 9 32 C6 20, 20 12, 34 20 C44 8, 68 6, 82 18 C96 8, 116 12, 120 28 C132 32, 136 46, 124 54 C112 60, 28 60, 18 50 Z"
              stroke="#b8a898" strokeWidth="1.8" fill="rgba(255,253,248,0.74)" strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="splash-cloud sc-tiny sc-bottom-left">
          <svg width="110" height="52" viewBox="0 0 110 52" fill="none">
            <path
              d="M14 38 C8 38, 4 32, 7 24 C5 15, 15 8, 25 14 C32 5, 50 4, 60 12 C70 5, 84 8, 87 20 C95 22, 98 32, 90 38 C82 44, 20 44, 14 38 Z"
              stroke="#b8a898" strokeWidth="1.6" fill="rgba(255,253,248,0.72)" strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="splash-birds sb-group-a">
          <svg width="90" height="40" viewBox="0 0 90 40" fill="none" stroke="#8a7a68" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 18 Q10 11 16 18" />
            <path d="M24 28 Q29 22 34 28" strokeWidth="1.4" />
            <path d="M44 16 Q50 9 56 16" />
            <path d="M64 24 Q68 19 72 24" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="splash-birds sb-group-b">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" stroke="#8a7a68" strokeWidth="1.5" strokeLinecap="round">
            <path d="M4 14 Q9 8 14 14" />
            <path d="M20 22 Q24 17 28 22" strokeWidth="1.2" />
            <path d="M36 12 Q41 7 46 12" />
          </svg>
        </div>
      </div>

      <div className="splash-note-wrap">
        <div className="splash-note">
          <div className="sn-pin sn-pin-tl" />
          <div className="sn-pin sn-pin-tr" />

          <div className="sn-jp-line">
            <svg width="140" height="20" viewBox="0 0 140 20" fill="none">
              <path d="M4 14 C50 8, 100 14, 136 10" stroke="#9b8c78" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 18 C60 12, 110 17, 132 14" stroke="#9b8c78" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 3" />
            </svg>
            <span className="sn-jp-text">ようこそ</span>
          </div>

          <p className="sn-hello">Welcome</p>
          <p className="sn-sub">to Shankar&apos;s Portfolio</p>

          <svg className="sn-divider" width="180" height="14" viewBox="0 0 180 14" fill="none">
            <path d="M4 7 C50 3, 130 10, 176 6" stroke="#9b8c78" strokeWidth="1.8" strokeLinecap="round" />
          </svg>

          <p className="sn-tagline">Crafting AI &amp; Web magic ✦</p>

          <div className="sn-loader">
            <span /><span /><span />
          </div>
        </div>
      </div>

      <div className="splash-ground">
        <svg width="100%" height="60" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
          <path
            d="M0 45 C120 30, 200 52, 360 40 C480 30, 600 50, 720 38 C840 26, 960 48, 1080 36 C1200 24, 1320 46, 1440 34 L1440 60 L0 60 Z"
            fill="rgba(122,155,106,0.22)" stroke="#7a9b6a" strokeWidth="1.8"
          />
          {[...Array(18)].map((_, i) => (
            <g key={i} transform={`translate(${i * 82 + 14}, 43)`}>
              <path d="M0 0 C-2 -10, -1 -16, 0 -20" stroke="#7a9b6a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              <path d="M4 0 C6 -12, 5 -18, 4 -14" stroke="#7a9b6a" strokeWidth="1" strokeLinecap="round" fill="none" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}