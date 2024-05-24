const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    Product_Name: String,
    Details: String,
    Price: String,
    Sale_price: String,
    Category: String,
    Product_Image: [],
  },
  { timestamps: true }
);

const ProductModel = mongoose.model('Products',ProductSchema)
module.exports = ProductModel