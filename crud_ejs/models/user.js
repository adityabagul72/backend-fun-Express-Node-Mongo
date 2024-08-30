const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/crud-ejs')
.then(()=>{
    console.log("Connected to DB")
})
.catch((error)=>{
    console.log(error)
})

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    image : String
})

module.exports = mongoose.model("user",userSchema)