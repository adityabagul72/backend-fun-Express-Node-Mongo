const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/sy3")

const userSchema = mongoose.Schema({
    name: String,
    email : String,
    password : Number
})

module.exports = mongoose.model("user",userSchema)