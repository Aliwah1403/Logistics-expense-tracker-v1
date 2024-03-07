const { addTransport } = require("../controllers/transportController");


const router = require("express").Router();

router
  .post('/add-transport', addTransport)

module.exports = router;
