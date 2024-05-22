async function LogOut (req,res){
 try {
    res.cookie('token', '', {
        expires: new Date(0),
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        path: '/'
    });
    res.json({
        message: "Logout Successfully",
        data: [],
        success: true,
        error: false
    });
    
 } catch (error) {
    res.json({
        message:error,
        success:false,
        error:true
    })
 }
}
module.exports = LogOut