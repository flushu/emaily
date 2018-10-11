/**
 * This file is to attach proxy between react app and express for communcation with http request.
 * This proxy won't be used when in production!! Referance: Lecture 56
 * This file prevents CORS error to go around security flaw
 * This file makes Cookie work when dev mode because there are two servers: react app and express api app
 */
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/google", { target: "http://localhost:5000" }));
};
