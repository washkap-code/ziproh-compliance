import Link from "next/link";
import Image from "next/image";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "For new or small providers",
    monthly: 49,
    annual: 39,
    stripePriceIdMonthly: "price_starter_monthly",
    stripePriceIdAnnual: "price_starter_annual",
    features: [
      "62 policies & procedures",
      "CQC England aligned",
      "2 user accounts",
      "Full policy search & filtering",
      "Branded PDF download",
      "Email support",
    ],
    notIncluded: ["Audit Centre", "Reading List tracking", "Upload your own docs", "Multiple regulators"],
    color: "#6b7280",
  },
  {
    id: "professional",
    name: "Professional",
    subtitle: "Most popular for single-site providers",
    monthly: 99,
    annual: 79,
    stripePriceIdMonthly: "price_professional_monthly",
    stripePriceIdAnnual: "price_professional_annual",
    popular: true,
    features: [
      "62 policies & procedures",
      "All 4 UK regulators (CQC, CI, CIW, RQIA)",
      "10 user accounts",
      "Full Audit Centre",
      "Staff reading lists & tracking",
      "Upload your own documents",
      "Auto policy updates",
      "Priority email & chat support",
      "Mobile app access",
    ],
    notIncluded: ["Learning Centre", "Feedback Surveys", "API access"],
    color: "#2E6FFF",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "For multi-site care groups",
    monthly: 199,
    annual: 159,
    stripePriceIdMonthly: "price_enterprise_monthly",
    stripePriceIdAnnual: "price_enterprise_annual",
    features: [
      "Everything in Professional",
      "Unlimited user accounts",
      "Multiple service locations",
      "Learning Centre & CPD record tracking",
      "Feedback Surveys module",
      "Mock Inspection tools",
      "Dedicated account manager",
      "Phone support",
      "API access",
      "Custom policy uploads (unlimited)",
      "Advanced reporting & analytics",
    ],
    notIncluded: [],
    color: "#8b5cf6",
  },
];

const FAQS = [
  {
    q: "Is there really a free trial?",
    a: "Yes — all plans include a 14-day free trial. No credit card required to start. You'll only be asked for payment details at the end of your trial.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time from your account settings. Changes take effect immediately and are prorated.",
  },
  {
    q: "How many staff can access the system?",
    a: "Starter allows 2 users. Professional allows 10. Enterprise has unlimited user accounts across all your locations.",
  },
  {
    q: "Are policies personalised to my service?",
    a: "Yes. When you register, you tell us your service type and regulator. All policies are automatically aligned and personalised to your specific situation.",
  },
  {
    q: "What regulators are supported?",
    a: "Professional and Enterprise plans cover all four UK care regulators: CQC (England), Care Inspectorate (Scotland), CIW (Wales), and RQIA (Northern Ireland).",
  },
  {
    q: "How do auto-updates work?",
    a: "Our compliance team monitors all four UK regulators 24/7. When regulations change, we update the relevant policies and push them to your account automatically — you don't need to do anything.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8faff" }}>
      {/* Nav */}
      <nav style={{ backgroundColor: "white", borderBottom: "1px solid #e2e8f0" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/ziproh-logo.png" alt="Ziproh" width={120} height={35} style={{ objectFit: "contain" }} />
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-gray-600 hover:text-gray-900 px-4 py-2">Log in</Link>
            <Link href="/register" className="btn-primary text-sm">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h1>
        <p className="text-xl text-gray-500 mb-2">
          All plans include a 14-day free trial. No credit card required.
        </p>
        <p className="text-sm text-gray-400">Save up to 20% with annual billing</p>
      </div>

      {/* Plans */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className="card relative flex flex-col"
              style={{
                border: plan.popular ? `2px solid ${plan.color}` : "1px solid #e2e8f0",
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: plan.color }}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">{plan.name}</h2>
                <p className="text-gray-500 text-sm mt-1">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gray-900">£{plan.monthly}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  or <span className="font-semibold" style={{ color: plan.color }}>£{plan.annual}/mo</span> billed annually
                </div>
                <div className="text-xs text-gray-400 mt-0.5">+ VAT</div>
              </div>

              <Link
                href={`/register?plan=${plan.id}`}
                className="w-full py-3 rounded-lg font-semibold text-sm text-center block mb-6 transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: plan.popular ? plan.color : "transparent",
                  color: plan.popular ? "white" : plan.color,
                  border: plan.popular ? "none" : `2px solid ${plan.color}`,
                }}
              >
                Start Free Trial
              </Link>

              <div className="flex-1">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">What&apos;s included</div>
                <ul className="space-y-2.5 mb-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="flex-shrink-0 font-bold" style={{ color: plan.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.notIncluded.length > 0 && (
                  <>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3 mt-4">Not included</div>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="flex-shrink-0">✕</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-8 rounded-2xl p-8 text-center" style={{ backgroundColor: "#1e293b" }}>
          <h3 className="text-2xl font-bold text-white mb-2">Managing multiple locations?</h3>
          <p className="text-gray-400 mb-6">
            Enterprise plans can be customised for large care groups with 13+ sites. Talk to us about volume pricing.
          </p>
          <a href="mailto:hello@ziprohtraining.co.uk"
            className="btn-primary text-sm px-8 py-3">
            Contact Us for Group Pricing
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🔒", title: "Secure & GDPR compliant", desc: "UK data hosting" },
            { icon: "🔄", title: "Auto policy updates", desc: "No manual effort" },
            { icon: "📱", title: "Any device", desc: "Web & mobile app" },
            { icon: "💬", title: "Expert support", desc: "Mon–Fri 9am–5pm" },
          ].map((badge) => (
            <div key={badge.title} className="card text-center">
              <div className="text-2xl mb-2">{badge.icon}</div>
              <div className="text-sm font-semibold text-gray-900">{badge.title}</div>
              <div className="text-xs text-gray-400 mt-0.5">{badge.desc}</div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Frequently asked questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{ backgroundColor: "#2E6FFF" }} className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to stay compliant?</h2>
        <p className="text-blue-100 mb-8">Start your 14-day free trial today. No credit card required.</p>
        <Link href="/register" className="bg-white font-bold px-10 py-4 rounded-xl text-sm inline-block"
          style={{ color: "#2E6FFF" }}>
          Start Free Trial →
        </Link>
      </div>
    </div>
  );
}
