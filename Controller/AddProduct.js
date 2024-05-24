const ProductModel = require("../Models/ProductModel");
const Product_Upload_permission = require("../helper/UserPermission");

async function AddProduct(req, res) {
  try {
    if (!Product_Upload_permission(req.userId)) {
      throw new Error("Sorry Permission Denied");
    }

    const uploadproduct = new ProductModel(req.body);
    const SaveProduct = await uploadproduct.save();
    res.status(200).json({
      success: true,
      error: false,
      data: SaveProduct,
      message: "Product Add Successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error,
      success: false,
    });
  }
}
module.exports = AddProduct;
