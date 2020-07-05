const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(`You are logged in! This is ur profile: ${req.user.username}`);
});

module.exports = router;