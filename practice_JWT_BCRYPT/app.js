const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(cookieParser())

app.get('/' , function (req,res){
    // checking jwt 
    var token =  jwt.sign({email : "baguladitya66@gmail.com"} , "secret")
    res.cookie("token" , token)
    res.send("working")
})

app.get('/verify' ,function (req,res){
    var verified = jwt.verify(req.cookies.token, "secret")
    console.log(verified)
})


// app.get('/' ,(req,res)=>{
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("aditya", salt, function(err, hash) {
//             console.log(hash)
//         });
//     });
//     res.send("done")
// })

// app.get('/read',(req,res)=>{
//     bcrypt.compare("aditya", "$2b$10$2hEr1qk3NPgrDLn4X8/6bupGZHFMGKNOJBc/tUvPnpZtBLuSHih9a", function(err, result) {
//         console.log(result)
//         res.send("working")
//     });
// })

app.listen(3000,()=> {
    console.log("server is runnig")
})