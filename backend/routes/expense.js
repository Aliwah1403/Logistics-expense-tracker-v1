const { addExpense, getExpenses, deleteExpense } = require("../controllers/expenseController");

const router = require("express").Router();

router.post("/add-expense", addExpense)
.get("/get-expense", getExpenses)
.delete('/delete-expense/:id', deleteExpense)

module.exports = router;
