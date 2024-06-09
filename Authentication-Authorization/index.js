const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser")
const path = require('path')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const userModel = require('./models/user')

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', function (req, res) {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            const userCreated = await userModel.create({
                username,
                email,
                password: hash,
                age
        })
            const token = jwt.sign({email},"secret")
            res.cookie("token",token)
            res.redirect('/')
        })
    })
})

app.get('/login' , (req,res)=> {
    res.render('login')
})

app.post('/login' , async (req,res)=> {
  const user =  await userModel.findOne({email : req.body.email})
  if(!user) return res.send("something went wrong ")

  bcrypt.compare(req.body.password , user.password,function (err,result){
    console.log(result)
    if (result) res.send('login successful')
    else res.send("you cannot login ")
})
})

app.get('/logout' ,(req,res)=> {
    res.cookie("token","")
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});