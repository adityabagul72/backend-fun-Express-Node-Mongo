const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/sy4")

const userSchema = mongoose.Schema({
  username : String,
  password : String,
  phone : Number
})

module.exports = mongoose.model("teachers",userSchema)