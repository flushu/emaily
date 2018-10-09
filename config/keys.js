// keys.js -- figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // process.env.NODE_ENV is defined by heroku
  // we are in production -- return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in development - return the dev set of keys
  module.exports = require("./dev");
}
