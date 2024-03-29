const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/incomeController");

const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-income", getIncomes)
  .delete("/delete-income/:id", deleteIncome);

module.exports = router;
