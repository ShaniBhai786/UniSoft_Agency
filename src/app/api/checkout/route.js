import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const plans = {
  // -------------------------
  // ONE-TIME PACKAGES
  // -------------------------
  free: {
    amount: 100,
    mode: "payment",
    name: "Free Plan",
  },

  starter: {
    amount: 14900,
    mode: "payment",
    name: "Starter Plan",
  },

  professional: {
    amount: 39900,
    mode: "payment",
    name: "Professional Plan",
  },

  enterprise: {
    amount: 89900,
    mode: "payment",
    name: "Enterprise Plan",
  },

  ecommerce: {
    amount: 79900,
    mode: "payment",
    name: "E-Commerce Boost",
  },

  // -------------------------
  // SUBSCRIPTIONS (FIXED)
  // -------------------------

  seogrowth: {
    priceId: "price_1Taaw2GuPNLWj41S9LIsasUb",
    mode: "subscription",
    name: "SEO Growth Plan",
  },

  metaadspro: {
    priceId: "price_XXXXXXXXXXXXXXXX",
    mode: "subscription",
    name: "Meta Ads Pro",
  },

  googleadsexpert: {
    priceId: "price_XXXXXXXXXXXXXXXX",
    mode: "subscription",
    name: "Google Ads Expert",
  },

  businessmanagement: {
    priceId: "price_XXXXXXXXXXXXXXXX",
    mode: "subscription",
    name: "Business Management",
  },

  socialmediagrowth: {
    priceId: "price_XXXXXXXXXXXXXXXX",
    mode: "subscription",
    name: "Social Media Growth",
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