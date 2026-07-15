"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createBrowserClient } from "@supabase/ssr";

const sb = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const PLANS = [
  {
    name: "Professional",
    planId: "professional",
    price: "£79",
    annualTotal: "£950",
    period: "/mo",
    tagline: "For growing care services",
    color: "#2E6FFF",
    highlight: true,
    features: [
      "All 189 policies — always up to date",
      "Unlimited staff accounts",
      "Full audit trail & compliance record",
      "CQC inspection readiness tools",
      "Branded PDF policy downloads",
      "AI compliance assistant",
      "Policy review tracker",
      "Reading lists & staff training tracking",
      "Feedback surveys",
      "Priority email support",
    ],
    cta: "Start Professional",
  },
  {
    name: "Enterprise",
    planId: "enterprise",
    price: "£119",
    annualTotal: "£1,428",
    period: "/mo",
    tagline: "For multi-site organisations",
    color: "#7c3aed",
    highlight: false,
    features: [
      "Everything in Professional",
      "Multi-site management",
      "Custom policy branding",
      "Dedicated account manager",
      "Bespoke policy additions",
      "API access",
      "SAML SSO",
      "SLA & uptime guarantee",
    ],
    cta: "Start Free Trial",
  },
];

export default function UpgradePage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function handleUpgrade(planId: string) {
    setError("");
    setLoadingPlan(planId);
    try {
      const { data: { user } } = await sb.auth.getUser();
      if (!user) { window.location.href = "/login?redirectTo=/upgrade"; return; }

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId,
          billing: "annual",
          customerEmail: user.email,
          userId: user.id,
        }),
      });

      if (!res.ok) throw new Error("checkout_failed");
      const { url, error: apiError } = await res.json();
      if (apiError || !url) throw new Error(apiError ?? "no_url");
      window.location.href = url;
    } catch {
      window.location.href = `mailto:hello@ziprohtraining.co.uk?subject=Upgrade%20to%20Ziproh%20${planId === "professional" ? "Professional" : "Enterprise"}`;
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f8faff" }}>
      {/* Header */}
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: "#e2e8f0" }}>
        <Link href="/dashboard">
          <Image src="/ziproh-logo.png" alt="Ziproh" width={110} height={32} style={{ objectFit: "contain" }} />
        </Link>
        <Link href="/account" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
          ← Back to account
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12 max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "#fff3cd", color: "#b45309", border: "1px solid #fde68a" }}>
            ⏱ Your free trial has ended
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Keep your service CQC-ready — upgrade to continue
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Don&apos;t lose access to your policies, audit records, and compliance evidence. Upgrade in under a minute.
          </p>
        </div>

        {error && (
          <div className="mb-6 px-5 py-3 rounded-xl text-sm font-medium"
            style={{ backgroundColor: "#fee2e2", color: "#b91c1c" }}>
            {error}
          </div>
        )}

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl p-7 flex flex-col"
              style={{
                border: plan.highlight ? `2px solid ${plan.color}` : "1px solid #e2e8f0",
                boxShadow: plan.highlight ? `0 4px 24px ${plan.color}20` : undefined,
              }}
            >
              {plan.highlight && (
                <div className="self-start text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: `${plan.color}15`, color: plan.color }}>
                  Most Popular
                </div>
              )}
              <div className="mb-1 text-lg font-bold text-gray-900">{plan.name}</div>
              <div className="text-sm text-gray-500 mb-5">{plan.tagline}</div>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
              </div>
              <p className="text-xs text-gray-400 mb-6">Billed annually ({plan.annualTotal}/yr). Cancel anytime.</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: plan.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleUpgrade(plan.planId)}
                disabled={loadingPlan !== null}
                className="block w-full text-center py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: plan.color }}
              >
                {loadingPlan === plan.planId ? "Redirecting…" : plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">🔒 Secure payments via Stripe</span>
          <span className="flex items-center gap-1.5">✓ Cancel anytime</span>
          <span className="flex items-center gap-1.5">📋 189 CQC-aligned policies</span>
          <span className="flex items-center gap-1.5">🇬🇧 UK-based support</span>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Need help?{" "}
          <a href="mailto:hello@ziprohtraining.co.uk" className="text-blue-500 hover:underline">
            Contact us
          </a>{" "}
          and we&apos;ll get you set up immediately.
        </p>
      </main>
    </div>
  );
}
