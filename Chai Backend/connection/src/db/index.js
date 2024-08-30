import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
import dotenv from  'dotenv'
dotenv.config()
 const connectDB = async  () => {
    try {
        const connectDb = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`mogodb connected host is : ${connectDb.connection.host}`)
    } catch (error) {
        console.log("ERROR: Mogodb CONNECTION FAILED !! " , error)
        process.exit(1);
    }
}

export default connectDB;