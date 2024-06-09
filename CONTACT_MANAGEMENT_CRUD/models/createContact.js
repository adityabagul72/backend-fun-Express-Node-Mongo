const mongoose = require('mongoose')

const contactUserSchema = mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    email : {
        type:String,
        required : true
    },
    password : {
        type:String,
        required : true
    },
    number : {
        type:Number,
        required : true
    },
    age : {
        type:Number,
        required : true
    },

})
module.exports = mongoose.model('contactUser',contactUserSchema)
