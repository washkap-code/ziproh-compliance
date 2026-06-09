import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Ziproh Compliance Centre",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8faff" }}>

      {/* Nav */}
      <nav className="bg-white border-b" style={{ borderColor: "#e2e8f0" }}>
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image src="/ziproh-logo.png" alt="Ziproh" width={110} height={32} style={{ objectFit: "contain" }} />
          </Link>
          <Link href="/login" className="btn-primary text-sm py-2">Sign In</Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-14">
        <div className="card prose-sm" style={{ lineHeight: "1.8" }}>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Privacy Policy</h1>
          <p className="text-xs text-gray-400 mb-8">Last updated: 1 June 2026</p>

          <Section title="1. Who We Are">
            <p>Ziproh Training Ltd (&ldquo;Ziproh&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the Ziproh Compliance Centre at <strong>app.ziprohtraining.co.uk</strong> and the marketing website at <strong>ziprohtraining.co.uk</strong>. We are registered in England and Wales. Our registered address is available on request at <a href="mailto:hello@ziprohtraining.co.uk" className="text-[#2E6FFF] underline">hello@ziprohtraining.co.uk</a>.</p>
            <p>We are the data controller for the personal data you provide to us when using our services.</p>
          </Section>

          <Section title="2. What Data We Collect">
            <p>We collect the following categories of personal data:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>Account data:</strong> your name, email address, organisation name, service type, and regulator.</li>
              <li><strong>Usage data:</strong> pages visited, features used, and session timestamps, collected to improve the platform.</li>
              <li><strong>Billing data:</strong> payment method details processed securely by Stripe. We do not store card numbers.</li>
              <li><strong>Communications:</strong> emails and support messages you send to us.</li>
            </ul>
            <p>We do not collect sensitive or special-category data (e.g. health records of service users). Ziproh is a compliance management tool — the content of policies belongs to you.</p>
          </Section>

          <Section title="3. How We Use Your Data">
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Provide, operate, and improve the Ziproh platform.</li>
              <li>Process payments and manage your subscription.</li>
              <li>Send transactional emails (account confirmation, password reset, billing receipts).</li>
              <li>Send service updates and product announcements (you can unsubscribe at any time).</li>
              <li>Respond to support enquiries.</li>
              <li>Meet our legal and regulatory obligations.</li>
            </ul>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>We process your personal data under the following legal bases (UK GDPR Article 6):</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>Contract:</strong> processing necessary to provide the service you signed up for.</li>
              <li><strong>Legitimate interests:</strong> improving the platform, preventing fraud, and communicating service updates.</li>
              <li><strong>Legal obligation:</strong> compliance with applicable law.</li>
              <li><strong>Consent:</strong> marketing communications (you may withdraw consent at any time).</li>
            </ul>
          </Section>

          <Section title="5. Data Sharing">
            <p>We share personal data only with trusted third-party processors who are contractually bound to protect it:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>Supabase</strong> (database and authentication) — hosted on AWS EU-West.</li>
              <li><strong>Stripe</strong> (payment processing) — PCI-DSS Level 1 certified.</li>
              <li><strong>Vercel</strong> (platform hosting) — EU data residency configured.</li>
            </ul>
            <p>We do not sell your personal data to any third party.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain account data for as long as your account is active and for up to 12 months after cancellation, in case of reactivation. Billing records are retained for 7 years to meet HMRC requirements. You may request earlier deletion at any time (see Your Rights below).</p>
          </Section>

          <Section title="7. Your Rights">
            <p>Under UK GDPR you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Access the personal data we hold about you.</li>
              <li>Rectify inaccurate or incomplete data.</li>
              <li>Erase your data (&ldquo;right to be forgotten&rdquo;).</li>
              <li>Restrict or object to certain processing.</li>
              <li>Data portability — receive your data in a machine-readable format.</li>
              <li>Withdraw consent at any time where processing is consent-based.</li>
            </ul>
            <p>To exercise any right, email <a href="mailto:hello@ziprohtraining.co.uk" className="text-[#2E6FFF] underline">hello@ziprohtraining.co.uk</a>. We will respond within 30 days. You also have the right to lodge a complaint with the <strong>Information Commissioner&apos;s Office (ICO)</strong> at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2E6FFF] underline">ico.org.uk</a>.</p>
          </Section>

          <Section title="8. Cookies">
            <p>The Ziproh app uses only essential cookies required for authentication (session tokens). We do not use tracking or advertising cookies. The marketing website (ziprohtraining.co.uk) may use analytics cookies — please see the cookie notice on that site.</p>
          </Section>

          <Section title="9. Security">
            <p>All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Access to production data is restricted to authorised personnel only. We conduct regular security reviews.</p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>We may update this policy from time to time. Material changes will be notified by email to all account holders. Continued use of the platform after the effective date constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="11. Contact Us">
            <p>For any privacy-related questions: <a href="mailto:hello@ziprohtraining.co.uk" className="text-[#2E6FFF] underline">hello@ziprohtraining.co.uk</a></p>
          </Section>
        </div>

        <div className="flex gap-4 mt-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-800">← Home</Link>
          <Link href="/terms" className="text-gray-500 hover:text-gray-800">Terms of Service →</Link>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-base font-bold text-gray-900 mb-3 pb-2" style={{ borderBottom: "1px solid #f3f4f6" }}>
        {title}
      </h2>
      <div className="text-sm text-gray-600 space-y-3">{children}</div>
    </section>
  );
}
