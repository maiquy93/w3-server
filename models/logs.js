const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const logsSchema = new mongoose.Schema({
  id: String,
  name: String,
  action: String,
  createdAt: { type: Date, default: Date.now() },
});

logsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("logs", logsSchema);
