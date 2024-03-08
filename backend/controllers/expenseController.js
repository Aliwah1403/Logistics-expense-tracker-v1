const expenseSchema = require("../models/expenseModel");

// adding expense to DB
exports.addExpense = async (req, res) => {
  const { fuel, parking, clerkFee, milageFee, repairCost, extraCosts } =
    req.body;

  const expense = expenseSchema({
    fuel,
    parking,
    clerkFee,
    milageFee,
    repairCost,
    extraCosts,
  });

  try {
    // invalidations
    if (!fuel || !clerkFee || !milageFee) {
      return res.status(400).json({
        message: "Fuel price, Clerk fee and Milage fee need to be added",
      });
    }
    await expense.save();
    res.status(200).json({ message: "Expenses added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.message);
  }

  console.log(expense);
};

// getting expenses from DB
exports.getExpenses = async (req, res) => {
  try {
    const expense = await expenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.message);
  }
};

// deleting expenses from DB
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  expenseSchema
    .findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server Error" });
      console.log(error.message);
    });
};
