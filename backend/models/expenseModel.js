const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    fuel: {
      type: Number,
      required: true,
      trim: true,
    },
    parking: {
      type: Number,
      trim: true,
    },
    clerkFee: {
      type: Number,
      required: true,
      trim: true,
    },
    milageFee: {
      type: Number,
      required: true,
      trim: true,
    },
    repairCost: [
      {
        cost: {
          type: Number,
          trim: true,
        },
        description: {
          type: String,
          trim: true,
        },
      },
    ],
    extraCosts: [
      {
        cost: {
          type: Number,
          trim: true,
        },
        description: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("expense", expenseSchema);
