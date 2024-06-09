const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine' , 'ejs')
app.use(cookieParser())

const userModel = require('./models/user')
const postModel = require('./models/post')


app.get('/',function (req,res){
    res.render('index')
})


app.post('/create',async function(req,res){
    const {username,name,email,password,age,} = req.body
    const user = await userModel.findOne({email})
    if(user) return res.send('something went wrong ')

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async  (err,hash)=>{
            const user = await userModel.create({
                username,
                name,
                email,
                password:hash,
                age
            })
            const token = jwt.sign({userid : user._id, email : email},"secret")
            res.cookie("token",token)
            res.redirect('/login')
        })  
    })
})

app.post('/login',async function(req,res){
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user) return res.send('something went wrong')

    bcrypt.compare(password,user.password,(err,result)=>{
        if(result){
            const token = jwt.sign({userid : user._id, email : email},"secret")
            res.cookie("token",token)
            res.status(200).redirect("/profile")
        }
        else{
            res.status(501).redirect('/login')
        }

    })  
})

app.get('/profile',isLoggedIn,async function (req,res){
    const user = await userModel.findOne({email:req.user.email}).populate('posts')
    res.render('profile',{user})
    
})

app.post('/post',isLoggedIn,async function (req,res){
    const {content} = req.body
    const user = await userModel.findOne({email:req.user.email})
    const post = await postModel.create({
            user :user._id,
            content
        })
        await user.posts.push(post._id)
        user.save()
        res.redirect('/profile')
})

app.get('/login',function (req,res){
    res.render('login')
})
app.get('/logout',(req,res)=>{
    res.cookie("token","")
    res.redirect('/login')
})

function isLoggedIn(req,res,next){
    const token = req.cookies.token;
    if(token === ''){
        res.status(400).send("please login properly")
    }
    else{
        const data = jwt.verify(token,"secret")
        req.user = data;
        next()
    }
}




app.listen(3000)