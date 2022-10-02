const mongoose = require("mongoose");

const devicesSchema = new mongoose.Schema({
  name: String,
  mac: String,
  ip: String,
  createdAt: { type: Date, default: Date.now() },
  power: Number,
});

module.exports = mongoose.model("devices", devicesSchema);
