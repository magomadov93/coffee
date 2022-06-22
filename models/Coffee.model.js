const mongoose = require("mongoose");

const coffeeSchema = mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  coffeine: Boolean,
  size: Number,
  description: String,
});

const Coffee = mongoose.model("Coffee", coffeeSchema);


module.exports = Coffee;
