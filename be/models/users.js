const { Schema, model } = require("mongoose");

const schema = new Schema({
  id: { type: String },
  name: { type: String },
  email: { type: String, required: true, unique: true },
  dateReg: { type: String },
  dateLog: { type: String },
  status: { type: Boolean },
});

module.exports = model("Users", schema);
