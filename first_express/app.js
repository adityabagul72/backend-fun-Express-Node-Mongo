const { name } = require('ejs')
const express = require('express')
const app = express()

// app.use((req,res,next)=>{
//     console.log("nana")
//     next()
// })

app.set("view engine","ejs")       // set template engine ejs  # npm i ejs

// using  middleware for using static files
app.use(express.static('./public')) // by default inside public folder 

app.get("/",(req,res)=>{
    res.render("index",{age : 19 , name: "aditya"})     // use render while loading html file dont mention ejs 
})



app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/error",(req,res,next)=>{
    throw Error("Something went wrong !!>>")
})

// error handler
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  }
)

app.listen(3000)

