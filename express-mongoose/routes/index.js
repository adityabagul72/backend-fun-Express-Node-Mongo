var express = require('express');
var router = express.Router();
var userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'demo ' });
});

// create user 
router.get('/create-user',async function(req, res, next) {
  const userCreated = await userModel.create({
    name : "aditya",
    age : 20,
    phone : 9284858872
  })
  res.send(`user created ${userCreated}`)
});

// find user 
router.get('/get-users',async (req,res)=>{
    // const foundedUser = await userModel.find()
    const foundedUser = await userModel.findOne()
    res.send(foundedUser)
})

// delete user 
router.get('/delete',async (req,res)=>{
    let deleteduser = await userModel.findOneAndDelete({
      name : "aditya"
    })
    res.send(deleteduser)
})


module.exports = router;
