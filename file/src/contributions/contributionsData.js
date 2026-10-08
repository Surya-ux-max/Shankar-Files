/**
 * Open Source Contribution Records & Gallery Data
 * Content requested:
 * - Open Source Contributor
 * - 2026 – Present
 * - 4 Merged Upstream Contributions
 * - NVIDIA — 3 contributions
 *   - Kubernetes admission policies
 *   - Ambient NRI testing
 *   - NullAway nullness analysis
 * - Uber — 1 contribution
 */

export const CONTRIBUTION_OVERVIEW = {
  role: 'Open Source Contributor',
  timeline: '2026 – Present',
  totalMerged: 4,
  badge: 'UPSTREAM CRAFTSMANSHIP',
  motto: 'Forging resilient distributed systems, container runtime hooks, and static compiler safety.',
}

export const PHOTO_FRAMES_DATA = [
  {
    id: 'overview-frame',
    key: 'overview',
    type: 'headline',
    title: 'Open Source Contributor',
    subtitle: 'Upstream Engineering Milestone',
    period: '2026 – Present',
    badge: '4 Merged Upstream Contributions',
    status: 'ACTIVE CONTRIBUTOR',
    sealText: '承認',
    sealSub: 'MERGED',
    kanjiTag: '大名',
    summary:
      'Authoring and maintaining upstream contributions across GPU-accelerated cloud infrastructure, low-overhead container runtime interfaces, and static nullness safety checkers.',
    stats: [
      { label: 'Total Merged', value: '4' },
      { label: 'Organizations', value: 'NVIDIA & Uber' },
      { label: 'Code Base', value: '100% Upstream' }
    ],
    breakdown: [
      { name: 'NVIDIA', count: 3, label: '3 Upstream Contributions' },
      { name: 'Uber', count: 1, label: '1 Upstream Contribution' }
    ]
  },
  {
    id: 'nvidia-frame',
    key: 'nvidia',
    type: 'company',
    company: 'NVIDIA',
    title: 'NVIDIA Upstream Contributions',
    countText: '3 contributions',
    period: '2026 – Present',
    status: 'MERGED UPSTREAM',
    sealText: '皆伝',
    sealSub: 'NVIDIA',
    kanjiTag: '雲上',
    colorTheme: '#76b900',
    summary: 'Core Kubernetes admission control, container NRI runtime hooks, and NullAway static analysis.',
    items: [
      {
        id: 'k8s',
        name: 'Kubernetes admission policies',
        category: 'Cloud Native & Orchestration',
        tech: ['Kubernetes', 'CEL', 'Admission Policies', 'Go'],
        detail:
          'Engineered ValidatingAdmissionPolicy bindings for strict GPU cluster tenancy, workload isolation, and resource quotas with zero-latency CEL evaluation.'
      },
      {
        id: 'nri',
        name: 'Ambient NRI testing',
        category: 'Container Runtimes',
        tech: ['NRI (Node Resource Interface)', 'containerd', 'CRI-O', 'Go'],
        detail:
          'Pioneered automated ambient NRI plugin test suites validating zero-downtime lifecycle events across containerd and CRI-O runtimes.'
      },
      {
        id: 'nullaway',
        name: 'NullAway nullness analysis',
        category: 'Static Analysis & Compilers',
        tech: ['NullAway', 'Java', 'Dataflow AST', 'Error Prone'],
        detail:
          'Strengthened compile-time dataflow analysis and generic type inference in enterprise build pipelines, eliminating targeted production NPEs.'
      }
    ]
  },
  {
    id: 'uber-frame',
    key: 'uber',
    type: 'company',
    company: 'Uber',
    title: 'Uber Upstream Contribution',
    countText: '1 contribution',
    period: '2026 – Present',
    status: 'MERGED UPSTREAM',
    sealText: '免許',
    sealSub: 'UBER',
    kanjiTag: '俊敏',
    colorTheme: '#000000',
    summary: 'Platform tooling and developer ecosystem resilience improvements.',
    items: [
      {
        id: 'uber-oss',
        name: 'Upstream Open Source Contribution',
        category: 'Platform & Infrastructure Tooling',
        tech: ['Uber Open Source', 'Static Tooling', 'Go / Java', 'CI/CD'],
        detail:
          'Contributed upstream resilience fixes and developer tooling enhancements to Uber open-source repositories with maintainer sign-off.'
      }
    ]
  }
]
