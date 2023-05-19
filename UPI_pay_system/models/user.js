const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    message_id:{
        type:String,
        required:true,
        unique:1
    },
    amount:{
        type:String,
        required:true,
    },
    transation_id:{
        type:String,
        required:true
    }
})


const User = mongoose.model('User',userSchema)

module.exports = User
