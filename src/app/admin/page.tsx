"use client";

/**
 * /admin — Ziproh Admin Dashboard
 * ─────────────────────────────────
 * Protected: only accessible to waskap@icloud.com
 * Access by typing /admin in the URL — no nav link shown anywhere.
 *
 * Shows: overview stats, all organisations, subscription breakdown,
 *        per-user plan / status / trial info, and a search filter.
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createBrowserClient } from "@supabase/ssr";
import type { Profile } from "@/lib/supabase";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ADMIN_EMAILS = ["waskap@icloud.com", "melary@ziproh.com"];

// ─── Types ────────────────────────────────────────────────────────────────────

type SortKey = "created_at" | "org_name" | "plan" | "subscription_status";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function planLabel(plan: string) {
  const map: Record<string, string> = {
    starter:      "Starter",
    professional: "Professional",
    enterprise:   "Enterprise",
  };
  return map[plan] ?? plan;
}

function statusBadge(status: string) {
  const map: Record<string, { label: string; bg: string; color: string }> = {
    trialing:  { label: "Trial",    bg: "#e8f0ff", color: "#2E6FFF" },
    active:    { label: "Active",   bg: "#dcfce7", color: "#15803d" },
    past_due:  { label: "Past Due", bg: "#fef3c7", color: "#b45309" },
    canceled:  { label: "Canceled", bg: "#fee2e2", color: "#b91c1c" },
  };
  const s = map[status] ?? { label: status, bg: "#f3f4f6", color: "#374151" };
  return (
    <span
      className="px-2 py-0.5 rounded-full text-xs font-semibold"
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
}

function planBadge(plan: string) {
  const map: Record<string, { bg: string; color: string }> = {
    starter:      { bg: "#f3f4f6", color: "#374151" },
    professional: { bg: "#e8f0ff", color: "#2E6FFF" },
    enterprise:   { bg: "#faf5ff", color: "#7c3aed" },
  };
  const s = map[plan] ?? { bg: "#f3f4f6", color: "#374151" };
  return (
    <span
      className="px-2 py-0.5 rounded-full text-xs font-semibold"
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {planLabel(plan)}
    </span>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });
}

function trialDaysLeft(trialEndsAt: string) {
  const diff = new Date(trialEndsAt).getTime() - Date.now();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const router = useRouter();

  const [checking, setChecking]   = useState(true);
  const [allowed,  setAllowed]    = useState(false);
  const [profiles, setProfiles]   = useState<Profile[]>([]);
  const [loading,  setLoading]    = useState(true);
  const [search,   setSearch]     = useState("");
  const [sortKey,  setSortKey]    = useState<SortKey>("created_at");
  const [sortAsc,  setSortAsc]    = useState(false);
  const [planFilter, setPlanFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // PDF password management
  const [pdfEmail,     setPdfEmail]     = useState("");
  const [pdfLookup,    setPdfLookup]    = useState<{ orgId: string; orgName: string; email: string; hasPassword: boolean } | null>(null);
  const [pdfLookupErr, setPdfLookupErr] = useState<string | null>(null);
  const [pdfLooking,   setPdfLooking]   = useState(false);
  const [pdfPassword,  setPdfPassword]  = useState("");
  const [pdfSaving,    setPdfSaving]    = useState(false);
  const [pdfMsg,       setPdfMsg]       = useState<{ text: string; ok: boolean } | null>(null);

  // Policy update email broadcast
  const [notifyDocId,   setNotifyDocId]   = useState("");
  const [notifySummary, setNotifySummary] = useState("");
  const [notifySending, setNotifySending] = useState(false);
  const [notifyMsg,     setNotifyMsg]     = useState<{ text: string; ok: boolean } | null>(null);

  async function sendPolicyUpdateBroadcast() {
    if (!notifyDocId.trim() || notifySending) return;
    if (!confirm(`Email ALL platform users that "${notifyDocId.trim()}" has been updated?`)) return;
    setNotifySending(true);
    setNotifyMsg(null);
    try {
      const res = await fetch("/api/admin/notify-policy-update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentId: notifyDocId.trim().toLowerCase(),
          changeSummary: notifySummary.trim() || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Send failed");
      setNotifyMsg({ text: `Sent to ${json.sent} recipient${json.sent === 1 ? "" : "s"}${json.failed ? ` (${json.failed} failed)` : ""}.`, ok: true });
      setNotifyDocId("");
      setNotifySummary("");
    } catch (e) {
      setNotifyMsg({ text: e instanceof Error ? e.message : "Send failed", ok: false });
    } finally {
      setNotifySending(false);
    }
  }

  async function lookupOrgForPdf() {
    if (!pdfEmail.trim()) return;
    setPdfLooking(true);
    setPdfLookup(null);
    setPdfLookupErr(null);
    try {
      const res = await fetch(`/api/admin/pdf-password?email=${encodeURIComponent(pdfEmail.trim())}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Not found");
      setPdfLookup(json);
    } catch (e) {
      setPdfLookupErr(e instanceof Error ? e.message : "Lookup failed");
    } finally {
      setPdfLooking(false);
    }
  }

  async function savePdfPassword(clear = false) {
    if (!pdfLookup) return;
    setPdfSaving(true);
    setPdfMsg(null);
    try {
      const res = await fetch("/api/admin/pdf-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orgId: pdfLookup.orgId, password: clear ? null : pdfPassword.trim() || null }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed");
      setPdfMsg({ text: json.message, ok: true });
      setPdfLookup(prev => prev ? { ...prev, hasPassword: !clear && !!pdfPassword.trim() } : null);
      if (!clear) setPdfPassword("");
    } catch (e) {
      setPdfMsg({ text: e instanceof Error ? e.message : "Error", ok: false });
    } finally {
      setPdfSaving(false);
    }
  }

  // ── Auth guard ──────────────────────────────────────────────────────────────
  useEffect(() => {
    async function checkAuth() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) {
        router.replace("/dashboard");
        return;
      }
      setAllowed(true);
      setChecking(false);
    }
    checkAuth();
  }, [router]);

  // ── Fetch all profiles ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!allowed) return;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) setProfiles(data as Profile[]);
      setLoading(false);
    }
    load();
  }, [allowed]);

  // ── Loading / access denied ─────────────────────────────────────────────────
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f8faff" }}>
        <div className="text-center text-gray-400 text-sm">Checking access…</div>
      </div>
    );
  }
  if (!allowed) return null;

  // ── Derived stats ───────────────────────────────────────────────────────────
  const total        = profiles.length;
  const active       = profiles.filter(p => p.subscription_status === "active").length;
  const trialing     = profiles.filter(p => p.subscription_status === "trialing").length;
  const pastDue      = profiles.filter(p => p.subscription_status === "past_due").length;
  const canceled     = profiles.filter(p => p.subscription_status === "canceled").length;
  const starter      = profiles.filter(p => p.plan === "starter").length;
  const professional = profiles.filter(p => p.plan === "professional").length;
  const enterprise   = profiles.filter(p => p.plan === "enterprise").length;

  // ── Filter + sort ───────────────────────────────────────────────────────────
  const filtered = profiles
    .filter(p => {
      const q = search.toLowerCase();
      const matchSearch = !q ||
        p.org_name?.toLowerCase().includes(q) ||
        p.email?.toLowerCase().includes(q) ||
        p.first_name?.toLowerCase().includes(q) ||
        p.last_name?.toLowerCase().includes(q) ||
        p.regulator?.toLowerCase().includes(q);
      const matchPlan   = planFilter   === "all" || p.plan === planFilter;
      const matchStatus = statusFilter === "all" || p.subscription_status === statusFilter;
      return matchSearch && matchPlan && matchStatus;
    })
    .sort((a, b) => {
      const av: string = a[sortKey] ?? "";
      const bv: string = b[sortKey] ?? "";
      return sortAsc ? av.localeCompare(bv) : bv.localeCompare(av);
    });

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc(v => !v);
    else { setSortKey(key); setSortAsc(true); }
  }

  function SortIcon({ k }: { k: SortKey }) {
    if (sortKey !== k) return <span className="text-gray-300 ml-1">↕</span>;
    return <span className="ml-1" style={{ color: "#2E6FFF" }}>{sortAsc ? "↑" : "↓"}</span>;
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8faff" }}>

      {/* Top bar */}
      <div className="bg-white border-b px-8 py-4 flex items-center justify-between"
        style={{ borderColor: "#e2e8f0" }}>
        <div className="flex items-center gap-3">
          <Image src="/ziproh-logo.png" alt="Ziproh" width={110} height={32}
            style={{ objectFit: "contain" }} />
          <span className="text-xs font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "#fee2e2", color: "#b91c1c" }}>
            ADMIN
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-400">Signed in as {ADMIN_EMAILS.join(" · ")}</span>
          <button
            onClick={() => router.push("/dashboard")}
            className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">
            All organisations and subscriptions across the Ziproh platform
          </p>
        </div>

        {/* ── Overview stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Organisations", value: total,     color: "#2E6FFF", bg: "#e8f0ff" },
            { label: "Active Subscriptions",value: active,    color: "#15803d", bg: "#dcfce7" },
            { label: "On Trial",            value: trialing,  color: "#2E6FFF", bg: "#dbeafe" },
            { label: "Past Due / Canceled", value: pastDue + canceled, color: "#b91c1c", bg: "#fee2e2" },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl p-5"
              style={{ border: "1px solid #e2e8f0" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: s.color }}>
                {loading ? "…" : s.value}
              </div>
              <div className="text-xs text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Plan breakdown ── */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Starter",      value: starter,      color: "#374151", bg: "#f3f4f6" },
            { label: "Professional", value: professional, color: "#2E6FFF", bg: "#e8f0ff" },
            { label: "Enterprise",   value: enterprise,   color: "#7c3aed", bg: "#faf5ff" },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl px-5 py-4 flex items-center gap-4"
              style={{ border: "1px solid #e2e8f0" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: s.bg }}>
                <span className="text-lg font-bold" style={{ color: s.color }}>
                  {loading ? "…" : s.value}
                </span>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{s.label}</div>
                <div className="text-xs text-gray-400">organisations</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Filters ── */}
        <div className="bg-white rounded-xl p-4 mb-5 flex flex-wrap gap-3 items-center"
          style={{ border: "1px solid #e2e8f0" }}>

          {/* Search */}
          <div className="relative flex-1 min-w-56">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search by org, email, name, regulator…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none"
              style={{ border: "1.5px solid #e2e8f0" }}
              onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
              onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
            />
          </div>

          {/* Plan filter */}
          <select
            value={planFilter}
            onChange={e => setPlanFilter(e.target.value)}
            className="text-sm rounded-lg px-3 py-2 outline-none"
            style={{ border: "1.5px solid #e2e8f0" }}
          >
            <option value="all">All Plans</option>
            <option value="starter">Starter</option>
            <option value="professional">Professional</option>
            <option value="enterprise">Enterprise</option>
          </select>

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="text-sm rounded-lg px-3 py-2 outline-none"
            style={{ border: "1.5px solid #e2e8f0" }}
          >
            <option value="all">All Statuses</option>
            <option value="trialing">Trialing</option>
            <option value="active">Active</option>
            <option value="past_due">Past Due</option>
            <option value="canceled">Canceled</option>
          </select>

          <span className="text-xs text-gray-400 ml-auto">
            {filtered.length} of {total} organisations
          </span>
        </div>

        {/* ── Users table ── */}
        <div className="bg-white rounded-xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
          {loading ? (
            <div className="text-center py-20 text-gray-400 text-sm">Loading organisations…</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm">No results found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid #f3f4f6", backgroundColor: "#f8faff" }}>
                    {[
                      { label: "Organisation",   key: "org_name" as SortKey },
                      { label: "Contact",        key: null },
                      { label: "Regulator",      key: null },
                      { label: "Plan",           key: "plan" as SortKey },
                      { label: "Status",         key: "subscription_status" as SortKey },
                      { label: "Trial / Joined", key: "created_at" as SortKey },
                    ].map(col => (
                      <th
                        key={col.label}
                        className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap"
                        style={{ cursor: col.key ? "pointer" : "default" }}
                        onClick={() => col.key && toggleSort(col.key)}
                      >
                        {col.label}
                        {col.key && <SortIcon k={col.key} />}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p, i) => {
                    const daysLeft = trialDaysLeft(p.trial_ends_at);
                    return (
                      <tr
                        key={p.id}
                        style={{
                          borderBottom: i < filtered.length - 1 ? "1px solid #f9fafb" : "none",
                        }}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        {/* Org */}
                        <td className="px-5 py-3.5">
                          <div className="font-semibold text-gray-900">{p.org_name}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{p.service_type}</div>
                        </td>

                        {/* Contact */}
                        <td className="px-5 py-3.5">
                          <div className="text-gray-700">{p.first_name} {p.last_name}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{p.email}</div>
                        </td>

                        {/* Regulator */}
                        <td className="px-5 py-3.5">
                          <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                            {p.regulator?.toUpperCase()}
                          </span>
                        </td>

                        {/* Plan */}
                        <td className="px-5 py-3.5">{planBadge(p.plan)}</td>

                        {/* Status */}
                        <td className="px-5 py-3.5">{statusBadge(p.subscription_status)}</td>

                        {/* Trial / Joined */}
                        <td className="px-5 py-3.5">
                          {p.subscription_status === "trialing" ? (
                            <div>
                              <div className={`text-xs font-semibold ${daysLeft <= 3 ? "text-red-500" : "text-gray-700"}`}>
                                {daysLeft > 0 ? `${daysLeft}d left` : "Trial expired"}
                              </div>
                              <div className="text-xs text-gray-400">ends {formatDate(p.trial_ends_at)}</div>
                            </div>
                          ) : (
                            <div className="text-xs text-gray-500">{formatDate(p.created_at)}</div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ── PDF Security Management ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6">
          <h2 className="text-base font-bold text-gray-900 mb-1">🔐 PDF Security — Per-Org Unlock Password</h2>
          <p className="text-sm text-gray-500 mb-5">
            All policy PDFs are encrypted with an owner password. By default, the platform default is used.
            Set a per-org password here when a customer needs to unlock their PDF (e.g. to print unrestricted or edit a template).
            This password is never shown to the customer — you share it manually.
          </p>

          {/* Lookup form */}
          <div className="flex gap-3 mb-4">
            <input
              type="email"
              value={pdfEmail}
              onChange={e => setPdfEmail(e.target.value)}
              onKeyDown={e => e.key === "Enter" && lookupOrgForPdf()}
              placeholder="Customer email address"
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={lookupOrgForPdf}
              disabled={pdfLooking || !pdfEmail.trim()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold disabled:opacity-50 whitespace-nowrap"
            >
              {pdfLooking ? "Looking up…" : "Look Up Org"}
            </button>
          </div>

          {pdfLookupErr && (
            <div className="p-3 rounded-xl bg-red-50 text-sm text-red-600 mb-4">{pdfLookupErr}</div>
          )}

          {pdfLookup && (
            <div className="rounded-xl border border-gray-200 p-4 space-y-4">
              {/* Org info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900">{pdfLookup.orgName}</p>
                  <p className="text-xs text-gray-500">{pdfLookup.email}</p>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={pdfLookup.hasPassword
                    ? { backgroundColor: "#d1fae5", color: "#065f46" }
                    : { backgroundColor: "#f3f4f6", color: "#6b7280" }}
                >
                  {pdfLookup.hasPassword ? "Custom password set" : "Using platform default"}
                </span>
              </div>

              {/* Set password */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  New Unlock Password
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={pdfPassword}
                    onChange={e => setPdfPassword(e.target.value)}
                    placeholder="Enter a strong password (shared manually with customer)"
                    className="flex-1 px-3.5 py-2 rounded-xl border border-gray-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => savePdfPassword(false)}
                    disabled={pdfSaving || !pdfPassword.trim()}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold disabled:opacity-50"
                  >
                    {pdfSaving ? "Saving…" : "Set Password"}
                  </button>
                </div>
              </div>

              {pdfLookup.hasPassword && (
                <button
                  onClick={() => savePdfPassword(true)}
                  disabled={pdfSaving}
                  className="text-sm text-red-500 hover:text-red-700 underline disabled:opacity-50"
                >
                  Clear custom password (revert to platform default)
                </button>
              )}

              {pdfMsg && (
                <div
                  className="p-3 rounded-xl text-sm"
                  style={{
                    backgroundColor: pdfMsg.ok ? "#d1fae5" : "#fee2e2",
                    color: pdfMsg.ok ? "#065f46" : "#b91c1c",
                  }}
                >
                  {pdfMsg.ok ? "✓" : "✕"} {pdfMsg.text}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Policy Update Email Broadcast ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6">
          <h2 className="text-base font-bold text-gray-900 mb-1">📣 Policy Update Notification</h2>
          <p className="text-sm text-gray-500 mb-5">
            Email every platform user that a policy has been updated, with a direct link to review and
            re-adopt it. Sent via Resend — requires RESEND_API_KEY to be configured in Vercel.
          </p>

          <div className="space-y-3">
            <div className="flex gap-3">
              <input
                type="text"
                value={notifyDocId}
                onChange={e => setNotifyDocId(e.target.value)}
                placeholder="Policy document ID (e.g. saf-001)"
                className="w-64 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={notifySummary}
                onChange={e => setNotifySummary(e.target.value)}
                placeholder="Optional one-line summary of what changed"
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={sendPolicyUpdateBroadcast}
                disabled={notifySending || !notifyDocId.trim()}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold disabled:opacity-50 whitespace-nowrap"
              >
                {notifySending ? "Sending…" : "Send to All Users"}
              </button>
            </div>

            {notifyMsg && (
              <div
                className="p-3 rounded-xl text-sm"
                style={{
                  backgroundColor: notifyMsg.ok ? "#d1fae5" : "#fee2e2",
                  color: notifyMsg.ok ? "#065f46" : "#b91c1c",
                }}
              >
                {notifyMsg.ok ? "✓" : "✕"} {notifyMsg.text}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-300 mt-8">
          Ziproh Admin · Access: {ADMIN_EMAILS.join(", ")} · This page is not linked from anywhere
        </p>
      </div>
    </div>
  );
}
