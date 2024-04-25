const express = require("express");

const routes = express.Router();
const userSignup = require("../Controller/Signup");
const UserSignin = require("../Controller/Signin");
const AuthToken = require("../middleware/AuthToken");
const UserDetails = require("../Controller/UserDetails");

routes.post("/signup", userSignup);
routes.post("/sign-in", UserSignin);
routes.get("/user", AuthToken, UserDetails);
module.exports = routes;
