const express = require("express"); // require is a common js module; nodejs doesn't have es2015 which doesn't work for 'import express from 'express'; explains why use require
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express(); // creates an express app; setup implementations on work flow as middleware between http request and response
require("./routes/authRoutes")(app);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// changes need to be done for pushing codes to heroku

const PORT = process.env.PORT || 5000; // if PORT is not defined on environment, use 5000.
app.listen(PORT);
