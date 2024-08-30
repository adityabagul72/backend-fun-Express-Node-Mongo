const mongoose = require("mongoose")
const monDbUri = process.env.monDbUri

mongoose.connect(monDbUri)
.then(() => console.log("connected"))
.catch((error) => console.log("error occured"))

const userSchema = mongoose.Schema({
    fullname : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("user", userSchema)