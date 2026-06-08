"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SERVICE_TYPES = [
  "Care & Nursing Home",
  "Domiciliary Care Provider",
  "Supported Living",
  "General Practice (GP)",
  "Healthcare Clinic",
  "Community Care Organisation",
  "Hospice",
];

const REGULATORS = ["CQC (England)", "Care Inspectorate (Scotland)", "CIW (Wales)", "RQIA (Northern Ireland)"];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", password: "",
    orgName: "", serviceType: "", regulator: "", plan: "professional",
  });
  const [loading, setLoading] = useState(false);

  const update = (field: string, val: string) => setForm((f) => ({ ...f, [field]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Supabase signup + Stripe checkout will go here
    setTimeout(() => { window.location.href = "/dashboard"; }, 1000);
  };

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "£49",
      period: "/month",
      desc: "Perfect for new or small providers",
      features: ["100 policies & procedures", "CQC aligned", "2 user accounts", "Basic audit tools", "Email support"],
    },
    {
      id: "professional",
      name: "Professional",
      price: "£99",
      period: "/month",
      desc: "Most popular for single-site providers",
      features: ["340+ policies & procedures", "All 4 UK regulators", "10 user accounts", "Full audit centre", "Reading lists & tracking", "Upload your own docs", "Priority support"],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "£199",
      period: "/month",
      desc: "For multi-site care groups",
      features: ["Everything in Professional", "Unlimited user accounts", "Multiple service locations", "Learning centre access", "Feedback surveys", "Dedicated account manager", "API access"],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8faff" }}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/ziproh-logo.png" alt="Ziproh" width={120} height={35} style={{ objectFit: "contain" }} />
          </Link>
          <div className="flex items-center gap-6">
            {["Your details", "Organisation", "Choose plan"].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all`}
                  style={{
                    backgroundColor: step > i + 1 ? "#22c55e" : step === i + 1 ? "#2E6FFF" : "#e2e8f0",
                    color: step >= i + 1 ? "white" : "#6b7280",
                  }}>
                  {step > i + 1 ? "✓" : i + 1}
                </div>
                <span className={`text-xs font-medium hidden md:inline ${step === i + 1 ? "text-gray-900" : "text-gray-400"}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900">Sign in</Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Step 1 — Account details */}
        {step === 1 && (
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h1>
            <p className="text-gray-500 mb-8">14-day free trial. No credit card required.</p>
            <div className="card">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {["firstName", "lastName"].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        {field === "firstName" ? "First name" : "Last name"}
                      </label>
                      <input
                        type="text" required
                        value={form[field as keyof typeof form]}
                        onChange={(e) => update(field, e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                        style={{ border: "1.5px solid #e2e8f0" }}
                        onFocus={(e) => e.target.style.borderColor = "#2E6FFF"}
                        onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Work email</label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@yourcare.org.uk"
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                    style={{ border: "1.5px solid #e2e8f0" }}
                    onFocus={(e) => e.target.style.borderColor = "#2E6FFF"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                  <input
                    type="password" required
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                    placeholder="Min. 8 characters"
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                    style={{ border: "1.5px solid #e2e8f0" }}
                    onFocus={(e) => e.target.style.borderColor = "#2E6FFF"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!form.firstName || !form.email || !form.password}
                  className="w-full py-3 rounded-lg font-semibold text-white text-sm"
                  style={{ backgroundColor: "#2E6FFF" }}
                >
                  Continue →
                </button>
                <p className="text-xs text-gray-400 text-center">
                  By continuing you agree to our{" "}
                  <Link href="/terms" className="underline">Terms of Service</Link> and{" "}
                  <Link href="/privacy" className="underline">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 — Organisation */}
        {step === 2 && (
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tell us about your service</h1>
            <p className="text-gray-500 mb-8">We&apos;ll personalise your policies and tools to match your service type and regulator.</p>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Organisation / Practice name</label>
                  <input
                    type="text" required
                    value={form.orgName}
                    onChange={(e) => update("orgName", e.target.value)}
                    placeholder="e.g. Sunrise Care Home"
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
                    style={{ border: "1.5px solid #e2e8f0" }}
                    onFocus={(e) => e.target.style.borderColor = "#2E6FFF"}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service type</label>
                  <select
                    value={form.serviceType}
                    onChange={(e) => update("serviceType", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white"
                    style={{ border: "1.5px solid #e2e8f0" }}
                  >
                    <option value="">Select your service type…</option>
                    {SERVICE_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your regulator</label>
                  <select
                    value={form.regulator}
                    onChange={(e) => update("regulator", e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-white"
                    style={{ border: "1.5px solid #e2e8f0" }}
                  >
                    <option value="">Select your regulator…</option>
                    {REGULATORS.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setStep(1)} className="btn-secondary flex-1 py-3 text-sm justify-center">
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!form.orgName || !form.serviceType || !form.regulator}
                    className="flex-1 py-3 rounded-lg font-semibold text-white text-sm"
                    style={{ backgroundColor: "#2E6FFF" }}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 — Plan selection */}
        {step === 3 && (
          <div>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose your plan</h1>
              <p className="text-gray-500">All plans include a 14-day free trial. Cancel anytime.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => update("plan", plan.id)}
                  className="card cursor-pointer transition-all relative"
                  style={{
                    border: form.plan === plan.id ? "2px solid #2E6FFF" : "1px solid #e2e8f0",
                    transform: form.plan === plan.id ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="badge badge-blue text-xs px-3 py-1">Most Popular</span>
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-500 text-xs mt-1">{plan.desc}</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                    <div className="text-xs text-gray-400 mt-1">+ VAT</div>
                  </div>
                  <div className="space-y-2.5 mb-6">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span style={{ color: "#2E6FFF" }}>✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 mx-auto transition-all`}
                    style={{
                      borderColor: form.plan === plan.id ? "#2E6FFF" : "#d1d5db",
                      backgroundColor: form.plan === plan.id ? "#2E6FFF" : "white",
                    }}>
                    {form.plan === plan.id && (
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 max-w-sm mx-auto">
              <button onClick={() => setStep(2)} className="btn-secondary flex-1 py-3 text-sm justify-center">
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 py-3 rounded-lg font-semibold text-white text-sm"
                style={{ backgroundColor: "#2E6FFF", opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Creating account…" : "Start Free Trial →"}
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              No payment needed today. You&apos;ll enter billing details after your 14-day trial.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
