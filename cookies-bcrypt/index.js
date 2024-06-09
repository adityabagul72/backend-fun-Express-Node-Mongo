const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.get('/', function (req, res) {
//   res.cookie("name","aditya")
//   res.send('Hello World')

// hash password 

// bcrypt.hash("aditya", 10, function(err, hash) {
//     console.log(hash)       // Store hash in your password DB.
// });

// check compare password 
bcrypt.compare("aditya","$2b$10$i/0eCl9AgFzVfYLMsUZBtuaHTZ0o21KAGWm82h1fN/jG0dT.uDcna", function(err, result) {
    // result == true
    console.log(result)
});
})

// app.get('/read',(req,res)=>{
//     res.send(req.cookies)
//     console.log(req.cookies)
// })

app.listen(3000)