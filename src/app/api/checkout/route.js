// import Stripe from "stripe"

// const stripe = new Stripe(process.env.STRIPE_PUBLIC_KEY)

// const plans = {
//   starter: {
//     amount: 29900,
//     mode: "payment",
//     name: "Starter Plan",
//   },

//   professional: {
//     amount: 79900,
//     mode: "payment",
//     name: "Professional Plan",
//   },

//   enterprise: {
//     amount: 149900,
//     mode: "payment",
//     name: "Enterprise Plan",
//   },

//   "seo-growth": {
//     amount: 39900,
//     mode: "subscription",
//     name: "SEO Growth Plan",
//   },

//   "meta-ads-pro": {
//     amount: 49900,
//     mode: "subscription",
//     name: "Meta Ads Pro",
//   },

//   "google-ads-expert": {
//     amount: 59900,
//     mode: "subscription",
//     name: "Google Ads Expert",
//   },

//   "business-management": {
//     amount: 89900,
//     mode: "subscription",
//     name: "Business Management",
//   },

//   "social-media-growth": {
//     amount: 34900,
//     mode: "subscription",
//     name: "Social Media Growth",
//   },

//   "ecommerce-boost": {
//     amount: 99900,
//     mode: "payment",
//     name: "E-Commerce Boost",
//   },
// }

// export async function POST(req) {
//   try {
//     const body = await req.json()

//     const selectedPlan = plans[body.planId]

//     if (!selectedPlan) {
//       return Response.json(
//         { error: "Invalid Plan" },
//         { status: 400 }
//       )
//     }

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],

//       mode: selectedPlan.mode,

//       line_items: [
//         {
//           price_data: {
//             currency: "usd",

//             product_data: {
//               name: selectedPlan.name,
//             },

//             unit_amount: selectedPlan.amount,

//             recurring:
//               selectedPlan.mode === "subscription"
//                 ? { interval: "month" }
//                 : undefined,
//           },

//           quantity: 1,
//         },
//       ],

//       success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
//       cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
//     })

//     return Response.json({
//       url: session.url,
//     })
//   } catch (error) {
//     return Response.json(
//       { error: error.message },
//       { status: 500 }
//     )
//   }
// }