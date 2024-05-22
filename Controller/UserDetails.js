const userModel = require("../Models/userModel")

async function UserDetails(req,res){
    try {
        const UserData = await userModel.findById(req.userId)
        res.status(200).json({
            data:UserData,
            success:true,
            error:false
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false,
            error:true
        })
    }
}
module.exports = UserDetails