const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const keys = require("./config/credentials");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

mongoose
  .connect(keys.mongodb.MongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.secret],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("welcome", { user: req.user });
});

app.use("/auth", require("./routes/auth-routes"));
app.use("/profile", require("./routes/profile-routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started running on port ${PORT}.`));
