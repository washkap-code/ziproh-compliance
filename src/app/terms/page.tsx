import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service | Ziproh Compliance Centre",
};

export default function TermsPage() {
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
        <div className="card" style={{ lineHeight: "1.8" }}>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Terms of Service</h1>
          <p className="text-xs text-gray-400 mb-8">Last updated: 1 June 2026</p>

          <Section title="1. Agreement to Terms">
            <p>By accessing or using the Ziproh Compliance Centre (&ldquo;the Service&rdquo;) at <strong>app.ziprohtraining.co.uk</strong>, you agree to be bound by these Terms of Service. If you do not agree, you must not use the Service.</p>
            <p>The Service is operated by <strong>Ziproh Training Ltd</strong>, registered in England and Wales. References to &ldquo;Ziproh&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo; refer to Ziproh Training Ltd.</p>
          </Section>

          <Section title="2. The Service">
            <p>Ziproh provides a compliance management platform for UK health and social care providers, including:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>A library of auto-updated policies and procedures.</li>
              <li>Audit and self-assessment tools.</li>
              <li>Staff reading list management.</li>
              <li>eLearning and training resources.</li>
              <li>AI-assisted compliance support.</li>
            </ul>
            <p>The Service is intended to support your compliance activities. It does not constitute legal advice. You remain responsible for ensuring your organisation meets all applicable regulatory requirements.</p>
          </Section>

          <Section title="3. Accounts">
            <p>You must register for an account to access the Service. You agree to:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Provide accurate, current, and complete information during registration.</li>
              <li>Keep your password confidential and not share login credentials.</li>
              <li>Notify us immediately at <a href="mailto:hello@ziprohtraining.co.uk" className="text-[#2E6FFF] underline">hello@ziprohtraining.co.uk</a> if you suspect unauthorised access.</li>
              <li>Be responsible for all activity that occurs under your account.</li>
            </ul>
            <p>Each account is licensed to a single organisation. Users you invite must be employed by or contracted to your organisation.</p>
          </Section>

          <Section title="4. Subscriptions and Payment">
            <p>Access to the Service is provided on a paid subscription basis following a free trial period. By subscribing you authorise Ziproh to charge your payment method on a recurring monthly basis.</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li><strong>Free trial:</strong> 14 days. No charge until the trial ends.</li>
              <li><strong>Cancellation:</strong> you may cancel at any time. Access continues until the end of the current billing period. No refunds are issued for partial months.</li>
              <li><strong>Price changes:</strong> we will give 30 days&apos; notice of any price increase.</li>
              <li><strong>Taxes:</strong> prices are exclusive of VAT where applicable.</li>
            </ul>
            <p>Payments are processed by Stripe. By providing payment details you also agree to Stripe&apos;s terms of service.</p>
          </Section>

          <Section title="5. Acceptable Use">
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Use the Service for any unlawful purpose or in breach of any regulation.</li>
              <li>Share, resell, or sublicense access to the Service to third parties outside your organisation.</li>
              <li>Attempt to reverse-engineer, copy, or scrape content from the platform.</li>
              <li>Upload malicious code, spam, or content that infringes third-party rights.</li>
              <li>Attempt to gain unauthorised access to other accounts or Ziproh&apos;s systems.</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts that breach these terms without notice.</p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>All platform content — including policies, procedures, templates, and software — is owned by or licensed to Ziproh Training Ltd and protected by copyright. You are granted a non-exclusive, non-transferable licence to use the content solely for your organisation&apos;s internal compliance purposes.</p>
            <p>You retain ownership of any documents you upload to the Service.</p>
          </Section>

          <Section title="7. Disclaimer of Warranties">
            <p>The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. While we take care to keep policies accurate and up to date, we do not warrant that the Service will be error-free, uninterrupted, or that policy content will be complete or current at all times. Policy content is provided for guidance only and does not constitute legal or regulatory advice.</p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>To the maximum extent permitted by law, Ziproh&apos;s total liability to you in connection with the Service shall not exceed the fees paid by you in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential losses including loss of business, data, or profits.</p>
            <p>Nothing in these terms limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.</p>
          </Section>

          <Section title="9. Termination">
            <p>We may suspend or terminate your access to the Service at any time if you breach these terms, fail to pay fees, or if we discontinue the Service with 30 days&apos; notice. On termination, your right to use the Service ceases. You may request an export of your data within 30 days of termination.</p>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>We may update these terms from time to time. Material changes will be communicated by email with at least 14 days&apos; notice. Your continued use of the Service after the effective date constitutes acceptance.</p>
          </Section>

          <Section title="11. Governing Law">
            <p>These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </Section>

          <Section title="12. Contact">
            <p>For any questions about these terms: <a href="mailto:hello@ziprohtraining.co.uk" className="text-[#2E6FFF] underline">hello@ziprohtraining.co.uk</a></p>
          </Section>
        </div>

        <div className="flex gap-4 mt-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-800">← Home</Link>
          <Link href="/privacy" className="text-gray-500 hover:text-gray-800">Privacy Policy →</Link>
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
