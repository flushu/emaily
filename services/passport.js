const passport = require("passport"); // user a cookie session
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

// serialize user when producing a piece of information to identify a user.
passport.serializeUser((user, done) => {
  /**
   * {
   *    "__id": {
   *      "$oid:": "characters"
   *    },
   *    "googleId": "series of characters",
   * }
   */
  console.log("serialize user", user);
  done(null, user.id); // user.id is id as mongodb identifier for a user model record
});

/**
 * Deserialize user
 */
passport.deserializeUser((id, done) => {
  // mongodb.findOne({__id: id})
  User.findById(mongoose.Types.ObjectId(id), (err, user) => {
    console.log("deserialize user", user);
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true // enable heroku proxy
    },
    // done returns the passport process is done
    async (accessToken, refreshToken, profile, done) => {
      // returns a promise
      const existingUser = await User.findOne({
        googleId: profile.id
      });
      // if record wasn't found, existingUser is null
      if (existingUser) {
        // we already have a record with the given profile ID
        return done(null, existingUser); //frist argument is any error
      }
      // we don't have a user record with this ID, make a new record.
      // second promise after .save()
      const user = await new User({
        googleId: profile.id
      }).save();
      done(null, user);
    }
  )
); // passport.use: set up a provider
// need to get client id and secret
