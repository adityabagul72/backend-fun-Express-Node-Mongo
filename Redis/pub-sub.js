const redis = require('redis')

const client = redis.createClient({
    host: "localhost",
    port: 6379
})

client.on("error", (error) => {
    console.log("redis client error occured ", error)
})

async function testAdditionalFeatures() {
    try {
        await client.connect()

        const subscriber = client.duplicate()   
        await subscriber.connect()  

        await subscriber.subscribe('dummy-channel',(message,channel)=>{
            console.log(`recieved message  from ${channel}:${message}`)
        })

        await client.publish('dummy-channel','Some dummy data from publisher')
        await client.publish('dummy-channel','Some new message again from pulisher')

        await new Promise((resolve) => setTimeout(resolve,1000))

        await subscriber.unsubscribe('dummy-channel')
        await subscriber.quit()

        

    } catch (error) {
    } finally {
        client.quit()
    }
}

testAdditionalFeatures()