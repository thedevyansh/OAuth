const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("welcome");
});

app.use("/auth", require("./routes/auth-routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started running on port ${PORT}.`));
