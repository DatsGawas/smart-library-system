const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  emailId: string,
  firstName: string,
  lastName: string,
  phoneNo: number,
  address: string,
  password: string,
  conformPassword: string,
  gender: string
});

module.exports = mongoose.model("user", userSchema, "users");
