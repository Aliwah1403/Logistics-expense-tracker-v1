const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    rate: {
      type: Number,
      required: true,
      trim: true,
      maxLength: 20,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("income", incomeSchema);
