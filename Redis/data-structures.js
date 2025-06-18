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

async function dataStructures() {
    try {
        await client.connect()
        console.log("redis connected")

        // LISTS 

        // await client.lPush('notes',['note 1','note 2','note 3'])
        // const extractAll = await client.lRange('notes',0,-1)
        // console.log(extractAll)

        // const lpop = await client.lPop('notes')
        // console.log(lpop)

        // console.log(extractAll)


        // SETS

        // await client.sAdd('user:nickName',['john','ramesh','varun'])

        // const extraCtedUname = await client.sMembers('user:nickName')
        // console.log(extraCtedUname)

        // const isVarun = await client.sIsMember('user:nickName','varun')
        // console.log(isVarun)

        // await client.sRem('user:nickName','john')
        // const extractedUname = await client.sMembers('user:nickName')
        // console.log(extractedUname)


        // sorted sets
        await client.zAdd('cart',[{
            score :100,
            value : 'item 1'
        },
        {
            score : 150,
            value : 'item 2'
        },
        {
            score : 10,
            value : 'item 3'
        },
    ])

    // const getCartItems = await client.zRange('cart',0,-1)
    // console.log(getCartItems)

    // const extractWithScores = await client.zRangeWithScores('cart',0,-1)
    // console.log(extractWithScores)

    // const cartZer0Rank = await client.zRank('cart',"item 2")
    // console.log(cartZer0Rank);


    // HASHES

    await client.hSet('product:1',{
        name : "Product 1 ",
        description : "product one description",
        rating : '5'
    })

    // const getProductDetails = await client.hGetAll("product:1")
    // console.log(getProductDetails)

    // const getProductRating = await client.hGet("product:1","rating")
    // console.log(getProductRating)

    await client.hDel('product:1','rating')
    const updatedProduct = await client.hGetAll("product:1")
    console.log(updatedProduct);
    

    

    } catch (error) {
        console.log("redis connection error", error)
    }
    finally {
        await client.quit()
    }
}
dataStructures()