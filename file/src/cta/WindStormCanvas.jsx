import { useEffect, useRef, useState } from 'react'

/**
 * WindStormCanvas
 * Realistic visual simulation of:
 * 1. Breezy sandy dust particles blowing horizontally from left to right.
 * 2. Fluttering botanical leaves tumbling and lofting in the gale.
 * 3. A dynamic "Storm Pool" (vortex / swirling whirlpool) that captures passing particles
 *    and leaves into a spiraling eddy before releasing them eastward.
 */
export default function WindStormCanvas() {
  const canvasRef = useRef(null)
  const [isStirring, setIsStirring] = useState(false)
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = 0
    let height = 0
    let dpr = window.devicePixelRatio || 1

    // Storm Pool Center & Dynamics
    const stormPool = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      radius: 190,
      rotation: 0,
      strength: 3.2,
      pulse: 0,
    }

    // Leaf Color Palettes (warm watercolor ink & botanical tones)
    const leafPalettes = [
      { fill: '#607949', stroke: '#3b4f2c', vein: '#819e65' }, // Sage green
      { fill: '#c97a2b', stroke: '#8c4b10', vein: '#e89e52' }, // Golden ochre
      { fill: '#a8432b', stroke: '#6e2311', vein: '#cf664c' }, // Russet crimson
      { fill: '#8f7d3d', stroke: '#574a1f', vein: '#b8a65f' }, // Olive gold
      { fill: '#d99b43', stroke: '#96631b', vein: '#f2bd6b' }, // Amber
    ]

    // Sand Dust Particles
    const SAND_COUNT = 140
    const sandParticles = []

    // Flowing Botanical Leaves
    const LEAF_COUNT = 40
    const leaves = []

    // Streamline wind streaks
    const STREAK_COUNT = 14
    const windStreaks = []

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Place default storm pool towards the right-center
      stormPool.x = width * 0.68
      stormPool.y = height * 0.48
      stormPool.targetX = stormPool.x
      stormPool.targetY = stormPool.y
      stormPool.radius = Math.min(width * 0.28, 220)
    }

    resize()
    window.addEventListener('resize', resize)

    // Helper: Random in range
    const rand = (min, max) => min + Math.random() * (max - min)

    // Spawn / Reset a sand particle
    const initSand = (p, fromLeft = false) => {
      p.x = fromLeft ? rand(-40, -5) : rand(0, width)
      p.y = rand(0, height)
      p.vx = rand(2.2, 5.2)
      p.vy = rand(-0.4, 0.4)
      p.size = rand(1.2, 3.2)
      p.alpha = rand(0.25, 0.65)
      p.waveOffset = rand(0, Math.PI * 2)
      p.waveSpeed = rand(0.02, 0.05)
      p.color = rand(0, 1) > 0.5 ? 'rgba(194, 120, 53,' : 'rgba(217, 119, 6,'
    }

    for (let i = 0; i < SAND_COUNT; i++) {
      const p = {}
      initSand(p, false)
      sandParticles.push(p)
    }

    // Spawn / Reset a flowing leaf
    const initLeaf = (l, fromLeft = false) => {
      l.x = fromLeft ? rand(-80, -20) : rand(-60, width)
      l.y = rand(10, height - 10)
      l.vx = rand(2.0, 4.4)
      l.vy = rand(-0.6, 0.6)
      l.size = rand(11, 22)
      l.angle = rand(0, Math.PI * 2)
      l.spin = rand(-0.04, 0.04)
      l.flip = rand(0, Math.PI * 2)
      l.flipSpeed = rand(0.03, 0.08)
      l.wavePhase = rand(0, Math.PI * 2)
      l.waveFreq = rand(0.015, 0.035)
      l.palette = leafPalettes[Math.floor(Math.random() * leafPalettes.length)]
      l.type = Math.floor(Math.random() * 3) // 0: ovate, 1: lanceolate, 2: lobed
      l.alpha = rand(0.7, 0.95)
      l.trappedInPool = false
    }

    for (let i = 0; i < LEAF_COUNT; i++) {
      const l = {}
      initLeaf(l, false)
      leaves.push(l)
    }

    // Spawn wind streaks
    for (let i = 0; i < STREAK_COUNT; i++) {
      windStreaks.push({
        x: rand(-200, width),
        y: rand(20, height - 20),
        len: rand(60, 180),
        speed: rand(4.0, 7.5),
        alpha: rand(0.08, 0.22),
        wave: rand(0, Math.PI * 2),
      })
    }

    let time = 0

    // Animation Loop
    const render = () => {
      time += 0.018
      ctx.clearRect(0, 0, width, height)

      // 1. Gently nudge storm pool position (organic breathing + slight mouse interaction)
      if (mouseRef.current.active) {
        stormPool.x += (mouseRef.current.x - stormPool.x) * 0.02
        stormPool.y += (mouseRef.current.y - stormPool.y) * 0.02
      } else {
        const idleX = width * 0.68 + Math.cos(time * 0.6) * 24
        const idleY = height * 0.48 + Math.sin(time * 0.8) * 18
        stormPool.x += (idleX - stormPool.x) * 0.03
        stormPool.y += (idleY - stormPool.y) * 0.03
      }

      stormPool.rotation += 0.035
      stormPool.pulse = Math.sin(time * 1.5) * 8

      // ================= DRAW STORM POOL VORTEX (Background Layer) =================
      drawStormPool(ctx, stormPool)

      // ================= DRAW WIND STREAKS (Left to Right) =================
      ctx.lineWidth = 1.2
      for (let i = 0; i < windStreaks.length; i++) {
        const s = windStreaks[i]
        s.x += s.speed
        s.wave += 0.02

        // Reset if off-screen to the right
        if (s.x > width + s.len) {
          s.x = -s.len - rand(20, 120)
          s.y = rand(20, height - 20)
          s.speed = rand(4.0, 7.5)
        }

        const startY = s.y + Math.sin(s.wave) * 6
        const endY = s.y + Math.sin(s.wave + 0.6) * 6

        ctx.strokeStyle = `rgba(180, 130, 70, ${s.alpha})`
        ctx.beginPath()
        ctx.moveTo(s.x, startY)
        ctx.quadraticCurveTo(s.x + s.len * 0.5, startY + 4, s.x + s.len, endY)
        ctx.stroke()
      }

      // ================= SIMULATE & DRAW SAND PARTICLES =================
      for (let i = 0; i < sandParticles.length; i++) {
        const p = sandParticles[i]

        // Check distance to storm pool center
        const dx = p.x - stormPool.x
        const dy = p.y - stormPool.y
        const dist = Math.hypot(dx, dy)

        if (dist < stormPool.radius) {
          // Inside storm pool: tangential rotation + suction + release boost
          const angle = Math.atan2(dy, dx)
          const tangentialSpeed = (stormPool.strength * 45) / (dist + 30)
          const radialSpeed = -1.2 * (1 - dist / stormPool.radius)

          // Tangential vector (counter-clockwise)
          p.x += -Math.sin(angle) * tangentialSpeed + Math.cos(angle) * radialSpeed + 1.2
          p.y += Math.cos(angle) * tangentialSpeed + Math.sin(angle) * radialSpeed

          // Eject eastward when orbiting near front
          if (dx > 30 && Math.random() < 0.04) {
            p.vx = rand(5.0, 8.5)
          }
        } else {
          // Normal left-to-right breezy drift
          p.waveOffset += p.waveSpeed
          p.x += p.vx
          p.y += p.vy + Math.sin(p.waveOffset) * 0.6
        }

        // Reset if moved past the right edge or bounds
        if (p.x > width + 20 || p.y < -30 || p.y > height + 30) {
          initSand(p, true)
        }

        // Draw sand particle with slight speed streak
        ctx.fillStyle = `${p.color} ${p.alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2)
        ctx.fill()

        // Short sand motion streak
        ctx.strokeStyle = `${p.color} ${p.alpha * 0.4})`
        ctx.lineWidth = p.size * 0.6
        ctx.beginPath()
        ctx.moveTo(p.x - p.vx * 2, p.y)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()
      }

      // ================= SIMULATE & DRAW FLOWING LEAVES =================
      for (let i = 0; i < leaves.length; i++) {
        const l = leaves[i]

        // Check interaction with storm pool
        const dx = l.x - stormPool.x
        const dy = l.y - stormPool.y
        const dist = Math.hypot(dx, dy)

        if (dist < stormPool.radius * 1.05) {
          // Caught in the storm pool vortex!
          l.trappedInPool = true
          const angle = Math.atan2(dy, dx)
          const tangentialSpeed = (stormPool.strength * 48) / (dist + 40)
          const radialSpeed = -1.5 * (1 - dist / (stormPool.radius * 1.05))

          l.x += -Math.sin(angle) * tangentialSpeed + Math.cos(angle) * radialSpeed + 1.4
          l.y += Math.cos(angle) * tangentialSpeed + Math.sin(angle) * radialSpeed

          l.angle += 0.08
          l.flip += 0.12

          // Eject from storm pool toward right with wind burst
          if (dx > 35 && (dist < 40 || Math.random() < 0.035)) {
            l.trappedInPool = false
            l.vx = rand(4.5, 7.8)
            l.vy = rand(-1.2, 1.2)
          }
        } else {
          l.trappedInPool = false
          l.wavePhase += l.waveFreq
          l.x += l.vx
          l.y += l.vy + Math.sin(l.wavePhase) * 1.1

          l.angle += l.spin
          l.flip += l.flipSpeed
        }

        // Reset if drifted past right boundary or vertically out
        if (l.x > width + 60 || l.y < -60 || l.y > height + 60) {
          initLeaf(l, true)
        }

        // Render botanical leaf
        drawLeaf(ctx, l)
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Mouse Handlers for Interactivity
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    }
    setIsStirring(true)
  }

  const handleMouseLeave = () => {
    mouseRef.current.active = false
    setIsStirring(false)
  }

  return (
    <div
      className={`wind-storm-canvas-container ${isStirring ? 'is-stirring' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="wind-storm-canvas" />

      {/* Atmospheric Hint Badge */}
      <div className="storm-pool-badge">
        <span className="storm-dot" />
        <span className="storm-text">VORTEX STORM POOL · BREEZY SAND &amp; LEAF DRIFT</span>
      </div>
    </div>
  )
}

/**
 * Draws the "Storm Pool" (Swirling Vortex / Sand Whirlpool)
 * Rendered using delicate spiraling ribbons, concentric ink arcs, and eddy dust.
 */
function drawStormPool(ctx, pool) {
  const { x, y, radius, rotation, pulse } = pool
  const effectiveR = radius + pulse

  ctx.save()
  ctx.translate(x, y)

  // 1. Soft radial background sand wash
  const grad = ctx.createRadialGradient(0, 0, 10, 0, 0, effectiveR * 1.1)
  grad.addColorStop(0, 'rgba(217, 119, 6, 0.16)')
  grad.addColorStop(0.45, 'rgba(194, 120, 53, 0.10)')
  grad.addColorStop(0.85, 'rgba(168, 100, 35, 0.03)')
  grad.addColorStop(1, 'rgba(255, 255, 255, 0)')

  ctx.fillStyle = grad
  ctx.beginPath()
  ctx.arc(0, 0, effectiveR * 1.1, 0, Math.PI * 2)
  ctx.fill()

  // 2. Swirling spiral streamlines (6 concentric vortex arms)
  const armCount = 6
  ctx.rotate(rotation)

  for (let a = 0; a < armCount; a++) {
    const armAngle = (a * (Math.PI * 2)) / armCount
    ctx.beginPath()

    // Archimedean spiral arc
    for (let theta = 0; theta < Math.PI * 2.2; theta += 0.14) {
      const r = (theta / (Math.PI * 2.2)) * effectiveR
      const px = Math.cos(theta + armAngle) * r
      const py = Math.sin(theta + armAngle) * (r * 0.72) // Flatten slightly for 3D ground perspective

      if (theta === 0) {
        ctx.moveTo(px, py)
      } else {
        ctx.lineTo(px, py)
      }
    }

    ctx.strokeStyle = `rgba(180, 110, 45, ${0.12 + (a % 2) * 0.08})`
    ctx.lineWidth = 1.6 - (a % 2) * 0.4
    ctx.stroke()
  }

  // 3. Central Eye of the Storm Pool
  ctx.beginPath()
  ctx.arc(0, 0, 14, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(168, 90, 25, 0.22)'
  ctx.fill()

  ctx.beginPath()
  ctx.arc(0, 0, 6, 0, Math.PI * 2)
  ctx.fillStyle = '#9c5a24'
  ctx.fill()

  // 4. Outer eddy boundary ink sketch ring (hand-drafted aesthetic)
  ctx.strokeStyle = 'rgba(140, 85, 30, 0.18)'
  ctx.lineWidth = 1.2
  ctx.setLineDash([8, 10])
  ctx.beginPath()
  ctx.ellipse(0, 0, effectiveR * 0.95, effectiveR * 0.68, 0, 0, Math.PI * 2)
  ctx.stroke()
  ctx.setLineDash([])

  ctx.restore()
}

/**
 * Draws a Botanical Leaf with 3D tumbling (rotation + scale flip)
 */
function drawLeaf(ctx, leaf) {
  const { x, y, size, angle, flip, palette, type, alpha } = leaf

  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(angle)

  // 3D tumbling illusion along horizontal axis
  const flipScale = Math.cos(flip)
  ctx.scale(1, flipScale)

  ctx.globalAlpha = alpha

  ctx.fillStyle = palette.fill
  ctx.strokeStyle = palette.stroke
  ctx.lineWidth = 1.0

  const s = size

  if (type === 0) {
    // Ovate leaf (classic almond / birch leaf)
    ctx.beginPath()
    ctx.moveTo(-s * 0.8, 0)
    ctx.bezierCurveTo(-s * 0.3, -s * 0.55, s * 0.4, -s * 0.45, s * 0.9, 0)
    ctx.bezierCurveTo(s * 0.4, s * 0.45, -s * 0.3, s * 0.55, -s * 0.8, 0)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    // Central vein
    ctx.strokeStyle = palette.vein
    ctx.lineWidth = 0.8
    ctx.beginPath()
    ctx.moveTo(-s * 0.7, 0)
    ctx.lineTo(s * 0.75, 0)
    ctx.stroke()
  } else if (type === 1) {
    // Lanceolate / Willow leaf (slender, curved)
    ctx.beginPath()
    ctx.moveTo(-s * 1.0, 0)
    ctx.quadraticCurveTo(0, -s * 0.32, s * 1.0, 0)
    ctx.quadraticCurveTo(0, s * 0.32, -s * 1.0, 0)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    ctx.strokeStyle = palette.vein
    ctx.lineWidth = 0.7
    ctx.beginPath()
    ctx.moveTo(-s * 0.9, 0)
    ctx.lineTo(s * 0.85, 0)
    ctx.stroke()
  } else {
    // Lobed / Maple style leaf outline
    ctx.beginPath()
    ctx.moveTo(-s * 0.7, 0)
    ctx.quadraticCurveTo(-s * 0.3, -s * 0.35, -s * 0.2, -s * 0.6)
    ctx.quadraticCurveTo(s * 0.2, -s * 0.5, s * 0.8, 0)
    ctx.quadraticCurveTo(s * 0.2, s * 0.5, -s * 0.2, s * 0.6)
    ctx.quadraticCurveTo(-s * 0.3, s * 0.35, -s * 0.7, 0)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    // Branching veins
    ctx.strokeStyle = palette.vein
    ctx.lineWidth = 0.7
    ctx.beginPath()
    ctx.moveTo(-s * 0.6, 0)
    ctx.lineTo(s * 0.7, 0)
    ctx.moveTo(-s * 0.1, 0)
    ctx.lineTo(0.1 * s, -0.3 * s)
    ctx.moveTo(-s * 0.1, 0)
    ctx.lineTo(0.1 * s, 0.3 * s)
    ctx.stroke()
  }

  // Small delicate stem
  ctx.strokeStyle = palette.stroke
  ctx.lineWidth = 1.0
  ctx.beginPath()
  ctx.moveTo(-s * 0.75, 0)
  ctx.lineTo(-s * 0.98, s * 0.1)
  ctx.stroke()

  ctx.restore()
}
