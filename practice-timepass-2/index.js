const express = require('express')
const app = express()
const path = require('path')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public')) // path for public

app.get("/" , (req,res)=>{
    res.render("index")
})

app.get("/register/:username/:age",(req,res)=>{
    const name = req.params.username
    const age = req.params.age
    res.send(`welcome ${name} your age is : ${age}`)
})

app.listen(3000,()=>{
    console.log("server started")
})