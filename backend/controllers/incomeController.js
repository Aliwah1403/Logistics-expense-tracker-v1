const incomeSchema = require("../models/incomeModel");

// adding income to DB
exports.addIncome = async (req, res) => {
  const { destination, rate, date } = req.body;

  const income = incomeSchema({
    destination,
    rate,
    date,
  });

  try {
    // invalidations
    if (!destination || !rate || !date) {
      return res.status(400).json({ message: "All field inputs required" });
    }
    await income.save();
    res.status(200).json({ message: "Income added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.message);
  }

  console.log(income);
};

// retrieve incomes from DB
exports.getIncomes = async (req, res) => {
  try {
    const income = await incomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.message)
  }
};

// deleting incomes from DB
exports.deleteIncome = async(req,res)=>{
    const {id} = req.params
    incomeSchema.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({message: 'Income deleted successfully'})
    })
    .catch((error)=>{
        res.status(500).json({message: 'Server Error'})
        console.log(error.message)
    })
}