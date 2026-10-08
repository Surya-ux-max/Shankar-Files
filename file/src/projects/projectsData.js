/**
 * Featured Engineering Projects Data
 * Mountain Summit Architecture & Deep Technical Specifications
 */

export const PROJECTS_DATA = [
  {
    id: 'locus',
    num: '01',
    title: 'LOCUS',
    tagline: 'On-Device GNSS Integrity & Multi-Modal Local Intelligence',
    category: 'Autonomous Positioning & Edge AI',
    status: 'PRODUCTION READY',
    peakName: 'Summit Locus (4,810m)',
    peakCoord: { x: 230, y: 220 }, // Location on panoramic mountain SVG
    beaconCoord: { x: 230, y: 200 },
    cardPosition: 'bottom-left',
    elevation: '4,810m · Western Ridge',
    summary:
      'On-device GNSS integrity monitoring system using 7 physics consistency checks across GNSS, satellite C/N0, IMU, barometric, and network signals to classify positioning as TRUSTED / DEGRADED / DENIED / RECOVERING.',
    details: [
      'Engineered 7 concurrent physics consistency check algorithms validating satellite ephemeris, Doppler shift, and IMU dead-reckoning vectors.',
      'Classifies positioning integrity in real-time across four discrete trust domains: TRUSTED, DEGRADED, DENIED, and RECOVERING.',
      'Integrated Qwen3, Whisper, and all-mpnet-base-v2 directly on-device using ExecuTorch for zero-cloud latency.',
      'Enables natural language incident explanation, hands-free voice commands, and offline semantic log search.'
    ],
    techStack: [
      'Android',
      'Kotlin',
      'TypeScript',
      'ExecuTorch',
      'GNSS',
      'IMU',
      'Qwen3',
      'Whisper',
      'all-mpnet-base-v2'
    ],
    metrics: [
      { label: 'Integrity Checks', value: '7 Physics Models' },
      { label: 'On-Device Models', value: 'Qwen3 + Whisper' },
      { label: 'Inference Engine', value: 'ExecuTorch Local' },
      { label: 'Latency', value: '<12ms On-Chip' }
    ],
    accentColor: '#38bdf8', // Glacier Ice Blue
    summitType: 'Sharp Glacier Horn'
  },
  {
    id: 'drake',
    num: '02',
    title: 'DRAKE',
    tagline: 'Schema-Aware API Dependency Graph & Security Guardrails',
    category: 'Distributed Systems & Static Analysis',
    status: 'ENTERPRISE DEPLOYED',
    peakName: 'Drake Needle (5,260m)',
    peakCoord: { x: 550, y: 150 }, // Grand central summit
    beaconCoord: { x: 550, y: 130 },
    cardPosition: 'top-center',
    elevation: '5,260m · Central Pinnacle',
    summary:
      'Schema-aware API dependency analysis platform using Tarjan’s Strongly Connected Components (SCC) and topological sorting to model complex dependencies across API operations.',
    details: [
      'Modeled end-to-end distributed API dependencies into directed acyclic graphs utilizing Tarjan’s SCC algorithm and topological sorting.',
      'Built high-throughput FastAPI and Model Context Protocol (MCP) services with live hot-reloading.',
      'Implemented real-time regex security guardrails and semantic dependency embeddings achieving 97.5% vulnerability blocking.',
      'Maintained sub-5ms policy enforcement latency across high-velocity microservice topologies.'
    ],
    techStack: [
      'Python',
      'FastAPI',
      'MCP',
      'OpenAPI',
      'NetworkX',
      'Sentence-Transformers',
      'SQLite'
    ],
    metrics: [
      { label: 'Graph Algorithm', value: "Tarjan's SCC" },
      { label: 'Blocking Accuracy', value: '97.5% Guardrail' },
      { label: 'Analysis Latency', value: '<5ms Round-Trip' },
      { label: 'Protocol', value: 'FastAPI / MCP' }
    ],
    accentColor: '#fbbf24', // Sunset Gold Summit
    summitType: 'Jagged Alpine Pyramid'
  },
  {
    id: 'hiremind',
    num: '03',
    title: 'HIREMIND',
    tagline: 'High-Concurrency Multi-Tenant Autonomous Recruitment Engine',
    category: 'Full-Stack Platform & AI Orchestration',
    status: 'PRODUCTION SCALE',
    peakName: 'Mount Hiremind (4,940m)',
    peakCoord: { x: 880, y: 175 }, // Eastern massif
    beaconCoord: { x: 880, y: 155 },
    cardPosition: 'bottom-center',
    elevation: '4,940m · Eastern Massif',
    summary:
      'Multi-tenant recruitment platform covering resume screening, technical assessments, interview workflows, and analytics with role-based access control.',
    details: [
      'Engineered asynchronous assessment pipeline supporting 1,000+ concurrent interview sessions with sub-second state persistence.',
      'Implemented sandboxed code execution environments with multi-language compiler runtimes and automated test harnesses.',
      'Integrated Claude and Vapi voice agents for automated conversational interview screening and behavioral evaluation.',
      'Developed real-time webcam monitoring and SHA-256 asset caching with strict role-based access control (RBAC).'
    ],
    techStack: [
      'Next.js',
      'FastAPI',
      'PostgreSQL',
      'Claude',
      'Vapi',
      'SQLAlchemy',
      'Docker Sandbox',
      'WebRTC'
    ],
    metrics: [
      { label: 'Concurrency', value: '1,000+ Sessions' },
      { label: 'AI Evaluation', value: 'Claude 3.5 Sonnet' },
      { label: 'Voice Streaming', value: 'Vapi Real-Time' },
      { label: 'Security', value: 'SHA-256 + Sandboxed' }
    ],
    accentColor: '#f43f5e', // Sunset Crimson Ridge
    summitType: 'Glaciated Dome Peak'
  },
  {
    id: 'signly',
    num: '04',
    title: 'SIGNLY',
    tagline: 'Real-Time Computer Vision Sign Language Translation',
    category: 'Computer Vision & Deep Learning',
    status: 'ACTIVE EXPERIMENT',
    peakName: 'Signly Glacier Crag (4,420m)',
    peakCoord: { x: 1210, y: 245 }, // Far eastern ridge
    beaconCoord: { x: 1210, y: 225 },
    cardPosition: 'bottom-right',
    elevation: '4,420m · Coastal Glacier',
    summary:
      'Real-time sign-language-to-text translation system using MediaPipe Hands, OpenCV, and TensorFlow for seamless non-verbal communication.',
    details: [
      'Extracted 21 3D hand skeletal landmark coordinates per frame using MediaPipe Hands pipeline at 60+ FPS.',
      'Trained deep convolutional and recurrent neural networks in TensorFlow for dynamic gesture classification and temporal sequence alignment.',
      'Optimized OpenCV video capture and frame pre-processing pipelines, eliminating camera jitter and latency bottlenecks.',
      'Engineered instant text rendering and phonetic synthesis for real-time accessible translation.'
    ],
    techStack: [
      'Python',
      'MediaPipe',
      'OpenCV',
      'TensorFlow',
      'NumPy',
      'CNN / LSTM'
    ],
    metrics: [
      { label: 'Tracking Points', value: '21 3D Landmarks' },
      { label: 'Pipeline Speed', value: '60+ FPS Real-Time' },
      { label: 'Model Framework', value: 'TensorFlow / Keras' },
      { label: 'Input Modality', value: 'Real-Time Webcam' }
    ],
    accentColor: '#a855f7', // Twilight Alpine Purple
    summitType: 'Frozen Glacier Crevasse'
  }
]
