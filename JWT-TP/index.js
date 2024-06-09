const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

app.use(cookieParser())

app.get('/', (req, res) => {
    // encrypting data with sign jwt 
    const token = jwt.sign({email : 'baguladitya66@gmail.com'},"secret")
    res.cookie("token" , token)
    res.send('Setting and Reading cookies with jwt encrypting data');
});

app.get('/read', (req, res) => {
    // console.log(req.cookies.token)
    //decrypting data
    const data = jwt.verify(req.cookies.token,"secret")
    console.log(data)
    res.send("Done")
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});