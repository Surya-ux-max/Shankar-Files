/**
 * Open Source Contribution Records & Samurai Armory Data
 */

export const CONTRIBUTION_OVERVIEW = {
  role: 'Open Source Contributor',
  timeline: '2026 – Present',
  totalMerged: 4,
  organizations: 2,
  badge: 'UPSTREAM CRAFTSMANSHIP',
  motto: 'Forging resilient distributed systems and robust static analysis tools.',
}

export const CONTRIBUTIONS = [
  {
    id: 'nvidia-k8s',
    company: 'NVIDIA',
    title: 'Kubernetes Admission Policies',
    category: 'Cloud Native & Orchestration',
    period: '2026',
    status: 'MERGED UPSTREAM',
    tag: 'Core Infrastructure',
    icon: '☸️',
    wallPosition: 'top-left',
    summary:
      'Engineered and verified declarative Kubernetes validating and mutating admission policies for GPU-accelerated cloud workloads.',
    details: [
      'Implemented robust ValidatingAdmissionPolicy bindings for strict GPU cluster tenancy and resource quota enforcement.',
      'Optimized CEL (Common Expression Language) evaluation paths, eliminating webhook round-trip latencies.',
      'Authored upstream unit tests and end-to-end integration test suites ensuring multi-tenant container isolation.'
    ],
    tech: ['Kubernetes', 'CEL', 'Admission Controllers', 'Go', 'NVIDIA GPU Operator'],
    weaponTieIn: 'The Precision Katana (Sharp validation at entry gates)',
    stats: {
      prsMerged: 1,
      impact: 'Zero-latency policy evaluation',
      branch: 'upstream/main'
    }
  },
  {
    id: 'nvidia-ambient-nri',
    company: 'NVIDIA',
    title: 'Ambient NRI Testing',
    category: 'Container Runtimes',
    period: '2026',
    status: 'MERGED UPSTREAM',
    tag: 'Runtime Plugins',
    icon: '⚡',
    wallPosition: 'top-right',
    summary:
      'Pioneered integration and ambient Node Resource Interface (NRI) plugin test frameworks for low-overhead container runtime hooks.',
    details: [
      'Developed automated test suites exercising NRI plugins under dynamic container lifecycle events (pod start, update, stop).',
      'Validated zero-downtime plugin reloads and resource discovery without container restart overheads.',
      'Hardened CI pipelines across containerd and CRI-O runtimes with deterministic mock telemetry.'
    ],
    tech: ['NRI (Node Resource Interface)', 'containerd', 'CRI-O', 'Go', 'Linux Cgroups'],
    weaponTieIn: 'The Swift Kunai (Lightweight ambient runtime interception)',
    stats: {
      prsMerged: 1,
      impact: 'Comprehensive NRI lifecycle coverage',
      branch: 'upstream/main'
    }
  },
  {
    id: 'nvidia-nullaway',
    company: 'NVIDIA',
    title: 'NullAway Nullness Analysis',
    category: 'Static Analysis & Compiler Safety',
    period: '2026',
    status: 'MERGED UPSTREAM',
    tag: 'Code Quality & Compilers',
    icon: '🛡️',
    wallPosition: 'bottom-left',
    summary:
      'Enhanced static nullness checking and compile-time dataflow analysis within enterprise build pipelines utilizing Uber/NullAway.',
    details: [
      'Refined nullability contracts and dataflow propagations preventing production NullPointerExceptions.',
      'Identified and fixed edge-case false-positives in generic method return type inference.',
      'Integrated static checker passes into distributed compilation environments with zero build slowdown.'
    ],
    tech: ['NullAway', 'Java / JVM', 'Error Prone', 'Static Analysis', 'Dataflow AST'],
    weaponTieIn: 'The Armor of Invariance (Impenetrable null-pointer defense)',
    stats: {
      prsMerged: 1,
      impact: '100% elimination of targeted NPE paths',
      branch: 'upstream/main'
    }
  },
  {
    id: 'uber-upstream',
    company: 'Uber',
    title: 'Upstream Open Source Contribution',
    category: 'Developer Tooling & Platform',
    period: '2026',
    status: 'MERGED UPSTREAM',
    tag: 'Platform Engineering',
    icon: '🚗',
    wallPosition: 'bottom-right',
    summary:
      'Authored upstream fixes and resilience enhancements in Uber open source repositories supporting high-scale distributed systems.',
    details: [
      'Contributed optimizations to Uber developer ecosystem tooling, improving static verification speed and safety guarantees.',
      'Harmonized cross-platform build behaviors and modernized upstream testing fixtures.',
      'Collaborated with Uber open-source maintainers across peer reviews and upstream integration milestones.'
    ],
    tech: ['Uber Open Source', 'Static Tooling', 'Go / Java', 'Distributed Testing', 'CI/CD'],
    weaponTieIn: 'The Yari War Lance (Piercing engineering bottlenecks at scale)',
    stats: {
      prsMerged: 1,
      impact: 'Merged into upstream master with maintainer sign-off',
      branch: 'upstream/master'
    }
  }
]

export const WARFARE_TOOLS = [
  {
    id: 'katana',
    name: 'Honjo Masamune Katana',
    kanji: '刀',
    type: 'Master Blade',
    subtitle: 'Symbol of Precision & Critical Code Paths',
    description: 'Forged with folded steel and tempered with perfection. Represents surgical precision in code reviews and latency-critical admission controllers.',
    icon: 'katana'
  },
  {
    id: 'tanto',
    name: 'Dragon Crest Tanto Daggers',
    kanji: '短刀',
    type: 'Defensive Blades',
    subtitle: 'Lightweight & Swift Intervention',
    description: 'Carried at the sash for swift execution and close defense. Mirrors the swift intercept of NRI runtime plugins.',
    icon: 'tanto'
  },
  {
    id: 'shuriken',
    name: 'Shadow Shuriken & Kunai',
    kanji: '手裏剣',
    type: 'Concealed Tools',
    subtitle: 'Ambient Testing & Probes',
    description: 'Projectiles pinned into the cedar palace beam. Symbolizes distributed telemetry probes and compile-time checkers finding hidden bugs.',
    icon: 'shuriken'
  },
  {
    id: 'naginata',
    name: 'War Naginata & Yari Spear',
    kanji: '薙刀',
    type: 'Long Reach Polearms',
    subtitle: 'Broad Architectural Reach',
    description: 'Extended polearms mounted crosswise on the upper cedar rafters, defending perimeter boundaries across cloud and enterprise platforms.',
    icon: 'naginata'
  }
]

export const SAMURAI_ARMOR_LORE = {
  title: 'Great Daimyo Armor of Open Source',
  kanji: '侍の甲冑',
  kabuto: 'Crescent Moon Crested Kabuto Helmet',
  menpo: 'Fierce Iron Menpo Mask of Resilience',
  do: 'Lacquered Plate Dō Cuirass with Gold Chrysanthemum Mon',
  sode: 'Multi-laced Silk O-Sode Shoulder Plates',
  motto: 'Honour in every commit, unyielding vigilance in every upstream merge.',
  quote: '“The warrior does not merely carry the blade; he polishes it until it reflects truth.”'
}
