export default function ForegroundObserverSVG() {
  return (
    <svg
      className="foreground-observer-svg"
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Grassy Hillside Soil Gradient */}
        <linearGradient id="hillSlopeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3b899" />
          <stop offset="60%" stopColor="#8da382" />
          <stop offset="100%" stopColor="#6b5c47" />
        </linearGradient>

        {/* Tree Foliage Shading */}
        <radialGradient id="foliageGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#a3e635" />
          <stop offset="60%" stopColor="#65a30d" />
          <stop offset="100%" stopColor="#365314" />
        </radialGradient>
      </defs>

      {/* ================= 1. HILLSIDE BASE & OVERLOOK TERRACE ================= */}
      {/* Rocky Hillside Bank */}
      <path
        d="M 0 460
           Q 80 470 140 500
           T 260 550
           Q 340 590 400 640
           L 400 700 L 0 700 Z"
        fill="url(#hillSlopeGrad)"
        stroke="#3d3226"
        strokeWidth="2.5"
      />

      {/* Stone Ledge Overlook */}
      <path
        d="M 60 540
           C 120 540 180 555 240 570
           C 310 588 380 625 430 670
           L 430 700 L 0 700 L 0 540 Z"
        fill="#c2b49d"
        stroke="#3d3226"
        strokeWidth="2.2"
      />

      {/* Grass Tufts & Botanical Hatching on Slope */}
      <g stroke="#3f4a2f" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <path d="M 30 520 L 26 505 M 30 520 L 33 508 M 30 520 L 30 502" />
        <path d="M 80 535 L 76 518 M 80 535 L 84 522 M 80 535 L 80 514" />
        <path d="M 140 555 L 136 540 M 140 555 L 144 544" />
        <path d="M 20 620 L 16 605 M 20 620 L 24 608" />
        <path d="M 90 640 L 86 625 M 90 640 L 94 628" />
      </g>

      {/* ================= 2. WOODEN FENCE & RAILING ================= */}
      <g stroke="#423120" strokeWidth="2.4" strokeLinecap="round">
        {/* Horizontal Timber Rails */}
        <path d="M 0 560 L 460 690" strokeWidth="6" stroke="#6b4c2b" />
        <path d="M 0 585 L 440 700" strokeWidth="5" stroke="#543c22" />

        {/* Vertical Fence Posts */}
        {[
          { x: 10, y1: 520, y2: 600 },
          { x: 70, y1: 535, y2: 620 },
          { x: 130, y1: 550, y2: 645 },
          { x: 200, y1: 570, y2: 670 },
          { x: 280, y1: 595, y2: 700 },
          { x: 370, y1: 625, y2: 700 }
        ].map((post, i) => (
          <line
            key={`post-${i}`}
            x1={post.x}
            y1={post.y1}
            x2={post.x}
            y2={post.y2}
            stroke="#5a3f25"
            strokeWidth="7"
          />
        ))}
      </g>

      {/* ================= 3. RUSTIC WOODEN SIGNPOST: 「未来へ」 ================= */}
      {/* Torii-Style Wooden Upright Post */}
      <g transform="translate(42, 60)" stroke="#382918">
        {/* Main Post Trunk */}
        <rect x="0" y="0" width="12" height="420" fill="#694b2a" strokeWidth="2.2" />

        {/* Top Crossbeam */}
        <polygon points="-16,-12 36,-12 30,12 -10,12" fill="#52391e" strokeWidth="2.4" />
        <line x1="-12" y1="12" x2="32" y2="12" strokeWidth="2.2" />

        {/* Hanging Wooden Plaque (The Famous 「未来へ」 Sign) */}
        <g transform="translate(-14, 110)">
          {/* Hanging Ropes */}
          <line x1="8" y1="-28" x2="8" y2="0" stroke="#3d3226" strokeWidth="2.2" />
          <line x1="38" y1="-28" x2="38" y2="0" stroke="#3d3226" strokeWidth="2.2" />

          {/* Wooden Board */}
          <rect
            x="0"
            y="0"
            width="46"
            height="115"
            rx="3"
            fill="#eedcc2"
            stroke="#3d3226"
            strokeWidth="2.4"
          />
          {/* Wood Grain Lines */}
          <line x1="6" y1="10" x2="6" y2="105" stroke="#d5be9f" strokeWidth="1.2" strokeDasharray="6 8" />
          <line x1="40" y1="10" x2="40" y2="105" stroke="#d5be9f" strokeWidth="1.2" strokeDasharray="6 8" />

          {/* Vertical Japanese Calligraphy: 「未」 「来」 「へ」 ("To the Future") */}
          <text
            x="23"
            y="35"
            textAnchor="middle"
            fill="#261b11"
            fontFamily="'Caveat', 'Kalam', cursive"
            fontWeight="800"
            fontSize="26"
          >
            未
          </text>
          <text
            x="23"
            y="67"
            textAnchor="middle"
            fill="#261b11"
            fontFamily="'Caveat', 'Kalam', cursive"
            fontWeight="800"
            fontSize="26"
          >
            来
          </text>
          <text
            x="23"
            y="98"
            textAnchor="middle"
            fill="#261b11"
            fontFamily="'Caveat', 'Kalam', cursive"
            fontWeight="800"
            fontSize="24"
          >
            へ
          </text>
        </g>
      </g>

      {/* ================= 4. OVERARCHING LEAFY TREE BRANCH ================= */}
      {/* Natural Framing Branch on Top-Left */}
      <g stroke="#3b2b1a" strokeLinecap="round">
        {/* Main Trunk & Gnarly Branches */}
        <path
          d="M 0 80 Q 50 120 75 180 Q 90 230 85 320"
          strokeWidth="16"
          stroke="#4e3722"
          fill="none"
        />
        <path
          d="M 50 120 Q 110 110 160 140 Q 210 160 250 180"
          strokeWidth="8"
          stroke="#5a4028"
          fill="none"
        />
        <path
          d="M 120 125 Q 160 70 210 65"
          strokeWidth="6"
          stroke="#5a4028"
          fill="none"
        />

        {/* Clustered Watercolor Foliage Leaves */}
        {[
          { cx: 70, cy: 90, r: 24 },
          { cx: 110, cy: 80, r: 28 },
          { cx: 155, cy: 90, r: 26 },
          { cx: 195, cy: 75, r: 22 },
          { cx: 235, cy: 110, r: 24 },
          { cx: 175, cy: 140, r: 26 },
          { cx: 220, cy: 155, r: 24 },
          { cx: 260, cy: 175, r: 20 },
          { cx: 95, cy: 180, r: 22 },
          { cx: 80, cy: 230, r: 20 }
        ].map((leaf, i) => (
          <ellipse
            key={`lf-${i}`}
            cx={leaf.cx}
            cy={leaf.cy}
            rx={leaf.r}
            ry={leaf.r * 0.9}
            fill="url(#foliageGrad)"
            stroke="#273d10"
            strokeWidth="1.8"
          />
        ))}

        {/* Delicate individual leaf outlines */}
        <g stroke="#263810" strokeWidth="1.3" fill="#84cc16" opacity="0.9">
          <path d="M 180 80 Q 192 70 200 80 Q 190 90 180 80 Z" />
          <path d="M 230 140 Q 242 130 250 140 Q 240 150 230 140 Z" />
          <path d="M 130 120 Q 140 108 150 120 Q 140 130 130 120 Z" />
        </g>
      </g>

      {/* ================= 5. THE SEATED OBSERVER (ENGINEER / STUDENT) ================= */}
      {/* Positioned on the stone ledge gazing out towards the corporate towers */}
      <g className="metropolis-observer-figure" transform="translate(140, 380)">
        {/* Backpack on Back */}
        <g transform="translate(0, 70)" stroke="#18181b" strokeWidth="2.2">
          {/* Main Pack Body */}
          <path
            d="M 10 15 C 5 25, 0 50, 5 85 C 10 110, 45 110, 55 95 C 62 80, 60 30, 45 15 Z"
            fill="#374151"
          />
          {/* Backpack Straps & Zippers */}
          <path d="M 20 30 L 45 30" stroke="#9ca3af" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M 15 55 L 50 55" stroke="#9ca3af" strokeWidth="2" strokeDasharray="3 2" />
          {/* Lower Accessory Pocket */}
          <rect x="12" y="65" width="38" height="28" rx="4" fill="#1f2937" />
          <line x1="16" y1="78" x2="46" y2="78" stroke="#9ca3af" strokeWidth="1.5" />
        </g>

        {/* Casual White T-Shirt Body (Torso leaning slightly forward in contemplation) */}
        <g stroke="#18181b" strokeWidth="2.4">
          <path
            d="M 40 50
               C 35 70, 38 100, 48 125
               C 65 130, 105 130, 115 115
               C 120 90, 115 65, 100 50
               Z"
            fill="#f9fafb"
          />
          {/* Shirt Creases & Folds */}
          <path d="M 55 75 Q 75 90 95 80" stroke="#d1d5db" strokeWidth="1.8" fill="none" />
          <path d="M 50 100 Q 70 110 90 105" stroke="#d1d5db" strokeWidth="1.8" fill="none" />
        </g>

        {/* Head, Hair, & Dark Sunglasses */}
        <g stroke="#18181b" strokeWidth="2.2">
          {/* Neck */}
          <rect x="75" y="38" width="16" height="18" fill="#e5c3a3" />

          {/* Head / Face Profile (Looking right towards Zoho & Infosys) */}
          <path
            d="M 72 20
               C 70 10, 85 5, 96 10
               C 105 14, 112 25, 106 38
               C 100 45, 85 45, 76 40
               Z"
            fill="#edd0b4"
          />

          {/* Ruffled Stylized Dark Hair */}
          <path
            d="M 68 22
               C 65 10, 75 0, 92 0
               C 105 0, 112 8, 114 18
               C 112 22, 108 20, 105 16
               C 100 12, 85 8, 76 16
               C 70 20, 68 28, 68 22 Z"
            fill="#1e293b"
          />
          <path d="M 72 6 C 80 0, 90 2, 95 6" stroke="#0f172a" strokeWidth="2" fill="none" />

          {/* Cool Dark Sunglasses */}
          <path
            d="M 94 22 L 108 22 L 106 28 L 93 27 Z"
            fill="#09090b"
            stroke="#09090b"
          />
          {/* Sunglasses Sheen Glint */}
          <line x1="97" y1="23" x2="103" y2="27" stroke="#ffffff" strokeWidth="1" />
        </g>

        {/* Right Arm Resting on Knee */}
        <g stroke="#18181b" strokeWidth="2.4">
          <path
            d="M 95 60
               C 115 75, 128 95, 132 120
               C 125 125, 115 125, 110 115
               C 105 95, 92 80, 85 68 Z"
            fill="#f9fafb"
          />
          {/* Forearm */}
          <path
            d="M 125 115 L 140 145 C 135 150, 126 150, 120 142 L 110 120 Z"
            fill="#edd0b4"
          />
          {/* Hand draped over knee */}
          <ellipse cx="140" cy="148" rx="8" ry="6" fill="#edd0b4" />
        </g>

        {/* Legs & Dark Trousers */}
        <g stroke="#18181b" strokeWidth="2.4">
          {/* Right Leg (Raised bent knee) */}
          <path
            d="M 90 120
               C 105 110, 135 115, 145 145
               C 145 175, 135 205, 130 220
               C 120 220, 115 210, 118 190
               C 120 165, 105 145, 85 135 Z"
            fill="#334155"
          />
          {/* Left Leg (Lower resting leg) */}
          <path
            d="M 55 125
               C 70 140, 85 175, 92 210
               C 80 215, 72 210, 68 190
               C 62 165, 52 145, 45 130 Z"
            fill="#1e293b"
          />
        </g>

        {/* Crisp White Sneakers */}
        <g stroke="#18181b" strokeWidth="2.2">
          {/* Raised Right Foot Sneaker */}
          <path
            d="M 124 218
               C 128 215, 142 216, 154 224
               C 158 228, 156 235, 144 236
               C 130 236, 120 230, 122 220 Z"
            fill="#ffffff"
          />
          <line x1="126" y1="233" x2="152" y2="233" stroke="#cbd5e1" strokeWidth="1.6" />
          <path d="M 134 220 L 138 226" stroke="#94a3b8" strokeWidth="1.4" />

          {/* Lower Left Foot Sneaker */}
          <path
            d="M 86 210
               C 92 206, 106 208, 116 216
               C 120 220, 118 226, 108 227
               C 95 227, 85 222, 86 212 Z"
            fill="#ffffff"
          />
          <line x1="88" y1="224" x2="114" y2="224" stroke="#cbd5e1" strokeWidth="1.6" />
        </g>
      </g>
    </svg>
  )
}
