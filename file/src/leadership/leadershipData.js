/**
 * Leadership, Achievements & Recognition Data
 * Organised into four honour categories
 */

export const LEADERSHIP_CATEGORIES = [
  {
    id: 'competitions',
    label: 'Competitions',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.25)',
    achievements: [
      {
        id: 'neoverse',
        rank: '3rd Place',
        title: 'NeoVerse\'26 National AI Hackathon',
        prize: '₹10,000',
        detail: 'National-level AI hackathon recognising cutting-edge applied AI solutions.',
        highlight: true,
      },
      {
        id: 'forgex',
        rank: 'Podium Finish',
        title: 'Forge X CMRIT National Hackathon',
        prize: '₹2,500',
        detail: 'Official placing pending confirmation. Top podium finish at CMRIT\'s flagship national hackathon.',
        highlight: false,
      },
      {
        id: 'iqoo',
        rank: 'Top 24',
        title: 'iQOO Hyderabad City Battle',
        prize: '19,450+ Registrations',
        detail: 'Ranked Top 24 nationally from over 19,450 registrations across India.',
        highlight: false,
      },
      {
        id: 'tnskills',
        rank: 'State Finalist',
        title: 'TN-SKILLS Software Development Engineer',
        prize: 'Tamil Nadu State',
        detail: 'State-level finalist in the Software Development Engineer domain under TN-SKILLS competition.',
        highlight: false,
      },
    ],
  },
  {
    id: 'rankings',
    label: 'Rankings',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.22)',
    achievements: [
      {
        id: 'leetcode',
        rank: 'Knight',
        title: 'LeetCode Knight',
        prize: 'Rating 1,891',
        detail: 'Highest recorded LeetCode rating of 1,891. Global rank #1,247 in Weekly Contest 484.',
        highlight: true,
      },
      {
        id: 'iitbombay',
        rank: 'Top 15',
        title: 'National Entrepreneurship Challenge',
        prize: 'IIT Bombay E-Cell',
        detail: 'Finished in the Top 15 nationally at the National Entrepreneurship Challenge hosted by IIT Bombay E-Cell.',
        highlight: false,
      },
    ],
  },
  {
    id: 'academic',
    label: 'Academic',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.22)',
    achievements: [
      {
        id: 'springer',
        rank: 'Published',
        title: 'Springer LNAI Research Paper',
        prize: 'International Publication',
        detail: 'Geospatial Analysis of Urban Sprawl, Land Use, Traffic Patterns, and Water Resource Management in Coimbatore, India — published in the Springer Lecture Notes in Artificial Intelligence series.',
        highlight: true,
      },
      {
        id: 'reliance',
        rank: 'Scholar',
        title: 'Reliance Foundation Undergraduate Scholar',
        prize: 'Reliance Foundation',
        detail: 'Awarded the prestigious Reliance Foundation Undergraduate Scholarship recognising academic excellence and leadership potential.',
        highlight: false,
      },
    ],
  },
  {
    id: 'leadership',
    label: 'Leadership',
    color: '#86efac',
    glow: 'rgba(134,239,172,0.2)',
    achievements: [
      {
        id: 'tnjug',
        rank: 'Campus Leader',
        title: 'TNJUG — Tamil Nadu Java User Group',
        prize: 'Community Leadership',
        detail: 'Campus Leader representing TNJUG, bridging the local developer community with students through events and knowledge sharing.',
        highlight: false,
      },
      {
        id: 'gfg',
        rank: 'Campus Mantri',
        title: 'GeeksforGeeks Campus Ambassador',
        prize: 'GFG Official',
        detail: 'Serving as GeeksforGeeks Campus Mantri and official Campus Ambassador, driving competitive programming culture on campus.',
        highlight: false,
      },
      {
        id: 'edc',
        rank: 'Technical Lead',
        title: 'Entrepreneurship Development Cell, SECE',
        prize: 'Former Technical Lead',
        detail: 'Former Technical Lead of the Entrepreneurship Development Cell at SECE, spearheading technical events, workshops, and startup mentoring initiatives.',
        highlight: false,
      },
    ],
  },
]

export const LEADERSHIP_STATS = [
  { value: '₹12,500', label: 'Prize Money Won' },
  { value: '19,450+', label: 'Competitors Beaten' },
  { value: '1,891', label: 'LeetCode Peak Rating' },
  { value: '#1,247', label: 'Global Contest Rank' },
]
