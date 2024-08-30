const { login, signup } = require('../controllers/auth.controller')
const { signUpValidation, loginValidation } = require('../middlewares/auth.validation')


const router = require('express').Router()

router.post('/signup',signUpValidation,signup)
router.post('/login',loginValidation,login)

module.exports = router