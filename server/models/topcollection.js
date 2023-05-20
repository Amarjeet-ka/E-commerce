const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  sno: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true, unique: true },
  name: { type: String, required: false },
  description: { type: String },
  category: { type: String },
});

const Topcollection = mongoose.model("Topcollection", userSchema);

module.exports = Topcollection;
