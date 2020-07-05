const router = require("express").Router();
const passport = require("passport");
const passportSetup = require("../config/passport-setup");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  // Handle with Passport
  res.send("Logging out");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("You have reached the callback URI");
});

module.exports = router;
