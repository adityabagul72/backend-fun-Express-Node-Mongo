const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'public')))

const userModel = require('./models/user')




app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000,function (){
    console.log(`server is running on ${PORT}`)
})