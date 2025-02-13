const express = require('express')
const app =express()
const dotenv = require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

app.use(express.json())

let output =''
app.post('/api/generate-content', async (req,res)=>{
    const {prompt} = req.body
    if(!prompt) {
        res.status(400).json({message:"Prompt is required"})
    }
    try {
        const result = await model.generateContent(prompt);
        output=result.response.text()
        res.status(201).json({message:"prompt send plz wait .."})
    } catch (error) {
        res.status(400).send({message:error})
    }
})

app.get('/api/get-content',async (req,res)=>{
    if(!output) res.status(400)
    res.send(output)
})

app.listen(3000,()=>{
    console.log("server started at 3000")
})


