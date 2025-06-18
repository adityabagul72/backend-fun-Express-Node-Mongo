const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const helmet = require('helmet')
const logger = require('./utils/logger')
const {RateLimiterRedis} = require('rate-limiter-flexible')
const Redis = require('ioredis')
const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    logger.info(`recieved ${req.method} request to ${req.url}`)
    logger.info(`recieved body , ${req.body}`)
    next()
})

const redisClient = new Redis(process.env.REDIS_URL)

// DDos Protection and rate limiting 
const ratelimiter = new RateLimiterRedis()

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        logger.info('✅ MongoDB connected successfully')
    } catch (err) {
        logger.warn("mongodb connection error")
    }
}
startServer().then(()=>{
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    logger.info(`🚀 Server is running on http://localhost:${PORT}`)
})
})



