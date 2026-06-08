"use client";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

type StaffMember = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "staff";
  status: "active" | "invited" | "deactivated";
  initials: string;
  colour: string;
  joinedDate: string;
  policiesRead: number;
  totalPolicies: number;
  lastActive: string;
  training: number; // % mandatory training complete
};

const DEMO_STAFF: StaffMember[] = [
  { id: "s1", name: "Washington Admin", email: "waskap@icloud.com", role: "admin", status: "active", initials: "W", colour: "#2E6FFF", joinedDate: "2026-01-01", policiesRead: 67, totalPolicies: 80, lastActive: "Today", training: 100 },
  { id: "s2", name: "Sarah Johnson", email: "sarah.johnson@example.com", role: "manager", status: "active", initials: "SJ", colour: "#8b5cf6", joinedDate: "2026-01-15", policiesRead: 54, totalPolicies: 80, lastActive: "Yesterday", training: 95 },
  { id: "s3", name: "Marcus Thompson", email: "m.thompson@example.com", role: "staff", status: "active", initials: "MT", colour: "#22c55e", joinedDate: "2026-02-01", policiesRead: 32, totalPolicies: 80, lastActive: "2 days ago", training: 82 },
  { id: "s4", name: "Priya Patel", email: "p.patel@example.com", role: "staff", status: "active", initials: "PP", colour: "#ec4899", joinedDate: "2026-02-14", policiesRead: 28, totalPolicies: 80, lastActive: "1 week ago", training: 74 },
  { id: "s5", name: "James Williams", email: "j.williams@example.com", role: "staff", status: "active", initials: "JW", colour: "#f59e0b", joinedDate: "2026-03-01", policiesRead: 18, totalPolicies: 80, lastActive: "3 days ago", training: 68 },
  { id: "s6", name: "Emma Clarke", email: "e.clarke@example.com", role: "staff", status: "invited", initials: "EC", colour: "#6b7280", joinedDate: "2026-06-01", policiesRead: 0, totalPolicies: 80, lastActive: "Never", training: 0 },
  { id: "s7", name: "Daniel Osei", email: "d.osei@example.com", role: "staff", status: "invited", initials: "DO", colour: "#6b7280", joinedDate: "2026-06-03", policiesRead: 0, totalPolicies: 80, lastActive: "Never", training: 0 },
];

const ROLE_LABELS: Record<string, string> = {
  admin: "Admin",
  manager: "Manager",
  staff: "Care Staff",
};

const ROLE_COLORS: Record<string, { bg: string; text: string }> = {
  admin: { bg: "#dbeafe", text: "#1e40af" },
  manager: { bg: "#ede9fe", text: "#6d28d9" },
  staff: { bg: "#f3f4f6", text: "#374151" },
};

function complianceColor(pct: number) {
  if (pct >= 90) return "#22c55e";
  if (pct >= 70) return "#f59e0b";
  return "#ef4444";
}

export default function StaffPage() {
  const [staff, setStaff] = useState<StaffMember[]>(DEMO_STAFF);
  const [showInvite, setShowInvite] = useState(false);
  const [filter, setFilter] = useState<"all" | "active" | "invited">("all");
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<"manager" | "staff">("staff");
  const [inviteName, setInviteName] = useState("");
  const [activeStaff, setActiveStaff] = useState<StaffMember | null>(null);

  const filtered = filter === "all" ? staff : staff.filter((s) => s.status === filter);
  const activeCount = staff.filter((s) => s.status === "active").length;
  const avgReading = Math.round(staff.filter((s) => s.status === "active").reduce((a, s) => a + (s.policiesRead / s.totalPolicies) * 100, 0) / activeCount);
  const avgTraining = Math.round(staff.filter((s) => s.status === "active").reduce((a, s) => a + s.training, 0) / activeCount);

  function sendInvite() {
    if (!inviteEmail.trim() || !inviteName.trim()) return;
    const initials = inviteName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    const newMember: StaffMember = {
      id: `s${Date.now()}`,
      name: inviteName,
      email: inviteEmail,
      role: inviteRole,
      status: "invited",
      initials,
      colour: "#6b7280",
      joinedDate: new Date().toISOString().slice(0, 10),
      policiesRead: 0,
      totalPolicies: 80,
      lastActive: "Never",
      training: 0,
    };
    setStaff((prev) => [...prev, newMember]);
    setInviteEmail("");
    setInviteName("");
    setShowInvite(false);
  }

  if (activeStaff) {
    const readPct = Math.round((activeStaff.policiesRead / activeStaff.totalPolicies) * 100);
    return (
      <DashboardLayout>
        <div className="max-w-3xl">
          <button onClick={() => setActiveStaff(null)} className="text-sm text-gray-400 hover:text-gray-600 mb-4">
            ← All Staff
          </button>

          <div className="card p-6 mb-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                style={{ backgroundColor: activeStaff.colour }}>
                {activeStaff.initials}
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{activeStaff.name}</h1>
                <p className="text-sm text-gray-500">{activeStaff.email}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: ROLE_COLORS[activeStaff.role].bg, color: ROLE_COLORS[activeStaff.role].text }}>
                    {ROLE_LABELS[activeStaff.role]}
                  </span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${activeStaff.status === "active" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                    {activeStaff.status === "active" ? "✓ Active" : "⏳ Invited"}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: "#f8faff" }}>
                <div className="text-2xl font-bold" style={{ color: complianceColor(readPct) }}>{readPct}%</div>
                <div className="text-xs text-gray-500">Policies Read</div>
                <div className="text-xs text-gray-400">{activeStaff.policiesRead}/{activeStaff.totalPolicies}</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: "#f8faff" }}>
                <div className="text-2xl font-bold" style={{ color: complianceColor(activeStaff.training) }}>{activeStaff.training}%</div>
                <div className="text-xs text-gray-500">Training Complete</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: "#f8faff" }}>
                <div className="text-sm font-bold text-gray-700">{activeStaff.lastActive}</div>
                <div className="text-xs text-gray-500">Last Active</div>
              </div>
            </div>
          </div>

          <div className="card p-5 mb-4">
            <h3 className="font-bold text-gray-900 mb-4">Reading Compliance</h3>
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                <span>Policies read</span>
                <span>{activeStaff.policiesRead} / {activeStaff.totalPolicies}</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full"
                  style={{ width: `${readPct}%`, backgroundColor: complianceColor(readPct) }} />
              </div>
            </div>
            {readPct < 80 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2 items-start text-sm">
                <span>⚠️</span>
                <p className="text-amber-800">Reading compliance is below the 80% target. Consider assigning a reading list with priority policies.</p>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button className="btn-primary flex-1">📧 Send Reminder</button>
            <button className="btn-secondary flex-1">📚 Assign Reading List</button>
            {activeStaff.role !== "admin" && (
              <button className="px-4 py-2 rounded-xl text-sm font-semibold border border-red-200 text-red-500 hover:bg-red-50 transition-colors">
                Deactivate
              </button>
            )}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Staff</h1>
            <p className="text-sm text-gray-500 mt-0.5">Manage staff access, monitor compliance and track training</p>
          </div>
          <button onClick={() => setShowInvite(true)} className="btn-primary flex items-center gap-2">
            <span>＋</span> Invite Staff
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Staff", value: staff.length.toString(), icon: "👥" },
            { label: "Active", value: activeCount.toString(), icon: "✅" },
            { label: "Avg Policy Reading", value: `${avgReading}%`, icon: "📋" },
            { label: "Avg Training", value: `${avgTraining}%`, icon: "🎓" },
          ].map((s) => (
            <div key={s.label} className="card p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{s.icon}</span>
                <span className="text-xs text-gray-500">{s.label}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Invite form */}
        {showInvite && (
          <div className="card p-5 mb-5 border-2" style={{ borderColor: "#2E6FFF" }}>
            <h2 className="font-bold text-gray-900 mb-4">Invite a Staff Member</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Full Name *</label>
                <input
                  value={inviteName}
                  onChange={(e) => setInviteName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Email Address *</label>
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Role</label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value as "manager" | "staff")}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 bg-white"
                >
                  <option value="staff">Care Staff</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowInvite(false)} className="btn-secondary">Cancel</button>
              <button
                onClick={sendInvite}
                disabled={!inviteEmail.trim() || !inviteName.trim()}
                className="btn-primary"
                style={{ opacity: !inviteEmail.trim() || !inviteName.trim() ? 0.5 : 1 }}
              >
                Send Invitation →
              </button>
            </div>
          </div>
        )}

        {/* Filter tabs */}
        <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl w-fit">
          {(["all", "active", "invited"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all"
              style={{
                backgroundColor: filter === f ? "white" : "transparent",
                color: filter === f ? "#2E6FFF" : "#6b7280",
                boxShadow: filter === f ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
            >
              {f === "all" ? `All (${staff.length})` : f === "active" ? `Active (${staff.filter((s) => s.status === "active").length})` : `Invited (${staff.filter((s) => s.status === "invited").length})`}
            </button>
          ))}
        </div>

        {/* Staff table */}
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                {["Staff Member", "Role", "Status", "Policies Read", "Training", "Last Active", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((member) => {
                const readPct = Math.round((member.policiesRead / member.totalPolicies) * 100);
                return (
                  <tr key={member.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => setActiveStaff(member)}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                          style={{ backgroundColor: member.colour }}>
                          {member.initials}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{member.name}</div>
                          <div className="text-xs text-gray-400">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: ROLE_COLORS[member.role].bg, color: ROLE_COLORS[member.role].text }}>
                        {ROLE_LABELS[member.role]}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${member.status === "active" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-600"}`}>
                        {member.status === "active" ? "✓ Active" : "⏳ Invited"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full"
                            style={{ width: `${readPct}%`, backgroundColor: complianceColor(readPct) }} />
                        </div>
                        <span className="text-xs font-medium" style={{ color: complianceColor(readPct) }}>
                          {readPct}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full"
                            style={{ width: `${member.training}%`, backgroundColor: complianceColor(member.training) }} />
                        </div>
                        <span className="text-xs font-medium" style={{ color: complianceColor(member.training) }}>
                          {member.training}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-400">{member.lastActive}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs text-gray-400 hover:text-blue-600">View →</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Compliance alerts */}
        {staff.some((s) => s.status === "active" && (s.policiesRead / s.totalPolicies) < 0.7) && (
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
            <span className="text-xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-sm font-semibold text-amber-900">Compliance alerts</p>
              <p className="text-sm text-amber-700 mt-0.5">
                {staff.filter((s) => s.status === "active" && (s.policiesRead / s.totalPolicies) < 0.7).length} staff member(s) are below the 70% policy reading threshold. Consider sending a reminder or assigning mandatory reading lists.
              </p>
              <button className="mt-2 text-xs font-semibold text-amber-800 underline hover:no-underline">
                Send bulk reminder →
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
