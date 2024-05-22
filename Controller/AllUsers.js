const userModel = require("../Models/userModel")

async function ALlusers (req,res){
    
  
    try {
  
        const data = await userModel.find()
        res.status(200).json({
            success:true,
            data: data,
            error:false
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false,
            error: true,
          });
    }
}
module.exports = ALlusers