const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    LastName:String,
    number: String,
    email: {
        type:String,
        unique:true,
        required:true
    },
    password: String,
    profileImage:String,
},{
    timestamps:true
})

const userModel = mongoose.model('user',userSchema)
module.exports = userModel