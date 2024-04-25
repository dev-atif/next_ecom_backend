async function AuthToken(req,res,next){
try {
    
    const token = req.cookies?.token || req.header
    console.log(token)
} catch (error) {
    res.status(400).json({
        message:error.message,
        success:false,
        data:[],
        error:true
    })
}
}
module.exports = AuthToken