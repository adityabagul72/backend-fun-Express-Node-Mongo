const express = require('express')
const app = express()
const user = require('./userModel')

app.get('/' , (req,res)=>{
    res.send('Hello World')
})

app.get('/create',async (req,res)=>{
    const createdUser = await user.create({
    name : "ishan",
    email : "ishanw@gmail.com",
    age : 20
    },
    {
    name : "rutvik don",
    email : "rutvk123@gmail.com",
    age : 20
    }
    
)
    res.send(createdUser)
})

app.get('/getuser' , async (req,res)=>{
    const getUser = await user.find()
    res.send(getUser)
})

app.get('/updateuser' , async (req,res)=>{
    const updatedUser = await user.findOneAndUpdate({name : "aditya"},{name :"yash"},{new : true})
    res.send(updatedUser)
})

app.get('/deleteuser' ,async (req,res)=> {
    const deleteuser = await user.deleteMany({name : "yash"})
    res.send(deleteuser)
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})