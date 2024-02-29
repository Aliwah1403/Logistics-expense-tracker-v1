const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World Route works");
});

module.exports = router;
