const {
  addTransport,
  getTransport,
  deleteTransport,
} = require("../controllers/transportController");

const router = require("express").Router();

router
  .post("/add-transport", addTransport)
  .get("/get-transport", getTransport)
  .delete("/delete-transport/:id", deleteTransport);

module.exports = router;
