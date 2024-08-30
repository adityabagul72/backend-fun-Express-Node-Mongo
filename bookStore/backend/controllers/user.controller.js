const userModel = require('../models/user.model.js')
const bcrypt = require('bcrypt')

const signUp = async (req,res) =>{
    try {
        const{fullname,email,password } = req.body
        const existedUser = await userModel.findOne({email})
        if(existedUser){
            res.status(400).json({message:"User Already Existed !!"})
        }
        else{
            const hashPassword = await bcrypt.hash(password,10); 
            const createdUser = await userModel.create({
                fullname,
                email,
                password : hashPassword
            })
            res.status(200).json({message:"User Created Successfully .. ", user : createdUser})
        }
    } catch (error) {
        console.log("error occured" , error);
        res.status(400).json({ message : `Error Found While Creating User !!.${error}`})
    }
}

const login = async (req,res) => {
    try {
    const {email,password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        res.status(400).json({message:"User not found"})
    }
    await bcrypt.compare(password,user.password,function(err,result){
        if(result){
            res.status(200).json({message : "Login Successfully", User : user})
        }
        else{
            res.status(400).json({message:"you cannot login enter valid data.. ", })
        }
    })
    } catch (error) {
        console.log('error while logging in ', error)
    }
}

module.exports = {signUp,login};