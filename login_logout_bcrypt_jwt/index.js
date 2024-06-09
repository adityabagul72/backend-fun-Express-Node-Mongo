const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

app.set("view engine", "ejs")
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
    
})

app.post('/create',  (req, res) => {
    const { username, password, age, email } = req.body

     bcrypt.genSalt(10, function(err, salt){
         bcrypt.hash(password, salt, async function(err, hash) {
            const createdUser = await userModel.create({
                username,
                password:hash,
                age,
                email
            })
            const token = jwt.sign({email},"secret")
            res.cookie("token",token)
            // res.send(createdUser)
            res.redirect('/login')
        });
    });
})

app.get('/logout',(req,res)=>{
    res.cookie("token","")
    res.redirect('/')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',async (req,res)=>{
    const user = await userModel.findOne({email:req.body.email})
    if(!user) res.send("something went wrong ...").redirect('/login')

    bcrypt.compare(req.body.password,user.password,function(err,result){
        if(result) res.send("yees you can login ")
        else res.send("you cant login ")
    })

})



app.listen(3001, () => {
    console.log("Server is running on port 3000")
})