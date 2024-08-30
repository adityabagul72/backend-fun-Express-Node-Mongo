const joi = require('joi')

const  signUpValidation = (req,res,next) => {
    const schema = joi.object({
        username : joi.string().min(3).max(100).required(),
        email : joi.string().email().required(),
        password : joi.string().min(4).max(100).required()
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).
        json({message : "please check  all signup fields"})
    }
    next();
}

const loginValidation =  (req,res,next)=>{
    const schema = joi.object({
        email : joi.string().required().email(),
        password : joi.string().min(3).max(100).required()
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).
           json({message : "please check  all login fields"})
    }
    next()

} 

module.exports = {signUpValidation,loginValidation}