const express = require("express"); // require is a common js module; nodejs doesn't have es2015 which doesn't work for 'import express from 'express'; explains why use require
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session"); // give access to cookie
const passport = require("passport");
const bodyParser = require("body-parser"); // express Middleware
require("./models/User");
require("./services/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express(); // creates an express app; setup implementations on work flow as middleware between http request and response

app.use(bodyParser.json());

/**
 * enabling cookie inside of the app; it's like wiring a middleware (a small funcation that can use to modify incoming request to my app before send off to route handler)
 */
app.use(
  // maxAge: how long
  // keys: encrypt cookiej
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

/**
 * middlewares
 */
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app); //calling billing routes

// order of operation: express will load up client/build first and then sendFile(index.html) when client request route that are not defined by express
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets like our main.js, main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file if it doesn't recognize the route.
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000; // if PORT is not defined on environment, use 5000.
app.listen(PORT);
