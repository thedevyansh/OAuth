const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const google = require("./credentials");

passport.use(
  new GoogleStrategy(
    {
      clientID: google.clientID,
      clientSecret: google.clientSecret,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, cb) => {
      // Handle the data sent by Google Auth
    }
  )
);
