const express = require("express"); // common js module for require; nodejs doesn't have es2015 which doesn't work for 'import express from 'express'; explains why use require

const app = express(); // creates an express app; setup implementations on work flow as middleware between http request and response

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000; // if PORT is not defined on environment, use 5000.
app.listen(PORT);
