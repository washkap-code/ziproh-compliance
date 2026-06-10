import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

// NOTE: stripe and supabase clients are created inside the handler so they
// are never instantiated during `next build` — only on real requests.

// Map Stripe subscription statuses onto the values allowed by the
// profiles.subscription_status CHECK constraint
// ('trialing' | 'active' | 'past_due' | 'canceled').
// Unmapped statuses (incomplete, unpaid, paused…) would otherwise make the
// UPDATE violate the constraint and fail silently.
function mapStripeStatus(status: string): "trialing" | "active" | "past_due" | "canceled" {
  switch (status) {
    case "trialing":   return "trialing";
    case "active":     return "active";
    case "past_due":
    case "unpaid":     return "past_due";
    case "canceled":
    case "incomplete":
    case "incomplete_expired":
    case "paused":     return "canceled";
    default:           return "past_due";
  }
}

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20",
  });

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const { userId, planId } = session.metadata ?? {};

      if (userId && planId) {
        // Read the real subscription status from Stripe — a completed paid
        // checkout must activate the account ("active"), not leave it on
        // "trialing" (which keeps trial watermarks on policy PDFs).
        let status: "trialing" | "active" | "past_due" | "canceled" = "active";
        if (session.subscription) {
          try {
            const sub = await stripe.subscriptions.retrieve(session.subscription as string);
            status = mapStripeStatus(sub.status);
          } catch {
            // fall back to "active" — checkout.session.completed implies payment succeeded
          }
        }
        await supabase.from("profiles").update({
          stripe_customer_id: session.customer as string,
          stripe_subscription_id: session.subscription as string,
          plan: planId,
          subscription_status: status,
        }).eq("id", userId);
      }
      break;
    }

    case "customer.subscription.updated": {
      const sub = event.data.object as Stripe.Subscription;
      const customerId = sub.customer as string;

      await supabase.from("profiles").update({
        subscription_status: mapStripeStatus(sub.status),
      }).eq("stripe_customer_id", customerId);
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const customerId = sub.customer as string;

      await supabase.from("profiles").update({
        subscription_status: "canceled",
        plan: "starter",
      }).eq("stripe_customer_id", customerId);
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const customerId = invoice.customer as string;

      await supabase.from("profiles").update({
        subscription_status: "past_due",
      }).eq("stripe_customer_id", customerId);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
