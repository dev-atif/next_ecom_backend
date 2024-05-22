const userModel = require("../Models/userModel");

async function UpdateUser(req, res) {
  try {
    const Session = req.userId;
    const { userId, email, name, role } = req.body;
    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    };
    const user = await userModel.findById(Session);
    console.log("user role", user.role);

    const UserUpdate = await userModel.findByIdAndUpdate(userId, payload);
    res.status(200).json({
      data: UserUpdate,
      message: "Update Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
}
module.exports = UpdateUser