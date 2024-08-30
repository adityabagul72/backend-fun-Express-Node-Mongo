const product = (req,res)=>{
    console.log("-----Logged In User Details ------",req.user)
    res.status(200).json([
        {
            id:1,
            name : "product1"
        },
        {
            id:2,
            name : "product2"
        },
        {
            id:3,
            name : "product3"
        }
    ])
}
module.exports={product}