/* const Jwt = require("jsonwebtoken");
async function AuthToken(req, res, next) {
  try {
    const token = req.cookies?.token || req.headers;
   
    if (!token) {
      res.status(400).json({
        message: "user is not login",
        success: false,
        error: true,
      });
    }
    Jwt.verify(token,process.env.JWT_SECRET_TOKEN,function (err, decoded) {
     if(err){
        console.log("AuthMiddleware Error",err)
     }
     req.userId = decoded?._id
     next();
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      data: [],
      error: true,
    });
  }
}
module.exports = AuthToken;
 */
const Jwt = require("jsonwebtoken");

async function AuthToken(req, res, next) {
  try {
    let token;

    // Check if the token is in cookies
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    } else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
      // Extract token from Authorization header
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(400).json({
        message: "User is not logged in",
        success: false,
        error: true,
      });
    }

    Jwt.verify(token, process.env.JWT_SECRET_TOKEN, function (err, decoded) {
      if (err) {
        console.log("AuthMiddleware Error", err);
        return res.status(401).json({
          message: "Unauthorized",
          success: false,
          error: true,
        });
      }
      req.userId = decoded._id;
      next();
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
      data: [],
      error: true,
    });
  }
}

module.exports = AuthToken;
