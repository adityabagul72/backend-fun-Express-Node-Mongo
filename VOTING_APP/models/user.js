require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const userShcema = mongoose.Schema({
    name : {
        type : String,
        reuired : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
    },
    mobile : {
        type : String,
    },
    address:{
        type : String,
        required : true,
    },
    adharCardNumber:{
        type:Number,
        required : true,
        unique:true
    },
    password : {
        required : true,
        type : String
    },

    role:{
        type : String,
        enum : ["voter","admin"],
        default :"voter"
    },
    isVoted : {
        type:Boolean,
        default : false
    }

})

module.exports = mongoose.model("User",userShcema)