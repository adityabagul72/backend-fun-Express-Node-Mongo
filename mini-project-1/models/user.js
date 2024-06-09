const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/mini-project1")

const userSchema = mongoose.Schema({
    username : String,
    name : String,
    age : Number,
    email : String,
    password : String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] // Define the posts field

})

module.exports = mongoose.model("user",userSchema)