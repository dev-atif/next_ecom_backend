const express = require("express");

const routes = express.Router();
const userSignup = require("../Controller/Signup");
const UserSignin = require("../Controller/Signin");
const AuthToken = require("../middleware/AuthToken");
const UserDetails = require("../Controller/UserDetails");
const LogOut = require("../Controller/LogOut");
const ALlusers = require("../Controller/AllUsers");
const UpdateUser = require("../Controller/UpdateUser");
const AddProduct = require("../Controller/AddProduct");
const Get_all_product = require("../Controller/GetAllProducts");
const Update_Product = require("../Controller/UpdateProducts");

routes.post("/signup", userSignup);
routes.post("/sign-in", UserSignin);
routes.get("/user", AuthToken, UserDetails);
routes.get("/userlogout", LogOut);
//All USer Details Api
routes.get("/allusers", AuthToken, ALlusers);
//Update User Details
routes.post("/update-user", AuthToken, UpdateUser);
//Add Product details
routes.post("/Addproduct", AuthToken, AddProduct);
//Get All products
routes.get("/Allproduct", Get_all_product);
//Update Product
routes.post("/updateproduct", AuthToken, Update_Product);
module.exports = routes;
