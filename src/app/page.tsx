import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Bridge Bar — ties this app to ziprohtraining.co.uk */}
      <div className="zp-bridge-bar">
        <div className="zp-bridge-bar__inner">
          <p className="zp-bridge-bar__text">
            <strong>ziprohtraining.co.uk</strong> — Training, consultancy &amp; compliance support for UK care providers
          </p>
          <div className="zp-bridge-bar__links">
            <a href="https://ziprohtraining.co.uk/courses/"         className="zp-bridge-bar__link">Training</a>
            <span className="zp-bridge-bar__sep" aria-hidden="true">·</span>
            <a href="https://ziprohtraining.co.uk/services/"        className="zp-bridge-bar__link">Services</a>
            <span className="zp-bridge-bar__sep" aria-hidden="true">·</span>
            <a href="https://ziprohtraining.co.uk/about-us/"        className="zp-bridge-bar__link">About Us</a>
            <span className="zp-bridge-bar__sep" aria-hidden="true">·</span>
            <a href="https://ziprohtraining.co.uk/news_and_insights/" className="zp-bridge-bar__link">News</a>
            <span className="zp-bridge-bar__sep" aria-hidden="true">·</span>
            <a href="https://ziprohtraining.co.uk/contact/"         className="zp-bridge-bar__link">Contact</a>
            <span className="zp-bridge-bar__sep" aria-hidden="true">·</span>
            <a href="https://ziprohtraining.co.uk" className="zp-bridge-bar__home">← Main Website</a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ backgroundColor: "white", borderBottom: "1px solid #e2e8f0" }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/ziproh-logo.png" alt="Ziproh" width={140} height={40} style={{ objectFit: "contain" }} priority />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="#features" className="hover:text-[#2E6FFF] transition-colors">Features</Link>
            <Link href="#who-we-help" className="hover:text-[#2E6FFF] transition-colors">Who We Help</Link>
            <Link href="/pricing" className="hover:text-[#2E6FFF] transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-gray-700 hover:text-[#2E6FFF] transition-colors px-4 py-2">
              Log in
            </Link>
            <Link href="/register" className="btn-primary text-sm">
              Start Free Trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "#f8faff" }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: "#e8f0ff", color: "#2E6FFF" }}>
              ✓ Built for UK care providers — 14-day free trial
            </div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Run Your Care Service<br />
              <span style={{ color: "#2E6FFF" }}>With Confidence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ziproh brings everything your team needs into one place — 89 auto-updated policies,
              an AI compliance assistant, inspection prep tools, and more. Stay inspection-ready, every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register" className="btn-primary text-base px-8 py-3">
                Start Free Trial
              </Link>
              <Link href="#features" className="btn-secondary text-base px-8 py-3">
                See How It Works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
              {["No credit card required", "14-day free trial", "Cancel anytime"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span style={{ color: "#2E6FFF" }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
              {/* Mock dashboard preview */}
              <div style={{ backgroundColor: "#1e293b" }} className="px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs text-gray-400 ml-2">app.ziprohtraining.co.uk</span>
              </div>
              <div style={{ backgroundColor: "#f8faff" }} className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#2E6FFF" }}>
                    <span className="text-white text-xs font-bold">Z</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Compliance Centre</div>
                    <div className="text-xs text-gray-500">139 policies • All up to date</div>
                  </div>
                  <div className="ml-auto badge badge-green">✓ Compliant</div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: "Safeguarding Adults Policy", cat: "Safe", updated: "Today" },
                    { name: "Medication Management Procedure", cat: "Effective", updated: "2 days ago" },
                    { name: "Infection Prevention & Control", cat: "Safe", updated: "1 week ago" },
                    { name: "Staffing & Deployment Policy", cat: "Well-Led", updated: "1 week ago" },
                  ].map((doc) => (
                    <div key={doc.name} className="card p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "#e8f0ff" }}>
                        <span className="text-[#2E6FFF] text-xs">📄</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-900">{doc.name}</div>
                        <div className="text-xs text-gray-500">{doc.cat} • Updated {doc.updated}</div>
                      </div>
                      <div className="status-indicator" style={{ backgroundColor: "#22c55e" }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "89", label: "Policies & Procedures" },
              { value: "24/7", label: "Access on Any Device" },
              { value: "4", label: "UK Regulators Covered" },
              { value: "AI", label: "Compliance Assistant" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-1" style={{ color: "#2E6FFF" }}>{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ backgroundColor: "#f8faff" }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything in one platform</h2>
            <p className="text-xl text-gray-500">Built for UK care providers. Fully aligned to CQC — with support for Care Inspectorate, CIW and RQIA.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📋",
                title: "Compliance Centre",
                desc: "89 auto-updated policies and procedures aligned to CQC's 5 Key Questions. Download any policy as a branded PDF instantly.",
                badge: "Core Feature",
              },
              {
                icon: "🤖",
                title: "Ziproh AI",
                desc: "Ask any compliance question and get an expert answer — with direct links to the relevant policy. Available 24/7.",
                badge: "Included",
              },
              {
                icon: "🏛️",
                title: "Inspection Prep",
                desc: "Know exactly where you stand before a CQC visit. Per-Key-Question readiness scores, inspector focus areas, and a pre-inspection checklist.",
                badge: "Included",
              },
              {
                icon: "🔍",
                title: "Audit Centre",
                desc: "Run internal audits, track improvement actions, and build an evidence trail aligned to CQC Fundamental Standards.",
                badge: "Included",
              },
              {
                icon: "📅",
                title: "Policy Reviews",
                desc: "Formally sign off policies on an annual cycle. Track review outcomes and generate a compliance evidence report for inspectors.",
                badge: "Included",
              },
              {
                icon: "📚",
                title: "Staff Reading Lists",
                desc: "Assign priority policies for staff to read and acknowledge. Monitor team-wide compliance at a glance.",
                badge: "Included",
              },
            ].map((feature) => (
              <div key={feature.title} className="card hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                  <span className="badge badge-blue text-xs">{feature.badge}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section id="who-we-help" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Help</h2>
            <p className="text-xl text-gray-500">Ziproh is built for every type of UK care provider.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Care & Nursing Homes",
              "Domiciliary Care Providers",
              "Supported Living Services",
              "General Practice (GP)",
              "Healthcare Clinics",
              "Community-Based Care",
            ].map((type) => (
              <div key={type} className="card flex items-center gap-3 hover:border-[#2E6FFF] transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#e8f0ff" }}>
                  <span style={{ color: "#2E6FFF" }}>✓</span>
                </div>
                <span className="font-semibold text-gray-800 text-sm">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulators */}
      <section style={{ backgroundColor: "#2E6FFF" }} className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Aligned to all four UK care regulators</h2>
          <p className="text-blue-100 mb-10">Wherever you operate, Ziproh keeps you compliant.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "CQC England", detail: "Single Assessment Framework" },
              { name: "Care Inspectorate Scotland", detail: "Health & Social Care Standards" },
              { name: "CIW Wales", detail: "Regulation & Inspection Act 2016" },
              { name: "RQIA N. Ireland", detail: "Minimum Standards" },
            ].map((reg) => (
              <div key={reg.name} className="rounded-xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                <div className="text-white font-bold mb-1">{reg.name}</div>
                <div className="text-blue-100 text-xs">{reg.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to stay compliant?</h2>
          <p className="text-xl text-gray-500 mb-10">
            Start your 14-day free trial today. No credit card required.
            All 139 policies, audit tools, and AI compliance assistant — included from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="btn-primary text-base px-10 py-4">
              Start Free Trial — No Card Required
            </Link>
            <Link href="/pricing" className="btn-secondary text-base px-10 py-4">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#111111", color: "#9ca3af" }} className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-bold text-xl mb-1">ZiPROH</div>
              <div className="text-xs mb-4">the better way to care</div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Empowering UK healthcare providers through innovative compliance management solutions.
              </p>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-4">Platform</div>
              <div className="space-y-2 text-xs">
                <div><Link href="/compliance" className="hover:text-white transition-colors">Compliance Centre</Link></div>
                <div><Link href="/audit" className="hover:text-white transition-colors">Audit Centre</Link></div>
                <div><Link href="/learning" className="hover:text-white transition-colors">Learning Centre</Link></div>
                <div><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></div>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-4">Who We Help</div>
              <div className="space-y-2 text-xs">
                <div className="hover:text-white transition-colors cursor-pointer">Care Homes</div>
                <div className="hover:text-white transition-colors cursor-pointer">Domiciliary Care</div>
                <div className="hover:text-white transition-colors cursor-pointer">Supported Living</div>
                <div className="hover:text-white transition-colors cursor-pointer">General Practice</div>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-sm mb-4">Support</div>
              <div className="space-y-2 text-xs">
                <div><Link href="/login" className="hover:text-white transition-colors">Log In</Link></div>
                <div><Link href="/register" className="hover:text-white transition-colors">Register</Link></div>
                <div><a href="mailto:hello@ziprohtraining.co.uk" className="hover:text-white transition-colors">Contact Us</a></div>
                <div><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #374151" }} className="pt-6 flex flex-wrap justify-between items-center text-xs">
            <span>© 2026 Ziproh Digital Care. All rights reserved.</span>
            <span>Part of <a href="https://ziprohtraining.co.uk" className="hover:text-white">ziprohtraining.co.uk</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
