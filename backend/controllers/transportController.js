const transportSchema = require("../models/transportModel");

// adding transport to DB
exports.addTransport = async (req, res) => {
  const { type, registration, ownership } = req.body;

  const transport = transportSchema({
    type,
    registration,
    ownership,
  });

  try {
    // validations
    if (!type || !registration || !ownership) {
      return res.status(400).json({ message: "All field inputs are required" });
    }
    await transport.save();
    res.status(200).json({ messsage: "Transport added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.message);
  }
  console.log(transport);
};

// retreiving transport from DB
exports.getTransport = async (req, res) => {
  try {
    const transport = await transportSchema.find().sort({ createdAt: -1 });
    res.status(200).json(transport);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.log(error.messsage);
  }
};

// deleting transport from DB
exports.deleteTransport = async (req, res) => {
  const { id } = req.params;
  transportSchema
    .findByIdAndDelete(id)
    .then((transport) => {
      res.status(200).json({ message: "Deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server Error" });
      console.log(error.message);
    });
};
