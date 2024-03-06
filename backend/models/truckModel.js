const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
  numberPlate: {
    type: String,
    required: true,
    trim: true,
    maxLength: 10,
  },
  isOwned: {
    type: String,
    required: true,
    trim: true,
  },
}, {timestamps: true});

module.exports = mongoose.model('truck', truckSchema);