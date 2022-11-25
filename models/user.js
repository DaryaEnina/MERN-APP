const { Schema, model } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  dateReg: { type: String },
  dateLog: { type: String },
  status: { type: Boolean },
});

module.exports = model("User", schema);
