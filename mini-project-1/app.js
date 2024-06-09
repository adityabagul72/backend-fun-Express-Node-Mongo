const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const path = require('path')
const userModel = require('./models/user')
const postModel = require('./models/post');
const user = require('./models/user');

app.set("view engine","ejs")

app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {
  res.render("index")
});

app.post('/create' , (req,res)=>{
    const {username,password,name,age,email} = req.body
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
            let createdUser = await userModel.create({
                username,
                password:hash,
                name,
                age,
                email
            })
            const token = jwt.sign({email:email,userid : user._id},"secret")
            res.cookie("token" , token)
            res.redirect("/login")
        })
    })
})

app.get('/logout',(req,res)=>{
    res.cookie("token","")
    res.redirect('/login')
})

app.get('/login',(req,res)=>{
    res.render("login")
})

app.post('/login',async (req,res)=>{
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user) return res.status(500).send("something went wrong ...")

    bcrypt.compare(password,user.password,(err,result)=>{
       
        const token = jwt.sign({email:email,userid : user._id},"secret")
        res.cookie("token" , token)
        if(result) {res.status(200).redirect('/profile')
        }
        else res.status(500).redirect("/login")
    })
})

app.post('/post', isLoggedIn, async (req, res) => {
    let { content } = req.body;
    let user = await userModel.findOne({ email: req.user.email });

    const post = await postModel.create({
        user: user._id,
        content
    });

    // Check if user.posts is defined
    if (!user.posts) {
        user.posts = [];
    }

    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile");
});

app.get('/profile', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.user.email }).populate('posts');
        res.render("profile", { user });
    } catch (error) {
        res.status(500).send("Error fetching user data");
    }
});
function isLoggedIn(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.status(401).redirect("/login");

    const data = jwt.verify(token, "secret");
    req.user = data;
    next()
}



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});