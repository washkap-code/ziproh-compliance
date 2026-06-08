"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: "🏠" },
  { href: "/compliance", label: "Compliance Centre", icon: "📋" },
  { href: "/audit", label: "Audit Centre", icon: "🔍" },
  { href: "/reading-lists", label: "Reading Lists", icon: "📚" },
  { href: "/ai-assistant", label: "Ziproh AI", icon: "🤖" },
  { href: "/learning", label: "Learning Centre", icon: "🎓" },
  { href: "/staff", label: "My Staff", icon: "👥" },
  { href: "/feedback", label: "Feedback Surveys", icon: "💬" },
];

const BOTTOM_NAV = [
  { href: "/account", label: "Account Settings", icon: "⚙️" },
  { href: "/help", label: "Help & Support", icon: "❓" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f8faff" }}>
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 flex flex-col"
        style={{ backgroundColor: "white", borderRight: "1px solid #e2e8f0", minHeight: "100vh" }}>
        {/* Logo */}
        <div className="p-5 border-b" style={{ borderColor: "#e2e8f0" }}>
          <Link href="/dashboard">
            <Image src="/ziproh-logo.png" alt="Ziproh" width={120} height={35}
              style={{ objectFit: "contain" }} />
          </Link>
        </div>

        {/* Org info */}
        <div className="px-4 py-3 border-b" style={{ borderColor: "#e2e8f0", backgroundColor: "#f8faff" }}>
          <div className="text-xs text-gray-500 mb-0.5">Your Organisation</div>
          <div className="text-sm font-semibold text-gray-900 truncate">Sunrise Care Home</div>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="badge badge-green text-xs">Professional</span>
            <span className="text-xs text-gray-400">• CQC</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${path === item.href || path.startsWith(item.href + "/") ? "active" : ""}`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t space-y-0.5" style={{ borderColor: "#e2e8f0" }}>
          {BOTTOM_NAV.map((item) => (
            <Link key={item.href} href={item.href} className="sidebar-link">
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
          <button
            onClick={() => window.location.href = "/"}
            className="sidebar-link w-full text-red-500 hover:bg-red-50 hover:text-red-600"
          >
            <span className="text-base">🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="h-14 flex items-center justify-between px-6 bg-white border-b" style={{ borderColor: "#e2e8f0" }}>
          <div></div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-gray-50">
              <span className="text-gray-500 text-lg">🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: "#2E6FFF" }}></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "#2E6FFF" }}>
                W
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold text-gray-900">Washington</div>
                <div className="text-xs text-gray-400">Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 p-6 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
