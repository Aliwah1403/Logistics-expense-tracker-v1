const truckSchema = require("../models/truckModel");

// adding trucks to DB
exports.addTruck = async (req, res) => {
  const { numberPlate, isOwned } = req.body;
  const truck = truckSchema({
    numberPlate,
    isOwned,
  });

  try {
    // valiadtions
    if (!numberPlate || !isOwned) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await truck.save();
    res.status(200).json({ message: "Truck Added" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
    console.log(err.message);
  }

  console.log(truck);
};

// retrieving trucks from DB
exports.getTrucks = async (req, res) => {
  try {
    const trucks = await truckSchema.find().sort({ createdAt: -1 });
    res.status(200).json(trucks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.message);
  }
};

// deleting trucks from DB
exports.deleteTruck = async (req, res) => {
  const { id } = req.params;
  truckSchema
    .findByIdAndDelete(id)
    .then((truck) => {
      res.status(200).json({ message: "Truck deleted successfully" });
    })
    .catch((error) => [res.status(500).json({ message: "Server Error" })]);
};
