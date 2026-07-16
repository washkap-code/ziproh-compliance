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
    id: "professional",
    name: "Professional",
    subtitle: "For single-site care providers",
    perMonth: 79,
    annualTotal: 950,
    color: "#2E6FFF",
    popular: true,
    features: [
      "All 209 policies & procedures",
      "Auto-updated to match CQC, CI, CIW & RQIA",
      "Unlimited user accounts",
      "Full Audit Centre",
      "Staff reading lists & acknowledgement tracking",
      "CQC inspection readiness tools",
      "Branded PDF policy downloads",
      "Ziproh AI compliance assistant",
      "Policy review tracker",
      "Feedback surveys",
      "Mobile-friendly — works on any device",
      "Priority email support",
    ],
    notIncluded: [],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "For multi-site care groups",
    perMonth: 119,
    annualTotal: 1428,
    color: "#7c3aed",
    popular: false,
    features: [
      "Everything in Professional",
      "Multi-site management",
      "Custom policy branding",
      "Bespoke policy additions",
      "Dedicated account manager",
      "Phone support",
      "API access",
      "SAML SSO",
      "SLA & uptime guarantee",
    ],
    notIncluded: [],
  },
];

const FAQS = [
  {
    q: "Is there a free trial?",
    a: "Yes — all plans include a 14-day free trial. No credit card required to start. You get full access to every feature from day one.",
  },
  {
    q: "How are policies kept up to date?",
    a: "Ziproh monitors regulatory guidance from CQC, Care Inspectorate, CIW and RQIA. When guidance changes, we update the affected policies and notify your team.",
  },
  {
    q: "Can I add multiple staff members?",
    a: "Yes. All plans include unlimited staff accounts. Each team member gets their own login and compliance record.",
  },
  {
    q: "What happens if I cancel?",
    a: "You can cancel at any time. Your data is retained for 30 days so you can export it. Email hello@ziprohtraining.co.uk to cancel.",
  },
  {
    q: "Do you cover all four UK regulators?",
    a: "Yes — policies are aligned to CQC (England), Care Inspectorate (Scotland), CIW (Wales), and RQIA (Northern Ireland).",
  },
  {
    q: "What if I need more than the standard policies?",
    a: "Enterprise customers can request bespoke policy additions and custom branding. Contact us to discuss your requirements.",
  },
];

export default function PricingPage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleStart(planId: string) {
    setLoadingPlan(planId);
    try {
      const { data: { user } } = await sb.auth.getUser();

      if (!user) {
        window.location.href = `/register?plan=${planId}`;
        return;
      }

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

      if (res.ok) {
        const { url } = await res.json();
        if (url) { window.location.href = url; return; }
      }

      window.location.href = "/upgrade";
    } catch {
      window.location.href = `/register?plan=${planId}`;
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f8faff" }}>

      {/* Nav */}
      <nav className="bg-white border-b sticky top-0 z-50" style={{ borderColor: "#e2e8f0" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/ziproh-logo.png" alt="Ziproh" width={120} height={34} style={{ objectFit: "contain" }} />
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-gray-600 hover:text-[#2E6FFF] px-4 py-2 transition-colors">
              Log in
            </Link>
            <Link href="/register" className="btn-primary text-sm">
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">

        {/* Hero */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "#e8f0ff", color: "#2E6FFF" }}>
              ✓ 14-day free trial — no credit card required
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h1>
            <p className="text-xl text-gray-500">
              One plan covers everything your care service needs to stay compliant and inspection-ready.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-2xl p-8 flex flex-col relative"
                style={{
                  border: plan.popular ? `2px solid ${plan.color}` : "1px solid #e2e8f0",
                  boxShadow: plan.popular ? `0 8px 40px ${plan.color}18` : "0 1px 8px rgba(0,0,0,0.05)",
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full text-white"
                    style={{ backgroundColor: plan.color }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <div className="text-xl font-bold text-gray-900 mb-1">{plan.name}</div>
                  <div className="text-sm text-gray-500">{plan.subtitle}</div>
                </div>

                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-extrabold text-gray-900">£{plan.perMonth}</span>
                  <span className="text-gray-400 text-sm mb-1.5">/mo</span>
                </div>
                <p className="text-xs text-gray-400 mb-8">Billed annually (£{plan.annualTotal}/yr). Cancel anytime.</p>

                <button
                  onClick={() => handleStart(plan.id)}
                  disabled={loadingPlan !== null}
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 mb-8"
                  style={{ backgroundColor: plan.color }}
                >
                  {loadingPlan === plan.id ? "Redirecting…" : "Start Free 14-Day Trial"}
                </button>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: plan.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trial callout */}
          <div className="max-w-4xl mx-auto mt-8 rounded-2xl p-6 text-center"
            style={{ backgroundColor: "#f0f6ff", border: "1px solid #c7d9ff" }}>
            <p className="text-sm font-semibold text-blue-900 mb-1">
              🎉 Both plans include a full 14-day free trial
            </p>
            <p className="text-xs text-blue-700">
              Full access to every feature. No credit card needed. Cancel before day 14 and you won&apos;t be charged.
            </p>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Everything you get</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "📋", title: "89 Policies", desc: "Auto-updated to match current CQC, CI, CIW and RQIA guidance. Download any policy as a branded PDF." },
                { icon: "🤖", title: "Ziproh AI", desc: "Ask any compliance question and get an expert answer with direct links to the relevant policy." },
                { icon: "🔍", title: "Audit Centre", desc: "Run internal audits, score each area, and build an evidence trail for inspectors." },
                { icon: "🏛️", title: "Inspection Prep", desc: "Know exactly where you stand before a CQC visit. Per-Key-Question readiness scores and checklists." },
                { icon: "📚", title: "Reading Lists", desc: "Assign policies for staff to read and acknowledge. Track team compliance at a glance." },
                { icon: "📅", title: "Policy Reviews", desc: "Formally sign off policies annually and generate a compliance evidence report." },
              ].map((f) => (
                <div key={f.title} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{f.title}</div>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-6" style={{ backgroundColor: "#f8faff" }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Frequently asked questions</h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 text-gray-400">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t" style={{ borderColor: "#f3f4f6" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-white text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to get started?</h2>
            <p className="text-gray-500 mb-8 text-sm">
              14-day free trial, no card required. Full access from day one.
            </p>
            <Link href="/register" className="btn-primary text-sm px-8 py-3 inline-block">
              Start Free Trial →
            </Link>
            <p className="mt-4 text-xs text-gray-400">
              Have a question?{" "}
              <a href="mailto:hello@ziprohtraining.co.uk" className="text-blue-500 hover:underline">
                Email us
              </a>
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t text-center text-xs text-gray-400" style={{ borderColor: "#e2e8f0" }}>
        <p>© 2026 Ziproh Digital Care · Part of <a href="https://ziprohtraining.co.uk" className="hover:text-gray-600">ziprohtraining.co.uk</a></p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-600">Terms</Link>
          <a href="mailto:hello@ziprohtraining.co.uk" className="hover:text-gray-600">Contact</a>
        </div>
      </footer>
    </div>
  );
}
