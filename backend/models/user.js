const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  emailId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  conformPassword: { type: String, required: true },
  gender: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
