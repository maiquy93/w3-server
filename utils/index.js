const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://maiquy93:bonghong@cluster0.ueqnvjq.mongodb.net/tiktok-clone-dev",
      {
        useNewUrlparser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect successfully");
  } catch (error) {
    // throw new Error("Connect failed");
    console.log("Connect failed");
  }
}

module.exports = { connect };
