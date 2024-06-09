const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))
app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
const userModel = require('./models/user')

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/login',(req,res)=>{
    res.render('login')
})


app.post('/register',async(req,res)=>{   
    const {name,email,number,password} = req.body
        
    if(!name || !email ||!number ||!number){
            throw new Error("Please fill all fields properly..")
        }
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password,salt)
                const user = await userModel.create({
                    name,
                    email,
                    number,
                    password : hash
                })
                
                res.status(200).redirect('/login')
})

app.post('/login', async (req,res)=>{
    const user = await userModel.findOne({email:req.body.email})
    if(user){
       const result =  await bcrypt.compare(req.body.password,user.password)
            if(result){
                const token = jwt.sign({email:user.email},"secret")
                res.cookie("token",token)
                res.status(200).render('createUser')
            }
            else{
                res.redirect('/login')
            }
    }
})
//creating middlewares for proteccted routes ..
const verifyToken =(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        res.status(401).render('/login')
    }
    else{
        const verfied = jwt.verify(token,"secret")
        req.user = verfied
        next()
    }
}
const contactUserModel = require('./models/createContact')
app.post('/create-contact',async(req,res)=>{   
    const {name,email,number,password,age} = req.body
        const createdContact = await contactUserModel.create({
            name,
            email,
            number,
            password,
            email,
            age
        })
        res.redirect('/createUser')
})

app.get('/delete/:userid',async (req,res)=>{
    const userid = req.params.userid
    const deletedUser = await contactUserModel.findByIdAndDelete(userid)
    res.redirect('/displayUser')
})

app.get('/createUser',(req,res)=>{
    res.render('createUser')
})

app.get('/edit/:userid', verifyToken, async (req, res) => {
    try {
        const user = await contactUserModel.findById(req.params.userid);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.render('edit', { user });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).send("Internal Server Error");
    }
});




app.get('/displayUser',verifyToken,async (req,res)=>{
    const contactUser = await contactUserModel.find()
    res.render('displayUser',{contactUser})
})  

app.get('/logout',(req,res)=>{
    res.cookie("token","").redirect('/login')
})

app.listen(3000,()=>{
    console.log("server runnning... ")
})