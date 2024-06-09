var express = require('express');
var router = express.Router();
var userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create' ,async (req,res)=>{
  const createdUser = await userModel.create({
    username : "aditya",
    password : "1234@hajsd",
    phone : 92854478
  })
  res.send(createdUser)
})

router.get('/getUsers',async(req,res)=>{
   const getUsersDetails=  await userModel.find()
   res.send(getUsersDetails)
})

router.get('/deleteUser',async(req,res)=>{
  const getdeletedUser=  await userModel.findOneAndDelete({
    username : "aditya"
  })
  res.send(getdeletedUser)
})

router.get()


module.exports = router;
