import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  try {
    // ── Verify auth ────────────────────────────────────────────────────────────
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return cookieStore.getAll(); },
          setAll() { /* read-only */ },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
    }

    // ── Get Stripe customer ID from profile ────────────────────────────────────
    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single();

    const stripeCustomerId = profile?.stripe_customer_id;

    if (!stripeCustomerId) {
      return NextResponse.json(
        { error: "No billing account found. Please contact hello@ziprohtraining.co.uk." },
        { status: 404 }
      );
    }

    // ── Create portal session ──────────────────────────────────────────────────
    const { returnUrl } = await req.json().catch(() => ({}));
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: returnUrl ?? `${process.env.NEXT_PUBLIC_APP_URL ?? "https://app.ziprohtraining.co.uk"}/account`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe portal error:", error);
    return NextResponse.json(
      { error: "Unable to open billing portal. Please contact hello@ziprohtraining.co.uk." },
      { status: 500 }
    );
  }
}
