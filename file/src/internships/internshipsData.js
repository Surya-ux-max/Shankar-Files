export const INTERNSHIPS_DATA = [
  {
    id: 'zoho',
    number: '01',
    company: 'Zoho Corporation Pvt. Ltd.',
    shortName: 'Zoho',
    role: 'Software Developer Intern',
    period: 'Jun 2025 – Aug 2025',
    year: '2025',
    location: 'Chennai, India',
    mode: 'On-site / In-office',
    status: 'Enterprise Internship',
    color: '#e24d42',
    accentColor: '#2563eb',
    badgeText: 'Software Engineering',
    logoType: 'zoho',
    description: 'Designed and engineered enterprise-grade asset management infrastructure, high-throughput REST APIs, and an ML demand forecasting engine.',
    bullets: [
      'Designed an enterprise Asset Management System with session-based inventory workflows.',
      'Built REST APIs with normalized relational schemas, constraints, and indexing.',
      'Developed an ML recommendation system combining ARIMA demand forecasting and LightFM collaborative filtering.',
      'Implemented ETL and data-validation pipelines for robust production readiness.'
    ],
    techStack: [
      'Python',
      'REST APIs',
      'ARIMA Modeling',
      'LightFM',
      'Relational Schemas',
      'ETL Pipelines',
      'SQL / Indexing',
      'Session Workflows'
    ],
    stats: [
      { label: 'Domain', value: 'Enterprise Systems' },
      { label: 'ML Engines', value: 'ARIMA + LightFM' },
      { label: 'Architecture', value: 'REST & Normalized SQL' }
    ],
    towerCoords: {
      beacon: { x: 48.2, y: 10.5 },
      hotspot: { x: 44, y: 6, width: 9.5, height: 45 },
      cardDesktop: { x: 23.5, y: 13 },
      lineEnd: { x: 44.8, y: 19 }
    }
  },
  {
    id: 'infosys',
    number: '02',
    company: 'Infosys Springboard',
    shortName: 'Infosys',
    role: 'Full-Stack Virtual Intern',
    period: 'Jan 2025 – Mar 2025',
    year: '2026',
    location: 'Remote',
    mode: 'Virtual / Distributed',
    status: 'National Scale Platform',
    color: '#007cc3',
    accentColor: '#0284c7',
    badgeText: 'Full-Stack Engineering',
    logoType: 'infosys',
    description: 'Built a full-stack city governance platform featuring role-based access control, citizen petition workflows, real-time analytics, and secure JWT verification.',
    bullets: [
      'Built a city governance platform with RBAC, normalized schemas, petition workflows, voting, real-time tracking, and analytics dashboards.',
      'Implemented REST APIs, JWT security, and verification middleware.',
      'Worked with CI/CD pipelines and version-controlled milestone delivery.'
    ],
    techStack: [
      'Full-Stack Web',
      'RBAC Security',
      'JWT Auth Middleware',
      'Real-Time Analytics',
      'Petition Workflows',
      'REST APIs',
      'CI/CD Pipelines',
      'Relational Schemas'
    ],
    stats: [
      { label: 'Focus', value: 'City Governance' },
      { label: 'Security', value: 'RBAC + JWT' },
      { label: 'Deployment', value: 'CI/CD Milestone' }
    ],
    towerCoords: {
      beacon: { x: 71.2, y: 24.2 },
      hotspot: { x: 66.5, y: 22, width: 9.5, height: 42 },
      cardDesktop: { x: 78.5, y: 18 },
      lineEnd: { x: 74.2, y: 29.5 }
    }
  }
]
