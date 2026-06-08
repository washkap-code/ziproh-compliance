import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

const STATS = [
  { label: "Policies up to date", value: "340", sub: "Last updated today", color: "#22c55e", icon: "📋" },
  { label: "Policies requiring attention", value: "3", sub: "Action needed", color: "#f59e0b", icon: "⚠️" },
  { label: "Staff reading completion", value: "82%", sub: "18 of 22 staff", color: "#2E6FFF", icon: "📚" },
  { label: "Audit score", value: "91%", sub: "Last audit: May 2026", color: "#8b5cf6", icon: "🔍" },
];

const RECENT_DOCS = [
  { name: "Safeguarding Adults Policy", cat: "Safe", updated: "Today", status: "updated" },
  { name: "Medication Administration Procedure", cat: "Effective", updated: "2 days ago", status: "read" },
  { name: "Infection Prevention & Control Policy", cat: "Safe", updated: "5 days ago", status: "updated" },
  { name: "Lone Working Policy", cat: "Well-Led", updated: "1 week ago", status: "pending" },
  { name: "Complaints Handling Procedure", cat: "Responsive", updated: "2 weeks ago", status: "read" },
];

const NOTIFICATIONS = [
  { title: "Safeguarding policy updated", desc: "New CQC guidance incorporated", time: "2 hours ago", type: "update" },
  { title: "3 staff yet to read", desc: "Medication Policy — chase reading list", time: "Yesterday", type: "alert" },
  { title: "Audit due in 30 days", desc: "Monthly compliance audit", time: "Reminder", type: "reminder" },
];

const KEY_QUESTIONS = [
  { q: "Safe", score: 88, color: "#22c55e" },
  { q: "Effective", score: 94, color: "#2E6FFF" },
  { q: "Caring", score: 97, color: "#8b5cf6" },
  { q: "Responsive", score: 91, color: "#f59e0b" },
  { q: "Well-Led", score: 85, color: "#ec4899" },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Good morning, Washington 👋</h1>
        <p className="text-gray-500 mt-1">Here&apos;s your compliance overview for Sunrise Care Home</p>
      </div>

      {/* Alert banner */}
      <div className="rounded-xl p-4 mb-6 flex items-center gap-4"
        style={{ backgroundColor: "#fef3c7", border: "1px solid #fbbf24" }}>
        <span className="text-2xl">⚠️</span>
        <div className="flex-1">
          <div className="font-semibold text-amber-900 text-sm">3 policies need your attention</div>
          <div className="text-amber-700 text-xs mt-0.5">New regulatory updates have been applied — review and acknowledge to stay compliant</div>
        </div>
        <Link href="/compliance?filter=attention"
          className="text-xs font-semibold px-4 py-2 rounded-lg"
          style={{ backgroundColor: "#f59e0b", color: "white" }}>
          Review Now
        </Link>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="card">
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <div className="status-indicator" style={{ backgroundColor: stat.color }}></div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1"
              style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs font-semibold text-gray-700">{stat.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent documents */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-900">Recent Policy Activity</h2>
            <Link href="/compliance" className="text-xs font-semibold" style={{ color: "#2E6FFF" }}>
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {RECENT_DOCS.map((doc) => (
              <Link key={doc.name} href={`/compliance/${doc.name.toLowerCase().replace(/ /g, "-")}`}>
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#e8f0ff" }}>
                    <span className="text-sm">📄</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900 truncate">{doc.name}</div>
                    <div className="text-xs text-gray-400">{doc.cat} • Updated {doc.updated}</div>
                  </div>
                  <span className={`badge text-xs ${
                    doc.status === "updated" ? "badge-blue" :
                    doc.status === "read" ? "badge-green" :
                    "badge-amber"
                  }`}>
                    {doc.status === "updated" ? "New update" :
                     doc.status === "read" ? "Read ✓" : "Pending"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* CQC Key Questions */}
          <div className="card">
            <h2 className="font-bold text-gray-900 mb-4">CQC Key Questions</h2>
            <div className="space-y-3">
              {KEY_QUESTIONS.map((kq) => (
                <div key={kq.q}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-medium text-gray-700">{kq.q}</span>
                    <span className="font-bold" style={{ color: kq.color }}>{kq.score}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full transition-all"
                      style={{ width: `${kq.score}%`, backgroundColor: kq.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="card">
            <h2 className="font-bold text-gray-900 mb-4">Notifications</h2>
            <div className="space-y-3">
              {NOTIFICATIONS.map((n) => (
                <div key={n.title} className="flex gap-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: n.type === "update" ? "#e8f0ff" : n.type === "alert" ? "#fef3c7" : "#f3f4f6" }}>
                    <span className="text-sm">
                      {n.type === "update" ? "🔄" : n.type === "alert" ? "⚠️" : "📅"}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">{n.title}</div>
                    <div className="text-xs text-gray-400">{n.desc}</div>
                    <div className="text-xs text-gray-300 mt-0.5">{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="card">
            <h2 className="font-bold text-gray-900 mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Upload Doc", icon: "⬆️", href: "/compliance?upload=true" },
                { label: "New Audit", icon: "📊", href: "/audit/new" },
                { label: "Staff List", icon: "👥", href: "/staff" },
                { label: "Get Support", icon: "💬", href: "/help" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-gray-50 transition-colors text-center">
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-xs font-medium text-gray-600">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
