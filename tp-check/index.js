const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

app.use(cookieParser())

app.get('/', (req, res) => {
  res.send("success-full")
  bcrypt.compare('aditya', "$2b$10$D9Q6QEvpBYXzCG0Tv1q6xeoChCSKLZCtN0gY/lha2pgATrxeXsGNO", function(err, result) {
  console.log(result)
});

});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});