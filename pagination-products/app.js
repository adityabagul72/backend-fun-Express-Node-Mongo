const express =require('express')
const app = express()

//  import db connectiton 
const {dbConnect} = require('./config/connection')

app.use(express.json()) 
app.use(express.urlencoded({extended:true}))

// importing routes

const productRoute = require('./routes/product.routes.js')
app.use('/',productRoute)

//setting up ejs 
app.set('view engine','ejs')

app.get('/',function (req,res){
    res.send("Working server ")
})

dbConnect()
.then(()=>{
    app.listen(3000,function (){
        console.log("Server working")
    })
})
.catch((error)=> console.log("Error while creating DB "))



