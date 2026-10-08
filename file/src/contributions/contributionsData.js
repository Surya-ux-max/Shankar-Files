/**
 * Open Source Contribution Records & Data
 * Exact user content:
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
}

export const PHOTO_FRAMES_DATA = [
  {
    id: 'overview-frame',
    type: 'headline',
    title: 'Open Source Contributor',
    period: '2026 – Present',
    badge: '4 Merged Upstream Contributions',
    status: 'ACTIVE CONTRIBUTOR',
    seal: '承認',
    summary: 'Authoring and maintaining upstream enhancements across high-throughput distributed infrastructure and static compiler analysis toolchains.',
    breakdown: [
      { name: 'NVIDIA', count: 3, label: '3 Upstream Contributions' },
      { name: 'Uber', count: 1, label: '1 Upstream Contribution' }
    ]
  },
  {
    id: 'nvidia-frame',
    type: 'company',
    company: 'NVIDIA',
    title: 'NVIDIA Contributions',
    countText: '3 contributions',
    period: '2026 – Present',
    status: 'MERGED UPSTREAM',
    seal: '皆伝',
    items: [
      {
        id: 'k8s',
        name: 'Kubernetes admission policies',
        category: 'Cloud Native Infrastructure',
        tech: ['Kubernetes', 'CEL', 'Go', 'GPU Operator'],
        detail: 'Engineered validating & mutating admission policies for GPU cluster multi-tenancy and workload quotas with zero-latency CEL evaluation.'
      },
      {
        id: 'nri',
        name: 'Ambient NRI testing',
        category: 'Container Runtimes',
        tech: ['Node Resource Interface (NRI)', 'containerd', 'CRI-O', 'Go'],
        detail: 'Pioneered ambient NRI plugin integration test suites validating zero-downtime lifecycle events across containerd and CRI-O runtimes.'
      },
      {
        id: 'nullaway',
        name: 'NullAway nullness analysis',
        category: 'Static Analysis & Compilers',
        tech: ['NullAway', 'Java', 'Dataflow AST', 'Error Prone'],
        detail: 'Strengthened static nullness analysis and compile-time dataflow AST checking in enterprise pipelines, preventing production NPEs.'
      }
    ]
  },
  {
    id: 'uber-frame',
    type: 'company',
    company: 'Uber',
    title: 'Uber Contributions',
    countText: '1 contribution',
    period: '2026 – Present',
    status: 'MERGED UPSTREAM',
    seal: '免許',
    items: [
      {
        id: 'uber-oss',
        name: 'Upstream Open Source Contribution',
        category: 'Developer Platform Tooling',
        tech: ['Uber Open Source', 'Static Verification', 'Go / Java', 'CI/CD'],
        detail: 'Contributed upstream resilience fixes and tooling enhancements into Uber open-source repositories with maintainer sign-off.'
      }
    ]
  }
]
