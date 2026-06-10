/**
 * policy-pdf-helpers.ts
 * ─────────────────────
 * Shared helpers for the policy PDF routes
 * (/api/policy-pdf/[id] and /api/policies/export-zip).
 */

import type { DocumentContent, PolicySection } from "./documents";

// ─── Org-name substitution ────────────────────────────────────────────────────

export function sub(text: string, org: string) {
  return text.replace(/\[ORGANISATION_NAME\]/g, org);
}

export function applyOrgName(content: DocumentContent, org: string): DocumentContent {
  function subSec(s: PolicySection): PolicySection {
    return {
      ...s,
      body:        s.body        ? sub(s.body, org)        : undefined,
      warningBox:  s.warningBox  ? sub(s.warningBox, org)  : undefined,
      practiceBox: s.practiceBox ? sub(s.practiceBox, org) : undefined,
      legalBox:    s.legalBox    ? sub(s.legalBox, org)    : undefined,
      subSections: s.subSections?.map(subSec),
    };
  }
  return {
    ...content,
    statement:        content.statement        ? sub(content.statement, org)        : undefined,
    purpose:          content.purpose          ? sub(content.purpose, org)          : undefined,
    scope:            content.scope            ? sub(content.scope, org)            : undefined,
    responsibilities: content.responsibilities?.map((r) => ({
      role:   r.role,
      duties: r.duties.map((d) => sub(d, org)),
    })),
    keyPoints:        content.keyPoints?.map((kp) => sub(kp, org)),
    legislation:      content.legislation,
    training:         content.training         ? sub(content.training, org)         : undefined,
    monitoring:       content.monitoring       ? sub(content.monitoring, org)       : undefined,
    sections:         content.sections?.map(subSec),
    procedure:        content.procedure?.map(subSec),
  };
}
