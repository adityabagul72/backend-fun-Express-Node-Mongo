var mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/demo")

// create schema means create documents structure 
var userSchema = mongoose.Schema({
  name : String,
  age : Number,
  phone : Number
})

module.exports = mongoose.model("users",userSchema)