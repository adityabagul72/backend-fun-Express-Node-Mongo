import  connectDB  from './db/index.js'
import app from './app.js'

const PORT = process.env.PORT || 4000 
// connection to DB
connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at PORT : ${PORT}`)
    })
})
.catch((error)=>{
    console.log("error occured while connecting to db ")
})
