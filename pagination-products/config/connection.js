const mongoose = require('mongoose')

const dbConnect = async() =>{
    try {
        const connetion = await mongoose.connect('mongodb://localhost:27017/paginationCartDB')
        console.log("Db Connected Successfully ")
    } catch (error) {
        console.log(error)
    }
}

module.exports= {dbConnect}