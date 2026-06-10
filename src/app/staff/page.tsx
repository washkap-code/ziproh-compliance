"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { createBrowserClient } from "@supabase/ssr";
import { DOCUMENTS } from "@/lib/documents";

// ─── Types ────────────────────────────────────────────────────────────────────
type StaffRow = {
  id: string;
  user_id: string | null;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: "admin" | "manager" | "staff";
  status: "invited" | "active" | "deactivated";
  invited_at: string;
};

type StaffMember = {
  id: string;
  userId: string | null;
  name: string;
  email: string;
  role: "admin" | "manager" | "staff";
  status: "invited" | "active" | "deactivated";
  initials: string;
  colour: string;
  joinedDate: string;
  policiesRead: number;
  totalPolicies: number;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const MEMBER_COLOURS = ["#2E6FFF", "#8b5cf6", "#22c55e", "#ec4899", "#f59e0b", "#06b6d4", "#f97316"];

const ROLE_LABELS: Record<string, string> = {
  admin: "Admin", manager: "Manager", staff: "Care Staff",
};
const ROLE_COLORS: Record<string, { bg: string; text: string }> = {
  admin:   { bg: "#dbeafe", text: "#1e40af" },
  manager: { bg: "#ede9fe", text: "#6d28d9" },
  staff:   { bg: "#f3f4f6", text: "#374151" },
};

function complianceColor(pct: number) {
  if (pct >= 80) return "#22c55e";
  if (pct >= 60) return "#f59e0b";
  return "#ef4444";
}

function deriveDisplay(row: StaffRow, index: number): StaffMember {
  const name = [row.first_name, row.last_name].filter(Boolean).join(" ") || row.email;
  const initials = name
    .split(" ")
    .map((n) => n[0] ?? "")
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const colour =
    row.status === "invited"
      ? "#6b7280"
      : MEMBER_COLOURS[index % MEMBER_COLOURS.length];
  return {
    id: row.id,
    userId: row.user_id,
    name,
    email: row.email,
    role: row.role,
    status: row.status,
    initials,
    colour,
    joinedDate: row.invited_at?.slice(0, 10) ?? "",
    policiesRead: 0,
    totalPolicies: DOCUMENTS.length,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function StaffPage() {
  const [loading, setLoading]         = useState(true);
  const [staff, setStaff]             = useState<StaffMember[]>([]);
  const [orgName, setOrgName]         = useState("");
  const [filter, setFilter]           = useState<"all" | "active" | "invited">("all");
  const [showInvite, setShowInvite]   = useState(false);
  const [inviteName, setInviteName]   = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole]   = useState<"manager" | "staff">("staff");
  const [inviting, setInviting]             = useState(false);
  const [inviteError, setInviteError]       = useState("");
  const [inviteSuccess, setInviteSuccess]   = useState("");
  const [lastInviteLink, setLastInviteLink] = useState("");
  const [lastInviteName, setLastInviteName] = useState("");
  const [copiedLink, setCopiedLink]         = useState(false);
  const [activeStaff, setActiveStaff]       = useState<StaffMember | null>(null);

  // Load data
  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }

      // Profile for org name
      const { data: profile } = await supabase
        .from("profiles")
        .select("org_name")
        .eq("id", user.id)
        .single();
      if (profile?.org_name) setOrgName(profile.org_name);

      // Staff members for this org
      const { data: rows } = await supabase
        .from("staff_members")
        .select("id, user_id, email, first_name, last_name, role, status, invited_at")
        .eq("org_id", user.id)
        .order("invited_at", { ascending: true });

      if (!rows || rows.length === 0) { setLoading(false); return; }

      // Build initial display objects
      const members: StaffMember[] = (rows as StaffRow[]).map((r, i) => deriveDisplay(r, i));

      // Enrich with real read counts for members who have user_ids
      const userIds = members.filter((m) => m.userId).map((m) => m.userId as string);
      if (userIds.length > 0) {
        const { data: reads } = await supabase
          .from("read_records")
          .select("user_id")
          .in("user_id", userIds);

        if (reads) {
          const counts: Record<string, number> = {};
          for (const r of reads) counts[r.user_id] = (counts[r.user_id] || 0) + 1;
          for (const m of members) {
            if (m.userId) m.policiesRead = counts[m.userId] ?? 0;
          }
        }
      }

      setStaff(members);
      setLoading(false);
    })();
  }, []);

  // Invite handler — writes to Supabase
  async function sendInvite() {
    if (!inviteEmail.trim() || !inviteName.trim()) return;
    setInviting(true);
    setInviteError("");

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setInviting(false); return; }

    const parts = inviteName.trim().split(" ");
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ") || null;

    const { data, error } = await supabase
      .from("staff_members")
      .insert({
        org_id: user.id,
        email: inviteEmail.trim().toLowerCase(),
        first_name: firstName,
        last_name: lastName,
        role: inviteRole,
        status: "invited",
      })
      .select()
      .single();

    if (error) {
      setInviteError(
        error.code === "23505"
          ? "This email address is already in your staff list."
          : "Could not add staff member. Please try again."
      );
      setInviting(false);
      return;
    }

    if (data) {
      const newMember = deriveDisplay(data as StaffRow, staff.length);
      setStaff((prev) => [...prev, newMember]);
    }

    // Build a pre-filled invite link so the staff member's email is auto-populated
    const origin = typeof window !== "undefined" ? window.location.origin : "https://app.ziprohtraining.co.uk";
    const inviteLink = `${origin}/register?inviteEmail=${encodeURIComponent(inviteEmail.trim().toLowerCase())}`;
    setLastInviteLink(inviteLink);
    setLastInviteName(inviteName);

    setInviteEmail("");
    setInviteName("");
    setInviteRole("staff");
    setShowInvite(false);
    setInviting(false);
  }

  const filtered =
    filter === "all" ? staff : staff.filter((s) => s.status === filter);
  const activeCount  = staff.filter((s) => s.status === "active").length;
  const invitedCount = staff.filter((s) => s.status === "invited").length;
  const avgReading =
    activeCount > 0
      ? Math.round(
          staff
            .filter((s) => s.status === "active")
            .reduce((a, s) => a + (s.policiesRead / s.totalPolicies) * 100, 0) /
            activeCount
        )
      : 0;

  // ── Detail view ─────────────────────────────────────────────────────────────
  if (activeStaff) {
    const readPct = Math.round((activeStaff.policiesRead / activeStaff.totalPolicies) * 100);
    return (
      <DashboardLayout>
        <div className="max-w-3xl">
          <button onClick={() => setActiveStaff(null)} className="text-sm text-gray-400 hover:text-gray-600 mb-4">
            ← All Staff
          </button>

          <div className="card p-6 mb-5">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                style={{ backgroundColor: activeStaff.colour }}>
                {activeStaff.initials}
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{activeStaff.name}</h1>
                <p className="text-sm text-gray-500">{activeStaff.email}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: ROLE_COLORS[activeStaff.role].bg, color: ROLE_COLORS[activeStaff.role].text }}>
                    {ROLE_LABELS[activeStaff.role]}
                  </span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    activeStaff.status === "active" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {activeStaff.status === "active" ? "✓ Active" : "⏳ Invited — awaiting registration"}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: "#f8faff" }}>
                <div className="text-2xl font-bold" style={{ color: complianceColor(readPct) }}>
                  {activeStaff.status === "invited" ? "—" : `${readPct}%`}
                </div>
                <div className="text-xs text-gray-500">Policies Read</div>
                <div className="text-xs text-gray-400">
                  {activeStaff.status === "invited" ? "Not yet registered" : `${activeStaff.policiesRead}/${activeStaff.totalPolicies}`}
                </div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: "#f8faff" }}>
                <div className="text-2xl font-bold text-gray-400">—</div>
                <div className="text-xs text-gray-500">Training</div>
                <div className="text-xs text-gray-400">Coming soon</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: "#f8faff" }}>
                <div className="text-sm font-bold text-gray-700 mt-1">
                  {activeStaff.joinedDate
                    ? new Date(activeStaff.joinedDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
                    : "—"}
                </div>
                <div className="text-xs text-gray-500">Invited</div>
              </div>
            </div>
          </div>

          {activeStaff.status === "active" && (
            <div className="card p-5 mb-4">
              <h3 className="font-bold text-gray-900 mb-4">Reading Compliance</h3>
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                  <span>Policies acknowledged</span>
                  <span>{activeStaff.policiesRead} / {activeStaff.totalPolicies}</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all"
                    style={{ width: `${readPct}%`, backgroundColor: complianceColor(readPct) }} />
                </div>
              </div>
              {readPct < 80 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2 items-start text-sm">
                  <span>⚠️</span>
                  <p className="text-amber-800 text-xs">
                    Reading compliance is below the 80% target. Consider assigning a reading list with priority policies.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeStaff.status === "invited" && (
            <div className="card p-5 mb-4 border" style={{ borderColor: "#fde68a", backgroundColor: "#fffbeb" }}>
              <h3 className="font-bold text-amber-900 mb-2 text-sm">⏳ Awaiting Registration</h3>
              <p className="text-xs text-amber-800 mb-3">
                This staff member has been invited but hasn&apos;t created their account yet. Send them this link — their email will be pre-filled.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white rounded-lg px-3 py-2 text-xs font-mono text-gray-700 border border-amber-200 truncate">
                  {(typeof window !== "undefined" ? window.location.origin : "https://app.ziprohtraining.co.uk")}/register?inviteEmail={encodeURIComponent(activeStaff.email)}
                </div>
                <button
                  onClick={() => {
                    const link = `${typeof window !== "undefined" ? window.location.origin : "https://app.ziprohtraining.co.uk"}/register?inviteEmail=${encodeURIComponent(activeStaff.email)}`;
                    navigator.clipboard.writeText(link);
                  }}
                  className="px-3 py-2 rounded-lg text-xs font-semibold text-white whitespace-nowrap flex-shrink-0"
                  style={{ backgroundColor: "#f59e0b" }}
                >
                  Copy
                </button>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <Link href="/reading-lists" className="btn-secondary flex-1 text-sm text-center">📚 Assign Reading List</Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // ── List view ────────────────────────────────────────────────────────────────
  return (
    <DashboardLayout>
      <div className="max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Staff</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {orgName ? `Manage staff for ${orgName}` : "Manage staff access and track compliance"}
            </p>
          </div>
          <button onClick={() => { setShowInvite(true); setInviteError(""); }} className="btn-primary flex items-center gap-2">
            <span>＋</span> Invite Staff
          </button>
        </div>

        {/* Invite link modal — shown after adding a staff member */}
        {lastInviteLink && (
          <div className="mb-5 rounded-xl p-4" style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span>✅</span>
                <span className="text-sm font-semibold text-green-800">
                  {lastInviteName} has been added
                </span>
              </div>
              <button onClick={() => setLastInviteLink("")} className="text-green-400 hover:text-green-700 text-sm">✕</button>
            </div>
            <p className="text-xs text-green-700 mb-2">
              Share this link with them so they can create their account. Their email will be pre-filled.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white rounded-lg px-3 py-2 text-xs font-mono text-gray-700 border border-green-200 truncate">
                {lastInviteLink}
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(lastInviteLink);
                  setCopiedLink(true);
                  setTimeout(() => setCopiedLink(false), 2000);
                }}
                className="px-3 py-2 rounded-lg text-xs font-semibold text-white whitespace-nowrap flex-shrink-0"
                style={{ backgroundColor: copiedLink ? "#22c55e" : "#2E6FFF" }}
              >
                {copiedLink ? "✓ Copied!" : "Copy link"}
              </button>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Staff", value: loading ? "—" : staff.length.toString(), icon: "👥" },
            { label: "Active", value: loading ? "—" : activeCount.toString(), icon: "✅" },
            { label: "Invited", value: loading ? "—" : invitedCount.toString(), icon: "✉️" },
            { label: "Avg Policy Reading", value: loading ? "—" : `${avgReading}%`, icon: "📋" },
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
            {inviteError && (
              <p className="text-xs text-red-600 mb-3 bg-red-50 px-3 py-2 rounded-lg">{inviteError}</p>
            )}
            <div className="flex gap-3">
              <button onClick={() => { setShowInvite(false); setInviteError(""); }} className="btn-secondary">Cancel</button>
              <button
                onClick={sendInvite}
                disabled={!inviteEmail.trim() || !inviteName.trim() || inviting}
                className="btn-primary"
                style={{ opacity: !inviteEmail.trim() || !inviteName.trim() || inviting ? 0.6 : 1 }}
              >
                {inviting ? "Adding…" : "Add Staff Member →"}
              </button>
            </div>
          </div>
        )}

        {/* Filter tabs */}
        {staff.length > 0 && (
          <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl w-fit">
            {(["all", "active", "invited"] as const).map((f) => {
              const count = f === "all" ? staff.length : staff.filter((s) => s.status === f).length;
              return (
                <button key={f} onClick={() => setFilter(f)}
                  className="px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all"
                  style={{
                    backgroundColor: filter === f ? "white" : "transparent",
                    color: filter === f ? "#2E6FFF" : "#6b7280",
                    boxShadow: filter === f ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  }}>
                  {f === "all" ? `All (${count})` : f.charAt(0).toUpperCase() + f.slice(1) + ` (${count})`}
                </button>
              );
            })}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="card">
            <div className="space-y-3 p-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 rounded-xl bg-gray-100 animate-pulse" />
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {!loading && staff.length === 0 && (
          <div className="card text-center py-16">
            <div className="text-5xl mb-4">👥</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">No staff added yet</h2>
            <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
              Add your team to track their policy reading and compliance. Each staff member gets their own login to acknowledge policies.
            </p>
            <button onClick={() => setShowInvite(true)} className="btn-primary">
              ＋ Add Your First Staff Member
            </button>
          </div>
        )}

        {/* Staff table */}
        {!loading && staff.length > 0 && (
          <>
            <div className="card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    {["Staff Member", "Role", "Status", "Policies Read", ""].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((member) => {
                    const readPct = Math.round((member.policiesRead / member.totalPolicies) * 100);
                    return (
                      <tr key={member.id}
                        className="border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer"
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
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            member.status === "active" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-600"
                          }`}>
                            {member.status === "active" ? "✓ Active" : "⏳ Invited"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          {member.status === "invited" ? (
                            <span className="text-xs text-gray-400">—</span>
                          ) : (
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full rounded-full"
                                  style={{ width: `${readPct}%`, backgroundColor: complianceColor(readPct) }} />
                              </div>
                              <span className="text-xs font-medium" style={{ color: complianceColor(readPct) }}>
                                {readPct}%
                              </span>
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-gray-400 hover:text-blue-600">View →</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Compliance alert */}
            {staff.filter((s) => s.status === "active" && (s.policiesRead / s.totalPolicies) < 0.7).length > 0 && (
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                <span className="text-xl flex-shrink-0">⚠️</span>
                <div>
                  <p className="text-sm font-semibold text-amber-900">Compliance alerts</p>
                  <p className="text-sm text-amber-700 mt-0.5">
                    {staff.filter((s) => s.status === "active" && (s.policiesRead / s.totalPolicies) < 0.7).length} staff member(s) are below the 70% policy reading threshold.
                  </p>
                  <button className="mt-2 text-xs font-semibold text-amber-800 underline hover:no-underline">
                    Assign reading lists →
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
