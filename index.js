const express = require("express"); // common js module for require; nodejs doesn't have es2015 which doesn't work for 'import express from 'express'; explains why use require

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express(); // creates an express app; setup implementations on work flow as middleware between http request and response

passport.use(new GoogleStrategy()); // passport.use: set up a provider
// need to get client id and secret

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// changes need to be done for pushing codes to heroku

const PORT = process.env.PORT || 5000; // if PORT is not defined on environment, use 5000.
app.listen(PORT);
