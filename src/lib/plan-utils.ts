// ─────────────────────────────────────────────────────────────────────────────
// Plan gating utilities
// ─────────────────────────────────────────────────────────────────────────────

export type Plan = "starter" | "professional" | "enterprise";

/** Features and the minimum plans that unlock them */
export const PLAN_FEATURES = {
  /** Logo upload and branded PDF cover */
  custom_branding:      ["professional", "enterprise"] as Plan[],
  /** CSV export on staff compliance matrix */
  csv_export:           ["enterprise"] as Plan[],
  /** Multi-site management (/sites pages) */
  multi_site:           ["enterprise"] as Plan[],
  /** Organisation-specific policy annotations */
  policy_annotations:   ["enterprise"] as Plan[],
  /** API key management */
  api_access:           ["enterprise"] as Plan[],
} as const;

export type Feature = keyof typeof PLAN_FEATURES;

/** Returns true if `plan` is entitled to `feature` */
export function canAccess(feature: Feature, plan: Plan | null | undefined): boolean {
  if (!plan) return false;
  return (PLAN_FEATURES[feature] as Plan[]).includes(plan);
}

/** Human-readable plan label */
export function planLabel(plan: Plan): string {
  return { starter: "Starter", professional: "Professional", enterprise: "Enterprise" }[plan] ?? plan;
}

/** The minimum plan name required for a feature */
export function requiredPlan(feature: Feature): string {
  const plans = PLAN_FEATURES[feature];
  return planLabel(plans[0]);
}
