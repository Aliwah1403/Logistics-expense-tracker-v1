const mongoose = require("mongoose");

const transportSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
      maxLength: 10,
    },
    registration: {
      type: String,
      required: true,
      trim: true,
      maxLength: 10,
    },
    ownership: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("transport", transportSchema);
