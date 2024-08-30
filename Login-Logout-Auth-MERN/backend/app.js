const express = require('express')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const bcrypt = require('bcrypt')
const cors = require('cors')


// Db Connect Import 
const {connectDb} = require('./db/connection.js')


//setting up view engine
app.set('view engine','ejs')

// importing required 
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// importing routes 
const authRouter = require('./routes/auth.router.js')
const productRouter = require('./routes/product.router.js')
//using routes
app.use('/auth',authRouter)
app.use('/products',productRouter)

app.get('/',(req,res)=>{
    res.send("First demo Page")
})

const PORT = process.env.PORT
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`)
    })
})
