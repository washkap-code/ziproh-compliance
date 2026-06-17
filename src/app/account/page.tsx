"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { createBrowserClient } from "@supabase/ssr";
import type { Profile } from "@/lib/supabase";

const REGULATORS  = ["CQC", "Care Inspectorate", "CIW", "RQIA"];
const SERVICE_TYPES = [
  "Care & Nursing Home",
  "Domiciliary Care",
  "Supported Living",
  "General Practice (GP)",
  "Healthcare Clinic",
  "Community-Based Care",
  "Other",
];
const PLAN_LABELS: Record<string, string> = {
  starter:      "Free Trial",
  professional: "Professional — £79/mo (annual)",
  enterprise:   "Enterprise — £119/mo (annual)",
};
const STATUS_STYLE: Record<string, { label: string; bg: string; color: string }> = {
  trialing: { label: "Free Trial",  bg: "#e8f0ff", color: "#2E6FFF"  },
  active:   { label: "Active",      bg: "#dcfce7", color: "#15803d"  },
  past_due: { label: "Past Due",    bg: "#fef3c7", color: "#b45309"  },
  canceled: { label: "Canceled",    bg: "#fee2e2", color: "#b91c1c"  },
};

const sb = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AccountPage() {
  const router = useRouter();

  const [profile,  setProfile]  = useState<Profile | null>(null);
  const [loading,  setLoading]  = useState(true);
  const [saving,   setSaving]   = useState(false);
  const [pwSaving, setPwSaving] = useState(false);
  const [toast,    setToast]    = useState<{ msg: string; ok: boolean } | null>(null);

  // Editable profile fields
  const [firstName,   setFirstName]   = useState("");
  const [lastName,    setLastName]    = useState("");
  const [orgName,     setOrgName]     = useState("");
  const [serviceType, setServiceType] = useState("");
  const [regulator,   setRegulator]   = useState("");

  // Password fields
  const [pwCurrent, setPwCurrent] = useState("");
  const [pwNew,     setPwNew]     = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  // Billing portal
  const [portalLoading, setPortalLoading] = useState(false);

  // Logo upload
  const [logoUrl,       setLogoUrl]       = useState<string | null>(null);
  const [logoUploading, setLogoUploading] = useState(false);
  const [logoRemoving,  setLogoRemoving]  = useState(false);

  async function openBillingPortal() {
    setPortalLoading(true);
    try {
      const res = await fetch("/api/stripe/portal", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({}) });
      if (res.ok) {
        const { url } = await res.json();
        if (url) { window.location.href = url; return; }
      }
      const { error } = await res.json().catch(() => ({}));
      setToast({ msg: error ?? "Unable to open billing portal. Please email hello@ziprohtraining.co.uk.", ok: false });
    } catch {
      setToast({ msg: "Unable to open billing portal. Please email hello@ziprohtraining.co.uk.", ok: false });
    } finally {
      setPortalLoading(false);
    }
  }

  // ── Load profile ────────────────────────────────────────────────────────────
  useEffect(() => {
    async function load() {
      const { data: { user } } = await sb.auth.getUser();
      if (!user) { router.replace("/login"); return; }

      const { data } = await sb
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (data) {
        const p = data as Profile;
        setProfile(p);
        setFirstName(p.first_name ?? "");
        setLastName(p.last_name ?? "");
        setOrgName(p.org_name ?? "");
        setServiceType(p.service_type ?? "");
        setRegulator(p.regulator ?? "");
        setLogoUrl(p.logo_url ?? null);
      }
      setLoading(false);
    }
    load();
  }, [router]);

  function showToast(msg: string, ok = true) {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3500);
  }

  // ── Save profile ────────────────────────────────────────────────────────────
  async function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    if (!profile) return;
    setSaving(true);
    const { error } = await sb
      .from("profiles")
      .update({ first_name: firstName, last_name: lastName, org_name: orgName, service_type: serviceType, regulator })
      .eq("id", profile.id);
    setSaving(false);
    if (error) showToast("Failed to save changes.", false);
    else {
      setProfile(p => p ? { ...p, first_name: firstName, last_name: lastName, org_name: orgName, service_type: serviceType, regulator } : p);
      showToast("Profile updated successfully.");
    }
  }

  // ── Change password ─────────────────────────────────────────────────────────
  async function changePassword(e: React.FormEvent) {
    e.preventDefault();
    if (pwNew !== pwConfirm) { showToast("New passwords don't match.", false); return; }
    if (pwNew.length < 8)    { showToast("Password must be at least 8 characters.", false); return; }
    setPwSaving(true);
    // Re-authenticate with current password first
    const { data: { user } } = await sb.auth.getUser();
    if (!user?.email) { showToast("Session error — please log in again.", false); setPwSaving(false); return; }
    const { error: signInErr } = await sb.auth.signInWithPassword({ email: user.email, password: pwCurrent });
    if (signInErr) { showToast("Current password is incorrect.", false); setPwSaving(false); return; }
    const { error } = await sb.auth.updateUser({ password: pwNew });
    setPwSaving(false);
    if (error) showToast("Failed to update password.", false);
    else { showToast("Password changed successfully."); setPwCurrent(""); setPwNew(""); setPwConfirm(""); }
  }

  // ── Logo upload ──────────────────────────────────────────────────────────────
  async function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLogoUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload/logo", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? `Upload failed (HTTP ${res.status})`);
      if (!json.logoUrl) throw new Error("Upload failed — no URL returned");
      setLogoUrl(json.logoUrl);
      showToast("Organisation logo updated.");
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Logo upload failed.", false);
    } finally {
      setLogoUploading(false);
      // Reset input so same file can be re-selected
      e.target.value = "";
    }
  }

  async function handleLogoRemove() {
    setLogoRemoving(true);
    try {
      const res = await fetch("/api/upload/logo", { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to remove logo");
      setLogoUrl(null);
      showToast("Logo removed.");
    } catch {
      showToast("Failed to remove logo.", false);
    } finally {
      setLogoRemoving(false);
    }
  }

  // ── Sign out ─────────────────────────────────────────────────────────────────
  async function signOut() {
    await sb.auth.signOut();
    router.push("/");
  }

  // ── Trial info ───────────────────────────────────────────────────────────────
  function trialDaysLeft() {
    if (!profile?.trial_ends_at) return null;
    const days = Math.ceil((new Date(profile.trial_ends_at).getTime() - Date.now()) / 86400000);
    return days;
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center py-32 text-gray-400 text-sm">Loading…</div>
      </DashboardLayout>
    );
  }

  const statusStyle = STATUS_STYLE[profile?.subscription_status ?? "trialing"];
  const daysLeft    = trialDaysLeft();

  return (
    <DashboardLayout>

      {/* Toast */}
      {toast && (
        <div
          className="fixed top-5 right-5 z-50 px-5 py-3 rounded-xl text-sm font-semibold shadow-lg"
          style={{ backgroundColor: toast.ok ? "#dcfce7" : "#fee2e2", color: toast.ok ? "#15803d" : "#b91c1c" }}
        >
          {toast.ok ? "✓" : "✕"} {toast.msg}
        </div>
      )}

      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your profile, organisation, subscription, and password</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* ── Left column ── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Profile & Organisation */}
          <form onSubmit={saveProfile} className="card space-y-5">
            <h2 className="text-base font-bold text-gray-900 pb-3" style={{ borderBottom: "1px solid #f3f4f6" }}>
              Profile &amp; Organisation
            </h2>

            {/* Name row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name</label>
                <input
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                  style={{ border: "1.5px solid #e2e8f0" }}
                  onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
                  onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name</label>
                <input
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                  style={{ border: "1.5px solid #e2e8f0" }}
                  onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
                  onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
                  required
                />
              </div>
            </div>

            {/* Email — read only */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
              <input
                value={profile?.email ?? ""}
                disabled
                className="w-full px-3 py-2.5 rounded-lg text-sm bg-gray-50 text-gray-400 cursor-not-allowed"
                style={{ border: "1.5px solid #e2e8f0" }}
              />
              <p className="text-xs text-gray-400 mt-1">Email cannot be changed. Contact support if needed.</p>
            </div>

            {/* Org name */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Organisation Name</label>
              <input
                value={orgName}
                onChange={e => setOrgName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                style={{ border: "1.5px solid #e2e8f0" }}
                onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
                onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
                required
              />
            </div>

            {/* Service type + Regulator */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service Type</label>
                <select
                  value={serviceType}
                  onChange={e => setServiceType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white"
                  style={{ border: "1.5px solid #e2e8f0" }}
                  onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
                  onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
                >
                  {SERVICE_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Regulator</label>
                <select
                  value={regulator}
                  onChange={e => setRegulator(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white"
                  style={{ border: "1.5px solid #e2e8f0" }}
                  onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
                  onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
                >
                  {REGULATORS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button type="submit" className="btn-primary text-sm" disabled={saving}>
                {saving ? "Saving…" : "Save Changes"}
              </button>
            </div>
          </form>

          {/* ── Organisation Logo ── */}
          <div className="card space-y-5">
            <div className="pb-3" style={{ borderBottom: "1px solid #f3f4f6" }}>
              <h2 className="text-base font-bold text-gray-900">Organisation Logo</h2>
              <p className="text-xs text-gray-500 mt-1">Your logo will appear on the cover page of all downloaded policy PDFs. Accepted: PNG, JPEG, WebP, SVG — max 2 MB.</p>
            </div>

            <div className="flex items-start gap-5">
              {/* Preview */}
              <div
                className="flex-shrink-0 w-28 h-20 rounded-xl border-2 border-dashed flex items-center justify-center overflow-hidden"
                style={{ borderColor: logoUrl ? "#2E6FFF40" : "#e2e8f0", backgroundColor: logoUrl ? "white" : "#f9fafb" }}
              >
                {logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logoUrl} alt="Org logo" className="max-w-full max-h-full object-contain p-2" />
                ) : (
                  <span className="text-gray-300 text-3xl">🏢</span>
                )}
              </div>

              {/* Upload controls */}
              <div className="flex-1 space-y-3">
                <label className="block">
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/webp,image/gif,image/svg+xml"
                    onChange={handleLogoUpload}
                    disabled={logoUploading}
                    className="sr-only"
                    id="logo-upload-input"
                  />
                  {/* The wrapping <label> activates the hidden input natively —
                      do NOT also call input.click() here, or the file dialog is
                      triggered twice and some browsers cancel the selection. */}
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all select-none"
                    style={{
                      backgroundColor: logoUploading ? "#f3f4f6" : "#2E6FFF",
                      color: logoUploading ? "#9ca3af" : "white",
                      pointerEvents: logoUploading ? "none" : "auto",
                    }}
                  >
                    {logoUploading ? (
                      <><span className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" /> Uploading…</>
                    ) : (
                      <>📤 {logoUrl ? "Replace Logo" : "Upload Logo"}</>
                    )}
                  </span>
                </label>

                {logoUrl && (
                  <button
                    type="button"
                    onClick={handleLogoRemove}
                    disabled={logoRemoving}
                    className="block text-xs text-red-500 hover:text-red-700 underline disabled:opacity-50"
                  >
                    {logoRemoving ? "Removing…" : "Remove logo"}
                  </button>
                )}

                <p className="text-xs text-gray-400">
                  {logoUrl ? "Logo saved — it will appear on all future PDF downloads." : "No logo uploaded yet. PDFs will show your organisation name instead."}
                </p>
              </div>
            </div>
          </div>

          {/* Change password */}
          <form onSubmit={changePassword} className="card space-y-5">
            <h2 className="text-base font-bold text-gray-900 pb-3" style={{ borderBottom: "1px solid #f3f4f6" }}>
              Change Password
            </h2>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Current Password</label>
              <input
                type="password"
                value={pwCurrent}
                onChange={e => setPwCurrent(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                style={{ border: "1.5px solid #e2e8f0" }}
                onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
                onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">New Password</label>
                <input
                  type="password"
                  value={pwNew}
                  onChange={e => setPwNew(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                  style={{ border: "1.5px solid #e2e8f0" }}
                  onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
                  onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
                  minLength={8}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Confirm New Password</label>
                <input
                  type="password"
                  value={pwConfirm}
                  onChange={e => setPwConfirm(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                  style={{ border: "1.5px solid #e2e8f0" }}
                  onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
                  onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
                  minLength={8}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button type="submit" className="btn-primary text-sm" disabled={pwSaving}>
                {pwSaving ? "Updating…" : "Update Password"}
              </button>
            </div>
          </form>

        </div>

        {/* ── Right column ── */}
        <div className="space-y-6">

          {/* Subscription card */}
          <div className="card space-y-4">
            <h2 className="text-base font-bold text-gray-900 pb-3" style={{ borderBottom: "1px solid #f3f4f6" }}>
              Subscription
            </h2>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Current Plan</span>
              <span className="text-sm font-bold text-gray-900">
                {PLAN_LABELS[profile?.plan ?? "starter"] ?? profile?.plan}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Status</span>
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: statusStyle.bg, color: statusStyle.color }}
              >
                {statusStyle.label}
              </span>
            </div>

            {profile?.subscription_status === "trialing" && daysLeft !== null && (
              <div
                className="rounded-lg p-3 text-sm"
                style={{
                  backgroundColor: daysLeft <= 3 ? "#fee2e2" : "#e8f0ff",
                  color: daysLeft <= 3 ? "#b91c1c" : "#2E6FFF",
                }}
              >
                {daysLeft > 0
                  ? `⏱ ${daysLeft} day${daysLeft !== 1 ? "s" : ""} left on your free trial`
                  : "⚠️ Your trial has expired"}
              </div>
            )}

            {profile?.subscription_status === "trialing" || !profile?.subscription_status ? (
              <Link href="/upgrade" className="btn-primary text-sm w-full text-center block">
                Upgrade Now →
              </Link>
            ) : (
              <button
                onClick={openBillingPortal}
                disabled={portalLoading}
                className="btn-primary text-sm w-full text-center"
                style={{ opacity: portalLoading ? 0.7 : 1 }}
              >
                {portalLoading ? "Opening portal…" : "Manage Billing →"}
              </button>
            )}

            <p className="text-xs text-gray-400 text-center">
              {profile?.subscription_status === "active"
                ? "Change payment method, view invoices, or cancel subscription."
                : "To get billing help, email "}
              {profile?.subscription_status !== "active" && (
                <a href="mailto:hello@ziprohtraining.co.uk" className="underline">
                  hello@ziprohtraining.co.uk
                </a>
              )}
            </p>
          </div>

          {/* Account info */}
          <div className="card space-y-3">
            <h2 className="text-base font-bold text-gray-900 pb-3" style={{ borderBottom: "1px solid #f3f4f6" }}>
              Account Info
            </h2>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Member since</span>
              <span className="font-medium text-gray-800">
                {profile?.created_at
                  ? new Date(profile.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
                  : "—"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Regulator</span>
              <span className="font-medium text-gray-800">{profile?.regulator ?? "—"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Service type</span>
              <span className="font-medium text-gray-800 text-right max-w-36">{profile?.service_type ?? "—"}</span>
            </div>
          </div>

          {/* Sign out */}
          <div className="card">
            <h2 className="text-base font-bold text-gray-900 pb-3 mb-4" style={{ borderBottom: "1px solid #f3f4f6" }}>
              Session
            </h2>
            <button
              onClick={signOut}
              className="w-full text-sm font-semibold py-2.5 rounded-lg transition-colors"
              style={{ backgroundColor: "#fee2e2", color: "#b91c1c" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#fecaca")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#fee2e2")}
            >
              Sign Out
            </button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
