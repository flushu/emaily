const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    // done returns the passport process is done
    (accessToken, refreshToken, profile, done) => {
      // returns a promise
      User.findOne({
        id: profile.id
      }).then(existingUser => {
        // if record wasn't found, existingUser is null
        if (existingUser) {
          // we already have a record with the given profile ID
          done(null, existingUser); //frist argument is any error
        } else {
          // we don't have a user record with this ID, make a new record.
          new User({
            id: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
); // passport.use: set up a provider
// need to get client id and secret
