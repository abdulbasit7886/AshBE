const express = require("express");
const Email = require("./email");
const Stripe = require("./stripe");
var cors = require("cors");

require("stripe");
require("dotenv").config();

const app = express();
app.use(express.json());
let corsOptions = {
  origin: "*",
};
app.use(cors());

const port = process.env.PORT;
app.get("/", async (req, res) => {
  try {
    res.send("Server running successfully cors");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post("/myEmail", Email.email);
app.post("/create-payment-intent", Stripe.stripe);

app.listen(port, () => console.log(`Server running on port ${port}`));
