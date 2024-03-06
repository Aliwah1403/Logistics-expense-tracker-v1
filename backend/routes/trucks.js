const { addTruck } = require("../controllers/truckController");

const router = require("express").Router();

router.post("/add-truck", addTruck);

module.exports = router;
