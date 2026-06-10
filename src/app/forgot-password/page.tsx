"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email,     setEmail]     = useState("");
  const [loading,   setLoading]   = useState(false);
  const [sent,      setSent]      = useState(false);
  const [error,     setError]     = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const origin = typeof window !== "undefined" ? window.location.origin : "https://app.ziprohtraining.co.uk";
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/reset-password`,
    });

    setLoading(false);
    if (err) setError(err.message);
    else setSent(true);
  }

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#f8faff" }}>

      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-16"
        style={{ backgroundColor: "#2E6FFF" }}>
        <div className="max-w-md text-center text-white">
          <div className="text-4xl font-bold mb-2">ZiPROH</div>
          <div className="text-blue-100 text-sm mb-12 tracking-widest">the better way to care</div>
          <h2 className="text-3xl font-bold mb-6">Forgot your password?</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            No problem. Enter your email address and we&apos;ll send you a secure link to reset it.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="flex justify-center mb-8 lg:hidden">
            <Image src="/ziproh-logo.png" alt="Ziproh" width={130} height={38} style={{ objectFit: "contain" }} />
          </div>

          {sent ? (
            /* Success state */
            <div className="card text-center py-10 px-8">
              <div className="text-5xl mb-4">📬</div>
              <h1 className="text-xl font-bold text-gray-900 mb-3">Check your inbox</h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                We&apos;ve sent a password reset link to <strong className="text-gray-800">{email}</strong>.
                The link expires in 1 hour.
              </p>
              <p className="text-xs text-gray-400 mb-6">
                Didn&apos;t receive it? Check your spam folder, or{" "}
                <button onClick={() => setSent(false)} className="underline text-[#2E6FFF]">try again</button>.
              </p>
              <Link href="/login"
                className="btn-primary text-sm w-full text-center block">
                Back to Login
              </Link>
            </div>
          ) : (
            /* Form */
            <div className="card">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Reset your password</h1>
              <p className="text-sm text-gray-500 mb-7">
                Enter the email address on your account and we&apos;ll send you a reset link.
              </p>

              {error && (
                <div className="mb-5 px-4 py-3 rounded-lg text-sm font-medium"
                  style={{ backgroundColor: "#fee2e2", color: "#b91c1c" }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    autoFocus
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                    style={{ border: "1.5px solid #e2e8f0" }}
                    onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
                    onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                <button type="submit" disabled={loading}
                  className="btn-primary w-full text-sm py-3">
                  {loading ? "Sending…" : "Send Reset Link"}
                </button>
              </form>

              <p className="text-sm text-center text-gray-500 mt-6">
                Remember your password?{" "}
                <Link href="/login" className="font-semibold" style={{ color: "#2E6FFF" }}>
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
