"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { DOCUMENTS } from "@/lib/documents";

type NavItem  = { href: string; label: string; icon: string };
type NavGroup = { group?: string; items: NavItem[] };

const NAV_GROUPS: NavGroup[] = [
  {
    items: [
      { href: "/dashboard",         label: "Dashboard",        icon: "🏠" },
    ],
  },
  {
    group: "Compliance",
    items: [
      { href: "/compliance",        label: "Policy Library",   icon: "📋" },
      { href: "/my-policies",       label: "My Policies",      icon: "✅" },
      { href: "/my-record",         label: "My Record",        icon: "📜" },
    ],
  },
  {
    group: "Inspection Readiness",
    items: [
      { href: "/inspection-prep",   label: "Inspection Prep",  icon: "🏛️" },
      { href: "/policy-reviews",    label: "Policy Reviews",   icon: "📅" },
      { href: "/compliance-report", label: "Evidence Report",  icon: "📊" },
      { href: "/audit",             label: "Audit Centre",     icon: "🔍" },
    ],
  },
  {
    group: "Team",
    items: [
      { href: "/staff",             label: "My Staff",         icon: "👥" },
      { href: "/reading-lists",     label: "Reading Lists",    icon: "📚" },
      { href: "/learning",          label: "Learning Centre",  icon: "🎓" },
    ],
  },
  {
    group: "Tools",
    items: [
      { href: "/ai-assistant",      label: "Ziproh AI",        icon: "🤖" },
      { href: "/feedback",          label: "Feedback Surveys", icon: "💬" },
    ],
  },
];

const BOTTOM_NAV = [
  { href: "/account", label: "Account Settings", icon: "⚙️" },
  { href: "/help", label: "Help & Support", icon: "❓" },
];

// Bottom nav items shown on mobile
const MOBILE_BOTTOM_NAV: NavItem[] = [
  { href: "/dashboard",    label: "Home",      icon: "🏠" },
  { href: "/compliance",   label: "Policies",  icon: "📋" },
  { href: "/audit",        label: "Audits",    icon: "🔍" },
  { href: "/ai-assistant", label: "AI",        icon: "🤖" },
];

// ─── Read-only staff view ─────────────────────────────────────────────────────
// Staff members (role 'staff' in staff_members, logged in under their own
// account) get a simplified, read-only experience: policies to read, their
// reading lists, their own record, learning and the AI assistant.
// Management/billing/audit pages are hidden and guarded.

const STAFF_ALLOWED_PREFIXES = [
  "/dashboard", "/compliance", "/my-record", "/reading-lists",
  "/learning", "/ai-assistant", "/account", "/help", "/verify",
];

const MOBILE_BOTTOM_NAV_STAFF: NavItem[] = [
  { href: "/dashboard",    label: "Home",      icon: "🏠" },
  { href: "/compliance",   label: "Policies",  icon: "📋" },
  { href: "/learning",     label: "Learning",  icon: "🎓" },
  { href: "/ai-assistant", label: "AI",        icon: "🤖" },
];

function staffNavGroups(): NavGroup[] {
  return NAV_GROUPS
    .map((g) => ({
      group: g.group,
      items: g.items.filter((i) =>
        STAFF_ALLOWED_PREFIXES.some((p) => i.href === p || i.href.startsWith(p + "/"))
      ),
    }))
    .filter((g) => g.items.length > 0);
}

type SidebarProfile = {
  first_name: string;
  org_name: string;
  plan: string;
  regulator: string;
  subscription_status: string;
  trial_ends_at: string;
  logo_url: string | null;
};

type Notification = {
  id: string;
  icon: string;
  title: string;
  body: string;
  href: string;
  urgency: "high" | "medium" | "low";
};

function SidebarContents({
  profile,
  path,
  isStaff,
  onClose,
}: {
  profile: SidebarProfile | null;
  path: string;
  isStaff: boolean;
  onClose?: () => void;
}) {
  const navGroups = isStaff ? staffNavGroups() : NAV_GROUPS;
  return (
    <>
      {/* Logo */}
      <div className="p-5 border-b" style={{ borderColor: "#e2e8f0" }}>
        <Link href="/dashboard" onClick={onClose}>
          <Image src="/ziproh-logo.png" alt="Ziproh" width={120} height={35}
            style={{ objectFit: "contain" }} />
        </Link>
      </div>

      {/* Org info */}
      <div className="px-4 py-3 border-b" style={{ borderColor: "#e2e8f0", backgroundColor: "#f8faff" }}>
        <div className="text-xs text-gray-500 mb-1">Your Organisation</div>
        <div className="flex items-center gap-2.5 min-w-0">
          {profile?.logo_url && (
            <div
              className="flex-shrink-0 w-9 h-9 rounded-lg bg-white flex items-center justify-center overflow-hidden"
              style={{ border: "1px solid #e2e8f0", boxShadow: "0 1px 2px rgba(10,22,41,0.06)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.logo_url}
                alt={`${profile.org_name} logo`}
                className="max-w-full max-h-full object-contain p-1"
              />
            </div>
          )}
          <div className="min-w-0">
            <div className="text-sm font-semibold text-gray-900 truncate">
              {profile?.org_name || "Loading…"}
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="badge badge-green text-xs capitalize">
                {profile?.plan || "Starter"}
              </span>
              {profile?.regulator && (
                <span className="text-xs text-gray-400 truncate">• {profile.regulator}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Staff badge */}
      {isStaff && (
        <div className="px-4 py-2 text-[10px] font-semibold uppercase tracking-widest"
          style={{ backgroundColor: "#F0F6FF", color: "#2E6FFF", borderBottom: "1px solid #e2e8f0" }}>
          Staff member view
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 p-3 overflow-y-auto">
        {navGroups.map((group, gi) => (
          <div key={gi} className={gi > 0 ? "mt-4" : ""}>
            {group.group && (
              <div className="px-3 mb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                {group.group}
              </div>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`sidebar-link ${path === item.href || path.startsWith(item.href + "/") ? "active" : ""}`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t space-y-0.5" style={{ borderColor: "#e2e8f0" }}>
        {BOTTOM_NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose} className="sidebar-link">
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
        {/* Link back to main marketing site */}
        <a
          href="https://ziprohtraining.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-link"
          style={{ color: "#6b7280", borderTop: "1px solid #e2e8f0", marginTop: "4px", paddingTop: "12px" }}
        >
          <span className="text-base">🌐</span>
          <span>ziprohtraining.co.uk</span>
        </a>
        <button
          onClick={async () => {
            const sb = createBrowserClient(
              process.env.NEXT_PUBLIC_SUPABASE_URL!,
              process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
            );
            await sb.auth.signOut();
            window.location.href = "/login";
          }}
          className="sidebar-link w-full text-red-500 hover:bg-red-50 hover:text-red-600"
        >
          <span className="text-base">🚪</span>
          <span>Sign Out</span>
        </button>
      </div>
    </>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const [profile, setProfile] = useState<SidebarProfile | null>(null);
  const [isStaff, setIsStaff] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sb = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    (async () => {
      const { data: { user } } = await sb.auth.getUser();
      if (!user) return;

      const [profileRes, readRes, auditRes, staffRes] = await Promise.all([
        sb.from("profiles")
          .select("first_name, org_name, plan, regulator, subscription_status, trial_ends_at, logo_url")
          .eq("id", user.id).single(),
        sb.from("read_records").select("document_id").eq("user_id", user.id),
        sb.from("audits").select("conducted_at").eq("org_id", user.id)
          .order("conducted_at", { ascending: false }).limit(1),
        sb.from("staff_members").select("status").eq("org_id", user.id),
      ]);

      if (profileRes.data) setProfile(profileRes.data as SidebarProfile);

      // Read-only staff view: active staff_members row under another org,
      // with role 'staff' (managers/admins keep the full experience)
      const { data: membership } = await sb
        .from("staff_members")
        .select("org_id, role, status")
        .eq("user_id", user.id)
        .eq("status", "active")
        .maybeSingle();
      if (membership && membership.org_id !== user.id && membership.role === "staff") {
        setIsStaff(true);
      }

      // ── Derive notifications from data ──────────────────────────────────────
      const notifs: Notification[] = [];
      const readIds = new Set((readRes.data ?? []).map((r: { document_id: string }) => r.document_id));

      // 1. Updated policies not yet acknowledged
      const updatedUnread = DOCUMENTS.filter(d => d.status === "updated" && !readIds.has(d.id));
      if (updatedUnread.length > 0) {
        notifs.push({
          id: "updated-policies",
          icon: "📋",
          title: `${updatedUnread.length} polic${updatedUnread.length === 1 ? "y has" : "ies have"} been updated`,
          body: "Acknowledge them to keep your compliance record current.",
          href: "/compliance?filter=attention",
          urgency: "high",
        });
      }

      // 2. Audit overdue (no audit in last 90 days)
      const lastAudit = auditRes.data?.[0]?.conducted_at;
      const daysSinceAudit = lastAudit
        ? Math.floor((Date.now() - new Date(lastAudit).getTime()) / 86_400_000)
        : 999;
      if (daysSinceAudit > 90) {
        notifs.push({
          id: "audit-overdue",
          icon: "🔍",
          title: daysSinceAudit > 300 ? "No audits completed yet" : `Last audit was ${daysSinceAudit} days ago`,
          body: "CQC expects regular internal audits. Run one now.",
          href: "/audit",
          urgency: daysSinceAudit > 180 ? "high" : "medium",
        });
      }

      // 3. Pending staff invites
      const pendingStaff = (staffRes.data ?? []).filter((s: { status: string }) => s.status === "invited").length;
      if (pendingStaff > 0) {
        notifs.push({
          id: "pending-invites",
          icon: "👥",
          title: `${pendingStaff} staff member${pendingStaff === 1 ? "" : "s"} haven't registered yet`,
          body: "Resend their invite link from the My Staff page.",
          href: "/staff",
          urgency: "low",
        });
      }

      // 4. Low overall compliance
      const totalRead = readIds.size;
      const total = DOCUMENTS.length;
      const pct = total > 0 ? Math.round((totalRead / total) * 100) : 0;
      if (pct < 25 && totalRead > 0) {
        notifs.push({
          id: "low-compliance",
          icon: "📊",
          title: `Compliance score is ${pct}%`,
          body: "Read and acknowledge more policies to improve your score before an inspection.",
          href: "/compliance",
          urgency: "medium",
        });
      }

      setNotifications(notifs);
    })();
  }, []);

  // Close notification panel on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  // Staff guard: redirect staff members away from management pages
  useEffect(() => {
    if (!isStaff) return;
    const allowed = STAFF_ALLOWED_PREFIXES.some(
      (p) => path === p || path.startsWith(p + "/")
    );
    if (!allowed) router.replace("/dashboard");
  }, [isStaff, path, router]);

  // Trial state — only enforce once profile has loaded
  const isTrialExpired =
    profile !== null &&
    profile.subscription_status === "trialing" &&
    !!profile.trial_ends_at &&
    new Date(profile.trial_ends_at) < new Date();

  const trialDaysLeft =
    profile?.subscription_status === "trialing" && profile?.trial_ends_at
      ? Math.ceil((new Date(profile.trial_ends_at).getTime() - Date.now()) / 86_400_000)
      : null;

  // Pages that remain accessible even on expired trial
  const isAllowedOnExpired =
    path === "/account" || path === "/upgrade" || path.startsWith("/account");

  if (isTrialExpired && !isAllowedOnExpired) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        style={{ backgroundColor: "#f8faff" }}>
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
          style={{ border: "2px solid #fde68a" }}>
          <div className="text-5xl mb-4">⏱</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your free trial has ended</h1>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Upgrade to keep your service CQC-ready — full access to all 62 policies, audit tools, and your compliance record.
          </p>
          <Link
            href="/upgrade"
            className="block w-full py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 mb-3"
            style={{ backgroundColor: "#2E6FFF" }}
          >
            View upgrade options →
          </Link>
          <Link
            href="/account"
            className="block w-full py-3 rounded-xl text-sm font-medium text-gray-500 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            Go to account
          </Link>
        </div>
        <p className="mt-6 text-xs text-gray-400">
          Questions?{" "}
          <a href="mailto:hello@ziprohtraining.co.uk" className="text-blue-500 hover:underline">
            hello@ziprohtraining.co.uk
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f8faff" }}>

      {/* ── Desktop sidebar (lg+) ────────────────────────────── */}
      <aside
        className="hidden lg:flex w-64 flex-shrink-0 flex-col"
        style={{ backgroundColor: "white", borderRight: "1px solid #e2e8f0", minHeight: "100vh" }}
      >
        <SidebarContents profile={profile} path={path} isStaff={isStaff} />
      </aside>

      {/* ── Mobile drawer overlay ────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <aside
            className="relative flex flex-col w-72 max-w-[85vw] bg-white h-full overflow-y-auto shadow-xl"
            style={{ zIndex: 51 }}
          >
            <SidebarContents
              profile={profile}
              path={path}
              isStaff={isStaff}
              onClose={() => setMobileMenuOpen(false)}
            />
          </aside>
        </div>
      )}

      {/* ── Main content ─────────────────────────────────────── */}
      <main className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <div
          className="h-14 flex items-center justify-between px-4 lg:px-6 bg-white border-b sticky top-0 z-40"
          style={{ borderColor: "#e2e8f0" }}
        >
          {/* Mobile: hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 text-gray-500"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect y="3" width="20" height="2" rx="1"/>
              <rect y="9" width="20" height="2" rx="1"/>
              <rect y="15" width="20" height="2" rx="1"/>
            </svg>
          </button>

          {/* Mobile: logo */}
          <Link href="/dashboard" className="lg:hidden">
            <Image src="/ziproh-logo.png" alt="Ziproh" width={90} height={28}
              style={{ objectFit: "contain" }} />
          </Link>

          {/* Desktop: spacer */}
          <div className="hidden lg:block" />

          {/* Right side */}
          <div className="flex items-center gap-3">

            {/* Notification bell + dropdown */}
            <div className="relative" ref={notifRef}>
              <button
                className="relative p-2 rounded-lg hover:bg-gray-50"
                onClick={() => setNotifOpen(o => !o)}
                aria-label="Notifications"
              >
                <span className="text-gray-500 text-lg">🔔</span>
                {notifications.length > 0 && (
                  <span
                    className="absolute top-1 right-1 w-4 h-4 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: notifications.some(n => n.urgency === "high") ? "#ef4444" : "#2E6FFF", fontSize: "9px", fontWeight: 700 }}
                  >
                    {notifications.length}
                  </span>
                )}
              </button>

              {notifOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 rounded-2xl shadow-2xl overflow-hidden bg-white z-50"
                  style={{ border: "1px solid #e2e8f0", top: "100%" }}
                >
                  <div className="px-4 py-3 border-b" style={{ borderColor: "#f3f4f6" }}>
                    <div className="text-sm font-bold text-gray-900">Notifications</div>
                    {notifications.length === 0 && (
                      <div className="text-xs text-gray-400 mt-0.5">You&apos;re all caught up ✓</div>
                    )}
                  </div>
                  {notifications.length === 0 ? (
                    <div className="px-4 py-6 text-center">
                      <div className="text-3xl mb-2">✅</div>
                      <div className="text-sm text-gray-500">No action needed right now.</div>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-50">
                      {notifications.map(n => (
                        <Link
                          key={n.id}
                          href={n.href}
                          onClick={() => setNotifOpen(false)}
                          className="flex gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-xl flex-shrink-0 mt-0.5">{n.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div className="text-sm font-semibold text-gray-900 leading-tight">{n.title}</div>
                              <span
                                className="flex-shrink-0 text-xs px-1.5 py-0.5 rounded-full font-semibold"
                                style={{
                                  backgroundColor: n.urgency === "high" ? "#fee2e2" : n.urgency === "medium" ? "#fef9c3" : "#f0f6ff",
                                  color: n.urgency === "high" ? "#dc2626" : n.urgency === "medium" ? "#92400e" : "#2E6FFF",
                                }}
                              >
                                {n.urgency}
                              </span>
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{n.body}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "#2E6FFF" }}>
                {profile?.first_name?.[0]?.toUpperCase() ?? "U"}
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold text-gray-900">
                  {profile?.first_name ?? ""}
                </div>
                <div className="text-xs text-gray-400 capitalize">{profile?.plan ?? ""}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trial expiry banner — shown when ≤7 days remain */}
        {trialDaysLeft !== null && trialDaysLeft <= 7 && trialDaysLeft > 0 && (
          <div
            className="px-4 py-2.5 flex items-center justify-between gap-4 text-sm"
            style={{ backgroundColor: "#fff8ed", borderBottom: "1px solid #fde68a" }}
          >
            <span className="text-amber-800 font-medium">
              ⏱ {trialDaysLeft} day{trialDaysLeft !== 1 ? "s" : ""} left on your free trial
            </span>
            <Link
              href="/upgrade"
              className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg text-white"
              style={{ backgroundColor: "#2E6FFF" }}
            >
              Upgrade now
            </Link>
          </div>
        )}

        {/* Page content — extra bottom padding on mobile for the bottom nav */}
        <div className="flex-1 p-4 lg:p-6 overflow-auto pb-20 lg:pb-6">
          {children}
        </div>

        {/* ── Mobile bottom nav ─────────────────────────────── */}
        <nav
          className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40 flex"
          style={{ borderColor: "#e2e8f0" }}
        >
          {(isStaff ? MOBILE_BOTTOM_NAV_STAFF : MOBILE_BOTTOM_NAV).map((item) => {
            const isActive = path === item.href || path.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center py-2 text-xs gap-0.5 transition-colors"
                style={{ color: isActive ? "#2E6FFF" : "#9ca3af" }}
              >
                <span className="text-xl leading-none">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
          {/* More button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex-1 flex flex-col items-center justify-center py-2 text-xs gap-0.5 text-gray-400"
          >
            <span className="text-xl leading-none">☰</span>
            <span className="font-medium">More</span>
          </button>
        </nav>
      </main>
    </div>
  );
}
