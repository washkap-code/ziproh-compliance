import DashboardLayout from "@/components/DashboardLayout";
import { DOCUMENTS, DOCUMENT_CONTENT, getDocumentById } from "@/lib/documents";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return DOCUMENTS.map((doc) => ({ id: doc.id }));
}

const KQ_COLOR: Record<string, string> = {
  Safe: "#22c55e", Effective: "#2E6FFF", Caring: "#ec4899",
  Responsive: "#f59e0b", "Well-Led": "#8b5cf6",
};

// Default content for documents without specific content defined
const DEFAULT_CONTENT = {
  purpose: "This policy sets out the organisation's commitment and approach to maintaining compliance in accordance with regulatory requirements and best practice guidance. It provides a framework for all staff to follow and ensures consistent, high-quality standards across the service.",
  scope: "This policy applies to all staff employed by or working on behalf of the organisation, including permanent, temporary, bank and agency staff, volunteers, and students on placement.",
  responsibilities: [
    {
      role: "Registered Manager",
      duties: ["Overall responsibility for implementing and reviewing this policy", "Ensure all staff are trained and that the policy is followed at all times", "Review and update the policy at least annually"],
    },
    {
      role: "Senior Care Staff / Team Leaders",
      duties: ["Support and supervise staff in applying this policy", "Escalate concerns appropriately", "Lead by example in adhering to policy requirements"],
    },
    {
      role: "All Staff",
      duties: ["Read, understand and comply with this policy", "Report any concerns or breaches to the Registered Manager immediately", "Complete required training within specified timescales"],
    },
  ],
  keyPoints: [
    "All actions must be taken in the best interests of service users",
    "Records must be maintained accurately and contemporaneously",
    "Any concerns must be reported using the organisation's incident reporting procedure",
    "Training must be completed as required and kept up to date",
    "This policy must be reviewed annually or following any significant change",
  ],
  legislation: [
    "Health and Social Care Act 2008 (Regulated Activities) Regulations 2014",
    "Care Act 2014",
    "Mental Capacity Act 2005 and Liberty Protection Safeguards",
    "Equality Act 2010",
    "Data Protection Act 2018 / UK GDPR",
    "Health and Safety at Work etc. Act 1974",
  ],
  sections: [] as { heading: string; body: string }[],
};

// Get related policies (same key question, different doc)
function getRelatedPolicies(docId: string, keyQuestion: string) {
  return DOCUMENTS
    .filter((d) => d.keyQuestion === keyQuestion && d.id !== docId)
    .slice(0, 4);
}

export default async function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doc = getDocumentById(id);
  if (!doc) notFound();

  const content = DOCUMENT_CONTENT[id] ?? DEFAULT_CONTENT;
  const color = KQ_COLOR[doc.keyQuestion] || "#2E6FFF";
  const related = getRelatedPolicies(id, doc.keyQuestion);

  return (
    <DashboardLayout>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/dashboard" className="hover:text-gray-600">Dashboard</Link>
        <span>›</span>
        <Link href="/compliance" className="hover:text-gray-600">Compliance Centre</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium truncate max-w-xs">{doc.title}</span>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main document */}
        <div className="lg:col-span-3 space-y-5">
          {/* Document header */}
          <div className="card">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${color}15`, color }}>
                    {doc.keyQuestion}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {doc.subcategory}
                  </span>
                  {doc.status === "updated" && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                      🔄 Recently Updated
                    </span>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{doc.title}</h1>
                <p className="text-gray-500 text-sm leading-relaxed">{doc.summary}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-gray-400 pt-4 border-t border-gray-50">
              <span>📋 Version {doc.version}</span>
              <span>📅 Updated {new Date(doc.lastUpdated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span>⏱ ~{doc.readTime} min read</span>
              <span>🌍 {doc.regulators.join(", ")}</span>
            </div>
          </div>

          {/* Action bar */}
          <div className="card flex flex-wrap gap-3" style={{ padding: "1rem 1.25rem" }}>
            <button className="btn-primary text-sm py-2">✓ Mark as Read</button>
            <button className="btn-secondary text-sm py-2">📥 Download PDF</button>
            <button className="btn-secondary text-sm py-2">📚 Add to Reading List</button>
            <button className="btn-secondary text-sm py-2">🖨 Print</button>
            <div className="ml-auto flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
              Current &amp; compliant
            </div>
          </div>

          {/* Document body */}
          <div className="card space-y-6">
            {/* Purpose */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: `${color}15`, color }}>1</span>
                Purpose
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{content.purpose}</p>
            </div>

            <div className="pt-5 border-t border-gray-50">
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: `${color}15`, color }}>2</span>
                Scope
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{content.scope}</p>
            </div>

            <div className="pt-5 border-t border-gray-50">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: `${color}15`, color }}>3</span>
                Responsibilities
              </h2>
              <div className="space-y-3">
                {content.responsibilities.map((r) => (
                  <div key={r.role} className="rounded-xl p-4" style={{ backgroundColor: "#f8faff" }}>
                    <div className="font-semibold text-gray-900 text-sm mb-2">{r.role}</div>
                    <ul className="space-y-1">
                      {r.duties.map((duty, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span style={{ color }} className="mt-0.5 flex-shrink-0 text-xs">•</span>
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional sections (document-specific) */}
            {content.sections && content.sections.length > 0 && content.sections.map((section, i) => (
              <div key={section.heading} className="pt-5 border-t border-gray-50">
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: `${color}15`, color }}>{4 + i}</span>
                  {section.heading}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">{section.body}</p>
              </div>
            ))}

            <div className="pt-5 border-t border-gray-50">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: `${color}15`, color }}>
                  {(content.sections?.length ?? 0) + 4}
                </span>
                Key Points
              </h2>
              <ul className="space-y-2.5">
                {content.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span style={{ color }} className="mt-0.5 flex-shrink-0 text-base">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-gray-50">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: `${color}15`, color }}>
                  {(content.sections?.length ?? 0) + 5}
                </span>
                Relevant Legislation &amp; Standards
              </h2>
              <ul className="space-y-2">
                {content.legislation.map((law) => (
                  <li key={law} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-300 flex-shrink-0 mt-0.5">⚖️</span>
                    {law}
                  </li>
                ))}
              </ul>
            </div>

            {/* Acknowledgement */}
            <div className="pt-5 border-t border-gray-50">
              <div className="rounded-xl p-5" style={{ backgroundColor: `${color}08`, border: `1px solid ${color}20` }}>
                <h2 className="text-base font-bold text-gray-900 mb-1">Staff Acknowledgement</h2>
                <p className="text-sm text-gray-500 mb-4">
                  By clicking below, you confirm that you have read, understood and will comply with this policy.
                </p>
                <button className="btn-primary text-sm py-2.5 px-6">
                  ✓ I have read and understood this policy
                </button>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {doc.tags.map((tag) => (
              <span key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Document info */}
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-4 text-sm">Document Info</h3>
            <div className="space-y-3 text-sm">
              {[
                { label: "Version", value: `v${doc.version}` },
                { label: "Last Updated", value: new Date(doc.lastUpdated).toLocaleDateString("en-GB") },
                { label: "Read Time", value: `~${doc.readTime} mins` },
                { label: "Category", value: doc.subcategory },
                { label: "Key Question", value: doc.keyQuestion },
                { label: "Status", value: doc.status === "updated" ? "Recently Updated" : "Current" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between gap-2">
                  <span className="text-gray-400 flex-shrink-0">{item.label}</span>
                  <span className="font-medium text-gray-700 text-right text-xs">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service types */}
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Service Types</h3>
            <div className="flex flex-wrap gap-1.5">
              {doc.serviceTypes.map((st) => (
                <span key={st} className="text-xs px-2 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100">
                  {st}
                </span>
              ))}
            </div>
          </div>

          {/* Regulators */}
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Regulators Covered</h3>
            <div className="flex flex-wrap gap-2">
              {doc.regulators.map((reg) => (
                <span key={reg} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700">
                  ✓ {reg}
                </span>
              ))}
            </div>
          </div>

          {/* Related policies */}
          {related.length > 0 && (
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Related Policies</h3>
              <div className="space-y-2">
                {related.map((rel) => (
                  <Link key={rel.id} href={`/compliance/${rel.id}`}
                    className="block text-xs text-gray-600 hover:text-blue-600 transition-colors flex items-start gap-2 group">
                    <span className="text-gray-300 group-hover:text-blue-400 flex-shrink-0 mt-0.5">📄</span>
                    <span>{rel.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Reading history */}
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Reading History</h3>
            <div className="space-y-2">
              {[
                { name: "Washington", date: "Today", initials: "W", color: "#2E6FFF" },
                { name: "Sarah K.", date: "3 days ago", initials: "S", color: "#8b5cf6" },
                { name: "Marcus T.", date: "1 week ago", initials: "M", color: "#22c55e" },
              ].map((reader) => (
                <div key={reader.name} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white font-bold flex-shrink-0"
                    style={{ backgroundColor: reader.color }}>
                    {reader.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-700">{reader.name}</div>
                    <div className="text-xs text-gray-400">{reader.date}</div>
                  </div>
                  <span className="text-green-500 text-xs">✓</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ziproh AI */}
          <div className="card p-4 text-center" style={{ background: "linear-gradient(135deg, #2E6FFF10, #8b5cf610)", border: "1px solid #2E6FFF20" }}>
            <div className="text-2xl mb-1">🤖</div>
            <p className="text-xs font-medium text-gray-700 mb-2">Have questions about this policy?</p>
            <Link href="/ai-assistant"
              className="block text-xs font-semibold py-2 px-4 rounded-lg text-white"
              style={{ backgroundColor: "#2E6FFF" }}>
              Ask Ziproh AI →
            </Link>
          </div>

          <Link href="/compliance" className="block w-full text-center py-2.5 text-sm font-medium text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            ← Back to Compliance Centre
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
