"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { DOCUMENTS, FLAGSHIP_IDS } from "@/lib/documents";

const KQ_COLOR: Record<string, string> = {
  Safe: "#22c55e", Effective: "#2E6FFF", Caring: "#ec4899",
  Responsive: "#f59e0b", "Well-Led": "#8b5cf6",
};

const KEY_QUESTIONS = ["Safe", "Effective", "Caring", "Responsive", "Well-Led"] as const;

type ReadRecord = { document_id: string; read_at: string };

// ── Getting Started checklist ─────────────────────────────────────────────────
type CheckStep = {
  id: string;
  label: string;
  desc: string;
  href: string;
  cta: string;
  done: boolean;
};

function GettingStarted({ steps, onDismiss }: { steps: CheckStep[]; onDismiss: () => void }) {
  const completed = steps.filter((s) => s.done).length;
  const pct = Math.round((completed / steps.length) * 100);

  return (
    <div className="card mb-8 relative" style={{ border: "2px solid #e8f0ff", background: "linear-gradient(135deg, #f0f6ff 0%, #ffffff 60%)" }}>
      {/* Dismiss button */}
      <button
        onClick={onDismiss}
        className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors text-lg leading-none"
        aria-label="Dismiss"
      >
        ✕
      </button>

      {/* Header */}
      <div className="mb-5 pr-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl">🚀</span>
          <h2 className="text-lg font-bold text-gray-900">Getting Started</h2>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: pct === 100 ? "#dcfce7" : "#e8f0ff", color: pct === 100 ? "#15803d" : "#2E6FFF" }}>
            {completed}/{steps.length} done
          </span>
        </div>
        <p className="text-xs text-gray-500">Complete these steps to get the most out of Ziproh.</p>
        {/* Progress bar */}
        <div className="mt-3 h-1.5 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, backgroundColor: pct === 100 ? "#22c55e" : "#2E6FFF" }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-start gap-3 p-3 rounded-xl transition-all"
            style={{
              backgroundColor: step.done ? "#f0fdf4" : "white",
              border: step.done ? "1px solid #bbf7d0" : "1px solid #e2e8f0",
              opacity: step.done ? 0.8 : 1,
            }}
          >
            {/* Checkbox */}
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                backgroundColor: step.done ? "#22c55e" : "#f3f4f6",
                border: step.done ? "none" : "2px solid #d1d5db",
              }}
            >
              {step.done && <span className="text-white text-xs">✓</span>}
            </div>
            <div className="flex-1 min-w-0">
              <div className={`text-xs font-semibold ${step.done ? "text-green-700 line-through" : "text-gray-800"}`}>
                {step.label}
              </div>
              <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">{step.desc}</div>
              {!step.done && (
                <Link href={step.href}
                  className="mt-1.5 text-xs font-semibold inline-block"
                  style={{ color: "#2E6FFF" }}>
                  {step.cta} →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {pct === 100 && (
        <div className="mt-5 p-4 rounded-xl text-center"
          style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <div className="text-2xl mb-1">🎉</div>
          <p className="text-sm font-semibold text-green-700">All set! You&apos;re ready for your next inspection.</p>
          <button onClick={onDismiss} className="mt-2 text-xs text-green-600 underline">Dismiss this checklist</button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

// ── Team compliance types ──────────────────────────────────────────────────────
type TeamMemberStat = { name: string; initials: string; colour: string; pct: number; read: number };
const TEAM_COLOURS = ["#2E6FFF", "#8b5cf6", "#22c55e", "#ec4899", "#f59e0b", "#06b6d4", "#f97316"];

export default function DashboardPage() {
  const [loading,    setLoading]    = useState(true);
  const [firstName,  setFirstName]  = useState("there");
  const [orgName,    setOrgName]    = useState("");
  const [profileComplete, setProfileComplete] = useState(false);
  const [readRecords,    setReadRecords]    = useState<ReadRecord[]>([]);
  const [auditCount,     setAuditCount]     = useState(0);
  const [readingListCount, setReadingListCount] = useState(0);
  const [staffCount,     setStaffCount]     = useState(0);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [teamStats,      setTeamStats]      = useState<TeamMemberStat[]>([]);
  const [trialDays,      setTrialDays]      = useState<number | null>(null);

  useEffect(() => {
    // Check dismissal from localStorage
    if (typeof window !== "undefined") {
      const dismissed = localStorage.getItem("ziproh_onboarding_dismissed");
      if (!dismissed) setShowOnboarding(true);
    }

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }

      const [profileRes, recordsRes, auditsRes, listsRes, staffRes] = await Promise.all([
        supabase.from("profiles").select("first_name, org_name, service_type, regulator, subscription_status, trial_ends_at").eq("id", user.id).single(),
        supabase.from("read_records").select("document_id, read_at").eq("user_id", user.id).order("read_at", { ascending: false }),
        supabase.from("audits").select("id", { count: "exact", head: true }).eq("org_id", user.id),
        supabase.from("reading_lists").select("id", { count: "exact", head: true }).eq("org_id", user.id),
        supabase.from("staff_members")
          .select("user_id, email, first_name, last_name, status")
          .eq("org_id", user.id)
          .eq("status", "active")
          .not("user_id", "is", null),
      ]);

      if (profileRes.data) {
        const p = profileRes.data;
        if (p.first_name) setFirstName(p.first_name);
        if (p.org_name)   setOrgName(p.org_name);
        setProfileComplete(!!(p.org_name && p.service_type && p.regulator));
        if (p.subscription_status === "trialing" && p.trial_ends_at) {
          const days = Math.ceil((new Date(p.trial_ends_at).getTime() - Date.now()) / 86_400_000);
          setTrialDays(days);
        }
      }
      if (recordsRes.data) setReadRecords(recordsRes.data as ReadRecord[]);
      setAuditCount(auditsRes.count ?? 0);
      setReadingListCount(listsRes.count ?? 0);

      const activeStaff = staffRes.data ?? [];
      setStaffCount(activeStaff.length);

      // Fetch team read counts for org-level compliance section
      if (activeStaff.length > 0) {
        const userIds = activeStaff.map((s: { user_id: string }) => s.user_id);
        const { data: teamReads } = await supabase
          .from("read_records")
          .select("user_id")
          .in("user_id", userIds);

        const counts: Record<string, number> = {};
        for (const r of teamReads ?? []) counts[r.user_id] = (counts[r.user_id] ?? 0) + 1;

        const stats: TeamMemberStat[] = activeStaff.map((s: { user_id: string; email: string; first_name: string | null; last_name: string | null }, i: number) => {
          const name = [s.first_name, s.last_name].filter(Boolean).join(" ") || s.email;
          const initials = name.split(" ").map((n: string) => n[0] ?? "").join("").toUpperCase().slice(0, 2);
          const read = counts[s.user_id] ?? 0;
          return { name, initials, colour: TEAM_COLOURS[i % TEAM_COLOURS.length], pct: Math.min(100, Math.round((read / DOCUMENTS.length) * 100)), read };
        });
        setTeamStats(stats.sort((a, b) => b.pct - a.pct));
      }

      setLoading(false);
    })();
  }, []);

  function dismissOnboarding() {
    if (typeof window !== "undefined") {
      localStorage.setItem("ziproh_onboarding_dismissed", "1");
    }
    setShowOnboarding(false);
  }

  // ── Derived stats ──────────────────────────────────────────────────────────
  const readIds = new Set(readRecords.map((r) => r.document_id));
  const total   = DOCUMENTS.length;
  const read    = readIds.size;
  const pct     = total > 0 ? Math.round((read / total) * 100) : 0;

  const flagshipRead  = DOCUMENTS.filter((d) => FLAGSHIP_IDS.has(d.id) && readIds.has(d.id)).length;
  const flagshipTotal = FLAGSHIP_IDS.size;

  const kqStats = KEY_QUESTIONS.map((q) => {
    const docs = DOCUMENTS.filter((d) => d.keyQuestion === q);
    const done = docs.filter((d) => readIds.has(d.id)).length;
    return { q, total: docs.length, done, pct: docs.length > 0 ? Math.round((done / docs.length) * 100) : 0 };
  });

  const needsAttention = DOCUMENTS.filter((d) => d.status === "updated" && !readIds.has(d.id)).length;

  const recentActivity = readRecords.slice(0, 5).map((r) => {
    const doc = DOCUMENTS.find((d) => d.id === r.document_id);
    return doc ? { ...doc, readAt: r.read_at } : null;
  }).filter(Boolean) as (typeof DOCUMENTS[0] & { readAt: string })[];

  const hour     = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  // ── Onboarding steps ───────────────────────────────────────────────────────
  const onboardingSteps: CheckStep[] = [
    {
      id: "account",
      label: "Create your account",
      desc: "You're in! Your 14-day free trial is active.",
      href: "/account",
      cta: "View account",
      done: true,
    },
    {
      id: "profile",
      label: "Complete your profile",
      desc: "Add your organisation name, service type, and regulator.",
      href: "/account",
      cta: "Complete profile",
      done: profileComplete,
    },
    {
      id: "policy",
      label: "Read your first policy",
      desc: "Browse the policy library and acknowledge a document.",
      href: "/compliance",
      cta: "Browse policies",
      done: read > 0,
    },
    {
      id: "readinglist",
      label: "Create a reading list",
      desc: "Assign priority policies for your team to read.",
      href: "/reading-lists",
      cta: "Create reading list",
      done: readingListCount > 0,
    },
    {
      id: "audit",
      label: "Run your first audit",
      desc: "Use an audit template to check compliance in your service.",
      href: "/audit",
      cta: "Start audit",
      done: auditCount > 0,
    },
    {
      id: "staff",
      label: "Invite a team member",
      desc: "Add staff so they can read policies and track their compliance.",
      href: "/staff",
      cta: "Add staff",
      done: staffCount > 0,
    },
  ];

  const allOnboardingDone = onboardingSteps.every((s) => s.done);

  const STATS = [
    {
      label: "Policies acknowledged",
      value: loading ? "—" : `${read}/${total}`,
      sub: loading ? "" : `${pct}% complete`,
      color: "#2E6FFF",
      icon: "📋",
    },
    {
      label: "Comprehensive policies read",
      value: loading ? "—" : `${flagshipRead}/${flagshipTotal}`,
      sub: "In-depth flagship policies",
      color: "#8b5cf6",
      icon: "⭐",
    },
    {
      label: "Updates needing attention",
      value: loading ? "—" : String(needsAttention),
      sub: needsAttention > 0 ? "Acknowledge to stay current" : "All up to date",
      color: needsAttention > 0 ? "#f59e0b" : "#22c55e",
      icon: needsAttention > 0 ? "⚠️" : "✅",
    },
    {
      label: "Lowest KQ completion",
      value: loading ? "—" : `${Math.min(...kqStats.map(k => k.pct))}%`,
      sub: loading ? "" : kqStats.sort((a, b) => a.pct - b.pct)[0]?.q ?? "",
      color: "#ec4899",
      icon: "🔍",
    },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {loading ? "Loading…" : `${greeting}, ${firstName} 👋`}
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            {orgName ? `Compliance overview for ${orgName}` : "Your compliance overview"}
          </p>
        </div>

        {/* Trial countdown */}
        {!loading && trialDays !== null && trialDays > 0 && (
          <Link
            href="/upgrade"
            className="flex-shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all hover:shadow-md"
            style={{
              backgroundColor: trialDays <= 3 ? "#fee2e2" : "#fff8ed",
              border: `1px solid ${trialDays <= 3 ? "#fca5a5" : "#fde68a"}`,
            }}
          >
            <span className="text-xl">⏱</span>
            <div>
              <div className="text-sm font-bold" style={{ color: trialDays <= 3 ? "#b91c1c" : "#92400e" }}>
                {trialDays} day{trialDays !== 1 ? "s" : ""} left on trial
              </div>
              <div className="text-xs" style={{ color: trialDays <= 3 ? "#dc2626" : "#b45309" }}>
                Upgrade to keep full access →
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* ── Getting Started checklist ──────────────────────────────────────── */}
      {!loading && showOnboarding && (
        <GettingStarted steps={onboardingSteps} onDismiss={dismissOnboarding} />
      )}

      {/* Alert banner — only show if there are unread updates */}
      {!loading && needsAttention > 0 && (
        <div className="rounded-xl p-4 mb-6 flex items-center gap-4"
          style={{ backgroundColor: "#fef3c7", border: "1px solid #fbbf24" }}>
          <span className="text-2xl">⚠️</span>
          <div className="flex-1">
            <div className="font-semibold text-amber-900 text-sm">
              {needsAttention} {needsAttention === 1 ? "policy needs" : "policies need"} your attention
            </div>
            <div className="text-amber-700 text-xs mt-0.5">
              Recent regulatory updates have been applied — acknowledge to stay compliant
            </div>
          </div>
          <Link href="/compliance"
            className="text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap"
            style={{ backgroundColor: "#f59e0b", color: "white" }}>
            Review Now
          </Link>
        </div>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="card">
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <div className="w-2 h-2 rounded-full mt-1" style={{ backgroundColor: stat.color }} />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-gray-700">{stat.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Team Compliance Overview (managers only) ──────────────────────────── */}
      {!loading && teamStats.length > 0 && (
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-bold text-gray-900">Team Compliance</h2>
              <p className="text-xs text-gray-400 mt-0.5">Active staff — policy acknowledgement rates</p>
            </div>
            <div className="flex gap-2">
              <Link href="/staff/matrix" className="text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                style={{ borderColor: "#e2e8f0", color: "#6b7280" }}>
                Full Matrix →
              </Link>
              <Link href="/staff" className="text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all hover:bg-gray-50"
                style={{ borderColor: "#e2e8f0", color: "#6b7280" }}>
                Manage Staff →
              </Link>
            </div>
          </div>

          {/* Team average */}
          <div className="grid grid-cols-3 gap-4 mb-5 p-4 rounded-xl" style={{ backgroundColor: "#f8faff", border: "1px solid #e8f0ff" }}>
            {(() => {
              const avg = Math.round(teamStats.reduce((s, m) => s + m.pct, 0) / teamStats.length);
              const above80 = teamStats.filter(m => m.pct >= 80).length;
              const below50 = teamStats.filter(m => m.pct < 50).length;
              return (
                <>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: avg >= 80 ? "#22c55e" : avg >= 50 ? "#f59e0b" : "#ef4444" }}>{avg}%</div>
                    <div className="text-xs text-gray-500 mt-0.5">Team average</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{above80}</div>
                    <div className="text-xs text-gray-500 mt-0.5">Above 80%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: below50 > 0 ? "#ef4444" : "#22c55e" }}>{below50}</div>
                    <div className="text-xs text-gray-500 mt-0.5">Below 50%</div>
                  </div>
                </>
              );
            })()}
          </div>

          {/* Per-member bars */}
          <div className="space-y-3">
            {teamStats.slice(0, 6).map(member => (
              <div key={member.name} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: member.colour }}>
                  {member.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-700 truncate">{member.name}</span>
                    <span className="text-xs font-bold ml-2 flex-shrink-0"
                      style={{ color: member.pct >= 80 ? "#22c55e" : member.pct >= 50 ? "#f59e0b" : "#ef4444" }}>
                      {member.pct}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all"
                      style={{ width: `${member.pct}%`, backgroundColor: member.pct >= 80 ? "#22c55e" : member.pct >= 50 ? "#f59e0b" : "#ef4444" }} />
                  </div>
                </div>
                <span className="text-xs text-gray-400 w-12 text-right flex-shrink-0">{member.read}/{DOCUMENTS.length}</span>
              </div>
            ))}
            {teamStats.length > 6 && (
              <Link href="/staff/matrix" className="block text-center text-xs font-semibold text-blue-500 hover:text-blue-700 pt-1">
                +{teamStats.length - 6} more staff — view full matrix
              </Link>
            )}
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Recent activity */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-900">Recently Acknowledged</h2>
            <Link href="/compliance" className="text-xs font-semibold" style={{ color: "#2E6FFF" }}>
              View all →
            </Link>
          </div>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-12 rounded-xl bg-gray-100 animate-pulse" />
              ))}
            </div>
          ) : recentActivity.length > 0 ? (
            <div className="space-y-2">
              {recentActivity.map((doc) => (
                <Link key={doc.id} href={`/compliance/${doc.id}`}>
                  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${KQ_COLOR[doc.keyQuestion]}15` }}>
                      <span className="text-sm">✓</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900 truncate">{doc.title}</div>
                      <div className="text-xs text-gray-400">
                        {doc.keyQuestion} • Acknowledged{" "}
                        {new Date(doc.readAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#f0fdf4", color: "#16a34a" }}>
                      Read ✓
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="text-4xl mb-3">📚</div>
              <p className="text-sm font-semibold text-gray-700 mb-1">No policies acknowledged yet</p>
              <p className="text-xs text-gray-400 mb-4">Start reading policies and click Acknowledge to track your compliance.</p>
              <Link href="/compliance" className="btn-primary text-xs">
                Browse Policies →
              </Link>
            </div>
          )}

          {/* Unacknowledged updated policies */}
          {!loading && needsAttention > 0 && (
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid #f3f4f6" }}>
              <p className="text-xs font-semibold text-amber-700 mb-2">⚠️ Recently updated — needs acknowledgement</p>
              <div className="space-y-2">
                {DOCUMENTS.filter((d) => d.status === "updated" && !readIds.has(d.id)).slice(0, 3).map((doc) => (
                  <Link key={doc.id} href={`/compliance/${doc.id}`}>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 transition-colors cursor-pointer"
                      style={{ border: "1px solid #fde68a" }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-amber-50">
                        <span className="text-sm">📄</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900 truncate">{doc.title}</div>
                        <div className="text-xs text-gray-400">{doc.keyQuestion} • Updated recently</div>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 whitespace-nowrap">
                        Read now
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="space-y-5">

          {/* CQC Key Questions — live */}
          <div className="card">
            <h2 className="font-bold text-gray-900 mb-4 text-sm">CQC Key Questions — Completion</h2>
            {loading ? (
              <div className="space-y-3">
                {[1,2,3,4,5].map(i => <div key={i} className="h-6 rounded bg-gray-100 animate-pulse" />)}
              </div>
            ) : (
              <div className="space-y-3">
                {kqStats.map((kq) => (
                  <Link key={kq.q} href={`/compliance?kq=${kq.q}`}>
                    <div className="group cursor-pointer">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{kq.q}</span>
                        <span className="font-bold" style={{ color: KQ_COLOR[kq.q] }}>
                          {kq.done}/{kq.total}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full rounded-full transition-all"
                          style={{ width: `${kq.pct}%`, backgroundColor: KQ_COLOR[kq.q] }} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Quick access */}
          <div className="card">
            <h2 className="font-bold text-gray-900 mb-4 text-sm">Quick Access</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "All Policies",     icon: "📋", href: "/compliance" },
                { label: "Reading Lists",    icon: "📚", href: "/reading-lists" },
                { label: "Inspection Prep",  icon: "🏛️", href: "/inspection-prep" },
                { label: "Policy Reviews",   icon: "📅", href: "/policy-reviews" },
                { label: "Evidence Report",  icon: "📊", href: "/compliance-report" },
                { label: "Flagship Policies",icon: "⭐", href: "/compliance?filter=flagship" },
                { label: "Audit Centre",     icon: "🔍", href: "/audit" },
                { label: "Get Support",      icon: "💬", href: "/help" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-gray-50 transition-colors text-center">
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-xs font-medium text-gray-600">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Compliance score ring */}
          <div className="card text-center">
            <h2 className="font-bold text-gray-900 mb-3 text-sm">My Compliance Score</h2>
            <div className="relative w-24 h-24 mx-auto mb-3">
              <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.9" fill="none"
                  stroke="#2E6FFF" strokeWidth="3"
                  strokeDasharray={`${loading ? 0 : pct} ${100 - (loading ? 0 : pct)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-gray-900">{loading ? "—" : `${pct}%`}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {loading ? "Loading…" : `${read} of ${total} policies acknowledged`}
            </p>
            <Link href="/compliance" className="mt-3 btn-primary text-xs py-2 inline-block">
              Continue Reading
            </Link>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
