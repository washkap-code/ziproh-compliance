"use client";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

type Article = {
  id: string;
  title: string;
  category: string;
  summary: string;
  icon: string;
};

const ARTICLES: Article[] = [
  // Getting started
  { id: "gs1", title: "Getting started with Ziproh", category: "Getting Started", icon: "🚀", summary: "An overview of the platform: compliance centre, audit tools, reading lists, and how to navigate between sections." },
  { id: "gs2", title: "Adding staff to your account", category: "Getting Started", icon: "👥", summary: "How to invite team members, assign roles (admin, manager, staff), and manage permissions." },
  { id: "gs3", title: "Setting your regulator and service type", category: "Getting Started", icon: "⚙️", summary: "How to update your organisation profile so policies are filtered correctly for CQC, Care Inspectorate, CIW, or RQIA." },
  { id: "gs4", title: "Installing the app on your device", category: "Getting Started", icon: "📱", summary: "Step-by-step guide to adding Ziproh to your home screen on iPhone, Android, or desktop — no app store required." },
  // Compliance
  { id: "cp1", title: "How are policies kept up to date?", category: "Compliance", icon: "📋", summary: "Ziproh monitors regulatory guidance and automatically updates affected policies. You'll see a 'New Update' badge when a document changes." },
  { id: "cp2", title: "Assigning policies to reading lists", category: "Compliance", icon: "📚", summary: "Create themed reading lists (e.g. 'New Starter Pack') and assign policies for staff to confirm they have read." },
  { id: "cp3", title: "Uploading your own documents", category: "Compliance", icon: "⬆️", summary: "You can supplement the policy library with your own documents. Uploaded files appear alongside standard policies." },
  { id: "cp4", title: "Understanding key question categories", category: "Compliance", icon: "🔍", summary: "Policies are mapped to Safe, Effective, Caring, Responsive, and Well-Led — mirroring the CQC single assessment framework." },
  // Audits
  { id: "au1", title: "Creating a new audit", category: "Audits", icon: "✅", summary: "How to start an internal audit from a template, answer questions, score each area, and save or export the result." },
  { id: "au2", title: "What audit templates are available?", category: "Audits", icon: "📄", summary: "Ziproh includes templates for medication, infection control, care planning, health & safety, and more." },
  // Billing
  { id: "bi1", title: "Changing or upgrading your plan", category: "Billing", icon: "💳", summary: "Visit Account Settings to view your current plan. Email hello@ziprohtraining.co.uk to upgrade, downgrade, or discuss Enterprise pricing." },
  { id: "bi2", title: "What happens when my trial ends?", category: "Billing", icon: "⏱", summary: "After your 14-day trial, access will be restricted until you add a payment method. Your data is never deleted." },
];

const CATEGORIES = ["All", ...Array.from(new Set(ARTICLES.map(a => a.category)))];

const FAQ = [
  { q: "Can multiple users log in at the same time?", a: "Yes — all plans support unlimited concurrent logins for your team members." },
  { q: "Is my data stored securely?", a: "All data is encrypted at rest and in transit. Ziproh uses Supabase (hosted on AWS EU-West) and complies with UK GDPR." },
  { q: "Can I export policies as PDFs?", a: "Yes. Open any policy and use the Export button to download a branded PDF copy." },
  { q: "Does Ziproh work offline?", a: "Once the app is installed to your home screen, previously viewed pages are cached for offline access." },
  { q: "How do I cancel my subscription?", a: "Email hello@ziprohtraining.co.uk with your organisation name. We'll process the cancellation within 1 business day." },
];

export default function HelpPage() {
  const [search, setSearch]       = useState("");
  const [category, setCategory]   = useState("All");
  const [openFaq, setOpenFaq]     = useState<number | null>(null);

  const filtered = ARTICLES.filter(a => {
    const matchCat = category === "All" || a.category === category;
    const matchSearch = !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const grouped = CATEGORIES.filter(c => c !== "All").reduce<Record<string, Article[]>>((acc, cat) => {
    const items = filtered.filter(a => a.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Help &amp; Support</h1>
        <p className="text-gray-500 mt-1 text-sm">Guides, FAQs, and ways to get in touch</p>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-lg">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search help articles…"
          className="w-full pl-9 pr-4 py-3 rounded-xl text-sm outline-none"
          style={{ border: "1.5px solid #e2e8f0" }}
          onFocus={e => (e.target.style.borderColor = "#2E6FFF")}
          onBlur={e  => (e.target.style.borderColor = "#e2e8f0")}
        />
      </div>

      {/* Contact cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { icon: "✉️", title: "Email Support", desc: "hello@ziprohtraining.co.uk", sub: "Response within 1 business day", href: "mailto:hello@ziprohtraining.co.uk", cta: "Send email" },
          { icon: "🌐", title: "Main Website", desc: "ziprohtraining.co.uk", sub: "Training, services & news", href: "https://ziprohtraining.co.uk", cta: "Visit site" },
          { icon: "📞", title: "Talk to us", desc: "Book a call with the team", sub: "Mon–Fri, 9am–5pm", href: "https://ziprohtraining.co.uk/contact/", cta: "Contact us" },
        ].map(card => (
          <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer"
            className="card hover:shadow-md transition-all group block text-left" style={{ textDecoration: "none" }}>
            <div className="text-2xl mb-3">{card.icon}</div>
            <div className="text-sm font-bold text-gray-900 group-hover:text-[#2E6FFF] transition-colors">{card.title}</div>
            <div className="text-xs font-medium text-[#2E6FFF] mt-0.5">{card.desc}</div>
            <div className="text-xs text-gray-400 mt-0.5 mb-3">{card.sub}</div>
            <span className="text-xs font-semibold text-[#2E6FFF]">{card.cta} →</span>
          </a>
        ))}
      </div>

      {/* Category filter */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => setCategory(c)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              backgroundColor: category === c ? "#2E6FFF" : "#f3f4f6",
              color: category === c ? "white" : "#6b7280",
            }}>
            {c}
          </button>
        ))}
      </div>

      {/* Articles */}
      {Object.keys(grouped).length > 0 ? (
        <div className="space-y-6 mb-10">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat}>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">{cat}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {items.map(article => (
                  <div key={article.id} className="card hover:shadow-md transition-all cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{article.icon}</span>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2E6FFF] transition-colors leading-snug">{article.title}</h3>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{article.summary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-gray-500 text-sm">No articles match your search.</p>
          <button onClick={() => { setSearch(""); setCategory("All"); }}
            className="btn-primary mt-4 text-sm">Clear search</button>
        </div>
      )}

      {/* FAQ */}
      {!search && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {FAQ.map((faq, i) => (
              <div key={i} className="card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="text-sm font-semibold text-gray-900">{faq.q}</span>
                  <span className="text-gray-400 flex-shrink-0 text-sm transition-transform"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
                </button>
                {openFaq === i && (
                  <p className="text-sm text-gray-600 mt-3 pt-3 leading-relaxed"
                    style={{ borderTop: "1px solid #f3f4f6" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
