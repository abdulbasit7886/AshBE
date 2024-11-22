const Stripe = require("stripe");

exports.stripe = async (req, res) => {
  const stripeKey = Stripe(process.env.STRIPE_KEY);
  try {
    const paymentIntent = await stripeKey.paymentIntents.create({
      amount: req.body.amount * 100,
      currency: "usd",
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
