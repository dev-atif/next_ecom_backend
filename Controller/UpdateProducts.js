const ProductModel = require("../Models/ProductModel");
const Product_Upload_permission = require("../helper/UserPermission");

async function Update_Product(req, res) {
  try {
    if (!Product_Upload_permission(req.userId)) {
      throw new Error("Sorry Permission Denied");
    }
    const { _id, ...resBody } = req.body;
    const updateProduct = await ProductModel.findByIdAndUpdate(_id, resBody);
    res.status(200).json({
      message: "Product Update Successfully",
      success: true,
      error: false,
      data: updateProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
      success: false,
      error: true,
    });
  }
}
module.exports = Update_Product