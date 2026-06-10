/**
 * /verify/[ref] — Public certificate verification registry
 *
 * Scanned from the QR code on every Ziproh training certificate.
 * Looks up the certificate reference in the public certificate_registry
 * view and confirms (or denies) that the certificate is genuine.
 * No login required — this page is intentionally public.
 */

import Link from "next/link";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

type RegistryRow = {
  certificate_ref: string;
  training_name: string;
  module_id: string | null;
  provider: string;
  completed_at: string;
  learner_name: string;
  org_name: string;
};

async function lookupCertificate(ref: string): Promise<RegistryRow | null> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } }
  );
  const { data } = await supabase
    .from("certificate_registry")
    .select("*")
    .eq("certificate_ref", ref)
    .maybeSingle();
  return (data as RegistryRow | null) ?? null;
}

export default async function VerifyPage({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = await params;
  const decodedRef = decodeURIComponent(ref);
  const cert = await lookupCertificate(decodedRef);

  const formattedDate = cert
    ? new Date(cert.completed_at).toLocaleDateString("en-GB", {
        day: "numeric", month: "long", year: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12" style={{ backgroundColor: "#f8faff" }}>
      {/* Brand header */}
      <Link href="/" className="mb-8">
        <Image src="/ziproh-logo.png" alt="Ziproh" width={140} height={42} style={{ objectFit: "contain" }} />
      </Link>

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
        {cert ? (
          <>
            {/* Verified banner */}
            <div className="px-6 py-5 flex items-center gap-3" style={{ backgroundColor: "#D1FAE5" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0" style={{ backgroundColor: "#10B981" }}>
                ✓
              </div>
              <div>
                <div className="text-base font-bold" style={{ color: "#064E3B" }}>Certificate verified</div>
                <div className="text-xs" style={{ color: "#065F46" }}>
                  This certificate is genuine and is recorded in the Ziproh Training registry.
                </div>
              </div>
            </div>

            {/* Certificate details */}
            <div className="px-6 py-6 space-y-4">
              <Detail label="Certificate ID" value={cert.certificate_ref} mono />
              <Detail label="Awarded to"     value={cert.learner_name} />
              <Detail label="Organisation"   value={cert.org_name} />
              <Detail label="Training"       value={cert.training_name} />
              <Detail label="Completed on"   value={formattedDate ?? cert.completed_at} />
              <Detail label="Issued by"      value={cert.provider} />
            </div>
          </>
        ) : (
          <>
            {/* Not found banner */}
            <div className="px-6 py-5 flex items-center gap-3" style={{ backgroundColor: "#FEE2E2" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0" style={{ backgroundColor: "#DC2626" }}>
                ✕
              </div>
              <div>
                <div className="text-base font-bold" style={{ color: "#7F1D1D" }}>Certificate not found</div>
                <div className="text-xs" style={{ color: "#991B1B" }}>
                  No certificate with this reference exists in the Ziproh Training registry.
                </div>
              </div>
            </div>

            <div className="px-6 py-6 space-y-3">
              <Detail label="Reference checked" value={decodedRef} mono />
              <p className="text-sm text-gray-500 leading-relaxed">
                If you believe this certificate should be valid, the reference may have been
                mistyped, or the certificate may have been issued outside the Ziproh platform.
                Contact{" "}
                <a href="mailto:hello@ziprohtraining.co.uk" className="text-blue-500 hover:underline">
                  hello@ziprohtraining.co.uk
                </a>{" "}
                with a copy of the certificate and we will investigate.
              </p>
            </div>
          </>
        )}
      </div>

      <p className="mt-6 text-xs text-gray-400 text-center max-w-md leading-relaxed">
        Ziproh Training Ltd issues CPD training certificates through the Ziproh Compliance platform.
        Every genuine certificate carries a unique reference and QR code linking to this registry.
      </p>
    </div>
  );
}

function Detail({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 pb-3" style={{ borderBottom: "1px solid #f3f4f6" }}>
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-0.5 flex-shrink-0">{label}</span>
      <span className={`text-sm font-semibold text-gray-900 text-right ${mono ? "font-mono" : ""}`}>{value}</span>
    </div>
  );
}
