const userModel = require("../Models/userModel");

const Product_Upload_permission = async (userId) => {
  const user = await userModel.findById(userId);
  if (user.role !== "Admin") {
    return false;
  }
  return true;
};
module.exports = Product_Upload_permission;
