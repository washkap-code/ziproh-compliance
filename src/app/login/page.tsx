"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Supabase auth will go here
    // const { error } = await supabase.auth.signInWithPassword({ email, password });
    // For now, redirect to dashboard
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 800);
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f8faff" }}>
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-16"
        style={{ backgroundColor: "#2E6FFF" }}>
        <div className="max-w-md text-center text-white">
          <div className="text-4xl font-bold mb-2">ZiPROH</div>
          <div className="text-blue-100 text-sm mb-12 tracking-widest">the better way to care</div>
          <h2 className="text-3xl font-bold mb-6">
            Stay Compliant.<br />Stay Confident.
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10">
            Access 340+ auto-updated policies, audit tools, reading lists, and compliance resources — all in one place.
          </p>
          <div className="space-y-4">
            {[
              "Aligned to CQC, CI, CIW & RQIA",
              "Automatic policy updates 24/7",
              "Access on any device, anywhere",
              "HR & Health & Safety support included",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-left">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.25)" }}>
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-blue-100 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/">
              <Image src="/ziproh-logo.png" alt="Ziproh" width={140} height={40}
                style={{ objectFit: "contain", display: "inline-block" }} />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-1">Welcome back</h1>
            <p className="text-gray-500 text-sm">Sign in to your Ziproh account</p>
          </div>

          <div className="card">
            <form onSubmit={handleLogin} className="space-y-5">
              {error && (
                <div className="rounded-lg p-3 text-sm" style={{ backgroundColor: "#fee2e2", color: "#b91c1c" }}>
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourcare.org.uk"
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-gray-900 outline-none transition-all"
                  style={{ border: "1.5px solid #e2e8f0" }}
                  onFocus={(e) => e.target.style.borderColor = "#2E6FFF"}
                  onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Password</label>
                  <Link href="/forgot-password" className="text-xs font-medium" style={{ color: "#2E6FFF" }}>
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-lg text-sm text-gray-900 outline-none transition-all"
                  style={{ border: "1.5px solid #e2e8f0" }}
                  onFocus={(e) => e.target.style.borderColor = "#2E6FFF"}
                  onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold text-white text-sm transition-opacity"
                style={{ backgroundColor: "#2E6FFF", opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Signing in…" : "Sign In"}
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold" style={{ color: "#2E6FFF" }}>
              Start free trial
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
