const mongoose = require("mongoose");

const adminUsersSchema = new mongoose.Schema({
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("adminUsers", adminUsersSchema);
//tranh ghi de lai adminUsers khi file model nay bi chay lai, cau truc cua next khac voi node, nen model bi ghi de
