const express = require("express");
const Stripe = require("stripe");
const stripe = Stripe(
  "pk_test_51Pl79EJsvhlE6wo7snitvai6hiDMOVciIjQyIp7R0aAgVhBAcBpYorZZWLuhpfWh7w9yUudw8aXFZQFzwP4rjobY00wiJiIz6p"
);

const app = express();
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Amount in cents
      currency: "usd",
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
