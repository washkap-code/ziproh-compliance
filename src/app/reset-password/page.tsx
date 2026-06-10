"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { createBrowserClient } from "@supabase/ssr";

function sb() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export default function ResetPasswordPage() {
  const [password,  setPassword]  = useState("");
  const [confirm,   setConfirm]   = useState("");
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState<string | null>(null);
  const [done,      setDone]      = useState(false);
  const [validLink, setValidLink] = useState<boolean | null>(null); // null = checking

  // Supabase includes the token in the URL hash fragment when the user
  // clicks the reset link in their email. The SSR client automatically
  // exchanges it for a session when getUser() is called.
  useEffect(() => {
    sb().auth.getUser().then(({ data: { user } }) => {
      setValidLink(!!user);
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    setError(null);

    const { error: updateError } = await sb().auth.updateUser({ password });

    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setDone(true);
    // Redirect to dashboard after a short delay
    setTimeout(() => { window.location.href = "/dashboard"; }, 2500);
  }

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f8faff" }}>
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-16"
        style={{ backgroundColor: "#2E6FFF" }}>
        <div className="max-w-md text-center text-white">
          <div className="text-4xl font-bold mb-2">ZiPROH</div>
          <div className="text-blue-100 text-sm mb-12 tracking-widest">the better way to care</div>
          <h2 className="text-3xl font-bold mb-4">Choose a new password</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            Pick something secure that you&apos;ll remember. We recommend using a mix of letters, numbers, and symbols.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 lg:hidden">
            <Link href="/">
              <Image src="/ziproh-logo.png" alt="Ziproh" width={130} height={38} style={{ objectFit: "contain", display: "inline-block" }} />
            </Link>
          </div>

          {/* ── Checking link validity ────────────────────────────── */}
          {validLink === null && (
            <div className="card text-center py-10">
              <div className="text-3xl mb-4 animate-pulse">🔐</div>
              <p className="text-sm text-gray-500">Verifying your reset link…</p>
            </div>
          )}

          {/* ── Invalid / expired link ────────────────────────────── */}
          {validLink === false && (
            <div className="card text-center py-10 px-8">
              <div className="text-5xl mb-4">⚠️</div>
              <h1 className="text-xl font-bold text-gray-900 mb-3">Link expired or invalid</h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                This password reset link has expired or has already been used. Request a new one below.
              </p>
              <Link href="/forgot-password" className="btn-primary text-sm w-full block text-center">
                Request a new link
              </Link>
              <p className="text-xs text-gray-400 mt-4">
                <Link href="/login" className="underline">Back to login</Link>
              </p>
            </div>
          )}

          {/* ── Success ───────────────────────────────────────────── */}
          {validLink && done && (
            <div className="card text-center py-10 px-8">
              <div className="text-5xl mb-4">✅</div>
              <h1 className="text-xl font-bold text-gray-900 mb-3">Password updated!</h1>
              <p className="text-sm text-gray-500 mb-6">
                Your password has been changed. Taking you to your dashboard…
              </p>
              <div className="w-8 h-8 border-4 rounded-full animate-spin mx-auto"
                style={{ borderColor: "#e2e8f0", borderTopColor: "#2E6FFF" }} />
            </div>
          )}

          {/* ── Reset form ────────────────────────────────────────── */}
          {validLink && !done && (
            <div className="card">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Set a new password</h1>
              <p className="text-sm text-gray-500 mb-7">
                Choose a strong password for your Ziproh account.
              </p>

              {error && (
                <div className="mb-5 px-4 py-3 rounded-lg text-sm font-medium"
                  style={{ backgroundColor: "#fee2e2", color: "#b91c1c" }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    New password
                  </label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                    style={{ border: "1.5px solid #e2e8f0" }}
                    onFocus={(e) => (e.target.style.borderColor = "#2E6FFF")}
                    onBlur={(e)  => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Confirm new password
                  </label>
                  <input
                    type="password"
                    required
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Re-enter your password"
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                    style={{ border: "1.5px solid #e2e8f0" }}
                    onFocus={(e) => (e.target.style.borderColor = "#2E6FFF")}
                    onBlur={(e)  => (e.target.style.borderColor = "#e2e8f0")}
                  />
                  {confirm && password !== confirm && (
                    <p className="text-xs text-red-500 mt-1">Passwords don&apos;t match</p>
                  )}
                </div>

                {/* Strength indicator */}
                {password.length > 0 && (
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="h-1.5 flex-1 rounded-full transition-all"
                          style={{
                            backgroundColor:
                              password.length < 8 && i <= 1 ? "#ef4444" :
                              password.length < 8 ? "#e2e8f0" :
                              password.length < 12 && i <= 2 ? "#f59e0b" :
                              password.length < 12 ? "#e2e8f0" :
                              "#22c55e",
                          }} />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">
                      {password.length < 8 ? "Too short" :
                       password.length < 12 ? "OK — consider a longer password" :
                       "Strong password ✓"}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || !password || password !== confirm}
                  className="w-full py-3 rounded-lg font-semibold text-white text-sm transition-opacity"
                  style={{
                    backgroundColor: "#2E6FFF",
                    opacity: loading || !password || password !== confirm ? 0.5 : 1,
                  }}
                >
                  {loading ? "Updating password…" : "Update Password"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
