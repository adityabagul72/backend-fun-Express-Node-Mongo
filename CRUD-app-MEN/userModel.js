const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mongo-crud')

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    age : Number
})

module.exports = mongoose.model('user',userSchema)