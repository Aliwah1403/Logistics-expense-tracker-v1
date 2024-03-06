const {
  addTruck,
  getTrucks,
  deleteTruck,
} = require("../controllers/truckController");

const router = require("express").Router();

router
  .post("/add-truck", addTruck)
  .get("/get-trucks", getTrucks)
  .delete("/delete-truck/:id", deleteTruck);

module.exports = router;
