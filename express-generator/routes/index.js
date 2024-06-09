var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { name: 'aditya' });
});

router.get('/about',(req,res)=> {
  res.send("Hellow from about page")
})

module.exports = router;
