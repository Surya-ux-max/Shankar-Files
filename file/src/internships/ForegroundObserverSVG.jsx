export default function ForegroundObserverSVG() {
  return (
    <svg
      className="foreground-observer-svg"
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Hillside */}
        <linearGradient id="hillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8ba876" />
          <stop offset="60%" stopColor="#759360" />
          <stop offset="100%" stopColor="#544432" />
        </linearGradient>
        {/* Foliage */}
        <radialGradient id="leafGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#84cc16" />
          <stop offset="55%" stopColor="#4d7c0f" />
          <stop offset="100%" stopColor="#1e3a09" />
        </radialGradient>
        {/* Shirt: very subtle off-white to give shape */}
        <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#dde4ee" />
        </linearGradient>
        {/* Pants */}
        <linearGradient id="pantsGrad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#2d3a50" />
          <stop offset="50%" stopColor="#1e2b3d" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        {/* Skin tone */}
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d9be" />
          <stop offset="100%" stopColor="#e8c4a0" />
        </linearGradient>
        {/* Hair */}
        <linearGradient id="hairGrad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="60%" stopColor="#111111" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Subtle shadow blur */}
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#18181b" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* ====== HILLSIDE ====== */}
      <path
        d="M 0 460 Q 90 470 150 500 T 270 550 Q 340 590 410 650 L 410 700 L 0 700 Z"
        fill="url(#hillGrad)"
        stroke="#27272a"
        strokeWidth="2.2"
      />
      <path
        d="M 50 540 C 120 540 180 555 240 570 C 310 588 380 625 430 670 L 430 700 L 0 700 L 0 540 Z"
        fill="#baa890"
        stroke="#27272a"
        strokeWidth="2.2"
      />
      {/* Grass tufts */}
      <g stroke="#364925" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M 30 520 L 26 505 M 30 520 L 33 508 M 30 520 L 30 502" />
        <path d="M 75 535 L 71 518 M 75 535 L 79 522" />
        <path d="M 140 558 L 136 543 M 140 558 L 144 547" />
        <path d="M 25 618 L 21 603 M 25 618 L 29 607" />
        <path d="M 90 640 L 86 625 M 90 640 L 94 629" />
      </g>

      {/* ====== WOODEN FENCE ====== */}
      <g strokeLinecap="round">
        <path d="M 0 560 L 460 690" strokeWidth="7" stroke="#5a3d24" />
        <path d="M 0 580 L 440 700" strokeWidth="5" stroke="#48301b" />
        {[
          { x: 10, y1: 520, y2: 600 },
          { x: 65, y1: 534, y2: 620 },
          { x: 126, y1: 550, y2: 645 },
          { x: 196, y1: 570, y2: 671 },
          { x: 276, y1: 595, y2: 700 },
          { x: 368, y1: 626, y2: 700 }
        ].map((p, i) => (
          <line key={i} x1={p.x} y1={p.y1} x2={p.x} y2={p.y2} stroke="#52361e" strokeWidth="8" />
        ))}
      </g>

      {/* ====== SIGNPOST ====== */}
      <g transform="translate(42, 60)" stroke="#27272a">
        <rect x="0" y="0" width="12" height="420" fill="#694b2a" strokeWidth="2" />
        <polygon points="-16,-12 36,-12 30,12 -10,12" fill="#52391e" strokeWidth="2" />
        <g transform="translate(-16, 105)">
          <circle cx="10" cy="-6" r="4.5" fill="none" stroke="#27272a" strokeWidth="2" />
          <circle cx="44" cy="-6" r="4.5" fill="none" stroke="#27272a" strokeWidth="2" />
          <rect x="0" y="0" width="54" height="130" rx="4" fill="#faeed9" stroke="#27272a" strokeWidth="2.2" />
          <line x1="6" y1="10" x2="6" y2="120" stroke="#d5be9f" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="48" y1="10" x2="48" y2="120" stroke="#d5be9f" strokeWidth="1" strokeDasharray="6 8" />
          <text x="27" y="33" textAnchor="middle" fill="#18181b"
            fontFamily="'Space Mono',monospace" fontWeight="700" fontSize="10" letterSpacing="2">PATH</text>
          <text x="27" y="55" textAnchor="middle" fill="#18181b"
            fontFamily="'Space Mono',monospace" fontWeight="700" fontSize="9" letterSpacing="1">TO</text>
          <text x="27" y="77" textAnchor="middle" fill="#18181b"
            fontFamily="'Space Mono',monospace" fontWeight="800" fontSize="10" letterSpacing="1">FUTURE</text>
          <path d="M 27 95 L 27 115 M 21 107 L 27 115 L 33 107"
            stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </g>

      {/* ====== TREE BRANCH & FOLIAGE ====== */}
      <g strokeLinecap="round">
        <path d="M 0 80 Q 50 120 75 180 Q 90 230 85 320" strokeWidth="15" stroke="#422f1c" fill="none" />
        <path d="M 50 120 Q 110 110 162 142 Q 212 162 252 182" strokeWidth="7" stroke="#4d3721" fill="none" />
        <path d="M 108 112 Q 150 68 214 62" strokeWidth="5" stroke="#4d3721" fill="none" />
        {[
          { cx: 72, cy: 88, rx: 26, ry: 23 },
          { cx: 112, cy: 78, rx: 30, ry: 26 },
          { cx: 158, cy: 88, rx: 27, ry: 24 },
          { cx: 198, cy: 72, rx: 24, ry: 21 },
          { cx: 240, cy: 106, rx: 26, ry: 23 },
          { cx: 180, cy: 138, rx: 28, ry: 24 },
          { cx: 224, cy: 153, rx: 25, ry: 22 },
          { cx: 262, cy: 175, rx: 22, ry: 19 },
          { cx: 98, cy: 178, rx: 23, ry: 20 }
        ].map((l, i) => (
          <ellipse key={i} cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry}
            fill="url(#leafGrad)" stroke="#1d2e0b" strokeWidth="1.8" />
        ))}
        {/* Individual accent leaves */}
        <path d="M 180 76 Q 196 64 206 78 Q 194 90 180 76 Z" fill="#65a30d" stroke="#273d10" strokeWidth="1.2" />
        <path d="M 232 140 Q 246 130 254 144 Q 242 154 232 140 Z" fill="#65a30d" stroke="#273d10" strokeWidth="1.2" />
      </g>

      {/* ====== DEVELOPER FIGURE — CLEAN STANDING BACK POSE ====== */}
      {/*
          Proportions based on ~7 heads tall.
          Head centre ≈ (250, 388), radius ≈ 26
          Shoulders ≈ y 432, width 80 (210–290)
          Hips ≈ y 520, width 52
          Feet ground ≈ y 640
      */}
      <g filter="url(#softShadow)">

        {/* Ground shadow ellipse */}
        <ellipse cx="250" cy="644" rx="42" ry="9" fill="rgba(0,0,0,0.20)" />

        {/* ── SHOES (drawn first, lowest layer) ── */}
        {/* Left shoe – slightly turned out */}
        <g stroke="#18181b" strokeWidth="1.6">
          <path d="M 216 630 C 210 628 204 630 200 634 C 197 638 200 644 208 645 C 216 646 228 644 232 640 C 234 636 230 630 224 629 Z"
            fill="#f0f0f0" />
          <path d="M 200 641 C 208 644 222 644 232 640" stroke="#c8cfd8" strokeWidth="2" fill="none" />
          {/* laces */}
          <line x1="212" y1="631" x2="212" y2="638" stroke="#b0b8c4" strokeWidth="1.2" />
          <line x1="218" y1="630" x2="218" y2="637" stroke="#b0b8c4" strokeWidth="1.2" />
          <line x1="224" y1="630" x2="224" y2="637" stroke="#b0b8c4" strokeWidth="1.2" />
          <circle cx="228" cy="636" r="1.8" fill="#2563eb" />
        </g>
        {/* Right shoe */}
        <g stroke="#18181b" strokeWidth="1.6">
          <path d="M 268 630 C 262 628 256 630 252 634 C 249 638 252 644 260 645 C 268 646 280 644 284 640 C 286 636 282 630 276 629 Z"
            fill="#f0f0f0" />
          <path d="M 252 641 C 260 644 274 644 284 640" stroke="#c8cfd8" strokeWidth="2" fill="none" />
          <line x1="262" y1="631" x2="262" y2="638" stroke="#b0b8c4" strokeWidth="1.2" />
          <line x1="268" y1="630" x2="268" y2="637" stroke="#b0b8c4" strokeWidth="1.2" />
          <line x1="274" y1="630" x2="274" y2="637" stroke="#b0b8c4" strokeWidth="1.2" />
          <circle cx="278" cy="636" r="1.8" fill="#2563eb" />
        </g>

        {/* ── LEGS / TROUSERS ── */}
        {/* Left leg */}
        <path
          d="M 222 518
             C 220 550 218 582 214 610
             C 212 622 212 632 216 635
             C 224 636 232 634 234 628
             C 234 614 234 584 234 552
             C 234 536 232 524 228 518 Z"
          fill="url(#pantsGrad)"
          stroke="#18181b"
          strokeWidth="1.6"
        />
        {/* Right leg */}
        <path
          d="M 272 518
             C 274 550 276 582 280 610
             C 282 622 282 632 278 635
             C 270 636 262 634 260 628
             C 260 614 260 584 260 552
             C 260 536 262 524 266 518 Z"
          fill="url(#pantsGrad)"
          stroke="#18181b"
          strokeWidth="1.6"
        />
        {/* Inseam centre join */}
        <line x1="250" y1="520" x2="250" y2="580" stroke="#18181b" strokeWidth="1.4" strokeDasharray="3 4" />
        {/* Subtle knee creases */}
        <path d="M 219 574 Q 228 580 234 575" stroke="#38424f" strokeWidth="1.4" fill="none" />
        <path d="M 260 575 Q 268 580 276 575" stroke="#38424f" strokeWidth="1.4" fill="none" />

        {/* ── TORSO — OVERSIZED WHITE TEE (BACK VIEW) ── */}
        {/*
            Shoulders: 205 → 295 at y=436
            Waist tapers to: 218 → 282 at y=526
            Hem flares slightly: 214 → 286 at y=536 (relaxed boxy fit)
        */}
        <path
          d="M 205 438
             C 200 455 198 480 200 510
             C 204 528 218 534 250 535
             C 282 534 296 528 300 510
             C 302 480 300 455 295 438
             C 278 430 222 430 205 438 Z"
          fill="url(#shirtGrad)"
          stroke="#18181b"
          strokeWidth="2"
        />
        {/* Collar at back of neck */}
        <path d="M 232 432 C 238 438 262 438 268 432"
          stroke="#d0d8e4" strokeWidth="2.2" fill="none" />

        {/* Subtle vertical centre seam */}
        <line x1="250" y1="436" x2="250" y2="530" stroke="#dde4ee" strokeWidth="1.2" strokeDasharray="4 6" />

        {/* Shoulder blade / scapula tension lines */}
        <path d="M 218 452 Q 232 462 246 455" stroke="#d8e2ee" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M 282 452 Q 268 462 254 455" stroke="#d8e2ee" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        {/* Mid-back fabric pull */}
        <path d="M 215 490 Q 250 500 285 490" stroke="#dde4ee" strokeWidth="1.4" fill="none" strokeLinecap="round" />

        {/* ── LEFT SLEEVE + ARM ── */}
        {/* Sleeve */}
        <path
          d="M 205 440
             C 196 448 190 464 188 480
             C 186 492 190 500 198 502
             C 204 503 210 498 212 488
             C 214 472 214 456 212 442 Z"
          fill="url(#shirtGrad)"
          stroke="#18181b"
          strokeWidth="2"
        />
        {/* Sleeve hem crease */}
        <path d="M 188 480 Q 200 484 212 480" stroke="#d0d8e4" strokeWidth="1.4" fill="none" />
        {/* Left forearm (skin) hanging relaxed */}
        <path
          d="M 190 500 C 187 514 186 528 188 542 C 190 548 198 548 200 542 C 202 528 202 514 200 500 Z"
          fill="url(#skinGrad)"
          stroke="#c8a882"
          strokeWidth="1.4"
        />
        {/* Left hand */}
        <ellipse cx="194" cy="545" rx="7" ry="5" fill="url(#skinGrad)" stroke="#c8a882" strokeWidth="1.4" />
        {/* Knuckle suggestion */}
        <path d="M 189 544 Q 194 548 199 544" stroke="#d4b896" strokeWidth="1" fill="none" />

        {/* ── RIGHT SLEEVE + ARM ── */}
        <path
          d="M 295 440
             C 304 448 310 464 312 480
             C 314 492 310 500 302 502
             C 296 503 290 498 288 488
             C 286 472 286 456 288 442 Z"
          fill="url(#shirtGrad)"
          stroke="#18181b"
          strokeWidth="2"
        />
        <path d="M 312 480 Q 300 484 288 480" stroke="#d0d8e4" strokeWidth="1.4" fill="none" />
        {/* Right forearm relaxed at side */}
        <path
          d="M 310 500 C 313 514 314 528 312 542 C 310 548 302 548 300 542 C 298 528 298 514 300 500 Z"
          fill="url(#skinGrad)"
          stroke="#c8a882"
          strokeWidth="1.4"
        />
        {/* Right hand */}
        <ellipse cx="306" cy="545" rx="7" ry="5" fill="url(#skinGrad)" stroke="#c8a882" strokeWidth="1.4" />
        <path d="M 301 544 Q 306 548 311 544" stroke="#d4b896" strokeWidth="1" fill="none" />

        {/* ── NECK ── */}
        <path
          d="M 238 414 L 238 434 C 242 437 258 437 262 434 L 262 414 Z"
          fill="url(#skinGrad)"
          stroke="#c8a882"
          strokeWidth="1.4"
        />

        {/* ── HEAD ── */}
        <ellipse cx="250" cy="396" rx="30" ry="32"
          fill="url(#skinGrad)"
          stroke="#18181b"
          strokeWidth="2"
        />

        {/* ── ANIME HAIRSTYLE — BACK VIEW ── */}
        {/* Base dark cap covering back of skull */}
        <path
          d="M 220 396
             C 218 378 224 362 250 358
             C 276 362 282 378 280 396
             C 278 410 272 418 262 420
             C 256 422 244 422 238 420
             C 228 418 222 410 220 396 Z"
          fill="url(#hairGrad)"
          stroke="#18181b"
          strokeWidth="1.8"
        />
        {/* Crown volume — slight puff on top */}
        <path
          d="M 228 368
             C 230 354 240 346 250 345
             C 260 346 270 354 272 368
             C 268 372 260 370 250 369
             C 240 370 232 372 228 368 Z"
          fill="url(#hairGrad)"
          stroke="#18181b"
          strokeWidth="1.6"
        />
        {/* Side wisps — left */}
        <path d="M 220 390 C 214 384 213 376 218 370 C 222 364 226 362 228 366"
          fill="url(#hairGrad)" stroke="#18181b" strokeWidth="1.6" />
        {/* Side wisps — right */}
        <path d="M 280 390 C 286 384 287 376 282 370 C 278 364 274 362 272 366"
          fill="url(#hairGrad)" stroke="#18181b" strokeWidth="1.6" />
        {/* Nape strands flowing down onto neck */}
        <path d="M 238 420 Q 242 428 242 434" stroke="#18181b" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M 250 422 Q 250 430 250 436" stroke="#18181b" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M 262 420 Q 258 428 258 434" stroke="#18181b" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        {/* Layered strand lines for texture on back of hair */}
        <path d="M 222 398 Q 234 406 248 402" stroke="#2d2d2d" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M 278 398 Q 266 406 252 402" stroke="#2d2d2d" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M 224 384 Q 238 390 250 387" stroke="#2d2d2d" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M 276 384 Q 262 390 250 387" stroke="#2d2d2d" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        {/* Anime gloss sheen on top of hair */}
        <path d="M 236 358 Q 250 352 265 358" stroke="#555" strokeWidth="2.2"
          strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M 240 363 Q 250 358 260 363" stroke="#666" strokeWidth="1.4"
          strokeLinecap="round" fill="none" opacity="0.5" />
      </g>
    </svg>
  )
}
