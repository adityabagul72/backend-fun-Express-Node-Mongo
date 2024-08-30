const express = require("express")
const dotenv = require("dotenv")
const cors = require('cors')
dotenv.config()
const app = express()
const PORT = process.env.PORT || 4001
const userModel = require('./models/user.model.js')
const bookModel = require('./models/book.model.js')
const bookRoute = require('./route/bookRoute.js')
const userRoute = require('./route/user.route.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// defining routes 
app.use('/book',bookRoute)
app.use('/user',userRoute)

app.get('/',(req,res)=>{
    res.send("Working ")
})

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})