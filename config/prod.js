// prod.js -- production keys! don't commit this

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleSecretID: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
