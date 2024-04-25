const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

async function UserSignin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Please Provide Email");
    }
    if (!password) {
      throw new Error("Please Provide Password");
    }
    //Fetch user from DataBase
    const User = await userModel.findOne({ email });
    //Check if user exsists or Not
    if (!User) {
      throw new Error("User Doesnt Exists Please Create Account");
    }
    /////////////Dehashing Password
    const Dhased_password = bcrypt.compareSync(password, User.password);
    ///Check D hased True or not
    if (Dhased_password) {
      const tokenData = {
        _id: User._id,
        email: User.email,
      };
      //Json Web Token Create Below
      const token = await Jwt.sign(tokenData, process.env.JWT_SECRET_TOKEN, {
        expiresIn: 60 * 60 * 8,
      });
      //Token Options
      tokenOption = {
        httponly: true,
        secure: true,
      };
      //Set token to cookies and send as a responce
      res.cookie("token", token,tokenOption).status(200).json({
        message: "Login Successfully",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Password is incorrect! Try Again");
    }
   
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
}

module.exports = UserSignin;
