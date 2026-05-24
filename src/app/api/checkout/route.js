import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const plans = {
  // -------------------------
  // ONE-TIME PACKAGES
  // -------------------------
  starter: {
    amount: 14900, // $149
    mode: "payment",
    name: "Starter Plan",
  },

  professional: {
    amount: 39900, // $399
    mode: "payment",
    name: "Professional Plan",
  },

  free: {
    amount: 100, // $1 (for testing)
    mode: "payment",
    name: "Free Trial",
  },

  ecommerce: {
    amount: 79900, // $799
    mode: "payment",
    name: "E-Commerce Boost",
  },

  // -------------------------
  // SUBSCRIPTIONS (MONTHLY)
  // -------------------------

  "seo-growth": {
    priceId: "price_xxxxxxxxxxxxx",
    mode: "subscription",
    name: "SEO Growth Plan",
    amount: 19900, // $199/mo (more competitive)
  },

  "meta-ads-pro": {
    priceId: "price_xxxxxxxxxxxxx",
    mode: "subscription",
    name: "Meta Ads Pro",
    amount: 24900, // $249/mo
  },

  "google-ads-expert": {
    priceId: "price_xxxxxxxxxxxxx",
    mode: "subscription",
    name: "Google Ads Expert",
    amount: 29900, // $299/mo
  },

  "business-management": {
    priceId: "price_xxxxxxxxxxxxx",
    mode: "subscription",
    name: "Business Management",
    amount: 39900, // $399/mo
  },

  "social-media-growth": {
    priceId: "price_xxxxxxxxxxxxx",
    mode: "subscription",
    name: "Social Media Growth",
    amount: 17900, // $179/mo (entry-level hook)
  },
};

export async function POST(req) {
  try {
    const body = await req.json()

    console.log("Incoming request:", body)

    const selectedPlan = plans[body.planId]

    if (!selectedPlan) {
      return Response.json(
        { error: "Invalid Plan ID" },
        { status: 400 }
      )
    }

    let sessionConfig = {
      payment_method_types: ["card"],
      mode: selectedPlan.mode,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    }

    // -----------------------------
    // ONE-TIME PAYMENT
    // -----------------------------
    if (selectedPlan.mode === "payment") {
      sessionConfig.line_items = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: selectedPlan.name,
            },
            unit_amount: selectedPlan.amount,
          },
          quantity: 1,
        },
      ]
    }

    // -----------------------------
    // SUBSCRIPTION (FIXED WAY)
    // -----------------------------
    if (selectedPlan.mode === "subscription") {
      sessionConfig.line_items = [
        {
          price: selectedPlan.priceId,
          quantity: 1,
        },
      ]
    }

    const session = await stripe.checkout.sessions.create(sessionConfig)

    return Response.json({
      url: session.url,
    })
  } catch (error) {
    console.error("Stripe Error:", error)

    return Response.json(
      { error: error.message },
      { status: 500 }
    )
  }
}