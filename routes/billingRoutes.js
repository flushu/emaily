const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  // Added requireLogin to add an reference whenever post request called. don't requireLogin() because we are not running it on first loaded up. requireLogin is a middleware to check if user is logged in. request > middleware > http request (post, get, etc).
  // post, get, etc call takes arbitrary arguments so we can add more middlewares, but I have to end the call with return response to the request
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // if (!req.user) {
    //   return res.status(401).send({ error: "You must log in!" }); // returns error with status code 401
    // } <- was taken care by the middleware: requireLogin
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });
    req.user.credits += 5;
    const updatedUser = await req.user.save();

    res.send(updatedUser);
  });
};
