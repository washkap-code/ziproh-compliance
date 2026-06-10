"use client";
import Link from "next/link";
import Image from "next/image";

const PLANS = [
  {
    name: "Professional",
    price: "£49",
    period: "/month",
    tagline: "For growing care services",
    color: "#2E6FFF",
    highlight: true,
    features: [
      "All 62 policies — always up to date",
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
    price: "£149",
    period: "/month",
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
    cta: "Contact Sales",
  },
];

export default function UpgradePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f8faff" }}>
      {/* Header */}
      <header className="bg-white border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: "#e2e8f0" }}>
        <Link href="/dashboard">
          <Image src="/ziproh-logo.png" alt="Ziproh" width={110} height={32} style={{ objectFit: "contain" }} />
        </Link>
        <Link
          href="/account"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
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
            Don't lose access to your policies, audit records, and compliance evidence. Upgrade in under a minute.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl p-7 flex flex-col"
              style={{
                border: plan.highlight
                  ? `2px solid ${plan.color}`
                  : "1px solid #e2e8f0",
                boxShadow: plan.highlight ? `0 4px 24px ${plan.color}20` : undefined,
              }}
            >
              {plan.highlight && (
                <div
                  className="self-start text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: `${plan.color}15`, color: plan.color }}
                >
                  Most Popular
                </div>
              )}
              <div className="mb-1 text-lg font-bold text-gray-900">{plan.name}</div>
              <div className="text-sm text-gray-500 mb-5">{plan.tagline}</div>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: plan.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@ziprohtraining.co.uk?subject=Upgrade%20to%20Ziproh%20Professional"
                className="block w-full text-center py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: plan.color }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">🔒 Secure payments</span>
          <span className="flex items-center gap-1.5">✓ Cancel anytime</span>
          <span className="flex items-center gap-1.5">📋 62 CQC-aligned policies</span>
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
