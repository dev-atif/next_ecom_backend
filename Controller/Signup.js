const bcrypt = require("bcrypt");
const userModel = require("../Models/userModel");
async function userSignup(req, res) {
  try {
    const { email, name, password } = req.body;

    if (!email) {
      throw new Error("Please Provide Email");
    }
    if (!name) {
      throw new Error("please Provide Name");
    }
    if (!password) {
      throw new Error("Please Provide Password");
    }
    ///////////////////////Bycrpt Password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("There is something issue in hasing");
    }
    ///Store all req data in a single const

    const payload = {
      ...req.body,
      password: hashPassword,
    };
    //Check if user is already exists or not
    const user = await userModel.findOne({ email });
    if (user) {
      throw new Error("User is Already Exists");
    }
    //Get and Save data to Mongo Db
    const userData = new userModel(payload);
    const saveUser = await userData.save();
    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message , // Extract the error message from the error object
      error: true,
      success: false,
    });
  }
}
module.exports = userSignup;
