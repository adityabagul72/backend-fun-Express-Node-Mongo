const express = require('express')
const app = express()

const redis = require('redis')
const client = redis.createClient({
    host: 'locahost',
    port: 6379,

})

// event listener for redis connection
client.on('error', (error) => {
    console.log("redis client errror", error)
})

async function connectRedis() {
    try {
        await client.connect()
        console.log("redis connected")

        // set a key in redis
        await client.set("name","aditya")
        
        // get the key from redis
        const value =await client.get("name");
        console.log(value)

        // delete the key from redis
        const del = await client.del("name")
        console.log(del)

        const extractedValue  = await client.get("name")
        console.log(extractedValue)



    } catch (error) {
        console.log("redis connection error", error)
    }
    finally {
        await client.quit()
    }
}
// connectRedis()
