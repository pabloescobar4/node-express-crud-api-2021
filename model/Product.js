const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id:Number,
  author:String,
  book_name:String,
  pages:Number,
  published_year:Number
});

module.exports = mongoose.model("Product", productSchema);
