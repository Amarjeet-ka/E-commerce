const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  sno: { type: Number, required: true },
  image: { type: String, required: false, unique: false },
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
});

const Gridimage = mongoose.model("Gridimage", userSchema);

module.exports = Gridimage;
