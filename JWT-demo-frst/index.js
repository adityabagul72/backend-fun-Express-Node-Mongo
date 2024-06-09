const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    const token = jwt.sign({email: "aditya@gmail.com"},"demosecret")
    res.cookie("token",token)
    console.log(token)
    res.send('done');
});

app.get('/read', (req, res) => {
    const data = jwt.verify(req.cookies.token, "demosecret")
    console.log(data)
    res.send('cookie printed');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
