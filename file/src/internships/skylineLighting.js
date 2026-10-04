/**
 * skylineLighting.js
 * Computes color interpolations, sun/moon celestial trajectories,
 * window illumination opacities, and cloud color states for the
 * interactive Day-Night roll lever.
 */

// Helper to interpolate between two hex colors
function lerpHex(color1, color2, factor) {
  const f = Math.max(0, Math.min(1, factor))
  const c1 = parseInt(color1.replace('#', ''), 16)
  const c2 = parseInt(color2.replace('#', ''), 16)

  const r1 = (c1 >> 16) & 255
  const g1 = (c1 >> 8) & 255
  const b1 = c1 & 255

  const r2 = (c2 >> 16) & 255
  const g2 = (c2 >> 8) & 255
  const b2 = c2 & 255

  const r = Math.round(r1 + (r2 - r1) * f)
  const g = Math.round(g1 + (g2 - g1) * f)
  const b = Math.round(b1 + (b2 - b1) * f)

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

export function getLightingState(t = 0.25) {
  // Clamp t to [0, 1]
  const time = Math.max(0, Math.min(1, t))

  // Key phases:
  // 0.00 - 0.15: Dawn
  // 0.15 - 0.55: Day / Noon
  // 0.55 - 0.78: Sunset / Golden Hour
  // 0.78 - 0.88: Twilight / Dusk
  // 0.88 - 1.00: Deep Starry Night

  // Factors:
  let dayFactor = 0
  let sunsetFactor = 0
  let nightFactor = 0

  if (time <= 0.5) {
    dayFactor = 1
    sunsetFactor = 0
    nightFactor = 0
  } else if (time <= 0.78) {
    const f = (time - 0.5) / 0.28
    dayFactor = 1 - f
    sunsetFactor = Math.sin(f * Math.PI) * 1.2
    nightFactor = Math.max(0, (f - 0.5) * 2)
  } else {
    dayFactor = 0
    sunsetFactor = Math.max(0, (0.88 - time) / 0.1)
    nightFactor = Math.min(1, (time - 0.72) / 0.22)
  }

  // --- CELESTIAL SUN & MOON ---
  // Sun travels from left horizon (dawn) -> high noon -> right horizon (sunset)
  let sunX = 250 + time * 1100
  let sunY = 380 - Math.sin(Math.min(1, time / 0.75) * Math.PI) * 290
  let sunOpacity = time < 0.76 ? 1 : Math.max(0, 1 - (time - 0.76) / 0.08)

  // Moon rises as sun sets, travels to upper right sky
  let moonX = 1180 - (time - 0.65) * 220
  let moonY = 360 - Math.sin(Math.max(0, (time - 0.65) / 0.35) * Math.PI * 0.7) * 240
  let moonOpacity = time < 0.65 ? 0 : Math.min(1, (time - 0.65) / 0.15)

  // --- SKY GRADIENT STOPS ---
  // Day Sky: Crisp warm azure parchment
  // Sunset Sky: Deep purple, crimson, golden flame
  // Night Sky: Deep obsidian midnight navy
  let skyTop, skyMid, skyBottom
  if (time <= 0.5) {
    const morningBlend = time / 0.5
    skyTop = lerpHex('#f5dfc6', '#93c5fd', morningBlend * 0.6)
    skyMid = lerpHex('#faefe0', '#e0f2fe', morningBlend * 0.5)
    skyBottom = lerpHex('#fef7ec', '#f8fafc', morningBlend * 0.4)
  } else if (time <= 0.78) {
    const sBlend = (time - 0.5) / 0.28
    skyTop = lerpHex('#93c5fd', '#311042', sBlend)
    skyMid = lerpHex('#e0f2fe', '#c2410c', sBlend)
    skyBottom = lerpHex('#f8fafc', '#f59e0b', sBlend)
  } else {
    const nBlend = (time - 0.78) / 0.22
    skyTop = lerpHex('#311042', '#050814', nBlend)
    skyMid = lerpHex('#c2410c', '#0a1226', nBlend)
    skyBottom = lerpHex('#f59e0b', '#121e3d', nBlend)
  }

  // --- RIVER GRADIENT ---
  let riverStart, riverMid, riverEnd
  if (time <= 0.5) {
    riverStart = '#8fb8be'
    riverMid = '#afd3d8'
    riverEnd = '#8fb8be'
  } else if (time <= 0.78) {
    const sf = (time - 0.5) / 0.28
    riverStart = lerpHex('#8fb8be', '#7c2d12', sf * 0.8)
    riverMid = lerpHex('#afd3d8', '#b45309', sf * 0.7)
    riverEnd = lerpHex('#8fb8be', '#9a3412', sf * 0.8)
  } else {
    const nf = (time - 0.78) / 0.22
    riverStart = lerpHex('#7c2d12', '#070f22', nf)
    riverMid = lerpHex('#b45309', '#0d1d3d', nf)
    riverEnd = lerpHex('#9a3412', '#081226', nf)
  }

  // --- MOUNTAIN RIDGES & DISTANT SILHOUETTES ---
  const mountain1 = time < 0.7
    ? lerpHex('#e5dac7', '#7c2d12', (time - 0.4) / 0.35)
    : lerpHex('#7c2d12', '#0b1326', (time - 0.7) / 0.3)

  const mountain2 = time < 0.7
    ? lerpHex('#ded1bd', '#5c2210', (time - 0.4) / 0.35)
    : lerpHex('#5c2210', '#080e1d', (time - 0.7) / 0.3)

  // --- CITY BUILDING FACADES ---
  const distantCityFill = time < 0.65
    ? lerpHex('#dfd6c4', '#6b3627', (time - 0.3) / 0.35)
    : lerpHex('#6b3627', '#0f172a', (time - 0.65) / 0.35)

  const midCityFill = time < 0.65
    ? lerpHex('#ede4d2', '#834130', (time - 0.3) / 0.35)
    : lerpHex('#834130', '#131e36', (time - 0.65) / 0.35)

  // --- TOWER GLASS FACADES ---
  // Zoho glass
  const zohoGlass0 = time < 0.7
    ? lerpHex('#d1e8ee', '#fed7aa', sunsetFactor * 0.7)
    : lerpHex('#fed7aa', '#0f1f38', nightFactor)

  const zohoGlass50 = time < 0.7
    ? lerpHex('#eaf4f7', '#ffedd5', sunsetFactor * 0.7)
    : lerpHex('#ffedd5', '#162b4d', nightFactor)

  // Infosys glass
  const infosysGlass0 = time < 0.7
    ? lerpHex('#c9e2ee', '#fbcfe8', sunsetFactor * 0.7)
    : lerpHex('#fbcfe8', '#0c223f', nightFactor)

  const infosysGlass50 = time < 0.7
    ? lerpHex('#e3f0f7', '#fdf2f8', sunsetFactor * 0.7)
    : lerpHex('#fdf2f8', '#112f54', nightFactor)

  // --- WINDOW ILLUMINATION & STREETLIGHTS ---
  // Lights begin clicking on at sunset (0.68) and shine brilliantly at night
  const windowLightOpacity = time < 0.65 ? 0 : Math.min(1, (time - 0.65) / 0.22)
  const streetlampGlowOpacity = time < 0.68 ? 0 : Math.min(1, (time - 0.68) / 0.18)

  // --- CLOUD TINTS ---
  const cloudFill = time < 0.55
    ? '#ffffff'
    : time < 0.78
    ? lerpHex('#ffffff', '#f472b6', (time - 0.55) / 0.23)
    : lerpHex('#f472b6', '#334155', (time - 0.78) / 0.22)

  const cloudOpacity = time < 0.55 ? 0.85 : time < 0.78 ? 0.95 : 0.7

  return {
    time,
    dayFactor,
    sunsetFactor,
    nightFactor,
    sunX,
    sunY,
    sunOpacity,
    moonX,
    moonY,
    moonOpacity,
    skyTop,
    skyMid,
    skyBottom,
    riverStart,
    riverMid,
    riverEnd,
    mountain1,
    mountain2,
    distantCityFill,
    midCityFill,
    zohoGlass0,
    zohoGlass50,
    infosysGlass0,
    infosysGlass50,
    windowLightOpacity,
    streetlampGlowOpacity,
    cloudFill,
    cloudOpacity
  }
}
