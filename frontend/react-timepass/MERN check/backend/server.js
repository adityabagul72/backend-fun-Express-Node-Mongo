const express = require('express')
const app = express()
const userModel = require('./models/user')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('demo project cheking ')
})

app.post('/submit' ,async (req,res)=>{
    const {name,email,password } = req.body;
    const user = await userModel.create({
        name,
        email,
        password
    })
    res.send("data isnerted successfully")
})

app.listen(process.env.PORT || 3000 ,()=>{
    console.log(`server running on 3000`)
})