/**
 * PolicyPDFDocument — @react-pdf/renderer component
 * Renders a professional branded PDF for a Ziproh compliance policy.
 * Supports the full DocumentContent type including procedure[], definitions[],
 * appendices[], versionHistory[], warningBox, practiceBox, legalBox callouts.
 */

import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import type { DocumentContent } from "@/lib/documents";

// ─── Fonts ────────────────────────────────────────────────────────────────────
// @react-pdf/renderer uses built-in Helvetica by default — no external font
// registration required for a clean sans-serif look.

// ─── Styles ───────────────────────────────────────────────────────────────────
const C = {
  brand:    "#2E6FFF",   // Ziproh blue
  dark:     "#0A1629",   // near-black
  mid:      "#374151",   // body text
  muted:    "#6B7280",   // muted / metadata
  light:    "#F3F6FF",   // light blue tint
  white:    "#FFFFFF",
  warn:     "#FEF3C7",   // amber tint
  warnBorder: "#F59E0B",
  practice: "#D1FAE5",   // green tint
  practiceBorder: "#10B981",
  legal:    "#DBEAFE",   // blue tint
  legalBorder: "#2E6FFF",
  rule:     "#E5E7EB",   // divider
};

const styles = StyleSheet.create({
  // Page
  page: {
    fontFamily: "Helvetica",
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 56,
    backgroundColor: C.white,
    color: C.mid,
    fontSize: 10,
    lineHeight: 1.55,
  },

  // Running header
  runHeader: {
    position: "absolute",
    top: 20,
    left: 56,
    right: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: C.brand,
    paddingBottom: 6,
  },
  runHeaderLeft: { fontSize: 8, color: C.brand, fontFamily: "Helvetica-Bold" },
  runHeaderRight: { fontSize: 8, color: C.muted },

  // Running footer
  runFooter: {
    position: "absolute",
    bottom: 20,
    left: 56,
    right: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: C.rule,
    paddingTop: 6,
  },
  runFooterLeft:  { fontSize: 7.5, color: C.muted },
  runFooterRight: { fontSize: 7.5, color: C.muted },
  pageNumber:     { fontSize: 7.5, color: C.muted },

  // ── Cover page ──────────────────────────────────────────────────────────────
  coverPage: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    backgroundColor: C.white,
  },
  coverTop: {
    backgroundColor: C.brand,
    paddingTop: 70,
    paddingBottom: 50,
    paddingHorizontal: 56,
  },
  coverBrand: {
    fontSize: 11,
    color: "rgba(255,255,255,0.7)",
    letterSpacing: 3,
    marginBottom: 8,
    fontFamily: "Helvetica-Bold",
  },
  coverTitle: {
    fontSize: 26,
    color: C.white,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.3,
    marginBottom: 10,
  },
  coverSubtitle: {
    fontSize: 13,
    color: "rgba(255,255,255,0.85)",
    marginBottom: 24,
  },
  coverOrgBadge: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    marginBottom: 4,
  },
  coverOrgText: {
    fontSize: 9,
    color: C.white,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.5,
  },
  coverBody: {
    paddingHorizontal: 56,
    paddingTop: 36,
    paddingBottom: 40,
  },
  coverMeta: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 0,
    marginBottom: 32,
  },
  coverMetaItem: {
    width: "50%",
    marginBottom: 12,
  },
  coverMetaLabel: {
    fontSize: 7.5,
    color: C.muted,
    letterSpacing: 1.2,
    marginBottom: 2,
    fontFamily: "Helvetica-Bold",
  },
  coverMetaValue: {
    fontSize: 10,
    color: C.dark,
    fontFamily: "Helvetica-Bold",
  },
  statementBox: {
    backgroundColor: C.light,
    borderLeftWidth: 3,
    borderLeftColor: C.brand,
    padding: 14,
    borderRadius: 3,
    marginTop: 8,
  },
  statementLabel: {
    fontSize: 8,
    color: C.brand,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
    marginBottom: 6,
  },
  statementText: {
    fontSize: 9.5,
    color: C.dark,
    lineHeight: 1.6,
    fontFamily: "Helvetica-Oblique",
  },

  // ── TOC page ────────────────────────────────────────────────────────────────
  tocHeader: {
    fontSize: 16,
    color: C.brand,
    fontFamily: "Helvetica-Bold",
    marginBottom: 18,
    paddingBottom: 8,
    borderBottomWidth: 1.5,
    borderBottomColor: C.brand,
  },
  tocRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 7,
    borderBottomWidth: 0.5,
    borderBottomColor: C.rule,
    paddingBottom: 5,
  },
  tocTitle: { fontSize: 9.5, color: C.mid, flex: 1 },
  tocDots:  { flex: 1, borderBottomWidth: 0.5, borderBottomColor: C.rule, marginHorizontal: 4 },
  tocPage:  { fontSize: 9, color: C.muted },

  // ── Body ────────────────────────────────────────────────────────────────────
  section: { marginBottom: 18 },
  sectionHeading: {
    fontSize: 13,
    color: C.brand,
    fontFamily: "Helvetica-Bold",
    marginBottom: 7,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: C.light,
  },
  subHeading: {
    fontSize: 10.5,
    color: C.dark,
    fontFamily: "Helvetica-Bold",
    marginBottom: 5,
    marginTop: 6,
  },
  bodyText: {
    fontSize: 9.5,
    color: C.mid,
    lineHeight: 1.6,
    marginBottom: 6,
  },

  // Steps (numbered)
  stepsContainer: { marginTop: 4, marginBottom: 6 },
  stepRow: { flexDirection: "row", marginBottom: 5 },
  stepNumber: {
    width: 20,
    fontSize: 9,
    color: C.brand,
    fontFamily: "Helvetica-Bold",
    flexShrink: 0,
  },
  stepText: { fontSize: 9.5, color: C.mid, flex: 1, lineHeight: 1.55 },

  // Bullet list
  bulletRow: { flexDirection: "row", marginBottom: 4 },
  bullet: { width: 14, fontSize: 9, color: C.brand, flexShrink: 0 },
  bulletText: { fontSize: 9.5, color: C.mid, flex: 1, lineHeight: 1.55 },

  // Callout boxes
  warningBox: {
    backgroundColor: C.warn,
    borderLeftWidth: 3,
    borderLeftColor: C.warnBorder,
    padding: 10,
    borderRadius: 3,
    marginVertical: 8,
  },
  warningLabel: {
    fontSize: 7.5,
    color: C.warnBorder,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
    marginBottom: 4,
  },
  practiceBox: {
    backgroundColor: C.practice,
    borderLeftWidth: 3,
    borderLeftColor: C.practiceBorder,
    padding: 10,
    borderRadius: 3,
    marginVertical: 8,
  },
  practiceLabel: {
    fontSize: 7.5,
    color: C.practiceBorder,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
    marginBottom: 4,
  },
  legalBox: {
    backgroundColor: C.legal,
    borderLeftWidth: 3,
    borderLeftColor: C.legalBorder,
    padding: 10,
    borderRadius: 3,
    marginVertical: 8,
  },
  legalLabel: {
    fontSize: 7.5,
    color: C.legalBorder,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
    marginBottom: 4,
  },
  calloutText: { fontSize: 9, lineHeight: 1.55, color: C.dark },

  // Definitions
  defTerm: { fontSize: 9.5, color: C.dark, fontFamily: "Helvetica-Bold", marginBottom: 2 },
  defBody: { fontSize: 9, color: C.mid, lineHeight: 1.55, marginBottom: 8, paddingLeft: 8, borderLeftWidth: 2, borderLeftColor: C.rule },

  // Version history table
  tableHeader: { flexDirection: "row", backgroundColor: C.brand, padding: 6 },
  tableRow: { flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: C.rule, padding: 5 },
  tableCellVersion: { width: "12%", fontSize: 8, color: C.white, fontFamily: "Helvetica-Bold" },
  tableCellDate:    { width: "18%", fontSize: 8 },
  tableCellAmend:   { flex: 1, fontSize: 8 },
  tableCellVersionBody: { width: "12%", fontSize: 8, color: C.dark, fontFamily: "Helvetica-Bold" },
  tableCellDateBody:    { width: "18%", fontSize: 8, color: C.mid },
  tableCellAmendBody:   { flex: 1, fontSize: 8, color: C.mid },

  // Related docs / appendices
  relatedItem: { fontSize: 9, color: C.mid, marginBottom: 3, paddingLeft: 8 },
  appendixTitle: { fontSize: 10, color: C.dark, fontFamily: "Helvetica-Bold", marginBottom: 3 },
  appendixDesc: { fontSize: 9, color: C.mid, lineHeight: 1.55, marginBottom: 8, paddingLeft: 8, borderLeftWidth: 2, borderLeftColor: C.rule },

  // Legislation list
  legRow: { flexDirection: "row", marginBottom: 4 },
  legBullet: { width: 14, fontSize: 9, color: C.brand, flexShrink: 0 },
  legText: { fontSize: 9, color: C.mid, flex: 1, lineHeight: 1.5 },
});

// ─── Sub-components ───────────────────────────────────────────────────────────

function RunningHeader({ orgName, policyId, title }: { orgName: string; policyId: string; title: string }) {
  return (
    <View style={styles.runHeader} fixed>
      <Text style={styles.runHeaderLeft}>{orgName}</Text>
      <Text style={styles.runHeaderRight}>{policyId.toUpperCase()} — {title}</Text>
    </View>
  );
}

function RunningFooter({ policyId, version }: { policyId: string; version: string }) {
  return (
    <View style={styles.runFooter} fixed>
      <Text style={styles.runFooterLeft}>Ziproh Compliance Centre · {policyId.toUpperCase()} v{version}</Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
      <Text style={styles.runFooterRight}>© Ziproh · Confidential</Text>
    </View>
  );
}

function Steps({ steps }: { steps: string[] }) {
  return (
    <View style={styles.stepsContainer}>
      {steps.map((s, i) => (
        <View key={i} style={styles.stepRow}>
          <Text style={styles.stepNumber}>{i + 1}.</Text>
          <Text style={styles.stepText}>{s}</Text>
        </View>
      ))}
    </View>
  );
}

function Bullets({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <View style={{ marginTop: 2, marginBottom: 6 }}>
      {items.map((item, i) => (
        <View key={i} style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function WarningBox({ text }: { text: string }) {
  return (
    <View style={styles.warningBox}>
      <Text style={styles.warningLabel}>⚠ IMPORTANT</Text>
      <Text style={styles.calloutText}>{text}</Text>
    </View>
  );
}

function PracticeBox({ text }: { text: string }) {
  return (
    <View style={styles.practiceBox}>
      <Text style={styles.practiceLabel}>✓ BEST PRACTICE</Text>
      <Text style={styles.calloutText}>{text}</Text>
    </View>
  );
}

function LegalBox({ text }: { text: string }) {
  return (
    <View style={styles.legalBox}>
      <Text style={styles.legalLabel}>⚖ LEGAL REQUIREMENT</Text>
      <Text style={styles.calloutText}>{text}</Text>
    </View>
  );
}

// A generic section renderer — handles body, steps/procedure, bullets, callout boxes, subSections
function SectionBlock({ sec }: { sec: import("@/lib/documents").PolicySection }) {
  const steps = sec.procedure ?? sec.steps;
  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.sectionHeading}>{sec.title ?? sec.heading}</Text>
      {sec.body ? <Text style={styles.bodyText}>{sec.body}</Text> : null}
      {steps ? <Steps steps={steps} /> : null}
      {sec.bulletPoints ? <Bullets items={sec.bulletPoints} /> : null}
      {sec.warningBox ? <WarningBox text={sec.warningBox} /> : null}
      {sec.practiceBox ? <PracticeBox text={sec.practiceBox} /> : null}
      {sec.legalBox ? <LegalBox text={sec.legalBox} /> : null}
      {sec.subSections?.map((ss, i) => {
        const subSteps = ss.procedure ?? ss.steps;
        return (
          <View key={i} style={{ marginTop: 8 }}>
            <Text style={styles.subHeading}>{ss.title ?? ss.heading}</Text>
            {ss.body ? <Text style={styles.bodyText}>{ss.body}</Text> : null}
            {subSteps ? <Steps steps={subSteps} /> : null}
            {ss.bulletPoints ? <Bullets items={ss.bulletPoints} /> : null}
            {ss.warningBox ? <WarningBox text={ss.warningBox} /> : null}
            {ss.practiceBox ? <PracticeBox text={ss.practiceBox} /> : null}
            {ss.legalBox ? <LegalBox text={ss.legalBox} /> : null}
          </View>
        );
      })}
    </View>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

interface Props {
  policyId: string;
  title: string;
  version: string;
  lastUpdated: string;
  keyQuestion: string;
  orgName: string;
  content: DocumentContent;
}

export function PolicyPDFDocument({ policyId, title, version, lastUpdated, keyQuestion, orgName, content }: Props) {
  // Determine which sections to render — prefer procedure[] over legacy sections[]
  const bodySections = (
    content.procedure && content.procedure.length > 0
      ? content.procedure
      : content.sections
  ) ?? [];

  // Build TOC items
  const tocItems: string[] = [
    content.statement ? "Policy Statement" : "",
    (content.purpose || content.scope) ? "Purpose and Scope" : "",
    content.definitions?.length ? "Definitions" : "",
    content.responsibilities?.length ? "Roles and Responsibilities" : "",
    content.keyPoints?.length ? "Key Points" : "",
    content.legislation?.length ? "Legislative Framework" : "",
    ...bodySections.map(s => s.title ?? s.heading ?? ""),
    ...(content.relatedDocuments?.length ? ["Related Documents"] : []),
    ...(content.appendices?.length ? ["Appendices"] : []),
    ...(content.versionHistory?.length ? ["Version History"] : []),
  ].filter(Boolean);

  return (
    <Document
      title={`${policyId.toUpperCase()} — ${title}`}
      author={orgName}
      subject={`${keyQuestion} Policy — Ziproh Compliance Centre`}
      creator="Ziproh Compliance Centre"
    >
      {/* ══ COVER PAGE ══════════════════════════════════════════════════════ */}
      <Page size="A4" style={[styles.page, styles.coverPage]}>
        {/* Coloured top band */}
        <View style={styles.coverTop}>
          <Text style={styles.coverBrand}>ZIPROH COMPLIANCE CENTRE</Text>
          <Text style={styles.coverTitle}>{title}</Text>
          <Text style={styles.coverSubtitle}>{keyQuestion} Policy</Text>
          {orgName && (
            <View style={styles.coverOrgBadge}>
              <Text style={styles.coverOrgText}>Adapted for: {orgName}</Text>
            </View>
          )}
        </View>

        {/* Meta grid */}
        <View style={styles.coverBody}>
          <View style={styles.coverMeta}>
            {[
              ["POLICY REFERENCE", policyId.toUpperCase()],
              ["VERSION", `v${version}`],
              ["LAST REVIEWED", lastUpdated],
              ["NEXT REVIEW", content.nextReviewDate ?? "Annual"],
              ["REVIEWED BY", content.reviewedBy ?? "Registered Manager"],
              ["CQC KEY QUESTION", keyQuestion],
            ].map(([label, value]) => (
              <View key={label} style={styles.coverMetaItem}>
                <Text style={styles.coverMetaLabel}>{label}</Text>
                <Text style={styles.coverMetaValue}>{value}</Text>
              </View>
            ))}
          </View>

          {/* Statement of intent */}
          {content.statement && (
            <View style={styles.statementBox}>
              <Text style={styles.statementLabel}>STATEMENT OF INTENT</Text>
              <Text style={styles.statementText}>{content.statement}</Text>
            </View>
          )}
        </View>
      </Page>

      {/* ══ TABLE OF CONTENTS ═══════════════════════════════════════════════ */}
      <Page size="A4" style={styles.page}>
        <RunningHeader orgName={orgName} policyId={policyId} title={title} />
        <RunningFooter policyId={policyId} version={version} />

        <Text style={styles.tocHeader}>Table of Contents</Text>
        {tocItems.map((item, i) => (
          <View key={i} style={styles.tocRow}>
            <Text style={styles.tocTitle}>{item}</Text>
            <Text style={styles.tocPage}>—</Text>
          </View>
        ))}
      </Page>

      {/* ══ POLICY STATEMENT & PURPOSE ══════════════════════════════════════ */}
      {(content.statement || content.purpose || content.scope) && (
        <Page size="A4" style={styles.page}>
          <RunningHeader orgName={orgName} policyId={policyId} title={title} />
          <RunningFooter policyId={policyId} version={version} />

          {content.statement && (
            <View style={[styles.section, { marginBottom: 20 }]}>
              <Text style={styles.sectionHeading}>Policy Statement</Text>
              <View style={styles.statementBox}>
                <Text style={[styles.bodyText, { fontFamily: "Helvetica-Oblique" }]}>{content.statement}</Text>
              </View>
            </View>
          )}

          {content.purpose && (
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Purpose</Text>
              <Text style={styles.bodyText}>{content.purpose}</Text>
            </View>
          )}

          {content.scope && (
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Scope</Text>
              <Text style={styles.bodyText}>{content.scope}</Text>
            </View>
          )}
        </Page>
      )}

      {/* ══ DEFINITIONS ═════════════════════════════════════════════════════ */}
      {content.definitions && content.definitions.length > 0 && (
        <Page size="A4" style={styles.page}>
          <RunningHeader orgName={orgName} policyId={policyId} title={title} />
          <RunningFooter policyId={policyId} version={version} />
          <Text style={styles.sectionHeading}>Definitions</Text>
          {content.definitions.map((d, i) => (
            <View key={i} style={{ marginBottom: 8 }}>
              <Text style={styles.defTerm}>{d.term}</Text>
              <Text style={styles.defBody}>{d.definition}</Text>
            </View>
          ))}
        </Page>
      )}

      {/* ══ ROLES AND RESPONSIBILITIES ═══════════════════════════════════════ */}
      {content.responsibilities && content.responsibilities.length > 0 && (
        <Page size="A4" style={styles.page}>
          <RunningHeader orgName={orgName} policyId={policyId} title={title} />
          <RunningFooter policyId={policyId} version={version} />
          <Text style={styles.sectionHeading}>Roles and Responsibilities</Text>
          {content.responsibilities.map((r, i) => (
            <View key={i} style={[styles.section, { marginBottom: 14 }]}>
              <Text style={styles.subHeading}>{r.role}</Text>
              <Bullets items={r.duties} />
            </View>
          ))}
        </Page>
      )}

      {/* ══ KEY POINTS & LEGISLATION ══════════════════════════════════════════ */}
      {((content.keyPoints && content.keyPoints.length > 0) ||
        (content.legislation && content.legislation.length > 0)) && (
        <Page size="A4" style={styles.page}>
          <RunningHeader orgName={orgName} policyId={policyId} title={title} />
          <RunningFooter policyId={policyId} version={version} />

          {content.keyPoints && content.keyPoints.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Key Points</Text>
              <Bullets items={content.keyPoints} />
            </View>
          )}

          {content.legislation && content.legislation.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Legislative Framework</Text>
              {content.legislation.map((leg, i) => (
                <View key={i} style={styles.legRow}>
                  <Text style={styles.legBullet}>§</Text>
                  <Text style={styles.legText}>{leg}</Text>
                </View>
              ))}
            </View>
          )}
        </Page>
      )}

      {/* ══ BODY SECTIONS (procedure or legacy sections) ═════════════════════ */}
      {bodySections.map((sec, i) => (
        <Page key={i} size="A4" style={styles.page}>
          <RunningHeader orgName={orgName} policyId={policyId} title={title} />
          <RunningFooter policyId={policyId} version={version} />
          <SectionBlock sec={sec} />
        </Page>
      ))}

      {/* ══ TRAINING & MONITORING ════════════════════════════════════════════ */}
      {(content.training || content.monitoring) && (
        <Page size="A4" style={styles.page}>
          <RunningHeader orgName={orgName} policyId={policyId} title={title} />
          <RunningFooter policyId={policyId} version={version} />
          {content.training && (
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Training Requirements</Text>
              <Text style={styles.bodyText}>{content.training}</Text>
            </View>
          )}
          {content.monitoring && (
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Quality Assurance and Monitoring</Text>
              <Text style={styles.bodyText}>{content.monitoring}</Text>
            </View>
          )}
        </Page>
      )}

      {/* ══ RELATED DOCUMENTS & APPENDICES ═══════════════════════════════════ */}
      {((content.relatedDocuments && content.relatedDocuments.length > 0) ||
        (content.appendices && content.appendices.length > 0)) && (
        <Page size="A4" style={styles.page}>
          <RunningHeader orgName={orgName} policyId={policyId} title={title} />
          <RunningFooter policyId={policyId} version={version} />

          {content.relatedDocuments && content.relatedDocuments.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Related Documents</Text>
              {content.relatedDocuments.map((doc, i) => (
                <Text key={i} style={styles.relatedItem}>• {doc}</Text>
              ))}
            </View>
          )}

          {content.appendices && content.appendices.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Appendices</Text>
              {content.appendices.map((app, i) => (
                <View key={i} style={{ marginBottom: 10 }}>
                  <Text style={styles.appendixTitle}>{app.title}</Text>
                  <Text style={styles.appendixDesc}>{app.description ?? app.content}</Text>
                </View>
              ))}
            </View>
          )}
        </Page>
      )}

      {/* ══ VERSION HISTORY ══════════════════════════════════════════════════ */}
      {content.versionHistory && content.versionHistory.length > 0 && (
        <Page size="A4" style={styles.page}>
          <RunningHeader orgName={orgName} policyId={policyId} title={title} />
          <RunningFooter policyId={policyId} version={version} />
          <Text style={styles.sectionHeading}>Version History</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCellVersion}>Version</Text>
            <Text style={[styles.tableCellDate, { color: C.white }]}>Date</Text>
            <Text style={[styles.tableCellAmend, { color: C.white, fontSize: 8 }]}>Amendment</Text>
          </View>
          {content.versionHistory.map((v, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.tableCellVersionBody}>{v.version}</Text>
              <Text style={styles.tableCellDateBody}>{v.date}</Text>
              <Text style={styles.tableCellAmendBody}>{v.amendment ?? v.changes}</Text>
            </View>
          ))}
        </Page>
      )}
    </Document>
  );
}
