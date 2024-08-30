const mongoose = require('mongoose')

const connectDb = async ()=>{
  
    const connection = await mongoose.connect(`${process.env.MOGO_DB_URL}`)
    .then(()=>{
        console.log("Db Connected Successfully .. ")
    })
    .catch((error)=>{
        console.log("something error occured ")
    })
}
module.exports= {connectDb}