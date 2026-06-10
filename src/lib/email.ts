/**
 * email.ts
 * ─────────
 * Transactional email via Resend.
 *
 * Required env: RESEND_API_KEY
 * Optional env: EMAIL_FROM (defaults to notifications@ziprohtraining.co.uk —
 *               the domain must be verified in the Resend dashboard first)
 */

import { Resend } from "resend";

const FROM =
  process.env.EMAIL_FROM ?? "Ziproh Compliance <notifications@ziprohtraining.co.uk>";

const BRAND = "#2E6FFF";
const DARK  = "#0A1629";

function baseTemplate(title: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f7ff;font-family:Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7ff;padding:32px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
        <tr>
          <td style="background:${DARK};border-radius:14px 14px 0 0;padding:22px 32px;">
            <span style="color:#ffffff;font-size:16px;font-weight:bold;letter-spacing:2px;">ZIPROH</span>
            <span style="color:#7a8db0;font-size:11px;letter-spacing:1px;"> &nbsp;COMPLIANCE PLATFORM</span>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:32px;border:1px solid #e2e8f0;border-top:none;">
            <h1 style="margin:0 0 16px 0;font-size:19px;color:${DARK};">${title}</h1>
            ${bodyHtml}
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;border-radius:0 0 14px 14px;border:1px solid #e2e8f0;border-top:1px solid #f3f4f6;padding:18px 32px;">
            <p style="margin:0;font-size:11px;color:#9CA3AF;line-height:1.6;">
              Ziproh Training Ltd · app.ziprohtraining.co.uk<br>
              You received this email because you have a Ziproh Compliance account.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export type PolicyUpdateEmailInput = {
  to: string;
  firstName: string | null;
  policyTitle: string;
  policyId: string;
  changeSummary?: string | null;
};

/**
 * Send "policy updated" notifications in batches via Resend.
 * Returns counts of sent/failed. Throws only if RESEND_API_KEY is missing.
 */
export async function sendPolicyUpdateEmails(
  recipients: PolicyUpdateEmailInput[]
): Promise<{ sent: number; failed: number }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  const resend = new Resend(apiKey);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://app.ziprohtraining.co.uk";

  let sent = 0;
  let failed = 0;

  // Resend batch API accepts up to 100 messages per call
  const BATCH = 80;
  for (let i = 0; i < recipients.length; i += BATCH) {
    const slice = recipients.slice(i, i + BATCH);
    const payload = slice.map((r) => ({
      from: FROM,
      to: r.to,
      subject: `Policy updated: ${r.policyTitle}`,
      html: baseTemplate(
        "A policy you use has been updated",
        `<p style="font-size:14px;color:#374151;line-height:1.7;margin:0 0 14px 0;">
           Hi ${r.firstName ?? "there"},
         </p>
         <p style="font-size:14px;color:#374151;line-height:1.7;margin:0 0 14px 0;">
           <strong>${r.policyTitle}</strong> (${r.policyId.toUpperCase()}) has been updated
           on the Ziproh Compliance platform.${r.changeSummary ? ` Summary of changes: ${r.changeSummary}` : ""}
         </p>
         <p style="font-size:14px;color:#374151;line-height:1.7;margin:0 0 22px 0;">
           Please log in to review the changes and re-adopt the policy so your
           organisation's records stay inspection-ready.
         </p>
         <a href="${siteUrl}/compliance/${r.policyId}"
            style="display:inline-block;background:${BRAND};color:#ffffff;text-decoration:none;
                   font-size:14px;font-weight:bold;padding:12px 22px;border-radius:10px;">
           Review the updated policy →
         </a>`
      ),
    }));

    try {
      const { error } = await resend.batch.send(payload);
      if (error) {
        failed += slice.length;
      } else {
        sent += slice.length;
      }
    } catch {
      failed += slice.length;
    }
  }

  return { sent, failed };
}
