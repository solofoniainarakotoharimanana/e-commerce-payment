const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const bodyParser = require("body-parser");
//const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const Stripe = require("stripe")(
  "sk_test_51OBBefGdJe0CaPtvCMUBL67jRzqewd1ybVHGIEtOzChYMJslmxzB7E8PF7sPjyEGz4983aaP4YVNecUSjVy1tQGe005vOhMDDi"
);
//console.log("test");

app.get("/", (req, res) => {
  res.send("Hello world !!!");
});

app.post("/pay", async (req, res) => {
  console.log(req.body.token);
  await Stripe.charges.create({
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  });
});

app.listen(8000, () => {
  console.log("Server is running on 8000");
});
