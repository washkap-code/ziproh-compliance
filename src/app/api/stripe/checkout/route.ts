import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

// Map plan IDs to Stripe Price IDs (set these in your Stripe dashboard)
const PRICE_MAP: Record<string, { monthly: string; annual: string }> = {
  starter: {
    monthly: process.env.STRIPE_STARTER_MONTHLY_PRICE_ID!,
    annual: process.env.STRIPE_STARTER_ANNUAL_PRICE_ID!,
  },
  professional: {
    monthly: process.env.STRIPE_PRO_MONTHLY_PRICE_ID!,
    annual: process.env.STRIPE_PRO_ANNUAL_PRICE_ID!,
  },
  enterprise: {
    monthly: process.env.STRIPE_ENTERPRISE_MONTHLY_PRICE_ID!,
    annual: process.env.STRIPE_ENTERPRISE_ANNUAL_PRICE_ID!,
  },
};

export async function POST(req: Request) {
  try {
    const { planId, billing, customerEmail, userId, orgName } = await req.json();

    const prices = PRICE_MAP[planId];
    if (!prices) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const priceId = billing === "annual" ? prices.annual : prices.monthly;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: customerEmail,
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        trial_period_days: 14,
        metadata: { userId, orgName, planId },
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?subscription=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
      metadata: { userId, planId },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
