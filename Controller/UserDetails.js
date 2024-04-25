async function UserDetails(req,res){
    try {
        
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false,
            error:true
        })
    }
}
module.exports = UserDetails